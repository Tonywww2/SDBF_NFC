// priority: 500
// [merged] ender.js, food.js, infected.js, legend.js, machine.js, magic.js, nature.js, nether.js, plant.js, relic.js, rose.js

// ===== ender.js =====
StartupEvents.registry('item', event => {
    // event.create('kubejs:dragon_blood_heart').maxStackSize(1).food(food => food.hunger(2).saturation(1).effect('minecraft:regeneration', 600, 0, 1)).texture('kubejs:item/organs/ender/dragon_blood_heart').tag('kubejs:dragon').tag('kubejs:ender').tag('kubejs:heart')
    event.create('kubejs:dragon_blood_liver').maxStackSize(1).food(food => food.hunger(2).saturation(1).effect('minecraft:regeneration', 600, 0, 1)).texture('kubejs:item/organs/ender/dragon_blood_liver').tag('kubejs:dragon').tag('kubejs:ender').tag('kubejs:liver')
    event.create('kubejs:dragon_blood_lung').maxStackSize(1).food(food => food.hunger(2).saturation(1).effect('minecraft:regeneration', 600, 0, 1)).texture('kubejs:item/organs/ender/dragon_blood_lung').tag('kubejs:dragon').tag('kubejs:ender').tag('kubejs:lung')
    event.create('kubejs:dragon_blood_muscle').maxStackSize(1).food(food => food.hunger(2).saturation(1).effect('minecraft:regeneration', 600, 0, 1)).texture('kubejs:item/organs/ender/dragon_blood_muscle').tag('kubejs:dragon').tag('kubejs:ender').tag('kubejs:muscle')
    event.create('kubejs:dragon_blood_rib').maxStackSize(1).texture('kubejs:item/organs/ender/dragon_blood_rib').tag('kubejs:dragon').tag('kubejs:ender').tag('kubejs:bone')
    event.create('kubejs:dragon_blood_kidney').maxStackSize(1).food(food => food.hunger(2).saturation(1).effect('minecraft:regeneration', 600, 0, 1)).texture('kubejs:item/organs/ender/dragon_blood_kidney').tag('kubejs:dragon').tag('kubejs:ender').tag('kubejs:kidney')
    event.create('kubejs:dragon_blood_spine').maxStackSize(1).texture('kubejs:item/organs/ender/dragon_blood_spine').tag('kubejs:dragon').tag('kubejs:ender').tag('kubejs:spine')
    event.create('kubejs:dragon_blood_intestine').maxStackSize(1).food(food => food.hunger(2).saturation(1).effect('minecraft:regeneration', 600, 0, 1)).texture('kubejs:item/organs/ender/dragon_blood_intestine').tag('kubejs:dragon').tag('kubejs:ender').tag('kubejs:intestine')
    event.create('kubejs:dragon_blood_stomach').maxStackSize(1).food(food => food.hunger(2).saturation(1).effect('minecraft:regeneration', 600, 0, 1)).texture('kubejs:item/organs/ender/dragon_blood_stomach').tag('kubejs:dragon').tag('kubejs:ender').tag('kubejs:stomach')

    event.create('kubejs:ender_golem_line').maxStackSize(1).texture('kubejs:item/organs/ender/ender_golem_line').tag('kubejs:ender')

    event.create('kubejs:endermaptera_shell').maxStackSize(1).texture('kubejs:item/organs/ender/endermaptera_shell').tag('kubejs:ender')

    // event.create('kubejs:ender_eye').maxStackSize(1).texture('kubejs:item/organs/ender/ender_eye').food(food => food.hunger(1).saturation(0.5).effect('minecraft:night_vision', 600, 0, 1)).tag('kubejs:ender')

    event.create('kubejs:endermite_gland').maxStackSize(1).texture('kubejs:item/organs/ender/endermite_gland').tag('kubejs:ender')

    event.create('kubejs:phantom_wing').maxStackSize(1).texture('kubejs:item/organs/ender/phantom_wing').tag('kubejs:ender')

    event.create('kubejs:ender_breath').maxStackSize(1).texture('kubejs:item/organs/ender/ender_breath').tag('kubejs:ender').tag('kubejs:basic')
    event.create('kubejs:ender_ectoplasm').maxStackSize(1).texture('kubejs:item/organs/ender/ender_ectoplasm').tag('kubejs:ender').tag('kubejs:basic')
})

// ===== food.js =====
StartupEvents.registry('item', event => {
    event.create('kubejs:king_of_stomach').maxStackSize(1).texture('kubejs:item/organs/food/king_of_stomach').tag('kubejs:stomach')

    event.create('kubejs:sweets_gland').food(food => food.hunger(2).saturation(1).alwaysEdible()).maxStackSize(1).texture('kubejs:item/organs/food/sweets_gland').tag('kubejs:food')

    event.create('kubejs:beer_gland').food(food => food.hunger(2).saturation(1).alwaysEdible()).maxStackSize(1).texture('kubejs:item/organs/food/beer_gland').tag('kubejs:food')

    event.create('kubejs:parasitism_stomach').maxStackSize(1).texture('kubejs:item/organs/food/parasitism_stomach').tag('kubejs:food')

    event.create('kubejs:greedy_throat').maxStackSize(1).texture('kubejs:item/organs/food/greedy_throat').tag('kubejs:food')

    event.create('kubejs:worm_larva').maxStackSize(1).maxDamage(100).texture('kubejs:item/organs/food/worm_larva').tag('kubejs:food').tag('chestcavity:cannot_remove')

    event.create('kubejs:jar_of_vacuum').maxStackSize(1).texture('kubejs:item/organs/food/jar_of_vacuum')

    event.create('kubejs:jar_of_mystery').maxStackSize(1).maxDamage(10).texture('kubejs:item/organs/food/jar_of_mystery')

    event.create('kubejs:worm_of_taste').maxStackSize(1).food(food => food.hunger(1).saturation(1).effect('minecraft:nausea', 200, 0, 1)).texture('kubejs:item/organs/food/worm_of_taste').tag('kubejs:food').tag('kubejs:infected')

    event.create('kubejs:worm_of_gula').maxStackSize(1).food(food => food.hunger(8).saturation(1.5)).texture('kubejs:item/organs/food/worm_of_gula').tag('kubejs:food').tag('kubejs:infected').tag('chestcavity:cannot_remove')

    event.create('kubejs:gula_beacon').maxStackSize(1).food(food => food.hunger(1).saturation(1)).texture('kubejs:item/organs/food/gula_beacon').tag('kubejs:food').tag('kubejs:infected').tag('chestcavity:cannot_remove')

    event.create('kubejs:gula_worm_nest').maxStackSize(1).food(food => food.hunger(4).saturation(0.5)).texture('kubejs:item/organs/food/gula_worm_nest').tag('kubejs:food').tag('kubejs:infected').tag('chestcavity:cannot_remove')

    event.create('kubejs:deserted_gula_worm_nest').maxStackSize(1).food(food => food.hunger(1).saturation(0.5)).texture('kubejs:item/organs/food/deserted_gula_worm_nest').tag('kubejs:food').tag('kubejs:infected')

    event.create('kubejs:sweet_heart').maxStackSize(1).food(food => food.hunger(2).saturation(4)).texture('kubejs:item/organs/food/sweet_heart').tag('kubejs:food').tag('kubejs:heart')

    event.create('kubejs:baguette_bone').maxStackSize(1).food(food => food.hunger(4).saturation(1)).texture('kubejs:item/organs/food/baguette_bone').tag('kubejs:food').tag('kubejs:bone')

    event.create('kubejs:gluten_muscle').maxStackSize(1).food(food => food.hunger(10).saturation(0.1)).texture('kubejs:item/organs/food/gluten_muscle').tag('kubejs:food').tag('kubejs:muscle')

    event.create('kubejs:living_beef_wellington').maxStackSize(1).food(food => food.hunger(8).saturation(0.5)).texture('kubejs:item/organs/food/living_beef_wellington').tag('kubejs:food').tag('kubejs:muscle')

    event.create('kubejs:mashed_potato_pancreas').maxStackSize(1).food(food => food.hunger(4).saturation(1)).texture('kubejs:item/organs/food/mashed_potato_pancreas').tag('kubejs:food').tag('kubejs:pancreas')

    event.create('kubejs:tasty_gland').maxStackSize(1).food(food => food.hunger(3).saturation(1)).texture('kubejs:item/organs/food/tasty_gland').tag('kubejs:food')

    event.create('kubejs:void_stomach_pouch').maxStackSize(1).texture('kubejs:item/organs/food/void_stomach_pouch').maxDamage(60).tag('kubejs:food').tag('kubejs:stomach').tag('chestcavity:cannot_remove')
})

