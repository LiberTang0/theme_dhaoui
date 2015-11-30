	$( document ).ready(function() {
		$(".tile").height($("#tile1").height());
		$(".carousel-inner.item").height($("#tile1").width());

		$(window).resize(function() {
			if(this.resizeTO) clearTimeout(this.resizeTO);
			this.resizeTO = setTimeout(function() {
				$(this).trigger('resizeEnd');
			}, 10);
		});

		$(window).bind('resizeEnd', function() {
			$(".tile").height($("#tile1").height());
			$(".carousel-inner.item").height($("#tile1").width());
		});

         /**
         * Setup last.fm rss feed scraper
         */
        $.ajax({
            url      : document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent('http://ws.audioscrobbler.com/1.0/user/bktz/recenttracks.rss'),
            dataType : 'json',
            success  : function (data) {
                if (data.responseData.feed && data.responseData.feed.entries) {
                    $.each(data.responseData.feed.entries, function (i, e) {
                    });
                }
            },
            error : function () {

            }
        });
	});

    setTimeout(function(){

        $('.progress .bar').each(function() {
            var me = $(this);
            var perc = me.attr("data-percentage");

            //TODO: left and right text handling

            var current_perc = 0;

            var progress = setInterval(function() {
                if (current_perc>=perc) {
                    clearInterval(progress);
                } else {
                    current_perc +=1;
                    me.css('width', (current_perc)+'%');
                }

                me.text((current_perc)+'%');

            }, 50);

        });

    },300);
