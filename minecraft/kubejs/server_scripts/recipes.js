// 12 Epochs Progression Recipes Script
ServerEvents.recipes(event => {
    console.info('=== Loading 12 Epochs Custom Progression Recipes ===')

    // -------------------------------------------------------------------------
    // EPOCH 3 GATING: ARS NOUVEAU
    // Cannot start magic without exploring ruins & finding Spirit Orbs in Epoch 2
    // -------------------------------------------------------------------------
    event.remove({ output: 'ars_nouveau:novice_spell_book' })
    event.shaped('ars_nouveau:novice_spell_book', [
        ' G ',
        'SBS',
        ' G '
    ], {
        G: 'minecraft:gold_ingot',
        S: 'paraglider:spirit_orb',
        B: 'minecraft:book'
    })

    // -------------------------------------------------------------------------
    // EPOCH 4 GATING: BOTANIA
    // Cannot start Botania without Source Gem from Ars Nouveau (Epoch 3)
    // -------------------------------------------------------------------------
    event.remove({ output: 'botania:apothecary_default' })
    event.shaped('botania:apothecary_default', [
        'S S',
        ' G ',
        'SSS'
    ], {
        S: 'minecraft:cobblestone',
        G: 'ars_nouveau:source_gem'
    })

    event.remove({ output: 'botania:lexicon' })
    event.shaped('botania:lexicon', [
        ' S ',
        'SBS',
        ' S '
    ], {
        S: 'ars_nouveau:source_gem',
        B: 'minecraft:book'
    })

    // -------------------------------------------------------------------------
    // EPOCH 5 GATING: BLOOD MAGIC
    // Blood Altar requires Terrasteel Ingot from Botania (Epoch 4)
    // -------------------------------------------------------------------------
    event.remove({ output: 'bloodmagic:altar' })
    event.shaped('bloodmagic:altar', [
        'S S',
        'STS',
        'GGG'
    ], {
        S: 'minecraft:stone',
        T: 'botania:terrasteel_ingot',
        G: 'minecraft:gold_ingot'
    })

    // -------------------------------------------------------------------------
    // EPOCH 6 GATING: IRON'S SPELLS 'N SPELLBOOKS
    // Scroll Forge requires Demonic Slate from Blood Magic (Epoch 5)
    // -------------------------------------------------------------------------
    event.remove({ output: 'irons_spellbooks:scroll_forge' })
    event.shaped('irons_spellbooks:scroll_forge', [
        'DDD',
        'SCS',
        'SSS'
    ], {
        D: 'bloodmagic:demonslate',
        S: 'minecraft:stone_bricks',
        C: 'minecraft:crafting_table'
    })

    // -------------------------------------------------------------------------
    // EPOCH 8 GATING: THE UNDERGARDEN
    // Catalyst requires Ambrosium & Zanite from The Aether (Epoch 7)
    // -------------------------------------------------------------------------
    event.remove({ output: 'undergarden:catalyst' })
    event.shaped('undergarden:catalyst', [
        'GAG',
        'AZA',
        'GAG'
    ], {
        G: 'minecraft:gold_ingot',
        A: 'aether:ambrosium_shard',
        Z: 'aether:zanite_gemstone'
    })

    // -------------------------------------------------------------------------
    // EPOCH 10 GATING: APPLIED ENERGISTICS 2 & HOSTILE NEURAL NETWORKS
    // ME Controller & Deep Learner require Netherite Monstrosity drops (Epoch 9)
    // -------------------------------------------------------------------------
    event.remove({ output: 'ae2:controller' })
    event.shaped('ae2:controller', [
        'SES',
        'HCH',
        'SES'
    ], {
        S: 'ae2:smooth_sky_stone_block',
        E: 'ae2:engineering_processor',
        H: 'cataclysm:monstrous_horn',
        C: 'ae2:energy_acceptor'
    })

    event.remove({ output: 'hostilenetworks:deep_learner' })
    event.shaped('hostilenetworks:deep_learner', [
        'ORO',
        'RIR',
        'ORO'
    ], {
        O: 'minecraft:obsidian',
        R: 'minecraft:redstone',
        I: 'cataclysm:ignitium_ingot'
    })

    // AE2 Presses QoL (Craftable on workbench with iron/copper)
    event.shaped('ae2:calculation_processor_press', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:iron_block',
        B: 'minecraft:copper_block',
        C: 'ae2:certus_quartz_crystal'
    })

    event.shaped('ae2:engineering_processor_press', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:iron_block',
        B: 'minecraft:copper_block',
        C: 'minecraft:diamond'
    })

    event.shaped('ae2:logic_processor_press', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:iron_block',
        B: 'minecraft:copper_block',
        C: 'minecraft:gold_ingot'
    })

    event.shaped('ae2:silicon_press', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:iron_block',
        B: 'minecraft:copper_block',
        C: 'minecraft:clay_ball'
    })

    // -------------------------------------------------------------------------
    // EPOCH 11 GATING: PROJECTE
    // Philosopher's Stone requires boss trophies & dimensional relics from Epochs 1-10
    // -------------------------------------------------------------------------
    event.remove({ output: 'projecte:philosophers_stone' })
    event.remove({ output: 'projecte:transmutation_table' })
    event.remove({ output: 'projecte:transmutation_tablet' })

    event.shaped('projecte:philosophers_stone', [
        'ABC',
        'DEF',
        'GHI'
    ], {
        A: 'aether:ambrosium_shard',             // Epoch 7 (Aether)
        B: 'cataclysm:monstrous_horn',           // Epoch 9 (Cataclysm)
        C: 'undergarden:regalium_crystal',       // Epoch 8 (Undergarden)
        D: 'blue_skies:charoite',                // Epoch 8 (Blue Skies)
        E: 'botania:terrasteel_ingot',           // Epoch 4 (Botania)
        F: 'deeperdarker:warden_carapace',       // Epoch 9 (Deeper & Darker)
        G: 'ad_astra:calorite_ingot',            // Epoch 11 (Ad Astra Space)
        H: 'bloodmagic:demonslate',              // Epoch 5 (Blood Magic)
        I: 'ars_nouveau:source_gem'              // Epoch 3 (Ars Nouveau)
    })

    event.shaped('projecte:transmutation_table', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'minecraft:obsidian',
        B: 'projecte:philosophers_stone',
        C: 'cataclysm:ignitium_ingot',
        D: 'minecraft:nether_star',
        E: 'botania:life_essence'
    })

    // -------------------------------------------------------------------------
    // EPOCH 12 GATING: AVARITIA
    // Neutron Collector requires Red Matter from ProjectE (Epoch 11)
    // -------------------------------------------------------------------------
    event.remove({ output: 'avaritia:neutron_collector' })
    event.shaped('avaritia:neutron_collector', [
        'RCR',
        'CQC',
        'RCR'
    ], {
        R: 'projecte:red_matter',
        C: 'minecraft:quartz_block',
        Q: 'minecraft:nether_star'
    })

    console.info('=== 12 Epochs Progression Recipes Loaded Successfully! ===')
})
