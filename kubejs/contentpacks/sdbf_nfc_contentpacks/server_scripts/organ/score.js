// priority: 500
// [merged] domain/organ/registry/organ_score/attack_dodge.js, domain/organ/registry/organ_score/creative_flight.js, domain/organ/registry/organ_score/crit_chance.js, domain/organ/registry/organ_score/crit_damage.js, domain/organ/registry/organ_score/dragon_blood.js, domain/organ/registry/organ_score/extreme_fitness.js, domain/organ/registry/organ_score/extreme_strength.js, domain/organ/registry/organ_score/flying_speed.js, domain/organ/registry/organ_score/glowing.js, domain/organ/registry/organ_score/jump_height.js, domain/organ/registry/organ_score/knockback.js, domain/organ/registry/organ_score/light_weight.js, domain/organ/registry/organ_score/magic_capacity.js, domain/organ/registry/organ_score/photosynthesis.js, domain/organ/registry/organ_score/steppy.js

// ===== attack_dodge.js =====
const AttackDodgeDodgeChanceUpUUID = UUID.fromString('E51758A0-56F0-435E-897F-BFC56EDA06A8')
const AttackDodgeDodgeChanceUpIdentifier = 'AttackDodgeDodgeChanceUp'
/**
 * 
 * @param {Internal.UpdateOrganScoreJS} event 
 */
function AttackDodgeUpdateOrganScore(event) {
    const entity = event.entity
    const organScoreValue = event.chestCavity.getOrganScore('kubejs:attack_dodge')
    const attributeInstance = entity.getAttribute('attributeslib:dodge_chance')
    if (!attributeInstance) return
    attributeInstance.removeModifier(AttackDodgeDodgeChanceUpUUID)
    if (organScoreValue == 0) return
    attributeInstance.addPermanentModifier(
        new $AttributeModifier(
            AttackDodgeDodgeChanceUpUUID,
            AttackDodgeDodgeChanceUpIdentifier,
            organScoreValue / 100 * 3,
            $Operation.MULTIPLY_BASE)
    )
}


RegistryOrganScoreAttribute('kubejs:attack_dodge', AttackDodgeUpdateOrganScore)

// ===== creative_flight.js =====
const CreativeFlightCreativeFlightUpUUID = UUID.fromString('BA9F089C-ABC5-4326-935B-DE6509999CA1')
const CreativeFlightCreativeFlightUpIdentifier = 'CreativeFlightCreativeFlightUp'
/**
 * 
 * @param {Internal.UpdateOrganScoreJS} event 
 */
function CreativeFilghtUpdateOrganScore(event) {
    const entity = event.entity
    const organScoreValue = event.chestCavity.getOrganScore('kubejs:creative_flight')
    const attributeInstance = entity.getAttribute('attributeslib:creative_flight')
    if (!attributeInstance) return
    attributeInstance.removeModifier(CreativeFlightCreativeFlightUpUUID)
    if (organScoreValue == 0) return
    attributeInstance.addPermanentModifier(
        new $AttributeModifier(
            CreativeFlightCreativeFlightUpUUID,
            CreativeFlightCreativeFlightUpIdentifier,
            organScoreValue,
            $Operation.ADDITION)
    )
}

RegistryOrganScoreAttribute('kubejs:creative_flight', CreativeFilghtUpdateOrganScore)

// ===== crit_chance.js =====
const CritChanceCritChanceUpUUID = UUID.fromString('CE42673E-CDDC-4D8E-82CE-AFEBEBD37E8D')
const CritChanceCritChanceUpIdentifier = 'CritChanceCritChanceUp'
/**
 * 
 * @param {Internal.UpdateOrganScoreJS} event 
 */
function CritChanceUpdateOrganScore(event) {
    const entity = event.entity
    const organScoreValue = event.chestCavity.getOrganScore('kubejs:crit_chance')
    const attributeInstance = entity.getAttribute('attributeslib:crit_chance')
    if (!attributeInstance) return
    attributeInstance.removeModifier(CritChanceCritChanceUpUUID)
    if (organScoreValue == 0) return
    attributeInstance.addPermanentModifier(
        new $AttributeModifier(
            CritChanceCritChanceUpUUID,
            CritChanceCritChanceUpIdentifier,
            organScoreValue / 100,
            $Operation.ADDITION)
    )
}

RegistryOrganScoreAttribute('kubejs:crit_chance', CritChanceUpdateOrganScore)

