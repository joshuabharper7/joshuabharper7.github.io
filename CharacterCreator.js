// Array of races, classes, subclasses, and backgrounds
const levels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const genders = ["male", "female"];
const names = {
    maleFirstNames: [
        'Alden', 'Thorn', 'Kael', 'Cassian', 'Drystan', 'Finnian', 'Lysander', 'Rhys', 'Valerian', 'Zephyr', 'Caelum', 'Ryker', 'Lirion', 'Emeric', 'Orin', 'Tristan', 'Gareth', 'Darian', 'Rowan', 'Bastian', 'Gideon',
        'Aldric', 'Javan', 'Corin', 'Quinlan', 'Evander', 'Perrin', 'Kieran', 'Daxton', 'Aurelian', 'Lorcan', 'Soren', 'Reid', 'Azriel', 'Lucien', 'Nikolai', 'Cedric', 'Eamon', 'Devlin', 'Tharin', 'Roran', 'Ezio', 'Tobias',
        'Aldenon', 'Gavriel', 'Leandros', 'Ronan', 'Kaelin', 'Baelor', 'Trystan', 'Aldenar', 'Merek', 'Khalen', 'Thorne', 'Cedron', 'Zador', 'Ryland', 'Varian', 'Quillon', 'Hawke', 'Dresden', 'Xavier', 'Dairon',
        'Baelon', 'Renly', 'Kaelari', 'Bardan', 'Sarion', 'Rendon', 'Thalion', 'Korin', 'Ryden', 'Tarron', 'Baelorin', 'Elion', 'Valenar', 'Emryk', 'Thorinon', 'Kastor', 'Rhenar', 'Kiron', 'Brennan', 'Davian', 'Lorand',
        'Vaelin', 'Kairon', 'Haldor', 'Aksel', 'Myron', 'Elianar', 'Ryslan', 'Travan', 'Arias', 'Seraph', 'Eldric', 'Brennon', 'Caelinor', 'Tavion', 'Korban', 'Elarion', 'Cassion', 'Donovan', 'Jarek', 'Valdor',
        'Sorenus', 'Korvin', 'Baelamir', 'Thadron', 'Aureon', 'Rhovan', 'Tallis', 'Garan', 'Daelen', 'Kelton', 'Rykar', 'Zayn', 'Harkin', 'Kyras', 'Aldricus', 'Baelric', 'Ulric', 'Rhivan', 'Dorian', 'Ravion',
        'Kaedon', 'Velrian', 'Tharon', 'Caelarion', 'Tyren', 'Baelin', 'Kaelavar', 'Elderon', 'Syrus', 'Khalion', 'Galadon', 'Dargan', 'Karlon', 'Baelricus', 'Malakar', 'Eldrin', 'Sylvan', 'Raelor', 'Korinor',
        'Aldricorn', 'Zarion', 'Kethan', 'Drexel', 'Fendrel', 'Quillon', 'Bryant', 'Varenth', 'Astorin', 'Wystan', 'Rostam', 'Dexon', 'Baelinor', 'Zaelon', 'Corvus', 'Haldon', 'Elrik', 'Kaelaric', 'Eldros', 'Caliban',
        'Ryloth', 'Zandor', 'Alaric', 'Varro', 'Sylandor', 'Baldrick', 'Thaleon', 'Tybalt', 'Grendan', 'Cyprian', 'Morrigan', 'Zephyros', 'Kelvorn', 'Ryshen', 'Vaelorin', 'Theros', 'Brynmor', 'Gawain', 'Eldaros', 'Baelion',
        'Kemarr', 'Vaelen', 'Thadur', 'Aedan', 'Zandrik', 'Kaelorin', 'Bromir', 'Daelrick', 'Xandor', 'Maelorin', 'Kaelvor', 'Vaelanor', 'Thalean', 'Eldrion', 'Zanderon', 'Ryshar', 'Baelrian', 'Grendor', 'Cassir',
        'Kaelanor', 'Daelorin', 'Rylothar', 'Avalon', 'Tybaldor', 'Zanthar', 'Keiran', 'Vaelaron', 'Calderon', 'Trevan', 'Gavain', 'Dexar', 'Maelor', 'Kainan', 'Rykanor', 'Thadrik', 'Baelron', 'Zyron', 'Korrin',
        'Daelorn', 'Vaeloran', 'Baelmor', 'Kelvar', 'Thaleor', 'Rystan', 'Zandorin', 'Vaeron', 'Calidor', 'Kaelon', 'Davon', 'Maelorn', 'Eldran', 'Thaedin', 'Zyrion', 'Korrick', 'Vaelar', 'Rythor', 'Baelrik',
        'Thordar', 'Alderon', 'Kaldor', 'Baelgrin', 'Vaelrin', 'Rylandor', 'Eldarian', 'Caldrin', 'Zyreth', 'Dagon', 'Valdorin', 'Kormac', 'Bralon', 'Aldaron', 'Hylandor', 'Gavorn', 'Zandalar', 'Thalonis', 'Keldor', 'Eldaron',
        'Thalrich', 'Aldaris', 'Korvair', 'Baelonius', 'Vaelmont', 'Rysarth', 'Tharion', 'Drexar', 'Valenaric', 'Kordan', 'Baelorik', 'Varianus', 'Eldros', 'Coralon', 'Zyphrus', 'Baelgrim', 'Vastrin', 'Ryken', 'Eldricus',
        'Kalrak', 'Borion', 'Randalor', 'Grendorin', 'Zandorik', 'Tharador', 'Baelarik', 'Valeron', 'Erikson', 'Callum', 'Zyronos', 'Kaelmar', 'Davaris', 'Maelorick', 'Rykus', 'Thalgrim', 'Vaelrog', 'Cedronus',
        'Zarion', 'Evarik', 'Baelorius', 'Vaelenon', 'Kaldrik', 'Daelric', 'Thornor', 'Rystanor', 'Zakar', 'Baelorian', 'Vaelricus', 'Aldarion', 'Kendar', 'Bryndorin', 'Eldarick', 'Caldrick', 'Zaridian', 'Galdoros',
        'Thalonor', 'Baelthorn', 'Vaelandor', 'Rysharok', 'Eldor', 'Kormin', 'Bradan', 'Aldorius', 'Hyldorin', 'Gavainor', 'Zephron', 'Dakar', 'Valdoran', 'Korial', 'Bralorn', 'Galadric', 'Zorphus', 'Thorus'
    ],
    femaleFirstNames: [
        "Seraphina", "Elowen", "Thalia", "Lysandra", "Calista", "Isabeau", "Evadne", "Rowena", "Ariadne", "Amara", "Elara", "Lyra", "Fiora",
        "Morwenna", "Cressida", "Elysia", "Selene", "Melisande", "Lilith", "Aurelia", "Maelle", "Iliana", "Sylvana", "Elara", "Hermione", "Evangeline",
        "Phaedra", "Darielle", "Nerida", "Astraea", "Odessa", "Meliora", "Leocadia", "Ginevra", "Isolde", "Aveline", "Theodosia", "Ysolde", "Zephyrine",
        "Esmeralda", "Thalassa", "Orinthia", "Elowen", "Endellion", "Tanith", "Merewen", "Xanthe", "Tallulah", "Saoirse", "Cassiopeia", "Vespera",
        "Amarantha", "Cerelia", "Althea", "Naiara", "Rhiannon", "Arista", "Evanthe", "Isannah", "Mirella", "Tullia", "Olivetta", "Quintessa", "Romilda",
        "Zephirine", "Idony", "Eirlys", "Gwyneira", "Aleris", "Eirian", "Nerissa", "Thessalia", "Noelia", "Xylia", "Zephyra", "Zariah", "Fioralba", "Cyra",
        "Merula", "Nerine", "Thalassia", "Malva", "Seraphine", "Eirlys", "Phaedra", "Ceridwen", "Iseult", "Delphine", "Amalthea", "Ferelith", "Kerensa", 
        "Ilysia", "Idalia", "Thalassa", "Elowyn", "Altheia", "Ilaria", "Isolena", "Amarina", "Oriana", "Evelina", "Melantha", "Cordelia", "Valeriana", 
        "Elysiana", "Aroha", "Serenelle", "Ismeria", "Aurielle", "Lyrisa", "Vaelora", "Thalora", "Eirabella", "Ismerelda", "Oleandra", "Seraphita", 
        "Vaeloria", "Thessara", "Amaranthea", "Ysadora", "Iliania", "Eloweth", "Isolara", "Lyrielle", "Calantha", "Phaedrielle", "Thalara", "Avelia", 
        "Meliorana", "Evanie", "Nerithia", "Elysara", "Zephira", "Cassiara", "Fyrella", "Aerilyn", "Delain", "Mirabelle", "Celestia", "Ariadnel", "Ravenna", 
        "Isolind", "Vesperine", "Thalara", "Eliora", "Calantha", "Lysandria", "Amarantha", "Thessara", "Fiorella", "Aureliana", "Sylvienne", "Elowyn", 
        "Cassandra", "Morvanna", "Leandra", "Eveloria", "Amarisa", "Rhoswen", "Avalonia", "Elysandria", "Persephone", "Andromeda", "Isadora", "Elara", 
        "Alandra", "Melisara", "Zephyra", "Galatea", "Seraphine", "Aureline", "Evadelle", "Calanthe", "Lyria", "Mirelle", "Thalassia", "Faela", "Elidora", 
        "Seraphiel", "Valeriana", "Eirianthe", "Caelia", "Amaryl"
      ],
      lastNames: [
        "Silverwood", "Frostbane", "Windchaser", "Dragonscale", "Stormforged", "Ravencrest", "Oakenshield", "Starfall", "Moonshadow", "Thunderheart", "Dragonflame", "Mistweaver", "Whisperwind", "Ironhammer", 
        "Shadowstrike", "Fireblood", "Iceflame", "Stormrage", "Shadowthorn", "Sundreamer", "Everbright", "Swiftarrow", "Goldensong", "Wildheart", "Winterblaze", "Frostfury", "Skyweaver", "Soulforge", "Lionheart", 
        "Brightstar", "Stargazer", "Dreamweaver", "Sunfire", "Silvershadow", "Falconcrest", "Hawkeye", "Stormbringer", "Thundersong", "Greythorne", "Emberheart", "Shadowdancer", "Duskblade", "Moonwhisper", "Skybreaker", 
        "Starfury", "Nightshroud", "Swordflame", "Frostspire", "Silvermoon", "Mistwalker", "Stormcaller", "Sunshard", "Riftstorm", "Darkthorn", "Flamecrest", "Wintermoon", "Whitewind", "Wyrmslayer", "Sunshard", 
        "Ironheart", "Bloodmoon", "Shadowfang", "Thornblade", "Dragonfire", "Darkbane", "Windwalker", "Frostbloom", "Ghostveil", "Sunshadow", "Moonwind", "Darkflame", "Evernight", "Nightstalker", "Wintershade", "Skyblade", 
        "Soulthorn", "Sapphireheart", "Voidcatcher", "Runeblaze", "Loreweaver", "Soulreaper", "Nightblade", "Dreamweft", "Celestialsong", "Dreadwalker", "Whispershade", "Bloodcry", "Starshaper", "Winterborn", "Stormrend", 
        "Hallowgrave", "Shadownova", "Blazefury", "Everdusk", "Mournhold", "Frostsong", "Abyssheart", "Aurorblade", "Whirlspire", "Ghoulbane", "Sunshroud", "Vortexbreak", "Hallowsoul", "Sorrowspell", "Dragonhowl", 
        "Nighthaven", "Mistshroud", "Silentwatch", "Blightstrike", "Heartforge", "Spiritflame", "Thornrift", "Gloomstalker", "Harrowlight", "Lifewraith", "Grayfrost", "Starflayer", "Frostthorn", "Moonfury", "Silverthorn", 
        "Duskblade", "Shadowcloak", "Earthbloom", "Flamestrike", "Icewhisper", "Stormblade", "Nightshade", "Wildfire", "Starflame", "Lifedream", "Stormcloak", "Wintermoon", "Auroraheart", "Stardream", "Soulshard", 
        "Thundercloud", "Mistysong", "Swordshield", "Dreamcaster", "Darkphoenix", "Emberstorm", "Desertwind", "Dragonsong", "Shadowmoon", "Frostfire", "Whispershade", "Silentwood", "Blazewater", "Nightflame", "Frostveil", 
        "Lightningrod", "Thunderstone", "Moonwater", "Bloodmoon", "Darkfrost", "Greyfury", "Voidwhisper", "Emeraldwind", "Mysticflame", "Rainbloom", "Bladewood", "Thunderheart", "Fireforge", "Mistwalker", "Shadowstrike", 
        "Nightbloom", "Silvershade", "Ravensong", "Stargazer", "Soulslayer", "Frostflame", "Moonwhisperer", "Stormbringer", "Dragonshadow", "Starfury", "Winterbane", "Dawnthorn", "Frostwhisper", "Nightflame", "Thornbloom", 
        "Sorrowsong", "Dreamwielder", "Silverstorm", "Shadowdancer", "Wyrmblade", "Frostveil", "Dreamweaver", "Steelheart", "Nightshade", "Blazewood", "Whisperingwind", "Emberheart", "Starwalker", "Stormbringer", "Froststrike", 
        "Duskshadow", "Lightrunner", "Runeblade", "Firethorn", "Shadowbane", "Thornweaver", "Silvershade", "Moonriver", "Nightstalker", "Stormcaller", "Darkflame", "Silentwind", "Wintershadow", "Dragonheart", "Skyfire", 
        "Mistwalker", "Voidwhisper", "Frostblade", "Darkmoon", "Dreamweaver", "Soulshadow", "Frostwind", "Thunderstrike", "Wolfsbane", "Starlight", "Soulfire", "Darkwolf", "Burningheart", "Frostwhisper", "Nightflame", "Stormrunner", 
        "Ironbane", "Skyshadow", "Silvermoon", "Thornshade", "Darkthorn", "Whitewolf", "Bloodmoon", "Duskblade", "Firestorm", "Emberflame", "Nightwhisper", "Shadowheart", "Icewind", "Steelthorn", "Moonblade", "Silentstorm", 
        "Shadowflame", "Firestorm", "Nightshade", "Thundershield", "Silentflame", "Shadowfury", "Winterbreeze", "Moonshadow", "Silentthorn", "Wolfsong", "Thunderthorn", "Silentmoon", "Frostflame", "Stormfury", "Darkthorn", 
        "Frostblade", "Icemist", "Silentdusk", "Firewhisper", "Shadowbreeze", "Blazefury", "Nightwalker", "Darkshadow", "Stormsinger", "Frostflame", "Silverblade", "Moonlight", "Soulshadow", "Thornshadow", "Darkflame", 
        "Lightningstrike", "Stormbringer", "Darksong", "Nightfury", "Silverfrost", "Fireheart", "Shadowstrike", "Thornbreeze", "Wintermoon", "Nightshadow", "Silentmoon", "Frostshade", "Dreamshadow", "Stormshadow", "Thunderflame", 
        "Darkmoon", "Brightflame", "Wolffire", "Moonshadow", "Thundermoon", "Silentfrost", "Stormblaze", "Duskshadow", "Firestorm", "Nightwhisper"
      ]
}
const races = ["Aarakocra", "Aasimar", "Air Genasi", "Astral Elf", "Autognome", "Bugbear", "Centaur", "Changling", "Deep Gnome", "Dragonborn", "Duergar", "Hill Dwarf", "Mountain Dwarf", "Gray Dwarf", "Earth Genasi", "Eladrin", "High Elf", "Wood Elf", "Eladrin Elf", "Dark Elf", "Fairy", "Firbolg", "Fire Genasi", "Water Genasi", "Giff", "Githyanki", "Githzerai", "Deep Gnome", "Forest Gnome", "Rock Gnome", "Goblin", "Goliath", "Hadozee", "Half-Elf", "Half-Orc", "Ghostwise Halfling", "Lightfoot Halfling", "Stout Halfling", "Harengon", "Hobgoblin", "Variant Human", "Human", "Kalashtar", "Kender", "Kenku", "Kobold", "Lizardfolk", "Loxodon", "Minotaur", "Orc", "Orc of Eberron", "Plasmoid", "Satyr", "Sea Elf", "Shadar-kai", "Beasthide Shifter", "Shifter", "Longtooth Shifter", "Swiftstride Shifter", "Wildhunt Shifter", "Simic Hybrid", "Tabaxi", "Thri-kreen", "Tiefling", "Feral Tiefling", "Variant Feral Tiefling", "Variant Tiefling", "Tortle", "Variant Aasimar", "Vedalken", "Warforged", "Yuan-ti"];
const classes = ["Artificer", "Barbarian", "Bard", "BloodHunter", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];
const subclasses = {
    Artificer: ["Alchemist", "Armorer", "Artillerist", "Battle Smith"],
    Barbarian: ["Path of Wild Magic", "Path of the Ancestral Guardian", "Path of the Battlerager", "Path of the Beast", "Path of the Berserker", "Path of the Giant", "Path of Storm Herald", "Path of the Totem Warrior", "Path of the Zealot", "Path of the Juggernaut"],
    Bard: ["College of Creation", "College of Glamour", "College of Lore", "College of Swords", "College of Valor", "College of Whispers", "College of Eloquence", "College of Tragedy"],
    BloodHunter: ["Order of the Ghostslayer", "Order of the Lycan", "Order of the Mutant", "Order of the Profane Soul", "Order of the Profane Soul(INT)", "Order of the Profane Soul(WIS)"],
    Cleric: ["Arcana Domain", "Death Domain", "Forge Domain", "Order Domain", "Grave Domain", "Knowledge Domain", "Life Domain", "Light Domain", "Nature Domain", "Peace Domain", "Blood Domain", "Moon Domain", "Tempest Domain", "Trickery Domain", "Twilight Cleric", "War Domain"],
    Druid: ["Circle of Dreams", "Circle of Stars", "Circle of Wildfire", "Circle of the Land(Artic)", "Circle of the Land(Coast)", "Circle of the Land(Desert)", "Circle of the Land(Forest)", "Circle of the Land(Grassland)", "Circle of the Land(Mountain)", "Circle of the Land(Swamp)", "Circle of the Land(Underdark)", "Circle of the Moon", "Circle of the Shepherd", "Circle of Spores", "Circle of the Blighted"],
    Fighter: ["Arcane Archer", "Battle Master", "Gunslinger", "Cavalier", "Champion", "Eldritch Knight", "Psi Warrior", "Purple Dragon Knight", "Rune Knight", "Samurai"],
    Monk: ["Way of the Cobalt Soul", "Way of Mercy", "Way of Shadow", "Way of the Astral Self", "Way of the Drunken Master", "Way of the Four Elements", "Way of the Kensei", "Way of the Long Death", "Way of the Open Hand", "Way of the Sun Soul"],
    Paladin: ["Oath of Glory", "Oath of Conquest", "Oath of Devotion", "Oath of Redemption", "Oath of Vengeance", "Oath of the Ancients", "Oath of the Crown", "Oath of the Watchers", "Oathbreaker", "Oath of the Open Sea"],
    Ranger: ["Beast Master", "Fey Wanderer", "Gloom Stalker", "Horizon Walker", "Hunter", "Monster Slayer", "Swarmkeeper"],
    Rogue: ["Arcane Trickster", "Assassin", "Inquisitive", "Mastermind", "Phantom", "Scout", "Soulknife", "Swashbuckler", "Thief"],
    Sorcerer: ["Aberrant Mind", "Clockwork Soul", "DIvine Soul", "Draconic Bloodline", "Shadow Magic", "Lunar Sorcery", "Storm Sorcery", "Runechild", "Wild Magic"],
    Warlock: ["The Archfey", "The Celestial", "The Fathomless", "The Fiend", "The Genie", "The Great Old One", "The Hexblade", "The Undying"],
    Wizard: ["Bladesinger", "Order of Scribes", "School of Abjuration", "School of Conjuration", "School of Divination", "School of Enchantment", "School of Evocation", "School of Illusion", "School of Necromancy", "School of Transmutation", "Blood Magic", "War Magic"]
};
const backgrounds = ["Acolyte", "Ashari", "Azorius Functionary", "Boros Legionnaire", "Charlatan", "City Watch/Investigator", "Clan Crafter", "Clasp Member", "Cloistered Scolar", "Courtier", "Criminal/Spy", "Dimir Operative", "Entertainer", "Faction Agent", "Far Traveler", "Feylost", "Folk Hero", "Giant Foundling", "Gladiator", "Golgari Agent", "Gruul Anarch", "Guild Artisan/Guild Merchant", "Haunted One", "Hermit", "Inheritor", "Izzet ENgineer", "Knight", "Knight of Solamnia", "Knight of the Order", "Lyceum Scolar", "Mage of High Sorcery", "Mercenary Veteran", "Noble", "Orzhov Representative", "Outlander", "Pirate", "Rakdos Cultist", "Reformed Cultist", "Rune Carver", "Sage", "Sailor", "Selesnya Initiate", "Simic Scientist", "Soldier", "Urban Bounty Hunter", "Urchin", "Uthgardt Tribe Member", "Waterdhavian Noble", "Whitestone Rifle Corps/Grey Hunter", "WItchlight Hand"];

