// priority: 3001
// [merged] 合并自: common.js, block.js, curios.js, entity.js, ftb_chunk.js, iss.js, item.js, level.js, lightman.js, nbt.js, organ.js, painter.js, player.js, server.js, wardrobe.js, data_queue.js, bundle.js, block_display.js

// ===== common.js =====
/**
 * 从数组中随机获取一个元素
 * 如果数组为空或未定义，则返回 null
 * @param {any[]} array 
 * @returns {any}
 */
function RandomGet(list) {
    if (!list || list.length == 0) return null
    let index = Math.floor(Math.random() * list.length)
    return list[index]
}

/**
 * 对给定的数值进行四舍五入操作，并保留指定的小数位数
 * @param {number} value 
 * @param {number} n 
 * @returns {number}
 */


/**
 * 对给定的数值进行下取整操作，并保留指定的小数位数
 * @param {number} value 
 * @param {number} n 
 * @returns {number}
 */
function FloorFix(value, n) {
    return Math.floor(value * Math.pow(10, n)) / Math.pow(10, n)
}

/**
 * 向下取整并且保证大于0
 * @param {number} value 
 * @returns {number}
 */

/**
 * 洗牌算法
 * @param {any[]} a 
 * @returns {any[]}
 */
function Shuffle(arr) {
    var length = arr.length,
        temp,
        random
    while (0 != length) {
        random = Math.floor(Math.random() * length)
        length--
        // swap
        temp = arr[length]
        arr[length] = arr[random]
        arr[random] = temp
    }
    return arr
}

/**
 * 数组交集
 * @param {any[]} arr1 
 * @param {any[]} arr2 
 * @returns {any[]}
 */


/**
 * 非重取出
 * @param {any[]} arr
 * @param {number} count
 * @returns {any[]}
 */


/**
 * 幸运重roll
 * @param {number} luck 
 * @returns 
 */

function RandomWithLuck(luck, luckThreshold) {
    let randomList = []
    if (luck > 0) {
        for (let i = 0; i < luck / luckThreshold; i++) {
            randomList.push(Math.random())
        }
        if (luck % luckThreshold > 0 && luck % luckThreshold > Math.random() * luckThreshold) {
            randomList.push(Math.random())
        }
    } else {
        randomList.push(Math.random())
    }
    return Math.max.apply(null, randomList)
}


function RandomWithPlayerLuck(player) {
    let luckDeity = 10
    let luck = player.luck
    if (player.hasEffect('kubejs:luck_deity')) {
        luckDeity = Math.max(9 - player.getEffect('kubejs:luck_deity').getAmplifier(), 2)
    }
    return RandomWithLuck(luck, luckDeity)
}





/**
 * @param {Vec3i} vec3i 
 * @returns {BlockPos}
 */
function ConvertVec3i2BlockPos(vec3i) {
    return new BlockPos(vec3i.x, vec3i.y, vec3i.z)
}

/**
 * @param {vec3d} vec3d 
 * @returns {BlockPos}
 */
function ConvertVec3d2BlockPos(vec3d) {
    return new BlockPos(vec3d.x(), vec3d.y(), vec3d.z())
}

/**
 * @param {BlockPos} blockPos 
 * @returns {Vec3d}
 */


/**
 * 
 * @param {number} num 
 * @returns {number}
 */
function Int2Integer(num) {
    return $Integer.valueOf(JavaMath.toIntExact(num))
}


/**
 * @param {any[]} array 
 * @param {Number} chunkSize 
 * @returns {any[][]}
 */
function SliceChunkArray(array, chunkSize) {
    let chunks = []
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize))
    }
    return chunks
}

/**
 * 
 * @param {number} num 
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
function Clamp(num, min, max) {
    return Math.min(Math.max(num, min), max)
}

/**
 * 生成一个服从标准正态分布 N(0,1) 的随机数
 * @returns {number} 标准正态分布随机数
 */
function StandardNormalRandom() {
    let u = 0, v = 0
    while (u == 0) u = Math.random() // 避免 u = 0，因为 ln(0) 无定义
    while (v == 0) v = Math.random() // v 可为零，但 cos/sin 没问题，此处为对称处理
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * JavaMath.PI * v)
}

/**
 * 生成服从正态分布 N(mean, sigma^2) 的随机数
 * @param {number} mean    均值 μ
 * @param {number} sigma   标准差 σ
 * @returns {number} 正态分布随机数
 */
function NormalRandom(mean, sigma) {
    return mean + sigma * StandardNormalRandom()
}


/**
 * 
 * @param {Internal.Vec3d} vec3d 
 * @returns {Internal.Vec3d}
 */
function Vec3dNormalize(vec3d) {
    let i = Math.sqrt(vec3d.x() * vec3d.x() + vec3d.y() * vec3d.y() + vec3d.z() * vec3d.z())
    return i < 1.0E-4 ? Vec3d.ZERO : new Vec3d(vec3d.x() / i, vec3d.y() / i, vec3d.z() / i)
}

// ===== block.js =====
/**
 * @callback isValidBlockTarget
 * @param {Internal.BlockContainerJS}
 * @returns {Boolean}
 */
/**
 * 在某个范围内寻找符合条件的方块
 * @param {Internal.BlockContainerJS} block 
 * @param {number} searchRange 
 * @param {number} verticalSearchRange 
 * @param {isValidBlockTarget} isValidTarget
 * @returns {Internal.BlockContainerJS[]}
 */


/**
 * 在某个范围内寻找符合条件的方块
 * @param {Internal.BlockContainerJS} block 
 * @param {number} searchRange 
 * @param {number} verticalSearchRange 
 * @param {isValidBlockTarget} isValidTarget
 * @returns {Internal.BlockContainerJS}
 */

/**
 * 生成一个随机的Lootr Chest
 * @param {Internal.Level} level 
 * @param {BlockPos} pos 
 * @param {ResourceLocation} table 
 */
function GenLootrChestWithLootTable(level, pos, table) {
    let placementState = Block.getBlock('minecraft:chest').defaultBlockState()
    level.setBlock(pos, placementState, 2)
    $RandomizableContainerBlockEntity.setLootTable(level, level.getRandom(), pos, table)
}



/**
 * 在某个范围内寻找符合条件的方块
 * @param {Internal.Level} level 
 * @param {BlockPos} blockPos 
 * @param {number} searchRange 
 * @param {number} verticalSearchRange 
 * @param {isValidBlockTarget} isValidTarget
 * @returns {Internal.BlockContainerJS}
 */
function FindNearestBlockAround(level, blockPos, searchRange, verticalSearchRange, isValidTarget) {
    // Y遍历
    for (let k = 0; k <= verticalSearchRange; k = k > 0 ? -k : 1 - k) {
        // X-Z遍历
        for (let l = 0; l <= searchRange; ++l) {
            for (let i = 0; i <= l; i = i > 0 ? -i : 1 - i) {
                for (let j = i < l && i > -l ? l : 0; j <= l; j = j > 0 ? -j : 1 - j) {
                    let curBlock = level.getBlock(blockPos.x + i, blockPos.y + k, blockPos.z + j)
                    if (isValidTarget(curBlock)) {
                        return curBlock
                    }
                }
            }
        }
    }
    return null
}

