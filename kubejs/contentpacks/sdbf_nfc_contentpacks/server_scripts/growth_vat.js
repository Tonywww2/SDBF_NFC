// priority: 1000
// [migrated+merged] growth_vat 培养缸子系统(需 CustomMachinery 模组)

// ===== nutrients_fluid.js =====
ServerEvents.recipes(event => {
    // event.recipes.create.mixing(
    //     [Fluid.of('kubejs:nutrients_fluid', 250)],
    //     [Item.of('biomancy:nutrient_paste', 4), Fluid.of('minecraft:water', 250)], 20 * 15).heated()
    // event.recipes.create.mixing(
    //     [Fluid.of('kubejs:nutrients_fluid', 1000)],
    //     [Item.of('biomancy:nutrient_paste', 4), Fluid.of('create:honey', 250)], 20 * 8).heated()


    // event.recipes.create.mixing(
    //     [Fluid.of('kubejs:rotten_nutrients_fluid', 250)],
    //     [Item.of('minecraft:rotten_flesh', 8), Fluid.of('minecraft:water', 250)], 20 * 15).heated()
    // event.recipes.create.mixing(
    //     [Fluid.of('kubejs:rotten_nutrients_fluid', 1000)],
    //     [Item.of('minecraft:rotten_flesh', 4), Fluid.of('create:honey', 250)], 20 * 8).heated()

    // event.recipes.create.mixing(
    //     [Fluid.of('kubejs:rose_nutrients_fluid', 250)],
    //     [Item.of('create:rose_quartz', 4), Fluid.of('minecraft:water', 250)], 20 * 15).superheated()
    // event.recipes.create.mixing(
    //     [Fluid.of('kubejs:rose_nutrients_fluid', 250)],
    //     [Item.of('create:polished_rose_quartz', 4), Fluid.of('minecraft:water', 250)], 20 * 15).superheated()
    // event.recipes.create.mixing(
    //     [Fluid.of('kubejs:rose_nutrients_fluid', 1000)],
    //     [Item.of('create:rose_quartz', 4), Fluid.of('create:honey', 250)], 20 * 8).superheated()
    // event.recipes.create.mixing(
    //     [Fluid.of('kubejs:rose_nutrients_fluid', 1000)],
    //     [Item.of('create:polished_rose_quartz', 4), Fluid.of('create:honey', 250)], 20 * 8).superheated()
})

// ===== rose_quartz.js =====
ServerEvents.recipes(event => {
    // event.recipes.create.mixing(
    //     [Fluid.of('kubejs:molten_rose_quartz', 100)],
    //     [Item.of('create:rose_quartz')], 20 * 10).superheated()
    // event.recipes.create.mixing(
    //     [Fluid.of('kubejs:molten_rose_quartz', 100)],
    //     [Item.of('create:polished_rose_quartz')], 20 * 10).heated()
    // event.recipes.create.mixing(
    //     [Fluid.of('kubejs:molten_rose_quartz', 100)],
    //     [Item.of('create:electron_tube')], 20 * 10).heated()
    // event.recipes.create.mixing(
    //     [Fluid.of('kubejs:molten_rose_quartz', 100)],
    //     [Item.of('create:rose_quartz_lamp')], 20 * 10).heated()
    // event.recipes.create.filling(
    //     [Item.of('create:rose_quartz')],
    //     [Fluid.of('kubejs:molten_rose_quartz', 100), Item.of('minecraft:quartz')], 20 * 3)
})

// ===== mutation_config/parasitic_tumor.js =====
const ParasiticTumorMutationConfigModel = new TumorMutationConfigModel()
    .setCondition((machine, fluid, item, slotId, organData) => {
        return organData.getFloat('chestcavity:health') < 0 && Math.random() > 0.5
    })
    .setResult((machine, fluid, item, slotId, organData) => {
        let tumorNbt = new $CompoundTag()
        let targetOrganData = new $CompoundTag()
        let keys = RandomGetN(organData.allKeys.toArray(), 1)
        keys.forEach(key => {
            targetOrganData.putFloat(key, FloorFix(organData.getFloat(key) * 0.3, 2))
        })
        tumorNbt.put('organData', targetOrganData)
        return Item.of('kubejs:parasitic_tumor', tumorNbt)
    })
