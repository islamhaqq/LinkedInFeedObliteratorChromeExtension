window.addEventListener('load', () => {
  const feedSelector = 'div.core-rail'; // This selector might change; use the correct one
  const feed = document.querySelector(feedSelector);
  if (feed) {
    feed.remove(); // This removes the feed element
  }
});
