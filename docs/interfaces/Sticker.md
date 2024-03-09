[@telegram.ts/types](../README.md) / [Exports](../modules.md) / Sticker

# Interface: Sticker

This object represents a sticker.

## Table of contents

### Properties

- [custom\_emoji\_id](Sticker.md#custom_emoji_id)
- [emoji](Sticker.md#emoji)
- [file\_id](Sticker.md#file_id)
- [file\_size](Sticker.md#file_size)
- [file\_unique\_id](Sticker.md#file_unique_id)
- [height](Sticker.md#height)
- [is\_animated](Sticker.md#is_animated)
- [is\_video](Sticker.md#is_video)
- [mask\_position](Sticker.md#mask_position)
- [premium\_animation](Sticker.md#premium_animation)
- [set\_name](Sticker.md#set_name)
- [thumbnail](Sticker.md#thumbnail)
- [type](Sticker.md#type)
- [width](Sticker.md#width)

## Properties

### custom\_emoji\_id

• `Optional` **custom\_emoji\_id**: `string`

For custom emoji stickers, unique identifier of the custom emoji

#### Defined in

[messageTypes.d.ts:1039](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1039)

___

### emoji

• `Optional` **emoji**: `string`

Emoji associated with the sticker

#### Defined in

[messageTypes.d.ts:1031](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1031)

___

### file\_id

• **file\_id**: `string`

Identifier for this file, which can be used to download or reuse the file

#### Defined in

[messageTypes.d.ts:1015](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1015)

___

### file\_size

• `Optional` **file\_size**: `number`

File size in bytes

#### Defined in

[messageTypes.d.ts:1041](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1041)

___

### file\_unique\_id

• **file\_unique\_id**: `string`

Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.

#### Defined in

[messageTypes.d.ts:1017](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1017)

___

### height

• **height**: `number`

Sticker height

#### Defined in

[messageTypes.d.ts:1023](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1023)

___

### is\_animated

• **is\_animated**: `boolean`

True, if the sticker is animated

#### Defined in

[messageTypes.d.ts:1025](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1025)

___

### is\_video

• **is\_video**: `boolean`

True, if the sticker is a video sticker

#### Defined in

[messageTypes.d.ts:1027](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1027)

___

### mask\_position

• `Optional` **mask\_position**: [`MaskPosition`](MaskPosition.md)

For mask stickers, the position where the mask should be placed

#### Defined in

[messageTypes.d.ts:1037](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1037)

___

### premium\_animation

• `Optional` **premium\_animation**: [`File`](File.md)

For premium regular stickers, premium animation for the sticker

#### Defined in

[messageTypes.d.ts:1035](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1035)

___

### set\_name

• `Optional` **set\_name**: `string`

Name of the sticker set to which the sticker belongs

#### Defined in

[messageTypes.d.ts:1033](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1033)

___

### thumbnail

• `Optional` **thumbnail**: [`PhotoSize`](PhotoSize.md)

Sticker thumbnail in the .WEBP or .JPG format

#### Defined in

[messageTypes.d.ts:1029](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1029)

___

### type

• **type**: ``"mask"`` \| ``"regular"`` \| ``"custom_emoji"``

Type of the sticker, currently one of “regular”, “mask”, “custom_emoji”. The type of the sticker is independent from its format, which is determined by the fields is_animated and is_video.

#### Defined in

[messageTypes.d.ts:1019](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1019)

___

### width

• **width**: `number`

Sticker width

#### Defined in

[messageTypes.d.ts:1021](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1021)