/**
 * 
 * @returns {Internal.BlockState}
 */
function GetPlonkDefaultBlockState() {
    let plonkBlockState = $PlonkRegistryItems.placed_items.getBlock().defaultBlockState()
    return plonkBlockState.setValue(BlockProperties.WATERLOGGED, $Boolean.FALSE)
}

// ===== curios.js =====
/**
 * 获取 entity curios inventory cap
 * @param {Internal.Entity} entity 
 * @returns {Internal.ICuriosItemHandler}
 */
function GetCuriosInventoryCap(entity) {
    let curiosCap = entity.getCapability(CuriosCapabilities.INVENTORY)
    if (curiosCap.isPresent()) {
        return curiosCap.resolve().get()
    }
    return null
}

/**
 * 获取 entity curios item cap
 * @param {Internal.Entity} entity 
 * @returns {Internal.ICurio}
 */

// ===== entity.js =====
/**
 * @callback isValidTarget
 * @param {Internal.BlockContainerJS}
 * @returns {Boolean}
 */
/**
 * 在某个范围内寻找符合条件的方块
 * @param {Internal.PathfinderMob} mob 
 * @param {number} searchRange 
 * @param {number} verticalSearchRange 
 * @param {number} verticalOffset 
 * @param {isValidTarget} isValidTarget
 * @returns {Internal.BlockContainerJS[]}
 */


/**
 * 在前进范围内寻找符合条件的方块
 * @param {Internal.PathfinderMob} mob 
 * @param {number} searchRange 
 * @param {number} secondaryRange
 * @param {number} verticalSearchRange 
 * @param {number} verticalOffset 
 * @param {isValidTarget} isValidTarget
 * @returns {Internal.BlockContainerJS[]}
 */




/**
 * 在某个范围内寻找最近符合条件的方块
 * @param {Internal.PathfinderMob} mob 
 * @param {number} searchRange 
 * @param {number} verticalSearchRange 
 * @param {number} verticalOffset 
 * @param {isValidTarget} isValidTarget
 * @returns {Internal.BlockContainerJS}
 */
function FindNearestBlock(mob, searchRange, verticalSearchRange, verticalOffset, isValidTarget) {
    let blockPos = mob.blockPosition().offset(0, verticalOffset, 0);
    let mutableBlockPos = BlockPos.ZERO.mutable()

    // Y遍历
    for (let k = 0; k <= verticalSearchRange; k = k > 0 ? -k : 1 - k) {
        // X-Z遍历
        for (let l = 0; l <= searchRange; ++l) {
            for (let i = 0; i <= l; i = i > 0 ? -i : 1 - i) {
                for (let j = i < l && i > -l ? l : 0; j <= l; j = j > 0 ? -j : 1 - j) {
                    mutableBlockPos.setWithOffset(blockPos, i, k, j)
                    let curBlock = mob.level.getBlock(mutableBlockPos.x, mutableBlockPos.y, mutableBlockPos.z)
                    if (mob.isWithinRestriction(mutableBlockPos) && isValidTarget(curBlock)) {
                        return curBlock
                    }
                }
            }
        }
    }
    return null
}


/**
 * 在前进范围内寻找最近符合条件的方块
 * @param {Internal.PathfinderMob} mob 
 * @param {number} searchRange 
 * @param {number} verticalSearchRange 
 * @param {number} verticalOffset 
 * @param {isValidTarget} isValidTarget
 * @returns {Internal.BlockContainerJS}
 */

/**
 * 获取生物Position，并且输出对应的BlockPos
 * @param {Internal.PathfinderMob} mob 
 * @param {BlockPos} status
 */


/**
 * 
 * @param {Internal.PathfinderMob} mob 
 * @param {BlockPos} pos 
 * @param {Number} speed 
 * @returns 
 */
function NavigateWithDegrade(mob, pos, speed) {
    if (!pos) return false
    let navigation = mob.getNavigation()
    if (navigation.isInProgress() && mob.isInFluidType() && Math.random() < 0.8) {
        mob.jumpControl.jump()
    }
    if (!navigation.isInProgress() || !navigation.targetPos.equals(pos)) {
        navigation.moveTo(pos.x, pos.y, pos.z, speed)
        return true
    }
    return true
}

/**
 * 
 * @param {Internal.PathfinderMob} mob 
 * @param {Vec3d} pos 
 * @param {Number} speed 
 * @returns 
 */
function NavigateWithDegradeVec3d(mob, pos, speed) {
    if (!pos) return false
    let navigation = mob.getNavigation()
    if (navigation.isInProgress() && mob.isInFluidType() && Math.random() < 0.8) {
        mob.jumpControl.jump()
    }
    if (!navigation.isInProgress() || !navigation.targetPos.equals(pos)) {
        navigation.moveTo(pos.x(), pos.y(), pos.z(), speed)
        return true
    }
    return true
}

/**
* 获取某个半径内的实体
* @param {Internal.Level} level
* @param {BlockPos} pos
* @param {Number} radius
* @param {function(Internal.Level, Internal.PathfinderMob):boolean} entityTester
* @returns {Array<Internal.LivingEntity>}
*/
function GetLivingWithinRadius(level, pos, radius, entityTester) {
    let area = AABB.of(pos.x - radius, pos.y - radius, pos.z - radius, pos.x + radius, pos.y + radius, pos.z + radius)
    let entityAABBList = level.getEntitiesWithin(area)
    let entityList = []
    entityAABBList.forEach(entity => {
        if (entity.position() && entity.position().distanceTo(pos) <= radius && entity.isLiving() && entity.isAlive()) {
            if (entityTester(level, entity)) {
                entityList.push(entity)
            }
        }
    })
    return entityList
}

/**
* 获取某个半径内的实体
* @param {Internal.Level} level
* @param {Vec3d} pos
* @param {Number} radius
* @param {function(Internal.Level, Internal.PathfinderMob):boolean} entityTester
* @returns {Array<Internal.LivingEntity>}
*/
function GetLivingWithinRadiusVec3d(level, pos, radius, entityTester) {
    let area = AABB.of(pos.x() - radius, pos.y() - radius, pos.z() - radius, pos.x() + radius, pos.y() + radius, pos.z() + radius)
    let entityAABBList = level.getEntitiesWithin(area)
    let entityList = []
    entityAABBList.forEach(entity => {
        if (entity.position() && entity.position().distanceTo(pos) <= radius && entity.isLiving() && entity.isAlive()) {
            if (entityTester(level, entity)) {
                entityList.push(entity)
            }
        }
    })
    return entityList
}

/**
* 获取某个半径内的实体
* @param {Internal.Level} level
* @param {BlockPos} pos
* @param {Number} radius
* @param {function(Internal.Level, Internal.PathfinderMob):boolean} entityTester
* @returns {Array<Internal.LivingEntity>}
*/

