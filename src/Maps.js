let pokemon = {
  default: { imgID: null, name: "", type: "", exp: 0 }, //pokeball
  0: { imgID: 4, name: "Charmander", type: "Fire", exp: 2 },
  1: { imgID: 7, name: "Squirtle", type: "Water", exp: 4 },
  2: { imgID: 11, name: "Metapod", type: "Bug", exp: 5 },
  3: { imgID: 12, name: "ButterFree", type: "Flying", exp: 1 },
  4: { imgID: 25, name: "Pikachu", type: "Electric", exp: 3 },
  5: { imgID: 39, name: "Jigglypuff", type: "Normal", exp: 4 },
  6: { imgID: 94, name: "Gengar", type: "Poison", exp: 5 },
  7: { imgID: 1, name: "Bulbasaur", type: "Bug", exp: 1 },
  8: { imgID: 30, name: "Rhino", type: "Water", exp: 3 },
  9: { imgID: 40, name: "Clefairy", type: "Normal", exp: 10 },
  10: { imgID: 45, name: "FlowerGrape", type: "Bug", exp: 4 },
  11: { imgID: 55, name: "BigBird", type: "Flying", exp: 5 },
};

let typeDB = {
  Normal: { color: "lightgray" },
  Fire: { color: "lightcoral" },
  Water: { color: "lightskyblue" },
  Flying: { color: "AliceBlue" },
  Poison: { color: "mediumpurple" },
  Bug: { color: "lightgreen" },
  Electric: { color: "lightyellow" },
};

export { mapIdToProps, mapNumToId, mapTypeToColor, pokemon, typeDB };
