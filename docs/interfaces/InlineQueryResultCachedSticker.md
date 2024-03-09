[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InlineQueryResultCachedSticker

# Interface: InlineQueryResultCachedSticker

Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the sticker.

Note: This will only work in Telegram versions released after 9 April, 2016 for static stickers and after 06 July, 2019 for animated stickers. Older clients will ignore them.

## Table of contents

### Properties

- [id](InlineQueryResultCachedSticker.md#id)
- [input\_message\_content](InlineQueryResultCachedSticker.md#input_message_content)
- [reply\_markup](InlineQueryResultCachedSticker.md#reply_markup)
- [sticker\_file\_id](InlineQueryResultCachedSticker.md#sticker_file_id)
- [type](InlineQueryResultCachedSticker.md#type)

## Properties

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[inlineTypes.d.ts:486](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L486)

___

### input\_message\_content

• `Optional` **input\_message\_content**: [`InputMessageContent`](../modules.md#inputmessagecontent)

Content of the message to be sent instead of the sticker

#### Defined in

[inlineTypes.d.ts:492](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L492)

___

### reply\_markup

• `Optional` **reply\_markup**: [`InlineKeyboardMarkup`](InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[inlineTypes.d.ts:490](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L490)

___

### sticker\_file\_id

• **sticker\_file\_id**: `string`

A valid file identifier of the sticker

#### Defined in

[inlineTypes.d.ts:488](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L488)

___

### type

• **type**: ``"sticker"``

Type of the result, must be sticker

#### Defined in

[inlineTypes.d.ts:484](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L484)
