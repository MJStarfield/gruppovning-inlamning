/**
 * An activity.
 * @param {string} name
 * @param {string} description
 * @param {string} image
 */
const item = (name, description, image) => ({
  name, description, image
});

export default [
  item(
    "Grillplatser",
    "Motala Camping har flera grillplatser, med brännvirke i närheten.",
    "/assets/grillplats.png"
  ),

  item(
    "Lekplats",
    "Här kan barnen leka medan maten förbereds och grillas.",
    "/assets/lekplats.png"
  ),

  item(
    "Volleyboll",
    "⛱ På sjöstranden finns det 2 volleybollplaner, hämta med en boll och njut av solen!",
    "/assets/volleyball.jpg"
  ),
]
