// priority: 900
// [merged] ender.js, food.js, infected.js, legend.js, machine.js, magic.js, nature.js, nether.js, plant.js, relic.js, rose.js

// ===== ender.js =====
// RegistryOrganTooltip(new MultiStateTooltip('kubejs:dragon_blood_heart')
    // .addDefault(Text.translatable('tooltips.kubejs.dragon_blood_heart.default.1').gray())
    // .addAlt(Text.translatable('tooltips.kubejs.dragon_blood_heart.alt.1'))
    // .addAlt(Text.translatable('tooltips.kubejs.dragon_blood_heart.alt.2', FrozenHover))
// )

RegistryOrganTooltip(new MultiStateTooltip('kubejs:dragon_blood_lung')
    .addDefault(Text.translatable('tooltips.kubejs.dragon_blood_lung.default.1').gray())
)
RegistryOrganTooltip(new MultiStateTooltip('kubejs:dragon_blood_muscle')
    .addDefault(Text.translatable('tooltips.kubejs.dragon_blood_muscle.default.1').gray())
)
RegistryOrganTooltip(new MultiStateTooltip('kubejs:dragon_blood_rib')
    .addDefault(Text.translatable('tooltips.kubejs.dragon_blood_rib.default.1').gray())
)
RegistryOrganTooltip(new MultiStateTooltip('kubejs:dragon_blood_liver')
    .addDefault(Text.translatable('tooltips.kubejs.dragon_blood_liver.default.1').gray())
)
RegistryOrganTooltip(new MultiStateTooltip('kubejs:dragon_blood_kidney')
    .addDefault(Text.translatable('tooltips.kubejs.dragon_blood_kidney.default.1').gray())
)
RegistryOrganTooltip(new MultiStateTooltip('kubejs:dragon_blood_spine')
    .addDefault(Text.translatable('tooltips.kubejs.dragon_blood_spine.default.1').gray())
)
RegistryOrganTooltip(new MultiStateTooltip('kubejs:dragon_blood_intestine')
    .addDefault(Text.translatable('tooltips.kubejs.dragon_blood_intestine.default.1').gray())
)
RegistryOrganTooltip(new MultiStateTooltip('kubejs:dragon_blood_stomach')
    .addDefault(Text.translatable('tooltips.kubejs.dragon_blood_stomach.default.1').gray())
)


