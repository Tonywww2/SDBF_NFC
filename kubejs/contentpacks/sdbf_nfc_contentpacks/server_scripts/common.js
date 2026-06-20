// priority: 500
// [merged] domain/common/budding_amethyst_deployer.js, domain/common/colorful_slime.js, domain/common/dim_restriction.js, domain/common/dummy_stack_disable.js, domain/common/gen_shop_machine.js, domain/common/item_in_nether_portal.js, domain/common/key_to_infinity.js, domain/common/mob_griefing.js, domain/common/mob_restriction.js, domain/common/player_loggedIn.js, domain/common/rosy_cc_convert.js, domain/common/server_loaded.js

// ===== budding_amethyst_deployer.js =====
BlockEvents.rightClicked('minecraft:budding_amethyst', event => {
    const level = event.level
    const block = event.block
    const entity = event.entity
    // if (entity instanceof $DeployerFakePlayer) {
    //     block.blockState.randomTick(level, block.pos, level.random)
    // }
})

// ===== colorful_slime.js =====
LootJS.modifiers(event => {
    event.addEntityLootModifier('minecraft:slime')
        .entityPredicate(entity => entity instanceof $LivingEntity && entity.getActiveEffects().size() >= 7)
        .addLoot(LootEntry.of('kubejs:colorful_slime_ball'))
})

// ===== item_in_nether_portal.js =====
const InfinityPortalItem2Item = new Map()
function RegisterPortalItem2Item(item, item2) {
    InfinityPortalItem2Item.set(item, item2)
}
// RegisterPortalItem2Item('minecraft:light_blue_dye', 'beyonddimensions:net_member_inviter')
// RegisterPortalItem2Item('beyonddimensions:net_member_inviter', 'beyonddimensions:net_destroyer')
// RegisterPortalItem2Item('beyonddimensions:net_destroyer', 'beyonddimensions:net_gifter')
// RegisterPortalItem2Item('beyonddimensions:net_gifter', 'beyonddimensions:net_manager_inviter')
// RegisterPortalItem2Item('beyonddimensions:net_manager_inviter', 'beyonddimensions:net_member_inviter')
// RegisterPortalItem2Item('minecraft:diamond_block', 'beyonddimensions:net_pathway')
// RegisterPortalItem2Item('sophisticatedbackpacks:advanced_magnet_upgrade', 'beyonddimensions:net_magnet_item')
// RegisterPortalItem2Item('sophisticatedbackpacks:advanced_refill_upgrade', 'beyonddimensions:net_restocker_item')
// RegisterPortalItem2Item('sophisticatedbackpacks:xp_pump_upgrade', 'beyonddimensions:xp_exchange_item')

const InfinityPortalItem2DimId = new Map()
function RegisterPortalItem2DimId(dimItem, dimId) {
    InfinityPortalItem2DimId.set(dimItem, dimId)
}
// RegisterPortalItem2DimId('minecraft:obsidian', 'infinity:cube')
// RegisterPortalItem2DimId('minecraft:slime_ball', 'infinity:slime')
// RegisterPortalItem2DimId('minecraft:grass_block', 'infinity:hills')
// RegisterPortalItem2DimId('minecraft:cherry_leaves', 'infinity:spiral')
// RegisterPortalItem2DimId('minecraft:sponge', 'infinity:sponge')
// RegisterPortalItem2DimId('minecraft:stick', 'infinity:content')
// RegisterPortalItem2DimId('minecraft:mossy_cobblestone', 'infinity:classic')
// RegisterPortalItem2DimId('minecraft:bricks', 'infinity:isolation')
// RegisterPortalItem2DimId('minecraft:black_wool', 'infinity:chess')
// RegisterPortalItem2DimId('minecraft:book', 'infinity:library')
// RegisterPortalItem2DimId('minecraft:glowstone', 'infinity:nexus')
// RegisterPortalItem2DimId('minecraft:redstone', 'infinity:perfection')
// RegisterPortalItem2DimId('minecraft:terracotta', 'infinity:custom')
// RegisterPortalItem2DimId('minecraft:white_concrete', 'infinity:ant')
// RegisterPortalItem2DimId('minecraft:dragon_egg', 'infinity:skygrid')
// RegisterPortalItem2DimId('minecraft:gold_block', 'infinity:golden')
// RegisterPortalItem2DimId('kubejs:elder_guardian_core', 'infinity:void')
// RegisterPortalItem2DimId('minecraft:sandstone', 'infinity:redstone_flat')
// RegisterPortalItem2DimId('minecraft:dragon_breath', 'infinity:missingno')
// RegisterPortalItem2DimId('minecraft:shroomlight', 'infinity:cavern')
// // RegisterPortalItem2DimId('lightmanscurrency:coin_gold', 'infinity:room')
// RegisterPortalItem2DimId('kaleidoscope_cookery:raw_noodles', 'infinity:noodles')
// // RegisterPortalItem2DimId('lightmanscurrency:coin_diamond', 'kubejs:oath')

