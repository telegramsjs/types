[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InlineQueryResultGame

# Interface: InlineQueryResultGame

Represents a Game.

Note: This will only work in Telegram versions released after October 1, 2016. Older clients will not display any inline results if a game result is among them.

## Table of contents

### Properties

- [game\_short\_name](InlineQueryResultGame.md#game_short_name)
- [id](InlineQueryResultGame.md#id)
- [reply\_markup](InlineQueryResultGame.md#reply_markup)
- [type](InlineQueryResultGame.md#type)

## Properties

### game\_short\_name

• **game\_short\_name**: `string`

Short name of the game

#### Defined in

[inlineTypes.d.ts:409](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L409)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[inlineTypes.d.ts:407](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L407)

___

### reply\_markup

• `Optional` **reply\_markup**: [`InlineKeyboardMarkup`](InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[inlineTypes.d.ts:411](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L411)

___

### type

• **type**: ``"game"``

Type of the result, must be game

#### Defined in

[inlineTypes.d.ts:405](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L405)
