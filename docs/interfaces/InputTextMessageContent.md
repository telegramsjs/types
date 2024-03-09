[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InputTextMessageContent

# Interface: InputTextMessageContent

Represents the content of a text message to be sent as the result of an inline query.

## Table of contents

### Properties

- [entities](InputTextMessageContent.md#entities)
- [link\_preview\_options](InputTextMessageContent.md#link_preview_options)
- [message\_text](InputTextMessageContent.md#message_text)
- [parse\_mode](InputTextMessageContent.md#parse_mode)

## Properties

### entities

• `Optional` **entities**: [`MessageEntity`](../modules.md#messageentity)[]

List of special entities that appear in message text, which can be specified instead of parse_mode

#### Defined in

[inlineTypes.d.ts:606](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L606)

___

### link\_preview\_options

• `Optional` **link\_preview\_options**: [`LinkPreviewOptions`](LinkPreviewOptions.md)

Link preview generation options for the message

#### Defined in

[inlineTypes.d.ts:608](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L608)

___

### message\_text

• **message\_text**: `string`

Text of the message to be sent, 1-4096 characters

#### Defined in

[inlineTypes.d.ts:602](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L602)

___

### parse\_mode

• `Optional` **parse\_mode**: [`ParseMode`](../modules.md#parsemode)

Mode for parsing entities in the message text. See formatting options for more details.

#### Defined in

[inlineTypes.d.ts:604](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L604)
