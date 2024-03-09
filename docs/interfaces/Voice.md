[@telegram.ts/types](../README.md) / [Exports](../modules.md) / Voice

# Interface: Voice

This object represents a voice note.

## Table of contents

### Properties

- [duration](Voice.md#duration)
- [file\_id](Voice.md#file_id)
- [file\_size](Voice.md#file_size)
- [file\_unique\_id](Voice.md#file_unique_id)
- [mime\_type](Voice.md#mime_type)

## Properties

### duration

• **duration**: `number`

Duration of the audio in seconds as defined by sender

#### Defined in

[messageTypes.d.ts:711](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L711)

___

### file\_id

• **file\_id**: `string`

Identifier for this file, which can be used to download or reuse the file

#### Defined in

[messageTypes.d.ts:707](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L707)

___

### file\_size

• `Optional` **file\_size**: `number`

File size in bytes

#### Defined in

[messageTypes.d.ts:715](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L715)

___

### file\_unique\_id

• **file\_unique\_id**: `string`

Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.

#### Defined in

[messageTypes.d.ts:709](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L709)

___

### mime\_type

• `Optional` **mime\_type**: `string`

MIME type of the file as defined by sender

#### Defined in

[messageTypes.d.ts:713](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L713)