// ===== infected.js =====
StartupEvents.registry('item', event => {
    event.create('kubejs:rotten_appendix').maxStackSize(1).food(food => food.hunger(1).saturation(0.5).effect('minecraft:hunger', 200, 0, 0.6)).tag('kubejs:infected').tag('kubejs:basic').texture('kubejs:item/organs/infected/rotten_appendix').tag('kubejs:appendix')
    event.create('kubejs:rotten_intestine').maxStackSize(1).food(food => food.hunger(1).saturation(0.5).effect('minecraft:hunger', 200, 0, 0.6)).tag('kubejs:infected').tag('kubejs:basic').texture('kubejs:item/organs/infected/rotten_intestine').tag('kubejs:intestine')
    event.create('kubejs:rotten_heart').maxStackSize(1).food(food => food.hunger(1).saturation(0.5).effect('minecraft:hunger', 200, 0, 0.6)).tag('kubejs:infected').tag('kubejs:basic').texture('kubejs:item/organs/infected/rotten_heart').tag('kubejs:heart')
    event.create('kubejs:rotten_kidney').maxStackSize(1).food(food => food.hunger(1).saturation(0.5).effect('minecraft:hunger', 200, 0, 0.6)).tag('kubejs:infected').tag('kubejs:basic').texture('kubejs:item/organs/infected/rotten_kidney').tag('kubejs:kidney')
    event.create('kubejs:rotten_liver').maxStackSize(1).food(food => food.hunger(1).saturation(0.5).effect('minecraft:hunger', 200, 0, 0.6)).tag('kubejs:infected').tag('kubejs:basic').texture('kubejs:item/organs/infected/rotten_liver').tag('kubejs:liver')
    event.create('kubejs:rotten_lung').maxStackSize(1).food(food => food.hunger(1).saturation(0.5).effect('minecraft:hunger', 200, 0, 0.6)).tag('kubejs:infected').tag('kubejs:basic').texture('kubejs:item/organs/infected/rotten_lung').tag('kubejs:lung')
    event.create('kubejs:rotten_muscle').maxStackSize(1).food(food => food.hunger(1).saturation(0.5).effect('minecraft:hunger', 200, 0, 0.6)).tag('kubejs:infected').tag('kubejs:basic').texture('kubejs:item/organs/infected/rotten_muscle').tag('kubejs:muscle')
    event.create('kubejs:rotten_rib').maxStackSize(1).tag('kubejs:infected').tag('kubejs:basic').texture('kubejs:item/organs/infected/rotten_rib').tag('kubejs:bone')
    event.create('kubejs:rotten_spine').maxStackSize(1).tag('kubejs:infected').tag('kubejs:basic').texture('kubejs:item/organs/infected/rotten_spine').tag('kubejs:spine')
    event.create('kubejs:rotten_spleen').maxStackSize(1).food(food => food.hunger(1).saturation(0.5).effect('minecraft:hunger', 200, 0, 0.6)).tag('kubejs:infected').tag('kubejs:basic').texture('kubejs:item/organs/infected/rotten_spleen').tag('kubejs:spleen')
    event.create('kubejs:rotten_stomach').maxStackSize(1).food(food => food.hunger(1).saturation(0.5).effect('minecraft:hunger', 200, 0, 0.6)).tag('kubejs:infected').tag('kubejs:basic').texture('kubejs:item/organs/infected/rotten_stomach').tag('kubejs:stomach')

    event.create('kubejs:mutation_intestine').maxStackSize(1).food(food => food.hunger(3).saturation(0.5).effect('minecraft:fire_resistance', 200, 0, 1)).tag('kubejs:infected').texture('kubejs:item/organs/infected/mutation_intestine').tag('kubejs:intestine')

    event.create('kubejs:worm_neuron').maxStackSize(1).texture('kubejs:item/organs/infected/worm_neuron').tag('kubejs:infected')

    event.create('kubejs:tumor').texture('kubejs:item/organs/infected/tumor').food(food => food.hunger(2).saturation(1).effect('minecraft:absorption', 600, 0, 1)).maxStackSize(1).tag('kubejs:organ').tag('kubejs:infected').tag('kubejs:tumor')

    event.create('kubejs:unformed_tumor').food(food => food.hunger(1).saturation(0.5).effect('minecraft:absorption', 600, 0, 1)).texture('kubejs:item/organs/infected/unformed_tumor').maxStackSize(1).tag('kubejs:organ').tag('kubejs:infected').tag('kubejs:tumor')

    event.create('kubejs:rosy_tumor').food(food => food.hunger(2).saturation(1).effect('minecraft:fire_resistance', 600, 0, 1)).texture('kubejs:item/organs/infected/rosy_tumor').maxStackSize(1).tag('kubejs:organ').tag('kubejs:rose').tag('kubejs:infected').tag('kubejs:tumor')

    event.create('kubejs:malignant_neuron_tumor').food(food => food.hunger(1).saturation(1)).texture('kubejs:item/organs/infected/malignant_neuron_tumor').maxDamage(600).maxStackSize(1).tag('kubejs:organ').tag('kubejs:infected')

    event.create('kubejs:bone_cage').texture('kubejs:item/organs/infected/bone_cage').maxStackSize(1).tag('kubejs:infected').tag('kubejs:bone')

    event.create('kubejs:wither_bone_cage').texture('kubejs:item/organs/infected/wither_bone_cage').maxStackSize(1).tag('kubejs:infected').tag('kubejs:bone')

    event.create('kubejs:parasitic_tumor')
        .overrideStackedOnOther((stack, slot, action, player, access) => {
            if (stack.getCount() != 1 || action != ClickAction.SECONDARY) return false
            let nbt = stack.getOrCreateTag()
            if (!nbt.contains('organData')) return false
            let oStack = slot.getItem()
            if (oStack.isEmpty()) return false
            if (!oStack.hasTag('kubejs:organ') || oStack.hasTag('kubejs:tumor')) return false
            let organDataNbt = nbt.getCompound('organData')
            if (!oStack.hasNBT()) oStack.setNbt(new $CompoundTag())
            let oNbt = oStack.getNbt()
            oNbt.put('organData', organDataNbt)
            oNbt.putBoolean('Infected', true)
            stack.setCount(0)
            return true
        })
        .food(food => food.hunger(2).saturation(1).effect('minecraft:absorption', 600, 0, 1))
        .texture('kubejs:item/organs/infected/parasitic_tumor')
        .maxStackSize(1)
        .tag('kubejs:organ')
        .tag('kubejs:infected')
        .tag('kubejs:tumor')

    event.create('kubejs:primal_heart')
        .texture('kubejs:item/organs/infected/primal_heart')
        .food(food => food.hunger(4).saturation(0.5).effect('minecraft:darkness', 600, 0, 1))
        .maxStackSize(1)
        .tag('kubejs:infected')
        .tag('kubejs:heart')

    event.create('kubejs:primal_bone_cage')
        .texture('kubejs:item/organs/infected/primal_bone_cage')
        .maxStackSize(1)
        .tag('kubejs:infected')
        .tag('kubejs:bone')

    // event.create('kubejs:devour_teeth').maxStackSize(1).tag('kubejs:infected').texture('kubejs:item/organs/infected/devour_teeth')

    event.create('kubejs:nightmare_core').maxStackSize(1).tag('kubejs:infected').texture('kubejs:item/organs/infected/nightmare_core').tag('kubejs:organ').tag('kubejs:heart')

    event.create('kubejs:soul_core').maxStackSize(1).tag('kubejs:infected').texture('kubejs:item/organs/infected/soul_core').tag('kubejs:organ').tag('kubejs:heart')

    event.create('kubejs:bone_meal_bag').maxStackSize(1)
        .overrideOtherStackedOnMe((stack, oStack, slot, action, player, access) => {
            if (stack.getCount() != 1 || action != ClickAction.SECONDARY || !slot.allowModification(player)) return false
            if (oStack.isEmpty()) {
                RemoveBundleOneStack(stack).ifPresent(pStack => {
                    PlayBundleRemoveSound(player)
                    access.set(pStack)
                })
            }
            return true
        })
        .overrideStackedOnOther((stack, slot, action, player) => {
            if (stack.getCount() != 1 || action != ClickAction.SECONDARY) return false
            let oStack = slot.getItem()
            if (oStack.isEmpty()) {
                PlayBundleRemoveSound(player)
                RemoveBundleOneStack(stack).ifPresent((pStack) => slot.safeInsert(pStack))
            }
            return true
        })
        .barWidth((stack) => {
            let stackList = GetBundleContents(stack)
            return Math.min(1 + 12 * Math.min(stackList.length, 1), 13)
        })
        .barColor(() => Color.DARK_BLUE)
        .tooltipImage((stack) => {
            let itemList = $NonNullList.create()
            GetBundleContents(stack).forEach((pStack) => itemList.add(pStack))
            return Optional.of(new $BundleTooltip(itemList, GetBundleCountentWeight(stack, (pStack) => pStack.getMaxStackSize() / 64)))
        })
        .canFitInsideContainerItems(false)
        .texture('kubejs:item/organs/infected/bone_meal_bag').tag('kubejs:infected').tag('kubejs:stomach')

    event.create('kubejs:witch_fibroma')
        .overrideOtherStackedOnMe((stack, oStack, slot, action, player, access) => {
            if (stack.getCount() != 1 || action != ClickAction.SECONDARY || !slot.allowModification(player)) return false
            if (oStack.isEmpty()) {
                RemoveBundleOneStack(stack).ifPresent(pStack => {
                    PlayBundleRemoveSound(player)
                    access.set(pStack)
                })
            } else if (!$PotionUtils.getPotion(oStack).effects.isEmpty()) {
                let added = AddItemIntoBundle(stack, oStack, 1, (pStack) => 1)
                if (added > 0) {
                    PlayerBundleInsertSound(player)
                    oStack.shrink(added)
                }
            }
            return true
        })
        .overrideStackedOnOther((stack, slot, action, player) => {
            if (stack.getCount() != 1 || action != ClickAction.SECONDARY) return false
            let oStack = slot.getItem()
            if (oStack.isEmpty()) {
                PlayBundleRemoveSound(player)
                RemoveBundleOneStack(stack).ifPresent((pStack) => slot.safeInsert(pStack))
            } else if (!$PotionUtils.getPotion(oStack).effects.isEmpty()) {
                let added = AddItemIntoBundle(stack, slot.safeTake(oStack.getCount(), 65535, player), 1, (pStack) => 1)
                if (added > 0) PlayerBundleInsertSound(player)
            }
            return true
        })
        .barWidth((stack) => {
            let stackList = GetBundleContents(stack)
            return Math.min(1 + 12 * stackList.length, 13)
        })
        .barColor(() => Color.DARK_BLUE)
        .tooltipImage((stack) => {
            let itemList = $NonNullList.create()
            GetBundleContents(stack).forEach((pStack) => itemList.add(pStack))
            return Optional.of(new $BundleTooltip(itemList, GetBundleCountentWeight(stack, (pStack) => 1)))
        })
        .food(food => food.hunger(2).saturation(1).effect('minecraft:absorption', 600, 0, 1))
        .canFitInsideContainerItems(false)
        .texture('kubejs:item/organs/infected/witch_fibroma')
        .maxStackSize(1)
        .tag('kubejs:infected')
        .tag('kubejs:stomach')
})

