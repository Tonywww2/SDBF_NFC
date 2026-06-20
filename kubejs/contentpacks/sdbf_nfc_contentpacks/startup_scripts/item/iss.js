// // priority: 500
// // [merged] advance_devour.js, advance_dragon_breath.js, advance_fang_strike.js, advance_stomp.js, advance_wither_skull.js, raise_overlord_undead.js

// // ===== advance_devour.js =====
// StartupEvents.registry('irons_spellbooks:spells', event => {
    // event.create('advance_devour')
        // .setCooldownSeconds(20)
        // .setBaseManaCost(50)
        // .setManaCostPerLevel(20)
        // .setBaseSpellPower(1)
        // .setSpellPowerPerLevel(1)
        // .setCastType('instant')
        // .setSchool('irons_spellbooks:blood')
        // .setMinRarity('legendary')
        // .setMaxLevel(1)
        // .checkPreCastConditions(ctx => {
            // return ISSUtils.preCastTargetHelper(ctx.level, ctx.entity, ctx.playerMagicData, ctx.spell, 9, 0.1)
        // })
        // .onCast(ctx => {
            // if (ctx.level.isClientSide()) return
            // const level = ctx.level
            // const entity = ctx.entity
            // const spell = ctx.spell
            // let targetCastData = ctx.playerMagicData.getAdditionalCastData()
            // if (!(targetCastData instanceof TargetEntityCastData)) return
            // let targetEntity = targetCastData.getTarget(level)
            // if (!targetEntity) return
            // let devourEntity = new $DevourJaw(level, entity, targetEntity)
            // let ccIns = entity.getChestCavityInstance()
            // let filtration = Math.max(ccIns.getOrganScore('chestcavity:filtration'), 1)
            // let damage = spell.getSpellPower(ctx.spellLevel, entity) * filtration
            // devourEntity.setPos(targetEntity.position())
            // devourEntity.setYHeadRot(entity.getYHeadRot())
            // devourEntity.setDamage(damage)
            // devourEntity.vigorLevel = damage * 0.25 - 1
            // level.addFreshEntity(devourEntity)
            // if (entity instanceof $Player) {
                // RecoverPlayerHungerAndSaturation(entity, filtration)
            // }
        // })
        // .getDamageSource(ctx => {
            // return $SpellDamageSource.source(ctx.projectile, ctx.attacker, ctx.spell).setLifestealPercent(0.2)
        // })
// })

// // ===== advance_dragon_breath.js =====
// StartupEvents.registry('irons_spellbooks:spells', event => {
    // event.create('advance_dragon_breath')
        // .setCastTime(100)
        // .setCooldownSeconds(10)
        // .setBaseManaCost(5)
        // .setManaCostPerLevel(1)
        // .setBaseSpellPower(1)
        // .setSpellPowerPerLevel(1)
        // .setCastType('continuous')
        // .setSchool('irons_spellbooks:ender')
        // .setMinRarity('legendary')
        // .setMaxLevel(1)
        // .onCast(ctx => {
            // if (ctx.level.isClientSide()) return
            // const level = ctx.level
            // const entity = ctx.entity
            // const magicData = ctx.playerMagicData
            // const castData = magicData.getAdditionalCastData()
            // const spell = ctx.spell
            // if (magicData.isCasting()
                // && magicData.getCastingSpell().getSpell().equals(ctx.spell)
                // && castData instanceof $EntityCastData
                // && castData.getCastingEntity() instanceof $AbstractConeProjectile) {
                // castData.getCastingEntity().setDealDamageActive()
            // } else {
                // EntityJSUtils.getEntityBuilder('kubejs:advance_dragon_breath')
                // /**@type {Internal.AbstractConeProjectile} */
                // let dragonBreathProjectile = level.createEntity('kubejs:advance_dragon_breath')
                // dragonBreathProjectile.setOwner(entity)
                // dragonBreathProjectile.setPos(entity.position().add(0, entity.getEyeHeight() * 0.7, 0))
                // dragonBreathProjectile.setDamage(Math.max(entity.chestCavityInstance.getOrganScore('kubejs:dragon_blood'), 1) * spell.getSpellPower(ctx.spellLevel, entity))
                // level.addFreshEntity(dragonBreathProjectile)
                // magicData.setAdditionalCastData(new $EntityCastData(dragonBreathProjectile))
            // }
        // })
// })


