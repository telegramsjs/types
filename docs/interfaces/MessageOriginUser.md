[@telegram.ts/types](../README.md) / [Exports](../modules.md) / MessageOriginUser

# Interface: MessageOriginUser

The message was originally sent by a known user.

## Table of contents

### Properties

- [date](MessageOriginUser.md#date)
- [sender\_user](MessageOriginUser.md#sender_user)
- [type](MessageOriginUser.md#type)

## Properties

### date

• **date**: `number`

Date the message was sent originally in Unix time

#### Defined in

[messageTypes.d.ts:551](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L551)

___

### sender\_user

• **sender\_user**: [`User`](User.md)

User that sent the message originally

#### Defined in

[messageTypes.d.ts:553](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L553)

___

### type

• **type**: ``"user"``

Type of the message origin, always “user”

#### Defined in

[messageTypes.d.ts:549](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L549)
