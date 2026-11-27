# Tools

## Editors

Adding the scheme files alone will not validate the files. It is recommended to use an editor that automatically validates your xml files for you.

- [VS Code](https://code.visualstudio.com/) with [XML Language Support by Red Hat](https://github.com/redhat-developer/vscode-xml#readme)

    Noteworthy Features:
    Allows to set the schema inside `.vscode/settings.json` for a file pattern instead of adding the schema for each file individualy:

    ```json
    {
        "xml.fileAssociations": [
            {
                "pattern": "Data/Xml/Space/**/*.xml",
                "systemId": "https://kiyotoko.github.io/eaw-xml-schema/schemas/space.xsd"
            }
        ]
    }
    ```

    The [AlamoEngineTools](https://marketplace.visualstudio.com/items?itemName=AlamoEngineTools.aet-eaw-edit) may also be helpful for general modding.

- [Notepad++](https://notepad-plus-plus.org/downloads/) with XML Tools plugin (See [StackOverflow](https://stackoverflow.com/questions/15436183/using-notepad-to-validate-xml-against-an-xsd))

## CI Tools

Alternatively, you can also use command line tools that can be automatically integrated into your CI:

- [`xmlschema`](https://github.com/sissaschool/xmlschema), available over Python.

    To lint a file, run `xmlschema-validate --schema Schema.xml File.xml --version 1.1 -v` and replace `File.xml` with your xml file.

    > [!INFO]
    > This is the only fully working open source (and therefore free) library I could found that allows to validate XSD 1.1 schemas.

    Install with Pip:

    ```sh
    pip install xmlschema
    ```

    Install on NixOS:

    ```sh
    nix profile install nixpkgs#python314Packages.xmlschema
    ```

- [`xmllint`](https://linux.die.net/man/1/xmllint), available on Linux.

    To lint a file, run `xmllint --schema Schema.xsd File.xml --noout` and replace `File.xml` with your xml file.

    Install on Ubuntu:

    ```sh
    sudo apt install libxml2-utils
    ```

- [`xmlstarlet`](https://xmlstarlet.github.io/docs.html), available on Windows/Linux/MacOS.

    To lint a file, run `xml val --xsd Schema.xsd File.xml` and replace `File.xml` with your xml file.

    Install on Ubuntu:

    ```sh
    sudo apt install xmlstarlet
    ```

    Install on Arch:

    ```sh
    sudo pacman -S xmlstarlet
    ```

    Install on MacOS:

    ```sh
    brew install xmlstarlet
    ```

    Install on NixOS:

    ```
    nix profile install nixpkgs#xmlstarlet
    ```

    Install on Windows: [Latest stable release](https://github.com/xmlstarlet/xmlstarlet/releases/latest)
