function removeLinkedInFeed() {
    console.log('LinkedIn Feed Obliterator - Attempting to find and remove the feed...');
    const feedAriaLabel = 'Main Feed';
    const allSections = document.querySelectorAll('[aria-label]');
    
    let feedFound = false;
    
    allSections.forEach(section => {
      if (section.getAttribute('aria-label') === feedAriaLabel) {
        console.log('LinkedIn Feed Obliterator - Found the main feed section, removing it...');
        section.remove();
        feedFound = true;
      }
    });
  
    return feedFound;
  }
  
  // Attempt to remove the feed immediately in case the page is already loaded
  const feedRemoved = removeLinkedInFeed();
  let attempts = 0;
  
  // If the feed was not removed, start periodic checks

    console.log('Feed not found on initial try, starting periodic checks...');
    const intervalId = setInterval(() => {
      const foundAndRemoved = removeLinkedInFeed();
      attempts++;
      if (foundAndRemoved) {
        console.log('LinkedIn Feed Obliterator - Feed found and removed in later attempt.');
        clearInterval(intervalId);
      }
      if (attempts > 10) {
        console.log('LinkedIn Feed Obliterator - Feed not found after 10 attempts, giving up.');
        clearInterval(intervalId);
      }
    }, 1000); // Check every 1000 milliseconds (1 second)
  