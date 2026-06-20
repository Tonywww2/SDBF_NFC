// priority: 999
// [merged] domain/entity/lay_loot.js, domain/entity/pick_item_bdnet.js, domain/entity/gula_challenge.js

// ===== lay_loot.js =====
function NewLayLootGoal(entity) {
    return new $CustomGoal(
        'lay_loot',
        entity,
        /** @param {Internal.PathfinderMob} mob **/ mob => {
            // 何时能够使用
            const level = mob.level
            if (mob.persistentData.getInt('layLootTimer') > level.time) return false
            let selectBlock = FindNearestBlock(mob, 6, 2, 0, (curBlock) => {
                return LayLootGoalIsLayableBlock(curBlock)
            })
            return selectBlock != null
        },
        /** @param {Internal.PathfinderMob} mob **/ mob => {
            // 能否继续使用 
            const level = mob.level
            return mob.persistentData.getInt('layLootTimer') <= level.time
        },
        true, // 是否允许中断
        /** @param {Internal.PathfinderMob} mob **/ mob => {
            // 开启时执行
        },
        /** @param {Internal.PathfinderMob} mob **/ mob => {
            // 停止时执行
        },
        false, // 是否每个tick都需要更新
        /** @param {Internal.PathfinderMob} mob **/ mob => {
            // tick
            const level = mob.level
            let selectBlock = FindNearestBlock(mob, 6, 2, 0, (curBlock) => {
                return LayLootGoalIsLayableBlock(curBlock)
            })
            if (!selectBlock) return
            let targetPos = selectBlock.getPos().above()
            let dist = mob.position().distanceTo(targetPos)
            if (dist <= 2) {
                SpawnLootAtLocation(mob.level, targetPos, Utils.rollChestLoot(mob.getLootTable()).toArray())
                mob.persistentData.putInt('layLootTimer', level.time + 20 * 240)
            } else {
                NavigateWithDegrade(mob, targetPos, 1.0)
            }
        },
    )
}

/**
 * @param {Internal.BlockContainerJS} block 
 * @returns {boolean}
 */
function LayLootGoalIsLayableBlock(block) {
    const blockState = block.blockState
    if (blockState.is('minecraft:hopper')) {
        return true
    }
    return false
}

// ===== pick_item_bdnet.js =====
// [改] 原为放入 Beyond Dimensions 存储网络,现改为放入玩家背包(移除 beyonddimensions 依赖)
function NewPickItemBDNetGoal(entity) {
    return new $CustomGoal(
        'pick_item_bdnet',
        entity,
        /** @param {Internal.TamableAnimal} mob **/ mob => {
            return Boolean(mob.owner && mob.owner.isPlayer())
        },
        /** @param {Internal.TamableAnimal} mob **/ mob => {
            return Boolean(mob.owner && mob.owner.isPlayer())
        },
        true, // 是否允许中断
        /** @param {Internal.TamableAnimal} mob **/ mob => {
            // 开启时执行
        },
        /** @param {Internal.TamableAnimal} mob **/ mob => {
            // 停止时执行
        },
        false, // 是否每个tick都需要更新
        /** @param {Internal.TamableAnimal} mob **/ mob => {
            // tick
            if (mob.age % 20 != 0) return
            if (!mob.owner || !mob.owner.isPlayer()) return
            const level = mob.level
            const pos = mob.position()
            /** @type {Internal.ItemEntity} */
            let targetItemEntity = GetNearestEntityVec3d(level, pos, 16, (level, entity) => {
                if (entity instanceof $ItemEntity) return true 
            })
            if (!targetItemEntity) return
            let targetPos = targetItemEntity.position()
            if (mob.position().distanceTo(targetPos) <= 2) {
                /** @type {Internal.ServerPlayer} */
                let player = mob.owner
                let targetItem = targetItemEntity.getItem()
                // 放入玩家背包;add() 会把已放入部分从 targetItem 扣除,剩余留在原堆叠
                player.getInventory().add(targetItem)
                level.playSound(null, targetPos.x(), targetPos.y(), targetPos.z(), 'entity.item.pickup', mob.getSoundSource(), 1, 1)
                if (targetItem.isEmpty()) {
                    targetItemEntity.discard()
                } else {
                    targetItemEntity.setItem(targetItem)
                }
            } else {
                NavigateWithDegradeVec3d(mob, targetPos, 1.0)
            }
        },
    )
}

