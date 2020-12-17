const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = ( element, style) =>
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    // bg: window.getComputedStyle(html).getPropertyValue("--bg"),
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeading: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
    colorBlack: getStyle(html, "--color-black"),
    colorRocket: getStyle(html, "--color-rocket"),
}

const darkmode = {
    // bg: window.getComputedStyle(html).getPropertyValue("--bg"),
    bg: "#333333",
    bgPanel: "#434343",
    colorHeading: "#3664FF",
    colorText: " #13AFF0",
    colorBlack: "#B5B5B5",
    colorRocket: "#13AFF0",
    
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    )
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkmode) : changeColors(initialColors)
})