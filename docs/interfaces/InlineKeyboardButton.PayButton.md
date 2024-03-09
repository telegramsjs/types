[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [InlineKeyboardButton](../modules/InlineKeyboardButton.md) / PayButton

# Interface: PayButton

[InlineKeyboardButton](../modules/InlineKeyboardButton.md).PayButton

## Hierarchy

- [`AbstractInlineKeyboardButton`](InlineKeyboardButton.AbstractInlineKeyboardButton.md)

  ↳ **`PayButton`**

## Table of contents

### Properties

- [pay](InlineKeyboardButton.PayButton.md#pay)
- [text](InlineKeyboardButton.PayButton.md#text)

## Properties

### pay

• **pay**: `boolean`

Specify True, to send a Pay button.

NOTE: This type of button must always be the first button in the first row and can only be used in invoice messages.

#### Defined in

[markupTypes.d.ts:57](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L57)

___

### text

• **text**: `string`

Label text on the button

#### Inherited from

[AbstractInlineKeyboardButton](InlineKeyboardButton.AbstractInlineKeyboardButton.md).[text](InlineKeyboardButton.AbstractInlineKeyboardButton.md#text)

#### Defined in

[markupTypes.d.ts:13](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L13)
