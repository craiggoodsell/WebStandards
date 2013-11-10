  $.fn.slide = function(timeOut) {
   var $elem = this;
   this.children(':gt(0)').hide();
   setInterval(function() {
    $elem.children().eq(0).toggle().next().toggle().end().appendTo($elem);
   }, timeOut || 3000);
  };

  $(function() {
   $('.slide').slide();
  });