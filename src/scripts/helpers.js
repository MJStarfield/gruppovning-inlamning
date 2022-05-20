/**
 * Sort an array of objects based on the objects' `name` property.
 * @param {Array.<Type>} arr
 * @return {Array.<Type>}
 * @template Type
 */
export function sortByPropertyName(arr) {
  const newArr = [...arr];
  return newArr.sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Open URL in a new tab.
 * @param {string} url
 */
export function openURLInNewTab(url) {
  window.open(url, "_blank");
}

/**
 * @param {Date} startDate
 * @param {Date} endDate
 */
export function fromNow(startDate, endDate) {
  const now = new Date().getTime();
  const then = startDate.getTime();

  const diff = now - then;

  let str = "";

  if (diff < 0) {
    // Will happen.
    const days = (-diff / 1000 / 60 / 60 / 24).toFixed(0);

    str += "Om " + days + " dagar.";
  } else if (endDate) {
    // Has happened.
    const diff = now - endDate.getTime();
    const days = (diff / 1000 / 60 / 60 / 24).toFixed(0);

    str += days + " dagar sedan.";
  } else {
    str += "Nu!";
  }

  return str;
}

export function toTop(behavior) {
  document.getElementById("container").scroll({ top: 0, behavior: behavior ?? 'smooth' });
}
