[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [Message](../modules/Message.md) / CommonMessage

# Interface: CommonMessage

[Message](../modules/Message.md).CommonMessage

## Hierarchy

- [`ServiceMessage`](Message.ServiceMessage.md)

  ↳ **`CommonMessage`**

  ↳↳ [`CaptionableMessage`](Message.CaptionableMessage.md)

## Table of contents

### Properties

- [author\_signature](Message.CommonMessage.md#author_signature)
- [chat](Message.CommonMessage.md#chat)
- [date](Message.CommonMessage.md#date)
- [edit\_date](Message.CommonMessage.md#edit_date)
- [external\_reply](Message.CommonMessage.md#external_reply)
- [forward\_origin](Message.CommonMessage.md#forward_origin)
- [from](Message.CommonMessage.md#from)
- [has\_protected\_content](Message.CommonMessage.md#has_protected_content)
- [is\_automatic\_forward](Message.CommonMessage.md#is_automatic_forward)
- [is\_topic\_message](Message.CommonMessage.md#is_topic_message)
- [link\_preview\_options](Message.CommonMessage.md#link_preview_options)
- [message\_id](Message.CommonMessage.md#message_id)
- [message\_thread\_id](Message.CommonMessage.md#message_thread_id)
- [quote](Message.CommonMessage.md#quote)
- [reply\_markup](Message.CommonMessage.md#reply_markup)
- [reply\_to\_message](Message.CommonMessage.md#reply_to_message)
- [reply\_to\_story](Message.CommonMessage.md#reply_to_story)
- [sender\_boost\_count](Message.CommonMessage.md#sender_boost_count)
- [sender\_chat](Message.CommonMessage.md#sender_chat)
- [via\_bot](Message.CommonMessage.md#via_bot)

## Properties

### author\_signature

• `Optional` **author\_signature**: `string`

Signature of the post author for messages in channels, or the custom title of an anonymous group administrator

#### Defined in

[messageTypes.d.ts:47](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L47)

___

### chat

• **chat**: [`Chat`](../modules.md#chat)

Chat the message belongs to

#### Inherited from

[ServiceMessage](Message.ServiceMessage.md).[chat](Message.ServiceMessage.md#chat)

#### Defined in

[messageTypes.d.ts:21](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L21)

___

### date

• **date**: `number`

Date the message was sent in Unix time. It is always a positive number, representing a valid date.

#### Inherited from

[ServiceMessage](Message.ServiceMessage.md).[date](Message.ServiceMessage.md#date)

#### Defined in

[messageTypes.d.ts:19](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L19)

___

### edit\_date

• `Optional` **edit\_date**: `number`

Date the message was last edited in Unix time

#### Defined in

[messageTypes.d.ts:43](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L43)

___

### external\_reply

• `Optional` **external\_reply**: [`ExternalReplyInfo`](ExternalReplyInfo.md)

Information about the message that is being replied to, which may come from another chat or forum topic

#### Defined in

[messageTypes.d.ts:35](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L35)

___

### forward\_origin

• `Optional` **forward\_origin**: [`MessageOrigin`](../modules.md#messageorigin)

Information about the original message for forwarded messages

#### Defined in

[messageTypes.d.ts:29](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L29)

___

### from

• `Optional` **from**: [`User`](User.md)

Sender of the message; empty for messages sent to channels. For backward compatibility, the field contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat.

#### Inherited from

[ServiceMessage](Message.ServiceMessage.md).[from](Message.ServiceMessage.md#from)

#### Defined in

[messageTypes.d.ts:15](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L15)

___

### has\_protected\_content

• `Optional` **has\_protected\_content**: ``true``

True, if the message can't be forwarded

#### Defined in

[messageTypes.d.ts:45](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L45)

___

### is\_automatic\_forward

• `Optional` **is\_automatic\_forward**: ``true``

True, if the message is a channel post that was automatically forwarded to the connected discussion group

#### Defined in

[messageTypes.d.ts:31](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L31)

___

### is\_topic\_message

• `Optional` **is\_topic\_message**: `boolean`

True, if the message is sent to a forum topic

#### Inherited from

[ServiceMessage](Message.ServiceMessage.md).[is_topic_message](Message.ServiceMessage.md#is_topic_message)

#### Defined in

[messageTypes.d.ts:23](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L23)

___

### link\_preview\_options

• `Optional` **link\_preview\_options**: [`LinkPreviewOptions`](LinkPreviewOptions.md)

Options used for link preview generation for the message, if it is a text message and link preview options were changed

#### Defined in

[messageTypes.d.ts:49](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L49)

___

### message\_id

• **message\_id**: `number`

Unique message identifier inside this chat

#### Inherited from

[ServiceMessage](Message.ServiceMessage.md).[message_id](Message.ServiceMessage.md#message_id)

#### Defined in

[messageTypes.d.ts:11](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L11)

___

### message\_thread\_id

• `Optional` **message\_thread\_id**: `number`

Unique identifier of a message thread or a forum topic to which the message belongs; for supergroups only

#### Inherited from

[ServiceMessage](Message.ServiceMessage.md).[message_thread_id](Message.ServiceMessage.md#message_thread_id)

#### Defined in

[messageTypes.d.ts:13](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L13)

___

### quote

• `Optional` **quote**: [`TextQuote`](TextQuote.md)

For replies that quote part of the original message, the quoted part of the message

#### Defined in

[messageTypes.d.ts:37](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L37)

___

### reply\_markup

• `Optional` **reply\_markup**: [`InlineKeyboardMarkup`](InlineKeyboardMarkup.md)

Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons.

#### Defined in

[messageTypes.d.ts:51](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L51)

___

### reply\_to\_message

• `Optional` **reply\_to\_message**: [`ReplyMessage`](../modules.md#replymessage)

For replies in the same chat and message thread, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.

#### Defined in

[messageTypes.d.ts:33](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L33)

___

### reply\_to\_story

• `Optional` **reply\_to\_story**: [`Story`](Story.md)

For replies to a story, the original message

#### Defined in

[messageTypes.d.ts:39](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L39)

___

### sender\_boost\_count

• `Optional` **sender\_boost\_count**: `number`

If the sender of the message boosted the chat, the number of boosts added by the user

#### Defined in

[messageTypes.d.ts:27](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L27)

___

### sender\_chat

• `Optional` **sender\_chat**: [`Chat`](../modules.md#chat)

Sender of the message, sent on behalf of a chat. For example, the channel itself for channel posts, the supergroup itself for messages from anonymous group administrators, the linked channel for messages automatically forwarded to the discussion group. For backward compatibility, the field from contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat.

#### Inherited from

[ServiceMessage](Message.ServiceMessage.md).[sender_chat](Message.ServiceMessage.md#sender_chat)

#### Defined in

[messageTypes.d.ts:17](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L17)

___

### via\_bot

• `Optional` **via\_bot**: [`User`](User.md)

Bot through which the message was sent

#### Defined in

[messageTypes.d.ts:41](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L41)
