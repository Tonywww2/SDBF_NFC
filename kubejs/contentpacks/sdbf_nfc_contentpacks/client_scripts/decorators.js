// priority: 1000
// [merged] infected.js, stresso.js

// ===== infected.js =====
const InfectedDecorator = RenderJSItemDecoratorHandler.registerForAllItem('infected', ctx => { })

InfectedDecorator.setRender(ctx => {
    let item = ctx.itemStack
    if (item.isEmpty() || !item.hasNBT()) return
    let nbt = item.getNbt()
    if (!nbt.getBoolean('Infected')) return
    let guiGraphics = ctx.guiGraphics
    RenderJSRenderSystem.setShaderColorJS(1, 1, 1, 1)
    RenderJSRenderSystem.disableDepthTestJS()
    guiGraphics.blit(new ResourceLocation('kubejs:textures/decorator/infected_overlay.png'), ctx.xOffset, ctx.yOffset, 0, 0, 16, 16, 16, 16)
})

// ===== stresso.js =====
const StressoDecorator = RenderJSItemDecoratorHandler.registerForAllItem('stresso', ctx => { })

StressoDecorator.setRender(ctx => {
    const item = ctx.itemStack
    const guiGraphics = ctx.guiGraphics
    if (!item.isEmpty() && item.hasNBT()) {
        let nbt = item.getNbt()
        if (!nbt.contains('Stresso')) return
        let stressoNbt = nbt.getCompound('Stresso')
        let max = stressoNbt.contains('Max') ? stressoNbt.getInt('Max') : 100
        let cur = stressoNbt.contains('Cur') ? stressoNbt.getInt('Cur') : 0
        RenderJSRenderSystem.setShaderColorJS(1, 1, 1, 1)
        RenderJSRenderSystem.disableDepthTestJS()
        RenderJSUtils.fillRect(guiGraphics, ctx.xOffset + 1, ctx.yOffset + 2, 1, 13, 0, 0, 0, 255)
        if (max < cur) {
            RenderJSUtils.fillRect(guiGraphics, ctx.xOffset + 1, ctx.yOffset + 2, 1, 13, 255, 25, 0, 255)
        } else {
            RenderJSUtils.fillRect(guiGraphics, ctx.xOffset + 1, ctx.yOffset + 16 - cur / max * 13, 1, cur / max * 13, 255, 220, 0, 255)
        }
    }
})

