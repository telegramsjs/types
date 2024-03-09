[@telegram.ts/types](../README.md) / [Exports](../modules.md) / PassportElementErrorDataField

# Interface: PassportElementErrorDataField

Represents an issue in one of the data fields provided by the user. The error is considered resolved when the field's value changes.

## Table of contents

### Properties

- [data\_hash](PassportElementErrorDataField.md#data_hash)
- [field\_name](PassportElementErrorDataField.md#field_name)
- [message](PassportElementErrorDataField.md#message)
- [source](PassportElementErrorDataField.md#source)
- [type](PassportElementErrorDataField.md#type)

## Properties

### data\_hash

• **data\_hash**: `string`

Base64-encoded data hash.

#### Defined in

[passportTypes.d.ts:107](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L107)

___

### field\_name

• **field\_name**: `string`

Name of the data field that has the error.

#### Defined in

[passportTypes.d.ts:105](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L105)

___

### message

• **message**: `string`

Error message.

#### Defined in

[passportTypes.d.ts:109](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L109)

___

### source

• **source**: ``"data"``

Error source, must be "data".

#### Defined in

[passportTypes.d.ts:95](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L95)

___

### type

• **type**: ``"address"`` \| ``"personal_details"`` \| ``"passport"`` \| ``"driver_license"`` \| ``"identity_card"`` \| ``"internal_passport"``

The section of the user's Telegram Passport that has the error. Possible values are "personal_details", "passport", "driver_license", "identity_card", "internal_passport", and "address".

#### Defined in

[passportTypes.d.ts:97](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L97)