// ===== gula_challenge.js =====
function NewGulaChallengeGoal(entity) {
    return new $CustomGoal(
        'gula_challenge',
        entity,
        /** @param {Internal.PathfinderMob} mob **/ mob => {
            const level = mob.level
            if (!level.isRaining() || !level.isNight()) return false
            if (!mob.persistentData.contains('gulaChallenge')) {
                mob.persistentData.put('gulaChallenge', new $CompoundTag())
            }
            let targetBlock = FindNearestBlockAround(level, mob.blockPosition(), 6, 2, (curBlock) => {
                if (curBlock.blockState.isAir()) return false
                if (!curBlock.hasTag('kubejs:table_block')) return false
                let pPos = curBlock.pos
                for (let posOffset of [[1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1]]) {
                    let neighborPos = pPos.offset(posOffset[0], posOffset[1], posOffset[2])
                    let neighborBlock = level.getBlock(neighborPos)
                    if (neighborBlock.hasTag('kubejs:chair_block')) {
                        if (IsAnyOnChair(curBlock)) continue
                        return true
                    }
                }
                return false
            })
            if (!targetBlock) return false
            return true
        },
        /** @param {Internal.PathfinderMob} mob **/ mob => {
            const level = mob.level
            if (!level.isRaining() || !level.isNight()) return false
            return mob.persistentData.contains('gulaChallenge')
        },
        true,
        /** @param {Internal.PathfinderMob} mob **/ mob => {
        },
        /** @param {Internal.PathfinderMob} mob **/ mob => {
            const level = mob.level
            mob.unRide()
            RemoveCustomGoalByName(mob.goalSelector, 'gula_challenge')
            mob.discard()
            level.spawnParticles($ParticleTypes.SMOKE, false, mob.x, mob.y + 0.25, mob.z, 0, 0.2, 0, 30, 0.1)
        },
        false, // 是否每个tick都需要更新
        /** @param {Internal.PathfinderMob} mob **/ mob => {
            if (!mob.persistentData.contains('gulaChallenge')) {
                mob.persistentData.put('gulaChallenge', new $CompoundTag())
            }
            const level = mob.level
            const persistentData = mob.persistentData.getCompound('gulaChallenge')
            if (persistentData.contains('waitingTimer') && persistentData.getInt('waitingTimer') > level.time) return

            /**@type {Internal.BlockContainerJS} */
            let chairBlock
            let tableBlock = FindNearestBlockAround(level, mob.blockPosition(), 6, 2, (curBlock) => {
                if (curBlock.blockState.isAir()) return false
                if (!curBlock.hasTag('kubejs:table_block')) return false
                let pPos = curBlock.pos
                for (let posOffset of [[1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1]]) {
                    let neighborPos = pPos.offset(posOffset[0], posOffset[1], posOffset[2])
                    let neighborBlock = level.getBlock(neighborPos)
                    if (neighborBlock.hasTag('kubejs:chair_block')) {
                        if (IsAnyOnChair(curBlock)) continue
                        chairBlock = neighborBlock
                        return true
                    }
                }
                return false
            })
            if (!tableBlock || !chairBlock) return mob.isPassenger() ? mob.unRide() : null
            const chairPos = chairBlock.getPos()
            if (!mob.isPassenger()) {
                if (mob.position().distanceTo(chairPos) <= 2) {
                    let chairFacing = chairBlock.blockState.getValue($BlockStateProperties.HORIZONTAL_FACING)
                    if (chairBlock.id.startsWith('refurbished_furniture')) chairFacing = chairFacing.getOpposite()
                    SitOnChair(mob, chairPos, 0.5, chairFacing, false)
                    persistentData.putInt('waitingTimer', level.time + 20 * 5)
                } else {
                    NavigateWithDegrade(mob, chairPos, 1.0)
                }
            }

            if (!(mob.getVehicle() instanceof $Seat)) return

            const tablePos = tableBlock.getPos()
            const onTablePos = tablePos.above()
            const onTableBlock = level.getBlock(onTablePos)

            if (!persistentData.contains('targetDish')) {
                if (!onTableBlock || onTableBlock.blockState.isAir()) {
                    let round = persistentData.getInt('round')
                    level.setBlockAndUpdate(onTablePos, GetPlonkDefaultBlockState())
                    /**@type {Internal.TilePlacedItems} */
                    let plonkBlockEntity = level.getBlockEntity(onTablePos)
                    if (round >= 7) {
                        plonkBlockEntity.insertStack(Item.of('candlelight:note_paper_written',
                            `{author:"§kGula§r",text:["
                            ${Text.translatable(`tooltips.gula_challenge.text.7`).getString()}"],
                            title:"${Text.translatable(`tooltips.gula_challenge.title.7`).getString()}"}`), 0)
                        plonkBlockEntity.setChanged()
                        plonkBlockEntity.clean()
                        let nearestPlayer = GetNearestPlayer(level, mob.position(), 16)
                        // [maa禁用] MAAUtils.onKubeTaskFinish('gula_challenge_success', nearestPlayer, (task, pPlayer, teamData) => teamData.addProgress(task, 1))
                        return mob.persistentData.remove('gulaChallenge')
                    }
                    let targetDish = Item.of(GetGulaChallengeTargetDish(round))
                    plonkBlockEntity.insertStack(Item.of('candlelight:note_paper_written',
                        `{author:"§kGula§r",text:["${Text.translatable(`tooltips.gula_challenge.text.${round}`, targetDish.getHoverName().getString()).getString()}"],title:"${Text.translatable(`tooltips.gula_challenge.title.${round}`).getString()}"}`), 0)
                    plonkBlockEntity.setChanged()
                    plonkBlockEntity.clean()
                    level.playSound(null, tablePos.getX(), tablePos.getY(), tablePos.getZ(), 'item.book.page_turn', mob.getSoundSource(), 1, 1)
                    persistentData.putInt('round', round + 1)
                    persistentData.putString('targetDish', targetDish.getId())
                }
            } else if (persistentData.contains('isEating')) {
                if (level.time < persistentData.getInt('isEating')) {
                    mob.swing()
                    level.playSound(null, tablePos.getX(), tablePos.getY(), tablePos.getZ(), 'minecraft:entity.generic.eat', mob.getSoundSource(), 1, 1)
                    persistentData.putInt('waitingTimer', level.time + 20)
                } else {
                    level.playSound(null, tablePos.getX(), tablePos.getY(), tablePos.getZ(), 'minecraft:entity.player.burp', mob.getSoundSource(), 1, 1)
                    level.spawnParticles($ParticleTypes.HEART, true, tablePos.getX(), tablePos.getY(), tablePos.getZ(), 0.5, 0.5, 0.5, 20, 0.1)
                    persistentData.remove('isEating')
                    persistentData.remove('targetDish')
                    mob.setMainHandItem(Item.empty)
                    persistentData.putInt('waitingTimer', level.time + 20 * 2)
                }
            } else if (persistentData.contains('targetDish')) {
                let targetDish = Item.of(persistentData.getString('targetDish'))
                if (onTableBlock.id == targetDish.id || (onTableBlock.item && onTableBlock.item.id == targetDish.id)) {
                    if (persistentData.getBoolean('findDish')) {
                        persistentData.remove('findDish')
                        level.removeBlock(onTablePos, false)
                        persistentData.putInt('isEating', level.time + 20 * 10)
                        mob.setMainHandItem(targetDish)
                    } else {
                        persistentData.putBoolean('findDish', true)
                        persistentData.putInt('waitingTimer', level.time + 20 * 5)
                    }
                } else if (onTableBlock.entity && onTableBlock.entity instanceof $TilePlacedItems) {
                    let plonkItemTile = onTableBlock.entity
                    for (let i = 0; i < plonkItemTile.allItems.size(); i++) {
                        let curItem = plonkItemTile.getItem(i)
                        if (curItem.item.id == targetDish.id) {
                            if (persistentData.getBoolean('findDish')) {
                                persistentData.remove('findDish')
                                plonkItemTile.removeItem(i, 1)
                                persistentData.putInt('isEating', level.time + 20 * 10)
                                mob.setMainHandItem(targetDish)
                            } else {
                                persistentData.putBoolean('findDish', true)
                                persistentData.putInt('waitingTimer', level.time + 20 * 5)
                            }
                            break
                        }
                    }
                }
            }
        },
    )
}

