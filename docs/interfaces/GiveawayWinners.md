[@telegram.ts/types](../README.md) / [Exports](../modules.md) / GiveawayWinners

# Interface: GiveawayWinners

This object represents a message about the completion of a giveaway with public winners.

## Table of contents

### Properties

- [additional\_chat\_count](GiveawayWinners.md#additional_chat_count)
- [chat](GiveawayWinners.md#chat)
- [giveaway\_message\_id](GiveawayWinners.md#giveaway_message_id)
- [only\_new\_members](GiveawayWinners.md#only_new_members)
- [premium\_subscription\_month\_count](GiveawayWinners.md#premium_subscription_month_count)
- [prize\_description](GiveawayWinners.md#prize_description)
- [unclaimed\_prize\_count](GiveawayWinners.md#unclaimed_prize_count)
- [was\_refunded](GiveawayWinners.md#was_refunded)
- [winner\_count](GiveawayWinners.md#winner_count)
- [winners](GiveawayWinners.md#winners)
- [winners\_selection\_date](GiveawayWinners.md#winners_selection_date)

## Properties

### additional\_chat\_count

• `Optional` **additional\_chat\_count**: `number`

The number of other chats the user had to join in order to be eligible for the giveaway

#### Defined in

[messageTypes.d.ts:967](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L967)

___

### chat

• **chat**: [`Chat`](../modules.md#chat)

The chat that created the giveaway

#### Defined in

[messageTypes.d.ts:957](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L957)

___

### giveaway\_message\_id

• **giveaway\_message\_id**: `number`

Identifier of the messsage with the giveaway in the chat

#### Defined in

[messageTypes.d.ts:959](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L959)

___

### only\_new\_members

• `Optional` **only\_new\_members**: ``true``

True, if only users who had joined the chats after the giveaway started were eligible to win

#### Defined in

[messageTypes.d.ts:973](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L973)

___

### premium\_subscription\_month\_count

• `Optional` **premium\_subscription\_month\_count**: `number`

The number of months the Telegram Premium subscription won from the giveaway will be active for

#### Defined in

[messageTypes.d.ts:969](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L969)

___

### prize\_description

• `Optional` **prize\_description**: `string`

Description of additional giveaway prize

#### Defined in

[messageTypes.d.ts:977](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L977)

___

### unclaimed\_prize\_count

• `Optional` **unclaimed\_prize\_count**: `number`

Number of undistributed prizes

#### Defined in

[messageTypes.d.ts:971](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L971)

___

### was\_refunded

• `Optional` **was\_refunded**: ``true``

True, if the giveaway was canceled because the payment for it was refunded

#### Defined in

[messageTypes.d.ts:975](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L975)

___

### winner\_count

• **winner\_count**: `number`

Total number of winners in the giveaway

#### Defined in

[messageTypes.d.ts:963](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L963)

___

### winners

• **winners**: [`User`](User.md)[]

List of up to 100 winners of the giveaway

#### Defined in

[messageTypes.d.ts:965](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L965)

___

### winners\_selection\_date

• **winners\_selection\_date**: `number`

Point in time (Unix timestamp) when winners of the giveaway were selected

#### Defined in

[messageTypes.d.ts:961](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L961)
