// priority: 3000
// [merged] 合并自: entity.js, level.js, organ.js, player.js, bundle.js, common.js

// ===== entity.js =====
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
* @param {BlockPos} pos
* @param {Number} radius
* @param {function(Internal.Level, Internal.PathfinderMob):boolean} entityTester
* @returns {Array<Internal.LivingEntity>}
*/

/**
 * 生成一个物品实体
 * @param {Internal.Level} level 
 * @param {BlockPos} pos 
 * @param {Internal.ItemStack} itemStack 
 * @param {Vec3d} movement
 */

// ===== level.js =====
/**
 * 
 * @param {Internal.Level} level 
 * @param {Vec3d} start 
 * @param {number} maxSteps 
 * @returns {number}
 */
function GetGroundLevel(level, start, maxSteps) {
    if (!level.getBlockState(BlockPos.containing(start)).isAir()) {
        for (let i = 0; i < maxSteps; i++) {
            start = start.add(0, 1, 0)
            if (level.getBlockState(BlockPos.containing(start)).isAir()) {
                break
            }
        }
    }
    let lower = level.clip(new $ClipContext(start, start.add(0, maxSteps * -2, 0), $ClipContextBlock.COLLIDER, $ClipContextFluid.NONE, null)).getLocation()
    return lower.y()
}

// ===== organ.js =====
/**
 * 
 * @param {Internal.LivingEntity} target 
 * @param {number} damage 
 */

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

/**
 * 
 * @param {Internal.LivingEntity} target 
 * @return {Internal.UUID}
 */
function GetVitaToxinsSource(target) {
    return target.getPersistentData().contains('vitaToxinsSource') ? target.getPersistentData().getUUID('vitaToxinsSource') : null
}

/**
 * 
 * @param {Internal.LivingEntity} target 
 * @param {string} type
 */

/**
 * 
 * @param {Internal.LivingEntity} target 
 * @returns 
 */
function GetVitaToxinsType(target) {
    return target.getPersistentData().contains('vitaToxinsType') ? target.getPersistentData().getString('vitaToxinsType') : 'attack_damage'
}

/**
 *
 * @param {Internal.LivingEntity} target
 * @param {number} coe
 */

/**
 * 
 * @param {Internal.LivingEntity} target 
 * @returns 
 */
function GetVitaToxinsCoe(target) {
    return target.getPersistentData().contains('vitaToxinsCoe') ? target.getPersistentData().getFloat('vitaToxinsCoe') : 1
}


/**
 * 
 * @param {Internal.ChestCavityInstance} cc 
 * @param {*} key 
 * @param {*} value 
 */

/**
 * 
 * @param {Internal.ChestCavityInstance} cc 
 * @param {*} key 
 * @param {*} defaultValue 
 */

/**
 * 
 * @param {Internal.ChestCavityInstance} cc 
 * @param {*} key 
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

// ===== bundle.js =====
/**
 * 
 * @param {Internal.ItemStack} stack 
 * @returns {Optional<Internal.ItemStack>}
 */
function RemoveBundleOneStack(stack) {
    let nbt = stack.getNbt()
    if (nbt == null || !nbt.contains('Items')) return Optional.empty()

    let items = nbt.getList('Items', TAG_COMPOUND)
    if (items.isEmpty()) return Optional.empty()

    let pStack = $ItemStack.of(items.getCompound(0))
    items.remove(0)
    if (items.isEmpty()) {
        pStack.removeTagKey('Items')
    }
    return Optional.of(pStack)
}

/**
 * 
 * @param {Internal.ItemStack} stack 
 * @param {number} index 
 * @returns 
 */
/**
 * 
 * @param {Internal.Entity} entity 
 */
function PlayBundleRemoveSound(entity) {
    entity.playSound('item.bundle.remove_one', 0.8, 0.8 + entity.level.getRandom().nextFloat() * 0.4)
}

/**
 * 
 * @param {Internal.Entity} entity 
 */
function PlayerBundleInsertSound(entity) {
    entity.playSound('item.bundle.insert', 0.8, 0.8 + entity.level.getRandom().nextFloat() * 0.4)
}


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
 * @param {Internal.ItemStack} stack 
 * @param {function(Internal.ItemStack): number} weightFunc 
 * @returns {number}
 */
function GetBundleCountentWeight(stack, weightFunc) {
    let stackList = GetBundleContents(stack)
    let weight = 0
    stackList.forEach(stack => weight += weightFunc(stack))
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

// ===== common.js =====
/**
 * 从数组中随机获取一个元素
 * 如果数组为空或未定义，则返回 null
 * @param {any[]} array 
 * @returns {any}
 */

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
 * 洗牌算法
 * @param {any[]} a 
 * @returns {any[]}
 */
function Shuffle(arr) {
    var length = arr.length,
        temp,
        random;
    while (0 != length) {
        random = Math.floor(Math.random() * length)
        length--;
        // swap
        temp = arr[length];
        arr[length] = arr[random];
        arr[random] = temp;
    }
    return arr;
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







/**
 * 
 * @param {number} num 
 * @returns {number}
 */


/**
 * @param {BlockPos} blockPos 
 * @returns {Vec3d}
 */

/**
 * 
 * @param {Internal.Vec3d} vec3d 
 * @returns {Internal.Vec3d}
 */
function Vec3dNormalize(vec3d) {
    let i = Math.sqrt(vec3d.x() * vec3d.x() + vec3d.y() * vec3d.y() + vec3d.z() * vec3d.z())
    return i < 1.0E-4 ? Vec3d.ZERO : new Vec3d(vec3d.x() / i, vec3d.y() / i, vec3d.z() / i)
}