// StartupEvents.registry('entity_type', event => {
    // event.create('advance_dragon_breath', 'irons_spells_js:cone_projectile')
        // .spawnParticles(/**@param {Internal.AbstractConeProjectile} projectile*/(projectile) => {
            // const owner = projectile.getOwner()
            // const level = projectile.level
            // if (!level.isClientSide() || owner == null) return
            // let rotation = Vec3dNormalize(owner.getLookAngle())
            // let pos = owner.position().add(rotation.scale(1.6))
            // let x = pos.x()
            // let y = pos.y() + owner.getEyeHeight() * 0.9
            // let z = pos.z()

            // let offset = 0.15
            // let speed = Math.random() * 0.35 + 0.25
            // for (let i = 0; i < 12; i++) {
                // let ox = Math.random() * 2 * offset - offset
                // let oy = Math.random() * 2 * offset - offset
                // let oz = Math.random() * 2 * offset - offset
                // let angularness = 0.3
                // let randomVec = Vec3dNormalize(new Vec3d(Math.random() * 2 * angularness - angularness, Math.random() * 2 * angularness - angularness, Math.random() * 2 * angularness - angularness))
                // let result = Vec3dNormalize(rotation.scale(3).add(randomVec)).scale(speed)
                // level.addParticle($ParticleTypes.DRAGON_BREATH, x + ox, y + oy, z + oz, result.x(), result.y(), result.z())
            // }
        // })
        // .onConeHitEntity((ctx) => {
            // /**@type {Internal.ConeProjectileJS} */
            // const projectile = ctx.entity
            // const entityHitResult = ctx.entityHitResult
            // const entity = entityHitResult.getEntity()
            // const level = projectile.level
            // const owner = projectile.getOwner()
            // if ($ISSDamageSources.applyDamage(entity, projectile.damage,
                // SpellRegistry["getSpell(net.minecraft.resources.ResourceLocation)"](new ResourceLocation('kubejs:advance_dragon_breath')).getDamageSource(projectile, owner)
            // )) {
                // if (owner instanceof $LivingEntity) {
                    // owner.heal(projectile.damage)
                // }
                // if (Math.random() < 0.3) {
                    // /**@type {Internal.AoeEntity} */
                    // let pool = level.createEntity('kubejs:advance_dragon_breath_pool')
                    // pool.setOwner(owner)
                    // pool.setDamage(projectile.damage)
                    // pool.moveTo(entity.position())
                    // level.addFreshEntity(pool)
                // }
            // }
        // })
        // .sized(1, 1)
        // .clientTrackingRange(64)

    // event.create('advance_dragon_breath_pool', 'irons_spells_js:aoe_entity')
        // .applyEffect((ctx) => {
            // /**@type {Internal.AoeEntityJS} */
            // const pool = ctx.entity
            // const target = ctx.target
            // const customData = pool.customData
            // const owner = pool.getOwner()
            // if (!customData.containsKey('damageSources')) {
                // customData.put('damageSources', new DamageSource($ISSDamageSources.getHolderFromResource(target, $ISSDamageTypes.DRAGON_BREATH_POOL), pool, owner))
            // }
            // $ISSDamageSources.ignoreNextKnockback(target)
            // if (owner instanceof $Player && owner.getLuck() > 0) {
                // target.setTicksFrozen(target.getTicksFrozen() + owner.getLuck() * 2)
            // }
            // target.attack(customData.get('damageSources'), pool.damage)
        // })
        // .getParticleCount((pool) => {
            // return 0.3
        // })
        // .getParticle((pool) => {
            // return $ParticleTypes.DRAGON_BREATH
        // })
        // .sized(4, 1.2)
        // .clientTrackingRange(64)

// })

// // ===== advance_fang_strike.js =====
// StartupEvents.registry('irons_spellbooks:spells', event => {
    // event.create('advance_fang_strike')
        // .setCastTime(20)
        // .setCooldownSeconds(5)
        // .setBaseManaCost(50)
        // .setManaCostPerLevel(20)
        // .setBaseSpellPower(1)
        // .setSpellPowerPerLevel(1)
        // .setCastType('long')
        // .setSchool('irons_spellbooks:evocation')
        // .setMinRarity('legendary')
        // .setMaxLevel(1)
        // .onCast(ctx => {
            // if (ctx.level.isClientSide()) return
            // const level = ctx.level
            // const entity = ctx.entity
            // let forward = entity.getForward().multiply(1, 0, 1).normalize()
            // let start = entity.getEyePosition().add(forward.scale(1.5))
            
            // let damage = entity.getMaxHealth() * ctx.spell.getSpellPower(ctx.spellLevel, entity)

            // for (let i = 0; i < 16; i++) {
                // let spawn = start.add(forward.scale(i))
                // spawn = new Vec3d(spawn.x(), GetGroundLevel(level, spawn, 8), spawn.z())
                // if (!level.getBlockState(BlockPos.containing(spawn).below()).isAir()) {
                    // let delay = i / 3
                    // let fang = new $ExtendedEvokerFang(level, spawn.x(), spawn.y(), spawn.z(), (entity.getYHeadRot() - 90) * Mth.DEG_TO_RAD, delay, entity, damage)
                    // level.addFreshEntity(fang)
                // }
            // }
        // })
