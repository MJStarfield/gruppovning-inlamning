/**
 * A spa option.
 * @param {string} name
 * @param {string} description
 * @param {string} image
 * @param {number} price
 */
const item = (name, description, image, price) => ({
  name, description, image, price
});

export default [
  item(
    "Klassisk Helkroppsmassage",
    "Ta ett djupt andetag och njut av din stund. En Calm Mind-ritual inleder behandlingen och du får sedan njuta av en klassiskt, skräddarsydd massage med en ekologisk och näringsrik kroppsolja.",
    "/assets/spa1.jpg",
    699
  ),
  item(
    "Hotstone-massage",
    "En helkroppsbehandling med varma lavastenar som stimulerar alla dina sinnen. Behandlingenär energigivande och lindrar muskelvärk, samtidigt som den ökar blod-, och lymfcirkulationen. I 80-minutersbehandlingen ingår det även lättare ansiktsrengöring och skalpmassage.",
    "/assets/spa2.jpg",
    699
  ),
  item(
    "Klassisk ansiktsbehandling",
    "En renande och djuprengörande ansiktsbehandling för alla hudtyper. Behandlingen inleds med rengöring och peeling som avlägsnar torra hudceller, sedan följer en lyxig massage för bättre cirkulation, ansiktsmask samt växtbaserat serum och crème som ger näring åt huden.",
    "/assets/spa3.jpg",
    499
  ),
  item(
    "Ansiktsrengöring",
    "I denna ansiktskur ingår ansiktsrengöring och en ljuvlig ansiktsmassage med aromaolja. Behandlingen avslutas med ett lyxigt serum och en härlig dagcrème. Huden tillförs ny näring och resultatet är en hud med fin lyster",
    "/assets/spa4.jpg",
    299
  ),
  item(
    "Ansiktsmask",
    "Vi applicerar en ansiktsmask som är anpassad för din hud och ditt behov. Under tiden den verkar får du njuta av en hårbottenmassage. Masken avlägsnas med en varm, fuktad lavendelhandduk och huden återfuktas med serum och crème.",
    "/assets/spa5.jpg",
    299
  ),
];