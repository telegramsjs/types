[@telegram.ts/types](../README.md) / [Exports](../modules.md) / ChatMemberAdministrator

# Interface: ChatMemberAdministrator

Represents a chat member that has some additional privileges.

## Table of contents

### Properties

- [can\_be\_edited](ChatMemberAdministrator.md#can_be_edited)
- [can\_change\_info](ChatMemberAdministrator.md#can_change_info)
- [can\_delete\_messages](ChatMemberAdministrator.md#can_delete_messages)
- [can\_delete\_stories](ChatMemberAdministrator.md#can_delete_stories)
- [can\_edit\_messages](ChatMemberAdministrator.md#can_edit_messages)
- [can\_edit\_stories](ChatMemberAdministrator.md#can_edit_stories)
- [can\_invite\_users](ChatMemberAdministrator.md#can_invite_users)
- [can\_manage\_chat](ChatMemberAdministrator.md#can_manage_chat)
- [can\_manage\_topics](ChatMemberAdministrator.md#can_manage_topics)
- [can\_manage\_video\_chats](ChatMemberAdministrator.md#can_manage_video_chats)
- [can\_pin\_messages](ChatMemberAdministrator.md#can_pin_messages)
- [can\_post\_messages](ChatMemberAdministrator.md#can_post_messages)
- [can\_post\_stories](ChatMemberAdministrator.md#can_post_stories)
- [can\_promote\_members](ChatMemberAdministrator.md#can_promote_members)
- [can\_restrict\_members](ChatMemberAdministrator.md#can_restrict_members)
- [custom\_title](ChatMemberAdministrator.md#custom_title)
- [is\_anonymous](ChatMemberAdministrator.md#is_anonymous)
- [status](ChatMemberAdministrator.md#status)
- [user](ChatMemberAdministrator.md#user)

## Properties

### can\_be\_edited

• **can\_be\_edited**: `boolean`

True, if the bot is allowed to edit administrator privileges of that user

#### Defined in

[manageTypes.d.ts:366](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L366)

___

### can\_change\_info

• **can\_change\_info**: `boolean`

True, if the user is allowed to change the chat title, photo and other settings

#### Defined in

[manageTypes.d.ts:380](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L380)

___

### can\_delete\_messages

• **can\_delete\_messages**: `boolean`

True, if the administrator can delete messages of other users

#### Defined in

[manageTypes.d.ts:372](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L372)

___

### can\_delete\_stories

• `Optional` **can\_delete\_stories**: `boolean`

True, if the administrator can delete stories posted by other users

#### Defined in

[manageTypes.d.ts:394](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L394)

___

### can\_edit\_messages

• `Optional` **can\_edit\_messages**: `boolean`

True, if the administrator can edit messages of other users and can pin messages; channels only

#### Defined in

[manageTypes.d.ts:386](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L386)

___

### can\_edit\_stories

• `Optional` **can\_edit\_stories**: `boolean`

True, if the administrator can edit stories posted by other users

#### Defined in

[manageTypes.d.ts:392](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L392)

___

### can\_invite\_users

• **can\_invite\_users**: `boolean`

True, if the user is allowed to invite new users to the chat

#### Defined in

[manageTypes.d.ts:382](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L382)

___

### can\_manage\_chat

• **can\_manage\_chat**: `boolean`

True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages and ignore slow mode. Implied by any other administrator privilege.

#### Defined in

[manageTypes.d.ts:370](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L370)

___

### can\_manage\_topics

• `Optional` **can\_manage\_topics**: `boolean`

True, if the user is allowed to create, rename, close, and reopen forum topics; supergroups only

#### Defined in

[manageTypes.d.ts:396](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L396)

___

### can\_manage\_video\_chats

• **can\_manage\_video\_chats**: `boolean`

True, if the administrator can manage video chats

#### Defined in

[manageTypes.d.ts:374](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L374)

___

### can\_pin\_messages

• `Optional` **can\_pin\_messages**: `boolean`

True, if the user is allowed to pin messages; groups and supergroups only

#### Defined in

[manageTypes.d.ts:388](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L388)

___

### can\_post\_messages

• `Optional` **can\_post\_messages**: `boolean`

True, if the administrator can post messages in the channel, or access channel statistics; channels only

#### Defined in

[manageTypes.d.ts:384](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L384)

___

### can\_post\_stories

• `Optional` **can\_post\_stories**: `boolean`

True, if the administrator can post stories to the chat

#### Defined in

[manageTypes.d.ts:390](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L390)

___

### can\_promote\_members

• **can\_promote\_members**: `boolean`

True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user)

#### Defined in

[manageTypes.d.ts:378](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L378)

___

### can\_restrict\_members

• **can\_restrict\_members**: `boolean`

True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics

#### Defined in

[manageTypes.d.ts:376](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L376)

___

### custom\_title

• `Optional` **custom\_title**: `string`

Custom title for this user

#### Defined in

[manageTypes.d.ts:398](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L398)

___

### is\_anonymous

• **is\_anonymous**: `boolean`

True, if the user's presence in the chat is hidden

#### Defined in

[manageTypes.d.ts:368](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L368)

___

### status

• **status**: ``"administrator"``

The member's status in the chat, always “administrator”

#### Defined in

[manageTypes.d.ts:362](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L362)

___

### user

• **user**: [`User`](User.md)

Information about the user

#### Defined in

[manageTypes.d.ts:364](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L364)
