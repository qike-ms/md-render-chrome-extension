// content.js
// This script runs on the page of the opened .md file.

// The raw markdown is inside the <body> tag, but wrapped in a <pre> tag.
const rawMarkdown = document.body.textContent;

// Clear the existing body
document.body.innerHTML = '';

// Create a container for our rendered content
const container = document.createElement('div');
container.className = 'markdown-body'; // Use the CSS class from our stylesheet
document.body.appendChild(container);

// Use the marked.js library (which we included in the manifest)
// to convert the markdown text to HTML.
const renderedHtml = marked.parse(rawMarkdown);

// Set the container's content to the newly rendered HTML.
container.innerHTML = renderedHtml;

// Optional: Change the title of the browser tab
try {
    const filePath = window.location.pathname;
    const fileName = filePath.split('/').pop();
    document.title = fileName;
} catch (e) {
    //
}

