[@telegram.ts/types](../README.md) / [Exports](../modules.md) / ReplyKeyboardMarkup

# Interface: ReplyKeyboardMarkup

This object represents a custom keyboard with reply options (see Introduction to bots for details and examples).

## Table of contents

### Properties

- [input\_field\_placeholder](ReplyKeyboardMarkup.md#input_field_placeholder)
- [is\_persistent](ReplyKeyboardMarkup.md#is_persistent)
- [keyboard](ReplyKeyboardMarkup.md#keyboard)
- [one\_time\_keyboard](ReplyKeyboardMarkup.md#one_time_keyboard)
- [resize\_keyboard](ReplyKeyboardMarkup.md#resize_keyboard)
- [selective](ReplyKeyboardMarkup.md#selective)

## Properties

### input\_field\_placeholder

• `Optional` **input\_field\_placeholder**: `string`

The placeholder to be shown in the input field when the keyboard is active; 1-64 characters

#### Defined in

[markupTypes.d.ts:136](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L136)

___

### is\_persistent

• `Optional` **is\_persistent**: `boolean`

Requests clients to always show the keyboard when the regular keyboard is hidden. Defaults to false, in which case the custom keyboard can be hidden and opened with a keyboard icon.

#### Defined in

[markupTypes.d.ts:130](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L130)

___

### keyboard

• **keyboard**: [`KeyboardButton`](../modules.md#keyboardbutton)[][]

Array of button rows, each represented by an Array of KeyboardButton objects

#### Defined in

[markupTypes.d.ts:128](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L128)

___

### one\_time\_keyboard

• `Optional` **one\_time\_keyboard**: `boolean`

Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat – the user can press a special button in the input field to see the custom keyboard again. Defaults to false.

#### Defined in

[markupTypes.d.ts:134](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L134)

___

### resize\_keyboard

• `Optional` **resize\_keyboard**: `boolean`

Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to false, in which case the custom keyboard is always of the same height as the app's standard keyboard.

#### Defined in

[markupTypes.d.ts:132](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L132)

___

### selective

• `Optional` **selective**: `boolean`

Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are

**`Mentioned`**

in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message.

Example: A user requests to change the bot's language, bot replies to the request with a keyboard to select the new language. Other users in the group don't see the keyboard.

#### Defined in

[markupTypes.d.ts:140](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L140)
