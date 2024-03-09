[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [Chat](../modules/Chat.md) / SupergroupGetChat

# Interface: SupergroupGetChat

[Chat](../modules/Chat.md).SupergroupGetChat

Internal type representing supergroup chats returned from `getChat`.

## Hierarchy

- [`SupergroupChat`](Chat.SupergroupChat.md)

- [`GetChat`](Chat.GetChat.md)

- [`NonGroupGetChat`](Chat.NonGroupGetChat.md)

- [`NonPrivateGetChat`](Chat.NonPrivateGetChat.md)

- [`MultiUserGetChat`](Chat.MultiUserGetChat.md)

- [`LargeGetChat`](Chat.LargeGetChat.md)

  ↳ **`SupergroupGetChat`**

## Table of contents

### Properties

- [active\_usernames](Chat.SupergroupGetChat.md#active_usernames)
- [available\_reactions](Chat.SupergroupGetChat.md#available_reactions)
- [can\_set\_sticker\_set](Chat.SupergroupGetChat.md#can_set_sticker_set)
- [custom\_emoji\_sticker\_set\_name](Chat.SupergroupGetChat.md#custom_emoji_sticker_set_name)
- [description](Chat.SupergroupGetChat.md#description)
- [has\_aggressive\_anti\_spam\_enabled](Chat.SupergroupGetChat.md#has_aggressive_anti_spam_enabled)
- [has\_protected\_content](Chat.SupergroupGetChat.md#has_protected_content)
- [has\_visible\_history](Chat.SupergroupGetChat.md#has_visible_history)
- [id](Chat.SupergroupGetChat.md#id)
- [invite\_link](Chat.SupergroupGetChat.md#invite_link)
- [is\_forum](Chat.SupergroupGetChat.md#is_forum)
- [join\_by\_request](Chat.SupergroupGetChat.md#join_by_request)
- [join\_to\_send\_messages](Chat.SupergroupGetChat.md#join_to_send_messages)
- [linked\_chat\_id](Chat.SupergroupGetChat.md#linked_chat_id)
- [location](Chat.SupergroupGetChat.md#location)
- [message\_auto\_delete\_time](Chat.SupergroupGetChat.md#message_auto_delete_time)
- [permissions](Chat.SupergroupGetChat.md#permissions)
- [photo](Chat.SupergroupGetChat.md#photo)
- [pinned\_message](Chat.SupergroupGetChat.md#pinned_message)
- [slow\_mode\_delay](Chat.SupergroupGetChat.md#slow_mode_delay)
- [sticker\_set\_name](Chat.SupergroupGetChat.md#sticker_set_name)
- [title](Chat.SupergroupGetChat.md#title)
- [type](Chat.SupergroupGetChat.md#type)
- [unrestrict\_boost\_count](Chat.SupergroupGetChat.md#unrestrict_boost_count)
- [username](Chat.SupergroupGetChat.md#username)

## Properties

### active\_usernames

• `Optional` **active\_usernames**: `string`[]

If non-empty, the list of all active chat usernames; for private chats, supergroups and channels. Returned only in getChat.

#### Inherited from

[NonGroupGetChat](Chat.NonGroupGetChat.md).[active_usernames](Chat.NonGroupGetChat.md#active_usernames)

#### Defined in

[manageTypes.d.ts:127](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L127)

___

### available\_reactions

• `Optional` **available\_reactions**: [`ReactionType`](../modules.md#reactiontype)[]

List of available reactions allowed in the chat. If omitted, then all emoji reactions are allowed. Returned only in getChat.

#### Inherited from

[NonPrivateGetChat](Chat.NonPrivateGetChat.md).[available_reactions](Chat.NonPrivateGetChat.md#available_reactions)

#### Defined in

[manageTypes.d.ts:136](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L136)

___

### can\_set\_sticker\_set

• `Optional` **can\_set\_sticker\_set**: ``true``

True, if the bot can change the group sticker set. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:203](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L203)

___

### custom\_emoji\_sticker\_set\_name

• `Optional` **custom\_emoji\_sticker\_set\_name**: `string`

For supergroups, the name of the group's custom emoji sticker set. Custom emoji from this set can be used by all users and bots in the group. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:205](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L205)

___

### description

• `Optional` **description**: `string`

Description, for groups, supergroups and channel chats. Returned only in getChat.

#### Inherited from

[NonPrivateGetChat](Chat.NonPrivateGetChat.md).[description](Chat.NonPrivateGetChat.md#description)

#### Defined in

[manageTypes.d.ts:132](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L132)

___

### has\_aggressive\_anti\_spam\_enabled

• `Optional` **has\_aggressive\_anti\_spam\_enabled**: ``true``

True, if aggressive anti-spam checks are enabled in the supergroup. The field is only available to chat administrators. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:199](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L199)

___

### has\_protected\_content

• `Optional` **has\_protected\_content**: ``true``

True, if messages from the chat can't be forwarded to other chats. Returned only in getChat.

#### Inherited from

[GetChat](Chat.GetChat.md).[has_protected_content](Chat.GetChat.md#has_protected_content)

#### Defined in

[manageTypes.d.ts:122](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L122)

___

### has\_visible\_history

• `Optional` **has\_visible\_history**: `boolean`

True, if new chat members will have access to old messages; available only to chat administrators. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:197](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L197)

___

### id

• **id**: `number`

Unique identifier for this chat.

#### Inherited from

[SupergroupChat](Chat.SupergroupChat.md).[id](Chat.SupergroupChat.md#id)

#### Defined in

[manageTypes.d.ts:68](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L68)

___

### invite\_link

• `Optional` **invite\_link**: `string`

Primary invite link, for groups, supergroups and channel chats. Returned only in getChat.

#### Inherited from

[NonPrivateGetChat](Chat.NonPrivateGetChat.md).[invite_link](Chat.NonPrivateGetChat.md#invite_link)

#### Defined in

[manageTypes.d.ts:134](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L134)

___

### is\_forum

• `Optional` **is\_forum**: ``true``

True, if the supergroup chat is a forum (has topics enabled)

#### Inherited from

[SupergroupChat](Chat.SupergroupChat.md).[is_forum](Chat.SupergroupChat.md#is_forum)

#### Defined in

[manageTypes.d.ts:105](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L105)

___

### join\_by\_request

• `Optional` **join\_by\_request**: ``true``

True, if all users directly joining the supergroup need to be approved by supergroup administrators. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:191](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L191)

___

### join\_to\_send\_messages

• `Optional` **join\_to\_send\_messages**: ``true``

True, if users need to join the supergroup before they can send messages. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:189](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L189)

___

### linked\_chat\_id

• `Optional` **linked\_chat\_id**: `number`

Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. Returned only in getChat.

#### Inherited from

[LargeGetChat](Chat.LargeGetChat.md).[linked_chat_id](Chat.LargeGetChat.md#linked_chat_id)

#### Defined in

[manageTypes.d.ts:157](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L157)

___

### location

• `Optional` **location**: [`ChatLocation`](ChatLocation.md)

For supergroups, the location to which the supergroup is connected. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:207](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L207)

___

### message\_auto\_delete\_time

• `Optional` **message\_auto\_delete\_time**: `number`

The time after which all messages sent to the chat will be automatically deleted; in seconds. Returned only in getChat.

#### Inherited from

[GetChat](Chat.GetChat.md).[message_auto_delete_time](Chat.GetChat.md#message_auto_delete_time)

#### Defined in

[manageTypes.d.ts:120](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L120)

___

### permissions

• `Optional` **permissions**: [`ChatPermissions`](ChatPermissions.md)

Default chat member permissions, for groups and supergroups. Returned only in getChat.

#### Inherited from

[MultiUserGetChat](Chat.MultiUserGetChat.md).[permissions](Chat.MultiUserGetChat.md#permissions)

#### Defined in

[manageTypes.d.ts:141](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L141)

___

### photo

• `Optional` **photo**: [`ChatPhoto`](ChatPhoto.md)

Chat photo. Returned only in getChat.

#### Inherited from

[GetChat](Chat.GetChat.md).[photo](Chat.GetChat.md#photo)

#### Defined in

[manageTypes.d.ts:116](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L116)

___

### pinned\_message

• `Optional` **pinned\_message**: [`Message`](Message-1.md)

The most recent pinned message (by sending date). Returned only in getChat.

#### Inherited from

[GetChat](Chat.GetChat.md).[pinned_message](Chat.GetChat.md#pinned_message)

#### Defined in

[manageTypes.d.ts:118](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L118)

___

### slow\_mode\_delay

• `Optional` **slow\_mode\_delay**: `number`

For supergroups, the minimum allowed delay between consecutive messages sent by each unpriviledged user; in seconds. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:193](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L193)

___

### sticker\_set\_name

• `Optional` **sticker\_set\_name**: `string`

For supergroups, name of group sticker set. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:201](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L201)

___

### title

• **title**: `string`

Title, for supergroups, channels and group chats

#### Inherited from

[SupergroupChat](Chat.SupergroupChat.md).[title](Chat.SupergroupChat.md#title)

#### Defined in

[manageTypes.d.ts:82](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L82)

___

### type

• **type**: ``"supergroup"``

Type of chat, can be either “private”, “group”, “supergroup” or “channel”

#### Inherited from

[SupergroupChat](Chat.SupergroupChat.md).[type](Chat.SupergroupChat.md#type)

#### Defined in

[manageTypes.d.ts:103](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L103)

___

### unrestrict\_boost\_count

• `Optional` **unrestrict\_boost\_count**: `number`

For supergroups, the minimum number of boosts that a non-administrator user needs to add in order to ignore slow mode and chat permissions. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:195](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L195)

___

### username

• `Optional` **username**: `string`

Username, for private chats, supergroups and channels if available

#### Inherited from

[SupergroupChat](Chat.SupergroupChat.md).[username](Chat.SupergroupChat.md#username)

#### Defined in

[manageTypes.d.ts:77](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L77)
