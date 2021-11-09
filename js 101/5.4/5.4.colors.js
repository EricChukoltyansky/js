const colorsFunc = function(colors) {
    switch (colors.toLowerCase()) {
        case "yellow": 
        case "pink": 
        case "orange":
            return "light color";
        case "purple":
        case "blue": 
        case "brown":
            return "dark color";
        default: 
        return "Unknown color"    
    }
}

console.log(colorsFunc("pink"))