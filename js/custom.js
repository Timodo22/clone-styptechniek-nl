// ------- PRELOADER -------//
$(window).load(function(){
  $('.preloader').fadeOut("slow"); // set duration in brackets    
});


// emailjs //


const onSubmit = (e) => {
  e.preventDefault();
  var nameUser = document.getElementById('nameUser').value;
  var emailUser = document.getElementById('emailUser').value;
  var messageUser = document.getElementById('messageUser').value;
  if (nameUser.length === 0 || emailUser.length === 0 || messageUser.length === 0) {
    console.log("empty values");
  } else {
    emailjs
    .send(
      "service_6f9l717", // service id
      "template_7rxpspf", // template id
      { to_name: "Thomasz", from_name: nameUser, reply_to: emailUser, message: messageUser  },
      "7rnyMLWpuedIuUzNT" // public api
      )
      .then(
        (response) => {
          document.getElementById('nameUser').value = '';
          document.getElementById('emailUser').value = '';
          document.getElementById('messageUser').value = '';
        },
        (err) => {
          console.log(err.text);
      }
    );
  }
};
    
    /*
    
    // ----- GOOGLE MAP ----- //
    var map = '';
    var center;
    
    function initialize() {
    }
    
    
    
    
    
    
    function calculateCenter() {
      center = map.getCenter();
    }
    
    function loadGoogleMap(){
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
      document.body.appendChild(script);
    }
    
    */
    
    /* HTML document is loaded. DOM is ready. 
    -------------------------------------------*/
    $(function(){
      
      // --------- HIDE MOBILE MENU AFTER CLIKING ON A LINK ------- //
      $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
      });
      
      // --------- PORTFOLIO IMAGE ----- //
      $('#portfolio .lightbox').nivoLightbox({
        effect: 'fadeScale',
      });
      
      // ------- WOW ANIMATED ------ //
      wow = new WOW(
        {
          mobile: false
        });
        wow.init();
        
        // ------- GOOGLE MAP ----- //
        loadGoogleMap();
        
        // ------- JQUERY PARALLAX ---- //
        function initParallax() {
          $('#home').parallax("100%", 0.3);
          $('#team').parallax("100%", 0.3);
          $('#contact').parallax("100%", 0.1);
          
        }
        initParallax();
        
      });

document.addEventListener('DOMContentLoaded', function () {
  let currentReview = 0;
  const reviews = document.querySelectorAll('.review');
  const totalReviews = reviews.length;

  function showReview(index) {
    reviews.forEach((review, i) => {
      review.classList.toggle('active', i === index);
    });
  }

  document.querySelector('.prev').addEventListener('click', function () {
    currentReview = (currentReview > 0) ? currentReview - 1 : totalReviews - 1;
    showReview(currentReview);
  });

  document.querySelector('.next').addEventListener('click', function () {
    currentReview = (currentReview < totalReviews - 1) ? currentReview + 1 : 0;
    showReview(currentReview);
  });

  // Initialize the first review as active
  showReview(currentReview);
});

