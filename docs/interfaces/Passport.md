[@telegram.ts/types](../README.md) / [Exports](../modules.md) / Passport

# Interface: Passport

This object represents a user's Telegram Passport data.

## Table of contents

### Properties

- [credentials](Passport.md#credentials)
- [data](Passport.md#data)

## Properties

### credentials

• **credentials**: [`EncryptedCredentials`](EncryptedCredentials.md)

Encrypted credentials required to decrypt and authenticate the data.

#### Defined in

[passportTypes.d.ts:256](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L256)

___

### data

• **data**: [`EncryptedPassportElement`](EncryptedPassportElement.md)[]

Array with information about documents and other Telegram Passport elements that are shared with the bot.

#### Defined in

[passportTypes.d.ts:254](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L254)
