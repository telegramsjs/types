[@telegram.ts/types](../README.md) / [Exports](../modules.md) / PreCheckoutQuery

# Interface: PreCheckoutQuery

This interface contains information about an incoming pre-checkout query.

## Table of contents

### Properties

- [currency](PreCheckoutQuery.md#currency)
- [from](PreCheckoutQuery.md#from)
- [id](PreCheckoutQuery.md#id)
- [invoice\_payload](PreCheckoutQuery.md#invoice_payload)
- [order\_info](PreCheckoutQuery.md#order_info)
- [shipping\_option\_id](PreCheckoutQuery.md#shipping_option_id)
- [total\_amount](PreCheckoutQuery.md#total_amount)

## Properties

### currency

• **currency**: `string`

The three-letter ISO 4217 currency code.

#### Defined in

[invoiceTypes.d.ts:131](https://github.com/telegramsjs/types/blob/d08200f/src/invoiceTypes.d.ts#L131)

___

### from

• **from**: [`User`](User.md)

The user who sent the query.

#### Defined in

[invoiceTypes.d.ts:129](https://github.com/telegramsjs/types/blob/d08200f/src/invoiceTypes.d.ts#L129)

___

### id

• **id**: `string`

The unique query identifier.

#### Defined in

[invoiceTypes.d.ts:127](https://github.com/telegramsjs/types/blob/d08200f/src/invoiceTypes.d.ts#L127)

___

### invoice\_payload

• **invoice\_payload**: `string`

The bot-specified invoice payload.

#### Defined in

[invoiceTypes.d.ts:140](https://github.com/telegramsjs/types/blob/d08200f/src/invoiceTypes.d.ts#L140)

___

### order\_info

• `Optional` **order\_info**: [`OrderInfo`](OrderInfo.md)

The order information provided by the user.

#### Defined in

[invoiceTypes.d.ts:144](https://github.com/telegramsjs/types/blob/d08200f/src/invoiceTypes.d.ts#L144)

___

### shipping\_option\_id

• `Optional` **shipping\_option\_id**: `string`

The identifier of the shipping option chosen by the user.

#### Defined in

[invoiceTypes.d.ts:142](https://github.com/telegramsjs/types/blob/d08200f/src/invoiceTypes.d.ts#L142)

___

### total\_amount

• **total\_amount**: `number`

The total price in the smallest units of the currency (integer, not float/double).
For example, for a price of US$ 1.45, the total_amount would be 145.
See the 'exp' parameter in currencies.json for the number of digits past the decimal point for each currency
(2 for the majority of currencies).

#### Defined in

[invoiceTypes.d.ts:138](https://github.com/telegramsjs/types/blob/d08200f/src/invoiceTypes.d.ts#L138)
