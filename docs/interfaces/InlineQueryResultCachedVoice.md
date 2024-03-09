[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InlineQueryResultCachedVoice

# Interface: InlineQueryResultCachedVoice

Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the voice message.

Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.

## Table of contents

### Properties

- [caption](InlineQueryResultCachedVoice.md#caption)
- [caption\_entities](InlineQueryResultCachedVoice.md#caption_entities)
- [id](InlineQueryResultCachedVoice.md#id)
- [input\_message\_content](InlineQueryResultCachedVoice.md#input_message_content)
- [parse\_mode](InlineQueryResultCachedVoice.md#parse_mode)
- [reply\_markup](InlineQueryResultCachedVoice.md#reply_markup)
- [title](InlineQueryResultCachedVoice.md#title)
- [type](InlineQueryResultCachedVoice.md#type)
- [voice\_file\_id](InlineQueryResultCachedVoice.md#voice_file_id)

## Properties

### caption

• `Optional` **caption**: `string`

Caption, 0-1024 characters after entities parsing

#### Defined in

[inlineTypes.d.ts:555](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L555)

___

### caption\_entities

• `Optional` **caption\_entities**: [`MessageEntity`](../modules.md#messageentity)[]

List of special entities that appear in the caption, which can be specified instead of parse_mode

#### Defined in

[inlineTypes.d.ts:559](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L559)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[inlineTypes.d.ts:549](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L549)

___

### input\_message\_content

• `Optional` **input\_message\_content**: [`InputMessageContent`](../modules.md#inputmessagecontent)

Content of the message to be sent instead of the voice message

#### Defined in

[inlineTypes.d.ts:563](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L563)

___

### parse\_mode

• `Optional` **parse\_mode**: [`ParseMode`](../modules.md#parsemode)

Mode for parsing entities in the voice message caption. See formatting options for more details.

#### Defined in

[inlineTypes.d.ts:557](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L557)

___

### reply\_markup

• `Optional` **reply\_markup**: [`InlineKeyboardMarkup`](InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[inlineTypes.d.ts:561](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L561)

___

### title

• **title**: `string`

Voice message title

#### Defined in

[inlineTypes.d.ts:553](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L553)

___

### type

• **type**: ``"voice"``

Type of the result, must be voice

#### Defined in

[inlineTypes.d.ts:547](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L547)

___

### voice\_file\_id

• **voice\_file\_id**: `string`

A valid file identifier for the voice message

#### Defined in

[inlineTypes.d.ts:551](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L551)
