var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = chrome.extension.getURL('css/github.min.css');
document.querySelector('head').appendChild(link);

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = chrome.extension.getURL('js/highlight.min.js');
document.querySelector('body').appendChild(script);

var app = document.createElement('script');
app.type = 'text/javascript';
app.src = chrome.extension.getURL('js/app.js');
document.querySelector('body').appendChild(app);

