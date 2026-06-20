// priority: 5000
// [merged] 合并自: nbt.js, tags.js, common.js, final_stages.js

// ===== nbt.js =====
const TAG_STRING = 8
const TAG_COMPOUND = 10

// ===== tags.js =====
// const DrygmyBlacklistTag = $TagKey.create($Registries.ENTITY_TYPE, 'ars_nouveau:drygmy_blacklist')
ServerEvents.tags('item', event => {
    // event.add('curios:body', ['supplementaries:quiver'])

    event.add('kubejs:sweets', ['bakery:pudding_slice', 'bakery:chocolate_tart_slice', 'bakery:glowberry_pie_slice', 'bakery:cornet', 'bakery:jam_roll', 'bakery:apple_cupcake', 'bakery:misslilitu_biscuit', 'bakery:waffle', 'bakery:chocolate_truffle', 'bakery:sweetberry_cupcake', 'bakery:apple_pie_slice', 'minecraft:cookie', 'bakery:strawberry_cake_slice', 'minecraft:honey_bottle', 'bakery:chocolate_cake_slice', 'bakery:sweetberry_cake_slice', 'bakery:chocolate_gateau_slice', 'bakery:bundt_cake_slice', 'bakery:linzer_tart_slice', 'bakery:strawberry_cupcake', 'bakery:chocolate_glazed_cookie', 'bakery:sweetberry_glazed_cookie', 'bakery:strawberry_glazed_cookie', 'minecraft:cake', 'bakery:strawberry_cake', 'bakery:sweetberry_cake', 'bakery:chocolate_cake', 'bakery:chocolate_gateau', 'bakery:bundt_cake', 'bakery:linzer_tart', 'bakery:apple_pie', 'bakery:glowberry_tart', 'bakery:chocolate_tart', 'bakery:pudding'])

    event.add('kubejs:cake', ['minecraft:cake', 'bakery:strawberry_cake', 'bakery:sweetberry_cake', 'bakery:chocolate_cake', 'bakery:chocolate_gateau', 'bakery:bundt_cake', 'bakery:linzer_tart', 'bakery:apple_pie', 'bakery:glowberry_tart', 'bakery:chocolate_tart', 'bakery:pudding'])

    event.add('kubejs:beer', ['brewery:beer_wheat', 'brewery:beer_hops', 'brewery:beer_nettle', 'brewery:beer_oat', 'brewery:beer_haley', 'brewery:whiskey_jojannik', 'brewery:whiskey_lilitusinglemalt', 'brewery:whiskey_cristelwalker', 'brewery:beer_barley', 'brewery:whiskey_maggoallan', 'brewery:whiskey_ak', 'brewery:whiskey_carrasconlabel', 'brewery:whiskey_smokey_reverie', 'brewery:whiskey_highland_hearth', 'brewery:whiskey_jamesons_malt', 'kubejs:tasty_beer'])

    // event.add('kubejs:wine', ['minecraft:potion'])

    event.add('kubejs:machine', [])

    // event.add('maa:cannot_mending', ['kubejs:furnace_core', 'kubejs:burning_heart', 'kubejs:energy_bottle_red', 'kubejs:soul_cage', 'kubejs:red_wolf_beard', 'kubejs:raccoon_paw', 'kubejs:boar_nose', 'kubejs:ignited_armour', 'kubejs:pitcher_stomach', 'kubejs:vita_sunflower', 'kubejs:ender_guardian_spine', 'kubejs:harbinger_lung', 'kubejs:void_stomach_pouch'])

    // event.add('maa:immune/lightning', ['kubejs:unstable_matter', 'tetra:thermal_cell'])
    // event.add('maa:immune/explosion', ['tetra:thermal_cell'])
    // event.add('maa:immune/fire', ['tetra:thermal_cell'])
    // event.add('maa:immune/cactus', [])
    event.add('chestcavity:cannot_remove', [])

    event.add('kubejs:human_meat', ['kubejs:appendix', 'kubejs:intestine', 'kubejs:heart', 'kubejs:kidney', 'kubejs:liver', 'kubejs:lung', 'kubejs:muscle', 'kubejs:spleen', 'kubejs:stomach'])
    event.add('kubejs:animal_meat', ['kubejs:animal_appendix', 'kubejs:animal_intestine', 'kubejs:animal_heart', 'kubejs:animal_kidney', 'kubejs:animal_liver', 'kubejs:animal_lung', 'kubejs:animal_muscle', 'kubejs:animal_spleen', 'kubejs:animal_stomach', 'kubejs:rumen', 'kubejs:pig_stomach', 'kubejs:rat_ear', 'kubejs:wilden_heart', 'kubejs:chimera_heart', 'kubejs:cassowary_muscle'])
    event.add('kubejs:dragon_meat', ['kubejs:dragon_blood_heart', 'kubejs:dragon_blood_liver', 'kubejs:dragon_blood_lung', 'kubejs:dragon_blood_muscle', 'kubejs:dragon_blood_intestine', 'kubejs:dragon_blood_stomach'])
    event.add('kubejs:insect_meat', ['kubejs:insect_stomach', 'kubejs:insect_heart', 'kubejs:insect_caeca', 'kubejs:insect_lung', 'kubejs:insect_intestine', 'kubejs:insect_muscle'])
    event.add('kubejs:nether_meat', ['kubejs:fireproof_appendix', 'kubejs:fireproof_intestine', 'kubejs:fireproof_heart', 'kubejs:fireproof_kidney', 'kubejs:fireproof_liver', 'kubejs:fireproof_lung', 'kubejs:fireproof_muscle', 'kubejs:fireproof_spleen', 'kubejs:fireproof_stomach', 'kubejs:hoglin_rumen'])

    event.add('kubejs:nature', ['kubejs:multifaceted_ambrosia'])
    event.add('minecraft:music_discs', ['kubejs:faded_disc', 'kubejs:assumptions_disc'])
})

