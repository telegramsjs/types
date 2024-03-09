[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InlineQueryResultCachedGif

# Interface: InlineQueryResultCachedGif

Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with specified content instead of the animation.

## Table of contents

### Properties

- [caption](InlineQueryResultCachedGif.md#caption)
- [caption\_entities](InlineQueryResultCachedGif.md#caption_entities)
- [gif\_file\_id](InlineQueryResultCachedGif.md#gif_file_id)
- [id](InlineQueryResultCachedGif.md#id)
- [input\_message\_content](InlineQueryResultCachedGif.md#input_message_content)
- [parse\_mode](InlineQueryResultCachedGif.md#parse_mode)
- [reply\_markup](InlineQueryResultCachedGif.md#reply_markup)
- [title](InlineQueryResultCachedGif.md#title)
- [type](InlineQueryResultCachedGif.md#type)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the GIF file to be sent, 0-1024 characters after entities parsing

#### Defined in

[inlineTypes.d.ts:447](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L447)

___

### caption\_entities

• `Optional` **caption\_entities**: [`MessageEntity`](../modules.md#messageentity)[]

List of special entities that appear in the caption, which can be specified instead of parse_mode

#### Defined in

[inlineTypes.d.ts:451](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L451)

___

### gif\_file\_id

• **gif\_file\_id**: `string`

A valid file identifier for the GIF file

#### Defined in

[inlineTypes.d.ts:443](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L443)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[inlineTypes.d.ts:441](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L441)

___

### input\_message\_content

• `Optional` **input\_message\_content**: [`InputMessageContent`](../modules.md#inputmessagecontent)

Content of the message to be sent instead of the GIF animation

#### Defined in

[inlineTypes.d.ts:455](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L455)

___

### parse\_mode

• `Optional` **parse\_mode**: [`ParseMode`](../modules.md#parsemode)

Mode for parsing entities in the caption. See formatting options for more details.

#### Defined in

[inlineTypes.d.ts:449](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L449)

___

### reply\_markup

• `Optional` **reply\_markup**: [`InlineKeyboardMarkup`](InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[inlineTypes.d.ts:453](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L453)

___

### title

• `Optional` **title**: `string`

Title for the result

#### Defined in

[inlineTypes.d.ts:445](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L445)

___

### type

• **type**: ``"gif"``

Type of the result, must be gif

#### Defined in

[inlineTypes.d.ts:439](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L439)
