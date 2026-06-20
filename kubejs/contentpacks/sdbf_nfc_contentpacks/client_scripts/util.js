// priority: 3000
// [merged] 合并自: color.js, common.js, tooltips.js

// ===== color.js =====
function RgbToHex(r, g, b) {
    let hex = ((r << 16) | (g << 8) | b).toString(16)
    return "#" + new Array(Math.abs(hex.length - 7)).join('0') + hex
}

function HexToRgb(hex) {
    let rgb = []
    for (let i = 1; i < 7; i += 2) {
        rgb.push(parseInt('0x' + hex.slice(i, i + 2)))
    }
    return rgb
}

function Gradient(startColor, endColor, step) {
    // 将 hex 转换为rgb
    let sColor = HexToRgb(startColor)
    let eColor = HexToRgb(endColor)

    // 计算R\G\B每一步的差值
    let rStep = (eColor[0] - sColor[0]) / step
    let gStep = (eColor[1] - sColor[1]) / step
    let bStep = (eColor[2] - sColor[2]) / step

    let gradientColorArr = []
    for (let i = 0; i < step; i++) {
        // 计算每一步的hex值
        gradientColorArr.push(RgbToHex(parseInt(rStep * i + sColor[0]), parseInt(gStep * i + sColor[1]), parseInt(bStep * i + sColor[2])))
    }
    return gradientColorArr
}


/**
 * 
 * @param {Internal.MutableComponent} text 
 * @param {string} startColor 
 * @param {string} endColor 
 * @returns {Internal.MutableComponent}
 */
function GradientText(text, startColor, endColor) {
    let textString = text.getString()
    let result = Text.empty()
    Gradient(startColor, endColor, textString.length()).forEach((color, index) => {
        result.append(Text.of(textString.charCodeAt(index)).color(Color.of(color)))
    })
    return result
}

// ===== common.js =====
/**
 * 从数组中随机获取一个元素
 * 如果数组为空或未定义，则返回 null
 * @param {any[]} array 
 * @returns {any}
 */

/**
 * 对给定的数值进行四舍五入操作，并保留指定的小数位数
 * @param {number} value 
 * @param {number} n 
 * @returns {number}
 */
function RoundFix(value, n) {
    return Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
}


/**
 * 对给定的数值进行下取整操作，并保留指定的小数位数
 * @param {number} value 
 * @param {number} n 
 * @returns {number}
 */
function FloorFix(value, n) {
    return Math.floor(value * Math.pow(10, n)) / Math.pow(10, n);
}

/**
 * 洗牌算法
 * @param {any[]} a 
 * @returns {any[]}
 */
function Shuffle(arr) {
    var length = arr.length,
        temp,
        random;
    while (0 != length) {
        random = Math.floor(Math.random() * length)
        length--;
        // swap
        temp = arr[length];
        arr[length] = arr[random];
        arr[random] = temp;
    }
    return arr;
}

/**
 * 数组交集
 * @param {any[]} arr1 
 * @param {any[]} arr2 
 * @returns {any[]}
 */


/**
 * 非重取出
 * @param {any[]} arr
 * @param {number} count
 * @returns {any[]}
 */



/**
 * 幸运重roll
 * @param {number} luck 
 * @returns 
 */

function RandomWithLuck(luck, luckThreshold) {
    let randomList = []
    if (luck > 0) {
        for (let i = 0; i < luck / luckThreshold; i++) {
            randomList.push(Math.random())
        }
        if (luck % luckThreshold > 0 && luck % luckThreshold > Math.random() * luckThreshold) {
            randomList.push(Math.random())
        }
    } else {
        randomList.push(Math.random())
    }
    return Math.max.apply(null, randomList)
}

// ===== tooltips.js =====
/**
 * @param {Internal.List<any>} text 
 * @param {any[]} textLines 
 * @param {Number} initNum 
 * @returns 
 */
function AddTextLines(text, textLines, initNum) {
    textLines.forEach(line => {
        text.add(initNum++, line)
    })
    return initNum
}

/**
 * @param {Internal.List<any>} text 
 * @param {any[]} textLines 
 * @param {Number} initNum 
 * @returns 
 */
function AddTextFuncLines(text, textLines, item, initNum) {
    textLines.forEach(line => {
        if (typeof line == 'function') {
            let lineTexts = line(text, item)
            text.addAll(initNum, lineTexts)
            initNum += lineTexts.length
        } else {
            text.add(initNum++, line)
        }
    })
    return initNum
}

/**
 * @param {string} mobType 
 * @returns {Internal.MutableComponent}
 */

/**
 * 
 * @param {string} separator 
 * @param {Internal.MutableComponent[]} list 
 */
function JoinWithSeparator(separator, list) {
    let result = Text.empty()
    list.forEach((text, index) => {
        if (index == list.length - 1) {
            result.append(text)
            return
        }
        result.append(text).append(separator)
    })
    return result
}

