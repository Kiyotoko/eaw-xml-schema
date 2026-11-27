# Installation

There are two ways to add a schema to your xml files. The first is over XML Schema Instance attributes to add the following attributes at the root element of your document:

```toml
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:noNamespaceSchemaLocation="https://kiyotoko.github.io/eaw-xml-schema/schemas/%SCHEMA%.xsd"
```

The second one is to use the XML Model association:

```toml
<?xml-model href="https://kiyotoko.github.io/eaw-xml-schema/schemas/%SCHEMA%.xsd"?>
```

That's it!

> [!NOTE]
> Replace `%SCHEMA%` with the name of the schema you need (see below for a selection).

> [!WARNING]
> If you get the following error
> 
> ```toml
> Error while downloading
> 'https://kiyotoko.github.io/eaw-xml-schema/schemas/trade.xsd'
> ```
>
> this means that you have not entered the correct path to the schema. All letters must be lower case. Double check the full path or copy the link from one the of the schemas below.

- <a href="https://kiyotoko.github.io/eaw-xml-schema/schemas/ground.xsd" target="_blank">ground</a>
- <a href="https://kiyotoko.github.io/eaw-xml-schema/schemas/hardpoints.xsd" target="_blank">hardpoints</a>
-  <a href="https://kiyotoko.github.io/eaw-xml-schema/schemas/planets.xsd" target="_blank">planets</a>
- <a href="https://kiyotoko.github.io/eaw-xml-schema/schemas/projectiles.xsd" target="_blank">projectiles</a>
- <a href="https://kiyotoko.github.io/eaw-xml-schema/schemas/space.xsd" target="_blank">space</a> (requires XSD 1.1)
- <a href="https://kiyotoko.github.io/eaw-xml-schema/schemas/starbases.xsd" target="_blank">starbases</a>
- <a href="https://kiyotoko.github.io/eaw-xml-schema/schemas/trades.xsd" target="_blank">trades</a>
- <a href="https://kiyotoko.github.io/eaw-xml-schema/schemas/upgrades.xsd" target="_blank">upgrades</a>
