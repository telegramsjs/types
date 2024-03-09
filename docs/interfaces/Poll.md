[@telegram.ts/types](../README.md) / [Exports](../modules.md) / Poll

# Interface: Poll

This object contains information about a poll.

## Table of contents

### Properties

- [allows\_multiple\_answers](Poll.md#allows_multiple_answers)
- [close\_date](Poll.md#close_date)
- [correct\_option\_id](Poll.md#correct_option_id)
- [explanation](Poll.md#explanation)
- [explanation\_entities](Poll.md#explanation_entities)
- [id](Poll.md#id)
- [is\_anonymous](Poll.md#is_anonymous)
- [is\_closed](Poll.md#is_closed)
- [open\_period](Poll.md#open_period)
- [options](Poll.md#options)
- [question](Poll.md#question)
- [total\_voter\_count](Poll.md#total_voter_count)
- [type](Poll.md#type)

## Properties

### allows\_multiple\_answers

• **allows\_multiple\_answers**: `boolean`

True, if the poll allows multiple answers

#### Defined in

[messageTypes.d.ts:777](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L777)

___

### close\_date

• `Optional` **close\_date**: `number`

Point in time (Unix timestamp) when the poll will be automatically closed

#### Defined in

[messageTypes.d.ts:787](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L787)

___

### correct\_option\_id

• `Optional` **correct\_option\_id**: `number`

0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent (not forwarded) by the bot or to the private chat with the bot.

#### Defined in

[messageTypes.d.ts:779](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L779)

___

### explanation

• `Optional` **explanation**: `string`

Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters

#### Defined in

[messageTypes.d.ts:781](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L781)

___

### explanation\_entities

• `Optional` **explanation\_entities**: [`MessageEntity`](../modules.md#messageentity)[]

Special entities like usernames, URLs, bot commands, etc. that appear in the explanation

#### Defined in

[messageTypes.d.ts:783](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L783)

___

### id

• **id**: `string`

Unique poll identifier

#### Defined in

[messageTypes.d.ts:763](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L763)

___

### is\_anonymous

• **is\_anonymous**: `boolean`

True, if the poll is anonymous

#### Defined in

[messageTypes.d.ts:773](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L773)

___

### is\_closed

• **is\_closed**: `boolean`

True, if the poll is closed

#### Defined in

[messageTypes.d.ts:771](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L771)

___

### open\_period

• `Optional` **open\_period**: `number`

Amount of time in seconds the poll will be active after creation

#### Defined in

[messageTypes.d.ts:785](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L785)

___

### options

• **options**: [`PollOption`](PollOption.md)[]

List of poll options

#### Defined in

[messageTypes.d.ts:767](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L767)

___

### question

• **question**: `string`

Poll question, 1-300 characters

#### Defined in

[messageTypes.d.ts:765](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L765)

___

### total\_voter\_count

• **total\_voter\_count**: `number`

Total number of users that voted in the poll

#### Defined in

[messageTypes.d.ts:769](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L769)

___

### type

• **type**: ``"quiz"`` \| ``"regular"``

Poll type, currently can be “regular” or “quiz”

#### Defined in

[messageTypes.d.ts:775](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L775)