function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for (i = L; i >= 0; i--) {
        selectElement.remove(i);
    }
}

function FillLevelsDdl() {
    var ddlLevels = document.getElementById('levels');
    removeOptions(ddlLevels);

    var defaultOpt = document.createElement('option');
    defaultOpt.value = "";
    defaultOpt.innerHTML = "Select a Level";
    ddlLevels.appendChild(defaultOpt);

    for (var i = 0; i < levels.length; i++) {
        var opt = document.createElement('option');
        opt.value = levels[i];
        opt.innerHTML = levels[i];
        ddlLevels.appendChild(opt);
    }
}

function FillRacesDdl() {
    var ddlRaces = document.getElementById('races');
    removeOptions(ddlRaces);

    var defaultOpt = document.createElement('option');
    defaultOpt.value = "";
    defaultOpt.innerHTML = "Select a Race";
    ddlRaces.appendChild(defaultOpt);

    for (var i = 0; i < races.length; i++) {
        var opt = document.createElement('option');
        opt.value = races[i];
        opt.innerHTML = races[i];
        ddlRaces.appendChild(opt);
    }
}

function FillClassDdl() {
    var ddlClasses = document.getElementById('classes');
    removeOptions(ddlClasses);

    var defaultOpt = document.createElement('option');
    defaultOpt.value = "";
    defaultOpt.innerHTML = "Select a Class";
    ddlClasses.appendChild(defaultOpt);

    for (var i = 0; i < classes.length; i++) {
        var opt = document.createElement('option');
        opt.value = classes[i];
        opt.innerHTML = classes[i];
        ddlClasses.appendChild(opt);
    }
}

