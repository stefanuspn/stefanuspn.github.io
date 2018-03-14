/*!
 * Author Stefanus Prasetyo Nugroho
 * stefanusnugroho585@gmail.com
 * CopyRight 2017

 * if(e.ctrlKey&&(e.which==67))  //jika ctrl+c pada keyboard ditekan 

 * if(e.ctrlKey&&(e.which==85)) // jika ctrl+u pada keyboard ditekan

 * bind('contextmenu cut copy') // jika klik kanan pada pc/laptop/hp

 * if(e.ctrlKey&&(e.which==83)) // jika ctrl+s pada keyboard ditekan

 * if (e.ctrlKey && e.shiftKey && e.which === 73) // jika ctrl+shift+i pada keyboard ditekan   


Referensi 

 * https://stackoverflow.com/questions/13408233/event-binding-ctrl-shift-n
 * http://www.theasciicode.com.ar/ascii-control-characters/shift-in-ascii-code-15.html
 

*/
 /*    document.write("<h3>Your Browser :</h3>");
            document.write("Browser : "+browser+"<br/>");
            document.write("Browser Version : "+browser_version+"<br/>");
            document.write("Code Name : "+navigator.appCodeName+"<br/>");
            document.write("Name : "+navigator.appName+"<br/>");
            document.write("Language : "+navigator.language+"<br/>");
            document.write("Platform : "+navigator.platform+"<br/>");
            document.write("Version : "+navigator.appVersion+"<br/>");
            document.write("User Agent : "+navigator.userAgent+"<br/>");*/

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

      $(document).ready(function(){
       $(window).stefcode({
          ctrlcode : 67 , // menekan fungsi keyboard
           callback: function() {
          swal('Oops!', 'Sorry Gan copy web Gak Bisa hehe!.', 'error'); setTimeout(1000);
                }
           });

       $(window).stefcode({
          ctrlcode : 85 , // menekan fungsi keyboard
           callback: function() {
              swal('Oops!', 'Sorry Gan CTRL+U Gak Bisa hehe!.', 'error'); setTimeout(1000);
                }
           });

       $(window).stefcode({
          ctrlcode:83,
          callback: function(){
            swal('Oops!', 'Sorry Gan Tidak Diperkenankan Save Web Ini.', 'error'); setTimeout(1000);
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
 


  $(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 100) {
            $('#tombolScrollTop').fadeIn();
        } else {
            $('#tombolScrollTop').fadeOut();
        }
    });
});



function scrolltotop()
{
    $('html, body').animate({scrollTop : 0},500);
}

function browser(){
                var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
                if(/trident/i.test(M[1])){
                    tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
                    return 'IE '+(tem[1]||'');
                    }   
                if(M[1]==='Chrome'){
                    tem=ua.match(/\bOPR\/(\d+)/)
                    if(tem!=null)   {return 'Opera '+tem[1];}
                    }   
                M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
                if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
                return M[0];
                }
 
            function browser_version(){
                var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];                                                                                                                         
                if(/trident/i.test(M[1])){
                    tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
                    return 'IE '+(tem[1]||'');
                    }
                if(M[1]==='Chrome'){
                    tem=ua.match(/\bOPR\/(\d+)/)
                    if(tem!=null)   {return 'Opera '+tem[1];}
                    }   
                M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
                if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
                return M[1];
                }
                
            var browser=browser();  
            var browser_version=browser_version();
 
       

window.onload = function() { jam(); }

 function jam() {
  var e = document.getElementById('jam'),
  d = new Date(), h, m, s;
  h = d.getHours();
  m = set(d.getMinutes());
  s = set(d.getSeconds());

  e.innerHTML = h +':'+ m +':'+ s;

  setTimeout('jam()', 1000);
 }

 function set(e) {
  e = e < 10 ? '0'+ e : e;
  return e;
 }

! function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'twitter-wjs');


function nextproses(){
        swal({
  title: "Loading...!",
  text: "Menuju Halaman Login.",
  imageUrl: "assets/images/progress.gif"
}); setTimeout(function(){location.href='login.html'} , 3000);
    }

function move() {
  var elem = document.getElementById("myBarHTML");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 90) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function php() {
  var elem = document.getElementById("myBarPHP");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 60) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function css() {
  var elem = document.getElementById("myBarCSS");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 80) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function js() {
  var elem = document.getElementById("myBarJS");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 70) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function java() {
  var elem = document.getElementById("myBarJAVA");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 20) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function vbnet() {
  var elem = document.getElementById("myBarVBNET");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 20) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function photoshop() {
  var elem = document.getElementById("myBarPHOTOSHOP");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 20) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}




