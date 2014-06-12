/*global Ember*/
Norfolkart.Exhibit = DS.Model.extend({
    title: DS.attr('string'),

    latitude: DS.attr('number'),

    longitude: DS.attr('number'),

    location: DS.attr('string'),

    artists: DS.attr('string'),

    url: DS.attr('string'),

    imageurl: DS.attr('string')
});

// probably should be mixed-in...
Norfolkart.Exhibit.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
Norfolkart.Exhibit.FIXTURES = [
    {
	id: 0,
	title: "Torch Bearers",
	longitude: -76.29367858171463,
	latitude: 36.85602296216651,
	location: "Chrysler Museum",
	artists: "Anna Hyatt Huntington",
	url: "http://www.norfolkva.gov/cultural_affairs/chrysler_museum_art_torch_bearers.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Chrysler_Museum/Torch_Bearers_Map.jpg"
    }, {
	id: 1,
	title: "Anchor",
	longitude: -76.2937080860138,
	latitude: 36.856507992078235,
	location: "Chrysler Museum",
	artists: "Unknown",
	url: "http://www.norfolkva.gov/cultural_affairs/chrysler_museum_art_anchor.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Chrysler_Museum/Anchor_Map.jpg"
    }, {
	id: 2,
	title: "Big Six",
	longitude: -76.29236161708832,
	latitude: 36.85569245329526,
	location: "Chrysler Museum",
	artists: "Tony Rosenthal",
	url: "http://www.norfolkva.gov/cultural_affairs/chrysler_museum_art_bigsix.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Chrysler_Museum/Big_Six_Map.jpg"
    }, {
	id: 3,
	title: "Floor Kite XII",
	longitude: -76.29231065511703,
	latitude: 36.85631269279368,
	location: "Chrysler Museum",
	artists: "Jasha Green",
	url: "http://www.norfolkva.gov/cultural_affairs/chrysler_museum_art_floor_kite.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Chrysler_Museum/Floor_Kite_XII_Map.jpg"
    }, {
	id: 4,
	title: "Leading Edge",
	longitude: -76.28867357969284,
	latitude: 36.84534937896169,
	location: "1 Commercial Place",
	artists: "John Safer",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_leading_edge.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/Leading_Edge_Map.jpg"
    }, {
	id: 5,
	title: "Norfolk Confederate Soldier",
	longitude: -76.28859579563141,
	latitude: 36.845692811234784,
	location: "Main Street Rotary",
	artists: "Stanley Bleifeld",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_confederate_soldier.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/Confederate_Soldier_Map.jpg"
    }, {
	id: 6,
	title: "Whaling Wall #47",
	longitude: -76.28727614879608,
	latitude: 36.8432629947532,
	location: "First Union Garage",
	artists: "Wyland Foundation",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_whaling_wall.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/Whaling_Wall_Map.jpg"
    }, {
	id: 7,
	title: "Tower of Light",
	longitude: -76.28826856613159,
	latitude: 36.84319859927324,
	location: "Dominion Amphitheatre",
	artists: "William Wainwright",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_tower_of_light.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/tower_of_light_map.jpg"
    }, {
	id: 8,
	title: "Gold Medal Flour",
	longitude: -76.28931730985641,
	latitude: 36.851797062491514,
	location: "300 block Granby Street",
	artists: "Anonymous",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_gold_medal.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/Gold_Medal_Flour_Map.jpg"
    }, {
	id: 9,
	title: "Summer In The City",
	longitude: -76.2896579504013,
	latitude: 36.85126478431082,
	location: "Granby Municipal Center",
	artists: "Vicki Norris",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_gmb.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/GMB_map.jpg"
    }, {
	id: 10,
	title: "Eyes",
	longitude: -76.28834366798401,
	latitude: 36.84989973139186,
	location: "MacArthur North Parking Garage",
	artists: "John Rudel",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_eyes.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/EYES_map.jpg"
    }, {
	id: 11,
	title: "Bit By Bit",
	longitude: -76.24619007110595,
	latitude: 36.95017473069594,
	location: "Ocean View Senior Center",
	artists: "Crystal Coffey Warlitner",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_bitbybit.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/BITBYBIT_map.jpg"
    }, {
	id: 12,
	title: "Norfolk 1851",
	longitude: -76.28724932670593,
	latitude: 36.850159436733506,
	location: "MacArthur Mall - North Exit",
	artists: "Gregg LeFevre",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_norfolk_1851.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/Norfolk_1851_Map.jpg"
    }, {
	id: 13,
	title: "Celebration",
	longitude: -76.28678798675537,
	latitude: 36.85328656318699,
	location: "SCOPE Parking Garage",
	artists: "Solomon Isekeije",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_celebration.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/Celebration_SCOPE_map.jpg"
    }, {
	id: 14,
	title: "Hampton Roads",
	longitude: -76.29021048545837,
	latitude: 36.84791649787294,
	location: "MacArthur Mall",
	artists: "Gregg LeFevre",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_hampton_roads.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/Hampton_Roads_Map.jpg"
    }, {
	id: 15,
	title: "General Douglas MacArhtur",
	longitude: -76.28884255886078,
	latitude: 36.847399217467924,
	location: "MacArthur Memorial",
	artists: "Stanley Bleifeld",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_general_macarthur.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/General_MacArthur_Map.jpg"
    }, {
	id: 16,
	title: "General Douglas MacArhtur Wading Ashore at Inchon",
	longitude: -76.28917247056961,
	latitude: 36.8471330635308,
	location: "MacArthur Memorial",
	artists: "Kyong Sung Kim",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_macarthur_at_inchon.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/MacArthur_plaque_Map.jpg"
    }, {
	id: 17,
	title: "Dr. Martin Luther King Memorial",
	longitude: -76.28028631210327,
	latitude: 36.853205006263096,
	location: "Intersection of Brambleton and Church",
	artists: "Siska Aurand Landscape Architects",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_martin_luther_king.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/king_memorial_Map.jpg"
    }, {
	id: 18,
	title: "Revolutionary War Cannons",
	longitude: -76.29288464784622,
	latitude: 36.84511756130534,
	location: "Town Point Park",
	artists: "Unknown",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_revolutionary_war_cannons.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/Rev_War_Cannons_Map.jpg"
    }, {
	id: 19,
	title: "Armed Forces Memorial",
	longitude: -76.29576534032821,
	latitude: 36.84643547825072,
	location: "Town Point Park",
	artists: "Jim Cutler and Maggie Smith",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_armed_forces_memorial.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/Armed_Forces_Memorial_Map.jpg"
    }, {
	id: 20,
	title: "The Tourist",
	longitude: -76.2913504242897,
	latitude: 36.843810354143386,
	location: "Waterside Festival Market",
	artists: "Chaim Cross",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_tourist.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/Tourist_Map.jpg"
    }, {
	id: 21,
	title: "Norfolk 1682 Plaque",
	longitude: -76.29283100366592,
	latitude: 36.8450939502083,
	location: "Town Point Park",
	artists: "Norfolk Rotary Club",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_norfolk_1682.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/Norfolk_1682_Plaque_Map.jpg"
    }, {
	id: 22,
	title: "USS Antietam Anchor",
	longitude: -76.29422307014465,
	latitude: 36.84650416385308,
	location: "Town Point Park",
	artists: "United States Navy",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_antietam_anchor.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/Antietam_Anchor_Map.jpg"
    }, {
	id: 23,
	title: "Homecoming",
	longitude: -76.294284760952,
	latitude: 36.84626805683646,
	location: "Town Point Park",
	artists: "Stanley Bleifeld",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_homecoming.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/Homecoming_Map.jpg"
    }, {
	id: 24,
	title: "Waterwork",
	longitude: -76.29337012767792,
	latitude: 36.84528069232196,
	location: "Town Point Park",
	artists: "Steve Farley",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_waterwork.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/Waterwork_web_Map.jpg"
    }, {
	id: 25,
	title: "Norfolk Now",
	longitude: -76.29143357276916,
	latitude: 36.846134978014895,
	location: "Selden Arcade",
	artists: "David Joyce",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_norfolk_now.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/norfolk_now_Map.jpg"
    }, {
	id: 26,
	title: "Elizabeth River Festival",
	longitude: -76.29162669181824,
	latitude: 36.84546528752632,
	location: "Waterside Parking Garage 50 Martin's Lane",
	artists: "Crys Warlitner",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_elizabeth_river_festival.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/Elizabeth_River_Festival_ma.jpg"
    }, {
	id: 27,
	title: "Recording Angel",
	longitude: -76.28219604492187,
	latitude: 36.86135597589871,
	location: "Elmwood Cemetery",
	artists: "William Couper",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_recording_angel.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/recording_angel_Map.jpg"
    }, {
	id: 28,
	title: "Sergeant William Carney",
	longitude: -76.28112316131592,
	latitude: 36.860360222113776,
	location: "Elmwood Cemetery / West Point Section",
	artists: "Anonymous",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_sergeant_william_carney.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/William_Carney_Map.jpg"
    }, {
	id: 29,
	title: "Ripples",
	longitude: -76.29115998744964,
	latitude: 36.84813972153101,
	location: "US Federal Building",
	artists: "Athena Tacha",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_ripples.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/Ripples_Map.jpg"
    }, {
	id: 30,
	title: "The Flame of Liberty",
	longitude: -76.28510892391205,
	latitude: 36.84551894883931,
	location: "City Hall Plaza",
	artists: "Bill Wagner",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_flame_liberty.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/Flame_Liberty_Map.jpg"
    }, {
	id: 31,
	title: "Police Memorial Bell",
	longitude: -76.28592431545257,
	latitude: 36.8457614975043,
	location: "City Hall Plaza",
	artists: "Victor Pickett",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_police_memorial_bell.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/Memorial_Bell_Map.jpg"
    }, {
	id: 32,
	title: "Flight of the Seagulls",
	longitude: -76.29294097423553,
	latitude: 36.846658706232816,
	location: "Town Point Parking Garage 110 W Main Street",
	artists: "Barbara Kobylinska",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_flight_of_the_seagulls.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/Flight_of_the_Seagulls_map.jpg"
    }, {
	id: 33,
	title: "Ligne Indeterminee",
	longitude: -76.2928256392479,
	latitude: 36.84626376397486,
	location: "World Trade Center",
	artists: "Bernar Venet",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_ligne_indeterminee.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/Ligne_Indeterminee_Map.jpg"
    }, {
	id: 34,
	title: "Lone Sailor",
	longitude: -76.2944832444191,
	latitude: 36.8486484114708,
	location: "Wisconsin Square",
	artists: "Stanley Bleifeld",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_lone_sailor.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/Lone_Sailor_Map.jpg"
    }, {
	id: 35,
	title: "USS Norfolk Bell",
	longitude: -76.29451006650924,
	latitude: 36.84886519391871,
	location: "Wisconsin Square",
	artists: "United States Navy",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_uss_norfolk_bell.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/USS_Norfolk_Bell_Map.jpg"
    }, {
	id: 36,
	title: "General George Washington",
	longitude: -76.30439400672912,
	latitude: 36.86896962978572,
	location: "W.H. Taylor Elementary School",
	artists: "Cast of Houdons",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_george_washington.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/george_washington_Map.jpg"
    }, {
	id: 37,
	title: "Good Fortune Garage",
	longitude: -76.29087567329407,
	latitude: 36.8512862472124,
	location: "Freemason Street Garage",
	artists: "Cassandra Akers with Earn and Learn Apprentice",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_good_fortune_garage.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/Good_Fortune_Garage_Map.jpg"
    }, {
	id: 38,
	title: "Sign of the Times Garage",
	longitude: -76.29075765609741,
	latitude: 36.8464440639544,
	location: "Main Street Garage",
	artists: "Larry Bage with Earn and Learn Apprentice",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_sign_ofthe_times.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/Sign_ofthe_Times2_map.jpg"
    }, {
	id: 39,
	title: "Wind and Waves Garage",
	longitude: -76.29263520240783,
	latitude: 36.84829855335243,
	location: "Boush Street Garage",
	artists: "Diane Husson with Earn and Learn Apprentice",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_wind_and_waves_garage.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/Wind_and_Waves_map.jpg"
    }, {
	id: 40,
	title: "All Things Within All Things",
	longitude: -76.27678871154785,
	latitude: 36.877080297784346,
	location: "Virginia Zoo",
	artists: "Matthew Gray Palmer",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_zoo_all_things.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/Map_Zoo_All_Things_Within_A.jpg"
    }, {
	id: 41,
	title: "Canada Geese",
	longitude: -76.29034996032715,
	latitude: 36.85314061915646,
	location: "York Street Parking Garage",
	artists: "Laura Grant",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_canada_geese_garage.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/map_Laura_Grant_yorkstgarag.jpg"
    }, {
	id: 42,
	title: "Norfolk Attractions",
	longitude: -76.2922677397728,
	latitude: 36.84750224454971,
	location: "Plume Street Parking Garage",
	artists: "Jeannine Harkleroad",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_norfolk_attractions_garage.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/map_Jeannine_harkleroad_plu.jpg"
    }, {
	id: 43,
	title: "Symbols of Peace",
	longitude: -76.28658413887024,
	latitude: 36.84587740544421,
	location: "Commercial Place Parking Garage",
	artists: "Richard Ward",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_symbols_peace_garage.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/map_RichardWard_CommericalG.jpg"
    }, {
	id: 44,
	title: "Sunburst",
	longitude: -76.2509536743164,
	latitude: 36.952978390544594,
	location: "Pretlow Library",
	artists: "Brian Zentz",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_sunburst.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/map_pretlow_sunburst.jpg"
    }, {
	id: 45,
	title: "Book Migration",
	longitude: -76.28988862037658,
	latitude: 36.84669304894143,
	location: "Plume Street and Atlantic Blvd",
	artists: "Anne Bousquet",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_book_migration.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/map_book_migration.jpg"
    }, {
	id: 46,
	title: "Storyteller",
	longitude: -76.24159812927246,
	latitude: 36.89753766915939,
	location: "Norview Community Center",
	artists: "Madeline Weiner",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_storyteller.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/storyteller_map.jpg"
    }, {
	id: 47,
	title: "Enchanted Garden - Gate",
	longitude: -76.24142646789551,
	latitude: 36.869596198853394,
	location: "Coleman Place Elementary School",
	artists: "Garth Edwards",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_enchanted_garden_gate.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/coleman_elementary_gate_map.jpg"
    }, {
	id: 48,
	title: "Enchanted Garden - Wall Mural",
	longitude: -76.24121189117431,
	latitude: 36.86945886908651,
	location: "Coleman Place Elementary School",
	artists: "Garth Edwards",
	url: "http://www.norfolkva.gov/cultural_affairs/downtown_art_enchanted_garden_wall_mural.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Downtown_Art/coleman_elem_wallmural_map.jpg"
    }, { 
	id: 49,
	title: "Raphael",
	longitude: -76.20270878076553,
	latitude: 36.90468015361784,
	location: "Statuary Vista - Norfolk Botanical Garden",
	artists: "Sir Moses Jacob Ezekiel",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_raphael.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Raphael_Map2.jpg"
    }, {
	id: 50,
	title: "Canova",
	longitude: -76.20245665311813,
	latitude: 36.90433484167144,
	location: "Statuary Vista - Norfolk Botanical Garden",
	artists: "Sir Moses Jacob Ezekiel",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_canova.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Canova_Map.jpg"
    }, {
	id: 51,
	title: "DaVinci",
	longitude: -76.20258808135986,
	latitude: 36.90450857023733,
	location: "Statuary Vista - Norfolk Botanical Garden",
	artists: "Sir Moses Jacob Ezekiel",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_davinci.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/DaVinci_Map.jpg"
    }, {
	id: 52,
	title: "Crawford",
	longitude: -76.20279729366302,
	latitude: 36.90481313047233,
	location: "Statuary Vista - Norfolk Botanical Garden",
	artists: "Sir Moses Jacob Ezekiel",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_crawford.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Crawford_Map.jpg"
    }, {
	id: 53,
	title: "Rubens",
	longitude: -76.2023976445198,
	latitude: 36.90421044319604,
	location: "Statuary Vista - Norfolk Botanical Garden",
	artists: "Sir Moses Jacob Ezekiel",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_rubens.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Rubens_Map.jpg"
    }, {
	id: 54,
	title: "Phidias",
	longitude: -76.20235204696655,
	latitude: 36.904122506220396,
	location: "Statuary Vista - Norfolk Botanical Garden",
	artists: "Sir Moses Jacob Ezekiel",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_phidias.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Phidias_Map.jpg"
    }, {
	id: 55,
	title: "Durer",
	longitude: -76.20246201753616,
	latitude: 36.90408604451783,
	location: "Statuary Vista - Norfolk Botanical Garden",
	artists: "Sir Moses Jacob Ezekiel",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_durer.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Durer_Map.jpg"
    }, {
	id: 56,
	title: "Rembrandt",
	longitude: -76.2025237083435,
	latitude: 36.904193284769725,
	location: "Statuary Vista - Norfolk Botanical Garden",
	artists: "Sir Moses Jacob Ezekiel",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_rembrandt.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Rembrandt_Map.jpg"
    }, {
	id: 57,
	title: "Murillo",
	longitude: -76.20259881019592,
	latitude: 36.904302669671395,
	location: "Statuary Vista - Norfolk Botanical Garden",
	artists: "Sir Moses Jacob Ezekiel",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_murillo.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Murillo_Map.jpg"
    }, {
	id: 58,
	title: "Titian",
	longitude: -76.20272219181061,
	latitude: 36.904482832696985,
	location: "Statuary Vista - Norfolk Botanical Garden",
	artists: "Sir Moses Jacob Ezekiel",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_titian.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Titian_Map.jpg"
    }, {
	id: 59,
	title: "Angelo",
	longitude: -76.20284020900726,
	latitude: 36.90465441613535,
	location: "Statuary Vista - Norfolk Botanical Garden",
	artists: "Sir Moses Jacob Ezekiel",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_angelo.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Angelo_Map.jpg"
    }, {
	id: 60,
	title: "Eagle and Chicks",
	longitude: -76.2029555439949,
	latitude: 36.90490964578607,
	location: "Norfolk Botanical Garden",
	artists: "Anonymous",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_eagle_chicks.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Eagle_and_Chicks_Map.jpg"
    }, {
	id: 61,
	title: "Bronze Maidens",
	longitude: -76.2012067437172,
	latitude: 36.90305653043056,
	location: "Norfolk Botanical Garden",
	artists: "Unknown",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_maidens.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Maidens_Map.jpg"
    }, {
	id: 62,
	title: "St. Francis",
	longitude: -76.20146960020065,
	latitude: 36.903238841228976,
	location: "Norfolk Botanical Garden",
	artists: "E. Mellon",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_stfrancis.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/St_Francis_Map.jpg"
    }, {
	id: 63,
	title: "Virgin and Child",
	longitude: -76.20116114616394,
	latitude: 36.9040410035671,
	location: "Norfolk Botanical Garden",
	artists: "Amleto Cataldi",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_vigin_child.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Virgin_Child_Map.jpg"
    }, {
	id: 64,
	title: "Hunters Herons",
	longitude: -76.19925141334533,
	latitude: 36.90399596258975,
	location: "Norfolk Botanical Garden",
	artists: "David Turner",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_hunter_herons.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Hunters_Herons_Map.jpg"
    }, {
	id: 65,
	title: "Season Maid Wheat",
	longitude: -76.20226621627807,
	latitude: 36.90332248956719,
	location: "Norfolk Botanical Garden",
	artists: "Anonymous",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_seasonmaid_wheat.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Season_Maid_Wheat_Map.jpg"
    }, {
	id: 66,
	title: "Season Maid Grape",
	longitude: -76.20177805423736,
	latitude: 36.903474772203836,
	location: "Norfolk Botanical Garden",
	artists: "Anonymous",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_seasonmaid_grape.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Season_Maid_Grape_Map.jpg"
    }, {
	id: 67,
	title: "Season Maid Iris",
	longitude: -76.20216429233551,
	latitude: 36.903144468634764,
	location: "Norfolk Botanical Garden",
	artists: "Anonymous",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_seasonmaid_iris.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Season_Maid_Iris_Map.jpg"
    }, {
	id: 68,
	title: "Season Maid Thistle",
	longitude: -76.20164930820465,
	latitude: 36.903195944609706,
	location: "Norfolk Botanical Garden",
	artists: "Anonymous",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_seasonmaid_thistle.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Season_Maid_Thistle_Map.jpg"
    }, {
	id: 69,
	title: "Turner Fish",
	longitude: -76.20204895734787,
	latitude: 36.90202271272335,
	location: "Norfolk Botanical Garden",
	artists: "David and William Turner",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_turner_fish.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Turner_fish_map.jpg"
    }, {
	id: 70,
	title: "Turner Bird",
	longitude: -76.2021455168724,
	latitude: 36.902009843534984,
	location: "Norfolk Botanical Garden",
	artists: "David and William Turner",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_turner_bird.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Turner_fish_map.jpg"
    }, {
	id: 71,
	title: "Turner Pelican",
	longitude: -76.2021991610527,
	latitude: 36.90208491376979,
	location: "Norfolk Botanical Garden",
	artists: "David and William Turner",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_turner_pelican.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Turner_pelican_map.jpg"
    }, {
	id: 72,
	title: "Turner Otter",
	longitude: -76.20218575000763,
	latitude: 36.902164273652,
	location: "Norfolk Botanical Garden",
	artists: "David and William Turner",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_turner_otter.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Turner_otter_map.jpg"
    }, {
	id: 73,
	title: "Turner Eagle",
	longitude: -76.20212405920028,
	latitude: 36.902254357742585,
	location: "Norfolk Botanical Garden",
	artists: "David and William Turner",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_turner_eagle.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Turner_eagle_map.jpg"
    }, {
	id: 74,
	title: "Turner Ducks",
	longitude: -76.20204895734787,
	latitude: 36.902166418512536,
	location: "Norfolk Botanical Garden",
	artists: "David and William Turner",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_turner_ducks.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Turner_ducks_map.jpg"
    }, {
	id: 75,
	title: "Turner Frog",
	longitude: -76.2020194530487,
	latitude: 36.902132100736715,
	location: "Norfolk Botanical Garden",
	artists: "David and William Turner",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_turner_frog.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Turner_frog_map.jpg"
    }, {
	id: 76,
	title: "Turner Goose",
	longitude: -76.20203018188476,
	latitude: 36.90228438574914,
	location: "Norfolk Botanical Garden",
	artists: "David and William Turner",
	url: "http://www.norfolkva.gov/cultural_affairs/botanical_garden_art_turner_goose.asp",
	imageurl: "http://www.norfolkva.gov/cultural_affairs/images/Botanical_Garden/Turner_goose_map.jpg"
    }                               
];