function FillSubclassDdl(selectedClass) {
    var ddlSubclasses = document.getElementById('subclasses');
    var isDefault = false;
    removeOptions(ddlSubclasses);

    var defaultOpt = document.createElement('option');
    defaultOpt.value = "";
    defaultOpt.innerHTML = "Select a Subclass";
    ddlSubclasses.appendChild(defaultOpt);

    var selectedClassArray;

    switch (selectedClass) {
        case "Artificer":
            selectedClassArray = subclasses.Artificer
            break;
        case "Barbarian":
            selectedClassArray = subclasses.Barbarian
            break;
        case "Bard":
            selectedClassArray = subclasses.Bard
            break;
        case "BloodHunter":
            selectedClassArray = subclasses.BloodHunter
            break;
        case "Cleric":
            selectedClassArray = subclasses.Cleric
            break;
        case "Druid":
            selectedClassArray = subclasses.Druid
            break;
        case "Fighter":
            selectedClassArray = subclasses.Fighter
            break;
        case "Monk":
            selectedClassArray = subclasses.Monk
            break;
        case "Paladin":
            selectedClassArray = subclasses.Paladin
            break;
        case "Ranger":
            selectedClassArray = subclasses.Ranger
            break;
        case "Rogue":
            selectedClassArray = subclasses.Rogue
            break;
        case "Sorcerer":
            selectedClassArray = subclasses.Sorcerer
            break;
        case "Warlock":
            selectedClassArray = subclasses.Warlock
            break;
        case "Wizard":
            selectedClassArray = subclasses.Wizard
            break;
        default:
            isDefault = true;
    }

    if (isDefault == false) {
        for (var i = 0; i < selectedClassArray.length; i++) {
            var opt = document.createElement('option');
            opt.value = selectedClassArray[i];
            opt.innerHTML = selectedClassArray[i];
            ddlSubclasses.appendChild(opt);
        }
    }
}

function FillBackgroundDdl() {
    var ddlBackground = document.getElementById('background');
    removeOptions(ddlBackground);

    var defaultOpt = document.createElement('option');
    defaultOpt.value = "";
    defaultOpt.innerHTML = "Select a Background";
    ddlBackground.appendChild(defaultOpt);

    for (var i = 0; i < backgrounds.length; i++) {
        var opt = document.createElement('option');
        opt.value = backgrounds[i];
        opt.innerHTML = backgrounds[i];
        ddlBackground.appendChild(opt);
    }
}

function ResetSetup(randomCheckboxLevel, randomCheckboxGender, randomCheckboxName, randomCheckboxRace, randomCheckboxClass, randomCheckboxSubclass, randomCheckboxBackground, ddlLevels, ddlGenders, txtName, ddlRaces, ddlClasses, ddlSubclasses, ddlBackground) {
    randomCheckboxLevel.checked = false;
    randomCheckboxGender.checked = false;
    randomCheckboxName.checked = false;
    randomCheckboxRace.checked = false;
    randomCheckboxClass.checked = false;
    randomCheckboxSubclass.checked = false;
    randomCheckboxBackground.checked = false;
    ddlLevels.disabled = false;
    ddlGenders.disabled = false;
    txtName.disabled = false;
    ddlRaces.disabled = false;
    ddlClasses.disabled = false;
    ddlSubclasses.disabled = false;
    ddlBackground.disabled = false;
    ddlLevels.value = "";
    ddlGenders.value = "";
    txtName.value = "";
    ddlRaces.value = "";
    ddlClasses.value = "";
    ddlBackground.value = "";
    document.getElementById('characterDetails').style.display = 'none';

    removeOptions(ddlSubclasses);
    AdjustColors("#d4af37", "#bf3f3f");
    var opt = document.createElement('option');
    opt.value = "";
    opt.innerHTML = "Select A Subclass";
    ddlSubclasses.appendChild(opt);
}

