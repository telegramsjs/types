[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [Chat](../modules/Chat.md) / MultiUserGetChat

# Interface: MultiUserGetChat

[Chat](../modules/Chat.md).MultiUserGetChat

Internal type holding properties that those group and supergroup chats returned from `getChat` share.

## Hierarchy

- **`MultiUserGetChat`**

  ↳ [`GroupGetChat`](Chat.GroupGetChat.md)

  ↳ [`SupergroupGetChat`](Chat.SupergroupGetChat.md)

## Table of contents

### Properties

- [permissions](Chat.MultiUserGetChat.md#permissions)

## Properties

### permissions

• `Optional` **permissions**: [`ChatPermissions`](ChatPermissions.md)

Default chat member permissions, for groups and supergroups. Returned only in getChat.

#### Defined in

[manageTypes.d.ts:141](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L141)
