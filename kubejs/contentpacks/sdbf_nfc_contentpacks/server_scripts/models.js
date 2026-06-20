// priority: 2001
// [merged] model/weight_random_model.js, model/artifical_ticket_convert_config_model.js, model/attribute_manager_model.js, model/attribute_uuid_model.js, model/condition_strategy_model.js, model/lightmans_custom_gacha_trader_model.js, model/lightmans_custom_item_trader_model.js, model/organ/organ_event_model.js, model/organ/organ_item_model.js, model/organ/organ_key_active_event_model.js, model/organ/organ_strategy_model.js, model/outline_render_model.js, model/piecewise_mapping_model.js, model/priority_args_model.js, model/priority_func_model.js, model/priority_strategy_model.js, model/strategy_model.js, model/tumor_mutation_config_model.js, model/unformed_tumor_fluid_config.js, model/wave_entity_model.js, model/organ/organ_take_off_strategy_model.js, model/organ/organ_take_on_strategy_model.js, model/organ/slot_strategy_model.js

// ===== weight_random_model.js =====
function WeightRandomModel() {
    this.weightRandomList = []
}
WeightRandomModel.prototype = {
    addWeightRandom: function (obj, weight) {
        this.weightRandomList.push(new WeightRandomItem(obj, weight))
        return this
    },
    getWeightRandomObj: function () {
        let totalWeight = this.weightRandomList.reduce(function (pre, cur) {
            return pre + cur.weight
        }, 0)
        let random = Math.random() * totalWeight
        let currentWeight = 0
        for (let i = 0; i < this.weightRandomList.length; i++) {
            currentWeight += this.weightRandomList[i].weight
            if (random < currentWeight) {
                return this.weightRandomList[i].obj
            }
        }
        return null
    },
    getWeightRandomObjs: function (count) {
        let objs = []
        let tempWeightRandomList = this.weightRandomList.slice()
        if (count > tempWeightRandomList.length) {
            count = tempWeightRandomList.length
        }
        let totalWeight = tempWeightRandomList.reduce(function (pre, cur) {
            return pre + cur.weight
        }, 0)
        for (let i = 0; i < count; i++) {
            let random = Math.random() * totalWeight
            let currentWeight = 0
            let selectedIndex = -1
            for (let j = 0; j < tempWeightRandomList.length; j++) {
                currentWeight += tempWeightRandomList[j].weight
                if (random < currentWeight) {
                    selectedIndex = j
                    break
                }
            }
            if (selectedIndex >= 0) {
                objs.push(tempWeightRandomList[selectedIndex].obj)
                totalWeight -= tempWeightRandomList[selectedIndex].weight
                tempWeightRandomList.splice(selectedIndex, 1)
            }
        }
        return objs
    },
    getWeightRandomRepeatedObjs: function (count) {
        let list = this.weightRandomList
        let len = list.length
        let cumulativeWeights = new Array(len)
        let totalWeight = 0
        for (let i = 0; i < len; i++) {
            totalWeight += list[i].weight
            cumulativeWeights[i] = totalWeight
        }
        let randomList = new Array(count)
        for (let i = 0; i < count; i++) {
            randomList[i] = Math.random() * totalWeight
        }
        randomList.sort(function (a, b) { return a - b })
        let objs = new Array(count)
        let ci = 0
        for (let i = 0; i < count; i++) {
            while (ci < len && randomList[i] >= cumulativeWeights[ci]) {
                ci++
            }
            objs[i] = list[ci].obj
        }
        return objs
    }
}


/**
 * 权重随机对象
 * @param {any} obj 
 * @param {Number} weight
 * @returns 
 */
function WeightRandomItem(obj, weight) {
    this.obj = obj
    this.weight = weight
    this.startWeight = 0
    this.endWeight = 0
}

// ===== artifical_ticket_convert_config_model.js =====
/**@type {ArtificalTicketConvertConfigModel[]} */
const ArtificalTicketConvertConfigList = []

function ArtificalTicketConvertConfigModel() {
    /**@type {function(CustomMachine, Player, Number, Number, Number, Internal.List<Internal.Reward>): boolean} */
    this.condition = (machine, player, levelIndicator, chaosIndicator, typeIndicator, rewardList) => { }
    /**@type {function(CustomMachine, Player, Number, Number, Number, Internal.List<Internal.Reward>): Internal.ItemStack} */
    this.result = (machine, player, levelIndicator, chaosIndicator, typeIndicator, rewardList) => { }
}

ArtificalTicketConvertConfigModel.prototype = {
    /**
     * @param {CustomMachine} machine 
     * @param {Player} player
     * @param {Number} levelIndicator 
     * @param {Number} chaosIndicator 
     * @param {Number} typeIndicator 
     * @param {Internal.List<Internal.Reward>} rewardList 
     */
    isMatch: function (machine, player, levelIndicator, chaosIndicator, typeIndicator, rewardList) {
        return this.condition(machine, player, levelIndicator, chaosIndicator, typeIndicator, rewardList)
    },
    /**
     * @param {CustomMachine} machine 
     * @param {Internal.FluidStackJS} fluid
     * @param {Player} player
     * @param {Number} levelIndicator 
     * @param {Number} chaosIndicator 
     * @param {Number} typeIndicator 
     * @param {Internal.List<Internal.Reward>} rewardList 
     */
    apply: function (machine, player, levelIndicator, chaosIndicator, typeIndicator, rewardList) {
        return this.result(machine, player, levelIndicator, chaosIndicator, typeIndicator, rewardList)
    },
    /**
     * @param {function(CustomMachine, Player, Number, Number, Number, Internal.List<Internal.Reward>): boolean} condition 
     */
    setCondition: function (condition) {
        this.condition = condition
        return this
    },
    /**
     * @param {function(CustomMachine, Player, Number, Number, Number, Internal.List<Internal.Reward>): Internal.ItemStack} result 
     */
    setResult: function (result) {
        this.result = result
        return this
    }
}

/**
 * @param {ArtificalTicketConvertConfigModel} config 
 */

// ===== attribute_manager_model.js =====
/**
 * 属性管理模型，用于解决自定义结构的乘算加算等数值问题
 * @param {number} attr
 */
function AttributeManagerModel(attr) {
    this.attr = attr
    this.baseAddModifier = 0
    this.baseMultiModifier = 0
    this.allAddModifier = 0
    this.allMultiModifier = 0
    this.isModified = false
}

