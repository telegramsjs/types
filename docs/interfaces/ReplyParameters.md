[@telegram.ts/types](../README.md) / [Exports](../modules.md) / ReplyParameters

# Interface: ReplyParameters

Describes reply parameters for the message that is being sent.

## Table of contents

### Properties

- [allow\_sending\_without\_reply](ReplyParameters.md#allow_sending_without_reply)
- [chat\_id](ReplyParameters.md#chat_id)
- [message\_id](ReplyParameters.md#message_id)
- [quote](ReplyParameters.md#quote)
- [quote\_entities](ReplyParameters.md#quote_entities)
- [quote\_parse\_mode](ReplyParameters.md#quote_parse_mode)
- [quote\_position](ReplyParameters.md#quote_position)

## Properties

### allow\_sending\_without\_reply

• `Optional` **allow\_sending\_without\_reply**: `boolean`

Pass True if the message should be sent even if the specified message to be replied to is not found; can be used only for replies in the same chat and forum topic.

#### Defined in

[messageTypes.d.ts:524](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L524)

___

### chat\_id

• `Optional` **chat\_id**: `string` \| `number`

If the message to be replied to is from a different chat, unique identifier for the chat or username of the channel (in the format @channelusername)

#### Defined in

[messageTypes.d.ts:522](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L522)

___

### message\_id

• **message\_id**: `number`

Identifier of the message that will be replied to in the current chat, or in the chat chat_id if it is specified

#### Defined in

[messageTypes.d.ts:520](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L520)

___

### quote

• `Optional` **quote**: `string`

Quoted part of the message to be replied to; 0-1024 characters after entities parsing. The quote must be an exact substring of the message to be replied to, including bold, italic, underline, strikethrough, spoiler, and custom_emoji entities. The message will fail to send if the quote isn't found in the original message.

#### Defined in

[messageTypes.d.ts:526](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L526)

___

### quote\_entities

• `Optional` **quote\_entities**: [`MessageEntity`](../modules.md#messageentity)[]

A JSON-serialized list of special entities that appear in the quote. It can be specified instead of quote_parse_mode.

#### Defined in

[messageTypes.d.ts:530](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L530)

___

### quote\_parse\_mode

• `Optional` **quote\_parse\_mode**: `string`

Mode for parsing entities in the quote. See formatting options for more details.

#### Defined in

[messageTypes.d.ts:528](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L528)

___

### quote\_position

• `Optional` **quote\_position**: `number`

Position of the quote in the original message in UTF-16 code units

#### Defined in

[messageTypes.d.ts:532](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L532)
