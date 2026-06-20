// priority: 501
// [merged] domain/organ/registry/slot_type/machinary_lubricant.js, domain/organ/registry/slot_type/container_slot.js, domain/organ/registry/slot_type/digest_slot.js, domain/organ/registry/slot_type/excretion_slot.js, domain/organ/registry/slot_type/gula_slot.js, domain/organ/registry/slot_type/high_adaptability_slot.js, domain/organ/registry/slot_type/revolution_flame.js

// ===== machinary_lubricant.js =====
const MachinaryLubricant = 'machinary_lubricant'

// ===== container_slot.js =====
const ContainerSlot = 'container_slot'
/**
 * @param {string} slotType
 * @returns 
 */
function IsContainerSlot(slotType) {
    return slotType == 'container_slot'
}

// ===== digest_slot.js =====
const DigestSlot = 'digest_slot'

// ===== excretion_slot.js =====
const ExcretionSlot = 'excretion_slot'


/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.ChestCavityInstance} ccInstance 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 * @param {boolean} needUpdate
 */
function SetChestCavityOrgan(customData, ccInstance, organItem, organIndex, slotType, needUpdate) {
    let inventory = ccInstance.inventory
    if (needUpdate) {
        inventory.setItem(organIndex, organItem)
    } else {
        inventory.setItemNoUpdate(organIndex, organItem)
    }

    if (slotType == ExcretionSlot) {
        if (!customData['excretionOrganList']) {
            customData['excretionOrganList'] = new Map()
        }
        customData['excretionOrganList'].set(organIndex, organItem)
    }
}

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.ChestCavityInstance} ccInstance 
 * @param {number} organIndex
 * @param {string} slotType
 * @param {boolean} needUpdate
 */
function RemoveChestCavityOrgan(customData, ccInstance, organIndex, slotType, needUpdate) {
    if (needUpdate) {
        let item = ccInstance.inventory.getStackInSlot(organIndex)
        ccInstance.inventory.removeItem(organIndex, item.getCount())
    } else {
        ccInstance.inventory.removeItemNoUpdate(organIndex)
    }
}


/**
 * @param {OrganEventCustomData} customData 
 * @param {Internal.ChestCavityInstance} ccInstance 
 * @returns 
 */
function ExcretionSlotEvent(customData, ccInstance) {
    if (!customData['excretionOrganList']) return
    const onlyMap = new Map()
    const invTypeData = ccInstance.getInventoryTypeData()
    let strategyFuncList = []
    const args = [{}, new $EvaluateChestCavityJS(ccInstance, ccInstance.owner, ccInstance.owner.level)]
    customData['excretionOrganList'].forEach((item, index) => {
        ccInstance.inventory.setItemNoUpdate(index, Item.of('air'))
        ccInstance.owner.block.popItem(item)

        let slotType = invTypeData.getSlotType(index)
        let itemId = String(item.id)
        let strategyModel = OrganStrategyMap[itemId]
        if (!strategyModel) return
        let organEventStrategy = strategyModel.strategyMap['organ_take_off']
        if (!organEventStrategy) return
        if (organEventStrategy['only'] && !onlyMap.has(itemId)) {
            onlyMap.set(itemId, true)
            organEventStrategy['only'].forEach(e => {
                strategyFuncList.push(new PriorityArgsModel(e, args.concat(item, index, slotType)))
            })
        }
        if (organEventStrategy['default'] && organEventStrategy['default'].length > 0) {
            organEventStrategy['default'].forEach(e => {
                strategyFuncList.push(new PriorityArgsModel(e, args.concat(item, index, slotType)))
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
    customData['excretionOrganList'].clear()
}

// ===== gula_slot.js =====
const GulaSlot = 'gula_slot'

SlotChestCavityUpdateStrategy.addOnlyStrategy(GulaSlot, GulaSlotEventDefer, -10)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 */
function GulaSlotEventDefer(customData, event, organItem, organIndex, slotType) {
    const chestCavity = event.chestCavity
    chestCavity.setOrganScore('chestcavity:ease_of_access', 1)
    chestCavity.setOrganScore('chestcavity:nerves', 2)
    chestCavity.setOrganScore('chestcavity:endurance', 2)
    chestCavity.setOrganScore('chestcavity:breath_capacity', 2)
    chestCavity.setOrganScore('chestcavity:breath_recovery', 2)
    chestCavity.setOrganScore('chestcavity:detoxification', 2)
    chestCavity.setOrganScore('chestcavity:filtration', 2)
}

// ===== high_adaptability_slot.js =====
const HighAdaptabilitySlot = 'high_adaptability'
SlotChestCavityUpdateStrategy.addStrategy(HighAdaptabilitySlot, HighAdaptabilitySlotEvent)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 */
function HighAdaptabilitySlotEvent(customData, event, organItem, organIndex, slotType) {
    const { chestCavity } = event
    let organData = ChestCavityUtils.lookupOrgan(organItem, null)
    organData.organScores.forEach((score, value) => {
        let oriValue = chestCavity.getOrganScore(score)
        chestCavity.setOrganScore(score, oriValue + value * 0.5)
    })
}

// ===== revolution_flame.js =====
const RevolutionFlame = 'revolution_flame'