// ===== legend.js =====
StartupEvents.registry('item', event => {
    event.create('kubejs:prismarine_crown').maxStackSize(1).texture('kubejs:item/organs/legends/prismarine_crown').tag('kubejs:legend')
})

// ===== machine.js =====
StartupEvents.registry('item', event => {
    event.create('kubejs:furnace_core').maxStackSize(1).texture('kubejs:item/organs/machine/furnace_core').maxDamage(100).tag('kubejs:heart').tag('kubejs:machine')
    event.create('kubejs:burning_heart').maxStackSize(1).texture('kubejs:item/organs/machine/burning_heart').maxDamage(100).tag('kubejs:heart').tag('kubejs:machine')
    event.create('kubejs:revolution_cable').maxStackSize(1).texture('kubejs:item/organs/machine/revolution_cable').tag('kubejs:revolution').tag('kubejs:machine').tag('kubejs:spine')
    event.create('kubejs:revolution_relay').maxStackSize(1).texture('kubejs:item/organs/machine/revolution_relay').tag('kubejs:revolution').tag('kubejs:machine')
    event.create('kubejs:revolution_delay').maxStackSize(1).texture('kubejs:item/organs/machine/revolution_delay').tag('kubejs:revolution').tag('kubejs:machine')
    event.create('kubejs:revolution_bell').maxStackSize(1).texture('kubejs:item/organs/machine/revolution_bell').tag('kubejs:revolution').tag('kubejs:machine')
    event.create('kubejs:blaze_pressurizer').maxStackSize(1).texture('kubejs:item/organs/machine/blaze_pressurizer').tag('kubejs:machine')

    event.create('kubejs:telescopic_arm').maxStackSize(1).texture('kubejs:item/organs/machine/telescopic_arm').tag('kubejs:machine')
    event.create('kubejs:telescopic_attack_arm').maxStackSize(1).texture('kubejs:item/organs/machine/telescopic_attack_arm').tag('kubejs:machine')

    event.create('kubejs:lava_life_cycle_system').maxStackSize(1).texture('kubejs:item/organs/machine/lava_life_cycle_system').tag('kubejs:machine')

    event.create('kubejs:prowler_rotating_shaft').maxStackSize(1).texture('kubejs:item/organs/machine/prowler_rotating_shaft').tag('kubejs:machine')

    event.create('kubejs:watcher_probe').maxStackSize(1).texture('kubejs:item/organs/machine/watcher_probe').tag('kubejs:machine')

    event.create('kubejs:fiery_core').maxStackSize(1).texture('kubejs:item/organs/machine/fiery_core').fireResistant().tag('kubejs:machine').tag('kubejs:heart')

    event.create('kubejs:thermometer').maxStackSize(1).texture('kubejs:item/organs/machine/thermometer').tag('kubejs:machine').tag('kubejs:bone')

    event.create('kubejs:energy_bottle_red').maxStackSize(1).texture('kubejs:item/organs/machine/energy_bottle_red').maxDamage(100).tag('kubejs:muscle').tag('kubejs:machine')

    event.create('kubejs:small_acid_tank').maxStackSize(1).texture('kubejs:item/organs/machine/small_acid_tank').maxDamage(600).tag('kubejs:machine')

    event.create('kubejs:iron_repair_device').maxStackSize(1).texture('kubejs:item/organs/machine/iron_repair_device').tag('kubejs:machine')

    event.create('kubejs:cyborgization_device').maxStackSize(1).texture('kubejs:item/organs/machine/cyborgization_device').tag('kubejs:machine').maxDamage(30)

    event.create('kubejs:programmable_automatic_core').texture('kubejs:item/organs/machine/programmable_automatic_core').maxStackSize(1).tag('kubejs:machine')

    event.create('kubejs:inner_furnace').maxStackSize(1).tag('kubejs:machine').tag('kubejs:basic').texture('kubejs:item/organs/machine/inner_furnace').tag('kubejs:heart')
    event.create('kubejs:golem_cable').maxStackSize(1).tag('kubejs:machine').tag('kubejs:basic').texture('kubejs:item/organs/machine/golem_cable').tag('kubejs:spine')
    event.create('kubejs:golem_plating').maxStackSize(1).tag('kubejs:machine').tag('kubejs:basic').texture('kubejs:item/organs/machine/golem_plating').tag('kubejs:bone')
    event.create('kubejs:piston_muscle').maxStackSize(1).tag('kubejs:machine').tag('kubejs:basic').texture('kubejs:item/organs/machine/piston_muscle').tag('kubejs:muscle')
})

