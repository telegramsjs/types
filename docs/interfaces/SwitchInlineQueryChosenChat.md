[@telegram.ts/types](../README.md) / [Exports](../modules.md) / SwitchInlineQueryChosenChat

# Interface: SwitchInlineQueryChosenChat

This object represents an inline button that switches the current user to inline mode in a chosen chat, with an optional default inline query.

## Table of contents

### Properties

- [allow\_bot\_chats](SwitchInlineQueryChosenChat.md#allow_bot_chats)
- [allow\_channel\_chats](SwitchInlineQueryChosenChat.md#allow_channel_chats)
- [allow\_group\_chats](SwitchInlineQueryChosenChat.md#allow_group_chats)
- [allow\_user\_chats](SwitchInlineQueryChosenChat.md#allow_user_chats)
- [query](SwitchInlineQueryChosenChat.md#query)

## Properties

### allow\_bot\_chats

• `Optional` **allow\_bot\_chats**: `boolean`

True, if private chats with bots can be chosen

#### Defined in

[markupTypes.d.ts:95](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L95)

___

### allow\_channel\_chats

• `Optional` **allow\_channel\_chats**: `boolean`

True, if channel chats can be chosen

#### Defined in

[markupTypes.d.ts:99](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L99)

___

### allow\_group\_chats

• `Optional` **allow\_group\_chats**: `boolean`

True, if group and supergroup chats can be chosen

#### Defined in

[markupTypes.d.ts:97](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L97)

___

### allow\_user\_chats

• `Optional` **allow\_user\_chats**: `boolean`

True, if private chats with users can be chosen

#### Defined in

[markupTypes.d.ts:93](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L93)

___

### query

• `Optional` **query**: `string`

The default inline query to be inserted in the input field. If left empty, only the bot's username will be inserted

#### Defined in

[markupTypes.d.ts:91](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L91)
