[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InlineQueryResultDocument

# Interface: InlineQueryResultDocument

Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file. Currently, only .PDF and .ZIP files can be sent using this method.

Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.

## Table of contents

### Properties

- [caption](InlineQueryResultDocument.md#caption)
- [caption\_entities](InlineQueryResultDocument.md#caption_entities)
- [description](InlineQueryResultDocument.md#description)
- [document\_url](InlineQueryResultDocument.md#document_url)
- [id](InlineQueryResultDocument.md#id)
- [input\_message\_content](InlineQueryResultDocument.md#input_message_content)
- [mime\_type](InlineQueryResultDocument.md#mime_type)
- [parse\_mode](InlineQueryResultDocument.md#parse_mode)
- [reply\_markup](InlineQueryResultDocument.md#reply_markup)
- [thumbnail\_height](InlineQueryResultDocument.md#thumbnail_height)
- [thumbnail\_url](InlineQueryResultDocument.md#thumbnail_url)
- [thumbnail\_width](InlineQueryResultDocument.md#thumbnail_width)
- [title](InlineQueryResultDocument.md#title)
- [type](InlineQueryResultDocument.md#type)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the document to be sent, 0-1024 characters after entities parsing

#### Defined in

[inlineTypes.d.ts:283](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L283)

___

### caption\_entities

• `Optional` **caption\_entities**: [`MessageEntity`](../modules.md#messageentity)[]

List of special entities that appear in the caption, which can be specified instead of parse_mode

#### Defined in

[inlineTypes.d.ts:287](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L287)

___

### description

• `Optional` **description**: `string`

Short description of the result

#### Defined in

[inlineTypes.d.ts:293](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L293)

___

### document\_url

• **document\_url**: `string`

A valid URL for the file

#### Defined in

[inlineTypes.d.ts:289](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L289)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[inlineTypes.d.ts:279](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L279)

___

### input\_message\_content

• `Optional` **input\_message\_content**: [`InputMessageContent`](../modules.md#inputmessagecontent)

Content of the message to be sent instead of the file

#### Defined in

[inlineTypes.d.ts:297](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L297)

___

### mime\_type

• **mime\_type**: ``"application/pdf"`` \| ``"application/zip"``

MIME type of the content of the file, either “application/pdf” or “application/zip”

#### Defined in

[inlineTypes.d.ts:291](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L291)

___

### parse\_mode

• `Optional` **parse\_mode**: [`ParseMode`](../modules.md#parsemode)

Mode for parsing entities in the document caption. See formatting options for more details.

#### Defined in

[inlineTypes.d.ts:285](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L285)

___

### reply\_markup

• `Optional` **reply\_markup**: [`InlineKeyboardMarkup`](InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[inlineTypes.d.ts:295](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L295)

___

### thumbnail\_height

• `Optional` **thumbnail\_height**: `number`

Thumbnail height

#### Defined in

[inlineTypes.d.ts:303](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L303)

___

### thumbnail\_url

• `Optional` **thumbnail\_url**: `string`

URL of the thumbnail (JPEG only) for the file

#### Defined in

[inlineTypes.d.ts:299](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L299)

___

### thumbnail\_width

• `Optional` **thumbnail\_width**: `number`

Thumbnail width

#### Defined in

[inlineTypes.d.ts:301](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L301)

___

### title

• **title**: `string`

Title for the result

#### Defined in

[inlineTypes.d.ts:281](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L281)

___

### type

• **type**: ``"document"``

Type of the result, must be document

#### Defined in

[inlineTypes.d.ts:277](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L277)
