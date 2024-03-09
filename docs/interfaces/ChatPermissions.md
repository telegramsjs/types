[@telegram.ts/types](../README.md) / [Exports](../modules.md) / ChatPermissions

# Interface: ChatPermissions

Describes actions that a non-administrator user is allowed to take in a chat.

## Table of contents

### Properties

- [can\_add\_web\_page\_previews](ChatPermissions.md#can_add_web_page_previews)
- [can\_change\_info](ChatPermissions.md#can_change_info)
- [can\_invite\_users](ChatPermissions.md#can_invite_users)
- [can\_manage\_topics](ChatPermissions.md#can_manage_topics)
- [can\_pin\_messages](ChatPermissions.md#can_pin_messages)
- [can\_send\_audios](ChatPermissions.md#can_send_audios)
- [can\_send\_documents](ChatPermissions.md#can_send_documents)
- [can\_send\_messages](ChatPermissions.md#can_send_messages)
- [can\_send\_other\_messages](ChatPermissions.md#can_send_other_messages)
- [can\_send\_photos](ChatPermissions.md#can_send_photos)
- [can\_send\_polls](ChatPermissions.md#can_send_polls)
- [can\_send\_video\_notes](ChatPermissions.md#can_send_video_notes)
- [can\_send\_videos](ChatPermissions.md#can_send_videos)
- [can\_send\_voice\_notes](ChatPermissions.md#can_send_voice_notes)

## Properties

### can\_add\_web\_page\_previews

• `Optional` **can\_add\_web\_page\_previews**: `boolean`

True, if the user is allowed to add web page previews to their messages

#### Defined in

[manageTypes.d.ts:504](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L504)

___

### can\_change\_info

• `Optional` **can\_change\_info**: `boolean`

True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups

#### Defined in

[manageTypes.d.ts:506](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L506)

___

### can\_invite\_users

• `Optional` **can\_invite\_users**: `boolean`

True, if the user is allowed to invite new users to the chat

#### Defined in

[manageTypes.d.ts:508](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L508)

___

### can\_manage\_topics

• `Optional` **can\_manage\_topics**: `boolean`

True, if the user is allowed to create forum topics. If omitted defaults to the value of can_pin_messages

#### Defined in

[manageTypes.d.ts:512](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L512)

___

### can\_pin\_messages

• `Optional` **can\_pin\_messages**: `boolean`

True, if the user is allowed to pin messages. Ignored in public supergroups

#### Defined in

[manageTypes.d.ts:510](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L510)

___

### can\_send\_audios

• `Optional` **can\_send\_audios**: `boolean`

True, if the user is allowed to send audios

#### Defined in

[manageTypes.d.ts:488](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L488)

___

### can\_send\_documents

• `Optional` **can\_send\_documents**: `boolean`

True, if the user is allowed to send documents

#### Defined in

[manageTypes.d.ts:490](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L490)

___

### can\_send\_messages

• `Optional` **can\_send\_messages**: `boolean`

True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues

#### Defined in

[manageTypes.d.ts:486](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L486)

___

### can\_send\_other\_messages

• `Optional` **can\_send\_other\_messages**: `boolean`

True, if the user is allowed to send animations, games, stickers and use inline bots

#### Defined in

[manageTypes.d.ts:502](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L502)

___

### can\_send\_photos

• `Optional` **can\_send\_photos**: `boolean`

True, if the user is allowed to send photos

#### Defined in

[manageTypes.d.ts:492](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L492)

___

### can\_send\_polls

• `Optional` **can\_send\_polls**: `boolean`

True, if the user is allowed to send polls

#### Defined in

[manageTypes.d.ts:500](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L500)

___

### can\_send\_video\_notes

• `Optional` **can\_send\_video\_notes**: `boolean`

True, if the user is allowed to send video notes

#### Defined in

[manageTypes.d.ts:496](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L496)

___

### can\_send\_videos

• `Optional` **can\_send\_videos**: `boolean`

True, if the user is allowed to send videos

#### Defined in

[manageTypes.d.ts:494](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L494)

___

### can\_send\_voice\_notes

• `Optional` **can\_send\_voice\_notes**: `boolean`

True, if the user is allowed to send voice notes

#### Defined in

[manageTypes.d.ts:498](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L498)