function GetGulaChallengeTargetDish(round) {
    switch (round) {
        case 0:
            return RandomGet(['minecraft:cake', 'bakery:strawberry_cake', 'bakery:sweetberry_cake', 'bakery:chocolate_cake', 'bakery:chocolate_gateau', 'bakery:bundt_cake', 'bakery:linzer_tart', 'bakery:apple_pie', 'bakery:glowberry_tart', 'bakery:chocolate_tart', 'bakery:pudding', 'bakery:pudding_slice', 'bakery:chocolate_tart_slice', 'bakery:glowberry_pie_slice', 'bakery:cornet', 'bakery:jam_roll', 'bakery:apple_cupcake', 'bakery:misslilitu_biscuit', 'bakery:waffle', 'bakery:chocolate_truffle', 'bakery:sweetberry_cupcake', 'bakery:apple_pie_slice', 'minecraft:cookie', 'bakery:strawberry_cake_slice', 'minecraft:honey_bottle', 'bakery:chocolate_cake_slice', 'bakery:sweetberry_cake_slice', 'bakery:chocolate_gateau_slice', 'bakery:bundt_cake_slice', 'bakery:linzer_tart_slice', 'bakery:strawberry_cupcake', 'bakery:chocolate_glazed_cookie', 'bakery:sweetberry_glazed_cookie', 'bakery:strawberry_glazed_cookie'])
        case 1:
            return RandomGet(['brewery:beer_wheat', 'brewery:beer_hops', 'brewery:beer_nettle', 'brewery:beer_oat', 'brewery:beer_haley', 'brewery:whiskey_jojannik', 'brewery:whiskey_lilitusinglemalt', 'brewery:whiskey_cristelwalker', 'brewery:beer_barley', 'brewery:whiskey_maggoallan', 'brewery:whiskey_ak', 'brewery:whiskey_carrasconlabel', 'brewery:whiskey_smokey_reverie', 'brewery:whiskey_highland_hearth', 'brewery:whiskey_jamesons_malt', 'farm_and_charm:strawberry_tea_cup', 'farm_and_charm:ribwort_tea', 'farm_and_charm:nettle_tea_cup', 'farm_and_charm:ribwort_tea_cup', 'farm_and_charm:nettle_tea', 'farm_and_charm:strawberry_tea'])
        case 2:
            return RandomGet(['candlelight:roastbeef_with_glazed_carrots', 'brewery:half_chicken', 'candlelight:roasted_lamb_with_lettuce', 'brewery:fried_chicken', 'candlelight:fillet_steak', 'candlelight:salmon_on_white_wine', 'candlelight:tropical_fish_supreme', 'candlelight:pork_ribs', 'candlelight:beef_with_mushroom_in_wine_and_potatoes', 'brewery:pork_knuckle', 'candlelight:chicken_teriyaki', 'candlelight:beef_wellington', 'candlelight:bolognese', 'candlelight:beef_tartare', 'brewery:sausage', 'candlelight:chicken_with_vegetables'])
        case 3:
            return RandomGet(['brewery:mashed_potatoes', 'brewery:potato_salad', 'candlelight:tomato_mozzarella_salad', 'candlelight:harvest_plate', 'candlelight:fresh_garden_salad', 'brewery:dumplings'])
        case 4:
            return RandomGet(['farm_and_charm:onion_soup', 'farm_and_charm:goulash', 'candlelight:mushroom_soup', 'minecraft:beetroot_soup', 'farm_and_charm:barley_soup', 'candlelight:tomato_soup', 'farm_and_charm:simple_tomato_soup'])
        case 5:
            return RandomGet(['candlelight:chicken_alfredo', 'candlelight:lasagne', 'bakery:sandwich', 'bakery:vegetable_sandwich', 'bakery:grilled_bacon_sandwich', 'bakery:grilled_salmon_sandwich', 'candlelight:pasta_with_bolognese', 'candlelight:khinkali', 'candlelight:pasta_with_lettuce', 'candlelight:omelet'])
        case 6:
            return RandomGet(['kubejs:human_meat_sausage', 'kubejs:crispy_bone_human_meat_sausage'])
        default:
            return Item.of('minecraft:cooked_beef')
    }
}

