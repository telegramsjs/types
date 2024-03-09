[@telegram.ts/types](../README.md) / [Exports](../modules.md) / LoginUrl

# Interface: LoginUrl

This object represents a parameter of the inline keyboard button used to automatically authorize a user. Serves as a great replacement for the Telegram Login Widget when the user is coming from Telegram. All the user needs to do is tap/click a button and confirm that they want to log in.
Telegram apps support these buttons as of version 5.7.

## Table of contents

### Properties

- [bot\_username](LoginUrl.md#bot_username)
- [forward\_text](LoginUrl.md#forward_text)
- [request\_write\_access](LoginUrl.md#request_write_access)
- [url](LoginUrl.md#url)

## Properties

### bot\_username

• `Optional` **bot\_username**: `string`

Username of a bot, which will be used for user authorization. See Setting up a bot for more details. If not specified, the current bot's username will be assumed. The url's domain must be the same as the domain linked with the bot. See Linking your domain to the bot for more details.

#### Defined in

[markupTypes.d.ts:83](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L83)

___

### forward\_text

• `Optional` **forward\_text**: `string`

New text of the button in forwarded messages.

#### Defined in

[markupTypes.d.ts:81](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L81)

___

### request\_write\_access

• `Optional` **request\_write\_access**: `boolean`

Pass True to request the permission for your bot to send messages to the user.

#### Defined in

[markupTypes.d.ts:85](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L85)

___

### url

• **url**: `string`

An HTTPS URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in Receiving authorization data.

NOTE: You must always check the hash of the received data to verify the authentication and the integrity of the data as described in Checking authorization.

#### Defined in

[markupTypes.d.ts:79](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L79)
