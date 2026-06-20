// priority: 999
// [merged] domain/organ/event/ars_effect_resolve_post.js, domain/organ/event/ars_effect_resolve_pre.js, domain/organ/event/block_broken.js, domain/organ/event/block_right.js, domain/organ/event/chest_cavity_update.js, domain/organ/event/chest_loot.js, domain/organ/event/decorate_chat.js, domain/organ/event/entity_be_hurt.js, domain/organ/event/entity_death.js, domain/organ/event/entity_do_damage.js, domain/organ/event/entity_fall.js, domain/organ/event/entity_interact.js, domain/organ/event/entity_loot.js, domain/organ/event/entity_tick.js, domain/organ/event/exposure_modify_frame.js, domain/organ/event/food_eaten.js, domain/organ/event/init.js, domain/organ/event/iss_entity_spell_cast.js, domain/organ/event/iss_player_spell_cast.js, domain/organ/event/iss_spell_level_modify.js, domain/organ/event/iss_spell_selection.js, domain/organ/event/item_right.js, domain/organ/event/key_active.js, domain/organ/event/organ_add_status_effect.js, domain/organ/event/organ_score_update.js, domain/organ/event/player_enchant.js, domain/organ/event/player_spawn_phantoms.js, domain/organ/event/shield_block.js, domain/organ/event/villager_update_offer.js

// // ===== ars_effect_resolve_post.js =====
// const OrganArsEffectResolvePost = new OrganEventModel('ars_effect_resolve_post')

// NativeEvents.onEvent($EffectResolveEventPost,/** @param {Internal.EffectResolveEvent$Post} event */ event => {
//     const shooter = event.shooter
//     if (!shooter.isPlayer()) return
//     let customData = {}
//     OrganArsEffectResolvePost.run(shooter, customData, [event])
// })

// // ===== ars_effect_resolve_pre.js =====
// const OrganArsEffectResolvePre = new OrganEventModel('ars_effect_resolve_pre')

// NativeEvents.onEvent($EffectResolveEventPre,/** @param {Internal.EffectResolveEvent$Pre} event */ event => {
//     const shooter = event.shooter
//     if (!shooter.isPlayer()) return
//     let customData = {}
//     OrganArsEffectResolvePre.run(shooter, customData, [event])
// })

// ===== block_broken.js =====
const OrganBlockBrokenEvent = new OrganEventModel('block_broken')


BlockEvents.broken(event => {
    const entity = event.entity
    if (!entity) return
    let customData = {}
    OrganBlockBrokenEvent.run(entity, customData, [event])
})

// ===== block_right.js =====
const OrganBlockRightClickedEvent = new OrganEventModel('block_right_clicked')


BlockEvents.rightClicked(event => {
    const entity = event.entity
    if (!entity) return
    let customData = {}
    OrganBlockRightClickedEvent.run(entity, customData, [event])
})

// ===== chest_cavity_update.js =====
const OrganChestCavityUpdateStrategy = new OrganEventModel('chest_cavity_update')
const OrganTakeOnStrategy = new OrganTakeOnStrategyModel()
const OrganTakeOffStrategy = new OrganTakeOffStrategyModel()
    .addInit(
        /** 
         * @param {OrganChestCavityUpdateStrategyCustomData} customData
         * @param {Internal.EvaluateChestCavityJS} event
         */
        (customData, event) => {
            customData.attackDamage = new AttributeManagerModel(1)
            customData.maxHealth = new AttributeManagerModel(1)
            customData.armor = new AttributeManagerModel(1)
            customData.entityReach = new AttributeManagerModel(1)
            customData.blockReach = new AttributeManagerModel(1)
        }
    )


let SlotChestCavityUpdateStrategy = new SlotStrategyModel()
    .addDefer(
        /**
         * @param {OrganChestCavityUpdateStrategyCustomData} customData
         * @param {Internal.EvaluateChestCavityJS} event
         */
        (customData, event) => {
            const entity = event.entity
            customData.attackDamage.applyOnEntityByAttributeKey(entity, 'OrganAttackDamage')
            customData.maxHealth.applyOnEntityByAttributeKey(entity, 'OrganMaxHealth')
            customData.armor.applyOnEntityByAttributeKey(entity, 'OrganArmor')
            customData.entityReach.applyOnEntityByAttributeKey(entity, 'OrganEntityReach')
            customData.blockReach.applyOnEntityByAttributeKey(entity, 'OrganBlockReach')
        }
    )

