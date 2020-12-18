// Button.stories.tsx

import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { TextArea, TextAreaProps } from './text-area';

const CATEGORY_FUNCTION = 'FUNCTION'
const CATEGORY_VARIABLE = 'VARIABLE'

export default {
  title: 'TextArea',
  component: TextArea,
  argTypes: {
    placeholder: {
      defaultValue: 'Enter text',
      control: {
        type: 'text'
      },
      table: {
        category: CATEGORY_VARIABLE
      }
    },
    defaultValue: {
      control: {
        type: 'text'
      },
      table: {
        category: CATEGORY_VARIABLE
      }
    },
    value: {
      control: {
        type: 'text'
      },
      table: {
        category: CATEGORY_VARIABLE
      }
    },
    style: {
      type: { 
        name: 'object',
        required: true
      },
      description: 'style',
      defaultValue: JSON.stringify(TextArea.style.outset),
      control: {
        type: 'inline-radio',
        options: {
          outset: JSON.stringify(TextArea.style.outset),
          flat: JSON.stringify(TextArea.style.flat)
        }
      },
      table: {
        category: CATEGORY_VARIABLE,
        type: { summary: '' },
      }
    },
    size: {
      type: { name: 'object', required: true },
      defaultValue: JSON.stringify(TextArea.size.medium),
      control: {
        type: 'inline-radio',
        options: {
          medium: JSON.stringify(TextArea.size.medium),
          small: JSON.stringify(TextArea.size.small)
        }
      },
      table: {
        category: CATEGORY_VARIABLE
      }
    },
    rows: {
      control: {
        type: 'number'
      },
      table: {
        category: CATEGORY_VARIABLE
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      },
      table: {
        category: CATEGORY_VARIABLE
      }
    },
    readOnly: {
      control: {
        type: 'boolean'
      },
      table: {
        category: CATEGORY_VARIABLE
      }
    },
    autoFocus: {
      control: {
        type: 'boolean'
      },
      table: {
        category: CATEGORY_VARIABLE
      }
    },
    autoSelect: {
      control: {
        type: 'boolean'
      },
      table: {
        category: CATEGORY_VARIABLE
      }
    },
    setValue: {
      action: 'onChange',
      table: {
        category: CATEGORY_FUNCTION
      }
    },
    onBlur: {
      table: {
        category: CATEGORY_FUNCTION
      }
    },
    onFocus: {
      table: {
        category: CATEGORY_FUNCTION
      }
    },
    onKeyPress: {
      table: {
        category: CATEGORY_FUNCTION
      }
    },
    onKeyUp: {
      table: {
        category: CATEGORY_FUNCTION
      }
    },
    onKeyDown: {
      table: {
        category: CATEGORY_FUNCTION
      }
    },
  },
};

export const Primary: Story<TextAreaProps> = (props) => {
  const style = JSON.parse(props.style + '')
  const size = JSON.parse(props.size + '')
  return <TextArea {...props} style={style} size={size} />
}
