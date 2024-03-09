[@telegram.ts/types](../README.md) / [Exports](../modules.md) / Location

# Interface: Location

This object represents a point on the map.

## Table of contents

### Properties

- [heading](Location.md#heading)
- [horizontal\_accuracy](Location.md#horizontal_accuracy)
- [latitude](Location.md#latitude)
- [live\_period](Location.md#live_period)
- [longitude](Location.md#longitude)
- [proximity\_alert\_radius](Location.md#proximity_alert_radius)

## Properties

### heading

• `Optional` **heading**: `number`

The direction in which user is moving, in degrees; 1-360. For active live locations only.

#### Defined in

[messageTypes.d.ts:801](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L801)

___

### horizontal\_accuracy

• `Optional` **horizontal\_accuracy**: `number`

The radius of uncertainty for the location, measured in meters; 0-1500

#### Defined in

[messageTypes.d.ts:797](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L797)

___

### latitude

• **latitude**: `number`

Latitude as defined by sender

#### Defined in

[messageTypes.d.ts:795](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L795)

___

### live\_period

• `Optional` **live\_period**: `number`

Time relative to the message sending date, during which the location can be updated; in seconds. For active live locations only.

#### Defined in

[messageTypes.d.ts:799](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L799)

___

### longitude

• **longitude**: `number`

Longitude as defined by sender

#### Defined in

[messageTypes.d.ts:793](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L793)

___

### proximity\_alert\_radius

• `Optional` **proximity\_alert\_radius**: `number`

The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only.

#### Defined in

[messageTypes.d.ts:803](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L803)
