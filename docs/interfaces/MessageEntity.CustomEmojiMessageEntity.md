[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [MessageEntity](../modules/MessageEntity.md) / CustomEmojiMessageEntity

# Interface: CustomEmojiMessageEntity

[MessageEntity](../modules/MessageEntity.md).CustomEmojiMessageEntity

## Hierarchy

- [`AbstractMessageEntity`](MessageEntity.AbstractMessageEntity.md)

  ↳ **`CustomEmojiMessageEntity`**

## Table of contents

### Properties

- [custom\_emoji\_id](MessageEntity.CustomEmojiMessageEntity.md#custom_emoji_id)
- [length](MessageEntity.CustomEmojiMessageEntity.md#length)
- [offset](MessageEntity.CustomEmojiMessageEntity.md#offset)
- [type](MessageEntity.CustomEmojiMessageEntity.md#type)

## Properties

### custom\_emoji\_id

• **custom\_emoji\_id**: `string`

For “custom_emoji” only, unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the sticker

#### Defined in

[messageTypes.d.ts:443](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L443)

___

### length

• **length**: `number`

Length of the entity in UTF-16 code units

#### Inherited from

[AbstractMessageEntity](MessageEntity.AbstractMessageEntity.md).[length](MessageEntity.AbstractMessageEntity.md#length)

#### Defined in

[messageTypes.d.ts:406](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L406)

___

### offset

• **offset**: `number`

Offset in UTF-16 code units to the start of the entity

#### Inherited from

[AbstractMessageEntity](MessageEntity.AbstractMessageEntity.md).[offset](MessageEntity.AbstractMessageEntity.md#offset)

#### Defined in

[messageTypes.d.ts:404](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L404)

___

### type

• **type**: ``"custom_emoji"``

Type of the entity. Currently, can be “mention” (@username), “hashtag” (#hashtag), “cashtag” ($USD), “bot_command” (/start@jobs_bot), “url” (https://telegram.org), “email” (do-not-reply@telegram.org), “phone_number” (+1-212-555-0123), “bold” (bold text), “italic” (italic text), “underline” (underlined text), “strikethrough” (strikethrough text), “spoiler” (spoiler message), “blockquote” (block quotation), “code” (monowidth string), “pre” (monowidth block), “text_link” (for clickable text URLs), “text_mention” (for users without usernames), “custom_emoji” (for inline custom emoji stickers)

#### Overrides

[AbstractMessageEntity](MessageEntity.AbstractMessageEntity.md).[type](MessageEntity.AbstractMessageEntity.md#type)

#### Defined in

[messageTypes.d.ts:441](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L441)
