[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [Chat](../modules/Chat.md) / AbstractChat

# Interface: AbstractChat

[Chat](../modules/Chat.md).AbstractChat

Internal type holding properties that all kinds of chats share.

## Hierarchy

- **`AbstractChat`**

  ↳ [`PrivateChat`](Chat.PrivateChat.md)

  ↳ [`GroupChat`](Chat.GroupChat.md)

  ↳ [`SupergroupChat`](Chat.SupergroupChat.md)

  ↳ [`ChannelChat`](Chat.ChannelChat.md)

## Table of contents

### Properties

- [id](Chat.AbstractChat.md#id)
- [type](Chat.AbstractChat.md#type)

## Properties

### id

• **id**: `number`

Unique identifier for this chat.

#### Defined in

[manageTypes.d.ts:68](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L68)

___

### type

• **type**: `string`

Type of chat, can be either “private”, “group”, “supergroup” or “channel”

#### Defined in

[manageTypes.d.ts:70](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L70)
