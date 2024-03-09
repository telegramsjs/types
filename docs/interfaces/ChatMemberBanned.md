[@telegram.ts/types](../README.md) / [Exports](../modules.md) / ChatMemberBanned

# Interface: ChatMemberBanned

Represents a chat member that was banned in the chat and can't return to the chat or view chat messages.

## Table of contents

### Properties

- [status](ChatMemberBanned.md#status)
- [until\_date](ChatMemberBanned.md#until_date)
- [user](ChatMemberBanned.md#user)

## Properties

### status

• **status**: ``"kicked"``

The member's status in the chat, always “kicked”

#### Defined in

[manageTypes.d.ts:460](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L460)

___

### until\_date

• **until\_date**: `number`

Date when restrictions will be lifted for this user; Unix time. If 0, then the user is banned forever

#### Defined in

[manageTypes.d.ts:464](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L464)

___

### user

• **user**: [`User`](User.md)

Information about the user

#### Defined in

[manageTypes.d.ts:462](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L462)