// ===== magic.js =====
StartupEvents.registry('item', event => {
    event.create('kubejs:animted_soul').maxStackSize(1).texture('kubejs:item/organs/magic/animted_soul').tag('kubejs:magic')
    // event.create('kubejs:shulker_eye').maxStackSize(1).texture('kubejs:item/organs/magic/shulker_eye').tag('kubejs:magic')
    // 星宝石
    event.create('kubejs:whirlisprig_star_gem').maxStackSize(1).texture('kubejs:item/organs/magic/whirlisprig_star_gem').tag('kubejs:magic').tag('kubejs:gem')
    event.create('kubejs:heal_star_gem').maxStackSize(1).texture('kubejs:item/organs/magic/heal_star_gem').tag('kubejs:magic').tag('kubejs:gem')
    event.create('kubejs:deepling_star_gem').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/deepling_star_gem').tag('kubejs:gem')
    event.create('kubejs:drygmy_star_gem').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/drygmy_star_gem').tag('kubejs:gem')
    event.create('kubejs:starbuncle_star_gem').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/starbuncle_star_gem').tag('kubejs:gem')
    event.create('kubejs:bookwyrm_star_gem').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/bookwyrm_star_gem').tag('kubejs:gem')

    event.create('kubejs:soul_cage').maxStackSize(1).maxDamage(50).texture('kubejs:item/organs/magic/soul_cage').tag('kubejs:magic')
    event.create('kubejs:soul_wing').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/soul_wing')
    event.create('kubejs:coral_armor').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/coral_armor')
    event.create('kubejs:deepling_ectoplasm').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/deepling_ectoplasm')
    event.create('kubejs:amethyst_core').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/amethyst_core')
    event.create('kubejs:koboleton_spine').maxStackSize(1).tag('kubejs:magic').tag('kubejs:spine').texture('kubejs:item/organs/magic/koboleton_spine')
    event.create('kubejs:koboleton_rib').maxStackSize(1).tag('kubejs:magic').tag('kubejs:bone').texture('kubejs:item/organs/magic/koboleton_rib')
    event.create('kubejs:koboleton_coccyx').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/koboleton_coccyx')
    event.create('kubejs:aptrgangr_soul').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/aptrgangr_soul')
    event.create('kubejs:draugr_skull').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/draugr_skull')
    event.create('kubejs:hippocamtus_scale').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/hippocamtus_scale')
    // event.create('kubejs:calamity_bone_spur').maxStackSize(1).tag('kubejs:magic').tag('kubejs:bone').texture('kubejs:item/organs/magic/calamity_bone_spur')
    // event.create('kubejs:potion_skin').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/potion_skin')
    event.create('kubejs:exhausted_source_focus_crystal').maxStackSize(1).maxDamage(100).texture('kubejs:item/organs/magic/exhausted_source_focus_crystal').tag('kubejs:magic')
})