ChestCavityEvents.evaluateChestCavity(event => {
    const entity = event.entity
    let customData = {}
    if (!entity.isAlive()) return
    OrganTakeOffStrategy.run(entity, customData, [event])
    OrganTakeOnStrategy.run(entity, customData, [event])
    OrganChestCavityUpdateStrategy.run(entity, customData, [event])
    SlotChestCavityUpdateStrategy.run(entity, customData, [event])

    UpdateClientISSSpellDataEvent(customData, entity)
})

// ===== chest_loot.js =====
const OrganChestLootEvent = new OrganEventModel('chest_loot')

/**
 * 器官箱子战利品事件处理函数
 * @param {Internal.LootContextJS} event 
 * @returns 
 */
function OrganChestLootHandle(event) {
    const player = event.player
    if (!player) return
    let customData = {}
    OrganChestLootEvent.run(player, customData, [event])
    UpdateClientISSSpellDataEvent(customData, player)
}

// ===== decorate_chat.js =====
const OrgaDecorateChatEvent = new OrganEventModel('decorate_chat')

PlayerEvents.decorateChat(event => {
    const player = event.player
    let customData = {}
    OrgaDecorateChatEvent.run(player, customData, [event])
})

// ===== entity_be_hurt.js =====
const OrganEntityBeHurtEvent = new OrganEventModel('entity_be_hurt')

/**
 * 
 * @param {Internal.LivingDamageEvent} event 
 * @param {*} customData 
 */
function OrganEntityBeHurt(event, customData) {
    const entity = event.entity
    OrganEntityBeHurtEvent.run(entity, customData, [event])
}

// ===== entity_death.js =====
const OrganEntityDeathEvent = new OrganEventModel('entity_death')
const OrganEntityKillEvent = new OrganEventModel('entity_kill')

EntityEvents.death(event => {
    const entity = event.entity
    /**@type {Internal.LivingEntity} */
    const killer = event.source.actual
    if (!entity) return
    let customData = {}
    OrganEntityDeathEvent.run(entity, customData, [event])
    if (killer && killer.isAlive()) {
        OrganEntityKillEvent.run(killer, customData, [event])
    }
})

// ===== entity_do_damage.js =====
const OrganEntityDoDamageEvent = new OrganEventModel('entity_do_damage')

/**
 * 
 * @param {Internal.LivingHurtEvent} event 
 */
function OrganEntityDoDamage(event, customData) {
    const entity = event.source.actual
    OrganEntityDoDamageEvent.run(entity, customData, [event])
}

// ===== entity_fall.js =====
const OrganEntityFallEvent = new OrganEventModel('entity_fall')

NativeEvents.onEvent($LivingFallEvent, /** @param {Internal.LivingFallEvent} event */ event => {
    const entity = event.entity
    if (!entity) return
    let customData = {}
    OrganEntityFallEvent.run(entity, customData, [event])
})

// ===== entity_interact.js =====
const OrganEntityBeInteractedEvent = new OrganEventModel('entity_be_interacted')
const OrganEntityInteractEvent = new OrganEventModel('entity_interact')

ItemEvents.entityInteracted(event => {
    const entity = event.entity
    const target = event.target
    if (!entity) return
    let customData = {}
    OrganEntityInteractEvent.run(entity, customData, [event])
    if (target && target.isAlive()) {
        OrganEntityBeInteractedEvent.run(target, customData, [event])
    }
})

// ===== entity_loot.js =====
const OrganEntityLootEvent = new OrganEventModel('entity_loot')

LootJS.modifiers(context => {
    context.addLootTypeModifier(LootType.ENTITY)
        .apply(event => {
            const entity = event.killerEntity
            if (!entity) return
            let customData = {}
            OrganEntityLootEvent.run(entity, customData, [event])
        })
})

// ===== entity_tick.js =====
const OrganEntityTickEvent = new OrganEventModel('entity_tick')

/**
 * 能够进入该事件必须要满足该实体的胸腔是被开启过的状态
 * 同时，为了避免可能的性能问题。该tick事件并非真的tick，而是在上层做了拦截，实际为秒级别操作
 */
ChestCavityEvents.openedEntityTick(event => {
    const entity = event.entity
    if (!entity || entity.age % 20 != 0) return
    let customData = {}
    OrganEntityTickEvent.run(entity, customData, [event])
    PhotosynthesisEntityTick(event)
})

