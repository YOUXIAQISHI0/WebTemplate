/* DaTouWang URL: www.datouwang.com */
! function(n) {
	function i(t) {
		if(e[t]) return e[t].exports;
		var o = e[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return n[t].call(o.exports, o, o.exports, i), o.l = !0, o.exports
	}
	var e = {};
	i.m = n, i.c = e, i.d = function(n, e, t) {
		i.o(n, e) || Object.defineProperty(n, e, {
			configurable: !1,
			enumerable: !0,
			get: t
		})
	}, i.n = function(n) {
		var e = n && n.__esModule ? function() {
			return n.default
		} : function() {
			return n
		};
		return i.d(e, "a", e), e
	}, i.o = function(n, i) {
		return Object.prototype.hasOwnProperty.call(n, i)
	}, i.p = "", i(i.s = 0)
}([function(n, i, e) {
	"use strict";

	function t(n, i) {
		n.find(".module-wrap").height($(window).height()), $("body").css({
			height: $(window).height(),
			marginBottom: 0
		}), $(window).width() <= 768 ? (n.find(".module-wrap").css({
			backgroundColor: i.moduleinfo.bgColor,
			backgroundImage: i.moduleinfo.bgImg
		}), n.find(".logo .con").css({
			backgroundColor: i.moduleinfo.logoBg
		})) : (n.find(".module-wrap").css({
			backgroundColor: "transparent",
			backgroundImage: ""
		}), n.find(".logo .con").css({
			backgroundColor: "transparent"
		})), $(window).resize(function(e) {
			n.find(".module-wrap").height($(window).height()), $(window).width() <= 768 ? (n.find(".module-wrap").css({
				backgroundColor: i.moduleinfo.bgColor,
				backgroundImage: i.moduleinfo.bgImg
			}), n.find(".logo .con").css({
				backgroundColor: i.moduleinfo.logoBg
			})) : (n.find(".module-wrap").css({
				backgroundColor: "transparent",
				backgroundImage: ""
			}), n.find(".logo .con").css({
				backgroundColor: "transparent"
			}))
		}), setTimeout(function() {
			n.find(".years .item.cur").addClass("show"), n.find(".kv-wrap .kv").addClass("aniKv"), n.find(".kv-wrap .title").addClass("aniUp"), n.find(".kv-wrap .text").addClass("aniUp")
		}, 100), n.find(".city-list .item").each(function(n, i) {
			var e = $(this);
			setTimeout(function() {
				e.addClass("aniText")
			}, 150 * (n + 1))
		});
		var e = n.find(".nav .item.cur").position().left,
			t = e + 22 + n.find(".nav .item.cur").width(),
			d = n.find(".nav .scroll").scrollLeft(),
			a = n.find(".nav .con").width();
		t + d > a ? n.find(".nav .scroll").scrollLeft(t + d - a) : e < 0 && n.find(".nav .scroll").scrollLeft(d + e), n.find(".nav .prev").on("click", function() {
			var i = n.find(".nav .scroll").scrollLeft();
			n.find(".nav .scroll").scrollLeft(i - a)
		}), n.find(".nav .next").on("click", function() {
			var i = n.find(".nav .scroll").scrollLeft();
			n.find(".nav .scroll").scrollLeft(i + a)
		}), o(n), setTimeout(function() {
			n.find(".kv-wrap").hide(), n.find(".slick-wrap").show(), 0 == n.find(".city-list .item.cur").length && n.find(".city-list .item").eq(0).click()
		}, 5e3)
	}

	function o(n) {
		function i(n) {
			d.find(".item").removeClass("rnear lnear center"), 0 == n ? (d.find(".item").eq(0).addClass("center countdown"), d.find(".item").eq(1).addClass("rnear"), d.find(".item").eq(a).addClass("lnear")) : n == a ? (d.find(".item").eq(a).addClass("center countdown"), d.find(".item").eq(0).addClass("rnear"), d.find(".item").eq(a - 1).addClass("lnear")) : (d.find(".item").eq(n).addClass("center countdown"), d.find(".item").eq(n + 1).addClass("rnear"), d.find(".item").eq(n - 1).addClass("lnear")), setTimeout(function() {
				d.find(".item.center").removeClass("countdown")
			}, 1e3)
		}

		function e() {
			if(n.find(".city-list .item.cur").length > 0 && !n.find(".item.center").hasClass("countdown")) {
				var i = n.find(".city-list .item.cur").index();
				i < a ? (i++, n.find(".city-list .item").eq(i).click()) : n.find(".city-list .item").eq(0).click()
			}
		}

		function t() {
			if(n.find(".city-list .item.cur").length > 0 && !n.find(".item.center").hasClass("countdown")) {
				var i = n.find(".city-list .item.cur").index();
				i >= 0 ? (i--, n.find(".city-list .item").eq(i).click()) : n.find(".city-list .item").eq(a - 1).click()
			}
		}
		var o, d = n.find(".slick-wrap"),
			a = d.find(".item").length - 1;
		n.find(".city-list .item").on("click", function() {
			n.find(".kv-wrap").hide(), n.find(".slick-wrap").show()
		}), n.find(".city-list .item").on("click", function() {
			n.find(".kv-wrap").hide();
			var e = $(this).index();
			n.find(".city-list .item.cur").index();
			$(this).addClass("cur").siblings(".item").removeClass("cur"), i(e)
		}), o = setInterval(e, 6e3), n.find(".city-list .item").on("mouseover", function() {
			clearInterval(o)
		}), n.find(".city-list .item").on("mouseleave", function() {
			o = setInterval(e, 6e3)
		});
		! function() {
			var n = function(n) {
				clearInterval(o), n = n || window.event, n.wheelDelta ? (n.wheelDelta > 0 && t(), n.wheelDelta < 0 && e()) : n.detail && (n.detail > 0 && t(), n.detail < 0 && e()), o = setInterval(e, 6e3)
			};
			document.addEventListener && document.addEventListener("DOMMouseScroll", n, !1), window.onmousewheel = document.onmousewheel = n
		}(), n.find(".swiper-slide .play").on("click", function() {
			clearInterval(o);
			var i = $(this).attr("data-url"),
				e = '<video src="' + i + '" autoplay controls></video>';
			n.find(".video-wrap").append(e), n.find(".video-mask").show()
		}), n.find(".video-wrap .close").on("click", function() {
			n.find(".video-mask").hide(), n.find(".video-wrap video").remove(), o = setInterval(e, 6e3)
		})
	}
	e(1), $(".wb-zc-lxmod-yunqi-review-2018").each(function() {
		var n = $(this).find("textarea.schemaData"),
			i = n.val(),
			e = JSON.parse(i);
		e && t($(this), e)
	}), n.exports = t
}, function(n, i) {}]);