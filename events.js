function copy() {
    navigator.clipboard.writeText('xmlns:xsi="http://www.w3.org/2001/XMLSchema" xsi:schemaLocation="https://kiyotoko.github.io/eaw-xml-schema/schemas/%SCHEMA% https://kiyotoko.github.io/eaw-xml-schema/schemas/%SCHEMA%.xsd"')
}

function styleAll() {
    const elements = document.getElementsByClassName("code")
    console.log("Found ", elements)
    for (let element of elements) {
        style(element)
    }
}

function style(element) {
    let text = element.innerHTML
    let build = ""
    let i = 0
    while (i < text.length) {
        let char = text.charAt(i)
        if (char === "\"") {
            console.log("Found string")
            build += '<span class="string">'
            build += char
            while (i < text.length) {
                char = text.charAt(++i)
                if (char === "\"") {
                    build += '</span>'
                    break
                }
                build += char
            }
        } else if (char !== ' ' || char !== '=') {
            
        }
        build += char
        i++
    }
    
    element.innerHTML = build
}
