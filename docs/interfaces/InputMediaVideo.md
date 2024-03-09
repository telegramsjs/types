[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InputMediaVideo

# Interface: InputMediaVideo

Represents a video to be sent.

## Table of contents

### Properties

- [caption](InputMediaVideo.md#caption)
- [caption\_entities](InputMediaVideo.md#caption_entities)
- [duration](InputMediaVideo.md#duration)
- [has\_spoiler](InputMediaVideo.md#has_spoiler)
- [height](InputMediaVideo.md#height)
- [media](InputMediaVideo.md#media)
- [parse\_mode](InputMediaVideo.md#parse_mode)
- [supports\_streaming](InputMediaVideo.md#supports_streaming)
- [thumbnail](InputMediaVideo.md#thumbnail)
- [type](InputMediaVideo.md#type)
- [width](InputMediaVideo.md#width)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the video to be sent, 0-1024 characters after entities parsing

#### Defined in

[apiMethodsTypes.d.ts:1785](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1785)

___

### caption\_entities

• `Optional` **caption\_entities**: [`MessageEntity`](../modules.md#messageentity)[]

List of special entities that appear in the caption, which can be specified instead of parse_mode

#### Defined in

[apiMethodsTypes.d.ts:1789](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1789)

___

### duration

• `Optional` **duration**: `number`

Video duration in seconds

#### Defined in

[apiMethodsTypes.d.ts:1795](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1795)

___

### has\_spoiler

• `Optional` **has\_spoiler**: `boolean`

Pass True if the photo needs to be covered with a spoiler animation

#### Defined in

[apiMethodsTypes.d.ts:1799](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1799)

___

### height

• `Optional` **height**: `number`

Video height

#### Defined in

[apiMethodsTypes.d.ts:1793](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1793)

___

### media

• **media**: `string` \| `Buffer` \| `ReadStream`

File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name.

#### Defined in

[apiMethodsTypes.d.ts:1781](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1781)

___

### parse\_mode

• `Optional` **parse\_mode**: [`ParseMode`](../modules.md#parsemode)

Mode for parsing entities in the video caption. See formatting options for more details.

#### Defined in

[apiMethodsTypes.d.ts:1787](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1787)

___

### supports\_streaming

• `Optional` **supports\_streaming**: `boolean`

Pass True if the uploaded video is suitable for streaming

#### Defined in

[apiMethodsTypes.d.ts:1797](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1797)

___

### thumbnail

• `Optional` **thumbnail**: `string` \| `Buffer` \| `ReadStream`

Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>.

#### Defined in

[apiMethodsTypes.d.ts:1783](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1783)

___

### type

• **type**: ``"video"``

Type of the result, must be video

#### Defined in

[apiMethodsTypes.d.ts:1779](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1779)

___

### width

• `Optional` **width**: `number`

Video width

#### Defined in

[apiMethodsTypes.d.ts:1791](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1791)
