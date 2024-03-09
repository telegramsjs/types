[@telegram.ts/types](../README.md) / [Exports](../modules.md) / File

# Interface: File

This object represents a file ready to be downloaded. The file can be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile.

## Table of contents

### Properties

- [file\_id](File.md#file_id)
- [file\_path](File.md#file_path)
- [file\_size](File.md#file_size)
- [file\_unique\_id](File.md#file_unique_id)

## Properties

### file\_id

• **file\_id**: `string`

Identifier for this file, which can be used to download or reuse the file

#### Defined in

[messageTypes.d.ts:1103](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1103)

___

### file\_path

• `Optional` **file\_path**: `string`

File path. Use https://api.telegram.org/file/bot<token>/<file_path> to get the file.

#### Defined in

[messageTypes.d.ts:1109](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1109)

___

### file\_size

• `Optional` **file\_size**: `number`

File size in bytes

#### Defined in

[messageTypes.d.ts:1107](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1107)

___

### file\_unique\_id

• **file\_unique\_id**: `string`

Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.

#### Defined in

[messageTypes.d.ts:1105](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1105)