RegistryTumorMutationConfig(ParasiticTumorMutationConfigModel)

// ===== mutation_config/primal_bone_cage.js =====
const PrimalBoneCageMutationConfigModel = new TumorMutationConfigModel()
    .setCondition((machine, fluid, item, slotId, organData) => {
        return fluid.id == 'kubejs:primal_nutrients_fluid' && organData.getFloat('chestcavity:defense') >= 3 && organData.getFloat('kubejs:primitivization') >= 3
    })
    .setResult((machine, fluid, item, slotId, organData) => Item.of('kubejs:primal_bone_cage'))
RegistryTumorMutationConfig(PrimalBoneCageMutationConfigModel)

// ===== mutation_config/rose_organ.js =====
const RoseQuartzMuscleMutationConfigModel = new TumorMutationConfigModel()
    .setCondition((machine, fluid, item, slotId, organData) => {
        return fluid.id == 'kubejs:rose_nutrients_fluid' && organData.getFloat('kubejs:rosy') >= 1.0 && organData.getFloat('chestcavity:strength') >= 2.0
    })
    .setResult((machine, fluid, item, slotId, organData) => {
        return Item.of('kubejs:rose_quartz_muscle')
    })
RegistryTumorMutationConfig(RoseQuartzMuscleMutationConfigModel)

const RoseQuartzHeartMutationConfigModel = new TumorMutationConfigModel()
    .setCondition((machine, fluid, item, slotId, organData) => {
        return fluid.id == 'kubejs:rose_nutrients_fluid' && organData.getFloat('kubejs:rosy') >= 1.0 && organData.getFloat('chestcavity:health') >= 2.0
    })
    .setResult((machine, fluid, item, slotId, organData) => {
        return Item.of('kubejs:rose_quartz_heart')
    })
RegistryTumorMutationConfig(RoseQuartzHeartMutationConfigModel)

const RoseQuartzRibMutationConfigModel = new TumorMutationConfigModel()
    .setCondition((machine, fluid, item, slotId, organData) => {
        return fluid.id == 'kubejs:rose_nutrients_fluid' && organData.getFloat('kubejs:rosy') >= 1.0 && organData.getFloat('chestcavity:health') >= 2.0
    })
    .setResult((machine, fluid, item, slotId, organData) => {
        return Item.of('kubejs:rose_quartz_rib')
    })
RegistryTumorMutationConfig(RoseQuartzRibMutationConfigModel)


const RoseQuartzLiverMutationConfigModel = new TumorMutationConfigModel()
    .setCondition((machine, fluid, item, slotId, organData) => {
        return fluid.id == 'kubejs:rose_nutrients_fluid' && organData.getFloat('kubejs:rosy') >= 1.0 && organData.getFloat('chestcavity:detoxification') >= 2.0
    })
    .setResult((machine, fluid, item, slotId, organData) => {
        return Item.of('kubejs:rose_quartz_liver')
    })
RegistryTumorMutationConfig(RoseQuartzLiverMutationConfigModel)

const RoseQuartzDialyzerMutationConfigModel = new TumorMutationConfigModel()
    .setCondition((machine, fluid, item, slotId, organData) => {
        return fluid.id == 'kubejs:rose_nutrients_fluid' && organData.getFloat('kubejs:rosy') >= 1.0 && organData.getFloat('chestcavity:filtration') >= 2.0
    })
    .setResult((machine, fluid, item, slotId, organData) => {
        return Item.of('kubejs:rose_quartz_dialyzer')
    })
RegistryTumorMutationConfig(RoseQuartzDialyzerMutationConfigModel)

// ===== mutation_config/rosy_tumor.js =====
const RosyTumorMutationConfigModel = new TumorMutationConfigModel()
    .setCondition((machine, fluid, item, slotId, organData) => {
        return organData.getFloat('kubejs:rosy') >= 1.0 && Math.random() > 0.5
    })
    .setResult((machine, fluid, item, slotId, organData) => {
        let tumorNbt = new $CompoundTag()
        let targetOrganData = new $CompoundTag()
        organData.tags.forEach((key, value) => {
            targetOrganData.putFloat(key, key == 'kubejs:rosy' ? value.getAsFloat() : value.getAsFloat() * 2)
        })
        tumorNbt.put('organData', targetOrganData)
        return Item.of('kubejs:rosy_tumor', tumorNbt)
    })
