[@telegram.ts/types](../README.md) / [Exports](../modules.md) / Animation

# Interface: Animation

This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).

## Table of contents

### Properties

- [duration](Animation.md#duration)
- [file\_id](Animation.md#file_id)
- [file\_name](Animation.md#file_name)
- [file\_size](Animation.md#file_size)
- [file\_unique\_id](Animation.md#file_unique_id)
- [height](Animation.md#height)
- [mime\_type](Animation.md#mime_type)
- [thumbnail](Animation.md#thumbnail)
- [width](Animation.md#width)

## Properties

### duration

• **duration**: `number`

Duration of the video in seconds as defined by sender

#### Defined in

[messageTypes.d.ts:617](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L617)

___

### file\_id

• **file\_id**: `string`

Identifier for this file, which can be used to download or reuse the file

#### Defined in

[messageTypes.d.ts:609](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L609)

___

### file\_name

• `Optional` **file\_name**: `string`

Original animation filename as defined by sender

#### Defined in

[messageTypes.d.ts:621](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L621)

___

### file\_size

• `Optional` **file\_size**: `number`

File size in bytes

#### Defined in

[messageTypes.d.ts:625](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L625)

___

### file\_unique\_id

• **file\_unique\_id**: `string`

Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.

#### Defined in

[messageTypes.d.ts:611](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L611)

___

### height

• **height**: `number`

Video height as defined by sender

#### Defined in

[messageTypes.d.ts:615](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L615)

___

### mime\_type

• `Optional` **mime\_type**: `string`

MIME type of the file as defined by sender

#### Defined in

[messageTypes.d.ts:623](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L623)

___

### thumbnail

• `Optional` **thumbnail**: [`PhotoSize`](PhotoSize.md)

Animation thumbnail as defined by sender

#### Defined in

[messageTypes.d.ts:619](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L619)

___

### width

• **width**: `number`

Video width as defined by sender

#### Defined in

[messageTypes.d.ts:613](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L613)