// })

// // ===== advance_stomp.js =====
// StartupEvents.registry('irons_spellbooks:spells', event => {
    // event.create('advance_stomp')
        // .setCooldownSeconds(16)
        // .setBaseManaCost(75)
        // .setManaCostPerLevel(20)
        // .setBaseSpellPower(1)
        // .setSpellPowerPerLevel(1)
        // .setCastType('long')
        // .setSchool('irons_spellbooks:nature')
        // .setMinRarity('legendary')
        // .setMaxLevel(1)
        // .onCast(ctx => {
            // if (ctx.level.isClientSide()) return
            // const level = ctx.level
            // const entity = ctx.entity
            // const spellLevel = ctx.spellLevel
            // const spell = ctx.spell
            // let facing = entity.getForward()
            // let spawn = ISSUtils.moveToRelativeGroundLevel(level, entity.getEyePosition().add(new Vec3d(facing.x(), 0, facing.z())), 1)
            // let bpos = BlockPos.containing(spawn)
            // level.spawnParticles(new $BlockParticleOption($ParticleTypes.BLOCK, level.getBlockState(bpos)).setPos(bpos), false, spawn.x(), spawn.y(), spawn.z(), 0.0, 0.0, 0.0, 40, 0.20 + 0.05 * spellLevel)
            // let stomp = new $StompAoe(level, 9, entity.getYHeadRot())
            // stomp.moveTo(spawn)
            // stomp.setDamage(spell.getSpellPower(ctx.spellLevel, entity) * entity.getMaxHealth())

            // stomp.setExplosionRadius(spell.getEntityPowerMultiplier(entity))
            // stomp.setOwner(entity)
            // level.addFreshEntity(stomp)
        // })
        // .getEffectiveCastTime(ctx => {
            // const spellLevel = ctx.spellLevel
            // const spell = ctx.spell
            // return spell.getCastTime(spellLevel)
        // })
// })

// // ===== advance_wither_skull.js =====
// StartupEvents.registry('irons_spellbooks:spells', event => {
    // event.create('advance_wither_skull')
        // .setCooldownSeconds(3)
        // .setBaseManaCost(20)
        // .setManaCostPerLevel(10)
        // .setBaseSpellPower(12)
        // .setSpellPowerPerLevel(1)
        // .setCastType('instant')
        // .setSchool('irons_spellbooks:blood')
        // .setMinRarity('legendary')
        // .setMaxLevel(1)
        // .onCast(ctx => {
            // if (ctx.level.isClientSide()) return
            // const spell = ctx.spell
            // const entity = ctx.entity
            // const level = ctx.level
            // const spellLevel = ctx.spellLevel
            // const weaknessEffect = entity.getEffect('minecraft:weakness')
            // let weaknessDuration = 0
            // let weaknessAmplifier = 0
            // if (weaknessEffect) {
                // weaknessDuration = weaknessEffect.getDuration()
                // weaknessAmplifier = weaknessEffect.getAmplifier()
            // }
            // let damage = spell.getSpellPower(spellLevel, entity) * (1 + weaknessDuration / 20 * weaknessAmplifier)
            // const skull = new $WitherSkullProjectile(entity, level, 0.5, damage)
            // let spawn = entity.getEyePosition().add(entity.getForward())
            // let px = spawn.x()
            // let py = spawn.y() - skull.getBoundingBox().getYsize() / 2
            // let pz = spawn.z()
            // skull.setPosRaw(px, py, pz)
            // skull.setOldPosAndRot()
            // skull.callReapplyPosition()
            // level.addFreshEntity(skull)
        // })
// })