AttributeManagerModel.prototype = {
    /**
     * 设置新的基础值，这用于某些后验属性值的置入
     * @param {number} attr
     * @returns {AttributeManagerModel}
     */
    setBaseAttr: function (attr) {
        this.attr = attr
        return this
    },
    /**
     * 计算结果
     * @returns {number}
     */
    calResult: function () {
        return (this.attr * (1 + this.baseMultiModifier) + this.baseAddModifier) * (1 + this.allMultiModifier) + this.allAddModifier
    },
    /**
     * 
     * @param {Number} num 
     * @param {'addition'|'multiple'} modifierType 
     * @param {'base'|'all'} baseType 
     * @returns {AttributeManagerModel}
     */
    addAttributeModifier: function (num, modifierType, baseType) {
        this.isModified = true
        if (baseType == 'base') {
            if (modifierType == 'addition') {
                this.baseAddModifier = this.baseAddModifier + num
            } else if (modifierType == 'multiple') {
                this.baseMultiModifier = this.baseMultiModifier + num
            }
        } else if (baseType == 'all') {
            if (modifierType == 'addition') {
                // 这应当是一个本不存在的状态
                this.allAddModifier = this.allAddModifier + num
            } else if (modifierType == 'multiple') {
                this.allMultiModifier = this.allMultiModifier + num
            }
        }
        return this
    },
    /**
     * @param {Internal.LivingEntity} entity 
     * @param {string} identifier
     * @returns {AttributeManagerModel}
     */
    applyOnEntityByAttributeKey: function (entity, identifier) {
        if (!AttributeIdentifierMap[identifier]) return
        let attributeUUIDModel = AttributeIdentifierMap[identifier]
        let attributeInstance = entity.getAttribute(attributeUUIDModel.attributeKey)
        if (!attributeInstance) return
        attributeInstance.modifiers.forEach(modifier => {
            if (modifier.operation.equals($Operation.ADDITION) && modifier.id.equals(attributeUUIDModel.baseAdd)) {
                attributeInstance.removeModifier(attributeUUIDModel.baseAdd)
            } else if (modifier.operation.equals($Operation.MULTIPLY_BASE) && modifier.id.equals(attributeUUIDModel.baseMulti)) {
                attributeInstance.removeModifier(attributeUUIDModel.baseMulti)
            } else if (modifier.operation.equals($Operation.MULTIPLY_TOTAL) && modifier.id.equals(attributeUUIDModel.allMulti)) {
                attributeInstance.removeModifier(attributeUUIDModel.allMulti)
            }
        })

        if (!this.isModified) return

        if (this.baseAddModifier != 0) {
            let attributeModifier = new $AttributeModifier(attributeUUIDModel.baseAdd, identifier + 'BaseAddition', this.baseAddModifier, $Operation.ADDITION)
            attributeInstance.addPermanentModifier(attributeModifier)
        }
        if (this.baseMultiModifier != 0) {
            let attributeModifier = new $AttributeModifier(attributeUUIDModel.baseMulti, identifier + 'BaseMulti', this.baseMultiModifier, $Operation.MULTIPLY_BASE)
            attributeInstance.addPermanentModifier(attributeModifier)
        }
        if (this.allMultiModifier != 0) {
            let attributeModifier = new $AttributeModifier(attributeUUIDModel.allMulti, identifier + 'AllMulti', this.allMultiModifier, $Operation.MULTIPLY_TOTAL)
            attributeInstance.addPermanentModifier(attributeModifier)
        }
    }
}

// ===== attribute_uuid_model.js =====
/**
 * @param {Internal.Attribute_} attributeKey
 * @param {string} identifier
 */
function AttributeUUIDModel(attributeKey, identifier) {
    /**@type {Internal.Attribute_} */
    this.attributeKey = attributeKey
    /**@type {Internal.UUID} */
    this.baseAdd = null
    /**@type {Internal.UUID} */
    this.baseMulti = null
    /**@type {Internal.UUID} */
    this.allMulti = null
    /**@type {string} */
    this.identifier = identifier
    return this
}

AttributeUUIDModel.prototype = {
    setBaseAddUUID: function (uuidString) {
        this.baseAdd = UUID.fromString(uuidString)
        return this
    },
    setBaseMultiUUID: function (uuidString) {
        this.baseMulti = UUID.fromString(uuidString)
        return this
    },
    setAllMultiUUID: function (uuidString) {
        this.allMulti = UUID.fromString(uuidString)
        return this
    },
}

// ===== condition_strategy_model.js =====
/**
 * @param {Function} testFunc
 * @param {Function} applyFunc
 */
function ConditionStrategyModel(testFunc, applyFunc) {
    /**@type {Function} */
    this.testFunc = testFunc
    /**@type {Function} */
    this.applyFunc = applyFunc
    this.priority = 0
    return this
}

ConditionStrategyModel.prototype = {
    test: function (args) {
        return this.testFunc.apply(null, args)
    },
    run: function (args) {
        return this.applyFunc.apply(null, args)
    },
    setPriority: function (priority) {
        this.priority = priority
        return this
    }
}

// ===== lightmans_custom_gacha_trader_model.js =====
// function LightmansCustomGachaTraderModel() {
    // /**@type {Internal.ItemStack[]} */
    // this.storage = []
    // this.price = new LightmansGachaPriceModel()
    // this.type = 'lightmanscurrency:gacha'
    // return this
// }

// LightmansCustomGachaTraderModel.prototype = {
    // /** @param {Internal.ItemStack} item */
    // addStorage: function (item) {
        // this.storage.push(item)
        // return this
    // },
    // /** @param {Internal.ItemStack[]} items */
    // setStorage: function (items) {
        // this.storage = items
        // return this
    // },
    // /** @returns {Internal.CompoundTag} */
    // write: function () {
        // const nbt = new $CompoundTag()
        // nbt.put('Price', this.price.write())
        // const storageList = new $ListTag()
        // for (let i = 0; i < this.storage.length; i++) {
            // let pNbt = new $CompoundTag()
            // let pItem = this.storage[i]
            // pNbt.putInt('Count', pItem.getCount())
            // pNbt.putString('id', pItem.getId())
            // if (pItem.hasNBT()) {
                // pNbt.put('tag', pItem.getNbt())
            // }
            // pNbt.putInt('Slot', i)
            // storageList.add(pNbt)
        // }
        // nbt.put('Storage', storageList)
        // nbt.putString('Type', this.type)
        // return nbt
    // },
// }


// function LightmansGachaPriceModel() {
    // this.value = 30
    // this.chain = 'main'
    // this.type = 'lightmanscurrency:coins'
    // return this
// }

// LightmansGachaPriceModel.prototype = {
    // /** @param {number} value */
    // setPrice: function (price) {
        // this.value = price
        // return this
    // },
    // /** @returns {Internal.CompoundTag} */
    // write: function () {
        // const nbt = new $CompoundTag()
        // const priceList = new $ListTag()
        // ConvertMoneyIntoCoinItemList(CoinList, this.value).forEach(item => {
            // let pNbt = new $CompoundTag()
            // pNbt.putString('Coin', item.getId())
            // pNbt.putInt('Amount', item.getCount())
            // priceList.add(pNbt)
        // })
        // nbt.put('Value', priceList)
        // nbt.putString('Chain', this.chain)
        // nbt.putString('type', this.type)
        // return nbt
    // },
