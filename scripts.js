
$(function() {
   

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


                    
   