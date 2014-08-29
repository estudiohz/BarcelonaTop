
/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

		if( !device.tablet() && !device.mobile() ) {
			
			/* plays the BG Vimeo or Youtube video if non-mobile device is detected*/ 
			$.okvideo({ source: 'https://www.youtube.com/watch?v=EyEyojMvveY', //set your video source here
		                    autoplay:true,
		                    loop: false,
		                    highdef:true,
		                    hd:true, 
		                    adproof: true,
		                    disablekeyControl:false,
		                    volume:3 // control the video volume by setting a value from 0 to 99
		                 });
						
		} else {
			
			/* displays a poster image if mobile device is detected*/ 
			$('body').addClass('poster-img');
			
		}
   		
        
   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







	

