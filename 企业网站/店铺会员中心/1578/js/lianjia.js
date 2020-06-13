function b() {
	h = $(window).height(), t = $(document).scrollTop();
	var e = $("#back-top").attr("daty-id");
	e ? t > h ? ($("#gotop").show(), $(".fix-right .tips,.fix-right .has-ask").show()) : ($("#gotop").hide(), $(".fix-right .tips,.fix-right .has-ask").hide()) : ($(".fix-right .tips,.fix-right .has-ask").show(), t > h ? $("#gotop").show() : $("#gotop").hide())
}

function ent() {
		var t;
		$(".ewm-close").click(function(e) {
			$(".sh-erweima").hide().addClass("hide"), $(this).hide();
			var n = $(".sh-erweima").attr("class");
			localStorage.setItem(t, JSON.stringify(n))
		});
		var e = localStorage.getItem(t);
		e ? e.indexOf("sh-erweima hide") >= 0 && $(".sh-erweima,.ewm-close").hide() : $(".sh-erweima,.ewm-close").show()
	}! function(t) {
		t.fn.scrollLoading = function(e) {
			var n = {
					attr: "data-url",
					container: t(window),
					callback: t.noop
				},
				r = t.extend({}, n, e || {});
			r.cache = [], t(this).each(function() {
				var e = this.nodeName.toLowerCase(),
					n = t(this).attr(r.attr),
					a = {
						obj: t(this),
						tag: e,
						url: n
					};
				r.cache.push(a)
			});
			var a = function(e) {
					t.isFunction(r.callback) && r.callback.call(e.get(0))
				},
				o = function() {
					var e, n = r.container.height();
					e = t(window).get(0) === window ? t(window).scrollTop() : r.container.offset().top, t.each(r.cache, function(t, r) {
						var o = r.obj,
							i = r.tag,
							s = r.url;
						if (o) {
							var c = o.offset().top - e,
								l = c + o.height();
							(c >= 0 && n > c || l > 0 && n >= l) && (s ? "img" === i ? a(o.attr("src", s)) : o.load(s, {}, function() {
								a(o)
							}) : a(o), r.obj = null)
						}
					})
				};
			o(), r.container.bind("scroll", o)
		}
	}(jQuery),
	function(t, e, n, r) {
		var a = t(e);
		t.fn.lazyload = function(o) {
			function i() {
				var e = 0;
				c.each(function() {
					var n = t(this);
					if (!l.skip_invisible || n.is(":visible"))
						if (t.abovethetop(this, l) || t.leftofbegin(this, l));
						else if (t.belowthefold(this, l) || t.rightoffold(this, l)) {
						if (++e > l.failure_limit) return !1
					} else n.trigger("appear"), e = 0
				})
			}
			var s, c = this,
				l = {
					threshold: 0,
					failure_limit: 0,
					event: "scroll",
					effect: "show",
					container: e,
					data_attribute: "original",
					skip_invisible: !0,
					appear: null,
					load: null,
					placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
				};
			return o && (r !== o.failurelimit && (o.failure_limit = o.failurelimit, delete o.failurelimit), r !== o.effectspeed && (o.effect_speed = o.effectspeed, delete o.effectspeed), t.extend(l, o)), s = l.container === r || l.container === e ? a : t(l.container), 0 === l.event.indexOf("scroll") && s.bind(l.event, function() {
				return i()
			}), this.each(function() {
				var e = this,
					n = t(e);
				e.loaded = !1, (n.attr("src") === r || n.attr("src") === !1) && n.is("img") && n.attr("src", l.placeholder), n.one("appear", function() {
					if (!this.loaded) {
						if (l.appear) {
							var r = c.length;
							l.appear.call(e, r, l)
						}
						t("<img />").bind("load", function() {
							var r = n.attr("data-" + l.data_attribute);
							n.hide(), n.is("img") ? n.attr("src", r) : n.css("background-image", "url('" + r + "')"), n[l.effect](l.effect_speed), e.loaded = !0;
							var a = t.grep(c, function(t) {
								return !t.loaded
							});
							if (c = t(a), l.load) {
								var o = c.length;
								l.load.call(e, o, l)
							}
						}).attr("src", n.attr("data-" + l.data_attribute))
					}
				}), 0 !== l.event.indexOf("scroll") && n.bind(l.event, function() {
					e.loaded || n.trigger("appear")
				})
			}), a.bind("resize", function() {
				i()
			}), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && a.bind("pageshow", function(e) {
				e.originalEvent && e.originalEvent.persisted && c.each(function() {
					t(this).trigger("appear")
				})
			}), t(n).ready(function() {
				i()
			}), this
		}, t.belowthefold = function(n, o) {
			var i;
			return i = o.container === r || o.container === e ? (e.innerHeight ? e.innerHeight : a.height()) + a.scrollTop() : t(o.container).offset().top + t(o.container).height(), i <= t(n).offset().top - o.threshold
		}, t.rightoffold = function(n, o) {
			var i;
			return i = o.container === r || o.container === e ? a.width() + a.scrollLeft() : t(o.container).offset().left + t(o.container).width(), i <= t(n).offset().left - o.threshold
		}, t.abovethetop = function(n, o) {
			var i;
			return i = o.container === r || o.container === e ? a.scrollTop() : t(o.container).offset().top, i >= t(n).offset().top + o.threshold + t(n).height()
		}, t.leftofbegin = function(n, o) {
			var i;
			return i = o.container === r || o.container === e ? a.scrollLeft() : t(o.container).offset().left, i >= t(n).offset().left + o.threshold + t(n).width()
		}, t.inviewport = function(e, n) {
			return !(t.rightoffold(e, n) || t.leftofbegin(e, n) || t.belowthefold(e, n) || t.abovethetop(e, n))
		}, t.extend(t.expr[":"], {
			"below-the-fold": function(e) {
				return t.belowthefold(e, {
					threshold: 0
				})
			},
			"above-the-top": function(e) {
				return !t.belowthefold(e, {
					threshold: 0
				})
			},
			"right-of-screen": function(e) {
				return t.rightoffold(e, {
					threshold: 0
				})
			},
			"left-of-screen": function(e) {
				return !t.rightoffold(e, {
					threshold: 0
				})
			},
			"in-viewport": function(e) {
				return t.inviewport(e, {
					threshold: 0
				})
			},
			"above-the-fold": function(e) {
				return !t.belowthefold(e, {
					threshold: 0
				})
			},
			"right-of-fold": function(e) {
				return t.rightoffold(e, {
					threshold: 0
				})
			},
			"left-of-fold": function(e) {
				return !t.rightoffold(e, {
					threshold: 0
				})
			}
		})
	}(jQuery, window, document), define("common/jquery.scrollLoading", function() {}),
	function(t) {
		t.fn.fixtop = function(e) {
			var n = t.extend({
					marginTop: 0,
					zIndex: 1e3,
					fixedWidth: "100%"
				}, e),
				r = this.offset().top - n.marginTop,
				a = this,
				o = (a.height() + n.marginTop, t("<div/>").css({
					display: a.css("display"),
					width: a.outerWidth(!0),
					height: a.outerHeight(!0),
					"float": a.css("float")
				}));
			return t(window).scroll(function(e) {
				var i = r;
				t(this).scrollTop() > i && "fixed" != a.css("position") && (a.after(o), a.css({
					position: "fixed",
					top: n.marginTop + "px",
					"z-index": n.zIndex,
					width: n.fixedWidth
				}), void 0 !== n.fixed && n.fixed(a)), t(this).scrollTop() < i && "fixed" == a.css("position") && (o.remove(), a.css({
					position: "relative",
					top: "0px",
					"z-index": n.zIndex
				}), void 0 !== n.unfixed && n.unfixed(a))
			}), this
		}
	}(jQuery), define("common/fixtop", function() {}), $.stringFormat = function(t, e) {
		t = String(t);
		var n = Array.prototype.slice.call(arguments, 1),
			r = Object.prototype.toString;
		return n.length ? (n = 1 == n.length && null !== e && /\[object Array\]|\[object Object\]/.test(r.call(e)) ? e : n, t.replace(/#\{(.+?)\}/g, function(t, e) {
			var a = n[e];
			return "[object Function]" == r.call(a) && (a = a(e)), "undefined" == typeof a ? "" : a
		})) : t
	}, $.trimN = function(t) {
		return t.replace(/\n{2,}/gm, "\n")
	}, $.fixedOldComment = function(t) {
		return t ? $.decodeHTML($.trimN(t.replace(/<[^>]+>/g, "\n"))) : t
	}, $.replaceTpl = function(t, e, n) {
		var r = String(t),
			a = n || /#\{([^}]*)\}/gm,
			o = String.trim || function(t) {
				return t.replace(/^\s+|\s+$/g, "")
			};
		return r.replace(a, function(t, n) {
			return t = e[o(n)]
		})
	}, $.strHTML = function(t, e) {
		t = String(t);
		var n = Array.prototype.slice.call(arguments, 1),
			r = Object.prototype.toString;
		return n.length ? (n = 1 == n.length && null !== e && /\[object Array\]|\[object Object\]/.test(r.call(e)) ? e : n, t.replace(/#\{(.+?)\}/g, function(t, e) {
			var a = n[e];
			return "[object Function]" == r.call(a) && (a = a(e)), "undefined" == typeof a ? "" : $.encodeHTML(a)
		})) : t
	}, $.showIframeImg = function(t, e) {
		var n = "<style>body{margin:0;padding:0}img{width:#{0}px;height:#{1}px;}</style>",
			r = $(t),
			a = r.height(),
			o = r.width(),
			i = $.stringFormat(n, o, a),
			s = "frameimg" + Math.round(1e9 * Math.random());
		window.betafang[s] = "<head>" + i + '</head><body><img id="img-' + s + "\" src='" + e + "' /></body>", t.append('<iframe style="display:none" id="' + s + '" src="javascript:parent.betafang[\'' + s + '\'];" frameBorder="0" scrolling="no" width="' + o + '" height="' + a + '"></iframe>')
	}, $.loadScript = function(t) {
		function e() {
			return a ? !1 : (a = !0, o.onload = null, o.onerror = null, r.complete && r.complete(), s.resolve(), void i.removeChild(o))
		}

		function n() {
			return a ? !1 : (a = !0, r.fail && r.fail(), i.removeChild(o), void s.reject())
		}
		var r = {
			url: "",
			charset: "utf-8",
			complete: $.noop,
			fail: $.noop
		};
		if ($.extend(r, t), !r.url) throw "url is requireed";
		var a = !1,
			o = document.createElement("script"),
			i = document.getElementsByTagName("head")[0],
			s = $.Deferred();
		return o.onload = e, o.onerror = n, o.onreadystatechange = function(t) {
			"complete" == o.readyState && e()
		}, o.type = "text/javascript", o.src = r.url, o.charset = r.charset, i.appendChild(o), s
	}, $.TextAreaUtil = function(t) {
		var e = document.selection,
			n = {
				getCursorPosition: function(t) {
					var n = 0;
					if (e) {
						t.focus();
						try {
							var r = null;
							r = e.createRange();
							var a = r.duplicate();
							a.moveToElementText(t), a.setEndPoint("EndToEnd", r), t.selectionStartIE = a.text.length - r.text.length, t.selectionEndIE = t.selectionEndIE + r.text.length, n = t.selectionStartIE
						} catch (o) {
							n = t.value.length
						}
					} else(t.selectionStart || "0" == t.selectionStart) && (n = t.selectionStart);
					return n
				},
				getSelectedText: function(e) {
					var n = "",
						r = function(t) {
							return void 0 != t.selectionStart && void 0 != t.selectionEnd ? t.value.slice(t.selectionStart, t.selectionEnd) : ""
						};
					return n = t.getSelection ? r(e) : document.selection.createRange().text
				}
			};
		return n
	}(window), $.browser = $.browser || {}, $.browser.ie = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : void 0;
