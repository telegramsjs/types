[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [Chat](../modules/Chat.md) / GetChat

# Interface: GetChat

[Chat](../modules/Chat.md).GetChat

Internal type holding properties that those chats returned from `getChat` share.

## Hierarchy

- **`GetChat`**

  ↳ [`PrivateGetChat`](Chat.PrivateGetChat.md)

  ↳ [`GroupGetChat`](Chat.GroupGetChat.md)

  ↳ [`SupergroupGetChat`](Chat.SupergroupGetChat.md)

  ↳ [`ChannelGetChat`](Chat.ChannelGetChat.md)

## Table of contents

### Properties

- [has\_protected\_content](Chat.GetChat.md#has_protected_content)
- [message\_auto\_delete\_time](Chat.GetChat.md#message_auto_delete_time)
- [photo](Chat.GetChat.md#photo)
- [pinned\_message](Chat.GetChat.md#pinned_message)

## Properties

### has\_protected\_content

• `Optional` **has\_protected\_content**: ``true``

True, if messages from the chat can't be forwarded to other chats. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:122](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L122)

___

### message\_auto\_delete\_time

• `Optional` **message\_auto\_delete\_time**: `number`

The time after which all messages sent to the chat will be automatically deleted; in seconds. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:120](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L120)

___

### photo

• `Optional` **photo**: [`ChatPhoto`](ChatPhoto.md)

Chat photo. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:116](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L116)

___

### pinned\_message

• `Optional` **pinned\_message**: [`Message`](Message-1.md)

The most recent pinned message (by sending date). Returned only in getChat.

#### Defined in

[manageTypes.d.ts:118](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L118)
