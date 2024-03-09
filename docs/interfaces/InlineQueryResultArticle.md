[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InlineQueryResultArticle

# Interface: InlineQueryResultArticle

Represents a link to an article or web page.

## Table of contents

### Properties

- [description](InlineQueryResultArticle.md#description)
- [hide\_url](InlineQueryResultArticle.md#hide_url)
- [id](InlineQueryResultArticle.md#id)
- [input\_message\_content](InlineQueryResultArticle.md#input_message_content)
- [reply\_markup](InlineQueryResultArticle.md#reply_markup)
- [thumbnail\_height](InlineQueryResultArticle.md#thumbnail_height)
- [thumbnail\_url](InlineQueryResultArticle.md#thumbnail_url)
- [thumbnail\_width](InlineQueryResultArticle.md#thumbnail_width)
- [title](InlineQueryResultArticle.md#title)
- [type](InlineQueryResultArticle.md#type)
- [url](InlineQueryResultArticle.md#url)

## Properties

### description

• `Optional` **description**: `string`

Short description of the result

#### Defined in

[inlineTypes.d.ts:86](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L86)

___

### hide\_url

• `Optional` **hide\_url**: `boolean`

Pass True if you don't want the URL to be shown in the message

#### Defined in

[inlineTypes.d.ts:84](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L84)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 Bytes

#### Defined in

[inlineTypes.d.ts:74](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L74)

___

### input\_message\_content

• **input\_message\_content**: [`InputMessageContent`](../modules.md#inputmessagecontent)

Content of the message to be sent

#### Defined in

[inlineTypes.d.ts:78](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L78)

___

### reply\_markup

• `Optional` **reply\_markup**: [`InlineKeyboardMarkup`](InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[inlineTypes.d.ts:80](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L80)

___

### thumbnail\_height

• `Optional` **thumbnail\_height**: `number`

Thumbnail height

#### Defined in

[inlineTypes.d.ts:92](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L92)

___

### thumbnail\_url

• `Optional` **thumbnail\_url**: `string`

Url of the thumbnail for the result

#### Defined in

[inlineTypes.d.ts:88](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L88)

___

### thumbnail\_width

• `Optional` **thumbnail\_width**: `number`

Thumbnail width

#### Defined in

[inlineTypes.d.ts:90](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L90)

___

### title

• **title**: `string`

Title of the result

#### Defined in

[inlineTypes.d.ts:76](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L76)

___

### type

• **type**: ``"article"``

Type of the result, must be article

#### Defined in

[inlineTypes.d.ts:72](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L72)

___

### url

• `Optional` **url**: `string`

URL of the result

#### Defined in

[inlineTypes.d.ts:82](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L82)
