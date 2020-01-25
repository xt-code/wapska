var popular = new XMLHttpRequest();
 var urlpopular = "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails,id&type=video&pageToken="+getpage+"&chart=mostpopular&maxResults=10&key=AIzaSyBwwiijPdkDzAwmyTsKBq_IuWR5cUAdOV4";

popular.open("GET", urlpopular, true);

popular.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
	var ah = data.items;
   var oh =data.pageInfo;
 var out= "";
    var i;
	for (var i = 0; i < ah.length; i++) {
	
      out+='  <div class="news-wrapper">    <a href="site_view.xhtml?get-id=' + ah[i].id + '">    <span class="news-block-img">    <img src="' + ah[i].snippet.thumbnails.high.url + '" alt="' + ah[i].snippet.title + '" style="max-width: 100%;"/> </span>    <span style="font-size: 16px;">' + ah[i].snippet.title + '</span>    </a>    <span style="color: #A3A3A3; display: block; padding-top: 8px;">Published: ' + time(ah[i].snippet.publishedAt) + '</span>    </div>';		
	}
  if (data.prevPageToken) {
    var prev='  <a href="index.xhtml?get-page='+data.prevPageToken+'" class="nav"> « Previous </a>'; }else{
 	var prev='<span class="navcurrent"><b>« Previous</b></span>';	 }
  
   if (data.nextPageToken) {var next=' <a class="nav" href="index.xhtml?get-page='+data.nextPageToken+'">   Next »                 </a>   ';}else{
	 	var next='<span class="navcurrent"><b> Next » </b></span>';
	 }  
  	var paging='<div class="nav">'+prev+'    '+next+'</div>';

document.getElementById("tranding").innerHTML = out;
document.getElementById("pagi").innerHTML = paging;

}

popular.send();


var popular2 = new XMLHttpRequest();
 var urlpopular2 = "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails,id&type=video&chart=mostpopular&maxResults=10&key=AIzaSyBwwiijPdkDzAwmyTsKBq_IuWR5cUAdOV4";

popular2.open("GET", urlpopular2, true);

popular2.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
	var ah = data.items;
 var out= "";
    var i;
	for (var i = 0; i < ah.length; i++) {
	
      out+=' <li>                            <a href="single-video.html" class="video-post">                                <!-- Blog Post Thumbnail -->                                <div class="video-post-thumbnail">                                    <span class="video-post-count">1.4M</span>                                    <span class="video-post-time">23:00</span>                                    <span class="play-btn-trigger"></span>                                    <!-- option menu -->                                    <span class="btn-option">                                        <i class="icon-feather-more-vertical"></i>                                    </span>                                                                       <img src="' + ah[i].snippet.thumbnails.default.url + '" alt="' + ah[i].snippet.title + '">                                </div>                                <!-- Blog Post Content -->                                <div class="video-post-content">                                    <h3> ' + ah[i].snippet.title + ' </h3>                                    <img src="assets/images/avatars/avatar-3.jpg" alt="">                                    <span class="video-post-user">Jonathan Madano</span>                                    <span class="video-post-views">531k views</span>                                    <span class="video-post-date"> 2 weeks ago </span>                                </div>                            </a>                        </li>';		
	}
document.getElementById("memek").innerHTML = out;

}

popular2.send();




var ml = new XMLHttpRequest();
 var urlml = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=mobile+legends&maxResults=6&type=video&order=viewCount&key=AIzaSyBwwiijPdkDzAwmyTsKBq_IuWR5cUAdOV4";

ml.open("GET", urlml, true);

ml.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
	var ah = data.items;
    var out= "";
    var i;
  for (var i = 1; i < ah.length; i++) {
	
      out+='  <li>                    <article class="clearfix">                      <div class="widget-popular-posts__img-holder">                        <span class="widget-popular-posts__number">'+i+'</span>                        <div class="thumb-container">                          <a href="site_view.xhtml?get-id=' + ah[i].id.videoId + '">                            <img data-src="' + ah[i].snippet.thumbnails.default.url + '" src="' + ah[i].snippet.thumbnails.default.url + '" alt="" class="' + ah[i].snippet.title + '"/>                          </a>                        </div>                      </div>                      <div class="widget-popular-posts__entry">                        <h3 class="widget-popular-posts__entry-title">                          <a href="site_view.xhtml?get-id=' + ah[i].id.videoId + '">' + ah[i].snippet.title + '</a>                        </h3>                      </div>                                          </article>                  </li>';		
	}
document.getElementById("ml").innerHTML = out;

}

ml.send();
