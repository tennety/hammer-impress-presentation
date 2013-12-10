(function() {
  $(function() {
    var hammertime, handleEv;
    hammertime = $('.hammertime').hammer({
      stop_browser_behavior: true
    });
    handleEv = function(ev) {
      var $ev, $ul;
      ev.preventDefault();
      ev.gesture.preventDefault();
      $ul = $('ul.events');
      if (!$ul.find('li.' + ev.type).length) {
        $ev = $('<li>').addClass(ev.type).html(ev.type);
        return $ul.append($ev);
      }
    };
    return hammertime.on("tap doubletap hold release drag swipe pinch rotate", handleEv);
  });

}).call(this);
