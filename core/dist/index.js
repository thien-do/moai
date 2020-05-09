import React from 'react';

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(undefined, (function () {
  /**
   * Applies the :focus-visible polyfill at the given scope.
   * A scope in this case is either the top-level Document or a Shadow Root.
   *
   * @param {(Document|ShadowRoot)} scope
   * @see https://github.com/WICG/focus-visible
   */
  function applyFocusVisiblePolyfill(scope) {
    var hadKeyboardEvent = true;
    var hadFocusVisibleRecently = false;
    var hadFocusVisibleRecentlyTimeout = null;

    var inputTypesWhitelist = {
      text: true,
      search: true,
      url: true,
      tel: true,
      email: true,
      password: true,
      number: true,
      date: true,
      month: true,
      week: true,
      time: true,
      datetime: true,
      'datetime-local': true
    };

    /**
     * Helper function for legacy browsers and iframes which sometimes focus
     * elements like document, body, and non-interactive SVG.
     * @param {Element} el
     */
    function isValidFocusTarget(el) {
      if (
        el &&
        el !== document &&
        el.nodeName !== 'HTML' &&
        el.nodeName !== 'BODY' &&
        'classList' in el &&
        'contains' in el.classList
      ) {
        return true;
      }
      return false;
    }

    /**
     * Computes whether the given element should automatically trigger the
     * `focus-visible` class being added, i.e. whether it should always match
     * `:focus-visible` when focused.
     * @param {Element} el
     * @return {boolean}
     */
    function focusTriggersKeyboardModality(el) {
      var type = el.type;
      var tagName = el.tagName;

      if (tagName === 'INPUT' && inputTypesWhitelist[type] && !el.readOnly) {
        return true;
      }

      if (tagName === 'TEXTAREA' && !el.readOnly) {
        return true;
      }

      if (el.isContentEditable) {
        return true;
      }

      return false;
    }

    /**
     * Add the `focus-visible` class to the given element if it was not added by
     * the author.
     * @param {Element} el
     */
    function addFocusVisibleClass(el) {
      if (el.classList.contains('focus-visible')) {
        return;
      }
      el.classList.add('focus-visible');
      el.setAttribute('data-focus-visible-added', '');
    }

    /**
     * Remove the `focus-visible` class from the given element if it was not
     * originally added by the author.
     * @param {Element} el
     */
    function removeFocusVisibleClass(el) {
      if (!el.hasAttribute('data-focus-visible-added')) {
        return;
      }
      el.classList.remove('focus-visible');
      el.removeAttribute('data-focus-visible-added');
    }

    /**
     * If the most recent user interaction was via the keyboard;
     * and the key press did not include a meta, alt/option, or control key;
     * then the modality is keyboard. Otherwise, the modality is not keyboard.
     * Apply `focus-visible` to any current active element and keep track
     * of our keyboard modality state with `hadKeyboardEvent`.
     * @param {KeyboardEvent} e
     */
    function onKeyDown(e) {
      if (e.metaKey || e.altKey || e.ctrlKey) {
        return;
      }

      if (isValidFocusTarget(scope.activeElement)) {
        addFocusVisibleClass(scope.activeElement);
      }

      hadKeyboardEvent = true;
    }

    /**
     * If at any point a user clicks with a pointing device, ensure that we change
     * the modality away from keyboard.
     * This avoids the situation where a user presses a key on an already focused
     * element, and then clicks on a different element, focusing it with a
     * pointing device, while we still think we're in keyboard modality.
     * @param {Event} e
     */
    function onPointerDown(e) {
      hadKeyboardEvent = false;
    }

    /**
     * On `focus`, add the `focus-visible` class to the target if:
     * - the target received focus as a result of keyboard navigation, or
     * - the event target is an element that will likely require interaction
     *   via the keyboard (e.g. a text box)
     * @param {Event} e
     */
    function onFocus(e) {
      // Prevent IE from focusing the document or HTML element.
      if (!isValidFocusTarget(e.target)) {
        return;
      }

      if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
        addFocusVisibleClass(e.target);
      }
    }

    /**
     * On `blur`, remove the `focus-visible` class from the target.
     * @param {Event} e
     */
    function onBlur(e) {
      if (!isValidFocusTarget(e.target)) {
        return;
      }

      if (
        e.target.classList.contains('focus-visible') ||
        e.target.hasAttribute('data-focus-visible-added')
      ) {
        // To detect a tab/window switch, we look for a blur event followed
        // rapidly by a visibility change.
        // If we don't see a visibility change within 100ms, it's probably a
        // regular focus change.
        hadFocusVisibleRecently = true;
        window.clearTimeout(hadFocusVisibleRecentlyTimeout);
        hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
          hadFocusVisibleRecently = false;
        }, 100);
        removeFocusVisibleClass(e.target);
      }
    }

    /**
     * If the user changes tabs, keep track of whether or not the previously
     * focused element had .focus-visible.
     * @param {Event} e
     */
    function onVisibilityChange(e) {
      if (document.visibilityState === 'hidden') {
        // If the tab becomes active again, the browser will handle calling focus
        // on the element (Safari actually calls it twice).
        // If this tab change caused a blur on an element with focus-visible,
        // re-apply the class when the user switches back to the tab.
        if (hadFocusVisibleRecently) {
          hadKeyboardEvent = true;
        }
        addInitialPointerMoveListeners();
      }
    }

    /**
     * Add a group of listeners to detect usage of any pointing devices.
     * These listeners will be added when the polyfill first loads, and anytime
     * the window is blurred, so that they are active when the window regains
     * focus.
     */
    function addInitialPointerMoveListeners() {
      document.addEventListener('mousemove', onInitialPointerMove);
      document.addEventListener('mousedown', onInitialPointerMove);
      document.addEventListener('mouseup', onInitialPointerMove);
      document.addEventListener('pointermove', onInitialPointerMove);
      document.addEventListener('pointerdown', onInitialPointerMove);
      document.addEventListener('pointerup', onInitialPointerMove);
      document.addEventListener('touchmove', onInitialPointerMove);
      document.addEventListener('touchstart', onInitialPointerMove);
      document.addEventListener('touchend', onInitialPointerMove);
    }

    function removeInitialPointerMoveListeners() {
      document.removeEventListener('mousemove', onInitialPointerMove);
      document.removeEventListener('mousedown', onInitialPointerMove);
      document.removeEventListener('mouseup', onInitialPointerMove);
      document.removeEventListener('pointermove', onInitialPointerMove);
      document.removeEventListener('pointerdown', onInitialPointerMove);
      document.removeEventListener('pointerup', onInitialPointerMove);
      document.removeEventListener('touchmove', onInitialPointerMove);
      document.removeEventListener('touchstart', onInitialPointerMove);
      document.removeEventListener('touchend', onInitialPointerMove);
    }

    /**
     * When the polfyill first loads, assume the user is in keyboard modality.
     * If any event is received from a pointing device (e.g. mouse, pointer,
     * touch), turn off keyboard modality.
     * This accounts for situations where focus enters the page from the URL bar.
     * @param {Event} e
     */
    function onInitialPointerMove(e) {
      // Work around a Safari quirk that fires a mousemove on <html> whenever the
      // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
      if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
        return;
      }

      hadKeyboardEvent = false;
      removeInitialPointerMoveListeners();
    }

    // For some kinds of state, we are interested in changes at the global scope
    // only. For example, global pointer input, global key presses and global
    // visibility change should affect the state at every scope:
    document.addEventListener('keydown', onKeyDown, true);
    document.addEventListener('mousedown', onPointerDown, true);
    document.addEventListener('pointerdown', onPointerDown, true);
    document.addEventListener('touchstart', onPointerDown, true);
    document.addEventListener('visibilitychange', onVisibilityChange, true);

    addInitialPointerMoveListeners();

    // For focus and blur, we specifically care about state changes in the local
    // scope. This is because focus / blur events that originate from within a
    // shadow root are not re-dispatched from the host element if it was already
    // the active element in its own scope:
    scope.addEventListener('focus', onFocus, true);
    scope.addEventListener('blur', onBlur, true);

    // We detect that a node is a ShadowRoot by ensuring that it is a
    // DocumentFragment and also has a host property. This check covers native
    // implementation and polyfill implementation transparently. If we only cared
    // about the native implementation, we could just check if the scope was
    // an instance of a ShadowRoot.
    if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
      // Since a ShadowRoot is a special kind of DocumentFragment, it does not
      // have a root element to add a class to. So, we add this attribute to the
      // host element instead:
      scope.host.setAttribute('data-js-focus-visible', '');
    } else if (scope.nodeType === Node.DOCUMENT_NODE) {
      document.documentElement.classList.add('js-focus-visible');
      document.documentElement.setAttribute('data-js-focus-visible', '');
    }
  }

  // It is important to wrap all references to global window and document in
  // these checks to support server-side rendering use cases
  // @see https://github.com/WICG/focus-visible/issues/199
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    // Make the polyfill helper globally available. This can be used as a signal
    // to interested libraries that wish to coordinate with the polyfill for e.g.,
    // applying the polyfill to a shadow root:
    window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;

    // Notify interested libraries of the polyfill's presence, in case the
    // polyfill was loaded lazily:
    var event;

    try {
      event = new CustomEvent('focus-visible-polyfill-ready');
    } catch (error) {
      // IE11 does not support using CustomEvent as a constructor directly:
      event = document.createEvent('CustomEvent');
      event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
    }

    window.dispatchEvent(event);
  }

  if (typeof document !== 'undefined') {
    // Apply the polyfill to the global document, so that no JavaScript
    // coordination is required to use the polyfill in the top-level document:
    applyFocusVisiblePolyfill(document);
  }

})));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap\");\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: none;\n  appearance: none;\n  font: inherit;\n  color: inherit;\n  background: none; }\n\n/* Common color scheme */\n/* Not really sure about this though */\n:root {\n  --accent-0: hsl(211, 61%, 43%);\n  --accent-1: hsl(209, 62%, 50%);\n  --accent-2: hsl(207, 73%, 57%);\n  --accent-3: hsl(205, 79%, 60%); }\n\n/* Light color scheme */\n:root {\n  --light-gray-0: hsl(0, 0%, 100%);\n  /* panel bg, button hover */\n  --light-gray-1: hsl(240, 17%, 98%);\n  /* button bg */\n  --light-gray-2: hsl(240, 8%, 93%);\n  /* shadow, button selected */\n  --light-gray-3: hsl(240, 6%, 88%);\n  /* panel border */\n  --light-gray-4: hsl(216, 12%, 81%);\n  /* button border, cursor */\n  --light-gray-5: hsl(214, 4%, 53%);\n  /* 2nd text */\n  --light-gray-6: hsl(208, 10%, 15%);\n  /* 1st text */ }\n\n/* Dark color scheme */\n:root {\n  --dark-gray-0: hsl(230, 0%, 0%);\n  /* button border, panel border */\n  --dark-gray-1: hsl(229, 10%, 9%);\n  /* shadow, button selected */\n  --dark-gray-2: hsl(235, 9%, 14%);\n  /* panel bg */\n  --dark-gray-3: hsl(233, 9%, 19%);\n  /* button bg */\n  --dark-gray-4: hsl(229, 11%, 25%);\n  /* button hover */\n  --dark-gray-5: hsl(230, 8%, 43%);\n  /* cursor */\n  --dark-gray-6: hsl(215, 8%, 56%);\n  /* text 2nd */\n  --dark-gray-7: hsl(173, 10%, 98%);\n  /* text 1st */ }\n\nbody {\n  font-family: \"Inter\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Ubuntu, Cantarell, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  line-height: 16px;\n  font-weight: 425; }\n  html.theme-dark body {\n    background-color: var(--dark-gray-2);\n    color: var(--dark-gray-7); }\n  @media (prefers-color-scheme: dark) {\n    html.theme-auto body {\n      background-color: var(--dark-gray-2);\n      color: var(--dark-gray-7); } }\n  html.theme-light body {\n    background-color: var(--light-gray-0);\n    color: var(--light-gray-6); }\n  @media (prefers-color-scheme: light) {\n    html.theme-auto body {\n      background-color: var(--light-gray-0);\n      color: var(--light-gray-6); } }\n";
styleInject(css_248z);

