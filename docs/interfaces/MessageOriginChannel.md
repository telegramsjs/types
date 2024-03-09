[@telegram.ts/types](../README.md) / [Exports](../modules.md) / MessageOriginChannel

# Interface: MessageOriginChannel

The message was originally sent to a channel chat.

## Table of contents

### Properties

- [author\_signature](MessageOriginChannel.md#author_signature)
- [chat](MessageOriginChannel.md#chat)
- [date](MessageOriginChannel.md#date)
- [message\_id](MessageOriginChannel.md#message_id)
- [type](MessageOriginChannel.md#type)

## Properties

### author\_signature

• `Optional` **author\_signature**: `string`

Signature of the original post author

#### Defined in

[messageTypes.d.ts:589](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L589)

___

### chat

• **chat**: [`Chat`](../modules.md#chat)

Channel chat to which the message was originally sent

#### Defined in

[messageTypes.d.ts:585](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L585)

___

### date

• **date**: `number`

Date the message was sent originally in Unix time

#### Defined in

[messageTypes.d.ts:583](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L583)

___

### message\_id

• **message\_id**: `number`

Unique message identifier inside the chat

#### Defined in

[messageTypes.d.ts:587](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L587)

___

### type

• **type**: ``"channel"``

Type of the message origin, always “channel”

#### Defined in

[messageTypes.d.ts:581](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L581)