// ===== crit_damage.js =====
const CritDamageCritDamageUpUUID = UUID.fromString('7DA00F94-96BD-417D-9AE0-3D6F37D74522')
const CritDamageCritDamageUpIdentifier = 'CritDamageCritDamageUp'
/**
 * 
 * @param {Internal.UpdateOrganScoreJS} event 
 */
function CritDamageUpdateOrganScore(event) {
    const entity = event.entity
    const organScoreValue = event.chestCavity.getOrganScore('kubejs:crit_damage')
    const attributeInstance = entity.getAttribute('attributeslib:crit_damage')
    if (!attributeInstance) return
    attributeInstance.removeModifier(CritDamageCritDamageUpUUID)
    if (organScoreValue == 0) return
    attributeInstance.addPermanentModifier(
        new $AttributeModifier(
            CritDamageCritDamageUpUUID,
            CritDamageCritDamageUpIdentifier,
            organScoreValue / 20,
            $Operation.ADDITION)
    )
}

RegistryOrganScoreAttribute('kubejs:crit_damage', CritDamageUpdateOrganScore)

// ===== dragon_blood.js =====
const DragonBloodArmorShredUpUUID = UUID.fromString('5B066428-C671-4BE1-B5BA-B651C732AF8A')
const DragonBloodArmorShredUpIdentifier = 'DragonBloodArmorShredUp'
const DragonBloodAttackUpUUID = UUID.fromString('CAC1772C-7A0D-4F3B-91A0-0C4EE728EECE')
const DragonBloodAttackUpIdentifier = 'DragonBloodAttackUpIdentifier'
/**
 * 
 * @param {Internal.UpdateOrganScoreJS} event 
 */
function DragonBloodUpdateOrganScore(event) {
    const entity = event.entity
    const organScoreValue = event.chestCavity.getOrganScore('kubejs:dragon_blood')
    const armorShredInstance = entity.getAttribute('attributeslib:armor_shred')
    if (armorShredInstance) {
        armorShredInstance.removeModifier(DragonBloodArmorShredUpUUID)
        if (organScoreValue != 0) {
            armorShredInstance.addPermanentModifier(
                new $AttributeModifier(
                    DragonBloodArmorShredUpUUID,
                    DragonBloodArmorShredUpIdentifier,
                    organScoreValue,
                    $Operation.ADDITION)
            )
        }
    }

    const attackDamageInstance = entity.getAttribute('minecraft:generic.attack_damage')
    if (attackDamageInstance) {
        attackDamageInstance.removeModifier(DragonBloodAttackUpUUID)
        if (organScoreValue != 0) {
            attackDamageInstance.addPermanentModifier(
                new $AttributeModifier(
                    DragonBloodAttackUpUUID,
                    DragonBloodAttackUpIdentifier,
                    organScoreValue / 100,
                    $Operation.MULTIPLY_BASE)
            )
        }
    }
}

RegistryOrganScoreAttribute('kubejs:dragon_blood', DragonBloodUpdateOrganScore)

// ===== extreme_fitness.js =====
const ExtremeFitnessHealthUpUUID = UUID.fromString('C6AC0C7D-7139-4144-B097-86B3C11770F2')
const ExtremeFitnessHealthUpIdentifier = 'ExtremeFitnessHealthUp'
/**
 * 
 * @param {Internal.UpdateOrganScoreJS} event 
 */
function ExtremeFitnessUpdateOrganScore(event) {
    const entity = event.entity
    const organScoreValue = event.chestCavity.getOrganScore('kubejs:extreme_fitness')
    const attributeInstance = entity.getAttribute('minecraft:generic.max_health')
    if (!attributeInstance) return
    attributeInstance.removeModifier(ExtremeFitnessHealthUpUUID)
    if (organScoreValue == 0) return
    attributeInstance.addPermanentModifier(
        new $AttributeModifier(
            ExtremeFitnessHealthUpUUID,
            ExtremeFitnessHealthUpIdentifier,
            organScoreValue / 100 * 3,
            $Operation.ADDITION)
    )
}

RegistryOrganScoreAttribute('kubejs:extreme_fitness', ExtremeFitnessUpdateOrganScore)

// ===== extreme_strength.js =====
const ExtremeStrengthAttackUpUUID = UUID.fromString('1318AAC8-AF51-4087-870F-D5C8CB42AA45')
const ExtremeStrengthAttackUpIdentifier = 'ExtremeStrengthAttackUp'
/**
 * 
 * @param {Internal.UpdateOrganScoreJS} event 
 */
