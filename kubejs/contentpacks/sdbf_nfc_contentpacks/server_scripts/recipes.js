// priority: 1000
// [merged] recipes/biomancy/bio_brewing.js, recipes/biomancy/bio_forging.js, recipes/biomancy/decomposing.js, recipes/biomancy/organ_purify.js, recipes/biomancy/bloomberry_right.js, recipes/biomancy/primal_organ_bloom.js

// ===== bio_brewing.js =====
ServerEvents.recipes(event => {
    event.shapeless('kubejs:jar_of_mystery', ['minecraft:redstone', 'minecraft:nether_wart', 'minecraft:fermented_spider_eye', 'minecraft:glowstone_dust', 'kubejs:jar_of_vacuum'])

    event.shapeless('kubejs:simple_culture_medium', ['minecraft:bread', 'minecraft:ghast_tear', 'minecraft:slime_ball', 'minecraft:rotten_flesh', 'minecraft:glass_bottle'])
    event.shapeless('kubejs:culture_medium', ['minecraft:bread', 'minecraft:ghast_tear', 'minecraft:slime_ball', 'minecraft:glow_berries', 'minecraft:glass_bottle'])

    event.shapeless('kubejs:mutation_culture_medium', ['minecraft:redstone', 'minecraft:spider_eye', 'minecraft:blaze_powder', 'minecraft:wither_rose', 'kubejs:culture_medium'])
    event.shapeless('kubejs:mixed_culture_medium', ['minecraft:redstone', 'minecraft:golden_apple', 'minecraft:amethyst_shard', 'minecraft:glowstone_dust', 'kubejs:culture_medium'])
    event.shapeless('kubejs:proliferation_culture_medium', ['minecraft:redstone', 'minecraft:fermented_spider_eye', 'minecraft:golden_carrot', 'minecraft:golden_apple', 'kubejs:culture_medium'])
})

// ===== bio_forging.js =====
ServerEvents.recipes(event => {
    event.shapeless(Item.of('kubejs:gluten_muscle'), [Ingredient.of('#farm_and_charm:dough', 4), Ingredient.of('#kubejs:muscle'), Item.of('minecraft:glistering_melon_slice')])
    event.shapeless(Item.of('kubejs:baguette_bone'), [Item.of('bakery:baguette'), Ingredient.of('#kubejs:bone'), Item.of('minecraft:glistering_melon_slice')])
    event.shapeless(Item.of('kubejs:sweet_heart'), [Item.of('minecraft:sugar', 8), Ingredient.of('#kubejs:heart'), Item.of('minecraft:glistering_melon_slice')])
    event.shapeless(Item.of('kubejs:mashed_potato_pancreas'), [Item.of('brewery:mashed_potatoes', 8), Item.of('kubejs:taste_worm_powder'), Item.of('minecraft:glistering_melon_slice'), Item.of('minecraft:beef', 4)])
    event.shapeless(Item.of('kubejs:living_beef_wellington'), [Item.of('candlelight:beef_wellington', 8), Item.of('kubejs:taste_worm_powder'), Item.of('minecraft:glistering_melon_slice'), Item.of('minecraft:beef', 4)])

    event.shapeless(Item.of('kubejs:small_acid_tank'), [Item.of('minecraft:pufferfish', 3), Item.of('aether:ambrosium_shard', 2), Item.of('bakery:jar', 1), Item.of('nuclearcraft:sulfuric_acid_bucket', 3)])

    event.shapeless(Item.of('kubejs:empty_injection'), [Item.of('minecraft:string', 1), Item.of('minecraft:flint', 1), Item.of('minecraft:diamond', 1)])

    // event.remove({ output: 'modulargolems:metal_golem_template' })
    // event.shapeless(Item.of('modulargolems:metal_golem_template'), [Item.of('minecraft:clay_ball', 4), Item.of('minecraft:rotten_flesh', 1), Ingredient.of('#forge:ingots/copper', 1)])

    event.shapeless(Item.of('kubejs:player_25_injection'), [Item.of('kubejs:player_21_injection', 1), Item.of('kubejs:inactivated_neuron_tumor', 1), Item.of('minecraft:glistering_melon_slice', 1)])

    event.shapeless(Item.of('kubejs:player_27_injection'), [Item.of('kubejs:player_25_injection', 1), Item.of('minecraft:glow_berries', 1), Item.of('minecraft:blaze_powder', 1)])

    event.shapeless(Item.of('kubejs:growth_vat'), [Item.of('minecraft:iron_block', 1), Item.of('kubejs:small_acid_tank', 2), Item.of('minecraft:green_stained_glass', 6)])

    // event.shapeless(Item.of('biomancy:primal_orifice'), [Item.of('minecraft:rotten_flesh', 1), Item.of('minecraft:pufferfish', 4)])

    event.shapeless(Item.of('chestcavity:surgical_box', '{Inventory:[],InventoryType:"kubejs:cc_inventory_types/player_17",Size:17}'), [Item.of('minecraft:glistering_melon_slice', 1), Item.of('minecraft:beef', 4), Item.of('chestcavity:chest_opener', 1), Item.of('minecraft:iron_ingot', 3)])

    event.shapeless(Item.of('kubejs:tasty_gland'), [Item.of('minecraft:glistering_melon_slice', 1), Item.of('kubejs:worm_of_taste', 1), Item.of('minecraft:spider_eye', 1)])

    event.shapeless(Item.of('kubejs:blood_extractor'), [Item.of('minecraft:string', 1), Item.of('minecraft:flint', 1), Item.of('minecraft:ender_eye', 1)])

    event.shapeless(Item.of('kubejs:void_stomach_pouch'), [Item.of('minecraft:blaze_powder', 1), Item.of('minecraft:chorus_fruit', 1), Item.of('kubejs:rumen', 1)])

    event.shapeless(Item.of('kubejs:animted_soul'), [Ingredient.of('#forge:heads', 1), Item.of('kubejs:silverfish_gland', 1), Item.of('minecraft:glowstone_dust', 1)])

    event.shapeless(Item.of('kubejs:gula_beacon'), [Item.of('kubejs:deserted_gula_worm_nest'), Item.of('minecraft:glow_berries'), Item.of('kubejs:human_meat_sausage'), Item.of('minecraft:target')])
    event.shapeless(Item.of('kubejs:primal_heart'), [Item.of('minecraft:diamond'), 'twilightforest:maze_map_focus'])
})

