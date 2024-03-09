[@telegram.ts/types](../README.md) / [Exports](../modules.md) / EncryptedCredentials

# Interface: EncryptedCredentials

Describes data required for decrypting and authenticating EncryptedPassportElement. See the Telegram Passport Documentation for a complete description of the data decryption and authentication processes.

## Table of contents

### Properties

- [data](EncryptedCredentials.md#data)
- [hash](EncryptedCredentials.md#hash)
- [secret](EncryptedCredentials.md#secret)

## Properties

### data

• **data**: `string`

Base64-encoded encrypted JSON-serialized data with the user's payload, data hashes, and secrets required for EncryptedPassportElement decryption and authentication.

#### Defined in

[passportTypes.d.ts:63](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L63)

___

### hash

• **hash**: `string`

Base64-encoded data hash for data authentication.

#### Defined in

[passportTypes.d.ts:65](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L65)

___

### secret

• **secret**: `string`

Base64-encoded secret encrypted with the bot's public RSA key, required for data decryption.

#### Defined in

[passportTypes.d.ts:67](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L67)
