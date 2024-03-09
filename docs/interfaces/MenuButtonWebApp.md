[@telegram.ts/types](../README.md) / [Exports](../modules.md) / MenuButtonWebApp

# Interface: MenuButtonWebApp

Represents a menu button that launches a Web App.

## Table of contents

### Properties

- [text](MenuButtonWebApp.md#text)
- [type](MenuButtonWebApp.md#type)
- [web\_app](MenuButtonWebApp.md#web_app)

## Properties

### text

• **text**: `string`

The text on the button.

#### Defined in

[botCommandTypes.d.ts:58](https://github.com/telegramsjs/types/blob/d08200f/src/botCommandTypes.d.ts#L58)

___

### type

• **type**: ``"web_app"``

The button type, must be "web_app".

#### Defined in

[botCommandTypes.d.ts:56](https://github.com/telegramsjs/types/blob/d08200f/src/botCommandTypes.d.ts#L56)

___

### web\_app

• **web\_app**: [`WebAppInfo`](WebAppInfo.md)

The description of the Web App that will be launched when the user presses the button.
The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery.

#### Defined in

[botCommandTypes.d.ts:63](https://github.com/telegramsjs/types/blob/d08200f/src/botCommandTypes.d.ts#L63)
