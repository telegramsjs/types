[@telegram.ts/types](../README.md) / [Exports](../modules.md) / ChatMemberRestricted

# Interface: ChatMemberRestricted

Represents a chat member that is under certain restrictions in the chat. Supergroups only.

## Table of contents

### Properties

- [can\_add\_web\_page\_previews](ChatMemberRestricted.md#can_add_web_page_previews)
- [can\_change\_info](ChatMemberRestricted.md#can_change_info)
- [can\_invite\_users](ChatMemberRestricted.md#can_invite_users)
- [can\_manage\_topics](ChatMemberRestricted.md#can_manage_topics)
- [can\_pin\_messages](ChatMemberRestricted.md#can_pin_messages)
- [can\_send\_audios](ChatMemberRestricted.md#can_send_audios)
- [can\_send\_documents](ChatMemberRestricted.md#can_send_documents)
- [can\_send\_messages](ChatMemberRestricted.md#can_send_messages)
- [can\_send\_other\_messages](ChatMemberRestricted.md#can_send_other_messages)
- [can\_send\_photos](ChatMemberRestricted.md#can_send_photos)
- [can\_send\_polls](ChatMemberRestricted.md#can_send_polls)
- [can\_send\_video\_notes](ChatMemberRestricted.md#can_send_video_notes)
- [can\_send\_videos](ChatMemberRestricted.md#can_send_videos)
- [can\_send\_voice\_notes](ChatMemberRestricted.md#can_send_voice_notes)
- [is\_member](ChatMemberRestricted.md#is_member)
- [status](ChatMemberRestricted.md#status)
- [until\_date](ChatMemberRestricted.md#until_date)
- [user](ChatMemberRestricted.md#user)

## Properties

### can\_add\_web\_page\_previews

• **can\_add\_web\_page\_previews**: `boolean`

True, if the user is allowed to add web page previews to their messages

#### Defined in

[manageTypes.d.ts:436](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L436)

___

### can\_change\_info

• **can\_change\_info**: `boolean`

True, if the user is allowed to change the chat title, photo and other settings

#### Defined in

[manageTypes.d.ts:438](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L438)

___

### can\_invite\_users

• **can\_invite\_users**: `boolean`

True, if the user is allowed to invite new users to the chat

#### Defined in

[manageTypes.d.ts:440](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L440)

___

### can\_manage\_topics

• **can\_manage\_topics**: `boolean`

True, if the user is allowed to create forum topics

#### Defined in

[manageTypes.d.ts:444](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L444)

___

### can\_pin\_messages

• **can\_pin\_messages**: `boolean`

True, if the user is allowed to pin messages

#### Defined in

[manageTypes.d.ts:442](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L442)

___

### can\_send\_audios

• **can\_send\_audios**: `boolean`

True, if the user is allowed to send audios

#### Defined in

[manageTypes.d.ts:420](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L420)

___

### can\_send\_documents

• **can\_send\_documents**: `boolean`

True, if the user is allowed to send documents

#### Defined in

[manageTypes.d.ts:422](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L422)

___

### can\_send\_messages

• **can\_send\_messages**: `boolean`

True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues

#### Defined in

[manageTypes.d.ts:418](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L418)

___

### can\_send\_other\_messages

• **can\_send\_other\_messages**: `boolean`

True, if the user is allowed to send animations, games, stickers and use inline bots

#### Defined in

[manageTypes.d.ts:434](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L434)

___

### can\_send\_photos

• **can\_send\_photos**: `boolean`

True, if the user is allowed to send photos

#### Defined in

[manageTypes.d.ts:424](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L424)

___

### can\_send\_polls

• **can\_send\_polls**: `boolean`

True, if the user is allowed to send polls

#### Defined in

[manageTypes.d.ts:432](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L432)

___

### can\_send\_video\_notes

• **can\_send\_video\_notes**: `boolean`

True, if the user is allowed to send video notes

#### Defined in

[manageTypes.d.ts:428](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L428)

___

### can\_send\_videos

• **can\_send\_videos**: `boolean`

True, if the user is allowed to send videos

#### Defined in

[manageTypes.d.ts:426](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L426)

___

### can\_send\_voice\_notes

• **can\_send\_voice\_notes**: `boolean`

True, if the user is allowed to send voice notes

#### Defined in

[manageTypes.d.ts:430](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L430)

___

### is\_member

• **is\_member**: `boolean`

True, if the user is a member of the chat at the moment of the request

#### Defined in

[manageTypes.d.ts:416](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L416)

___

### status

• **status**: ``"restricted"``

The member's status in the chat, always “restricted”

#### Defined in

[manageTypes.d.ts:412](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L412)

___

### until\_date

• **until\_date**: `number`

Date when restrictions will be lifted for this user; Unix time. If 0, then the user is restricted forever

#### Defined in

[manageTypes.d.ts:446](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L446)

___

### user

• **user**: [`User`](User.md)

Information about the user

#### Defined in

[manageTypes.d.ts:414](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L414)
