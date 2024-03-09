[@telegram.ts/types](../README.md) / [Exports](../modules.md) / KeyboardButtonPollType

# Interface: KeyboardButtonPollType

This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed.

## Table of contents

### Properties

- [type](KeyboardButtonPollType.md#type)

## Properties

### type

• `Optional` **type**: ``"quiz"`` \| ``"regular"``

If quiz is passed, the user will be allowed to create only polls in the quiz mode. If regular is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type.

#### Defined in

[markupTypes.d.ts:188](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L188)
