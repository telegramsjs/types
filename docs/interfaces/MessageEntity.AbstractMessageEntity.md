[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [MessageEntity](../modules/MessageEntity.md) / AbstractMessageEntity

# Interface: AbstractMessageEntity

[MessageEntity](../modules/MessageEntity.md).AbstractMessageEntity

## Hierarchy

- **`AbstractMessageEntity`**

  ↳ [`CommonMessageEntity`](MessageEntity.CommonMessageEntity.md)

  ↳ [`PreMessageEntity`](MessageEntity.PreMessageEntity.md)

  ↳ [`TextLinkMessageEntity`](MessageEntity.TextLinkMessageEntity.md)

  ↳ [`TextMentionMessageEntity`](MessageEntity.TextMentionMessageEntity.md)

  ↳ [`CustomEmojiMessageEntity`](MessageEntity.CustomEmojiMessageEntity.md)

## Table of contents

### Properties

- [length](MessageEntity.AbstractMessageEntity.md#length)
- [offset](MessageEntity.AbstractMessageEntity.md#offset)
- [type](MessageEntity.AbstractMessageEntity.md#type)

## Properties

### length

• **length**: `number`

Length of the entity in UTF-16 code units

#### Defined in

[messageTypes.d.ts:406](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L406)

___

### offset

• **offset**: `number`

Offset in UTF-16 code units to the start of the entity

#### Defined in

[messageTypes.d.ts:404](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L404)

___

### type

• **type**: `string`

Type of the entity. Currently, can be “mention” (@username), “hashtag” (#hashtag), “cashtag” ($USD), “bot_command” (/start@jobs_bot), “url” (https://telegram.org), “email” (do-not-reply@telegram.org), “phone_number” (+1-212-555-0123), “bold” (bold text), “italic” (italic text), “underline” (underlined text), “strikethrough” (strikethrough text), “spoiler” (spoiler message), “blockquote” (block quotation), “code” (monowidth string), “pre” (monowidth block), “text_link” (for clickable text URLs), “text_mention” (for users without usernames), “custom_emoji” (for inline custom emoji stickers)

#### Defined in

[messageTypes.d.ts:402](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L402)
