// priority: 800
// [merged] exposure.js, injection.js, material.js, no_use_item.js, organ_common.js

// ===== exposure.js =====
ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:exorcism_lens')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.exorcism_lens.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.exorcism_lens.shift.1'))
)
ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:frost_lens')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.frost_lens.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.frost_lens.shift.1'))
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:reverse_causality_lens')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.reverse_causality_lens.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.reverse_causality_lens.shift.1', UnstableHover))
)


ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:wide_angle_lens')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.wide_angle_lens.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.wide_angle_lens.shift.1'))
)

// ===== injection.js =====
ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:player_17_injection')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.player_17_injection.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.player_17_injection.shift.1', ChestcavityTypeHover, Player17TypeHover))
)
ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:player_21_injection')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.player_21_injection.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.player_21_injection.shift.1', ChestcavityTypeHover, Player21TypeHover))
)
ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:player_25_injection')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.player_25_injection.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.player_25_injection.shift.1', ChestcavityTypeHover, Player25TypeHover))
)
ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:player_27_injection')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.player_27_injection.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.player_27_injection.shift.1', ChestcavityTypeHover, Player27TypeHover))
)
ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:functional_entity_injection')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.functional_entity_injection.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.functional_entity_injection.shift.1', ChestcavityTypeHover, FunctionalEntityTypeHover))
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:gula_injection')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.gula_injection.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.gula_injection.shift.1', ChestcavityTypeHover, GulaTypeHover))
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:rose_injection')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.rose_injection.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.rose_injection.shift.1', ChestcavityTypeHover, RoseTypeHover))
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:revolution_machine_injection')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.revolution_machine_injection.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.revolution_machine_injection.shift.1', ChestcavityTypeHover, RevolutionMachineTypeHover))
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:empty_injection')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.empty_injection.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.empty_injection.shift.1', Player17TypeHover, Player21TypeHover, Player25TypeHover, Player27TypeHover))
)

// ===== material.js =====
ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:counterweight_gear')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.counterweight_gear.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.counterweight_gear.shift.1', UnstableHover))
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:oracle_gate')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.oracle_gate.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.oracle_gate.shift.1', UnstableHover))
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:simulated_unit')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.simulated_unit.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.simulated_unit.shift.1', UnstableHover))
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:redstone_capacitor')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.redstone_capacitor.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.redstone_capacitor.shift.1'))
)


ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:random_tick_spring')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.random_tick_spring.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.random_tick_spring.shift.1', UnstableHover))
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:structural_bolt')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.structural_bolt.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.structural_bolt.shift.1'))
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:unstable_matter')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.unstable_matter.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.unstable_matter.shift.1', UnstableHover))
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:refined_brass_ingot')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.refined_brass_ingot.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.refined_brass_ingot.shift.1', UnstableHover))
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:reverse_causality_chip')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.reverse_causality_chip.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.reverse_causality_chip.shift.1', UnstableHover))
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:timing_valve')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.timing_valve.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.timing_valve.shift.1', UnstableHover))
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:stable_substrate')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.stable_substrate.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.stable_substrate.shift.1'))
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:amethyst_resonator')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.amethyst_resonator.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.amethyst_resonator.shift.1'))
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:mantle_ore')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.mantle_ore.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.mantle_ore.shift.1'))
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:world_computer')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.world_computer.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.world_computer.shift.1'))
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:eternal_altar')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.eternal_altar.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.eternal_altar.shift.1'))
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:growth_vat')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.growth_vat.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.growth_vat.shift.1'))
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:mantle_energy_extractor')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.mantle_energy_extractor.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.mantle_energy_extractor.shift.1'))
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:inactivated_neuron_tumor')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.inactivated_neuron_tumor.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.inactivated_neuron_tumor.shift.1'))
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:dimension_shards')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.dimension_shards.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.dimension_shards.shift.1'))
    .addShift(Text.translatable('tooltips.kubejs.dimension_shards.shift.2'))
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:tetra_scroll')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.tetra_scroll.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.tetra_scroll.shift.1'))
)


ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:colorful_dye')
    .addDefault((text, item) => {
        return [GradientText(Text.translatable('tooltips.kubejs.colorful_dye.default.1'), '#de68c3', '#68deda')]
    })
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:colorful_slime_ball')
    .addDefault((text, item) => {
        return [GradientText(Text.translatable('tooltips.kubejs.colorful_slime_ball.default.1'), '#de68c3', '#68deda')]
    })
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:colorful_singularity')
    .addDefault(Text.translatable('tooltips.kubejs.colorful_singularity.default.1').gray())
)

// ===== no_use_item.js =====
// 材料
ItemEvents.tooltip(tooltip => {
    /**
     * 
     * @param {string} item 
     */
    function MarkNoUseItem(item) {
        tooltip.add(item, Text.translatable('tooltips.kubejs.no_ues_item').darkRed())
    }
    // MarkNoUseItem('beyonddimensions:net_creater')
    MarkNoUseItem('sophisticatedbackpacks:inception_upgrade')
    MarkNoUseItem('sophisticatedbackpacks:stack_upgrade_omega_tier')
    MarkNoUseItem('cataclysm:meat_shredder')
    MarkNoUseItem('cataclysm:belt_of_beginner')
})

