[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [Chat](../modules/Chat.md) / NonGroupGetChat

# Interface: NonGroupGetChat

[Chat](../modules/Chat.md).NonGroupGetChat

Internal type holding properties that those private, supergroup, and channel chats returned from `getChat` share.

## Hierarchy

- **`NonGroupGetChat`**

  ↳ [`PrivateGetChat`](Chat.PrivateGetChat.md)

  ↳ [`SupergroupGetChat`](Chat.SupergroupGetChat.md)

  ↳ [`ChannelGetChat`](Chat.ChannelGetChat.md)

## Table of contents

### Properties

- [active\_usernames](Chat.NonGroupGetChat.md#active_usernames)

## Properties

### active\_usernames

• `Optional` **active\_usernames**: `string`[]

If non-empty, the list of all active chat usernames; for private chats, supergroups and channels. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:127](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L127)