var betafang = window.betafang || {};
$(function() {
	function t(t) {
		for (var e = document.cookie.split("; "), n = 0; n < e.length; n++) {
			var r = e[n].split("=");
			if (r[0] == t) return unescape(r[1])
		}
	}
	var e = $("#only").attr("data-city"),
		n = $("#only").attr("data-page"),
		r = window.localStorage;
	if (r && "undefined" == typeof r.unicID) {
		var a = "lianjia_" + Math.random().toString().substring(2);
		r.unicID = a
	}
	r && (window.conf = {
		UT: {
			params: {
				page: n,
				city: e,
				id: r.unicID,
				type: "load",
				lianjia_uuid: t("lianjia_uuid")
			}
		}
	}), UT.send(), $("a").on("click", function() {
		function t(t) {
			for (var e = $(t).parents(), n = 0; n < e.length; n++)
				if ("undefined" != typeof e.eq(n).attr("mod-id")) return e.eq(n).attr("mod-id")
		}
		UT.send({
			type: "click",
			ac: "a",
			"mod-id": t($(this)),
			position: $(this).text()
		})
	}), /msie (\d+\.\d+)/i.test(navigator.userAgent) && $("body").addClass("ie", "ie" + (document.documentMode || +RegExp.$1)), $(".lj-lazy").lazyload(), $(".lazyload").scrollLoading();
	var o = $("#keyword-box,#keyword-box-01"),
		i = !1;
	o.closest("form").on("submit", function() {
		if (i) return !1;
		i = !0;
		var t = $(this),
			e = t.attr("data-action") || t.attr("action"),
			n = t.find(".txt"),
			r = $.trim(n.val());
		return r == n.attr("placeholder") && (r = ""), e += encodeURIComponent(r), "_blank" != t.attr("target") ? (window.location.href = e, !1) : void t.attr("action", e)
	})
}), define("common/base", function() {});
var ajax = function() {
	var t = {},
		e = function() {};
	return t.get = function(t, n, r, a) {
		return r = r || e, a = a || e, t ? void $.getJSON(t, n, function(t) {
			0 === t.status ? r(t.data) : a(t)
		}, function(t) {
			var e = {
				status: 500,
				statusInfo: "服务请求失败"
			};
			a(e)
		}) : !1
	}, t.post = function(t, n, r, a) {
		return r = r || e, a = a || e, t ? void $.ajax({
			type: "POST",
			url: t,
			data: n,
			success: function(t) {
				0 === t.status ? r(t.data) : a(t)
			},
			failure: function(t) {
				var e = {
					status: 500,
					statusInfo: "服务请求失败"
				};
				a(e)
			},
			dataType: "json"
		}) : !1
	}, t
}();
define("common/ajax", function() {}),
	function() {
		function t(t, e) {
			var n = document.getElementsByTagName("head")[0],
				r = document.createElement("script");
			r.type = "text/javascript", r.src = t, e = e || function() {}, r.onload = r.onreadystatechange = function() {
				this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (e(), r.onload = r.onreadystatechange = null, n && r.parentNode && n.removeChild(r))
			}, n.insertBefore(r, n.firstChild)
		}

		function e(e, n, a) {
			var o = "cbk_" + Math.round(1e4 * Math.random()),
				i = r + "?from=" + n + "&to=4&x=" + e.lng + "&y=" + e.lat + "&callback=BMap.Convertor." + o;
			a = a || function() {}, t(i), BMap.Convertor[o] = function(t) {
				delete BMap.Convertor[o];
				var e = new BMap.Point(t.x, t.y);
				a(e)
			}
		}

		function n(e, n, a) {
			var o = r + "?from=" + n + "&to=4&mode=1",
				i = [],
				s = [],
				c = 20;
			a = a || function() {};
			var l = function() {
				var e = "cbk_" + Math.round(1e4 * Math.random()),
					n = o + "&x=" + i.join(",") + "&y=" + s.join(",") + "&callback=BMap.Convertor." + e;
				t(n), i = [], s = [], BMap.Convertor[e] = function(t) {
					delete BMap.Convertor[e];
					var n = null,
						r = [];
					for (var o in t)
						if (n = t[o], 0 === n.error) {
							var i = new BMap.Point(n.x, n.y);
							r[o] = i
						} else r[o] = null;
					a(r)
				}
			};
			for (var u in e) u % c === 0 && 0 !== u && l(), i.push(e[u].lng), s.push(e[u].lat), u == e.length - 1 && l()
		}
		var r = "http://api.map.baidu.com/ag/coord/convert";
		window.BMap = window.BMap || {}, BMap.Convertor = $({}), BMap.Convertor.translate = e, BMap.Convertor.translateMore = n
	}();
