[@telegram.ts/types](../README.md) / [Exports](../modules.md) / StickerSet

# Interface: StickerSet

This object represents a sticker set.

## Table of contents

### Properties

- [is\_animated](StickerSet.md#is_animated)
- [is\_video](StickerSet.md#is_video)
- [name](StickerSet.md#name)
- [sticker\_type](StickerSet.md#sticker_type)
- [stickers](StickerSet.md#stickers)
- [thumbnail](StickerSet.md#thumbnail)
- [title](StickerSet.md#title)

## Properties

### is\_animated

• **is\_animated**: `boolean`

True, if the sticker set contains animated stickers

#### Defined in

[messageTypes.d.ts:1053](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1053)

___

### is\_video

• **is\_video**: `boolean`

True, if the sticker set contains video stickers

#### Defined in

[messageTypes.d.ts:1055](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1055)

___

### name

• **name**: `string`

Sticker set name

#### Defined in

[messageTypes.d.ts:1047](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1047)

___

### sticker\_type

• **sticker\_type**: ``"mask"`` \| ``"regular"`` \| ``"custom_emoji"``

Type of stickers in the set, currently one of “regular”, “mask”, “custom_emoji”

#### Defined in

[messageTypes.d.ts:1051](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1051)

___

### stickers

• **stickers**: [`Sticker`](Sticker.md)[]

List of all set stickers

#### Defined in

[messageTypes.d.ts:1057](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1057)

___

### thumbnail

• `Optional` **thumbnail**: [`PhotoSize`](PhotoSize.md)

Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format

#### Defined in

[messageTypes.d.ts:1059](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1059)

___

### title

• **title**: `string`

Sticker set title

#### Defined in

[messageTypes.d.ts:1049](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1049)
