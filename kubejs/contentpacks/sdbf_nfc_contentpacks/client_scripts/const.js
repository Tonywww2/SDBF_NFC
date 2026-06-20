// priority: 5000
// [merged] 合并自: nbt.js, key_word.js, tag.js

// ===== nbt.js =====
const TAG_FLOAT = 5
const TAG_COMPOUND = 10

// ===== key_word.js =====
/**
 * 
 * @param {Internal.MutableComponent[]} textList 
 */
function HoverTextList(textList) {
    let resultList = []
    textList.forEach((text, index) => {
        if (index == textList.length - 1) {
            resultList.push(text)
            return
        }
        resultList.push(text)
        resultList.push(NewLine)
    })
    return resultList
}
const NewLine = Text.of('\n')

const DefaultSlotType = Text.translatable('slot_type.kubejs.default.1').color('#e0e0e0')
const HighAdaptabilitySlotType = Text.translatable('slot_type.kubejs.high_adaptability.1').color('#00d921')
const RosyExplosionSlotType = Text.translatable('slot_type.kubejs.rosy_explosion.1').color('#f26ba8')
const RevolutionFlameType = Text.translatable('slot_type.kubejs.revolution_flame.1').color('#ff672b')
const MachinaryLubricantSlotType = Text.translatable('slot_type.kubejs.machinary_lubricant.1').color('#e69900')
const GulaSlotType = Text.translatable('slot_type.kubejs.gula_slot.1').color('#ae5dce')
const ContainerSlotType = Text.translatable('slot_type.kubejs.container_slot.1').color('#afbab7')
const DigestSlotType = Text.translatable('slot_type.kubejs.digest_slot.1').color('#d5e05a')


const LuckHover = Text.translatable('tooltips.kubejs.hover.luck.0').green().underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.hover.luck.0').green(),
        Text.translatable('tooltips.kubejs.hover.luck.1'),
        Text.translatable('tooltips.kubejs.hover.luck.2'),
        Text.translatable('tooltips.kubejs.hover.luck.3')
    ]))

const AlwaysEatHover = Text.translatable('tooltips.kubejs.hover.always_eat.0').gold().underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.hover.always_eat.0').gold(),
        Text.translatable('tooltips.kubejs.hover.always_eat.1'),
    ]))
const DirectlyNearbyOrganHover = Text.translatable('tooltips.kubejs.hover.directly_nearby_organ.0').green().underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.hover.directly_nearby_organ.0').green(),
        Text.translatable('tooltips.kubejs.hover.directly_nearby_organ.1')
    ]))
const NearbyOrganHover = Text.translatable('tooltips.kubejs.hover.nearby_organ.0').green().underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.hover.nearby_organ.0').green(),
        Text.translatable('tooltips.kubejs.hover.nearby_organ.1')
    ]))
const DiagonalOrganHover = Text.translatable('tooltips.kubejs.hover.diagonal_organ.0').green().underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.hover.diagonal_organ.0').green(),
        Text.translatable('tooltips.kubejs.hover.diagonal_organ.1')
    ]))
const KeyActiveHover = Text.translatable('tooltips.kubejs.hover.key_active.0').gold().underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.hover.key_active.0').gold(),
        Text.translatable('tooltips.kubejs.hover.key_active.1')
    ]))
const FrozenHover = Text.translatable('tooltips.kubejs.hover.frozen.0').aqua().underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.hover.frozen.0').aqua(),
        Text.translatable('tooltips.kubejs.hover.frozen.1'),
        Text.translatable('tooltips.kubejs.hover.frozen.2'),
    ]))
const SoildCoreHover = Text.translatable('tooltips.kubejs.hover.solid_core.0').gray().underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.hover.solid_core.0').gray(),
        Text.translatable('tooltips.kubejs.hover.solid_core.1'),
    ]))
const VitaToxinsHover = Text.translatable('tooltips.kubejs.hover.vita_toxins.0').red().underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.hover.vita_toxins.0').red(),
        Text.translatable('tooltips.kubejs.hover.vita_toxins.1'),
        Text.translatable('tooltips.kubejs.hover.vita_toxins.2'),
        Text.translatable('tooltips.kubejs.hover.vita_toxins.3'),
        Text.translatable('tooltips.kubejs.hover.vita_toxins.4'),
    ]))
