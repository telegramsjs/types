[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InlineQueryResultCachedMpeg4Gif

# Interface: InlineQueryResultCachedMpeg4Gif

Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.

## Table of contents

### Properties

- [caption](InlineQueryResultCachedMpeg4Gif.md#caption)
- [caption\_entities](InlineQueryResultCachedMpeg4Gif.md#caption_entities)
- [id](InlineQueryResultCachedMpeg4Gif.md#id)
- [input\_message\_content](InlineQueryResultCachedMpeg4Gif.md#input_message_content)
- [mpeg4\_file\_id](InlineQueryResultCachedMpeg4Gif.md#mpeg4_file_id)
- [parse\_mode](InlineQueryResultCachedMpeg4Gif.md#parse_mode)
- [reply\_markup](InlineQueryResultCachedMpeg4Gif.md#reply_markup)
- [title](InlineQueryResultCachedMpeg4Gif.md#title)
- [type](InlineQueryResultCachedMpeg4Gif.md#type)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing

#### Defined in

[inlineTypes.d.ts:468](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L468)

___

### caption\_entities

• `Optional` **caption\_entities**: [`MessageEntity`](../modules.md#messageentity)[]

List of special entities that appear in the caption, which can be specified instead of parse_mode

#### Defined in

[inlineTypes.d.ts:472](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L472)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[inlineTypes.d.ts:462](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L462)

___

### input\_message\_content

• `Optional` **input\_message\_content**: [`InputMessageContent`](../modules.md#inputmessagecontent)

Content of the message to be sent instead of the video animation

#### Defined in

[inlineTypes.d.ts:476](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L476)

___

### mpeg4\_file\_id

• **mpeg4\_file\_id**: `string`

A valid file identifier for the MPEG4 file

#### Defined in

[inlineTypes.d.ts:464](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L464)

___

### parse\_mode

• `Optional` **parse\_mode**: [`ParseMode`](../modules.md#parsemode)

Mode for parsing entities in the caption. See formatting options for more details.

#### Defined in

[inlineTypes.d.ts:470](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L470)

___

### reply\_markup

• `Optional` **reply\_markup**: [`InlineKeyboardMarkup`](InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[inlineTypes.d.ts:474](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L474)

___

### title

• `Optional` **title**: `string`

Title for the result

#### Defined in

[inlineTypes.d.ts:466](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L466)

___

### type

• **type**: ``"mpeg4_gif"``

Type of the result, must be mpeg4_gif

#### Defined in

[inlineTypes.d.ts:460](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L460)
