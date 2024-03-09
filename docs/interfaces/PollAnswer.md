[@telegram.ts/types](../README.md) / [Exports](../modules.md) / PollAnswer

# Interface: PollAnswer

This object represents an answer of a user in a non-anonymous poll.

## Table of contents

### Properties

- [option\_ids](PollAnswer.md#option_ids)
- [poll\_id](PollAnswer.md#poll_id)
- [user](PollAnswer.md#user)
- [voter\_chat](PollAnswer.md#voter_chat)

## Properties

### option\_ids

• **option\_ids**: `number`[]

0-based identifiers of chosen answer options. May be empty if the vote was retracted.

#### Defined in

[messageTypes.d.ts:757](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L757)

___

### poll\_id

• **poll\_id**: `string`

Unique poll identifier

#### Defined in

[messageTypes.d.ts:751](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L751)

___

### user

• `Optional` **user**: [`User`](User.md)

The user that changed the answer to the poll, if the voter isn't anonymous

#### Defined in

[messageTypes.d.ts:755](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L755)

___

### voter\_chat

• `Optional` **voter\_chat**: [`Chat`](../modules.md#chat)

The chat that changed the answer to the poll, if the voter is anonymous

#### Defined in

[messageTypes.d.ts:753](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L753)
