$(function(){
    if($(window).width() > 1200) {
        $("li.nav-item.hasDropdown").each(function(){
            $(this).hover(function(){
                $(this).addClass("opened");
                }, function(){
                    $(this).removeClass("opened");
            });
        });
    } else {
        $("li.nav-item.hasDropdown").each(function(){
            $(this).find("a").click(function(e){
                e.preventDefault();
                console.log($(window).width());
                $(this).parent().toggleClass("opened");
            });
        });
    }
    $(window).scroll(function(){
        if($(this).scrollTop() > $(window).height()){
            $("a#gotoTop").css("display","flex");
        } else {
            $("a#gotoTop").removeAttr("style");
        }
    });
    $("a#gotoTop").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    $("ul.submenu li a").each(function(){
        $(this).click(function(){
            var target = $(this).attr("data-target");
            $("html, body").animate({ scrollTop: $("#"+target).offset().top }, "slow");
        });
    });

    //Highlight menu item onscroll
    // Cache selectors
        var lastId,
        topMenu = $("#mainNav"),
        topMenuHeight = topMenu.outerHeight() + 1,
        // All list items
        menuItems = topMenu.find("a.nav-link"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
        });

        // Bind click handler to menu items
        // so we can get a fancy scroll animation
        menuItems.click(function (e) {
        var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
        if($(window).width() > 1200){
            $("html, body").stop().animate({scrollTop: offsetTop + 100},850);
        } else {
            $('.navbar-collapse').collapse('hide');
            $("html, body").stop().animate({scrollTop: offsetTop},850);
        }
        e.preventDefault();
        });

        // Bind to scroll
        $(window).scroll(function () {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop) return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
        lastId = id;
        console.log(id);
        // Set/remove active class
        menuItems
            .parent()
            .removeClass("active")
            .end()
            .filter("[href='#" + id + "']")
            .parent()
            .addClass("active");
        }
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            console.log("bottom reached");
            menuItems.parent().removeClass("active");
            $("ul#mainNav li.contactlink").addClass("active");
        } else {
            $("ul#mainNav li.contactlink").removeClass("active");
        }
        });
    //Highlight menu item onscroll

    $('select[required]').css({
        position: 'absolute',
        display: 'inline',
        height: 0,
        padding: 0,
        border: '1px solid rgba(255,255,255,0)',
        width: 0
      });
    
      $("#formValidate").validate({
        rules: {
            firstname: {
                required: true
            },
            lastname: {
                required: true
            },
            email: {
                required: true
            },
            phonenumber: {
                required: true
            },
            message: {
                required: true
            },
        },
        errorElement: 'div',
        errorPlacement: function (error, element) {
          var placement = $(element).data('error');
          if (placement) {
            $(placement).append(error)
          } else {
            error.insertAfter(element);
          }
        }
      });
      $("#userType").validate({
        rules: {
            firstname: {
                required: true
            },
            lastname: {
                required: true
            },
            email: {
                required: true
            },
            phonenumber: {
                required: true
            },
            message: {
                required: true
            },
        },
        errorElement: 'div',
        errorPlacement: function (error, element) {
          var placement = $(element).data('error');
          if (placement) {
            $(placement).append(error)
          } else {
            error.insertAfter(element);
          }
        }
      });
      $("#register").validate({
        rules: {
            email: {
                required: true
            },
        },
        errorElement: 'div',
        errorPlacement: function (error, element) {
          var placement = $(element).data('error');
          if (placement) {
            $(placement).append(error)
          } else {
            error.insertAfter(element);
          }
        }
      });
});