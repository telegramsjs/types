[@telegram.ts/types](../README.md) / [Exports](../modules.md) / SuccessfulPayment

# Interface: SuccessfulPayment

This interface contains basic information about a successful payment.

## Table of contents

### Properties

- [currency](SuccessfulPayment.md#currency)
- [invoice\_payload](SuccessfulPayment.md#invoice_payload)
- [order\_info](SuccessfulPayment.md#order_info)
- [provider\_payment\_charge\_id](SuccessfulPayment.md#provider_payment_charge_id)
- [shipping\_option\_id](SuccessfulPayment.md#shipping_option_id)
- [telegram\_payment\_charge\_id](SuccessfulPayment.md#telegram_payment_charge_id)
- [total\_amount](SuccessfulPayment.md#total_amount)

## Properties

### currency

• **currency**: `string`

The three-letter ISO 4217 currency code.

#### Defined in

[invoiceTypes.d.ts:88](https://github.com/telegramsjs/types/blob/d08200f/src/invoiceTypes.d.ts#L88)

___

### invoice\_payload

• **invoice\_payload**: `string`

The bot-specified invoice payload.

#### Defined in

[invoiceTypes.d.ts:97](https://github.com/telegramsjs/types/blob/d08200f/src/invoiceTypes.d.ts#L97)

___

### order\_info

• `Optional` **order\_info**: [`OrderInfo`](OrderInfo.md)

The order information provided by the user.

#### Defined in

[invoiceTypes.d.ts:101](https://github.com/telegramsjs/types/blob/d08200f/src/invoiceTypes.d.ts#L101)

___

### provider\_payment\_charge\_id

• **provider\_payment\_charge\_id**: `string`

The provider payment identifier.

#### Defined in

[invoiceTypes.d.ts:105](https://github.com/telegramsjs/types/blob/d08200f/src/invoiceTypes.d.ts#L105)

___

### shipping\_option\_id

• `Optional` **shipping\_option\_id**: `string`

The identifier of the shipping option chosen by the user.

#### Defined in

[invoiceTypes.d.ts:99](https://github.com/telegramsjs/types/blob/d08200f/src/invoiceTypes.d.ts#L99)

___

### telegram\_payment\_charge\_id

• **telegram\_payment\_charge\_id**: `string`

The Telegram payment identifier.

#### Defined in

[invoiceTypes.d.ts:103](https://github.com/telegramsjs/types/blob/d08200f/src/invoiceTypes.d.ts#L103)

___

### total\_amount

• **total\_amount**: `number`

The total price in the smallest units of the currency (integer, not float/double).
For example, for a price of US$ 1.45, the total_amount would be 145.
See the 'exp' parameter in currencies.json for the number of digits past the decimal point for each currency
(2 for the majority of currencies).

#### Defined in

[invoiceTypes.d.ts:95](https://github.com/telegramsjs/types/blob/d08200f/src/invoiceTypes.d.ts#L95)
