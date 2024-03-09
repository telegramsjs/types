[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [Chat](../modules/Chat.md) / ChannelGetChat

# Interface: ChannelGetChat

[Chat](../modules/Chat.md).ChannelGetChat

Internal type representing channel chats returned from `getChat`.

## Hierarchy

- [`ChannelChat`](Chat.ChannelChat.md)

- [`GetChat`](Chat.GetChat.md)

- [`NonGroupGetChat`](Chat.NonGroupGetChat.md)

- [`NonPrivateGetChat`](Chat.NonPrivateGetChat.md)

- [`NonMultiUserGetChat`](Chat.NonMultiUserGetChat.md)

- [`LargeGetChat`](Chat.LargeGetChat.md)

  ↳ **`ChannelGetChat`**

## Table of contents

### Properties

- [accent\_color\_id](Chat.ChannelGetChat.md#accent_color_id)
- [active\_usernames](Chat.ChannelGetChat.md#active_usernames)
- [available\_reactions](Chat.ChannelGetChat.md#available_reactions)
- [background\_custom\_emoji\_id](Chat.ChannelGetChat.md#background_custom_emoji_id)
- [description](Chat.ChannelGetChat.md#description)
- [emoji\_status\_custom\_emoji\_id](Chat.ChannelGetChat.md#emoji_status_custom_emoji_id)
- [emoji\_status\_expiration\_date](Chat.ChannelGetChat.md#emoji_status_expiration_date)
- [has\_protected\_content](Chat.ChannelGetChat.md#has_protected_content)
- [id](Chat.ChannelGetChat.md#id)
- [invite\_link](Chat.ChannelGetChat.md#invite_link)
- [linked\_chat\_id](Chat.ChannelGetChat.md#linked_chat_id)
- [message\_auto\_delete\_time](Chat.ChannelGetChat.md#message_auto_delete_time)
- [photo](Chat.ChannelGetChat.md#photo)
- [pinned\_message](Chat.ChannelGetChat.md#pinned_message)
- [profile\_accent\_color\_id](Chat.ChannelGetChat.md#profile_accent_color_id)
- [profile\_background\_custom\_emoji\_id](Chat.ChannelGetChat.md#profile_background_custom_emoji_id)
- [title](Chat.ChannelGetChat.md#title)
- [type](Chat.ChannelGetChat.md#type)
- [username](Chat.ChannelGetChat.md#username)

## Properties

### accent\_color\_id

• **accent\_color\_id**: `number`

Identifier of the accent color for the chat name and backgrounds of the chat photo, reply header, and link preview. See accent colors for more details. Returned only in getChat.

#### Inherited from

[NonMultiUserGetChat](Chat.NonMultiUserGetChat.md).[accent_color_id](Chat.NonMultiUserGetChat.md#accent_color_id)

#### Defined in

[manageTypes.d.ts:146](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L146)

___

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

### background\_custom\_emoji\_id

• `Optional` **background\_custom\_emoji\_id**: `string`

Custom emoji identifier of emoji chosen by the chat for the reply header and link preview background. Returned only in getChat.

#### Inherited from

[NonMultiUserGetChat](Chat.NonMultiUserGetChat.md).[background_custom_emoji_id](Chat.NonMultiUserGetChat.md#background_custom_emoji_id)

#### Defined in

[manageTypes.d.ts:148](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L148)

___

### description

• `Optional` **description**: `string`

Description, for groups, supergroups and channel chats. Returned only in getChat.

#### Inherited from

[NonPrivateGetChat](Chat.NonPrivateGetChat.md).[description](Chat.NonPrivateGetChat.md#description)

#### Defined in

[manageTypes.d.ts:132](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L132)

___

### emoji\_status\_custom\_emoji\_id

• `Optional` **emoji\_status\_custom\_emoji\_id**: `string`

Custom emoji identifier of the emoji status of the chat or the other party in a private chat. Returned only in getChat.

#### Inherited from

[NonMultiUserGetChat](Chat.NonMultiUserGetChat.md).[emoji_status_custom_emoji_id](Chat.NonMultiUserGetChat.md#emoji_status_custom_emoji_id)

#### Defined in

[manageTypes.d.ts:150](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L150)

___

### emoji\_status\_expiration\_date

• `Optional` **emoji\_status\_expiration\_date**: `number`

Expiration date of the emoji status of the chat or the other party in a private chat, in Unix time, if any. Returned only in getChat.

#### Inherited from

[NonMultiUserGetChat](Chat.NonMultiUserGetChat.md).[emoji_status_expiration_date](Chat.NonMultiUserGetChat.md#emoji_status_expiration_date)

#### Defined in

[manageTypes.d.ts:152](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L152)

___

### has\_protected\_content

• `Optional` **has\_protected\_content**: ``true``

True, if messages from the chat can't be forwarded to other chats. Returned only in getChat.

#### Inherited from

[GetChat](Chat.GetChat.md).[has_protected_content](Chat.GetChat.md#has_protected_content)

#### Defined in

[manageTypes.d.ts:122](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L122)

___

### id

• **id**: `number`

Unique identifier for this chat.

#### Inherited from

[ChannelChat](Chat.ChannelChat.md).[id](Chat.ChannelChat.md#id)

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

### linked\_chat\_id

• `Optional` **linked\_chat\_id**: `number`

Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. Returned only in getChat.

#### Inherited from

[LargeGetChat](Chat.LargeGetChat.md).[linked_chat_id](Chat.LargeGetChat.md#linked_chat_id)

#### Defined in

[manageTypes.d.ts:157](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L157)

___

### message\_auto\_delete\_time

• `Optional` **message\_auto\_delete\_time**: `number`

The time after which all messages sent to the chat will be automatically deleted; in seconds. Returned only in getChat.

#### Inherited from

[GetChat](Chat.GetChat.md).[message_auto_delete_time](Chat.GetChat.md#message_auto_delete_time)

#### Defined in

[manageTypes.d.ts:120](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L120)

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

### profile\_accent\_color\_id

• `Optional` **profile\_accent\_color\_id**: `number`

Identifier of the accent color for the chat's profile background. See profile accent colors for more details. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:218](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L218)

___

### profile\_background\_custom\_emoji\_id

• `Optional` **profile\_background\_custom\_emoji\_id**: `string`

Custom emoji identifier of the emoji chosen by the chat for its profile background. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:220](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L220)

___

### title

• **title**: `string`

Title, for supergroups, channels and group chats

#### Inherited from

[ChannelChat](Chat.ChannelChat.md).[title](Chat.ChannelChat.md#title)

#### Defined in

[manageTypes.d.ts:82](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L82)

___

### type

• **type**: ``"channel"``

Type of chat, can be either “private”, “group”, “supergroup” or “channel”

#### Inherited from

[ChannelChat](Chat.ChannelChat.md).[type](Chat.ChannelChat.md#type)

#### Defined in

[manageTypes.d.ts:109](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L109)

___

### username

• `Optional` **username**: `string`

Username, for private chats, supergroups and channels if available

#### Inherited from

[ChannelChat](Chat.ChannelChat.md).[username](Chat.ChannelChat.md#username)

#### Defined in

[manageTypes.d.ts:77](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L77)
