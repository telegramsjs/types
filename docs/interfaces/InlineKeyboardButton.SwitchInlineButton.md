[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [InlineKeyboardButton](../modules/InlineKeyboardButton.md) / SwitchInlineButton

# Interface: SwitchInlineButton

[InlineKeyboardButton](../modules/InlineKeyboardButton.md).SwitchInlineButton

## Hierarchy

- [`AbstractInlineKeyboardButton`](InlineKeyboardButton.AbstractInlineKeyboardButton.md)

  ↳ **`SwitchInlineButton`**

## Table of contents

### Properties

- [switch\_inline\_query](InlineKeyboardButton.SwitchInlineButton.md#switch_inline_query)
- [text](InlineKeyboardButton.SwitchInlineButton.md#text)

## Properties

### switch\_inline\_query

• **switch\_inline\_query**: `string`

If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. Can be empty, in which case just the bot's username will be inserted.

#### Defined in

[markupTypes.d.ts:33](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L33)

___

### text

• **text**: `string`

Label text on the button

#### Inherited from

[AbstractInlineKeyboardButton](InlineKeyboardButton.AbstractInlineKeyboardButton.md).[text](InlineKeyboardButton.AbstractInlineKeyboardButton.md#text)

#### Defined in

[markupTypes.d.ts:13](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L13)