// }

// ===== lightmans_custom_item_trader_model.js =====
// function LightmansCustomItemTraderModel() {
    // this.creative = true
    // /**@type {LightmansTradeModel[]} */
    // this.trades = []
    // this.type = 'lightmanscurrency:item_trader'
    // return this
// }

// LightmansCustomItemTraderModel.prototype = {
    // /** @param {LightmansTradeModel} trade */
    // addTrade: function (trade) {
        // this.trades.push(trade)
        // return this
    // },
    // /** @param {LightmansTradeModel[]} trades */
    // setTrades: function (trades) {
        // this.trades = trades
        // return this
    // },
    // /** 
     // * @param {Internal.ItemStack[]} items 
     // * @param {number} price 
     // * */
    // addSimpleTrade: function (items, price) {
        // this.addTrade(new LightmansTradeModel().setPrice(price).setItems(items))
        // return this
    // },
    // /** @returns {Internal.CompoundTag} */
    // write: function () {
        // const nbt = new $CompoundTag()
        // nbt.putBoolean('Creative', this.creative)
        // nbt.putString('Type', this.type)
        // const tradesList = new $ListTag()
        // this.trades.forEach(pTrade => {
            // tradesList.add(pTrade.write())
        // })
        // nbt.put('Trades', tradesList)
        // return nbt
    // },
// }


// function LightmansTradeModel() {
    // this.priceType = 'lightmanscurrency:coins'
    // this.price = 100
    // this.chain = 'main'
    // /**@type {Internal.ItemStack[]} */
    // this.items = []
    // this.tradeDirection = 'SALE'
    // this.type = 'lightmanscurrency:item'
    // this.ruleData = []
    // return this
// }

// LightmansTradeModel.prototype = {
    // /** @param {Internal.ItemStack} item */
    // addItem: function (item) {
        // this.items.push(item)
        // return this
    // },
    // /** @param {Internal.ItemStack[]} items */
    // setItems: function (items) {
        // this.items = items
        // return this
    // },
    // /** @param {number} price */
    // setPrice: function (price) {
        // this.price = price
        // return this
    // },
    // setTradeLimitRule: function (limit) {
        // this.ruleData.push(new TradeLimitRuleModel(limit))
        // return this
    // },
    // /** @returns {Internal.CompoundTag} */
    // write: function () {
        // const nbt = new $CompoundTag()
        // const priceNbt = new $CompoundTag()
        // const priceList = new $ListTag()
        // ConvertMoneyIntoCoinItemList(CoinList, this.price).forEach(item => {
            // let pNbt = new $CompoundTag()
            // pNbt.putString('Coin', item.getId())
            // pNbt.putInt('Amount', item.getCount())
            // priceList.add(pNbt)
        // })
        // priceNbt.put('Value', priceList)
        // priceNbt.putString('Chain', this.chain)
        // priceNbt.putString('type', this.priceType)
        // nbt.put('Price', priceNbt)

        // const itemsList = new $ListTag()
        // for (let i = 0; i < this.items.length; i++) {
            // let pNbt = new $CompoundTag()
            // let pItem = this.items[i]
            // pNbt.putInt('Count', pItem.getCount())
            // pNbt.putString('id', pItem.getId())
            // if (pItem.hasNBT()) {
                // pNbt.put('tag', pItem.getNbt())
            // }
            // pNbt.putInt('Slot', i)
            // itemsList.add(pNbt)
        // }
        // const rulesList = new $ListTag()
        // this.ruleData.forEach(rule => {
            // rulesList.add(rule.write())
        // })
        // nbt.put('RuleData', rulesList)

        // nbt.put('Items', itemsList)
        // nbt.putString('TradeDirection', this.tradeDirection)
        // nbt.putString('Type', this.type)
        // return nbt
    // },
// }

// function TradeLimitRuleModel(limit) {
    // this.limit = limit
    // this.type = 'lightmanscurrency:trade_limit'
    // return this
// }

// TradeLimitRuleModel.prototype = {
    // /** @returns {Internal.CompoundTag} */
    // write: function () {
        // const nbt = new $CompoundTag()
        // nbt.putInt('Limit', this.limit)
        // nbt.putString('Type', this.type)
        // nbt.putBoolean('Active', true)
        // return nbt
    // }
// }

// /**
 // * 
 // * @param {Internal.ItemStack[]} items 
 // * @param {number} price 
 // * @returns {LightmansTradeModel}
 // */
// function CreateSimpleTradeModel(items, price) {
    // return new LightmansTradeModel().setPrice(price).setItems(items)
// }

// ===== organ_event_model.js =====
function OrganEventModel(eventId) {
    this.eventId = eventId
    /**@type {function[]} */
    this.inits = []
    /**@type {function[]} */
    this.defers = []
    return this
}
OrganEventModel.prototype = {
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
     * @param {Internal.Entity} entity
     * @param {OrganEventCustomData} customData
     * @param {any[]} args 
     */
    run: function (entity, customData, args) {
        let optional = $ChestCavityEntity.of(entity)
        if (!optional.isPresent()) return
        let ccEntity = optional.get()
        let ccInstance = ccEntity.getChestCavityInstance()
        // 往往是Client事件导致
        if (!ccInstance) return
        args.unshift(customData)
        this.inits.forEach(init => {
            init.apply(null, args)
        })
        let ccInv = ccInstance.inventory
        const onlyMap = new Map()
        let slotMap = ccInstance.getListenerMap(this.eventId)
        if (slotMap && slotMap.size() > 0) {
            let strategyFuncList = []
            slotMap.forEach((slotIndex, slotType) => {
                let curItem = ccInv.getStackInSlot(slotIndex)
                if (!curItem || curItem.isEmpty()) return
                let itemId = String(curItem.id)
                let strategyModel = OrganStrategyMap[itemId]
                if (!strategyModel) return
                let organEventStrategy = strategyModel.strategyMap[this.eventId]
                if (!organEventStrategy) return
                if (organEventStrategy['only'] && !onlyMap.has(itemId)) {
                    onlyMap.set(itemId, true)
                    organEventStrategy['only'].forEach(e => {
                        strategyFuncList.push(new PriorityArgsModel(e, args.concat(curItem, slotIndex, slotType)))
                    })
                }
                if (organEventStrategy['default'] && organEventStrategy['default'].length > 0) {
                    organEventStrategy['default'].forEach(e => {
                        strategyFuncList.push(new PriorityArgsModel(e, args.concat(curItem, slotIndex, slotType)))
                    })
                }
            })
            if (strategyFuncList.length > 0) {
                strategyFuncList.sort((a, b) => {
                    return b.getPriority() - a.getPriority()
                })
                strategyFuncList.forEach((model) => {
                    model.getFunc().apply(null, model.getArgs())
                })
            }
            ExcretionSlotEvent(customData, ccInstance)
        }

        this.defers.forEach(defer => {
            defer.apply(null, args)
        })
    }
}

