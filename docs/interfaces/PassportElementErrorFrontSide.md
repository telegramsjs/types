[@telegram.ts/types](../README.md) / [Exports](../modules.md) / PassportElementErrorFrontSide

# Interface: PassportElementErrorFrontSide

Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.

## Table of contents

### Properties

- [file\_hash](PassportElementErrorFrontSide.md#file_hash)
- [message](PassportElementErrorFrontSide.md#message)
- [source](PassportElementErrorFrontSide.md#source)
- [type](PassportElementErrorFrontSide.md#type)

## Properties

### file\_hash

• **file\_hash**: `string`

Base64-encoded hash of the file with the front side of the document.

#### Defined in

[passportTypes.d.ts:119](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L119)

___

### message

• **message**: `string`

Error message.

#### Defined in

[passportTypes.d.ts:121](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L121)

___

### source

• **source**: ``"front_side"``

Error source, must be "front_side".

#### Defined in

[passportTypes.d.ts:115](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L115)

___

### type

• **type**: ``"passport"`` \| ``"driver_license"`` \| ``"identity_card"`` \| ``"internal_passport"``

The section of the user's Telegram Passport that has the issue. Possible values are "passport", "driver_license", "identity_card", and "internal_passport".

#### Defined in

[passportTypes.d.ts:117](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L117)
