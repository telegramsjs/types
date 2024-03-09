[@telegram.ts/types](../README.md) / [Exports](../modules.md) / Document

# Interface: Document

This object represents a general file (as opposed to photos, voice messages and audio files).

## Table of contents

### Properties

- [file\_id](Document.md#file_id)
- [file\_name](Document.md#file_name)
- [file\_size](Document.md#file_size)
- [file\_unique\_id](Document.md#file_unique_id)
- [mime\_type](Document.md#mime_type)
- [thumbnail](Document.md#thumbnail)

## Properties

### file\_id

• **file\_id**: `string`

Identifier for this file, which can be used to download or reuse the file

#### Defined in

[messageTypes.d.ts:653](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L653)

___

### file\_name

• `Optional` **file\_name**: `string`

Original filename as defined by sender

#### Defined in

[messageTypes.d.ts:659](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L659)

___

### file\_size

• `Optional` **file\_size**: `number`

File size in bytes

#### Defined in

[messageTypes.d.ts:663](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L663)

___

### file\_unique\_id

• **file\_unique\_id**: `string`

Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.

#### Defined in

[messageTypes.d.ts:655](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L655)

___

### mime\_type

• `Optional` **mime\_type**: `string`

MIME type of the file as defined by sender

#### Defined in

[messageTypes.d.ts:661](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L661)

___

### thumbnail

• `Optional` **thumbnail**: [`PhotoSize`](PhotoSize.md)

Document thumbnail as defined by sender

#### Defined in

[messageTypes.d.ts:657](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L657)
