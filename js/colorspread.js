function colorSpread(colors = [], finalCount = 1) {
    const normalize = (color) => {
        let col = color.replace(/[#'"`]/g,'').trim();

        if (col.length === 3) {
            col = [...col].map(v => String(v)+v).join('');
        }
        while (col.length < 6) {
            col = `0${col}`;
        }
        return `#${col}`;
    }
    const returnRgbSpread = (start, end, count) => {
        let ret = [];

        for (let i=0;i<count;i++) {
            let cc = {r:0,g:0,b:0};

            Object.keys(cc).forEach(c => {
                cc[c] = Math.round(start[c]+(end[c]-start[c])/(count-1)*i);
            })
            ret.push(toHex(cc));
        }
        return ret;
    }
    const toHex = (rgb) => {
        const toHexPart = (part, p = part.toString(16)) => p.length == 1 ? `0${p}` : p;

        return `#${toHexPart(rgb.r)+toHexPart(rgb.g)+toHexPart(rgb.b)}`;
    }
    const toRgb = (hex, h = hex.replace(/#/g,'')) => {
        return {
            r: parseInt(h.substr(0,2),16),
            g: parseInt(h.substr(2,2),16),
            b: parseInt(h.substr(4,2),16) 
        }
    }
    const spread = (cls) => {
        let sectionsLength = Math.floor(finalCount/(colors.length-1)),
            rgb = cls.map(c => toRgb(c)),
            finalColors = [];

        rgb.forEach((item, i, arr) => {
            if (i<arr.length-1) {
                let spreadSection = [];

                if (i === arr.length-2) {
                    spreadSection = returnRgbSpread(item,arr[i+1],finalCount-finalColors.length);
                    return finalColors = [...finalColors, ...spreadSection];
                }
                spreadSection = returnRgbSpread(item,arr[i+1],sectionsLength+1);
                spreadSection.pop();
                finalColors = [...finalColors, ...spreadSection];
            }
        })
        return finalColors;
    }
    colors = colors.map(c => normalize(c)).filter(c => c);
    
    if (colors.length >= finalCount || colors.length === 1) {
        return colors.slice(0,finalCount);
    }
    return spread(colors);
}