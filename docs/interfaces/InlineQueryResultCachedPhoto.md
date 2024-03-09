[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InlineQueryResultCachedPhoto

# Interface: InlineQueryResultCachedPhoto

Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.

## Table of contents

### Properties

- [caption](InlineQueryResultCachedPhoto.md#caption)
- [caption\_entities](InlineQueryResultCachedPhoto.md#caption_entities)
- [description](InlineQueryResultCachedPhoto.md#description)
- [id](InlineQueryResultCachedPhoto.md#id)
- [input\_message\_content](InlineQueryResultCachedPhoto.md#input_message_content)
- [parse\_mode](InlineQueryResultCachedPhoto.md#parse_mode)
- [photo\_file\_id](InlineQueryResultCachedPhoto.md#photo_file_id)
- [reply\_markup](InlineQueryResultCachedPhoto.md#reply_markup)
- [title](InlineQueryResultCachedPhoto.md#title)
- [type](InlineQueryResultCachedPhoto.md#type)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the photo to be sent, 0-1024 characters after entities parsing

#### Defined in

[inlineTypes.d.ts:426](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L426)

___

### caption\_entities

• `Optional` **caption\_entities**: [`MessageEntity`](../modules.md#messageentity)[]

List of special entities that appear in the caption, which can be specified instead of parse_mode

#### Defined in

[inlineTypes.d.ts:430](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L430)

___

### description

• `Optional` **description**: `string`

Short description of the result

#### Defined in

[inlineTypes.d.ts:424](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L424)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[inlineTypes.d.ts:418](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L418)

___

### input\_message\_content

• `Optional` **input\_message\_content**: [`InputMessageContent`](../modules.md#inputmessagecontent)

Content of the message to be sent instead of the photo

#### Defined in

[inlineTypes.d.ts:434](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L434)

___

### parse\_mode

• `Optional` **parse\_mode**: [`ParseMode`](../modules.md#parsemode)

Mode for parsing entities in the photo caption. See formatting options for more details.

#### Defined in

[inlineTypes.d.ts:428](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L428)

___

### photo\_file\_id

• **photo\_file\_id**: `string`

A valid file identifier of the photo

#### Defined in

[inlineTypes.d.ts:420](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L420)

___

### reply\_markup

• `Optional` **reply\_markup**: [`InlineKeyboardMarkup`](InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[inlineTypes.d.ts:432](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L432)

___

### title

• `Optional` **title**: `string`

Title for the result

#### Defined in

[inlineTypes.d.ts:422](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L422)

___

### type

• **type**: ``"photo"``

Type of the result, must be photo

#### Defined in

[inlineTypes.d.ts:416](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L416)
