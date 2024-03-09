[@telegram.ts/types](../README.md) / [Exports](../modules.md) / Update

# Interface: Update

This object represents an incoming update.
At most one of the optional parameters can be present in any given update.

## Table of contents

### Properties

- [callback\_query](Update-1.md#callback_query)
- [channel\_post](Update-1.md#channel_post)
- [chat\_boost](Update-1.md#chat_boost)
- [chat\_join\_request](Update-1.md#chat_join_request)
- [chat\_member](Update-1.md#chat_member)
- [chosen\_inline\_result](Update-1.md#chosen_inline_result)
- [edited\_channel\_post](Update-1.md#edited_channel_post)
- [edited\_message](Update-1.md#edited_message)
- [inline\_query](Update-1.md#inline_query)
- [message](Update-1.md#message)
- [message\_reaction](Update-1.md#message_reaction)
- [message\_reaction\_count](Update-1.md#message_reaction_count)
- [my\_chat\_member](Update-1.md#my_chat_member)
- [poll](Update-1.md#poll)
- [poll\_answer](Update-1.md#poll_answer)
- [pre\_checkout\_query](Update-1.md#pre_checkout_query)
- [removed\_chat\_boost](Update-1.md#removed_chat_boost)
- [shipping\_query](Update-1.md#shipping_query)
- [update\_id](Update-1.md#update_id)

## Properties

### callback\_query

• `Optional` **callback\_query**: [`CallbackQuery`](CallbackQuery.md)

New incoming callback query.

#### Defined in

[updateTypes.d.ts:102](https://github.com/telegramsjs/types/blob/d08200f/src/updateTypes.d.ts#L102)

___

### channel\_post

• `Optional` **channel\_post**: [`Message`](Message-1.md) & [`Channel`](Update.Channel.md)

New incoming channel post of any kind - text, photo, sticker, etc.

#### Defined in

[updateTypes.d.ts:75](https://github.com/telegramsjs/types/blob/d08200f/src/updateTypes.d.ts#L75)

___

### chat\_boost

• `Optional` **chat\_boost**: [`ChatBoostUpdated`](ChatBoostUpdated.md)

A chat boost was added or changed. The bot must be an administrator in the chat to receive these updates.

#### Defined in

[updateTypes.d.ts:144](https://github.com/telegramsjs/types/blob/d08200f/src/updateTypes.d.ts#L144)

___

### chat\_join\_request

• `Optional` **chat\_join\_request**: [`ChatJoinRequest`](ChatJoinRequest.md)

A request to join the chat has been sent.
The bot must have the can_invite_users administrator right in the chat to receive these updates.

#### Defined in

[updateTypes.d.ts:141](https://github.com/telegramsjs/types/blob/d08200f/src/updateTypes.d.ts#L141)

___

### chat\_member

• `Optional` **chat\_member**: [`ChatMemberUpdated`](ChatMemberUpdated.md)

A chat member's status was updated in a chat.
The bot must be an administrator in the chat and must explicitly specify "chat_member" in the list of allowed_updates to receive these updates.

#### Defined in

[updateTypes.d.ts:135](https://github.com/telegramsjs/types/blob/d08200f/src/updateTypes.d.ts#L135)

___

### chosen\_inline\_result

• `Optional` **chosen\_inline\_result**: [`ChosenInlineResult`](ChosenInlineResult.md)

The result of an inline query that was chosen by a user and sent to their chat partner.
Please refer to our documentation on collecting feedback for details on how to enable these updates for your bot.

#### Defined in

[updateTypes.d.ts:97](https://github.com/telegramsjs/types/blob/d08200f/src/updateTypes.d.ts#L97)

___

### edited\_channel\_post

• `Optional` **edited\_channel\_post**: [`Message`](Message-1.md) & [`Edited`](Update.Edited.md) & [`Channel`](Update.Channel.md)

New version of a channel post known to the bot that has been edited.

#### Defined in

[updateTypes.d.ts:80](https://github.com/telegramsjs/types/blob/d08200f/src/updateTypes.d.ts#L80)

___

### edited\_message

• `Optional` **edited\_message**: [`Message`](Message-1.md) & [`Edited`](Update.Edited.md) & [`NonChannel`](Update.NonChannel.md)

New version of a message known to the bot that has been edited.

#### Defined in

[updateTypes.d.ts:70](https://github.com/telegramsjs/types/blob/d08200f/src/updateTypes.d.ts#L70)

___

### inline\_query

• `Optional` **inline\_query**: [`InlineQuery`](InlineQuery.md)

New incoming inline query.

#### Defined in

[updateTypes.d.ts:91](https://github.com/telegramsjs/types/blob/d08200f/src/updateTypes.d.ts#L91)

___

### message

• `Optional` **message**: [`Message`](Message-1.md) & [`NonChannel`](Update.NonChannel.md)

New incoming message of any kind - text, photo, sticker, etc.

#### Defined in

[updateTypes.d.ts:65](https://github.com/telegramsjs/types/blob/d08200f/src/updateTypes.d.ts#L65)

___

### message\_reaction

• `Optional` **message\_reaction**: [`MessageReactionUpdated`](MessageReactionUpdated.md)

A reaction to a message was changed by a user. The bot must be an administrator in the chat and must explicitly specify "message_reaction" in the list of allowed_updates to receive these updates. The update isn't received for reactions set by bots.

#### Defined in

[updateTypes.d.ts:83](https://github.com/telegramsjs/types/blob/d08200f/src/updateTypes.d.ts#L83)

___

### message\_reaction\_count

• `Optional` **message\_reaction\_count**: [`MessageReactionCountUpdated`](MessageReactionCountUpdated.md)

Reactions to a message with anonymous reactions were changed. The bot must be an administrator in the chat and must explicitly specify "message_reaction_count" in the list of allowed_updates to receive these updates.

#### Defined in

[updateTypes.d.ts:86](https://github.com/telegramsjs/types/blob/d08200f/src/updateTypes.d.ts#L86)

___

### my\_chat\_member

• `Optional` **my\_chat\_member**: [`ChatMemberUpdated`](ChatMemberUpdated.md)

The bot's chat member status was updated in a chat.
For private chats, this update is received only when the bot is blocked or unblocked by the user.

#### Defined in

[updateTypes.d.ts:129](https://github.com/telegramsjs/types/blob/d08200f/src/updateTypes.d.ts#L129)

___

### poll

• `Optional` **poll**: [`Poll`](Poll.md)

New poll state. Bots receive updates only about stopped polls and polls sent by the bot.

#### Defined in

[updateTypes.d.ts:117](https://github.com/telegramsjs/types/blob/d08200f/src/updateTypes.d.ts#L117)

___

### poll\_answer

• `Optional` **poll\_answer**: [`PollAnswer`](PollAnswer.md)

A user changed their answer in a non-anonymous poll.
Bots receive new votes only in polls that were sent by the bot itself.

#### Defined in

[updateTypes.d.ts:123](https://github.com/telegramsjs/types/blob/d08200f/src/updateTypes.d.ts#L123)

___

### pre\_checkout\_query

• `Optional` **pre\_checkout\_query**: [`PreCheckoutQuery`](PreCheckoutQuery.md)

New incoming pre-checkout query. Contains full information about checkout.

#### Defined in

[updateTypes.d.ts:112](https://github.com/telegramsjs/types/blob/d08200f/src/updateTypes.d.ts#L112)

___

### removed\_chat\_boost

• `Optional` **removed\_chat\_boost**: [`ChatBoostRemoved`](ChatBoostRemoved.md)

A boost was removed from a chat. The bot must be an administrator in the chat to receive these updates.

#### Defined in

[updateTypes.d.ts:147](https://github.com/telegramsjs/types/blob/d08200f/src/updateTypes.d.ts#L147)

___

### shipping\_query

• `Optional` **shipping\_query**: [`ShippingQuery`](ShippingQuery.md)

New incoming shipping query. Only for invoices with flexible price.

#### Defined in

[updateTypes.d.ts:107](https://github.com/telegramsjs/types/blob/d08200f/src/updateTypes.d.ts#L107)

___

### update\_id

• **update\_id**: `number`

The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially.
This ID becomes especially handy if you're using webhooks, as it allows you to ignore repeated updates or restore the correct update sequence if they get out of order.
If there are no new updates for at least a week, the identifier of the next update will be chosen randomly instead of sequentially.

#### Defined in

[updateTypes.d.ts:60](https://github.com/telegramsjs/types/blob/d08200f/src/updateTypes.d.ts#L60)
