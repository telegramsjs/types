[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InputMediaDocument

# Interface: InputMediaDocument

Represents a general file to be sent.

## Table of contents

### Properties

- [caption](InputMediaDocument.md#caption)
- [caption\_entities](InputMediaDocument.md#caption_entities)
- [disable\_content\_type\_detection](InputMediaDocument.md#disable_content_type_detection)
- [media](InputMediaDocument.md#media)
- [parse\_mode](InputMediaDocument.md#parse_mode)
- [thumbnail](InputMediaDocument.md#thumbnail)
- [type](InputMediaDocument.md#type)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the document to be sent, 0-1024 characters after entities parsing

#### Defined in

[apiMethodsTypes.d.ts:1857](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1857)

___

### caption\_entities

• `Optional` **caption\_entities**: [`MessageEntity`](../modules.md#messageentity)[]

List of special entities that appear in the caption, which can be specified instead of parse_mode

#### Defined in

[apiMethodsTypes.d.ts:1861](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1861)

___

### disable\_content\_type\_detection

• `Optional` **disable\_content\_type\_detection**: `boolean`

Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always true, if the document is sent as part of an album.

#### Defined in

[apiMethodsTypes.d.ts:1863](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1863)

___

### media

• **media**: `string` \| `Buffer` \| `ReadStream`

File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name.

#### Defined in

[apiMethodsTypes.d.ts:1853](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1853)

___

### parse\_mode

• `Optional` **parse\_mode**: [`ParseMode`](../modules.md#parsemode)

Mode for parsing entities in the document caption. See formatting options for more details.

#### Defined in

[apiMethodsTypes.d.ts:1859](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1859)

___

### thumbnail

• `Optional` **thumbnail**: `string` \| `Buffer` \| `ReadStream`

Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>.

#### Defined in

[apiMethodsTypes.d.ts:1855](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1855)

___

### type

• **type**: ``"document"``

Type of the result, must be document

#### Defined in

[apiMethodsTypes.d.ts:1851](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1851)