// ===== organ_item_model.js =====
const $ScoreType = 'chestcavity:filtration' || 'chestcavity:breath_recovery' || 'chestcavity:nutrition' || 'chestcavity:nerves' || 'chestcavity:strength' || 'chestcavity:health' || 'chestcavity:breath_capacity' || 'chestcavity:detoxification' || 'chestcavity:speed' || 'chestcavity:endurance' || 'chestcavity:luck' || 'chestcavity:defense' || 'chestcavity:digestion' || 'chestcavity:metabolism' || 'chestcavity:fire_resistant' || 'chestcavity:glowing' || 'chestcavity:knockback_resistant' || 'chestcavity:water_breath' || 'chestcavity:swim_speed' || 'chestcavity:impact_resistant' || 'chestcavity:ease_of_access' || 'kubejs:rosy' || 'kubejs:attack_dodge' || 'kubejs:creative_flight' || 'kubejs:extreme_fitness' || 'kubejs:extreme_strength' || 'kubejs:flying_speed' || 'kubejs:magic_capacity' || 'kubejs:dragon_blood' || 'kubejs:knockback' || 'kubejs:crit_chance' || 'kubejs:crit_damage' || 'kubejs:immunosuppression' || 'kubejs:primitivization' || 'kubejs:glowing' || 'chestcavity:climbing' || 'kubejs:steppy' || 'kubejs:light_weight' || 'kubejs:jump_height' || 'kubejs:photosynthesis'

/**@type {OrganItemModel[]} */
const OrganList = []
/**@type {OrganItemModel[]} */
const PseudoOrganList = []
/**
 * 
 * @param {String} itemId 
 */
function OrganItemModel(itemId) {
    this.itemId = itemId
    this.pseudoOrgan = false
    this.canSpawnInCavity = false
    this.organScores = []
    this.maxStackSize = 1
}

OrganItemModel.prototype = {
    /**
     * 
     * @param {$ScoreType} score 
     * @param {number} value 
     * @returns 
     */
    addScore: function (score, value) {
        this.organScores.push({ 'id': `${score}`, 'value': value })
        return this
    },
    setPseudo: function (boolean) {
        this.pseudoOrgan = boolean
        return this
    },
    setCanSpawn: function (boolean) {
        this.canSpawnInCavity = boolean
        return this
    },
}

/**
 * 
 * @param {String} itemId 
 * @returns 
 */
function RegistryOrgan(itemId) {
    let organ = new OrganItemModel(itemId)
    OrganList.push(organ)
    return organ
}

/**
 * 
 * @param {String} itemId 
 * @returns 
 */

ServerEvents.highPriorityData(event => {
    OrganList.forEach(organ => {
        let item = organ.itemId.split(':')[1]
        event.addJson(`kubejs:organs/kubejs/${item}.json`, { itemID: organ.itemId, pseudoOrgan: organ.pseudoOrgan, organScores: organ.organScores })
    })
    PseudoOrganList.forEach(organ => {
        let item = organ.itemId.split(':')[1]
        event.addJson(`kubejs:organs/kubejs/${item}.json`, { itemID: organ.itemId, pseudoOrgan: organ.pseudoOrgan, organScores: organ.organScores })
    })
})

ServerEvents.tags('item', event => {
    event.add('kubejs:organ', OrganList.map(organ => organ.itemId))
    event.add('kubejs:pseudo_organ', PseudoOrganList.map(organ => organ.itemId))
    event.add('kubejs:spawn_in_cavity', OrganList.filter(organ => organ.canSpawnInCavity).map(organ => organ.itemId))
})

// ===== organ_key_active_event_model.js =====
function OrganKeyActiveEventModel(eventId) {
    this.eventId = eventId
    /**@type {function[]} */
    this.inits = []
    /**@type {function[]} */
    this.defers = []
    return this
}
OrganKeyActiveEventModel.prototype = {
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
     * @param {Internal.Entity} entity
     * @param {string} itemId
     * @param {OrganEventCustomData} customData
     * @param {any[]} args 
     */
    run: function (entity, itemId, customData, args) {
        let optional = $ChestCavityEntity.of(entity)
        if (!optional.isPresent()) return
        args.unshift(customData)
        this.inits.forEach(init => {
            init.apply(null, args)
        })
        let ccEntity = optional.get()
        let ccInstance = ccEntity.getChestCavityInstance()
        let ccInv = ccInstance.inventory
        const onlyMap = new Map()
        let slotMap = ccInstance.getListenerMap(this.eventId)
        if (slotMap && slotMap.size() > 0) {
            let strategyFuncList = []
            slotMap.forEach((slotIndex, slotType) => {
                let curItem = ccInv.getStackInSlot(slotIndex)
                if (!curItem || curItem.isEmpty() || curItem.id != itemId) return
                let strategyModel = OrganStrategyMap[itemId]
                if (!strategyModel) return
                let organEventStrategy = strategyModel.strategyMap[this.eventId]
                if (!organEventStrategy) return
                if (organEventStrategy['only'] && !onlyMap.has(itemId)) {
                    onlyMap.set(itemId, true)
                    organEventStrategy['only'].forEach(e => {
                        strategyFuncList.push(new PriorityArgsModel(e, args.concat(curItem, slotIndex, slotType)))
                    })
                }
                if (organEventStrategy['default'] && organEventStrategy['default'].length > 0) {
                    organEventStrategy['default'].forEach(e => {
                        strategyFuncList.push(new PriorityArgsModel(e, args.concat(curItem, slotIndex, slotType)))
                    })
                }
            })

            if (strategyFuncList.length > 0) {
                strategyFuncList.sort((a, b) => {
                    return b.getPriority() - a.getPriority()
                })
                strategyFuncList.forEach((model) => {
                    model.getFunc().apply(null, model.getArgs())
                })
            }
            ExcretionSlotEvent(customData, ccInstance)
        }

        this.defers.forEach(defer => {
            defer.apply(null, args)
        })
    }
}

