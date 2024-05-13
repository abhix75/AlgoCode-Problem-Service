const marked = require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkedownContent(markdownContent){
    const turndownService = new TurndownService();

    //1. Convert Markdown to HTML
    const convertedHtml = marked.parse(markdownContent);
    console.log("Converted Html",convertedHtml);

    //2. Sanitize html
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml,{
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags
    });

    console.log("sanitized html",sanitizedHtml);

    //3. Convert the sanitized html back to markdown

    const sanitizeMarkdown = turndownService.turndown(sanitizedHtml);

    console.log("sanitized markdown",sanitizeMarkdown);

    return sanitizeMarkdown;
}

module.exports = sanitizeMarkedownContent;