/**
 * An attraction.
 * @param {string} name
 * @param {string} description
 * @param {string} image
 */
const item = (name, description, image) => ({
  name, description, image
});

export default [
  item(
    "Motala Motormuseum",
    "Här kan man lätt gå omkring i flera timmar och här finns nåt för alla, även de som inte är så intresserade av gamla bilar, motorcyklar.",
    "/assets/motormuseum.png"
  ),
  item(
    "Vättern",
    "Jättefina naturområden med många fina naturreservat både för gående och cyklister, många mindre och större orter och städer, samt Visingsö.",
    "/assets/vattern.png"
  ),
  item(
    "Borenshults Slussar",
    "Alltid lika intressant att se slussningarna. Spännande och lärorikt för barn. Vacker miljö och god glass i kaféet.",
    "/assets/borenhultsslussar.jpeg"
  ),
  item(
    "Godegårds Säteri",
    "I norra delen av Motala, närmare bestämt i Godegård, finns en pärla bland museer. Svenskt porslingsmuseum är Sveriges största porslinsmuseum och ligger vackert beläget vid Godegårds säteri.",
    "/assets/godegards.png"
  ),
  item(
    "Övralid",
    "Mycket vackert och mysigt ställe! Det finns en guidad tur och guiden är mycket kunnig och duktig på att berätta om von Heidenstam och hans liv.",
    "/assets/ovralid.png"
  ),
];