// ===== exposure_modify_frame.js =====
// const OrganExposureFrameAdded = new OrganEventModel('exposure_frame_added')

// NativeEvents.onEvent($FrameAddedEvent, /** @param {Internal.FrameAddedEvent} event */ event => {
//     const cameraHolderEntity = event.cameraHolderEntity
//     if (!cameraHolderEntity) return
//     let customData = {}
//     OrganExposureFrameAdded.run(cameraHolderEntity, customData, [event])
// })

// ===== food_eaten.js =====
const OrganFoodEatenEvent = new OrganEventModel('food_eaten')

ItemEvents.foodEaten(event => {
    const entity = event.entity
    if (!entity) return
    let customData = {}
    OrganFoodEatenEvent.run(entity, customData, [event])
})

// ===== init.js =====
/**
 * @type {Object<string, OrganStrategyModel>}
 */
let OrganStrategyMap = {}

/**
 * 
 * @param {OrganStrategyModel} strategyModel 
 */
function RegistryOrganStrategy(strategyModel) {
    OrganStrategyMap[strategyModel.itemId] = strategyModel
}

// // ===== iss_entity_spell_cast.js =====
// const OrganISSEntitySpellCastEvent = new OrganEventModel('iss_entity_spell_cast')

// EntityEvents.spellOnCast(event => {
    // const entity = event.entity
    // if (!entity) return
    // let customData = {}
    // OrganISSEntitySpellCastEvent.run(entity, customData, [event])
// })

// // ===== iss_player_spell_cast.js =====
// const OrganISSPlayerSpellCastEvent = new OrganEventModel('iss_player_spell_cast')

// PlayerEvents.spellOnCast(event => {
    // const player = event.player
    // if (!player) return
    // let customData = {}
    // OrganISSPlayerSpellCastEvent.run(player, customData, [event])
    // UpdateClientISSSpellDataEvent(customData, player)
// })

// // ===== iss_spell_level_modify.js =====
// const OrganISSSpellLevelModifyEvent = new OrganEventModel('iss_spell_level_modify')

// /**
 // * 法术等级修正
 // */
// NativeEvents.onEvent($ModifySpellLevelEvent, /** @param {Internal.ModifySpellLevelEvent} event */ event => {
    // const entity = event.entity
    // if (!entity.isAlive() || entity.level.isClientSide()) return
    // let customData = {}
    // OrganModifySpellLevel(event, customData)
// })

// /**
 // * 法术等级修正
 // * @param {Internal.ModifySpellLevelEvent} event 
 // * @param {OrganEventCustomData} customData 
 // */
// function OrganModifySpellLevel(event, customData) {
    // const entity = event.entity
    // OrganISSSpellLevelModifyEvent.run(entity, customData, [event])
// }

// // ===== iss_spell_selection.js =====
// const OrganISSSpellSelectionEvent = new OrganEventModel('iss_spell_selection')

// /**
 // * 玩家选择法术节点，使用该方法而不是用ironJs包装的方法用于区分客户端和服务端数据
 // */
// NativeEvents.onEvent($SpellSelectionEvent, /** @param {Internal.SpellSelectionManager$SpellSelectionEvent} event */ event => {
    // const entity = event.entity
    // if (!entity) return
    // if (entity.level.isClientSide()) return
    // if (!entity.isAlive() || !entity.isPlayer()) return
    // let customData = {}
    // OrganSpellSelection(event, customData)
// })

// /**
 // * 
 // * @param {Internal.SpellSelectionManager$SpellSelectionEvent} event 
 // * @param {OrganEventCustomData} customData 
 // */
// function OrganSpellSelection(event, customData) {
    // const entity = event.entity
    // OrganISSSpellSelectionEvent.run(entity, customData, [event])
    // UpdateClientISSSpellDataEvent(customData, entity)
    // ApplyPlayerSpellSelection(event)
// }

// ===== item_right.js =====
const OrganItemRightClickedEvent = new OrganEventModel('item_right_clicked')


ItemEvents.rightClicked(event => {
    const player = event.player
    if (!player) return
    let customData = {}
    OrganItemRightClickedEvent.run(player, customData, [event])
})

// ===== key_active.js =====
const OrganKeyBindEvent = new OrganKeyActiveEventModel('key_active')

