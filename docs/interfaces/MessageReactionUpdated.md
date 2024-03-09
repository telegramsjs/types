[@telegram.ts/types](../README.md) / [Exports](../modules.md) / MessageReactionUpdated

# Interface: MessageReactionUpdated

This object represents a change of a reaction on a message performed by a user.

## Table of contents

### Properties

- [actor\_chat](MessageReactionUpdated.md#actor_chat)
- [chat](MessageReactionUpdated.md#chat)
- [date](MessageReactionUpdated.md#date)
- [message\_id](MessageReactionUpdated.md#message_id)
- [new\_reaction](MessageReactionUpdated.md#new_reaction)
- [old\_reaction](MessageReactionUpdated.md#old_reaction)
- [user](MessageReactionUpdated.md#user)

## Properties

### actor\_chat

• `Optional` **actor\_chat**: [`Chat`](../modules.md#chat)

The chat on behalf of which the reaction was changed, if the user is anonymous

#### Defined in

[messageTypes.d.ts:1221](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1221)

___

### chat

• **chat**: [`Chat`](../modules.md#chat)

The chat containing the message the user reacted to

#### Defined in

[messageTypes.d.ts:1215](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1215)

___

### date

• **date**: `number`

Date of the change in Unix time

#### Defined in

[messageTypes.d.ts:1223](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1223)

___

### message\_id

• **message\_id**: `number`

Unique identifier of the message inside the chat

#### Defined in

[messageTypes.d.ts:1217](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1217)

___

### new\_reaction

• **new\_reaction**: [`ReactionType`](../modules.md#reactiontype)[]

New list of reaction types that have been set by the user

#### Defined in

[messageTypes.d.ts:1227](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1227)

___

### old\_reaction

• **old\_reaction**: [`ReactionType`](../modules.md#reactiontype)[]

Previous list of reaction types that were set by the user

#### Defined in

[messageTypes.d.ts:1225](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1225)

___

### user

• `Optional` **user**: [`User`](User.md)

The user that changed the reaction, if the user isn't anonymous

#### Defined in

[messageTypes.d.ts:1219](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1219)