RegistryTumorMutationConfig(RosyTumorMutationConfigModel)

// ===== nutrients_fluid_config/acid.js =====
const AcidOrganDataWeightModel = new WeightRandomModel()
    .addWeightRandom({ name: 'chestcavity:defense', mean: 1, sigma: 1 }, 15)
    .addWeightRandom({ name: 'chestcavity:strength', mean: 0, sigma: 1 }, 5)

const AcidPotentialOrganDataWeightModel = new WeightRandomModel()
    .addWeightRandom({ name: 'chestcavity:nerves', mean: -1, sigma: 0.5 }, 10)
    .addWeightRandom({ name: 'chestcavity:endurance', mean: 1, sigma: 0.5 }, 10)
    .addWeightRandom({ name: 'chestcavity:breath_recovery', mean: -1, sigma: 0.5 }, 10)
    .addWeightRandom({ name: 'chestcavity:breath_capacity', mean: -1, sigma: 0.5 }, 10)
    .addWeightRandom({ name: 'chestcavity:nutrition', mean: -1, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:digestion', mean: -1, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:metabolism', mean: -1, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:fire_resistant', mean: 1, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:knockback_resistant', mean: 1, sigma: 0.5 }, 5)

RegistryUnformedTumorFluidConfig(
    new UnformedTumorFluidConfigModel('biomancy:acid')
        .setOrganDataModel(AcidOrganDataWeightModel)
        .setPotentialOrganDataModel(AcidPotentialOrganDataWeightModel)
        .setOrganDataCount(1)
        .setPotentialOrganDataCount(3)
)