document.addEventListener("DOMContentLoaded", function () {
    const randomCheckbox = document.getElementById('chkRandom');
    const randomCheckboxLevel = document.getElementById('chkRandomLevel');
    const randomCheckboxGender = document.getElementById('chkRandomGender');
    const randomCheckboxName = document.getElementById('chkRandomName');
    const randomCheckboxRace = document.getElementById('chkRandomRace');
    const randomCheckboxClass = document.getElementById('chkRandomClass');
    const randomCheckboxSubclass = document.getElementById('chkRandomSubclass');
    const randomCheckboxBackground = document.getElementById('chkRandomBackground');
    const manualSelection = document.getElementById('manualSelection');
    const ddlLevels = document.getElementById('levels');
    const ddlGenders = document.getElementById('genders');
    const txtName = document.getElementById('txtName');
    const ddlRaces = document.getElementById('races');
    const ddlClasses = document.getElementById('classes');
    const ddlSubclasses = document.getElementById('subclasses');
    const ddlBackground = document.getElementById('background');

    randomCheckbox.addEventListener('change', function () {
        ResetSetup(randomCheckboxLevel, randomCheckboxGender, randomCheckboxName, randomCheckboxRace, randomCheckboxClass, randomCheckboxSubclass, randomCheckboxBackground, ddlLevels, ddlGenders, txtName, ddlRaces, ddlClasses, ddlSubclasses, ddlBackground);
        if (this.checked) {
            console.log("Checkbox is checked..");
            manualSelection.style.display = 'none';
        } else {
            console.log("Checkbox is not checked..");
            manualSelection.style.display = '';
        }
    });

    randomCheckboxLevel.addEventListener('change', function () {
        if (this.checked) {
            console.log("Checkbox is checked..");
            ddlLevels.disabled = true;
        } else {
            console.log("Checkbox is not checked..");
            ddlLevels.disabled = false;
        }
    });

    randomCheckboxGender.addEventListener('change', function () {
        if (this.checked) {
            console.log("Checkbox is checked..");
            ddlGenders.disabled = true;
        } else {
            console.log("Checkbox is not checked..");
            ddlGenders.disabled = false;
        }
    });

    randomCheckboxName.addEventListener('change', function () {
        if (this.checked) {
            console.log("Checkbox is checked..");
            txtName.disabled = true;
        } else {
            console.log("Checkbox is not checked..");
            txtName.disabled = false;
        }
    });

    randomCheckboxRace.addEventListener('change', function () {
        if (this.checked) {
            console.log("Checkbox is checked..");
            ddlRaces.disabled = true;
        } else {
            console.log("Checkbox is not checked..");
            ddlRaces.disabled = false;
        }
    });

    randomCheckboxClass.addEventListener('change', function () {
        if (this.checked) {
            console.log("Checkbox is checked..");
            ddlClasses.disabled = true;
        } else {
            console.log("Checkbox is not checked..");
            ddlClasses.disabled = false;
        }
    });

    randomCheckboxSubclass.addEventListener('change', function () {
        if (this.checked) {
            console.log("Checkbox is checked..");
            ddlSubclasses.disabled = true;
        } else {
            console.log("Checkbox is not checked..");
            ddlSubclasses.disabled = false;
        }
    });

    randomCheckboxBackground.addEventListener('change', function () {
        if (this.checked) {
            console.log("Checkbox is checked..");
            ddlBackground.disabled = true;
        } else {
            console.log("Checkbox is not checked..");
            ddlBackground.disabled = false;
        }
    });

    FillLevelsDdl();

    FillRacesDdl();

    FillClassDdl();

    ddlClasses.addEventListener('change', function () {
        FillSubclassDdl(ddlClasses.value);
    });

    FillBackgroundDdl();
});

function rollStats() {
    let stats = [];
    // Roll 4 six-sided dice and sum the highest 3 dice for each stat
    for (let i = 0; i < 6; i++) {
        let rolls = [];
        for (let j = 0; j < 4; j++) {
            rolls.push(Math.floor(Math.random() * 6) + 1);
        }

        rolls.sort((a, b) => b - a);
        let total = rolls[0] + rolls[1] + rolls[2];
        if (total < 8) {
            i--;
        } else {
            stats.push(total);
        }
    }
    return stats;
}

function rollDice(numDice, sides) {
    if (![4, 6, 8, 10, 12, 20, 100].includes(sides)) {
        console.log("Invalid dice type. Please choose from d4, d6, d8, d10, d12, d20, or d100.");
        return;
    }
    let results = [];
    for (let i = 0; i < numDice; i++) {
        let roll = Math.floor(Math.random() * sides) + 1;
        results.push(roll);
    }
    return results;
}

// Helper function to generate a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

