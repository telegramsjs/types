[@telegram.ts/types](../README.md) / [Exports](../modules.md) / PassportElementErrorFiles

# Interface: PassportElementErrorFiles

Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.

## Table of contents

### Properties

- [file\_hashes](PassportElementErrorFiles.md#file_hashes)
- [message](PassportElementErrorFiles.md#message)
- [source](PassportElementErrorFiles.md#source)
- [type](PassportElementErrorFiles.md#type)

## Properties

### file\_hashes

• **file\_hashes**: `string`[]

List of base64-encoded file hashes.

#### Defined in

[passportTypes.d.ts:179](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L179)

___

### message

• **message**: `string`

Error message.

#### Defined in

[passportTypes.d.ts:181](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L181)

___

### source

• **source**: ``"files"``

Error source, must be "files".

#### Defined in

[passportTypes.d.ts:170](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L170)

___

### type

• **type**: ``"utility_bill"`` \| ``"bank_statement"`` \| ``"rental_agreement"`` \| ``"passport_registration"`` \| ``"temporary_registration"``

The section of the user's Telegram Passport that has the issue. Possible values are "utility_bill", "bank_statement", "rental_agreement", "passport_registration", and "temporary_registration".

#### Defined in

[passportTypes.d.ts:172](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L172)