var LJFixed = function(t, e) {
	function n(e) {
		if (!a.isSupportPlaceHolder) {
			var n = t(e),
				r = n.attr("placeholder");
			"" === n.val() && n.val(r).addClass("placeholder"), n.focus(function() {
				n.val() === n.attr("placeholder") && n.val("").removeClass("placeholder")
			}).blur(function() {
				"" === n.val() && n.val(n.attr("placeholder")).addClass("placeholder")
			}).closest("form").submit(function() {
				n.val() === n.attr("placeholder") && n.val("")
			})
		}
	}

	function r() {
		t("input[placeholder],textarea[placeholder]").each(function() {
			var e = t(this);
			"password" != e.attr("type") && n(this)
		})
	}
	var a = {
		isSupportPlaceHolder: "placeholder" in e.createElement("input")
	};
	t(function() {
		r()
	}), t.fixPlaceholder = n;
	var o = {};
	return o.fixedPlaceHolder = n, o
}($, document);
define("common/fixed", function() {});
var Pagination = function(require) {
	function t(t, e, n) {
		var r = [];
		if (n = n || 6, e = e || 1, n >= t)
			for (var a = 0; t > a; a++) r.push(a + 1);
		else {
			r.push(1), e > 4 && r.push("");
			for (var o = Math.max(e - 2, 2), i = Math.min(e + 2, t - 1), a = o; i >= a; a++) r.push(a);
			t - 3 > e && r.push(""), r.push(t)
		}
		return r
	}

	function e(t, e, n, r) {
		function a(t) {
			return r ? r.replace(/\{page\}/g, t) : "javascript:;"
		}
		var o = [];
		if (n = n || 1, t && t.length) {
			n > 1 && e > 6 && o.push('<a href="' + a(n - 1) + '" data-page="' + (n - 1) + '" >上一页</a>');
			for (var i = t.length, s = 0; i > s; s++) o.push(t[s] ? "<a " + (t[s] == n ? 'class="on"' : "") + ' href="' + a(t[s]) + '" data-page="' + t[s] + '">' + t[s] + "</a>" : "<span>...</span>");
			e > n && e > 6 && o.push('<a href="' + a(n + 1) + '" data-page="' + (n + 1) + '">下一页</a>')
		}
		return o.join("")
	}

	function n(n) {
		function r() {
			a(), s(), i(), o()
		}

		function a() {
			c.template = c.dom.attr("page-url");
			var t = c.dom.attr("target-wrapper");
			t && (c.targetWrapper = $(t));
			var e = c.dom.attr("page-data");
			e ? (e = $.parseJSON(e), $.extend(c, e)) : c.targetWrapper && (c.curPage = 1, c.totalPage = c.targetWrapper.children().length)
		}

		function o() {
			var n = t(c.totalPage, c.curPage);
			n.length || c.dom.hide();
			var r = e(n, c.totalPage, c.curPage, c.template);
			if (c.dom.html(r), c.targetWrapper) {
				var a = c.targetWrapper.children();
				a.hide(), a.eq(c.curPage - 1).show(), c.targetWrapper.find(".lj-lazy").lazyload()
			}
		}

		function i() {
			c.targetWrapper && l.on("showPage", function(t, e) {
				c.curPage = e, o()
			})
		}

		function s() {
			c.dom.delegate("[data-page]", "click", function() {
				var t = $(this).attr("data-page");
				l.trigger("showPage", parseInt(t))
			})
		}
		if (n) {
			var c = {
					dom: $(n),
					template: "",
					targetWrapper: "",
					totalPage: 0,
					curPage: 0
				},
				l = $({});
			return r(), l
		}
	}
	return $(function() {
		var t = $("[comp-module='page']");
		t.each(function() {
			n($(this))
		})
	}), n
}();
define("common/pagination", function() {}), $(document).ready(function(t) {
		b(), ent(), $("#gotop").click(function() {
			$("html , body").animate({
				scrollTop: 0
			}, 1e3)
		})
	}), $(window).scroll(function(t) {
		b()
	}), define("common/backtop", function() {}), define("common/env", function(require) {
		function t() {
			var t = $.parseURL(location.href);
			n.host = t.host, n.scheme = t.scheme, n.port = t.port;
			var e = n.host.substring(0, n.host.indexOf("."));
			0 === e.indexOf("dev") ? n.env = "dev" : 0 === e.indexOf("test") && (n.env = "test")
		}

		function e(t) {
			var e = "";
			return t.scheme && (e += t.scheme + "://"), t.host && (e += t.host), t.port && (e += ":" + t.port), t.path && (e += "/" + t.path), t.query && (e += "?" + t.query), t.hash && (e += "#" + t.hash), e
		}
		var n = {
				host: "",
				scheme: "",
				port: "",
				env: "online"
			},
			r = {};
		return r.getEnv = function() {
			return n.env
		}, r.fixedHost = function(t) {
			if (!t) return n.host;
			var e = t.substring(0, t.indexOf("."));
			switch (n.env) {
				case "dev":
				case "test":
					if (0 !== e.indexOf(n.env)) return n.env + t;
					break;
				case "online":
			}
			return t
		}, r.fixedUrl = function(t) {
			var a = $.parseURL(t);
			return a.host ? (a.host = r.fixedHost(a.host), a.port = n.port, a.scheme || (a.scheme = n.scheme)) : (a.host = n.host, a.scheme = n.scheme, a.port = n.port), e(a)
		}, r.isSameDomain = function(t) {
			var e = $.parseURL(t);
			return e.host == n.host
		}, t(), r
	}), window.LJMessenger = function() {
		function t(t, e) {
			var n = "";
			if (arguments.length < 2 ? n = "target error - target and name are both requied" : "object" != typeof t ? n = "target error - target itself must be window object" : "string" != typeof e && (n = "target error - target name must be string type"), n) throw new Error(n);
			this.target = t, this.name = e
		}

		function e(t, e) {
			this.targets = {}, this.name = t, this.listenFunc = [], n = e || n, "string" != typeof n && (n = n.toString()), this.initListen()
		}
		var n = "[LIANJIA_Messenger_CROSS]",
			r = "postMessage" in window;
		return r ? t.prototype.send = function(t) {
			this.target.postMessage(n + t, "*")
		} : t.prototype.send = function(t) {
			var e = window.navigator[n + this.name];
			if ("function" != typeof e) throw new Error("target callback function is not defined");
			e(n + t, window)
		}, e.prototype.addTarget = function(e, n) {
			var r = new t(e, n);
			this.targets[n] = r
		}, e.prototype.initListen = function() {
			var t = this,
				e = function(e) {
					if ("object" == typeof e && e.data && (e = e.data), e && "string" == typeof e && e.indexOf(n) >= 0) {
						e = e.slice(n.length);
						for (var r = 0; r < t.listenFunc.length; r++) t.listenFunc[r](e)
					}
				};
			r ? "addEventListener" in document ? window.addEventListener("message", e, !1) : "attachEvent" in document && window.attachEvent("onmessage", e) : window.navigator[n + this.name] = e
		}, e.prototype.listen = function(t) {
			this.listenFunc.push(t)
		}, e.prototype.clear = function() {
			this.listenFunc = []
		}, e.prototype.send = function(t) {
			var e, n = this.targets;
			for (e in n) n.hasOwnProperty(e) && n[e].send(t)
		}, e
	}(), "object" != typeof JSON && (JSON = {}),
	function() {
		"use strict";

		function f(t) {
			return 10 > t ? "0" + t : t
		}

		function quote(t) {
			return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function(t) {
				var e = meta[t];
				return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
			}) + '"' : '"' + t + '"'
		}

		function str(t, e) {
			var n, r, a, o, i, s = gap,
				c = e[t];
			switch (c && "object" == typeof c && "function" == typeof c.toJSON && (c = c.toJSON(t)), "function" == typeof rep && (c = rep.call(e, t, c)), typeof c) {
				case "string":
					return quote(c);
				case "number":
					return isFinite(c) ? String(c) : "null";
				case "boolean":
				case "null":
					return String(c);
				case "object":
					if (!c) return "null";
					if (gap += indent, i = [], "[object Array]" === Object.prototype.toString.apply(c)) {
						for (o = c.length, n = 0; o > n; n += 1) i[n] = str(n, c) || "null";
						return a = 0 === i.length ? "[]" : gap ? "[\n" + gap + i.join(",\n" + gap) + "\n" + s + "]" : "[" + i.join(",") + "]", gap = s, a
					}
					if (rep && "object" == typeof rep)
						for (o = rep.length, n = 0; o > n; n += 1) "string" == typeof rep[n] && (r = rep[n], a = str(r, c), a && i.push(quote(r) + (gap ? ": " : ":") + a));
					else
						for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (a = str(r, c), a && i.push(quote(r) + (gap ? ": " : ":") + a));
					return a = 0 === i.length ? "{}" : gap ? "{\n" + gap + i.join(",\n" + gap) + "\n" + s + "}" : "{" + i.join(",") + "}", gap = s, a
			}
		}
		"function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
			return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
		}, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
			return this.valueOf()
		});
		var cx, escapable, gap, indent, meta, rep;
		"function" != typeof JSON.stringify && (escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, meta = {
			"\b": "\\b",
			"	": "\\t",
			"\n": "\\n",
			"\f": "\\f",
			"\r": "\\r",
			'"': '\\"',
			"\\": "\\\\"
		}, JSON.stringify = function(t, e, n) {
			var r;
			if (gap = "", indent = "", "number" == typeof n)
				for (r = 0; n > r; r += 1) indent += " ";
			else "string" == typeof n && (indent = n); if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
			return str("", {
				"": t
			})
		}), "function" != typeof JSON.parse && (cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, JSON.parse = function(text, reviver) {
			function walk(t, e) {
				var n, r, a = t[e];
				if (a && "object" == typeof a)
					for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (r = walk(a, n), void 0 !== r ? a[n] = r : delete a[n]);
				return reviver.call(t, e, a)
			}
			var j;
			if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(t) {
				return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
			})), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
				"": j
			}, "") : j;
			throw new SyntaxError("JSON.parse")
		})
	}(), define("xd/crossRequest", function(require) {
		function t(t, e) {
			var n = document.createElement("iframe");
			return n.id = t, n.name = t, n.src = e, n.style.cssText = "display:none;width:0px;height:0px;", n.width = 0, n.height = 0, n.title = "empty", document.body.appendChild(n), n
		}
		var e = new LJMessenger("LIANJIA_CROSS_MESSAGE", "LIANJIA-CROSS");
		e.listen(function(t) {
			t = JSON.parse(t);
			var n = t.name;
			e.targets[n] && ("state" == t.type ? (e.targets[n].readyState = "ready", e.targets[n].dealReady()) : e.targets[n].deal(t.data, t.success))
		});
		var n = {},
			r = function(t, e) {
				var n = this;
				n.domain = t, e = e || $.parseURL(t).host.replace(/\./g, "-"), n.name = e, n.init()
			};
		return $.extend(r.prototype, {
				init: function() {
					var n = this,
						r = n.domain + "/xd/api/?name=" + n.name,
						a = t(n.name, r);
					n.iframe = a.contentWindow, e.addTarget(n.iframe, n.name), n.reqArray = [], e.targets[n.name].deal = function(t, r) {
						e.targets[n.name].isRequest = !1;
						var a = n.reqArray.shift(),
							o = !1;
						try {
							o = t
						} catch (i) {}
						r ? a.defer.resolve(o) : a.defer.reject(o), n.next()
					}, e.targets[n.name].dealReady = function() {
						n.next()
					}
				},
				next: function() {
					var t = this;
					if (e.targets[t.name].readyState && t.reqArray.length && !e.targets[t.name].isRequest) {
						e.targets[t.name].isRequest = !0;
						var n = t.reqArray[0],
							r = {
								type: "request",
								data: n.request
							},
							a = JSON.stringify(r);
						e.targets[t.name].send(a)
					}
				},
				request: function(t) {
					var e = this,
						n = $.Deferred();
					return e.reqArray.push({
						defer: n,
						request: t
					}), e.next(), n
				}
			}),
			function(t, e) {
				return n[t] ? n[t] : n[t] = new r(t, e)
			}
	}), define("xd/Trans", function(require) {
		var t = $.EventEmitter,
			e = require("xd/crossRequest"),
			n = require("common/env"),
			r = !1,
			a = t.extend({
				initialize: function(t) {
					var a = {
						url: "",
						type: "get",
						dataType: "json",
						args: {}
					};
					$.extend(a, t), a.url = n.fixedUrl(a.url), a.method = a.type;
					var o = this;
					if (o.opt = a, !r) {
						var i = n.fixedUrl($.parseURL(a.url).host);
						n.isSameDomain(i) ? o.isSame = !0 : o.crossRequest = e(i)
					}
				},
				request: function(t) {
					var e = this,
						n = e.opt;
					return $.extend(n.args, t), n.data = n.args, r || e.isSame ? $.ajax(n) : this.crossRequest.request(n)
				}
			});
		return a
	}), define("common/login", function() {
		function t() {
			var t = new $.Trans({
				url: $.env.fixedUrl("http://login.lianjia.com/login/getUserInfo/"),
				type: "jsonp"
			});
			t.request().done(function(t) {
				t && t.username && (t.code = 1), $.listener.trigger("userInfo", t)
			}).fail(function(t) {
				t && $.listener.trigger("userInfo", t.data)
			})
		}
		var e = (require("common/env"), require("xd/Trans"), !1);
		return ("dev" == $.env.getEnv() || "test" == $.env.getEnv()) && (e = !0), $(document.body).ready(function() {
			function t() {
				lianjiaCasManager.config({
					setLoginUrl: $.env.fixedUrl("http://login.lianjia.com/login/getUserInfo/"),
					service: location.href
				}), o && o()
			}

			function e(t) {
				lianjiaCasManager ? t() : o = t
			}

			function n() {
				if (!a) {
					a = !0;
					var e = document.createElement("script");
					"dev" == $.env.getEnv() || "test" == $.env.getEnv() ? e.src = "http://passport.lianjia.com:8088/cas/js/passport.js" : e.src = "https://passport.lianjia.com/cas/js/passport.js", e.type = "text/javascript", e.charset = "utf-8", e.onload = t, document.getElementsByTagName("head")[0].appendChild(e)
				}
			}

			function r() {
				$(".panel_login").fadeOut(), $(".overlay_bg").fadeOut(), $("body").css({
					overflow: ""
				}), $("#dialog").removeClass("bounceIn")
			}
			var a = !1,
				o = !1;
			$(".typeUserInfo").delegate(".btn-login", "click", function(t) {
				return className = $(this).attr("class"), $(".overlay_bg").fadeIn(300), $(".panel_login").removeAttr("class").addClass("panel_login animated " + className).fadeIn(), $("body").css({
					overflow: "hidden"
				}), n(), !1
			}), $(".overlay_bg,.claseDialogBtn").click(function() {
				r()
			}), $("#con_login_user").delegate("input", "keyup", function(t) {
				13 == t.keyCode && $(".login-user-btn").click()
			}), $(".login-user-btn").on("click", function(t) {
				function n(t) {
					t = t || "用户名或者密码错误";
					var e = $("#con_login_user").find(".show-error");
					e.find("dd").html(t), e.show()
				}
				var r = $("#con_login_user").find(".item"),
					a = ($("#con_login_agent").find(".item"), r.find(".users").val()),
					o = r.find(".password").val();
				if (!a) return void r.find(".users").focus();
				if (!o) return void r.find(".password").focus();
				var i = $("#con_login_user").find('[name="remember"]').get(0),
					s = {
						username: a,
						password: o,
						verifycode: ""
					};
				if (i && i.checked && (s.remember = 1), "none" != $(".checkVerimg").css("display")) {
					if (!$(".ver-img").val()) return void $(".ver-img").focus();
					s.verifyCode = $(".ver-img").val()
				}
				e(function() {
					lianjiaCasManager.login(s, function(t) {
						-1 == t.code ? n() : location.reload()
					}, function() {
						n()
					})
				})
			})
		}), {
			init: function() {
				function e(t) {
					var e = $(".typeUserInfo");
					t && t.username && (t.username = $.encodeHTML($.getLimitString(t.username, 20, ".."))), e.each(function() {
						var e = $(this),
							n = e.find(".template").html();
						if (n) {
							n = $.template(n);
							var r = $.trim(n.render({
								data: t
							}));
							e.find(".typeShowUser").html(r)
						}
					})
				}
				$.listener.on("userInfo", function(t) {
					e(t)
				}), t()
			}
		}
	}), define("common/scrollCaller", function(require) {
		function t() {
			for (var t = i.scrollTop(), e = s.length - 1; e >= 0; e--) try {
				s[e].call(i, t)
			} catch (n) {
				console.error && console.error(n.stack)
			}
		}

		function e() {
			o && clearTimeout(o), o = setTimeout(function() {
				t()
			}, 30)
		}

		function n(t) {
			t ? i.scroll(e) : i.unbind("scroll", e)
		}

		function r(t) {
			s.length || n(!0), s.push(t)
		}

		function a(t) {
			var e = $.inArray(t, s);
			e >= 0 && s.splice(e, 1), s.length || n(!1)
		}
		var o = !1,
			i = $(window),
			s = [];
		return function(t) {
			if (!t) throw "fun is required";
			return r(t), {
				destroy: function() {
					a(t)
				}
			}
		}
	});