//Helper function to order stats based on class
function CharacterRaceBenefits(race, stats) {
    switch (race) {
        case "Aarakocra":
            if (stats.DEX > 17) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 2
            }

            if (stats.WIS > 18) {
                stats.WIS = 20
            }
            else {
                stats.WIS += 1
            }
            break;
        case "Aasimar":
            if (stats.CHA > 17) {
                stats.CHA = 20
            }
            else {
                stats.CHA += 2
            }

            if (stats.WIS > 18) {
                stats.WIS = 20
            }
            else {
                stats.WIS += 1
            }
            break;
        case "Variant Aasimar":
            if (stats.CHA > 17) {
                stats.CHA = 20
            }
            else {
                stats.CHA += 2
            }

            if (stats.WIS > 18) {
                stats.WIS = 20
            }
            else {
                stats.WIS += 1
            }

            break;
        case "Astral Elf":
            if (stats.WIS > 17) {
                stats.WIS = 20
            }
            else {
                stats.WIS += 2
            }

            if (stats.CON > 18) {
                stats.CON = 20
            }
            else {
                stats.CON += 1
            }

            break;
        case "Autognome":
            if (stats.WIS > 17) {
                stats.WIS = 20
            }
            else {
                stats.WIS += 2
            }

            if (stats.CON > 18) {
                stats.CON = 20
            }
            else {
                stats.CON += 1
            }

            break;
        case "Bugbear":
            if (stats.STR > 17) {
                stats.STR = 20
            }
            else {
                stats.STR += 2
            }

            if (stats.DEX > 18) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 1
            }
            break;
        case "Centaur":
            if (stats.STR > 17) {
                stats.STR = 20
            }
            else {
                stats.STR += 2
            }

            if (stats.WIS > 18) {
                stats.WIS = 20
            }
            else {
                stats.WIS += 1
            }
            break;
        case "Changling":
            if (stats.CHA > 17) {
                stats.CHA = 20
            }
            else {
                stats.CHA += 2
            }

            if (stats.CON > 18) {
                stats.CON = 20
            }
            else {
                stats.CON += 1
            }

            break;
        case "Deep Gnome":
            if (stats.CON > 17) {
                stats.CON = 20
            }
            else {
                stats.CON += 2
            }

            if (stats.STR > 18) {
                stats.STR = 20
            }
            else {
                stats.STR += 1
            }

            break;
        case "Dragonborn":
            if (stats.STR > 17) {
                stats.STR = 20
            }
            else {
                stats.STR += 2
            }

            if (stats.CHA > 18) {
                stats.CHA = 20
            }
            else {
                stats.CHA += 1
            }

            break;
        case "Duergar":
            if (stats.CON > 17) {
                stats.CON = 20
            }
            else {
                stats.CON += 2
            }

            if (stats.STR > 18) {
                stats.STR = 20
            }
            else {
                stats.STR += 1
            }

            break;
        case "Hill Dwarf":
            if (stats.CON > 17) {
                stats.CON = 20
            }
            else {
                stats.CON += 2
            }

            if (stats.WIS > 18) {
                stats.WIS = 20
            }
            else {
                stats.WIS += 1
            }

            break;
        case "Mountain Dwarf":
            if (stats.CON > 17) {
                stats.CON = 20
            }
            else {
                stats.CON += 2
            }

            if (stats.STR > 17) {
                stats.STR = 20
            }
            else {
                stats.STR += 2
            }

            break;
        case "Gray Dwarf":
            if (stats.CON > 17) {
                stats.CON = 20
            }
            else {
                stats.CON += 2
            }

            if (stats.STR > 18) {
                stats.STR = 20
            }
            else {
                stats.STR += 1
            }

            break;
        case "Eladrin":
            if (stats.DEX > 17) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 2
            }

            if (stats.INT > 18) {
                stats.INT = 20
            }
            else {
                stats.INT += 1
            }

            break;
        case "High Elf":
            if (stats.DEX > 17) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 2
            }

            if (stats.INT > 18) {
                stats.INT = 20
            }
            else {
                stats.INT += 1
            }

            break;
        case "Wood Elf":
            if (stats.DEX > 17) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 2
            }

            if (stats.WIS > 18) {
                stats.WIS = 20
            }
            else {
                stats.WIS += 1
            }

            break;
        case "Eladrin Elf":
            if (stats.DEX > 17) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 2
            }

            if (stats.INT > 18) {
                stats.INT = 20
            }
            else {
                stats.INT += 1
            }

            break;
        case "Dark Elf":
            if (stats.DEX > 17) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 2
            }

            if (stats.CHA > 18) {
                stats.CHA = 20
            }
            else {
                stats.CHA += 1
            }

            break;
        case "Fairy":
            if (stats.DEX > 17) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 2
            }

            if (stats.CHA > 18) {
                stats.CHA = 20
            }
            else {
                stats.CHA += 1
            }

            break;
        case "Firbolg":
            if (stats.WIS > 17) {
                stats.WIS = 20
            }
            else {
                stats.WIS += 2
            }

            if (stats.STR > 18) {
                stats.STR = 20
            }
            else {
                stats.STR += 1
            }

            break;
        case "Air Genasi":
            if (stats.CON > 17) {
                stats.CON = 20
            }
            else {
                stats.CON += 2
            }

            if (stats.DEX > 18) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 1
            }

            break;
        case "Earth Genasi":
            if (stats.CON > 17) {
                stats.CON = 20
            }
            else {
                stats.CON += 2
            }

            if (stats.STR > 18) {
                stats.STR = 20
            }
            else {
                stats.STR += 1
            }

            break;
        case "Fire Genasi":
            if (stats.CON > 17) {
                stats.CON = 20
            }
            else {
                stats.CON += 2
            }

            if (stats.INT > 18) {
                stats.INT = 20
            }
            else {
                stats.INT += 1
            }

            break;
        case "Water Genasi":
            if (stats.CON > 17) {
                stats.CON = 20
            }
            else {
                stats.CON += 2
            }

            if (stats.WIS > 18) {
                stats.WIS = 20
            }
            else {
                stats.WIS += 1
            }

            break;
        case "Giff":
            if (stats.STR > 17) {
                stats.STR = 20
            }
            else {
                stats.STR += 2
            }

            if (stats.CON > 18) {
                stats.CON = 20
            }
            else {
                stats.CON += 1
            }

            break;
        case "Githyanki":
            if (stats.STR > 17) {
                stats.STR = 20
            }
            else {
                stats.STR += 2
            }

            if (stats.INT > 18) {
                stats.INT = 20
            }
            else {
                stats.INT += 1
            }

            break;
        case "Githzerai":
            if (stats.WIS > 17) {
                stats.WIS = 20
            }
            else {
                stats.WIS += 2
            }

            if (stats.INT > 18) {
                stats.INT = 20
            }
            else {
                stats.INT += 1
            }

            break;
        case "Deep Gnome":
            if (stats.INT > 17) {
                stats.INT = 20
            }
            else {
                stats.INT += 2
            }

            if (stats.DEX > 18) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 1
            }

            break;
        case "Forest Gnome":
            if (stats.INT > 17) {
                stats.INT = 20
            }
            else {
                stats.INT += 2
            }

            if (stats.DEX > 18) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 1
            }

            break;
        case "Rock Gnome":
            if (stats.INT > 17) {
                stats.INT = 20
            }
            else {
                stats.INT += 2
            }

            if (stats.CON > 18) {
                stats.CON = 20
            }
            else {
                stats.CON += 1
            }

            break;
        case "Goblin":
            if (stats.DEX > 17) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 2
            }

            if (stats.CON > 18) {
                stats.CON = 20
            }
            else {
                stats.CON += 1
            }

            break;
        case "Goliath":
            if (stats.STR > 17) {
                stats.STR = 20
            }
            else {
                stats.STR += 2
            }

            if (stats.CON > 18) {
                stats.CON = 20
            }
            else {
                stats.CON += 1
            }

            break;
        case "Hadozee":
            if (stats.DEX > 17) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 2
            }

            if (stats.STR > 18) {
                stats.STR = 20
            }
            else {
                stats.STR += 1
            }

            break;
        case "Half-Elf":
            if (stats.INT > 18) {
                stats.INT = 20
            }
            else {
                stats.INT += 1
            }

            if (stats.WIS > 18) {
                stats.WIS = 20
            }
            else {
                stats.WIS += 1
            }

            break;
        case "Half-Orc":
            if (stats.STR > 17) {
                stats.STR = 20
            }
            else {
                stats.STR += 2
            }

            if (stats.CON > 18) {
                stats.CON = 20
            }
            else {
                stats.CON += 1
            }

            break;
        case "Ghostwise Halfling":
            if (stats.WIS > 18) {
                stats.WIS = 20
            }
            else {
                stats.WIS += 1
            }

            break;
        case "Lightfoot Halfling":
            if (stats.DEX > 17) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 2
            }

            if (stats.CHA > 18) {
                stats.CHA = 20
            }
            else {
                stats.CHA += 1
            }

            break;
        case "Stout Halfling":
            if (stats.DEX > 17) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 2
            }

            if (stats.CON > 18) {
                stats.CON = 20
            }
            else {
                stats.CON += 1
            }

            break;
        case "Harengon":
            if (stats.DEX > 17) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 2
            }

            if (stats.CON > 18) {
                stats.CON = 20
            }
            else {
                stats.CON += 1
            }

            break;
        case "Hobgoblin":
            if (stats.CON > 17) {
                stats.CON = 20
            }
            else {
                stats.CON += 2
            }

            if (stats.INT > 18) {
                stats.INT = 20
            }
            else {
                stats.INT += 1
            }

            break;
        case "Variant Human":
            if (stats.CON > 18) {
                stats.CON = 20
            }
            else {
                stats.CON += 1
            }

            if (stats.DEX > 18) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 1
            }

            break;
        case "Human":
            if (stats.STR > 18) {
                stats.STR = 20
            }
            else {
                stats.STR += 1
            }

            if (stats.DEX > 18) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 1
            }

            if (stats.CON > 18) {
                stats.CON = 20
            }
            else {
                stats.CON += 1
            }

            if (stats.INT > 18) {
                stats.INT = 20
            }
            else {
                stats.INT += 1
            }

            if (stats.WIS > 18) {
                stats.WIS = 20
            }
            else {
                stats.WIS += 1
            }

            if (stats.CHA > 18) {
                stats.CHA = 20
            }
            else {
                stats.CHA += 1
            }

            break;
        case "Kalashtar":
            if (stats.WIS > 17) {
                stats.WIS = 20
            }
            else {
                stats.WIS += 2
            }

            if (stats.CHA > 18) {
                stats.CHA = 20
            }
            else {
                stats.CHA += 1
            }

            break;
        case "Kender":
            if (stats.DEX > 17) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 2
            }

            if (stats.INT > 18) {
                stats.INT = 20
            }
            else {
                stats.INT += 1
            }

            break;
        case "Kenku":
            if (stats.DEX > 17) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 2
            }

            if (stats.INT > 18) {
                stats.INT = 20
            }
            else {
                stats.INT += 1
            }

            break;
        case "Kobold":
            if (stats.DEX > 17) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 2
            }

            if (stats.INT > 18) {
                stats.INT = 20
            }
            else {
                stats.INT += 1
            }

            break;
        case "Lizardfolk":
            if (stats.CON > 17) {
                stats.CON = 20
            }
            else {
                stats.CON += 2
            }

            if (stats.WIS > 18) {
                stats.WIS = 20
            }
            else {
                stats.WIS += 1
            }

            break;
        case "Loxodon":
            if (stats.CON > 17) {
                stats.CON = 20
            }
            else {
                stats.CON += 2
            }

            if (stats.WIS > 18) {
                stats.WIS = 20
            }
            else {
                stats.WIS += 1
            }

            break;
        case "Minotaur":
            if (stats.STR > 17) {
                stats.STR = 20
            }
            else {
                stats.STR += 2
            }

            if (stats.CON > 18) {
                stats.CON = 20
            }
            else {
                stats.CON += 1
            }

            break;
        case "Orc":
            if (stats.STR > 17) {
                stats.STR = 20
            }
            else {
                stats.STR += 2
            }

            if (stats.CON > 18) {
                stats.CON = 20
            }
            else {
                stats.CON += 1
            }

            break;
        case "Orc of Eberron":
            if (stats.STR > 17) {
                stats.STR = 20
            }
            else {
                stats.STR += 2
            }

            if (stats.CON > 18) {
                stats.CON = 20
            }
            else {
                stats.CON += 1
            }

            break;
        case "Plasmoid":
            if (stats.CON > 17) {
                stats.CON = 20
            }
            else {
                stats.CON += 2
            }

            if (stats.DEX > 18) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 1
            }

            break;
        case "Satyr":
            if (stats.DEX > 17) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 2
            }

            if (stats.CHA > 18) {
                stats.CHA = 20
            }
            else {
                stats.CHA += 1
            }

            break;
        case "Sea Elf":
            if (stats.DEX > 17) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 2
            }

            if (stats.CON > 18) {
                stats.CON = 20
            }
            else {
                stats.CON += 1
            }

            break;
        case "Shadar-kai":
            if (stats.DEX > 17) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 2
            }

            if (stats.CON > 18) {
                stats.CON = 20
            }
            else {
                stats.CON += 1
            }

            break;
        case "Shifter":
            if (stats.DEX > 17) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 2
            }

            if (stats.CON > 18) {
                stats.CON = 20
            }
            else {
                stats.CON += 1
            }

            break;
        case "Beasthide Shifter":
            if (stats.CON > 17) {
                stats.CON = 20
            }
            else {
                stats.CON += 2
            }

            if (stats.STR > 18) {
                stats.STR = 20
            }
            else {
                stats.STR += 1
            }

            break;
        case "Longtooth Shifter":
            if (stats.STR > 17) {
                stats.STR = 20
            }
            else {
                stats.STR += 2
            }

            if (stats.DEX > 18) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 1
            }

            break;
        case "Swiftstride Shifter":
            if (stats.DEX > 17) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 2
            }

            if (stats.CHA > 18) {
                stats.CHA = 20
            }
            else {
                stats.CHA += 1
            }

            break;
        case "Wildhunt Shifter":
            if (stats.WIS > 17) {
                stats.WIS = 20
            }
            else {
                stats.WIS += 2
            }

            if (stats.DEX > 18) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 1
            }

            break;
        case "Simic Hybrid":
            if (stats.CON > 17) {
                stats.CON = 20
            }
            else {
                stats.CON += 2
            }

            break;
        case "Tabaxi":
            if (stats.DEX > 17) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 2
            }

            if (stats.CHA > 18) {
                stats.CHA = 20
            }
            else {
                stats.CHA += 1
            }

            break;
        case "Thri-kreen":
            if (stats.CON > 17) {
                stats.CON = 20
            }
            else {
                stats.CON += 2
            }

            if (stats.DEX > 18) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 1
            }

            break;
        case "Tiefling":
            if (stats.CHA > 17) {
                stats.CHA = 20
            }
            else {
                stats.CHA += 2
            }

            if (stats.INT > 18) {
                stats.INT = 20
            }
            else {
                stats.INT += 1
            }

            break;
        case "Variant Tiefling":
            if (stats.CHA > 17) {
                stats.CHA = 20
            }
            else {
                stats.CHA += 2
            }

            if (stats.INT > 18) {
                stats.INT = 20
            }
            else {
                stats.INT += 1
            }

            break;
        case "Feral Tiefling":
            if (stats.DEX > 17) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 2
            }

            if (stats.INT > 18) {
                stats.INT = 20
            }
            else {
                stats.INT += 1
            }

            break;
        case "Variant Feral Tiefling":
            if (stats.DEX > 17) {
                stats.DEX = 20
            }
            else {
                stats.DEX += 2
            }

            if (stats.INT > 18) {
                stats.INT = 20
            }
            else {
                stats.INT += 1
            }

            break;
        case "Tortle":
            if (stats.STR > 17) {
                stats.STR = 20
            }
            else {
                stats.STR += 2
            }

            if (stats.WIS > 18) {
                stats.WIS = 20
            }
            else {
                stats.WIS += 1
            }

            break;
        case "Vedalken":
            if (stats.INT > 17) {
                stats.INT = 20
            }
            else {
                stats.INT += 2
            }

            if (stats.WIS > 18) {
                stats.WIS = 20
            }
            else {
                stats.WIS += 1
            }

            break;
        case "Warforged":
            if (stats.CON > 17) {
                stats.CON = 20
            }
            else {
                stats.CON += 2
            }

            if (stats.STR > 18) {
                stats.STR = 20
            }
            else {
                stats.STR += 1
            }

            break;
        case "Yuan-ti":
            if (stats.CHA > 17) {
                stats.CHA = 20
            }
            else {
                stats.CHA += 2
            }

            if (stats.INT > 18) {
                stats.INT = 20
            }
            else {
                stats.INT += 1
            }

            break;
        default:
            break;
    }

    return stats;
}

