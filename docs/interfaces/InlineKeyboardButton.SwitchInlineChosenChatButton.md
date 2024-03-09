[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [InlineKeyboardButton](../modules/InlineKeyboardButton.md) / SwitchInlineChosenChatButton

# Interface: SwitchInlineChosenChatButton

[InlineKeyboardButton](../modules/InlineKeyboardButton.md).SwitchInlineChosenChatButton

## Hierarchy

- [`AbstractInlineKeyboardButton`](InlineKeyboardButton.AbstractInlineKeyboardButton.md)

  ↳ **`SwitchInlineChosenChatButton`**

## Table of contents

### Properties

- [switch\_inline\_query\_chosen\_chat](InlineKeyboardButton.SwitchInlineChosenChatButton.md#switch_inline_query_chosen_chat)
- [text](InlineKeyboardButton.SwitchInlineChosenChatButton.md#text)

## Properties

### switch\_inline\_query\_chosen\_chat

• **switch\_inline\_query\_chosen\_chat**: [`SwitchInlineQueryChosenChat`](SwitchInlineQueryChosenChat.md)

If set, pressing the button will prompt the user to select one of their chats of the specified type, open that chat and insert the bot's username and the specified inline query in the input field

#### Defined in

[markupTypes.d.ts:45](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L45)

___

### text

• **text**: `string`

Label text on the button

#### Inherited from

[AbstractInlineKeyboardButton](InlineKeyboardButton.AbstractInlineKeyboardButton.md).[text](InlineKeyboardButton.AbstractInlineKeyboardButton.md#text)

#### Defined in

[markupTypes.d.ts:13](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L13)
