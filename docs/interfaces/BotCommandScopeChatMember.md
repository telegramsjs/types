[@telegram.ts/types](../README.md) / [Exports](../modules.md) / BotCommandScopeChatMember

# Interface: BotCommandScopeChatMember

Represents the scope of bot commands, covering a specific member of a group or supergroup chat.

## Table of contents

### Properties

- [chat\_id](BotCommandScopeChatMember.md#chat_id)
- [type](BotCommandScopeChatMember.md#type)
- [user\_id](BotCommandScopeChatMember.md#user_id)

## Properties

### chat\_id

• **chat\_id**: `string` \| `number`

The unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername).

#### Defined in

[botCommandTypes.d.ts:180](https://github.com/telegramsjs/types/blob/d08200f/src/botCommandTypes.d.ts#L180)

___

### type

• **type**: ``"chat_member"``

The scope type, must be "chat_member".

#### Defined in

[botCommandTypes.d.ts:178](https://github.com/telegramsjs/types/blob/d08200f/src/botCommandTypes.d.ts#L178)

___

### user\_id

• **user\_id**: `number`

The unique identifier of the target user.

#### Defined in

[botCommandTypes.d.ts:182](https://github.com/telegramsjs/types/blob/d08200f/src/botCommandTypes.d.ts#L182)
