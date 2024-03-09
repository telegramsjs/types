[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [InlineKeyboardButton](../modules/InlineKeyboardButton.md) / GameButton

# Interface: GameButton

[InlineKeyboardButton](../modules/InlineKeyboardButton.md).GameButton

## Hierarchy

- [`AbstractInlineKeyboardButton`](InlineKeyboardButton.AbstractInlineKeyboardButton.md)

  ↳ **`GameButton`**

## Table of contents

### Properties

- [callback\_game](InlineKeyboardButton.GameButton.md#callback_game)
- [text](InlineKeyboardButton.GameButton.md#text)

## Properties

### callback\_game

• **callback\_game**: [`CallbackGame`](CallbackGame.md)

Description of the game that will be launched when the user presses the button.

NOTE: This type of button must always be the first button in the first row.

#### Defined in

[markupTypes.d.ts:51](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L51)

___

### text

• **text**: `string`

Label text on the button

#### Inherited from

[AbstractInlineKeyboardButton](InlineKeyboardButton.AbstractInlineKeyboardButton.md).[text](InlineKeyboardButton.AbstractInlineKeyboardButton.md#text)

#### Defined in

[markupTypes.d.ts:13](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L13)
