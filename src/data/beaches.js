/**
 * A swimming place.
 * @param {string} name
 * @param {string} description
 * @param {string} image
 */
const item = (name, description, image) => ({
  name, description, image
});

export default [
  item(
    "Motala Badstrand",
    "Vid hamnen har du en bad strand lämplig för att sola dig och njuta av vätterns vågor.",
    "./assets/motala_bad.png",
  ),

  item(
    "Råssnäsbadet",
    "Vid Vätterns strand finns friluftsområdet Råssnäsudden. Vid Råssnäsbadet finns bad med brygga, lekplats och ett hopptorn med möjlighet att hoppa från 10:an för den som vågar. Här finns generösa grönytor för badgästerna. Badet ligger i nära anslutning till natursköna motionsspår och strövområden.",
    "./assets/rassnasbadet.jpg",
  ),

  item(
    "Jerusalembadet",
    "En badplats vid Vättern med väl tilltagna grönytor och en badbrygga.",
    "./assets/jerusalembadet.jpg",
  )
];