var UT = {
	url: "http://ajax.lianjia.com/statistic/index",
	send: function(t, e) {
		if (t = t || {}, window.conf) {
			var n, r = window.conf.UT,
				a = e && e.url || this.url,
				o = e && e.params || r.params,
				i = t.r = +new Date,
				s = window,
				c = encodeURIComponent,
				l = s["UT" + i] = new Image,
				u = [];
			if (o)
				for (var f in o) o[f] !== n && t[f] === n && (t[f] = o[f]);
			for (n in t) u.push(c(n) + "=" + c(t[n]));
			l.onload = l.onerror = function() {
				s["UT" + i] = null
			}, l.src = a + "?" + u.join("&"), l = u = null
		}
	},
	attr: function(t, e) {
		var n = t.getAttribute("log-mod");
		if (n) {
			var r = t.getAttribute("log-index");
			r && (e.modIndex = r), e.modId = n
		} else t.parentNode && "BODY" != t.parentNode.tagName.toUpperCase() && this.attr(t.parentNode, e)
	},
	link: function(t) {
		var e = {},
			n = t.getAttribute("href", 2);
		n && (/^(javascript|#)/.test(n) ? (e.ac = "b", e.url = "none") : (e.ac = "a", e.url = n));
		var r = t.getAttribute("log-index");
		r && (e.linkIndex = r);
		var a = t.getAttribute("data-sort") || "";
		a && (e.sort = a, e.value = t.getAttribute("data-val") || "");
		var o = t.getAttribute("log-oid");
		return o && (e.offerid = o), this.attr(t, e), e
	}
};
define("common/footer", function(require) {
		function t() {
			var t = $(".tab");
			$(".link-list div").eq(0).show(), $(".link-footer div").eq(0).show(), t.delegate("span", "mouseover", function(t) {
				var e = $(t.currentTarget),
					n = e.index(),
					r = e.closest(".tab").next(".link-list");
				e.addClass("hover").siblings("span").removeClass("hover"), r.find("div").eq(n).show().siblings("div").hide()
			})
		}

		function e() {
			$(".hot-frauds").hover(function() {
				$(".frauds-list").show()
			}), $(document.body).on("mousedown", function(t) {
				$(t.target).closest(".frauds-list,.hot-sug,.search-txt ul,.del").length || ($(".frauds-list").hide(), $(".hot-sug").hide(), l.css({
					height: "35px",
					overflow: "hidden",
					border: "0px",
					background: "none",
					left: "0px",
					top: "0px",
					display: "none"
				}))
			}), $(".txt").focus(function(t) {
				"" == $(this).val() ? $(t.target).next("div").show() : ($(t.target).next("div").hide(), setTimeout(function() {
					$("#suggest-cont ul li").length > 0 ? $(t.target).next("div").hide() : $(t.target).next("div").show()
				}, 500))
			}), $(".txt").keydown(function(t) {
				$(t.target).next("div").hide()
			})
		}

		function n() {
			var t = $(".hot-sug ul");
			t.eq(0).show(), u.click(function() {
				l.css({
					height: "auto",
					overflow: "auto",
					background: "#fff",
					border: "1px solid #ccc",
					left: "-1px",
					top: "-1px",
					display: "block"
				})
			}), l.delegate("li label", "click", function(e) {
				var n = $(e.currentTarget),
					r = n.parent("li").index(),
					a = n.attr("actdata");
				a = a.split("=")[1], u.text(n.text()), u.attr("actdata", a), l.css({
					display: "none"
				});
				var o = $.queryToJson(n.attr("actData"));
				o && defaultSuggest.suggestView.model.trans.setArgs(o);
				var i = $(this).attr("formact"),
					s = n.attr("tra"),
					f = n.attr("tips");
				n.closest(".search-txt").find("form").attr({
					action: i,
					target: s
				}), n.closest(".search-txt").find("form").attr({
					"data-action": i
				}), n.closest(".search-txt").find(".autoSuggest").attr("placeholder", f), t.eq(r).show().siblings("ul").hide();
				var d = n.closest(".search-txt").find(".autoSuggest");
				"placeholder" in document.createElement("input") ? d.val("") : d.val(f), c()
			})
		}

		function r() {
			var t = $("#back-top .tips li,#gotop");
			t.mouseenter(function() {
				$(this).find("span").css({
					opacity: "1"
				}), $(this).css({
					overflow: "inherit",
					width: "auto"
				})
			}), t.mouseleave(function(t) {
				$(this).find("span").css({
					opacity: "0"
				}), $(this).css({
					overflow: "hidden",
					width: "37px"
				})
			})
		}

		function a() {
			var t = $(".feedback-box");
			$("#tel").val();
			t.delegate("#sub", "click", function() {
				var e = ($("#sub"), $("#tips")),
					n = "/site/accuse/",
					r = ($("#count"), $("#tel").val()),
					a = $("#count").val();
				a = $.trim(a);
				var o = $("#count").attr("placeholder");
				if ("" == a || a == o) return $(".erro-tips").show(), !1;
				var i = {
					contact: r,
					content: a
				};
				$.ajax({
					type: "POST",
					url: n,
					dataType: "json",
					data: i,
					success: function(n) {
						0 == n.status ? (e.html("反馈成功非常感谢您的反馈！"), t.delay(2e3).fadeOut().removeClass("bounceIn"), d.delay(2e3).fadeOut()) : e.html("反馈失败请重新填写！")
					}
				})
			})
		}

		function o() {
			var t = ($("#feedback"), $(".feedback-box"));
			t.fadeOut().removeClass("bounceIn"), t.html(f), d.fadeOut()
		}

		function i() {
			var t = $("#feedback"),
				e = $(".feedback-box");
			t.click(function(t) {
				e.show(), e.addClass("bounceIn"), d.fadeIn(300), e.html(f)
			}), d.click(function(t) {
				o()
			}), e.delegate(".closebok", "click", function(t) {
				o()
			})
		}

		function s(t, e) {
			searchHis = localStorage.getItem(t), searchHis = JSON.parse(searchHis), searchHis ? ($.each(searchHis, function(t, n) {
				n && n.name == e.name && searchHis.splice(t, 1)
			}), searchHis.unshift(e), saveQuery = searchHis.slice(0, 10)) : saveQuery = [e], localStorage.setItem(t, JSON.stringify(saveQuery))
		}

		function c() {
			var t = $(".btn");
			if ($(".search-tab .check").length > 0) {
				var e = $(".search-tab .check").attr("actdata"),
					n = t.attr("daty-id");
				menu = e + n, $("#keyword-box").on("formSelect", function(t, e) {
					$(this).val($(e).find(".hot-title").text()), url = $(e).attr("actdata"), url = url.substring(url.indexOf("&url=") + 5, url.lastIndexOf("&title")), url = unescape(url), $(this).attr("url", url)
				}), t.click(function(t) {
					if ($("#keyword-box").attr("url")) {
						var e = $("#keyword-box").val(),
							n = $("#keyword-box").attr("url");
						query = {
							name: e,
							url: n
						}, s(menu, query)
					} else {
						var r = $(".search-txt form").attr("data-action"),
							e = $("#keyword-box").val(),
							n = window.location.host + r + e;
						"" != e && (query = {
							name: e,
							url: n
						}, s(menu, query))
					}
				});
				var r = $(".hot-sug");
				r.delegate("li a", "click", function(t) {
					var e = $(t.currentTarget);
					name = e.text(), url = e.attr("href"), query = {
						name: name,
						url: url
					}, s(menu, query)
				});
				var a = $("#suggest-cont");
				a.delegate("ul li", "click", function(t) {
					var e = $(t.currentTarget);
					name = e.find(".hot-title").text(), url = e.attr("actdata"), url = url.substring(url.indexOf("&url=") + 5, url.lastIndexOf("&title")), url = unescape(url), query = {
						name: name,
						url: url
					}, s(menu, query)
				});
				var o = localStorage.getItem(menu);
				if (o = JSON.parse(o), console.log(o), null != o) {
					$("#keyword-box").val(o[0].name);
					var i = $(".hot-sug ul#" + e + " .list"),
						c = $(".hot-sug ul#" + e + " .hot-name"),
						l = i.html();
					c.text("搜索历史"), i.html(""), $.each(o, function(t, e) {
						var n = '<li><a href="' + e.url + '">' + e.name + "</a></li>";
						i.append(n)
					});
					var u = $("#" + e + " .del");
					u.show(), u.click(function(t) {
						localStorage.removeItem(menu), i.html(""), i.append(l), c.text("热门搜索"), u.hide(), $("#keyword-box").val("")
					})
				}
			}
		}
		var l = $(".search-tab .tabs"),
			u = $(".search-tab .check"),
			f = $(".feedback-box").html(),
			d = $(".overlay_bg");
		return {
			init: function(o) {
				c(), e(), t(), n(), i(), a(), r()
			}
		}
	}),
	function() {
		$.listener = new $.EventEmitter(!0), $.env = require("common/env"), $(document.body).ready(function() {
			require("common/login").init();
			var t = $("#only");
			t.attr("data-city") && (t.attr("data-city").indexOf("su") >= 0 && ($(".laisuzhou").addClass("laisuzhou-class"), $(document.body).delegate(".laisuzhou", "click", function(t) {
				return !1
			})), (t.attr("data-city").indexOf("sh") >= 0 || t.attr("data-city").indexOf("wh") >= 0 || t.attr("data-city").indexOf("sz") >= 0 || t.attr("data-city").indexOf("xm") >= 0) && ($(".laishanghai").addClass("laisuzhou-class"), $(document.body).delegate(".laishanghai", "click", function(t) {
				return !1
			}))), require("common/footer").init()
		})
	}();