NetworkEvents.dataReceived('key_active', event => {
    const player = event.player
    const nbt = event.data
    if (!player) return
    var itemId = nbt.getString('itemId')
    let customData = {}
    if (OrganItemCoolDown(player, Item.of(itemId))) return
    OrganKeyBindEvent.run(player, itemId, customData, [event])
    UpdateClientISSSpellDataEvent(customData, player)
})

// ===== organ_add_status_effect.js =====
const OrganAddStatusEffectEvent = new OrganEventModel('organ_add_status_effect')

ChestCavityEvents.organAddStatusEffect(event => {
    const entity = event.entity
    let customData = {}
    OrganAddStatusEffectEvent.run(entity, customData, [event])
})

// 器官排异备选方案
// /**
//  * @param {Internal.Entity} entity
//  * @param {Internal.MobEffectInstance} effectInstance
//  */
// function organInjectionEffectAdded(entity, effectInstance) {
//     const chestCavity = entity.chestCavityInstance
//     if (!chestCavity) return
//     if (effectInstance.effect.equals($ForgeRegistries.MOB_EFFECTS.getValue('chestcavity:organ_rejection'))) {
//         let immunosuppression = chestCavity.getOrganScore('kubejs:immunosuppression')
//         if (Math.random() < immunosuppression / 10 + 0.1) {
//             let inventory = chestCavity.inventory
//             let targetIndex = Math.floor(Math.random() * inventory.getContainerSize())
//             let organItem = inventory.getStackInSlot(targetIndex)
//             if (!organItem) return
//             let compatibility = ChestCavityUtils.getCompatibility(chestCavity, organItem)
//             if (!compatibility) {
//                 ChestCavityUtils.setOrganCompatibility(chestCavity, organItem)
//             }
//         }
//     }
// }

// ===== organ_score_update.js =====
const OrganScoreAttributeMap = new Map()
ChestCavityEvents.updateOrganScore(event => {
    const chestCavity = event.chestCavity
    if (!chestCavity) return
    OrganScoreAttributeMap.forEach((func, organScoreName) => {
        if (isScoreChanged(chestCavity, organScoreName)) {
            func(event)
        }
    })
})

function RegistryOrganScoreAttribute(organScoreName, func) {
    OrganScoreAttributeMap.set(organScoreName, func)
}

/**
 * 
 * @param {Internal.ChestCavityInstance} chestCavity 
 * @param {String} organScoreName 
 * @returns 
 */
function isScoreChanged(chestCavity, organScoreName) {
    return chestCavity.getOldOrganScore(organScoreName) != chestCavity.getOrganScore(organScoreName)
}

// ===== player_enchant.js =====
const OrganPlayerEnchantEvent = new OrganEventModel('player_enchant')

MoreJSEvents.enchantmentTableChanged(event => {
    const player = event.player
    if (!player) return
    let customData = {}
    OrganPlayerEnchantEvent.run(player, customData, [event])
})

// ===== player_spawn_phantoms.js =====
const OrganPlayerSpawnPhantomsEvent = new OrganEventModel('player_spawn_phantoms')

NativeEvents.onEvent($PlayerSpawnPhantomsEvent, /** @param {Internal.PlayerSpawnPhantomsEvent} event */ event => {
    const entity = event.entity
    if (!entity) return
    let customData = {}
    OrganPlayerSpawnPhantomsEvent.run(entity, customData, [event])
})

// ===== shield_block.js =====
const OrganShieldBlockEvent = new OrganEventModel('shield_block')

NativeEvents.onEvent($ShieldBlockEvent,/** @param {Internal.ShieldBlockEvent} event */ event => {
    const entity = event.entity
    if (!entity) return

    let customData = {
        thornsDamage: 0
    }
    OrganShieldBlockEvent.run(entity, customData, [event])
    if (customData.thornsDamage > 0 && event.damageSource.actual) {
        let level = entity.level
        event.damageSource.actual.attack(level.damageSources().thorns(entity), customData.thornsDamage)
    }
})

// // ===== villager_update_offer.js =====
// const OrganVillagerUpdateSpecialPricesEvent = new OrganEventModel('villager_update_special_prices')
// MAAEvents.villagerUpdateSpecialPrices(event => {
//     const player = event.player
//     if (!player) return
//     let customData = {}
//     OrganVillagerUpdateSpecialPricesEvent.run(player, customData, [event])
// })

