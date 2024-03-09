[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [Chat](../modules/Chat.md) / PrivateGetChat

# Interface: PrivateGetChat

[Chat](../modules/Chat.md).PrivateGetChat

Internal type representing private chats returned from `getChat`.

## Hierarchy

- [`PrivateChat`](Chat.PrivateChat.md)

- [`GetChat`](Chat.GetChat.md)

- [`NonGroupGetChat`](Chat.NonGroupGetChat.md)

- [`NonMultiUserGetChat`](Chat.NonMultiUserGetChat.md)

  ↳ **`PrivateGetChat`**

## Table of contents

### Properties

- [accent\_color\_id](Chat.PrivateGetChat.md#accent_color_id)
- [active\_usernames](Chat.PrivateGetChat.md#active_usernames)
- [background\_custom\_emoji\_id](Chat.PrivateGetChat.md#background_custom_emoji_id)
- [bio](Chat.PrivateGetChat.md#bio)
- [emoji\_status\_custom\_emoji\_id](Chat.PrivateGetChat.md#emoji_status_custom_emoji_id)
- [emoji\_status\_expiration\_date](Chat.PrivateGetChat.md#emoji_status_expiration_date)
- [first\_name](Chat.PrivateGetChat.md#first_name)
- [has\_private\_forwards](Chat.PrivateGetChat.md#has_private_forwards)
- [has\_protected\_content](Chat.PrivateGetChat.md#has_protected_content)
- [has\_restricted\_voice\_and\_video\_messages](Chat.PrivateGetChat.md#has_restricted_voice_and_video_messages)
- [id](Chat.PrivateGetChat.md#id)
- [last\_name](Chat.PrivateGetChat.md#last_name)
- [message\_auto\_delete\_time](Chat.PrivateGetChat.md#message_auto_delete_time)
- [photo](Chat.PrivateGetChat.md#photo)
- [pinned\_message](Chat.PrivateGetChat.md#pinned_message)
- [type](Chat.PrivateGetChat.md#type)
- [username](Chat.PrivateGetChat.md#username)

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

### background\_custom\_emoji\_id

• `Optional` **background\_custom\_emoji\_id**: `string`

Custom emoji identifier of emoji chosen by the chat for the reply header and link preview background. Returned only in getChat.

#### Inherited from

[NonMultiUserGetChat](Chat.NonMultiUserGetChat.md).[background_custom_emoji_id](Chat.NonMultiUserGetChat.md#background_custom_emoji_id)

#### Defined in

[manageTypes.d.ts:148](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L148)

___

### bio

• `Optional` **bio**: `string`

Bio of the other party in a private chat. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:168](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L168)

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

### first\_name

• **first\_name**: `string`

First name of the other party in a private chat

#### Inherited from

[PrivateChat](Chat.PrivateChat.md).[first_name](Chat.PrivateChat.md#first_name)

#### Defined in

[manageTypes.d.ts:90](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L90)

___

### has\_private\_forwards

• `Optional` **has\_private\_forwards**: ``true``

True, if privacy settings of the other party in the private chat allows to use tg://user?id=<user_id> links only in chats with the user. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:170](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L170)

___

### has\_protected\_content

• `Optional` **has\_protected\_content**: ``true``

True, if messages from the chat can't be forwarded to other chats. Returned only in getChat.

#### Inherited from

[GetChat](Chat.GetChat.md).[has_protected_content](Chat.GetChat.md#has_protected_content)

#### Defined in

[manageTypes.d.ts:122](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L122)

___

### has\_restricted\_voice\_and\_video\_messages

• `Optional` **has\_restricted\_voice\_and\_video\_messages**: ``true``

True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:172](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L172)

___

### id

• **id**: `number`

Unique identifier for this chat.

#### Inherited from

[PrivateChat](Chat.PrivateChat.md).[id](Chat.PrivateChat.md#id)

#### Defined in

[manageTypes.d.ts:68](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L68)

___

### last\_name

• `Optional` **last\_name**: `string`

Last name of the other party in a private chat

#### Inherited from

[PrivateChat](Chat.PrivateChat.md).[last_name](Chat.PrivateChat.md#last_name)

#### Defined in

[manageTypes.d.ts:92](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L92)

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

### type

• **type**: ``"private"``

Type of chat, can be either “private”, “group”, “supergroup” or “channel”

#### Inherited from

[PrivateChat](Chat.PrivateChat.md).[type](Chat.PrivateChat.md#type)

#### Defined in

[manageTypes.d.ts:88](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L88)

___

### username

• `Optional` **username**: `string`

Username, for private chats, supergroups and channels if available

#### Inherited from

[PrivateChat](Chat.PrivateChat.md).[username](Chat.PrivateChat.md#username)

#### Defined in

[manageTypes.d.ts:77](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L77)
