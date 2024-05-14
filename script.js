 // Define an object mapping Pokémon types to their Pokémon and images
 var pokemonByType = {
    "FIRE": [
        { name: "Darumaka", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fire/Darumaka.png" },
        { name: "Growlithe", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fire/Growlithe.png" },
        { name: "Heatmor", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fire/Heatmor.png" },
        { name: "Houndour", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fire/Houndour.png" },
        { name: "Litwick", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fire/Litwick.png" },
        { name: "Numel", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fire/Numel.png" },
        { name: "Slugma", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fire/Slugma.png" },
        { name: "Torkoal", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fire/Torkoal.png" },
        { name: "Vulpix", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fire/Vulpix.png" },
        { name: "Fletchinder", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fire/Fletchinder.png" },
        { name: "Growlithe (Hisuian)", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fire/Growlithe%20%28Hisuian%29.png" },
        { name: "Turtonator", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fire/Turtonator.png" },
        { name: "Chimchar", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fire/Chimchar.png" },
        { name: "Litten", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fire/Litten.png" },
        { name: "Scorbunny", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fire/Scorbunny.png" },
        { name: "Sizzlipede", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fire/Sizzlipede.png" },
        { name: "Tepig", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fire/Tepig.png" },
        { name: "Torchic", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fire/Torchic.png" },
        { name: "Fuecoco", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fire/Fuecoco.png" },
        { name: "Larvesta", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fire/Larvesta.png" },
        
      
        // Add more Pokémon with their names and image paths
    ],
    "WATER": [
        { name: "Buizel", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/water/Buizel.png" },
        { name: "Chewtle", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/water/Chewtle.png" },
        { name: "Dewpider", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/water/Dewpider.png" },
        { name: "Ducklett", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/water/Ducklett.png" },
        { name: "Lotad", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/water/Lotad.png" },
        { name: "Panpour", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/water/Panpour.png" },
        { name: "Psyduck", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/water/Psyduck.png" },
        { name: "Sandshrew (Alolan)", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/water/Sandshrew%20(Alolan).png" },
        { name: "Wiglett", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/water/Wiglett.png" },
        { name: "Oshawott", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/water/Oshawott.png" },
        { name: "Piplup", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/water/Piplup.png" },
        { name: "Squirtle", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/water/Squirtle.png" },
        { name: "Spheal", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/water/Spheal.png" },
        { name: "Lapras", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/water/Lapras.png" },
       
        // Add more Pokémon with their names and image paths
    ] ,
    "GRASS": [
        { name: "Bellsprout", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/grass/Bellsprout.png" },
        { name: "Bounsweet", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/grass/Bounsweet.png" },
        { name: "Carnivine", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/grass/Carnivine.png" },
         { name: "Cherubi", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/grass/Cherubi.png" },
        { name: "Cottonee", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/grass/Cottonee.png" },
        { name: "Fomantis", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/grass/Fomantis.png" },
        { name: "Gossifleur", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/grass/Gossifleur.png" },
        { name: "Hoppip", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/grass/Hoppip.png" },
        { name: "Maractus", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/grass/Maractus.png" },
        { name: "Oddish", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/grass/Oddish.png" },
        { name: "Paras", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/grass/Paras.png" },
        { name: "Petilil", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/grass/Petilil.png" },
        { name: "Seedot", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/grass/Seedot.png" },
        { name: "Sewaddle", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/grass/Sewaddle.png" },
        { name: "Smoliv", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/grass/Smoliv.png" },
        { name: "Kartana", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/grass/Kartana.png" },
        
        // Add more Pokémon with their names and image paths
    ],
    "ELECTRIC": [
        { name: "Blitzle", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/electric/Blitzle.png" },
        { name: "Electrike", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/electric/Electrike.png" },
        { name: "Helioptile", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/electric/Helioptile.png" },
        { name: "Joltik", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/electric/Joltik.png" },
        { name: "Mareep", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/electric/Mareep.png" },
        { name: "Shinx", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/electric/Shinx.png" },
        { name: "Yamper", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/electric/Yamper.png" },
        { name: "Emolga", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/electric/Emolga.png" },
        { name: "Oricorio (Pom-Pom)", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/electric/Oricorio%20(Pom-Pom).png" },
        { name: "Pachirisu", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/electric/Pachirisu.png" },
        { name: "Plusle", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/electric/Plusle.png" },
        { name: "Minun", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/electric/Minun.png" },
        { name: "Togedemaru", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/electric/Togedemaru.png" },
        { name: "Zeraora", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/electric/Zeraora.png" },
        { name: "Xurkitree", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/electric/Xurkitree.png" },
        // Add more Pokémon with their names and image paths
    ],

"ICE": [
        { name: "Spheal", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/ice/Spheal.png" },
        { name: "Bergmite", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/ice/Bergmite.png" },
        { name: "Cubchoo", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/ice/Cubchoo.png" },
        { name: "Delibird", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/ice/Delibird.png" },
        { name: "Snorunt", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/ice/Snorunt.png" },
        { name: "Snover", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/ice/Snover.png" },
        { name: "Swinub", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/ice/Swinub.png" },
        { name: "Vanillite", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/ice/Vanillite.png" },
        { name: "Eiscue", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/ice/Eiscue.png" },
        { name: "Darumaka (Galarian)", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/ice/Darumaka%20(Galarian).png" },
        { name: "Snom", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/ice/Snom.png" },
        { name: "Vulpix (Alolan)", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/ice/Vulpix%20(Alolan).png" },
        { name: "Frigibax", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/ice/Frigibax.png" },
        { name: "Lapras", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/water/Lapras.png" },
       
        // Add more Pokémon with their names and image paths
    ] ,
    "FIGHTING": [
        { name: "Pancham", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fighting/Pancham.png" },
        { name: "Clobbopus", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fighting/Clobbopus.png" },
        { name: "Croagunk", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fighting/Croagunk.png" },
        { name: "Meditite", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fighting/Meditite.png" },
        { name: "Scraggy", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fighting/Scraggy.png" },
        { name: "Throh", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fighting/Throh.png" },
        { name: "Sawk", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fighting/Sawk.png" },
        { name: "Stufful", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fighting/Stufful.png" },
        { name: "Kubfu", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fighting/Kubfu.png" },
        { name: "Hawlucha", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fighting/Hawlucha.png" },
        { name: "Mankey", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fighting/Mankey.png" },
        { name: "Mienfoo", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fighting/Mienfoo.png" },
        { name: "Squawkabilly (Blue)", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fighting/Squawkabilly%20%28Blue%29.png" },
        { name: "Squawkabilly (Green)", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fighting/Squawkabilly%20%28Green%29.png" },
        { name: "Tauros (Combat)", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fighting/Tauros%20%28Combat%29.png" },
        { name: "Tauros (Aqua)", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fighting/Tauros%20%28Aqua%29.png" },
        { name: "Tauros (Blaze)", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fighting/Tauros%20%28Blaze%29.png" },
        { name: "Buzzwole", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/fighting/Buzzwole.png" },
        
      
        // Add more Pokémon with their names and image paths
    ]   ,
    "POISON": [
        { name: "Foongus", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/poison/Foongus.png" },
        { name: "Morelull", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/poison/Morelull.png" },
        { name: "Venipede", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/poison/Venipede.png" },
        { name: "Weedle", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/poison/Weedle.png" },
        { name: "Bulbasaur", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/poison/Bulbasaur.png" },
        { name: "Spinarak", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/bug/Spinarak.png" },
        { name: "Shroodle", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/bug/Shroodle.png" },
        { name: "Nidoran (F)", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/grass/Nidoran%20(F).png" },
        { name: "Nidoran (M)", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/grass/Nidoran%20(M).png" },
        { name: "Oddish", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/grass/Oddish.png" },
        
        // Add more Pokémon with their names and image paths
    ]   ,
    "GROUND": [
        { name: "coming soon", image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Comingsoon.png" },
        // Add more Pokémon with their names and image paths
    ]   ,
    "FLYING": [
        { name: "Chatot", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Chatot.png" },
        { name: "Doduo", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Doduo.png" },
        { name: "Hoothoot", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Hoothoot.png" },
        { name: "Pidgey", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Pidgey.png" },
        { name: "Pidove", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Pidove.png" },
        { name: "Pikipek", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Pikipek.png" },
        { name: "Rookidee", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Rookidee.png" },
        { name: "Spearow", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Spearow.png" },
        { name: "Starly", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Starly.png" },
        { name: "Swablu", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Swablu.png" },
        { name: "Taillow", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Taillow.png" },
        { name: "Murkrow", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Murkrow.png" },
        { name: "Vullaby", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Vullaby.png" },
        { name: "Natu", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Natu.png" },
         { name: "Skarmory", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Skarmory.png" },
        { name: "Squawkabilly (White)", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Squawkabilly%20(White).png" },
        { name: "Squawkabilly (Yellow)", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Squawkabilly%20(Yellow).png" },
        { name: "Yanma", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Yanma.png" },
        { name: "Bombirdier", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Bombirdier.png" },
         { name: "Gligar", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Gligar.png" },

        // Add more Pokémon with their names and image paths
    ] ,
    "PSYCHIC": [
        { name: "coming soon", image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Comingsoon.png" },
        // Add more Pokémon with their names and image paths
    ]   ,
    "BUG": [
        { name: "Blipbug", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/bug/Blipbug.png" },
        { name: "Burmy (Plant)", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/bug/Burmy%20%28Plant%29.png" },
        { name: "Caterpie", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/bug/Caterpie.png" },
        { name: "Grubbin", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/bug/Grubbin.png" },
        { name: "Scatterbug", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/bug/Scatterbug.png" },
        { name: "Sewaddle", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/bug/Sewaddle.png" },
        { name: "Spinarak", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/bug/Spinarak.png" },
        { name: "Venipede", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/bug/Venipede.png" },
        { name: "Weedle", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/bug/Weedle.png" },
        { name: "Wurmple", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/bug/Wurmple.png" },
        { name: "Combee", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/bug/Combee.png" },
        { name: "Grubbin", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/bug/Grubbin.png" },
        { name: "Skorupi", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/bug/Skorupi.png" },
        { name: "Tarountula", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/bug/Tarountula.png" },
         { name: "Pinsir", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/bug/Pinsir.png" },
         { name: "Paras", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/grass/Paras.png" },
       
        // Add more Pokémon with their names and image paths
    ]   ,
    "ROCK": [
        { name: "Dwebble", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/rock/dwebble.png" },
        { name: "Roggenrola", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/rock/Roggenrola.png" },
        { name: "Rolycoly", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/rock/Rolycoly.png" },
        { name: "Carbink", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/rock/Carbink.png" },
        { name: "Lunatone", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/rock/Lunatone.png" },
        { name: "Nosepass", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/rock/Nosepass.png" },
        { name: "Onix", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/rock/Onix.png" },
        { name: "Relicanth", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/rock/Relicanth.png" },
        { name: "Solrock", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/rock/Solrock.png" },
        { name: "Stonjourner", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/rock/Stonjourner.png" },
        { name: "Binacle", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/rock/Binacle.png" },
        { name: "Zygarde (Core)", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/rock/Zygarde (Core).png" },
        { name: "Larvitar", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/rock/Larvitar.png" },
        { name: "Stakataka", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/rock/Stakataka.png" },
        // Add more Pokémon with their names and image paths
    ]
    ,
    "GHOST": [
        { name: "coming soon", image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Comingsoon.png" },
        // Add more Pokémon with their names and image paths
    ]
    ,
    "DRAGON": [
        { name: "coming soon", image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Comingsoon.png" },
        // Add more Pokémon with their names and image paths
    ]    ,
    "DARK": [
        { name: "coming soon", image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Comingsoon.png" },
        // Add more Pokémon with their names and image paths
    ]   ,
    "STEEL": [
        { name: "Bronzor", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/steel/Bronzor.png" },
        { name: "Cufant", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/steel/Cufant.png" },
        { name: "Ferroseed", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/steel/Ferroseed.png" },
        { name: "Klink", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/steel/Klink.png" },
        { name: "Klefki", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/steel/Klefki.png" },
        { name: "Magnemite", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/steel/Magnemite.png" },
        { name: "Mawile", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/steel/Mawile.png" }, 
        { name: "Durant", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/steel/Durant.png" },
        { name: "Duraludon", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/steel/Duraludon.png" },
        { name: "Metang", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/steel/Metang.png" }, 
        { name: "Registeel", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/steel/Registeel.png" } ,
        
        // Add more Pokémon with their names and image paths
    ]   ,
    "FAIRY": [
        { name: "coming soon", image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Comingsoon.png" },
        // Add more Pokémon with their names and image paths
    ]
    ,
    "NORMAL": [
        { name: "Chatot", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Chatot.png" },
        { name: "Doduo", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Doduo.png" },
        { name: "Hoothoot", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Hoothoot.png" },
        { name: "Pidgey", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Pidgey.png" },
        { name: "Pidove", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Pidove.png" },
        { name: "Pikipek", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Pikipek.png" },
        { name: "Rookidee", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Rookidee.png" },
        { name: "Spearow", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Spearow.png" },
        { name: "Starly", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Starly.png" },
        { name: "Swablu", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Swablu.png" },
        { name: "Taillow", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Taillow.png" },
        { name: "Drampa", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Drampa.png" },
        { name: "Rufflet", image: "https://raw.githubusercontent.com/arrowgtr/pokemontypes/main/source/Flying-normal/Rufflet.png" },
      
        // Add more Pokémon with their names and image paths
    ]
    // Add more Pokémon types with their Pokémon and images as needed
};

// Function to show the list of Pokémon of the selected type
function showPokemonList() {
    var selectedType = document.getElementById("options").value;
    var pokemonList = pokemonByType[selectedType];
    var container = document.getElementById("pokemonListContainer");
    container.innerHTML = ""; // Clear previous content

    if (pokemonList && pokemonList.length > 0) {
      

        var table = document.createElement("table");
        table.innerHTML = "</tr><tr><th>Pokémon</th><th>Image</th></tr>";

        pokemonList.forEach(function(pokemon) {
            var row = table.insertRow();
            var nameCell = row.insertCell();
            nameCell.textContent = pokemon.name;
            var imageCell = row.insertCell();
            var img = document.createElement("img");
            img.src = pokemon.image;
            img.alt = pokemon.name;
            img.style.maxWidth = "40px"; // Adjust image size as needed
            imageCell.appendChild(img);
        });

        container.appendChild(table);
    } else {
        container.textContent = "No Pokémon of this type available.";
    }
}
