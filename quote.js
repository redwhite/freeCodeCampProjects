 var quoteAPI = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=10";
        
        var colors = ['#B22222', '#DB7093', '#FF6347', '#D8BFD8', '#1E90FF', '#3CB371', '#FFDEAD'];
        
        function getQuote(){
            $.ajax({
                headers: {
                    "X-Mashape-Key" : "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
                    Accept: "application/json",
                    "Content-Type": "application/x-www-form-urlencoded"},
                url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
                success: function( data ) {
                    if (typeof data == 'string') {
                        
                        data = JSON.parse(data);
                    }
                    console.log(data);
                    $("#quote").text(data.quote).fadeIn(500);
                    $("#author").text(data.author).fadeIn(500);
                    
                },
                error: function(){
                    console.log("Fail");
                } 

            });
        }
        function animate(){
            var pos = $(".quoteContainer").position();
            
            $("#quote").fadeOut(500, getQuote);
            $("#author").fadeOut(500);
            
            var color = Math.floor(Math.random() * colors.length);
            console.log(colors[color]);
            $("body").animate({                
                backgroundColor: colors[color]                
            }, 500);
            $(".btn-secondary").animate({                
                color: colors[color]                
            }, 500);            
            
        }
        function tweetQuote(){
            var quote = $("#quote").text();
            var author = $("#author").text();
            $("#tweetQuote").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + "'" + quote + "' - " + author + "#quotes");
            
        }
        $(document).ready(function(){
            getQuote();
            
            $("#getNewQuote").on("click", getQuote);
            $("#animate").on("click", animate);
            $("#tweetQuote").on("click", tweetQuote);
        })
                
        window.twttr = (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };

      return t;
    }(document, "script", "twitter-wjs"));