jQuery(document).ready(function() {
	pageContentOffset();
});


jQuery(window).resize(function(){
    pageContentOffset();
});


// River Report Hero Sizing
function pageContentOffset() {
  var heroheight = jQuery("header.site-header").height();
  jQuery('div.collection_header_img').css('height',heroheight );
  console.log(heroheight);
}