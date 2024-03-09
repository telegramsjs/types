[@telegram.ts/types](../README.md) / [Exports](../modules.md) / ProximityAlertTriggered

# Interface: ProximityAlertTriggered

This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.

## Table of contents

### Properties

- [distance](ProximityAlertTriggered.md#distance)
- [traveler](ProximityAlertTriggered.md#traveler)
- [watcher](ProximityAlertTriggered.md#watcher)

## Properties

### distance

• **distance**: `number`

The distance between the users

#### Defined in

[messageTypes.d.ts:839](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L839)

___

### traveler

• **traveler**: [`User`](User.md)

User that triggered the alert

#### Defined in

[messageTypes.d.ts:835](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L835)

___

### watcher

• **watcher**: [`User`](User.md)

User that set the alert

#### Defined in

[messageTypes.d.ts:837](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L837)