ServerEvents.tags('entity_type', event => {
    // event.add('ars_nouveau:drygmy_blacklist', [])
})


ServerEvents.tags('block', event => {
    event.add('kubejs:chair_block', [
        'refurbished_furniture:oak_chair', 'refurbished_furniture:spruce_chair', 'refurbished_furniture:birch_chair', 'refurbished_furniture:jungle_chair', 'refurbished_furniture:acacia_chair', 'refurbished_furniture:dark_oak_chair', 'refurbished_furniture:mangrove_chair', 'refurbished_furniture:cherry_chair', 'refurbished_furniture:crimson_chair', 'refurbished_furniture:warped_chair', 'candlelight:crimson_chair', 'candlelight:cherry_chair', 'candlelight:chair', 'candlelight:oak_chair', 'candlelight:dark_oak_chair', 'candlelight:acacia_chair', 'candlelight:jungle_chair', 'candlelight:birch_chair', 'candlelight:spruce_chair', 'candlelight:warped_chair', 'candlelight:mangrove_chair', 'candlelight:bamboo_chair', 'bakery:iron_chair'
    ])
    event.add('kubejs:table_block', [
        '#refurbished_furniture:tuckable', 'candlelight:dark_oak_big_table', 'candlelight:crimson_table', 'candlelight:crimson_big_table', 'candlelight:cherry_table', 'candlelight:cherry_big_table', 'candlelight:bamboo_table', 'candlelight:bamboo_big_table', 'bakery:iron_table', 'brewery:table', 'candlelight:dark_oak_table', 'candlelight:table', 'candlelight:side_table', 'candlelight:oak_table', 'candlelight:oak_big_table', 'candlelight:birch_table', 'candlelight:birch_big_table', 'candlelight:spruce_table', 'candlelight:spruce_big_table', 'candlelight:warped_big_table', 'candlelight:warped_table', 'candlelight:mangrove_big_table', 'candlelight:mangrove_table', 'candlelight:jungle_big_table', 'candlelight:jungle_table', 'candlelight:acacia_big_table', 'candlelight:acacia_table'
    ])
})

ServerEvents.tags('fluid', event => {
    event.add('kubejs:nutrients_fluid', ['productivebees:honey', 'minecraft:milk'])
})

// ===== common.js =====
const FourDirectionOffset = [[0, 1], [0, -1], [1, 0], [-1, 0]]
const EightDirectionOffset = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]]
const FourDiagonalDirectionOffset = [[1, 1], [1, -1], [-1, 1], [-1, -1]]
const EquimentSlotList = ['mainhand', 'offhand', 'feet', 'legs', 'chest', 'head']

const SourceJarMax = 10000

const Entity2EntityHeadItem = {
    'minecraft:zombie': Item.of('minecraft:zombie_head'),
    'minecraft:creeper': Item.of('minecraft:creeper_head'),
    'minecraft:skeleton': Item.of('minecraft:skeleton_head'),
    'minecraft:wither_skeleton': Item.of('minecraft:wither_skeleton_skull'),
    'minecraft:wither': Item.of('minecraft:wither_skeleton_skull'),
    'minecraft:ender_dragon': Item.of('minecraft:dragon_head'),
}

// ===== final_stages.js =====
const FTBFinalTimerStart = 'ftb_final_timer_start'
const FTBFinalTimerPause = 'ftb_final_timer_pause'
const FTBFinalIteration1 = 'ftb_final_iteration_1'
const FTBFinalIteration5 = 'ftb_final_iteration_5'
const FTBFinalIteration10 = 'ftb_final_iteration_10'
const FTBFinalIteration15 = 'ftb_final_iteration_15'
const FTBFinalIteration25 = 'ftb_final_iteration_25'
const FTBFinalIteration30 = 'ftb_final_iteration_30'

const FTBFinalDimRestrict1 = 'ftb_final_dim_restrict_1'
const FTBFinalDimRestrict2 = 'ftb_final_dim_restrict_2'
const FTBFinalDimRestrict3 = 'ftb_final_dim_restrict_3'

