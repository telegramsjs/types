[@telegram.ts/types](../README.md) / [Exports](../modules.md) / ChatJoinRequest

# Interface: ChatJoinRequest

Represents a join request sent to a chat.

## Table of contents

### Properties

- [bio](ChatJoinRequest.md#bio)
- [chat](ChatJoinRequest.md#chat)
- [date](ChatJoinRequest.md#date)
- [from](ChatJoinRequest.md#from)
- [invite\_link](ChatJoinRequest.md#invite_link)
- [user\_chat\_id](ChatJoinRequest.md#user_chat_id)

## Properties

### bio

• `Optional` **bio**: `string`

Bio of the user.

#### Defined in

[manageTypes.d.ts:478](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L478)

___

### chat

• **chat**: [`SupergroupChat`](Chat.SupergroupChat.md) \| [`ChannelChat`](Chat.ChannelChat.md)

Chat to which the request was sent

#### Defined in

[manageTypes.d.ts:470](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L470)

___

### date

• **date**: `number`

Date the request was sent in Unix time

#### Defined in

[manageTypes.d.ts:476](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L476)

___

### from

• **from**: [`User`](User.md)

User that sent the join request

#### Defined in

[manageTypes.d.ts:472](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L472)

___

### invite\_link

• `Optional` **invite\_link**: [`ChatInviteLink`](ChatInviteLink.md)

Chat invite link that was used by the user to send the join request

#### Defined in

[manageTypes.d.ts:480](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L480)

___

### user\_chat\_id

• **user\_chat\_id**: `number`

Identifier of a private chat with the user who sent the join request. The bot can use this identifier for 5 minutes to send messages until the join request is processed, assuming no other administrator contacted the user.

#### Defined in

[manageTypes.d.ts:474](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L474)
