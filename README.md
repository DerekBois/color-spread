# Color Spread
Return an array of colors

## Usage

#### Pass array and number for the spread

```javascript
colorSpread(array, count);
```
#### The number passed is the amount of colors you are returned


```javascript
let colors = ['#6d57f4','12f668','f4a','"#f5ca0a"'];

console.log(colorSpread(colors, 12));
//  ["#6d57f4", "#567fd1", "#40a7ae", "#29ce8b", "#12f668", "#4dca79", 
//  "#899d89", "#c4719a", "#ff44aa", "#fc7175", "#f89d3f", "#f5ca0a"]
```
You can enter the hex values with or without #, shorthand, or even in single or double quotes or back-ticks.