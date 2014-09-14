$(function() {

    $('#side-menu').metisMenu();

});
//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        alert('ok1');
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse')
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse')
        }

        height = (this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    })
});




$("#btnSearch").click(function() {
    //alert( "Handler for .click() called." );
    generateContactlist();
});

var all = [{
    "image": 1,
    "name": "Annie",
    "role": "Mills",
    "major": "Computer Science",
    "location": "Oakland, California"
}, {
    "image": 13,
    "name": "Emily",
    "role": "USF",
    "major": "Music",
    "location": "San Francisco, California"
}, {
    "image": 23,
    "name": "Stephanie",
    "role": "University santa clara",
    "major": "Arts",
    "location": "San Clara, California"
}, {
    "image": 22,
    "name": "Robin",
    "role": "NYU",
    "major": "Robotics",
    "location": "New York, New York"
}, {
    "image": 20,
    "name": "Smith",
    "role": "SJSU",
    "major": "CS",
    "location": "San Jose, California"
}, {
    "image": 9,
    "name": "Eva",
    "role": "UC, Berkeley",
    "major": "Computer Science",
    "location": "Berkley, California"
}, {
    "image": 10,
    "name": "Mark",
    "role": "SJSU",
    "major": "Accounting",
    "location": "San Jose, California"
}, {
    "image": 14,
    "name": "Finn",
    "role": "UC, Berkeley",
    "major": "Rhetoric",
    "location": "Berkeley, California"
}, {
    "image": 2,
    "name": "Micheal",
    "role": "Stanford",
    "major": "Fine Arts",
    "location": "Palo Alto, California"
}];


generateContactlist();

function generateContactlist() {
    console.log('wtf')
    $(".notification-panel").css("display", "inline-block");
    var search = $("#txtSearch").val();
    //$('#contact-list').append
      $('#contact-list').empty();

    var contactArr = [];
    all.forEach(function(obj) {
        if(((obj.major).indexOf(search) > -1  || (obj.location).indexOf(search) > -1) || (obj.role).indexOf(search) > -1) {
            contactArr.push(generateContactTemplate(obj.image, obj.name, obj.role, obj.major, obj.location));    
        }
    });
    var start = '<div class="row">';
    var temp = '';
    var tempcount  = 0;
    for( var i = 0; i< contactArr.length; i ++) {
        temp = temp + contactArr[i];
        tempcount ++;
        if(tempcount == 2 || i === contactArr.length - 1) {
            tempcount = 0;
           $('#contact-list').append(start + temp + '</div>');
           temp = start;
        }
    }
    //return row + contact + contact + '</div>';
    // $('#contact-list').append(generateContactTemplate("Annie", "Advisor", "CS", "San jose, California"));
    console.log('done');
}


function chat() {
    
  //  setTimeout(function() {
    // $(".chat-panel").css("display", "inline-block");
    // $(".notification-panel").css("display", "none");
//}, 100);
    
}
function generateContactTemplate(image, name, role, major, location) {
    var contact = '<div class="col-sm-6"><div class="media">' +
        '<a class="pull-left" href="#"><img class="media-object" src="images/' + image + '.jpg">' +
        '</a><div class="media-body innerAll half"><h4 class="media-heading padding-none">' +
        '<a href="#timeline-Contact">' + name + '</a>' +
        '</h4><small class="text-success"><i class="fa fa-check"></i> ' + role + '</small>' +
        '<p>' + major + ', ' + location + '</p></div><div class="innerT half">' +
        '<a href="" class="btn btn-info btn-xs" id="likeBtn"><i class="fa fa-thumbs-up"></i> Like</a>' +
        '<a href="#chatingPanel" class="btn btn-primary btn-xs margin-top "><i class="fa fa-envelope-o"></i> Chat</a>' +
        '</div></div></div>';

    return contact;
};
