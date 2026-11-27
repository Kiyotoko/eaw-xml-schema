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

- [`ground`](https://kiyotoko.github.io/eaw-xml-schema/schemas/ground.xsd)
- [`hardpoints`](https://kiyotoko.github.io/eaw-xml-schema/schemas/hardpoints.xsd)
- [`planets`](https://kiyotoko.github.io/eaw-xml-schema/schemas/planets.xsd)
- [`projectiles`](https://kiyotoko.github.io/eaw-xml-schema/schemas/projectiles.xsd)
- [`space`](https://kiyotoko.github.io/eaw-xml-schema/schemas/space.xsd)
- [`starbases`](https://kiyotoko.github.io/eaw-xml-schema/schemas/starbases.xsd)
- [`trades`](https://kiyotoko.github.io/eaw-xml-schema/schemas/trades.xsd)
- [`upgrades`](https://kiyotoko.github.io/eaw-xml-schema/schemas/upgrades.xsd)
