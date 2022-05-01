
$(function() {
   //Get 
   $('#get-button').on('click', function() {
        $.ajax({
            url: '/tweets',
            contentType: 'application/json',
            success: function(response) {
    
                let tbodyEl = $('#namebody');

                tbodyEl.html('');

                response.tweets.forEach(function(tweet){
                    tbodyEl.append('\
                        <tr>\
                        <td class="id">' + tweet.id + '</td>\
                        <td><input type="text" class="name form-control" value="' + tweet.screen +'"></td>\
                        <td><input type="text" class="name form-control" value="' + tweet.name +'"></td>\
                        <td>\
                        </td>\
                        </tr>\
                        ');
                });
            },
            error: function () {

            }
        });
    });


    //Get tweets
    $('#get-tweets-button').on('click', function(){
        $.ajax({

            url:'/tweetinfo',
            contentType: 'application/json',
            success: function(response) {

                console.log(response)
                let tbodyEl2 = $('#tweetbody');

                tbodyEl2.html('');

                response.tweetinfo.forEach(function(tweetinfo){
                    tbodyEl2.append('\
                        <tr>\
                        <td class="tweetid">' + tweetinfo.tweetid + '</td>\
                        <td><input type="text" class="name form-control" value="' + tweetinfo.tweettext +'"></td>\
                        <td><input type="text" class="name form-control" value="' + tweetinfo.time +'"></td>\
                        <td>\
                        </td>\
                        </tr>\
                        ');
               
            });
            },
            error: function() {

            }
            
        });
    });



});


                    
   