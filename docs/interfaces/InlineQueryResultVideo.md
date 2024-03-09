[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InlineQueryResultVideo

# Interface: InlineQueryResultVideo

Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.

If an InlineQueryResultVideo message contains an embedded video (e.g., YouTube), you must replace its content using input_message_content.

## Table of contents

### Properties

- [caption](InlineQueryResultVideo.md#caption)
- [caption\_entities](InlineQueryResultVideo.md#caption_entities)
- [description](InlineQueryResultVideo.md#description)
- [id](InlineQueryResultVideo.md#id)
- [input\_message\_content](InlineQueryResultVideo.md#input_message_content)
- [mime\_type](InlineQueryResultVideo.md#mime_type)
- [parse\_mode](InlineQueryResultVideo.md#parse_mode)
- [reply\_markup](InlineQueryResultVideo.md#reply_markup)
- [thumbnail\_url](InlineQueryResultVideo.md#thumbnail_url)
- [title](InlineQueryResultVideo.md#title)
- [type](InlineQueryResultVideo.md#type)
- [video\_duration](InlineQueryResultVideo.md#video_duration)
- [video\_height](InlineQueryResultVideo.md#video_height)
- [video\_url](InlineQueryResultVideo.md#video_url)
- [video\_width](InlineQueryResultVideo.md#video_width)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the video to be sent, 0-1024 characters after entities parsing

#### Defined in

[inlineTypes.d.ts:202](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L202)

___

### caption\_entities

• `Optional` **caption\_entities**: [`MessageEntity`](../modules.md#messageentity)[]

List of special entities that appear in the caption, which can be specified instead of parse_mode

#### Defined in

[inlineTypes.d.ts:206](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L206)

___

### description

• `Optional` **description**: `string`

Short description of the result

#### Defined in

[inlineTypes.d.ts:214](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L214)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[inlineTypes.d.ts:192](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L192)

___

### input\_message\_content

• `Optional` **input\_message\_content**: [`InputMessageContent`](../modules.md#inputmessagecontent)

Content of the message to be sent instead of the video. This field is required if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video).

#### Defined in

[inlineTypes.d.ts:218](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L218)

___

### mime\_type

• **mime\_type**: ``"text/html"`` \| ``"video/mp4"``

MIME type of the content of the video URL, “text/html” or “video/mp4”

#### Defined in

[inlineTypes.d.ts:196](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L196)

___

### parse\_mode

• `Optional` **parse\_mode**: [`ParseMode`](../modules.md#parsemode)

Mode for parsing entities in the video caption. See formatting options for more details.

#### Defined in

[inlineTypes.d.ts:204](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L204)

___

### reply\_markup

• `Optional` **reply\_markup**: [`InlineKeyboardMarkup`](InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[inlineTypes.d.ts:216](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L216)

___

### thumbnail\_url

• **thumbnail\_url**: `string`

URL of the thumbnail (JPEG only) for the video

#### Defined in

[inlineTypes.d.ts:198](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L198)

___

### title

• **title**: `string`

Title for the result

#### Defined in

[inlineTypes.d.ts:200](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L200)

___

### type

• **type**: ``"video"``

Type of the result, must be video

#### Defined in

[inlineTypes.d.ts:190](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L190)

___

### video\_duration

• `Optional` **video\_duration**: `number`

Video duration in seconds

#### Defined in

[inlineTypes.d.ts:212](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L212)

___

### video\_height

• `Optional` **video\_height**: `number`

Video height

#### Defined in

[inlineTypes.d.ts:210](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L210)

___

### video\_url

• **video\_url**: `string`

A valid URL for the embedded video player or video file

#### Defined in

[inlineTypes.d.ts:194](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L194)

___

### video\_width

• `Optional` **video\_width**: `number`

Video width

#### Defined in

[inlineTypes.d.ts:208](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L208)
