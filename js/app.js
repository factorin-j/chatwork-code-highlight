(function () {
    'use strict';

    function highlight(timeline) {
        var $timeline = $('<div>').html(timeline);
        var $messages = $timeline.find('.chatTimeLineMessage');
        if (!$messages.length) {
            return;
        }

        $messages.find('code.chatCode').each(function (i, block) {
            hljs.highlightBlock(block);
        });

        return $timeline.html();
    }

    var renderTimeLine = TimeLineView.prototype.renderTimeLine;
    TimeLineView.prototype.renderTimeLine = function (a, b) {
        b = highlight(b);
        renderTimeLine.apply(TimeLineView, [a, b]);
    };
})();
