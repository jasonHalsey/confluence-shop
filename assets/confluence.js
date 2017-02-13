jQuery(document).ready(function() {
	pageContentOffset()
});


jQuery(window).resize(function(){
    pageContentOffset()
});


// River Report Hero Sizing
function pageContentOffset() {
  var heroheight = jQuery("header.site-header").height();
  jQuery('main.main-content').css('margin-top',heroheight );
}