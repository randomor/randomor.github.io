$(function() {

    //tinypeep code
    var counter = 0;
    var bodyWidth = $("body").width();
    var justMoved = false;
    var update = function(){
        if (justMoved == true){return};
        if (counter < 15) {
            //add more peeps
            //add a random bunch of peeps
            var peepNumber = Math.floor(Math.random()*6);
            var i=0;
            for(i=0; i<peepNumber; i++){
                var leftPosition = Math.floor(Math.random()*bodyWidth);
                $("<div class='tinypeep top' style='left: "+ leftPosition +"px'><img src='/img/tinypeep.png' alt='Hi!' /></div>").prependTo("body").delay(3000, "myQueue").queue("myQueue", function(){ 
                    $(this).addClass("out"); 
                    }).dequeue("myQueue");
                    counter++;
                }
                setTimeout(update, 4000);
            }else{
                //stop adding peep, maybe do something else fun and more active, since they know we are not there
            }
        }

        setTimeout(update, 5000);

        var timeout;
        $(document).bind('mousemove scroll', function(e){
            if (counter){
                $(".tinypeep").addClass("hide").delay(1000, "myQueue").queue("myQueue", function(){ 
                    $(this).remove()}).dequeue("myQueue");
                    counter = 0;
                };
                justMoved = true;
                clearTimeout(timeout);
                timeout = setTimeout(function(){justMoved=false;update();}, 5000);
            }); 

            $("a[href=#twitter]").click(function() {
                $.scrollTo($('#twitter'),1200);
                $('#twitter').addClass('tip');
                return false;
            });
            $("a[href=#flickr]").click(function() {
                $.scrollTo($('#flickr'),1200);
                $('#twitter').addClass('tip');
                return false;
            });    

            $.getJSON("https://twitter.com/statuses/user_timeline/randomor.json?callback=?&count=5", function(tweets){
                var $twitter = $("#twitter ul");
                $.each(tweets, function(i, tweet){
                    tweet = processTweet(tweet);
                    $twitter.append(tweet);
                })
            })

            var processTweet = function(tweet){
                tweetDate = processDate(tweet.created_at);
                linkedText = parseLink(tweet.text);

                var tweetText = '<li class="twitter-item"> <span class="twitter-timestamp"><abbr title="' + tweetDate + '">' + tweetDate + '</abbr></span> ' + linkedText + ' <a href="http://twitter.com/randomor/statuses/' + tweet.id + '" class="twitter-link">&gt;&gt;</a></li>';
                return tweetText;
            }

            var processDate = function(date){
                var d = new Date(date);

                return d.getDay()+"/"+d.getMonth()+"/"+d.getFullYear();
            }

            var parseLink = function(text){
                // parse urls
                text = text.replace(/[A-Za-z]+:\/\/[A-Za-z0-9_-]+\.[A-Za-z0-9_:%&~\?\/.=-]+/g, function(url) {
                    return url.link(url)
                })
                // parse usernames
                text = text.replace(/[@]+[A-Za-z0-9_-]+/g, function(u) {
                    var username = u.replace("@","")
                    return u.link("http://twitter.com/"+username)
                })
                // parse hashtags
                text = text.replace(/[#]+[A-Za-z0-9_-]+/g, function(t) {
                    var tag = t.replace("#","%23")
                    return t.link("http://search.twitter.com/search?q="+tag)
                })
                return text;
            }   

        });


