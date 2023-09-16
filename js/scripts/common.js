/**
 * Get a random number between min and max with optional decimal places
 *
 * @param {number} min
 * @param {number} max
 * @param {number} [decimalPlaces=0]
 * @returns {number}
 */
const genRand = (min, max, decimalPlaces = 0) => (Math.random() * (max - min) + min).toFixed(decimalPlaces) * 1;

/**
 * Generate blobs
 * Based on {@link https://codepen.io/LekovicMilos/pen/omVzYv | Milos Lekovic's Pen}
 *
 * @returns {string}
 */
const generateBorderRadiusBlob = () => {
  const percentage1 = genRand(25, 75);
  const percentage2 = genRand(25, 75);
  const percentage3 = genRand(25, 75);
  const percentage4 = genRand(25, 75);
  const percentage11 = 100 - percentage1;
  const percentage21 = 100 - percentage2;
  const percentage31 = 100 - percentage3;
  const percentage41 = 100 - percentage4;
  const borderRadius = `${percentage1}% ${percentage11}% ${percentage21}% ${percentage2}% / ${percentage3}% ${percentage4}% ${percentage41}% ${percentage31}%`;
  return borderRadius;
};

/**
 * Fallback function to copy a text to the clippboard
 *
 * @param {string} text
 */
const fallbackCopyTextToClipboard = (text) => {
  const $temp = $('<input>');
  $('body').append($temp);
  $temp.val(text).select();
  document.execCommand('copy');
  $temp.remove();
};

/**
 * Copy a text to the clippboard
 *
 * @param {string} text
 */
const copyToClipboard = (text) => {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text);
};

/**
 * Tabs
 * Based on {@link https://codepen.io/mburridge/pen/rNVeaKv | Matt Burridge's Pen}
 * @example
 * tabs({ buttonSelector: ".jobs__tabs__button", contentSelector: ".job" });
 *
 * @param {Object} opt
 * @param {string} opt.buttonSelector
 * @param {string} opt.contentSelector
 */
function tabs(opt) {
  const tabs = document.querySelectorAll(opt.buttonSelector);
  tabs.forEach((tab) => tab.addEventListener('click', () => activateTab(opt, tab.dataset.tab)));

  // Select first as default
  activateTab(opt, tabs[0].dataset.tab);
}

/**
 * Activate a tab
 *
 * @param {Object} opt
 * @param {string} opt.buttonSelector
 * @param {string} opt.contentSelector
 * @param {string} tabId
 */
const activateTab = (opt, tabId) => {
  const tabs = document.querySelectorAll(opt.buttonSelector);
  const tabContents = document.querySelectorAll(opt.contentSelector);

  tabs.forEach((tab) => tab.classList.remove('active'));
  tabContents.forEach((tabContent) => tabContent.classList.remove('active'));

  document.querySelector('#tab__' + tabId).classList.add('active');
  document.querySelector('#tabcontent__' + tabId).classList.add('active');
};
