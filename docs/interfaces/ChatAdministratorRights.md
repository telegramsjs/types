[@telegram.ts/types](../README.md) / [Exports](../modules.md) / ChatAdministratorRights

# Interface: ChatAdministratorRights

Represents the rights of an administrator in a chat.

## Table of contents

### Properties

- [can\_change\_info](ChatAdministratorRights.md#can_change_info)
- [can\_delete\_messages](ChatAdministratorRights.md#can_delete_messages)
- [can\_delete\_stories](ChatAdministratorRights.md#can_delete_stories)
- [can\_edit\_messages](ChatAdministratorRights.md#can_edit_messages)
- [can\_edit\_stories](ChatAdministratorRights.md#can_edit_stories)
- [can\_invite\_users](ChatAdministratorRights.md#can_invite_users)
- [can\_manage\_chat](ChatAdministratorRights.md#can_manage_chat)
- [can\_manage\_topics](ChatAdministratorRights.md#can_manage_topics)
- [can\_manage\_video\_chats](ChatAdministratorRights.md#can_manage_video_chats)
- [can\_pin\_messages](ChatAdministratorRights.md#can_pin_messages)
- [can\_post\_messages](ChatAdministratorRights.md#can_post_messages)
- [can\_post\_stories](ChatAdministratorRights.md#can_post_stories)
- [can\_promote\_members](ChatAdministratorRights.md#can_promote_members)
- [can\_restrict\_members](ChatAdministratorRights.md#can_restrict_members)
- [is\_anonymous](ChatAdministratorRights.md#is_anonymous)

## Properties

### can\_change\_info

• **can\_change\_info**: `boolean`

True, if the user is allowed to change the chat title, photo and other settings

#### Defined in

[manageTypes.d.ts:295](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L295)

___

### can\_delete\_messages

• **can\_delete\_messages**: `boolean`

True, if the administrator can delete messages of other users

#### Defined in

[manageTypes.d.ts:287](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L287)

___

### can\_delete\_stories

• `Optional` **can\_delete\_stories**: `boolean`

True, if the administrator can delete stories posted by other users; channels only

#### Defined in

[manageTypes.d.ts:309](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L309)

___

### can\_edit\_messages

• `Optional` **can\_edit\_messages**: `boolean`

True, if the administrator can edit messages of other users and can pin messages; channels only

#### Defined in

[manageTypes.d.ts:301](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L301)

___

### can\_edit\_stories

• `Optional` **can\_edit\_stories**: `boolean`

True, if the administrator can edit stories posted by other users

#### Defined in

[manageTypes.d.ts:307](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L307)

___

### can\_invite\_users

• **can\_invite\_users**: `boolean`

True, if the user is allowed to invite new users to the chat

#### Defined in

[manageTypes.d.ts:297](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L297)

___

### can\_manage\_chat

• **can\_manage\_chat**: `boolean`

True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages and ignore slow mode. Implied by any other administrator privilege.

#### Defined in

[manageTypes.d.ts:285](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L285)

___

### can\_manage\_topics

• `Optional` **can\_manage\_topics**: `boolean`

True, if the user is allowed to create, rename, close, and reopen forum topics; supergroups only

#### Defined in

[manageTypes.d.ts:311](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L311)

___

### can\_manage\_video\_chats

• **can\_manage\_video\_chats**: `boolean`

True, if the administrator can manage video chats

#### Defined in

[manageTypes.d.ts:289](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L289)

___

### can\_pin\_messages

• `Optional` **can\_pin\_messages**: `boolean`

True, if the user is allowed to pin messages; groups and supergroups only

#### Defined in

[manageTypes.d.ts:303](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L303)

___

### can\_post\_messages

• `Optional` **can\_post\_messages**: `boolean`

True, if the administrator can post messages in the channel, or access channel statistics; channels only

#### Defined in

[manageTypes.d.ts:299](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L299)

___

### can\_post\_stories

• `Optional` **can\_post\_stories**: `boolean`

True, if the administrator can post stories to the chat

#### Defined in

[manageTypes.d.ts:305](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L305)

___

### can\_promote\_members

• **can\_promote\_members**: `boolean`

True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user)

#### Defined in

[manageTypes.d.ts:293](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L293)

___

### can\_restrict\_members

• **can\_restrict\_members**: `boolean`

True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics

#### Defined in

[manageTypes.d.ts:291](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L291)

___

### is\_anonymous

• **is\_anonymous**: `boolean`

True, if the user's presence in the chat is hidden

#### Defined in

[manageTypes.d.ts:283](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L283)
