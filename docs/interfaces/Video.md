[@telegram.ts/types](../README.md) / [Exports](../modules.md) / Video

# Interface: Video

This object represents a video file.

## Table of contents

### Properties

- [duration](Video.md#duration)
- [file\_id](Video.md#file_id)
- [file\_name](Video.md#file_name)
- [file\_size](Video.md#file_size)
- [file\_unique\_id](Video.md#file_unique_id)
- [height](Video.md#height)
- [mime\_type](Video.md#mime_type)
- [thumbnail](Video.md#thumbnail)
- [width](Video.md#width)

## Properties

### duration

• **duration**: `number`

Duration of the video in seconds as defined by sender

#### Defined in

[messageTypes.d.ts:677](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L677)

___

### file\_id

• **file\_id**: `string`

Identifier for this file, which can be used to download or reuse the file

#### Defined in

[messageTypes.d.ts:669](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L669)

___

### file\_name

• `Optional` **file\_name**: `string`

Original filename as defined by sender

#### Defined in

[messageTypes.d.ts:681](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L681)

___

### file\_size

• `Optional` **file\_size**: `number`

File size in bytes

#### Defined in

[messageTypes.d.ts:685](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L685)

___

### file\_unique\_id

• **file\_unique\_id**: `string`

Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.

#### Defined in

[messageTypes.d.ts:671](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L671)

___

### height

• **height**: `number`

Video height as defined by sender

#### Defined in

[messageTypes.d.ts:675](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L675)

___

### mime\_type

• `Optional` **mime\_type**: `string`

MIME type of the file as defined by sender

#### Defined in

[messageTypes.d.ts:683](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L683)

___

### thumbnail

• `Optional` **thumbnail**: [`PhotoSize`](PhotoSize.md)

Video thumbnail

#### Defined in

[messageTypes.d.ts:679](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L679)

___

### width

• **width**: `number`

Video width as defined by sender

#### Defined in

[messageTypes.d.ts:673](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L673)