// ===== decomposing.js =====
ServerEvents.recipes(event => {
    // event.remove({ id: 'biomancy:decomposing/bloomlight' })
})

// ===== organ_purify.js =====
BlockEvents.rightClicked(event => {
    const player = event.player
    if (!player) return
    const block = event.block
    const level = event.level
    const item = event.item

    // 仅含水方块且当前含水时执行
    const blockState = block.blockState
    if (!blockState.hasProperty(BlockProperties.WATERLOGGED)) return
    if (!blockState.getValue(BlockProperties.WATERLOGGED)) return

    // 检查玩家手持器官物品
    if (!item.hasTag('kubejs:organ') || !item.hasNBT()) return
    let nbt = item.getNbt()
    if (!nbt.contains('chestcavity:organ_compatibility')) return

    // 净化：移除器官兼容性标签，消耗水
    nbt.remove('chestcavity:organ_compatibility')
    level.setBlockAndUpdate(block.pos, blockState.setValue(BlockProperties.WATERLOGGED, false))

    // 反馈
    level.playSound(null, block.pos, 'block.brewing_stand.brew', $SoundSource.BLOCKS, 1, 1)
    event.cancel()
})

// ===== bloomberry_right.js =====
// BlockEvents.rightClicked('biomancy:malignant_flesh', event => {
//     const level = event.level
//     const item = event.item
//     if (!item.is('biomancy:bloomberry')) return
//     const player = event.player
//     if (!player) return
//     // if (!AStages.serverAndPlayerHasStage('ftb_primal_bloom_plant', player)) return
//     const facing = event.facing
//     const block = event.block
//     const pos = block.pos
//     let targetPos = pos.relative(facing)

//     let targetBlockState = Block.id('biomancy:primal_bloom').getBlockState().setValue(BlockProperties.FACING, facing)
//     if (level.getFluidState(targetPos).getType().isSame('minecraft:water')) {
//         targetBlockState = targetBlockState.setValue(BlockProperties.WATERLOGGED, $Boolean.TRUE)
//     }
//     level.setBlockAndUpdate(targetPos, targetBlockState)
//     level.playSound(null, targetPos.getX(), targetPos.getY(), targetPos.getZ(), 'biomancy:flesh_block.place', player.getSoundSource(), 1, 1)
//     item.shrink(1)
// })

// // ===== primal_organ_bloom.js =====
// BiomancyEvents.onOrganBloomHarvest(event => {
//     const blockState = event.blockState
//     const block = blockState.block
//     const level = event.level
//     const player = event.player
//     const pos = event.pos
//     block.popResource(level, pos, Item.of('kubejs:primal_heart'))
//     player.attack(level.damageSources().sweetBerryBush(), 1)
// })


// ##### 迁移:器官合成配方 (bio_forging / 工作台注射) #####

// ===== gula_injection.js =====
// AStages.addRestrictionForRecipe('gula/gula_injection_recipe', 'ftb_gula_injection_recipe', 'minecraft:crafting', 'kubejs:gula_injection_manual_only')

ServerEvents.recipes(event => {
    event.shapeless('kubejs:gula_injection', [
        'minecraft:bread', 'kubejs:multifaceted_ambrosia', 'minecraft:bread',
        'kubejs:living_beef_wellington', 'kubejs:player_27_injection', 'kubejs:mashed_potato_pancreas',
        'kubejs:deserted_gula_worm_nest', 'kubejs:deserted_gula_worm_nest', 'kubejs:deserted_gula_worm_nest'
    ]).id('kubejs:gula_injection_manual_only')
})

// ===== revolution_machine_injection.js =====
// AStages.addRestrictionForRecipe('revolution_machine/revolution_machine_injection_recipe', 'ftb_revolution_machine_injection_recipe', 'minecraft:crafting', 'kubejs:revolution_machine_injection_manual_only')

ServerEvents.recipes(event => {
    event.shapeless('kubejs:revolution_machine_injection', [
        'kubejs:revolution_bell', 'kubejs:immortal_volcanic_rock', 'cataclysm:ignitium_ingot',
        'kubejs:revolution_cable', 'kubejs:player_27_injection', 'kubejs:revolution_cable',
        'minecraft:iron_ingot'
    ]).id('kubejs:revolution_machine_injection_manual_only')
})

// ===== rose_injection.js =====
// AStages.addRestrictionForRecipe('rose/rose_injection_recipe', 'ftb_rose_injection_recipe', 'minecraft:crafting', 'kubejs:rose_injection_manual_only')

ServerEvents.recipes(event => {
    event.shapeless('kubejs:rose_injection', [
        'kubejs:rose_quartz_muscle', 'kubejs:rose_quartz_heart', 'kubejs:rose_quartz_rib',
        'candlelight:rose', 'kubejs:player_27_injection', 'candlelight:rose'
    ]).id('kubejs:rose_injection_manual_only')
})