var css_248z$1 = ".icon-module_icon__dknVP {\n  width: 16px;\n  height: 16px;\n  display: block; }\n\n.icon-module_icon__dknVP path {\n  fill: currentColor;\n  fill-rule: evenodd;\n  clip-rule: evenodd; }\n";
var s = {"icon":"icon-module_icon__dknVP"};
styleInject(css_248z$1);

var IconC = function (_a) {
    var icon = _a.icon;
    return (React.createElement("svg", { className: s.icon, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16" },
        React.createElement("path", { d: icon.d })));
};

var css_248z$2 = ".button-module_button__1URU3 {\n  cursor: pointer;\n  transition: background-color 0.1s, box-shadow 0.1s, outline 0.2s ease-out;\n  border: solid 1px transparent;\n  font-weight: 450; }\n  .button-module_button__1URU3.button-module_highlight__eeITq {\n    font-weight: 500; }\n  html.theme-light .button-module_button__1URU3 {\n    background-color: var(--light-gray-1);\n    box-shadow: 0px 1px 2px var(--light-gray-2), inset 0 1px 0 var(--light-gray-0);\n    border-color: var(--light-gray-4); }\n    html.theme-light .button-module_button__1URU3.button-module_highlight__eeITq {\n      color: var(--light-gray-0);\n      background-color: var(--accent-2);\n      box-shadow: 0px 1px 2px var(--light-gray-4), inset 0 1px 0 var(--accent-3);\n      border-color: var(--accent-0); }\n  @media (prefers-color-scheme: light) {\n    html.theme-auto .button-module_button__1URU3 {\n      background-color: var(--light-gray-1);\n      box-shadow: 0px 1px 2px var(--light-gray-2), inset 0 1px 0 var(--light-gray-0);\n      border-color: var(--light-gray-4); }\n      html.theme-auto .button-module_button__1URU3.button-module_highlight__eeITq {\n        color: var(--light-gray-0);\n        background-color: var(--accent-2);\n        box-shadow: 0px 1px 2px var(--light-gray-4), inset 0 1px 0 var(--accent-3);\n        border-color: var(--accent-0); } }\n  html.theme-dark .button-module_button__1URU3 {\n    background-color: var(--dark-gray-3);\n    box-shadow: 0px 1px 2px var(--dark-gray-1), inset 0 1px 0 var(--dark-gray-4);\n    border-color: var(--dark-gray-0); }\n    html.theme-dark .button-module_button__1URU3.button-module_highlight__eeITq {\n      color: var(--light-gray-0);\n      background-color: var(--accent-2);\n      box-shadow: 0px 1px 2px var(--dark-gray-1), inset 0 1px 0 var(--accent-3); }\n  @media (prefers-color-scheme: dark) {\n    html.theme-auto .button-module_button__1URU3 {\n      background-color: var(--dark-gray-3);\n      box-shadow: 0px 1px 2px var(--dark-gray-1), inset 0 1px 0 var(--dark-gray-4);\n      border-color: var(--dark-gray-0); }\n      html.theme-auto .button-module_button__1URU3.button-module_highlight__eeITq {\n        color: var(--light-gray-0);\n        background-color: var(--accent-2);\n        box-shadow: 0px 1px 2px var(--dark-gray-1), inset 0 1px 0 var(--accent-3); } }\n\nhtml.theme-light .button-module_button__1URU3:hover {\n  background-color: var(--light-gray-0); }\n  html.theme-light .button-module_button__1URU3:hover.button-module_highlight__eeITq {\n    background-color: var(--accent-3); }\n\n@media (prefers-color-scheme: light) {\n  html.theme-auto .button-module_button__1URU3:hover {\n    background-color: var(--light-gray-0); }\n    html.theme-auto .button-module_button__1URU3:hover.button-module_highlight__eeITq {\n      background-color: var(--accent-3); } }\n\nhtml.theme-dark .button-module_button__1URU3:hover {\n  background-color: var(--dark-gray-4); }\n  html.theme-dark .button-module_button__1URU3:hover.button-module_highlight__eeITq {\n    background-color: var(--accent-3); }\n\n@media (prefers-color-scheme: dark) {\n  html.theme-auto .button-module_button__1URU3:hover {\n    background-color: var(--dark-gray-4); }\n    html.theme-auto .button-module_button__1URU3:hover.button-module_highlight__eeITq {\n      background-color: var(--accent-3); } }\n\nhtml.theme-light .button-module_button__1URU3:active {\n  box-shadow: none;\n  background-color: var(--light-gray-2); }\n  html.theme-light .button-module_button__1URU3:active.button-module_highlight__eeITq {\n    background-color: var(--accent-1); }\n\n@media (prefers-color-scheme: light) {\n  html.theme-auto .button-module_button__1URU3:active {\n    box-shadow: none;\n    background-color: var(--light-gray-2); }\n    html.theme-auto .button-module_button__1URU3:active.button-module_highlight__eeITq {\n      background-color: var(--accent-1); } }\n\nhtml.theme-dark .button-module_button__1URU3:active {\n  box-shadow: none;\n  background-color: var(--dark-gray-2); }\n  html.theme-dark .button-module_button__1URU3:active.button-module_highlight__eeITq {\n    background-color: var(--accent-1); }\n\n@media (prefers-color-scheme: dark) {\n  html.theme-auto .button-module_button__1URU3:active {\n    box-shadow: none;\n    background-color: var(--dark-gray-2); }\n    html.theme-auto .button-module_button__1URU3:active.button-module_highlight__eeITq {\n      background-color: var(--accent-1); } }\n";
var form = {"button":"button-module_button__1URU3","highlight":"button-module_highlight__eeITq"};
styleInject(css_248z$2);

var css_248z$3 = ".outline-module_inner__gdgFv::-moz-focus-inner,\n.outline-module_outer__1OUa8::-moz-focus-inner {\n  border: none; }\n\n.outline-module_inner__gdgFv,\n.outline-module_outer__1OUa8 {\n  outline: solid 8px transparent; }\n\n.outline-module_outer__1OUa8 {\n  outline-offset: 4px; }\n\n.outline-module_inner__gdgFv {\n  outline-offset: -2px; }\n\n.outline-module_inner__gdgFv.focus-visible,\n.outline-module_outer__1OUa8.focus-visible {\n  outline-width: 2px; }\n  html.theme-light .outline-module_inner__gdgFv.focus-visible, html.theme-light\n  .outline-module_outer__1OUa8.focus-visible {\n    outline-color: var(--accent-2); }\n  @media (prefers-color-scheme: light) {\n    html.theme-auto .outline-module_inner__gdgFv.focus-visible, html.theme-auto\n    .outline-module_outer__1OUa8.focus-visible {\n      outline-color: var(--accent-2); } }\n  html.theme-dark .outline-module_inner__gdgFv.focus-visible, html.theme-dark\n  .outline-module_outer__1OUa8.focus-visible {\n    outline-color: var(--accent-2); }\n  @media (prefers-color-scheme: dark) {\n    html.theme-auto .outline-module_inner__gdgFv.focus-visible, html.theme-auto\n    .outline-module_outer__1OUa8.focus-visible {\n      outline-color: var(--accent-2); } }\n";
var outline = {"inner":"outline-module_inner__gdgFv","outer":"outline-module_outer__1OUa8"};
styleInject(css_248z$3);

var css_248z$4 = ".button-module_button__2B2gl {\n  text-align: center;\n  display: flex;\n  padding: 8px 12px;\n  border-radius: 3px; }\n\nhtml.theme-light .button-module_selected__1Yehl, html.theme-light\n.button-module_selected__1Yehl:hover, html.theme-light\n.button-module_selected__1Yehl:active {\n  background-color: var(--light-gray-2);\n  box-shadow: 0px 0px 0px var(--light-gray-2); }\n\n@media (prefers-color-scheme: light) {\n  html.theme-auto .button-module_selected__1Yehl, html.theme-auto\n  .button-module_selected__1Yehl:hover, html.theme-auto\n  .button-module_selected__1Yehl:active {\n    background-color: var(--light-gray-2);\n    box-shadow: 0px 0px 0px var(--light-gray-2); } }\n\nhtml.theme-dark .button-module_selected__1Yehl, html.theme-dark\n.button-module_selected__1Yehl:hover, html.theme-dark\n.button-module_selected__1Yehl:active {\n  background-color: var(--dark-gray-1);\n  box-shadow: 0px 0px 0px var(--dark-gray-1); }\n\n@media (prefers-color-scheme: dark) {\n  html.theme-auto .button-module_selected__1Yehl, html.theme-auto\n  .button-module_selected__1Yehl:hover, html.theme-auto\n  .button-module_selected__1Yehl:active {\n    background-color: var(--dark-gray-1);\n    box-shadow: 0px 0px 0px var(--dark-gray-1); } }\n\n.button-module_text__14ulv {\n  flex: 1 1 0px; }\n\n.button-module_icon__bVrLM {\n  flex: 0 0 auto;\n  margin-right: 12px; }\n";
var s$1 = {"button":"button-module_button__2B2gl","selected":"button-module_selected__1Yehl","text":"button-module_text__14ulv","icon":"button-module_icon__bVrLM"};
styleInject(css_248z$4);

var getClass = function (_a) {
    var highlight = _a.highlight, selected = _a.selected;
    if (highlight === true && selected === true) {
        throw Error("Button cannot have both highlight and selected set.");
    }
    return [
        selected ? s$1.selected : "",
        highlight ? form.highlight : "",
        s$1.button + " " + form.button + " " + outline.outer,
    ].join(" ");
};
var ButtonWithRef = function (props, ref) {
    var onClick = props.onClick, children = props.children, icon = props.icon;
    return (React.createElement("button", { ref: ref, onClick: onClick, className: getClass(props) },
        icon && React.createElement("span", { className: s$1.icon },
            React.createElement(IconC, { icon: icon })),
        React.createElement("span", { className: s$1.text }, children)));
};
var Button = React.forwardRef(ButtonWithRef);

export { Button };
