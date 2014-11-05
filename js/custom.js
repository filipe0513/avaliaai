var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-18150668-10']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

$(function () {
  $(".youtube").YouTubeModal({autoplay:1, width:800, height:450});
});
  
/* Customer.IO */    
var _cio = _cio || [];
(function() {
  var a,b,c;a=function(f){return function(){_cio.push([f].
  concat(Array.prototype.slice.call(arguments,0)))}};b=["load","identify",
  "sidentify","track","page","cookie"];for(c=0;c<b.length;c++){_cio[b[c]]=a(b[c])};
  var t = document.createElement('script'),
      s = document.getElementsByTagName('script')[0];
  t.async = true;
  t.id    = 'cio-tracker';
  t.setAttribute('data-site-id', '0f5c09adf1d66eb0cec1');
  t.src = 'https://assets.customer.io/assets/track.js';
  s.parentNode.insertBefore(t, s);
})();

function submit_form() {
  var name = jQuery("#customer_name").val();
  var email = jQuery("#customer_email").val(); 
  var pressed = 'hero';
  
  if (name !== undefined && 
    name != "" && 
    email !== undefined &&
    email != "") {

    send_to_cio(pressed, name, email);
  } else {
    alert_incompletation();
  }
  // window.location.href = "../index.html#"
}

function submit_form2() {
  var name = jQuery("#customer_name2").val();
  var email = jQuery("#customer_email2").val(); 
  var pressed = 'headline';
  
  if (name !== undefined && 
    name != "" && 
    email !== undefined &&
    email != "") {

    send_to_cio(pressed, name, email);
    jQuery('#myModal').modal('hide');
  } else {
    alert_incompletation();
  }
}
function submit_form3() {
  var name = jQuery("#customer_name3").val();
  var email = jQuery("#customer_email3").val(); 
  var pressed = 'contact';
  
  if (name !== undefined && 
    name != "" && 
    email !== undefined &&
    email != "") {

    send_to_cio(pressed, name, email);
  } else {
    alert_incompletation3();
  }
}

function send_to_cio3(pressed, name, email) {
  var uniqId = 'user_' + jQuery.now()
  _cio.identify({
    id: uniqId,    
    email:  email, 
    created_at: jQuery.now(),   
    name:  jQuery("#customer_name").val(),       
    customer_segment: 'avaliaai',      
    telephone: jQuery("#customer_phone3").val(),      
    message: jQuery("#customer_msg3").val(),      
    pressed_button: pressed      
  });

  jQuery('#thank-you').removeClass('hidden');
  jQuery('#call-to-action').addClass('hidden');
  jQuery('.completation-warning').addClass('hidden');

  window.location.href = "/obrigado"
}

function alert_incompletation(){
  jQuery('.completation-warning').removeClass('hidden');
}

function send_to_cio(pressed, name, email) {
  var uniqId = 'user_' + jQuery.now()
  _cio.identify({
    id: uniqId,    
    email:  email, 
    created_at: jQuery.now(),   
    name:  jQuery("#customer_name").val(),       
    customer_segment: 'avaliaai',      
    pressed_button: pressed      
  });

  jQuery('#thank-you').removeClass('hidden');
  jQuery('#call-to-action').addClass('hidden');
  jQuery('.completation-warning').addClass('hidden');
}

function reactivateForm(){
  jQuery('#thank-you').addClass('hidden');
  jQuery('#call-to-action').removeClass('hidden');
}

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=130951653753053&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));