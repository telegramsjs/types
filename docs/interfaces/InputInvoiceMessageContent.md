[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InputInvoiceMessageContent

# Interface: InputInvoiceMessageContent

Represents the content of an invoice message to be sent as the result of an inline query.

## Table of contents

### Properties

- [currency](InputInvoiceMessageContent.md#currency)
- [description](InputInvoiceMessageContent.md#description)
- [is\_flexible](InputInvoiceMessageContent.md#is_flexible)
- [max\_tip\_amount](InputInvoiceMessageContent.md#max_tip_amount)
- [need\_email](InputInvoiceMessageContent.md#need_email)
- [need\_name](InputInvoiceMessageContent.md#need_name)
- [need\_phone\_number](InputInvoiceMessageContent.md#need_phone_number)
- [need\_shipping\_address](InputInvoiceMessageContent.md#need_shipping_address)
- [payload](InputInvoiceMessageContent.md#payload)
- [photo\_height](InputInvoiceMessageContent.md#photo_height)
- [photo\_size](InputInvoiceMessageContent.md#photo_size)
- [photo\_url](InputInvoiceMessageContent.md#photo_url)
- [photo\_width](InputInvoiceMessageContent.md#photo_width)
- [prices](InputInvoiceMessageContent.md#prices)
- [provider\_data](InputInvoiceMessageContent.md#provider_data)
- [provider\_token](InputInvoiceMessageContent.md#provider_token)
- [send\_email\_to\_provider](InputInvoiceMessageContent.md#send_email_to_provider)
- [send\_phone\_number\_to\_provider](InputInvoiceMessageContent.md#send_phone_number_to_provider)
- [suggested\_tip\_amounts](InputInvoiceMessageContent.md#suggested_tip_amounts)
- [title](InputInvoiceMessageContent.md#title)

## Properties

### currency

• **currency**: `string`

Three-letter ISO 4217 currency code, see more on currencies

#### Defined in

[inlineTypes.d.ts:666](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L666)

___

### description

• **description**: `string`

Product description, 1-255 characters

#### Defined in

[inlineTypes.d.ts:660](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L660)

___

### is\_flexible

• `Optional` **is\_flexible**: `boolean`

Pass True if the final price depends on the shipping method

#### Defined in

[inlineTypes.d.ts:696](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L696)

___

### max\_tip\_amount

• `Optional` **max\_tip\_amount**: `number`

The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0

#### Defined in

[inlineTypes.d.ts:670](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L670)

___

### need\_email

• `Optional` **need\_email**: `boolean`

Pass True if you require the user's email address to complete the order

#### Defined in

[inlineTypes.d.ts:688](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L688)

___

### need\_name

• `Optional` **need\_name**: `boolean`

Pass True if you require the user's full name to complete the order

#### Defined in

[inlineTypes.d.ts:684](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L684)

___

### need\_phone\_number

• `Optional` **need\_phone\_number**: `boolean`

Pass True if you require the user's phone number to complete the order

#### Defined in

[inlineTypes.d.ts:686](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L686)

___

### need\_shipping\_address

• `Optional` **need\_shipping\_address**: `boolean`

Pass True if you require the user's shipping address to complete the order

#### Defined in

[inlineTypes.d.ts:690](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L690)

___

### payload

• **payload**: `string`

Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes.

#### Defined in

[inlineTypes.d.ts:662](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L662)

___

### photo\_height

• `Optional` **photo\_height**: `number`

Photo height

#### Defined in

[inlineTypes.d.ts:682](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L682)

___

### photo\_size

• `Optional` **photo\_size**: `number`

Photo size in bytes

#### Defined in

[inlineTypes.d.ts:678](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L678)

___

### photo\_url

• `Optional` **photo\_url**: `string`

URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.

#### Defined in

[inlineTypes.d.ts:676](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L676)

___

### photo\_width

• `Optional` **photo\_width**: `number`

Photo width

#### Defined in

[inlineTypes.d.ts:680](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L680)

___

### prices

• **prices**: [`LabeledPrice`](LabeledPrice.md)[]

Price breakdown, a list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)

#### Defined in

[inlineTypes.d.ts:668](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L668)

___

### provider\_data

• `Optional` **provider\_data**: `string`

Data about the invoice, which will be shared with the payment provider. A detailed description of the required fields should be provided by the payment provider.

#### Defined in

[inlineTypes.d.ts:674](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L674)

___

### provider\_token

• **provider\_token**: `string`

Payment provider token, obtained via BotFather

#### Defined in

[inlineTypes.d.ts:664](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L664)

___

### send\_email\_to\_provider

• `Optional` **send\_email\_to\_provider**: `boolean`

Pass True if the user's email address should be sent to provider

#### Defined in

[inlineTypes.d.ts:694](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L694)

___

### send\_phone\_number\_to\_provider

• `Optional` **send\_phone\_number\_to\_provider**: `boolean`

Pass True if the user's phone number should be sent to provider

#### Defined in

[inlineTypes.d.ts:692](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L692)

___

### suggested\_tip\_amounts

• `Optional` **suggested\_tip\_amounts**: `number`[]

An array of suggested amounts of tip in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.

#### Defined in

[inlineTypes.d.ts:672](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L672)

___

### title

• **title**: `string`

Product name, 1-32 characters

#### Defined in

[inlineTypes.d.ts:658](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L658)