// InfinityEvents.itemInPortal(event => {
//     const itemEntity = event.entity
//     if (itemEntity.isOnPortalCooldown()) return
//     itemEntity.setPortalCooldown(20)
//     /** @type {Internal.ItemStack} */
//     const itemStack = itemEntity.getItem()
//     const level = event.getLevel()
//     if (level.isClientSide()) return
//     const itemId = String(itemStack.getId())
//     const pos = event.getPos()
//     if (itemStack.is('kubejs:key_to_infinity')) {
//         let nameString = GetInfinityKeyDim(itemStack)
//         itemEntity.remove('changed_dimension')
//         InfinityPortalCreator.tryCreatePortalById(nameString, level, pos)
//     } else if (itemStack.is('exposure:photograph') && itemStack.hasNBT() && !AStages.serverHasStage(FTBFinalTimerStart, event.server)) {
//         let nbt = itemStack.getNbt()
//         if (!nbt.contains('photograph_frame')) return
//         let frameNbt = nbt.getCompound('photograph_frame')
//         if (!frameNbt.contains('photographer')) return
//         let photographerNbt = frameNbt.getCompound('photographer')
//         let phtographerId = photographerNbt.getUUID('uuid')
//         let targetPlayer = level.getPlayerByUUID(phtographerId)
//         if (!targetPlayer) return
//         // [beyonddimensions/maa禁用]
//         // if (!DimensionsNet.hasAnyNet(targetPlayer)) {
//         //     MAAUtils.createBDNetForPlayer(targetPlayer, null, 27)
//         //     level.playSound(null, targetPlayer.getX(), targetPlayer.getY(), targetPlayer.getZ(), 'ui.toast.challenge_complete', targetPlayer.getSoundSource(), 0.25, 1)
//         // }
//     } else if (InfinityPortalItem2Item.has(itemId)) {
//         itemEntity.setPortalCooldown(100)
//         itemEntity.setItem(Item.of(InfinityPortalItem2Item.get(itemId), itemStack.getCount()))
//     } else if (InfinityPortalItem2DimId.has(itemId)) {
//         itemEntity.remove('changed_dimension')
//         InfinityPortalCreator.tryCreatePortalById(InfinityPortalItem2DimId.get(itemId), level, pos)
//     }
// })

// /**
//  * 获取无限门的维度ID
//  * @param {Internal.ItemStack} itemStack
//  * @returns {string}
//  */
// function GetInfinityKeyDim(itemStack) {
//     if (itemStack.hasCustomHoverName()) {
//         let rawName = itemStack.getHoverName().getString()

//         if (rawName.startsWith('infinity:')) {
//             rawName = rawName.replace('infinity:', '')
//         }
//         rawName = rawName.trim().toLowerCase()

//         if (rawName == 'random') {
//             return 'infinity:random'
//         }

//         // 特殊维度特殊处理
//         if (InfinityMod.provider.easterizer.isEaster(rawName)) return 'infinity:' + rawName

//         if (!/^[a-z0-9/._-]+$/.test(rawName)) {
//             return 'infinity:random'
//         }

