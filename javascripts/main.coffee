$ ->
  hammertime = $('.hammertime').hammer(
    stop_browser_behavior: true
  )
  handleEv = (ev) ->
    ev.preventDefault()
    ev.gesture.preventDefault()
    $ul = $('ul.events')
    unless $ul.find('li.'+ev.type).length
      $ev = $('<li>').addClass(ev.type).html(ev.type)
      $ul.append($ev)

  hammertime.on("tap doubletap hold release drag swipe pinch rotate", handleEv)
