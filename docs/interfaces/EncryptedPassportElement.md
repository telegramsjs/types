[@telegram.ts/types](../README.md) / [Exports](../modules.md) / EncryptedPassportElement

# Interface: EncryptedPassportElement

Describes documents or other Telegram Passport elements shared with the bot by the user.

## Table of contents

### Properties

- [data](EncryptedPassportElement.md#data)
- [email](EncryptedPassportElement.md#email)
- [files](EncryptedPassportElement.md#files)
- [front\_side](EncryptedPassportElement.md#front_side)
- [hash](EncryptedPassportElement.md#hash)
- [phone\_number](EncryptedPassportElement.md#phone_number)
- [reverse\_side](EncryptedPassportElement.md#reverse_side)
- [selfie](EncryptedPassportElement.md#selfie)
- [translation](EncryptedPassportElement.md#translation)
- [type](EncryptedPassportElement.md#type)

## Properties

### data

• `Optional` **data**: `string`

Base64-encoded encrypted Telegram Passport element data provided by the user. This data is available for types "personal_details", "passport", "driver_license", "identity_card", "internal_passport", and "address". It can be decrypted and verified using the accompanying EncryptedCredentials.

#### Defined in

[passportTypes.d.ts:39](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L39)

___

### email

• `Optional` **email**: `string`

User's verified email address, available only for type "email".

#### Defined in

[passportTypes.d.ts:43](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L43)

___

### files

• `Optional` **files**: [`PassportFile`](PassportFile.md)[]

Array of encrypted files with documents provided by the user. This array is available for types "utility_bill", "bank_statement", "rental_agreement", "passport_registration", and "temporary_registration". The files can be decrypted and verified using the accompanying EncryptedCredentials.

#### Defined in

[passportTypes.d.ts:45](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L45)

___

### front\_side

• `Optional` **front\_side**: [`PassportFile`](PassportFile.md)

Encrypted file with the front side of the document, provided by the user. This file is available for types "passport", "driver_license", "identity_card", and "internal_passport". It can be decrypted and verified using the accompanying EncryptedCredentials.

#### Defined in

[passportTypes.d.ts:47](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L47)

___

### hash

• **hash**: `string`

Base64-encoded element hash for use in PassportElementErrorUnspecified.

#### Defined in

[passportTypes.d.ts:57](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L57)

___

### phone\_number

• `Optional` **phone\_number**: `string`

User's verified phone number, available only for type "phone_number".

#### Defined in

[passportTypes.d.ts:41](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L41)

___

### reverse\_side

• `Optional` **reverse\_side**: [`PassportFile`](PassportFile.md)

Encrypted file with the reverse side of the document, provided by the user. This file is available for types "driver_license" and "identity_card". It can be decrypted and verified using the accompanying EncryptedCredentials.

#### Defined in

[passportTypes.d.ts:49](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L49)

___

### selfie

• `Optional` **selfie**: [`PassportFile`](PassportFile.md)

Encrypted file with the selfie of the user holding a document, provided by the user. This file is available for types "passport", "driver_license", "identity_card", and "internal_passport". It can be decrypted and verified using the accompanying EncryptedCredentials.

#### Defined in

[passportTypes.d.ts:51](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L51)

___

### translation

• `Optional` **translation**: [`PassportFile`](PassportFile.md)[]

Array of encrypted files with translated versions of documents provided by the user. This array is available for types "passport", "driver_license", "identity_card", "internal_passport", "utility_bill", "bank_statement", "rental_agreement", "passport_registration", and "temporary_registration". The

files can be decrypted and verified using the accompanying EncryptedCredentials.

#### Defined in

[passportTypes.d.ts:55](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L55)

___

### type

• **type**: ``"address"`` \| ``"email"`` \| ``"personal_details"`` \| ``"passport"`` \| ``"driver_license"`` \| ``"identity_card"`` \| ``"internal_passport"`` \| ``"utility_bill"`` \| ``"bank_statement"`` \| ``"rental_agreement"`` \| ``"passport_registration"`` \| ``"temporary_registration"`` \| ``"phone_number"``

Element type. Possible values are "personal_details", "passport", "driver_license", "identity_card", "internal_passport", "address", "utility_bill", "bank_statement", "rental_agreement", "passport_registration", "temporary_registration", "phone_number", and "email".

#### Defined in

[passportTypes.d.ts:24](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L24)
