[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InlineQueryResultsButton

# Interface: InlineQueryResultsButton

This object represents a button to be shown above inline query results. You must use exactly one of the optional fields.

Example: An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an OAuth link. Once done, the bot can offer a switch_inline button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities.

## Table of contents

### Properties

- [start\_parameter](InlineQueryResultsButton.md#start_parameter)
- [text](InlineQueryResultsButton.md#text)
- [web\_app](InlineQueryResultsButton.md#web_app)

## Properties

### start\_parameter

• `Optional` **start\_parameter**: `string`

Deep-linking parameter for the /start message sent to the bot when a user presses the button. 1-64 characters, only `A-Z`, `a-z`, `0-9`, `_` and `-` are allowed.

#### Defined in

[inlineTypes.d.ts:722](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L722)

___

### text

• **text**: `string`

Label text on the button

#### Defined in

[inlineTypes.d.ts:718](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L718)

___

### web\_app

• `Optional` **web\_app**: [`WebAppInfo`](WebAppInfo.md)

Description of the Web App that will be launched when the user presses the button. The Web App will be able to switch back to the inline mode using the method web_app_switch_inline_query inside the Web App.

#### Defined in

[inlineTypes.d.ts:720](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L720)
