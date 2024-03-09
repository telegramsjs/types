[@telegram.ts/types](../README.md) / [Exports](../modules.md) / ChatInviteLink

# Interface: ChatInviteLink

Represents an invite link for a chat.

## Table of contents

### Properties

- [creates\_join\_request](ChatInviteLink.md#creates_join_request)
- [creator](ChatInviteLink.md#creator)
- [expire\_date](ChatInviteLink.md#expire_date)
- [invite\_link](ChatInviteLink.md#invite_link)
- [is\_primary](ChatInviteLink.md#is_primary)
- [is\_revoked](ChatInviteLink.md#is_revoked)
- [member\_limit](ChatInviteLink.md#member_limit)
- [name](ChatInviteLink.md#name)
- [pending\_join\_request\_count](ChatInviteLink.md#pending_join_request_count)

## Properties

### creates\_join\_request

• **creates\_join\_request**: `boolean`

True, if users joining the chat via the link need to be approved by chat administrators

#### Defined in

[manageTypes.d.ts:265](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L265)

___

### creator

• **creator**: [`User`](User.md)

Creator of the link

#### Defined in

[manageTypes.d.ts:263](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L263)

___

### expire\_date

• `Optional` **expire\_date**: `number`

Point in time (Unix timestamp) when the link will expire or has been expired

#### Defined in

[manageTypes.d.ts:273](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L273)

___

### invite\_link

• **invite\_link**: `string`

The invite link. If the link was created by another chat administrator, then the second part of the link will be replaced with "...".

#### Defined in

[manageTypes.d.ts:261](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L261)

___

### is\_primary

• **is\_primary**: `boolean`

True, if the link is primary

#### Defined in

[manageTypes.d.ts:267](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L267)

___

### is\_revoked

• **is\_revoked**: `boolean`

True, if the link is revoked

#### Defined in

[manageTypes.d.ts:269](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L269)

___

### member\_limit

• `Optional` **member\_limit**: `number`

The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999

#### Defined in

[manageTypes.d.ts:275](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L275)

___

### name

• `Optional` **name**: `string`

Invite link name

#### Defined in

[manageTypes.d.ts:271](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L271)

___

### pending\_join\_request\_count

• `Optional` **pending\_join\_request\_count**: `number`

Number of pending join requests created using this link

#### Defined in

[manageTypes.d.ts:277](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L277)
