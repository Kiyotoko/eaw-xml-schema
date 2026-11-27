# Why

XML schemas are used to define and document elements. This project contains multiple schemas for different xml data structures in the game Star Wars™: Empire at War™. These should help new people to find their way around. As there is not much information easily available online outside of the wiki, these can be particularly helpful for elements that are not self-explanatory.
 
Let's take a look at the xml files of EaW: Forces of Corruption. You can download them over [ModDB here](https://www.moddb.com/downloads/eaw-xml-files).

If you check out the file `eaw_xml/XML/SPACEUNITSCORVETTES.XML`, there is a single error inside the file. Can you find it? No? That's because it contains nearly 1500 lines!

When you look at the lines 73, the tag name is `<Hardpoints>` instead of `<HardPoints>`! That's an error, because it doesn't follow there own naming convention. Luckily, in this case it doesn't matter because the EaW xml parser does not care about letter case.