// ===== organ_common.js =====
ItemEvents.tooltip(tooltip => {
    tooltip.addAdvancedToAll((item, advanced, text) => {
        if (!item.hasTag('kubejs:organ')) return

        let lineNum = 1
        let organTagTooltipsList = []
        let nbt = item.getOrCreateTag()
        let itemMaxStackSizeStr = item.getMaxStackSize().toFixed(0)
        item.getTags().toArray().forEach(/**@param {Internal.TagKey} tag*/tag => {
            let tagLocation = String(tag.location())
            if (!OrganTagMap[tagLocation]) return
            organTagTooltipsList.push(OrganTagMap[tagLocation])
        })
        if (organTagTooltipsList.length > 0) {
            lineNum = AddTextLines(text, [Text.of('🔎  ').append(JoinWithSeparator('   ', organTagTooltipsList))], lineNum)
        }

        let scoreTooltipsList = []
        let organData = ChestCavityUtils.lookupOrgan(item, null)
        if (organData) {
            organData.organScores.forEach((score, value) => {
                let roundValue = FloorFix(value, 2)
                let scoreString = Text.translate(`tooltips.kubejs.score_tag.${score.toString()}`)
                    .hover([
                        Text.translate(`tooltips.kubejs.score_tag.${score.toString()}`).gold(),
                        NewLine,
                        Text.translate(`tooltips.kubejs.score_tag.hover.${score.toString()}`)
                    ])
                    .yellow().underlined()

                let scoreTooltips = Text.translatable('tooltips.kubejs.common_organ.1', Text.yellow(itemMaxStackSizeStr), Text.yellow(roundValue), scoreString)
                scoreTooltipsList.push(scoreTooltips)
            })
        }

        if (nbt.contains('potentialOrganData')) {
            let potentialOrganData = nbt.getCompound('potentialOrganData')
            let potentialAttributeNum = potentialOrganData.size()
            for (let i = 0; i < potentialAttributeNum; i++) {
                scoreTooltipsList.push(Text.translatable('tooltips.kubejs.common_organ.1', Text.yellow(itemMaxStackSizeStr), Text.yellow('0').obfuscated(), Text.translatable('tooltips.kubejs.score_tag.potential_score').yellow().obfuscated()))
            }
        }

        let customToolTips = OrganTooltipRegistryMap[item.id] ? OrganTooltipRegistryMap[item.id] : new MultiStateTooltip(item.id)

        if (customToolTips.defaultTooltips.length > 0) {
            lineNum = AddTextFuncLines(text, customToolTips.defaultTooltips, item, lineNum)
        }

        switch (true) {
            case tooltip.isShift():
                if (customToolTips.shiftTooltips.length + scoreTooltipsList.length > 0) {
                    lineNum = AddTextLines(text, [customToolTips.shiftHoldingDescription], lineNum)
                    lineNum = AddTextLines(text, scoreTooltipsList, lineNum)
                    lineNum = AddTextFuncLines(text, customToolTips.shiftTooltips, item, lineNum)
                    return
                }
                break
            case tooltip.isCtrl():
                if (customToolTips.ctrlTooltips.length > 0) {
                    lineNum = AddTextLines(text, [customToolTips.ctrlHoldingDescription], lineNum)
                    lineNum = AddTextFuncLines(text, customToolTips.ctrlTooltips, item, lineNum)
                    return
                }
                break
            case tooltip.isAlt():
                if (customToolTips.altTooltips.length > 0) {
                    lineNum = AddTextLines(text, [customToolTips.altHoldingDescription], lineNum)
                    lineNum = AddTextFuncLines(text, customToolTips.altTooltips, item, lineNum)
                    return
                }
                break
        }

        if (customToolTips.shiftTooltips.length + scoreTooltipsList.length > 0) {
            lineNum = AddTextLines(text, [customToolTips.shiftDescription], lineNum)
        }

        if (customToolTips.ctrlTooltips.length > 0) {
            lineNum = AddTextLines(text, [customToolTips.ctrlDescription], lineNum)
        }

        if (customToolTips.altTooltips.length > 0) {
            lineNum = AddTextLines(text, [customToolTips.altDescription], lineNum)
        }

        if (item.hasTag('chestcavity:cannot_remove')) {
            lineNum = AddTextLines(text, [Text.translatable('tooltips.kubejs.cannot_remove_organ')], lineNum)
        }
    })


    tooltip.addAdvancedToAll((item, advanced, text) => {
        if (!item.hasTag('kubejs:pseudo_organ')) return

        let lineNum = 1
        let scoreTooltipsList = []
        let organData = ChestCavityUtils.lookupOrgan(item, null)
        if (organData) {
            organData.organScores.forEach((score, value) => {
                let roundValue = RoundFix(value, 2)
                let scoreString = Text.translate(`tooltips.kubejs.score_tag.${score.toString()}`).getString()
                let scoreTooltips = Text.translatable('tooltips.kubejs.common_organ.1', Text.yellow(item.getMaxStackSize().toFixed(0)), Text.yellow(roundValue), Text.yellow(scoreString))
                scoreTooltipsList.push(scoreTooltips)
            })
        }

        if (tooltip.isShift()) {
            if (scoreTooltipsList.length > 0) {
                text.add(lineNum++, Text.translatable('tooltips.kubejs.pseudo_organ.shift_holding.1'))
                text.addAll(lineNum, scoreTooltipsList)
                lineNum += scoreTooltipsList.length
            }
            return
        }

        if (scoreTooltipsList.length > 0) {
            text.add(lineNum++, Text.translatable('tooltips.kubejs.pseudo_organ.shift.1'))
        }

    })
})
