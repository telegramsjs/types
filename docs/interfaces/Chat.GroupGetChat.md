[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [Chat](../modules/Chat.md) / GroupGetChat

# Interface: GroupGetChat

[Chat](../modules/Chat.md).GroupGetChat

Internal type representing group chats returned from `getChat`.

## Hierarchy

- [`GroupChat`](Chat.GroupChat.md)

- [`GetChat`](Chat.GetChat.md)

- [`NonPrivateGetChat`](Chat.NonPrivateGetChat.md)

- [`MultiUserGetChat`](Chat.MultiUserGetChat.md)

  ↳ **`GroupGetChat`**

## Table of contents

### Properties

- [available\_reactions](Chat.GroupGetChat.md#available_reactions)
- [description](Chat.GroupGetChat.md#description)
- [has\_protected\_content](Chat.GroupGetChat.md#has_protected_content)
- [id](Chat.GroupGetChat.md#id)
- [invite\_link](Chat.GroupGetChat.md#invite_link)
- [message\_auto\_delete\_time](Chat.GroupGetChat.md#message_auto_delete_time)
- [permissions](Chat.GroupGetChat.md#permissions)
- [photo](Chat.GroupGetChat.md#photo)
- [pinned\_message](Chat.GroupGetChat.md#pinned_message)
- [title](Chat.GroupGetChat.md#title)
- [type](Chat.GroupGetChat.md#type)

## Properties

### available\_reactions

• `Optional` **available\_reactions**: [`ReactionType`](../modules.md#reactiontype)[]

List of available reactions allowed in the chat. If omitted, then all emoji reactions are allowed. Returned only in getChat.

#### Inherited from

[NonPrivateGetChat](Chat.NonPrivateGetChat.md).[available_reactions](Chat.NonPrivateGetChat.md#available_reactions)

#### Defined in

[manageTypes.d.ts:136](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L136)

___

### description

• `Optional` **description**: `string`

Description, for groups, supergroups and channel chats. Returned only in getChat.

#### Inherited from

[NonPrivateGetChat](Chat.NonPrivateGetChat.md).[description](Chat.NonPrivateGetChat.md#description)

#### Defined in

[manageTypes.d.ts:132](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L132)

___

### has\_protected\_content

• `Optional` **has\_protected\_content**: ``true``

True, if messages from the chat can't be forwarded to other chats. Returned only in getChat.

#### Inherited from

[GetChat](Chat.GetChat.md).[has_protected_content](Chat.GetChat.md#has_protected_content)

#### Defined in

[manageTypes.d.ts:122](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L122)

___

### id

• **id**: `number`

Unique identifier for this chat.

#### Inherited from

[GroupChat](Chat.GroupChat.md).[id](Chat.GroupChat.md#id)

#### Defined in

[manageTypes.d.ts:68](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L68)

___

### invite\_link

• `Optional` **invite\_link**: `string`

Primary invite link, for groups, supergroups and channel chats. Returned only in getChat.

#### Inherited from

[NonPrivateGetChat](Chat.NonPrivateGetChat.md).[invite_link](Chat.NonPrivateGetChat.md#invite_link)

#### Defined in

[manageTypes.d.ts:134](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L134)

___

### message\_auto\_delete\_time

• `Optional` **message\_auto\_delete\_time**: `number`

The time after which all messages sent to the chat will be automatically deleted; in seconds. Returned only in getChat.

#### Inherited from

[GetChat](Chat.GetChat.md).[message_auto_delete_time](Chat.GetChat.md#message_auto_delete_time)

#### Defined in

[manageTypes.d.ts:120](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L120)

___

### permissions

• `Optional` **permissions**: [`ChatPermissions`](ChatPermissions.md)

Default chat member permissions, for groups and supergroups. Returned only in getChat.

#### Inherited from

[MultiUserGetChat](Chat.MultiUserGetChat.md).[permissions](Chat.MultiUserGetChat.md#permissions)

#### Defined in

[manageTypes.d.ts:141](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L141)

___

### photo

• `Optional` **photo**: [`ChatPhoto`](ChatPhoto.md)

Chat photo. Returned only in getChat.

#### Inherited from

[GetChat](Chat.GetChat.md).[photo](Chat.GetChat.md#photo)

#### Defined in

[manageTypes.d.ts:116](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L116)

___

### pinned\_message

• `Optional` **pinned\_message**: [`Message`](Message-1.md)

The most recent pinned message (by sending date). Returned only in getChat.

#### Inherited from

[GetChat](Chat.GetChat.md).[pinned_message](Chat.GetChat.md#pinned_message)

#### Defined in

[manageTypes.d.ts:118](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L118)

___

### title

• **title**: `string`

Title, for supergroups, channels and group chats

#### Inherited from

[GroupChat](Chat.GroupChat.md).[title](Chat.GroupChat.md#title)

#### Defined in

[manageTypes.d.ts:82](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L82)

___

### type

• **type**: ``"group"``

Type of chat, can be either “private”, “group”, “supergroup” or “channel”

#### Inherited from

[GroupChat](Chat.GroupChat.md).[type](Chat.GroupChat.md#type)

#### Defined in

[manageTypes.d.ts:96](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L96)
