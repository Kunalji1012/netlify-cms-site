fetch('content/about.md')
  .then(response => response.text())
  .then(markdown => {
    document.getElementById('about-content').innerHTML = marked.parse(markdown);
  })
  .catch(err => {
    console.error('Error loading content:', err);
    document.getElementById('about-content').textContent = "Failed to load content.";
  });
