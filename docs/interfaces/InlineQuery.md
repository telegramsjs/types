[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InlineQuery

# Interface: InlineQuery

This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.

## Table of contents

### Properties

- [chat\_type](InlineQuery.md#chat_type)
- [from](InlineQuery.md#from)
- [id](InlineQuery.md#id)
- [location](InlineQuery.md#location)
- [offset](InlineQuery.md#offset)
- [query](InlineQuery.md#query)

## Properties

### chat\_type

• `Optional` **chat\_type**: ``"channel"`` \| ``"private"`` \| ``"group"`` \| ``"supergroup"`` \| ``"sender"``

Type of the chat from which the inline query was sent. Can be either “sender” for a private chat with the inline query sender, “private”, “group”, “supergroup”, or “channel”. The chat type should be always known for requests sent from official clients and most third-party clients, unless the request was sent from a secret chat

#### Defined in

[inlineTypes.d.ts:21](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L21)

___

### from

• **from**: [`User`](User.md)

Sender

#### Defined in

[inlineTypes.d.ts:15](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L15)

___

### id

• **id**: `string`

Unique identifier for this query

#### Defined in

[inlineTypes.d.ts:13](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L13)

___

### location

• `Optional` **location**: [`Location`](Location.md)

Sender location, only for bots that request user location

#### Defined in

[inlineTypes.d.ts:23](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L23)

___

### offset

• **offset**: `string`

Offset of the results to be returned, can be controlled by the bot

#### Defined in

[inlineTypes.d.ts:19](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L19)

___

### query

• **query**: `string`

Text of the query (up to 256 characters)

#### Defined in

[inlineTypes.d.ts:17](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L17)
