[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InputMediaAnimation

# Interface: InputMediaAnimation

Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent.

## Table of contents

### Properties

- [caption](InputMediaAnimation.md#caption)
- [caption\_entities](InputMediaAnimation.md#caption_entities)
- [duration](InputMediaAnimation.md#duration)
- [has\_spoiler](InputMediaAnimation.md#has_spoiler)
- [height](InputMediaAnimation.md#height)
- [media](InputMediaAnimation.md#media)
- [parse\_mode](InputMediaAnimation.md#parse_mode)
- [thumbnail](InputMediaAnimation.md#thumbnail)
- [type](InputMediaAnimation.md#type)
- [width](InputMediaAnimation.md#width)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the animation to be sent, 0-1024 characters after entities parsing

#### Defined in

[apiMethodsTypes.d.ts:1811](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1811)

___

### caption\_entities

• `Optional` **caption\_entities**: [`MessageEntity`](../modules.md#messageentity)[]

List of special entities that appear in the caption, which can be specified instead of parse_mode

#### Defined in

[apiMethodsTypes.d.ts:1815](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1815)

___

### duration

• `Optional` **duration**: `number`

Animation duration in seconds

#### Defined in

[apiMethodsTypes.d.ts:1821](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1821)

___

### has\_spoiler

• `Optional` **has\_spoiler**: `boolean`

Pass True if the photo needs to be covered with a spoiler animation

#### Defined in

[apiMethodsTypes.d.ts:1823](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1823)

___

### height

• `Optional` **height**: `number`

Animation height

#### Defined in

[apiMethodsTypes.d.ts:1819](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1819)

___

### media

• **media**: `string` \| `Buffer` \| `ReadStream`

File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name.

#### Defined in

[apiMethodsTypes.d.ts:1807](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1807)

___

### parse\_mode

• `Optional` **parse\_mode**: [`ParseMode`](../modules.md#parsemode)

Mode for parsing entities in the animation caption. See formatting options for more details.

#### Defined in

[apiMethodsTypes.d.ts:1813](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1813)

___

### thumbnail

• `Optional` **thumbnail**: `string` \| `Buffer` \| `ReadStream`

Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>.

#### Defined in

[apiMethodsTypes.d.ts:1809](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1809)

___

### type

• **type**: ``"animation"``

Type of the result, must be animation

#### Defined in

[apiMethodsTypes.d.ts:1805](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1805)

___

### width

• `Optional` **width**: `number`

Animation width

#### Defined in

[apiMethodsTypes.d.ts:1817](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1817)
