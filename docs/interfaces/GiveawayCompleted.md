[@telegram.ts/types](../README.md) / [Exports](../modules.md) / GiveawayCompleted

# Interface: GiveawayCompleted

This object represents a service message about the completion of a giveaway without public winners.

## Table of contents

### Properties

- [giveaway\_message](GiveawayCompleted.md#giveaway_message)
- [unclaimed\_prize\_count](GiveawayCompleted.md#unclaimed_prize_count)
- [winner\_count](GiveawayCompleted.md#winner_count)

## Properties

### giveaway\_message

• `Optional` **giveaway\_message**: [`Message`](Message-1.md)

Message with the giveaway that was completed, if it wasn't deleted

#### Defined in

[messageTypes.d.ts:987](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L987)

___

### unclaimed\_prize\_count

• `Optional` **unclaimed\_prize\_count**: `number`

Number of undistributed prizes

#### Defined in

[messageTypes.d.ts:985](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L985)

___

### winner\_count

• **winner\_count**: `number`

Number of winners in the giveaway

#### Defined in

[messageTypes.d.ts:983](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L983)