/**
* 获取某个半径内的实体
* @param {Internal.Level} level
* @param {Vec3d} pos
* @param {Number} radius
* @param {function(Internal.Level, Internal.PathfinderMob):boolean} entityTester
* @returns {Array<Internal.LivingEntity>}
*/
function GetEntityWithinRadiusVec3d(level, pos, radius, entityTester) {
    let area = AABB.of(pos.x() - radius, pos.y() - radius, pos.z() - radius, pos.x() + radius, pos.y() + radius, pos.z() + radius)
    let entityAABBList = level.getEntitiesWithin(area)
    let entityList = []
    entityAABBList.forEach(entity => {
        if (entity.position() && entity.position().distanceTo(pos) <= radius) {
            if (entityTester(level, entity)) {
                entityList.push(entity)
            }
        }
    })
    return entityList
}

/**
* 获取某个半径内的被驯服的实体
* @param {Internal.Level} level
* @param {Player} player
* @param {Number} radius
* @returns {Array<Internal.LivingEntity>}
*/
function GetTamedEntityWithinRadius(level, player, radius) {
    let pos = player.blockPosition()
    let area = AABB.of(pos.x - radius, pos.y - radius, pos.z - radius, pos.x + radius, pos.y + radius, pos.z + radius)
    let entityAABBList = level.getEntitiesWithin(area)
    let entityList = []
    entityAABBList.forEach(pEntity => {
        if (pEntity.position() && pEntity.position().distanceTo(pos) <= radius) {
            if (pEntity instanceof $OwnableEntity) {
                if (pEntity.owner && pEntity.owner.is(player)) {
                    entityList.push(pEntity)
                }
                return
            }
            if (pEntity instanceof $AbstractGolem) {
                if (pEntity.getOwner() && pEntity.getOwner().is(player)) {
                    entityList.push(pEntity)
                }
                return
            }
        }
    })
    return entityList
}


/**
 * 生成一个物品实体
 * @param {Internal.Level} level 
 * @param {BlockPos} pos 
 * @param {Internal.ItemStack} itemStack 
 * @param {Vec3d} movement
 */
function SpawnItemEntityWithMovement(level, pos, itemStack, movement) {
    let itemEntity = new $ItemEntity(level, pos.getX(), pos.getY(), pos.getZ(), itemStack)
    itemEntity.addDeltaMovement(movement)
    itemEntity.setDefaultPickUpDelay()
    level.addFreshEntity(itemEntity)
}

/**
* 获取某个半径内的物品实体
* @param {Internal.Level} level
* @param {BlockPos} pos
* @param {Number} radius
* @param {function(Internal.Level, Internal.ItemEntity):boolean} entityTester
* @returns {Array<Internal.ItemEntity>}
*/
function GetItemEntityWithinRadius(level, pos, radius, entityTester) {
    let area = AABB.of(pos.x - radius, pos.y - radius, pos.z - radius, pos.x + radius, pos.y + radius, pos.z + radius)
    let entityList = level.getEntitiesOfClass($ItemEntity, area, entity => {
        if (entity.position() && entity.position().distanceTo(pos) <= radius) {
            if (entityTester(level, entity)) {
                return true
            }
        }
        return false
    })

    return entityList
}

/**
 * 获取最近的实体
 * @param {Internal.Level} level 
 * @param {BlockPos} pos 
 * @param {Number} radius 
 * @param {function(Internal.Level, Internal.Entity):boolean} entityTester 
 * @returns {Internal.Entity}
 */

/**
 * 获取最近的实体
 * @param {Internal.Level} level 
 * @param {Vec3d} pos 
 * @param {Number} radius 
 * @param {function(Internal.Level, Internal.Entity):boolean} entityTester 
 * @returns {Internal.Entity}
 */
function GetNearestEntityVec3d(level, pos, radius, entityTester) {
    let area = AABB.of(pos.x() - radius, pos.y() - radius, pos.z() - radius, pos.x() + radius, pos.y() + radius, pos.z() + radius)
    let entityAABBList = level.getEntitiesWithin(area)
    if (entityAABBList.size() <= 0) return null
    let result = null
    let minDist = Number.MAX_VALUE
    entityAABBList.forEach(entity => {
        if (!entity.position()) return
        if (!entityTester(level, entity)) return
        let dist = entity.position().distanceTo(pos)
        if (dist <= radius && dist < minDist) {
            result = entity
            minDist = dist
        }
    })
    return result
}

/**
 * @param {Internal.Level} level 
 * @param {Internal.LivingEntity} entity
 * @param {Internal.ItemStack[]} itemList 
 */



/**
 * 获取最近的玩家
 * @param {Internal.Level} level 
 * @param {BlockPos} pos 
 * @param {Number} radius 
 * @returns {Internal.ServerPlayer}
 */
function GetNearestPlayer(level, pos, radius) {
    return level.getNearestPlayer(pos.getX(), pos.getY(), pos.getZ(), radius, false)
}

/**
 * 
 * @param {Internal.GoalSelector} goalSelector 
 * @param {String} goalName 
 */
function RemoveCustomGoalByName(goalSelector, goalName) {
    goalSelector.getAvailableGoals().forEach(wrappedGoal => {
        let pGoal = wrappedGoal.goal
        if (!(pGoal instanceof $CustomGoal)) return
        if (pGoal.name != goalName) return
        goalSelector.removeGoal(pGoal)
    })
}

/**
 * 校验椅子是否被坐
 * @param {Internal.BlockContainerJS} chairBlock 
 * @param {Internal.Level} level 
 * @returns {boolean}
 */
function IsAnyOnChair(chairBlock) {
    const chairPos = chairBlock.pos
    let seats = chairBlock.level.getEntitiesOfClass($Seat, new AABB.of(chairPos.getX(), chairPos.getY(), chairPos.getZ(), chairPos.getX() + 1.0, chairPos.getY() + 1.0, chairPos.getZ() + 1.0))
    return !seats.isEmpty()
}

/**
 * 
 * @param {Internal.Level} level 
 * @param {Internal.PathfinderMob} mob 
 * @param {BlockPos} pos 
 * @param {number} seatHeight
 * @param {Internal.Direction} direction
 * @param {boolean} lock
 * @returns {boolean}
 */
function SitOnChair(mob, pos, seatHeight, direction, lock) {
    let level = mob.level
    if (level.getEntitiesOfClass($Seat, new AABB.of(pos.getX(), pos.getY(), pos.getZ(), pos.getX() + 1.0, pos.getY() + 1.0, pos.getZ() + 1.0)).isEmpty()) {
        // let seatYaw = direction.getYaw()
        let seat = new $Seat(level)
        seat.setPos(Vec3d.atBottomCenterOf(pos).add(0, seatHeight, 0))
        // seat.setRotation(seatYaw, 0)
        // $Seat.LOCK_YAW.setValue(seat, lock)
        level.addFreshEntity(seat)
        return mob.startRiding(seat)
    }
    return false
}