//         if (!rawName.startsWith('generated_')) {
//             rawName = 'generated_' + rawName
//         }

//         return 'infinity:' + rawName
//     } else {
//         return 'infinity:random'
//     }
// }

// // ===== key_to_infinity.js =====
// BlockEvents.rightClicked('infinity:nether_portal', event => {
//     const item = event.getItem()
//     if (!item.is('kubejs:key_to_infinity')) return
//     const block = event.getBlock()
//     const level = event.getLevel()
//     const pos = block.getPos()
//     let entity = level.getBlockEntity(pos)
//     /**@type {ResourceLocation} */
//     let dimStr = entity.getDimension()
//     if (dimStr.getPath().startsWith('generated_')) {
//         item.setHoverName(dimStr.getPath().replace('generated_', ''))
//     } else {
//         item.setHoverName(dimStr.getPath())
//     }
// })

// // ===== mob_griefing.js =====
// NativeEvents.onEvent($EntityMobGriefingEvent, /** @param {Internal.EntityMobGriefingEvent} event */ event => {
//     const entity = event.getEntity()
//     if (entity.type.startsWith('cataclysm:')) {
//         event.setResult('deny')
//         return
//     }
// })

// // ===== mob_restriction.js =====
// EntityEvents.spawned('cataclysm:lionfish', event => {
//     event.cancel()
// })

// EntityEvents.spawned('irons_spellbooks:priest', event => {
    // event.cancel()
// })

// ===== player_loggedIn.js =====
PlayerEvents.loggedIn(event => {
    const player = event.player
    FirstLoginInit(player)
    InitClientOrganSkill(player) // 同步客户端SkillWheel：刷新器官轮盘展示，避免切换存档客户端数据错误
    SyncQueuedData(player) // 队列消息同步：用于将服务端的data延后发送给client
    InitClientISSSpellData(player) // 同步客户端ISSSpellData：同步客户端的ISSSpellData，用于客户端的ISSSpellData初始化
    // SyncClientMoonEvent(player) // 同步客户端月亮显示：用于客户端的MoonEvent显示同步
})

/**
 * @param {Internal.ServerPlayer} player 
 */
function FirstLoginInit(player) {
    // if (!player.persistentData.contains('inited') || !player.persistentData.get('inited')) {
    //     player.seenCredits = true
    //     player.persistentData.put('inited', true)
    //     // player.give('ftbquests:book')
    // }
}

/**
 * 
 * @param {Internal.ServerPlayer} player 
 */
function InitClientOrganSkill(player) {
    let data = new $CompoundTag()
    data.putString('type', 'refresh')
    player.sendData('update_organ_skill_wheel_item', data)
}

// ===== rosy_cc_convert.js =====
NativeEvents.onEvent($LivingDamageEvent, /** @param {Internal.LivingDamageEvent} event */ event => {
    if (!event.source.is($DamageTypes.DROWN)) return
    const entity = event.entity
    if (!entity.isPlayer() || entity.getHealth() > 4) return
    if (!entity.isEyeInFluidType(Fluid.getType('kubejs:molten_rose_quartz').getFluidType())) return
    const chestCavity = entity.chestCavityInstance
    if (!chestCavity || chestCavity.getInventoryType() == 'kubejs:cc_inventory_types/rose') return
    if (chestCavity.getOrganScore('kubejs:rosy') < 10) return
    chestCavity.setInventoryType('kubejs:cc_inventory_types/rose')
    entity.level.playSound(null, entity.getX(), entity.getY(), entity.getZ(), 'ui.toast.challenge_complete', entity.getSoundSource(), 0.25, 1)
    
    // [maa禁用] MAAUtils.onKubeTaskFinish('rose_cc_convert', entity, (task, pPlayer, teamData) => teamData.addProgress(task, 1))
    entity.potionEffects.add('minecraft:water_breathing', 20 * 60)
})

// ===== server_loaded.js =====
// ServerEvents.loaded(event => {
//     const server = event.getServer()
//     MAAUtils.resetInstance()
//     MAAUtils.setEternalWinterEnabled(server, server.persistentData.getInt