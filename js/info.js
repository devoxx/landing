$(document).ready(function(){
   var links = [
                    {
                        "bgcolor":"#56b9bf",
                        "icon":"<i class='fa fa-info'></i>"
                    },
                    {
                        "url":"https://www.youtube.com/c/devoxx2015",
                        "bgcolor":"#e52d27",
                        "color":"#ffffff",
                        "icon":"<i class='fa fa-youtube'></i>",
                        "target":"_blank",
                        "title" : "Visit our YouTube channel"

                    },
                    {
                        "url":"https://en.wikipedia.org/wiki/Devoxx",
                        "bgcolor":"#1E90FF",
                        "color":"#ffffff",
                        "icon":"<i class='fa fa-wikipedia-w'></i>",
                        "target":"_blank",
                        "title" : "Read more about Devoxx"

                    },
                    {
                        "url":"https://www.voxxed.com/",
                        "bgcolor":"#50ceed",
                        "color":"#ffffff",
                        "icon":"<i class='fa fa-superscript'></i>",
                        "target":"_blank",
                        "title" : "Visit Voxxed.com"

                    }
                    ,
                    {
                        "url":"https://voxxeddays.com",
                        "bgcolor":"#3b5998",
                        "color":"#ffffff",
                        "icon":"<i class='fa fa-rocket'></i>",
                        "target":"_blank",
                        "title" : "Find a Voxxed Day event"

                    },
                    {
                        "url":"http://www.devoxx4kids.org/",
                        "bgcolor":"#f78c40",
                        "color":"#ffffff",
                        "icon":"<i class='fa fa-gamepad'></i>",
                        "target":"_blank",
                        "title" : "Devoxx4kids"
                    }
                ]
                $('.kc_fab_wrapper').kc_fab(links);
});
