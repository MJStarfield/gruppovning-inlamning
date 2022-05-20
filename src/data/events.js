/**
 * An event.
 * @param {string} name
 * @param {string} description
 * @param {Date} startDate
 * @param {Date} endDate
 */
const item = (name, description, startDate, endDate) => ({
  name,
  description,
  startDate,
  endDate,
});

export default [
  item(
    "Rock konsert",
    "Asking Alexandria , Attila, sleeping with sirens & memphis may fire. ",
    new Date('2021-10-10T18:00Z'),
    new Date('2021-10-10T21:00Z'),
  ),
  item(
    "Säsongstart Disc Golf Sommar",
    "På sommaren börjar vår Disc Golf tävling igång, se till att anmäla dig i tid!",
    new Date('2022-06-10T14:00Z'),
    new Date('2022-07-10T21:00Z'),
  ),

  item(
    "Dansbandshelg",
    "Denna helg bjuder på livemusik från bl.a Bennyz, Hassez och Nissez! På med dansskorna och bugga loss!",
    new Date('2022-06-11T18:00Z'),
    new Date('2022-10-12T23:00Z'),
  ),

  item(
    "Paintball",
    "Nu är det dags för paintball season. Upptäck våran spelplan som kommer att ha ett zombie tema, spela med familj och vänner. Bekämpa apocalypsen ",
    new Date('2022-09-10T14:00Z'),
    new Date('2022-10-10T21:00Z'),
  ),

  item(
    "Volleybollturnering",
    "Den årliga volleybollturneringen går av stapeln så glöm ej att anmäla ert lag i god tid. Fina priser finns att vinna!",
    new Date('2022-07-09T10:00Z'),
    new Date('2022-07-09T12:00Z'),
  ),

  item(
    "Kurs i akvarellmålning",
    "Lär dig att måla vackra tavlor med ett av Sveriges mest kända ansikten: Lars Lerin!",
    new Date('2022-07-17T14:00Z'),
    new Date('2022-07-17T18:00Z'),
  ),

  item(
    "Camping",
    "Året runt!",
    new Date('2022-01-01T00:00Z'),
  ),
];