/**
 * @param {Internal.LivingEntity} entity
 * @param {Internal.Level} level
 */
function SpitTowardFacing(entity, level) {
    let entityFacing = Vec3dNormalize(entity.getForward())
    let llamaSpitEntity = new $LlamaSpit($EntityType.LLAMA_SPIT, level)
    llamaSpitEntity.setOwner(entity)
    llamaSpitEntity.setPos(entity.getX() - (entity.getBbWidth() + 1.0) * 0.5 * JavaMath.sin(entity.yBodyRot * JavaMath.PI / 180), entity.getEyeY() - 0.1, entity.getZ() + (entity.getBbWidth() + 1.0) * 0.5 * JavaMath.cos(entity.yBodyRot * (JavaMath.PI / 180)))
    llamaSpitEntity.setMotion(entityFacing.x() * 2, entityFacing.y() * 2, entityFacing.z() * 2)
    level.addFreshEntity(llamaSpitEntity)
}

/**
 * @param {Internal.LivingEntity} entity
 * @param {Internal.Level} level
 */
function SummonFireballTowardFacing(entity, level) {
    let entityFacing = Vec3dNormalize(entity.getForward())
    let fireballEntity = new $LargeFireball(level, entity, entityFacing.x(), entityFacing.y(), entityFacing.z(), 1)
    fireballEntity.setPosition(fireballEntity.getX(), entity.getY(0.5) + 0.3, fireballEntity.getZ())
    level.addFreshEntity(fireballEntity)
}



/**
 * @param {Internal.LivingEntity} entity
 * @param {Internal.Level} level
 */
function SummonSnowballTowardFacing(entity, level) {
    let entityFacing = Vec3dNormalize(entity.getForward())
    let snowBallEntity = new $Snowball(level, entity)
    snowBallEntity.setOwner(entity)
    snowBallEntity.setPos(entity.getX() - (entity.getBbWidth() + 1.0) * 0.5 * JavaMath.sin(entity.yBodyRot * JavaMath.PI / 180), entity.getEyeY() - 0.1, entity.getZ() + (entity.getBbWidth() + 1.0) * 0.5 * JavaMath.cos(entity.yBodyRot * (JavaMath.PI / 180)))
    snowBallEntity.setMotion(entityFacing.x() * 2, entityFacing.y() * 2, entityFacing.z() * 2)
    level.addFreshEntity(snowBallEntity)
}

/**
 * 判断生物是否能看到指定方块位置
 * @param {Internal.PathfinderMob} mob 生物
 * @param {Internal.BlockPos} targetPos 目标方块位置
 * @returns {boolean} 是否可见
 */

/**
 * 
 * @param {Internal.Level} level 
 * @param {Internal.Entity} entity 
 * @returns 
 */
function IsSunBurn(level, entity) {
    return level.isDay() && entity.getLightLevelDependentMagicValue() && !entity.isInWaterOrBubble() && !entity.isInPowderSnow && !entity.wasInPowderSnow && level.canSeeSky(entity.blockPosition())
}

// ===== ftb_chunk.js =====
/**
 * 创建一个坐标点在FTBChunk
 * @param {Internal.ServerPlayer} player
 * @param {BlockPos} blockPos
 * @param {string} name
 * @param {number} color
 * @returns {void}
 */
function CreateWaypoint(player, blockPos, name, color) {
    player.sendData('ftb_chunk_waypoint', { 'x': blockPos.x, 'y': blockPos.y, 'z': blockPos.z, 'name': name, 'color': color })
}

// ===== iss.js =====
/**
 * 更新客户端的法术数据，不存在在tick策略中
 * @param {OrganEventCustomData} customData
 * @param {Internal.ServerPlayer} entity
 */
function UpdateClientISSSpellDataEvent(customData, entity) {
    if (!customData.needRefreshSpellSelection) return
    if (!entity || !entity.isPlayer()) return
    if (!entity.connection) return
    const chestCavity = entity.chestCavityInstance
    const entityDataMap = chestCavity.customDataMap
    if (!entityDataMap || !entityDataMap.containsKey('organ_spell_selection')) return
    /**@type {Map<string, SpellData>} */
    const organSpellSelection = entityDataMap.get('organ_spell_selection')
    if (entityDataMap.containsKey('old_organ_spell_selection')) {
        /** @type {Map<string, SpellData>} */
        let oldOrganSpellSelection = entityDataMap.get('old_organ_spell_selection')
        if (oldOrganSpellSelection.size == organSpellSelection.size) {
            let isSame = true
            organSpellSelection.forEach(/** @param {SpellData} spellData */ spellData => {
                let spellId = spellData.getSpell().getSpellId()
                spellId = String(spellId)
                if (!oldOrganSpellSelection.has(spellId) || oldOrganSpellSelection.get(spellId).getLevel() != spellData.getLevel()) {
                    isSame = false
                    return
                }
            })
            if (isSame) return
        }
    }
    entityDataMap.put('old_organ_spell_selection', new Map(organSpellSelection))
    let syncSpellData = new $CompoundTag()
    let spellNBTList = new $ListTag()
    organSpellSelection.forEach(/** @param {SpellData} spellData */ spellData => {
        let spellNBT = new $CompoundTag()
        spellNBT.putString('spellId', spellData.getSpell().getSpellId())
        spellNBT.putInt('level', spellData.getLevel())
        spellNBTList.add(spellNBT)
    })
    syncSpellData.put('spellList', spellNBTList)
    syncSpellData.putString('mode', 'refresh')
    entity.sendData('iss_spell_selection_data', syncSpellData)
}

/**
 * 强制初始化客户端的法术数据，用于补偿客户端数据丢失的情况
 * @param {Internal.ServerPlayer} entity
 */
function InitClientISSSpellData(entity) {
    const chestCavity = entity.chestCavityInstance
    const entityDataMap = chestCavity.customDataMap
    let syncSpellData = new $CompoundTag()
    let spellNBTList = new $ListTag()
    if (!entityDataMap || !entityDataMap.containsKey('organ_spell_selection')) {
        syncSpellData.put('spellList', spellNBTList)
        syncSpellData.putString('mode', 'refresh')
        entity.sendData('iss_spell_selection_data', syncSpellData)
        return
    }
    /**@type {Map<string, SpellData>} */
    const organSpellSelection = entityDataMap.get('organ_spell_selection')
    entityDataMap.put('old_organ_spell_selection', new Map(organSpellSelection))
    organSpellSelection.forEach(/** @param {SpellData} spellData */ spellData => {
        let spellNBT = new $CompoundTag()
        spellNBT.putString('spellId', spellData.getSpell().getSpellId())
        spellNBT.putInt('level', spellData.getLevel())
        spellNBTList.add(spellNBT)
    })
    syncSpellData.put('spellList', spellNBTList)
    syncSpellData.putString('mode', 'refresh')
    entity.sendData('iss_spell_selection_data', syncSpellData)
}

