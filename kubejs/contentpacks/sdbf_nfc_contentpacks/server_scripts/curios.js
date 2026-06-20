// priority: 1001
// [merged] domain/item/curios/witness/init.js, domain/item/curios/witness/bravery_witness.js, domain/item/curios/witness/knowledge_witness.js, domain/item/curios/witness/perseverance_witness.js, domain/item/curios/witness/story_witness.js

// ===== init.js =====
const WitnessStrategy = new StrategyModel()
/**
 * 
 * @param {Internal.LivingDamageEvent} event 
 * @param {*} customData 
 */
function WitnessCuriosEntityBeHurt(event, customData) {
    const source = event.source.actual
    if (!source || !source.isPlayer()) return

    let curiosItemHandler = GetCuriosInventoryCap(source)
    let witnessStackOpt = curiosItemHandler.getStacksHandler('witness')
    if (!witnessStackOpt.isPresent()) return

    let witnessStackHandler = witnessStackOpt.get()
    let witnessStacks = witnessStackHandler.getStacks()

    if (witnessStacks.getSlots() <= 0) return

    for (let i = 0; i < witnessStacks.getSlots(); i++) {
        let pItem = witnessStacks.getStackInSlot(i)
        if (!pItem || pItem.isEmpty()) continue
        WitnessStrategy.run([String(pItem.getId())], [event, witnessStacks, pItem, i], customData)
    }
    
}

function RegistryWitnessStrategy(id, func) {
    WitnessStrategy.addStrategy(id, func)
}

// ===== bravery_witness.js =====
RegistryWitnessStrategy('kubejs:bravery_witness', BraveryWitnessCuriosStrategy)
const BraveryWitnessEachItemDamage = 10000
/** 
* @param {*} customData 
* @param {Internal.LivingDamageEvent} event 
* @param {Internal.IDynamicStackHandler} stackHandler 
* @param {Internal.ItemStack} curiosItem 
* @param {number} slotIndex 
*/
function BraveryWitnessCuriosStrategy(customData, event, stackHandler, curiosItem, slotIndex) {
    if (!curiosItem.hasNBT()) curiosItem.setNbt(new $CompoundTag())
    /**@type {Internal.ServerPlayer} */
    const player = event.source.actual
    const nbt = curiosItem.getNbt()
    let curDamage = nbt.getLong('damageAmount') + event.amount
    if (curDamage > 0) {
        let itemCounts = Math.floor(curDamage / BraveryWitnessEachItemDamage)
        curDamage = curDamage % BraveryWitnessEachItemDamage
        player.give(Item.of('minecraft:netherite_scrap', itemCounts))
        nbt.putInt('itemCounts', nbt.getInt('itemCounts') + itemCounts)
    }
    nbt.putLong('damageAmount', curDamage)
}

// ===== knowledge_witness.js =====
RegistryWitnessStrategy('kubejs:knowledge_witness', KnowledgeWitnessCuriosStrategy)
const KnowledgeWitnessEachLevelDamage = 10000
/** 
* @param {*} customData 
* @param {Internal.LivingDamageEvent} event 
* @param {Internal.IDynamicStackHandler} stackHandler 
* @param {Internal.ItemStack} curiosItem 
* @param {number} slotIndex 
*/
function KnowledgeWitnessCuriosStrategy(customData, event, stackHandler, curiosItem, slotIndex) {
    if (!curiosItem.hasNBT()) curiosItem.setNbt(new $CompoundTag())
    /**@type {Internal.ServerPlayer} */
    const player = event.source.actual
    const nbt = curiosItem.getNbt()
    let curDamage = nbt.getLong('damageAmount') + event.amount
    if (curDamage > KnowledgeWitnessEachLevelDamage) {
        let exp = Math.floor(curDamage / KnowledgeWitnessEachLevelDamage) * 200
        curDamage = curDamage % KnowledgeWitnessEachLevelDamage
        let experienceAttr = player.getAttribute('attributeslib:experience_gained')
        if (experienceAttr) exp = experienceAttr.getValue() * exp
        $ExperienceOrb.award(player.level, player.position(), exp)
        nbt.putInt('expCount', nbt.getInt('expCount') + exp)
    }
    nbt.putLong('damageAmount', curDamage)
}

