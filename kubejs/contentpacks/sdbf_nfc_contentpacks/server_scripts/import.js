// priority: 10000
const $CompoundTag = Java.loadClass('net.minecraft.nbt.CompoundTag')
const $ListTag = Java.loadClass('net.minecraft.nbt.ListTag')
const $StructurePlaceSettings = Java.loadClass('net.minecraft.world.level.levelgen.structure.templatesystem.StructurePlaceSettings')
const $ChunkPos = Java.loadClass('net.minecraft.world.level.ChunkPos')
const $Mirror = Java.loadClass('net.minecraft.world.level.block.Mirror')
const $Rotation = Java.loadClass('net.minecraft.world.level.block.Rotation')
const $PalettedContainer = Java.loadClass('net.minecraft.world.level.chunk.PalettedContainer')
const $MobEffects = Java.loadClass('net.minecraft.world.effect.MobEffects')
const $ServerPlayer = Java.loadClass('net.minecraft.server.level.ServerPlayer')
const $ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes')
const $ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries')
const $Registries = Java.loadClass('net.minecraft.core.registries.Registries')
const $LivingEntity = Java.loadClass('net.minecraft.world.entity.LivingEntity')
const $ResourceKey = Java.loadClass('net.minecraft.resources.ResourceKey')
const $Integer = Java.loadClass('java.lang.Integer')
const $AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier')
const $PathfinderMob = Java.loadClass('net.minecraft.world.entity.PathfinderMob')
// const $AbstractGolem = Java.loadClass('dev.xkmc.modulargolems.content.entity.common.AbstractGolemEntity')
const $LootParamsBuilder = Java.loadClass('net.minecraft.world.level.storage.loot.LootParams$Builder')
const $LootContextParams = Java.loadClass('net.minecraft.world.level.storage.loot.parameters.LootContextParams')
const $LootContextParamSets = Java.loadClass('net.minecraft.world.level.storage.loot.parameters.LootContextParamSets')
const $MobEffectInstance = Java.loadClass('net.minecraft.world.effect.MobEffectInstance')
const $LocationPredicate = Java.loadClass('net.minecraft.advancements.critereon.LocationPredicate')
const $Operation = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation')
const $ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack')
const $TagKey = Java.loadClass('net.minecraft.tags.TagKey')
const $DamageTypes = Java.loadClass('net.minecraft.world.damagesource.DamageTypes')

const $ChestCavityEntity = Java.loadClass('net.tigereye.chestcavity.interfaces.ChestCavityEntity')


const $ItemEntity = Java.loadClass('net.minecraft.world.entity.item.ItemEntity')
const $InfestedBlock = Java.loadClass('net.minecraft.world.level.block.InfestedBlock')

const $TamableAnimal = Java.loadClass('net.minecraft.world.entity.TamableAnimal')
const $OwnableEntity = Java.loadClass('net.minecraft.world.entity.OwnableEntity')

const $AlcoholManager = Java.loadClass('net.satisfy.brewery.core.effect.alcohol.AlcoholManager')

const $EvaluateChestCavityJS = Java.loadClass('net.tigereye.chestcavity.compat.kubejs.events.EvaluateChestCavityJS')

const $MapItemSavedData = Java.loadClass('net.minecraft.world.level.saveddata.maps.MapItemSavedData')
const $MapItem = Java.loadClass('net.minecraft.world.item.MapItem')
const $MapDecorationType = Java.loadClass('net.minecraft.world.level.saveddata.maps.MapDecoration$Type')
const $RandomizableContainerBlockEntity = Java.loadClass('net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity')

const $BoneMealItem = Java.loadClass('net.minecraft.world.item.BoneMealItem')

const $EntityHitResult = Java.loadClass('net.minecraft.world.phys.EntityHitResult')
const $BlockHitResult = Java.loadClass('net.minecraft.world.phys.BlockHitResult')
// const $SpellUtil = Java.loadClass('com.hollingsworth.arsnouveau.api.util.SpellUtil')
const $ClientboundSetEntityMotionPacket = Java.loadClass('net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket')

const $ForgeCapabilities = Java.loadClass('net.minecraftforge.common.capabilities.ForgeCapabilities')
const $FluidAction = Java.loadClass('net.minecraftforge.fluids.capability.IFluidHandler$FluidAction')

const $AxeItem = Java.loadClass('net.minecraft.world.item.AxeItem')
const $SoundSource = Java.loadClass('net.minecraft.sounds.SoundSource')

// const $CreateRecipesType = Java.loadClass('com.simibubi.create.AllRecipeTypes')
const $RecipeWrapper = Java.loadClass('net.minecraftforge.items.wrapper.RecipeWrapper')
// const $ProcessingInventory = Java.loadClass('com.simibubi.create.content.processing.recipe.ProcessingInventory')


// const $AnimHeadSummon = Java.loadClass('com.hollingsworth.arsnouveau.common.entity.AnimHeadSummon')
// const $AnimBlockSummon = Java.loadClass('com.hollingsworth.arsnouveau.common.entity.AnimBlockSummon')
const $AbstractSkullBlock = Java.loadClass('net.minecraft.world.level.block.AbstractSkullBlock')

