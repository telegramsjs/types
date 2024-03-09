[@telegram.ts/types](../README.md) / [Exports](../modules.md) / MessageOriginHiddenUser

# Interface: MessageOriginHiddenUser

The message was originally sent by an unknown user.

## Table of contents

### Properties

- [date](MessageOriginHiddenUser.md#date)
- [sender\_user\_name](MessageOriginHiddenUser.md#sender_user_name)
- [type](MessageOriginHiddenUser.md#type)

## Properties

### date

• **date**: `number`

Date the message was sent originally in Unix time

#### Defined in

[messageTypes.d.ts:561](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L561)

___

### sender\_user\_name

• **sender\_user\_name**: `string`

Name of the user that sent the message originally

#### Defined in

[messageTypes.d.ts:563](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L563)

___

### type

• **type**: ``"hidden_user"``

Type of the message origin, always “hidden_user”

#### Defined in

[messageTypes.d.ts:559](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L559)
