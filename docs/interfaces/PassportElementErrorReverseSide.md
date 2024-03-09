[@telegram.ts/types](../README.md) / [Exports](../modules.md) / PassportElementErrorReverseSide

# Interface: PassportElementErrorReverseSide

Represents an issue with the reverse side of a document. The error is considered resolved when the file with the reverse side of the document changes.

## Table of contents

### Properties

- [file\_hash](PassportElementErrorReverseSide.md#file_hash)
- [message](PassportElementErrorReverseSide.md#message)
- [source](PassportElementErrorReverseSide.md#source)
- [type](PassportElementErrorReverseSide.md#type)

## Properties

### file\_hash

• **file\_hash**: `string`

Base64-encoded hash of the file with the reverse side

of the document.

#### Defined in

[passportTypes.d.ts:133](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L133)

___

### message

• **message**: `string`

Error message.

#### Defined in

[passportTypes.d.ts:135](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L135)

___

### source

• **source**: ``"reverse_side"``

Error source, must be "reverse_side".

#### Defined in

[passportTypes.d.ts:127](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L127)

___

### type

• **type**: ``"driver_license"`` \| ``"identity_card"``

The section of the user's Telegram Passport that has the issue. Possible values are "driver_license" and "identity_card".

#### Defined in

[passportTypes.d.ts:129](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L129)
