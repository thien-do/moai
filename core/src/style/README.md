The "evergreen.css" and "forms.evergreen.css" are from the sanitize.css
package. Although having an NPM package, it's quite complicated to setup:
- Some tools require the "~" prefix, while some don't
- Some tools allow NPM module to import CSS (like CRA) but some don't (like
NextJS)
- We need to use PostCSS's ImportCSS plugin to inline them

So it's easier to just have the source here ourselves. It won't change much
anyway