// ===== nutrients_fluid_config/honey.js =====
const HoneyOrganDataWeightModel = new WeightRandomModel()
    .addWeightRandom({ name: 'chestcavity:health', mean: 1, sigma: 1 }, 30)
    .addWeightRandom({ name: 'chestcavity:nutrition', mean: 1, sigma: 1 }, 15)
    .addWeightRandom({ name: 'chestcavity:digestion', mean: 1, sigma: 1 }, 15)
    .addWeightRandom({ name: 'chestcavity:metabolism', mean: 1, sigma: 1 }, 15)
    .addWeightRandom({ name: 'chestcavity:nerves', mean: -1, sigma: 0.5 }, 10)
    .addWeightRandom({ name: 'chestcavity:strength', mean: -1, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:knockback_resistant', mean: -2, sigma: 1 }, 5)
    .addWeightRandom({ name: 'chestcavity:fire_resistant', mean: -2, sigma: 1 }, 5)
    .addWeightRandom({ name: 'chestcavity:detoxification', mean: -1, sigma: 1 }, 5)

const HoneyPotentialOrganDataWeightModel = new WeightRandomModel()
    .addWeightRandom({ name: 'kubejs:extreme_fitness', mean: 1, sigma: 0.5 }, 15)
    .addWeightRandom({ name: 'kubejs:extreme_strength', mean: -1, sigma: 0.5 }, 10)
    .addWeightRandom({ name: 'chestcavity:filtration', mean: -1, sigma: 1 }, 5)

RegistryUnformedTumorFluidConfig(
    new UnformedTumorFluidConfigModel('productivebees:honey')
        .setOrganDataModel(HoneyOrganDataWeightModel)
        .setPotentialOrganDataModel(HoneyPotentialOrganDataWeightModel)
        .setOrganDataCount(2)
        .setPotentialOrganDataCount(1)
)

// ===== nutrients_fluid_config/milk.js =====
const MilkOrganDataWeightModel = new WeightRandomModel()
    .addWeightRandom({ name: 'chestcavity:detoxification', mean: 1, sigma: 1 }, 15)
    .addWeightRandom({ name: 'chestcavity:filtration', mean: 1, sigma: 1 }, 15)
    .addWeightRandom({ name: 'chestcavity:health', mean: -1, sigma: 0.5 }, 15)

const MilkPotentialOrganDataWeightModel = new WeightRandomModel()
    .addWeightRandom({ name: 'chestcavity:defense', mean: 1, sigma: 1.5 }, 30)
    .addWeightRandom({ name: 'chestcavity:strength', mean: 0, sigma: 1 }, 10)
    .addWeightRandom({ name: 'chestcavity:nerves', mean: 0, sigma: 0.5 }, 10)
    .addWeightRandom({ name: 'chestcavity:endurance', mean: 0, sigma: 0.5 }, 10)
    .addWeightRandom({ name: 'chestcavity:breath_recovery', mean: 0, sigma: 0.5 }, 10)
    .addWeightRandom({ name: 'chestcavity:breath_capacity', mean: 0, sigma: 0.5 }, 10)
    .addWeightRandom({ name: 'chestcavity:nutrition', mean: 0, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:digestion', mean: 0, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:metabolism', mean: 0, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:fire_resistant', mean: 0, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:knockback_resistant', mean: 0, sigma: 0.5 }, 5)

RegistryUnformedTumorFluidConfig(
    new UnformedTumorFluidConfigModel('minecraft:milk')
        .setOrganDataModel(MilkOrganDataWeightModel)
        .setPotentialOrganDataModel(MilkPotentialOrganDataWeightModel)
        .setOrganDataCount(1)
        .setPotentialOrganDataCount(1)
)

// ===== nutrients_fluid_config/nutrients_fluid.js =====
RegistryUnformedTumorFluidConfig(
    new UnformedTumorFluidConfigModel('kubejs:nutrients_fluid')
)

// ===== nutrients_fluid_config/primal_nutrients_fluid.js =====
const PrimalNutrientsOrganDataWeightModel = new WeightRandomModel()
    .addWeightRandom({ name: 'chestcavity:health', mean: -1, sigma: 0.5 }, 20)
    .addWeightRandom({ name: 'chestcavity:nutrition', mean: -1, sigma: 0.5 }, 15)
    .addWeightRandom({ name: 'chestcavity:digestion', mean: -1, sigma: 0.5 }, 15)
    .addWeightRandom({ name: 'chestcavity:metabolism', mean: -1, sigma: 0.5 }, 15)
    .addWeightRandom({ name: 'chestcavity:nerves', mean: -1, sigma: 0.5 }, 10)
    .addWeightRandom({ name: 'chestcavity:strength', mean: -1, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:knockback_resistant', mean: -1, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:fire_resistant', mean: -1, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:detoxification', mean: -1, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:filtration', mean: -1, sigma: 0.5 }, 5)

const PrimalNutrientsPotentialOrganDataWeightModel = new WeightRandomModel()
    .addWeightRandom({ name: 'kubejs:primitivization', mean: 1, sigma: 1.5 }, 15)
    .addWeightRandom({ name: 'kubejs:extreme_strength', mean: -1, sigma: 0.5 }, 10)
    .addWeightRandom({ name: 'kubejs:extreme_fitness', mean: -1, sigma: 0.5 }, 15)


RegistryUnformedTumorFluidConfig(
    new UnformedTumorFluidConfigModel('kubejs:primal_nutrients_fluid')
        .setOrganDataModel(PrimalNutrientsOrganDataWeightModel)
        .setPotentialOrganDataModel(PrimalNutrientsPotentialOrganDataWeightModel)
        .setOrganDataCount(3)
        .setPotentialOrganDataCount(1)
)

// ===== nutrients_fluid_config/rose_nutrients_fluid.js =====
const RoseNutrientsOrganDataWeightModel = new WeightRandomModel()
    .addWeightRandom({ name: 'kubejs:rosy', mean: 0.2, sigma: 0.5 }, 5)

const RoseNutrientsPotentialOrganDataWeightModel = new WeightRandomModel()
    .addWeightRandom({ name: 'chestcavity:defense', mean: 0.5, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:strength', mean: 0.5, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:health', mean: 0.5, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:nerves', mean: 0.5, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:endurance', mean: 0.5, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:breath_recovery', mean: 0.5, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:breath_capacity', mean: 0.5, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:detoxification', mean: 0.5, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:filtration', mean: 0.5, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:nutrition', mean: 0.5, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:digestion', mean: 0.5, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:metabolism', mean: 0.5, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:fire_resistant', mean: 0.5, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:knockback_resistant', mean: 0.5, sigma: 0.5 }, 5)

RegistryUnformedTumorFluidConfig(
    new UnformedTumorFluidConfigModel('kubejs:rose_nutrients_fluid')
        .setOrganDataModel(RoseNutrientsOrganDataWeightModel)
        .setPotentialOrganDataModel(RoseNutrientsPotentialOrganDataWeightModel)
        .setOrganDataCount(1)
        .setPotentialOrganDataCount(1)
)

// ===== nutrients_fluid_config/rotten_nutrients_fluid.js =====
const RottenNutrientsOrganDataWeightModel = new WeightRandomModel()
    .addWeightRandom({ name: 'kubejs:extreme_strength', mean: 1, sigma: 1 }, 5)
    .addWeightRandom({ name: 'chestcavity:strength', mean: 2, sigma: 1 }, 20)

const RottenNutrientsPotentialOrganDataWeightModel = new WeightRandomModel()
    .addWeightRandom({ name: 'chestcavity:nerves', mean: -1, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:health', mean: -1, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:fire_resistant', mean: -1, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:knockback_resistant', mean: 1, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:metabolism', mean: 0.5, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:detoxification', mean: 0.5, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:filtration', mean: -1, sigma: 0.5 }, 20)
    .addWeightRandom({ name: 'kubejs:crit_damage', mean: 0.5, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'kubejs:crit_chance', mean: 0.5, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:water_breath', mean: 1, sigma: 0.5 }, 5)

RegistryUnformedTumorFluidConfig(
    new UnformedTumorFluidConfigModel('kubejs:rotten_nutrients_fluid')
        .setOrganDataModel(RottenNutrientsOrganDataWeightModel)
        .setPotentialOrganDataModel(RottenNutrientsPotentialOrganDataWeightModel)
        .setOrganDataCount(1)
        .setPotentialOrganDataCount(2)
)

// ===== util.js =====
/**
 * 未成型肿瘤生长逻辑
 * @param {CustomMachine} machine 
 * @param {Internal.ItemStack} item 
 * @param {String} slotId 
 */
function UnformedTumorGrowth(machine, item, slotId) {
    if (!item.is('kubejs:unformed_tumor')) return
    let unformedTumorNbt = item.getOrCreateTag()
    let tumorNbt = new $CompoundTag()
    let organData = new $CompoundTag()
    if (unformedTumorNbt.contains('organData')) {
        organData = organData.merge(unformedTumorNbt.getCompound('organData'))
    }
    if (unformedTumorNbt.contains('potentialOrganData')) {
        organData = organData.merge(unformedTumorNbt.getCompound('potentialOrganData'))
    }
    tumorNbt.put('organData', organData)
    machine.setItemStored(slotId, Item.of('kubejs:tumor', tumorNbt))
}

/**
 * 
 * @param {CustomMachine} machine 
 * @param {Internal.FluidStackJS} fluid 
 * @param {String} slotId 
 */
function SpawnUnformedTumor(machine, fluid, slotId) {
    if (Math.random() > 0.5) return
    let fluidId = String(fluid.id)
    if (!UnformedTumorFluidConfigMap.has(fluidId)) return
    let organDataConfig = UnformedTumorFluidConfigMap.get(fluidId)
    let organData = organDataConfig.genOrganData()
    let potentialOrganData = organDataConfig.genPotentialOrganData()

    let nbt = new $CompoundTag()
    nbt.put('potentialOrganData', potentialOrganData)
    nbt.put('organData', organData)

    machine.setItemStored(slotId, Item.of('kubejs:unformed_tumor', nbt))
}



/**
 * 未成型肿瘤变异生长逻辑
 * @param {CustomMachine} machine 
 * @param {Internal.FluidStackJS} fluid
 * @param {Internal.ItemStack} item 
 * @param {String} slotId 
 */
function UnformedTumorMutationGrowth(machine, fluid, item, slotId) {
    if (!item.is('kubejs:unformed_tumor')) return
    let unformedTumorNbt = item.getOrCreateTag()
    let tumorNbt = new $CompoundTag()
    let organData = new $CompoundTag()
    if (unformedTumorNbt.contains('organData')) {
        organData = organData.merge(unformedTumorNbt.getCompound('organData'))
    }
    if (unformedTumorNbt.contains('potentialOrganData')) {
        organData = organData.merge(unformedTumorNbt.getCompound('potentialOrganData'))
    }

    tumorNbt.put('organData', organData)
    let outputItem = Item.of('kubejs:tumor', tumorNbt)
    for (let config of TumorMutationConfigList) {
        if (config.isMatch(machine, fluid, item, slotId, organData)) {
            outputItem = config.apply(machine, fluid, item, slotId, organData)
            break
        }
    }
    machine.setItemStored(slotId, outputItem)
}

/**
 * 已成型肿瘤增殖
 * @param {CustomMachine} machine 
 * @param {Internal.FluidStackJS} fluid
 * @param {Internal.ItemStack} item 
 * @param {String} slotId 
 * @returns {Internal.ItemStack[]}
 */
function ProliferateTumor(machine, fluid, item, slotId) {
    if (!item.hasTag('kubejs:tumor')) return
    let random = Math.random()
    if (!item.hasNBT()) return
    if (random > 0.75) {
        let nbt = item.getNbt()
        let organData = nbt.getCompound('organData')
        let potentialOrganData = nbt.getCompound('potentialOrganData')
        if (Math.random() > (organData.size() / (organData.size() + potentialOrganData.size()))) {
            let randomKey = RandomGet(potentialOrganData.allKeys.toArray())
            let randomValue = FloorFix(potentialOrganData.getFloat(randomKey) * 0.8, 2)
            potentialOrganData.putFloat(randomKey, randomValue)
        } else {
            let randomKey = RandomGet(organData.allKeys.toArray())
            let randomValue = FloorFix(organData.getFloat(randomKey) * 0.8, 2)
            organData.putFloat(randomKey, randomValue)
        }
    } else if (random < 0.5) {
        return []
    }
    let targetItem = item.copy()
    return [targetItem]
}

/**
 * 混合培养基
 * @param {CustomMachine} machine 
 * @param {Internal.FluidStackJS} fluid 
 * @param {{item: Internal.ItemStack, slotId: String}[]} unformedTumorList 
 * @returns 
 */
function MixUnformedTumorAttri(machine, fluid, unformedTumorList) {
    if (unformedTumorList.length == 0) return
    /**@type {{score: String, value: Float}[]} */
    let allOrganAttri = []
    unformedTumorList.forEach(unformedTumor => {
        let pNbt = unformedTumor.item.getOrCreateTag()
        pNbt.getCompound('organData').tags.forEach((key, value) => {
            allOrganAttri.push({ score: key, value: value.getAsFloat() })
        })
        pNbt.getCompound('potentialOrganData').tags.forEach((key, value) => {
            allOrganAttri.push({ score: key, value: value.getAsFloat() })
        })
    })
    allOrganAttri = Shuffle(allOrganAttri)
    unformedTumorList.forEach(unformedTumor => {
        let pNbt = unformedTumor.item.getOrCreateTag()
        if (pNbt.contains('organData')) {
            let organData = pNbt.getCompound('organData')
            let organDataSize = organData.size()
            let newOrganData = new $CompoundTag()
            allOrganAttri.slice(0, organDataSize).forEach(attri => {
                newOrganData.putFloat(attri.score, attri.value)
            })
            allOrganAttri = allOrganAttri.slice(organDataSize)
            pNbt.put('organData', newOrganData)
        }
        if (pNbt.contains('potentialOrganData')) {
            let potentialOrganData = pNbt.getCompound('potentialOrganData')
            let potentialOrganDataSize = potentialOrganData.size()
            let newPotentialOrganData = new $CompoundTag()
            allOrganAttri.slice(0, potentialOrganDataSize).forEach(attri => {
                newPotentialOrganData.putFloat(attri.score, attri.value)
            })
            allOrganAttri = allOrganAttri.slice(potentialOrganDataSize)
            pNbt.put('potentialOrganData', newPotentialOrganData)
        }
        machine.setItemStored(unformedTumor.slotId, Item.of('kubejs:unformed_tumor', pNbt))
    })
}

// ===== growth_vat.js =====
/**
 * @param {Player} owner 
 */
function IncrGrowthVatRuns(owner) {
    if (!owner) return
    owner.stats.add(global.STAT_GROWTH_VAT_RUNS, 1)
}

const GrowthVatOutputSlotsList = ['slot_1', 'slot_2', 'slot_3', 'slot_4', 'slot_5', 'slot_6']
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine('kubejs:growth_vat', 200)
        .requireFunctionOnEnd(ctx => {
            const machine = ctx.getMachine()
            GrowthVatOutputSlotsList.forEach(pSlotId => {
                let item = machine.getItemStored(pSlotId)
                if (!item || item.isEmpty()) return
                UnformedTumorGrowth(machine, item, pSlotId)
            })
            IncrGrowthVatRuns(machine.owner)
            return ctx.success()
        })
        .requireItem('kubejs:simple_culture_medium', 'input_slot')
        .requireFluidTag('kubejs:nutrients_fluid', 250, 'nutrient_solution')

    event.recipes.custommachinery.custom_machine('kubejs:growth_vat', 200)
        .requireFunctionOnEnd(ctx => {
            const machine = ctx.getMachine()
            let fluid = machine.getFluidStored('nutrient_solution')
            GrowthVatOutputSlotsList.forEach(pSlotId => {
                let item = machine.getItemStored(pSlotId)
                if (!item || item.isEmpty()) {
                    SpawnUnformedTumor(machine, fluid, pSlotId)
                } else {
                    UnformedTumorGrowth(machine, item, pSlotId)
                }
            })
            IncrGrowthVatRuns(machine.owner)
            return ctx.success()
        })
        .requireItem('kubejs:culture_medium', 'input_slot')
        .requireFluidTag('kubejs:nutrients_fluid', 250, 'nutrient_solution')


    event.recipes.custommachinery.custom_machine('kubejs:growth_vat', 200)
        .requireFunctionOnEnd(ctx => {
            const machine = ctx.getMachine()
            let fluid = machine.getFluidStored('nutrient_solution')
            GrowthVatOutputSlotsList.forEach(pSlotId => {
                let item = machine.getItemStored(pSlotId)
                if (item && !item.isEmpty()) {
                    UnformedTumorMutationGrowth(machine, fluid, item, pSlotId)
                }
            })
            IncrGrowthVatRuns(machine.owner)
            return ctx.success()
        })
        .requireItem('kubejs:mutation_culture_medium', 'input_slot')
        .requireFluidTag('kubejs:nutrients_fluid', 250, 'nutrient_solution')

    event.recipes.custommachinery.custom_machine('kubejs:growth_vat', 200)
        .requireFunctionOnEnd(ctx => {
            const machine = ctx.getMachine()
            let fluid = machine.getFluidStored('nutrient_solution')
            let outputItems = []
            let emptySlots = []
            GrowthVatOutputSlotsList.forEach(pSlotId => {
                let item = machine.getItemStored(pSlotId)
                if (!item || item.isEmpty()) {
                    emptySlots.push(pSlotId)
                } else {
                    outputItems = outputItems.concat(ProliferateTumor(machine, fluid, item, pSlotId))
                }
            })
            if (outputItems.length > emptySlots.length) {
                outputItems = outputItems.slice(0, emptySlots.length)
            }
            emptySlots.forEach((pSlotId, index) => {
                machine.setItemStored(pSlotId, outputItems[index])
            })
            IncrGrowthVatRuns(machine.owner)
            return ctx.success()
        })
        .requireItem('kubejs:proliferation_culture_medium', 'input_slot')
        .requireFluidTag('kubejs:nutrients_fluid', 250, 'nutrient_solution')


    event.recipes.custommachinery.custom_machine('kubejs:growth_vat', 200)
        .requireFunctionOnEnd(ctx => {
            const machine = ctx.getMachine()
            let fluid = machine.getFluidStored('nutrient_solution')
            let unformedTumorList = []
            GrowthVatOutputSlotsList.forEach(pSlotId => {
                let item = machine.getItemStored(pSlotId)
                if (!item || item.isEmpty()) return
                if (!item.is('kubejs:unformed_tumor')) return
                unformedTumorList.push({ item: item, slotId: pSlotId })
            })
            MixUnformedTumorAttri(machine, fluid, unformedTumorList)
            IncrGrowthVatRuns(machine.owner)
            return ctx.success()
        })
        .requireItem('kubejs:mixed_culture_medium', 'input_slot')
        .requireFluidTag('kubejs:nutrients_fluid', 250, 'nutrient_solution')
})