const PutridToxinsHover = Text.translatable('tooltips.kubejs.hover.putrid_toxins.0').darkGreen().underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.hover.putrid_toxins.0').darkGreen(),
        Text.translatable('tooltips.kubejs.hover.putrid_toxins.1'),
        Text.translatable('tooltips.kubejs.hover.putrid_toxins.2'),
        Text.translatable('tooltips.kubejs.hover.putrid_toxins.3'),
    ]))

const ChestcavityTypeHover = Text.translatable('tooltips.kubejs.hover.chestcavity_type.0').gold().underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.hover.chestcavity_type.0').gold(),
        Text.translatable('tooltips.kubejs.hover.chestcavity_type.1'),
        Text.translatable('tooltips.kubejs.hover.chestcavity_type.2'),
        Text.translatable('tooltips.kubejs.hover.chestcavity_type.3'),
    ]))
const RevolutionMachineTypeHover = Text.translatable('tooltips.kubejs.hover.revolution_machine_type.0').color('#f74200').underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.hover.revolution_machine_type.0').color('#f74200'),
        Text.translatable('tooltips.kubejs.hover.revolution_machine_type.1'),
        Text.translatable('tooltips.kubejs.hover.revolution_machine_type.2'),
    ]))
const FunctionalEntityTypeHover = Text.translatable('tooltips.kubejs.hover.functional_entity_type.0').white().underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.hover.functional_entity_type.0').white(),
        Text.translatable('tooltips.kubejs.hover.functional_entity_type.1'),
        Text.translatable('tooltips.kubejs.hover.functional_entity_type.2'),
    ]))
const GulaTypeHover = Text.translatable('tooltips.kubejs.hover.gula_type.0').color('#ce00ee').underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.hover.gula_type.0').color('#ce00ee'),
        Text.translatable('tooltips.kubejs.hover.gula_type.1'),
        Text.translatable('tooltips.kubejs.hover.gula_type.2'),
        Text.translatable('tooltips.kubejs.hover.gula_type.3'),
    ]))

const RoseTypeHover = Text.translatable('tooltips.kubejs.hover.rose_type.0').color('#e85195').underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.hover.rose_type.0').color('#e85195'),
        Text.translatable('tooltips.kubejs.hover.rose_type.1'),
        Text.translatable('tooltips.kubejs.hover.rose_type.2'),
    ]))

const Player17TypeHover = Text.translatable('tooltips.kubejs.hover.player_17_type.0').gray().underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.hover.player_17_type.0').gray(),
        Text.translatable('tooltips.kubejs.hover.player_17_type.1'),
    ]))
const Player21TypeHover = Text.translatable('tooltips.kubejs.hover.player_21_type.0').gray().underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.hover.player_21_type.0').gray(),
        Text.translatable('tooltips.kubejs.hover.player_21_type.1'),
    ]))
const Player25TypeHover = Text.translatable('tooltips.kubejs.hover.player_25_type.0').gray().underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.hover.player_25_type.0').gray(),
        Text.translatable('tooltips.kubejs.hover.player_25_type.1'),
    ]))
const Player27TypeHover = Text.translatable('tooltips.kubejs.hover.player_27_type.0').gray().underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.hover.player_27_type.0').gray(),
        Text.translatable('tooltips.kubejs.hover.player_27_type.1'),
    ]))

const UnstableHover = Text.translatable('tooltips.kubejs.hover.unstable.0').red().underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.hover.unstable.0').red(),
        Text.translatable('tooltips.kubejs.hover.unstable.1'),
        Text.translatable('tooltips.kubejs.hover.unstable.2'),
    ]))

const SatenanceEffectHover = Text.translatable('tooltips.kubejs.hover.sustenance_effect.0').gold().underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.hover.sustenance_effect.0').gold(),
        Text.translatable('tooltips.kubejs.hover.sustenance_effect.1'),
    ]))
    
const ExtremeStrengthHover = Text.translatable('tooltips.kubejs.score_tag.kubejs:extreme_strength').lightPurple().underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.score_tag.kubejs:extreme_strength').lightPurple(),
        Text.translatable('tooltips.kubejs.score_tag.hover.kubejs:extreme_strength'),
    ]))
const ExtremeFitnessHover = Text.translatable('tooltips.kubejs.score_tag.kubejs:extreme_fitness').lightPurple().underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.score_tag.kubejs:extreme_fitness').lightPurple(),
        Text.translatable('tooltips.kubejs.score_tag.hover.kubejs:extreme_fitness'),
    ]))
