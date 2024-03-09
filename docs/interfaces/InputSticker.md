[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InputSticker

# Interface: InputSticker

This object describes a sticker to be added to a sticker set.

## Table of contents

### Properties

- [emoji\_list](InputSticker.md#emoji_list)
- [keywords](InputSticker.md#keywords)
- [mask\_position](InputSticker.md#mask_position)
- [sticker](InputSticker.md#sticker)

## Properties

### emoji\_list

• **emoji\_list**: `string`[]

List of 1-20 emoji associated with the sticker

#### Defined in

[apiMethodsTypes.d.ts:1740](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1740)

___

### keywords

• `Optional` **keywords**: `string`[]

List of 0-20 search keywords for the sticker with total length of up to 64 characters. For “regular” and “custom_emoji” stickers only.

#### Defined in

[apiMethodsTypes.d.ts:1744](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1744)

___

### mask\_position

• `Optional` **mask\_position**: [`MaskPosition`](MaskPosition.md)

Position where the mask should be placed on faces. For “mask” stickers only.

#### Defined in

[apiMethodsTypes.d.ts:1742](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1742)

___

### sticker

• **sticker**: `string` \| `Buffer` \| `ReadStream`

The added sticker. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. Animated and video stickers can't be uploaded via HTTP URL.

#### Defined in

[apiMethodsTypes.d.ts:1738](https://github.com/telegramsjs/types/blob/d08200f/src/apiMethodsTypes.d.ts#L1738)
