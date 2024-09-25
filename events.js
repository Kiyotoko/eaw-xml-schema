function copy() {
    navigator.clipboard.writeText('xmlns:xsi="http://www.w3.org/2001/XMLSchema" xsi:schemaLocation="https://kiyotoko.github.io/eaw-xml-schema/schemas/%SCHEMA% https://kiyotoko.github.io/eaw-xml-schema/schemas/%SCHEMA%.xsd"')
    document.getElementById("copy").innerText = "Copied!"
}