[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InlineQueryResultMpeg4Gif

# Interface: InlineQueryResultMpeg4Gif

Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.

## Table of contents

### Properties

- [caption](InlineQueryResultMpeg4Gif.md#caption)
- [caption\_entities](InlineQueryResultMpeg4Gif.md#caption_entities)
- [id](InlineQueryResultMpeg4Gif.md#id)
- [input\_message\_content](InlineQueryResultMpeg4Gif.md#input_message_content)
- [mpeg4\_duration](InlineQueryResultMpeg4Gif.md#mpeg4_duration)
- [mpeg4\_height](InlineQueryResultMpeg4Gif.md#mpeg4_height)
- [mpeg4\_url](InlineQueryResultMpeg4Gif.md#mpeg4_url)
- [mpeg4\_width](InlineQueryResultMpeg4Gif.md#mpeg4_width)
- [parse\_mode](InlineQueryResultMpeg4Gif.md#parse_mode)
- [reply\_markup](InlineQueryResultMpeg4Gif.md#reply_markup)
- [thumbnail\_mime\_type](InlineQueryResultMpeg4Gif.md#thumbnail_mime_type)
- [thumbnail\_url](InlineQueryResultMpeg4Gif.md#thumbnail_url)
- [title](InlineQueryResultMpeg4Gif.md#title)
- [type](InlineQueryResultMpeg4Gif.md#type)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing

#### Defined in

[inlineTypes.d.ts:175](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L175)

___

### caption\_entities

• `Optional` **caption\_entities**: [`MessageEntity`](../modules.md#messageentity)[]

List of special entities that appear in the caption, which can be specified instead of parse_mode

#### Defined in

[inlineTypes.d.ts:179](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L179)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[inlineTypes.d.ts:159](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L159)

___

### input\_message\_content

• `Optional` **input\_message\_content**: [`InputMessageContent`](../modules.md#inputmessagecontent)

Content of the message to be sent instead of the video animation

#### Defined in

[inlineTypes.d.ts:183](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L183)

___

### mpeg4\_duration

• `Optional` **mpeg4\_duration**: `number`

Video duration in seconds

#### Defined in

[inlineTypes.d.ts:167](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L167)

___

### mpeg4\_height

• `Optional` **mpeg4\_height**: `number`

Video height

#### Defined in

[inlineTypes.d.ts:165](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L165)

___

### mpeg4\_url

• **mpeg4\_url**: `string`

A valid URL for the MPEG4 file. File size must not exceed 1MB

#### Defined in

[inlineTypes.d.ts:161](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L161)

___

### mpeg4\_width

• `Optional` **mpeg4\_width**: `number`

Video width

#### Defined in

[inlineTypes.d.ts:163](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L163)

___

### parse\_mode

• `Optional` **parse\_mode**: [`ParseMode`](../modules.md#parsemode)

Mode for parsing entities in the caption. See formatting options for more details.

#### Defined in

[inlineTypes.d.ts:177](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L177)

___

### reply\_markup

• `Optional` **reply\_markup**: [`InlineKeyboardMarkup`](InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[inlineTypes.d.ts:181](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L181)

___

### thumbnail\_mime\_type

• `Optional` **thumbnail\_mime\_type**: ``"image/jpeg"`` \| ``"image/gif"`` \| ``"video/mp4"``

MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”

#### Defined in

[inlineTypes.d.ts:171](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L171)

___

### thumbnail\_url

• **thumbnail\_url**: `string`

URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result

#### Defined in

[inlineTypes.d.ts:169](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L169)

___

### title

• `Optional` **title**: `string`

Title for the result

#### Defined in

[inlineTypes.d.ts:173](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L173)

___

### type

• **type**: ``"mpeg4_gif"``

Type of the result, must be mpeg4_gif

#### Defined in

[inlineTypes.d.ts:157](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L157)
