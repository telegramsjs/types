[@telegram.ts/types](../README.md) / [Exports](../modules.md) / TextQuote

# Interface: TextQuote

This object contains information about the quoted part of a message that is replied to by the given message.

## Table of contents

### Properties

- [entities](TextQuote.md#entities)
- [is\_manual](TextQuote.md#is_manual)
- [position](TextQuote.md#position)
- [text](TextQuote.md#text)

## Properties

### entities

• `Optional` **entities**: [`MessageEntity`](../modules.md#messageentity)[]

Special entities that appear in the quote. Currently, only bold, italic, underline, strikethrough, spoiler, and custom_emoji entities are kept in quotes.

#### Defined in

[messageTypes.d.ts:460](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L460)

___

### is\_manual

• `Optional` **is\_manual**: ``true``

True, if the quote was chosen manually by the message sender. Otherwise, the quote was added automatically by the server.

#### Defined in

[messageTypes.d.ts:464](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L464)

___

### position

• **position**: `number`

Approximate quote position in the original message in UTF-16 code units as specified by the sender

#### Defined in

[messageTypes.d.ts:462](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L462)

___

### text

• **text**: `string`

Text of the quoted part of a message that is replied to by the given message

#### Defined in

[messageTypes.d.ts:458](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L458)
