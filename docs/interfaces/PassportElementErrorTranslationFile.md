[@telegram.ts/types](../README.md) / [Exports](../modules.md) / PassportElementErrorTranslationFile

# Interface: PassportElementErrorTranslationFile

Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.

## Table of contents

### Properties

- [file\_hash](PassportElementErrorTranslationFile.md#file_hash)
- [message](PassportElementErrorTranslationFile.md#message)
- [source](PassportElementErrorTranslationFile.md#source)
- [type](PassportElementErrorTranslationFile.md#type)

## Properties

### file\_hash

• **file\_hash**: `string`

Base64-encoded file hash.

#### Defined in

[passportTypes.d.ts:200](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L200)

___

### message

• **message**: `string`

Error message.

#### Defined in

[passportTypes.d.ts:202](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L202)

___

### source

• **source**: ``"translation_file"``

Error source, must be "translation_file".

#### Defined in

[passportTypes.d.ts:187](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L187)

___

### type

• **type**: ``"passport"`` \| ``"driver_license"`` \| ``"identity_card"`` \| ``"internal_passport"`` \| ``"utility_bill"`` \| ``"bank_statement"`` \| ``"rental_agreement"`` \| ``"passport_registration"`` \| ``"temporary_registration"``

Type of element of the user's Telegram Passport that has the issue. Possible values are "passport", "driver_license", "identity_card", "internal_passport", "utility_bill", "bank_statement", "rental_agreement", "passport_registration", and "temporary_registration".

#### Defined in

[passportTypes.d.ts:189](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L189)
