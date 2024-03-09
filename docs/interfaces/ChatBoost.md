[@telegram.ts/types](../README.md) / [Exports](../modules.md) / ChatBoost

# Interface: ChatBoost

This object contains information about a chat boost.

## Table of contents

### Properties

- [add\_date](ChatBoost.md#add_date)
- [boost\_id](ChatBoost.md#boost_id)
- [expiration\_date](ChatBoost.md#expiration_date)
- [source](ChatBoost.md#source)

## Properties

### add\_date

• **add\_date**: `number`

Point in time (Unix timestamp) when the chat was boosted

#### Defined in

[manageTypes.d.ts:582](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L582)

___

### boost\_id

• **boost\_id**: `string`

Unique identifier of the boost

#### Defined in

[manageTypes.d.ts:580](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L580)

___

### expiration\_date

• **expiration\_date**: `number`

Point in time (Unix timestamp) when the boost will automatically expire, unless the booster's Telegram Premium subscription is prolonged

#### Defined in

[manageTypes.d.ts:584](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L584)

___

### source

• **source**: [`ChatBoostSource`](../modules.md#chatboostsource)

Source of the added boost

#### Defined in

[manageTypes.d.ts:586](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L586)