// /**
 // * @param {OrganEventCustomData} customData
 // * @param {Internal.ChestCavityInstance} chestCavity 
 // * @param {string} spellId 
 // * @param {number} spellLvl 
 // */
// function AddSpellSelection(customData, chestCavity, spellId, spellLvl) {
    // const entityDataMap = chestCavity.customDataMap
    // /**@type {Map<string, SpellData>} */
    // let spellSlectionMap = entityDataMap.getOrDefault('organ_spell_selection', new Map())
    // spellId = String(spellId)
    // if (spellSlectionMap.has(spellId)) {
        // if (spellSlectionMap.get(spellId).getLevel() >= spellLvl) return
        // spellSlectionMap.set(spellId, new SpellData(spellId, spellLvl))
    // } else {
        // spellSlectionMap.set(spellId, new SpellData(spellId, spellLvl))
    // }
    // entityDataMap.put('organ_spell_selection', spellSlectionMap)
    // customData.needRefreshSpellSelection = true
// }

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.ChestCavityInstance} chestCavity 
 * @param {string} spellId 
 * @param {number} spellLvl 
 */

// /**
 // * @param {OrganEventCustomData} customData
 // * @param {Internal.ChestCavityInstance} chestCavity 
 // * @param {string} spellId 
 // * @param {number} spellLvl 
 // */
// function RemoveSpellSelectionBySpellId(customData, chestCavity, spellId) {
    // const entityDataMap = chestCavity.customDataMap
    // /**@type {Map<string, SpellData>} */
    // let spellSlectionMap = entityDataMap.getOrDefault('organ_spell_selection', new Map())
    // spellId = String(spellId)
    // if (spellSlectionMap.has(spellId)) {
        // spellSlectionMap.delete(spellId)
        // entityDataMap.put('organ_spell_selection', spellSlectionMap)
        // customData.needRefreshSpellSelection = true
    // }
// }



// /**
 // * @param {Internal.SpellSelectionManager$SpellSelectionEvent} event 
 // */
// function ApplyPlayerSpellSelection(event) {
    // const player = event.entity
    // const chestCavity = player.chestCavityInstance
    // const customDataMap = chestCavity.customDataMap
    // if (!customDataMap || !customDataMap.containsKey('organ_spell_selection')) return
    // /**@type {Map<string, SpellData>} */
    // const organSpellSelection = customDataMap.get('organ_spell_selection')
    // let index = 0
    // organSpellSelection.forEach(/** @param {SpellData} spellData */ spellData => {
        // event.addSelectionOption(spellData, 'chestcavity', index)
        // index++
    // })
// }

// ===== item.js =====
/**
 * 
 * @param {Internal.CompoundTag} data 
 */


/**
 * 
 * @param {ResourceLocation} lootId 
 * @returns {Internal.LootTable}
 */


/**
 * 
 * @param {Internal.Level} level 
 * @param {BlockPos} blockPos 
 * @param {Internal.ItemStack[]} lootList 
 */
function SpawnLootAtLocation(level, blockPos, lootList) {
    /**@type {Internal.ItemStack[][]} */
    let itemChunks = SliceChunkArray(lootList, 3)
    let tickCounter = 5
    itemChunks.forEach(itemChunk => {
        level.server.scheduleInTicks(tickCounter, callback => {
            itemChunk.forEach(item => {
                $Containers.dropItemStack(level, blockPos.x, blockPos.y, blockPos.z, item.copy())
            })
        })
        tickCounter = tickCounter + 10
    })
}


/**
 * 
 * @param {Internal.ItemStack} item
 */

/**
 * 
 * @param {Internal.ItemStack} sourceJarItem 
 * @param {number} count 
 * @returns 
 */

/**
 * 
 * @param {Internal.ItemStack} sourceJarItem 
 * @param {number} count 
 * @returns {boolean}
 */

/**
 * 
 * @param {Internal.ItemStack[]} itemList 
 * @param {Internal.ItemStack} item 
 */

/**
 * 
 * @param {Internal.ItemStack} stack 
 * @returns {Internal.FluidHandlerItemStack}
 */
function GetItemFluidHandler(stack) {
    let item = stack.getItem()
    if (item instanceof $FueledToolItem) {
        return item.getFluidHandler(stack)
    }
}

/**
 * 
 * @param {Internal.ItemStack} stack 
 * @returns {number}
 */

/**
 * @param {Internal.LivingEntity} entity 
 * @returns {Internal.ItemStack}
 */
/**
 * @param {string} playerName 
 * @returns {Internal.ItemStack}
 */
/**
 * 
 * @param {Player} player
 * @param {string} curiosId 
 * @returns 
 */

// ===== level.js =====
/**
 * @param {number} num 
 * @returns
 */
/**
 * @param {number} num 
 * @returns 
 */




/**
 * 获取chunkPos对应的所有结构资源键
 * @param {Internal.ServerLevel} level 
 * @param {Internal.ChunkPos} chunkPos 
 * @returns {Internal.ResourceKey[]}
 */

/**
 * 获取某维度的某坐标对应的Chunk信息
 * @param {Internal.Level} level
 * @param {BlockPos} pos
 * @returns {Internal.LevelChunk}
 */
function GetChunkAccess(level, pos) {
    let chunkAccess = level.getChunkAt(pos)
    return chunkAccess
}



/**
 * @param {Internal.Level} level 
 * @param {Object<string, Internal.ChunkAccess>} chunkMap 
 * @param {BlockPos} pos 
 */


/**
 * 在某区块设定生态群系
 * @param {Internal.ServerLevel} level 
 * @param {Internal.ChunkAccess} chunkAccess
 * @param {string} biomeName
 */

/**
 * 检查目标位置是否在任何结构中
 * @param {Internal.ServerLevel} level 
 * @param {BlockPos} targetPos 
 * @returns {Internal.ResourceKey}
 */


/**
 * 
 * @param {Internal.Level} level 
 * @param {Vec3d} start 
 * @param {number} maxSteps 
 * @returns {number}
 */

// ===== lightman.js =====
// const CoinList = ['lightmanscurrency:coin_netherite', 'lightmanscurrency:coin_diamond', 'lightmanscurrency:coin_emerald', 'lightmanscurrency:coin_gold', 'lightmanscurrency:coin_iron', 'lightmanscurrency:coin_copper']
// $BankAPI.API.BankDepositFromServer()

// /**
 // * @param {number} value 
 // * @returns {Internal.MoneyValue}
 // */
// /**
 // * 
 // * @param {Internal.ItemStack} item 
 // * @returns {Internal.MoneyValue}
 // */

// /**
 // * 
 // * @param {Internal.ItemStack} coinList 
 // * @param {number} money 
 // * @return {Internal.ItemStack[]}
 // */
