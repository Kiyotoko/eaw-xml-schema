# Limitations

XSD validation can detect most errors like false types or unknown attributes. However, it cannot necessarily detect every engine-specific problem or invalid game reference.

Consider using the [AlamoEngine Tools LSP](https://github.com/AlamoEngine-Tools/pg-starwarsgame-lsp) instead.

Additonally, some schemas require XSD version 1.1. Even thought this standard is now [over 14 years old](https://www.w3.org/TR/xmlschema11-1/), it is rarely supported. See [this pr](https://github.com/eclipse-lemminx/lemminx/pull/515) and [this issue](https://github.com/redhat-developer/vscode-xml/issues/222). 
