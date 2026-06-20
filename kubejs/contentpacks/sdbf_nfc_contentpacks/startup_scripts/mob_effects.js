// priority: 1000
// [merged] fragile.js, frost_shield.js, luck_deity.js, primal_ago.js, putrid_toxins.js, spectral_fire.js, vita_toxins.js

// ===== fragile.js =====
StartupEvents.registry('mob_effect', event => {
    event.create('fragile')
        .harmful()
        .color(Color.DARK_GRAY)
})

// ===== frost_shield.js =====
// const FrostShieldArmorUpUUID = UUID.fromString('3017C996-85DE-46E8-9758-ECFD799F391B')
// const FrostShieldArmorUpIdentifier = 'FrostShieldArmorUp'
// StartupEvents.registry('mob_effect', event => {
//     event.create('frost_shield')
//         .beneficial()
//         .addEffect((entity, attributeMap, lvl) => {
//             let armorAttribute = attributeMap.getInstance('minecraft:generic.armor')
//             if (!armorAttribute) return
//             armorAttribute.addPermanentModifier(
//                 new $AttributeModifier(
//                     FrostShieldArmorUpUUID,
//                     FrostShieldArmorUpIdentifier,
//                     (lvl + 1) * 200,
//                     $Operation.ADDITION)
//             )
//         })
//         .effectTick((entity, lvl) => {
//             if (entity.age % 20 != 0) return
//             if (entity.isOnFire()) {
//                 let pEffect = entity.getEffect('kubejs:frost_shield')
//                 entity.removeEffect('kubejs:frost_shield')
//                 entity.setRemainingFireTicks(0)
//                 if (lvl >= 1) {
//                     entity.potionEffects.add('kubejs:frost_shield', pEffect.getDuration(), lvl - 1, pEffect.isAmbient(), pEffect.isVisible())
//                 }
//             }
//         })
//         .removeEffect((entity, attributeMap, lvl) => {
//             let armorAttribute = attributeMap.getInstance('minecraft:generic.armor')
//             if (!armorAttribute) return
//             armorAttribute.removePermanentModifier(FrostShieldArmorUpUUID)
//         })
//         .color(Color.DARK_AQUA)
// })

// ===== luck_deity.js =====
StartupEvents.registry('mob_effect', event => {
    event.create('luck_deity').beneficial().color(Color.GREEN)
})

// ===== primal_ago.js =====
const PrimalAgoHealthUpUUID = UUID.fromString('70D25D19-028D-4DC7-9BDE-D7AEE4A57804')
const PrimalAgoHealthUpIdentifier = 'PrimalAgoHealthUp'
const PrimalAgoAttackDamageUpUUID = UUID.fromString('E7F730B3-05D8-4A45-91E8-5B6BA82C9566')
const PrimalAgoAttackDamageUpIdentifier = 'PrimalAgoAttackDamageUp'
const PrimalAgoArrowDamageUpUUID = UUID.fromString('9CB85684-7A4E-4B14-9BF3-67BD50CEBE59')
const PrimalAgoArrowDamageUpIdentifier = 'PrimalAgoArrowDamageUp'
StartupEvents.registry('mob_effect', event => {
    event.create('primal_ago')
        .beneficial()
        .color(Color.DARK_PURPLE)
        .addEffect((entity, attributeMap, lvl) => {
            let maxHealthAttribute = attributeMap.getInstance('minecraft:generic.max_health')
            if (maxHealthAttribute) {
                maxHealthAttribute.addPermanentModifier(new $AttributeModifier(PrimalAgoHealthUpUUID, PrimalAgoHealthUpIdentifier, Math.pow(1.5, lvl), 'multiply_total'))
            }

            let attackDamageAttribute = attributeMap.getInstance('minecraft:generic.attack_damage')
            if (attackDamageAttribute) {
                attackDamageAttribute.addPermanentModifier(new $AttributeModifier(PrimalAgoAttackDamageUpUUID, PrimalAgoAttackDamageUpIdentifier, Math.pow(1.5, lvl), 'multiply_total'))
            }

            let arrowDamageAttribute = attributeMap.getInstance('attributeslib:arrow_damage')
            if (arrowDamageAttribute) {
                arrowDamageAttribute.addPermanentModifier(new $AttributeModifier(PrimalAgoArrowDamageUpUUID, PrimalAgoArrowDamageUpIdentifier, Math.pow(1.5, lvl), 'multiply_total'))
            }

            entity.heal(entity.getMaxHealth())
        })
        .removeEffect((entity, attributeMap, lvl) => {
            const level = entity.level
            RemovePrimalAgoAttribute(attributeMap)
            let nearbyMobs = GetLivingWithinRadius(level, entity.blockPosition(), 16, (pLevel, pMob) => {
                if (pMob.hasEffect('kubejs:primal_ago') && !pMob.is(entity)) return true
                return false
            })

            if (nearbyMobs.length == 1) {
                let pMob = nearbyMobs[0]
                let oriEffect = pMob.getEffect('kubejs:primal_ago')
                let oriAmplifier = oriEffect.getAmplifier()
                pMob.removeEffectNoUpdate('kubejs:primal_ago')
                RemovePrimalAgoAttribute(pMob.attributes)
                pMob.potionEffects.add('kubejs:primal_ago', -1, oriAmplifier + 1, false, false)
                return
            } else {
                nearbyMobs.forEach(pMob => {
                    let oriEffect = pMob.getEffect('kubejs:primal_ago')
                    let oriAmplifier = oriEffect.getAmplifier()
                    let oriDuration = oriEffect.getDuration()
                    pMob.removeEffectNoUpdate('kubejs:primal_ago')
                    RemovePrimalAgoAttribute(pMob.attributes)
                    pMob.potionEffects.add('kubejs:primal_ago', oriDuration + 200, oriAmplifier + 1, false, false)
                })
            }
        })
})

