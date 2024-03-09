[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [Chat](../modules/Chat.md) / NonPrivateGetChat

# Interface: NonPrivateGetChat

[Chat](../modules/Chat.md).NonPrivateGetChat

Internal type holding properties that those group, supergroup, and channel chats returned from `getChat` share.

## Hierarchy

- **`NonPrivateGetChat`**

  ↳ [`GroupGetChat`](Chat.GroupGetChat.md)

  ↳ [`SupergroupGetChat`](Chat.SupergroupGetChat.md)

  ↳ [`ChannelGetChat`](Chat.ChannelGetChat.md)

## Table of contents

### Properties

- [available\_reactions](Chat.NonPrivateGetChat.md#available_reactions)
- [description](Chat.NonPrivateGetChat.md#description)
- [invite\_link](Chat.NonPrivateGetChat.md#invite_link)

## Properties

### available\_reactions

• `Optional` **available\_reactions**: [`ReactionType`](../modules.md#reactiontype)[]

List of available reactions allowed in the chat. If omitted, then all emoji reactions are allowed. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:136](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L136)

___

### description

• `Optional` **description**: `string`

Description, for groups, supergroups and channel chats. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:132](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L132)

___

### invite\_link

• `Optional` **invite\_link**: `string`

Primary invite link, for groups, supergroups and channel chats. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:134](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L134)
