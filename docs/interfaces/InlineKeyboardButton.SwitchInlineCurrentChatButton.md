[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [InlineKeyboardButton](../modules/InlineKeyboardButton.md) / SwitchInlineCurrentChatButton

# Interface: SwitchInlineCurrentChatButton

[InlineKeyboardButton](../modules/InlineKeyboardButton.md).SwitchInlineCurrentChatButton

## Hierarchy

- [`AbstractInlineKeyboardButton`](InlineKeyboardButton.AbstractInlineKeyboardButton.md)

  ↳ **`SwitchInlineCurrentChatButton`**

## Table of contents

### Properties

- [switch\_inline\_query\_current\_chat](InlineKeyboardButton.SwitchInlineCurrentChatButton.md#switch_inline_query_current_chat)
- [text](InlineKeyboardButton.SwitchInlineCurrentChatButton.md#text)

## Properties

### switch\_inline\_query\_current\_chat

• **switch\_inline\_query\_current\_chat**: `string`

If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. Can be empty, in which case only the bot's username will be inserted.

This offers a quick way for the user to open your bot in inline mode in the same chat – good for selecting something from multiple options.

#### Defined in

[markupTypes.d.ts:40](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L40)

___

### text

• **text**: `string`

Label text on the button

#### Inherited from

[AbstractInlineKeyboardButton](InlineKeyboardButton.AbstractInlineKeyboardButton.md).[text](InlineKeyboardButton.AbstractInlineKeyboardButton.md#text)

#### Defined in

[markupTypes.d.ts:13](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L13)
