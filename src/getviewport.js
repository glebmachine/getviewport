
;(function(){
  window.getViewport = function(){
    var viewport = false;

    function calcViewport() {
      var e = window, a = 'inner';
      if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
      }
      viewport = { width : e[ a+'Width' ] , height : e[ a+'Height' ] };

    }

    $(window).resize(function(){ viewport = false; })

    return function(){
      if (!viewport) calcViewport();
      return viewport;
    }
  }();
})
