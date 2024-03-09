[@telegram.ts/types](../README.md) / [Exports](../modules.md) / ChatBoostRemoved

# Interface: ChatBoostRemoved

This object represents a boost removed from a chat.

## Table of contents

### Properties

- [boost\_id](ChatBoostRemoved.md#boost_id)
- [chat](ChatBoostRemoved.md#chat)
- [remove\_date](ChatBoostRemoved.md#remove_date)
- [source](ChatBoostRemoved.md#source)

## Properties

### boost\_id

• **boost\_id**: `string`

Unique identifier of the boost

#### Defined in

[manageTypes.d.ts:602](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L602)

___

### chat

• **chat**: [`Chat`](../modules.md#chat)

Chat which was boosted

#### Defined in

[manageTypes.d.ts:600](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L600)

___

### remove\_date

• **remove\_date**: `number`

Point in time (Unix timestamp) when the boost was removed

#### Defined in

[manageTypes.d.ts:604](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L604)

___

### source

• **source**: [`ChatBoostSource`](../modules.md#chatboostsource)

Source of the removed boost

#### Defined in

[manageTypes.d.ts:606](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L606)
