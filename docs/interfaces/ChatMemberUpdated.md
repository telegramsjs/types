[@telegram.ts/types](../README.md) / [Exports](../modules.md) / ChatMemberUpdated

# Interface: ChatMemberUpdated

This object represents changes in the status of a chat member.

## Table of contents

### Properties

- [chat](ChatMemberUpdated.md#chat)
- [date](ChatMemberUpdated.md#date)
- [from](ChatMemberUpdated.md#from)
- [invite\_link](ChatMemberUpdated.md#invite_link)
- [new\_chat\_member](ChatMemberUpdated.md#new_chat_member)
- [old\_chat\_member](ChatMemberUpdated.md#old_chat_member)
- [via\_chat\_folder\_invite\_link](ChatMemberUpdated.md#via_chat_folder_invite_link)

## Properties

### chat

• **chat**: [`Chat`](../modules.md#chat)

Chat the user belongs to

#### Defined in

[manageTypes.d.ts:317](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L317)

___

### date

• **date**: `number`

Date the change was done in Unix time

#### Defined in

[manageTypes.d.ts:321](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L321)

___

### from

• **from**: [`User`](User.md)

Performer of the action, which resulted in the change

#### Defined in

[manageTypes.d.ts:319](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L319)

___

### invite\_link

• `Optional` **invite\_link**: [`ChatInviteLink`](ChatInviteLink.md)

Chat invite link, which was used by the user to join the chat; for joining by invite link events only.

#### Defined in

[manageTypes.d.ts:327](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L327)

___

### new\_chat\_member

• **new\_chat\_member**: [`ChatMember`](../modules.md#chatmember)

New information about the chat member

#### Defined in

[manageTypes.d.ts:325](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L325)

___

### old\_chat\_member

• **old\_chat\_member**: [`ChatMember`](../modules.md#chatmember)

Previous information about the chat member

#### Defined in

[manageTypes.d.ts:323](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L323)

___

### via\_chat\_folder\_invite\_link

• `Optional` **via\_chat\_folder\_invite\_link**: `boolean`

True, if the user joined the chat via a chat folder invite link

#### Defined in

[manageTypes.d.ts:329](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L329)
