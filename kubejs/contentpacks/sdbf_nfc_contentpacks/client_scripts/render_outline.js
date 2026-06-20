// priority: 500
/**
 * @type {OutlineRenderModel[]}
 */
let NeedHighLightPosList = []

NetworkEvents.dataReceived('highlight_pos', event => {
    let data = event.data
    let mode = data.getInt('mode')
    /** @type {OutlineRenderModel[]} */
    let outlineRenderList = []
    if (data.contains('highlightList')) {
        outlineRenderList = ConvertNbt2OutlineRenderList(data.getList('highlightList', TAG_COMPOUND))
    }
    switch (mode) {
        case 1:
            NeedHighLightPosList.length = 0
            break
        case 2:
            outlineRenderList.forEach(outline => {
                let index = NeedHighLightPosList.findIndex(p => p.equals(outline))
                if (index >= 0) {
                    NeedHighLightPosList.splice(index, 1)
                }
            })
            break
        default:
            NeedHighLightPosList = NeedHighLightPosList.concat(outlineRenderList)
            break
    }
})

NativeEvents.onEvent($RenderLevelStageEvent,/**@type {Internal.RenderLevelStageEvent} */ event => {
    if (event.getStage() != $RenderLevelStageEventStage.AFTER_WEATHER) return
    const level = Client.level

    let currentTime = level.time
    let needRemove = []
    for (let index in NeedHighLightPosList) {
        let pHighLight = NeedHighLightPosList[index]
        if (pHighLight.time > 0 && pHighLight.time <= currentTime) {
            needRemove.push(index)
            continue
        }
        let pBlockPos = pHighLight.getBlockPos()
        let r = ((pHighLight.color >> 16) & 0xFF) / 255.0
        let g = ((pHighLight.color >> 8) & 0xFF) / 255.0
        let b = (pHighLight.color & 0xFF) / 255.0
        level.addParticle(
            new $DustParticleOptions(new $Vector3f(r, g, b), 1.0),
            pBlockPos.getX() + 0.5, pBlockPos.getY() + 0.2, pBlockPos.getZ() + 0.5,
            0, 0.03, 0
        )
    }
    needRemove.forEach(index => {
        NeedHighLightPosList.splice(index, 1)
    })
})