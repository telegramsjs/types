[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InputMediaAudio

# Interface: InputMediaAudio

Represents an audio file to be treated as music to be sent.

## Table of contents

### Properties

- [caption](InputMediaAudio.md#caption)
- [caption\_entities](InputMediaAudio.md#caption_entities)
- [duration](InputMediaAudio.md#duration)
- [media](InputMediaAudio.md#media)
- [parse\_mode](InputMediaAudio.md#parse_mode)
- [performer](InputMediaAudio.md#performer)
- [thumbnail](InputMediaAudio.md#thumbnail)
- [title](InputMediaAudio.md#title)
- [type](InputMediaAudio.md#type)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the audio to be sent, 0-1024 characters after entities parsing

#### Defined in

[apiMethodsTypes.d.ts:1835](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1835)

___

### caption\_entities

• `Optional` **caption\_entities**: [`MessageEntity`](../modules.md#messageentity)[]

List of special entities that appear in the caption, which can be specified instead of parse_mode

#### Defined in

[apiMethodsTypes.d.ts:1839](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1839)

___

### duration

• `Optional` **duration**: `number`

Duration of the audio in seconds

#### Defined in

[apiMethodsTypes.d.ts:1841](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1841)

___

### media

• **media**: `string` \| `Buffer` \| `ReadStream`

File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name.

#### Defined in

[apiMethodsTypes.d.ts:1831](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1831)

___

### parse\_mode

• `Optional` **parse\_mode**: [`ParseMode`](../modules.md#parsemode)

Mode for parsing entities in the audio caption. See formatting options for more details.

#### Defined in

[apiMethodsTypes.d.ts:1837](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1837)

___

### performer

• `Optional` **performer**: `string`

Performer of the audio

#### Defined in

[apiMethodsTypes.d.ts:1843](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1843)

___

### thumbnail

• `Optional` **thumbnail**: `string` \| `Buffer` \| `ReadStream`

Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>.

#### Defined in

[apiMethodsTypes.d.ts:1833](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1833)

___

### title

• `Optional` **title**: `string`

Title of the audio

#### Defined in

[apiMethodsTypes.d.ts:1845](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1845)

___

### type

• **type**: ``"audio"``

Type of the result, must be audio

#### Defined in

[apiMethodsTypes.d.ts:1829](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1829)
