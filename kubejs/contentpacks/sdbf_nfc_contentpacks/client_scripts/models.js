// priority: 2000
// [merged] moon_data_model.js, outline_render_model.js, rgb_model.js, strategy_model.js, multi_state_tooltip_model.js

// ===== moon_data_model.js =====
function MoonDataModel() {
    this.moonSize = 20
    this.moonShaderColor = new RGB(1, 1, 1)
}
MoonDataModel.prototype = {
    setMoonShaderColor(r, g, b) {
        this.moonShaderColor = new RGB(r, g, b)
        return this
    },
    setMoonSize(size) {
        this.moonSize = size
        return this
    },
    getMoonShaderColor() {
        return this.moonShaderColor
    },
    getMoonSize() {
        return this.moonSize
    },
    reset() {
        this.moonSize = 20
        this.moonShaderColor = new RGB(1, 1, 1)
    }
}

// ===== outline_render_model.js =====
/**
 * @param {BlockPos} blockPos 
 * @param {number} color 
 */
function OutlineRenderModel(blockPos, color) {
    this.x = blockPos.getX()
    this.y = blockPos.getY()
    this.z = blockPos.getZ()
    /** @type {number} */
    this.color = color
    this.time = -1
}
OutlineRenderModel.prototype = {
    /**
     * @param {OutlineRenderModel} other 
     * @returns {boolean}
     */
    equals: function (other) {
        return this.x === other.x && this.y === other.y && this.z === other.z && this.color === other.color
    },
    /**
     * @returns {BlockPos}
     */
    getBlockPos() {
        return new BlockPos(this.x, this.y, this.z)
    },
    /**
     * @param {number} time 
     */
    setTime(time) {
        this.time = time
        return this
    },
    setColor(color) {
        this.color = color
    }
}

function ConvertNbt2OutlineRenderList(nbtList) {
    let outlineList = []
    nbtList.forEach(/** @param {Internal.CompoundTag} nbt */nbt => {
        if (!nbt || !nbt.contains('x') || !nbt.contains('y') || !nbt.contains('z')) return null
        let pos = new BlockPos(nbt.getInt('x'), nbt.getInt('y'), nbt.getInt('z'))
        let color = nbt.contains('color') ? nbt.getInt('color') : 0x000000
        let res = new OutlineRenderModel(pos, color)
        if (nbt.contains('time')) {
            let time = nbt.getInt('time')
            res.setTime(time)
        }
        outlineList.push(res)
    })
    return outlineList
}


/**
 * @param {OutlineRenderModel[]} outlineList 
 * @returns {Internal.ListTag}
 */

// ===== rgb_model.js =====
/**
 * 
 * @param {number} r 
 * @param {number} g 
 * @param {number} b 
 */
function RGB(r, g, b) {
    this.r = r
    this.g = g
    this.b = b
}

// ===== strategy_model.js =====
function StrategyModel() {
    /**@type {Object<string, function(...any): void>} */
    this.strategyMap = {}
    /**@type {function[]} */
    this.inits = []
    /**@type {function[]} */
    this.defers = []
    return this
}

StrategyModel.prototype = {
    /**
     * @param {Object<string, function(...any): void>} strategyMap
     */
    setStrategyMap: function (strategyMap) {
        this.strategyMap = strategyMap
        return this
    },
    /**
     * @param {String} id
     * @param {function(any[]): void} func
     */
    addStrategy: function (id, func) {
        this.strategyMap[id] = func
        return this
    },
    /**
     * @param {function(...any): void} data
     */
    addInit: function (initFunc) {
        this.inits.push(initFunc)
        return this
    },
    /**
     * @param {function(...any): void} data
     */
    addDefer: function (deferFunc) {
        this.defers.push(deferFunc)
        return this
    },
    /**
     * @param {String} id
     * @returns {boolean}
     */
    contains: function (id) {
        return this.strategyMap[id] != null
    },
    /**
     * @param {string[]} ids
     * @param {any[]} args 
     */
    run: function (ids, args, customData) {
        args.unshift(customData)
        this.inits.forEach(init => {
            init.apply(null, args)
        })
        ids.forEach(id => {
            if (!this.strategyMap[id]) return
            this.strategyMap[id].apply(null, args)
        })
        this.defers.forEach(defer => {
            defer.apply(null, args)
        })
        return
    },
    /**
     * @param {string[]} ids
     * @param {any[]} args 
     */
    runOnly: function (ids, args, customData) {
        args.unshift(customData)
        this.inits.forEach(init => {
            init.apply(null, args)
        })
        for (let id of ids) {
            if (!this.strategyMap[id]) return
            if (!this.strategyMap[id].apply(null, args)) return
        }
        this.defers.forEach(defer => {
            defer.apply(null, args)
        })
        return
    },
}

// ===== multi_state_tooltip_model.js =====
/**
 * 
 * @param {String} itemId 
 */
