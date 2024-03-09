[@telegram.ts/types](../README.md) / [Exports](../modules.md) / Game

# Interface: Game

This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.

## Table of contents

### Properties

- [animation](Game.md#animation)
- [description](Game.md#description)
- [photo](Game.md#photo)
- [text](Game.md#text)
- [text\_entities](Game.md#text_entities)
- [title](Game.md#title)

## Properties

### animation

• **animation**: [`Animation`](Animation.md)

Animation that will be displayed in the game message in chats. Upload via BotFather

#### Defined in

[messageTypes.d.ts:1087](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1087)

___

### description

• **description**: `string`

Description of the game

#### Defined in

[messageTypes.d.ts:1079](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1079)

___

### photo

• **photo**: [`PhotoSize`](PhotoSize.md)[]

Photo that will be displayed in the game message in chats.

#### Defined in

[messageTypes.d.ts:1081](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1081)

___

### text

• **text**: `string`

Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters.

#### Defined in

[messageTypes.d.ts:1083](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1083)

___

### text\_entities

• **text\_entities**: [`MessageEntity`](../modules.md#messageentity)[]

Special entities that appear in text, such as usernames, URLs, bot commands, etc.

#### Defined in

[messageTypes.d.ts:1085](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1085)

___

### title

• **title**: `string`

Title of the game

#### Defined in

[messageTypes.d.ts:1077](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1077)
