[@telegram.ts/types](../README.md) / [Exports](../modules.md) / ChatMemberOwner

# Interface: ChatMemberOwner

Represents a chat member that owns the chat and has all administrator privileges.

## Table of contents

### Properties

- [custom\_title](ChatMemberOwner.md#custom_title)
- [is\_anonymous](ChatMemberOwner.md#is_anonymous)
- [status](ChatMemberOwner.md#status)
- [user](ChatMemberOwner.md#user)

## Properties

### custom\_title

• `Optional` **custom\_title**: `string`

Custom title for this user

#### Defined in

[manageTypes.d.ts:356](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L356)

___

### is\_anonymous

• **is\_anonymous**: `boolean`

True, if the user's presence in the chat is hidden

#### Defined in

[manageTypes.d.ts:354](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L354)

___

### status

• **status**: ``"creator"``

The member's status in the chat, always “creator”

#### Defined in

[manageTypes.d.ts:350](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L350)

___

### user

• **user**: [`User`](User.md)

Information about the user

#### Defined in

[manageTypes.d.ts:352](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L352)