// // ===== raise_overlord_undead.js =====
// const raiseOverlordUndeadSpawnPos = [new Vec3d(1, 0, 0), new Vec3d(-1, 0, 0), new Vec3d(0, 0, 1), new Vec3d(0, 0, -1)]
// StartupEvents.registry('irons_spellbooks:spells', event => {
    // event.create('raise_overlord_undead')
        // .setCastTime(40)
        // .setCooldownSeconds(150)
        // .setBaseManaCost(100)
        // .setManaCostPerLevel(50)
        // .setBaseSpellPower(1)
        // .setSpellPowerPerLevel(1)
        // .setCastType('long')
        // .setSchool('irons_spellbooks:blood')
        // .setMinRarity('legendary')
        // .setMaxLevel(1)
        // .setEmptyCastData(new SummonedEntitiesCastData())
        // .setRecastCount((spellLevel, entity) => {
            // return 2
        // })
        // .onRecastFinished(ctx => {
            // if (SummonManager.recastFinishedHelper(ctx.serverPlayer, ctx.recastInstance, ctx.recastResult, ctx.castDataSerializable)) {
                // MagicHelper.MAGIC_MANAGER.addCooldown(ctx.serverPlayer, ctx.spell, ctx.recastInstance.getCastSource())
            // }
        // })
        // .onCast(ctx => {
            // if (ctx.level.isClientSide()) return
            // const spellLevel = ctx.getSpellLevel()
            // const level = ctx.level
            // const entity = ctx.entity
            // const magicData = ctx.playerMagicData
            // const spell = ctx.spell
            // let recasts = magicData.getPlayerRecasts()
            // if (!recasts["hasRecastForSpell(io.redspace.ironsspellbooks.api.spells.AbstractSpell)"](spell)) {
                // let summonedEntitiesCastData = new SummonedEntitiesCastData()
                // let summonTime = 20 * 60 * 10
                // let playerChestArmor = entity.getItemBySlot('chest')
                // let undeadChestArmor = playerChestArmor.isEmpty() ?
                    // Item.of('minecraft:diamond_chestplate') : playerChestArmor
                // let playerFeetArmor = entity.getItemBySlot('feet')
                // let undeadFeetArmor = playerFeetArmor.isEmpty() ?
                    // Item.of('minecraft:diamond_boots') : playerFeetArmor
                // let playerHeadArmor = entity.getItemBySlot('head')
                // let undeadHeadArmor = playerHeadArmor.isEmpty() ?
                    // Item.of('minecraft:diamond_helmet') : playerHeadArmor
                // let playerLegsArmor = entity.getItemBySlot('legs')
                // let undeadLegsArmor = playerLegsArmor.isEmpty() ?
                    // Item.of('minecraft:diamond_leggings') : playerLegsArmor

                // let amplifier = spell.getSpellPower(ctx.spellLevel, entity)

                // for (let i = 0; i < 4; i++) {
                    // let undead = new $SummonedZombie(level, entity, true)

                    // undead.finalizeSpawn(level, level.getCurrentDifficultyAt(undead.getOnPos()), 'mob_summoned', null, null)
                    // undead.setItemSlot('chest', undeadChestArmor.enchant('minecraft:binding_curse', 1))
                    // undead.setItemSlot('feet', undeadFeetArmor.enchant('minecraft:binding_curse', 1))
                    // undead.setItemSlot('head', undeadHeadArmor.enchant('minecraft:binding_curse', 1))
                    // undead.setItemSlot('legs', undeadLegsArmor.enchant('minecraft:binding_curse', 1))
                    // undead.setDropChance('chest', 0.0)
                    // undead.setDropChance('feet', 0.0)
                    // undead.setDropChance('head', 0.0)
                    // undead.setDropChance('legs', 0.0)
                    // let targetPos = entity.getEyePosition().add(raiseOverlordUndeadSpawnPos[i])
                    // let spawnPos = ISSUtils.moveToRelativeGroundLevel(level, targetPos, 10, 10)
                    // undead.setPos(spawnPos.x(), spawnPos.y(), spawnPos.z())
                    // undead.setYHeadRot(entity.getYHeadRot())
                    // undead.setOldPosAndRot()
                    // undead.setMaxHealth(10 * (1 + spellLevel) * amplifier)
                    // undead.heal(undead.getMaxHealth())
                    // undead.setAttributeBaseValue('minecraft:generic.attack_damage', 2 * (1 + spellLevel) * amplifier)
                    // level.addFreshEntity(undead)
                    // SummonManager.initSummon(entity, undead, summonTime, summonedEntitiesCastData)
                // }
                // let recastInstance = new RecastInstance(spell.spellId, spellLevel, spell.getRecastCount(spellLevel, entity), summonTime, ctx.castSource, summonedEntitiesCastData)
                // recasts.addRecast(recastInstance, magicData)
            // }

        // })
// })

