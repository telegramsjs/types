[@telegram.ts/types](../README.md) / [Exports](../modules.md) / PassportElementErrorUnspecified

# Interface: PassportElementErrorUnspecified

Represents an issue in an unspecified element of the Telegram Passport. The error is considered resolved when new data is added.

## Table of contents

### Properties

- [element\_hash](PassportElementErrorUnspecified.md#element_hash)
- [message](PassportElementErrorUnspecified.md#message)
- [source](PassportElementErrorUnspecified.md#source)
- [type](PassportElementErrorUnspecified.md#type)

## Properties

### element\_hash

• **element\_hash**: `string`

Base64-encoded element hash.

#### Defined in

[passportTypes.d.ts:246](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L246)

___

### message

• **message**: `string`

Error message.

#### Defined in

[passportTypes.d.ts:248](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L248)

___

### source

• **source**: ``"unspecified"``

Error source, must be "unspecified".

#### Defined in

[passportTypes.d.ts:229](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L229)

___

### type

• **type**: ``"address"`` \| ``"email"`` \| ``"personal_details"`` \| ``"passport"`` \| ``"driver_license"`` \| ``"identity_card"`` \| ``"internal_passport"`` \| ``"utility_bill"`` \| ``"bank_statement"`` \| ``"rental_agreement"`` \| ``"passport_registration"`` \| ``"temporary_registration"`` \| ``"phone_number"``

Type of element of the user's Telegram Passport that has the issue. Possible values are "personal_details", "passport", "driver_license", "identity_card", "internal_passport", "address", "utility_bill", "bank_statement", "rental_agreement", "passport_registration", "temporary_registration", "phone_number", and "email".

#### Defined in

[passportTypes.d.ts:231](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L231)
