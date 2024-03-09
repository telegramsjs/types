[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InlineQueryResultGif

# Interface: InlineQueryResultGif

Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.

## Table of contents

### Properties

- [caption](InlineQueryResultGif.md#caption)
- [caption\_entities](InlineQueryResultGif.md#caption_entities)
- [gif\_duration](InlineQueryResultGif.md#gif_duration)
- [gif\_height](InlineQueryResultGif.md#gif_height)
- [gif\_url](InlineQueryResultGif.md#gif_url)
- [gif\_width](InlineQueryResultGif.md#gif_width)
- [id](InlineQueryResultGif.md#id)
- [input\_message\_content](InlineQueryResultGif.md#input_message_content)
- [parse\_mode](InlineQueryResultGif.md#parse_mode)
- [reply\_markup](InlineQueryResultGif.md#reply_markup)
- [thumbnail\_mime\_type](InlineQueryResultGif.md#thumbnail_mime_type)
- [thumbnail\_url](InlineQueryResultGif.md#thumbnail_url)
- [title](InlineQueryResultGif.md#title)
- [type](InlineQueryResultGif.md#type)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the GIF file to be sent, 0-1024 characters after entities parsing

#### Defined in

[inlineTypes.d.ts:144](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L144)

___

### caption\_entities

• `Optional` **caption\_entities**: [`MessageEntity`](../modules.md#messageentity)[]

List of special entities that appear in the caption, which can be specified instead of parse_mode

#### Defined in

[inlineTypes.d.ts:148](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L148)

___

### gif\_duration

• `Optional` **gif\_duration**: `number`

Duration of the GIF in seconds

#### Defined in

[inlineTypes.d.ts:136](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L136)

___

### gif\_height

• `Optional` **gif\_height**: `number`

Height of the GIF

#### Defined in

[inlineTypes.d.ts:134](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L134)

___

### gif\_url

• **gif\_url**: `string`

A valid URL for the GIF file. File size must not exceed 1MB

#### Defined in

[inlineTypes.d.ts:130](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L130)

___

### gif\_width

• `Optional` **gif\_width**: `number`

Width of the GIF

#### Defined in

[inlineTypes.d.ts:132](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L132)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[inlineTypes.d.ts:128](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L128)

___

### input\_message\_content

• `Optional` **input\_message\_content**: [`InputMessageContent`](../modules.md#inputmessagecontent)

Content of the message to be sent instead of the GIF animation

#### Defined in

[inlineTypes.d.ts:152](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L152)

___

### parse\_mode

• `Optional` **parse\_mode**: [`ParseMode`](../modules.md#parsemode)

Mode for parsing entities in the caption. See formatting options for more details.

#### Defined in

[inlineTypes.d.ts:146](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L146)

___

### reply\_markup

• `Optional` **reply\_markup**: [`InlineKeyboardMarkup`](InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[inlineTypes.d.ts:150](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L150)

___

### thumbnail\_mime\_type

• `Optional` **thumbnail\_mime\_type**: ``"image/jpeg"`` \| ``"image/gif"`` \| ``"video/mp4"``

MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”

#### Defined in

[inlineTypes.d.ts:140](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L140)

___

### thumbnail\_url

• **thumbnail\_url**: `string`

URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result

#### Defined in

[inlineTypes.d.ts:138](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L138)

___

### title

• `Optional` **title**: `string`

Title for the result

#### Defined in

[inlineTypes.d.ts:142](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L142)

___

### type

• **type**: ``"gif"``

Type of the result, must be gif

#### Defined in

[inlineTypes.d.ts:126](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L126)
