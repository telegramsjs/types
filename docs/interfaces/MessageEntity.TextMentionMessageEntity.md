[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [MessageEntity](../modules/MessageEntity.md) / TextMentionMessageEntity

# Interface: TextMentionMessageEntity

[MessageEntity](../modules/MessageEntity.md).TextMentionMessageEntity

## Hierarchy

- [`AbstractMessageEntity`](MessageEntity.AbstractMessageEntity.md)

  ↳ **`TextMentionMessageEntity`**

## Table of contents

### Properties

- [length](MessageEntity.TextMentionMessageEntity.md#length)
- [offset](MessageEntity.TextMentionMessageEntity.md#offset)
- [type](MessageEntity.TextMentionMessageEntity.md#type)
- [user](MessageEntity.TextMentionMessageEntity.md#user)

## Properties

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

• **type**: ``"text_mention"``

Type of the entity. Currently, can be “mention” (@username), “hashtag” (#hashtag), “cashtag” ($USD), “bot_command” (/start@jobs_bot), “url” (https://telegram.org), “email” (do-not-reply@telegram.org), “phone_number” (+1-212-555-0123), “bold” (bold text), “italic” (italic text), “underline” (underlined text), “strikethrough” (strikethrough text), “spoiler” (spoiler message), “blockquote” (block quotation), “code” (monowidth string), “pre” (monowidth block), “text_link” (for clickable text URLs), “text_mention” (for users without usernames), “custom_emoji” (for inline custom emoji stickers)

#### Overrides

[AbstractMessageEntity](MessageEntity.AbstractMessageEntity.md).[type](MessageEntity.AbstractMessageEntity.md#type)

#### Defined in

[messageTypes.d.ts:436](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L436)

___

### user

• **user**: [`User`](User.md)

For “text_mention” only, the mentioned user

#### Defined in

[messageTypes.d.ts:438](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L438)
