var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.6/styles/github.min.css';
document.querySelector('head').appendChild(link);

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.6/highlight.min.js';
document.querySelector('body').appendChild(script);

var app = document.createElement('script');
app.type = 'text/javascript';
app.src = chrome.extension.getURL('js/app.js');
document.querySelector('body').appendChild(app);

