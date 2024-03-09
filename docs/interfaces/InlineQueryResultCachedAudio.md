[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InlineQueryResultCachedAudio

# Interface: InlineQueryResultCachedAudio

Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.

Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.

## Table of contents

### Properties

- [audio\_file\_id](InlineQueryResultCachedAudio.md#audio_file_id)
- [caption](InlineQueryResultCachedAudio.md#caption)
- [caption\_entities](InlineQueryResultCachedAudio.md#caption_entities)
- [id](InlineQueryResultCachedAudio.md#id)
- [input\_message\_content](InlineQueryResultCachedAudio.md#input_message_content)
- [parse\_mode](InlineQueryResultCachedAudio.md#parse_mode)
- [reply\_markup](InlineQueryResultCachedAudio.md#reply_markup)
- [type](InlineQueryResultCachedAudio.md#type)

## Properties

### audio\_file\_id

• **audio\_file\_id**: `string`

A valid file identifier for the audio file

#### Defined in

[inlineTypes.d.ts:574](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L574)

___

### caption

• `Optional` **caption**: `string`

Caption, 0-1024 characters after entities parsing

#### Defined in

[inlineTypes.d.ts:576](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L576)

___

### caption\_entities

• `Optional` **caption\_entities**: [`MessageEntity`](../modules.md#messageentity)[]

List of special entities that appear in the caption, which can be specified instead of parse_mode

#### Defined in

[inlineTypes.d.ts:580](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L580)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[inlineTypes.d.ts:572](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L572)

___

### input\_message\_content

• `Optional` **input\_message\_content**: [`InputMessageContent`](../modules.md#inputmessagecontent)

Content of the message to be sent instead of the audio

#### Defined in

[inlineTypes.d.ts:584](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L584)

___

### parse\_mode

• `Optional` **parse\_mode**: [`ParseMode`](../modules.md#parsemode)

Mode for parsing entities in the audio caption. See formatting options for more details.

#### Defined in

[inlineTypes.d.ts:578](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L578)

___

### reply\_markup

• `Optional` **reply\_markup**: [`InlineKeyboardMarkup`](InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[inlineTypes.d.ts:582](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L582)

___

### type

• **type**: ``"audio"``

Type of the result, must be audio

#### Defined in

[inlineTypes.d.ts:570](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L570)
