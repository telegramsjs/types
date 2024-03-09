[@telegram.ts/types](../README.md) / [Exports](../modules.md) / BotCommandScopeChatAdministrators

# Interface: BotCommandScopeChatAdministrators

Represents the scope of bot commands, covering all administrators of a specific group or supergroup chat.

## Table of contents

### Properties

- [chat\_id](BotCommandScopeChatAdministrators.md#chat_id)
- [type](BotCommandScopeChatAdministrators.md#type)

## Properties

### chat\_id

• **chat\_id**: `string` \| `number`

The unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername).

#### Defined in

[botCommandTypes.d.ts:170](https://github.com/telegramsjs/types/blob/d08200f/src/botCommandTypes.d.ts#L170)

___

### type

• **type**: ``"chat_administrators"``

The scope type, must be "chat_administrators".

#### Defined in

[botCommandTypes.d.ts:168](https://github.com/telegramsjs/types/blob/d08200f/src/botCommandTypes.d.ts#L168)