// ===== organ_strategy_model.js =====
const $OrganEventIdType = 'item_right_clicked' || 'key_active' || 'entity_do_damage' || 'chest_cavity_update' || 'food_eaten' || 'block_broken' || 'entity_be_hurt' || 'player_enchant' || 'entity_loot' || 'chest_loot' || 'organ_take_off' || 'entity_tick' || 'organ_take_on' || 'entity_kill' || 'entity_death' || 'entity_be_interacted' || 'entity_interact' || 'decorate_chat' || 'chat' || 'iss_player_spell_cast' || 'iss_entity_spell_cast' || 'block_right_clicked' || 'organ_add_status_effect' || 'shield_block' || 'exposure_frame_added' || 'entity_fall' || 'villager_update_special_prices' || 'player_spawn_phantoms'

function OrganStrategyModel(itemId) {
    this.itemId = itemId
    /** @type {Object<string, Object<string, function(...any)[]>: void>} */
    this.strategyMap = {}
    return this
}

OrganStrategyModel.prototype = {
    /**
     * @param {$OrganEventIdType} eventId 
     * @param {any} func 
     * @param {number} priority
     * @returns 
     */
    addStrategy: function (eventId, func, priority) {
        if (!this.strategyMap[eventId]) {
            this.strategyMap[eventId] = {
                'default': [],
                'only': [],
            }
        }
        this.strategyMap[eventId]['default'].push(new PriorityFuncModel(func, priority))
        return this
    },
    /**
     * 
     * @param {$OrganEventIdType} eventId 
     * @param {any} func 
     * @param {number} priority
     * @returns 
     */
    addOnlyStrategy: function (eventId, func, priority) {
        if (!this.strategyMap[eventId]) {
            this.strategyMap[eventId] = {
                'default': [],
                'only': [],
            }
        }
        this.strategyMap[eventId]['only'].push(new PriorityFuncModel(func, priority))
        return this
    },
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



/**
 * @param {OutlineRenderModel[]} outlineList 
 * @returns {Internal.ListTag}
 */
function ConvertOutlineRenderList2Nbt(outlineList) {
    let res = new $ListTag()
    outlineList.forEach(/** @param {OutlineRenderModel} outline */outline => {
        let nbt = new $CompoundTag()
        nbt.putInt('x', outline.x)
        nbt.putInt('y', outline.y)
        nbt.putInt('z', outline.z)
        nbt.putInt('color', outline.color)
        if (outline.time > 0) {
            nbt.putInt('time', outline.time)
        }
        res.add(nbt)
    })
    return res
}

// ===== piecewise_mapping_model.js =====
/**
 * 用于作为一个分段映射快速处理的模型
 * @returns {PiecewiseMappingModel} 分段映射模型
 */
function PiecewiseMappingModel() {
    /** @type {PiecewiseItemModel[]} */
    this.piecewiseMappingList = []
}


PiecewiseMappingModel.prototype = {
    /**
     * 添加一个分段映射
     * @param {number} start 分段映射的起始值
     * @param {number} end 分段映射的结束值
     * @param {any} value 分段映射的值
     */
    addPiece: function (start, end, value) {
        this.piecewiseMappingList.push(new PiecewiseItemModel(start, end, value))
        return this
    },
    /**
     * 获取一个值对应的所有分段映射的值
     * @param {number} value 要获取的值
     * @returns {PiecewiseItemModel[]} 分段映射的值
     */
    findItems: function (value) {
        let items = []
        for (let piece of this.piecewiseMappingList) {
            if (piece.isInRange(value)) {
                items.push(piece)
            }
        }
        return items
    },
    /**
     * 获取一个值对应的所有分段映射的值
     * @param {number} value 要获取的值
     * @returns {any} 分段映射的值
     */
    getFirstValue: function (value) {
        for (let piece of this.piecewiseMappingList) {
            if (piece.isInRange(value)) {
                return piece.getValue()
            }
        }
        return null
    },
    /**
     * 获取一个值对应的最近的分段映射的值
     * @param {number} value 要获取的值
     * @returns {any} 分段映射的值
     */
    getNearestValue: function (value) {
        let items = this.findItems(value)
        if (items.length == 0) return null
        let nearestItem = items[0]
        let nearestPercent = Math.abs(nearestItem.getPercent(value) - 0.5)
        for (let item of items) {
            let curPercent = Math.abs(item.getPercent(value) - 0.5)
            if (curPercent < nearestPercent) {
                nearestItem = item
                nearestPercent = curPercent
            }
        }
        return nearestItem.getValue()
    },
    /**
     * 获取一个值对应的所有分段映射的值
     * @param {number} value 要获取的值
     * @returns {any[]} 分段映射的值
     */
    getAllValues: function (value) {
        let items = this.findItems(value)
        if (items.length == 0) return []
        let values = []
        for (let item of items) {
            values.push(item.getValue())
        }
        return values
    },
}


/**
 * 用于作为一个分段映射的项，[start, end)
 * @param {number} start 分段映射的起始值
 * @param {number} end 分段映射的结束值
 * @param {any} value 分段映射的值
 */
function PiecewiseItemModel(start, end, value) {
    this.start = start
    this.end = end
    this.value = value
}

PiecewiseItemModel.prototype = {
    /**
     * 检查一个值是否在这个分段映射的范围内
     * @param {number} value 要检查的值
     * @returns {boolean} 是否在范围内
     */
    isInRange: function (value) {
        return value >= this.start && value < this.end
    },
    /**
     * 获取这个分段映射的值
     * @returns {any} 分段映射的值
     */
    getValue: function () {
        return this.value
    },
    /**
     * 获取这个分段映射的中间值
     * @returns {number} 分段映射的中间值
     */
    getMid: function () {
        return (this.end - this.start) / 2 + this.start
    },
    /**
     * 获取这个分段映射的范围大小
     * @returns {number} 分段映射的范围大小
     */
    getRange: function () {
        return this.end - this.start
    },
    /**
     * 获取这个分段映射的百分比位置
     * @param {number} value 要获取的百分比位置的值
     * @returns {number} 分段映射的百分比位置
     */
    getPercent: function (value) {
        return (this.end - this.start == 0) ? (value == this.start ? 1 : 0) : ((value - this.start) / (this.end - this.start))
    },
    /**
     * 获取这个分段映射的起始值
     * @returns {number} 分段映射的起始值
     */
    getStart: function () {
        return this.start
    },
    /**
     * 获取这个分段映射的结束值
     * @returns {number} 分段映射的结束值
     */
    getEnd: function () {
        return this.end
    },
}

// ===== priority_args_model.js =====
/**
 * @param {PriorityFuncModel} funcModel
 * @param {any} args
 */
function PriorityArgsModel(funcModel, args) {
    /**@type {PriorityFuncModel} */
    this.funcModel = funcModel
    /**@type {any} */
    this.args = args
    return this
}

PriorityArgsModel.prototype = {
    getFuncModel: function () {
        return this.funcModel
    },
    getFunc: function () {
        return this.funcModel.getFunc()
    },
    getPriority: function () {
        return this.funcModel.getPriority()
    },
    getArgs: function () {
        return this.args
    }
}

// ===== priority_func_model.js =====
/**
 * @param {Function} func
 * @param {number} priority
 */
function PriorityFuncModel(func, priority) {
    /**@type {Function} */
    this.func = func
    /**@type {number} */
    this.priority = priority ? priority : 0
    return this
}

PriorityFuncModel.prototype = {
    getFunc: function () {
        return this.func
    },
    getPriority: function () {
        return this.priority
    }
}

// ===== priority_strategy_model.js =====
function PriorityStrategyModel() {
    /**@type {Object<string, function(...any): void>} */
    this.strategyMap = {}
    /**@type {function[]} */
    this.inits = []
    /**@type {function[]} */
    this.defers = []
    return this
}

PriorityStrategyModel.prototype = {
    /**
     * @param {String} id
     * @param {function(any[]): void} func
     */
    addStrategy: function (id, func, priority) {
        this.strategyMap[id] = new PriorityFuncModel(func, priority)
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
     * @param {string[]} ids
     * @param {any[]} args 
     */
    run: function (ids, args, customData) {
        args.unshift(customData)
        this.inits.forEach(init => {
            init.apply(null, args)
        })
        let strategyFuncList = []
        ids.forEach(id => {
            if (!this.strategyMap[id]) return
            strategyFuncList.push(this.strategyMap[id])
        })
        if (strategyFuncList.length > 0) {
            strategyFuncList.sort((a, b) => {
                return b.getPriority() - a.getPriority()
            })
            strategyFuncList.forEach((model) => {
                model.getFunc().apply(null, args)
            })
        }
        this.defers.forEach(defer => {
            defer.apply(null, args)
        })
        return
    },
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

// ===== tumor_mutation_config_model.js =====
/**@type {TumorMutationConfigModel[]} */
const TumorMutationConfigList = []

function TumorMutationConfigModel() {
    /**@type {function(CustomMachine, Internal.FluidStackJS, Internal.ItemStack, String, Internal.CompoundTag): boolean} */
    this.condition = (machine, fluid, item, slotId, organData) => { }
    /**@type {function(CustomMachine, Internal.FluidStackJS, Internal.ItemStack, String, Internal.CompoundTag): Internal.ItemStack} */
    this.result = (machine, fluid, item, slotId, organData) => { }
}

TumorMutationConfigModel.prototype = {
    /**
     * @param {CustomMachine} machine 
     * @param {Internal.FluidStackJS} fluid
     * @param {Internal.ItemStack} item 
     * @param {String} slotId 
     * @param {Internal.CompoundTag} organData 
     */
    isMatch: function (machine, fluid, item, slotId, organData) {
        return this.condition(machine, fluid, item, slotId, organData)
    },
    /**
     * @param {CustomMachine} machine 
     * @param {Internal.FluidStackJS} fluid
     * @param {Internal.ItemStack} item 
     * @param {String} slotId 
     * @param {Internal.CompoundTag} organData 
     */
    apply: function (machine, fluid, item, slotId, organData) {
        return this.result(machine, fluid, item, slotId, organData)
    },
    /**
     * @param {function(CustomMachine, Internal.FluidStackJS, Internal.ItemStack, String, Internal.CompoundTag): boolean} condition 
     */
    setCondition: function (condition) {
        this.condition = condition
        return this
    },
    /**
     * @param {function(CustomMachine, Internal.FluidStackJS, Internal.ItemStack, String, Internal.CompoundTag): Internal.ItemStack} result 
     */
    setResult: function (result) {
        this.result = result
        return this
    }
}

/**
 * @param {TumorMutationConfigModel} config 
 */

// ===== unformed_tumor_fluid_config.js =====
/**
 * @type {Map<string, UnformedTumorFluidConfigModel>}
 */
const UnformedTumorFluidConfigMap = new Map()

const WormNeuronOrganDataWeightModel = new WeightRandomModel()
    .addWeightRandom({ name: 'chestcavity:defense', mean: 2, sigma: 1 }, 30)
    .addWeightRandom({ name: 'chestcavity:strength', mean: 2, sigma: 1 }, 30)
    .addWeightRandom({ name: 'chestcavity:health', mean: 1, sigma: 0.5 }, 10)
    .addWeightRandom({ name: 'chestcavity:nerves', mean: 1, sigma: 0.5 }, 10)
    .addWeightRandom({ name: 'chestcavity:endurance', mean: 0.5, sigma: 0.5 }, 10)
    .addWeightRandom({ name: 'chestcavity:breath_recovery', mean: 0.5, sigma: 0.5 }, 8)
    .addWeightRandom({ name: 'chestcavity:breath_capacity', mean: 0.5, sigma: 0.5 }, 8)
    .addWeightRandom({ name: 'chestcavity:detoxification', mean: 0.5, sigma: 0.5 }, 8)
    .addWeightRandom({ name: 'chestcavity:filtration', mean: 0.5, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:nutrition', mean: 0.5, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:digestion', mean: 0.5, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:metabolism', mean: 0.5, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:fire_resistant', mean: 0.5, sigma: 0.5 }, 3)
    .addWeightRandom({ name: 'chestcavity:knockback_resistant', mean: 0.5, sigma: 0.5 }, 3)

const WormNeuronPotentialOrganDataWeightModel = new WeightRandomModel()
    .addWeightRandom({ name: 'kubejs:extreme_fitness', mean: 1, sigma: 0.5 }, 30)
    .addWeightRandom({ name: 'kubejs:extreme_strength', mean: 1, sigma: 0.5 }, 30)
    .addWeightRandom({ name: 'kubejs:crit_damage', mean: 0.5, sigma: 0.5 }, 10)
    .addWeightRandom({ name: 'kubejs:crit_chance', mean: 0.5, sigma: 0.5 }, 10)
    .addWeightRandom({ name: 'kubejs:dragon_blood', mean: 0.5, sigma: 0.5 }, 5)

/**
 * @param {string} fluidId 
 */
function UnformedTumorFluidConfigModel(fluidId) {
    this.fluidId = fluidId
    this.organDataCount = 2
    this.potentialOrganDataCount = 1
    this.organDataModel = WormNeuronOrganDataWeightModel
    this.potentialOrganDataModel = WormNeuronPotentialOrganDataWeightModel
}


UnformedTumorFluidConfigModel.prototype = {
    /**
     * 
     * @param {number} count 
     * @returns 
     */
    setOrganDataCount: function (count) {
        this.organDataCount = count
        return this
    },
    /**
     * @param {number} count 
     * @returns 
     */
    setPotentialOrganDataCount: function (count) {
        this.potentialOrganDataCount = count
        return this
    },
    /**
     * @param {WeightRandomModel} model 
     * @returns 
     */
    setOrganDataModel: function (model) {
        this.organDataModel = model
        return this
    },
    /**
     * @param {WeightRandomModel} model 
     * @returns 
     */
    setPotentialOrganDataModel: function (model) {
        this.potentialOrganDataModel = model
        return this
    },
    /**
     * @returns {TumorOrganDataConfig[]}
     */
    getOrganDataAttri: function () {
        return this.organDataModel.getWeightRandomObjs(this.organDataCount)
    },
    /**
     * @returns {TumorOrganDataConfig[]}
     */
    getPotentialOrganDataAttri: function () {
        return this.potentialOrganDataModel.getWeightRandomObjs(this.potentialOrganDataCount)
    },
    genOrganData: function () {
        let organData = new $CompoundTag()
        this.getOrganDataAttri().forEach((attri) => {
            organData.putFloat(attri.name, FloorFix(NormalRandom(attri.mean, attri.sigma), 2))
        })
        return organData
    },
    genPotentialOrganData: function () {
        let organData = new $CompoundTag()
        this.getPotentialOrganDataAttri().forEach((attri) => {
            organData.putFloat(attri.name, FloorFix(NormalRandom(attri.mean, attri.sigma), 2))
        })
        return organData
    }
}

/**
 * @param {UnformedTumorFluidConfigModel} organDataConfig 
 */

// ===== wave_entity_model.js =====
/**
 * 
 * @param {number} price 
 * @param {Internal.EntityType_<any>} entityType 
 * @param {number} count 
 */
function StandardWaveEntityItemModel(price, entityType) {
    this.price = price
    this.entityType = entityType
    this.compoundTag = null
    this.modifier = (levelIndicator, chaosIndicator) => { return [] }
    this.time = price * 2
}

StandardWaveEntityItemModel.prototype = {
    /**
     * 添加一个实体属性修改器
     * @param {function(number, number):Internal.List_<GatewayWaveModifier>} modifier 实体属性修改器
     */
    setModifier: function (modifier) {
        this.modifier = modifier
        return this
    },
    /**
     * 设置实体的NBT标签
     * @param {Internal.CompoundTag} compoundTag 实体的NBT标签
     */
    setCompoundTag: function (compoundTag) {
        this.compoundTag = compoundTag
        return this
    },
    /**
     * 设置对应的占用时间
     * @param {number} num 实体的NBT标签
     */
    setTime: function (num) {
        this.time = num
        return this
    },
    /**
     * 创建一个实体
     * @param {number} levelIndicator
     * @param {number} chaosIndicator
     * @param {number} count 实体数量
     */
    create(levelIndicator, chaosIndicator, count) {
        return GatewayUtils.buildStandardWaveEntity(
            this.entityType,
            '',
            this.compoundTag,
            this.modifier(levelIndicator, chaosIndicator),
            true,
            count
        )
    }
}



/**
 * 
 * @param {number} price 
 * @param {function(Internal.Level):Internal.Entity} genFunc 
 * @param {number} count 
 */
function FunctionWaveEntityItemModel(price, genFunc) {
    this.price = price
    this.genFunc = genFunc
    this.modifier = (levelIndicator, chaosIndicator) => { return [] }
    this.time = price * 2
}

FunctionWaveEntityItemModel.prototype = {
    /**
     * 添加一个实体属性修改器
     * @param {function(number, number):Internal.List_<GatewayWaveModifier>} modifier 实体属性修改器
     */
    setModifier: function (modifier) {
        this.modifier = modifier
        return this
    },
    /**
     * 设置对应的占用时间
     * @param {number} num 实体的NBT标签
     */
    setTime: function (num) {
        this.time = num
        return this
    },
    /**
     * 创建一个实体
     * @param {number} levelIndicator
     * @param {number} chaosIndicator
     * @param {number} count 实体数量
     */
    create(levelIndicator, chaosIndicator, count) {
        return new GatewayFunctionWaveEntity(
            this.genFunc,
            this.modifier(levelIndicator, chaosIndicator),
            false,
            count
        )
    }
}

// ===== organ_take_off_strategy_model.js =====
function OrganTakeOffStrategyModel() {
    this.eventId = 'organ_take_off'
    /**@type {function[]} */
    this.inits = []
    /**@type {function[]} */
    this.defers = []
    return this
}

OrganTakeOffStrategyModel.prototype = {
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
     * @param {Internal.LivingEntity} entity
     * @param {OrganEventCustomData} customData
     * @param {any[]} args 
     */
    run: function (entity, customData, args) {
        const ccInstance = entity.chestCavityInstance
        const ccInv = ccInstance.inventory
        const oldccInv = ccInstance.oldInventory
        if (!oldccInv || !ccInv) return
        args.unshift(customData)
        this.inits.forEach(init => {
            init.apply(null, args)
        })
        const invTypeData = ccInstance.getInventoryTypeData()
        const oldInvTypeData = ccInstance.getOldInventoryTypeData()
        const onlyMap = new Map()
        let oldContainerSize = oldccInv.getContainerSize()
        let newContainerSize = ccInv.getContainerSize()

        let strategyFuncList = []
        for (let i = 0; i < oldContainerSize; i++) {
            let slotType = oldInvTypeData.getSlotType(i)
            if (IsContainerSlot(slotType)) continue
            let oldItem = oldccInv.getStackInSlot(i)
            if (!oldItem || oldItem.isEmpty()) continue
            if (i <= newContainerSize) {
                let newItem = ccInv.getStackInSlot(i)
                if (oldItem.equals(newItem, true) && !IsContainerSlot(invTypeData.getSlotType(i))) continue
            }
            let itemId = oldItem.id
            let strategyModel = OrganStrategyMap[itemId]
            if (entity.isPlayer() && oldItem.hasTag('kubejs:key_active')) {
                let data = new $CompoundTag()
                data.putString('type', 'delete')
                data.putInt('slot', i)
                data.putString('itemId', itemId)
                EnqueueSendData(entity, 'update_organ_skill_wheel_item', data)
            }
            if (strategyModel) {
                Object.keys(strategyModel.strategyMap).forEach(eventId => {
                    ccInstance.removeListener(eventId, i)
                })

                let organEventStrategy = strategyModel.strategyMap[this.eventId]
                if (organEventStrategy) {
                    if (organEventStrategy['only'] && !onlyMap.has(itemId)) {
                        onlyMap.set(itemId, true)
                        organEventStrategy['only'].forEach(e => {
                            strategyFuncList.push(new PriorityArgsModel(e, args.concat(oldItem, i, slotType)))
                        })
                    }
                    if (organEventStrategy['default']) {
                        organEventStrategy['default'].forEach(e => {
                            strategyFuncList.push(new PriorityArgsModel(e, args.concat(oldItem, i, slotType)))
                        })
                    }
                }

            }

        }
        if (strategyFuncList.length > 0) {
            strategyFuncList.sort((a, b) => {
                return b.getPriority() - a.getPriority()
            })
            strategyFuncList.forEach((model) => {
                model.getFunc().apply(null, model.getArgs())
            })
        }

        this.defers.forEach(defer => {
            defer.apply(null, args)
        })
        return
    },
}

// ===== organ_take_on_strategy_model.js =====
function OrganTakeOnStrategyModel() {
    this.eventId = 'organ_take_on'
    /**@type {function[]} */
    this.inits = []
    /**@type {function[]} */
    this.defers = []
    return this
}

OrganTakeOnStrategyModel.prototype = {
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
     * @param {Internal.LivingEntity} entity
     * @param {OrganEventCustomData} customData
     * @param {any[]} args 
     */
    run: function (entity, customData, args) {
        const ccInstance = entity.chestCavityInstance
        const ccInv = ccInstance.inventory
        const oldccInv = ccInstance.oldInventory
        if (!oldccInv || !ccInv) return
        args.unshift(customData)
        this.inits.forEach(init => {
            init.apply(null, args)
        })
        const invTypeData = ccInstance.getInventoryTypeData()
        const oldInvTypeData = ccInstance.getOldInventoryTypeData()
        const onlyMap = new Map()
        let oldContainerSize = oldccInv.getContainerSize()
        let newContainerSize = ccInv.getContainerSize()

        let strategyFuncList = []
        for (let i = 0; i < newContainerSize; i++) {
            let slotType = invTypeData.getSlotType(i)
            if (IsContainerSlot(slotType)) continue
            let newItem = ccInv.getStackInSlot(i)
            if (!newItem || newItem.isEmpty()) continue
            if (i <= oldContainerSize) {
                let oldItem = oldccInv.getStackInSlot(i)
                if (newItem.equals(oldItem, true) && !IsContainerSlot(oldInvTypeData.getSlotType(i))) continue
            }

            let itemId = newItem.id
            let strategyModel = OrganStrategyMap[itemId]
            if (entity.isPlayer() && newItem.hasTag('kubejs:key_active')) {
                let data = new $CompoundTag()
                data.putString('type', 'add')
                data.putInt('slot', i)
                data.putString('itemId', itemId)
                EnqueueSendData(entity, 'update_organ_skill_wheel_item', data)
            }
            if (strategyModel) {
                Object.keys(strategyModel.strategyMap).forEach(eventId => {
                    ccInstance.addListener(eventId, i)
                })
                let organEventStrategy = strategyModel.strategyMap[this.eventId]
                if (organEventStrategy) {
                    if (organEventStrategy['only'] && !onlyMap.has(itemId)) {
                        onlyMap.set(itemId, true)
                        organEventStrategy['only'].forEach(e => {
                            strategyFuncList.push(new PriorityArgsModel(e, args.concat(newItem, i, slotType)))
                        })
                    }
                    if (organEventStrategy['default']) {
                        organEventStrategy['default'].forEach(e => {
                            strategyFuncList.push(new PriorityArgsModel(e, args.concat(newItem, i, slotType)))
                        })
                    }
                }
            }
        }

        if (strategyFuncList.length > 0) {
            strategyFuncList.sort((a, b) => {
                return b.getPriority() - a.getPriority()
            })
            strategyFuncList.forEach((model) => {
                model.getFunc().apply(null, model.getArgs())
            })
        }

        this.defers.forEach(defer => {
            defer.apply(null, args)
        })
        return
    },
}

// ===== slot_strategy_model.js =====
function SlotStrategyModel() {
    /**@type {Object<string, Object<string, function(...any)>: void>} */
    this.strategyMap = {}
    /**@type {function[]} */
    this.inits = []
    /**@type {function[]} */
    this.defers = []
    return this
}

SlotStrategyModel.prototype = {
    /**
     * @param {String} id
     * @param {function(any[]): void} func
     * @param {number} priority
     */
    addStrategy: function (id, func, priority) {
        if (!this.strategyMap[id]) {
            this.strategyMap[id] = {
                'default': [],
                'only': [],
            }
        }
        this.strategyMap[id]['default'].push(new PriorityFuncModel(func, priority))
        return this
    },
    /**
     * @param {String} id
     * @param {function(any[]): void} func
     * @param {number} priority
     */
    addOnlyStrategy: function (id, func, priority) {
        if (!this.strategyMap[id]) {
            this.strategyMap[id] = {
                'default': [],
                'only': [],
            }
        }
        this.strategyMap[id]['only'].push(new PriorityFuncModel(func, priority))
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
     * @param {Internal.LivingEntity} entity
     * @param {OrganEventCustomData} customData
     * @param {any[]} args 
     */
    run: function (entity, customData, args) {
        const chestCavity = entity.chestCavityInstance
        const ccInv = chestCavity.inventory
        const invTypeData = chestCavity.getInventoryTypeData()
        args.unshift(customData)
        const onlyMap = new Map()
        this.inits.forEach(init => {
            init.apply(null, args)
        })
        let strategyFuncList = []
        for (let i = 0; i < ccInv.getSlots(); i++) {
            let curItem = ccInv.getStackInSlot(i)
            if (!curItem || curItem.isEmpty()) continue
            let slotType = invTypeData.getSlotType(i)
            let strategyModel = this.strategyMap[slotType]
            if (!strategyModel) continue
            if (strategyModel['only'] && !onlyMap.has(slotType)) {
                onlyMap.set(slotType, true)
                strategyModel['only'].forEach(e => {
                    strategyFuncList.push(new PriorityArgsModel(e, args.concat(curItem, i, slotType)))
                })
            }
            if (strategyModel['default']) {
                strategyModel['default'].forEach(e => {
                    strategyFuncList.push(new PriorityArgsModel(e, args.concat(curItem, i, slotType)))
                })
            }
        }
        if (strategyFuncList.length > 0) {
            strategyFuncList.sort((a, b) => {
                return b.getPriority() - a.getPriority() 
            })
            strategyFuncList.forEach((model) => {
                model.getFunc().apply(null, model.getArgs())
            })
        }
        this.defers.forEach(defer => {
            defer.apply(null, args)
        })
        return
    },
}

// [restored] growth_vat 迁移所需
function RegistryTumorMutationConfig(config) {
    TumorMutationConfigList.push(config)
}
function RegistryUnformedTumorFluidConfig(organDataConfig) {
    UnformedTumorFluidConfigMap.set(organDataConfig.fluidId, organDataConfig)
}
