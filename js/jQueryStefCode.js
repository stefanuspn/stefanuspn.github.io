/*
  jQuery StefCode with Sweet Alert Plugin
*/
+function($){
 
  $.fn.stefcode = function(settings){
    var element = this;
    var codex = $.extend({
       "code": 67,
       "ctrlcode":83,
       "ctrlshift":73,
       "alt" : 9,
       callback: function() {}
        },arguments[0] || {});

  

    //kode plugin kita, tugasnya untuk menambahkan teks
   $(element).bind('contextmenu cut ', function(e) {
        e.preventDefault();
       swal('Oops!', 'Sorry Gan Klik Kanan nya Gak Bisa hehe!.', 'error'); setTimeout(1000);
        return false;
    });

return this.each(function() {
   $(element).bind('keydown', function(e) {

        if (e.keyCode==codex.code ) { // fungsi shortcut
              codex.callback.call(this);
          
           }       
           
            if(e.ctrlKey&&(e.which==codex.ctrlcode)) { // fungsi shortcut
                
                codex.callback.call(this);
                e.preventDefault();
        }

         if(e.altKey && (e.which== codex.alt)) {
           codex.callback.call(this);
                e.preventDefault();
        }

        if (e.ctrlKey && e.shiftKey && (e.which)==codex.ctrlshift){
            codex.callback.call(this);
            e.preventDefault();
        }

   });
 });
  };
 
}(jQuery);