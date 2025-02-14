
/* /recaptcha/static/src/js/recaptcha.js defined in bundle 'recaptcha.assets' */
odoo.define('recaptcha.reCaptcha',function(require){'use strict';var ajax=require('web.ajax');$(document).ready(function(){ajax.jsonRpc('/website/reCaptcha/','call',{}).then(function(response){if(response.active){$.getScript('https://www.google.com/recaptcha/api.js');$('input[type="submit"][captcha="true"], button[type="submit"][captcha="true"]').addClass('g-recaptcha').attr('data-sitekey',response.site_key).attr('data-callback','onCallback');}});});});;

/* /recaptcha/static/src/js/callblack_recaptcha.js defined in bundle 'recaptcha.assets' */
function onCallback(){$(".g-recaptcha").closest('form').submit();}