RegistryOrganTooltip(new MultiStateTooltip('kubejs:ender_golem_line')
    .addDefault(Text.translatable('tooltips.kubejs.ender_golem_line.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.ender_golem_line.alt.1', KeyActiveHover, Text.gold('10')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:endermaptera_shell')
    .addDefault(Text.translatable('tooltips.kubejs.endermaptera_shell.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.endermaptera_shell.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:ender_breath')
    .addDefault(Text.translatable('tooltips.kubejs.ender_breath.default.1').gray())
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:ender_ectoplasm')
    .addDefault(Text.translatable('tooltips.kubejs.ender_ectoplasm.default.1').gray())
)

// RegistryOrganTooltip(new MultiStateTooltip('kubejs:ender_eye')
    // .addDefault(Text.translatable('tooltips.kubejs.ender_eye.default.1').gray())
    // .addAlt(Text.translatable('tooltips.kubejs.ender_eye.alt.1'))
// )

RegistryOrganTooltip(new MultiStateTooltip('kubejs:endermite_gland')
    .addDefault(Text.translatable('tooltips.kubejs.endermite_gland.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.endermite_gland.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:phantom_wing')
    .addDefault(Text.translatable('tooltips.kubejs.phantom_wing.default.1').gray())
)

// ===== food.js =====
ItemEvents.tooltip(tooltip => {
    tooltip.addAdvancedToAll((item, advanced, text) => {
        if (item.hasNBT()) {
            let nbt = item.getNbt()
            if (nbt.contains('greedyThroatUUID')) {
                text.add(Text.translatable('tooltips.kubejs.greedy_throat.food_item').color('#025e00'))
            }
        }
    })
})

RegistryOrganTooltip(new MultiStateTooltip('kubejs:king_of_stomach')
    .addDefault(Text.translatable('tooltips.kubejs.king_of_stomach.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.king_of_stomach.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.king_of_stomach.alt.2', Text.gold('0.25')))
    .addAlt(Text.translatable('tooltips.kubejs.king_of_stomach.alt.3', Text.gold('0.1')))
    .addAlt(Text.translatable('tooltips.kubejs.king_of_stomach.alt.4'))
    .addCtrl(GulaSlotType)
    .addCtrl(Text.translatable('tooltips.kubejs.king_of_stomach.ctrl.1'))
    .addCtrl(Text.translatable('tooltips.kubejs.king_of_stomach.ctrl.2'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:beer_gland')
    .addDefault(Text.translatable('tooltips.kubejs.beer_gland.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.beer_gland.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.beer_gland.alt.2', Text.gold('1.25')))
    .addCtrl(DigestSlotType)
    .addCtrl(Text.translatable('tooltips.kubejs.beer_gland.ctrl.1'))
    // .addCtrl(Text.translatable('tooltips.kubejs.beer_gland.ctrl.2', Text.gold('1')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:sweets_gland')
    .addDefault(Text.translatable('tooltips.kubejs.sweets_gland.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.sweets_gland.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.sweets_gland.alt.2', Text.gold('0.5')))
    .addAlt(Text.translatable('tooltips.kubejs.sweets_gland.alt.3', Text.gold('0.25')))
    .addCtrl(DigestSlotType)
    .addCtrl(Text.translatable('tooltips.kubejs.sweets_gland.ctrl.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:parasitism_stomach')
    .addDefault(Text.translatable('tooltips.kubejs.parasitism_stomach.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.parasitism_stomach.alt.1', Text.gold('3')))
    .addAlt(Text.translatable('tooltips.kubejs.parasitism_stomach.alt.2'))
    .addAlt(Text.translatable('tooltips.kubejs.parasitism_stomach.alt.3'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:greedy_throat')
    .addDefault(Text.translatable('tooltips.kubejs.greedy_throat.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.greedy_throat.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.greedy_throat.alt.2'))
    .addAlt(Text.translatable('tooltips.kubejs.greedy_throat.alt.3'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:jar_of_mystery')
    .addDefault(Text.translatable('tooltips.kubejs.jar_of_mystery.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.jar_of_mystery.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.jar_of_mystery.alt.2'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:worm_larva')
    .addDefault(Text.translatable('tooltips.kubejs.worm_larva.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.worm_larva.alt.1'))
    .addAlt((text, item) => {
        let nbt = item.getOrCreateTag()
        let saturation = nbt.getFloat('saturation')
        let pDamage = item.getMaxDamage() - item.getDamageValue()
        let avgSaturation = pDamage != 0 ? saturation / pDamage : 0
        return [Text.translatable('tooltips.kubejs.worm_larva.alt.2', avgSaturation > 1 ? Text.gold(avgSaturation.toFixed(2)) : Text.green(avgSaturation.toFixed(2)))]
    })
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:jar_of_vacuum')
    .addDefault(Text.translatable('tooltips.kubejs.jar_of_vacuum.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.jar_of_vacuum.alt.1', NearbyOrganHover, Text.gold('1')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:worm_of_taste')
    .addDefault(Text.translatable('tooltips.kubejs.worm_of_taste.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.worm_of_taste.alt.1', NearbyOrganHover, Text.gold('0.25')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:sweet_heart')
    .addDefault(Text.translatable('tooltips.kubejs.sweet_heart.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.sweet_heart.alt.1', NearbyOrganHover, Text.gold('0.125')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:baguette_bone')
    .addDefault(Text.translatable('tooltips.kubejs.baguette_bone.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.baguette_bone.alt.1', NearbyOrganHover, Text.gold('0.125')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:gluten_muscle')
    .addDefault(Text.translatable('tooltips.kubejs.gluten_muscle.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.gluten_muscle.alt.1', DiagonalOrganHover, Text.gold('0.5')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:worm_of_gula')
    .addDefault(Text.translatable('tooltips.kubejs.worm_of_gula.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.worm_of_gula.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.worm_of_gula.alt.2'))
    .addAlt(Text.translatable('tooltips.kubejs.worm_of_gula.alt.3'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:gula_worm_nest')
    .addDefault(Text.translatable('tooltips.kubejs.gula_worm_nest.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.gula_worm_nest.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:deserted_gula_worm_nest')
    .addDefault(Text.translatable('tooltips.kubejs.deserted_gula_worm_nest.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.deserted_gula_worm_nest.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:mashed_potato_pancreas')
    .addDefault(Text.translatable('tooltips.kubejs.mashed_potato_pancreas.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.mashed_potato_pancreas.alt.1', Text.gold('1'), ExtremeFitnessHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:living_beef_wellington')
    .addDefault(Text.translatable('tooltips.kubejs.living_beef_wellington.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.living_beef_wellington.alt.1', Text.gold('1'), ExtremeStrengthHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:void_stomach_pouch')
    .addDefault(Text.translatable('tooltips.kubejs.void_stomach_pouch.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.void_stomach_pouch.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.void_stomach_pouch.alt.2'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:gula_beacon')
    .addDefault(Text.translatable('tooltips.kubejs.gula_beacon.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.gula_beacon.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:tasty_gland')
    .addDefault(Text.translatable('tooltips.kubejs.tasty_gland.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.tasty_gland.alt.1'))
)

// ===== infected.js =====
RegistryOrganTooltip(new MultiStateTooltip('kubejs:tumor')
    .addDefault(Text.translatable('tooltips.kubejs.tumor.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.tumor.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:unformed_tumor')
    .addDefault(Text.translatable('tooltips.kubejs.unformed_tumor.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.unformed_tumor.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:worm_neuron')
    .addDefault(Text.translatable('tooltips.kubejs.worm_neuron.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.worm_neuron.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.worm_neuron.alt.2', BasicTumorScoreHover, PotentialTumorScoreHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:malignant_neuron_tumor')
    .addDefault(Text.translatable('tooltips.kubejs.malignant_neuron_tumor.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.malignant_neuron_tumor.alt.1', Text.gold('1')))
    .addAlt(Text.translatable('tooltips.kubejs.malignant_neuron_tumor.alt.2'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:parasitic_tumor')
    .addDefault(Text.translatable('tooltips.kubejs.parasitic_tumor.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.parasitic_tumor.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.parasitic_tumor.alt.2'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:rosy_tumor')
    .addDefault(Text.translatable('tooltips.kubejs.rosy_tumor.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.rosy_tumor.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:primal_heart')
    .addDefault(Text.translatable('tooltips.kubejs.primal_heart.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.primal_heart.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:primal_bone_cage')
    .addDefault(Text.translatable('tooltips.kubejs.primal_bone_cage.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.primal_bone_cage.alt.1').red())
)

// RegistryOrganTooltip(new MultiStateTooltip('kubejs:devour_teeth')
    // .addDefault(Text.translatable('tooltips.kubejs.devour_teeth.default.1').gray())
    // .addAlt(Text.translatable('tooltips.kubejs.devour_teeth.alt.1'))
    // .addAlt(Text.translatable('tooltips.kubejs.devour_teeth.alt.2'))
// )

RegistryOrganTooltip(new MultiStateTooltip('kubejs:bone_meal_bag')
    .addDefault(Text.translatable('tooltips.kubejs.bone_meal_bag.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.bone_meal_bag.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.bone_meal_bag.alt.2', KeyActiveHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:mutation_intestine')
    .addDefault(Text.translatable('tooltips.kubejs.mutation_intestine.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.mutation_intestine.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:wither_bone_cage')
    .addDefault(Text.translatable('tooltips.kubejs.wither_bone_cage.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.wither_bone_cage.alt.1', Text.gold('20%'), LuckHover, Text.gold('5')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:nightmare_core')
    .addDefault(Text.translatable('tooltips.kubejs.nightmare_core.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.nightmare_core.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:soul_core')
    .addDefault(Text.translatable('tooltips.kubejs.soul_core.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.soul_core.alt.1', FrozenHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:witch_fibroma')
    .addDefault(Text.translatable('tooltips.kubejs.witch_fibroma.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.witch_fibroma.alt.1', KeyActiveHover))
)

// ===== legend.js =====
RegistryOrganTooltip(new MultiStateTooltip('kubejs:prismarine_crown')
    .addDefault(Text.translatable('tooltips.kubejs.prismarine_crown.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.prismarine_crown.alt.1', Text.gold('0'), Text.gold('0')))
    .addAlt(Text.translatable('tooltips.kubejs.prismarine_crown.alt.2', Text.gold('3'), Text.gold('3')))
)

// ===== machine.js =====
RegistryOrganTooltip(new MultiStateTooltip('kubejs:furnace_core')
    .addDefault(Text.translatable('tooltips.kubejs.furnace_core.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.furnace_core.alt.1', Text.gold('100')))
    .addAlt(Text.translatable('tooltips.kubejs.furnace_core.alt.2', Text.gold('2'), Text.gold('5')))
    .addAlt(Text.translatable('tooltips.kubejs.furnace_core.alt.3'))
    .addCtrl(RevolutionFlameType)
    .addCtrl(Text.translatable('tooltips.kubejs.furnace_core.ctrl.1'))
    .addCtrl(Text.translatable('tooltips.kubejs.furnace_core.ctrl.2'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:burning_heart')
    .addDefault(Text.translatable('tooltips.kubejs.burning_heart.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.burning_heart.alt.1', Text.gold('5')))
    .addAlt(Text.translatable('tooltips.kubejs.burning_heart.alt.2', Text.gold('100%')))
    .addAlt(Text.translatable('tooltips.kubejs.burning_heart.alt.3'))
    .addCtrl(RevolutionFlameType)
    .addCtrl(Text.translatable('tooltips.kubejs.burning_heart.ctrl.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:energy_bottle_red')
    .addDefault(Text.translatable('tooltips.kubejs.energy_bottle_red.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.energy_bottle_red.alt.1', Text.gold('100')))
    .addAlt(Text.translatable('tooltips.kubejs.energy_bottle_red.alt.2', Text.gold('1')))
    .addCtrl(MachinaryLubricantSlotType)
    .addCtrl(Text.translatable('tooltips.kubejs.energy_bottle_red.ctrl.1', Text.gold('300%')))
    .addCtrl(RevolutionFlameType)
    .addCtrl(Text.translatable('tooltips.kubejs.energy_bottle_red.ctrl.2', Text.gold('200%')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:revolution_cable')
    .addDefault(Text.translatable('tooltips.kubejs.revolution_cable.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.revolution_cable.alt.1', Text.gold('1')))
    .addAlt(Text.translatable('tooltips.kubejs.revolution_cable.alt.2', Text.gold('1')))
    .addCtrl(MachinaryLubricantSlotType)
    .addCtrl(Text.translatable('tooltips.kubejs.revolution_cable.ctrl.1', Text.gold('300%')))
)


RegistryOrganTooltip(new MultiStateTooltip('kubejs:revolution_relay')
    .addDefault(Text.translatable('tooltips.kubejs.revolution_relay.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.revolution_relay.alt.1', Text.gold('1')))
    .addCtrl(MachinaryLubricantSlotType)
    .addCtrl(Text.translatable('tooltips.kubejs.revolution_relay.ctrl.1', Text.gold('300%')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:revolution_delay')
    .addDefault(Text.translatable('tooltips.kubejs.revolution_delay.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.revolution_delay.alt.1', Text.gold('1')))
    .addCtrl(MachinaryLubricantSlotType)
    .addCtrl(Text.translatable('tooltips.kubejs.revolution_delay.ctrl.1', Text.gold('300%')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:revolution_bell')
    .addDefault(Text.translatable('tooltips.kubejs.revolution_bell.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.revolution_bell.alt.1', KeyActiveHover))
    .addAlt(Text.translatable('tooltips.kubejs.revolution_bell.alt.2'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:blaze_pressurizer')
    .addDefault(Text.translatable('tooltips.kubejs.blaze_pressurizer.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.blaze_pressurizer.alt.1', KeyActiveHover, Text.gold('3')))
    .addAlt(Text.translatable('tooltips.kubejs.blaze_pressurizer.alt.2'))
    .addAlt(Text.translatable('tooltips.kubejs.blaze_pressurizer.alt.3'))
    .addCtrl(MachinaryLubricantSlotType)
    .addCtrl(Text.translatable('tooltips.kubejs.blaze_pressurizer.ctrl.1', Text.gold('300%')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:telescopic_arm')
    .addDefault(Text.translatable('tooltips.kubejs.telescopic_arm.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.telescopic_arm.alt.1', Text.gold('1')))
    .addCtrl(MachinaryLubricantSlotType)
    .addCtrl(Text.translatable('tooltips.kubejs.telescopic_arm.ctrl.1', Text.gold('4')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:telescopic_attack_arm')
    .addDefault(Text.translatable('tooltips.kubejs.telescopic_attack_arm.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.telescopic_attack_arm.alt.1', Text.gold('0.5')))
    .addCtrl(MachinaryLubricantSlotType)
    .addCtrl(Text.translatable('tooltips.kubejs.telescopic_attack_arm.ctrl.1', Text.gold('2')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:lava_life_cycle_system')
    .addDefault(Text.translatable('tooltips.kubejs.lava_life_cycle_system.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.lava_life_cycle_system.alt.1', DirectlyNearbyOrganHover))
    .addAlt(Text.translatable('tooltips.kubejs.lava_life_cycle_system.alt.2'))
    .addAlt(Text.translatable('tooltips.kubejs.lava_life_cycle_system.alt.3'))
    .addCtrl(MachinaryLubricantSlotType)
    .addCtrl(Text.translatable('tooltips.kubejs.lava_life_cycle_system.ctrl.1', Text.gold('300')))
)


RegistryOrganTooltip(new MultiStateTooltip('kubejs:prowler_rotating_shaft')
    .addDefault(Text.translatable('tooltips.kubejs.prowler_rotating_shaft.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.prowler_rotating_shaft.alt.1', Text.gold('1'), Text.gold('16')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:watcher_probe')
    .addDefault(Text.translatable('tooltips.kubejs.watcher_probe.default.1').gray())
)


RegistryOrganTooltip(new MultiStateTooltip('kubejs:fiery_core')
    .addDefault(Text.translatable('tooltips.kubejs.fiery_core.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.fiery_core.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.fiery_core.alt.2'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:thermometer')
    .addDefault(Text.translatable('tooltips.kubejs.thermometer.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.thermometer.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:small_acid_tank')
    .addDefault(Text.translatable('tooltips.kubejs.small_acid_tank.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.small_acid_tank.alt.1', Text.gold('1')))
    .addAlt(Text.translatable('tooltips.kubejs.small_acid_tank.alt.2', Text.gold('1'), Player17TypeHover, Player21TypeHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:iron_repair_device')
    .addDefault(Text.translatable('tooltips.kubejs.iron_repair_device.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.iron_repair_device.alt.1', Text.gold('10%')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:cyborgization_device')
    .addDefault(Text.translatable('tooltips.kubejs.cyborgization_device.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.cyborgization_device.alt.1', RevolutionMachineTypeHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:programmable_automatic_core')
    .addDefault(Text.translatable('tooltips.kubejs.programmable_automatic_core.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.programmable_automatic_core.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.programmable_automatic_core.alt.2', Text.gold('1')))
)

// ===== magic.js =====
RegistryOrganTooltip(new MultiStateTooltip('kubejs:whirlisprig_star_gem')
    .addDefault(Text.translatable('tooltips.kubejs.whirlisprig_star_gem.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.whirlisprig_star_gem.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.whirlisprig_star_gem.alt.2'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:heal_star_gem')
    .addDefault(Text.translatable('tooltips.kubejs.heal_star_gem.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.heal_star_gem.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:coral_armor')
    .addDefault(Text.translatable('tooltips.kubejs.coral_armor.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.coral_armor.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:deepling_star_gem')
    .addDefault(Text.translatable('tooltips.kubejs.deepling_star_gem.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.deepling_star_gem.alt.1', Text.gold('20'), FrozenHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:animted_soul')
    .addDefault(Text.translatable('tooltips.kubejs.animted_soul.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.animted_soul.alt.1', KeyActiveHover, Text.gold('10'), Text.gold('1/2')))
    .addAlt(Text.translatable('tooltips.kubejs.animted_soul.alt.2', Text.gold('60')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:amethyst_core')
    .addDefault(Text.translatable('tooltips.kubejs.amethyst_core.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.amethyst_core.alt.1', Text.gold('1/10')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:deepling_ectoplasm')
    .addDefault(Text.translatable('tooltips.kubejs.deepling_ectoplasm.default.1').gray())
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:koboleton_spine')
    .addDefault(Text.translatable('tooltips.kubejs.koboleton_spine.default.1').gray())
)
RegistryOrganTooltip(new MultiStateTooltip('kubejs:koboleton_rib')
    .addDefault(Text.translatable('tooltips.kubejs.koboleton_rib.default.1').gray())
)
RegistryOrganTooltip(new MultiStateTooltip('kubejs:koboleton_coccyx')
    .addDefault(Text.translatable('tooltips.kubejs.koboleton_coccyx.default.1').gray())
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:aptrgangr_soul')
    .addDefault(Text.translatable('tooltips.kubejs.aptrgangr_soul.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.aptrgangr_soul.alt.1', SoildCoreHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:draugr_skull')
    .addDefault(Text.translatable('tooltips.kubejs.draugr_skull.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.draugr_skull.alt.1', FrozenHover, Text.gold('10')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:hippocamtus_scale')
    .addDefault(Text.translatable('tooltips.kubejs.hippocamtus_scale.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.hippocamtus_scale.alt.1', FrozenHover, Text.gold('2'), FrozenHover, FrozenHover, Text.gold('3s')))
)


RegistryOrganTooltip(new MultiStateTooltip('kubejs:drygmy_star_gem')
    .addDefault(Text.translatable('tooltips.kubejs.drygmy_star_gem.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.drygmy_star_gem.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:starbuncle_star_gem')
    .addDefault(Text.translatable('tooltips.kubejs.starbuncle_star_gem.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.starbuncle_star_gem.alt.1'))
)

// RegistryOrganTooltip(new MultiStateTooltip('kubejs:calamity_bone_spur')
    // .addDefault(Text.translatable('tooltips.kubejs.calamity_bone_spur.default.1').gray())
    // .addAlt(Text.translatable('tooltips.kubejs.calamity_bone_spur.alt.1'))
// )

// RegistryOrganTooltip(new MultiStateTooltip('kubejs:potion_skin')
    // .addDefault(Text.translatable('tooltips.kubejs.potion_skin.default.1').gray())
    // .addAlt(Text.translatable('tooltips.kubejs.potion_skin.alt.1'))
// )


RegistryOrganTooltip(new MultiStateTooltip('kubejs:soul_cage')
    .addDefault(Text.translatable('tooltips.kubejs.soul_cage.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.soul_cage.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.soul_cage.alt.2', Text.gold('1'), Text.gold('2')))
)

// RegistryOrganTooltip(new MultiStateTooltip('kubejs:scry_stomach_pouch')
    // .addDefault(Text.translatable('tooltips.kubejs.scry_stomach_pouch.default.1').gray())
    // .addAlt(Text.translatable('tooltips.kubejs.scry_stomach_pouch.alt.1', KeyActiveHover, Text.gold('16 * 32 * 16')))
    // .addAlt(Text.translatable('tooltips.kubejs.scry_stomach_pouch.alt.2', Text.gold('4')))
// )
RegistryOrganTooltip(new MultiStateTooltip('kubejs:exhausted_source_focus_crystal')
    .addDefault(Text.translatable('tooltips.kubejs.exhausted_source_focus_crystal.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.exhausted_source_focus_crystal.alt.1'))
)

// RegistryOrganTooltip(new MultiStateTooltip('kubejs:shulker_eye')
    // .addDefault(Text.translatable('tooltips.kubejs.shulker_eye.default.1').gray())
    // .addAlt(Text.translatable('tooltips.kubejs.shulker_eye.alt.1'))
// )

// RegistryOrganTooltip(new MultiStateTooltip('kubejs:wither_skull')
    // .addDefault(Text.translatable('tooltips.kubejs.wither_skull.default.1').gray())
    // .addAlt(Text.translatable('tooltips.kubejs.wither_skull.alt.1'))
// )

RegistryOrganTooltip(new MultiStateTooltip('kubejs:soul_wing')
    .addDefault(Text.translatable('tooltips.kubejs.soul_wing.default.1').gray())
)

// ===== nature.js =====
// RegistryOrganTooltip(new MultiStateTooltip('kubejs:sea_bunny_skin')
    // .addDefault(Text.translatable('tooltips.kubejs.sea_bunny_skin.default.1').gray())
    // .addAlt(Text.translatable('tooltips.kubejs.sea_bunny_skin.alt.1', Text.gold('5'), Text.gold('4')))
// )

RegistryOrganTooltip(new MultiStateTooltip('kubejs:mammary_gland')
    .addDefault(Text.translatable('tooltips.kubejs.mammary_gland.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.mammary_gland.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:moew_nose')
    .addDefault(Text.translatable('tooltips.kubejs.moew_nose.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.moew_nose.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:tentacles_harvester')
    .addDefault(Text.translatable('tooltips.kubejs.tentacles_harvester.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.tentacles_harvester.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:leaf_insect_exoskeleton')
    .addDefault(Text.translatable('tooltips.kubejs.leaf_insect_exoskeleton.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.leaf_insect_exoskeleton.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:ferret_tail')
    .addDefault(Text.translatable('tooltips.kubejs.ferret_tail.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.ferret_tail.alt.1', Text.gold('1')))

)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:dumbo_octopus_hat')
    .addDefault(Text.translatable('tooltips.kubejs.dumbo_octopus_hat.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.dumbo_octopus_hat.alt.1', KeyActiveHover))
    .addAlt(Text.translatable('tooltips.kubejs.dumbo_octopus_hat.alt.2', Text.gold('60')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:jumping_spider_leg')
    .addDefault(Text.translatable('tooltips.kubejs.jumping_spider_leg.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.jumping_spider_leg.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:spider_leg')
    .addDefault(Text.translatable('tooltips.kubejs.spider_leg.default.1').gray())
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:koi_fish_scale')
    .addDefault(Text.translatable('tooltips.kubejs.koi_fish_scale.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.koi_fish_scale.alt.1', KeyActiveHover))
    .addAlt(Text.translatable('tooltips.kubejs.koi_fish_scale.alt.2'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:otter_tooth')
    .addDefault(Text.translatable('tooltips.kubejs.otter_tooth.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.otter_tooth.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:red_panda_tail')
    .addDefault(Text.translatable('tooltips.kubejs.red_panda_tail.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.red_panda_tail.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:shima_enaga_feather')
    .addDefault(Text.translatable('tooltips.kubejs.shima_enaga_feather.default.1').gray())
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:bat_throat')
    .addDefault(Text.translatable('tooltips.kubejs.bat_throat.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.bat_throat.alt.1', KeyActiveHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:axolotl_gill')
    .addDefault(Text.translatable('tooltips.kubejs.axolotl_gill.default.1').gray())
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:deer_horn')
    .addDefault(Text.translatable('tooltips.kubejs.deer_horn.default.1').gray())
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:red_wolf_beard')
    .addDefault(Text.translatable('tooltips.kubejs.red_wolf_beard.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.red_wolf_beard.alt.1', KeyActiveHover, Text.gold('30')))
    .addAlt(Text.translatable('tooltips.kubejs.red_wolf_beard.alt.2', Text.gold('1'), Text.gold('50%')))
    .addAlt(Text.translatable('tooltips.kubejs.red_wolf_beard.alt.3', Text.gold('2'), Text.gold('4')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:raccoon_paw')
    .addDefault(Text.translatable('tooltips.kubejs.raccoon_paw.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.raccoon_paw.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:boar_nose')
    .addDefault(Text.translatable('tooltips.kubejs.boar_nose.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.boar_nose.alt.1', LuckHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:minisheep_gland')
    .addDefault(Text.translatable('tooltips.kubejs.minisheep_gland.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.minisheep_gland.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:squirrel_tail')
    .addDefault(Text.translatable('tooltips.kubejs.squirrel_tail.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.squirrel_tail.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:pelican_larynx')
    .addDefault(Text.translatable('tooltips.kubejs.pelican_larynx.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.pelican_larynx.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.pelican_larynx.alt.2'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:owl_vertebrae')
    .addDefault(Text.translatable('tooltips.kubejs.owl_vertebrae.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.owl_vertebrae.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:armadillo_shell')
    .addDefault(Text.translatable('tooltips.kubejs.armadillo_shell.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.armadillo_shell.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:bison_horn')
    .addDefault(Text.translatable('tooltips.kubejs.bison_horn.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.bison_horn.alt.1'))
)

// RegistryOrganTooltip(new MultiStateTooltip('kubejs:turkey_gizzard')
//     .addDefault(Text.translatable('tooltips.kubejs.turkey_gizzard.default.1').gray())
//     .addAlt(Text.translatable('tooltips.kubejs.turkey_gizzard.alt.1', AlwaysEatHover, Text.gold('40%'), LuckHover, NearbyOrganHover))
//     .addAlt(Text.translatable('tooltips.kubejs.turkey_gizzard.alt.2'))
// )

RegistryOrganTooltip(new MultiStateTooltip('kubejs:penguin_flipper')
    .addDefault(Text.translatable('tooltips.kubejs.penguin_flipper.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.penguin_flipper.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:dog_tail')
    .addDefault(Text.translatable('tooltips.kubejs.dog_tail.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.dog_tail.alt.1', Text.gold('16')))
)


RegistryOrganTooltip(new MultiStateTooltip('kubejs:hedgehog_thorn')
    .addDefault(Text.translatable('tooltips.kubejs.hedgehog_thorn.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.hedgehog_thorn.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:cassowary_muscle')
    .addDefault(Text.translatable('tooltips.kubejs.cassowary_muscle.default.1').gray())
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:flamingo_beak')
    .addDefault(Text.translatable('tooltips.kubejs.flamingo_beak.default.1').gray())
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:urchinkin_stinger')
    .addDefault(Text.translatable('tooltips.kubejs.urchinkin_stinger.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.urchinkin_stinger.alt.1', Text.gold('10')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:giant_claw')
    .addDefault(Text.translatable('tooltips.kubejs.giant_claw.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.giant_claw.alt.1', Text.gold('20%'), LuckHover, Text.gold('5')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:cindaria_umbrella')
    .addDefault(Text.translatable('tooltips.kubejs.cindaria_umbrella.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.cindaria_umbrella.alt.1', Text.gold('10')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:wilden_heart')
    .addDefault(Text.translatable('tooltips.kubejs.wilden_heart.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.wilden_heart.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:chimera_heart')
    .addDefault(Text.translatable('tooltips.kubejs.chimera_heart.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.chimera_heart.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:leech_mouthpart')
    .addDefault(Text.translatable('tooltips.kubejs.leech_mouthpart.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.leech_mouthpart.alt.1', Text.gold('20%'), LuckHover, Text.gold('1')))
    .addAlt(Text.translatable('tooltips.kubejs.leech_mouthpart.alt.2', Text.gold('1')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:rat_ear')
    .addDefault(Text.translatable('tooltips.kubejs.rat_ear.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.rat_ear.alt.1', Text.gold('16')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:wolf_fang')
    .addDefault(Text.translatable('tooltips.kubejs.wolf_fang.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.wolf_fang.alt.1', KeyActiveHover, Text.gold('16')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:rib_blade')
    .addDefault(Text.translatable('tooltips.kubejs.rib_blade.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.rib_blade.alt.1', Text.gold('50%'), LuckHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:pig_stomach')
    .addDefault(Text.translatable('tooltips.kubejs.pig_stomach.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.pig_stomach.alt.1', SatenanceEffectHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:allay_wing')
    .addDefault(Text.translatable('tooltips.kubejs.allay_wing.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.allay_wing.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:symbiocto_arm')
    .addDefault(Text.translatable('tooltips.kubejs.symbiocto_arm.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.symbiocto_arm.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.symbiocto_arm.alt.2'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:bee_honey_stomach')
    .addDefault(Text.translatable('tooltips.kubejs.bee_honey_stomach.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.bee_honey_stomach.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.bee_honey_stomach.alt.2'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:explosion_bag')
    .addDefault(Text.translatable('tooltips.kubejs.explosion_bag.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.explosion_bag.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.explosion_bag.alt.2', KeyActiveHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:dragonfly_wing')
    .addDefault(Text.translatable('tooltips.kubejs.dragonfly_wing.default.1').gray())
)


RegistryOrganTooltip(new MultiStateTooltip('kubejs:camel_hump')
    .addDefault(Text.translatable('tooltips.kubejs.camel_hump.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.camel_hump.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.camel_hump.alt.2', KeyActiveHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:hatching_chamber')
    .addDefault(Text.translatable('tooltips.kubejs.hatching_chamber.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.hatching_chamber.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:swim_bladder')
    .addDefault(Text.translatable('tooltips.kubejs.swim_bladder.default.1').gray())
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:dolphin_fin')
    .addDefault(Text.translatable('tooltips.kubejs.dolphin_fin.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.dolphin_fin.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:guardian_core')
    .addDefault(Text.translatable('tooltips.kubejs.guardian_core.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.guardian_core.alt.1'))
)

// RegistryOrganTooltip(new MultiStateTooltip('kubejs:elder_guardian_core')
    // .addDefault(Text.translatable('tooltips.kubejs.elder_guardian_core.default.1').gray())
    // .addAlt(Text.translatable('tooltips.kubejs.elder_guardian_core.alt.1', KeyActiveHover))
    // .addAlt(Text.translatable('tooltips.kubejs.elder_guardian_core.alt.2'))
// )

RegistryOrganTooltip(new MultiStateTooltip('kubejs:fox_tail')
    .addDefault(Text.translatable('tooltips.kubejs.fox_tail.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.fox_tail.alt.1', KeyActiveHover))
    .addAlt(Text.translatable('tooltips.kubejs.fox_tail.alt.2'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:frog_tongue')
    .addDefault(Text.translatable('tooltips.kubejs.frog_tongue.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.frog_tongue.alt.1', KeyActiveHover))
    .addAlt(Text.translatable('tooltips.kubejs.frog_tongue.alt.2'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:glow_gland')
    .addDefault(Text.translatable('tooltips.kubejs.glow_gland.default.1').gray())
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:multifaceted_ambrosia')
    .addDefault(Text.translatable('tooltips.cornucopia.cornucopia.default.1').gray())
    .addAlt(Text.translatable('tooltips.cornucopia.cornucopia.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:horse_tendon')
    .addDefault(Text.translatable('tooltips.kubejs.horse_tendon.default.1').gray())
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:llama_gland')
    .addDefault(Text.translatable('tooltips.kubejs.llama_gland.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.llama_gland.alt.1', KeyActiveHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:pumpkin_shooter')
    .addDefault(Text.translatable('tooltips.kubejs.pumpkin_shooter.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.pumpkin_shooter.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:bear_paw')
    .addDefault(Text.translatable('tooltips.kubejs.bear_paw.default.1').gray())
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:parrot_beak')
    .addDefault(Text.translatable('tooltips.kubejs.parrot_beak.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.parrot_beak.alt.1', KeyActiveHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:pufferfish_liver')
    .addDefault(Text.translatable('tooltips.kubejs.pufferfish_liver.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.pufferfish_liver.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:pillager_gland')
    .addDefault(Text.translatable('tooltips.kubejs.pillager_gland.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.pillager_gland.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:rabbit_foot')
    .addDefault(Text.translatable('tooltips.kubejs.rabbit_foot.default.1').gray())
)

// RegistryOrganTooltip(new MultiStateTooltip('kubejs:ravager_hoof')
    // .addDefault(Text.translatable('tooltips.kubejs.ravager_hoof.default.1').gray())
    // .addAlt(Text.translatable('tooltips.kubejs.ravager_hoof.alt.1'))
// )

RegistryOrganTooltip(new MultiStateTooltip('kubejs:silverfish_gland')
    .addDefault(Text.translatable('tooltips.kubejs.silverfish_gland.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.silverfish_gland.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:sulfur_cube_colloid')
    .addDefault(Text.translatable('tooltips.kubejs.sulfur_cube_colloid.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.sulfur_cube_colloid.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:slime_colloid')
    .addDefault(Text.translatable('tooltips.kubejs.slime_colloid.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.slime_colloid.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:turtle_shell')
    .addDefault(Text.translatable('tooltips.kubejs.turtle_shell.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.turtle_shell.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.turtle_shell.alt.2'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:refill_agreement')
    .addDefault(Text.translatable('tooltips.kubejs.refill_agreement.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.refill_agreement.alt.1'))
)

// ===== nether.js =====
RegistryOrganTooltip(new MultiStateTooltip('kubejs:ignited_armour')
    .addDefault(Text.translatable('tooltips.kubejs.ignited_armour.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.ignited_armour.alt.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:magam_colloid')
    .addDefault(Text.translatable('tooltips.kubejs.magam_colloid.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.magam_colloid.alt.1'))
    .addCtrl(RevolutionFlameType)
    .addCtrl(Text.translatable('tooltips.kubejs.magam_colloid.ctrl.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:blaze_spine')
    .addDefault(Text.translatable('tooltips.kubejs.blaze_spine.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.blaze_spine.alt.1', KeyActiveHover, Text.gold('1')))
    .addAlt(Text.translatable('tooltips.kubejs.blaze_spine.alt.2', Text.gold('3')))
    .addCtrl(RevolutionFlameType)
    .addCtrl(Text.translatable('tooltips.kubejs.blaze_spine.ctrl.1'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:explosion_cavity')
    .addDefault(Text.translatable('tooltips.kubejs.explosion_cavity.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.explosion_cavity.alt.1', KeyActiveHover, Text.gold('10')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:ghast_sac')
    .addDefault(Text.translatable('tooltips.kubejs.ghast_sac.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.ghast_sac.alt.1', KeyActiveHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:hoglin_rumen')
    .addDefault(Text.translatable('tooltips.kubejs.hoglin_rumen.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.hoglin_rumen.alt.1', KeyActiveHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:golden_stone')
    .addDefault(Text.translatable('tooltips.kubejs.golden_stone.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.golden_stone.alt.1'))
)

// ===== plant.js =====
RegistryOrganTooltip(new MultiStateTooltip('kubejs:cherry_bone')
    .addDefault(Text.translatable('tooltips.kubejs.cherry_bone.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.cherry_bone.alt.1', VitaToxinsHover, VitaToxinsHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:crimson_brain')
    .addDefault(Text.translatable('tooltips.kubejs.crimson_brain.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.crimson_brain.alt.1', PutridToxinsHover, PutridToxinsHover))
    .addAlt(Text.translatable('tooltips.kubejs.crimson_brain.alt.2'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:hop_kidney')
    .addDefault(Text.translatable('tooltips.kubejs.hop_kidney.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.hop_kidney.alt.1', KeyActiveHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:lily_pad_lung')
    .addDefault(Text.translatable('tooltips.kubejs.lily_pad_lung.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.lily_pad_lung.alt.1', PutridToxinsHover, PutridToxinsHover))
    .addAlt(Text.translatable('tooltips.kubejs.lily_pad_lung.alt.2', PutridToxinsHover, PutridToxinsHover))
)


RegistryOrganTooltip(new MultiStateTooltip('kubejs:pitcher_stomach')
    .addDefault(Text.translatable('tooltips.kubejs.pitcher_stomach.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.pitcher_stomach.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.pitcher_stomach.alt.2', PutridToxinsHover))
    .addAlt(Text.translatable('tooltips.kubejs.pitcher_stomach.alt.3'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:twisting_weeping_intestine')
    .addDefault(Text.translatable('tooltips.kubejs.twisting_weeping_intestine.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.twisting_weeping_intestine.alt.1', KeyActiveHover))
    .addAlt(Text.translatable('tooltips.kubejs.twisting_weeping_intestine.alt.2', PutridToxinsHover))
    .addAlt(Text.translatable('tooltips.kubejs.twisting_weeping_intestine.alt.3'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:vita_berry')
    .addDefault(Text.translatable('tooltips.kubejs.vita_berry.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.vita_berry.alt.1', VitaToxinsHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:vita_rose_liver')
    .addDefault(Text.translatable('tooltips.kubejs.vita_rose_liver.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.vita_rose_liver.alt.1', VitaToxinsHover))
    .addAlt(Text.translatable('tooltips.kubejs.vita_rose_liver.alt.2', VitaToxinsHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:vita_sunflower')
    .addDefault(Text.translatable('tooltips.kubejs.vita_sunflower.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.vita_sunflower.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.vita_sunflower.alt.2', VitaToxinsHover, VitaToxinsHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:rootling_ectoplasm')
    .addDefault(Text.translatable('tooltips.kubejs.rootling_ectoplasm.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.rootling_ectoplasm.alt.1', Text.gold('9 * 9')))
    .addAlt(Text.translatable('tooltips.kubejs.rootling_ectoplasm.alt.2', Text.gold('5')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:foliaath_stem')
    .addDefault(Text.translatable('tooltips.kubejs.foliaath_stem.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.foliaath_stem.alt.1', Text.gold('3')))
)

// ===== relic.js =====
RegistryOrganTooltip(new MultiStateTooltip('kubejs:immortal_volcanic_rock')
    .addDefault(Text.translatable('tooltips.kubejs.immortal_volcanic_rock.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.immortal_volcanic_rock.alt.1', Text.gold('100'), Text.gold('1')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:ender_guardian_spine')
    .addDefault(Text.translatable('tooltips.kubejs.ender_guardian_spine.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.ender_guardian_spine.alt.1', Text.gold('10')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:netherite_muscle')
    .addDefault(Text.translatable('tooltips.kubejs.netherite_muscle.default.1').gray())
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:harbinger_lung')
    .addDefault(Text.translatable('tooltips.kubejs.harbinger_lung.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.harbinger_lung.alt.1', Text.gold('1')))
)

// RegistryOrganTooltip(new MultiStateTooltip('kubejs:leviathan_rib')
    // .addDefault(Text.translatable('tooltips.kubejs.leviathan_rib.default.1').gray())
    // .addAlt(Text.translatable('tooltips.kubejs.leviathan_rib.alt.1', Text.gold('3'), Text.gold('1')))
// )

RegistryOrganTooltip(new MultiStateTooltip('kubejs:remnant_heart')
    .addDefault(Text.translatable('tooltips.kubejs.remnant_heart.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.remnant_heart.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.remnant_heart.alt.2'))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:maledictus_wing')
    .addDefault(Text.translatable('tooltips.kubejs.maledictus_wing.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.maledictus_wing.alt.1', KeyActiveHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:scylla_star_gem')
    .addDefault(Text.translatable('tooltips.kubejs.scylla_star_gem.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.scylla_star_gem.alt.1', Text.gold('2'), FrozenHover))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:bookwyrm_star_gem')
    .addDefault(Text.translatable('tooltips.kubejs.bookwyrm_star_gem.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.bookwyrm_star_gem.alt.1'))
)

// RegistryOrganTooltip(new MultiStateTooltip('kubejs:dying_heart')
    // .addDefault(Text.translatable('tooltips.kubejs.dying_heart.default.1').gray())
    // .addAlt(Text.translatable('tooltips.kubejs.dying_heart.alt.1'))
    // .addAlt(Text.translatable('tooltips.kubejs.dying_heart.alt.2'))
// )

RegistryOrganTooltip(new MultiStateTooltip('kubejs:warden_core')
    .addDefault(Text.translatable('tooltips.kubejs.warden_core.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.warden_core.alt.1', KeyActiveHover))
    .addAlt(Text.translatable('tooltips.kubejs.warden_core.alt.2'))
)

// ===== rose.js =====
RegistryOrganTooltip(new MultiStateTooltip('kubejs:rose_quartz_muscle')
    .addDefault(Text.translatable('tooltips.kubejs.rose_quartz_muscle.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.rose_quartz_muscle.alt.1', Text.gold('1'), Text.gold('1')))
    .addCtrl(RosyExplosionSlotType)
    .addCtrl(Text.translatable('tooltips.kubejs.rose_quartz_muscle.ctrl.1'))
    .addCtrl(Text.translatable('tooltips.kubejs.rose_quartz_muscle.ctrl.2', Text.gold('1'), Text.gold('1')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:rose_quartz_heart')
    .addDefault(Text.translatable('tooltips.kubejs.rose_quartz_heart.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.rose_quartz_heart.alt.1', Text.gold('1'), Text.gold('0.5')))
    .addCtrl(RosyExplosionSlotType)
    .addCtrl(Text.translatable('tooltips.kubejs.rose_quartz_heart.ctrl.1'))
    .addCtrl(Text.translatable('tooltips.kubejs.rose_quartz_heart.ctrl.2', Text.gold('1'), Text.gold('0.5')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:rose_quartz_rib')
    .addDefault(Text.translatable('tooltips.kubejs.rose_quartz_rib.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.rose_quartz_rib.alt.1', Text.gold('1'), Text.gold('0.5')))
    .addCtrl(RosyExplosionSlotType)
    .addCtrl(Text.translatable('tooltips.kubejs.rose_quartz_rib.ctrl.1'))
    .addCtrl(Text.translatable('tooltips.kubejs.rose_quartz_rib.ctrl.2', Text.gold('1'), Text.gold('0.5')))
)


RegistryOrganTooltip(new MultiStateTooltip('kubejs:rose_quartz_dialyzer')
    .addDefault(Text.translatable('tooltips.kubejs.rose_quartz_dialyzer.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.rose_quartz_dialyzer.alt.1', KeyActiveHover))
    .addAlt(Text.translatable('tooltips.kubejs.rose_quartz_dialyzer.alt.2', Text.gold('1'), Text.gold('3')))
    .addCtrl(RosyExplosionSlotType)
    .addCtrl(Text.translatable('tooltips.kubejs.rose_quartz_dialyzer.ctrl.1'))
    .addCtrl(Text.translatable('tooltips.kubejs.rose_quartz_dialyzer.ctrl.2', Text.gold('1'), Text.gold('1')))
)

RegistryOrganTooltip(new MultiStateTooltip('kubejs:rose_quartz_liver')
    .addDefault(Text.translatable('tooltips.kubejs.rose_quartz_liver.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.rose_quartz_liver.alt.1', Text.gold('1'), Text.gold('0.5')))
    .addCtrl(RosyExplosionSlotType)
    .addCtrl(Text.translatable('tooltips.kubejs.rose_quartz_liver.ctrl.1'))
    .addCtrl(Text.translatable('tooltips.kubejs.rose_quartz_liver.ctrl.2', Text.gold('1'), Text.gold('0.5')))
)

