[@telegram.ts/types](../README.md) / [Exports](../modules.md) / PassportElementErrorTranslationFiles

# Interface: PassportElementErrorTranslationFiles

Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation changes.

## Table of contents

### Properties

- [file\_hashes](PassportElementErrorTranslationFiles.md#file_hashes)
- [message](PassportElementErrorTranslationFiles.md#message)
- [source](PassportElementErrorTranslationFiles.md#source)
- [type](PassportElementErrorTranslationFiles.md#type)

## Properties

### file\_hashes

• **file\_hashes**: `string`[]

List of base64-encoded file hashes.

#### Defined in

[passportTypes.d.ts:221](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L221)

___

### message

• **message**: `string`

Error message.

#### Defined in

[passportTypes.d.ts:223](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L223)

___

### source

• **source**: ``"translation_files"``

Error source, must be "translation_files".

#### Defined in

[passportTypes.d.ts:208](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L208)

___

### type

• **type**: ``"passport"`` \| ``"driver_license"`` \| ``"identity_card"`` \| ``"internal_passport"`` \| ``"utility_bill"`` \| ``"bank_statement"`` \| ``"rental_agreement"`` \| ``"passport_registration"`` \| ``"temporary_registration"``

Type of element of the user's Telegram Passport that has the issue. Possible values are "passport", "driver_license", "identity_card", "internal_passport", "utility_bill", "bank_statement", "rental_agreement", "passport_registration", and "temporary_registration".

#### Defined in

[passportTypes.d.ts:210](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L210)
