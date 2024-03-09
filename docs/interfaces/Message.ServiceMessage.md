[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [Message](../modules/Message.md) / ServiceMessage

# Interface: ServiceMessage

[Message](../modules/Message.md).ServiceMessage

## Hierarchy

- **`ServiceMessage`**

  ↳ [`CommonMessage`](Message.CommonMessage.md)

## Table of contents

### Properties

- [chat](Message.ServiceMessage.md#chat)
- [date](Message.ServiceMessage.md#date)
- [from](Message.ServiceMessage.md#from)
- [is\_topic\_message](Message.ServiceMessage.md#is_topic_message)
- [message\_id](Message.ServiceMessage.md#message_id)
- [message\_thread\_id](Message.ServiceMessage.md#message_thread_id)
- [sender\_chat](Message.ServiceMessage.md#sender_chat)

## Properties

### chat

• **chat**: [`Chat`](../modules.md#chat)

Chat the message belongs to

#### Defined in

[messageTypes.d.ts:21](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L21)

___

### date

• **date**: `number`

Date the message was sent in Unix time. It is always a positive number, representing a valid date.

#### Defined in

[messageTypes.d.ts:19](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L19)

___

### from

• `Optional` **from**: [`User`](User.md)

Sender of the message; empty for messages sent to channels. For backward compatibility, the field contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat.

#### Defined in

[messageTypes.d.ts:15](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L15)

___

### is\_topic\_message

• `Optional` **is\_topic\_message**: `boolean`

True, if the message is sent to a forum topic

#### Defined in

[messageTypes.d.ts:23](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L23)

___

### message\_id

• **message\_id**: `number`

Unique message identifier inside this chat

#### Defined in

[messageTypes.d.ts:11](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L11)

___

### message\_thread\_id

• `Optional` **message\_thread\_id**: `number`

Unique identifier of a message thread or a forum topic to which the message belongs; for supergroups only

#### Defined in

[messageTypes.d.ts:13](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L13)

___

### sender\_chat

• `Optional` **sender\_chat**: [`Chat`](../modules.md#chat)

Sender of the message, sent on behalf of a chat. For example, the channel itself for channel posts, the supergroup itself for messages from anonymous group administrators, the linked channel for messages automatically forwarded to the discussion group. For backward compatibility, the field from contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat.

#### Defined in

[messageTypes.d.ts:17](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L17)
