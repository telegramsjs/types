[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InlineQueryResultVoice

# Interface: InlineQueryResultVoice

Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the the voice message.

Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.

## Table of contents

### Properties

- [caption](InlineQueryResultVoice.md#caption)
- [caption\_entities](InlineQueryResultVoice.md#caption_entities)
- [id](InlineQueryResultVoice.md#id)
- [input\_message\_content](InlineQueryResultVoice.md#input_message_content)
- [parse\_mode](InlineQueryResultVoice.md#parse_mode)
- [reply\_markup](InlineQueryResultVoice.md#reply_markup)
- [title](InlineQueryResultVoice.md#title)
- [type](InlineQueryResultVoice.md#type)
- [voice\_duration](InlineQueryResultVoice.md#voice_duration)
- [voice\_url](InlineQueryResultVoice.md#voice_url)

## Properties

### caption

• `Optional` **caption**: `string`

Caption, 0-1024 characters after entities parsing

#### Defined in

[inlineTypes.d.ts:260](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L260)

___

### caption\_entities

• `Optional` **caption\_entities**: [`MessageEntity`](../modules.md#messageentity)[]

List of special entities that appear in the caption, which can be specified instead of parse_mode

#### Defined in

[inlineTypes.d.ts:264](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L264)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[inlineTypes.d.ts:254](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L254)

___

### input\_message\_content

• `Optional` **input\_message\_content**: [`InputMessageContent`](../modules.md#inputmessagecontent)

Content of the message to be sent instead of the voice recording

#### Defined in

[inlineTypes.d.ts:270](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L270)

___

### parse\_mode

• `Optional` **parse\_mode**: [`ParseMode`](../modules.md#parsemode)

Mode for parsing entities in the voice message caption. See formatting options for more details.

#### Defined in

[inlineTypes.d.ts:262](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L262)

___

### reply\_markup

• `Optional` **reply\_markup**: [`InlineKeyboardMarkup`](InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[inlineTypes.d.ts:268](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L268)

___

### title

• **title**: `string`

Recording title

#### Defined in

[inlineTypes.d.ts:258](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L258)

___

### type

• **type**: ``"voice"``

Type of the result, must be voice

#### Defined in

[inlineTypes.d.ts:252](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L252)

___

### voice\_duration

• `Optional` **voice\_duration**: `number`

Recording duration in seconds

#### Defined in

[inlineTypes.d.ts:266](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L266)

___

### voice\_url

• **voice\_url**: `string`

A valid URL for the voice recording

#### Defined in

[inlineTypes.d.ts:256](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L256)