// ===== nature.js =====
StartupEvents.registry('item', event => {
    // event.create('kubejs:sea_bunny_skin').food(food => food.hunger(1).saturation(0.5)).maxStackSize(1).texture('kubejs:item/organs/nature/sea_bunny_skin').tag('kubejs:nature')

    event.create('kubejs:mammary_gland').food(food => food.hunger(1).saturation(0.5)).maxStackSize(1).texture('kubejs:item/organs/nature/mammary_gland').tag('kubejs:nature')

    event.create('kubejs:moew_nose').food(food => food.hunger(1).saturation(0.5)).maxStackSize(1).texture('kubejs:item/organs/nature/moew_nose').tag('kubejs:nature')

    event.create('kubejs:leaf_insect_exoskeleton').maxStackSize(1).texture('kubejs:item/organs/nature/leaf_insect_exoskeleton').tag('kubejs:nature')

    event.create('kubejs:tentacles_harvester').maxStackSize(1).texture('kubejs:item/organs/nature/tentacles_harvester').tag('kubejs:nature')

    event.create('kubejs:dumbo_octopus_hat').maxStackSize(1).texture('kubejs:item/organs/nature/dumbo_octopus_hat').tag('kubejs:nature')

    event.create('kubejs:ferret_tail').food(food => food.hunger(2).saturation(0.5)).maxStackSize(1).texture('kubejs:item/organs/nature/ferret_tail').tag('kubejs:nature')

    event.create('kubejs:jumping_spider_leg').food(food => food.hunger(2).saturation(0.5).effect('minecraft:poison', 200, 0, 0.5)).maxStackSize(1).texture('kubejs:item/organs/nature/jumping_spider_leg').tag('kubejs:nature').tag('kubejs:muscle')

    event.create('kubejs:spider_leg').food(food => food.hunger(2).saturation(0.5).effect('minecraft:poison', 200, 0, 0.5)).maxStackSize(1).texture('kubejs:item/organs/nature/spider_leg').tag('kubejs:nature').tag('kubejs:muscle')

    event.create('kubejs:koi_fish_scale').maxStackSize(1).texture('kubejs:item/organs/nature/koi_fish_scale').tag('kubejs:nature')

    event.create('kubejs:otter_tooth').maxStackSize(1).texture('kubejs:item/organs/nature/otter_tooth').tag('kubejs:nature')

    event.create('kubejs:red_panda_tail').food(food => food.hunger(1).saturation(0.5)).maxStackSize(1).texture('kubejs:item/organs/nature/red_panda_tail').tag('kubejs:nature')

    event.create('kubejs:shima_enaga_feather').maxStackSize(1).texture('kubejs:item/organs/nature/shima_enaga_feather').tag('kubejs:nature')

    event.create('kubejs:deer_horn').maxStackSize(1).texture('kubejs:item/organs/nature/deer_horn').tag('kubejs:nature')

    event.create('kubejs:red_wolf_beard').maxDamage(30).maxStackSize(1).texture('kubejs:item/organs/nature/red_wolf_beard').tag('kubejs:nature')

    event.create('kubejs:raccoon_paw').food(food => food.hunger(1).saturation(0.5)).maxDamage(30).maxStackSize(1).texture('kubejs:item/organs/nature/raccoon_paw').tag('kubejs:nature')

    event.create('kubejs:boar_nose').maxDamage(30).maxStackSize(1).texture('kubejs:item/organs/nature/boar_nose').tag('kubejs:nature')

    event.create('kubejs:minisheep_gland').food(food => food.hunger(1).saturation(0.5)).maxStackSize(1).texture('kubejs:item/organs/nature/minisheep_gland').tag('kubejs:nature')

    event.create('kubejs:squirrel_tail').food(food => food.hunger(1).saturation(0.5)).maxStackSize(1).texture('kubejs:item/organs/nature/squirrel_tail').tag('kubejs:nature')

    event.create('kubejs:pelican_larynx').food(food => food.hunger(1).saturation(0.5)).maxStackSize(1).texture('kubejs:item/organs/nature/pelican_larynx').tag('kubejs:nature')

    event.create('kubejs:owl_vertebrae').food(food => food.hunger(2).saturation(0.5)).maxStackSize(1).texture('kubejs:item/organs/nature/owl_vertebrae').tag('kubejs:nature')

    event.create('kubejs:bison_horn').maxStackSize(1).texture('kubejs:item/organs/nature/bison_horn').tag('kubejs:nature')

    // event.create('kubejs:turkey_gizzard').maxStackSize(1).texture('kubejs:item/organs/nature/turkey_gizzard').tag('kubejs:nature').tag('kubejs:stomach')

    event.create('kubejs:penguin_flipper').maxStackSize(1).texture('kubejs:item/organs/nature/penguin_flipper').tag('kubejs:nature')

    event.create('kubejs:dog_tail').maxStackSize(1).texture('kubejs:item/organs/nature/dog_tail').tag('kubejs:nature')

    event.create('kubejs:hedgehog_thorn').maxStackSize(1).texture('kubejs:item/organs/nature/hedgehog_thorn').tag('kubejs:nature')

    event.create('kubejs:cassowary_muscle').maxStackSize(1).texture('kubejs:item/organs/nature/cassowary_muscle').tag('kubejs:nature').tag('kubejs:muscle')

    event.create('kubejs:flamingo_beak').maxStackSize(1).texture('kubejs:item/organs/nature/flamingo_beak').tag('kubejs:nature')

    event.create('kubejs:urchinkin_stinger').maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/urchinkin_stinger')

    event.create('kubejs:giant_claw').maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/giant_claw')

    event.create('kubejs:cindaria_umbrella').maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/cindaria_umbrella')

    event.create('kubejs:wilden_heart').maxStackSize(1).tag('kubejs:heart').tag('kubejs:nature').texture('kubejs:item/organs/nature/wilden_heart')

    event.create('kubejs:chimera_heart').maxStackSize(1).tag('kubejs:heart').tag('kubejs:nature').texture('kubejs:item/organs/nature/chimera_heart')

    event.create('kubejs:dragonfly_wing').maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/dragonfly_wing')

    event.create('kubejs:leech_mouthpart').maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/leech_mouthpart')

    event.create('kubejs:rat_ear').maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/rat_ear')

    event.create('kubejs:bee_honey_stomach').maxStackSize(1).maxDamage(5).tag('kubejs:nature').texture('kubejs:item/organs/nature/bee_honey_stomach').tag('kubejs:stomach')

    event.create('kubejs:wolf_fang').maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/wolf_fang')

    event.create('kubejs:pig_stomach').food(food => food.hunger(2).saturation(1)).maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/pig_stomach').tag('kubejs:stomach')

    event.create('kubejs:rib_blade').maxStackSize(1).tag('kubejs:nature').tag('kubejs:bone').texture('kubejs:item/organs/nature/rib_blade')

    event.create('kubejs:allay_wing').maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/allay_wing')

    event.create('kubejs:symbiocto_arm').food(food => food.hunger(3).saturation(1)).maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/symbiocto_arm').tag('kubejs:nature').tag('kubejs:muscle')

    event.create('kubejs:axolotl_gill').food(food => food.hunger(2).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/axolotl_gill').tag('kubejs:lung')

    event.create('kubejs:bat_throat').maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/bat_throat')

    event.create('kubejs:hatching_chamber').maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/hatching_chamber')

    event.create('kubejs:swim_bladder').maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/swim_bladder').tag('kubejs:lung')

    event.create('kubejs:dolphin_fin').maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/dolphin_fin')

    event.create('kubejs:guardian_core').maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/guardian_core')

    // event.create('kubejs:elder_guardian_core').maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/elder_guardian_core')

    event.create('kubejs:camel_hump').food(food => food.hunger(3).saturation(2)).maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/camel_hump')

    event.create('kubejs:fox_tail').food(food => food.hunger(1).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/fox_tail')

    event.create('kubejs:frog_tongue').food(food => food.hunger(2).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/frog_tongue')

    event.create('kubejs:glow_gland').food(food => food.hunger(2).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/glow_gland')

    event.create('kubejs:horse_tendon').food(food => food.hunger(1).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/horse_tendon').tag('kubejs:muscle')

    event.create('kubejs:llama_gland').food(food => food.hunger(1).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/llama_gland')

    event.create('kubejs:bear_paw').food(food => food.hunger(1).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/bear_paw')

    event.create('kubejs:pillager_gland').food(food => food.hunger(1).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/pillager_gland')

    event.create('kubejs:pufferfish_liver').food(food => food.hunger(2).saturation(1).effect('minecraft:poison', 200, 0, 1)).maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/pufferfish_liver').tag('kubejs:liver')

    event.create('kubejs:rabbit_foot').food(food => food.hunger(1).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/rabbit_foot')

    // event.create('kubejs:ravager_hoof').maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/ravager_hoof')

    event.create('kubejs:silverfish_gland').food(food => food.hunger(1).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/silverfish_gland')

    event.create('kubejs:slime_colloid').food(food => food.hunger(2).saturation(1)).maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/slime_colloid')

    event.create('kubejs:sulfur_cube_colloid').food(food => food.hunger(2).saturation(1)).maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/sulfur_cube_colloid')

    event.create('kubejs:pumpkin_shooter').maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/pumpkin_shooter')

    event.create('kubejs:turtle_shell').maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/turtle_shell')

    event.create('kubejs:refill_agreement').maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/refill_agreement')

    event.create('kubejs:armadillo_shell').maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nature/armadillo_shell')

    event.create('kubejs:appendix').food(food => food.hunger(2).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/appendix').tag('kubejs:appendix')
    event.create('kubejs:intestine').food(food => food.hunger(2).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/intestine').tag('kubejs:intestine')
    event.create('kubejs:heart').food(food => food.hunger(2).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/heart').tag('kubejs:heart')
    event.create('kubejs:kidney').food(food => food.hunger(2).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/kidney').tag('kubejs:kidney')
    event.create('kubejs:liver').food(food => food.hunger(2).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/liver').tag('kubejs:liver')
    event.create('kubejs:lung').food(food => food.hunger(2).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/lung').tag('kubejs:lung')
    event.create('kubejs:muscle').food(food => food.hunger(2).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/muscle').tag('kubejs:muscle')
    event.create('kubejs:rib').maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/rib').tag('kubejs:bone')
    event.create('kubejs:spine').maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/spine').tag('kubejs:spine')
    event.create('kubejs:spleen').food(food => food.hunger(2).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/spleen').tag('kubejs:spleen')
    event.create('kubejs:stomach').food(food => food.hunger(2).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/stomach').tag('kubejs:stomach')

    event.create('kubejs:animal_appendix').food(food => food.hunger(2).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/animal_appendix').tag('kubejs:appendix')
    event.create('kubejs:animal_intestine').food(food => food.hunger(2).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/animal_intestine').tag('kubejs:intestine')
    event.create('kubejs:animal_heart').food(food => food.hunger(2).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/animal_heart').tag('kubejs:heart')
    event.create('kubejs:animal_kidney').food(food => food.hunger(2).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/animal_kidney').tag('kubejs:kidney')
    event.create('kubejs:animal_liver').food(food => food.hunger(2).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/animal_liver').tag('kubejs:liver')
    event.create('kubejs:animal_lung').food(food => food.hunger(2).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/animal_lung').tag('kubejs:lung')
    event.create('kubejs:animal_muscle').food(food => food.hunger(2).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/animal_muscle').tag('kubejs:muscle')
    event.create('kubejs:animal_rib').maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/animal_rib').tag('kubejs:bone')
    event.create('kubejs:animal_spine').maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/animal_spine').tag('kubejs:spine')
    event.create('kubejs:animal_spleen').food(food => food.hunger(2).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/animal_spleen').tag('kubejs:spleen')
    event.create('kubejs:animal_stomach').food(food => food.hunger(2).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/animal_stomach').tag('kubejs:stomach')

    event.create('kubejs:rumen').food(food => food.hunger(2).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/rumen').tag('kubejs:stomach')

    event.create('kubejs:insect_stomach').food(food => food.hunger(1).saturation(0.5).effect('minecraft:nausea', 200, 0, 1)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/insect_stomach').tag('kubejs:stomach')
    event.create('kubejs:insect_caeca').food(food => food.hunger(1).saturation(0.5).effect('minecraft:nausea', 200, 0, 1)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/insect_caeca')
    event.create('kubejs:insect_heart').food(food => food.hunger(1).saturation(0.5).effect('minecraft:nausea', 200, 0, 1)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/insect_heart').tag('kubejs:heart')
    event.create('kubejs:insect_intestine').food(food => food.hunger(1).saturation(0.5).effect('minecraft:nausea', 200, 0, 1)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/insect_intestine').tag('kubejs:intestine')
    event.create('kubejs:insect_lung').food(food => food.hunger(1).saturation(0.5).effect('minecraft:nausea', 200, 0, 1)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/insect_lung').tag('kubejs:lung')
    event.create('kubejs:insect_muscle').food(food => food.hunger(1).saturation(0.5).effect('minecraft:nausea', 200, 0, 1)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/insect_muscle').tag('kubejs:muscle')

    event.create('kubejs:gills').food(food => food.hunger(2).saturation(0.5)).maxStackSize(1).tag('kubejs:nature').tag('kubejs:basic').texture('kubejs:item/organs/nature/gills').tag('kubejs:lung')

    event.create('kubejs:explosion_bag').maxStackSize(1)
        .overrideOtherStackedOnMe((stack, oStack, slot, action, player, access) => {
            if (stack.getCount() != 1 || action != ClickAction.SECONDARY || !slot.allowModification(player)) return false
            if (oStack.isEmpty()) {
                RemoveBundleOneStack(stack).ifPresent(pStack => {
                    PlayBundleRemoveSound(player)
                    access.set(pStack)
                })
            }
            return true
        })
        .overrideStackedOnOther((stack, slot, action, player) => {
            if (stack.getCount() != 1 || action != ClickAction.SECONDARY) return false
            let oStack = slot.getItem()
            if (oStack.isEmpty()) {
                PlayBundleRemoveSound(player)
                RemoveBundleOneStack(stack).ifPresent((pStack) => slot.safeInsert(pStack))
            }
            return true
        })
        .barWidth((stack) => {
            let stackList = GetBundleContents(stack)
            return Math.min(1 + 12 * Math.min(stackList.length, 1), 13)
        })
        .barColor(() => Color.DARK_BLUE)
        .tooltipImage((stack) => {
            let itemList = $NonNullList.create()
            GetBundleContents(stack).forEach((pStack) => itemList.add(pStack))
            return Optional.of(new $BundleTooltip(itemList, GetBundleCountentWeight(stack, (pStack) => pStack.getMaxStackSize() / 64)))
        })
        .canFitInsideContainerItems(false)
        .texture('kubejs:item/organs/nature/explosion_bag').tag('kubejs:nature').tag('kubejs:stomach')


    event.create('kubejs:parrot_beak').maxStackSize(1)
        .overrideOtherStackedOnMe((stack, oStack, slot, action, player, access) => {
            if (stack.getCount() != 1 || action != ClickAction.SECONDARY || !slot.allowModification(player)) return false
            if (oStack.isEmpty()) {
                RemoveBundleOneStack(stack).ifPresent(pStack => {
                    PlayBundleRemoveSound(player)
                    access.set(pStack)
                })
            } else if (oStack.isBlock()) {
                let added = AddItemIntoBundle(stack, oStack, 1, (pStack) => 1)
                if (added > 0) {
                    PlayerBundleInsertSound(player)
                    oStack.shrink(added)
                }
            }
            return true
        })
        .overrideStackedOnOther((stack, slot, action, player) => {
            if (stack.getCount() != 1 || action != ClickAction.SECONDARY) return false
            let oStack = slot.getItem()
            if (oStack.isEmpty()) {
                PlayBundleRemoveSound(player)
                RemoveBundleOneStack(stack).ifPresent((pStack) => slot.safeInsert(pStack))
            } else if (oStack.isBlock()) {
                let added = AddItemIntoBundle(stack, slot.safeTake(oStack.getCount(), 65535, player), 1, (pStack) => 1)
                if (added > 0) PlayerBundleInsertSound(player)
            }
            return true
        })
        .barWidth((stack) => {
            let stackList = GetBundleContents(stack)
            return Math.min(1 + 12 * stackList.length, 13)
        })
        .barColor(() => Color.DARK_BLUE)
        .tooltipImage((stack) => {
            let itemList = $NonNullList.create()
            GetBundleContents(stack).forEach((pStack) => itemList.add(pStack))
            return Optional.of(new $BundleTooltip(itemList, GetBundleCountentWeight(stack, (pStack) => 1)))
        })
        .canFitInsideContainerItems(false)
        .texture('kubejs:item/organs/nature/parrot_beak')
        .tag('kubejs:nature')

    // event.create('kubejs:scry_stomach_pouch').food(food => food.hunger(1).saturation(1)).maxStackSize(1)
    // .overrideOtherStackedOnMe((stack, oStack, slot, action, player, access) => {
    // if (stack.getCount() != 1 || action != ClickAction.SECONDARY || !slot.allowModification(player)) return false
    // if (oStack.isEmpty()) {
    // RemoveBundleOneStack(stack).ifPresent(pStack => {
    // PlayBundleRemoveSound(player)
    // access.set(pStack)
    // })
    // } else if (oStack.isBlock()) {
    // let added = AddItemIntoBundle(stack, oStack, 4, (pStack) => 1)
    // if (added > 0) {
    // PlayerBundleInsertSound(player)
    // oStack.shrink(added)
    // }
    // }
    // return true
    // })
    // .overrideStackedOnOther((stack, slot, action, player) => {
    // if (stack.getCount() != 1 || action != ClickAction.SECONDARY) return false
    // let oStack = slot.getItem()
    // if (oStack.isEmpty()) {
    // PlayBundleRemoveSound(player)
    // RemoveBundleOneStack(stack).ifPresent((pStack) => slot.safeInsert(pStack))
    // } else if (oStack.isBlock()) {
    // let added = AddItemIntoBundle(stack, slot.safeTake(oStack.getCount(), 65535, player), 4, (pStack) => 1)
    // if (added > 0) PlayerBundleInsertSound(player)
    // }
    // return true
    // })
    // .barWidth((stack) => {
    // let stackList = GetBundleContents(stack)
    // return Math.min(1 + 12 * stackList.length / 4, 13)
    // })
    // .barColor(() => Color.DARK_BLUE)
    // .tooltipImage((stack) => {
    // let itemList = $NonNullList.create()
    // GetBundleContents(stack).forEach((pStack) => itemList.add(pStack))
    // return Optional.of(new $BundleTooltip(itemList, GetBundleCountentWeight(stack, (pStack) => 1)))
    // })
    // .canFitInsideContainerItems(false)
    // .texture('kubejs:item/organs/nature/scry_stomach_pouch')
    // .tag('kubejs:nature')
    // .tag('kubejs:stomach')
})

// ===== nether.js =====
StartupEvents.registry('item', event => {
    event.create('kubejs:ignited_armour').maxDamage(30).maxStackSize(1).texture('kubejs:item/organs/nether/ignited_armour').tag('kubejs:nether').tag('kubejs:liver')

    event.create('kubejs:magam_colloid').food(food => food.hunger(1).saturation(2).effect('minecraft:fire_resistance', 600, 0, 1)).maxStackSize(1).texture('kubejs:item/organs/nether/magam_colloid').tag('kubejs:nether')

    event.create('kubejs:blaze_spine').maxStackSize(1).texture('kubejs:item/organs/nether/blaze_spine').tag('kubejs:nether').tag('kubejs:spine')

    event.create('kubejs:explosion_cavity').maxStackSize(1).texture('kubejs:item/organs/nether/explosion_cavity').tag('kubejs:nether').tag('kubejs:lung')

    event.create('kubejs:ghast_sac').food(food => food.hunger(2).saturation(1).effect('minecraft:fire_resistance', 200, 0, 1)).maxStackSize(1).texture('kubejs:item/organs/nether/ghast_sac').tag('kubejs:nether').tag('kubejs:lung')

    event.create('kubejs:hoglin_rumen').food(food => food.hunger(2).saturation(1).effect('minecraft:fire_resistance', 200, 0, 1)).maxStackSize(1).tag('kubejs:nature').texture('kubejs:item/organs/nether/hoglin_rumen').tag('kubejs:stomach')

    event.create('kubejs:golden_stone').maxStackSize(1).texture('kubejs:item/organs/nether/golden_stone').tag('kubejs:nether')

    event.create('kubejs:fireproof_appendix').food(food => food.hunger(2).saturation(0.5).effect('minecraft:fire_resistance', 200, 0, 1)).maxStackSize(1).tag('kubejs:nether').tag('kubejs:basic').texture('kubejs:item/organs/nether/fireproof_appendix').tag('kubejs:appendix')
    event.create('kubejs:fireproof_intestine').food(food => food.hunger(2).saturation(0.5).effect('minecraft:fire_resistance', 200, 0, 1)).maxStackSize(1).tag('kubejs:nether').tag('kubejs:basic').texture('kubejs:item/organs/nether/fireproof_intestine').tag('kubejs:intestine')
    event.create('kubejs:fireproof_heart').food(food => food.hunger(2).saturation(0.5).effect('minecraft:fire_resistance', 200, 0, 1)).maxStackSize(1).tag('kubejs:nether').tag('kubejs:basic').texture('kubejs:item/organs/nether/fireproof_heart').tag('kubejs:heart')
    event.create('kubejs:fireproof_kidney').food(food => food.hunger(2).saturation(0.5).effect('minecraft:fire_resistance', 200, 0, 1)).maxStackSize(1).tag('kubejs:nether').tag('kubejs:basic').texture('kubejs:item/organs/nether/fireproof_kidney').tag('kubejs:kidney')
    event.create('kubejs:fireproof_liver').food(food => food.hunger(2).saturation(0.5).effect('minecraft:fire_resistance', 200, 0, 1)).maxStackSize(1).tag('kubejs:nether').tag('kubejs:basic').texture('kubejs:item/organs/nether/fireproof_liver').tag('kubejs:liver')
    event.create('kubejs:fireproof_lung').food(food => food.hunger(2).saturation(0.5).effect('minecraft:fire_resistance', 200, 0, 1)).maxStackSize(1).tag('kubejs:nether').tag('kubejs:basic').texture('kubejs:item/organs/nether/fireproof_lung').tag('kubejs:lung')
    event.create('kubejs:fireproof_muscle').food(food => food.hunger(2).saturation(0.5).effect('minecraft:fire_resistance', 200, 0, 1)).maxStackSize(1).tag('kubejs:nether').tag('kubejs:basic').texture('kubejs:item/organs/nether/fireproof_muscle').tag('kubejs:muscle')
    event.create('kubejs:fireproof_rib').maxStackSize(1).tag('kubejs:nether').tag('kubejs:basic').texture('kubejs:item/organs/nether/fireproof_rib').tag('kubejs:bone')
    event.create('kubejs:fireproof_spine').maxStackSize(1).tag('kubejs:nether').tag('kubejs:basic').texture('kubejs:item/organs/nether/fireproof_spine').tag('kubejs:spine')
    event.create('kubejs:fireproof_spleen').food(food => food.hunger(2).saturation(0.5).effect('minecraft:fire_resistance', 200, 0, 1)).maxStackSize(1).tag('kubejs:nether').tag('kubejs:basic').texture('kubejs:item/organs/nether/fireproof_spleen').tag('kubejs:spleen')
    event.create('kubejs:fireproof_stomach').food(food => food.hunger(2).saturation(0.5).effect('minecraft:fire_resistance', 200, 0, 1)).maxStackSize(1).tag('kubejs:nether').tag('kubejs:basic').texture('kubejs:item/organs/nether/fireproof_stomach').tag('kubejs:stomach')
})

// ===== plant.js =====
StartupEvents.registry('item', event => {
    event.create('kubejs:hop_kidney').food(food => food.hunger(2).saturation(1).effect('minecraft:nausea', 200, 0, 1)).maxStackSize(1).texture('kubejs:item/organs/plant/hop_kidney').tag('kubejs:plant').tag('kubejs:kidney')
    event.create('kubejs:pitcher_stomach').maxStackSize(1).texture('kubejs:item/organs/plant/pitcher_stomach').maxDamage(10).tag('kubejs:plant').tag('kubejs:stomach')
    event.create('kubejs:crimson_brain').maxStackSize(1).texture('kubejs:item/organs/plant/crimson_brain').tag('kubejs:plant')
    event.create('kubejs:twisting_weeping_intestine').maxStackSize(1).texture('kubejs:item/organs/plant/twisting_weeping_intestine').tag('kubejs:plant').tag('kubejs:intestine')

    event.create('kubejs:vita_rose_liver').maxStackSize(1).texture('kubejs:item/organs/plant/vita_rose_liver').tag('kubejs:plant').tag('kubejs:liver')

    event.create('kubejs:lily_pad_lung').maxStackSize(1).texture('kubejs:item/organs/plant/lily_pad_lung').tag('kubejs:plant').tag('kubejs:lung')
    event.create('kubejs:cherry_bone').maxStackSize(1).texture('kubejs:item/organs/plant/cherry_bone').tag('kubejs:plant').tag('kubejs:bone')

    event.create('kubejs:vita_berry').maxStackSize(1).texture('kubejs:item/organs/plant/vita_berry').tag('kubejs:plant')
    event.create('kubejs:vita_sunflower').maxStackSize(1).texture('kubejs:item/organs/plant/vita_sunflower').maxDamage(15).tag('kubejs:plant')

    event.create('kubejs:rootling_ectoplasm').maxStackSize(1).texture('kubejs:item/organs/plant/rootling_ectoplasm').tag('kubejs:plant')
    event.create('kubejs:foliaath_stem').maxStackSize(1).texture('kubejs:item/organs/plant/foliaath_stem').tag('kubejs:plant').tag('kubejs:spine')

})

// ===== relic.js =====
StartupEvents.registry('item', event => {
    event.create('kubejs:immortal_volcanic_rock').maxStackSize(1).texture('kubejs:item/organs/relic/immortal_volcanic_rock').tag('kubejs:relic').tag('kubejs:nether')
    event.create('kubejs:warden_core').maxStackSize(1).texture('kubejs:item/organs/relic/warden_core').tag('kubejs:relic')
    event.create('kubejs:netherite_muscle').maxStackSize(1).texture('kubejs:item/organs/relic/netherite_muscle').tag('kubejs:relic').tag('kubejs:nether').tag('kubejs:muscle')
    event.create('kubejs:ender_guardian_spine').maxDamage(10).maxStackSize(1).texture('kubejs:item/organs/relic/ender_guardian_spine').tag('kubejs:relic').tag('kubejs:ender').tag('kubejs:spine')
    event.create('kubejs:harbinger_lung').maxDamage(30).maxStackSize(1).texture('kubejs:item/organs/relic/harbinger_lung').tag('kubejs:relic').tag('kubejs:lung').tag('kubejs:machine')
    // event.create('kubejs:leviathan_rib').maxStackSize(1).texture('kubejs:item/organs/relic/leviathan_rib').tag('kubejs:relic').tag('kubejs:bone').tag('kubejs:magic')
    event.create('kubejs:remnant_heart').food(food => food.hunger(2).saturation(1)).maxStackSize(1).texture('kubejs:item/organs/relic/remnant_heart').tag('kubejs:heart').tag('kubejs:relic').tag('kubejs:magic')
    event.create('kubejs:maledictus_wing').maxStackSize(1).texture('kubejs:item/organs/relic/maledictus_wing').tag('kubejs:relic').tag('kubejs:magic')
    event.create('kubejs:scylla_star_gem').maxStackSize(1).tag('kubejs:relic').tag('kubejs:magic').texture('kubejs:item/organs/relic/scylla_star_gem').tag('kubejs:gem')
    // event.create('kubejs:dying_heart').food(food => food.hunger(3).saturation(1)).maxStackSize(1).tag('kubejs:relic').tag('kubejs:magic').texture('kubejs:item/organs/relic/dying_heart')
    // event.create('kubejs:wither_skull').maxStackSize(1).tag('kubejs:relic').texture('kubejs:item/organs/relic/wither_skull')
})

// ===== rose.js =====
StartupEvents.registry('item', event => {
    event.create('kubejs:rose_quartz_muscle').maxStackSize(1).texture('kubejs:item/organs/rose_quartz/rose_quartz_muscle').tag('kubejs:rose').tag('kubejs:muscle')
    event.create('kubejs:rose_quartz_heart').maxStackSize(1).texture('kubejs:item/organs/rose_quartz/rose_quartz_heart').tag('kubejs:rose').tag('kubejs:heart')
    event.create('kubejs:rose_quartz_liver').maxStackSize(1).texture('kubejs:item/organs/rose_quartz/rose_quartz_liver').tag('kubejs:rose').tag('kubejs:liver')
    event.create('kubejs:rose_quartz_dialyzer').maxStackSize(1).texture('kubejs:item/organs/rose_quartz/rose_quartz_dialyzer').tag('kubejs:rose').tag('kubejs:kidney')
    event.create('kubejs:rose_quartz_rib').maxStackSize(1).texture('kubejs:item/organs/rose_quartz/rose_quartz_rib').tag('kubejs:rose').tag('kubejs:bone')
})

