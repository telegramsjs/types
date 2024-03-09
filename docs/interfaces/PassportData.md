[@telegram.ts/types](../README.md) / [Exports](../modules.md) / PassportData

# Interface: PassportData

Describes the user's Telegram Passport data shared with the bot.

## Table of contents

### Properties

- [credentials](PassportData.md#credentials)
- [data](PassportData.md#data)

## Properties

### credentials

• **credentials**: [`EncryptedCredentials`](EncryptedCredentials.md)

Encrypted credentials required to decrypt the data.

#### Defined in

[passportTypes.d.ts:6](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L6)

___

### data

• **data**: [`EncryptedPassportElement`](EncryptedPassportElement.md)[]

Array containing information about documents and other Telegram Passport elements shared with the bot.

#### Defined in

[passportTypes.d.ts:4](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L4)
