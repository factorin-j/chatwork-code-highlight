(function () {
    'use strict';

    var doRenderChatCode = function (timeline) {
        var $timeline = $('<div></div>').html(timeline);
        var $messages = $timeline.find('.chatTimeLineMessage');

        if (!$messages.length) {
            return;
        }

        $messages.find('code.chatCode').each(function (i, block) {
            hljs.highlightBlock(block);
        });

        return $timeline.html();
    };

    var renderTimeLine = TimeLineView.prototype.renderTimeLine;
    TimeLineView.prototype.renderTimeLine = function (a, b) {
        b = doRenderChatCode(b);
        renderTimeLine.apply(TimeLineView, [a, b]);
    };
})();
