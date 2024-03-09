[@telegram.ts/types](../README.md) / [Exports](../modules.md) / ReplyKeyboardRemove

# Interface: ReplyKeyboardRemove

Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see ReplyKeyboardMarkup).

## Table of contents

### Properties

- [remove\_keyboard](ReplyKeyboardRemove.md#remove_keyboard)
- [selective](ReplyKeyboardRemove.md#selective)

## Properties

### remove\_keyboard

• **remove\_keyboard**: ``true``

Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use one_time_keyboard in ReplyKeyboardMarkup)

#### Defined in

[markupTypes.d.ts:194](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L194)

___

### selective

• `Optional` **selective**: `boolean`

Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are

**`Mentioned`**

in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message.

Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet.

#### Defined in

[markupTypes.d.ts:198](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L198)