function CharacterLevelASIBenefits(playerClass, level) {
    var asiCount = 0;

    switch (playerClass) {
        case "Artificer":
        case "Barbarian":
        case "Bard":
        case "BloodHunter":
        case "Cleric":
        case "Druid":
        case "Monk":
        case "Paladin":
        case "Ranger":
        case "Sorcerer":
        case "Warlock":
        case "Wizard":
            if (level >= 4) {
                asiCount++;
            }

            if (level >= 8) {
                asiCount++;
            }

            if (level >= 12) {
                asiCount++;
            }

            if (level >= 16) {
                asiCount++;
            }

            if (level >= 19) {
                asiCount++;
            }
            break;
        case "Fighter":
            if (level >= 4) {
                asiCount++;
            }

            if (level >= 6) {
                asiCount++;
            }

            if (level >= 8) {
                asiCount++;
            }

            if (level >= 12) {
                asiCount++;
            }

            if (level >= 14) {
                asiCount++;
            }

            if (level >= 16) {
                asiCount++;
            }

            if (level >= 19) {
                asiCount++;
            }
            break;
        case "Rogue":
            if (level >= 4) {
                asiCount++;
            }

            if (level >= 8) {
                asiCount++;
            }

            if (level >= 10) {
                asiCount++;
            }

            if (level >= 12) {
                asiCount++;
            }

            if (level >= 16) {
                asiCount++;
            }

            if (level >= 19) {
                asiCount++;
            }
            break;
        default:
            if (level >= 4) {
                asiCount++;
            }

            if (level >= 8) {
                asiCount++;
            }

            if (level >= 12) {
                asiCount++;
            }

            if (level >= 16) {
                asiCount++;
            }

            if (level >= 19) {
                asiCount++;
            }
            break;
    }
    return asiCount;
}

