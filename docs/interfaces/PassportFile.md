[@telegram.ts/types](../README.md) / [Exports](../modules.md) / PassportFile

# Interface: PassportFile

This object represents a file uploaded to Telegram Passport. Currently, all Telegram Passport files are in JPEG format when decrypted and do not exceed 10MB.

## Table of contents

### Properties

- [file\_date](PassportFile.md#file_date)
- [file\_id](PassportFile.md#file_id)
- [file\_size](PassportFile.md#file_size)
- [file\_unique\_id](PassportFile.md#file_unique_id)

## Properties

### file\_date

• **file\_date**: `number`

Unix time when the file was uploaded.

#### Defined in

[passportTypes.d.ts:18](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L18)

___

### file\_id

• **file\_id**: `string`

Identifier for this file, which can be used to download or reuse the file.

#### Defined in

[passportTypes.d.ts:12](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L12)

___

### file\_size

• **file\_size**: `number`

File size in bytes.

#### Defined in

[passportTypes.d.ts:16](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L16)

___

### file\_unique\_id

• **file\_unique\_id**: `string`

Unique identifier for this file, which remains the same over time and for different bots. This identifier cannot be used to download or reuse the file.

#### Defined in

[passportTypes.d.ts:14](https://github.com/telegramsjs/types/blob/d08200f/src/passportTypes.d.ts#L14)