/**
 * 
 * @param {Internal.AttributeMap} attributeMap 
 */
function RemovePrimalAgoAttribute(attributeMap) {
    let maxHealthAttribute = attributeMap.getInstance('minecraft:generic.max_health')
    if (maxHealthAttribute) maxHealthAttribute.removePermanentModifier(PrimalAgoHealthUpUUID)
    let attackDamageAttribute = attributeMap.getInstance('minecraft:generic.attack_damage')
    if (attackDamageAttribute) attackDamageAttribute.removePermanentModifier(PrimalAgoAttackDamageUpUUID)
    let arrowDamageAttribute = attributeMap.getInstance('attributeslib:arrow_damage')
    if (arrowDamageAttribute) arrowDamageAttribute.removePermanentModifier(PrimalAgoArrowDamageUpUUID)
}

// ===== putrid_toxins.js =====
StartupEvents.registry('mob_effect', event => {
    event.create('putrid_toxins')
        .harmful()
        .effectTick((entity, lvl)  => {
            if (entity.age % 40 != 0) return
            let putridToxinsDamage = GetPutridToxinsDamage(entity)
            entity.attack(entity.damageSources().magic(), putridToxinsDamage * (lvl * 0.25 + 0.5))
        })
        .color(Color.DARK_PURPLE)
})

// ===== spectral_fire.js =====
const SpectralFireArmorDownUUID = UUID.fromString('46E22AA7-C6B7-46FF-8282-1ACF1238E1B2')
const SpectralFireArmorDownIdentifier = 'SpectralFireArmorDown'
StartupEvents.registry('mob_effect', event => {
    event.create('spectral_fire')
        .harmful()
        .addEffect((entity, attributeMap, lvl) => {
            let armorAttribute = attributeMap.getInstance('minecraft:generic.armor')
            if (!armorAttribute) return
            armorAttribute.addPermanentModifier(
                new $AttributeModifier(
                    SpectralFireArmorDownUUID,
                    SpectralFireArmorDownIdentifier,
                    -1,
                    'multiply_total')
            )
        })
        .removeEffect((entity, attributeMap, lvl) => {
            let armorAttribute = attributeMap.getInstance('minecraft:generic.armor')
            if (!armorAttribute) return
            armorAttribute.removePermanentModifier(SpectralFireArmorDownUUID)
        })
        .color(Color.DARK_RED)
})

// ===== vita_toxins.js =====
StartupEvents.registry('mob_effect', event => {
    event.create('vita_toxins')
        .harmful()
        .effectTick((entity, lvl) => {
            if (entity.age % 40 != 0) return
            if (!(entity.isLiving() && entity instanceof $PathfinderMob)) return
            const level = entity.level
            /**@type {UUID} */
            let vitaToxinsSource = GetVitaToxinsSource(entity)
            if (!vitaToxinsSource) return
            const sourceEntity = $CommonUtil.getEntityByUUID(level, vitaToxinsSource)
            if (!sourceEntity) return
            let vitaToxinsType = GetVitaToxinsType(entity)
            let vitaToxinsCoe = GetVitaToxinsCoe(entity)
            let vitaToxinsDamage = 0
            switch (vitaToxinsType) {
                case 'attack_damage':
                    let attribute = sourceEntity.getAttribute('minecraft:generic.attack_damage')
                    if (!attribute) return
                    vitaToxinsDamage = attribute.getValue() * vitaToxinsCoe
                    break
                case 'max_health':
                    vitaToxinsDamage = sourceEntity.getMaxHealth() * vitaToxinsCoe
                    break
            }
            entity.attack(entity.damageSources().magic(), vitaToxinsDamage * (lvl * 0.25 + 0.5))
        })
        .color(Color.DARK_RED)
})