function IndividualASIIncrease(playerClass, stats) {
    var asiValue = 2;
    do {
        switch (playerClass) {
            case "Artificer":
                if (asiValue == 2) {
                    if (stats.INT < 19) {
                        stats.INT += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CON < 19) {
                        stats.CON += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.DEX < 19) {
                        stats.DEX += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.WIS < 19) {
                        stats.WIS += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.STR < 19) {
                        stats.STR += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CHA < 19) {
                        stats.CHA += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                }
                break;
            case "Barbarian":
                if (asiValue == 2) {
                    if (stats.STR < 19) {
                        stats.STR += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CON < 19) {
                        stats.CON += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.DEX < 19) {
                        stats.DEX += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.WIS < 19) {
                        stats.WIS += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CHA < 19) {
                        stats.CHA += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.INT < 19) {
                        stats.INT += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                }
                break;
            case "Bard":
                if (asiValue == 2) {
                    if (stats.CHA < 19) {
                        stats.CHA += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.DEX < 19) {
                        stats.DEX += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CON < 19) {
                        stats.CON += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.WIS < 19) {
                        stats.WIS += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.INT < 19) {
                        stats.INT += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.STR < 19) {
                        stats.STR += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                }
                break;
            case "BloodHunter":
                if (asiValue == 2) {
                    if (stats.STR < 19) {
                        stats.STR += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.WIS < 19) {
                        stats.WIS += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CON < 19) {
                        stats.CON += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.DEX < 19) {
                        stats.DEX += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CHA < 19) {
                        stats.CHA += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.INT < 19) {
                        stats.INT += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                }
                break;
            case "Cleric":
                if (asiValue == 2) {
                    if (stats.WIS < 19) {
                        stats.WIS += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CON < 19) {
                        stats.CON += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.STR < 19) {
                        stats.STR += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.DEX < 19) {
                        stats.DEX += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CHA < 19) {
                        stats.CHA += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.INT < 19) {
                        stats.INT += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                }
                break;
            case "Druid":
                if (asiValue == 2) {
                    if (stats.WIS < 19) {
                        stats.WIS += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CON < 19) {
                        stats.CON += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.DEX < 19) {
                        stats.DEX += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CHA < 19) {
                        stats.CHA += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.INT < 19) {
                        stats.INT += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.STR < 19) {
                        stats.STR += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                }
                break;
            case "Fighter":
                if (asiValue == 2) {
                    if (stats.STR < 19) {
                        stats.STR += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.DEX < 19) {
                        stats.DEX += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CON < 19) {
                        stats.CON += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.WIS < 19) {
                        stats.WIS += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CHA < 19) {
                        stats.CHA += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.INT < 19) {
                        stats.INT += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                }
                break;
            case "Monk":
                if (asiValue == 2) {
                    if (stats.DEX < 19) {
                        stats.DEX += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.WIS < 19) {
                        stats.WIS += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CON < 19) {
                        stats.CON += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CHA < 19) {
                        stats.CHA += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.STR < 19) {
                        stats.STR += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.INT < 19) {
                        stats.INT += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                }
                break;
            case "Paladin":
                if (asiValue == 2) {
                    if (stats.STR < 19) {
                        stats.STR += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CHA < 19) {
                        stats.CHA += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CON < 19) {
                        stats.CON += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.DEX < 19) {
                        stats.DEX += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.WIS < 19) {
                        stats.WIS += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.INT < 19) {
                        stats.INT += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                }
                break;
            case "Ranger":
                if (asiValue == 2) {
                    if (stats.DEX < 19) {
                        stats.DEX += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.WIS < 19) {
                        stats.WIS += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CON < 19) {
                        stats.CON += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.STR < 19) {
                        stats.STR += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CHA < 19) {
                        stats.CHA += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.INT < 19) {
                        stats.INT += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                }
                break;
            case "Rogue":
                if (asiValue == 2) {
                    if (stats.DEX < 19) {
                        stats.DEX += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CON < 19) {
                        stats.CON += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.WIS < 19) {
                        stats.WIS += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CHA < 19) {
                        stats.CHA += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.INT < 19) {
                        stats.INT += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.STR < 19) {
                        stats.STR += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                }
                break;
            case "Sorcerer":
                if (asiValue == 2) {
                    if (stats.CHA < 19) {
                        stats.CHA += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CON < 19) {
                        stats.CON += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.DEX < 19) {
                        stats.DEX += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.WIS < 19) {
                        stats.WIS += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.INT < 19) {
                        stats.INT += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.STR < 19) {
                        stats.STR += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                }
                break;
            case "Warlock":
                if (asiValue == 2) {
                    if (stats.CHA < 19) {
                        stats.CHA += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CON < 19) {
                        stats.CON += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.DEX < 19) {
                        stats.DEX += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.WIS < 19) {
                        stats.WIS += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.INT < 19) {
                        stats.INT += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.STR < 19) {
                        stats.STR += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                }
                break;
            case "Wizard":
                if (asiValue == 2) {
                    if (stats.INT < 19) {
                        stats.INT += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CON < 19) {
                        stats.CON += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.DEX < 19) {
                        stats.DEX += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.WIS < 19) {
                        stats.WIS += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CHA < 19) {
                        stats.CHA += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.STR < 19) {
                        stats.STR += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                }
                break;
            default:
                if (asiValue == 2) {
                    if (stats.INT < 19) {
                        stats.INT += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.INT < 20) {
                        stats.INT += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CON < 19) {
                        stats.CON += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CON < 20) {
                        stats.CON += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.DEX < 19) {
                        stats.DEX += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.DEX < 20) {
                        stats.DEX += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.WIS < 19) {
                        stats.WIS += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.WIS < 20) {
                        stats.WIS += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.CHA < 19) {
                        stats.CHA += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.CHA < 20) {
                        stats.CHA += 1;
                        asiValue -= 1;
                        break;
                    }
                }

                if (asiValue == 2) {
                    if (stats.STR < 19) {
                        stats.STR += 2;
                        asiValue = 0;
                        break;
                    }
                    else if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                } else {
                    if (stats.STR < 20) {
                        stats.STR += 1;
                        asiValue -= 1;
                        break;
                    }
                }
                break;
        }
    }
    while (asiValue > 0);

    return stats;
}

function CurrentStatSelection(playerClass, stats) {
    var index = 0;

    switch (playerClass) {
        case "Artificer":
            currentStat = stats.INT;
            index = 3;
            if (currentStat >= 20) {
                currentStat = stats[2];
                index = 2;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[1];
                index = 1;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[4];
                index = 4;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[0];
                index = 0;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[5];
                index = 5;
            }
            break;
        case "Barbarian":
            currentStat = stats[0];
            index = 0;
            if (currentStat >= 20) {
                currentStat = stats[2];
                index = 2;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[1];
                index = 1;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[4];
                index = 4;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[5];
                index = 5;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[3];
                index = 3;
            }
            break;
        case "Bard":
            currentStat = stats[5];
            index = 5;
            if (currentStat >= 20) {
                currentStat = stats[1];
                index = 1;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[2];
                index = 2;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[4];
                index = 4;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[3];
                index = 3;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[0];
                index = 0;
            }
            break;
        case "BloodHunter":
            currentStat = stats[0];
            index = 0;
            if (currentStat >= 20) {
                currentStat = stats[4];
                index = 4;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[2];
                index = 2;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[1];
                index = 1;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[5];
                index = 5;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[3];
                index = 3;
            }
            break;
        case "Cleric":
            currentStat = stats[4];
            index = 4;
            if (currentStat >= 20) {
                currentStat = stats[2];
                index = 2;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[0];
                index = 0;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[1];
                index = 1;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[5];
                index = 5;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[3];
                index = 3;
            }
            break;
        case "Druid":
            currentStat = stats[4];
            index = 4;
            if (currentStat >= 20) {
                currentStat = stats[2];
                index = 2;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[1];
                index = 1;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[5];
                index = 5;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[3];
                index = 3;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[0];
                index = 0;
            }
            break;
        case "Fighter":
            currentStat = stats[0];
            index = 0;
            if (currentStat >= 20) {
                currentStat = stats[1];
                index = 1;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[2];
                index = 2;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[4];
                index = 4;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[5];
                index = 5;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[3];
                index = 3;
            }
            break;
        case "Monk":
            currentStat = stats[1];
            index = 1;
            if (currentStat >= 20) {
                currentStat = stats[4];
                index = 4;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[2];
                index = 2;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[5];
                index = 5;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[0];
                index = 0;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[3];
                index = 3;
            }
            break;
        case "Paladin":
            currentStat = stats[0];
            index = 0;
            if (currentStat >= 20) {
                currentStat = stats[5];
                index = 5;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[2];
                index = 2;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[1];
                index = 1;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[4];
                index = 4;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[3];
                index = 3;
            }
            break;
        case "Ranger":
            currentStat = stats[1];
            index = 1;
            if (currentStat >= 20) {
                currentStat = stats[4];
                index = 4;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[2];
                index = 2;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[0];
                index = 0;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[5];
                index = 5;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[3];
                index = 3;
            }
            break;
        case "Rogue":
            currentStat = stats[1];
            index = 1;
            if (currentStat >= 20) {
                currentStat = stats[2];
                index = 2;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[4];
                index = 4;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[5];
                index = 5;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[3];
                index = 3;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[0];
                index = 0;
            }
            break;
        case "Sorcerer":
            currentStat = stats[5];
            index = 5;
            if (currentStat >= 20) {
                currentStat = stats[2];
                index = 2;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[1];
                index = 1;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[4];
                index = 4;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[3];
                index = 3;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[0];
                index = 0;
            }
            break;
        case "Warlock":
            currentStat = stats[5];
            index = 5;
            if (currentStat >= 20) {
                currentStat = stats[2];
                index = 2;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[1];
                index = 1;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[4];
                index = 4;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[3];
                index = 3;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[0];
                index = 0;
            }
            break;
        case "Wizard":
            currentStat = stats[3];
            index = 3;
            if (currentStat >= 20) {
                currentStat = stats[2];
                index = 2;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[1];
                index = 1;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[4];
                index = 4;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[5];
                index = 5;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[0];
                index = 0;
            }
            break;
        default:
            currentStat = stats[3];
            index = 3;
            if (currentStat >= 20) {
                currentStat = stats[2];
                index = 2;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[1];
                index = 1;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[4];
                index = 4;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[0];
                index = 0;
            }
            
            if (currentStat >= 20) {
                currentStat = stats[5];
                index = 5;
            }
    }

    return index;
}

function AdjustColors(primaryColor, secondaryColor) {
    var textColorPrimary = document.querySelectorAll('.textColorPrimary');
    var textColorSecondary = document.querySelectorAll('.textColorSecondary');
    var borderColor = document.querySelectorAll('.borderColor');
    var characterDetails = document.getElementById('characterDetails');
    var button = document.getElementById('btnGenerate');
    
    button.style.backgroundColor = primaryColor;
    button.style.color = secondaryColor;
    button.addEventListener('mouseover', function() {
        button.style.backgroundColor = secondaryColor;
        button.style.color = primaryColor;
    });
    button.addEventListener('mouseout', function() {
        button.style.backgroundColor = primaryColor; 
        button.style.color = secondaryColor; 
    });
    textColorPrimary.forEach(element => {
        element.style.color = primaryColor;
    });
    textColorSecondary.forEach(element => {
        element.style.color = secondaryColor;
    });
    borderColor.forEach(element => {
        element.style.borderColor = secondaryColor;
    });
    characterDetails.style.borderColor = secondaryColor;
}

//Helper function to order stats based on class
function CharacterStatOrderAndStyle(playerClass) {
    var statOrder = []
    var classImg = document.getElementById('classImg');
    // Stat Order
    // STR
    // DEX
    // CON
    // INT
    // WIS
    // CHA

    switch (playerClass) {
        case "Artificer":
            AdjustColors("#FD5E02", "#5F9B9B");
            classImg.src = 'images/Artificer.png';
            statOrder.push(4)
            statOrder.push(2)
            statOrder.push(1)
            statOrder.push(0)
            statOrder.push(3)
            statOrder.push(5)
            break;
        case "Barbarian":
            AdjustColors("#FFFFFF", "#e8633f");
            classImg.src = 'images/Barbarian.png';
            statOrder.push(0)
            statOrder.push(2)
            statOrder.push(1)
            statOrder.push(5)
            statOrder.push(3)
            statOrder.push(4)
            break;
        case "Bard":
            AdjustColors("#FFFFFF", "#AA6DAB");
            classImg.src = 'images/Bard.png';
            statOrder.push(5)
            statOrder.push(1)
            statOrder.push(2)
            statOrder.push(4)
            statOrder.push(3)
            statOrder.push(0)
            break;
        case "BloodHunter":
            AdjustColors("#CAC9C9", "#671917");
            classImg.src = 'images/Bloodhunter.png';
            statOrder.push(0)
            statOrder.push(3)
            statOrder.push(2)
            statOrder.push(5)
            statOrder.push(1)
            statOrder.push(4)
            break;
        case "Cleric":
            AdjustColors("#FBFBFB", "#D4AF37");
            classImg.src = 'images/Cleric.png';
            statOrder.push(2)
            statOrder.push(3)
            statOrder.push(1)
            statOrder.push(5)
            statOrder.push(0)
            statOrder.push(4)
            break;
        case "Druid":
            AdjustColors("#FBFBFB", "#8DAB51");
            classImg.src = 'images/Druid.png';
            statOrder.push(5)
            statOrder.push(2)
            statOrder.push(1)
            statOrder.push(4)
            statOrder.push(0)
            statOrder.push(3)
            break;
        case "Fighter":
            AdjustColors("#88001B", "#B99038");
            classImg.src = 'images/Fighter.png';
            statOrder.push(0)
            statOrder.push(1)
            statOrder.push(2)
            statOrder.push(5)
            statOrder.push(3)
            statOrder.push(4)
            break;
        case "Monk":
            AdjustColors("#F7975D", "#B5B4B0");
            classImg.src = 'images/Monk.png';
            statOrder.push(4)
            statOrder.push(0)
            statOrder.push(2)
            statOrder.push(5)
            statOrder.push(1)
            statOrder.push(3)
            break;
        case "Paladin":
            AdjustColors("#989896", "#DAC282");
            classImg.src = 'images/Paladin.png';
            statOrder.push(0)
            statOrder.push(3)
            statOrder.push(2)
            statOrder.push(5)
            statOrder.push(4)
            statOrder.push(1)
            break;
        case "Ranger":
            AdjustColors("#989896", "#83AA90");
            classImg.src = 'images/Ranger.png';
            statOrder.push(3)
            statOrder.push(0)
            statOrder.push(2)
            statOrder.push(5)
            statOrder.push(1)
            statOrder.push(4)
            break;
        case "Rogue":
            AdjustColors("#999999", "#CED4E6");
            classImg.src = 'images/Rogue.png';
            statOrder.push(5)
            statOrder.push(0)
            statOrder.push(1)
            statOrder.push(4)
            statOrder.push(2)
            statOrder.push(3)
            break;
        case "Sorcerer":
            AdjustColors("#F1FFD4", "#90BAAC");
            classImg.src = 'images/Sorcerer.png';
            statOrder.push(5)
            statOrder.push(2)
            statOrder.push(1)
            statOrder.push(4)
            statOrder.push(3)
            statOrder.push(0)
            break;
        case "Warlock":
            AdjustColors("#FFFFFF", "#A060D8");
            classImg.src = 'images/Warlock.png';
            statOrder.push(5)
            statOrder.push(2)
            statOrder.push(1)
            statOrder.push(4)
            statOrder.push(3)
            statOrder.push(0)
            break;
        case "Wizard":
            AdjustColors("#FFFFFF", "#4D83DB");
            classImg.src = 'images/Wizard.png';
            statOrder.push(5)
            statOrder.push(2)
            statOrder.push(1)
            statOrder.push(0)
            statOrder.push(3)
            statOrder.push(4)
            break;
        default:
            statOrder.push(0)
            statOrder.push(1)
            statOrder.push(2)
            statOrder.push(3)
            statOrder.push(4)
            statOrder.push(5)
    }
    return statOrder;
}

function getRandomCharacterName(genderType) {
    var firstName = "";
    if (genderType == "male") {
        firstName = getRandomElement(names.maleFirstNames);
    }
    else{
        firstName = getRandomElement(names.femaleFirstNames);
    }
    var lastName = getRandomElement(names.lastNames);
    var fullName = firstName + " " + lastName;

    return fullName;
}

function StyleBasedOnClass(playerClass) {
    
}

// Function to generate a random player character
function GenerateCharacter() {
    const randomCheckbox = document.getElementById('chkRandom');
    const randomCheckboxLevel = document.getElementById('chkRandomLevel');
    const randomCheckboxGender = document.getElementById('chkRandomGender');
    const randomCheckboxName = document.getElementById('chkRandomName');
    const randomCheckboxRace = document.getElementById('chkRandomRace');
    const randomCheckboxClass = document.getElementById('chkRandomClass');
    const randomCheckboxSubclass = document.getElementById('chkRandomSubclass');
    const randomCheckboxBackground = document.getElementById('chkRandomBackground');
    const ddlLevels = document.getElementById('levels');
    const ddlGenders = document.getElementById('genders');
    const txtName = document.getElementById('txtName');
    const ddlRaces = document.getElementById('races');
    const ddlClasses = document.getElementById('classes');
    const ddlSubclasses = document.getElementById('subclasses');
    const ddlBackground = document.getElementById('background');
    var level;
    var genderType;
    var name;
    var race;
    var playerClass;
    var subclass;
    var background;

    if (randomCheckbox.checked) {
        level = getRandomElement(levels);
        genderType = getRandomElement(genders);
        race = getRandomElement(races);
        name = getRandomCharacterName(genderType, race);
        playerClass = getRandomElement(classes);
        subclass = subclasses[playerClass] ? getRandomElement(subclasses[playerClass]) : "N/A";
        background = getRandomElement(backgrounds);
    } else {
        if (randomCheckboxLevel.checked === false && ddlLevels.value.length > 0) {
            level = ddlLevels.value;
        } else {
            level = getRandomElement(levels);
        }

        if (randomCheckboxGender.checked === false && ddlGenders.value.length > 0) {
            genderType = ddlGenders.value;
        } else {
            genderType = getRandomElement(genders);
        }

        if (randomCheckboxName.checked === false && txtName.value.length > 0) {
            name = txtName.value;
        } else {
            name = getRandomCharacterName(genderType);
        }

        if (randomCheckboxRace.checked === false && ddlRaces.value.length > 0) {
            race = ddlRaces.value;
        } else {
            race = getRandomElement(races);
        }

        if (randomCheckboxClass.checked === false && ddlClasses.value.length > 0) {
            playerClass = ddlClasses.value;
        } else {
            playerClass = getRandomElement(classes);
        }

        if (randomCheckboxSubclass.checked === false && ddlSubclasses.value.length > 0) {
            subclass = ddlSubclasses.value;
        } else {
            subclass = subclasses[playerClass] ? getRandomElement(subclasses[playerClass]) : "N/A";
        }

        if (randomCheckboxBackground.checked === false && ddlBackground.value.length > 0) {
            background = ddlBackground.value;
        } else {
            background = getRandomElement(backgrounds);
        }
    }

    if (genderType == "male") {
        genderType = "Masculine"
    }
    else{
        genderType = "Feminine"
    }

    const statOrder = CharacterStatOrderAndStyle(playerClass);
    var unsetStats = [];

    unsetStats = rollStats().sort(function (a, b) { return a - b }).reverse();

    var stats = {
        STR: unsetStats[statOrder[0]],
        DEX: unsetStats[statOrder[1]],
        CON: unsetStats[statOrder[2]],
        INT: unsetStats[statOrder[3]],
        WIS: unsetStats[statOrder[4]],
        CHA: unsetStats[statOrder[5]]
    }

    var numberOfAsiImprovements = CharacterLevelASIBenefits(playerClass, level);

    for (let i = 0; i < numberOfAsiImprovements; i++) {
        IndividualASIIncrease(playerClass, stats);
    }

    stats = CharacterRaceBenefits(race, stats);

    if (playerClass == 'Barbarian' && level == 20) {
        if (stats.STR < 20) {
            stats.STR += 4
        }
        else {
            stats.STR = 24
        }

        if (stats.CON < 20) {
            stats.CON += 4
        }
        else {
            stats.CON = 24
        }
    }

    // Construct and return the character object
    const character = {
        level,
        genderType,
        name,
        race,
        class: playerClass,
        subclass,
        background,
        stats
    };
    return character;
}

function CreateCharacter() {
    var randomCheckbox = document.getElementById('chkRandom');
    var characterDetails = document.getElementById('characterDetails');
    var detailLevelText = document.getElementById('detailLevelText');
    var detailGenderText = document.getElementById('detailGenderText');
    var detailNameText = document.getElementById('detailNameText');
    var detailRaceText = document.getElementById('detailRaceText');
    var detailClassText = document.getElementById('detailClassText');
    var detailSubClassText = document.getElementById('detailSubClassText');
    var detailBackgroundText = document.getElementById('detailBackgroundText');
    var strStatText = document.getElementById('strStatText');
    var dexStatText = document.getElementById('dexStatText');
    var conStatText = document.getElementById('conStatText');
    var intStatText = document.getElementById('intStatText');
    var wisStatText = document.getElementById('wisStatText');
    var chaStatText = document.getElementById('chaStatText');

    const newCharacter = GenerateCharacter();

    characterDetails.style.display = '';
    detailLevelText.innerText = newCharacter.level;
    detailGenderText.innerText = newCharacter.genderType;
    detailNameText.innerText = newCharacter.name;
    detailRaceText.innerText = newCharacter.race;
    detailClassText.innerText = newCharacter.class;
    detailSubClassText.innerText = newCharacter.subclass;
    detailBackgroundText.innerText = newCharacter.background;
    strStatText.innerText = newCharacter.stats.STR;
    dexStatText.innerText = newCharacter.stats.DEX;
    conStatText.innerText = newCharacter.stats.CON;
    intStatText.innerText = newCharacter.stats.INT;
    wisStatText.innerText = newCharacter.stats.WIS;
    chaStatText.innerText = newCharacter.stats.CHA;

    console.log(newCharacter);
}