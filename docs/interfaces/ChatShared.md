[@telegram.ts/types](../README.md) / [Exports](../modules.md) / ChatShared

# Interface: ChatShared

This object contains information about the chat whose identifier was shared with the bot using a KeyboardButtonRequestChat button.

## Table of contents

### Properties

- [chat\_id](ChatShared.md#chat_id)
- [request\_id](ChatShared.md#request_id)

## Properties

### chat\_id

• **chat\_id**: `number`

Identifier of the shared chat. The bot may not have access to the chat and could be unable to use this identifier, unless the chat is already known to the bot by some other means.

#### Defined in

[messageTypes.d.ts:897](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L897)

___

### request\_id

• **request\_id**: `number`

Identifier of the request

#### Defined in

[messageTypes.d.ts:895](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L895)