function ExtremeStrengthUpdateOrganScore(event) {
    const entity = event.entity
    const organScoreValue = event.chestCavity.getOrganScore('kubejs:extreme_strength')
    const attributeInstance = entity.getAttribute('minecraft:generic.attack_damage')
    if (!attributeInstance) return
    attributeInstance.removeModifier(ExtremeStrengthAttackUpUUID)
    if (organScoreValue == 0) return
    attributeInstance.addPermanentModifier(
        new $AttributeModifier(
            ExtremeStrengthAttackUpUUID,
            ExtremeStrengthAttackUpIdentifier,
            organScoreValue / 100 * 3,
            $Operation.MULTIPLY_BASE)
    )
}

RegistryOrganScoreAttribute('kubejs:extreme_strength', ExtremeStrengthUpdateOrganScore)

// ===== flying_speed.js =====
const FlyingSpeedFlyingSpeedUpUUID = UUID.fromString('1D5FD74D-0EC6-4EA8-BA7F-65CC3B76C388')
const FlyingSpeedFlyingSpeedUpIdentifier = 'FlyingSpeedFlyingSpeedUp'
/**
 * 
 * @param {Internal.UpdateOrganScoreJS} event 
 */
function FlyingSpeedUpdateOrganScore(event) {
    /**@type {Internal.ServerPlayer} */
    const entity = event.entity
    const organScoreValue = event.chestCavity.getOrganScore('kubejs:flying_speed')
    const attributeInstance = entity.getAttribute('minecraft:generic.flying_speed')
    if (!attributeInstance) return
    attributeInstance.removeModifier(FlyingSpeedFlyingSpeedUpUUID)
    if (organScoreValue == 0) return
    attributeInstance.addPermanentModifier(
        new $AttributeModifier(
            FlyingSpeedFlyingSpeedUpUUID,
            FlyingSpeedFlyingSpeedUpIdentifier,
            organScoreValue / 100 * 3,
            $Operation.MULTIPLY_BASE)
    )
}

RegistryOrganScoreAttribute('kubejs:flying_speed', FlyingSpeedUpdateOrganScore)

// ===== glowing.js =====
/**
 * 
 * @param {Internal.UpdateOrganScoreJS} event 
 */
function GlowingUpdateOrganScore(event) {
    const entity = event.entity
    if (event.chestCavity.getOrganScore('kubejs:glowing') > 0) {
        entity.setGlowing(true)
    } else {
        entity.setGlowing(false)
    }
}

RegistryOrganScoreAttribute('kubejs:glowing', GlowingUpdateOrganScore)

// ===== jump_height.js =====
const JumpHeightJumpHeightUpUUID = UUID.fromString('825EFFDC-149D-4049-8D74-05F34DE18A05')
const JumpHeightJumpHeightUpIdentifier = 'JumpHeightJumpHeightUp'

/**
 * 
 * @param {Internal.UpdateOrganScoreJS} event 
 */
function JumpHeightOrganScore(event) {
    const entity = event.entity
    const organScoreValue = event.chestCavity.getOrganScore('kubejs:jump_height')
    const attributeInstance = entity.getAttribute('forge:step_height_addition')
    if (!attributeInstance) return
    attributeInstance.removeModifier(JumpHeightJumpHeightUpUUID)
    if (organScoreValue == 0) return
    attributeInstance.addPermanentModifier(
        new $AttributeModifier(
            JumpHeightJumpHeightUpUUID,
            JumpHeightJumpHeightUpIdentifier,
            organScoreValue / 3,
            $Operation.ADDITION)
    )
}

RegistryOrganScoreAttribute('kubejs:jump_height', JumpHeightOrganScore)

// ===== knockback.js =====
const KnockbackAttckKnockbackUUID = UUID.fromString('C8324C7F-1FC9-4480-B74A-F511CB18B246')
const KnockbackAttckKnockbackIdentifier = 'KnockbackAttckKnockback'

/**
 * 
 * @param {Internal.UpdateOrganScoreJS} event 
 */
function KnockbackOrganScore(event) {
    const entity = event.entity
    const organScoreValue = event.chestCavity.getOrganScore('kubejs:knockback')
    const attributeInstance = entity.getAttribute('minecraft:generic.attack_knockback')
    if (!attributeInstance) return
    attributeInstance.removeModifier(KnockbackAttckKnockbackUUID)
    if (organScoreValue == 0) return
    attributeInstance.addPermanentModifier(
        new $AttributeModifier(
            KnockbackAttckKnockbackUUID,
            KnockbackAttckKnockbackIdentifier,
            0.5 * organScoreValue,

            $Operation.ADDITION)
    )
}

RegistryOrganScoreAttribute('kubejs:knockback', KnockbackOrganScore)

