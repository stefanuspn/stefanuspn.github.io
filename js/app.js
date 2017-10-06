/*!
 * Code By SekolahKoding.com
 * Modified Stefanus Prasetyo Nugroho
 * CopyRight 2017
 */
 $(function() {

  var index = 0,
    items = $('.kontenhp2 div'),
    total = items.length;

  function slide() {

    var item = $('.kontenhp2 div').eq(index);
    items.hide();
    item.css('display', 'block');
  } 

  var autoslide = setInterval(function() {

    index +=1;

    if( index > total - 1) index = 0;
    slide();

  }, 1500);
});

/** -------------------------------------------------------------------------------------------------------------------*/


/*!
 * Author Stefanus Prasetyo Nugroho
 * stefanusnugroho585@gmail.com
 * CopyRight 2017
 
*/

$(function() {
    $(document).bind('contextmenu cut copy paste', function(e) {
        toastr.error('Maaf.Fitur Klik Kanan  Dinonaktifkan', 'Notifikasi', {
            timeOut: 3000,
            closeButton: true,
            showMethod: 'slideDown',
            hideMethod: 'slideUp',
            positionClass: 'toast-bottom-left'
        })
        return false;
    });
    
    $(document).keydown(function(e) {
       if(e.ctrlKey&&(e.which==67||e.which==83||e.which==85||e.which==86))  {
            toastr.info('Maaf, anda tidak bisa melihat source', 'Notifikasi', {
                timeOut: 3000,
                closeButton: true,
                showMethod: 'slideDown',
                hideMethod: 'slideUp',
                positionClass: 'toast-bottom-left'
            })
            return false;
        }
    }); 
});

$(function(){
        $("#masuk").click(function(){
        $(".hp1").css({"margin-top": "5%"});
        $(".hp2").css({"margin-top": "5%"});  
        $(".register-page").hide();
        $(".login").show();
        $(".punyaakun").hide();
        $(".tidakpunyaakun").show();
    });
    
});

    $(function(){
        $("#buat").click(function() {
           $(".hp1").css({"margin-top": "9.5%"});
           $(".hp2").css({"margin-top": "10%"}); 
          $(".register-page").show();
          $(".punyaakun").show();
          $(".login").hide();
          $(".tidakpunyaakun").hide();

        });
      });
           

 $(function() {
            var sideslider = $('[data-toggle=collapse-side]');
            var sel = sideslider.attr('data-target');
            var sel2 = sideslider.attr('data-target-2');
            sideslider.click(function(event) {
                $(sel).toggleClass('in');
                $(sel2).toggleClass('out');
            });
        });

/* Plugin Lightbox.js*/
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
})

  $(function() {
    $('.nav-link').click(function(e) {
        var tujuan = $(this).attr('href');
        // tangkap element
        var elementtuju = $(tujuan);

        // pindah scroll
        $('section').animate({
            scrollTop: elementtuju.offset().top - 50
        });

        // e.preventDefault()
    });

});

  
