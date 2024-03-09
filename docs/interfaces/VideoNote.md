[@telegram.ts/types](../README.md) / [Exports](../modules.md) / VideoNote

# Interface: VideoNote

This object represents a video message (available in Telegram apps as of v.4.0).

## Table of contents

### Properties

- [duration](VideoNote.md#duration)
- [file\_id](VideoNote.md#file_id)
- [file\_size](VideoNote.md#file_size)
- [file\_unique\_id](VideoNote.md#file_unique_id)
- [length](VideoNote.md#length)
- [thumbnail](VideoNote.md#thumbnail)

## Properties

### duration

• **duration**: `number`

Duration of the video in seconds as defined by sender

#### Defined in

[messageTypes.d.ts:697](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L697)

___

### file\_id

• **file\_id**: `string`

Identifier for this file, which can be used to download or reuse the file

#### Defined in

[messageTypes.d.ts:691](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L691)

___

### file\_size

• `Optional` **file\_size**: `number`

File size in bytes

#### Defined in

[messageTypes.d.ts:701](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L701)

___

### file\_unique\_id

• **file\_unique\_id**: `string`

Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.

#### Defined in

[messageTypes.d.ts:693](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L693)

___

### length

• **length**: `number`

Video width and height (diameter of the video message) as defined by sender

#### Defined in

[messageTypes.d.ts:695](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L695)

___

### thumbnail

• `Optional` **thumbnail**: [`PhotoSize`](PhotoSize.md)

Video thumbnail

#### Defined in

[messageTypes.d.ts:699](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L699)
