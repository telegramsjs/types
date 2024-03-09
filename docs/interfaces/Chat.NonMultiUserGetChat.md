[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [Chat](../modules/Chat.md) / NonMultiUserGetChat

# Interface: NonMultiUserGetChat

[Chat](../modules/Chat.md).NonMultiUserGetChat

Internal type holding properties that those private and channel chats returned from `getChat` share.

## Hierarchy

- **`NonMultiUserGetChat`**

  ↳ [`PrivateGetChat`](Chat.PrivateGetChat.md)

  ↳ [`ChannelGetChat`](Chat.ChannelGetChat.md)

## Table of contents

### Properties

- [accent\_color\_id](Chat.NonMultiUserGetChat.md#accent_color_id)
- [background\_custom\_emoji\_id](Chat.NonMultiUserGetChat.md#background_custom_emoji_id)
- [emoji\_status\_custom\_emoji\_id](Chat.NonMultiUserGetChat.md#emoji_status_custom_emoji_id)
- [emoji\_status\_expiration\_date](Chat.NonMultiUserGetChat.md#emoji_status_expiration_date)

## Properties

### accent\_color\_id

• **accent\_color\_id**: `number`

Identifier of the accent color for the chat name and backgrounds of the chat photo, reply header, and link preview. See accent colors for more details. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:146](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L146)

___

### background\_custom\_emoji\_id

• `Optional` **background\_custom\_emoji\_id**: `string`

Custom emoji identifier of emoji chosen by the chat for the reply header and link preview background. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:148](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L148)

___

### emoji\_status\_custom\_emoji\_id

• `Optional` **emoji\_status\_custom\_emoji\_id**: `string`

Custom emoji identifier of the emoji status of the chat or the other party in a private chat. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:150](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L150)

___

### emoji\_status\_expiration\_date

• `Optional` **emoji\_status\_expiration\_date**: `number`

Expiration date of the emoji status of the chat or the other party in a private chat, in Unix time, if any. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:152](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L152)
