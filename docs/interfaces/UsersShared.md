[@telegram.ts/types](../README.md) / [Exports](../modules.md) / UsersShared

# Interface: UsersShared

This object contains information about the user whose identifier was shared with the bot using a KeyboardButtonRequestUsers button.

## Table of contents

### Properties

- [request\_id](UsersShared.md#request_id)
- [user\_ids](UsersShared.md#user_ids)

## Properties

### request\_id

• **request\_id**: `number`

Identifier of the request

#### Defined in

[messageTypes.d.ts:887](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L887)

___

### user\_ids

• **user\_ids**: `number`[]

Identifiers of the shared users. The bot may not have access to the users and could be unable to use these identifiers, unless the users are already known to the bot by some other means.

#### Defined in

[messageTypes.d.ts:889](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L889)
