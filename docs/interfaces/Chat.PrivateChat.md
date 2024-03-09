[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [Chat](../modules/Chat.md) / PrivateChat

# Interface: PrivateChat

[Chat](../modules/Chat.md).PrivateChat

Internal type representing private chats.

## Hierarchy

- [`AbstractChat`](Chat.AbstractChat.md)

- [`UserNameChat`](Chat.UserNameChat.md)

  ↳ **`PrivateChat`**

  ↳↳ [`PrivateGetChat`](Chat.PrivateGetChat.md)

## Table of contents

### Properties

- [first\_name](Chat.PrivateChat.md#first_name)
- [id](Chat.PrivateChat.md#id)
- [last\_name](Chat.PrivateChat.md#last_name)
- [type](Chat.PrivateChat.md#type)
- [username](Chat.PrivateChat.md#username)

## Properties

### first\_name

• **first\_name**: `string`

First name of the other party in a private chat

#### Defined in

[manageTypes.d.ts:90](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L90)

___

### id

• **id**: `number`

Unique identifier for this chat.

#### Inherited from

[AbstractChat](Chat.AbstractChat.md).[id](Chat.AbstractChat.md#id)

#### Defined in

[manageTypes.d.ts:68](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L68)

___

### last\_name

• `Optional` **last\_name**: `string`

Last name of the other party in a private chat

#### Defined in

[manageTypes.d.ts:92](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L92)

___

### type

• **type**: ``"private"``

Type of chat, can be either “private”, “group”, “supergroup” or “channel”

#### Overrides

[AbstractChat](Chat.AbstractChat.md).[type](Chat.AbstractChat.md#type)

#### Defined in

[manageTypes.d.ts:88](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L88)

___

### username

• `Optional` **username**: `string`

Username, for private chats, supergroups and channels if available

#### Inherited from

[UserNameChat](Chat.UserNameChat.md).[username](Chat.UserNameChat.md#username)

#### Defined in

[manageTypes.d.ts:77](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L77)
