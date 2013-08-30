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

            $("a[href=#flickr]").click(function() {
                $.scrollTo($('#flickr'),1200);
                $('#twitter').addClass('tip');
                return false;
            });
        });


