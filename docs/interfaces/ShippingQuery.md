[@telegram.ts/types](../README.md) / [Exports](../modules.md) / ShippingQuery

# Interface: ShippingQuery

This interface contains information about an incoming shipping query.

## Table of contents

### Properties

- [from](ShippingQuery.md#from)
- [id](ShippingQuery.md#id)
- [invoice\_payload](ShippingQuery.md#invoice_payload)
- [shipping\_address](ShippingQuery.md#shipping_address)

## Properties

### from

• **from**: [`User`](User.md)

The user who sent the query.

#### Defined in

[invoiceTypes.d.ts:115](https://github.com/telegramsjs/types/blob/d08200f/src/invoiceTypes.d.ts#L115)

___

### id

• **id**: `string`

The unique query identifier.

#### Defined in

[invoiceTypes.d.ts:113](https://github.com/telegramsjs/types/blob/d08200f/src/invoiceTypes.d.ts#L113)

___

### invoice\_payload

• **invoice\_payload**: `string`

The bot-specified invoice payload.

#### Defined in

[invoiceTypes.d.ts:117](https://github.com/telegramsjs/types/blob/d08200f/src/invoiceTypes.d.ts#L117)

___

### shipping\_address

• **shipping\_address**: [`ShippingAddress`](ShippingAddress.md)

The user-specified shipping address.

#### Defined in

[invoiceTypes.d.ts:119](https://github.com/telegramsjs/types/blob/d08200f/src/invoiceTypes.d.ts#L119)
