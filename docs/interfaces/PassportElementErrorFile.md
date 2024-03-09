[@telegram.ts/types](../README.md) / [Exports](../modules.md) / PassportElementErrorFile

# Interface: PassportElementErrorFile

Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.

## Table of contents

### Properties

- [file\_hash](PassportElementErrorFile.md#file_hash)
- [message](PassportElementErrorFile.md#message)
- [source](PassportElementErrorFile.md#source)
- [type](PassportElementErrorFile.md#type)

## Properties

### file\_hash

• **file\_hash**: `string`

Base64-encoded file hash.

#### Defined in

[passportTypes.d.ts:162](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L162)

___

### message

• **message**: `string`

Error message.

#### Defined in

[passportTypes.d.ts:164](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L164)

___

### source

• **source**: ``"file"``

Error source, must be "file".

#### Defined in

[passportTypes.d.ts:153](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L153)

___

### type

• **type**: ``"utility_bill"`` \| ``"bank_statement"`` \| ``"rental_agreement"`` \| ``"passport_registration"`` \| ``"temporary_registration"``

The section of the user's Telegram Passport that has the issue. Possible values are "utility_bill", "bank_statement", "rental_agreement", "passport_registration", and "temporary_registration".

#### Defined in

[passportTypes.d.ts:155](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L155)
