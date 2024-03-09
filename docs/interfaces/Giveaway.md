[@telegram.ts/types](../README.md) / [Exports](../modules.md) / Giveaway

# Interface: Giveaway

This object represents a message about a scheduled giveaway.

## Table of contents

### Properties

- [chats](Giveaway.md#chats)
- [country\_codes](Giveaway.md#country_codes)
- [has\_public\_winners](Giveaway.md#has_public_winners)
- [only\_new\_members](Giveaway.md#only_new_members)
- [premium\_subscription\_month\_count](Giveaway.md#premium_subscription_month_count)
- [prize\_description](Giveaway.md#prize_description)
- [winner\_count](Giveaway.md#winner_count)
- [winners\_selection\_date](Giveaway.md#winners_selection_date)

## Properties

### chats

• **chats**: [`Chat`](../modules.md#chat)[]

The list of chats which the user must join to participate in the giveaway

#### Defined in

[messageTypes.d.ts:937](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L937)

___

### country\_codes

• `Optional` **country\_codes**: `string`[]

A list of two-letter ISO 3166-1 alpha-2 country codes indicating the countries from which eligible users for the giveaway must come. If empty, then all users can participate in the giveaway. Users with a phone number that was bought on Fragment can always participate in giveaways.

#### Defined in

[messageTypes.d.ts:949](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L949)

___

### has\_public\_winners

• `Optional` **has\_public\_winners**: ``true``

True, if the list of giveaway winners will be visible to everyone

#### Defined in

[messageTypes.d.ts:945](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L945)

___

### only\_new\_members

• `Optional` **only\_new\_members**: ``true``

True, if only users who join the chats after the giveaway started should be eligible to win

#### Defined in

[messageTypes.d.ts:943](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L943)

___

### premium\_subscription\_month\_count

• `Optional` **premium\_subscription\_month\_count**: `number`

The number of months the Telegram Premium subscription won from the giveaway will be active for

#### Defined in

[messageTypes.d.ts:951](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L951)

___

### prize\_description

• `Optional` **prize\_description**: `string`

Description of additional giveaway prize

#### Defined in

[messageTypes.d.ts:947](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L947)

___

### winner\_count

• **winner\_count**: `number`

The number of users which are supposed to be selected as winners of the giveaway

#### Defined in

[messageTypes.d.ts:941](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L941)

___

### winners\_selection\_date

• **winners\_selection\_date**: `number`

Point in time (Unix timestamp) when winners of the giveaway will be selected

#### Defined in

[messageTypes.d.ts:939](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L939)
