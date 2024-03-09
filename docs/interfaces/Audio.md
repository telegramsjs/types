[@telegram.ts/types](../README.md) / [Exports](../modules.md) / Audio

# Interface: Audio

This object represents an audio file to be treated as music by the Telegram clients.

## Table of contents

### Properties

- [duration](Audio.md#duration)
- [file\_id](Audio.md#file_id)
- [file\_name](Audio.md#file_name)
- [file\_size](Audio.md#file_size)
- [file\_unique\_id](Audio.md#file_unique_id)
- [mime\_type](Audio.md#mime_type)
- [performer](Audio.md#performer)
- [thumbnail](Audio.md#thumbnail)
- [title](Audio.md#title)

## Properties

### duration

• **duration**: `number`

Duration of the audio in seconds as defined by sender

#### Defined in

[messageTypes.d.ts:635](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L635)

___

### file\_id

• **file\_id**: `string`

Identifier for this file, which can be used to download or reuse the file

#### Defined in

[messageTypes.d.ts:631](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L631)

___

### file\_name

• `Optional` **file\_name**: `string`

Original filename as defined by sender

#### Defined in

[messageTypes.d.ts:641](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L641)

___

### file\_size

• `Optional` **file\_size**: `number`

File size in bytes

#### Defined in

[messageTypes.d.ts:645](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L645)

___

### file\_unique\_id

• **file\_unique\_id**: `string`

Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.

#### Defined in

[messageTypes.d.ts:633](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L633)

___

### mime\_type

• `Optional` **mime\_type**: `string`

MIME type of the file as defined by sender

#### Defined in

[messageTypes.d.ts:643](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L643)

___

### performer

• `Optional` **performer**: `string`

Performer of the audio as defined by sender or by audio tags

#### Defined in

[messageTypes.d.ts:637](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L637)

___

### thumbnail

• `Optional` **thumbnail**: [`PhotoSize`](PhotoSize.md)

Thumbnail of the album cover to which the music file belongs

#### Defined in

[messageTypes.d.ts:647](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L647)

___

### title

• `Optional` **title**: `string`

Title of the audio as defined by sender or by audio tags

#### Defined in

[messageTypes.d.ts:639](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L639)
