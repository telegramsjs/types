[@telegram.ts/types](../README.md) / [Exports](../modules.md) / LabeledPrice

# Interface: LabeledPrice

This interface represents a labeled portion of the price for goods or services.

## Table of contents

### Properties

- [amount](LabeledPrice.md#amount)
- [label](LabeledPrice.md#label)

## Properties

### amount

• **amount**: `number`

The price of the product in the smallest units of the currency (integer, not float/double).
For example, for a price of US$ 1.45, the amount would be 145.
See the 'exp' parameter in currencies.json for the number of digits past the decimal point for each currency
(2 for the majority of currencies).

#### Defined in

[invoiceTypes.d.ts:15](https://github.com/telegramsjs/types/blob/d08200f/src/invoiceTypes.d.ts#L15)

___

### label

• **label**: `string`

The label of the portion.

#### Defined in

[invoiceTypes.d.ts:8](https://github.com/telegramsjs/types/blob/d08200f/src/invoiceTypes.d.ts#L8)