// ===== perseverance_witness.js =====
// RegistryWitnessStrategy('kubejs:perseverance_witness', PerseveranceWitnessCuriosStrategy)
// const PerseveranceWitnessEachSlotSizeDamage = 10000
// /** 
// * @param {*} customData 
// * @param {Internal.LivingDamageEvent} event 
// * @param {Internal.IDynamicStackHandler} stackHandler 
// * @param {Internal.ItemStack} curiosItem 
// * @param {number} slotIndex 
// */
// function PerseveranceWitnessCuriosStrategy(customData, event, stackHandler, curiosItem, slotIndex) {
    // if (!curiosItem.hasNBT()) curiosItem.setNbt(new $CompoundTag())
    // const nbt = curiosItem.getNbt()
    // let curDamage = nbt.getLong('damageAmount') + event.amount
    // if (curDamage > 0) {
        // let slotMaxSize = Math.floor(curDamage / PerseveranceWitnessEachSlotSizeDamage)
        // curDamage = curDamage % PerseveranceWitnessEachSlotSizeDamage
        // if (slotMaxSize != 0 && !AStages.serverHasStage(FTBFinalTimerStart, event.entity.server)) {
            // let dimNet = DimensionsNet.getPrimaryNetFromPlayer(event.source.actual)
            // if (dimNet) {
                // let unifiedStorage = dimNet.getUnifiedStorage()
                // unifiedStorage.setSlotMaxSize(unifiedStorage.slotMaxSize + slotMaxSize)
                // nbt.putInt('slotMaxSize', nbt.getInt('slotMaxSize') + slotMaxSize)
            // }
        // }
    // }
    // nbt.putLong('damageAmount', curDamage)
// }

// ===== story_witness.js =====
RegistryWitnessStrategy('kubejs:story_witness', StoryWitnessCuriosStrategy)

const StoryWitnessLootList = [
    { damage: 100, lootList: [Item.of('minecraft:iron_ingot', 8)] },
    { damage: 500, lootList: [Item.of('minecraft:diamond', 3)] },
    { damage: 1000, lootList: [Item.of('kubejs:fox_tail')] },
    { damage: 3000, lootList: [Item.of('kubejs:koi_fish_scale')] },
    { damage: 5000, lootList: [Item.of('tetra:geode', 8)] },
    { damage: 10000, lootList: [Item.of('kubejs:bravery_witness')] },
    // { damage: 50000, lootList: [Item.of('kubejs:perseverance_witness')] },
    { damage: 100000, lootList: [Item.of('kubejs:knowledge_witness')] },
    { damage: 1000000, lootList: [Item.of('cataclysm:altar_of_fire')] },
    { damage: 10000000, lootList: [Item.of('minecraft:warden_spawn_egg')] },
    // { damage: 100000000, lootList: [Item.of('minecraft:potion', '{Potion:"potioncore:flight"}')] },
    // { damage: 1000000000, lootList: [Item.of('create:creative_blaze_cake')] },
    // { damage: 10000000000, lootList: [Item.of('kaleidoscope_cookery:sakura_fubuki')] },
    { damage: 100000000000, lootList: [Item.of('chisel:futura/controller')] },
    // { damage: 1000000000000, lootList: [Item.of('kaleidoscope_cookery:transmutation_lunch_bag')] }
]

/** 
* @param {*} customData 
* @param {Internal.LivingDamageEvent} event 
* @param {Internal.IDynamicStackHandler} stackHandler 
* @param {Internal.ItemStack} curiosItem 
* @param {number} slotIndex 
*/
function StoryWitnessCuriosStrategy(customData, event, stackHandler, curiosItem, slotIndex) {
    if (!curiosItem.hasNBT()) curiosItem.setNbt(new $CompoundTag())
    let nbt = curiosItem.getNbt()
    let curDamage = nbt.getLong('damageAmount') + event.amount
    let stage = nbt.getInt('stage')
    let lootList = []
    while (curDamage > StoryWitnessLootList[stage].damage) {
        lootList = lootList.concat(StoryWitnessLootList[stage].lootList)
        stage++
        if (stage >= StoryWitnessLootList.length) break
    }

    if (lootList.length > 0) {
        let source = event.source.actual
        SpawnLootAtLocation(source.level, source.blockPosition(), lootList)
    }

    if (stage >= StoryWitnessLootList.length) {
        stackHandler.setStackInSlot(slotIndex, Item.of('kubejs:story_proof'))
        return
    }
    nbt.putLong('damageAmount', curDamage)
    if (nbt.getInt('stage') != stage) nbt.putInt('stage', stage)
}

