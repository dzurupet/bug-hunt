;(function(i, s, o, r, g, v, a, m) {
  g = v ? g + '?v=' + v : g
  i['BrandEmbassy'] = r
  i[r] =
    i[r] ||
    function() {
      ;(i[r].q = i[r].q || []).push(arguments)
    }
  i[r].l = +new Date()
  a = s.createElement(o)
  m = s.getElementsByTagName(o)[0]
  a.async = 1
  a.src = g + '?' + Math.round(Date.now() / 1000 / 3600)
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'brandembassy', 'https://livechat-static.brandembassy.com/3/chat.js')

brandembassy('init', 7141, 'chat_428cdf8c-885f-4b76-b844-0a12092c1272')
brandembassy('setWindowWidth', '300px')
brandembassy('setWindowHeight', '500px')
brandembassy('setTranslation', 'replyBoxPlaceholder', 'Write a message')
brandembassy('sendFirstMessageAutomatically')
