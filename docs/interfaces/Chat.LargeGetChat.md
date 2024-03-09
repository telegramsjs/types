[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [Chat](../modules/Chat.md) / LargeGetChat

# Interface: LargeGetChat

[Chat](../modules/Chat.md).LargeGetChat

Internal type holding properties that those supergroup and channel chats returned from `getChat` share.

## Hierarchy

- **`LargeGetChat`**

  ↳ [`SupergroupGetChat`](Chat.SupergroupGetChat.md)

  ↳ [`ChannelGetChat`](Chat.ChannelGetChat.md)

## Table of contents

### Properties

- [linked\_chat\_id](Chat.LargeGetChat.md#linked_chat_id)

## Properties

### linked\_chat\_id

• `Optional` **linked\_chat\_id**: `number`

Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:157](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L157)
