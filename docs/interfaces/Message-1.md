[@telegram.ts/types](../README.md) / [Exports](../modules.md) / Message

# Interface: Message

## Hierarchy

- [`MediaMessage`](Message.MediaMessage.md)

  ↳ **`Message`**

## Table of contents

### Properties

- [animation](Message-1.md#animation)
- [audio](Message-1.md#audio)
- [author\_signature](Message-1.md#author_signature)
- [boost\_added](Message-1.md#boost_added)
- [caption](Message-1.md#caption)
- [caption\_entities](Message-1.md#caption_entities)
- [channel\_chat\_created](Message-1.md#channel_chat_created)
- [chat](Message-1.md#chat)
- [chat\_shared](Message-1.md#chat_shared)
- [connected\_website](Message-1.md#connected_website)
- [contact](Message-1.md#contact)
- [date](Message-1.md#date)
- [delete\_chat\_photo](Message-1.md#delete_chat_photo)
- [dice](Message-1.md#dice)
- [document](Message-1.md#document)
- [edit\_date](Message-1.md#edit_date)
- [entities](Message-1.md#entities)
- [external\_reply](Message-1.md#external_reply)
- [forum\_topic\_closed](Message-1.md#forum_topic_closed)
- [forum\_topic\_created](Message-1.md#forum_topic_created)
- [forum\_topic\_edited](Message-1.md#forum_topic_edited)
- [forum\_topic\_reopened](Message-1.md#forum_topic_reopened)
- [forward\_origin](Message-1.md#forward_origin)
- [from](Message-1.md#from)
- [game](Message-1.md#game)
- [general\_forum\_topic\_hidden](Message-1.md#general_forum_topic_hidden)
- [general\_forum\_topic\_unhidden](Message-1.md#general_forum_topic_unhidden)
- [giveaway](Message-1.md#giveaway)
- [giveaway\_completed](Message-1.md#giveaway_completed)
- [giveaway\_created](Message-1.md#giveaway_created)
- [giveaway\_winners](Message-1.md#giveaway_winners)
- [group\_chat\_created](Message-1.md#group_chat_created)
- [has\_media\_spoiler](Message-1.md#has_media_spoiler)
- [has\_protected\_content](Message-1.md#has_protected_content)
- [invoice](Message-1.md#invoice)
- [is\_automatic\_forward](Message-1.md#is_automatic_forward)
- [is\_topic\_message](Message-1.md#is_topic_message)
- [left\_chat\_member](Message-1.md#left_chat_member)
- [link\_preview\_options](Message-1.md#link_preview_options)
- [location](Message-1.md#location)
- [media\_group\_id](Message-1.md#media_group_id)
- [message\_auto\_delete\_timer\_changed](Message-1.md#message_auto_delete_timer_changed)
- [message\_id](Message-1.md#message_id)
- [message\_thread\_id](Message-1.md#message_thread_id)
- [migrate\_from\_chat\_id](Message-1.md#migrate_from_chat_id)
- [migrate\_to\_chat\_id](Message-1.md#migrate_to_chat_id)
- [new\_chat\_members](Message-1.md#new_chat_members)
- [new\_chat\_photo](Message-1.md#new_chat_photo)
- [new\_chat\_title](Message-1.md#new_chat_title)
- [passport\_data](Message-1.md#passport_data)
- [photo](Message-1.md#photo)
- [pinned\_message](Message-1.md#pinned_message)
- [poll](Message-1.md#poll)
- [proximity\_alert\_triggered](Message-1.md#proximity_alert_triggered)
- [quote](Message-1.md#quote)
- [reply\_markup](Message-1.md#reply_markup)
- [reply\_to\_message](Message-1.md#reply_to_message)
- [reply\_to\_story](Message-1.md#reply_to_story)
- [sender\_boost\_count](Message-1.md#sender_boost_count)
- [sender\_chat](Message-1.md#sender_chat)
- [sticker](Message-1.md#sticker)
- [story](Message-1.md#story)
- [successful\_payment](Message-1.md#successful_payment)
- [supergroup\_chat\_created](Message-1.md#supergroup_chat_created)
- [text](Message-1.md#text)
- [users\_shared](Message-1.md#users_shared)
- [venue](Message-1.md#venue)
- [via\_bot](Message-1.md#via_bot)
- [video](Message-1.md#video)
- [video\_chat\_ended](Message-1.md#video_chat_ended)
- [video\_chat\_participants\_invited](Message-1.md#video_chat_participants_invited)
- [video\_chat\_scheduled](Message-1.md#video_chat_scheduled)
- [video\_chat\_started](Message-1.md#video_chat_started)
- [video\_note](Message-1.md#video_note)
- [voice](Message-1.md#voice)
- [web\_app\_data](Message-1.md#web_app_data)
- [write\_access\_allowed](Message-1.md#write_access_allowed)

## Properties

### animation

• `Optional` **animation**: [`Animation`](Animation.md)

Message is an animation, information about the animation. For backward compatibility, when this field is set, the document field will also be set

#### Defined in

[messageTypes.d.ts:154](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L154)

___

### audio

• `Optional` **audio**: [`Audio`](Audio.md)

Message is an audio file, information about the file

#### Defined in

[messageTypes.d.ts:156](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L156)

___

### author\_signature

• `Optional` **author\_signature**: `string`

Signature of the post author for messages in channels, or the custom title of an anonymous group administrator

#### Inherited from

[MediaMessage](Message.MediaMessage.md).[author_signature](Message.MediaMessage.md#author_signature)

#### Defined in

[messageTypes.d.ts:47](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L47)

___

### boost\_added

• `Optional` **boost\_added**: [`ChatBoostAdded`](ChatBoostAdded.md)

Service message: user boosted the chat

#### Defined in

[messageTypes.d.ts:224](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L224)

___

### caption

• `Optional` **caption**: `string`

Caption for the animation, audio, document, photo, video or voice

#### Inherited from

[MediaMessage](Message.MediaMessage.md).[caption](Message.MediaMessage.md#caption)

#### Defined in

[messageTypes.d.ts:55](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L55)

___

### caption\_entities

• `Optional` **caption\_entities**: [`MessageEntity`](../modules.md#messageentity)[]

For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption

#### Inherited from

[MediaMessage](Message.MediaMessage.md).[caption_entities](Message.MediaMessage.md#caption_entities)

#### Defined in

[messageTypes.d.ts:57](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L57)

___

### channel\_chat\_created

• `Optional` **channel\_chat\_created**: ``true``

Service message: the channel has been created. This field can't be received in a message coming through updates, because bot can't be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel.

#### Defined in

[messageTypes.d.ts:198](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L198)

___

### chat

• **chat**: [`Chat`](../modules.md#chat)

Chat the message belongs to

#### Inherited from

[MediaMessage](Message.MediaMessage.md).[chat](Message.MediaMessage.md#chat)

#### Defined in

[messageTypes.d.ts:21](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L21)

___

### chat\_shared

• `Optional` **chat\_shared**: [`ChatShared`](ChatShared.md)

Service message: a chat was shared with the bot

#### Defined in

[messageTypes.d.ts:214](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L214)

___

### connected\_website

• `Optional` **connected\_website**: `string`

The domain name of the website on which the user has logged in. More about Telegram Login »

#### Defined in

[messageTypes.d.ts:216](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L216)

___

### contact

• `Optional` **contact**: [`Contact`](Contact.md)

Message is a shared contact, information about the contact

#### Defined in

[messageTypes.d.ts:172](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L172)

___

### date

• **date**: `number`

Date the message was sent in Unix time. It is always a positive number, representing a valid date.

#### Inherited from

[MediaMessage](Message.MediaMessage.md).[date](Message.MediaMessage.md#date)

#### Defined in

[messageTypes.d.ts:19](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L19)

___

### delete\_chat\_photo

• `Optional` **delete\_chat\_photo**: ``true``

Service message: the chat photo was deleted

#### Defined in

[messageTypes.d.ts:192](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L192)

___

### dice

• `Optional` **dice**: [`Dice`](Dice.md)

Message is a dice with random value

#### Defined in

[messageTypes.d.ts:174](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L174)

___

### document

• `Optional` **document**: [`Document`](Document.md)

Message is a general file, information about the file

#### Defined in

[messageTypes.d.ts:158](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L158)

___

### edit\_date

• `Optional` **edit\_date**: `number`

Date the message was last edited in Unix time

#### Inherited from

[MediaMessage](Message.MediaMessage.md).[edit_date](Message.MediaMessage.md#edit_date)

#### Defined in

[messageTypes.d.ts:43](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L43)

___

### entities

• `Optional` **entities**: [`MessageEntity`](../modules.md#messageentity)[]

For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text

#### Defined in

[messageTypes.d.ts:152](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L152)

___

### external\_reply

• `Optional` **external\_reply**: [`ExternalReplyInfo`](ExternalReplyInfo.md)

Information about the message that is being replied to, which may come from another chat or forum topic

#### Inherited from

[MediaMessage](Message.MediaMessage.md).[external_reply](Message.MediaMessage.md#external_reply)

#### Defined in

[messageTypes.d.ts:35](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L35)

___

### forum\_topic\_closed

• `Optional` **forum\_topic\_closed**: [`ForumTopicClosed`](ForumTopicClosed.md)

Service message: forum topic closed

#### Defined in

[messageTypes.d.ts:230](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L230)

___

### forum\_topic\_created

• `Optional` **forum\_topic\_created**: [`ForumTopicCreated`](ForumTopicCreated.md)

Service message: forum topic created

#### Defined in

[messageTypes.d.ts:226](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L226)

___

### forum\_topic\_edited

• `Optional` **forum\_topic\_edited**: [`ForumTopicEdited`](ForumTopicEdited.md)

Service message: forum topic edited

#### Defined in

[messageTypes.d.ts:228](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L228)

___

### forum\_topic\_reopened

• `Optional` **forum\_topic\_reopened**: [`ForumTopicReopened`](ForumTopicReopened.md)

Service message: forum topic reopened

#### Defined in

[messageTypes.d.ts:232](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L232)

___

### forward\_origin

• `Optional` **forward\_origin**: [`MessageOrigin`](../modules.md#messageorigin)

Information about the original message for forwarded messages

#### Inherited from

[MediaMessage](Message.MediaMessage.md).[forward_origin](Message.MediaMessage.md#forward_origin)

#### Defined in

[messageTypes.d.ts:29](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L29)

___

### from

• `Optional` **from**: [`User`](User.md)

Sender of the message; empty for messages sent to channels. For backward compatibility, the field contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat.

#### Inherited from

[MediaMessage](Message.MediaMessage.md).[from](Message.MediaMessage.md#from)

#### Defined in

[messageTypes.d.ts:15](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L15)

___

### game

• `Optional` **game**: [`Game`](Game.md)

Message is a game, information about the game. More about games »

#### Defined in

[messageTypes.d.ts:176](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L176)

___

### general\_forum\_topic\_hidden

• `Optional` **general\_forum\_topic\_hidden**: [`GeneralForumTopicHidden`](GeneralForumTopicHidden.md)

Service message: the 'General' forum topic hidden

#### Defined in

[messageTypes.d.ts:234](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L234)

___

### general\_forum\_topic\_unhidden

• `Optional` **general\_forum\_topic\_unhidden**: [`GeneralForumTopicUnhidden`](GeneralForumTopicUnhidden.md)

Service message: the 'General' forum topic unhidden

#### Defined in

[messageTypes.d.ts:236](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L236)

___

### giveaway

• `Optional` **giveaway**: [`Giveaway`](Giveaway.md)

The message is a scheduled giveaway message

#### Defined in

[messageTypes.d.ts:240](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L240)

___

### giveaway\_completed

• `Optional` **giveaway\_completed**: [`GiveawayCompleted`](GiveawayCompleted.md)

Service message: a giveaway without public winners was completed

#### Defined in

[messageTypes.d.ts:244](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L244)

___

### giveaway\_created

• `Optional` **giveaway\_created**: [`GiveawayCreated`](GiveawayCreated.md)

Service message: a scheduled giveaway was created

#### Defined in

[messageTypes.d.ts:238](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L238)

___

### giveaway\_winners

• `Optional` **giveaway\_winners**: [`GiveawayWinners`](GiveawayWinners.md)

A giveaway with public winners was completed

#### Defined in

[messageTypes.d.ts:242](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L242)

___

### group\_chat\_created

• `Optional` **group\_chat\_created**: ``true``

Service message: the group has been created

#### Defined in

[messageTypes.d.ts:194](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L194)

___

### has\_media\_spoiler

• `Optional` **has\_media\_spoiler**: ``true``

True, if the message media is covered by a spoiler animation

#### Inherited from

[MediaMessage](Message.MediaMessage.md).[has_media_spoiler](Message.MediaMessage.md#has_media_spoiler)

#### Defined in

[messageTypes.d.ts:63](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L63)

___

### has\_protected\_content

• `Optional` **has\_protected\_content**: ``true``

True, if the message can't be forwarded

#### Inherited from

[MediaMessage](Message.MediaMessage.md).[has_protected_content](Message.MediaMessage.md#has_protected_content)

#### Defined in

[messageTypes.d.ts:45](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L45)

___

### invoice

• `Optional` **invoice**: [`Invoice`](Invoice.md)

Message is an invoice for a payment, information about the invoice. More about payments »

#### Defined in

[messageTypes.d.ts:208](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L208)

___

### is\_automatic\_forward

• `Optional` **is\_automatic\_forward**: ``true``

True, if the message is a channel post that was automatically forwarded to the connected discussion group

#### Inherited from

[MediaMessage](Message.MediaMessage.md).[is_automatic_forward](Message.MediaMessage.md#is_automatic_forward)

#### Defined in

[messageTypes.d.ts:31](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L31)

___

### is\_topic\_message

• `Optional` **is\_topic\_message**: `boolean`

True, if the message is sent to a forum topic

#### Inherited from

[MediaMessage](Message.MediaMessage.md).[is_topic_message](Message.MediaMessage.md#is_topic_message)

#### Defined in

[messageTypes.d.ts:23](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L23)

___

### left\_chat\_member

• `Optional` **left\_chat\_member**: [`User`](User.md)

A member was removed from the group, information about them (this member may be the bot itself)

#### Defined in

[messageTypes.d.ts:186](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L186)

___

### link\_preview\_options

• `Optional` **link\_preview\_options**: [`LinkPreviewOptions`](LinkPreviewOptions.md)

Options used for link preview generation for the message, if it is a text message and link preview options were changed

#### Inherited from

[MediaMessage](Message.MediaMessage.md).[link_preview_options](Message.MediaMessage.md#link_preview_options)

#### Defined in

[messageTypes.d.ts:49](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L49)

___

### location

• `Optional` **location**: [`Location`](Location.md)

Message is a shared location, information about the location

#### Defined in

[messageTypes.d.ts:182](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L182)

___

### media\_group\_id

• `Optional` **media\_group\_id**: `string`

The unique identifier of a media message group this message belongs to

#### Inherited from

[MediaMessage](Message.MediaMessage.md).[media_group_id](Message.MediaMessage.md#media_group_id)

#### Defined in

[messageTypes.d.ts:61](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L61)

___

### message\_auto\_delete\_timer\_changed

• `Optional` **message\_auto\_delete\_timer\_changed**: [`MessageAutoDeleteTimerChanged`](MessageAutoDeleteTimerChanged.md)

Service message: auto-delete timer settings changed in the chat

#### Defined in

[messageTypes.d.ts:200](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L200)

___

### message\_id

• **message\_id**: `number`

Unique message identifier inside this chat

#### Inherited from

[MediaMessage](Message.MediaMessage.md).[message_id](Message.MediaMessage.md#message_id)

#### Defined in

[messageTypes.d.ts:11](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L11)

___

### message\_thread\_id

• `Optional` **message\_thread\_id**: `number`

Unique identifier of a message thread or a forum topic to which the message belongs; for supergroups only

#### Inherited from

[MediaMessage](Message.MediaMessage.md).[message_thread_id](Message.MediaMessage.md#message_thread_id)

#### Defined in

[messageTypes.d.ts:13](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L13)

___

### migrate\_from\_chat\_id

• `Optional` **migrate\_from\_chat\_id**: `number`

The supergroup has been migrated from a group with the specified identifier.

#### Defined in

[messageTypes.d.ts:204](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L204)

___

### migrate\_to\_chat\_id

• `Optional` **migrate\_to\_chat\_id**: `number`

The group has been migrated to a supergroup with the specified identifier.

#### Defined in

[messageTypes.d.ts:202](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L202)

___

### new\_chat\_members

• `Optional` **new\_chat\_members**: [`User`](User.md)[]

New members that were added to the group or supergroup and information about them (the bot itself may be one of these members)

#### Defined in

[messageTypes.d.ts:184](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L184)

___

### new\_chat\_photo

• `Optional` **new\_chat\_photo**: [`PhotoSize`](PhotoSize.md)[]

A chat photo was change to this value

#### Defined in

[messageTypes.d.ts:190](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L190)

___

### new\_chat\_title

• `Optional` **new\_chat\_title**: `string`

A chat title was changed to this value

#### Defined in

[messageTypes.d.ts:188](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L188)

___

### passport\_data

• `Optional` **passport\_data**: [`PassportData`](PassportData.md)

Telegram Passport data

#### Defined in

[messageTypes.d.ts:220](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L220)

___

### photo

• `Optional` **photo**: [`PhotoSize`](PhotoSize.md)[]

Message is a photo, available sizes of the photo

#### Defined in

[messageTypes.d.ts:160](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L160)

___

### pinned\_message

• `Optional` **pinned\_message**: [`MaybeInaccessibleMessage`](../modules.md#maybeinaccessiblemessage)

Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.

#### Defined in

[messageTypes.d.ts:206](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L206)

___

### poll

• `Optional` **poll**: [`Poll`](Poll.md)

Message is a native poll, information about the poll

#### Defined in

[messageTypes.d.ts:178](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L178)

___

### proximity\_alert\_triggered

• `Optional` **proximity\_alert\_triggered**: [`ProximityAlertTriggered`](ProximityAlertTriggered.md)

Service message. A user in the chat triggered another user's proximity alert while sharing Live Location.

#### Defined in

[messageTypes.d.ts:222](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L222)

___

### quote

• `Optional` **quote**: [`TextQuote`](TextQuote.md)

For replies that quote part of the original message, the quoted part of the message

#### Inherited from

[MediaMessage](Message.MediaMessage.md).[quote](Message.MediaMessage.md#quote)

#### Defined in

[messageTypes.d.ts:37](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L37)

___

### reply\_markup

• `Optional` **reply\_markup**: [`InlineKeyboardMarkup`](InlineKeyboardMarkup.md)

Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons.

#### Inherited from

[MediaMessage](Message.MediaMessage.md).[reply_markup](Message.MediaMessage.md#reply_markup)

#### Defined in

[messageTypes.d.ts:51](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L51)

___

### reply\_to\_message

• `Optional` **reply\_to\_message**: [`ReplyMessage`](../modules.md#replymessage)

For replies in the same chat and message thread, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.

#### Inherited from

[MediaMessage](Message.MediaMessage.md).[reply_to_message](Message.MediaMessage.md#reply_to_message)

#### Defined in

[messageTypes.d.ts:33](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L33)

___

### reply\_to\_story

• `Optional` **reply\_to\_story**: [`Story`](Story.md)

For replies to a story, the original message

#### Inherited from

[MediaMessage](Message.MediaMessage.md).[reply_to_story](Message.MediaMessage.md#reply_to_story)

#### Defined in

[messageTypes.d.ts:39](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L39)

___

### sender\_boost\_count

• `Optional` **sender\_boost\_count**: `number`

If the sender of the message boosted the chat, the number of boosts added by the user

#### Inherited from

[MediaMessage](Message.MediaMessage.md).[sender_boost_count](Message.MediaMessage.md#sender_boost_count)

#### Defined in

[messageTypes.d.ts:27](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L27)

___

### sender\_chat

• `Optional` **sender\_chat**: [`Chat`](../modules.md#chat)

Sender of the message, sent on behalf of a chat. For example, the channel itself for channel posts, the supergroup itself for messages from anonymous group administrators, the linked channel for messages automatically forwarded to the discussion group. For backward compatibility, the field from contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat.

#### Inherited from

[MediaMessage](Message.MediaMessage.md).[sender_chat](Message.MediaMessage.md#sender_chat)

#### Defined in

[messageTypes.d.ts:17](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L17)

___

### sticker

• `Optional` **sticker**: [`Sticker`](Sticker.md)

Message is a sticker, information about the sticker

#### Defined in

[messageTypes.d.ts:162](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L162)

___

### story

• `Optional` **story**: [`Story`](Story.md)

Message is a forwarded story

#### Defined in

[messageTypes.d.ts:164](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L164)

___

### successful\_payment

• `Optional` **successful\_payment**: [`SuccessfulPayment`](SuccessfulPayment.md)

Message is a service message about a successful payment, information about the payment. More about payments »

#### Defined in

[messageTypes.d.ts:210](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L210)

___

### supergroup\_chat\_created

• `Optional` **supergroup\_chat\_created**: ``true``

Service message: the supergroup has been created. This field can't be received in a message coming through updates, because bot can't be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup.

#### Defined in

[messageTypes.d.ts:196](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L196)

___

### text

• `Optional` **text**: `string`

For text messages, the actual UTF-8 text of the message

#### Defined in

[messageTypes.d.ts:150](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L150)

___

### users\_shared

• `Optional` **users\_shared**: [`UsersShared`](UsersShared.md)

Service message: users were shared with the bot

#### Defined in

[messageTypes.d.ts:212](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L212)

___

### venue

• `Optional` **venue**: [`Venue`](Venue.md)

Message is a venue, information about the venue. For backward compatibility, when this field is set, the location field will also be set

#### Defined in

[messageTypes.d.ts:180](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L180)

___

### via\_bot

• `Optional` **via\_bot**: [`User`](User.md)

Bot through which the message was sent

#### Inherited from

[MediaMessage](Message.MediaMessage.md).[via_bot](Message.MediaMessage.md#via_bot)

#### Defined in

[messageTypes.d.ts:41](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L41)

___

### video

• `Optional` **video**: [`Video`](Video.md)

Message is a video, information about the video

#### Defined in

[messageTypes.d.ts:166](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L166)

___

### video\_chat\_ended

• `Optional` **video\_chat\_ended**: [`VideoChatEnded`](VideoChatEnded.md)

Service message: video chat ended

#### Defined in

[messageTypes.d.ts:250](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L250)

___

### video\_chat\_participants\_invited

• `Optional` **video\_chat\_participants\_invited**: [`VideoChatParticipantsInvited`](VideoChatParticipantsInvited.md)

Service message: new participants invited to a video chat

#### Defined in

[messageTypes.d.ts:252](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L252)

___

### video\_chat\_scheduled

• `Optional` **video\_chat\_scheduled**: [`VideoChatScheduled`](VideoChatScheduled.md)

Service message: video chat scheduled

#### Defined in

[messageTypes.d.ts:246](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L246)

___

### video\_chat\_started

• `Optional` **video\_chat\_started**: [`VideoChatStarted`](VideoChatStarted.md)

Service message: video chat started

#### Defined in

[messageTypes.d.ts:248](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L248)

___

### video\_note

• `Optional` **video\_note**: [`VideoNote`](VideoNote.md)

Message is a video note, information about the video message

#### Defined in

[messageTypes.d.ts:168](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L168)

___

### voice

• `Optional` **voice**: [`Voice`](Voice.md)

Message is a voice message, information about the file

#### Defined in

[messageTypes.d.ts:170](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L170)

___

### web\_app\_data

• `Optional` **web\_app\_data**: [`WebAppData`](WebAppData.md)

Service message: data sent by a Web App

#### Defined in

[messageTypes.d.ts:254](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L254)

___

### write\_access\_allowed

• `Optional` **write\_access\_allowed**: [`WriteAccessAllowed`](WriteAccessAllowed.md)

Service message: the user allowed the bot to write messages after adding it to the attachment or side menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess

#### Defined in

[messageTypes.d.ts:218](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L218)
