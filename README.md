<div align="center">
    <h1>EaW XML Schema</h1>
    <i>Defines common xml schemas for Empire at War modding.</i>
</div>

## Why?

XML schemas are used to define and document elements. This project contains multiple schemas for different xml data structures in the game Star Wars™: Empire at War™. These should help new people to find their way around. As there is not much information easily available online outside of the wiki, these can be particularly helpful for elements that are not self-explanatory.

## Installation

There are two ways to add a schema to your xml files. The first is over XML Schema Instance attributes to add the following attributes at the root element of your document:

```js
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:noNamespaceSchemaLocation="https://kiyotoko.github.io/eaw-xml-schema/schemas/%SCHEMA%.xsd"
```

The second one is to use the XML Model association:

```xml
<?xml-model href="https://kiyotoko.github.io/eaw-xml-schema/schemas/%SCHEMA%.xsd"?>
```

That's it!

## List of Schemas

This is a list of all xml schemas that currently exist. More schemas will be added in the future.

- [`ground`](https://kiyotoko.github.io/eaw-xml-schema/schemas/ground.xsd)
- [`hardpoints`](https://kiyotoko.github.io/eaw-xml-schema/schemas/hardpoints.xsd)
- [`planets`](https://kiyotoko.github.io/eaw-xml-schema/schemas/planets.xsd)
- [`projectiles`](https://kiyotoko.github.io/eaw-xml-schema/schemas/projectiles.xsd)
- [`space`](https://kiyotoko.github.io/eaw-xml-schema/schemas/space.xsd)
- [`starbases`](https://kiyotoko.github.io/eaw-xml-schema/schemas/starbases.xsd)
- [`trades`](https://kiyotoko.github.io/eaw-xml-schema/schemas/trades.xsd)
- [`upgrades`](https://kiyotoko.github.io/eaw-xml-schema/schemas/upgrades.xsd)
