[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InputLocationMessageContent

# Interface: InputLocationMessageContent

Represents the content of a location message to be sent as the result of an inline query.

## Table of contents

### Properties

- [heading](InputLocationMessageContent.md#heading)
- [horizontal\_accuracy](InputLocationMessageContent.md#horizontal_accuracy)
- [latitude](InputLocationMessageContent.md#latitude)
- [live\_period](InputLocationMessageContent.md#live_period)
- [longitude](InputLocationMessageContent.md#longitude)
- [proximity\_alert\_radius](InputLocationMessageContent.md#proximity_alert_radius)

## Properties

### heading

• `Optional` **heading**: `number`

For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.

#### Defined in

[inlineTypes.d.ts:621](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L621)

___

### horizontal\_accuracy

• `Optional` **horizontal\_accuracy**: `number`

The radius of uncertainty for the location, measured in meters; 0-1500

#### Defined in

[inlineTypes.d.ts:617](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L617)

___

### latitude

• **latitude**: `number`

Latitude of the location in degrees

#### Defined in

[inlineTypes.d.ts:613](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L613)

___

### live\_period

• `Optional` **live\_period**: `number`

Period in seconds for which the location can be updated, should be between 60 and 86400.

#### Defined in

[inlineTypes.d.ts:619](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L619)

___

### longitude

• **longitude**: `number`

Longitude of the location in degrees

#### Defined in

[inlineTypes.d.ts:615](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L615)

___

### proximity\_alert\_radius

• `Optional` **proximity\_alert\_radius**: `number`

For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.

#### Defined in

[inlineTypes.d.ts:623](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L623)