function MultiStateTooltip(itemId) {
    this.itemId = itemId
    this.defaultTooltips = []
    this.ctrlTooltips = []
    this.shiftTooltips = []
    this.altTooltips = []
    this.shiftDescription = Text.translatable('tooltips.kubejs.multi_state.shift.1')
    this.shiftHoldingDescription = Text.translatable('tooltips.kubejs.multi_state.shift_holding.1')
    this.ctrlDescription = Text.translatable('tooltips.kubejs.multi_state.ctrl.1')
    this.ctrlHoldingDescription = Text.translatable('tooltips.kubejs.multi_state.ctrl_holding.1')
    this.altDescription = Text.translatable('tooltips.kubejs.multi_state.alt.1')
    this.altHoldingDescription = Text.translatable('tooltips.kubejs.multi_state.alt_holding.1')
}
MultiStateTooltip.prototype = {
    /**
     * @param {Internal.MutableComponent | function(Internal.List<any>, Internal.ItemStack): Internal.MutableComponent[]} textComponent
     */
    addDefault: function (textComponent) {
        this.defaultTooltips.push(textComponent)
        return this
    },
    /**
     * @param {Internal.MutableComponent | function(Internal.List<any>, Internal.ItemStack): Internal.MutableComponent[]} textComponent
     */
    addCtrl: function (textComponent) {
        this.ctrlTooltips.push(textComponent)
        return this
    },
    /**
     * @param {Internal.MutableComponent | function(Internal.List<any>, Internal.ItemStack): Internal.MutableComponent[]} textComponent
     */
    addShift: function (textComponent) {
        this.shiftTooltips.push(textComponent)
        return this
    },
    /**
     * @param {Internal.MutableComponent | function(Internal.List<any>, Internal.ItemStack): Internal.MutableComponent[]} textComponent
     */
    addAlt: function (textComponent) {
        this.altTooltips.push(textComponent)
        return this
    },
    /**
     * @param {Internal.MutableComponent} textComponent
     */
    setShiftDescription: function (textComponent) {
        this.shiftDescription = textComponent
        return this
    },
    /**
     * @param {Internal.MutableComponent} textComponent
     */
    setCtrlDescription: function (textComponent) {
        this.ctrlDescription = textComponent
        return this
    },
    /**
     * @param {Internal.MutableComponent} textComponent
     */
    setAltDescription: function (textComponent) {
        this.altDescription = textComponent
        return this
    },
    /**
     * @param {Internal.MutableComponent} textComponent
     */
    setShiftHoldingDescription: function (textComponent) {
        this.shiftHoldingDescription = textComponent
        return this
    },
    /**
     * @param {Internal.MutableComponent} textComponent
     */
    setCtrlHoldingDescription: function (textComponent) {
        this.ctrlHoldingDescription = textComponent
        return this
    },
    /**
     * @param {Internal.MutableComponent} textComponent
     */
    setAltHoldingDescription: function (textComponent) {
        this.altHoldingDescription = textComponent
        return this
    },

}

/**
 * @type {Object<string, MultiStateTooltip>}
 */
const OrganTooltipRegistryMap = {}
/**
 * @param {MultiStateTooltip} tooltipModel
 */
function RegistryOrganTooltip(tooltipModel) {
    OrganTooltipRegistryMap[tooltipModel.itemId] = tooltipModel
}


/**
 * 
 * @param {MultiStateTooltip} tooltipModel 
 */
function ApplyMultiStateTooltip(tooltipModel) {
    ItemEvents.tooltip(tooltip => {
        tooltip.addAdvanced(tooltipModel.itemId, (item, advanced, text) => {
            let lineNum = 1
            if (tooltipModel.defaultTooltips.length > 0) {
                lineNum = AddTextFuncLines(text, tooltipModel.defaultTooltips, item, lineNum)
            }
            
            switch (true) {
                case tooltip.isCtrl():
                    if (tooltipModel.ctrlTooltips.length > 0) {
                        lineNum = AddTextLines(text, [tooltipModel.ctrlHoldingDescription], lineNum)
                        lineNum = AddTextFuncLines(text, tooltipModel.ctrlTooltips, item, lineNum)
                        return
                    }
                    break
                case tooltip.isShift():
                    if (tooltipModel.shiftTooltips.length > 0) {
                        lineNum = AddTextLines(text, [tooltipModel.shiftHoldingDescription], lineNum)
                        lineNum = AddTextFuncLines(text, tooltipModel.shiftTooltips, item, lineNum)
                        return
                    }
                case tooltip.isAlt():
                    if (tooltipModel.altTooltips.length > 0) {
                        lineNum = AddTextLines(text, [tooltipModel.altHoldingDescription], lineNum)
                        lineNum = AddTextFuncLines(text, tooltipModel.altTooltips, item, lineNum)
                        return
                    }
            }

            if (tooltipModel.ctrlTooltips.length > 0) {
                lineNum = AddTextLines(text, [tooltipModel.ctrlDescription], lineNum)
            }
            if (tooltipModel.shiftTooltips.length > 0) {
                lineNum = AddTextLines(text, [tooltipModel.shiftDescription], lineNum)
            }
            if (tooltipModel.altTooltips.length > 0) {
                lineNum = AddTextLines(text, [tooltipModel.altDescription], lineNum)
            }
        })
    })
}

