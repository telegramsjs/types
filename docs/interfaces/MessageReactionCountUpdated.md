[@telegram.ts/types](../README.md) / [Exports](../modules.md) / MessageReactionCountUpdated

# Interface: MessageReactionCountUpdated

This object represents reaction changes on a message with anonymous reactions.

## Table of contents

### Properties

- [chat](MessageReactionCountUpdated.md#chat)
- [date](MessageReactionCountUpdated.md#date)
- [message\_id](MessageReactionCountUpdated.md#message_id)
- [reactions](MessageReactionCountUpdated.md#reactions)

## Properties

### chat

• **chat**: [`Chat`](../modules.md#chat)

The chat containing the message

#### Defined in

[messageTypes.d.ts:1233](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1233)

___

### date

• **date**: `number`

Date of the change in Unix time

#### Defined in

[messageTypes.d.ts:1237](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1237)

___

### message\_id

• **message\_id**: `number`

Unique message identifier inside the chat

#### Defined in

[messageTypes.d.ts:1235](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1235)

___

### reactions

• **reactions**: [`ReactionCount`](ReactionCount.md)[]

List of reactions that are present on the message

#### Defined in

[messageTypes.d.ts:1239](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1239)
