<h1 align=center>EaW XML Schema</h1>

<p align=center>
    <a href="https://github.com/Kiyotoko/eaw-xml-schema/actions/workflows/static.yml">
    <img alt="Deploy static content to Pages" src="https://github.com/Kiyotoko/eaw-xml-schema/actions/workflows/static.yml/badge.svg">
    </a>
    <img alt="Static Badge" src="https://img.shields.io/badge/game-Star_Wars%3A_Empire_at_War-blue">
    <img alt="GitHub License" src="https://img.shields.io/github/license/Kiyotoko/eaw-xml-schema">
    <img alt="GitHub Issues or Pull Requests" src="https://img.shields.io/github/issues/Kiyotoko/eaw-xml-schema">
</p>

Defines common xml schemas for Empire at War modding.

## Idea

XML schemas are used to define and document elements. This project contains multiple schemas for different xml data structures in the game Star Wars: Empire at War. These should help new people to find their way around. As there is not much information easily available online outside of the wiki, these can be particularly helpful for elements that are not self-explanatory.

## Usage

At the root of your element, add the following attributes:

```xml
<root xmlns:xsi="http://www.w3.org/2001/XMLSchema" xsi:schemaLocation="https://kiyotoko.github.io/eaw-xml-schema/schemas/%SCHEMA% https://kiyotoko.github.io/eaw-xml-schema/schemas/%SCHEMA%.xsd">
    ...
</root>
```

Note: Replace `%SCHEMA%` with the name of the schema you need (see below for a selection).

## List of schemas

This is a list of all xml schemas that currently exist. More schemas will be added in the future.

- [Ground](schemas/ground.xsd)
- [Hardpoints](schemas/hardpoints.xsd)
- [Planets](schemas/planets.xsd)
- [Projectiles](schemas/projectiles.xsd)
- [Space](schemas/space.xsd)
- [Starbases](schemas/starbases.xsd)
- [Trade Routes](schemas/trades.xsd)
- [Upgrades](schemas/upgrades.xsd)