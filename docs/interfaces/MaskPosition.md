[@telegram.ts/types](../README.md) / [Exports](../modules.md) / MaskPosition

# Interface: MaskPosition

This object describes the position on faces where a mask should be placed by default.

## Table of contents

### Properties

- [point](MaskPosition.md#point)
- [scale](MaskPosition.md#scale)
- [x\_shift](MaskPosition.md#x_shift)
- [y\_shift](MaskPosition.md#y_shift)

## Properties

### point

• **point**: ``"forehead"`` \| ``"eyes"`` \| ``"mouth"`` \| ``"chin"``

The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”.

#### Defined in

[messageTypes.d.ts:1065](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1065)

___

### scale

• **scale**: `number`

Mask scaling coefficient. For example, 2.0 means double size.

#### Defined in

[messageTypes.d.ts:1071](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1071)

___

### x\_shift

• **x\_shift**: `number`

Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position.

#### Defined in

[messageTypes.d.ts:1067](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1067)

___

### y\_shift

• **y\_shift**: `number`

Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position.

#### Defined in

[messageTypes.d.ts:1069](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1069)
