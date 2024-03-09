[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [Chat](../modules/Chat.md) / SupergroupChat

# Interface: SupergroupChat

[Chat](../modules/Chat.md).SupergroupChat

Internal type representing super group chats.

## Hierarchy

- [`AbstractChat`](Chat.AbstractChat.md)

- [`UserNameChat`](Chat.UserNameChat.md)

- [`TitleChat`](Chat.TitleChat.md)

  ↳ **`SupergroupChat`**

  ↳↳ [`SupergroupGetChat`](Chat.SupergroupGetChat.md)

## Table of contents

### Properties

- [id](Chat.SupergroupChat.md#id)
- [is\_forum](Chat.SupergroupChat.md#is_forum)
- [title](Chat.SupergroupChat.md#title)
- [type](Chat.SupergroupChat.md#type)
- [username](Chat.SupergroupChat.md#username)

## Properties

### id

• **id**: `number`

Unique identifier for this chat.

#### Inherited from

[AbstractChat](Chat.AbstractChat.md).[id](Chat.AbstractChat.md#id)

#### Defined in

[manageTypes.d.ts:68](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L68)

___

### is\_forum

• `Optional` **is\_forum**: ``true``

True, if the supergroup chat is a forum (has topics enabled)

#### Defined in

[manageTypes.d.ts:105](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L105)

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

• **type**: ``"supergroup"``

Type of chat, can be either “private”, “group”, “supergroup” or “channel”

#### Overrides

[AbstractChat](Chat.AbstractChat.md).[type](Chat.AbstractChat.md#type)

#### Defined in

[manageTypes.d.ts:103](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L103)

___

### username

• `Optional` **username**: `string`

Username, for private chats, supergroups and channels if available

#### Inherited from

[UserNameChat](Chat.UserNameChat.md).[username](Chat.UserNameChat.md#username)

#### Defined in

[manageTypes.d.ts:77](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L77)
