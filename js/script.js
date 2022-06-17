menu.onclick = function myFunction () {
	var x = document.getElementById("myTopnav")
	if (x.className === "topnav") {
		x.className += " responsive";
	}
	else {
		x.className = "topnav";
	}
}

const list = document.querySelector('ul');
const li = list.querySelectorAll('li');

for (let i = 0; i < li.length; i++) {
	li[i].addEventListener('click', () => {
		li[i].classList.add('through');
	} )
}






/*! Striking Multiflex
* Copyright (c) 2015 Lyon Holding Limited O/A www.thethemebuilders.com */
!function(u)

{
	"use strict";

	u.fn.hasParentRpm=function(e){
	e=u(e);
	var n=!1;
	return u(this[0]).parents().addBack().each(function() {
		if(-1!=u.inArray(this,e))
			return!(n=!0) } ),n
	},



	u(document).ready(function() {
		function e() {
			u(".admin-bar button#responsive-menu-pro-button").css("margin-top",""),
			u(".admin-bar #responsive-menu-pro-container").css("margin-top",""),
			u(".admin-bar #responsive-menu-pro-header").css("margin-top",""),
			u(".admin-bar button#responsive-menu-button").css("margin-top",""),
			u(".admin-bar #responsive-menu-container").css("margin-top",""),
			u(".admin-bar #responsive-menu-header").css("margin-top","");

			var e,n,r,o,s,a,t,i,p,m,d=u("#wpadminbar");

			d.length
				&&
			(	e=d.css("position"),
				n=d.height(),
				r=d[0].getBoundingClientRect(),
				"absolute" == e && r.top < 0 && (n=0),
				(o=u(".admin-bar button#responsive-menu-pro-button")).length
					||
				(o=u(".admin-bar button#responsive-menu-button")),

				o.length
				&&
				(   s=o.hasParentRpm("#header"),

					("absolute"==(a=o.css("position"))&&0==s||"fixed"==a)
					&&
					(u(".admin-bar button#responsive-menu-pro-button").css("margin-top",n),
						u(".admin-bar button#responsive-menu-button").css("margin-top",n)),

					(t=u(".admin-bar #responsive-menu-pro-container")).length
						||
					(t=u(".admin-bar #responsive-menu-container")),

					t.length
					&&
					(u(".admin-bar #responsive-menu-pro-container").css("margin-top",n),
						u(".admin-bar #responsive-menu-container").
						css("margin-top",n))
				),



				(i=u(".admin-bar #responsive-menu-pro-header")).length
					||
				(i=u(".admin-bar #responsive-menu-header")),

				i.length
				&&
				(p=i.hasParentRpm("#header"),
					("absolute"==(m=i.css("position"))&&0==p||"fixed"==m)
						&&
					(parseInt(i.offset().top),
					u(".admin-bar #responsive-menu-pro-header").css("margin-top",n),
					u(".admin-bar #responsive-menu-header").css("margin-top",n))
				)
			)
		} // function e() завершилась



		

			if("undefined"!=typeof responsive_menu_location && "manual"!=responsive_menu_location) {
				var n=u("button#responsive-menu-pro-button");
			if(n.length || (n=u("button#responsive-menu-button")),n.length) {
				n.hasParentRpm("#header");
			if(!n.hasParentRpm("#header")) {
				var r=u("#responsive-menu-pro-header");
				r.length || (r=u("#responsive-menu-header"));
				var o=u("#responsive-menu-pro-header-bar-button");
				o.length || (o=u("#responsive-menu-header-bar-button"));
				var s=u("#responsive-menu-pro-container");
				s.length || (s=u("#responsive-menu-container"));
				var a=u("#responsive-menu-pro-mask");

				switch(a.length || (a=u("#responsive-menu-mask")),

					"header"==responsive_menu_location && (u("#header").length||(responsive_menu_location="body")),

					responsive_menu_location) {

					case"body": 
						a.length && a.prependTo("body"),
						s.prependTo("body"),
						n.prependTo("body"),
						o.length && o.prependTo("body"),
						r.length && r.prependTo("body");
					break;
					case"header":
						a.length && a.prependTo("#header"),
						s.prependTo("#header"),
						n.prependTo("#header"),
						o.length && o.prependTo("#header"),
						r.length && r.prependTo("#header")
								}
							}


						}
					}


				e(),
				u(window).scroll(function() {
								"fixed"!=u("#wpadminbar").css("position") && e()
								}),
				u(window).
					resize(function(){
						e()
					})
		})
}
	(jQuery);