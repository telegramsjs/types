[@telegram.ts/types](../README.md) / [Exports](../modules.md) / ExternalReplyInfo

# Interface: ExternalReplyInfo

This object contains information about a message that is being replied to, which may come from another chat or forum topic.

## Table of contents

### Properties

- [animation](ExternalReplyInfo.md#animation)
- [audio](ExternalReplyInfo.md#audio)
- [chat](ExternalReplyInfo.md#chat)
- [contact](ExternalReplyInfo.md#contact)
- [dice](ExternalReplyInfo.md#dice)
- [document](ExternalReplyInfo.md#document)
- [game](ExternalReplyInfo.md#game)
- [giveaway](ExternalReplyInfo.md#giveaway)
- [giveaway\_winners](ExternalReplyInfo.md#giveaway_winners)
- [has\_media\_spoiler](ExternalReplyInfo.md#has_media_spoiler)
- [invoice](ExternalReplyInfo.md#invoice)
- [link\_preview\_options](ExternalReplyInfo.md#link_preview_options)
- [location](ExternalReplyInfo.md#location)
- [message\_id](ExternalReplyInfo.md#message_id)
- [origin](ExternalReplyInfo.md#origin)
- [photo](ExternalReplyInfo.md#photo)
- [poll](ExternalReplyInfo.md#poll)
- [sticker](ExternalReplyInfo.md#sticker)
- [story](ExternalReplyInfo.md#story)
- [venue](ExternalReplyInfo.md#venue)
- [video](ExternalReplyInfo.md#video)
- [video\_note](ExternalReplyInfo.md#video_note)
- [voice](ExternalReplyInfo.md#voice)

## Properties

### animation

• `Optional` **animation**: [`Animation`](Animation.md)

Message is an animation, information about the animation

#### Defined in

[messageTypes.d.ts:478](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L478)

___

### audio

• `Optional` **audio**: [`Audio`](Audio.md)

Message is an audio file, information about the file

#### Defined in

[messageTypes.d.ts:480](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L480)

___

### chat

• `Optional` **chat**: [`Chat`](../modules.md#chat)

Chat the original message belongs to. Available only if the chat is a supergroup or a channel.

#### Defined in

[messageTypes.d.ts:472](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L472)

___

### contact

• `Optional` **contact**: [`Contact`](Contact.md)

Message is a shared contact, information about the contact

#### Defined in

[messageTypes.d.ts:498](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L498)

___

### dice

• `Optional` **dice**: [`Dice`](Dice.md)

Message is a dice with random value

#### Defined in

[messageTypes.d.ts:500](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L500)

___

### document

• `Optional` **document**: [`Document`](Document.md)

Message is a general file, information about the file

#### Defined in

[messageTypes.d.ts:482](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L482)

___

### game

• `Optional` **game**: [`Game`](Game.md)

Message is a game, information about the game. More about games »

#### Defined in

[messageTypes.d.ts:502](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L502)

___

### giveaway

• `Optional` **giveaway**: [`Giveaway`](Giveaway.md)

Message is a scheduled giveaway, information about the giveaway

#### Defined in

[messageTypes.d.ts:504](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L504)

___

### giveaway\_winners

• `Optional` **giveaway\_winners**: [`GiveawayWinners`](GiveawayWinners.md)

A giveaway with public winners was completed

#### Defined in

[messageTypes.d.ts:506](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L506)

___

### has\_media\_spoiler

• `Optional` **has\_media\_spoiler**: ``true``

True, if the message media is covered by a spoiler animation

#### Defined in

[messageTypes.d.ts:496](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L496)

___

### invoice

• `Optional` **invoice**: [`Invoice`](Invoice.md)

Message is an invoice for a payment, information about the invoice. More about payments »

#### Defined in

[messageTypes.d.ts:508](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L508)

___

### link\_preview\_options

• `Optional` **link\_preview\_options**: [`LinkPreviewOptions`](LinkPreviewOptions.md)

Options used for link preview generation for the original message, if it is a text message

#### Defined in

[messageTypes.d.ts:476](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L476)

___

### location

• `Optional` **location**: [`Location`](Location.md)

Message is a shared location, information about the location

#### Defined in

[messageTypes.d.ts:510](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L510)

___

### message\_id

• `Optional` **message\_id**: `number`

Unique message identifier inside the original chat. Available only if the original chat is a supergroup or a channel.

#### Defined in

[messageTypes.d.ts:474](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L474)

___

### origin

• **origin**: [`MessageOrigin`](../modules.md#messageorigin)

Origin of the message replied to by the given message

#### Defined in

[messageTypes.d.ts:470](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L470)

___

### photo

• `Optional` **photo**: [`PhotoSize`](PhotoSize.md)[]

Message is a photo, available sizes of the photo

#### Defined in

[messageTypes.d.ts:484](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L484)

___

### poll

• `Optional` **poll**: [`Poll`](Poll.md)

Message is a native poll, information about the poll

#### Defined in

[messageTypes.d.ts:512](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L512)

___

### sticker

• `Optional` **sticker**: [`Sticker`](Sticker.md)

Message is a sticker, information about the sticker

#### Defined in

[messageTypes.d.ts:486](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L486)

___

### story

• `Optional` **story**: [`Story`](Story.md)

Message is a forwarded story

#### Defined in

[messageTypes.d.ts:488](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L488)

___

### venue

• `Optional` **venue**: [`Venue`](Venue.md)

Message is a venue, information about the venue

#### Defined in

[messageTypes.d.ts:514](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L514)

___

### video

• `Optional` **video**: [`Video`](Video.md)

Message is a video, information about the video

#### Defined in

[messageTypes.d.ts:490](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L490)

___

### video\_note

• `Optional` **video\_note**: [`VideoNote`](VideoNote.md)

Message is a video note, information about the video message

#### Defined in

[messageTypes.d.ts:492](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L492)

___

### voice

• `Optional` **voice**: [`Voice`](Voice.md)

Message is a voice message, information about the file

#### Defined in

[messageTypes.d.ts:494](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L494)
