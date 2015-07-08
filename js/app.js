
//noinspection JSCheckFunctionSignatures
$(document).ready(function() {
    setInterval(function() {
        $('code.chatCode').each(function(i, block) {
            if (!$(block).hasClass('hljs')) {
                hljs.highlightBlock(block);
            }
        });
    }, 100);
});
