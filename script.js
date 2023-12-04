function openPopup(title, content) {
      document.getElementById('popup-title').innerText = title;
      document.getElementById('popup-content').innerText = content;
      document.getElementById('popup').style.display = 'block';
  }
  
  function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('closing');
    setTimeout(() => {
      popup.style.display = 'none';
      popup.classList.remove('closing');
    }, 500);
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closePopup();
    }
  });

  function openPopup(title, shortDescription, fullText, imageUrl) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-content').innerHTML = `<p>${shortDescription}</p><p>${fullText}</p>`;
    document.getElementById('popup-image').src = imageUrl;
    document.getElementById('popup').style.display = 'block';
}
var sum = 1000; // rank 1.
var time = 250;

$(document).ready(function() {
  

  
$('.js-podium').each(function(){
  var t = $(this);
  setTimeout( function(){ 
  t.addClass('is-visible');
  var h = t.data('height');
  console.log(h);
  t.find('.scoreboard__podium-base').css('height', h).addClass('is-expanding');
    }, time);
   time += 250;
});
  
   randomizeData();
   startBars();
   sortItems();
   countUp();
  // randomizePodium();
   
  
  setInterval(function(){ 
    
    randomizeData(); 
    startBars();
    sortItems();
    countUp();
    oneUp();
    $('.js-podium').removeClass('bump');
    podiumUpdate();
    
  }, 10000);
  
}); 


function countUp() {
  
  $('.scoreboard__item').each(function() {
  var $this = $(this),
      countTo = $this.data('count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {
    duration: 500,
    easing:'linear',
    step: function() {
      $this.find('.js-number').text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.find('.js-number').text(this.countNum);
      //alert('finished');
    }

    });  
  }); 
}

function randomizeData() {
  $('.scoreboard__item').each(function(){
   var rand = Math.floor(Math.random() * 900) + 1;
    $(this).data('count', rand );
    $(this).find('.js-number').text(rand);
  });
    
}

function startBars() {
 $('.js-bar').each(function() {
   console.log('running');
  // calculate %.
  var t = $(this);
   setTimeout( function(){ 
  var width = t.parent('.scoreboard__item').data('count'); 
  width = width  / sum * 100;
     width = Math.round(width);
  t.find('.scoreboard__bar-bar').css('width',  width + "%");
     t.parent('li').addClass('is-visible');
      }, time);
   time += 0;
  });
}

function sortItems() {
 tinysort.defaults.order = 'desc';
  
 var ul = document.getElementById('scoreboard__items')
    ,lis = ul.querySelectorAll('li')
    ,liHeight = lis[0].offsetHeight
;
ul.style.height = ul.offsetHeight+'px';
for (var i= 0,l=lis.length;i<l;i++) {
    var li = lis[i];
    li.style.position = 'absolute';
    li.style.top = i*liHeight+'px';
}
tinysort('ol#scoreboard__items>li', 'span.js-number').forEach(function(elm,i){
    setTimeout((function(elm,i){
        elm.style.top = i*liHeight+'px';
    }).bind(null,elm,i),40);
});
  
  
}

