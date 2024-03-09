[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [Message](../modules/Message.md) / MediaMessage

# Interface: MediaMessage

[Message](../modules/Message.md).MediaMessage

## Hierarchy

- [`CaptionableMessage`](Message.CaptionableMessage.md)

  ↳ **`MediaMessage`**

  ↳↳ [`Message`](Message-1.md)

## Table of contents

### Properties

- [author\_signature](Message.MediaMessage.md#author_signature)
- [caption](Message.MediaMessage.md#caption)
- [caption\_entities](Message.MediaMessage.md#caption_entities)
- [chat](Message.MediaMessage.md#chat)
- [date](Message.MediaMessage.md#date)
- [edit\_date](Message.MediaMessage.md#edit_date)
- [external\_reply](Message.MediaMessage.md#external_reply)
- [forward\_origin](Message.MediaMessage.md#forward_origin)
- [from](Message.MediaMessage.md#from)
- [has\_media\_spoiler](Message.MediaMessage.md#has_media_spoiler)
- [has\_protected\_content](Message.MediaMessage.md#has_protected_content)
- [is\_automatic\_forward](Message.MediaMessage.md#is_automatic_forward)
- [is\_topic\_message](Message.MediaMessage.md#is_topic_message)
- [link\_preview\_options](Message.MediaMessage.md#link_preview_options)
- [media\_group\_id](Message.MediaMessage.md#media_group_id)
- [message\_id](Message.MediaMessage.md#message_id)
- [message\_thread\_id](Message.MediaMessage.md#message_thread_id)
- [quote](Message.MediaMessage.md#quote)
- [reply\_markup](Message.MediaMessage.md#reply_markup)
- [reply\_to\_message](Message.MediaMessage.md#reply_to_message)
- [reply\_to\_story](Message.MediaMessage.md#reply_to_story)
- [sender\_boost\_count](Message.MediaMessage.md#sender_boost_count)
- [sender\_chat](Message.MediaMessage.md#sender_chat)
- [via\_bot](Message.MediaMessage.md#via_bot)

## Properties

### author\_signature

• `Optional` **author\_signature**: `string`

Signature of the post author for messages in channels, or the custom title of an anonymous group administrator

#### Inherited from

[CaptionableMessage](Message.CaptionableMessage.md).[author_signature](Message.CaptionableMessage.md#author_signature)

#### Defined in

[messageTypes.d.ts:47](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L47)

___

### caption

• `Optional` **caption**: `string`

Caption for the animation, audio, document, photo, video or voice

#### Inherited from

[CaptionableMessage](Message.CaptionableMessage.md).[caption](Message.CaptionableMessage.md#caption)

#### Defined in

[messageTypes.d.ts:55](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L55)

___

### caption\_entities

• `Optional` **caption\_entities**: [`MessageEntity`](../modules.md#messageentity)[]

For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption

#### Inherited from

[CaptionableMessage](Message.CaptionableMessage.md).[caption_entities](Message.CaptionableMessage.md#caption_entities)

#### Defined in

[messageTypes.d.ts:57](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L57)

___

### chat

• **chat**: [`Chat`](../modules.md#chat)

Chat the message belongs to

#### Inherited from

[CaptionableMessage](Message.CaptionableMessage.md).[chat](Message.CaptionableMessage.md#chat)

#### Defined in

[messageTypes.d.ts:21](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L21)

___

### date

• **date**: `number`

Date the message was sent in Unix time. It is always a positive number, representing a valid date.

#### Inherited from

[CaptionableMessage](Message.CaptionableMessage.md).[date](Message.CaptionableMessage.md#date)

#### Defined in

[messageTypes.d.ts:19](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L19)

___

### edit\_date

• `Optional` **edit\_date**: `number`

Date the message was last edited in Unix time

#### Inherited from

[CaptionableMessage](Message.CaptionableMessage.md).[edit_date](Message.CaptionableMessage.md#edit_date)

#### Defined in

[messageTypes.d.ts:43](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L43)

___

### external\_reply

• `Optional` **external\_reply**: [`ExternalReplyInfo`](ExternalReplyInfo.md)

Information about the message that is being replied to, which may come from another chat or forum topic

#### Inherited from

[CaptionableMessage](Message.CaptionableMessage.md).[external_reply](Message.CaptionableMessage.md#external_reply)

#### Defined in

[messageTypes.d.ts:35](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L35)

___

### forward\_origin

• `Optional` **forward\_origin**: [`MessageOrigin`](../modules.md#messageorigin)

Information about the original message for forwarded messages

#### Inherited from

[CaptionableMessage](Message.CaptionableMessage.md).[forward_origin](Message.CaptionableMessage.md#forward_origin)

#### Defined in

[messageTypes.d.ts:29](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L29)

___

### from

• `Optional` **from**: [`User`](User.md)

Sender of the message; empty for messages sent to channels. For backward compatibility, the field contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat.

#### Inherited from

[CaptionableMessage](Message.CaptionableMessage.md).[from](Message.CaptionableMessage.md#from)

#### Defined in

[messageTypes.d.ts:15](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L15)

___

### has\_media\_spoiler

• `Optional` **has\_media\_spoiler**: ``true``

True, if the message media is covered by a spoiler animation

#### Defined in

[messageTypes.d.ts:63](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L63)

___

### has\_protected\_content

• `Optional` **has\_protected\_content**: ``true``

True, if the message can't be forwarded

#### Inherited from

[CaptionableMessage](Message.CaptionableMessage.md).[has_protected_content](Message.CaptionableMessage.md#has_protected_content)

#### Defined in

[messageTypes.d.ts:45](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L45)

___

### is\_automatic\_forward

• `Optional` **is\_automatic\_forward**: ``true``

True, if the message is a channel post that was automatically forwarded to the connected discussion group

#### Inherited from

[CaptionableMessage](Message.CaptionableMessage.md).[is_automatic_forward](Message.CaptionableMessage.md#is_automatic_forward)

#### Defined in

[messageTypes.d.ts:31](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L31)

___

### is\_topic\_message

• `Optional` **is\_topic\_message**: `boolean`

True, if the message is sent to a forum topic

#### Inherited from

[CaptionableMessage](Message.CaptionableMessage.md).[is_topic_message](Message.CaptionableMessage.md#is_topic_message)

#### Defined in

[messageTypes.d.ts:23](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L23)

___

### link\_preview\_options

• `Optional` **link\_preview\_options**: [`LinkPreviewOptions`](LinkPreviewOptions.md)

Options used for link preview generation for the message, if it is a text message and link preview options were changed

#### Inherited from

[CaptionableMessage](Message.CaptionableMessage.md).[link_preview_options](Message.CaptionableMessage.md#link_preview_options)

#### Defined in

[messageTypes.d.ts:49](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L49)

___

### media\_group\_id

• `Optional` **media\_group\_id**: `string`

The unique identifier of a media message group this message belongs to

#### Defined in

[messageTypes.d.ts:61](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L61)

___

### message\_id

• **message\_id**: `number`

Unique message identifier inside this chat

#### Inherited from

[CaptionableMessage](Message.CaptionableMessage.md).[message_id](Message.CaptionableMessage.md#message_id)

#### Defined in

[messageTypes.d.ts:11](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L11)

___

### message\_thread\_id

• `Optional` **message\_thread\_id**: `number`

Unique identifier of a message thread or a forum topic to which the message belongs; for supergroups only

#### Inherited from

[CaptionableMessage](Message.CaptionableMessage.md).[message_thread_id](Message.CaptionableMessage.md#message_thread_id)

#### Defined in

[messageTypes.d.ts:13](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L13)

___

### quote

• `Optional` **quote**: [`TextQuote`](TextQuote.md)

For replies that quote part of the original message, the quoted part of the message

#### Inherited from

[CaptionableMessage](Message.CaptionableMessage.md).[quote](Message.CaptionableMessage.md#quote)

#### Defined in

[messageTypes.d.ts:37](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L37)

___

### reply\_markup

• `Optional` **reply\_markup**: [`InlineKeyboardMarkup`](InlineKeyboardMarkup.md)

Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons.

#### Inherited from

[CaptionableMessage](Message.CaptionableMessage.md).[reply_markup](Message.CaptionableMessage.md#reply_markup)

#### Defined in

[messageTypes.d.ts:51](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L51)

___

### reply\_to\_message

• `Optional` **reply\_to\_message**: [`ReplyMessage`](../modules.md#replymessage)

For replies in the same chat and message thread, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.

#### Inherited from

[CaptionableMessage](Message.CaptionableMessage.md).[reply_to_message](Message.CaptionableMessage.md#reply_to_message)

#### Defined in

[messageTypes.d.ts:33](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L33)

___

### reply\_to\_story

• `Optional` **reply\_to\_story**: [`Story`](Story.md)

For replies to a story, the original message

#### Inherited from

[CaptionableMessage](Message.CaptionableMessage.md).[reply_to_story](Message.CaptionableMessage.md#reply_to_story)

#### Defined in

[messageTypes.d.ts:39](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L39)

___

### sender\_boost\_count

• `Optional` **sender\_boost\_count**: `number`

If the sender of the message boosted the chat, the number of boosts added by the user

#### Inherited from

[CaptionableMessage](Message.CaptionableMessage.md).[sender_boost_count](Message.CaptionableMessage.md#sender_boost_count)

#### Defined in

[messageTypes.d.ts:27](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L27)

___

### sender\_chat

• `Optional` **sender\_chat**: [`Chat`](../modules.md#chat)

Sender of the message, sent on behalf of a chat. For example, the channel itself for channel posts, the supergroup itself for messages from anonymous group administrators, the linked channel for messages automatically forwarded to the discussion group. For backward compatibility, the field from contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat.

#### Inherited from

[CaptionableMessage](Message.CaptionableMessage.md).[sender_chat](Message.CaptionableMessage.md#sender_chat)

#### Defined in

[messageTypes.d.ts:17](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L17)

___

### via\_bot

• `Optional` **via\_bot**: [`User`](User.md)

Bot through which the message was sent

#### Inherited from

[CaptionableMessage](Message.CaptionableMessage.md).[via_bot](Message.CaptionableMessage.md#via_bot)

#### Defined in

[messageTypes.d.ts:41](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L41)
