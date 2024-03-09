[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InlineQueryResultCachedVideo

# Interface: InlineQueryResultCachedVideo

Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.

## Table of contents

### Properties

- [caption](InlineQueryResultCachedVideo.md#caption)
- [caption\_entities](InlineQueryResultCachedVideo.md#caption_entities)
- [description](InlineQueryResultCachedVideo.md#description)
- [id](InlineQueryResultCachedVideo.md#id)
- [input\_message\_content](InlineQueryResultCachedVideo.md#input_message_content)
- [parse\_mode](InlineQueryResultCachedVideo.md#parse_mode)
- [reply\_markup](InlineQueryResultCachedVideo.md#reply_markup)
- [title](InlineQueryResultCachedVideo.md#title)
- [type](InlineQueryResultCachedVideo.md#type)
- [video\_file\_id](InlineQueryResultCachedVideo.md#video_file_id)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the video to be sent, 0-1024 characters after entities parsing

#### Defined in

[inlineTypes.d.ts:532](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L532)

___

### caption\_entities

• `Optional` **caption\_entities**: [`MessageEntity`](../modules.md#messageentity)[]

List of special entities that appear in the caption, which can be specified instead of parse_mode

#### Defined in

[inlineTypes.d.ts:536](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L536)

___

### description

• `Optional` **description**: `string`

Short description of the result

#### Defined in

[inlineTypes.d.ts:530](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L530)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[inlineTypes.d.ts:524](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L524)

___

### input\_message\_content

• `Optional` **input\_message\_content**: [`InputMessageContent`](../modules.md#inputmessagecontent)

Content of the message to be sent instead of the video

#### Defined in

[inlineTypes.d.ts:540](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L540)

___

### parse\_mode

• `Optional` **parse\_mode**: [`ParseMode`](../modules.md#parsemode)

Mode for parsing entities in the video caption. See formatting options for more details.

#### Defined in

[inlineTypes.d.ts:534](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L534)

___

### reply\_markup

• `Optional` **reply\_markup**: [`InlineKeyboardMarkup`](InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[inlineTypes.d.ts:538](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L538)

___

### title

• **title**: `string`

Title for the result

#### Defined in

[inlineTypes.d.ts:528](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L528)

___

### type

• **type**: ``"video"``

Type of the result, must be video

#### Defined in

[inlineTypes.d.ts:522](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L522)

___

### video\_file\_id

• **video\_file\_id**: `string`

A valid file identifier for the video file

#### Defined in

[inlineTypes.d.ts:526](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L526)
