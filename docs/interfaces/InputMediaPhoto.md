[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InputMediaPhoto

# Interface: InputMediaPhoto

Represents a photo to be sent.

## Table of contents

### Properties

- [caption](InputMediaPhoto.md#caption)
- [caption\_entities](InputMediaPhoto.md#caption_entities)
- [has\_spoiler](InputMediaPhoto.md#has_spoiler)
- [media](InputMediaPhoto.md#media)
- [parse\_mode](InputMediaPhoto.md#parse_mode)
- [type](InputMediaPhoto.md#type)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the photo to be sent, 0-1024 characters after entities parsing

#### Defined in

[apiMethodsTypes.d.ts:1767](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1767)

___

### caption\_entities

• `Optional` **caption\_entities**: [`MessageEntity`](../modules.md#messageentity)[]

List of special entities that appear in the caption, which can be specified instead of parse_mode

#### Defined in

[apiMethodsTypes.d.ts:1771](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1771)

___

### has\_spoiler

• `Optional` **has\_spoiler**: `boolean`

Pass True if the photo needs to be covered with a spoiler animation

#### Defined in

[apiMethodsTypes.d.ts:1773](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1773)

___

### media

• **media**: `string` \| `Buffer` \| `ReadStream`

File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name.

#### Defined in

[apiMethodsTypes.d.ts:1765](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1765)

___

### parse\_mode

• `Optional` **parse\_mode**: [`ParseMode`](../modules.md#parsemode)

Mode for parsing entities in the photo caption. See formatting options for more details.

#### Defined in

[apiMethodsTypes.d.ts:1769](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1769)

___

### type

• **type**: ``"photo"``

Type of the result, must be photo

#### Defined in

[apiMethodsTypes.d.ts:1763](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1763)
