[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InlineQueryResultPhoto

# Interface: InlineQueryResultPhoto

Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.

## Table of contents

### Properties

- [caption](InlineQueryResultPhoto.md#caption)
- [caption\_entities](InlineQueryResultPhoto.md#caption_entities)
- [description](InlineQueryResultPhoto.md#description)
- [id](InlineQueryResultPhoto.md#id)
- [input\_message\_content](InlineQueryResultPhoto.md#input_message_content)
- [parse\_mode](InlineQueryResultPhoto.md#parse_mode)
- [photo\_height](InlineQueryResultPhoto.md#photo_height)
- [photo\_url](InlineQueryResultPhoto.md#photo_url)
- [photo\_width](InlineQueryResultPhoto.md#photo_width)
- [reply\_markup](InlineQueryResultPhoto.md#reply_markup)
- [thumbnail\_url](InlineQueryResultPhoto.md#thumbnail_url)
- [title](InlineQueryResultPhoto.md#title)
- [type](InlineQueryResultPhoto.md#type)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the photo to be sent, 0-1024 characters after entities parsing

#### Defined in

[inlineTypes.d.ts:113](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L113)

___

### caption\_entities

• `Optional` **caption\_entities**: [`MessageEntity`](../modules.md#messageentity)[]

List of special entities that appear in the caption, which can be specified instead of parse_mode

#### Defined in

[inlineTypes.d.ts:117](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L117)

___

### description

• `Optional` **description**: `string`

Short description of the result

#### Defined in

[inlineTypes.d.ts:111](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L111)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[inlineTypes.d.ts:99](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L99)

___

### input\_message\_content

• `Optional` **input\_message\_content**: [`InputMessageContent`](../modules.md#inputmessagecontent)

Content of the message to be sent instead of the photo

#### Defined in

[inlineTypes.d.ts:121](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L121)

___

### parse\_mode

• `Optional` **parse\_mode**: [`ParseMode`](../modules.md#parsemode)

Mode for parsing entities in the photo caption. See formatting options for more details.

#### Defined in

[inlineTypes.d.ts:115](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L115)

___

### photo\_height

• `Optional` **photo\_height**: `number`

Height of the photo

#### Defined in

[inlineTypes.d.ts:107](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L107)

___

### photo\_url

• **photo\_url**: `string`

A valid URL of the photo. Photo must be in jpeg format. Photo size must not exceed 5MB

#### Defined in

[inlineTypes.d.ts:101](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L101)

___

### photo\_width

• `Optional` **photo\_width**: `number`

Width of the photo

#### Defined in

[inlineTypes.d.ts:105](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L105)

___

### reply\_markup

• `Optional` **reply\_markup**: [`InlineKeyboardMarkup`](InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[inlineTypes.d.ts:119](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L119)

___

### thumbnail\_url

• **thumbnail\_url**: `string`

URL of the thumbnail for the photo

#### Defined in

[inlineTypes.d.ts:103](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L103)

___

### title

• `Optional` **title**: `string`

Title for the result

#### Defined in

[inlineTypes.d.ts:109](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L109)

___

### type

• **type**: ``"photo"``

Type of the result, must be photo

#### Defined in

[inlineTypes.d.ts:97](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L97)
