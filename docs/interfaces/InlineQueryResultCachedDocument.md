[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InlineQueryResultCachedDocument

# Interface: InlineQueryResultCachedDocument

Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file.

Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.

## Table of contents

### Properties

- [caption](InlineQueryResultCachedDocument.md#caption)
- [caption\_entities](InlineQueryResultCachedDocument.md#caption_entities)
- [description](InlineQueryResultCachedDocument.md#description)
- [document\_file\_id](InlineQueryResultCachedDocument.md#document_file_id)
- [id](InlineQueryResultCachedDocument.md#id)
- [input\_message\_content](InlineQueryResultCachedDocument.md#input_message_content)
- [parse\_mode](InlineQueryResultCachedDocument.md#parse_mode)
- [reply\_markup](InlineQueryResultCachedDocument.md#reply_markup)
- [title](InlineQueryResultCachedDocument.md#title)
- [type](InlineQueryResultCachedDocument.md#type)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the document to be sent, 0-1024 characters after entities parsing

#### Defined in

[inlineTypes.d.ts:509](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L509)

___

### caption\_entities

• `Optional` **caption\_entities**: [`MessageEntity`](../modules.md#messageentity)[]

List of special entities that appear in the caption, which can be specified instead of parse_mode

#### Defined in

[inlineTypes.d.ts:513](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L513)

___

### description

• `Optional` **description**: `string`

Short description of the result

#### Defined in

[inlineTypes.d.ts:507](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L507)

___

### document\_file\_id

• **document\_file\_id**: `string`

A valid file identifier for the file

#### Defined in

[inlineTypes.d.ts:505](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L505)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[inlineTypes.d.ts:501](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L501)

___

### input\_message\_content

• `Optional` **input\_message\_content**: [`InputMessageContent`](../modules.md#inputmessagecontent)

Content of the message to be sent instead of the file

#### Defined in

[inlineTypes.d.ts:517](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L517)

___

### parse\_mode

• `Optional` **parse\_mode**: [`ParseMode`](../modules.md#parsemode)

Mode for parsing entities in the document caption. See formatting options for more details.

#### Defined in

[inlineTypes.d.ts:511](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L511)

___

### reply\_markup

• `Optional` **reply\_markup**: [`InlineKeyboardMarkup`](InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[inlineTypes.d.ts:515](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L515)

___

### title

• **title**: `string`

Title for the result

#### Defined in

[inlineTypes.d.ts:503](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L503)

___

### type

• **type**: ``"document"``

Type of the result, must be document

#### Defined in

[inlineTypes.d.ts:499](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L499)