const FrostShieldHover = Text.translatable('tooltips.kubejs.hover.frost_shield.0').darkAqua().underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.hover.frost_shield.0').darkAqua(),
        Text.translatable('tooltips.kubejs.hover.frost_shield.1'),
        Text.translatable('tooltips.kubejs.hover.frost_shield.2')
    ]))
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.hover.spectral_fire.0').darkRed(),
        Text.translatable('tooltips.kubejs.hover.spectral_fire.1'),
        Text.translatable('tooltips.kubejs.hover.spectral_fire.2')
    ]))


const BasicTumorScoreHover = Text.translatable('tooltips.kubejs.hover.basic_tumor_score.0').green().underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.hover.basic_tumor_score.0').green(),
        Text.translatable('tooltips.kubejs.hover.basic_tumor_score.1')
    ]))
const PotentialTumorScoreHover = Text.translatable('tooltips.kubejs.hover.potential_tumor_score.0').darkGreen().underlined()
    .hover(HoverTextList([
        Text.translatable('tooltips.kubejs.hover.potential_tumor_score.0').darkGreen(),
        Text.translatable('tooltips.kubejs.hover.potential_tumor_score.1')
    ]))

// ===== tag.js =====
const OrganTagMap = {
    'kubejs:appendix': Text.aqua(Text.translatable('tooltips.kubejs.tag.kubejs:appendix')),
    'kubejs:heart': Text.aqua(Text.translatable('tooltips.kubejs.tag.kubejs:heart')),
    'kubejs:intestine': Text.aqua(Text.translatable('tooltips.kubejs.tag.kubejs:intestine')),
    'kubejs:kidney': Text.aqua(Text.translatable('tooltips.kubejs.tag.kubejs:kidney')),
    'kubejs:liver': Text.aqua(Text.translatable('tooltips.kubejs.tag.kubejs:liver')),
    'kubejs:lung': Text.aqua(Text.translatable('tooltips.kubejs.tag.kubejs:lung')),
    'kubejs:muscle': Text.aqua(Text.translatable('tooltips.kubejs.tag.kubejs:muscle')),
    'kubejs:bone': Text.gray(Text.translatable('tooltips.kubejs.tag.kubejs:bone')),
    'kubejs:spine': Text.of(Text.translatable('tooltips.kubejs.tag.kubejs:spine')).color('#cff9ff'),
    'kubejs:spleen': Text.aqua(Text.translatable('tooltips.kubejs.tag.kubejs:spleen')),
    'kubejs:pancreas': Text.aqua(Text.translatable('tooltips.kubejs.tag.kubejs:pancreas')),
    'kubejs:stomach': Text.aqua(Text.translatable('tooltips.kubejs.tag.kubejs:stomach')),
    'kubejs:machine': Text.gray(Text.translatable('tooltips.kubejs.tag.kubejs:machine')),
    'kubejs:magic': Text.of(Text.translatable('tooltips.kubejs.tag.kubejs:magic')).color('#00eded'),
    'kubejs:candy': Text.of(Text.translatable('tooltips.kubejs.tag.kubejs:candy')).color('#e8a0dc'),
    'kubejs:rose': Text.darkRed(Text.translatable('tooltips.kubejs.tag.kubejs:rose')),
    'kubejs:resource': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:resource')),
    'kubejs:revolution': Text.of(Text.translatable('tooltips.kubejs.tag.kubejs:revolution')).color('#deaa00'),
    'kubejs:relic': Text.of(Text.translatable('tooltips.kubejs.tag.kubejs:relic')).color('#ffe100'),
    'kubejs:legend': Text.of(Text.translatable('tooltips.kubejs.tag.kubejs:legend')).color('#d6e5ff'),
    'kubejs:nature': Text.of(Text.translatable('tooltips.kubejs.tag.kubejs:nature')).color('#84e45b'),
    'kubejs:basic': Text.of(Text.translatable('tooltips.kubejs.tag.kubejs:basic')).color('#a3a3a3'),
    'kubejs:evolution': Text.green(Text.translatable('tooltips.kubejs.tag.kubejs:evolution')),
    'kubejs:food': Text.of(Text.translatable('tooltips.kubejs.tag.kubejs:food')).color('#f1b500'),
    'kubejs:huge': Text.of(Text.translatable('tooltips.kubejs.tag.kubejs:huge')).color('#a900fd'),
    'kubejs:warp': Text.darkPurple(Text.translatable('tooltips.kubejs.tag.kubejs:warp')),
    'kubejs:prehistory': Text.of(Text.translatable('tooltips.kubejs.tag.kubejs:prehistory')).color('#d6d124'),
    'kubejs:dragon': Text.of(Text.translatable('tooltips.kubejs.tag.kubejs:dragon')).color('#bc00bc'),
    'kubejs:ender': Text.of(Text.translatable('tooltips.kubejs.tag.kubejs:ender')).color('#913dd1'),
    'kubejs:nether': Text.of(Text.translatable('tooltips.kubejs.tag.kubejs:nether')).color('#d43c00'),
    'kubejs:void': Text.of(Text.translatable('tooltips.kubejs.tag.kubejs:void')).color('#c2bec2'),
    'kubejs:fantasy': Text.of(Text.translatable('tooltips.kubejs.tag.kubejs:fantasy')).color('#cd9b9b'),
    'kubejs:infected': Text.of(Text.translatable('tooltips.kubejs.tag.kubejs:infected')).color('#00ba03'),
    'kubejs:botany': Text.of(Text.translatable('tooltips.kubejs.tag.kubejs:botany')).color('#0ed400'),
    'kubejs:entity_loot': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:entity_loot')),
    'kubejs:entity_loot_only': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:entity_loot_only')),
    'kubejs:chest_loot': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:chest_loot')),
    'kubejs:chest_loot_only': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:chest_loot_only')),
    'kubejs:chest_cavity_update_only': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:chest_cavity_update_only')),
    'kubejs:chest_cavity_update': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:chest_cavity_update')),
    'kubejs:item_right_clicked_only': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:item_right_clicked_only')),
    'kubejs:item_right_clicked': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:item_right_clicked')),
    'kubejs:key_active': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:key_active')),
    'kubejs:entity_do_damage_only': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:entity_do_damage_only')),
    'kubejs:entity_do_damage': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:entity_do_damage')),
    'kubejs:food_eaten_only': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:food_eaten_only')),
    'kubejs:food_eaten': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:food_eaten')),
    'kubejs:block_broken_only': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:block_broken_only')),
    'kubejs:block_broken': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:block_broken')),
    'kubejs:entity_be_hurt_only': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:entity_be_hurt_only')),
    'kubejs:entity_be_hurt': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:entity_be_hurt')),
    'kubejs:player_enchant_only': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:player_enchant_only')),
    'kubejs:player_enchant': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:player_enchant')),
    'kubejs:entity_tick_only': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:entity_tick_only')),
    'kubejs:entity_tick': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:entity_tick')),
    'kubejsiss_player_spell_cast_only': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:iss_player_spell_cast_only')),
    'kubejs:iss_player_spell_cast': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:iss_player_spell_cast')),
    'kubejs:entity_kill_only': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:entity_kill_only')),
    'kubejs:entity_kill': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:entity_kill')),
    'kubejs:entity_interact_only': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:entity_interact_only')),
    'kubejs:entity_interact': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:entity_interact')),
    'kubejs:entity_be_interacted_only': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:entity_be_interacted_only')),
    'kubejs:entity_be_interacted': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:entity_be_interacted')),
    'kubejs:block_right_clicked_only': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:block_right_clicked_only')),
    'kubejs:block_right_clicked': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:block_right_clicked')),
    'kubejs:entity_death_only': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:entity_death_only')),
    'kubejs:entity_death': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:entity_death')),
    'kubejs:plant': Text.green(Text.translatable('tooltips.kubejs.tag.kubejs:plant')),
    'kubejs:organ_add_status_effect_only': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:organ_add_status_effect_only')),
    'kubejs:organ_add_status_effect': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:organ_add_status_effect')),
    'kubejs:exposure_frame_added_only': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:exposure_frame_added_only')),
    'kubejs:exposure_frame_added': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:exposure_frame_added')),
    'kubejs:entity_fall_only': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:entity_fall_only')),
    'kubejs:entity_fall': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:entity_fall')),
    'kubejs:shield_block_only': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:shield_block_only')),
    'kubejs:shield_block': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:shield_block')),
    'kubejs:villager_update_special_prices_only': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:villager_update_special_prices_only')),
    'kubejs:villager_update_special_prices': Text.gold(Text.translatable('tooltips.kubejs.tag.kubejs:villager_update_special_prices')),
}

