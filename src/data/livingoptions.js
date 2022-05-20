/**
 * A living option.
 * @param {'tent' | 'trailer' | 'cabin'} type
 * @param {string} name
 * @param {string} description
 * @param {number} price
 * @param {string} id
 * @param {string} image
 */
const item = (type, name, description, price, id, image) => ({
  type,
  name,
  description,
  price,
  id,
  image,
});

const LivingOption = [
  item(
    "tent",
    "Partält",
    "Välj vårat härliga tvåmanna tält som ligger längs skogskanten med sikt mot sjön ",
    199,
    "Tent0",
    "./assets/parTent.jpg"
  ),

  item(
    "tent",
    "Familjetält",
    "Välj vårat härliga familjetält som rymmer (5 personer), som ligger i den lilla skogsdungen nära nöjesparken ",
    599,
    "Tent3",
    "./assets/familjeTent.jpg"
  ),

  item(
    "tent",
    "Solotält",
    "Välj vårat härliga enmanstält som ligger uppe nära och bra till hiking rundan",
    159,
    "Tent7",
    "./assets/enmansTent.jpg"
  ),

  item(
    "trailer",
    "Husvagn",
    "Välkommen till våran husvagnscamping. Ta med barnen ut på aktiviteter (info om aktiviteter finns under fliken 'information'). Priset gäller endast husvagnscamping.",
    650,
    "Trailer0",
    "https://static-cdn.sr.se/images/105/7115f0db-e879-4206-b442-54fbe9679a9c.jpg"
  ),

  item(
    "cabin",
    "Stugor",
    "Ta vara på våra härliga familjestugor anpassade för 4 personer. I priset ingår även 1 lunch per dag för varje familjemedlem på restaurant Ivars ",
    1000,
    "Cabin0",
    "https://savsjo.se/images/18.475318a016a916da59c5768/1558016568758/(2)%20(2)%20(2)%202.jpg"
  ),
];

//________________________________________________________________________________________________________________________________________________-

for (let index = 0; index < 2; index++) {
  const newItem = {
    ...LivingOption[0], // Tent0
    id: "Tent" + index + 1,
  };

  LivingOption.push(newItem);
}

//_____________________________________________________________________________________________________________________________________________________

for (let index = 0; index < 3; index++) {
  const newItem = {
    ...LivingOption[1], // Tent3
    id: "Tent" + index + 4,
  };

  LivingOption.push(newItem);
}

//________________________________________________________________________________________________________________________________________________-

for (let index = 0; index < 2; index++) {
  const newItem = {
    ...LivingOption[2], // Tent7
    id: "Tent" + index + 8,
  };

  LivingOption.push(newItem);
}

//________________________________________________________________________________________________________________________________________________-

for (let index = 0; index < 19; index++) {
  const newItem = {
    ...LivingOption[3], // Trailer0
    id: "Trailer" + index + 1,
  };

  LivingOption.push(newItem);
}
//________________________________________________________________________________________________________________________________________________-

for (let index = 0; index < 4; index++) {
  const newItem = {
    ...LivingOption[4], // Trailer0
    id: "Cabin" + index + 1,
  };

  LivingOption.push(newItem);
}

export default LivingOption;