// const $SpellSelectionEvent = Java.loadClass('io.redspace.ironsspellbooks.api.magic.SpellSelectionManager$SpellSelectionEvent')
// const $ModifySpellLevelEvent = Java.loadClass('io.redspace.ironsspellbooks.api.events.ModifySpellLevelEvent')
const $LivingHurtEvent = Java.loadClass('net.minecraftforge.event.entity.living.LivingHurtEvent')
const $EntityMobGriefingEvent = Java.loadClass('net.minecraftforge.event.entity.EntityMobGriefingEvent')
let $LivingDamageEvent = Java.loadClass('net.minecraftforge.event.entity.living.LivingDamageEvent')
// const $EffectResolveEventPost = Java.loadClass('com.hollingsworth.arsnouveau.api.event.EffectResolveEvent$Post')
// const $EffectResolveEventPre = Java.loadClass('com.hollingsworth.arsnouveau.api.event.EffectResolveEvent$Pre')
const $ShieldBlockEvent = Java.loadClass('net.minecraftforge.event.entity.living.ShieldBlockEvent')
const $LivingFallEvent = Java.loadClass('net.minecraftforge.event.entity.living.LivingFallEvent')
const $PlayerSpawnPhantomsEvent = Java.loadClass('net.minecraftforge.event.entity.player.PlayerSpawnPhantomsEvent')
const $PlayerChangedDimensionEvent = Java.loadClass('net.minecraftforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent')



const $Containers = Java.loadClass('net.minecraft.world.Containers')

const $CustomGoal = Java.loadClass('net.liopyu.entityjs.util.ai.CustomGoal')

// const $FrameAddedEvent = Java.loadClass('io.github.mortuusars.exposure.forge.api.event.FrameAddedEvent')
// const $DeployerFakePlayer = Java.loadClass('com.simibubi.create.content.kinetics.deployer.DeployerFakePlayer')

// const $HourglassConfig = Java.loadClass('net.lavabucket.hourglass.config.HourglassConfig')

// const $DespoilLootModifier = Java.loadClass('com.github.elenterius.biomancy.loot.DespoilLootModifier')
const $LootTable = Java.loadClass('net.minecraft.world.level.storage.loot.LootTable')

// const $CoinValue = Java.loadClass('io.github.lightman314.lightmanscurrency.api.money.value.builtin.CoinValue')
const $MachineJS = Java.loadClass('fr.frinn.custommachinery.common.integration.kubejs.function.MachineJS')
const $CustomMachineTile = Java.loadClass('fr.frinn.custommachinery.common.init.CustomMachineTile')


// const $FueledToolItem = Java.loadClass('com.jesz.createdieselgenerators.content.tools.FueledToolItem')
const $ExperienceOrb = Java.loadClass('net.minecraft.world.entity.ExperienceOrb')
const $ToolAction = Java.loadClass('net.minecraftforge.common.ToolAction')
const $NbtUtils = Java.loadClass('net.minecraft.nbt.NbtUtils')


const $Seat = Java.loadClass('com.mrcrayfish.furniture.refurbished.entity.Seat')
const $BlockStateProperties = Java.loadClass('net.minecraft.world.level.block.state.properties.BlockStateProperties')
const $TilePlacedItems = Java.loadClass('com.breakinblocks.plonk.common.tile.TilePlacedItems')
const $PlonkRegistryItems = Java.loadClass('com.breakinblocks.plonk.common.registry.RegistryItems')
const $Boolean = Java.loadClass('java.lang.Boolean')
// const $ItemStackKey = Java.loadClass('com.wintercogs.beyonddimensions.api.storage.key.impl.ItemStackKey')

// const $EffectSmelt = Java.loadClass('com.hollingsworth.arsnouveau.common.spell.effect.EffectSmelt')
const $LargeFireball = Java.loadClass('net.minecraft.world.entity.projectile.LargeFireball')
const $EntityType = Java.loadClass('net.minecraft.world.entity.EntityType')
const $LlamaSpit = Java.loadClass('net.minecraft.world.entity.projectile.LlamaSpit')
const $Mob = Java.loadClass('net.minecraft.world.entity.Mob')
// const $MobUtil = Java.loadClass('com.github.elenterius.biomancy.util.MobUtil')
const $Snowball = Java.loadClass('net.minecraft.world.entity.projectile.Snowball')
const $Villager = Java.loadClass('net.minecraft.world.entity.npc.Villager')
const $PotionUtils = Java.loadClass('net.minecraft.world.item.alchemy.PotionUtils')
const $BlockItem = Java.loadClass('net.minecraft.world.item.BlockItem')

// const $ItemTraderBlockEntity = Java.loadClass('io.github.lightman314.lightmanscurrency.common.blockentity.trader.ItemTraderBlockEntity')
// const $TraderBlockBase = Java.loadClass('io.github.lightman314.lightmanscurrency.api.traders.blocks.TraderBlockBase')
// const $GachaMachineBlockEntity = Java.loadClass('io.github.lightman314.lightmanscurrency.common.blockentity.trader.GachaMachineBlockEntity')
// const $CapabilityInterfaceBlockEntity = Java.loadClass('io.github.lightman314.lightmanscurrency.common.blockentity.CapabilityInterfaceBlockEntity')

const $ClipContext = Java.loadClass('net.minecraft.world.level.ClipContext')
const $ClipContextBlock = Java.loadClass('net.minecraft.world.level.ClipContext$Block')
const $ClipContextFluid = Java.loadClass('net.minecraft.world.level.ClipContext$Fluid')

// const $VoidTentacle = Java.loadClass('io.redspace.ironsspellbooks.entity.spells.void_tentacle.VoidTentacle')
// const $TargetDummyEntity = Java.loadClass('net.mehvahdjukaar.dummmmmmy.common.TargetDummyEntity')

// --- import.js end (sentinel) ---
