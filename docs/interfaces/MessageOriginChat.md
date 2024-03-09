[@telegram.ts/types](../README.md) / [Exports](../modules.md) / MessageOriginChat

# Interface: MessageOriginChat

The message was originally sent on behalf of a chat to a group chat.

## Table of contents

### Properties

- [author\_signature](MessageOriginChat.md#author_signature)
- [date](MessageOriginChat.md#date)
- [sender\_chat](MessageOriginChat.md#sender_chat)
- [type](MessageOriginChat.md#type)

## Properties

### author\_signature

• `Optional` **author\_signature**: `string`

For messages originally sent by an anonymous chat administrator, original message author signature

#### Defined in

[messageTypes.d.ts:575](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L575)

___

### date

• **date**: `number`

Date the message was sent originally in Unix time

#### Defined in

[messageTypes.d.ts:571](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L571)

___

### sender\_chat

• **sender\_chat**: [`Chat`](../modules.md#chat)

Chat that sent the message originally

#### Defined in

[messageTypes.d.ts:573](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L573)

___

### type

• **type**: ``"chat"``

Type of the message origin, always “chat”

#### Defined in

[messageTypes.d.ts:569](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L569)
