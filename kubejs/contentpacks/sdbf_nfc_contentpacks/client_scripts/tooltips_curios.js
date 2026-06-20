// priority: 900
// [merged] curios.js, eternal_oath.js, bravery_witness.js, knowledge_witness.js, perseverance_witness.js, story_witness.js

// ===== curios.js =====
ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:eternal_miracle')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.eternal_miracle.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.eternal_miracle.shift.1'))
    .addShift(Text.translatable('tooltips.kubejs.eternal_miracle.shift.2', FrozenHover))
    .addShift((text, item) => {
        let nbt = item.getOrCreateTag()
        let value = nbt.getInt('value')
        return [Text.translatable('tooltips.kubejs.eternal_miracle.shift.3', Text.yellow(value.toFixed(0)))]
    })
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:incandescent_miracle')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.incandescent_miracle.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.incandescent_miracle.shift.1'))
    .addShift(Text.translatable('tooltips.kubejs.incandescent_miracle.shift.2'))
    .addShift((text, item) => {
        let nbt = item.getOrCreateTag()
        let value = nbt.getInt('value')
        return [Text.translatable('tooltips.kubejs.incandescent_miracle.shift.3', Text.yellow(value.toFixed(0)))]
    })
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:primal_miracle')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.primal_miracle.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.primal_miracle.shift.1'))
    .addShift(Text.translatable('tooltips.kubejs.primal_miracle.shift.2'))
    .addShift((text, item) => {
        let nbt = item.getOrCreateTag()
        let value = nbt.getInt('value')
        return [Text.translatable('tooltips.kubejs.primal_miracle.shift.3', Text.yellow(value.toFixed(0)))]
    })
)

// ===== eternal_oath.js =====
ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:eternal_oath')
    .setShiftDescription(Text.translatable('tooltips.kubejs.oath.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.oath.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.eternal_oath.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.eternal_oath.shift.1'))
)

// ===== bravery_witness.js =====
const BraveryWitnessEachItemDamage = 10000
ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:bravery_witness')
    .setShiftDescription(Text.translatable('tooltips.kubejs.witness.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.witness.shift_holding.1'))
    .setAltDescription(Text.translatable('tooltips.kubejs.witness.alt.1'))
    .setAltHoldingDescription(Text.translatable('tooltips.kubejs.witness.alt_holding.1'))
    .addShift(Text.translatable('tooltips.kubejs.bravery_witness.shift.1'))
    .addShift(Text.translatable('tooltips.kubejs.bravery_witness.shift.2'))
    .addAlt((text, item) => {
        const nbt = item.getOrCreateTag()
        const textList = [
            Text.translatable('tooltips.kubejs.bravery_witness.alt.1', nbt.getLong('damageAmount').toFixed(0) + ' / ' + BraveryWitnessEachItemDamage.toFixed(0)).gold(),
            Text.translatable('tooltips.kubejs.bravery_witness.alt.2', nbt.getInt('itemCounts').toFixed(0)).darkGray()
        ]
        return textList
    })
)

// ===== knowledge_witness.js =====
const KnowledgeWitnessEachLevelDamage = 10000
ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:knowledge_witness')
    .setShiftDescription(Text.translatable('tooltips.kubejs.witness.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.witness.shift_holding.1'))
    .setAltDescription(Text.translatable('tooltips.kubejs.witness.alt.1'))
    .setAltHoldingDescription(Text.translatable('tooltips.kubejs.witness.alt_holding.1'))
    .addShift(Text.translatable('tooltips.kubejs.knowledge_witness.shift.1'))
    .addShift(Text.translatable('tooltips.kubejs.knowledge_witness.shift.2'))
    .addAlt((text, item) => {
        const nbt = item.getOrCreateTag()
        const textList = [
            Text.translatable('tooltips.kubejs.knowledge_witness.alt.1', nbt.getLong('damageAmount').toFixed(0) + ' / ' + KnowledgeWitnessEachLevelDamage.toFixed(0)).gold(),
            Text.translatable('tooltips.kubejs.knowledge_witness.alt.2', nbt.getInt('expCount').toFixed(0)).darkGray()
        ]
        return textList
    })
)

// ===== perseverance_witness.js =====
// const PerseveranceWitnessEachSlotSizeDamage = 10000
// ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:perseverance_witness')
    // .setShiftDescription(Text.translatable('tooltips.kubejs.witness.shift.1'))
    // .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.witness.shift_holding.1'))
    // .setAltDescription(Text.translatable('tooltips.kubejs.witness.alt.1'))
    // .setAltHoldingDescription(Text.translatable('tooltips.kubejs.witness.alt_holding.1'))
    // .addShift(Text.translatable('tooltips.kubejs.perseverance_witness.shift.1'))
    // .addShift(Text.translatable('tooltips.kubejs.perseverance_witness.shift.2'))
    // .addAlt((text, item) => {
        // const nbt = item.getOrCreateTag()
        // const textList = [
            // Text.translatable('tooltips.kubejs.perseverance_witness.alt.1', nbt.getLong('damageAmount').toFixed(0) + ' / ' + PerseveranceWitnessEachSlotSizeDamage.toFixed(0)).gold(),
            // Text.translatable('tooltips.kubejs.perseverance_witness.alt.2', nbt.getLong('slotMaxSize').toFixed(0)).darkGray()
        // ]
        // return textList
    // })
// )

// ===== story_witness.js =====
ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:story_witness')
    .setShiftDescription(Text.translatable('tooltips.kubejs.witness.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.witness.shift_holding.1'))
    .setAltDescription(Text.translatable('tooltips.kubejs.witness.alt.1'))
    .setAltHoldingDescription(Text.translatable('tooltips.kubejs.witness.alt_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.story_witness.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.story_witness.shift.1'))
    .addShift(Text.translatable('tooltips.kubejs.story_witness.shift.2'))
    .addShift(Text.translatable('tooltips.kubejs.story_witness.shift.3'))
    .addAlt((text, item) => {
        const nbt = item.getOrCreateTag()
        let damageAmount = nbt.getLong('damageAmount')
        let stage = nbt.getInt('stage')
        const textList = []
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

        for (let i = 0; i < StoryWitnessLootList.length; i++) {
            let lootObj = StoryWitnessLootList[i]
            let lootNameList = []
            lootObj.lootList.forEach(pItem => {
                lootNameList.push(pItem.getDisplayName().getString() + ' x ' + pItem.getCount())
            })
            let lootName = lootNameList.join('、')
            if (i < stage) {
                textList.push(Text.translatable('tooltips.kubejs.story_witness.alt.1', '+ ', lootObj.damage.toFixed(0), lootName).darkGray())
            } else if (i == stage) {
                textList.push(Text.translatable('tooltips.kubejs.story_witness.alt.1', '→ ', damageAmount.toFixed(0) + ' / ' + lootObj.damage.toFixed(0), lootName).gold())
            } else {
                textList.push(Text.translatable('tooltips.kubejs.story_witness.alt.1', '- ', lootObj.damage.toFixed(0), lootName).gray())
            }
        }
        return textList
    })
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:story_proof')
    .addDefault(Text.translatable('tooltips.kubejs.story_proof.default.1').gray())
)

