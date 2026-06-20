// priority: 500
// [merged] food.js, machine.js, world_machine.js

// ===== food.js =====
StartupEvents.registry('block', event => {
    event.create('kubejs:glutinous_lemon_juice')
        .box(5, 0, 5, 11, 13, 11)
        .model('kubejs:block/food/glutinous_lemon_juice')
        .defaultCutout()
})

// ===== machine.js =====
StartupEvents.registry('block', event => {
    event.create('kubejs:world_computer', 'custommachinery')
        .machine('kubejs:world_computer')
    event.create('kubejs:eternal_altar', 'custommachinery')
        .machine('kubejs:eternal_altar')
    event.create('kubejs:mantle_energy_extractor', 'custommachinery')
        .machine('kubejs:mantle_energy_extractor')
    event.create('kubejs:growth_vat', 'custommachinery')
        .machine('kubejs:growth_vat')
})

// ===== world_machine.js =====
StartupEvents.registry('block', event => {
    event.create('kubejs:data_bus', 'basic')
        .stoneSoundType()
        .textureAll('kubejs:block/world_machine/data_bus')
        .property(BlockProperties.HORIZONTAL_FACING)
        .placementState(state => {
            state.setValue(BlockProperties.HORIZONTAL_FACING, state.horizontalDirection)
            return state
        })
        .resistance

    event.create('kubejs:buffer_circuit', 'basic')
        .stoneSoundType()
        .property(BlockProperties.HORIZONTAL_FACING)
        .textureAll('kubejs:block/world_machine/buffer_circuit')
        .placementState(state => {
            state.setValue(BlockProperties.HORIZONTAL_FACING, state.horizontalDirection)
            return state
        })

    event.create('kubejs:timing_module', 'basic')
        .stoneSoundType()
        .texture('particle', 'kubejs:block/world_machine/timing_module_top')
        .textureSide('down', 'kubejs:block/world_machine/timing_module_bottom')
        .textureSide('up', 'kubejs:block/world_machine/timing_module_top')
        .textureSide('north', 'kubejs:block/world_machine/timing_module_north')
        .textureSide('south', 'kubejs:block/world_machine/timing_module_south')
        .textureSide('west', 'kubejs:block/world_machine/timing_module_west')
        .textureSide('east', 'kubejs:block/world_machine/timing_module_east')
        .property(BlockProperties.HORIZONTAL_FACING)
        .placementState(state => {
            state.setValue(BlockProperties.HORIZONTAL_FACING, state.horizontalDirection)
            return state
        })
        
    event.create('kubejs:spatial_stabilizer', 'basic')
        .stoneSoundType()
        .textureAll('kubejs:block/world_machine/spatial_stabilizer')
        .property(BlockProperties.HORIZONTAL_FACING)
        .placementState(state => {
            state.setValue(BlockProperties.HORIZONTAL_FACING, state.horizontalDirection)
            return state
        })

    event.create('kubejs:oracle_module', 'basic')
        .stoneSoundType()
        .textureAll('kubejs:block/world_machine/oracle_module')
    event.create('kubejs:circuit_board', 'basic')
        .stoneSoundType()
        .textureAll('kubejs:block/world_machine/circuit_board')
        .property(BlockProperties.HORIZONTAL_FACING)
        .placementState(state => {
            state.setValue(BlockProperties.HORIZONTAL_FACING, state.horizontalDirection)
            return state
        })

    /**
     * 大世界计算机本体构件
     */
    event.create('kubejs:computing_core', 'basic')
        .stoneSoundType()
        .texture('particle', 'kubejs:block/world_machine/computing_core_top')
        .textureSide('down', 'kubejs:block/world_machine/computing_core_bottom')
        .textureSide('up', 'kubejs:block/world_machine/computing_core_top')
        .textureSide('north', 'kubejs:block/world_machine/computing_core')
        .textureSide('south', 'kubejs:block/world_machine/computing_core')
        .textureSide('west', 'kubejs:block/world_machine/computing_core')
        .textureSide('east', 'kubejs:block/world_machine/computing_core')

    event.create('kubejs:cerebral_brain_processor', 'basic')
        .stoneSoundType()
        .texture('particle', 'kubejs:block/world_machine/cerebral_brain_processor_top')
        .textureSide('down', 'kubejs:block/world_machine/cerebral_brain_processor_bottom')
        .textureSide('up', 'kubejs:block/world_machine/cerebral_brain_processor_top')
        .textureSide('north', 'kubejs:block/world_machine/cerebral_brain_processor')
        .textureSide('south', 'kubejs:block/world_machine/cerebral_brain_processor')
        .textureSide('west', 'kubejs:block/world_machine/cerebral_brain_processor')
        .textureSide('east', 'kubejs:block/world_machine/cerebral_brain_processor')

    event.create('kubejs:data_compressor', 'basic')
        .stoneSoundType()
        .texture('particle', 'kubejs:block/world_machine/data_compressor_top')
        .textureSide('down', 'kubejs:block/world_machine/data_compressor_bottom')
        .textureSide('up', 'kubejs:block/world_machine/data_compressor_top')
        .textureSide('north', 'kubejs:block/world_machine/data_compressor')
        .textureSide('south', 'kubejs:block/world_machine/data_compressor')
        .textureSide('west', 'kubejs:block/world_machine/data_compressor')
        .textureSide('east', 'kubejs:block/world_machine/data_compressor')

    event.create('kubejs:world_renderer', 'basic')
        .stoneSoundType()
        .texture('particle', 'kubejs:block/world_machine/world_renderer_top')
        .textureSide('down', 'kubejs:block/world_machine/world_renderer_bottom')
        .textureSide('up', 'kubejs:block/world_machine/world_renderer_top')
        .textureSide('north', 'kubejs:block/world_machine/world_renderer')
        .textureSide('south', 'kubejs:block/world_machine/world_renderer')
        .textureSide('west', 'kubejs:block/world_machine/world_renderer')
        .textureSide('east', 'kubejs:block/world_machine/world_renderer')

    event.create('kubejs:entity_simulator', 'basic')
        .stoneSoundType()
        .textureAll('kubejs:block/world_machine/entity_simulator')

    event.create('kubejs:quantum_dimension_resolver', 'basic')
        .stoneSoundType()
        .textureAll('kubejs:block/world_machine/quantum_dimension_resolver')
        
    event.create('kubejs:void_diffraction_vault', 'basic')
        .glassSoundType()
        .textureAll('kubejs:block/world_machine/void_diffraction_vault')
        .defaultTranslucent()

})

