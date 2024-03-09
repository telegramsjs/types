[@telegram.ts/types](../README.md) / [Exports](../modules.md) / Invoice

# Interface: Invoice

This interface contains basic information about an invoice.

## Table of contents

### Properties

- [currency](Invoice.md#currency)
- [description](Invoice.md#description)
- [start\_parameter](Invoice.md#start_parameter)
- [title](Invoice.md#title)
- [total\_amount](Invoice.md#total_amount)

## Properties

### currency

• **currency**: `string`

The three-letter ISO 4217 currency code.

#### Defined in

[invoiceTypes.d.ts:29](https://github.com/telegramsjs/types/blob/d08200f/src/invoiceTypes.d.ts#L29)

___

### description

• **description**: `string`

The description of the product.

#### Defined in

[invoiceTypes.d.ts:25](https://github.com/telegramsjs/types/blob/d08200f/src/invoiceTypes.d.ts#L25)

___

### start\_parameter

• **start\_parameter**: `string`

A unique bot deep-linking parameter that can be used to generate this invoice.

#### Defined in

[invoiceTypes.d.ts:27](https://github.com/telegramsjs/types/blob/d08200f/src/invoiceTypes.d.ts#L27)

___

### title

• **title**: `string`

The name of the product.

#### Defined in

[invoiceTypes.d.ts:23](https://github.com/telegramsjs/types/blob/d08200f/src/invoiceTypes.d.ts#L23)

___

### total\_amount

• **total\_amount**: `number`

The total price in the smallest units of the currency (integer, not float/double).
For example, for a price of US$ 1.45, the total_amount would be 145.
See the 'exp' parameter in currencies.json for the number of digits past the decimal point for each currency
(2 for the majority of currencies).

#### Defined in

[invoiceTypes.d.ts:36](https://github.com/telegramsjs/types/blob/d08200f/src/invoiceTypes.d.ts#L36)
