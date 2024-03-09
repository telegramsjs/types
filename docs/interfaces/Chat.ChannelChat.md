[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [Chat](../modules/Chat.md) / ChannelChat

# Interface: ChannelChat

[Chat](../modules/Chat.md).ChannelChat

Internal type representing channel chats.

## Hierarchy

- [`AbstractChat`](Chat.AbstractChat.md)

- [`UserNameChat`](Chat.UserNameChat.md)

- [`TitleChat`](Chat.TitleChat.md)

  ↳ **`ChannelChat`**

  ↳↳ [`ChannelGetChat`](Chat.ChannelGetChat.md)

## Table of contents

### Properties

- [id](Chat.ChannelChat.md#id)
- [title](Chat.ChannelChat.md#title)
- [type](Chat.ChannelChat.md#type)
- [username](Chat.ChannelChat.md#username)

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

• **type**: ``"channel"``

Type of chat, can be either “private”, “group”, “supergroup” or “channel”

#### Overrides

[AbstractChat](Chat.AbstractChat.md).[type](Chat.AbstractChat.md#type)

#### Defined in

[manageTypes.d.ts:109](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L109)

___

### username

• `Optional` **username**: `string`

Username, for private chats, supergroups and channels if available

#### Inherited from

[UserNameChat](Chat.UserNameChat.md).[username](Chat.UserNameChat.md#username)

#### Defined in

[manageTypes.d.ts:77](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L77)