// ===== light_weight.js =====
const LightWeightEntityGravityDownUUID = UUID.fromString('618EC64C-73F0-40A7-9EB5-3ADC51735A53')
const LightWeightEntityGravityDownIdentifier = 'LightWeightEntityGravityDown'
/**
 * 
 * @param {Internal.UpdateOrganScoreJS} event 
 */
function LightWeightUpdateOrganScore(event) {
    const entity = event.entity
    const organScoreValue = event.chestCavity.getOrganScore('kubejs:light_weight')
    const attributeInstance = entity.getAttribute('forge:entity_gravity')
    if (!attributeInstance) return
    attributeInstance.removeModifier(LightWeightEntityGravityDownUUID)
    if (organScoreValue == 0) return
    attributeInstance.addPermanentModifier(
        new $AttributeModifier(
            LightWeightEntityGravityDownUUID,
            LightWeightEntityGravityDownIdentifier,
            -organScoreValue * 0.01,
            $Operation.ADDITION)
    )
}

RegistryOrganScoreAttribute('kubejs:light_weight', LightWeightUpdateOrganScore)

// ===== magic_capacity.js =====
const MagicCapacityMaxManaUpUUID = UUID.fromString('AA675869-C356-4E0E-AC8B-D745422B7F98')
const MagicCapacityMaxManaUpIdentifier = 'MagicCapacityMaxManaUp'
/**
 * 
 * @param {Internal.UpdateOrganScoreJS} event 
 */
function MagicCapacityMaxManaUpUpdateOrganScore(event) {
    /**@type {Internal.ServerPlayer} */
    const entity = event.entity
    const organScoreValue = event.chestCavity.getOrganScore('kubejs:magic_capacity')
    // const attributeInstance = entity.getAttribute('ars_nouveau:ars_nouveau.perk.max_mana')
    const attributeInstance = entity.getAttribute('slashblade_sendims:ap_reduce_amount')
    if (!attributeInstance) return
    attributeInstance.removeModifier(MagicCapacityMaxManaUpUUID)
    if (organScoreValue == 0) return
    attributeInstance.addPermanentModifier(
        new $AttributeModifier(
            MagicCapacityMaxManaUpUUID,
            MagicCapacityMaxManaUpIdentifier,
            organScoreValue * 10,
            $Operation.ADDITION)
    )
}

RegistryOrganScoreAttribute('kubejs:magic_capacity', MagicCapacityMaxManaUpUpdateOrganScore)

// ===== photosynthesis.js =====
/**
 * 
 * @param {Internal.OpenedEntityTickJS} event 
 */
function PhotosynthesisEntityTick(event) {
    const entity = event.entity
    const level = event.level
    const chestCavity = event.chestCavity
    const photosynthesis = chestCavity.getOrganScore('kubejs:photosynthesis')
    if (photosynthesis <= 0) return
    if (!IsSunBurn(level, entity)) return
    const customDataMap = chestCavity.customDataMap

    let photosynthesisTimer = customDataMap.getOrDefault('photosynthesisTimer', 0)
    photosynthesisTimer++
    if (photosynthesisTimer < 10) return customDataMap.put('photosynthesisTimer', photosynthesisTimer)
    customDataMap.put('photosynthesisTimer', 0)

    if (entity instanceof $ServerPlayer) {
        RecoverPlayerHungerAndSaturation(entity, photosynthesis * 0.5)
    } else {
        entity.heal(photosynthesis)
    }
}

RegistryOrganScoreAttribute('kubejs:photosynthesis', PhotosynthesisEntityTick)

// ===== steppy.js =====
const StepplyStepHeightUpUUID = UUID.fromString('9A7E65B6-B43F-46A5-B08D-ECEA4561F717')
const StepplyStepHeightUpIdentifier = 'StepplyStepHeightUp'
/**
 * 
 * @param {Internal.UpdateOrganScoreJS} event 
 */
function StepplyStepHeightUpOrganScore(event) {
    const entity = event.entity
    const organScoreValue = event.chestCavity.getOrganScore('kubejs:steppy')
    const attributeInstance = entity.getAttribute('forge:step_height_addition')
    if (!attributeInstance) return
    attributeInstance.removeModifier(StepplyStepHeightUpUUID)
    if (organScoreValue == 0) return
    attributeInstance.addPermanentModifier(
        new $AttributeModifier(
            StepplyStepHeightUpUUID,
            StepplyStepHeightUpIdentifier,
            organScoreValue,
            
            $Operation.ADDITION)
    )
}


RegistryOrganScoreAttribute('kubejs:steppy', StepplyStepHeightUpOrganScore)