// function ConvertMoneyIntoCoinItemList(coinList, money) {
    // let i = 1
    // let itemList = []
    // coinList.forEach(coinItem => {
        // let price = Math.pow(10, coinList.length - i)
        // i++
        // if (money < price) return
        // let amount = Math.floor(money / price)
        // itemList.push(Item.of(coinItem, amount))
        // money = money - price * amount
    // })
    // return itemList
// }

// ===== nbt.js =====
/**
 * BlockPos列表转换为ListTag
 * @param {BlockPos[]} posList 
 * @returns {Internal.ListTag}
 */

/**
 * BlockPos转换为Tag
 * @param {BlockPos} pos
 * @returns {Internal.CompoundTag}
 */

/**
 * ListTag转换为BlockPos
 * @param {Internal.ListTag} nbtList 
 * @returns {BlockPos[]}
 */

/**
 * Tag转换为BlockPos
 * @param {Internal.CompoundTag} nbt
 * @returns {BlockPos}
 */


/**
 * 转换ItemStack为NBT
 * @param {Internal.ItemStack} item 
 * @returns 
 */
function ConverItemStack2NBT(item) {
    let nbt = new $CompoundTag()
    nbt.putString('id', item.id)
    nbt.putInt('count', item.count)
    if (item.hasNBT()) {
        nbt.put('nbt', item.nbt)
    }
    return nbt
}


/**
 * 转换ItemStackList为ListTag
 * @param {Internal.ItemStack[]} items 
 * @returns {Internal.ListTag}
 */


/**
 * 转换ListTag为ItemStackList
 * @param {Internal.ListTag} nbtList 
 * @returns {Internal.ItemStack[]}
 */

// ===== organ.js =====
/**
 * 
 * @param {Internal.LivingEntity} entity 
 * @returns {Internal.ChestCavityInventory}
 */

/**
 * 
 * @param {Internal.ChestCavityInstance} cc 
 * @param {Number} index 
 */

function GetCustomDataOrDefault(customData, key, defaultValue) {
    if (!customData[key]) {
        customData[key] = defaultValue
    }
    return customData[key]
}

function SetCustomData(customData, key, value) {
    customData[key] = value
}

/**
 * 
 * @param {Internal.ChestCavityInstance} cc 
 * @param {*} key 
 * @param {*} value 
 */
function SetCustomDataMap(cc, key, value) {
    cc.customDataMap.put(key, value)
}

/**
 * 
 * @param {Internal.ChestCavityInstance} cc 
 * @param {*} key 
 * @param {*} defaultValue 
 */
function GetCustomDataMap(cc, key, defaultValue) {
    return cc.customDataMap.getOrDefault(key, defaultValue)
}

/**
 * 
 * @param {Internal.ChestCavityInstance} cc 
 * @param {*} key 
 */
function RemoveCustomDataMap(cc, key) {
    cc.customDataMap.remove(key)
}

/**
 * 
 * @param {Internal.LivingEntity} target 
 * @param {number} damage 
 */
function SetPutridToxinsDamage(target, damage) {
    target.getPersistentData().putFloat('putridToxinsDamage', damage)
}

/**
 * 
 * @param {Internal.LivingEntity} target 
 * @returns {number}
 */
function GetPutridToxinsDamage(target) {
    return target.getPersistentData().contains('putridToxinsDamage') ? target.getPersistentData().getFloat('putridToxinsDamage') : 0
}



/**
 * 
 * @param {Internal.LivingEntity} target 
 * @param {Internal.UUID} uuid
 */
function SetVitaToxinsSource(target, uuid) {
    target.getPersistentData().putUUID('vitaToxinsSource', uuid)
}

/**
 * 
 * @param {Internal.LivingEntity} target 
 * @return {Internal.UUID}
 */

/**
 * 
 * @param {Internal.LivingEntity} target 
 * @param {string} type
 */
function SetVitaToxinsType(target, type) {
    target.getPersistentData().putString('vitaToxinsType', type)
}

/**
 *
 * @param {Internal.LivingEntity} target
 * @param {number} coe
 */
function SetVitaToxinsCoe(target, coe) {
    target.getPersistentData().putFloat('vitaToxinsCoe', coe)
}


/**
 * 
 * @param {Internal.Level} level 
 * @param {Internal.ServerPlayer} player 
 */
function CommonDingNotice(level, player) {
    level.playSound(null, player.getX(), player.getY(), player.getZ(), 'entity.experience_orb.pickup', player.getSoundSource(), 3, 1)
}

/**
 * 
 * @param {Internal.ServerPlayer} player 
 * @param {Internal.ItemStack} item 
 * @returns {Boolean}
 */
function OrganItemCoolDown(player, item) {
    const cooldowns = player.getCooldowns()
    if (cooldowns.isOnCooldown(item)) {
        let cooldownInstance = cooldowns.cooldowns.getOrDefault(item.getItem(), null)
        if (!cooldownInstance) return false
        let endTime = cooldownInstance.endTime
        let leftTime = endTime - cooldowns.tickCount
        player.setStatusMessage(Text.translatable('status_msg.kubejs.key_active.cooldown', Text.gold(item.getHoverName()), leftTime / 20))
        return true
    }
    return false
}


/**
 * 
 * @param {Internal.ServerPlayer} player 
 * @param {Internal.ItemStack} item 
 * @returns {Boolean}
 */
function OrganItemCoolDownSlience(player, item) {
    const cooldowns = player.getCooldowns()
    if (cooldowns.isOnCooldown(item)) {
        return true
    }
    return false
}



/**
 * 
 * @param {Internal.InventoryTypeData} invTypeData 
 * @param {number} organIndex 
 * @param {number[][]} directionSet `
 * @returns {Internal.ChestCavitySlotDefinition[]}
 */
function GetDirectionRelativeSlotByParam(invTypeData, organIndex, directionSet) {
    let curRelativePosition = invTypeData.getSlotDefinition(organIndex).getRelativePosition()
    let relativeSlots = []
    for (let [offsetX, offsetY] of directionSet) {
        let slotDefinition = invTypeData.getRelativeSlotDefinition(curRelativePosition.getX() + offsetX, curRelativePosition.getY() + offsetY)
        if (!slotDefinition) continue
        relativeSlots.push(slotDefinition)
    }
    return relativeSlots
}

// ===== painter.js =====
/**
 * 
 * @param {Internal.ItemStack} item 
 */
function OragnEffectModel(item) {
    this.item = item
    this.customText = ''
    this.visible = true
    this.overlay = true
    this.priority = 100
}

OragnEffectModel.prototype = {
    setItem(item) {
        this.item = item
        return this
    },
    setCustomText(text) {
        this.customText = text
        return this
    },
    setVisible(visible) {
        this.visible = visible
        return this
    },
    setOverlay(overlay) {
        this.overlay = overlay
        return this
    },
    setPriority(priority) {
        this.priority = priority
        return this
    }
}

/**
 * 
 * @param {Internal.ChestCavityInstance} chestCavity 
 */
function MakeOrganEffectChanged(chestCavity) {
    SetCustomDataMap(chestCavity, 'organEffectChanged', true)
}

