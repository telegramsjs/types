[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InlineQueryResultAudio

# Interface: InlineQueryResultAudio

Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.

Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.

## Table of contents

### Properties

- [audio\_duration](InlineQueryResultAudio.md#audio_duration)
- [audio\_url](InlineQueryResultAudio.md#audio_url)
- [caption](InlineQueryResultAudio.md#caption)
- [caption\_entities](InlineQueryResultAudio.md#caption_entities)
- [id](InlineQueryResultAudio.md#id)
- [input\_message\_content](InlineQueryResultAudio.md#input_message_content)
- [parse\_mode](InlineQueryResultAudio.md#parse_mode)
- [performer](InlineQueryResultAudio.md#performer)
- [reply\_markup](InlineQueryResultAudio.md#reply_markup)
- [title](InlineQueryResultAudio.md#title)
- [type](InlineQueryResultAudio.md#type)

## Properties

### audio\_duration

• `Optional` **audio\_duration**: `number`

Audio duration in seconds

#### Defined in

[inlineTypes.d.ts:241](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L241)

___

### audio\_url

• **audio\_url**: `string`

A valid URL for the audio file

#### Defined in

[inlineTypes.d.ts:229](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L229)

___

### caption

• `Optional` **caption**: `string`

Caption, 0-1024 characters after entities parsing

#### Defined in

[inlineTypes.d.ts:233](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L233)

___

### caption\_entities

• `Optional` **caption\_entities**: [`MessageEntity`](../modules.md#messageentity)[]

List of special entities that appear in the caption, which can be specified instead of parse_mode

#### Defined in

[inlineTypes.d.ts:237](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L237)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[inlineTypes.d.ts:227](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L227)

___

### input\_message\_content

• `Optional` **input\_message\_content**: [`InputMessageContent`](../modules.md#inputmessagecontent)

Content of the message to be sent instead of the audio

#### Defined in

[inlineTypes.d.ts:245](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L245)

___

### parse\_mode

• `Optional` **parse\_mode**: [`ParseMode`](../modules.md#parsemode)

Mode for parsing entities in the audio caption. See formatting options for more details.

#### Defined in

[inlineTypes.d.ts:235](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L235)

___

### performer

• `Optional` **performer**: `string`

Performer

#### Defined in

[inlineTypes.d.ts:239](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L239)

___

### reply\_markup

• `Optional` **reply\_markup**: [`InlineKeyboardMarkup`](InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[inlineTypes.d.ts:243](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L243)

___

### title

• **title**: `string`

Title

#### Defined in

[inlineTypes.d.ts:231](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L231)

___

### type

• **type**: ``"audio"``

Type of the result, must be audio

#### Defined in

[inlineTypes.d.ts:225](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L225)
