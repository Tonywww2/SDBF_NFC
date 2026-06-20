// priority: 800
// [merged] domain/effect/fragile.js, domain/effect/spectral_fire.js

// ===== fragile.js =====
/**
 * 实际受伤（过护甲结算）节点，适合用于结算受伤效果
 */
NativeEvents.onEvent($LivingDamageEvent, /** @param {Internal.LivingDamageEvent} event */ event => {
    const entity = event.entity
    if (!entity.hasEffect('kubejs:fragile')) return
    let fragileEffect = entity.getEffect('kubejs:fragile')
    let effectLevel = fragileEffect.getAmplifier() + 1
    event.amount = event.amount * (1 + effectLevel * 0.1)
})

// ===== spectral_fire.js =====
EntityEvents.death(event => {
    const entity = event.entity
    if (!entity.hasEffect('kubejs:spectral_fire')) return
    const level = event.level
    const effect = entity.getEffect('kubejs:spectral_fire')
    let lvl = effect.getAmplifier()
    let duration = effect.getDuration()
    let entityList = GetLivingWithinRadius(level, entity.blockPosition(), 16, (pLevel, pEntity) => {
        if (pEntity.isPlayer()) return false
        if (pEntity.hasEffect('kubejs:spectral_fire')) return false
        return true
    })
    for (let i = 0; i < lvl + 1; i++) {
        entityList[i].potionEffects.add('kubejs:spectral_fire', duration, lvl + 1, true, true)
    }
})