/**
 * 
 * @param {Internal.ChestCavityInstance} chestCavity 
 * @param {OragnEffectModel} organEffect 
 */
function SetOrganEffect(chestCavity, organEffect) {
    if (!chestCavity.customDataMap.containsKey('organEffectMap')) {
        SetCustomDataMap(chestCavity, 'organEffectMap', new Map()) 
    }
    let organEffectMap = chestCavity.customDataMap.get('organEffectMap')
    organEffectMap.set(String(organEffect.item.id), organEffect)
    MakeOrganEffectChanged(chestCavity)
}

/**
 * 
 * @param {Internal.ChestCavityInstance} chestCavity 
 * @param {string} itemId 
 */
function RemoveOrganEffect(chestCavity, itemId) {
    if (!chestCavity.customDataMap.containsKey('organEffectMap')) {
        SetCustomDataMap(chestCavity, 'organEffectMap', new Map())
    }
    /**@type {Map<string, OragnEffectModel>} */
    let organEffectMap = chestCavity.customDataMap.get('organEffectMap')
    organEffectMap.delete(String(itemId))
    MakeOrganEffectChanged(chestCavity)
}

/**
 * 
 * @param {Internal.ChestCavityInstance} chestCavity 
 * @param {string} itemId 
 * @returns {OragnEffectModel}
 */

// ===== player.js =====
// /**
//  * 
//  * @param {Internal.ServerPlayer} player 
//  */
// function IsUnderComabt(player) {
//     if (!player.nbt) return false
//     if (!player.nbt.contains('ForgeData')) return false
//     let forgeData = player.nbt.get('ForgeData')
//     if (!forgeData.contains('PlayerPersisted')) return false
//     let playerPersisted = forgeData.get('PlayerPersisted')
//     if (!playerPersisted.contains('out_of_combat')) return false
//     /**@type {Internal.CompoundTag} */
//     let outOfCombat = playerPersisted.get('out_of_combat')
//     return outOfCombat.getInt('outOfCombatTime') == 0
// }

/**
 * 不结算持续的火焰伤害以及不显示火焰渲染
 * @param {Internal.ServerPlayer} player 
 */

/**
 * 是否为完全充能的攻击
 * @param {Internal.ServerPlayer} player 
 */

/**
 * 
 * @param {Internal.ServerPlayer} player 
 * @returns {number}
 */
function RecoverPlayerHungerAndSaturation(player, amount) {
    let foodData = player.getFoodData()
    let needFood = 20 - foodData.getFoodLevel()
    if (needFood > amount) {
        foodData.setFoodLevel(Math.floor(foodData.getFoodLevel() + amount))
        return 0
    }
    amount = amount - needFood
    foodData.setFoodLevel(20)
    let needSaturation = 20 - foodData.getSaturationLevel()
    if (needSaturation > amount) {
        foodData.setSaturation(Math.floor(foodData.getSaturationLevel() + amount))
        return 0
    }
    foodData.setSaturation(20)
    return amount - needSaturation
}

/**
 * 
 * @param {Internal.ServerPlayer} player 
 * @param {Internal.ItemStack[]} itemList 
 */

// ===== server.js =====
/**
 * 
 * @param {Internal.MinecraftServer} server 
 * @param {number} state 0为未开始，1为开始，2为经历过
 */
function SetEternalWinterState(server, state) {
    server.persistentData.putInt('isEternalWinter', state)
    // if (state == 1) {
    //     // [maa禁用] MAAUtils.setEternalWinterEnabled(server, true)
    //     AStages.addStageToServer('ftb_under_eternal_winter', server)
    // } else if (state == 2) {
    //     // [maa禁用] MAAUtils.setEternalWinterEnabled(server, false)
    //     AStages.removeStageFromServer('ftb_under_eternal_winter', server)
    //     AStages.addStageToServer('ftb_after_eternal_winter', server)
    // } else {
    //     // [maa禁用] MAAUtils.setEternalWinterEnabled(server, false)
    //     AStages.removeStageFromServer('ftb_under_eternal_winter', server)
    //     AStages.removeStageFromServer('ftb_after_eternal_winter', server)
    // }
}

/**
 * 
 * @param {Internal.MinecraftServer} server 
 */

/**
 * @param {Internal.MinecraftServer} server 
 * @param {number} num 
 */

/**
 * @param {ResourceLocation} id
 * @param {Internal.Minecraft} server 
 * @returns 
 */

/**
 * @param {ResourceLocation} id
 * @returns 
 */
function GetLeaderBoardById(id) {
    return LeaderboardRegistry.LEADERBOARDS.containsKey(id) ? LeaderboardRegistry.LEADERBOARDS.get(id) : VanillaStatsRegistry.VANILLA_STATS.get(id)
}

/**
 * @param {ResourceLocation} id
 * @param {Internal.Minecraft} server 
 * @returns 
 */

// ===== wardrobe.js =====
/**
 * 判断是否在对应槽位已经有皮肤了
 * @param {Internal.Entity} entity 
 * @param {string} type 
 * @returns {boolean}
 */
function HadSetAnyWardrobeSkin(entity, type) {
    let wardrobe = entity.getWardrobe()
    for (let i = 0; i < wardrobe.getUnlockedSize(type); i++) {
        let curItem = wardrobe.getItem(type, i)
        if (curItem && !curItem.isEmpty()) return true
    }
    return false
}

/**
 * 
 * @param {Internal.Entity} entity 
 * @param {string} type 
 * @param {string} skin 
 */
function OrganSkinAdd(entity, type, skin) {
    // if (!entity.isPlayer()) return
    // if (!HadSetAnyWardrobeSkin(entity, type)) {
    //     AddSkinToSlot(entity, type, skin)
    // }
}

/**
 * 
 * @param {Internal.Entity} entity 
 * @param {string} type 
 * @param {string} skin 
 */
function OrganSkinRemove(entity, type, skin) {
    if (!entity.isPlayer()) return
    if (HadSetAnyWardrobeSkin(entity, type)) {
        RemoveSkinFromSlot(entity, type, skin)
    }
}

// /**
//  * 向某个生物的某个位置添加皮肤
//  * @param {Internal.Entity} entity 
//  * @param {string} type 
//  * @param {string} skin 
//  * @returns {boolean}
//  */
// function AddSkinToSlot(entity, type, skin) {
//     let wardrobe = entity.getWardrobe()
//     for (let i = 0; i < wardrobe.getUnlockedSize(type); i++) {
//         let curItem = wardrobe.getItem(type, i)
//         if (!curItem || curItem.isEmpty()) {
//             let skinItem = Item.of('armourers_workshop:skin')
//             wardrobe.loadSkin(skin).addTo(skinItem)
//             wardrobe.setItem(type, i, skinItem)
//             wardrobe.broadcast()
//             return true
//         }
//     }
//     return false
// }

/**
 * 从某个生物的某个位置移除皮肤
 * @param {Internal.Entity} entity 
 * @param {string} type 
 * @param {string} skin 
 * @returns 
 */
