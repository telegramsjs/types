[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [Chat](../modules/Chat.md) / GroupChat

# Interface: GroupChat

[Chat](../modules/Chat.md).GroupChat

Internal type representing group chats.

## Hierarchy

- [`AbstractChat`](Chat.AbstractChat.md)

- [`TitleChat`](Chat.TitleChat.md)

  ↳ **`GroupChat`**

  ↳↳ [`GroupGetChat`](Chat.GroupGetChat.md)

## Table of contents

### Properties

- [id](Chat.GroupChat.md#id)
- [title](Chat.GroupChat.md#title)
- [type](Chat.GroupChat.md#type)

## Properties

### id

• **id**: `number`

Unique identifier for this chat.

#### Inherited from

[AbstractChat](Chat.AbstractChat.md).[id](Chat.AbstractChat.md#id)

#### Defined in

[manageTypes.d.ts:68](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L68)

___

### title

• **title**: `string`

Title, for supergroups, channels and group chats

#### Inherited from

[TitleChat](Chat.TitleChat.md).[title](Chat.TitleChat.md#title)

#### Defined in

[manageTypes.d.ts:82](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L82)

___

### type

• **type**: ``"group"``

Type of chat, can be either “private”, “group”, “supergroup” or “channel”

#### Overrides

[AbstractChat](Chat.AbstractChat.md).[type](Chat.AbstractChat.md#type)

#### Defined in

[manageTypes.d.ts:96](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L96)
