[@telegram.ts/types](../README.md) / [Exports](../modules.md) / PassportElementErrorSelfie

# Interface: PassportElementErrorSelfie

Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.

## Table of contents

### Properties

- [file\_hash](PassportElementErrorSelfie.md#file_hash)
- [message](PassportElementErrorSelfie.md#message)
- [source](PassportElementErrorSelfie.md#source)
- [type](PassportElementErrorSelfie.md#type)

## Properties

### file\_hash

• **file\_hash**: `string`

Base64-encoded hash of the file with the selfie.

#### Defined in

[passportTypes.d.ts:145](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L145)

___

### message

• **message**: `string`

Error message.

#### Defined in

[passportTypes.d.ts:147](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L147)

___

### source

• **source**: ``"selfie"``

Error source, must be "selfie".

#### Defined in

[passportTypes.d.ts:141](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L141)

___

### type

• **type**: ``"passport"`` \| ``"driver_license"`` \| ``"identity_card"`` \| ``"internal_passport"``

The section of the user's Telegram Passport that has the issue. Possible values are "passport", "driver_license", "identity_card", and "internal_passport".

#### Defined in

[passportTypes.d.ts:143](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L143)