function RemoveSkinFromSlot(entity, type, skin) {
    let wardrobe = entity.getWardrobe()
    for (let i = 0; i < wardrobe.getUnlockedSize(type); i++) {
        let curItem = wardrobe.getItem(type, i)
        if (curItem && !curItem.isEmpty()) {
            let itemSkin = wardrobe.loadSkinByItem(curItem)
            if (itemSkin && itemSkin.getIdentifier() == skin) {
                wardrobe.setItem(type, i, Item.empty)
                wardrobe.broadcast()
                return true
            }
        }
    }
    return false
}

// ===== data_queue.js =====
/**
 * 此方法用于在某些场景下，服务端事件优先于客户端加载执行，导致entity.sendData在connection false的情况下被调用
 * 通过Player loggin方法等待到对应UUID的玩家进入后，触发队列发送消息统一处理
 * 此类场景通常出现在：玩家胸腔通过from tag初始化时、玩家实体生成时
 */
/** @type {Map<string,{channel:string,data:Internal.CompoundTag}[]>} */
const S2CDataQueue = new Map()

/**
 * 
 * @param {Internal.ServerPlayer} player 
 * @param {string} channel 
 */
function EnqueueSendData(player, channel, data) {
    if (player.connection) {
        player.sendData(channel, data)
    } else {
        let playerUuid = String(player.uuid.toString())
        let queue = S2CDataQueue.get(playerUuid)
        if (!queue) {
            queue = []
            S2CDataQueue.set(playerUuid, queue)
        }
        queue.push({ 'channel': channel, 'data': data })
    }
}

/**
 * 
 * @param {Internal.ServerPlayer} player 
 */
function SyncQueuedData(player) {
    let playerUuid = String(player.uuid.toString())
    let queue = S2CDataQueue.get(playerUuid)
    if (queue) {
        queue.forEach(data => {
            player.sendData(data.channel, data.data)
        })
        S2CDataQueue.delete(playerUuid)
    }
}

// ===== bundle.js =====
/**
 * 
 * @param {Internal.ItemStack} stack 
 * @returns {Optional<Internal.ItemStack>}
 */

/**
 * 
 * @param {Internal.ItemStack} stack 
 * @param {number} index 
 * @returns 
 */
function RemoveBundleItem(stack, index, count) {
    let nbt = stack.getNbt()
    if (nbt == null || !nbt.contains('Items')) return

    let items = nbt.getList('Items', TAG_COMPOUND)
    if (index < 0 || index >= items.size()) return

    let pStack = $ItemStack.of(items.getCompound(index))
    pStack.shrink(count)

    if (pStack.isEmpty() || pStack.getCount() == 0) {
        items.remove(index)
    } else {
        items.set(index, pStack.save(new $CompoundTag()))
    }

    if (items.isEmpty()) {
        pStack.removeTagKey('Items')
    }
}
/**
 * 
 * @param {Internal.Entity} entity 
 */

/**
 * 
 * @param {Internal.Entity} entity 
 */


/**
 * 
 * @param {Internal.ItemStack} stack 
 * @returns {Internal.ItemStack[]}
 */
function GetBundleContents(stack) {
    let nbt = stack.getNbt()
    if (nbt == null) return []
    let listTag = nbt.getList('Items', TAG_COMPOUND)
    return listTag.stream().map(
        (pTag) => $ItemStack.of(pTag)
    ).toList()
}
/**
 * 
 * @param {Internal.ItemStack[]} stacks
 * @returns {Internal.ItemStack[]}
 */

/**
 * 
 * @param {Internal.ItemStack} stack 
 * @param {function(Internal.ItemStack): number} weightFunc 
 * @returns {number}
 */
function GetBundleCountentWeight(stack, weightFunc) {
    let stackList = GetBundleContents(stack)
    let weight = 0
    stackList.forEach(stack => weight += weightFunc(stack) * stack.getCount())
    return weight
}

/**
 * 
 * @param {Internal.ItemStack} stack 
 * @returns {number}
 */

/**
 * 
 * @param {Internal.ItemStack} bundleStack 
 * @param {Internal.ItemStack} insertedStack 
 * @param {number} maxWeight 
 * @param {function(Internal.ItemStack): number} weightFunc 
 * @returns {number}
 */
function AddItemIntoBundle(bundleStack, insertedStack, maxWeight, weightFunc) {
    if (insertedStack.isEmpty() || !insertedStack.getItem().canFitInsideContainerItems()) return 0

    let nbt = bundleStack.getOrCreateTag()
    if (!nbt.contains('Items')) {
        nbt.put('Items', new $ListTag())
    }
    let currentWeight = GetBundleCountentWeight(bundleStack, weightFunc)
    let insertedWeight = weightFunc(insertedStack)
    let insertCount = Math.min(insertedStack.getCount(), (maxWeight - currentWeight) / insertedWeight)

    if (insertCount == 0) return 0

    let items = nbt.getList('Items', TAG_COMPOUND)
    let remainder = insertedStack.copyWithCount(insertCount)
    let matchTagOpt = items.stream()
        .filter(tag => $ItemStack.isSameItemSameTags($ItemStack.of(tag), remainder))
        .findFirst()
    if (matchTagOpt.isPresent()) {
        let matchTag = matchTagOpt.get()
        let matchItem = $ItemStack.of(matchTag)
        if (matchItem.getCount() >= matchItem.getMaxStackSize()) {
            items.add(0, remainder.save(new CompoundTag()))
        } else {
            matchItem.grow(remainder.getCount())
            matchItem.save(matchTag)
            items.remove(matchTag)
            items.add(0, matchTag)
        }
    } else {
        items.add(0, remainder.save(new $CompoundTag()))
    }
    return insertCount
}

// ===== block_display.js =====
const NET_HIGHLIGHT_POS = 'highlight_pos'
/**
 * 展示方块的边框线
 * @param {Internal.ServerPlayer} player 
 * @param {OutlineRenderModel[]} outlineList 
 */
function HighlightBlockPos(player, outlineList) {
    let netNbt = new $CompoundTag()
    netNbt.put('highlightList', ConvertOutlineRenderList2Nbt(outlineList))
    netNbt.putInt('mode', 0)
    player.sendData(NET_HIGHLIGHT_POS, netNbt)
}

/**
 * 清除当前所有在显示的边框线
 * @param {Internal.ServerPlayer} player 
 */

/**
 * 删除某个位置的边框线展示
 * @param {Internal.ServerPlayer} player 
 * @param {OutlineRenderModel[]} outlineList
 */

// [restored] growth_vat 迁移所需
function RandomGetN(arr, count) {
    let arrCopy = arr.slice()
    if (count >= arrCopy.length) {
        let concatTimes = count / arrCopy.length
        for (let i = 0; i < concatTimes; i++) {
            arrCopy.concat(arr)
        }
    }
    Shuffle(arrCopy)
    return arrCopy.slice(0, count)
}
