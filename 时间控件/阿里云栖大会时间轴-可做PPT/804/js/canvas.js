/* DaTouWang URL: www.datouwang.com */
! function(t) {
	function e(r) {
		if(n[r]) return n[r].exports;
		var i = n[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
	}
	var n = {};
	e.m = t, e.c = n, e.d = function(t, n, r) {
		e.o(t, n) || Object.defineProperty(t, n, {
			configurable: !1,
			enumerable: !0,
			get: r
		})
	}, e.n = function(t) {
		var n = t && t.__esModule ? function() {
			return t.default
		} : function() {
			return t
		};
		return e.d(n, "a", n), n
	}, e.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, e.p = "", e(e.s = 0)
}([function(t, e, n) {
	"use strict";

	function r(t, e) {
		if($(window).width() > 768) switch(t.find(".module-wrap").height($(window).height()), e.moduleinfo.year) {
			case "2015":
				i(t);
				break;
			case "2016":
				o(t);
				break;
			case "2017":
				a(t);
				break;
			case "2018":
				s(t)
		}
		$(window).resize(function() {
			$(window).width() <= 768 ? t.hide() : t.show()
		})
	}

	function i(t) {
		function e() {
			g && requestAnimFrame(e), r(), i()
		}

		function n() {
			for(o = h.width / 2, a = h.height / 2, m = [], c = 0; c < l; c++) s = {
				x: Math.random() * h.width,
				y: Math.random() * h.height,
				z: Math.random() * h.width,
				o: "0." + Math.floor(99 * Math.random()) + 1
			}, m.push(s)
		}

		function r() {
			for(c = 0; c < l; c++) s = m[c], --s.z <= 0 && (s.z = h.width)
		}

		function i() {
			var t, e, r;
			for(h.width == window.innerWidth && h.width == window.innerWidth || (h.width = window.innerWidth, h.height = window.innerHeight, n()), 0 == f && (u.fillStyle = "rgba(9,8,29,1)", u.fillRect(0, 0, h.width, h.height)), u.fillStyle = "rgba(209, 255, 255, " + d + ")", c = 0; c < l; c++) s = m[c], t = (s.x - o) * (p / s.z), t += o, e = (s.y - a) * (p / s.z), e += a, r = p / s.z * 1, u.fillRect(t, e, r, r), u.fillStyle = "rgba(209, 255, 255, " + s.o + ")"
		}
		window.requestAnimFrame = function() {
			return window.requestAnimationFrame
		}();
		var o, a, s, c, h = document.getElementById("aniBg"),
			u = h.getContext("2d"),
			l = 1900,
			d = "0." + Math.floor(9 * Math.random()) + 1,
			p = 2 * h.width,
			f = 0,
			m = [],
			g = !0;
		n(), e()
	}

	function o(t) {
		function e() {
			m = window.innerWidth / 2, g = window.innerHeight / 2, a.aspect = window.innerWidth / window.innerHeight, a.updateProjectionMatrix(), c.setSize(window.innerWidth, window.innerHeight)
		}

		function n() {
			requestAnimationFrame(n), r(), o.update()
		}

		function r() {
			a.position.x += .05 * (85 - a.position.x), a.position.y += .05 * (342 - a.position.y), a.lookAt(s.position);
			for(var t = 0, e = 0; e < d; e++)
				for(var n = 0; n < p; n++) u = h[t++], u.position.y = 50 * Math.sin(.3 * (e + f)) + 50 * Math.sin(.5 * (n + f)), u.scale.x = u.scale.y = 4 * (Math.sin(.3 * (e + f)) + 1) + 4 * (Math.sin(.5 * (n + f)) + 1);
			c.render(s, a), f += .1
		}
		var i, o, a, s, c, h, u, l = 80,
			d = 40,
			p = 40,
			f = 0,
			m = window.innerWidth / 2,
			g = window.innerHeight / 2;
		! function() {
			i = document.getElementById("aniBg-wrap"), a = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 0), a.position.z = 1e3, s = new THREE.Scene, h = new Array;
			for(var t = 2 * Math.PI, n = new THREE.SpriteCanvasMaterial({
					color: 2434618,
					program: function(e) {
						e.beginPath(), e.arc(0, 0, .5, 0, t, !0), e.fill()
					}
				}), r = 0, f = 0; f < d; f++)
				for(var m = 0; m < p; m++) u = h[r++] = new THREE.Sprite(n), u.position.x = f * l - d * l / 2, u.position.z = m * l - p * l / 2, s.add(u);
			c = new THREE.CanvasRenderer, c.setClearColor(65559, 1), c.setPixelRatio(window.devicePixelRatio), c.setSize(window.innerWidth, window.innerHeight), i.appendChild(c.domElement), o = new Stats, window.addEventListener("resize", e, !1)
		}(), n()
	}

	function a(t) {
		function e() {
			function t(t) {
				P = {
					x: t.clientX,
					y: t.clientY
				}
			}

			function e(t) {}

			function n(t) {}

			function r(t) {
				t.touches.length > 1 && (t.preventDefault(), mousePos = {
					x: t.touches[0].pageX,
					y: t.touches[0].pageY
				})
			}

			function i(t) {
				mousePos = {
					x: windowHalfX,
					y: windowHalfY
				}
			}

			function o(t) {
				1 == t.touches.length && (t.preventDefault(), mousePos = {
					x: t.touches[0].pageX,
					y: t.touches[0].pageY
				})
			}

			function a() {
				S = window.innerWidth, A = 900, R = S / 2, L = A / 2, M.setSize(S, A), f.aspect = S / A, f.updateProjectionMatrix()
			}
			window.addEventListener("resize", a, !1), document.addEventListener("mousemove", t, !1), document.addEventListener("mousedown", e, !1), document.addEventListener("mouseup", n, !1), document.addEventListener("touchstart", r, !1), document.addEventListener("touchend", i, !1), document.addEventListener("touchmove", o, !1)
		}

		function r() {
			if(C % 2 == 0 && I && 0 !== I.vortex) {
				for(var t = 0; t < T.geometry.vertices.length; t++) {
					var e = T.geometry.vertices[t],
						n = -Math.PI / 180;
					I.vortex > 0 ? n *= (1 - e.length() / I.radius) * I.vortex : n *= e.length() / I.radius * Math.abs(I.vortex), e.applyAxisAngle(O, n)
				}
				T.geometry.verticesNeedUpdate = !0
			}
			C++
		}

		function i(t) {
			r(), T.rotation.z -= .0025, o(), requestAnimationFrame(i)
		}

		function o() {
			m && m.update(), M.render(p, f)
		}

		function a() {
			var t = document.createElement("canvas");
			t.width = 128, t.height = 128;
			var e = t.getContext("2d"),
				n = e.createRadialGradient(t.width / 2, t.height / 2, 0, t.width / 2, t.height / 2, t.width / 2);
			return n.addColorStop(0, "rgba(255,255,255,1)"), n.addColorStop(.2, "rgba(240,255,240,1)"), n.addColorStop(.22, "rgba(0,150,255,.2)"), n.addColorStop(1, "rgba(0,50,255,0)"), e.fillStyle = n, e.fillRect(0, 0, t.width, t.height), t
		}

		function s(t) {
			function e(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.pow(2, 31);
				return(t * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1103515245) + (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 12345)) % e
			}
			return {
				toArray: function() {
					for(var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, r = n / -6e4, i = t.modulus(), o = t.armTheta(), a = [], s = 0, c = 0; c < t.arms; c++)
						for(var h = 0; h < t.stops; h++) {
							s = e(s, i);
							var u = h / t.stops,
								l = 1 - u + 1 - t.dispersion,
								d = s / i,
								p = 2 * (d - .5),
								f = u * Math.PI * 2 * t.revolutions + o * c,
								m = r + f + Math.PI * l * p * t.sparse,
								g = Math.sqrt(u) * t.radius,
								v = Math.cos(m) * g,
								y = Math.sin(m) * g,
								x = 2 * (d - .5) + Math.pow(1.125, 8 * (1 - u)),
								w = .5 * (Math.sin((d + r + u) * Math.PI * 2) + 1);
							a.push({
								x: v,
								y: y,
								z: 0,
								size: x,
								alpha: w
							})
						}
					return a
				}
			}
		}

		function c(t) {
			for(var e = 10 - 10 * t.dispersion * (1 - t.bulge), n = 10 - 10 * t.dispersion * (1 - t.bulge), r = 40 - 40 * t.dispersion * (1 - t.bulge), i = new d.Geometry, o = s(t).toArray(), a = 0; a < o.length; a++) {
				var c = o[a],
					h = Math.pow(Math.pow(c.x, 2) + Math.pow(c.y, 2), .5),
					u = Math.max(0, (.8 * t.radius - h) / (.8 * t.radius));
				u = (1 - Math.cos(u * Math.PI)) * t.bulge;
				var l = new d.Vector3;
				l.x = c.x, l.y = c.y, l.z = (-r + 2 * r * Math.random()) * u, i.vertices.push(l), i.colors.push(new d.Color(u, u, 1));
				for(var p = Math.round(5 * u), f = 0; f < p;) {
					var m = new d.Vector3;
					m.x = c.x - e + Math.random() * (2 * e), m.y = c.y - n + Math.random() * (2 * n), m.z = (-r + 2 * r * Math.random()) * u, i.vertices.push(m), i.colors.push(new d.Color(u, u, 1)), f++
				}
			}
			i.mergeVertices(), i.verticesNeedUpdate = !0, T.geometry = i
		}

		function h(t) {
			var e = "# .PCD v.7 - Point Cloud Data file format\r\n";
			e += "VERSION .7\r\n", e += "FIELDS x y z rgb\r\n", e += "SIZE 4 4 4 4\r\n", e += "TYPE F F F F\r\n", e += "COUNT 1 1 1 1\r\n", e += "WIDTH " + t.length + "\r\n", e += "HEIGHT 1\r\n", e += "VIEWPOINT 0 0 0 1 0 0 0\r\n", e += "POINTS " + t.length + "\r\n", e += "DATA ascii\r\n";
			for(var n = 0; n < t.length; n++) {
				var r = t[n];
				e += r.x.toFixed(5) + " " + r.y.toFixed(5) + " " + r.z.toFixed(5) + " 4.2108e+06", n < t.length - 1 && (e += "\r\n")
			}
			return e
		}

		function u(t) {
			for(var e = {
					vertex: {
						x: [],
						y: [],
						z: []
					},
					face: {
						vertex_index: []
					}
				}, n = 0; n < t.length; n++) {
				var r = t[n];
				e.vertex.x.push(r.x), e.vertex.y.push(r.y), e.vertex.z.push(r.z)
			}
			return writePLY(e)
		}

		function l(t) {
			for(var e = "", n = 0; n < t.length; n++) {
				var r = t[n];
				e += r.x.toFixed(6) + " " + r.y.toFixed(6) + " " + r.z.toFixed(6) + "\r\n"
			}
			return e
		}
		var d = n(2),
			p = void 0,
			f = void 0,
			m = void 0,
			g = void 0,
			v = void 0,
			y = void 0,
			x = void 0,
			w = void 0,
			b = void 0,
			_ = void 0,
			M = void 0,
			E = void 0,
			T = void 0,
			S = void 0,
			A = void 0,
			R = void 0,
			L = void 0,
			P = {
				x: 0,
				y: 0
			},
			C = 0,
			O = new d.Vector3(0, 0, 1);
		! function() {
			S = window.innerWidth, A = window.innerHeight, v = S / A, R = S / 2, L = A / 2, g = 60, y = 110, x = 2e4, p = new d.Scene, f = new d.PerspectiveCamera(g, v, y, x), f.position.z = 400, f.position.x = 180, f.position.y = -800, f.lookAt(new d.Vector3(0, 0, 0)), M = new d.WebGLRenderer({
				alpha: !0,
				antialias: !0
			}), M.setSize(S, A), M.setClearColor(132366, 1), M.shadowMap.enabled = !0, E = document.getElementById("aniBg-wrap"), E.appendChild(M.domElement), e()
		}(),
		function() {
			var t = new d.CanvasTexture(a()),
				e = new d.Geometry,
				n = new d.PointsMaterial({
					size: 8,
					map: t,
					vertexColors: d.VertexColors,
					blending: d.AdditiveBlending,
					depthTest: !1,
					transparent: !0
				});
			T = new d.Points(e, n), p.add(T)
		}(),
		function() {
			_ = new d.HemisphereLight(16777215, 16777215, .5), w = new d.DirectionalLight(16777215, .8), w.position.set(200, 200, 200), w.castShadow = !0, b = new d.DirectionalLight(16777215, .4), b.position.set(-100, 200, 50), b.castShadow = !0, p.add(_), p.add(w), p.add(b)
		}(), i();
		var I = function() {
			function t() {
				this.arms = 2, this.stops = 5e3, this.revolutions = 1.8, this.radius = 400, this.sparse = .4, this.dispersion = .6, this.bulge = .9, this.vortex = .3, this.randomize = function() {
					for(var t = 0; t < gui.__controllers.length; t++) {
						var e = gui.__controllers[t];
						if(e.__min) {
							var n = e.__min + (e.__max - e.__min) * Math.random();
							this[e.property] = n, e.updateDisplay()
						}
					}
					c(this)
				}, this.exportPCD = function() {
					var t = T.geometry,
						e = h(t.vertices);
					N(e, "galaxy.pcd")
				}, this.exportXYZ = function() {
					var t = T.geometry,
						e = l(t.vertices);
					N(e, "galaxy.xyz")
				}, this.exportPLY = function() {
					var t = T.geometry,
						e = u(t.vertices);
					N(e, "galaxy.ply")
				}, this.exportOBJ = function() {
					var t = new d.OBJExporter,
						e = t.parse(p);
					N(e, "galaxy.obj")
				}, this.exportSTL = function() {
					var t = new d.STLExporter,
						e = t.parse(p);
					N(e, "galaxy.stl")
				}, this.armTheta = function() {
					return 2 * Math.PI / this.arms
				}, this.modulus = function() {
					return Math.pow(2, 31)
				}
			}
			return new t
		}();
		! function() {
			function t(t, e, n) {
				this.x = t || 0, this.y = e || 0, this.z = n || 0
			}
			var e = {
				x: .09,
				y: .09,
				z: .3
			};
			t.prototype = {
				randomize: function() {
					return this.x = 1e3 * Math.random(), this.y = 1e3 * Math.random(), this.z = 1e3 * Math.random(), this
				},
				toGrid: function() {
					return this.x = Math.round(this.x / e.x) * e.x, this.y = Math.round(this.y / e.y) * e.y, this.z = Math.round(this.z / e.z) * e.z, this
				},
				toFixed: function() {
					return this.x = +this.x.toFixed(2), this.y = +this.y.toFixed(2), this.z = +this.z.toFixed(2), this
				}
			}, t.grid = function(e) {
				for(var n = 0; n < e.length; n++) e[n].toGrid().toFixed();
				t.sort(e)
			}, t.sort = function(t) {
				t.sort(function(t, e) {
					return t.z === e.z ? t.x === e.x ? t.y === e.y ? 0 : t.y > e.y ? 1 : -1 : t.x > e.x ? 1 : -1 : t.z > e.z ? 1 : -1
				})
			}
		}();
		c(I);
		var N = function() {
			var t = document.createElement("a");
			return document.body.appendChild(t),
				function(e, n, r) {
					e = r ? JSON.stringify(e) : e;
					var i = new Blob([e], {
							type: "octet/stream"
						}),
						o = window.URL.createObjectURL(i);
					t.href = o, t.download = n, t.click(), window.URL.revokeObjectURL(o)
				}
		}()
	}

	function s(t) {
		function e(t) {
			if(null !== l.x)
				for(var e = 0; e < t; e++) {
					var n = {
						x: l.x,
						y: l.y,
						r: 1,
						speed: 1,
						accel: p,
						accel2: f,
						angle: g
					};
					g += s;
					var i = {
						x: r * Math.cos(n.angle * Math.PI / 180),
						y: r * Math.sin(n.angle * Math.PI / 180)
					};
					n.x += i.x, n.y += i.y, u.push(n)
				}
		}

		function n() {
			e(a);
			var t = [];
			if(h.clearRect(0, 0, c.width, c.height), (d += o) < 360) {
				l = {
					x: c.width / 2,
					y: c.height / 2,
					angle: d
				};
				var n = l.angle * Math.PI / 180;
				l.x += i * Math.cos(n), l.y += i * Math.sin(n)
			} else d = 0;
			for(; u.length;) {
				var r = u.pop(),
					s = {
						x: r.speed * Math.cos(r.angle * Math.PI / 180),
						y: r.speed * Math.sin(r.angle * Math.PI / 180)
					};
				h.beginPath(), h.moveTo(r.x, r.y), h.lineTo(r.x + s.x, r.y + s.y), h.closePath(), h.stroke(), r.x += s.x, r.y += s.y, r.speed *= r.accel, r.accel += r.accel2, r.x < c.width && r.x > 0 && r.y < c.height && r.y > 0 && t.push(r)
			}
			u = t.slice(0).reverse()
		}
		t.find(".module-wrap").css({
			background: "#110f1a"
		});
		var r = 150,
			i = 200,
			o = 1,
			a = 10,
			s = 37,
			c = document.getElementById("aniBg"),
			h = c.getContext("2d"),
			u = [],
			l = {},
			d = 0,
			p = 1.01,
			f = 1e-6,
			m = window.devicePixelRatio || 1,
			g = 0;
		c.width = window.innerWidth * m, c.height = window.innerHeight * m, c.style.setProperty("top", "-1px"), c.style.setProperty("left", "-1px"), l.x = null, l.y = null, h.strokeStyle = "#8325EB", h.translate(.5, .5), window.requestAnimFrame = function() {
				return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
					window.setTimeout(t, 1e3 / 60)
				}
			}(),
			function t() {
				requestAnimFrame(t), n()
			}(), 2 == m && (c.style.width = "100%", c.style.height = "100%")
	}
	n(1), $(".wb-zc-lxmod-yunqi-review-2018-anim").each(function() {
		var t = $(this).find("textarea.schemaData"),
			e = t.val(),
			n = JSON.parse(e);
		n && r($(this), n)
	}), t.exports = r
}, function(t, e) {}, function(t, e, n) {
	"use strict";

	function r() {}

	function i(t, e) {
		this.x = t || 0, this.y = e || 0
	}

	function o() {
		this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
	}

	function a(t, e, n, r) {
		this._x = t || 0, this._y = e || 0, this._z = n || 0, this._w = void 0 !== r ? r : 1
	}

	function s(t, e, n) {
		this.x = t || 0, this.y = e || 0, this.z = n || 0
	}

	function c() {
		this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
	}

	function h(t, e, n, r, o, a, s, u, l, d) {
		Object.defineProperty(this, "id", {
			value: Nc++
		}), this.uuid = Ic.generateUUID(), this.name = "", this.image = void 0 !== t ? t : h.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : h.DEFAULT_MAPPING, this.wrapS = void 0 !== n ? n : fs, this.wrapT = void 0 !== r ? r : fs, this.magFilter = void 0 !== o ? o : xs, this.minFilter = void 0 !== a ? a : bs, this.anisotropy = void 0 !== l ? l : 1, this.format = void 0 !== s ? s : Us, this.type = void 0 !== u ? u : _s, this.offset = new i(0, 0), this.repeat = new i(1, 1), this.center = new i(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new c, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== d ? d : Mc, this.version = 0, this.onUpdate = null
	}

	function u(t, e, n, r) {
		this.x = t || 0, this.y = e || 0, this.z = n || 0, this.w = void 0 !== r ? r : 1
	}

	function l(t, e, n) {
		this.width = t, this.height = e, this.scissor = new u(0, 0, t, e), this.scissorTest = !1, this.viewport = new u(0, 0, t, e), n = n || {}, void 0 === n.minFilter && (n.minFilter = xs), this.texture = new h(void 0, void 0, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.generateMipmaps = void 0 === n.generateMipmaps || n.generateMipmaps, this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 === n.stencilBuffer || n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null
	}

	function d(t, e, n) {
		l.call(this, t, e, n), this.activeCubeFace = 0, this.activeMipMapLevel = 0
	}

	function p(t, e, n, r, i, o, a, s, c, u, l, d) {
		h.call(this, null, o, a, s, c, u, r, i, l, d), this.image = {
			data: t,
			width: e,
			height: n
		}, this.magFilter = void 0 !== c ? c : gs, this.minFilter = void 0 !== u ? u : gs, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
	}

	function f(t, e) {
		this.min = void 0 !== t ? t : new s(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== e ? e : new s(-1 / 0, -1 / 0, -1 / 0)
	}

	function m(t, e) {
		this.center = void 0 !== t ? t : new s, this.radius = void 0 !== e ? e : 0
	}

	function g(t, e) {
		this.normal = void 0 !== t ? t : new s(1, 0, 0), this.constant = void 0 !== e ? e : 0
	}

	function v(t, e, n, r, i, o) {
		this.planes = [void 0 !== t ? t : new g, void 0 !== e ? e : new g, void 0 !== n ? n : new g, void 0 !== r ? r : new g, void 0 !== i ? i : new g, void 0 !== o ? o : new g]
	}

	function y(t, e, n) {
		return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
	}

	function x() {
		function t(i, o) {
			!1 !== n && (r(i, o), e.requestAnimationFrame(t))
		}
		var e = null,
			n = !1,
			r = null;
		return {
			start: function() {
				!0 !== n && null !== r && (e.requestAnimationFrame(t), n = !0)
			},
			stop: function() {
				n = !1
			},
			setAnimationLoop: function(t) {
				r = t
			},
			setContext: function(t) {
				e = t
			}
		}
	}

	function w(t) {
		function e(e, n) {
			var r = e.array,
				i = e.dynamic ? t.DYNAMIC_DRAW : t.STATIC_DRAW,
				o = t.createBuffer();
			t.bindBuffer(n, o), t.bufferData(n, r, i), e.onUploadCallback();
			var a = t.FLOAT;
			return r instanceof Float32Array ? a = t.FLOAT : r instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : r instanceof Uint16Array ? a = t.UNSIGNED_SHORT : r instanceof Int16Array ? a = t.SHORT : r instanceof Uint32Array ? a = t.UNSIGNED_INT : r instanceof Int32Array ? a = t.INT : r instanceof Int8Array ? a = t.BYTE : r instanceof Uint8Array && (a = t.UNSIGNED_BYTE), {
				buffer: o,
				type: a,
				bytesPerElement: r.BYTES_PER_ELEMENT,
				version: e.version
			}
		}

		function n(e, n, r) {
			var i = n.array,
				o = n.updateRange;
			t.bindBuffer(r, e), !1 === n.dynamic ? t.bufferData(r, i, t.STATIC_DRAW) : -1 === o.count ? t.bufferSubData(r, 0, i) : 0 === o.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (t.bufferSubData(r, o.offset * i.BYTES_PER_ELEMENT, i.subarray(o.offset, o.offset + o.count)), o.count = -1)
		}

		function r(t) {
			return t.isInterleavedBufferAttribute && (t = t.data), a.get(t)
		}

		function i(e) {
			e.isInterleavedBufferAttribute && (e = e.data);
			var n = a.get(e);
			n && (t.deleteBuffer(n.buffer), a.delete(e))
		}

		function o(t, r) {
			t.isInterleavedBufferAttribute && (t = t.data);
			var i = a.get(t);
			void 0 === i ? a.set(t, e(t, r)) : i.version < t.version && (n(i.buffer, t, r), i.version = t.version)
		}
		var a = new WeakMap;
		return {
			get: r,
			remove: i,
			update: o
		}
	}

	function b(t, e, n, r) {
		this._x = t || 0, this._y = e || 0, this._z = n || 0, this._order = r || b.DefaultOrder
	}

	function _() {
		this.mask = 1
	}

	function M() {
		function t() {
			i.setFromEuler(r, !1)
		}

		function e() {
			r.setFromQuaternion(i, void 0, !1)
		}
		Object.defineProperty(this, "id", {
			value: Gc++
		}), this.uuid = Ic.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = M.DefaultUp.clone();
		var n = new s,
			r = new b,
			i = new a,
			h = new s(1, 1, 1);
		r.onChange(t), i.onChange(e), Object.defineProperties(this, {
			position: {
				enumerable: !0,
				value: n
			},
			rotation: {
				enumerable: !0,
				value: r
			},
			quaternion: {
				enumerable: !0,
				value: i
			},
			scale: {
				enumerable: !0,
				value: h
			},
			modelViewMatrix: {
				value: new o
			},
			normalMatrix: {
				value: new c
			}
		}), this.matrix = new o, this.matrixWorld = new o, this.matrixAutoUpdate = M.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new _, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
	}

	function E() {
		M.call(this), this.type = "Camera", this.matrixWorldInverse = new o, this.projectionMatrix = new o
	}

	function T(t, e, n, r, i, o) {
		E.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = r, this.near = void 0 !== i ? i : .1, this.far = void 0 !== o ? o : 2e3, this.updateProjectionMatrix()
	}

	function S(t, e, n, r, i, o) {
		this.a = t, this.b = e, this.c = n, this.normal = r && r.isVector3 ? r : new s, this.vertexNormals = Array.isArray(r) ? r : [], this.color = i && i.isColor ? i : new y, this.vertexColors = Array.isArray(i) ? i : [], this.materialIndex = void 0 !== o ? o : 0
	}

	function A() {
		Object.defineProperty(this, "id", {
			value: Hc += 2
		}), this.uuid = Ic.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
			[]
		], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
	}

	function R(t, e, n) {
		if(Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
		this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === n, this.dynamic = !1, this.updateRange = {
			offset: 0,
			count: -1
		}, this.version = 0
	}

	function L(t, e, n) {
		R.call(this, new Int8Array(t), e, n)
	}

	function P(t, e, n) {
		R.call(this, new Uint8Array(t), e, n)
	}

	function C(t, e, n) {
		R.call(this, new Uint8ClampedArray(t), e, n)
	}

	function O(t, e, n) {
		R.call(this, new Int16Array(t), e, n)
	}

	function I(t, e, n) {
		R.call(this, new Uint16Array(t), e, n)
	}

	function N(t, e, n) {
		R.call(this, new Int32Array(t), e, n)
	}

	function D(t, e, n) {
		R.call(this, new Uint32Array(t), e, n)
	}

	function U(t, e, n) {
		R.call(this, new Float32Array(t), e, n)
	}

	function B(t, e, n) {
		R.call(this, new Float64Array(t), e, n)
	}

	function F() {
		this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
	}

	function z(t) {
		if(0 === t.length) return -1 / 0;
		for(var e = t[0], n = 1, r = t.length; n < r; ++n) t[n] > e && (e = t[n]);
		return e
	}

	function G() {
		Object.defineProperty(this, "id", {
			value: Vc += 2
		}), this.uuid = Ic.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
			start: 0,
			count: 1 / 0
		}, this.userData = {}
	}

	function H(t, e, n, r, i, o) {
		A.call(this), this.type = "BoxGeometry", this.parameters = {
			width: t,
			height: e,
			depth: n,
			widthSegments: r,
			heightSegments: i,
			depthSegments: o
		}, this.fromBufferGeometry(new V(t, e, n, r, i, o)), this.mergeVertices()
	}

	function V(t, e, n, r, i, o) {
		function a(t, e, n, r, i, o, a, m, g, v, y) {
			var x, w, b = o / g,
				_ = a / v,
				M = o / 2,
				E = a / 2,
				T = m / 2,
				S = g + 1,
				A = v + 1,
				R = 0,
				L = 0,
				P = new s;
			for(w = 0; w < A; w++) {
				var C = w * _ - E;
				for(x = 0; x < S; x++) {
					var O = x * b - M;
					P[t] = O * r, P[e] = C * i, P[n] = T, u.push(P.x, P.y, P.z), P[t] = 0, P[e] = 0, P[n] = m > 0 ? 1 : -1, l.push(P.x, P.y, P.z), d.push(x / g), d.push(1 - w / v), R += 1
				}
			}
			for(w = 0; w < v; w++)
				for(x = 0; x < g; x++) {
					var I = p + x + S * w,
						N = p + x + S * (w + 1),
						D = p + (x + 1) + S * (w + 1),
						U = p + (x + 1) + S * w;
					h.push(I, N, U), h.push(N, D, U), L += 6
				}
			c.addGroup(f, L, y), f += L, p += R
		}
		G.call(this), this.type = "BoxBufferGeometry", this.parameters = {
			width: t,
			height: e,
			depth: n,
			widthSegments: r,
			heightSegments: i,
			depthSegments: o
		};
		var c = this;
		t = t || 1, e = e || 1, n = n || 1, r = Math.floor(r) || 1, i = Math.floor(i) || 1, o = Math.floor(o) || 1;
		var h = [],
			u = [],
			l = [],
			d = [],
			p = 0,
			f = 0;
		a("z", "y", "x", -1, -1, n, e, t, o, i, 0), a("z", "y", "x", 1, -1, n, e, -t, o, i, 1), a("x", "z", "y", 1, 1, t, n, e, r, o, 2), a("x", "z", "y", 1, -1, t, n, -e, r, o, 3), a("x", "y", "z", 1, -1, t, e, n, r, i, 4), a("x", "y", "z", -1, -1, t, e, -n, r, i, 5), this.setIndex(h), this.addAttribute("position", new U(u, 3)), this.addAttribute("normal", new U(l, 3)), this.addAttribute("uv", new U(d, 2))
	}

	function k(t, e, n, r) {
		A.call(this), this.type = "PlaneGeometry", this.parameters = {
			width: t,
			height: e,
			widthSegments: n,
			heightSegments: r
		}, this.fromBufferGeometry(new j(t, e, n, r)), this.mergeVertices()
	}

	function j(t, e, n, r) {
		G.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
			width: t,
			height: e,
			widthSegments: n,
			heightSegments: r
		}, t = t || 1, e = e || 1;
		var i, o, a = t / 2,
			s = e / 2,
			c = Math.floor(n) || 1,
			h = Math.floor(r) || 1,
			u = c + 1,
			l = h + 1,
			d = t / c,
			p = e / h,
			f = [],
			m = [],
			g = [],
			v = [];
		for(o = 0; o < l; o++) {
			var y = o * p - s;
			for(i = 0; i < u; i++) {
				var x = i * d - a;
				m.push(x, -y, 0), g.push(0, 0, 1), v.push(i / c), v.push(1 - o / h)
			}
		}
		for(o = 0; o < h; o++)
			for(i = 0; i < c; i++) {
				var w = i + u * o,
					b = i + u * (o + 1),
					_ = i + 1 + u * (o + 1),
					M = i + 1 + u * o;
				f.push(w, b, M), f.push(b, _, M)
			}
		this.setIndex(f), this.addAttribute("position", new U(m, 3)), this.addAttribute("normal", new U(g, 3)), this.addAttribute("uv", new U(v, 2))
	}

	function W() {
		Object.defineProperty(this, "id", {
			value: kc++
		}), this.uuid = Ic.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.lights = !0, this.blending = _a, this.side = pa, this.flatShading = !1, this.vertexColors = ya, this.opacity = 1, this.transparent = !1, this.blendSrc = Ua, this.blendDst = Ba, this.blendEquation = Aa, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = Xa, this.depthTest = !0, this.depthWrite = !0, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.overdraw = 0, this.visible = !0, this.userData = {}, this.needsUpdate = !0
	}

	function X(t) {
		W.call(this), this.type = "MeshBasicMaterial", this.color = new y(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Qa, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.lights = !1, this.setValues(t)
	}

	function q(t) {
		W.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
			derivatives: !1,
			fragDepth: !1,
			drawBuffers: !1,
			shaderTextureLOD: !1
		}, this.defaultAttributeValues = {
			color: [1, 1, 1],
			uv: [0, 0],
			uv2: [0, 0]
		}, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t))
	}

	function Y(t, e) {
		this.origin = void 0 !== t ? t : new s, this.direction = void 0 !== e ? e : new s
	}

	function Z(t, e) {
		this.start = void 0 !== t ? t : new s, this.end = void 0 !== e ? e : new s
	}

	function J(t, e, n) {
		this.a = void 0 !== t ? t : new s, this.b = void 0 !== e ? e : new s, this.c = void 0 !== n ? n : new s
	}

	function Q(t, e) {
		M.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new G, this.material = void 0 !== e ? e : new X({
			color: 16777215 * Math.random()
		}), this.drawMode = wc, this.updateMorphTargets()
	}

	function K(t, e, n, r) {
		function i(e, r, i, l) {
			var d = r.background;
			null === d ? o(h, u) : d && d.isColor && (o(d, 1), l = !0), (t.autoClear || l) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), d && d.isCubeTexture ? (void 0 === c && (c = new Q(new V(1, 1, 1), new q({
				uniforms: zc.cube.uniforms,
				vertexShader: zc.cube.vertexShader,
				fragmentShader: zc.cube.fragmentShader,
				side: fa,
				depthTest: !0,
				depthWrite: !1,
				fog: !1
			})), c.geometry.removeAttribute("normal"), c.geometry.removeAttribute("uv"), c.onBeforeRender = function(t, e, n) {
				this.matrixWorld.copyPosition(n.matrixWorld)
			}, n.update(c)), c.material.uniforms.tCube.value = d, e.push(c, c.geometry, c.material, 0, null)) : d && d.isTexture && (void 0 === a && (a = new T(-1, 1, 1, -1, 0, 1), s = new Q(new j(2, 2), new X({
				depthTest: !1,
				depthWrite: !1,
				fog: !1
			})), n.update(s)), s.material.map = d, t.renderBufferDirect(a, null, s.geometry, s.material, s, null))
		}

		function o(t, n) {
			e.buffers.color.setClear(t.r, t.g, t.b, n, r)
		}
		var a, s, c, h = new y(0),
			u = 0;
		return {
			getClearColor: function() {
				return h
			},
			setClearColor: function(t, e) {
				h.set(t), u = void 0 !== e ? e : 1, o(h, u)
			},
			getClearAlpha: function() {
				return u
			},
			setClearAlpha: function(t) {
				u = t, o(h, u)
			},
			render: i
		}
	}

	function $(t, e, n) {
		function r(t) {
			a = t
		}

		function i(e, r) {
			t.drawArrays(a, e, r), n.update(r, a)
		}

		function o(t, r, i) {
			var o = e.get("ANGLE_instanced_arrays");
			if(null === o) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
			o.drawArraysInstancedANGLE(a, r, i, t.maxInstancedCount), n.update(i, a, t.maxInstancedCount)
		}
		var a;
		this.setMode = r, this.render = i, this.renderInstances = o
	}

	function tt(t, e, n) {
		function r() {
			if(void 0 !== o) return o;
			var n = e.get("EXT_texture_filter_anisotropic");
			return o = null !== n ? t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
		}

		function i(e) {
			if("highp" === e) {
				if(t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision > 0) return "highp";
				e = "mediump"
			}
			return "mediump" === e && t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
		}
		var o, a = void 0 !== n.precision ? n.precision : "highp",
			s = i(a);
		s !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", s, "instead."), a = s);
		var c = !0 === n.logarithmicDepthBuffer,
			h = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
			u = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
			l = t.getParameter(t.MAX_TEXTURE_SIZE),
			d = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),
			p = t.getParameter(t.MAX_VERTEX_ATTRIBS),
			f = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),
			m = t.getParameter(t.MAX_VARYING_VECTORS),
			g = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),
			v = u > 0,
			y = !!e.get("OES_texture_float");
		return {
			getMaxAnisotropy: r,
			getMaxPrecision: i,
			precision: a,
			logarithmicDepthBuffer: c,
			maxTextures: h,
			maxVertexTextures: u,
			maxTextureSize: l,
			maxCubemapSize: d,
			maxAttributes: p,
			maxVertexUniforms: f,
			maxVaryings: m,
			maxFragmentUniforms: g,
			vertexTextures: v,
			floatFragmentTextures: y,
			floatVertexTextures: v && y
		}
	}

	function et() {
		function t() {
			u.value !== r && (u.value = r, u.needsUpdate = i > 0), n.numPlanes = i, n.numIntersection = 0
		}

		function e(t, e, r, i) {
			var o = null !== t ? t.length : 0,
				a = null;
			if(0 !== o) {
				if(a = u.value, !0 !== i || null === a) {
					var c = r + 4 * o,
						l = e.matrixWorldInverse;
					h.getNormalMatrix(l), (null === a || a.length < c) && (a = new Float32Array(c));
					for(var d = 0, p = r; d !== o; ++d, p += 4) s.copy(t[d]).applyMatrix4(l, h), s.normal.toArray(a, p), a[p + 3] = s.constant
				}
				u.value = a, u.needsUpdate = !0
			}
			return n.numPlanes = o, a
		}
		var n = this,
			r = null,
			i = 0,
			o = !1,
			a = !1,
			s = new g,
			h = new c,
			u = {
				value: null,
				needsUpdate: !1
			};
		this.uniform = u, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, n, a) {
			var s = 0 !== t.length || n || 0 !== i || o;
			return o = n, r = e(t, a, 0), i = t.length, s
		}, this.beginShadows = function() {
			a = !0, e(null)
		}, this.endShadows = function() {
			a = !1, t()
		}, this.setState = function(n, s, c, h, l, d) {
			if(!o || null === n || 0 === n.length || a && !c) a ? e(null) : t();
			else {
				var p = a ? 0 : i,
					f = 4 * p,
					m = l.clippingState || null;
				u.value = m, m = e(n, h, f, d);
				for(var g = 0; g !== f; ++g) m[g] = r[g];
				l.clippingState = m, this.numIntersection = s ? this.numPlanes : 0, this.numPlanes += p
			}
		}
	}

	function nt(t) {
		var e = {};
		return {
			get: function(n) {
				if(void 0 !== e[n]) return e[n];
				var r;
				switch(n) {
					case "WEBGL_depth_texture":
						r = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
						break;
					case "EXT_texture_filter_anisotropic":
						r = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
						break;
					case "WEBGL_compressed_texture_s3tc":
						r = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
						break;
					case "WEBGL_compressed_texture_pvrtc":
						r = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
						break;
					default:
						r = t.getExtension(n)
				}
				return null === r && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), e[n] = r, r
			}
		}
	}

	function rt(t, e, n) {
		function r(t) {
			var i = t.target,
				o = s[i.id];
			null !== o.index && e.remove(o.index);
			for(var a in o.attributes) e.remove(o.attributes[a]);
			i.removeEventListener("dispose", r), delete s[i.id];
			var h = c[i.id];
			h && (e.remove(h), delete c[i.id]), h = c[o.id], h && (e.remove(h), delete c[o.id]), n.memory.geometries--
		}

		function i(t, e) {
			var i = s[e.id];
			return i || (e.addEventListener("dispose", r), e.isBufferGeometry ? i = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new G).setFromObject(t)), i = e._bufferGeometry), s[e.id] = i, n.memory.geometries++, i)
		}

		function o(n) {
			var r = n.index,
				i = n.attributes;
			null !== r && e.update(r, t.ELEMENT_ARRAY_BUFFER);
			for(var o in i) e.update(i[o], t.ARRAY_BUFFER);
			var a = n.morphAttributes;
			for(var o in a)
				for(var s = a[o], c = 0, h = s.length; c < h; c++) e.update(s[c], t.ARRAY_BUFFER)
		}

		function a(n) {
			var r = c[n.id];
			if(r) return r;
			var i = [],
				o = n.index,
				a = n.attributes;
			if(null !== o)
				for(var s = o.array, h = 0, u = s.length; h < u; h += 3) {
					var l = s[h + 0],
						d = s[h + 1],
						p = s[h + 2];
					i.push(l, d, d, p, p, l)
				} else
					for(var s = a.position.array, h = 0, u = s.length / 3 - 1; h < u; h += 3) {
						var l = h + 0,
							d = h + 1,
							p = h + 2;
						i.push(l, d, d, p, p, l)
					}
			return r = new(z(i) > 65535 ? D : I)(i, 1), e.update(r, t.ELEMENT_ARRAY_BUFFER), c[n.id] = r, r
		}
		var s = {},
			c = {};
		return {
			get: i,
			update: o,
			getWireframeAttribute: a
		}
	}

	function it(t, e, n) {
		function r(t) {
			s = t
		}

		function i(t) {
			c = t.type, h = t.bytesPerElement
		}

		function o(e, r) {
			t.drawElements(s, r, c, e * h), n.update(r, s)
		}

		function a(t, r, i) {
			var o = e.get("ANGLE_instanced_arrays");
			if(null === o) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
			o.drawElementsInstancedANGLE(s, i, c, r * h, t.maxInstancedCount), n.update(i, s, t.maxInstancedCount)
		}
		var s, c, h;
		this.setMode = r, this.setIndex = i, this.render = o, this.renderInstances = a
	}

	function ot(t) {
		function e(e, n, r) {
			switch(r = r || 1, i.calls++, n) {
				case t.TRIANGLES:
					i.triangles += r * (e / 3);
					break;
				case t.TRIANGLE_STRIP:
				case t.TRIANGLE_FAN:
					i.triangles += r * (e - 2);
					break;
				case t.LINES:
					i.lines += r * (e / 2);
					break;
				case t.LINE_STRIP:
					i.lines += r * (e - 1);
					break;
				case t.LINE_LOOP:
					i.lines += r * e;
					break;
				case t.POINTS:
					i.points += r * e;
					break;
				default:
					console.error("THREE.WebGLInfo: Unknown draw mode:", n)
			}
		}

		function n() {
			i.frame++, i.calls = 0, i.triangles = 0, i.points = 0, i.lines = 0
		}
		var r = {
				geometries: 0,
				textures: 0
			},
			i = {
				frame: 0,
				calls: 0,
				triangles: 0,
				points: 0,
				lines: 0
			};
		return {
			memory: r,
			render: i,
			programs: null,
			autoReset: !0,
			reset: n,
			update: e
		}
	}

	function at(t, e) {
		return Math.abs(e[1]) - Math.abs(t[1])
	}

	function st(t) {
		function e(e, i, o, a) {
			var s = e.morphTargetInfluences,
				c = s.length,
				h = n[i.id];
			if(void 0 === h) {
				h = [];
				for(var u = 0; u < c; u++) h[u] = [u, 0];
				n[i.id] = h
			}
			for(var l = o.morphTargets && i.morphAttributes.position, d = o.morphNormals && i.morphAttributes.normal, u = 0; u < c; u++) {
				var p = h[u];
				0 !== p[1] && (l && i.removeAttribute("morphTarget" + u), d && i.removeAttribute("morphNormal" + u))
			}
			for(var u = 0; u < c; u++) {
				var p = h[u];
				p[0] = u, p[1] = s[u]
			}
			h.sort(at);
			for(var u = 0; u < 8; u++) {
				var p = h[u];
				if(p) {
					var f = p[0],
						m = p[1];
					if(m) {
						l && i.addAttribute("morphTarget" + u, l[f]), d && i.addAttribute("morphNormal" + u, d[f]), r[u] = m;
						continue
					}
				}
				r[u] = 0
			}
			a.getUniforms().setValue(t, "morphTargetInfluences", r)
		}
		var n = {},
			r = new Float32Array(8);
		return {
			update: e
		}
	}

	function ct(t, e) {
		function n(n) {
			var r = e.render.frame,
				o = n.geometry,
				a = t.get(n, o);
			return i[a.id] !== r && (o.isGeometry && a.updateFromObject(n), t.update(a), i[a.id] = r), a
		}

		function r() {
			i = {}
		}
		var i = {};
		return {
			update: n,
			dispose: r
		}
	}

	function ht(t, e, n, r, i, o, a, s, c, u) {
		t = void 0 !== t ? t : [], e = void 0 !== e ? e : as, h.call(this, t, e, n, r, i, o, a, s, c, u), this.flipY = !1
	}

	function ut() {
		this.seq = [], this.map = {}
	}

	function lt(t, e, n) {
		var r = t[0];
		if(r <= 0 || r > 0) return t;
		var i = e * n,
			o = Xc[i];
		if(void 0 === o && (o = new Float32Array(i), Xc[i] = o), 0 !== e) {
			r.toArray(o, 0);
			for(var a = 1, s = 0; a !== e; ++a) s += n, t[a].toArray(o, s)
		}
		return o
	}

	function dt(t, e) {
		if(t.length !== e.length) return !1;
		for(var n = 0, r = t.length; n < r; n++)
			if(t[n] !== e[n]) return !1;
		return !0
	}

	function pt(t, e) {
		for(var n = 0, r = e.length; n < r; n++) t[n] = e[n]
	}

	function ft(t, e) {
		var n = qc[e];
		void 0 === n && (n = new Int32Array(e), qc[e] = n);
		for(var r = 0; r !== e; ++r) n[r] = t.allocTextureUnit();
		return n
	}

	function mt(t, e) {
		var n = this.cache;
		n[0] !== e && (t.uniform1f(this.addr, e), n[0] = e)
	}

	function gt(t, e) {
		var n = this.cache;
		n[0] !== e && (t.uniform1i(this.addr, e), n[0] = e)
	}

	function vt(t, e) {
		var n = this.cache;
		if(void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
		else {
			if(dt(n, e)) return;
			t.uniform2fv(this.addr, e), pt(n, e)
		}
	}

	function yt(t, e) {
		var n = this.cache;
		if(void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
		else if(void 0 !== e.r) n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b);
		else {
			if(dt(n, e)) return;
			t.uniform3fv(this.addr, e), pt(n, e)
		}
	}

	function xt(t, e) {
		var n = this.cache;
		if(void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
		else {
			if(dt(n, e)) return;
			t.uniform4fv(this.addr, e), pt(n, e)
		}
	}

	function wt(t, e) {
		var n = this.cache,
			r = e.elements;
		if(void 0 === r) {
			if(dt(n, e)) return;
			t.uniformMatrix2fv(this.addr, !1, e), pt(n, e)
		} else {
			if(dt(n, r)) return;
			Jc.set(r), t.uniformMatrix2fv(this.addr, !1, Jc), pt(n, r)
		}
	}

	function bt(t, e) {
		var n = this.cache,
			r = e.elements;
		if(void 0 === r) {
			if(dt(n, e)) return;
			t.uniformMatrix3fv(this.addr, !1, e), pt(n, e)
		} else {
			if(dt(n, r)) return;
			Zc.set(r), t.uniformMatrix3fv(this.addr, !1, Zc), pt(n, r)
		}
	}

	function _t(t, e) {
		var n = this.cache,
			r = e.elements;
		if(void 0 === r) {
			if(dt(n, e)) return;
			t.uniformMatrix4fv(this.addr, !1, e), pt(n, e)
		} else {
			if(dt(n, r)) return;
			Yc.set(r), t.uniformMatrix4fv(this.addr, !1, Yc), pt(n, r)
		}
	}

	function Mt(t, e, n) {
		var r = this.cache,
			i = n.allocTextureUnit();
		r[0] !== i && (t.uniform1i(this.addr, i), r[0] = i), n.setTexture2D(e || jc, i)
	}

	function Et(t, e, n) {
		var r = this.cache,
			i = n.allocTextureUnit();
		r[0] !== i && (t.uniform1i(this.addr, i), r[0] = i), n.setTextureCube(e || Wc, i)
	}

	function Tt(t, e) {
		var n = this.cache;
		dt(n, e) || (t.uniform2iv(this.addr, e), pt(n, e))
	}

	function St(t, e) {
		var n = this.cache;
		dt(n, e) || (t.uniform3iv(this.addr, e), pt(n, e))
	}

	function At(t, e) {
		var n = this.cache;
		dt(n, e) || (t.uniform4iv(this.addr, e), pt(n, e))
	}

	function Rt(t) {
		switch(t) {
			case 5126:
				return mt;
			case 35664:
				return vt;
			case 35665:
				return yt;
			case 35666:
				return xt;
			case 35674:
				return wt;
			case 35675:
				return bt;
			case 35676:
				return _t;
			case 35678:
			case 36198:
				return Mt;
			case 35680:
				return Et;
			case 5124:
			case 35670:
				return gt;
			case 35667:
			case 35671:
				return Tt;
			case 35668:
			case 35672:
				return St;
			case 35669:
			case 35673:
				return At
		}
	}

	function Lt(t, e) {
		var n = this.cache;
		dt(n, e) || (t.uniform1fv(this.addr, e), pt(n, e))
	}

	function Pt(t, e) {
		var n = this.cache;
		dt(n, e) || (t.uniform1iv(this.addr, e), pt(n, e))
	}

	function Ct(t, e) {
		var n = this.cache,
			r = lt(e, this.size, 2);
		dt(n, r) || (t.uniform2fv(this.addr, r), this.updateCache(r))
	}

	function Ot(t, e) {
		var n = this.cache,
			r = lt(e, this.size, 3);
		dt(n, r) || (t.uniform3fv(this.addr, r), this.updateCache(r))
	}

	function It(t, e) {
		var n = this.cache,
			r = lt(e, this.size, 4);
		dt(n, r) || (t.uniform4fv(this.addr, r), this.updateCache(r))
	}

	function Nt(t, e) {
		var n = this.cache,
			r = lt(e, this.size, 4);
		dt(n, r) || (t.uniformMatrix2fv(this.addr, !1, r), this.updateCache(r))
	}

	function Dt(t, e) {
		var n = this.cache,
			r = lt(e, this.size, 9);
		dt(n, r) || (t.uniformMatrix3fv(this.addr, !1, r), this.updateCache(r))
	}

	function Ut(t, e) {
		var n = this.cache,
			r = lt(e, this.size, 16);
		dt(n, r) || (t.uniformMatrix4fv(this.addr, !1, r), this.updateCache(r))
	}

	function Bt(t, e, n) {
		var r = this.cache,
			i = e.length,
			o = ft(n, i);
		!1 === dt(r, o) && (t.uniform1iv(this.addr, o), pt(r, o));
		for(var a = 0; a !== i; ++a) n.setTexture2D(e[a] || jc, o[a])
	}

	function Ft(t, e, n) {
		var r = this.cache,
			i = e.length,
			o = ft(n, i);
		!1 === dt(r, o) && (t.uniform1iv(this.addr, o), pt(r, o));
		for(var a = 0; a !== i; ++a) n.setTextureCube(e[a] || Wc, o[a])
	}

	function zt(t) {
		switch(t) {
			case 5126:
				return Lt;
			case 35664:
				return Ct;
			case 35665:
				return Ot;
			case 35666:
				return It;
			case 35674:
				return Nt;
			case 35675:
				return Dt;
			case 35676:
				return Ut;
			case 35678:
				return Bt;
			case 35680:
				return Ft;
			case 5124:
			case 35670:
				return Pt;
			case 35667:
			case 35671:
				return Tt;
			case 35668:
			case 35672:
				return St;
			case 35669:
			case 35673:
				return At
		}
	}

	function Gt(t, e, n) {
		this.id = t, this.addr = n, this.cache = [], this.setValue = Rt(e.type)
	}

	function Ht(t, e, n) {
		this.id = t, this.addr = n, this.cache = [], this.size = e.size, this.setValue = zt(e.type)
	}

	function Vt(t) {
		this.id = t, ut.call(this)
	}

	function kt(t, e) {
		t.seq.push(e), t.map[e.id] = e
	}

	function jt(t, e, n) {
		var r = t.name,
			i = r.length;
		for(Qc.lastIndex = 0;;) {
			var o = Qc.exec(r),
				a = Qc.lastIndex,
				s = o[1],
				c = "]" === o[2],
				h = o[3];
			if(c && (s |= 0), void 0 === h || "[" === h && a + 2 === i) {
				kt(n, void 0 === h ? new Gt(s, t, e) : new Ht(s, t, e));
				break
			}
			var u = n.map,
				l = u[s];
			void 0 === l && (l = new Vt(s), kt(n, l)), n = l
		}
	}

	function Wt(t, e, n) {
		ut.call(this), this.renderer = n;
		for(var r = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), i = 0; i < r; ++i) {
			var o = t.getActiveUniform(e, i);
			jt(o, t.getUniformLocation(e, o.name), this)
		}
	}

	function Xt(t) {
		for(var e = t.split("\n"), n = 0; n < e.length; n++) e[n] = n + 1 + ": " + e[n];
		return e.join("\n")
	}

	function qt(t, e, n) {
		var r = t.createShader(e);
		return t.shaderSource(r, n), t.compileShader(r), !1 === t.getShaderParameter(r, t.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== t.getShaderInfoLog(r) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", e === t.VERTEX_SHADER ? "vertex" : "fragment", t.getShaderInfoLog(r), Xt(n)), r
	}

	function Yt(t) {
		switch(t) {
			case Mc:
				return ["Linear", "( value )"];
			case Ec:
				return ["sRGB", "( value )"];
			case Sc:
				return ["RGBE", "( value )"];
			case Rc:
				return ["RGBM", "( value, 7.0 )"];
			case Lc:
				return ["RGBM", "( value, 16.0 )"];
			case Pc:
				return ["RGBD", "( value, 256.0 )"];
			case Tc:
				return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
			default:
				throw new Error("unsupported encoding: " + t)
		}
	}

	function Zt(t, e) {
		var n = Yt(e);
		return "vec4 " + t + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"
	}

	function Jt(t, e) {
		var n = Yt(e);
		return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
	}

	function Qt(t, e) {
		var n;
		switch(e) {
			case es:
				n = "Linear";
				break;
			case ns:
				n = "Reinhard";
				break;
			case rs:
				n = "Uncharted2";
				break;
			case is:
				n = "OptimizedCineon";
				break;
			default:
				throw new Error("unsupported toneMapping: " + e)
		}
		return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
	}

	function Kt(t, e, n) {
		return t = t || {}, [t.derivatives || e.envMapCubeUV || e.bumpMap || e.normalMap || e.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (t.fragDepth || e.logarithmicDepthBuffer) && n.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", t.drawBuffers && n.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (t.shaderTextureLOD || e.envMap) && n.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(ee).join("\n")
	}

	function $t(t) {
		var e = [];
		for(var n in t) {
			var r = t[n];
			!1 !== r && e.push("#define " + n + " " + r)
		}
		return e.join("\n")
	}

	function te(t, e) {
		for(var n = {}, r = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), i = 0; i < r; i++) {
			var o = t.getActiveAttrib(e, i),
				a = o.name;
			n[a] = t.getAttribLocation(e, a)
		}
		return n
	}

	function ee(t) {
		return "" !== t
	}

	function ne(t, e) {
		return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
	}

	function re(t, e) {
		return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
	}

	function ie(t) {
		function e(t, e) {
			var n = Dc[e];
			if(void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
			return ie(n)
		}
		var n = /^[ \t]*#include +<([\w\d.]+)>/gm;
		return t.replace(n, e)
	}

	function oe(t) {
		function e(t, e, n, r) {
			for(var i = "", o = parseInt(e); o < parseInt(n); o++) i += r.replace(/\[ i \]/g, "[ " + o + " ]");
			return i
		}
		var n = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;
		return t.replace(n, e)
	}

	function ae(t, e, n, r, i, o) {
		var a = t.context,
			s = r.defines,
			c = i.vertexShader,
			h = i.fragmentShader,
			u = "SHADOWMAP_TYPE_BASIC";
		o.shadowMapType === la ? u = "SHADOWMAP_TYPE_PCF" : o.shadowMapType === da && (u = "SHADOWMAP_TYPE_PCF_SOFT");
		var l = "ENVMAP_TYPE_CUBE",
			d = "ENVMAP_MODE_REFLECTION",
			p = "ENVMAP_BLENDING_MULTIPLY";
		if(o.envMap) {
			switch(r.envMap.mapping) {
				case as:
				case ss:
					l = "ENVMAP_TYPE_CUBE";
					break;
				case ls:
				case ds:
					l = "ENVMAP_TYPE_CUBE_UV";
					break;
				case cs:
				case hs:
					l = "ENVMAP_TYPE_EQUIREC";
					break;
				case us:
					l = "ENVMAP_TYPE_SPHERE"
			}
			switch(r.envMap.mapping) {
				case ss:
				case hs:
					d = "ENVMAP_MODE_REFRACTION"
			}
			switch(r.combine) {
				case Qa:
					p = "ENVMAP_BLENDING_MULTIPLY";
					break;
				case Ka:
					p = "ENVMAP_BLENDING_MIX";
					break;
				case $a:
					p = "ENVMAP_BLENDING_ADD"
			}
		}
		var f, m, g = t.gammaFactor > 0 ? t.gammaFactor : 1,
			v = Kt(r.extensions, o, e),
			y = $t(s),
			x = a.createProgram();
		r.isRawShaderMaterial ? (f = [y].filter(ee).join("\n"), f.length > 0 && (f += "\n"), m = [v, y].filter(ee).join("\n"), m.length > 0 && (m += "\n")) : (f = ["precision " + o.precision + " float;", "precision " + o.precision + " int;", "#define SHADER_NAME " + i.name, y, o.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + g, "#define MAX_BONES " + o.maxBones, o.useFog && o.fog ? "#define USE_FOG" : "", o.useFog && o.fogExp ? "#define FOG_EXP2" : "", o.map ? "#define USE_MAP" : "", o.envMap ? "#define USE_ENVMAP" : "", o.envMap ? "#define " + d : "", o.lightMap ? "#define USE_LIGHTMAP" : "", o.aoMap ? "#define USE_AOMAP" : "", o.emissiveMap ? "#define USE_EMISSIVEMAP" : "", o.bumpMap ? "#define USE_BUMPMAP" : "", o.normalMap ? "#define USE_NORMALMAP" : "", o.displacementMap && o.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", o.specularMap ? "#define USE_SPECULARMAP" : "", o.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", o.metalnessMap ? "#define USE_METALNESSMAP" : "", o.alphaMap ? "#define USE_ALPHAMAP" : "", o.vertexColors ? "#define USE_COLOR" : "", o.flatShading ? "#define FLAT_SHADED" : "", o.skinning ? "#define USE_SKINNING" : "", o.useVertexTexture ? "#define BONE_TEXTURE" : "", o.morphTargets ? "#define USE_MORPHTARGETS" : "", o.morphNormals && !1 === o.flatShading ? "#define USE_MORPHNORMALS" : "", o.doubleSided ? "#define DOUBLE_SIDED" : "", o.flipSided ? "#define FLIP_SIDED" : "", o.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", o.shadowMapEnabled ? "#define " + u : "", o.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", o.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", o.logarithmicDepthBuffer && e.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(ee).join("\n"), m = [v, "precision " + o.precision + " float;", "precision " + o.precision + " int;", "#define SHADER_NAME " + i.name, y, o.alphaTest ? "#define ALPHATEST " + o.alphaTest + (o.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + g, o.useFog && o.fog ? "#define USE_FOG" : "", o.useFog && o.fogExp ? "#define FOG_EXP2" : "", o.map ? "#define USE_MAP" : "", o.envMap ? "#define USE_ENVMAP" : "", o.envMap ? "#define " + l : "", o.envMap ? "#define " + d : "", o.envMap ? "#define " + p : "", o.lightMap ? "#define USE_LIGHTMAP" : "", o.aoMap ? "#define USE_AOMAP" : "", o.emissiveMap ? "#define USE_EMISSIVEMAP" : "", o.bumpMap ? "#define USE_BUMPMAP" : "", o.normalMap ? "#define USE_NORMALMAP" : "", o.specularMap ? "#define USE_SPECULARMAP" : "", o.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", o.metalnessMap ? "#define USE_METALNESSMAP" : "", o.alphaMap ? "#define USE_ALPHAMAP" : "", o.vertexColors ? "#define USE_COLOR" : "", o.gradientMap ? "#define USE_GRADIENTMAP" : "", o.flatShading ? "#define FLAT_SHADED" : "", o.doubleSided ? "#define DOUBLE_SIDED" : "", o.flipSided ? "#define FLIP_SIDED" : "", o.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", o.shadowMapEnabled ? "#define " + u : "", o.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", o.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", o.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", o.logarithmicDepthBuffer && e.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", o.envMap && e.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", o.toneMapping !== ts ? "#define TONE_MAPPING" : "", o.toneMapping !== ts ? Dc.tonemapping_pars_fragment : "", o.toneMapping !== ts ? Qt("toneMapping", o.toneMapping) : "", o.dithering ? "#define DITHERING" : "", o.outputEncoding || o.mapEncoding || o.envMapEncoding || o.emissiveMapEncoding ? Dc.encodings_pars_fragment : "", o.mapEncoding ? Zt("mapTexelToLinear", o.mapEncoding) : "", o.envMapEncoding ? Zt("envMapTexelToLinear", o.envMapEncoding) : "", o.emissiveMapEncoding ? Zt("emissiveMapTexelToLinear", o.emissiveMapEncoding) : "", o.outputEncoding ? Jt("linearToOutputTexel", o.outputEncoding) : "", o.depthPacking ? "#define DEPTH_PACKING " + r.depthPacking : "", "\n"].filter(ee).join("\n")), c = ie(c), c = ne(c, o), c = re(c, o), h = ie(h), h = ne(h, o), h = re(h, o), c = oe(c), h = oe(h);
		var w = f + c,
			b = m + h,
			_ = qt(a, a.VERTEX_SHADER, w),
			M = qt(a, a.FRAGMENT_SHADER, b);
		a.attachShader(x, _), a.attachShader(x, M), void 0 !== r.index0AttributeName ? a.bindAttribLocation(x, 0, r.index0AttributeName) : !0 === o.morphTargets && a.bindAttribLocation(x, 0, "position"), a.linkProgram(x);
		var E = a.getProgramInfoLog(x).trim(),
			T = a.getShaderInfoLog(_).trim(),
			S = a.getShaderInfoLog(M).trim(),
			A = !0,
			R = !0;
		!1 === a.getProgramParameter(x, a.LINK_STATUS) ? (A = !1, console.error("THREE.WebGLProgram: shader error: ", a.getError(), "gl.VALIDATE_STATUS", a.getProgramParameter(x, a.VALIDATE_STATUS), "gl.getProgramInfoLog", E, T, S)) : "" !== E ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", E) : "" !== T && "" !== S || (R = !1), R && (this.diagnostics = {
			runnable: A,
			material: r,
			programLog: E,
			vertexShader: {
				log: T,
				prefix: f
			},
			fragmentShader: {
				log: S,
				prefix: m
			}
		}), a.deleteShader(_), a.deleteShader(M);
		var L;
		this.getUniforms = function() {
			return void 0 === L && (L = new Wt(a, x, t)), L
		};
		var P;
		return this.getAttributes = function() {
			return void 0 === P && (P = te(a, x)), P
		}, this.destroy = function() {
			a.deleteProgram(x), this.program = void 0
		}, Object.defineProperties(this, {
			uniforms: {
				get: function() {
					return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms()
				}
			},
			attributes: {
				get: function() {
					return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes()
				}
			}
		}), this.name = i.name, this.id = Kc++, this.code = n, this.usedTimes = 1, this.program = x, this.vertexShader = _, this.fragmentShader = M, this
	}

	function se(t, e, n) {
		function r(t) {
			var e = t.skeleton,
				r = e.bones;
			if(n.floatVertexTextures) return 1024;
			var i = n.maxVertexUniforms,
				o = Math.floor((i - 20) / 4),
				a = Math.min(o, r.length);
			return a < r.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + r.length + " bones. This GPU supports " + a + "."), 0) : a
		}

		function i(t, e) {
			var n;
			return t ? t.isTexture ? n = t.encoding : t.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), n = t.texture.encoding) : n = Mc, n === Mc && e && (n = Tc), n
		}
		var o = [],
			a = {
				MeshDepthMaterial: "depth",
				MeshDistanceMaterial: "distanceRGBA",
				MeshNormalMaterial: "normal",
				MeshBasicMaterial: "basic",
				MeshLambertMaterial: "lambert",
				MeshPhongMaterial: "phong",
				MeshToonMaterial: "phong",
				MeshStandardMaterial: "physical",
				MeshPhysicalMaterial: "physical",
				LineBasicMaterial: "basic",
				LineDashedMaterial: "dashed",
				PointsMaterial: "points",
				ShadowMaterial: "shadow"
			},
			s = ["precision", "supportsVertexTextures", "map", "mapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering"];
		this.getParameters = function(e, o, s, c, h, u, l) {
			var d = a[e.type],
				p = l.isSkinnedMesh ? r(l) : 0,
				f = n.precision;
			null !== e.precision && (f = n.getMaxPrecision(e.precision)) !== e.precision && console.warn("THREE.WebGLProgram.getParameters:", e.precision, "not supported, using", f, "instead.");
			var m = t.getRenderTarget();
			return {
				shaderID: d,
				precision: f,
				supportsVertexTextures: n.vertexTextures,
				outputEncoding: i(m ? m.texture : null, t.gammaOutput),
				map: !!e.map,
				mapEncoding: i(e.map, t.gammaInput),
				envMap: !!e.envMap,
				envMapMode: e.envMap && e.envMap.mapping,
				envMapEncoding: i(e.envMap, t.gammaInput),
				envMapCubeUV: !!e.envMap && (e.envMap.mapping === ls || e.envMap.mapping === ds),
				lightMap: !!e.lightMap,
				aoMap: !!e.aoMap,
				emissiveMap: !!e.emissiveMap,
				emissiveMapEncoding: i(e.emissiveMap, t.gammaInput),
				bumpMap: !!e.bumpMap,
				normalMap: !!e.normalMap,
				displacementMap: !!e.displacementMap,
				roughnessMap: !!e.roughnessMap,
				metalnessMap: !!e.metalnessMap,
				specularMap: !!e.specularMap,
				alphaMap: !!e.alphaMap,
				gradientMap: !!e.gradientMap,
				combine: e.combine,
				vertexColors: e.vertexColors,
				fog: !!c,
				useFog: e.fog,
				fogExp: c && c.isFogExp2,
				flatShading: e.flatShading,
				sizeAttenuation: e.sizeAttenuation,
				logarithmicDepthBuffer: n.logarithmicDepthBuffer,
				skinning: e.skinning && p > 0,
				maxBones: p,
				useVertexTexture: n.floatVertexTextures,
				morphTargets: e.morphTargets,
				morphNormals: e.morphNormals,
				maxMorphTargets: t.maxMorphTargets,
				maxMorphNormals: t.maxMorphNormals,
				numDirLights: o.directional.length,
				numPointLights: o.point.length,
				numSpotLights: o.spot.length,
				numRectAreaLights: o.rectArea.length,
				numHemiLights: o.hemi.length,
				numClippingPlanes: h,
				numClipIntersection: u,
				dithering: e.dithering,
				shadowMapEnabled: t.shadowMap.enabled && l.receiveShadow && s.length > 0,
				shadowMapType: t.shadowMap.type,
				toneMapping: t.toneMapping,
				physicallyCorrectLights: t.physicallyCorrectLights,
				premultipliedAlpha: e.premultipliedAlpha,
				alphaTest: e.alphaTest,
				doubleSided: e.side === ma,
				flipSided: e.side === fa,
				depthPacking: void 0 !== e.depthPacking && e.depthPacking
			}
		}, this.getProgramCode = function(e, n) {
			var r = [];
			if(n.shaderID ? r.push(n.shaderID) : (r.push(e.fragmentShader), r.push(e.vertexShader)), void 0 !== e.defines)
				for(var i in e.defines) r.push(i), r.push(e.defines[i]);
			for(var o = 0; o < s.length; o++) r.push(n[s[o]]);
			return r.push(e.onBeforeCompile.toString()), r.push(t.gammaOutput), r.join()
		}, this.acquireProgram = function(n, r, i, a) {
			for(var s, c = 0, h = o.length; c < h; c++) {
				var u = o[c];
				if(u.code === a) {
					s = u, ++s.usedTimes;
					break
				}
			}
			return void 0 === s && (s = new ae(t, e, a, n, r, i), o.push(s)), s
		}, this.releaseProgram = function(t) {
			if(0 == --t.usedTimes) {
				var e = o.indexOf(t);
				o[e] = o[o.length - 1], o.pop(), t.destroy()
			}
		}, this.programs = o
	}

	function ce() {
		function t(t) {
			var e = i.get(t);
			return void 0 === e && (e = {}, i.set(t, e)), e
		}

		function e(t) {
			i.delete(t)
		}

		function n(t, e, n) {
			i.get(t)[e] = n
		}

		function r() {
			i = new WeakMap
		}
		var i = new WeakMap;
		return {
			get: t,
			remove: e,
			update: n,
			dispose: r
		}
	}

	function he(t, e) {
		return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program && e.program && t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
	}

	function ue(t, e) {
		return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
	}

	function le() {
		function t() {
			i = 0, o.length = 0, a.length = 0
		}

		function e(t, e, n, s, c) {
			var h = r[i];
			void 0 === h ? (h = {
				id: t.id,
				object: t,
				geometry: e,
				material: n,
				program: n.program,
				renderOrder: t.renderOrder,
				z: s,
				group: c
			}, r[i] = h) : (h.id = t.id, h.object = t, h.geometry = e, h.material = n, h.program = n.program, h.renderOrder = t.renderOrder, h.z = s, h.group = c), (!0 === n.transparent ? a : o).push(h), i++
		}

		function n() {
			o.length > 1 && o.sort(he), a.length > 1 && a.sort(ue)
		}
		var r = [],
			i = 0,
			o = [],
			a = [];
		return {
			opaque: o,
			transparent: a,
			init: t,
			push: e,
			sort: n
		}
	}

	function de() {
		function t(t, e) {
			var r = t.id + "," + e.id,
				i = n[r];
			return void 0 === i && (i = new le, n[r] = i), i
		}

		function e() {
			n = {}
		}
		var n = {};
		return {
			get: t,
			dispose: e
		}
	}

	function pe() {
		var t = {};
		return {
			get: function(e) {
				if(void 0 !== t[e.id]) return t[e.id];
				var n;
				switch(e.type) {
					case "DirectionalLight":
						n = {
							direction: new s,
							color: new y,
							shadow: !1,
							shadowBias: 0,
							shadowRadius: 1,
							shadowMapSize: new i
						};
						break;
					case "SpotLight":
						n = {
							position: new s,
							direction: new s,
							color: new y,
							distance: 0,
							coneCos: 0,
							penumbraCos: 0,
							decay: 0,
							shadow: !1,
							shadowBias: 0,
							shadowRadius: 1,
							shadowMapSize: new i
						};
						break;
					case "PointLight":
						n = {
							position: new s,
							color: new y,
							distance: 0,
							decay: 0,
							shadow: !1,
							shadowBias: 0,
							shadowRadius: 1,
							shadowMapSize: new i,
							shadowCameraNear: 1,
							shadowCameraFar: 1e3
						};
						break;
					case "HemisphereLight":
						n = {
							direction: new s,
							skyColor: new y,
							groundColor: new y
						};
						break;
					case "RectAreaLight":
						n = {
							color: new y,
							position: new s,
							halfWidth: new s,
							halfHeight: new s
						}
				}
				return t[e.id] = n, n
			}
		}
	}

	function fe() {
		function t(t, o, s) {
			for(var c = 0, h = 0, u = 0, l = 0, d = 0, p = 0, f = 0, m = 0, g = s.matrixWorldInverse, v = 0, y = t.length; v < y; v++) {
				var x = t[v],
					w = x.color,
					b = x.intensity,
					_ = x.distance,
					M = x.shadow && x.shadow.map ? x.shadow.map.texture : null;
				if(x.isAmbientLight) c += w.r * b, h += w.g * b, u += w.b * b;
				else if(x.isDirectionalLight) {
					var E = e.get(x);
					if(E.color.copy(x.color).multiplyScalar(x.intensity), E.direction.setFromMatrixPosition(x.matrixWorld), r.setFromMatrixPosition(x.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(g), E.shadow = x.castShadow, x.castShadow) {
						var T = x.shadow;
						E.shadowBias = T.bias, E.shadowRadius = T.radius, E.shadowMapSize = T.mapSize
					}
					n.directionalShadowMap[l] = M, n.directionalShadowMatrix[l] = x.shadow.matrix, n.directional[l] = E, l++
				} else if(x.isSpotLight) {
					var E = e.get(x);
					if(E.position.setFromMatrixPosition(x.matrixWorld), E.position.applyMatrix4(g), E.color.copy(w).multiplyScalar(b), E.distance = _, E.direction.setFromMatrixPosition(x.matrixWorld), r.setFromMatrixPosition(x.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(g), E.coneCos = Math.cos(x.angle), E.penumbraCos = Math.cos(x.angle * (1 - x.penumbra)), E.decay = 0 === x.distance ? 0 : x.decay, E.shadow = x.castShadow, x.castShadow) {
						var T = x.shadow;
						E.shadowBias = T.bias, E.shadowRadius = T.radius, E.shadowMapSize = T.mapSize
					}
					n.spotShadowMap[p] = M, n.spotShadowMatrix[p] = x.shadow.matrix, n.spot[p] = E, p++
				} else if(x.isRectAreaLight) {
					var E = e.get(x);
					E.color.copy(w).multiplyScalar(b), E.position.setFromMatrixPosition(x.matrixWorld), E.position.applyMatrix4(g), a.identity(), i.copy(x.matrixWorld), i.premultiply(g), a.extractRotation(i), E.halfWidth.set(.5 * x.width, 0, 0), E.halfHeight.set(0, .5 * x.height, 0), E.halfWidth.applyMatrix4(a), E.halfHeight.applyMatrix4(a), n.rectArea[f] = E, f++
				} else if(x.isPointLight) {
					var E = e.get(x);
					if(E.position.setFromMatrixPosition(x.matrixWorld), E.position.applyMatrix4(g), E.color.copy(x.color).multiplyScalar(x.intensity), E.distance = x.distance, E.decay = 0 === x.distance ? 0 : x.decay, E.shadow = x.castShadow, x.castShadow) {
						var T = x.shadow;
						E.shadowBias = T.bias, E.shadowRadius = T.radius, E.shadowMapSize = T.mapSize, E.shadowCameraNear = T.camera.near, E.shadowCameraFar = T.camera.far
					}
					n.pointShadowMap[d] = M, n.pointShadowMatrix[d] = x.shadow.matrix, n.point[d] = E, d++
				} else if(x.isHemisphereLight) {
					var E = e.get(x);
					E.direction.setFromMatrixPosition(x.matrixWorld), E.direction.transformDirection(g), E.direction.normalize(), E.skyColor.copy(x.color).multiplyScalar(b), E.groundColor.copy(x.groundColor).multiplyScalar(b), n.hemi[m] = E, m++
				}
			}
			n.ambient[0] = c, n.ambient[1] = h, n.ambient[2] = u, n.directional.length = l, n.spot.length = p, n.rectArea.length = f, n.point.length = d, n.hemi.length = m, n.hash = n.id + "," + l + "," + d + "," + p + "," + f + "," + m + "," + o.length
		}
		var e = new pe,
			n = {
				id: $c++,
				hash: "",
				ambient: [0, 0, 0],
				directional: [],
				directionalShadowMap: [],
				directionalShadowMatrix: [],
				spot: [],
				spotShadowMap: [],
				spotShadowMatrix: [],
				rectArea: [],
				point: [],
				pointShadowMap: [],
				pointShadowMatrix: [],
				hemi: []
			},
			r = new s,
			i = new o,
			a = new o;
		return {
			setup: t,
			state: n
		}
	}

	function me() {
		function t() {
			a.length = 0, s.length = 0, c.length = 0
		}

		function e(t) {
			a.push(t)
		}

		function n(t) {
			s.push(t)
		}

		function r(t) {
			c.push(t)
		}

		function i(t) {
			o.setup(a, s, t)
		}
		var o = new fe,
			a = [],
			s = [],
			c = [];
		return {
			init: t,
			state: {
				lightsArray: a,
				shadowsArray: s,
				spritesArray: c,
				lights: o
			},
			setupLights: i,
			pushLight: e,
			pushShadow: n,
			pushSprite: r
		}
	}

	function ge() {
		function t(t, e) {
			var r = t.id + "," + e.id,
				i = n[r];
			return void 0 === i && (i = new me, n[r] = i), i
		}

		function e() {
			n = {}
		}
		var n = {};
		return {
			get: t,
			dispose: e
		}
	}

	function ve(t) {
		W.call(this), this.type = "MeshDepthMaterial", this.depthPacking = Cc, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.setValues(t)
	}

	function ye(t) {
		W.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new s, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.lights = !1, this.setValues(t)
	}

	function xe(t, e, n) {
		function r(e, n, r, i, o, a) {
			var s = e.geometry,
				c = null,
				h = w,
				u = e.customDepthMaterial;
			if(r && (h = b, u = e.customDistanceMaterial), u) c = u;
			else {
				var l = !1;
				n.morphTargets && (s && s.isBufferGeometry ? l = s.morphAttributes && s.morphAttributes.position && s.morphAttributes.position.length > 0 : s && s.isGeometry && (l = s.morphTargets && s.morphTargets.length > 0)), e.isSkinnedMesh && !1 === n.skinning && console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e);
				var d = e.isSkinnedMesh && n.skinning,
					p = 0;
				l && (p |= g), d && (p |= y), c = h[p]
			}
			if(t.localClippingEnabled && !0 === n.clipShadows && 0 !== n.clippingPlanes.length) {
				var f = c.uuid,
					m = n.uuid,
					v = _[f];
				void 0 === v && (v = {}, _[f] = v);
				var x = v[m];
				void 0 === x && (x = c.clone(), v[m] = x), c = x
			}
			return c.visible = n.visible, c.wireframe = n.wireframe, c.side = null != n.shadowSide ? n.shadowSide : M[n.side], c.clipShadows = n.clipShadows, c.clippingPlanes = n.clippingPlanes, c.clipIntersection = n.clipIntersection, c.wireframeLinewidth = n.wireframeLinewidth, c.linewidth = n.linewidth, r && c.isMeshDistanceMaterial && (c.referencePosition.copy(i), c.nearDistance = o, c.farDistance = a), c
		}

		function a(n, i, o, s) {
			if(!1 !== n.visible) {
				if(n.layers.test(i.layers) && (n.isMesh || n.isLine || n.isPoints) && n.castShadow && (!n.frustumCulled || c.intersectsObject(n))) {
					n.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse, n.matrixWorld);
					var h = e.update(n),
						u = n.material;
					if(Array.isArray(u))
						for(var l = h.groups, d = 0, p = l.length; d < p; d++) {
							var f = l[d],
								g = u[f.materialIndex];
							if(g && g.visible) {
								var v = r(n, g, s, m, o.near, o.far);
								t.renderBufferDirect(o, null, h, v, n, f)
							}
						} else if(u.visible) {
							var v = r(n, u, s, m, o.near, o.far);
							t.renderBufferDirect(o, null, h, v, n, null)
						}
				}
				for(var y = n.children, x = 0, w = y.length; x < w; x++) a(y[x], i, o, s)
			}
		}
		for(var c = new v, h = new o, d = new i, p = new i(n, n), f = new s, m = new s, g = 1, y = 2, x = 1 + (g | y), w = new Array(x), b = new Array(x), _ = {}, M = {
				0: fa,
				1: pa,
				2: ma
			}, E = [new s(1, 0, 0), new s(-1, 0, 0), new s(0, 0, 1), new s(0, 0, -1), new s(0, 1, 0), new s(0, -1, 0)], T = [new s(0, 1, 0), new s(0, 1, 0), new s(0, 1, 0), new s(0, 1, 0), new s(0, 0, 1), new s(0, 0, -1)], S = [new u, new u, new u, new u, new u, new u], A = 0; A !== x; ++A) {
			var R = 0 != (A & g),
				L = 0 != (A & y),
				P = new ve({
					depthPacking: Oc,
					morphTargets: R,
					skinning: L
				});
			w[A] = P;
			var C = new ye({
				morphTargets: R,
				skinning: L
			});
			b[A] = C
		}
		var O = this;
		this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = la, this.render = function(e, n, r) {
			if(!1 !== O.enabled && (!1 !== O.autoUpdate || !1 !== O.needsUpdate) && 0 !== e.length) {
				var i = t.context,
					o = t.state;
				o.disable(i.BLEND), o.buffers.color.setClear(1, 1, 1, 1), o.buffers.depth.setTest(!0), o.setScissorTest(!1);
				for(var s, u = 0, g = e.length; u < g; u++) {
					var v = e[u],
						y = v.shadow,
						x = v && v.isPointLight;
					if(void 0 !== y) {
						var w = y.camera;
						if(d.copy(y.mapSize), d.min(p), x) {
							var b = d.x,
								_ = d.y;
							S[0].set(2 * b, _, b, _), S[1].set(0, _, b, _), S[2].set(3 * b, _, b, _), S[3].set(b, _, b, _), S[4].set(3 * b, 0, b, _), S[5].set(b, 0, b, _), d.x *= 4, d.y *= 2
						}
						if(null === y.map) {
							var M = {
								minFilter: gs,
								magFilter: gs,
								format: Us
							};
							y.map = new l(d.x, d.y, M), y.map.texture.name = v.name + ".shadowMap", w.updateProjectionMatrix()
						}
						y.isSpotLightShadow && y.update(v);
						var A = y.map,
							R = y.matrix;
						m.setFromMatrixPosition(v.matrixWorld), w.position.copy(m), x ? (s = 6, R.makeTranslation(-m.x, -m.y, -m.z)) : (s = 1, f.setFromMatrixPosition(v.target.matrixWorld), w.lookAt(f), w.updateMatrixWorld(), R.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), R.multiply(w.projectionMatrix), R.multiply(w.matrixWorldInverse)), t.setRenderTarget(A), t.clear();
						for(var L = 0; L < s; L++) {
							if(x) {
								f.copy(w.position), f.add(E[L]), w.up.copy(T[L]), w.lookAt(f), w.updateMatrixWorld();
								var P = S[L];
								o.viewport(P)
							}
							h.multiplyMatrices(w.projectionMatrix, w.matrixWorldInverse), c.setFromMatrix(h), a(n, r, w, x)
						}
					} else console.warn("THREE.WebGLShadowMap:", v, "has no shadow.")
				}
				O.needsUpdate = !1
			}
		}
	}

	function we(t, e, n, r, i, o, a, s, c) {
		h.call(this, t, e, n, r, i, o, a, s, c), this.needsUpdate = !0
	}

	function be(t, e, n, r, i) {
		function o() {
			var t = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]),
				n = new Uint16Array([0, 1, 2, 0, 2, 3]);
			u = e.createBuffer(), l = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, u), e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, l), e.bufferData(e.ELEMENT_ARRAY_BUFFER, n, e.STATIC_DRAW), d = c(), p = {
				position: e.getAttribLocation(d, "position"),
				uv: e.getAttribLocation(d, "uv")
			}, f = {
				uvOffset: e.getUniformLocation(d, "uvOffset"),
				uvScale: e.getUniformLocation(d, "uvScale"),
				rotation: e.getUniformLocation(d, "rotation"),
				center: e.getUniformLocation(d, "center"),
				scale: e.getUniformLocation(d, "scale"),
				color: e.getUniformLocation(d, "color"),
				map: e.getUniformLocation(d, "map"),
				opacity: e.getUniformLocation(d, "opacity"),
				modelViewMatrix: e.getUniformLocation(d, "modelViewMatrix"),
				projectionMatrix: e.getUniformLocation(d, "projectionMatrix"),
				fogType: e.getUniformLocation(d, "fogType"),
				fogDensity: e.getUniformLocation(d, "fogDensity"),
				fogNear: e.getUniformLocation(d, "fogNear"),
				fogFar: e.getUniformLocation(d, "fogFar"),
				fogColor: e.getUniformLocation(d, "fogColor"),
				fogDepth: e.getUniformLocation(d, "fogDepth"),
				alphaTest: e.getUniformLocation(d, "alphaTest")
			};
			var r = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
			r.width = 8, r.height = 8;
			var i = r.getContext("2d");
			i.fillStyle = "white", i.fillRect(0, 0, 8, 8), m = new we(r)
		}

		function c() {
			var t = e.createProgram(),
				n = e.createShader(e.VERTEX_SHADER),
				r = e.createShader(e.FRAGMENT_SHADER);
			return e.shaderSource(n, ["precision " + i.precision + " float;", "#define SHADER_NAME SpriteMaterial", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 center;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float fogDepth;", "void main() {", "\tvUV = uvOffset + uv * uvScale;", "\tvec2 alignedPosition = ( position - center ) * scale;", "\tvec2 rotatedPosition;", "\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "\tvec4 mvPosition;", "\tmvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "\tmvPosition.xy += rotatedPosition;", "\tgl_Position = projectionMatrix * mvPosition;", "\tfogDepth = - mvPosition.z;", "}"].join("\n")), e.shaderSource(r, ["precision " + i.precision + " float;", "#define SHADER_NAME SpriteMaterial", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "varying float fogDepth;", "void main() {", "\tvec4 texture = texture2D( map, vUV );", "\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "\tif ( gl_FragColor.a < alphaTest ) discard;", "\tif ( fogType > 0 ) {", "\t\tfloat fogFactor = 0.0;", "\t\tif ( fogType == 1 ) {", "\t\t\tfogFactor = smoothstep( fogNear, fogFar, fogDepth );", "\t\t} else {", "\t\t\tconst float LOG2 = 1.442695;", "\t\t\tfogFactor = exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 );", "\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "\t\t}", "\t\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );", "\t}", "}"].join("\n")), e.compileShader(n), e.compileShader(r), e.attachShader(t, n), e.attachShader(t, r), e.linkProgram(t), t
		}

		function h(t, e) {
			return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : e.id - t.id
		}
		var u, l, d, p, f, m, g = new s,
			v = new a,
			y = new s;
		this.render = function(i, a, s) {
			if(0 !== i.length) {
				void 0 === d && o(), n.useProgram(d), n.initAttributes(), n.enableAttribute(p.position), n.enableAttribute(p.uv), n.disableUnusedAttributes(), n.disable(e.CULL_FACE), n.enable(e.BLEND), e.bindBuffer(e.ARRAY_BUFFER, u), e.vertexAttribPointer(p.position, 2, e.FLOAT, !1, 16, 0), e.vertexAttribPointer(p.uv, 2, e.FLOAT, !1, 16, 8), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, l), e.uniformMatrix4fv(f.projectionMatrix, !1, s.projectionMatrix.elements), n.activeTexture(e.TEXTURE0), e.uniform1i(f.map, 0);
				var c = 0,
					x = 0,
					w = a.fog;
				w ? (e.uniform3f(f.fogColor, w.color.r, w.color.g, w.color.b), w.isFog ? (e.uniform1f(f.fogNear, w.near), e.uniform1f(f.fogFar, w.far), e.uniform1i(f.fogType, 1), c = 1, x = 1) : w.isFogExp2 && (e.uniform1f(f.fogDensity, w.density), e.uniform1i(f.fogType, 2), c = 2, x = 2)) : (e.uniform1i(f.fogType, 0), c = 0, x = 0);
				for(var b = 0, _ = i.length; b < _; b++) {
					var M = i[b];
					M.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, M.matrixWorld), M.z = -M.modelViewMatrix.elements[14]
				}
				i.sort(h);
				for(var E = [], T = [], b = 0, _ = i.length; b < _; b++) {
					var M = i[b],
						S = M.material;
					if(!1 !== S.visible) {
						M.onBeforeRender(t, a, s, void 0, S, void 0), e.uniform1f(f.alphaTest, S.alphaTest), e.uniformMatrix4fv(f.modelViewMatrix, !1, M.modelViewMatrix.elements), M.matrixWorld.decompose(g, v, y), E[0] = y.x, E[1] = y.y, T[0] = M.center.x - .5, T[1] = M.center.y - .5;
						var A = 0;
						a.fog && S.fog && (A = x), c !== A && (e.uniform1i(f.fogType, A), c = A), null !== S.map ? (e.uniform2f(f.uvOffset, S.map.offset.x, S.map.offset.y), e.uniform2f(f.uvScale, S.map.repeat.x, S.map.repeat.y)) : (e.uniform2f(f.uvOffset, 0, 0), e.uniform2f(f.uvScale, 1, 1)), e.uniform1f(f.opacity, S.opacity), e.uniform3f(f.color, S.color.r, S.color.g, S.color.b), e.uniform1f(f.rotation, S.rotation), e.uniform2fv(f.center, T), e.uniform2fv(f.scale, E), n.setBlending(S.blending, S.blendEquation, S.blendSrc, S.blendDst, S.blendEquationAlpha, S.blendSrcAlpha, S.blendDstAlpha, S.premultipliedAlpha), n.buffers.depth.setTest(S.depthTest), n.buffers.depth.setMask(S.depthWrite), n.buffers.color.setMask(S.colorWrite), r.setTexture2D(S.map || m, 0), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0), M.onAfterRender(t, a, s, void 0, S, void 0)
					}
				}
				n.enable(e.CULL_FACE), n.reset()
			}
		}
	}

	function _e(t, e, n) {
		function r() {
			var e = !1,
				n = new u,
				r = null,
				i = new u(0, 0, 0, 0);
			return {
				setMask: function(n) {
					r === n || e || (t.colorMask(n, n, n, n), r = n)
				},
				setLocked: function(t) {
					e = t
				},
				setClear: function(e, r, o, a, s) {
					!0 === s && (e *= a, r *= a, o *= a), n.set(e, r, o, a), !1 === i.equals(n) && (t.clearColor(e, r, o, a), i.copy(n))
				},
				reset: function() {
					e = !1, r = null, i.set(-1, 0, 0, 0)
				}
			}
		}

		function i() {
			var e = !1,
				n = null,
				r = null,
				i = null;
			return {
				setTest: function(e) {
					e ? d(t.DEPTH_TEST) : p(t.DEPTH_TEST)
				},
				setMask: function(r) {
					n === r || e || (t.depthMask(r), n = r)
				},
				setFunc: function(e) {
					if(r !== e) {
						if(e) switch(e) {
							case ka:
								t.depthFunc(t.NEVER);
								break;
							case ja:
								t.depthFunc(t.ALWAYS);
								break;
							case Wa:
								t.depthFunc(t.LESS);
								break;
							case Xa:
								t.depthFunc(t.LEQUAL);
								break;
							case qa:
								t.depthFunc(t.EQUAL);
								break;
							case Ya:
								t.depthFunc(t.GEQUAL);
								break;
							case Za:
								t.depthFunc(t.GREATER);
								break;
							case Ja:
								t.depthFunc(t.NOTEQUAL);
								break;
							default:
								t.depthFunc(t.LEQUAL)
						} else t.depthFunc(t.LEQUAL);
						r = e
					}
				},
				setLocked: function(t) {
					e = t
				},
				setClear: function(e) {
					i !== e && (t.clearDepth(e), i = e)
				},
				reset: function() {
					e = !1, n = null, r = null, i = null
				}
			}
		}

		function o() {
			var e = !1,
				n = null,
				r = null,
				i = null,
				o = null,
				a = null,
				s = null,
				c = null,
				h = null;
			return {
				setTest: function(e) {
					e ? d(t.STENCIL_TEST) : p(t.STENCIL_TEST)
				},
				setMask: function(r) {
					n === r || e || (t.stencilMask(r), n = r)
				},
				setFunc: function(e, n, a) {
					r === e && i === n && o === a || (t.stencilFunc(e, n, a), r = e, i = n, o = a)
				},
				setOp: function(e, n, r) {
					a === e && s === n && c === r || (t.stencilOp(e, n, r), a = e, s = n, c = r)
				},
				setLocked: function(t) {
					e = t
				},
				setClear: function(e) {
					h !== e && (t.clearStencil(e), h = e)
				},
				reset: function() {
					e = !1, n = null, r = null, i = null, o = null, a = null, s = null, c = null, h = null
				}
			}
		}

		function a(e, n, r) {
			var i = new Uint8Array(4),
				o = t.createTexture();
			t.bindTexture(e, o), t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST);
			for(var a = 0; a < r; a++) t.texImage2D(n + a, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, i);
			return o
		}

		function s() {
			for(var t = 0, e = N.length; t < e; t++) N[t] = 0
		}

		function c(t) {
			h(t, 0)
		}

		function h(n, r) {
			if(N[n] = 1, 0 === D[n] && (t.enableVertexAttribArray(n), D[n] = 1), U[n] !== r) {
				e.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(n, r), U[n] = r
			}
		}

		function l() {
			for(var e = 0, n = D.length; e !== n; ++e) D[e] !== N[e] && (t.disableVertexAttribArray(e), D[e] = 0)
		}

		function d(e) {
			!0 !== B[e] && (t.enable(e), B[e] = !0)
		}

		function p(e) {
			!1 !== B[e] && (t.disable(e), B[e] = !1)
		}

		function f() {
			if(null === F && (F = [], e.get("WEBGL_compressed_texture_pvrtc") || e.get("WEBGL_compressed_texture_s3tc") || e.get("WEBGL_compressed_texture_etc1") || e.get("WEBGL_compressed_texture_astc")))
				for(var n = t.getParameter(t.COMPRESSED_TEXTURE_FORMATS), r = 0; r < n.length; r++) F.push(n[r]);
			return F
		}

		function m(e) {
			return z !== e && (t.useProgram(e), z = e, !0)
		}

		function g(e, r, i, o, a, s, c, h) {
			if(e !== ba ? d(t.BLEND) : p(t.BLEND), e !== Sa) {
				if(e !== G || h !== q) switch(e) {
					case Ma:
						h ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ONE, t.ONE, t.ONE, t.ONE)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.SRC_ALPHA, t.ONE));
						break;
					case Ea:
						h ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ZERO, t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ZERO, t.ONE_MINUS_SRC_COLOR));
						break;
					case Ta:
						h ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ZERO, t.SRC_COLOR));
						break;
					default:
						h ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA))
				}
				H = null, V = null, k = null, j = null, W = null, X = null
			} else a = a || r, s = s || i, c = c || o, r === H && a === j || (t.blendEquationSeparate(n.convert(r), n.convert(a)), H = r, j = a), i === V && o === k && s === W && c === X || (t.blendFuncSeparate(n.convert(i), n.convert(o), n.convert(s), n.convert(c)), V = i, k = o, W = s, X = c);
			G = e, q = h
		}

		function v(e, n) {
			e.side === ma ? p(t.CULL_FACE) : d(t.CULL_FACE);
			var r = e.side === fa;
			n && (r = !r), y(r), !0 === e.transparent ? g(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha) : g(ba), C.setFunc(e.depthFunc), C.setTest(e.depthTest), C.setMask(e.depthWrite), P.setMask(e.colorWrite), b(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
		}

		function y(e) {
			Y !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), Y = e)
		}

		function x(e) {
			e !== ia ? (d(t.CULL_FACE), e !== Z && (e === oa ? t.cullFace(t.BACK) : e === aa ? t.cullFace(t.FRONT) : t.cullFace(t.FRONT_AND_BACK))) : p(t.CULL_FACE), Z = e
		}

		function w(e) {
			e !== J && (tt && t.lineWidth(e), J = e)
		}

		function b(e, n, r) {
			e ? (d(t.POLYGON_OFFSET_FILL), Q === n && K === r || (t.polygonOffset(n, r), Q = n, K = r)) : p(t.POLYGON_OFFSET_FILL)
		}

		function _(e) {
			e ? d(t.SCISSOR_TEST) : p(t.SCISSOR_TEST)
		}

		function M(e) {
			void 0 === e && (e = t.TEXTURE0 + $ - 1), rt !== e && (t.activeTexture(e), rt = e)
		}

		function E(e, n) {
			null === rt && M();
			var r = it[rt];
			void 0 === r && (r = {
				type: void 0,
				texture: void 0
			}, it[rt] = r), r.type === e && r.texture === n || (t.bindTexture(e, n || st[e]), r.type = e, r.texture = n)
		}

		function T() {
			try {
				t.compressedTexImage2D.apply(t, arguments)
			} catch(t) {
				console.error("THREE.WebGLState:", t)
			}
		}

		function S() {
			try {
				t.texImage2D.apply(t, arguments)
			} catch(t) {
				console.error("THREE.WebGLState:", t)
			}
		}

		function A(e) {
			!1 === ot.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), ot.copy(e))
		}

		function R(e) {
			!1 === at.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), at.copy(e))
		}

		function L() {
			for(var e = 0; e < D.length; e++) 1 === D[e] && (t.disableVertexAttribArray(e), D[e] = 0);
			B = {}, F = null, rt = null, it = {}, z = null, G = null, Y = null, Z = null, P.reset(), C.reset(), O.reset()
		}
		var P = new r,
			C = new i,
			O = new o,
			I = t.getParameter(t.MAX_VERTEX_ATTRIBS),
			N = new Uint8Array(I),
			D = new Uint8Array(I),
			U = new Uint8Array(I),
			B = {},
			F = null,
			z = null,
			G = null,
			H = null,
			V = null,
			k = null,
			j = null,
			W = null,
			X = null,
			q = !1,
			Y = null,
			Z = null,
			J = null,
			Q = null,
			K = null,
			$ = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
			tt = !1,
			et = 0,
			nt = t.getParameter(t.VERSION); - 1 !== nt.indexOf("WebGL") ? (et = parseFloat(/^WebGL\ ([0-9])/.exec(nt)[1]), tt = et >= 1) : -1 !== nt.indexOf("OpenGL ES") && (et = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(nt)[1]), tt = et >= 2);
		var rt = null,
			it = {},
			ot = new u,
			at = new u,
			st = {};
		return st[t.TEXTURE_2D] = a(t.TEXTURE_2D, t.TEXTURE_2D, 1), st[t.TEXTURE_CUBE_MAP] = a(t.TEXTURE_CUBE_MAP, t.TEXTURE_CUBE_MAP_POSITIVE_X, 6), P.setClear(0, 0, 0, 1), C.setClear(1), O.setClear(0), d(t.DEPTH_TEST), C.setFunc(Xa), y(!1), x(oa), d(t.CULL_FACE), d(t.BLEND), g(_a), {
			buffers: {
				color: P,
				depth: C,
				stencil: O
			},
			initAttributes: s,
			enableAttribute: c,
			enableAttributeAndDivisor: h,
			disableUnusedAttributes: l,
			enable: d,
			disable: p,
			getCompressedTextureFormats: f,
			useProgram: m,
			setBlending: g,
			setMaterial: v,
			setFlipSided: y,
			setCullFace: x,
			setLineWidth: w,
			setPolygonOffset: b,
			setScissorTest: _,
			activeTexture: M,
			bindTexture: E,
			compressedTexImage2D: T,
			texImage2D: S,
			scissor: A,
			viewport: R,
			reset: L
		}
	}

	function Me(t, e, n, r, i, o, a) {
		function s(t, e) {
			if(t.width > e || t.height > e) {
				if("data" in t) return void console.warn("THREE.WebGLRenderer: image in DataTexture is too big (" + t.width + "x" + t.height + ").");
				var n = e / Math.max(t.width, t.height),
					r = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
				r.width = Math.floor(t.width * n), r.height = Math.floor(t.height * n);
				return r.getContext("2d").drawImage(t, 0, 0, t.width, t.height, 0, 0, r.width, r.height), console.warn("THREE.WebGLRenderer: image is too big (" + t.width + "x" + t.height + "). Resized to " + r.width + "x" + r.height, t), r
			}
			return t
		}

		function c(t) {
			return Ic.isPowerOfTwo(t.width) && Ic.isPowerOfTwo(t.height)
		}

		function h(t) {
			if(t instanceof HTMLImageElement || t instanceof HTMLCanvasElement || t instanceof ImageBitmap) {
				void 0 === P && (P = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), P.width = Ic.floorPowerOfTwo(t.width), P.height = Ic.floorPowerOfTwo(t.height);
				return P.getContext("2d").drawImage(t, 0, 0, P.width, P.height), console.warn("THREE.WebGLRenderer: image is not power of two (" + t.width + "x" + t.height + "). Resized to " + P.width + "x" + P.height, t), P
			}
			return t
		}

		function u(t) {
			return t.wrapS !== fs || t.wrapT !== fs || t.minFilter !== gs && t.minFilter !== xs
		}

		function l(t, e) {
			return t.generateMipmaps && e && t.minFilter !== gs && t.minFilter !== xs
		}

		function d(e, n, i, o) {
			t.generateMipmap(e), r.get(n).__maxMipLevel = Math.log(Math.max(i, o)) * Math.LOG2E
		}

		function p(e) {
			return e === gs || e === vs || e === ys ? t.NEAREST : t.LINEAR
		}

		function f(t) {
			var e = t.target;
			e.removeEventListener("dispose", f), g(e), e.isVideoTexture && delete O[e.id], a.memory.textures--
		}

		function m(t) {
			var e = t.target;
			e.removeEventListener("dispose", m), v(e), a.memory.textures--
		}

		function g(e) {
			var n = r.get(e);
			if(e.image && n.__image__webglTextureCube) t.deleteTexture(n.__image__webglTextureCube);
			else {
				if(void 0 === n.__webglInit) return;
				t.deleteTexture(n.__webglTexture)
			}
			r.remove(e)
		}

		function v(e) {
			var n = r.get(e),
				i = r.get(e.texture);
			if(e) {
				if(void 0 !== i.__webglTexture && t.deleteTexture(i.__webglTexture), e.depthTexture && e.depthTexture.dispose(), e.isWebGLRenderTargetCube)
					for(var o = 0; o < 6; o++) t.deleteFramebuffer(n.__webglFramebuffer[o]), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer[o]);
				else t.deleteFramebuffer(n.__webglFramebuffer), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer);
				r.remove(e.texture), r.remove(e)
			}
		}

		function y(e, i) {
			var o = r.get(e);
			if(e.isVideoTexture && L(e), e.version > 0 && o.__version !== e.version) {
				var a = e.image;
				if(void 0 === a) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", e);
				else {
					if(!1 !== a.complete) return void _(o, e, i);
					console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", e)
				}
			}
			n.activeTexture(t.TEXTURE0 + i), n.bindTexture(t.TEXTURE_2D, o.__webglTexture)
		}

		function x(e, h) {
			var u = r.get(e);
			if(6 === e.image.length)
				if(e.version > 0 && u.__version !== e.version) {
					u.__image__webglTextureCube || (e.addEventListener("dispose", f), u.__image__webglTextureCube = t.createTexture(), a.memory.textures++), n.activeTexture(t.TEXTURE0 + h), n.bindTexture(t.TEXTURE_CUBE_MAP, u.__image__webglTextureCube), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, e.flipY);
					for(var p = e && e.isCompressedTexture, m = e.image[0] && e.image[0].isDataTexture, g = [], v = 0; v < 6; v++) g[v] = p || m ? m ? e.image[v].image : e.image[v] : s(e.image[v], i.maxCubemapSize);
					var y = g[0],
						x = c(y),
						w = o.convert(e.format),
						_ = o.convert(e.type);
					b(t.TEXTURE_CUBE_MAP, e, x);
					for(var v = 0; v < 6; v++)
						if(p)
							for(var M, E = g[v].mipmaps, T = 0, S = E.length; T < S; T++) M = E[T], e.format !== Us && e.format !== Ds ? n.getCompressedTextureFormats().indexOf(w) > -1 ? n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + v, T, w, M.width, M.height, 0, M.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + v, T, w, M.width, M.height, 0, w, _, M.data);
						else m ? n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + v, 0, w, g[v].width, g[v].height, 0, w, _, g[v].data) : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + v, 0, w, w, _, g[v]);
					u.__maxMipLevel = p ? E.length - 1 : 0, l(e, x) && d(t.TEXTURE_CUBE_MAP, e, y.width, y.height), u.__version = e.version, e.onUpdate && e.onUpdate(e)
				} else n.activeTexture(t.TEXTURE0 + h), n.bindTexture(t.TEXTURE_CUBE_MAP, u.__image__webglTextureCube)
		}

		function w(e, i) {
			n.activeTexture(t.TEXTURE0 + i), n.bindTexture(t.TEXTURE_CUBE_MAP, r.get(e).__webglTexture)
		}

		function b(n, a, s) {
			var c;
			if(s ? (t.texParameteri(n, t.TEXTURE_WRAP_S, o.convert(a.wrapS)), t.texParameteri(n, t.TEXTURE_WRAP_T, o.convert(a.wrapT)), t.texParameteri(n, t.TEXTURE_MAG_FILTER, o.convert(a.magFilter)), t.texParameteri(n, t.TEXTURE_MIN_FILTER, o.convert(a.minFilter))) : (t.texParameteri(n, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(n, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), a.wrapS === fs && a.wrapT === fs || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", a), t.texParameteri(n, t.TEXTURE_MAG_FILTER, p(a.magFilter)), t.texParameteri(n, t.TEXTURE_MIN_FILTER, p(a.minFilter)), a.minFilter !== gs && a.minFilter !== xs && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", a)), c = e.get("EXT_texture_filter_anisotropic")) {
				if(a.type === Rs && null === e.get("OES_texture_float_linear")) return;
				if(a.type === Ls && null === e.get("OES_texture_half_float_linear")) return;
				(a.anisotropy > 1 || r.get(a).__currentAnisotropy) && (t.texParameterf(n, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, i.getMaxAnisotropy())), r.get(a).__currentAnisotropy = a.anisotropy)
			}
		}

		function _(e, r, p) {
			void 0 === e.__webglInit && (e.__webglInit = !0, r.addEventListener("dispose", f), e.__webglTexture = t.createTexture(), a.memory.textures++), n.activeTexture(t.TEXTURE0 + p), n.bindTexture(t.TEXTURE_2D, e.__webglTexture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, r.flipY), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.premultiplyAlpha), t.pixelStorei(t.UNPACK_ALIGNMENT, r.unpackAlignment);
			var m = s(r.image, i.maxTextureSize);
			u(r) && !1 === c(m) && (m = h(m));
			var g = c(m),
				v = o.convert(r.format),
				y = o.convert(r.type);
			b(t.TEXTURE_2D, r, g);
			var x, w = r.mipmaps;
			if(r.isDepthTexture) {
				var _ = t.DEPTH_COMPONENT;
				if(r.type === Rs) {
					if(!C) throw new Error("Float Depth Texture only supported in WebGL2.0");
					_ = t.DEPTH_COMPONENT32F
				} else C && (_ = t.DEPTH_COMPONENT16);
				r.format === Gs && _ === t.DEPTH_COMPONENT && r.type !== Ts && r.type !== As && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), r.type = Ts, y = o.convert(r.type)), r.format === Hs && (_ = t.DEPTH_STENCIL, r.type !== Is && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), r.type = Is, y = o.convert(r.type))), n.texImage2D(t.TEXTURE_2D, 0, _, m.width, m.height, 0, v, y, null)
			} else if(r.isDataTexture)
				if(w.length > 0 && g) {
					for(var M = 0, E = w.length; M < E; M++) x = w[M], n.texImage2D(t.TEXTURE_2D, M, v, x.width, x.height, 0, v, y, x.data);
					r.generateMipmaps = !1, e.__maxMipLevel = w.length - 1
				} else n.texImage2D(t.TEXTURE_2D, 0, v, m.width, m.height, 0, v, y, m.data), e.__maxMipLevel = 0;
			else if(r.isCompressedTexture) {
				for(var M = 0, E = w.length; M < E; M++) x = w[M], r.format !== Us && r.format !== Ds ? n.getCompressedTextureFormats().indexOf(v) > -1 ? n.compressedTexImage2D(t.TEXTURE_2D, M, v, x.width, x.height, 0, x.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(t.TEXTURE_2D, M, v, x.width, x.height, 0, v, y, x.data);
				e.__maxMipLevel = w.length - 1
			} else if(w.length > 0 && g) {
				for(var M = 0, E = w.length; M < E; M++) x = w[M], n.texImage2D(t.TEXTURE_2D, M, v, v, y, x);
				r.generateMipmaps = !1, e.__maxMipLevel = w.length - 1
			} else n.texImage2D(t.TEXTURE_2D, 0, v, v, y, m), e.__maxMipLevel = 0;
			l(r, g) && d(t.TEXTURE_2D, r, m.width, m.height), e.__version = r.version, r.onUpdate && r.onUpdate(r)
		}

		function M(e, i, a, s) {
			var c = o.convert(i.texture.format),
				h = o.convert(i.texture.type);
			n.texImage2D(s, 0, c, i.width, i.height, 0, c, h, null), t.bindFramebuffer(t.FRAMEBUFFER, e), t.framebufferTexture2D(t.FRAMEBUFFER, a, s, r.get(i.texture).__webglTexture, 0), t.bindFramebuffer(t.FRAMEBUFFER, null)
		}

		function E(e, n) {
			t.bindRenderbuffer(t.RENDERBUFFER, e), n.depthBuffer && !n.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_COMPONENT16, n.width, n.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, e)) : n.depthBuffer && n.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, n.width, n.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, e)) : t.renderbufferStorage(t.RENDERBUFFER, t.RGBA4, n.width, n.height), t.bindRenderbuffer(t.RENDERBUFFER, null)
		}

		function T(e, n) {
			if(n && n.isWebGLRenderTargetCube) throw new Error("Depth Texture with cube render targets is not supported");
			if(t.bindFramebuffer(t.FRAMEBUFFER, e), !n.depthTexture || !n.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
			r.get(n.depthTexture).__webglTexture && n.depthTexture.image.width === n.width && n.depthTexture.image.height === n.height || (n.depthTexture.image.width = n.width, n.depthTexture.image.height = n.height, n.depthTexture.needsUpdate = !0), y(n.depthTexture, 0);
			var i = r.get(n.depthTexture).__webglTexture;
			if(n.depthTexture.format === Gs) t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, i, 0);
			else {
				if(n.depthTexture.format !== Hs) throw new Error("Unknown depthTexture format");
				t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.TEXTURE_2D, i, 0)
			}
		}

		function S(e) {
			var n = r.get(e),
				i = !0 === e.isWebGLRenderTargetCube;
			if(e.depthTexture) {
				if(i) throw new Error("target.depthTexture not supported in Cube render targets");
				T(n.__webglFramebuffer, e)
			} else if(i) {
				n.__webglDepthbuffer = [];
				for(var o = 0; o < 6; o++) t.bindFramebuffer(t.FRAMEBUFFER, n.__webglFramebuffer[o]), n.__webglDepthbuffer[o] = t.createRenderbuffer(), E(n.__webglDepthbuffer[o], e)
			} else t.bindFramebuffer(t.FRAMEBUFFER, n.__webglFramebuffer), n.__webglDepthbuffer = t.createRenderbuffer(), E(n.__webglDepthbuffer, e);
			t.bindFramebuffer(t.FRAMEBUFFER, null)
		}

		function A(e) {
			var i = r.get(e),
				o = r.get(e.texture);
			e.addEventListener("dispose", m), o.__webglTexture = t.createTexture(), a.memory.textures++;
			var s = !0 === e.isWebGLRenderTargetCube,
				h = c(e);
			if(s) {
				i.__webglFramebuffer = [];
				for(var u = 0; u < 6; u++) i.__webglFramebuffer[u] = t.createFramebuffer()
			} else i.__webglFramebuffer = t.createFramebuffer();
			if(s) {
				n.bindTexture(t.TEXTURE_CUBE_MAP, o.__webglTexture), b(t.TEXTURE_CUBE_MAP, e.texture, h);
				for(var u = 0; u < 6; u++) M(i.__webglFramebuffer[u], e, t.COLOR_ATTACHMENT0, t.TEXTURE_CUBE_MAP_POSITIVE_X + u);
				l(e.texture, h) && d(t.TEXTURE_CUBE_MAP, e.texture, e.width, e.height), n.bindTexture(t.TEXTURE_CUBE_MAP, null)
			} else n.bindTexture(t.TEXTURE_2D, o.__webglTexture), b(t.TEXTURE_2D, e.texture, h), M(i.__webglFramebuffer, e, t.COLOR_ATTACHMENT0, t.TEXTURE_2D), l(e.texture, h) && d(t.TEXTURE_2D, e.texture, e.width, e.height), n.bindTexture(t.TEXTURE_2D, null);
			e.depthBuffer && S(e)
		}

		function R(e) {
			var i = e.texture;
			if(l(i, c(e))) {
				var o = e.isWebGLRenderTargetCube ? t.TEXTURE_CUBE_MAP : t.TEXTURE_2D,
					a = r.get(i).__webglTexture;
				n.bindTexture(o, a), d(o, i, e.width, e.height), n.bindTexture(o, null)
			}
		}

		function L(t) {
			var e = t.id,
				n = a.render.frame;
			O[e] !== n && (O[e] = n, t.update())
		}
		var P, C = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext,
			O = {};
		this.setTexture2D = y, this.setTextureCube = x, this.setTextureCubeDynamic = w, this.setupRenderTarget = A, this.updateRenderTargetMipmap = R
	}

	function Ee(t, e) {
		function n(n) {
			var r;
			if(n === ps) return t.REPEAT;
			if(n === fs) return t.CLAMP_TO_EDGE;
			if(n === ms) return t.MIRRORED_REPEAT;
			if(n === gs) return t.NEAREST;
			if(n === vs) return t.NEAREST_MIPMAP_NEAREST;
			if(n === ys) return t.NEAREST_MIPMAP_LINEAR;
			if(n === xs) return t.LINEAR;
			if(n === ws) return t.LINEAR_MIPMAP_NEAREST;
			if(n === bs) return t.LINEAR_MIPMAP_LINEAR;
			if(n === _s) return t.UNSIGNED_BYTE;
			if(n === Ps) return t.UNSIGNED_SHORT_4_4_4_4;
			if(n === Cs) return t.UNSIGNED_SHORT_5_5_5_1;
			if(n === Os) return t.UNSIGNED_SHORT_5_6_5;
			if(n === Ms) return t.BYTE;
			if(n === Es) return t.SHORT;
			if(n === Ts) return t.UNSIGNED_SHORT;
			if(n === Ss) return t.INT;
			if(n === As) return t.UNSIGNED_INT;
			if(n === Rs) return t.FLOAT;
			if(n === Ls && null !== (r = e.get("OES_texture_half_float"))) return r.HALF_FLOAT_OES;
			if(n === Ns) return t.ALPHA;
			if(n === Ds) return t.RGB;
			if(n === Us) return t.RGBA;
			if(n === Bs) return t.LUMINANCE;
			if(n === Fs) return t.LUMINANCE_ALPHA;
			if(n === Gs) return t.DEPTH_COMPONENT;
			if(n === Hs) return t.DEPTH_STENCIL;
			if(n === Aa) return t.FUNC_ADD;
			if(n === Ra) return t.FUNC_SUBTRACT;
			if(n === La) return t.FUNC_REVERSE_SUBTRACT;
			if(n === Oa) return t.ZERO;
			if(n === Ia) return t.ONE;
			if(n === Na) return t.SRC_COLOR;
			if(n === Da) return t.ONE_MINUS_SRC_COLOR;
			if(n === Ua) return t.SRC_ALPHA;
			if(n === Ba) return t.ONE_MINUS_SRC_ALPHA;
			if(n === Fa) return t.DST_ALPHA;
			if(n === za) return t.ONE_MINUS_DST_ALPHA;
			if(n === Ga) return t.DST_COLOR;
			if(n === Ha) return t.ONE_MINUS_DST_COLOR;
			if(n === Va) return t.SRC_ALPHA_SATURATE;
			if((n === Vs || n === ks || n === js || n === Ws) && null !== (r = e.get("WEBGL_compressed_texture_s3tc"))) {
				if(n === Vs) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
				if(n === ks) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
				if(n === js) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
				if(n === Ws) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT
			}
			if((n === Xs || n === qs || n === Ys || n === Zs) && null !== (r = e.get("WEBGL_compressed_texture_pvrtc"))) {
				if(n === Xs) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
				if(n === qs) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
				if(n === Ys) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
				if(n === Zs) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
			}
			if(n === Js && null !== (r = e.get("WEBGL_compressed_texture_etc1"))) return r.COMPRESSED_RGB_ETC1_WEBGL;
			if((n === Qs || n === Ks || n === $s || n === tc || n === ec || n === nc || n === rc || n === ic || n === oc || n === ac || n === sc || n === cc || n === hc || n === uc) && null !== (r = e.get("WEBGL_compressed_texture_astc"))) return n;
			if((n === Pa || n === Ca) && null !== (r = e.get("EXT_blend_minmax"))) {
				if(n === Pa) return r.MIN_EXT;
				if(n === Ca) return r.MAX_EXT
			}
			return n === Is && null !== (r = e.get("WEBGL_depth_texture")) ? r.UNSIGNED_INT_24_8_WEBGL : 0
		}
		return {
			convert: n
		}
	}

	function Te(t, e, n, r) {
		E.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== t ? t : 50, this.zoom = 1, this.near = void 0 !== n ? n : .1, this.far = void 0 !== r ? r : 2e3, this.focus = 10, this.aspect = void 0 !== e ? e : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
	}

	function Se(t) {
		Te.call(this), this.cameras = t || []
	}

	function Ae(t) {
		function e() {
			return null !== i && !0 === i.isPresenting
		}

		function n() {
			if(e()) {
				var n = i.getEyeParameters("left"),
					o = n.renderWidth,
					a = n.renderHeight;
				b = t.getPixelRatio(), w = t.getSize(), t.setDrawingBufferSize(2 * o, a, 1), _.start()
			} else r.enabled && (t.setDrawingBufferSize(w.width, w.height, b), _.stop())
		}
		var r = this,
			i = null,
			c = null,
			h = null,
			l = new o,
			d = new o;
		"undefined" != typeof window && "VRFrameData" in window && (c = new window.VRFrameData, window.addEventListener("vrdisplaypresentchange", n, !1));
		var p = new o,
			f = new a,
			m = new s,
			g = new Te;
		g.bounds = new u(0, 0, .5, 1), g.layers.enable(1);
		var v = new Te;
		v.bounds = new u(.5, 0, .5, 1), v.layers.enable(2);
		var y = new Se([g, v]);
		y.layers.enable(1), y.layers.enable(2);
		var w, b;
		this.enabled = !1, this.userHeight = 1.6, this.getDevice = function() {
			return i
		}, this.setDevice = function(t) {
			void 0 !== t && (i = t), _.setContext(t)
		}, this.setPoseTarget = function(t) {
			void 0 !== t && (h = t)
		}, this.getCamera = function(t) {
			if(null === i) return t;
			i.depthNear = t.near, i.depthFar = t.far, i.getFrameData(c);
			var e = i.stageParameters;
			e ? l.fromArray(e.sittingToStandingTransform) : l.makeTranslation(0, r.userHeight, 0);
			var n = c.pose,
				o = null !== h ? h : t;
			if(o.matrix.copy(l), o.matrix.decompose(o.position, o.quaternion, o.scale), null !== n.orientation && (f.fromArray(n.orientation), o.quaternion.multiply(f)), null !== n.position && (f.setFromRotationMatrix(l), m.fromArray(n.position), m.applyQuaternion(f), o.position.add(m)), o.updateMatrixWorld(), !1 === i.isPresenting) return t;
			g.near = t.near, v.near = t.near, g.far = t.far, v.far = t.far, y.matrixWorld.copy(t.matrixWorld), y.matrixWorldInverse.copy(t.matrixWorldInverse), g.matrixWorldInverse.fromArray(c.leftViewMatrix), v.matrixWorldInverse.fromArray(c.rightViewMatrix), d.getInverse(l), g.matrixWorldInverse.multiply(d), v.matrixWorldInverse.multiply(d);
			var a = o.parent;
			null !== a && (p.getInverse(a.matrixWorld), g.matrixWorldInverse.multiply(p), v.matrixWorldInverse.multiply(p)), g.matrixWorld.getInverse(g.matrixWorldInverse), v.matrixWorld.getInverse(v.matrixWorldInverse), g.projectionMatrix.fromArray(c.leftProjectionMatrix), v.projectionMatrix.fromArray(c.rightProjectionMatrix), y.projectionMatrix.copy(g.projectionMatrix);
			var s = i.getLayers();
			if(s.length) {
				var u = s[0];
				null !== u.leftBounds && 4 === u.leftBounds.length && g.bounds.fromArray(u.leftBounds), null !== u.rightBounds && 4 === u.rightBounds.length && v.bounds.fromArray(u.rightBounds)
			}
			return y
		}, this.getStandingMatrix = function() {
			return l
		}, this.isPresenting = e;
		var _ = new x;
		this.setAnimationLoop = function(t) {
			_.setAnimationLoop(t)
		}, this.submitFrame = function() {
			e() && i.submitFrame()
		}, this.dispose = function() {
			"undefined" != typeof window && window.removeEventListener("vrdisplaypresentchange", n)
		}
	}

	function Re(t) {
		function e() {
			return null !== a && null !== s
		}

		function n(t, e) {
			null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.getInverse(t.matrixWorld)
		}

		function r(t, e) {
			c = e.getDevicePose(s);
			for(var n = a.baseLayer, r = e.views, i = 0; i < r.length; i++) {
				var o = r[i],
					h = n.getViewport(o),
					u = c.getViewMatrix(o),
					l = d.cameras[i];
				l.matrix.fromArray(u).getInverse(l.matrix), l.projectionMatrix.fromArray(o.projectionMatrix), l.viewport.set(h.x, h.y, h.width, h.height), 0 === i && (d.matrix.copy(l.matrix), d.projectionMatrix.copy(l.projectionMatrix))
			}
			p && p()
		}
		var i = t.context,
			o = null,
			a = null,
			s = null,
			c = null,
			h = new Te;
		h.layers.enable(1), h.viewport = new u;
		var l = new Te;
		l.layers.enable(2), l.viewport = new u;
		var d = new Se([h, l]);
		d.layers.enable(1), d.layers.enable(2), this.enabled = !1, this.getDevice = function() {
			return o
		}, this.setDevice = function(t) {
			void 0 !== t && (o = t), i.setCompatibleXRDevice(t)
		}, this.setSession = function(e, n) {
			null !== (a = e) && (a.addEventListener("end", function() {
				t.setFramebuffer(null), f.stop()
			}), a.baseLayer = new XRWebGLLayer(a, i), a.requestFrameOfReference(n.frameOfReferenceType).then(function(e) {
				s = e, t.setFramebuffer(a.baseLayer.framebuffer), f.setContext(a), f.start()
			}))
		}, this.getCamera = function(t) {
			if(e()) {
				var r = t.parent,
					i = d.cameras;
				n(d, r);
				for(var o = 0; o < i.length; o++) n(i[o], r);
				t.matrixWorld.copy(d.matrixWorld);
				for(var a = t.children, o = 0, s = a.length; o < s; o++) a[o].updateMatrixWorld(!0);
				return d
			}
			return t
		}, this.isPresenting = e;
		var p = null,
			f = new x;
		f.setAnimationLoop(r), this.setAnimationLoop = function(t) {
			p = t
		}, this.getStandingMatrix = function() {
			return console.warn("THREE.WebXRManager: getStandingMatrix() is no longer needed."), new THREE.Matrix4
		}, this.submitFrame = function() {}
	}

	function Le(t) {
		function e() {
			return null === ht ? bt : 1
		}

		function n() {
			Ot = new nt(Z), Ot.get("WEBGL_depth_texture"), Ot.get("OES_texture_float"), Ot.get("OES_texture_float_linear"), Ot.get("OES_texture_half_float"), Ot.get("OES_texture_half_float_linear"), Ot.get("OES_standard_derivatives"), Ot.get("OES_element_index_uint"), Ot.get("ANGLE_instanced_arrays"), Jt = new Ee(Z, Ot), It = new tt(Z, Ot, t), Nt = new _e(Z, Ot, Jt), Nt.scissor(gt.copy(Mt).multiplyScalar(bt)), Nt.viewport(mt.copy(_t).multiplyScalar(bt)), Dt = new ot(Z), Ut = new ce, Bt = new Me(Z, Ot, Nt, Ut, It, Jt, Dt), Ft = new w(Z), zt = new rt(Z, Ft, Dt), Gt = new ct(zt, Dt), Xt = new st(Z), Ht = new se(J, Ot, It), Vt = new de, kt = new ge, jt = new K(J, Nt, Gt, j), qt = new $(Z, Ot, Dt), Yt = new it(Z, Ot, Dt), Zt = new be(J, Z, Nt, Bt, It), Dt.programs = Ht.programs, J.context = Z, J.capabilities = It, J.extensions = Ot, J.properties = Ut, J.renderLists = Vt, J.state = Nt, J.info = Dt
		}

		function r(t) {
			t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), Q = !0
		}

		function i() {
			console.log("THREE.WebGLRenderer: Context Restored."), Q = !1, n()
		}

		function a(t) {
			var e = t.target;
			e.removeEventListener("dispose", a), c(e)
		}

		function c(t) {
			h(t), Ut.remove(t)
		}

		function h(t) {
			var e = Ut.get(t).program;
			t.program = void 0, void 0 !== e && Ht.releaseProgram(e)
		}

		function l(t, e, n) {
			t.render(function(t) {
				J.renderBufferImmediate(t, e, n)
			})
		}

		function d(t, e, n) {
			if(n && n.isInstancedBufferGeometry && null === Ot.get("ANGLE_instanced_arrays")) return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
			Nt.initAttributes();
			var r = n.attributes,
				i = e.getAttributes(),
				o = t.defaultAttributeValues;
			for(var a in i) {
				var s = i[a];
				if(s >= 0) {
					var c = r[a];
					if(void 0 !== c) {
						var h = c.normalized,
							u = c.itemSize,
							l = Ft.get(c);
						if(void 0 === l) continue;
						var d = l.buffer,
							p = l.type,
							f = l.bytesPerElement;
						if(c.isInterleavedBufferAttribute) {
							var m = c.data,
								g = m.stride,
								v = c.offset;
							m && m.isInstancedInterleavedBuffer ? (Nt.enableAttributeAndDivisor(s, m.meshPerAttribute), void 0 === n.maxInstancedCount && (n.maxInstancedCount = m.meshPerAttribute * m.count)) : Nt.enableAttribute(s), Z.bindBuffer(Z.ARRAY_BUFFER, d), Z.vertexAttribPointer(s, u, p, h, g * f, v * f)
						} else c.isInstancedBufferAttribute ? (Nt.enableAttributeAndDivisor(s, c.meshPerAttribute), void 0 === n.maxInstancedCount && (n.maxInstancedCount = c.meshPerAttribute * c.count)) : Nt.enableAttribute(s), Z.bindBuffer(Z.ARRAY_BUFFER, d), Z.vertexAttribPointer(s, u, p, h, 0, 0)
					} else if(void 0 !== o) {
						var y = o[a];
						if(void 0 !== y) switch(y.length) {
							case 2:
								Z.vertexAttrib2fv(s, y);
								break;
							case 3:
								Z.vertexAttrib3fv(s, y);
								break;
							case 4:
								Z.vertexAttrib4fv(s, y);
								break;
							default:
								Z.vertexAttrib1fv(s, y)
						}
					}
				}
			}
			Nt.disableUnusedAttributes()
		}

		function f() {
			Qt.isPresenting() || $t && $t()
		}

		function m(t, e, n) {
			if(!1 !== t.visible) {
				if(t.layers.test(e.layers))
					if(t.isLight) Y.pushLight(t), t.castShadow && Y.pushShadow(t);
					else if(t.isSprite) t.frustumCulled && !Tt.intersectsSprite(t) || Y.pushSprite(t);
				else if(t.isImmediateRenderObject) n && Pt.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Lt), q.push(t, null, t.material, Pt.z, null);
				else if((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.update(), !t.frustumCulled || Tt.intersectsObject(t))) {
					n && Pt.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Lt);
					var r = Gt.update(t),
						i = t.material;
					if(Array.isArray(i))
						for(var o = r.groups, a = 0, s = o.length; a < s; a++) {
							var c = o[a],
								h = i[c.materialIndex];
							h && h.visible && q.push(t, r, h, Pt.z, c)
						} else i.visible && q.push(t, r, i, Pt.z, null)
				}
				for(var u = t.children, a = 0, s = u.length; a < s; a++) m(u[a], e, n)
			}
		}

		function g(t, e, n, r) {
			for(var i = 0, o = t.length; i < o; i++) {
				var a = t[i],
					s = a.object,
					c = a.geometry,
					h = void 0 === r ? a.material : r,
					u = a.group;
				if(n.isArrayCamera) {
					ft = n;
					for(var l = n.cameras, d = 0, p = l.length; d < p; d++) {
						var f = l[d];
						if(s.layers.test(f.layers)) {
							if("viewport" in f) Nt.viewport(mt.copy(f.viewport));
							else {
								var m = f.bounds,
									g = m.x * xt,
									v = m.y * wt,
									x = m.z * xt,
									w = m.w * wt;
								Nt.viewport(mt.set(g, v, x, w).multiplyScalar(bt))
							}
							y(s, e, f, c, h, u)
						}
					}
				} else ft = null, y(s, e, n, c, h, u)
			}
		}

		function y(t, e, n, r, i, o) {
			if(t.onBeforeRender(J, e, n, r, i, o), Y = kt.get(e, ft || n), t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
				var a = t.isMesh && t.matrixWorld.determinant() < 0;
				Nt.setMaterial(i, a);
				var s = _(n, e.fog, i, t);
				dt = "", l(t, s, i)
			} else J.renderBufferDirect(n, e.fog, r, i, t, o);
			t.onAfterRender(J, e, n, r, i, o), Y = kt.get(e, ft || n)
		}

		function b(t, e, n) {
			var r = Ut.get(t),
				i = Y.state.lights,
				o = Y.state.shadowsArray,
				s = Ht.getParameters(t, i.state, o, e, St.numPlanes, St.numIntersection, n),
				c = Ht.getProgramCode(t, s),
				u = r.program,
				l = !0;
			if(void 0 === u) t.addEventListener("dispose", a);
			else if(u.code !== c) h(t);
			else if(r.lightsHash !== i.state.hash) Ut.update(t, "lightsHash", i.state.hash), l = !1;
			else {
				if(void 0 !== s.shaderID) return;
				l = !1
			}
			if(l) {
				if(s.shaderID) {
					var d = zc[s.shaderID];
					r.shader = {
						name: t.type,
						uniforms: Uc.clone(d.uniforms),
						vertexShader: d.vertexShader,
						fragmentShader: d.fragmentShader
					}
				} else r.shader = {
					name: t.type,
					uniforms: t.uniforms,
					vertexShader: t.vertexShader,
					fragmentShader: t.fragmentShader
				};
				t.onBeforeCompile(r.shader, J), u = Ht.acquireProgram(t, r.shader, s, c), r.program = u, t.program = u
			}
			var p = u.getAttributes();
			if(t.morphTargets) {
				t.numSupportedMorphTargets = 0;
				for(var f = 0; f < J.maxMorphTargets; f++) p["morphTarget" + f] >= 0 && t.numSupportedMorphTargets++
			}
			if(t.morphNormals) {
				t.numSupportedMorphNormals = 0;
				for(var f = 0; f < J.maxMorphNormals; f++) p["morphNormal" + f] >= 0 && t.numSupportedMorphNormals++
			}
			var m = r.shader.uniforms;
			(t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (r.numClippingPlanes = St.numPlanes, r.numIntersection = St.numIntersection, m.clippingPlanes = St.uniform), r.fog = e, r.lightsHash = i.state.hash, t.lights && (m.ambientLightColor.value = i.state.ambient, m.directionalLights.value = i.state.directional, m.spotLights.value = i.state.spot, m.rectAreaLights.value = i.state.rectArea, m.pointLights.value = i.state.point, m.hemisphereLights.value = i.state.hemi, m.directionalShadowMap.value = i.state.directionalShadowMap, m.directionalShadowMatrix.value = i.state.directionalShadowMatrix, m.spotShadowMap.value = i.state.spotShadowMap, m.spotShadowMatrix.value = i.state.spotShadowMatrix, m.pointShadowMap.value = i.state.pointShadowMap, m.pointShadowMatrix.value = i.state.pointShadowMatrix);
			var g = r.program.getUniforms(),
				v = Wt.seqWithValue(g.seq, m);
			r.uniformsList = v
		}

		function _(t, e, n, r) {
			yt = 0;
			var i = Ut.get(n),
				o = Y.state.lights;
			if(At && (Rt || t !== pt)) {
				var a = t === pt && n.id === lt;
				St.setState(n.clippingPlanes, n.clipIntersection, n.clipShadows, t, i, a)
			}!1 === n.needsUpdate && (void 0 === i.program ? n.needsUpdate = !0 : n.fog && i.fog !== e ? n.needsUpdate = !0 : n.lights && i.lightsHash !== o.state.hash ? n.needsUpdate = !0 : void 0 === i.numClippingPlanes || i.numClippingPlanes === St.numPlanes && i.numIntersection === St.numIntersection || (n.needsUpdate = !0)), n.needsUpdate && (b(n, e, r), n.needsUpdate = !1);
			var s = !1,
				c = !1,
				h = !1,
				u = i.program,
				l = u.getUniforms(),
				d = i.shader.uniforms;
			if(Nt.useProgram(u.program) && (s = !0, c = !0, h = !0), n.id !== lt && (lt = n.id, c = !0), s || t !== pt) {
				if(l.setValue(Z, "projectionMatrix", t.projectionMatrix), It.logarithmicDepthBuffer && l.setValue(Z, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), pt !== (ft || t) && (pt = ft || t, c = !0, h = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshStandardMaterial || n.envMap) {
					var f = l.map.cameraPosition;
					void 0 !== f && f.setValue(Z, Pt.setFromMatrixPosition(t.matrixWorld))
				}(n.isMeshPhongMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.skinning) && l.setValue(Z, "viewMatrix", t.matrixWorldInverse)
			}
			if(n.skinning) {
				l.setOptional(Z, r, "bindMatrix"), l.setOptional(Z, r, "bindMatrixInverse");
				var m = r.skeleton;
				if(m) {
					var g = m.bones;
					if(It.floatVertexTextures) {
						if(void 0 === m.boneTexture) {
							var v = Math.sqrt(4 * g.length);
							v = Ic.ceilPowerOfTwo(v), v = Math.max(v, 4);
							var y = new Float32Array(v * v * 4);
							y.set(m.boneMatrices);
							var x = new p(y, v, v, Us, Rs);
							x.needsUpdate = !0, m.boneMatrices = y, m.boneTexture = x, m.boneTextureSize = v
						}
						l.setValue(Z, "boneTexture", m.boneTexture), l.setValue(Z, "boneTextureSize", m.boneTextureSize)
					} else l.setOptional(Z, m, "boneMatrices")
				}
			}
			return c && (l.setValue(Z, "toneMappingExposure", J.toneMappingExposure), l.setValue(Z, "toneMappingWhitePoint", J.toneMappingWhitePoint), n.lights && U(d, h), e && n.fog && A(d, e), n.isMeshBasicMaterial ? M(d, n) : n.isMeshLambertMaterial ? (M(d, n), R(d, n)) : n.isMeshPhongMaterial ? (M(d, n), n.isMeshToonMaterial ? P(d, n) : L(d, n)) : n.isMeshStandardMaterial ? (M(d, n), n.isMeshPhysicalMaterial ? O(d, n) : C(d, n)) : n.isMeshDepthMaterial ? (M(d, n), I(d, n)) : n.isMeshDistanceMaterial ? (M(d, n), N(d, n)) : n.isMeshNormalMaterial ? (M(d, n), D(d, n)) : n.isLineBasicMaterial ? (E(d, n), n.isLineDashedMaterial && T(d, n)) : n.isPointsMaterial ? S(d, n) : n.isShadowMaterial && (d.color.value = n.color, d.opacity.value = n.opacity), void 0 !== d.ltc_1 && (d.ltc_1.value = Fc.LTC_1), void 0 !== d.ltc_2 && (d.ltc_2.value = Fc.LTC_2), Wt.upload(Z, i.uniformsList, d, J)), n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (Wt.upload(Z, i.uniformsList, d, J), n.uniformsNeedUpdate = !1), l.setValue(Z, "modelViewMatrix", r.modelViewMatrix), l.setValue(Z, "normalMatrix", r.normalMatrix), l.setValue(Z, "modelMatrix", r.matrixWorld), u
		}

		function M(t, e) {
			t.opacity.value = e.opacity, e.color && (t.diffuse.value = e.color), e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity), e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.specularMap && (t.specularMap.value = e.specularMap), e.envMap && (t.envMap.value = e.envMap, t.flipEnvMap.value = e.envMap && e.envMap.isCubeTexture ? -1 : 1, t.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio, t.maxMipLevel.value = Ut.get(e.envMap).__maxMipLevel), e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.aoMap && (t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity);
			var n;
			e.map ? n = e.map : e.specularMap ? n = e.specularMap : e.displacementMap ? n = e.displacementMap : e.normalMap ? n = e.normalMap : e.bumpMap ? n = e.bumpMap : e.roughnessMap ? n = e.roughnessMap : e.metalnessMap ? n = e.metalnessMap : e.alphaMap ? n = e.alphaMap : e.emissiveMap && (n = e.emissiveMap), void 0 !== n && (n.isWebGLRenderTarget && (n = n.texture), !0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix))
		}

		function E(t, e) {
			t.diffuse.value = e.color, t.opacity.value = e.opacity
		}

		function T(t, e) {
			t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
		}

		function S(t, e) {
			t.diffuse.value = e.color, t.opacity.value = e.opacity, t.size.value = e.size * bt, t.scale.value = .5 * wt, t.map.value = e.map, null !== e.map && (!0 === e.map.matrixAutoUpdate && e.map.updateMatrix(), t.uvTransform.value.copy(e.map.matrix))
		}

		function A(t, e) {
			t.fogColor.value = e.color, e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
		}

		function R(t, e) {
			e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
		}

		function L(t, e) {
			t.specular.value = e.specular, t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === fa && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === fa && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
		}

		function P(t, e) {
			L(t, e), e.gradientMap && (t.gradientMap.value = e.gradientMap)
		}

		function C(t, e) {
			t.roughness.value = e.roughness, t.metalness.value = e.metalness, e.roughnessMap && (t.roughnessMap.value = e.roughnessMap), e.metalnessMap && (t.metalnessMap.value = e.metalnessMap), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === fa && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === fa && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), e.envMap && (t.envMapIntensity.value = e.envMapIntensity)
		}

		function O(t, e) {
			t.clearCoat.value = e.clearCoat, t.clearCoatRoughness.value = e.clearCoatRoughness, C(t, e)
		}

		function I(t, e) {
			e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
		}

		function N(t, e) {
			e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance
		}

		function D(t, e) {
			e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === fa && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === fa && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
		}

		function U(t, e) {
			t.ambientLightColor.needsUpdate = e, t.directionalLights.needsUpdate = e, t.pointLights.needsUpdate = e, t.spotLights.needsUpdate = e, t.rectAreaLights.needsUpdate = e, t.hemisphereLights.needsUpdate = e
		}

		function B() {
			var t = yt;
			return t >= It.maxTextures && console.warn("THREE.WebGLRenderer: Trying to use " + t + " texture units while this GPU supports only " + It.maxTextures), yt += 1, t
		}
		console.log("THREE.WebGLRenderer", na), t = t || {};
		var F = void 0 !== t.canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
			z = void 0 !== t.context ? t.context : null,
			G = void 0 !== t.alpha && t.alpha,
			H = void 0 === t.depth || t.depth,
			V = void 0 === t.stencil || t.stencil,
			k = void 0 !== t.antialias && t.antialias,
			j = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
			W = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
			X = void 0 !== t.powerPreference ? t.powerPreference : "default",
			q = null,
			Y = null;
		this.domElement = F, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyCorrectLights = !1, this.toneMapping = es, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
		var Z, J = this,
			Q = !1,
			at = null,
			ht = null,
			ut = null,
			lt = -1,
			dt = "",
			pt = null,
			ft = null,
			mt = new u,
			gt = new u,
			vt = null,
			yt = 0,
			xt = F.width,
			wt = F.height,
			bt = 1,
			_t = new u(0, 0, xt, wt),
			Mt = new u(0, 0, xt, wt),
			Et = !1,
			Tt = new v,
			St = new et,
			At = !1,
			Rt = !1,
			Lt = new o,
			Pt = new s;
		try {
			var Ct = {
				alpha: G,
				depth: H,
				stencil: V,
				antialias: k,
				premultipliedAlpha: j,
				preserveDrawingBuffer: W,
				powerPreference: X
			};
			if(F.addEventListener("webglcontextlost", r, !1), F.addEventListener("webglcontextrestored", i, !1), null === (Z = z || F.getContext("webgl", Ct) || F.getContext("experimental-webgl", Ct))) throw null !== F.getContext("webgl") ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
			void 0 === Z.getShaderPrecisionFormat && (Z.getShaderPrecisionFormat = function() {
				return {
					rangeMin: 1,
					rangeMax: 1,
					precision: 1
				}
			})
		} catch(t) {
			console.error("THREE.WebGLRenderer: " + t.message)
		}
		var Ot, It, Nt, Dt, Ut, Bt, Ft, zt, Gt, Ht, Vt, kt, jt, Xt, qt, Yt, Zt, Jt;
		n();
		var Qt = "xr" in navigator ? new Re(J) : new Ae(J);
		this.vr = Qt;
		var Kt = new xe(J, Gt, It.maxTextureSize);
		this.shadowMap = Kt, this.getContext = function() {
			return Z
		}, this.getContextAttributes = function() {
			return Z.getContextAttributes()
		}, this.forceContextLoss = function() {
			var t = Ot.get("WEBGL_lose_context");
			t && t.loseContext()
		}, this.forceContextRestore = function() {
			var t = Ot.get("WEBGL_lose_context");
			t && t.restoreContext()
		}, this.getPixelRatio = function() {
			return bt
		}, this.setPixelRatio = function(t) {
			void 0 !== t && (bt = t, this.setSize(xt, wt, !1))
		}, this.getSize = function() {
			return {
				width: xt,
				height: wt
			}
		}, this.setSize = function(t, e, n) {
			if(Qt.isPresenting()) return void console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
			xt = t, wt = e, F.width = t * bt, F.height = e * bt, !1 !== n && (F.style.width = t + "px", F.style.height = e + "px"), this.setViewport(0, 0, t, e)
		}, this.getDrawingBufferSize = function() {
			return {
				width: xt * bt,
				height: wt * bt
			}
		}, this.setDrawingBufferSize = function(t, e, n) {
			xt = t, wt = e, bt = n, F.width = t * n, F.height = e * n, this.setViewport(0, 0, t, e)
		}, this.getCurrentViewport = function() {
			return mt
		}, this.setViewport = function(t, e, n, r) {
			_t.set(t, wt - e - r, n, r), Nt.viewport(mt.copy(_t).multiplyScalar(bt))
		}, this.setScissor = function(t, e, n, r) {
			Mt.set(t, wt - e - r, n, r), Nt.scissor(gt.copy(Mt).multiplyScalar(bt))
		}, this.setScissorTest = function(t) {
			Nt.setScissorTest(Et = t)
		}, this.getClearColor = function() {
			return jt.getClearColor()
		}, this.setClearColor = function() {
			jt.setClearColor.apply(jt, arguments)
		}, this.getClearAlpha = function() {
			return jt.getClearAlpha()
		}, this.setClearAlpha = function() {
			jt.setClearAlpha.apply(jt, arguments)
		}, this.clear = function(t, e, n) {
			var r = 0;
			(void 0 === t || t) && (r |= Z.COLOR_BUFFER_BIT), (void 0 === e || e) && (r |= Z.DEPTH_BUFFER_BIT), (void 0 === n || n) && (r |= Z.STENCIL_BUFFER_BIT), Z.clear(r)
		}, this.clearColor = function() {
			this.clear(!0, !1, !1)
		}, this.clearDepth = function() {
			this.clear(!1, !0, !1)
		}, this.clearStencil = function() {
			this.clear(!1, !1, !0)
		}, this.clearTarget = function(t, e, n, r) {
			this.setRenderTarget(t), this.clear(e, n, r)
		}, this.dispose = function() {
			F.removeEventListener("webglcontextlost", r, !1), F.removeEventListener("webglcontextrestored", i, !1), Vt.dispose(), kt.dispose(), Ut.dispose(), Gt.dispose(), Qt.dispose(), te.stop()
		}, this.renderBufferImmediate = function(t, e, n) {
			Nt.initAttributes();
			var r = Ut.get(t);
			t.hasPositions && !r.position && (r.position = Z.createBuffer()), t.hasNormals && !r.normal && (r.normal = Z.createBuffer()), t.hasUvs && !r.uv && (r.uv = Z.createBuffer()), t.hasColors && !r.color && (r.color = Z.createBuffer());
			var i = e.getAttributes();
			if(t.hasPositions && (Z.bindBuffer(Z.ARRAY_BUFFER, r.position), Z.bufferData(Z.ARRAY_BUFFER, t.positionArray, Z.DYNAMIC_DRAW), Nt.enableAttribute(i.position), Z.vertexAttribPointer(i.position, 3, Z.FLOAT, !1, 0, 0)), t.hasNormals) {
				if(Z.bindBuffer(Z.ARRAY_BUFFER, r.normal), !n.isMeshPhongMaterial && !n.isMeshStandardMaterial && !n.isMeshNormalMaterial && !0 === n.flatShading)
					for(var o = 0, a = 3 * t.count; o < a; o += 9) {
						var s = t.normalArray,
							c = (s[o + 0] + s[o + 3] + s[o + 6]) / 3,
							h = (s[o + 1] + s[o + 4] + s[o + 7]) / 3,
							u = (s[o + 2] + s[o + 5] + s[o + 8]) / 3;
						s[o + 0] = c, s[o + 1] = h, s[o + 2] = u, s[o + 3] = c, s[o + 4] = h, s[o + 5] = u, s[o + 6] = c, s[o + 7] = h, s[o + 8] = u
					}
				Z.bufferData(Z.ARRAY_BUFFER, t.normalArray, Z.DYNAMIC_DRAW), Nt.enableAttribute(i.normal), Z.vertexAttribPointer(i.normal, 3, Z.FLOAT, !1, 0, 0)
			}
			t.hasUvs && n.map && (Z.bindBuffer(Z.ARRAY_BUFFER, r.uv), Z.bufferData(Z.ARRAY_BUFFER, t.uvArray, Z.DYNAMIC_DRAW), Nt.enableAttribute(i.uv), Z.vertexAttribPointer(i.uv, 2, Z.FLOAT, !1, 0, 0)), t.hasColors && n.vertexColors !== ya && (Z.bindBuffer(Z.ARRAY_BUFFER, r.color), Z.bufferData(Z.ARRAY_BUFFER, t.colorArray, Z.DYNAMIC_DRAW), Nt.enableAttribute(i.color), Z.vertexAttribPointer(i.color, 3, Z.FLOAT, !1, 0, 0)), Nt.disableUnusedAttributes(), Z.drawArrays(Z.TRIANGLES, 0, t.count), t.count = 0
		}, this.renderBufferDirect = function(t, n, r, i, o, a) {
			var s = o.isMesh && o.matrixWorld.determinant() < 0;
			Nt.setMaterial(i, s);
			var c = _(t, n, i, o),
				h = r.id + "_" + c.id + "_" + (!0 === i.wireframe),
				u = !1;
			h !== dt && (dt = h, u = !0), o.morphTargetInfluences && (Xt.update(o, r, i, c), u = !0);
			var l = r.index,
				p = r.attributes.position,
				f = 1;
			!0 === i.wireframe && (l = zt.getWireframeAttribute(r), f = 2);
			var m, g = qt;
			null !== l && (m = Ft.get(l), g = Yt, g.setIndex(m)), u && (d(i, c, r), null !== l && Z.bindBuffer(Z.ELEMENT_ARRAY_BUFFER, m.buffer));
			var v = 1 / 0;
			null !== l ? v = l.count : void 0 !== p && (v = p.count);
			var y = r.drawRange.start * f,
				x = r.drawRange.count * f,
				w = null !== a ? a.start * f : 0,
				b = null !== a ? a.count * f : 1 / 0,
				M = Math.max(y, w),
				E = Math.min(v, y + x, w + b) - 1,
				T = Math.max(0, E - M + 1);
			if(0 !== T) {
				if(o.isMesh)
					if(!0 === i.wireframe) Nt.setLineWidth(i.wireframeLinewidth * e()), g.setMode(Z.LINES);
					else switch(o.drawMode) {
						case wc:
							g.setMode(Z.TRIANGLES);
							break;
						case bc:
							g.setMode(Z.TRIANGLE_STRIP);
							break;
						case _c:
							g.setMode(Z.TRIANGLE_FAN)
					} else if(o.isLine) {
						var S = i.linewidth;
						void 0 === S && (S = 1), Nt.setLineWidth(S * e()), o.isLineSegments ? g.setMode(Z.LINES) : o.isLineLoop ? g.setMode(Z.LINE_LOOP) : g.setMode(Z.LINE_STRIP)
					} else o.isPoints && g.setMode(Z.POINTS);
				r && r.isInstancedBufferGeometry ? r.maxInstancedCount > 0 && g.renderInstances(r, M, T) : g.render(M, T)
			}
		}, this.compile = function(t, e) {
			Y = kt.get(t, e), Y.init(), t.traverse(function(t) {
				t.isLight && (Y.pushLight(t), t.castShadow && Y.pushShadow(t))
			}), Y.setupLights(e), t.traverse(function(e) {
				if(e.material)
					if(Array.isArray(e.material))
						for(var n = 0; n < e.material.length; n++) b(e.material[n], t.fog, e);
					else b(e.material, t.fog, e)
			})
		};
		var $t = null,
			te = new x;
		te.setAnimationLoop(f), te.setContext(window), this.setAnimationLoop = function(t) {
			$t = t, Qt.setAnimationLoop(t), te.start()
		}, this.render = function(t, e, n, r) {
			if(!e || !e.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
			if(!Q) {
				dt = "", lt = -1, pt = null, !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), Qt.enabled && (e = Qt.getCamera(e)), Y = kt.get(t, e), Y.init(), t.onBeforeRender(J, t, e, n), Lt.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), Tt.setFromMatrix(Lt), Rt = this.localClippingEnabled, At = St.init(this.clippingPlanes, Rt, e), q = Vt.get(t, e), q.init(), m(t, e, J.sortObjects), !0 === J.sortObjects && q.sort(), At && St.beginShadows();
				var i = Y.state.shadowsArray;
				Kt.render(i, t, e), Y.setupLights(e), At && St.endShadows(), this.info.autoReset && this.info.reset(), void 0 === n && (n = null), this.setRenderTarget(n), jt.render(q, t, e, r);
				var o = q.opaque,
					a = q.transparent;
				if(t.overrideMaterial) {
					var s = t.overrideMaterial;
					o.length && g(o, t, e, s), a.length && g(a, t, e, s)
				} else o.length && g(o, t, e), a.length && g(a, t, e);
				var c = Y.state.spritesArray;
				Zt.render(c, t, e), n && Bt.updateRenderTargetMipmap(n), Nt.buffers.depth.setTest(!0), Nt.buffers.depth.setMask(!0), Nt.buffers.color.setMask(!0), Nt.setPolygonOffset(!1), t.onAfterRender(J, t, e), Qt.enabled && Qt.submitFrame(), q = null, Y = null
			}
		}, this.allocTextureUnit = B, this.setTexture2D = function() {
			var t = !1;
			return function(e, n) {
				e && e.isWebGLRenderTarget && (t || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."), t = !0), e = e.texture), Bt.setTexture2D(e, n)
			}
		}(), this.setTexture = function() {
			var t = !1;
			return function(e, n) {
				t || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."), t = !0), Bt.setTexture2D(e, n)
			}
		}(), this.setTextureCube = function() {
			var t = !1;
			return function(e, n) {
				e && e.isWebGLRenderTargetCube && (t || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."), t = !0), e = e.texture), e && e.isCubeTexture || Array.isArray(e.image) && 6 === e.image.length ? Bt.setTextureCube(e, n) : Bt.setTextureCubeDynamic(e, n)
			}
		}(), this.setFramebuffer = function(t) {
			at = t
		}, this.getRenderTarget = function() {
			return ht
		}, this.setRenderTarget = function(t) {
			ht = t, t && void 0 === Ut.get(t).__webglFramebuffer && Bt.setupRenderTarget(t);
			var e = at,
				n = !1;
			if(t) {
				var r = Ut.get(t).__webglFramebuffer;
				t.isWebGLRenderTargetCube ? (e = r[t.activeCubeFace], n = !0) : e = r, mt.copy(t.viewport), gt.copy(t.scissor), vt = t.scissorTest
			} else mt.copy(_t).multiplyScalar(bt), gt.copy(Mt).multiplyScalar(bt), vt = Et;
			if(ut !== e && (Z.bindFramebuffer(Z.FRAMEBUFFER, e), ut = e), Nt.viewport(mt), Nt.scissor(gt), Nt.setScissorTest(vt), n) {
				var i = Ut.get(t.texture);
				Z.framebufferTexture2D(Z.FRAMEBUFFER, Z.COLOR_ATTACHMENT0, Z.TEXTURE_CUBE_MAP_POSITIVE_X + t.activeCubeFace, i.__webglTexture, t.activeMipMapLevel)
			}
		}, this.readRenderTargetPixels = function(t, e, n, r, i, o) {
			if(!t || !t.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
			var a = Ut.get(t).__webglFramebuffer;
			if(a) {
				var s = !1;
				a !== ut && (Z.bindFramebuffer(Z.FRAMEBUFFER, a), s = !0);
				try {
					var c = t.texture,
						h = c.format,
						u = c.type;
					if(h !== Us && Jt.convert(h) !== Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
					if(!(u === _s || Jt.convert(u) === Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE) || u === Rs && (Ot.get("OES_texture_float") || Ot.get("WEBGL_color_buffer_float")) || u === Ls && Ot.get("EXT_color_buffer_half_float"))) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
					Z.checkFramebufferStatus(Z.FRAMEBUFFER) === Z.FRAMEBUFFER_COMPLETE ? e >= 0 && e <= t.width - r && n >= 0 && n <= t.height - i && Z.readPixels(e, n, r, i, Jt.convert(h), Jt.convert(u), o) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
				} finally {
					s && Z.bindFramebuffer(Z.FRAMEBUFFER, ut)
				}
			}
		}, this.copyFramebufferToTexture = function(t, e, n) {
			var r = e.image.width,
				i = e.image.height,
				o = Jt.convert(e.format);
			this.setTexture2D(e, 0), Z.copyTexImage2D(Z.TEXTURE_2D, n || 0, o, t.x, t.y, r, i, 0)
		}, this.copyTextureToTexture = function(t, e, n, r) {
			var i = e.image.width,
				o = e.image.height,
				a = Jt.convert(n.format),
				s = Jt.convert(n.type);
			this.setTexture2D(n, 0), e.isDataTexture ? Z.texSubImage2D(Z.TEXTURE_2D, r || 0, t.x, t.y, i, o, a, s, e.image.data) : Z.texSubImage2D(Z.TEXTURE_2D, r || 0, t.x, t.y, a, s, e.image)
		}
	}

	function Pe(t, e) {
		this.name = "", this.color = new y(t), this.density = void 0 !== e ? e : 25e-5
	}

	function Ce(t, e, n) {
		this.name = "", this.color = new y(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== n ? n : 1e3
	}

	function Oe() {
		M.call(this), this.type = "Scene", this.background = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
	}

	function Ie(t) {
		W.call(this), this.type = "SpriteMaterial", this.color = new y(16777215), this.map = null, this.rotation = 0, this.fog = !1, this.lights = !1, this.setValues(t)
	}

	function Ne(t) {
		M.call(this), this.type = "Sprite", this.material = void 0 !== t ? t : new Ie, this.center = new i(.5, .5)
	}

	function De() {
		M.call(this), this.type = "LOD", Object.defineProperties(this, {
			levels: {
				enumerable: !0,
				value: []
			}
		})
	}

	function Ue(t, e) {
		if(t = t || [], this.bones = t.slice(0), this.boneMatrices = new Float32Array(16 * this.bones.length), void 0 === e) this.calculateInverses();
		else if(this.bones.length === e.length) this.boneInverses = e.slice(0);
		else {
			console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [];
			for(var n = 0, r = this.bones.length; n < r; n++) this.boneInverses.push(new o)
		}
	}

	function Be() {
		M.call(this), this.type = "Bone"
	}

	function Fe(t, e) {
		Q.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new o, this.bindMatrixInverse = new o;
		var n = this.initBones(),
			r = new Ue(n);
		this.bind(r, this.matrixWorld), this.normalizeSkinWeights()
	}

	function ze(t) {
		W.call(this), this.type = "LineBasicMaterial", this.color = new y(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.lights = !1, this.setValues(t)
	}

	function Ge(t, e, n) {
		if(1 === n) return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."), new He(t, e);
		M.call(this), this.type = "Line", this.geometry = void 0 !== t ? t : new G, this.material = void 0 !== e ? e : new ze({
			color: 16777215 * Math.random()
		})
	}

	function He(t, e) {
		Ge.call(this, t, e), this.type = "LineSegments"
	}

	function Ve(t, e) {
		Ge.call(this, t, e), this.type = "LineLoop"
	}

	function ke(t) {
		W.call(this), this.type = "PointsMaterial", this.color = new y(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.lights = !1, this.setValues(t)
	}

	function je(t, e) {
		M.call(this), this.type = "Points", this.geometry = void 0 !== t ? t : new G, this.material = void 0 !== e ? e : new ke({
			color: 16777215 * Math.random()
		})
	}

	function We() {
		M.call(this), this.type = "Group"
	}

	function Xe(t, e, n, r, i, o, a, s, c) {
		h.call(this, t, e, n, r, i, o, a, s, c), this.generateMipmaps = !1
	}

	function qe(t, e, n, r, i, o, a, s, c, u, l, d) {
		h.call(this, null, o, a, s, c, u, r, i, l, d), this.image = {
			width: e,
			height: n
		}, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
	}

	function Ye(t, e, n, r, i, o, a, s, c, u) {
		if((u = void 0 !== u ? u : Gs) !== Gs && u !== Hs) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
		void 0 === n && u === Gs && (n = Ts), void 0 === n && u === Hs && (n = Is), h.call(this, null, r, i, o, a, s, u, n, c), this.image = {
			width: t,
			height: e
		}, this.magFilter = void 0 !== a ? a : gs, this.minFilter = void 0 !== s ? s : gs, this.flipY = !1, this.generateMipmaps = !1
	}

	function Ze(t) {
		G.call(this), this.type = "WireframeGeometry";
		var e, n, r, i, o, a, c, h, u, l, d = [],
			p = [0, 0],
			f = {},
			m = ["a", "b", "c"];
		if(t && t.isGeometry) {
			var g = t.faces;
			for(e = 0, r = g.length; e < r; e++) {
				var v = g[e];
				for(n = 0; n < 3; n++) c = v[m[n]], h = v[m[(n + 1) % 3]], p[0] = Math.min(c, h), p[1] = Math.max(c, h), u = p[0] + "," + p[1], void 0 === f[u] && (f[u] = {
					index1: p[0],
					index2: p[1]
				})
			}
			for(u in f) a = f[u], l = t.vertices[a.index1], d.push(l.x, l.y, l.z), l = t.vertices[a.index2], d.push(l.x, l.y, l.z)
		} else if(t && t.isBufferGeometry) {
			var y, x, w, b, _, M, E, T;
			if(l = new s, null !== t.index) {
				for(y = t.attributes.position, x = t.index, w = t.groups, 0 === w.length && (w = [{
						start: 0,
						count: x.count,
						materialIndex: 0
					}]), i = 0, o = w.length; i < o; ++i)
					for(b = w[i], _ = b.start, M = b.count, e = _, r = _ + M; e < r; e += 3)
						for(n = 0; n < 3; n++) c = x.getX(e + n), h = x.getX(e + (n + 1) % 3), p[0] = Math.min(c, h), p[1] = Math.max(c, h), u = p[0] + "," + p[1], void 0 === f[u] && (f[u] = {
							index1: p[0],
							index2: p[1]
						});
				for(u in f) a = f[u], l.fromBufferAttribute(y, a.index1), d.push(l.x, l.y, l.z), l.fromBufferAttribute(y, a.index2), d.push(l.x, l.y, l.z)
			} else
				for(y = t.attributes.position, e = 0, r = y.count / 3; e < r; e++)
					for(n = 0; n < 3; n++) E = 3 * e + n, l.fromBufferAttribute(y, E), d.push(l.x, l.y, l.z), T = 3 * e + (n + 1) % 3, l.fromBufferAttribute(y, T), d.push(l.x, l.y, l.z)
		}
		this.addAttribute("position", new U(d, 3))
	}

	function Je(t, e, n) {
		A.call(this), this.type = "ParametricGeometry", this.parameters = {
			func: t,
			slices: e,
			stacks: n
		}, this.fromBufferGeometry(new Qe(t, e, n)), this.mergeVertices()
	}

	function Qe(t, e, n) {
		G.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
			func: t,
			slices: e,
			stacks: n
		};
		var r, i, o = [],
			a = [],
			c = [],
			h = [],
			u = new s,
			l = new s,
			d = new s,
			p = new s,
			f = new s;
		t.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
		var m = e + 1;
		for(r = 0; r <= n; r++) {
			var g = r / n;
			for(i = 0; i <= e; i++) {
				var v = i / e;
				t(v, g, l), a.push(l.x, l.y, l.z), v - 1e-5 >= 0 ? (t(v - 1e-5, g, d), p.subVectors(l, d)) : (t(v + 1e-5, g, d), p.subVectors(d, l)), g - 1e-5 >= 0 ? (t(v, g - 1e-5, d), f.subVectors(l, d)) : (t(v, g + 1e-5, d), f.subVectors(d, l)), u.crossVectors(p, f).normalize(), c.push(u.x, u.y, u.z), h.push(v, g)
			}
		}
		for(r = 0; r < n; r++)
			for(i = 0; i < e; i++) {
				var y = r * m + i,
					x = r * m + i + 1,
					w = (r + 1) * m + i + 1,
					b = (r + 1) * m + i;
				o.push(y, x, b), o.push(x, w, b)
			}
		this.setIndex(o), this.addAttribute("position", new U(a, 3)), this.addAttribute("normal", new U(c, 3)), this.addAttribute("uv", new U(h, 2))
	}

	function Ke(t, e, n, r) {
		A.call(this), this.type = "PolyhedronGeometry", this.parameters = {
			vertices: t,
			indices: e,
			radius: n,
			detail: r
		}, this.fromBufferGeometry(new $e(t, e, n, r)), this.mergeVertices()
	}

	function $e(t, e, n, r) {
		function o(t, e, n, r) {
			var i, o, a = Math.pow(2, r),
				s = [];
			for(i = 0; i <= a; i++) {
				s[i] = [];
				var h = t.clone().lerp(n, i / a),
					u = e.clone().lerp(n, i / a),
					l = a - i;
				for(o = 0; o <= l; o++) s[i][o] = 0 === o && i === a ? h : h.clone().lerp(u, o / l)
			}
			for(i = 0; i < a; i++)
				for(o = 0; o < 2 * (a - i) - 1; o++) {
					var d = Math.floor(o / 2);
					o % 2 == 0 ? (c(s[i][d + 1]), c(s[i + 1][d]), c(s[i][d])) : (c(s[i][d + 1]), c(s[i + 1][d + 1]), c(s[i + 1][d]))
				}
		}

		function a() {
			for(var t = 0; t < m.length; t += 6) {
				var e = m[t + 0],
					n = m[t + 2],
					r = m[t + 4],
					i = Math.max(e, n, r),
					o = Math.min(e, n, r);
				i > .9 && o < .1 && (e < .2 && (m[t + 0] += 1), n < .2 && (m[t + 2] += 1), r < .2 && (m[t + 4] += 1))
			}
		}

		function c(t) {
			f.push(t.x, t.y, t.z)
		}

		function h(e, n) {
			var r = 3 * e;
			n.x = t[r + 0], n.y = t[r + 1], n.z = t[r + 2]
		}

		function u() {
			for(var t = new s, e = new s, n = new s, r = new s, o = new i, a = new i, c = new i, h = 0, u = 0; h < f.length; h += 9, u += 6) {
				t.set(f[h + 0], f[h + 1], f[h + 2]), e.set(f[h + 3], f[h + 4], f[h + 5]), n.set(f[h + 6], f[h + 7], f[h + 8]), o.set(m[u + 0], m[u + 1]), a.set(m[u + 2], m[u + 3]), c.set(m[u + 4], m[u + 5]), r.copy(t).add(e).add(n).divideScalar(3);
				var p = d(r);
				l(o, u + 0, t, p), l(a, u + 2, e, p), l(c, u + 4, n, p)
			}
		}

		function l(t, e, n, r) {
			r < 0 && 1 === t.x && (m[e] = t.x - 1), 0 === n.x && 0 === n.z && (m[e] = r / 2 / Math.PI + .5)
		}

		function d(t) {
			return Math.atan2(t.z, -t.x)
		}

		function p(t) {
			return Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z))
		}
		G.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
			vertices: t,
			indices: e,
			radius: n,
			detail: r
		}, n = n || 1, r = r || 0;
		var f = [],
			m = [];
		! function(t) {
			for(var n = new s, r = new s, i = new s, a = 0; a < e.length; a += 3) h(e[a + 0], n), h(e[a + 1], r), h(e[a + 2], i), o(n, r, i, t)
		}(r),
		function(t) {
			for(var e = new s, n = 0; n < f.length; n += 3) e.x = f[n + 0], e.y = f[n + 1], e.z = f[n + 2], e.normalize().multiplyScalar(t), f[n + 0] = e.x, f[n + 1] = e.y, f[n + 2] = e.z
		}(n),
		function() {
			for(var t = new s, e = 0; e < f.length; e += 3) {
				t.x = f[e + 0], t.y = f[e + 1], t.z = f[e + 2];
				var n = d(t) / 2 / Math.PI + .5,
					r = p(t) / Math.PI + .5;
				m.push(n, 1 - r)
			}
			u(), a()
		}(), this.addAttribute("position", new U(f, 3)), this.addAttribute("normal", new U(f.slice(), 3)), this.addAttribute("uv", new U(m, 2)), 0 === r ? this.computeVertexNormals() : this.normalizeNormals()
	}

	function tn(t, e) {
		A.call(this), this.type = "TetrahedronGeometry", this.parameters = {
			radius: t,
			detail: e
		}, this.fromBufferGeometry(new en(t, e)), this.mergeVertices()
	}

	function en(t, e) {
		var n = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
			r = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
		$e.call(this, n, r, t, e), this.type = "TetrahedronBufferGeometry", this.parameters = {
			radius: t,
			detail: e
		}
	}

	function nn(t, e) {
		A.call(this), this.type = "OctahedronGeometry", this.parameters = {
			radius: t,
			detail: e
		}, this.fromBufferGeometry(new rn(t, e)), this.mergeVertices()
	}

	function rn(t, e) {
		var n = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
			r = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
		$e.call(this, n, r, t, e), this.type = "OctahedronBufferGeometry", this.parameters = {
			radius: t,
			detail: e
		}
	}

	function on(t, e) {
		A.call(this), this.type = "IcosahedronGeometry", this.parameters = {
			radius: t,
			detail: e
		}, this.fromBufferGeometry(new an(t, e)), this.mergeVertices()
	}

	function an(t, e) {
		var n = (1 + Math.sqrt(5)) / 2,
			r = [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1],
			i = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
		$e.call(this, r, i, t, e), this.type = "IcosahedronBufferGeometry", this.parameters = {
			radius: t,
			detail: e
		}
	}

	function sn(t, e) {
		A.call(this), this.type = "DodecahedronGeometry", this.parameters = {
			radius: t,
			detail: e
		}, this.fromBufferGeometry(new cn(t, e)), this.mergeVertices()
	}

	function cn(t, e) {
		var n = (1 + Math.sqrt(5)) / 2,
			r = 1 / n,
			i = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -r, -n, 0, -r, n, 0, r, -n, 0, r, n, -r, -n, 0, -r, n, 0, r, -n, 0, r, n, 0, -n, 0, -r, n, 0, -r, -n, 0, r, n, 0, r],
			o = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
		$e.call(this, i, o, t, e), this.type = "DodecahedronBufferGeometry", this.parameters = {
			radius: t,
			detail: e
		}
	}

	function hn(t, e, n, r, i, o) {
		A.call(this), this.type = "TubeGeometry", this.parameters = {
			path: t,
			tubularSegments: e,
			radius: n,
			radialSegments: r,
			closed: i
		}, void 0 !== o && console.warn("THREE.TubeGeometry: taper has been removed.");
		var a = new un(t, e, n, r, i);
		this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals, this.fromBufferGeometry(a), this.mergeVertices()
	}

	function un(t, e, n, r, o) {
		function a(i) {
			g = t.getPointAt(i / e, g);
			var o = u.normals[i],
				a = u.binormals[i];
			for(d = 0; d <= r; d++) {
				var s = d / r * Math.PI * 2,
					c = Math.sin(s),
					h = -Math.cos(s);
				f.x = h * o.x + c * a.x, f.y = h * o.y + c * a.y, f.z = h * o.z + c * a.z, f.normalize(), y.push(f.x, f.y, f.z), p.x = g.x + n * f.x, p.y = g.y + n * f.y, p.z = g.z + n * f.z, v.push(p.x, p.y, p.z)
			}
		}

		function c() {
			for(d = 1; d <= e; d++)
				for(l = 1; l <= r; l++) {
					var t = (r + 1) * (d - 1) + (l - 1),
						n = (r + 1) * d + (l - 1),
						i = (r + 1) * d + l,
						o = (r + 1) * (d - 1) + l;
					w.push(t, n, o), w.push(n, i, o)
				}
		}

		function h() {
			for(l = 0; l <= e; l++)
				for(d = 0; d <= r; d++) m.x = l / e, m.y = d / r, x.push(m.x, m.y)
		}
		G.call(this), this.type = "TubeBufferGeometry", this.parameters = {
			path: t,
			tubularSegments: e,
			radius: n,
			radialSegments: r,
			closed: o
		}, e = e || 64, n = n || 1, r = r || 8, o = o || !1;
		var u = t.computeFrenetFrames(e, o);
		this.tangents = u.tangents, this.normals = u.normals, this.binormals = u.binormals;
		var l, d, p = new s,
			f = new s,
			m = new i,
			g = new s,
			v = [],
			y = [],
			x = [],
			w = [];
		! function() {
			for(l = 0; l < e; l++) a(l);
			a(!1 === o ? e : 0), h(), c()
		}(), this.setIndex(w), this.addAttribute("position", new U(v, 3)), this.addAttribute("normal", new U(y, 3)), this.addAttribute("uv", new U(x, 2))
	}

	function ln(t, e, n, r, i, o, a) {
		A.call(this), this.type = "TorusKnotGeometry", this.parameters = {
			radius: t,
			tube: e,
			tubularSegments: n,
			radialSegments: r,
			p: i,
			q: o
		}, void 0 !== a && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new dn(t, e, n, r, i, o)), this.mergeVertices()
	}

	function dn(t, e, n, r, i, o) {
		function a(t, e, n, r, i) {
			var o = Math.cos(t),
				a = Math.sin(t),
				s = n / e * t,
				c = Math.cos(s);
			i.x = r * (2 + c) * .5 * o, i.y = r * (2 + c) * a * .5, i.z = r * Math.sin(s) * .5
		}
		G.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
			radius: t,
			tube: e,
			tubularSegments: n,
			radialSegments: r,
			p: i,
			q: o
		}, t = t || 1, e = e || .4, n = Math.floor(n) || 64, r = Math.floor(r) || 8, i = i || 2, o = o || 3;
		var c, h, u = [],
			l = [],
			d = [],
			p = [],
			f = new s,
			m = new s,
			g = new s,
			v = new s,
			y = new s,
			x = new s,
			w = new s;
		for(c = 0; c <= n; ++c) {
			var b = c / n * i * Math.PI * 2;
			for(a(b, i, o, t, g), a(b + .01, i, o, t, v), x.subVectors(v, g), w.addVectors(v, g), y.crossVectors(x, w), w.crossVectors(y, x), y.normalize(), w.normalize(), h = 0; h <= r; ++h) {
				var _ = h / r * Math.PI * 2,
					M = -e * Math.cos(_),
					E = e * Math.sin(_);
				f.x = g.x + (M * w.x + E * y.x), f.y = g.y + (M * w.y + E * y.y), f.z = g.z + (M * w.z + E * y.z), l.push(f.x, f.y, f.z), m.subVectors(f, g).normalize(), d.push(m.x, m.y, m.z), p.push(c / n), p.push(h / r)
			}
		}
		for(h = 1; h <= n; h++)
			for(c = 1; c <= r; c++) {
				var T = (r + 1) * (h - 1) + (c - 1),
					S = (r + 1) * h + (c - 1),
					A = (r + 1) * h + c,
					R = (r + 1) * (h - 1) + c;
				u.push(T, S, R), u.push(S, A, R)
			}
		this.setIndex(u), this.addAttribute("position", new U(l, 3)), this.addAttribute("normal", new U(d, 3)), this.addAttribute("uv", new U(p, 2))
	}

	function pn(t, e, n, r, i) {
		A.call(this), this.type = "TorusGeometry", this.parameters = {
			radius: t,
			tube: e,
			radialSegments: n,
			tubularSegments: r,
			arc: i
		}, this.fromBufferGeometry(new fn(t, e, n, r, i)), this.mergeVertices()
	}

	function fn(t, e, n, r, i) {
		G.call(this), this.type = "TorusBufferGeometry", this.parameters = {
			radius: t,
			tube: e,
			radialSegments: n,
			tubularSegments: r,
			arc: i
		}, t = t || 1, e = e || .4, n = Math.floor(n) || 8, r = Math.floor(r) || 6, i = i || 2 * Math.PI;
		var o, a, c = [],
			h = [],
			u = [],
			l = [],
			d = new s,
			p = new s,
			f = new s;
		for(o = 0; o <= n; o++)
			for(a = 0; a <= r; a++) {
				var m = a / r * i,
					g = o / n * Math.PI * 2;
				p.x = (t + e * Math.cos(g)) * Math.cos(m), p.y = (t + e * Math.cos(g)) * Math.sin(m), p.z = e * Math.sin(g), h.push(p.x, p.y, p.z), d.x = t * Math.cos(m), d.y = t * Math.sin(m), f.subVectors(p, d).normalize(), u.push(f.x, f.y, f.z), l.push(a / r), l.push(o / n)
			}
		for(o = 1; o <= n; o++)
			for(a = 1; a <= r; a++) {
				var v = (r + 1) * o + a - 1,
					y = (r + 1) * (o - 1) + a - 1,
					x = (r + 1) * (o - 1) + a,
					w = (r + 1) * o + a;
				c.push(v, y, w), c.push(y, x, w)
			}
		this.setIndex(c), this.addAttribute("position", new U(h, 3)), this.addAttribute("normal", new U(u, 3)), this.addAttribute("uv", new U(l, 2))
	}

	function mn(t, e, n, r, i) {
		var o, a;
		if(i === Vn(t, e, n, r) > 0)
			for(o = e; o < n; o += r) a = zn(o, t[o], t[o + 1], a);
		else
			for(o = n - r; o >= e; o -= r) a = zn(o, t[o], t[o + 1], a);
		return a && In(a, a.next) && (Gn(a), a = a.next), a
	}

	function gn(t, e) {
		if(!t) return t;
		e || (e = t);
		var n, r = t;
		do {
			if(n = !1, r.steiner || !In(r, r.next) && 0 !== On(r.prev, r, r.next)) r = r.next;
			else {
				if(Gn(r), (r = e = r.prev) === r.next) break;
				n = !0
			}
		} while (n || r !== e);
		return e
	}

	function vn(t, e, n, r, i, o, a) {
		if(t) {
			!a && o && Sn(t, r, i, o);
			for(var s, c, h = t; t.prev !== t.next;)
				if(s = t.prev, c = t.next, o ? xn(t, r, i, o) : yn(t)) e.push(s.i / n), e.push(t.i / n), e.push(c.i / n), Gn(t), t = c.next, h = c.next;
				else if((t = c) === h) {
				a ? 1 === a ? (t = wn(t, e, n), vn(t, e, n, r, i, o, 2)) : 2 === a && bn(t, e, n, r, i, o) : vn(gn(t), e, n, r, i, o, 1);
				break
			}
		}
	}

	function yn(t) {
		var e = t.prev,
			n = t,
			r = t.next;
		if(On(e, n, r) >= 0) return !1;
		for(var i = t.next.next; i !== t.prev;) {
			if(Pn(e.x, e.y, n.x, n.y, r.x, r.y, i.x, i.y) && On(i.prev, i, i.next) >= 0) return !1;
			i = i.next
		}
		return !0
	}

	function xn(t, e, n, r) {
		var i = t.prev,
			o = t,
			a = t.next;
		if(On(i, o, a) >= 0) return !1;
		for(var s = i.x < o.x ? i.x < a.x ? i.x : a.x : o.x < a.x ? o.x : a.x, c = i.y < o.y ? i.y < a.y ? i.y : a.y : o.y < a.y ? o.y : a.y, h = i.x > o.x ? i.x > a.x ? i.x : a.x : o.x > a.x ? o.x : a.x, u = i.y > o.y ? i.y > a.y ? i.y : a.y : o.y > a.y ? o.y : a.y, l = Rn(s, c, e, n, r), d = Rn(h, u, e, n, r), p = t.nextZ; p && p.z <= d;) {
			if(p !== t.prev && p !== t.next && Pn(i.x, i.y, o.x, o.y, a.x, a.y, p.x, p.y) && On(p.prev, p, p.next) >= 0) return !1;
			p = p.nextZ
		}
		for(p = t.prevZ; p && p.z >= l;) {
			if(p !== t.prev && p !== t.next && Pn(i.x, i.y, o.x, o.y, a.x, a.y, p.x, p.y) && On(p.prev, p, p.next) >= 0) return !1;
			p = p.prevZ
		}
		return !0
	}

	function wn(t, e, n) {
		var r = t;
		do {
			var i = r.prev,
				o = r.next.next;
			!In(i, o) && Nn(i, r, r.next, o) && Un(i, o) && Un(o, i) && (e.push(i.i / n), e.push(r.i / n), e.push(o.i / n), Gn(r), Gn(r.next), r = t = o), r = r.next
		} while (r !== t);
		return r
	}

	function bn(t, e, n, r, i, o) {
		var a = t;
		do {
			for(var s = a.next.next; s !== a.prev;) {
				if(a.i !== s.i && Cn(a, s)) {
					var c = Fn(a, s);
					return a = gn(a, a.next), c = gn(c, c.next), vn(a, e, n, r, i, o), void vn(c, e, n, r, i, o)
				}
				s = s.next
			}
			a = a.next
		} while (a !== t)
	}

	function _n(t, e, n, r) {
		var i, o, a, s, c, h = [];
		for(i = 0, o = e.length; i < o; i++) a = e[i] * r, s = i < o - 1 ? e[i + 1] * r : t.length, c = mn(t, a, s, r, !1), c === c.next && (c.steiner = !0), h.push(Ln(c));
		for(h.sort(Mn), i = 0; i < h.length; i++) En(h[i], n), n = gn(n, n.next);
		return n
	}

	function Mn(t, e) {
		return t.x - e.x
	}

	function En(t, e) {
		if(e = Tn(t, e)) {
			var n = Fn(e, t);
			gn(n, n.next)
		}
	}

	function Tn(t, e) {
		var n, r = e,
			i = t.x,
			o = t.y,
			a = -1 / 0;
		do {
			if(o <= r.y && o >= r.next.y && r.next.y !== r.y) {
				var s = r.x + (o - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
				if(s <= i && s > a) {
					if(a = s, s === i) {
						if(o === r.y) return r;
						if(o === r.next.y) return r.next
					}
					n = r.x < r.next.x ? r : r.next
				}
			}
			r = r.next
		} while (r !== e);
		if(!n) return null;
		if(i === a) return n.prev;
		var c, h = n,
			u = n.x,
			l = n.y,
			d = 1 / 0;
		for(r = n.next; r !== h;) i >= r.x && r.x >= u && i !== r.x && Pn(o < l ? i : a, o, u, l, o < l ? a : i, o, r.x, r.y) && ((c = Math.abs(o - r.y) / (i - r.x)) < d || c === d && r.x > n.x) && Un(r, t) && (n = r, d = c), r = r.next;
		return n
	}

	function Sn(t, e, n, r) {
		var i = t;
		do {
			null === i.z && (i.z = Rn(i.x, i.y, e, n, r)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next
		} while (i !== t);
		i.prevZ.nextZ = null, i.prevZ = null, An(i)
	}

	function An(t) {
		var e, n, r, i, o, a, s, c, h = 1;
		do {
			for(n = t, t = null, o = null, a = 0; n;) {
				for(a++, r = n, s = 0, e = 0; e < h && (s++, r = r.nextZ); e++);
				for(c = h; s > 0 || c > 0 && r;) 0 !== s && (0 === c || !r || n.z <= r.z) ? (i = n, n = n.nextZ, s--) : (i = r, r = r.nextZ, c--), o ? o.nextZ = i : t = i, i.prevZ = o, o = i;
				n = r
			}
			o.nextZ = null, h *= 2
		} while (a > 1);
		return t
	}

	function Rn(t, e, n, r, i) {
		return t = 32767 * (t - n) * i, e = 32767 * (e - r) * i, t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t | e << 1
	}

	function Ln(t) {
		var e = t,
			n = t;
		do {
			e.x < n.x && (n = e), e = e.next
		} while (e !== t);
		return n
	}

	function Pn(t, e, n, r, i, o, a, s) {
		return(i - a) * (e - s) - (t - a) * (o - s) >= 0 && (t - a) * (r - s) - (n - a) * (e - s) >= 0 && (n - a) * (o - s) - (i - a) * (r - s) >= 0
	}

	function Cn(t, e) {
		return t.next.i !== e.i && t.prev.i !== e.i && !Dn(t, e) && Un(t, e) && Un(e, t) && Bn(t, e)
	}

	function On(t, e, n) {
		return(e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)
	}

	function In(t, e) {
		return t.x === e.x && t.y === e.y
	}

	function Nn(t, e, n, r) {
		return !!(In(t, e) && In(n, r) || In(t, r) && In(n, e)) || On(t, e, n) > 0 != On(t, e, r) > 0 && On(n, r, t) > 0 != On(n, r, e) > 0
	}

	function Dn(t, e) {
		var n = t;
		do {
			if(n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && Nn(n, n.next, t, e)) return !0;
			n = n.next
		} while (n !== t);
		return !1
	}

	function Un(t, e) {
		return On(t.prev, t, t.next) < 0 ? On(t, e, t.next) >= 0 && On(t, t.prev, e) >= 0 : On(t, e, t.prev) < 0 || On(t, t.next, e) < 0
	}

	function Bn(t, e) {
		var n = t,
			r = !1,
			i = (t.x + e.x) / 2,
			o = (t.y + e.y) / 2;
		do {
			n.y > o != n.next.y > o && n.next.y !== n.y && i < (n.next.x - n.x) * (o - n.y) / (n.next.y - n.y) + n.x && (r = !r), n = n.next
		} while (n !== t);
		return r
	}

	function Fn(t, e) {
		var n = new Hn(t.i, t.x, t.y),
			r = new Hn(e.i, e.x, e.y),
			i = t.next,
			o = e.prev;
		return t.next = e, e.prev = t, n.next = i, i.prev = n, r.next = n, n.prev = r, o.next = r, r.prev = o, r
	}

	function zn(t, e, n, r) {
		var i = new Hn(t, e, n);
		return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i
	}

	function Gn(t) {
		t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
	}

	function Hn(t, e, n) {
		this.i = t, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
	}

	function Vn(t, e, n, r) {
		for(var i = 0, o = e, a = n - r; o < n; o += r) i += (t[a] - t[o]) * (t[o + 1] + t[a + 1]), a = o;
		return i
	}

	function kn(t) {
		var e = t.length;
		e > 2 && t[e - 1].equals(t[0]) && t.pop()
	}

	function jn(t, e) {
		for(var n = 0; n < e.length; n++) t.push(e[n].x), t.push(e[n].y)
	}

	function Wn(t, e) {
		A.call(this), this.type = "ExtrudeGeometry", this.parameters = {
			shapes: t,
			options: e
		}, this.fromBufferGeometry(new Xn(t, e)), this.mergeVertices()
	}

	function Xn(t, e) {
		G.call(this), this.type = "ExtrudeBufferGeometry", this.parameters = {
			shapes: t,
			options: e
		}, t = Array.isArray(t) ? t : [t];
		for(var n = this, r = [], o = [], a = 0, c = t.length; a < c; a++) {
			var h = t[a];
			! function(t) {
				function a(t, e, n) {
					return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(n).add(t)
				}

				function c(t, e, n) {
					var r, o, a, s = t.x - e.x,
						c = t.y - e.y,
						h = n.x - t.x,
						u = n.y - t.y,
						l = s * s + c * c,
						d = s * u - c * h;
					if(Math.abs(d) > Number.EPSILON) {
						var p = Math.sqrt(l),
							f = Math.sqrt(h * h + u * u),
							m = e.x - c / p,
							g = e.y + s / p,
							v = n.x - u / f,
							y = n.y + h / f,
							x = ((v - m) * u - (y - g) * h) / (s * u - c * h);
						r = m + s * x - t.x, o = g + c * x - t.y;
						var w = r * r + o * o;
						if(w <= 2) return new i(r, o);
						a = Math.sqrt(w / 2)
					} else {
						var b = !1;
						s > Number.EPSILON ? h > Number.EPSILON && (b = !0) : s < -Number.EPSILON ? h < -Number.EPSILON && (b = !0) : Math.sign(c) === Math.sign(u) && (b = !0), b ? (r = -c, o = s, a = Math.sqrt(l)) : (r = s, o = c, a = Math.sqrt(l / 2))
					}
					return new i(r / a, o / a)
				}

				function h(t, e) {
					var n, r;
					for(Y = t.length; --Y >= 0;) {
						n = Y, (r = Y - 1) < 0 && (r = t.length - 1);
						var i = 0,
							o = v + 2 * _;
						for(i = 0; i < o; i++) {
							var a = W * i,
								s = W * (i + 1);
							d(e + n + a, e + r + a, e + r + s, e + n + s)
						}
					}
				}

				function u(t, e, n) {
					m.push(t), m.push(e), m.push(n)
				}

				function l(t, e, i) {
					p(t), p(e), p(i);
					var o = r.length / 3,
						a = E.generateTopUV(n, r, o - 3, o - 2, o - 1);
					f(a[0]), f(a[1]), f(a[2])
				}

				function d(t, e, i, o) {
					p(t), p(e), p(o), p(e), p(i), p(o);
					var a = r.length / 3,
						s = E.generateSideWallUV(n, r, a - 6, a - 3, a - 2, a - 1);
					f(s[0]), f(s[1]), f(s[3]), f(s[1]), f(s[2]), f(s[3])
				}

				function p(t) {
					r.push(m[3 * t + 0]), r.push(m[3 * t + 1]), r.push(m[3 * t + 2])
				}

				function f(t) {
					o.push(t.x), o.push(t.y)
				}
				var m = [],
					g = void 0 !== e.curveSegments ? e.curveSegments : 12,
					v = void 0 !== e.steps ? e.steps : 1,
					y = void 0 !== e.depth ? e.depth : 100,
					x = void 0 === e.bevelEnabled || e.bevelEnabled,
					w = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
					b = void 0 !== e.bevelSize ? e.bevelSize : w - 2,
					_ = void 0 !== e.bevelSegments ? e.bevelSegments : 3,
					M = e.extrudePath,
					E = void 0 !== e.UVGenerator ? e.UVGenerator : nh;
				void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), y = e.amount);
				var T, S, A, R, L, P = !1;
				M && (T = M.getSpacedPoints(v), P = !0, x = !1, S = M.computeFrenetFrames(v, !1), A = new s, R = new s, L = new s), x || (_ = 0, w = 0, b = 0);
				var C, O, I, N = t.extractPoints(g),
					D = N.shape,
					U = N.holes;
				if(!eh.isClockWise(D))
					for(D = D.reverse(), O = 0, I = U.length; O < I; O++) C = U[O], eh.isClockWise(C) && (U[O] = C.reverse());
				var B = eh.triangulateShape(D, U),
					F = D;
				for(O = 0, I = U.length; O < I; O++) C = U[O], D = D.concat(C);
				for(var z, G, H, V, k, j, W = D.length, X = B.length, q = [], Y = 0, Z = F.length, J = Z - 1, Q = Y + 1; Y < Z; Y++, J++, Q++) J === Z && (J = 0), Q === Z && (Q = 0), q[Y] = c(F[Y], F[J], F[Q]);
				var K, $ = [],
					tt = q.concat();
				for(O = 0, I = U.length; O < I; O++) {
					for(C = U[O], K = [], Y = 0, Z = C.length, J = Z - 1, Q = Y + 1; Y < Z; Y++, J++, Q++) J === Z && (J = 0), Q === Z && (Q = 0), K[Y] = c(C[Y], C[J], C[Q]);
					$.push(K), tt = tt.concat(K)
				}
				for(z = 0; z < _; z++) {
					for(H = z / _, V = w * Math.cos(H * Math.PI / 2), G = b * Math.sin(H * Math.PI / 2), Y = 0, Z = F.length; Y < Z; Y++) k = a(F[Y], q[Y], G), u(k.x, k.y, -V);
					for(O = 0, I = U.length; O < I; O++)
						for(C = U[O], K = $[O], Y = 0, Z = C.length; Y < Z; Y++) k = a(C[Y], K[Y], G), u(k.x, k.y, -V)
				}
				for(G = b, Y = 0; Y < W; Y++) k = x ? a(D[Y], tt[Y], G) : D[Y], P ? (R.copy(S.normals[0]).multiplyScalar(k.x), A.copy(S.binormals[0]).multiplyScalar(k.y), L.copy(T[0]).add(R).add(A), u(L.x, L.y, L.z)) : u(k.x, k.y, 0);
				var et;
				for(et = 1; et <= v; et++)
					for(Y = 0; Y < W; Y++) k = x ? a(D[Y], tt[Y], G) : D[Y], P ? (R.copy(S.normals[et]).multiplyScalar(k.x), A.copy(S.binormals[et]).multiplyScalar(k.y), L.copy(T[et]).add(R).add(A), u(L.x, L.y, L.z)) : u(k.x, k.y, y / v * et);
				for(z = _ - 1; z >= 0; z--) {
					for(H = z / _, V = w * Math.cos(H * Math.PI / 2), G = b * Math.sin(H * Math.PI / 2), Y = 0, Z = F.length; Y < Z; Y++) k = a(F[Y], q[Y], G), u(k.x, k.y, y + V);
					for(O = 0, I = U.length; O < I; O++)
						for(C = U[O], K = $[O], Y = 0, Z = C.length; Y < Z; Y++) k = a(C[Y], K[Y], G), P ? u(k.x, k.y + T[v - 1].y, T[v - 1].x + V) : u(k.x, k.y, y + V)
				}! function() {
					var t = r.length / 3;
					if(x) {
						var e = 0,
							i = W * e;
						for(Y = 0; Y < X; Y++) j = B[Y], l(j[2] + i, j[1] + i, j[0] + i);
						for(e = v + 2 * _, i = W * e, Y = 0; Y < X; Y++) j = B[Y], l(j[0] + i, j[1] + i, j[2] + i)
					} else {
						for(Y = 0; Y < X; Y++) j = B[Y], l(j[2], j[1], j[0]);
						for(Y = 0; Y < X; Y++) j = B[Y], l(j[0] + W * v, j[1] + W * v, j[2] + W * v)
					}
					n.addGroup(t, r.length / 3 - t, 0)
				}(),
				function() {
					var t = r.length / 3,
						e = 0;
					for(h(F, e), e += F.length, O = 0, I = U.length; O < I; O++) C = U[O], h(C, e), e += C.length;
					n.addGroup(t, r.length / 3 - t, 1)
				}()
			}(h)
		}
		this.addAttribute("position", new U(r, 3)), this.addAttribute("uv", new U(o, 2)), this.computeVertexNormals()
	}

	function qn(t, e, n) {
		if(n.shapes = [], Array.isArray(t))
			for(var r = 0, i = t.length; r < i; r++) {
				var o = t[r];
				n.shapes.push(o.uuid)
			} else n.shapes.push(t.uuid);
		return void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON()), n
	}

	function Yn(t, e) {
		A.call(this), this.type = "TextGeometry", this.parameters = {
			text: t,
			parameters: e
		}, this.fromBufferGeometry(new Zn(t, e)), this.mergeVertices()
	}

	function Zn(t, e) {
		e = e || {};
		var n = e.font;
		if(!n || !n.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new A;
		var r = n.generateShapes(t, e.size, e.curveSegments);
		e.depth = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), Xn.call(this, r, e), this.type = "TextBufferGeometry"
	}

	function Jn(t, e, n, r, i, o, a) {
		A.call(this), this.type = "SphereGeometry", this.parameters = {
			radius: t,
			widthSegments: e,
			heightSegments: n,
			phiStart: r,
			phiLength: i,
			thetaStart: o,
			thetaLength: a
		}, this.fromBufferGeometry(new Qn(t, e, n, r, i, o, a)), this.mergeVertices()
	}

	function Qn(t, e, n, r, i, o, a) {
		G.call(this), this.type = "SphereBufferGeometry", this.parameters = {
			radius: t,
			widthSegments: e,
			heightSegments: n,
			phiStart: r,
			phiLength: i,
			thetaStart: o,
			thetaLength: a
		}, t = t || 1, e = Math.max(3, Math.floor(e) || 8), n = Math.max(2, Math.floor(n) || 6), r = void 0 !== r ? r : 0, i = void 0 !== i ? i : 2 * Math.PI, o = void 0 !== o ? o : 0, a = void 0 !== a ? a : Math.PI;
		var c, h, u = o + a,
			l = 0,
			d = [],
			p = new s,
			f = new s,
			m = [],
			g = [],
			v = [],
			y = [];
		for(h = 0; h <= n; h++) {
			var x = [],
				w = h / n;
			for(c = 0; c <= e; c++) {
				var b = c / e;
				p.x = -t * Math.cos(r + b * i) * Math.sin(o + w * a), p.y = t * Math.cos(o + w * a), p.z = t * Math.sin(r + b * i) * Math.sin(o + w * a), g.push(p.x, p.y, p.z), f.set(p.x, p.y, p.z).normalize(), v.push(f.x, f.y, f.z), y.push(b, 1 - w), x.push(l++)
			}
			d.push(x)
		}
		for(h = 0; h < n; h++)
			for(c = 0; c < e; c++) {
				var _ = d[h][c + 1],
					M = d[h][c],
					E = d[h + 1][c],
					T = d[h + 1][c + 1];
				(0 !== h || o > 0) && m.push(_, M, T), (h !== n - 1 || u < Math.PI) && m.push(M, E, T)
			}
		this.setIndex(m), this.addAttribute("position", new U(g, 3)), this.addAttribute("normal", new U(v, 3)), this.addAttribute("uv", new U(y, 2))
	}

	function Kn(t, e, n, r, i, o) {
		A.call(this), this.type = "RingGeometry", this.parameters = {
			innerRadius: t,
			outerRadius: e,
			thetaSegments: n,
			phiSegments: r,
			thetaStart: i,
			thetaLength: o
		}, this.fromBufferGeometry(new $n(t, e, n, r, i, o)), this.mergeVertices()
	}

	function $n(t, e, n, r, o, a) {
		G.call(this), this.type = "RingBufferGeometry", this.parameters = {
			innerRadius: t,
			outerRadius: e,
			thetaSegments: n,
			phiSegments: r,
			thetaStart: o,
			thetaLength: a
		}, t = t || .5, e = e || 1, o = void 0 !== o ? o : 0, a = void 0 !== a ? a : 2 * Math.PI, n = void 0 !== n ? Math.max(3, n) : 8, r = void 0 !== r ? Math.max(1, r) : 1;
		var c, h, u, l = [],
			d = [],
			p = [],
			f = [],
			m = t,
			g = (e - t) / r,
			v = new s,
			y = new i;
		for(h = 0; h <= r; h++) {
			for(u = 0; u <= n; u++) c = o + u / n * a, v.x = m * Math.cos(c), v.y = m * Math.sin(c), d.push(v.x, v.y, v.z), p.push(0, 0, 1), y.x = (v.x / e + 1) / 2, y.y = (v.y / e + 1) / 2, f.push(y.x, y.y);
			m += g
		}
		for(h = 0; h < r; h++) {
			var x = h * (n + 1);
			for(u = 0; u < n; u++) {
				c = u + x;
				var w = c,
					b = c + n + 1,
					_ = c + n + 2,
					M = c + 1;
				l.push(w, b, M), l.push(b, _, M)
			}
		}
		this.setIndex(l), this.addAttribute("position", new U(d, 3)), this.addAttribute("normal", new U(p, 3)), this.addAttribute("uv", new U(f, 2))
	}

	function tr(t, e, n, r) {
		A.call(this), this.type = "LatheGeometry", this.parameters = {
			points: t,
			segments: e,
			phiStart: n,
			phiLength: r
		}, this.fromBufferGeometry(new er(t, e, n, r)), this.mergeVertices()
	}

	function er(t, e, n, r) {
		G.call(this), this.type = "LatheBufferGeometry", this.parameters = {
			points: t,
			segments: e,
			phiStart: n,
			phiLength: r
		}, e = Math.floor(e) || 12, n = n || 0, r = r || 2 * Math.PI, r = Ic.clamp(r, 0, 2 * Math.PI);
		var o, a, c, h = [],
			u = [],
			l = [],
			d = 1 / e,
			p = new s,
			f = new i;
		for(a = 0; a <= e; a++) {
			var m = n + a * d * r,
				g = Math.sin(m),
				v = Math.cos(m);
			for(c = 0; c <= t.length - 1; c++) p.x = t[c].x * g, p.y = t[c].y, p.z = t[c].x * v, u.push(p.x, p.y, p.z), f.x = a / e, f.y = c / (t.length - 1), l.push(f.x, f.y)
		}
		for(a = 0; a < e; a++)
			for(c = 0; c < t.length - 1; c++) {
				o = c + a * t.length;
				var y = o,
					x = o + t.length,
					w = o + t.length + 1,
					b = o + 1;
				h.push(y, x, b), h.push(x, w, b)
			}
		if(this.setIndex(h), this.addAttribute("position", new U(u, 3)), this.addAttribute("uv", new U(l, 2)), this.computeVertexNormals(), r === 2 * Math.PI) {
			var _ = this.attributes.normal.array,
				M = new s,
				E = new s,
				T = new s;
			for(o = e * t.length * 3, a = 0, c = 0; a < t.length; a++, c += 3) M.x = _[c + 0], M.y = _[c + 1], M.z = _[c + 2], E.x = _[o + c + 0], E.y = _[o + c + 1], E.z = _[o + c + 2], T.addVectors(M, E).normalize(), _[c + 0] = _[o + c + 0] = T.x, _[c + 1] = _[o + c + 1] = T.y, _[c + 2] = _[o + c + 2] = T.z
		}
	}

	function nr(t, e) {
		A.call(this), this.type = "ShapeGeometry", "object" == typeof e && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), e = e.curveSegments), this.parameters = {
			shapes: t,
			curveSegments: e
		}, this.fromBufferGeometry(new rr(t, e)), this.mergeVertices()
	}

	function rr(t, e) {
		function n(t) {
			var n, s, h, u = i.length / 3,
				l = t.extractPoints(e),
				d = l.shape,
				p = l.holes;
			if(!1 === eh.isClockWise(d))
				for(d = d.reverse(), n = 0, s = p.length; n < s; n++) h = p[n], !0 === eh.isClockWise(h) && (p[n] = h.reverse());
			var f = eh.triangulateShape(d, p);
			for(n = 0, s = p.length; n < s; n++) h = p[n], d = d.concat(h);
			for(n = 0, s = d.length; n < s; n++) {
				var m = d[n];
				i.push(m.x, m.y, 0), o.push(0, 0, 1), a.push(m.x, m.y)
			}
			for(n = 0, s = f.length; n < s; n++) {
				var g = f[n],
					v = g[0] + u,
					y = g[1] + u,
					x = g[2] + u;
				r.push(v, y, x), c += 3
			}
		}
		G.call(this), this.type = "ShapeBufferGeometry", this.parameters = {
			shapes: t,
			curveSegments: e
		}, e = e || 12;
		var r = [],
			i = [],
			o = [],
			a = [],
			s = 0,
			c = 0;
		if(!1 === Array.isArray(t)) n(t);
		else
			for(var h = 0; h < t.length; h++) n(t[h]), this.addGroup(s, c, h), s += c, c = 0;
		this.setIndex(r), this.addAttribute("position", new U(i, 3)), this.addAttribute("normal", new U(o, 3)), this.addAttribute("uv", new U(a, 2))
	}

	function ir(t, e) {
		if(e.shapes = [], Array.isArray(t))
			for(var n = 0, r = t.length; n < r; n++) {
				var i = t[n];
				e.shapes.push(i.uuid)
			} else e.shapes.push(t.uuid);
		return e
	}

	function or(t, e) {
		G.call(this), this.type = "EdgesGeometry", this.parameters = {
			thresholdAngle: e
		}, e = void 0 !== e ? e : 1;
		var n, r, i, o, a = [],
			s = Math.cos(Ic.DEG2RAD * e),
			c = [0, 0],
			h = {},
			u = ["a", "b", "c"];
		t.isBufferGeometry ? (o = new A, o.fromBufferGeometry(t)) : o = t.clone(), o.mergeVertices(), o.computeFaceNormals();
		for(var l = o.vertices, d = o.faces, p = 0, f = d.length; p < f; p++)
			for(var m = d[p], g = 0; g < 3; g++) n = m[u[g]], r = m[u[(g + 1) % 3]], c[0] = Math.min(n, r), c[1] = Math.max(n, r), i = c[0] + "," + c[1], void 0 === h[i] ? h[i] = {
				index1: c[0],
				index2: c[1],
				face1: p,
				face2: void 0
			} : h[i].face2 = p;
		for(i in h) {
			var v = h[i];
			if(void 0 === v.face2 || d[v.face1].normal.dot(d[v.face2].normal) <= s) {
				var y = l[v.index1];
				a.push(y.x, y.y, y.z), y = l[v.index2], a.push(y.x, y.y, y.z)
			}
		}
		this.addAttribute("position", new U(a, 3))
	}

	function ar(t, e, n, r, i, o, a, s) {
		A.call(this), this.type = "CylinderGeometry", this.parameters = {
			radiusTop: t,
			radiusBottom: e,
			height: n,
			radialSegments: r,
			heightSegments: i,
			openEnded: o,
			thetaStart: a,
			thetaLength: s
		}, this.fromBufferGeometry(new sr(t, e, n, r, i, o, a, s)), this.mergeVertices()
	}

	function sr(t, e, n, r, o, a, c, h) {
		function u(n) {
			var o, a, u, v = new i,
				w = new s,
				b = 0,
				_ = !0 === n ? t : e,
				M = !0 === n ? 1 : -1;
			for(a = g, o = 1; o <= r; o++) p.push(0, y * M, 0), f.push(0, M, 0), m.push(.5, .5), g++;
			for(u = g, o = 0; o <= r; o++) {
				var E = o / r,
					T = E * h + c,
					S = Math.cos(T),
					A = Math.sin(T);
				w.x = _ * A, w.y = y * M, w.z = _ * S, p.push(w.x, w.y, w.z), f.push(0, M, 0), v.x = .5 * S + .5, v.y = .5 * A * M + .5, m.push(v.x, v.y), g++
			}
			for(o = 0; o < r; o++) {
				var R = a + o,
					L = u + o;
				!0 === n ? d.push(L, L + 1, R) : d.push(L + 1, L, R), b += 3
			}
			l.addGroup(x, b, !0 === n ? 1 : 2), x += b
		}
		G.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
			radiusTop: t,
			radiusBottom: e,
			height: n,
			radialSegments: r,
			heightSegments: o,
			openEnded: a,
			thetaStart: c,
			thetaLength: h
		};
		var l = this;
		t = void 0 !== t ? t : 1, e = void 0 !== e ? e : 1, n = n || 1, r = Math.floor(r) || 8, o = Math.floor(o) || 1, a = void 0 !== a && a, c = void 0 !== c ? c : 0, h = void 0 !== h ? h : 2 * Math.PI;
		var d = [],
			p = [],
			f = [],
			m = [],
			g = 0,
			v = [],
			y = n / 2,
			x = 0;
		! function() {
			var i, a, u = new s,
				w = new s,
				b = 0,
				_ = (e - t) / n;
			for(a = 0; a <= o; a++) {
				var M = [],
					E = a / o,
					T = E * (e - t) + t;
				for(i = 0; i <= r; i++) {
					var S = i / r,
						A = S * h + c,
						R = Math.sin(A),
						L = Math.cos(A);
					w.x = T * R, w.y = -E * n + y, w.z = T * L, p.push(w.x, w.y, w.z), u.set(R, _, L).normalize(), f.push(u.x, u.y, u.z), m.push(S, 1 - E), M.push(g++)
				}
				v.push(M)
			}
			for(i = 0; i < r; i++)
				for(a = 0; a < o; a++) {
					var P = v[a][i],
						C = v[a + 1][i],
						O = v[a + 1][i + 1],
						I = v[a][i + 1];
					d.push(P, C, I), d.push(C, O, I), b += 6
				}
			l.addGroup(x, b, 0), x += b
		}(), !1 === a && (t > 0 && u(!0), e > 0 && u(!1)), this.setIndex(d), this.addAttribute("position", new U(p, 3)), this.addAttribute("normal", new U(f, 3)), this.addAttribute("uv", new U(m, 2))
	}

	function cr(t, e, n, r, i, o, a) {
		ar.call(this, 0, t, e, n, r, i, o, a), this.type = "ConeGeometry", this.parameters = {
			radius: t,
			height: e,
			radialSegments: n,
			heightSegments: r,
			openEnded: i,
			thetaStart: o,
			thetaLength: a
		}
	}

	function hr(t, e, n, r, i, o, a) {
		sr.call(this, 0, t, e, n, r, i, o, a), this.type = "ConeBufferGeometry", this.parameters = {
			radius: t,
			height: e,
			radialSegments: n,
			heightSegments: r,
			openEnded: i,
			thetaStart: o,
			thetaLength: a
		}
	}

	function ur(t, e, n, r) {
		A.call(this), this.type = "CircleGeometry", this.parameters = {
			radius: t,
			segments: e,
			thetaStart: n,
			thetaLength: r
		}, this.fromBufferGeometry(new lr(t, e, n, r)), this.mergeVertices()
	}

	function lr(t, e, n, r) {
		G.call(this), this.type = "CircleBufferGeometry", this.parameters = {
			radius: t,
			segments: e,
			thetaStart: n,
			thetaLength: r
		}, t = t || 1, e = void 0 !== e ? Math.max(3, e) : 8, n = void 0 !== n ? n : 0, r = void 0 !== r ? r : 2 * Math.PI;
		var o, a, c = [],
			h = [],
			u = [],
			l = [],
			d = new s,
			p = new i;
		for(h.push(0, 0, 0), u.push(0, 0, 1), l.push(.5, .5), a = 0, o = 3; a <= e; a++, o += 3) {
			var f = n + a / e * r;
			d.x = t * Math.cos(f), d.y = t * Math.sin(f), h.push(d.x, d.y, d.z), u.push(0, 0, 1), p.x = (h[o] / t + 1) / 2, p.y = (h[o + 1] / t + 1) / 2, l.push(p.x, p.y)
		}
		for(o = 1; o <= e; o++) c.push(o, o + 1, 0);
		this.setIndex(c), this.addAttribute("position", new U(h, 3)), this.addAttribute("normal", new U(u, 3)), this.addAttribute("uv", new U(l, 2))
	}

	function dr(t) {
		W.call(this), this.type = "ShadowMaterial", this.color = new y(0), this.transparent = !0, this.setValues(t)
	}

	function pr(t) {
		q.call(this, t), this.type = "RawShaderMaterial"
	}

	function fr(t) {
		W.call(this), this.defines = {
			STANDARD: ""
		}, this.type = "MeshStandardMaterial", this.color = new y(16777215), this.roughness = .5, this.metalness = .5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new y(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new i(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
	}

	function mr(t) {
		fr.call(this), this.defines = {
			PHYSICAL: ""
		}, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearCoat = 0, this.clearCoatRoughness = 0, this.setValues(t)
	}

	function gr(t) {
		W.call(this), this.type = "MeshPhongMaterial", this.color = new y(16777215), this.specular = new y(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new y(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new i(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Qa, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
	}

	function vr(t) {
		gr.call(this), this.defines = {
			TOON: ""
		}, this.type = "MeshToonMaterial", this.gradientMap = null, this.setValues(t)
	}

	function yr(t) {
		W.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new i(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
	}

	function xr(t) {
		W.call(this), this.type = "MeshLambertMaterial", this.color = new y(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new y(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Qa, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
	}

	function wr(t) {
		ze.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t)
	}

	function br(t, e, n) {
		var r = this,
			i = !1,
			o = 0,
			a = 0,
			s = void 0;
		this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function(t) {
			a++, !1 === i && void 0 !== r.onStart && r.onStart(t, o, a), i = !0
		}, this.itemEnd = function(t) {
			o++, void 0 !== r.onProgress && r.onProgress(t, o, a), o === a && (i = !1, void 0 !== r.onLoad && r.onLoad())
		}, this.itemError = function(t) {
			void 0 !== r.onError && r.onError(t)
		}, this.resolveURL = function(t) {
			return s ? s(t) : t
		}, this.setURLModifier = function(t) {
			return s = t, this
		}
	}

	function _r(t) {
		this.manager = void 0 !== t ? t : ah
	}

	function Mr(t) {
		this.manager = void 0 !== t ? t : ah, this._parser = null
	}

	function Er(t) {
		this.manager = void 0 !== t ? t : ah, this._parser = null
	}

	function Tr(t) {
		this.manager = void 0 !== t ? t : ah
	}

	function Sr(t) {
		this.manager = void 0 !== t ? t : ah
	}

	function Ar(t) {
		this.manager = void 0 !== t ? t : ah
	}

	function Rr() {
		this.type = "Curve", this.arcLengthDivisions = 200
	}

	function Lr(t, e, n, r, i, o, a, s) {
		Rr.call(this), this.type = "EllipseCurve", this.aX = t || 0, this.aY = e || 0, this.xRadius = n || 1, this.yRadius = r || 1, this.aStartAngle = i || 0, this.aEndAngle = o || 2 * Math.PI, this.aClockwise = a || !1, this.aRotation = s || 0
	}

	function Pr(t, e, n, r, i, o) {
		Lr.call(this, t, e, n, n, r, i, o), this.type = "ArcCurve"
	}

	function Cr() {
		function t(t, o, a, s) {
			e = t, n = a, r = -3 * t + 3 * o - 2 * a - s, i = 2 * t - 2 * o + a + s
		}
		var e = 0,
			n = 0,
			r = 0,
			i = 0;
		return {
			initCatmullRom: function(e, n, r, i, o) {
				t(n, r, o * (r - e), o * (i - n))
			},
			initNonuniformCatmullRom: function(e, n, r, i, o, a, s) {
				var c = (n - e) / o - (r - e) / (o + a) + (r - n) / a,
					h = (r - n) / a - (i - n) / (a + s) + (i - r) / s;
				c *= a, h *= a, t(n, r, c, h)
			},
			calc: function(t) {
				var o = t * t;
				return e + n * t + r * o + i * (o * t)
			}
		}
	}

	function Or(t, e, n, r) {
		Rr.call(this), this.type = "CatmullRomCurve3", this.points = t || [], this.closed = e || !1, this.curveType = n || "centripetal", this.tension = r || .5
	}

	function Ir(t, e, n, r, i) {
		var o = .5 * (r - e),
			a = .5 * (i - n),
			s = t * t;
		return(2 * n - 2 * r + o + a) * (t * s) + (-3 * n + 3 * r - 2 * o - a) * s + o * t + n
	}

	function Nr(t, e) {
		var n = 1 - t;
		return n * n * e
	}

	function Dr(t, e) {
		return 2 * (1 - t) * t * e
	}

	function Ur(t, e) {
		return t * t * e
	}

	function Br(t, e, n, r) {
		return Nr(t, e) + Dr(t, n) + Ur(t, r)
	}

	function Fr(t, e) {
		var n = 1 - t;
		return n * n * n * e
	}

	function zr(t, e) {
		var n = 1 - t;
		return 3 * n * n * t * e
	}

	function Gr(t, e) {
		return 3 * (1 - t) * t * t * e
	}

	function Hr(t, e) {
		return t * t * t * e
	}

	function Vr(t, e, n, r, i) {
		return Fr(t, e) + zr(t, n) + Gr(t, r) + Hr(t, i)
	}

	function kr(t, e, n, r) {
		Rr.call(this), this.type = "CubicBezierCurve", this.v0 = t || new i, this.v1 = e || new i, this.v2 = n || new i, this.v3 = r || new i
	}

	function jr(t, e, n, r) {
		Rr.call(this), this.type = "CubicBezierCurve3", this.v0 = t || new s, this.v1 = e || new s, this.v2 = n || new s, this.v3 = r || new s
	}

	function Wr(t, e) {
		Rr.call(this), this.type = "LineCurve", this.v1 = t || new i, this.v2 = e || new i
	}

	function Xr(t, e) {
		Rr.call(this), this.type = "LineCurve3", this.v1 = t || new s, this.v2 = e || new s
	}

	function qr(t, e, n) {
		Rr.call(this), this.type = "QuadraticBezierCurve", this.v0 = t || new i, this.v1 = e || new i, this.v2 = n || new i
	}

	function Yr(t, e, n) {
		Rr.call(this), this.type = "QuadraticBezierCurve3", this.v0 = t || new s, this.v1 = e || new s, this.v2 = n || new s
	}

	function Zr(t) {
		Rr.call(this), this.type = "SplineCurve", this.points = t || []
	}

	function Jr() {
		Rr.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1
	}

	function Qr(t) {
		Jr.call(this), this.type = "Path", this.currentPoint = new i, t && this.setFromPoints(t)
	}

	function Kr(t) {
		Qr.call(this, t), this.uuid = Ic.generateUUID(), this.type = "Shape", this.holes = []
	}

	function $r(t, e) {
		M.call(this), this.type = "Light", this.color = new y(t), this.intensity = void 0 !== e ? e : 1, this.receiveShadow = void 0
	}

	function ti(t, e, n) {
		$r.call(this, t, n), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(M.DefaultUp), this.updateMatrix(), this.groundColor = new y(e)
	}

	function ei(t) {
		this.camera = t, this.bias = 0, this.radius = 1, this.mapSize = new i(512, 512), this.map = null, this.matrix = new o
	}

	function ni() {
		ei.call(this, new Te(50, 1, .5, 500))
	}

	function ri(t, e, n, r, i, o) {
		$r.call(this, t, e), this.type = "SpotLight", this.position.copy(M.DefaultUp), this.updateMatrix(), this.target = new M, Object.defineProperty(this, "power", {
			get: function() {
				return this.intensity * Math.PI
			},
			set: function(t) {
				this.intensity = t / Math.PI
			}
		}), this.distance = void 0 !== n ? n : 0, this.angle = void 0 !== r ? r : Math.PI / 3, this.penumbra = void 0 !== i ? i : 0, this.decay = void 0 !== o ? o : 1, this.shadow = new ni
	}

	function ii(t, e, n, r) {
		$r.call(this, t, e), this.type = "PointLight", Object.defineProperty(this, "power", {
			get: function() {
				return 4 * this.intensity * Math.PI
			},
			set: function(t) {
				this.intensity = t / (4 * Math.PI)
			}
		}), this.distance = void 0 !== n ? n : 0, this.decay = void 0 !== r ? r : 1, this.shadow = new ei(new Te(90, 1, .5, 500))
	}

	function oi() {
		ei.call(this, new T(-5, 5, 5, -5, .5, 500))
	}

	function ai(t, e) {
		$r.call(this, t, e), this.type = "DirectionalLight", this.position.copy(M.DefaultUp), this.updateMatrix(), this.target = new M, this.shadow = new oi
	}

	function si(t, e) {
		$r.call(this, t, e), this.type = "AmbientLight", this.castShadow = void 0
	}

	function ci(t, e, n, r) {
		$r.call(this, t, e), this.type = "RectAreaLight", this.width = void 0 !== n ? n : 10, this.height = void 0 !== r ? r : 10
	}

	function hi(t, e, n, r) {
		xi.call(this, t, e, n, r)
	}

	function ui(t, e, n) {
		xi.call(this, t, e, n)
	}

	function li(t, e, n, r) {
		this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== r ? r : new e.constructor(n), this.sampleValues = e, this.valueSize = n
	}

	function di(t, e, n, r) {
		li.call(this, t, e, n, r)
	}

	function pi(t, e, n, r) {
		xi.call(this, t, e, n, r)
	}

	function fi(t, e, n, r) {
		xi.call(this, t, e, n, r)
	}

	function mi(t, e, n, r) {
		xi.call(this, t, e, n, r)
	}

	function gi(t, e, n, r) {
		li.call(this, t, e, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
	}

	function vi(t, e, n, r) {
		li.call(this, t, e, n, r)
	}

	function yi(t, e, n, r) {
		li.call(this, t, e, n, r)
	}

	function xi(t, e, n, r) {
		if(void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
		if(void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
		this.name = t, this.times = ph.convertArray(e, this.TimeBufferType), this.values = ph.convertArray(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation), this.validate(), this.optimize()
	}

	function wi(t, e, n, r) {
		xi.call(this, t, e, n, r)
	}

	function bi(t, e, n) {
		this.name = t, this.tracks = n, this.duration = void 0 !== e ? e : -1, this.uuid = Ic.generateUUID(), this.duration < 0 && this.resetDuration(), this.optimize()
	}

	function _i(t) {
		this.manager = void 0 !== t ? t : ah, this.textures = {}
	}

	function Mi(t) {
		this.manager = void 0 !== t ? t : ah
	}

	function Ei() {}

	function Ti(t) {
		"boolean" == typeof t && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), t = void 0), this.manager = void 0 !== t ? t : ah, this.withCredentials = !1
	}

	function Si(t) {
		this.manager = void 0 !== t ? t : ah, this.texturePath = ""
	}

	function Ai(t) {
		"undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.manager = void 0 !== t ? t : ah, this.options = void 0
	}

	function Ri() {
		this.type = "ShapePath", this.color = new y, this.subPaths = [], this.currentPath = null
	}

	function Li(t) {
		this.type = "Font", this.data = t
	}

	function Pi(t, e, n, r) {
		for(var i = Array.from ? Array.from(t) : String(t).split(""), o = e / r.resolution, a = (r.boundingBox.yMax - r.boundingBox.yMin + r.underlineThickness) * o, s = [], c = 0, h = 0, u = 0; u < i.length; u++) {
			var l = i[u];
			if("\n" === l) c = 0, h -= a;
			else {
				var d = Ci(l, n, o, c, h, r);
				c += d.offsetX, s.push(d.path)
			}
		}
		return s
	}

	function Ci(t, e, n, r, i, o) {
		var a = o.glyphs[t] || o.glyphs["?"];
		if(a) {
			var s, c, h, u, l, d, p, f, m = new Ri;
			if(a.o)
				for(var g = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), v = 0, y = g.length; v < y;) {
					var x = g[v++];
					switch(x) {
						case "m":
							s = g[v++] * n + r, c = g[v++] * n + i, m.moveTo(s, c);
							break;
						case "l":
							s = g[v++] * n + r, c = g[v++] * n + i, m.lineTo(s, c);
							break;
						case "q":
							h = g[v++] * n + r, u = g[v++] * n + i, l = g[v++] * n + r, d = g[v++] * n + i, m.quadraticCurveTo(l, d, h, u);
							break;
						case "b":
							h = g[v++] * n + r, u = g[v++] * n + i, l = g[v++] * n + r, d = g[v++] * n + i, p = g[v++] * n + r, f = g[v++] * n + i, m.bezierCurveTo(l, d, p, f, h, u)
					}
				}
			return {
				offsetX: a.ha * n,
				path: m
			}
		}
	}

	function Oi(t) {
		this.manager = void 0 !== t ? t : ah
	}

	function Ii(t) {
		this.manager = void 0 !== t ? t : ah
	}

	function Ni() {
		this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new Te, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new Te, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1
	}

	function Di(t, e, n) {
		M.call(this), this.type = "CubeCamera";
		var r = new Te(90, 1, t, e);
		r.up.set(0, -1, 0), r.lookAt(new s(1, 0, 0)), this.add(r);
		var i = new Te(90, 1, t, e);
		i.up.set(0, -1, 0), i.lookAt(new s(-1, 0, 0)), this.add(i);
		var o = new Te(90, 1, t, e);
		o.up.set(0, 0, 1), o.lookAt(new s(0, 1, 0)), this.add(o);
		var a = new Te(90, 1, t, e);
		a.up.set(0, 0, -1), a.lookAt(new s(0, -1, 0)), this.add(a);
		var c = new Te(90, 1, t, e);
		c.up.set(0, -1, 0), c.lookAt(new s(0, 0, 1)), this.add(c);
		var h = new Te(90, 1, t, e);
		h.up.set(0, -1, 0), h.lookAt(new s(0, 0, -1)), this.add(h);
		var u = {
			format: Ds,
			magFilter: xs,
			minFilter: xs
		};
		this.renderTarget = new d(n, n, u), this.renderTarget.texture.name = "CubeCamera", this.update = function(t, e) {
			null === this.parent && this.updateMatrixWorld();
			var n = this.renderTarget,
				s = n.texture.generateMipmaps;
			n.texture.generateMipmaps = !1, n.activeCubeFace = 0, t.render(e, r, n), n.activeCubeFace = 1, t.render(e, i, n), n.activeCubeFace = 2, t.render(e, o, n), n.activeCubeFace = 3, t.render(e, a, n), n.activeCubeFace = 4, t.render(e, c, n), n.texture.generateMipmaps = s, n.activeCubeFace = 5, t.render(e, h, n), t.setRenderTarget(null)
		}, this.clear = function(t, e, n, r) {
			for(var i = this.renderTarget, o = 0; o < 6; o++) i.activeCubeFace = o, t.setRenderTarget(i), t.clear(e, n, r);
			t.setRenderTarget(null)
		}
	}

	function Ui() {
		M.call(this), this.type = "AudioListener", this.context = wh.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null
	}

	function Bi(t) {
		M.call(this), this.type = "Audio", this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.loop = !1, this.startTime = 0, this.offset = 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this.filters = []
	}

	function Fi(t) {
		Bi.call(this, t), this.panner = this.context.createPanner(), this.panner.connect(this.gain)
	}

	function zi(t, e) {
		this.analyser = t.context.createAnalyser(), this.analyser.fftSize = void 0 !== e ? e : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser)
	}

	function Gi(t, e, n) {
		this.binding = t, this.valueSize = n;
		var r, i = Float64Array;
		switch(e) {
			case "quaternion":
				r = this._slerp;
				break;
			case "string":
			case "bool":
				i = Array, r = this._select;
				break;
			default:
				r = this._lerp
		}
		this.buffer = new i(4 * n), this._mixBufferRegion = r, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0
	}

	function Hi(t, e, n) {
		var r = n || Vi.parseTrackName(e);
		this._targetGroup = t, this._bindings = t.subscribe_(e, r)
	}

	function Vi(t, e, n) {
		this.path = e, this.parsedPath = n || Vi.parseTrackName(e), this.node = Vi.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t
	}

	function ki() {
		this.uuid = Ic.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
		var t = {};
		this._indicesByUUID = t;
		for(var e = 0, n = arguments.length; e !== n; ++e) t[arguments[e].uuid] = e;
		this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
		var r = this;
		this.stats = {
			objects: {
				get total() {
					return r._objects.length
				},
				get inUse() {
					return this.total - r.nCachedObjects_
				}
			},
			get bindingsPerObject() {
				return r._bindings.length
			}
		}
	}

	function ji(t, e, n) {
		this._mixer = t, this._clip = e, this._localRoot = n || null;
		for(var r = e.tracks, i = r.length, o = new Array(i), a = {
				endingStart: vc,
				endingEnd: vc
			}, s = 0; s !== i; ++s) {
			var c = r[s].createInterpolant(null);
			o[s] = c, c.settings = a
		}
		this._interpolantSettings = a, this._interpolants = o, this._propertyBindings = new Array(i), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = dc, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
	}

	function Wi(t) {
		this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
	}

	function Xi(t) {
		"string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t
	}

	function qi() {
		G.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
	}

	function Yi(t, e, n, r) {
		this.data = t, this.itemSize = e, this.offset = n, this.normalized = !0 === r
	}

	function Zi(t, e) {
		this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.dynamic = !1, this.updateRange = {
			offset: 0,
			count: -1
		}, this.version = 0
	}

	function Ji(t, e, n) {
		Zi.call(this, t, e), this.meshPerAttribute = n || 1
	}

	function Qi(t, e, n) {
		R.call(this, t, e), this.meshPerAttribute = n || 1
	}

	function Ki(t, e, n, r) {
		this.ray = new Y(t, e), this.near = n || 0, this.far = r || 1 / 0, this.params = {
			Mesh: {},
			Line: {},
			LOD: {},
			Points: {
				threshold: 1
			},
			Sprite: {}
		}, Object.defineProperties(this.params, {
			PointCloud: {
				get: function() {
					return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
				}
			}
		})
	}

	function $i(t, e) {
		return t.distance - e.distance
	}

	function to(t, e, n, r) {
		if(!1 !== t.visible && (t.raycast(e, n), !0 === r))
			for(var i = t.children, o = 0, a = i.length; o < a; o++) to(i[o], e, n, !0)
	}

	function eo(t) {
		this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
	}

	function no(t, e, n) {
		return this.radius = void 0 !== t ? t : 1, this.phi = void 0 !== e ? e : 0, this.theta = void 0 !== n ? n : 0, this
	}

	function ro(t, e, n) {
		return this.radius = void 0 !== t ? t : 1, this.theta = void 0 !== e ? e : 0, this.y = void 0 !== n ? n : 0, this
	}

	function io(t, e) {
		this.min = void 0 !== t ? t : new i(1 / 0, 1 / 0), this.max = void 0 !== e ? e : new i(-1 / 0, -1 / 0)
	}

	function oo(t) {
		M.call(this), this.material = t, this.render = function() {}
	}

	function ao(t, e, n, r) {
		this.object = t, this.size = void 0 !== e ? e : 1;
		var i = void 0 !== n ? n : 16711680,
			o = void 0 !== r ? r : 1,
			a = 0,
			s = this.object.geometry;
		s && s.isGeometry ? a = 3 * s.faces.length : s && s.isBufferGeometry && (a = s.attributes.normal.count);
		var c = new G,
			h = new U(2 * a * 3, 3);
		c.addAttribute("position", h), He.call(this, c, new ze({
			color: i,
			linewidth: o
		})), this.matrixAutoUpdate = !1, this.update()
	}

	function so(t, e) {
		M.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
		for(var n = new G, r = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], i = 0, o = 1; i < 32; i++, o++) {
			var a = i / 32 * Math.PI * 2,
				s = o / 32 * Math.PI * 2;
			r.push(Math.cos(a), Math.sin(a), 1, Math.cos(s), Math.sin(s), 1)
		}
		n.addAttribute("position", new U(r, 3));
		var c = new ze({
			fog: !1
		});
		this.cone = new He(n, c), this.add(this.cone), this.update()
	}

	function co(t) {
		var e = [];
		t && t.isBone && e.push(t);
		for(var n = 0; n < t.children.length; n++) e.push.apply(e, co(t.children[n]));
		return e
	}

	function ho(t) {
		for(var e = co(t), n = new G, r = [], i = [], o = new y(0, 0, 1), a = new y(0, 1, 0), s = 0; s < e.length; s++) {
			var c = e[s];
			c.parent && c.parent.isBone && (r.push(0, 0, 0), r.push(0, 0, 0), i.push(o.r, o.g, o.b), i.push(a.r, a.g, a.b))
		}
		n.addAttribute("position", new U(r, 3)), n.addAttribute("color", new U(i, 3));
		var h = new ze({
			vertexColors: wa,
			depthTest: !1,
			depthWrite: !1,
			transparent: !0
		});
		He.call(this, n, h), this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
	}

	function uo(t, e, n) {
		this.light = t, this.light.updateMatrixWorld(), this.color = n;
		var r = new Qn(e, 4, 2),
			i = new X({
				wireframe: !0,
				fog: !1
			});
		Q.call(this, r, i), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update()
	}

	function lo(t, e) {
		M.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
		var n = new ze({
				fog: !1
			}),
			r = new G;
		r.addAttribute("position", new R(new Float32Array(15), 3)), this.line = new Ge(r, n), this.add(this.line), this.update()
	}

	function po(t, e, n) {
		M.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = n;
		var r = new rn(e);
		r.rotateY(.5 * Math.PI), this.material = new X({
			wireframe: !0,
			fog: !1
		}), void 0 === this.color && (this.material.vertexColors = wa);
		var i = r.getAttribute("position"),
			o = new Float32Array(3 * i.count);
		r.addAttribute("color", new R(o, 3)), this.add(new Q(r, this.material)), this.update()
	}

	function fo(t, e, n, r) {
		t = t || 10, e = e || 10, n = new y(void 0 !== n ? n : 4473924), r = new y(void 0 !== r ? r : 8947848);
		for(var i = e / 2, o = t / e, a = t / 2, s = [], c = [], h = 0, u = 0, l = -a; h <= e; h++, l += o) {
			s.push(-a, 0, l, a, 0, l), s.push(l, 0, -a, l, 0, a);
			var d = h === i ? n : r;
			d.toArray(c, u), u += 3, d.toArray(c, u), u += 3, d.toArray(c, u), u += 3, d.toArray(c, u), u += 3
		}
		var p = new G;
		p.addAttribute("position", new U(s, 3)), p.addAttribute("color", new U(c, 3));
		var f = new ze({
			vertexColors: wa
		});
		He.call(this, p, f)
	}

	function mo(t, e, n, r, i, o) {
		t = t || 10, e = e || 16, n = n || 8, r = r || 64, i = new y(void 0 !== i ? i : 4473924), o = new y(void 0 !== o ? o : 8947848);
		var a, s, c, h, u, l, d, p = [],
			f = [];
		for(h = 0; h <= e; h++) c = h / e * (2 * Math.PI), a = Math.sin(c) * t, s = Math.cos(c) * t, p.push(0, 0, 0), p.push(a, 0, s), d = 1 & h ? i : o, f.push(d.r, d.g, d.b), f.push(d.r, d.g, d.b);
		for(h = 0; h <= n; h++)
			for(d = 1 & h ? i : o, l = t - t / n * h, u = 0; u < r; u++) c = u / r * (2 * Math.PI), a = Math.sin(c) * l, s = Math.cos(c) * l, p.push(a, 0, s), f.push(d.r, d.g, d.b), c = (u + 1) / r * (2 * Math.PI), a = Math.sin(c) * l, s = Math.cos(c) * l, p.push(a, 0, s), f.push(d.r, d.g, d.b);
		var m = new G;
		m.addAttribute("position", new U(p, 3)), m.addAttribute("color", new U(f, 3));
		var g = new ze({
			vertexColors: wa
		});
		He.call(this, m, g)
	}

	function go(t, e, n, r) {
		this.object = t, this.size = void 0 !== e ? e : 1;
		var i = void 0 !== n ? n : 16776960,
			o = void 0 !== r ? r : 1,
			a = 0,
			s = this.object.geometry;
		s && s.isGeometry ? a = s.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
		var c = new G,
			h = new U(2 * a * 3, 3);
		c.addAttribute("position", h), He.call(this, c, new ze({
			color: i,
			linewidth: o
		})), this.matrixAutoUpdate = !1, this.update()
	}

	function vo(t, e, n) {
		M.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, void 0 === e && (e = 1);
		var r = new G;
		r.addAttribute("position", new U([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3));
		var i = new ze({
			fog: !1
		});
		this.lightPlane = new Ge(r, i), this.add(this.lightPlane), r = new G, r.addAttribute("position", new U([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new Ge(r, i), this.add(this.targetLine), this.update()
	}

	function yo(t) {
		function e(t, e, r) {
			n(t, r), n(e, r)
		}

		function n(t, e) {
			o.push(0, 0, 0), a.push(e.r, e.g, e.b), void 0 === s[t] && (s[t] = []), s[t].push(o.length / 3 - 1)
		}
		var r = new G,
			i = new ze({
				color: 16777215,
				vertexColors: xa
			}),
			o = [],
			a = [],
			s = {},
			c = new y(16755200),
			h = new y(16711680),
			u = new y(43775),
			l = new y(16777215),
			d = new y(3355443);
		e("n1", "n2", c), e("n2", "n4", c), e("n4", "n3", c), e("n3", "n1", c), e("f1", "f2", c), e("f2", "f4", c), e("f4", "f3", c), e("f3", "f1", c), e("n1", "f1", c), e("n2", "f2", c), e("n3", "f3", c), e("n4", "f4", c), e("p", "n1", h), e("p", "n2", h), e("p", "n3", h), e("p", "n4", h), e("u1", "u2", u), e("u2", "u3", u), e("u3", "u1", u), e("c", "t", l), e("p", "c", d), e("cn1", "cn2", d), e("cn3", "cn4", d), e("cf1", "cf2", d), e("cf3", "cf4", d), r.addAttribute("position", new U(o, 3)), r.addAttribute("color", new U(a, 3)), He.call(this, r, i), this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = s, this.update()
	}

	function xo(t, e) {
		this.object = t, void 0 === e && (e = 16776960);
		var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
			r = new Float32Array(24),
			i = new G;
		i.setIndex(new R(n, 1)), i.addAttribute("position", new R(r, 3)), He.call(this, i, new ze({
			color: e
		})), this.matrixAutoUpdate = !1, this.update()
	}

	function wo(t, e) {
		this.type = "Box3Helper", this.box = t;
		var n = void 0 !== e ? e : 16776960,
			r = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
			i = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1],
			o = new G;
		o.setIndex(new R(r, 1)), o.addAttribute("position", new U(i, 3)), He.call(this, o, new ze({
			color: n
		})), this.geometry.computeBoundingSphere()
	}

	function bo(t, e, n) {
		this.type = "PlaneHelper", this.plane = t, this.size = void 0 === e ? 1 : e;
		var r = void 0 !== n ? n : 16776960,
			i = [1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0],
			o = new G;
		o.addAttribute("position", new U(i, 3)), o.computeBoundingSphere(), Ge.call(this, o, new ze({
			color: r
		}));
		var a = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1],
			s = new G;
		s.addAttribute("position", new U(a, 3)), s.computeBoundingSphere(), this.add(new Q(s, new X({
			color: r,
			opacity: .2,
			transparent: !0,
			depthWrite: !1
		})))
	}

	function _o(t, e, n, r, i, o) {
		M.call(this), void 0 === r && (r = 16776960), void 0 === n && (n = 1), void 0 === i && (i = .2 * n), void 0 === o && (o = .2 * i), void 0 === _h && (_h = new G, _h.addAttribute("position", new U([0, 0, 0, 0, 1, 0], 3)), Mh = new sr(0, .5, 1, 5, 1), Mh.translate(0, -.5, 0)), this.position.copy(e), this.line = new Ge(_h, new ze({
			color: r
		})), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new Q(Mh, new X({
			color: r
		})), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(n, i, o)
	}

	function Mo(t) {
		t = t || 1;
		var e = [0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t],
			n = [1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1],
			r = new G;
		r.addAttribute("position", new U(e, 3)), r.addAttribute("color", new U(n, 3));
		var i = new ze({
			vertexColors: wa
		});
		He.call(this, r, i)
	}

	function Eo(t, e, n, r, i, o, a) {
		return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new S(t, e, n, i, o, a)
	}

	function To(t) {
		return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."), t
	}

	function So(t) {
		return void 0 === t && (t = []), console.warn("THREE.MultiMaterial has been removed. Use an Array instead."), t.isMultiMaterial = !0, t.materials = t, t.clone = function() {
			return t.slice()
		}, t
	}

	function Ao(t, e) {
		return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new je(t, e)
	}

	function Ro(t) {
		return console.warn("THREE.Particle has been renamed to THREE.Sprite."), new Ne(t)
	}

	function Lo(t, e) {
		return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new je(t, e)
	}

	function Po(t) {
		return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new ke(t)
	}

	function Co(t) {
		return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new ke(t)
	}

	function Oo(t) {
		return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new ke(t)
	}

	function Io(t, e, n) {
		return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), new s(t, e, n)
	}

	function No(t, e) {
		return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."), new R(t, e).setDynamic(!0)
	}

	function Do(t, e) {
		return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."), new L(t, e)
	}

	function Uo(t, e) {
		return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."), new P(t, e)
	}

	function Bo(t, e) {
		return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."), new C(t, e)
	}

	function Fo(t, e) {
		return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."), new O(t, e)
	}

	function zo(t, e) {
		return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."), new I(t, e)
	}

	function Go(t, e) {
		return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."), new N(t, e)
	}

	function Ho(t, e) {
		return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."), new D(t, e)
	}

	function Vo(t, e) {
		return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."), new U(t, e)
	}

	function ko(t, e) {
		return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."), new B(t, e)
	}

	function jo(t) {
		console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), Or.call(this, t), this.type = "catmullrom", this.closed = !0
	}

	function Wo(t) {
		console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), Or.call(this, t), this.type = "catmullrom"
	}

	function Xo(t) {
		console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), Or.call(this, t), this.type = "catmullrom"
	}

	function qo(t) {
		return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."), new Mo(t)
	}

	function Yo(t, e) {
		return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."), new xo(t, e)
	}

	function Zo(t, e) {
		return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."), new He(new or(t.geometry), new ze({
			color: void 0 !== e ? e : 16777215
		}))
	}

	function Jo(t, e) {
		return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."), new He(new Ze(t.geometry), new ze({
			color: void 0 !== e ? e : 16777215
		}))
	}

	function Qo(t) {
		return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."), new _r(t)
	}

	function Ko(t) {
		return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."), new Er(t)
	}

	function $o() {
		console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."), this.projectVector = function(t, e) {
			console.warn("THREE.Projector: .projectVector() is now vector.project()."), t.project(e)
		}, this.unprojectVector = function(t, e) {
			console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), t.unproject(e)
		}, this.pickingRay = function() {
			console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
		}
	}

	function ta() {
		console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"), this.domElement = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), this.clear = function() {}, this.render = function() {}, this.setClearColor = function() {}, this.setSize = function() {}
	}

	function ea() {
		console.error("THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), n.d(e, "WebGLRenderTargetCube", function() {
		return d
	}), n.d(e, "WebGLRenderTarget", function() {
		return l
	}), n.d(e, "WebGLRenderer", function() {
		return Le
	}), n.d(e, "ShaderLib", function() {
		return zc
	}), n.d(e, "UniformsLib", function() {
		return Fc
	}), n.d(e, "UniformsUtils", function() {
		return Uc
	}), n.d(e, "ShaderChunk", function() {
		return Dc
	}), n.d(e, "FogExp2", function() {
		return Pe
	}), n.d(e, "Fog", function() {
		return Ce
	}), n.d(e, "Scene", function() {
		return Oe
	}), n.d(e, "Sprite", function() {
		return Ne
	}), n.d(e, "LOD", function() {
		return De
	}), n.d(e, "SkinnedMesh", function() {
		return Fe
	}), n.d(e, "Skeleton", function() {
		return Ue
	}), n.d(e, "Bone", function() {
		return Be
	}), n.d(e, "Mesh", function() {
		return Q
	}), n.d(e, "LineSegments", function() {
		return He
	}), n.d(e, "LineLoop", function() {
		return Ve
	}), n.d(e, "Line", function() {
		return Ge
	}), n.d(e, "Points", function() {
		return je
	}), n.d(e, "Group", function() {
		return We
	}), n.d(e, "VideoTexture", function() {
		return Xe
	}), n.d(e, "DataTexture", function() {
		return p
	}), n.d(e, "CompressedTexture", function() {
		return qe
	}), n.d(e, "CubeTexture", function() {
		return ht
	}), n.d(e, "CanvasTexture", function() {
		return we
	}), n.d(e, "DepthTexture", function() {
		return Ye
	}), n.d(e, "Texture", function() {
		return h
	}), n.d(e, "CompressedTextureLoader", function() {
		return Mr
	}), n.d(e, "DataTextureLoader", function() {
		return Er
	}), n.d(e, "CubeTextureLoader", function() {
		return Sr
	}), n.d(e, "TextureLoader", function() {
		return Ar
	}), n.d(e, "ObjectLoader", function() {
		return Si
	}), n.d(e, "MaterialLoader", function() {
		return _i
	}), n.d(e, "BufferGeometryLoader", function() {
		return Mi
	}), n.d(e, "DefaultLoadingManager", function() {
		return ah
	}), n.d(e, "LoadingManager", function() {
		return br
	}), n.d(e, "JSONLoader", function() {
		return Ti
	}), n.d(e, "ImageLoader", function() {
		return Tr
	}), n.d(e, "ImageBitmapLoader", function() {
		return Ai
	}), n.d(e, "FontLoader", function() {
		return Oi
	}), n.d(e, "FileLoader", function() {
		return _r
	}), n.d(e, "Loader", function() {
		return Ei
	}), n.d(e, "LoaderUtils", function() {
		return mh
	}), n.d(e, "Cache", function() {
		return oh
	}), n.d(e, "AudioLoader", function() {
		return Ii
	}), n.d(e, "SpotLightShadow", function() {
		return ni
	}), n.d(e, "SpotLight", function() {
		return ri
	}), n.d(e, "PointLight", function() {
		return ii
	}), n.d(e, "RectAreaLight", function() {
		return ci
	}), n.d(e, "HemisphereLight", function() {
		return ti
	}), n.d(e, "DirectionalLightShadow", function() {
		return oi
	}), n.d(e, "DirectionalLight", function() {
		return ai
	}), n.d(e, "AmbientLight", function() {
		return si
	}), n.d(e, "LightShadow", function() {
		return ei
	}), n.d(e, "Light", function() {
		return $r
	}), n.d(e, "StereoCamera", function() {
		return Ni
	}), n.d(e, "PerspectiveCamera", function() {
		return Te
	}), n.d(e, "OrthographicCamera", function() {
		return T
	}), n.d(e, "CubeCamera", function() {
		return Di
	}), n.d(e, "ArrayCamera", function() {
		return Se
	}), n.d(e, "Camera", function() {
		return E
	}), n.d(e, "AudioListener", function() {
		return Ui
	}), n.d(e, "PositionalAudio", function() {
		return Fi
	}), n.d(e, "AudioContext", function() {
		return wh
	}), n.d(e, "AudioAnalyser", function() {
		return zi
	}), n.d(e, "Audio", function() {
		return Bi
	}), n.d(e, "VectorKeyframeTrack", function() {
		return wi
	}), n.d(e, "StringKeyframeTrack", function() {
		return hi
	}), n.d(e, "QuaternionKeyframeTrack", function() {
		return pi
	}), n.d(e, "NumberKeyframeTrack", function() {
		return mi
	}), n.d(e, "ColorKeyframeTrack", function() {
		return fi
	}), n.d(e, "BooleanKeyframeTrack", function() {
		return ui
	}), n.d(e, "PropertyMixer", function() {
		return Gi
	}), n.d(e, "PropertyBinding", function() {
		return Vi
	}), n.d(e, "KeyframeTrack", function() {
		return xi
	}), n.d(e, "AnimationUtils", function() {
		return ph
	}), n.d(e, "AnimationObjectGroup", function() {
		return ki
	}), n.d(e, "AnimationMixer", function() {
		return Wi
	}), n.d(e, "AnimationClip", function() {
		return bi
	}), n.d(e, "Uniform", function() {
		return Xi
	}), n.d(e, "InstancedBufferGeometry", function() {
		return qi
	}), n.d(e, "BufferGeometry", function() {
		return G
	}), n.d(e, "Geometry", function() {
		return A
	}), n.d(e, "InterleavedBufferAttribute", function() {
		return Yi
	}), n.d(e, "InstancedInterleavedBuffer", function() {
		return Ji
	}), n.d(e, "InterleavedBuffer", function() {
		return Zi
	}), n.d(e, "InstancedBufferAttribute", function() {
		return Qi
	}), n.d(e, "Face3", function() {
		return S
	}), n.d(e, "Object3D", function() {
		return M
	}), n.d(e, "Raycaster", function() {
		return Ki
	}), n.d(e, "Layers", function() {
		return _
	}), n.d(e, "EventDispatcher", function() {
		return r
	}), n.d(e, "Clock", function() {
		return eo
	}), n.d(e, "QuaternionLinearInterpolant", function() {
		return di
	}), n.d(e, "LinearInterpolant", function() {
		return vi
	}), n.d(e, "DiscreteInterpolant", function() {
		return yi
	}), n.d(e, "CubicInterpolant", function() {
		return gi
	}), n.d(e, "Interpolant", function() {
		return li
	}), n.d(e, "Triangle", function() {
		return J
	}), n.d(e, "Math", function() {
		return Ic
	}), n.d(e, "Spherical", function() {
		return no
	}), n.d(e, "Cylindrical", function() {
		return ro
	}), n.d(e, "Plane", function() {
		return g
	}), n.d(e, "Frustum", function() {
		return v
	}), n.d(e, "Sphere", function() {
		return m
	}), n.d(e, "Ray", function() {
		return Y
	}), n.d(e, "Matrix4", function() {
		return o
	}), n.d(e, "Matrix3", function() {
		return c
	}), n.d(e, "Box3", function() {
		return f
	}), n.d(e, "Box2", function() {
		return io
	}), n.d(e, "Line3", function() {
		return Z
	}), n.d(e, "Euler", function() {
		return b
	}), n.d(e, "Vector4", function() {
		return u
	}), n.d(e, "Vector3", function() {
		return s
	}), n.d(e, "Vector2", function() {
		return i
	}), n.d(e, "Quaternion", function() {
		return a
	}), n.d(e, "Color", function() {
		return y
	}), n.d(e, "ImmediateRenderObject", function() {
		return oo
	}), n.d(e, "VertexNormalsHelper", function() {
		return ao
	}), n.d(e, "SpotLightHelper", function() {
		return so
	}), n.d(e, "SkeletonHelper", function() {
		return ho
	}), n.d(e, "PointLightHelper", function() {
		return uo
	}), n.d(e, "RectAreaLightHelper", function() {
		return lo
	}), n.d(e, "HemisphereLightHelper", function() {
		return po
	}), n.d(e, "GridHelper", function() {
		return fo
	}), n.d(e, "PolarGridHelper", function() {
		return mo
	}), n.d(e, "FaceNormalsHelper", function() {
		return go
	}), n.d(e, "DirectionalLightHelper", function() {
		return vo
	}), n.d(e, "CameraHelper", function() {
		return yo
	}), n.d(e, "BoxHelper", function() {
		return xo
	}), n.d(e, "Box3Helper", function() {
		return wo
	}), n.d(e, "PlaneHelper", function() {
		return bo
	}), n.d(e, "ArrowHelper", function() {
		return _o
	}), n.d(e, "AxesHelper", function() {
		return Mo
	}), n.d(e, "Shape", function() {
		return Kr
	}), n.d(e, "Path", function() {
		return Qr
	}), n.d(e, "ShapePath", function() {
		return Ri
	}), n.d(e, "Font", function() {
		return Li
	}), n.d(e, "CurvePath", function() {
		return Jr
	}), n.d(e, "Curve", function() {
		return Rr
	}), n.d(e, "ShapeUtils", function() {
		return eh
	}), n.d(e, "WebGLUtils", function() {
		return Ee
	}), n.d(e, "WireframeGeometry", function() {
		return Ze
	}), n.d(e, "ParametricGeometry", function() {
		return Je
	}), n.d(e, "ParametricBufferGeometry", function() {
		return Qe
	}), n.d(e, "TetrahedronGeometry", function() {
		return tn
	}), n.d(e, "TetrahedronBufferGeometry", function() {
		return en
	}), n.d(e, "OctahedronGeometry", function() {
		return nn
	}), n.d(e, "OctahedronBufferGeometry", function() {
		return rn
	}), n.d(e, "IcosahedronGeometry", function() {
		return on
	}), n.d(e, "IcosahedronBufferGeometry", function() {
		return an
	}), n.d(e, "DodecahedronGeometry", function() {
		return sn
	}), n.d(e, "DodecahedronBufferGeometry", function() {
		return cn
	}), n.d(e, "PolyhedronGeometry", function() {
		return Ke
	}), n.d(e, "PolyhedronBufferGeometry", function() {
		return $e
	}), n.d(e, "TubeGeometry", function() {
		return hn
	}), n.d(e, "TubeBufferGeometry", function() {
		return un
	}), n.d(e, "TorusKnotGeometry", function() {
		return ln
	}), n.d(e, "TorusKnotBufferGeometry", function() {
		return dn
	}), n.d(e, "TorusGeometry", function() {
		return pn
	}), n.d(e, "TorusBufferGeometry", function() {
		return fn
	}), n.d(e, "TextGeometry", function() {
		return Yn
	}), n.d(e, "TextBufferGeometry", function() {
		return Zn
	}), n.d(e, "SphereGeometry", function() {
		return Jn
	}), n.d(e, "SphereBufferGeometry", function() {
		return Qn
	}), n.d(e, "RingGeometry", function() {
		return Kn
	}), n.d(e, "RingBufferGeometry", function() {
		return $n
	}), n.d(e, "PlaneGeometry", function() {
		return k
	}), n.d(e, "PlaneBufferGeometry", function() {
		return j
	}), n.d(e, "LatheGeometry", function() {
		return tr
	}), n.d(e, "LatheBufferGeometry", function() {
		return er
	}), n.d(e, "ShapeGeometry", function() {
		return nr
	}), n.d(e, "ShapeBufferGeometry", function() {
		return rr
	}), n.d(e, "ExtrudeGeometry", function() {
		return Wn
	}), n.d(e, "ExtrudeBufferGeometry", function() {
		return Xn
	}), n.d(e, "EdgesGeometry", function() {
		return or
	}), n.d(e, "ConeGeometry", function() {
		return cr
	}), n.d(e, "ConeBufferGeometry", function() {
		return hr
	}), n.d(e, "CylinderGeometry", function() {
		return ar
	}), n.d(e, "CylinderBufferGeometry", function() {
		return sr
	}), n.d(e, "CircleGeometry", function() {
		return ur
	}), n.d(e, "CircleBufferGeometry", function() {
		return lr
	}), n.d(e, "BoxGeometry", function() {
		return H
	}), n.d(e, "BoxBufferGeometry", function() {
		return V
	}), n.d(e, "ShadowMaterial", function() {
		return dr
	}), n.d(e, "SpriteMaterial", function() {
		return Ie
	}), n.d(e, "RawShaderMaterial", function() {
		return pr
	}), n.d(e, "ShaderMaterial", function() {
		return q
	}), n.d(e, "PointsMaterial", function() {
		return ke
	}), n.d(e, "MeshPhysicalMaterial", function() {
		return mr
	}), n.d(e, "MeshStandardMaterial", function() {
		return fr
	}), n.d(e, "MeshPhongMaterial", function() {
		return gr
	}), n.d(e, "MeshToonMaterial", function() {
		return vr
	}), n.d(e, "MeshNormalMaterial", function() {
		return yr
	}), n.d(e, "MeshLambertMaterial", function() {
		return xr
	}), n.d(e, "MeshDepthMaterial", function() {
		return ve
	}), n.d(e, "MeshDistanceMaterial", function() {
		return ye
	}), n.d(e, "MeshBasicMaterial", function() {
		return X
	});
	n.d(e, "LineDashedMaterial", function() {
		return wr
	}), n.d(e, "LineBasicMaterial", function() {
		return ze
	}), n.d(e, "Material", function() {
		return W
	}), n.d(e, "Float64BufferAttribute", function() {
		return B
	}), n.d(e, "Float32BufferAttribute", function() {
		return U
	}), n.d(e, "Uint32BufferAttribute", function() {
		return D
	}), n.d(e, "Int32BufferAttribute", function() {
		return N
	}), n.d(e, "Uint16BufferAttribute", function() {
		return I
	}), n.d(e, "Int16BufferAttribute", function() {
		return O
	}), n.d(e, "Uint8ClampedBufferAttribute", function() {
		return C
	}), n.d(e, "Uint8BufferAttribute", function() {
		return P
	}), n.d(e, "Int8BufferAttribute", function() {
		return L
	}), n.d(e, "BufferAttribute", function() {
		return R
	}), n.d(e, "ArcCurve", function() {
		return Pr
	}), n.d(e, "CatmullRomCurve3", function() {
		return Or
	}), n.d(e, "CubicBezierCurve", function() {
		return kr
	}), n.d(e, "CubicBezierCurve3", function() {
		return jr
	}), n.d(e, "EllipseCurve", function() {
		return Lr
	}), n.d(e, "LineCurve", function() {
		return Wr
	}), n.d(e, "LineCurve3", function() {
		return Xr
	}), n.d(e, "QuadraticBezierCurve", function() {
		return qr
	}), n.d(e, "QuadraticBezierCurve3", function() {
		return Yr
	}), n.d(e, "SplineCurve", function() {
		return Zr
	}), n.d(e, "REVISION", function() {
		return na
	}), n.d(e, "MOUSE", function() {
		return ra
	}), n.d(e, "CullFaceNone", function() {
		return ia
	}), n.d(e, "CullFaceBack", function() {
		return oa
	}), n.d(e, "CullFaceFront", function() {
		return aa
	}), n.d(e, "CullFaceFrontBack", function() {
		return sa
	}), n.d(e, "FrontFaceDirectionCW", function() {
		return ca
	}), n.d(e, "FrontFaceDirectionCCW", function() {
		return ha
	}), n.d(e, "BasicShadowMap", function() {
		return ua
	}), n.d(e, "PCFShadowMap", function() {
		return la
	}), n.d(e, "PCFSoftShadowMap", function() {
		return da
	}), n.d(e, "FrontSide", function() {
		return pa
	}), n.d(e, "BackSide", function() {
		return fa
	}), n.d(e, "DoubleSide", function() {
		return ma
	}), n.d(e, "FlatShading", function() {
		return ga
	}), n.d(e, "SmoothShading", function() {
		return va
	}), n.d(e, "NoColors", function() {
		return ya
	}), n.d(e, "FaceColors", function() {
		return xa
	}), n.d(e, "VertexColors", function() {
		return wa
	}), n.d(e, "NoBlending", function() {
		return ba
	}), n.d(e, "NormalBlending", function() {
		return _a
	}), n.d(e, "AdditiveBlending", function() {
		return Ma
	}), n.d(e, "SubtractiveBlending", function() {
		return Ea
	}), n.d(e, "MultiplyBlending", function() {
		return Ta
	}), n.d(e, "CustomBlending", function() {
		return Sa
	}), n.d(e, "AddEquation", function() {
		return Aa
	}), n.d(e, "SubtractEquation", function() {
		return Ra
	}), n.d(e, "ReverseSubtractEquation", function() {
		return La
	}), n.d(e, "MinEquation", function() {
		return Pa
	}), n.d(e, "MaxEquation", function() {
		return Ca
	}), n.d(e, "ZeroFactor", function() {
		return Oa
	}), n.d(e, "OneFactor", function() {
		return Ia
	}), n.d(e, "SrcColorFactor", function() {
		return Na
	}), n.d(e, "OneMinusSrcColorFactor", function() {
		return Da
	}), n.d(e, "SrcAlphaFactor", function() {
		return Ua
	}), n.d(e, "OneMinusSrcAlphaFactor", function() {
		return Ba
	}), n.d(e, "DstAlphaFactor", function() {
		return Fa
	}), n.d(e, "OneMinusDstAlphaFactor", function() {
		return za
	}), n.d(e, "DstColorFactor", function() {
		return Ga
	}), n.d(e, "OneMinusDstColorFactor", function() {
		return Ha
	}), n.d(e, "SrcAlphaSaturateFactor", function() {
		return Va
	}), n.d(e, "NeverDepth", function() {
		return ka
	}), n.d(e, "AlwaysDepth", function() {
		return ja
	}), n.d(e, "LessDepth", function() {
		return Wa
	}), n.d(e, "LessEqualDepth", function() {
		return Xa
	}), n.d(e, "EqualDepth", function() {
		return qa
	}), n.d(e, "GreaterEqualDepth", function() {
		return Ya
	}), n.d(e, "GreaterDepth", function() {
		return Za
	}), n.d(e, "NotEqualDepth", function() {
		return Ja
	}), n.d(e, "MultiplyOperation", function() {
		return Qa
	}), n.d(e, "MixOperation", function() {
		return Ka
	}), n.d(e, "AddOperation", function() {
		return $a
	}), n.d(e, "NoToneMapping", function() {
		return ts
	}), n.d(e, "LinearToneMapping", function() {
		return es
	}), n.d(e, "ReinhardToneMapping", function() {
		return ns
	}), n.d(e, "Uncharted2ToneMapping", function() {
		return rs
	}), n.d(e, "CineonToneMapping", function() {
		return is
	}), n.d(e, "UVMapping", function() {
		return os
	}), n.d(e, "CubeReflectionMapping", function() {
		return as
	}), n.d(e, "CubeRefractionMapping", function() {
		return ss
	}), n.d(e, "EquirectangularReflectionMapping", function() {
		return cs
	}), n.d(e, "EquirectangularRefractionMapping", function() {
		return hs
	}), n.d(e, "SphericalReflectionMapping", function() {
		return us
	}), n.d(e, "CubeUVReflectionMapping", function() {
		return ls
	}), n.d(e, "CubeUVRefractionMapping", function() {
		return ds
	}), n.d(e, "RepeatWrapping", function() {
		return ps
	}), n.d(e, "ClampToEdgeWrapping", function() {
		return fs
	}), n.d(e, "MirroredRepeatWrapping", function() {
		return ms
	}), n.d(e, "NearestFilter", function() {
		return gs
	}), n.d(e, "NearestMipMapNearestFilter", function() {
		return vs
	}), n.d(e, "NearestMipMapLinearFilter", function() {
		return ys
	}), n.d(e, "LinearFilter", function() {
		return xs
	}), n.d(e, "LinearMipMapNearestFilter", function() {
		return ws
	}), n.d(e, "LinearMipMapLinearFilter", function() {
		return bs
	}), n.d(e, "UnsignedByteType", function() {
		return _s
	}), n.d(e, "ByteType", function() {
		return Ms
	}), n.d(e, "ShortType", function() {
		return Es
	}), n.d(e, "UnsignedShortType", function() {
		return Ts
	}), n.d(e, "IntType", function() {
		return Ss
	}), n.d(e, "UnsignedIntType", function() {
		return As
	}), n.d(e, "FloatType", function() {
		return Rs
	}), n.d(e, "HalfFloatType", function() {
		return Ls
	}), n.d(e, "UnsignedShort4444Type", function() {
		return Ps
	}), n.d(e, "UnsignedShort5551Type", function() {
		return Cs
	}), n.d(e, "UnsignedShort565Type", function() {
		return Os
	}), n.d(e, "UnsignedInt248Type", function() {
		return Is
	}), n.d(e, "AlphaFormat", function() {
		return Ns
	}), n.d(e, "RGBFormat", function() {
		return Ds
	}), n.d(e, "RGBAFormat", function() {
		return Us
	}), n.d(e, "LuminanceFormat", function() {
		return Bs
	}), n.d(e, "LuminanceAlphaFormat", function() {
		return Fs
	}), n.d(e, "RGBEFormat", function() {
		return zs
	}), n.d(e, "DepthFormat", function() {
		return Gs
	}), n.d(e, "DepthStencilFormat", function() {
		return Hs
	}), n.d(e, "RGB_S3TC_DXT1_Format", function() {
		return Vs
	}), n.d(e, "RGBA_S3TC_DXT1_Format", function() {
		return ks
	}), n.d(e, "RGBA_S3TC_DXT3_Format", function() {
		return js
	}), n.d(e, "RGBA_S3TC_DXT5_Format", function() {
		return Ws
	}), n.d(e, "RGB_PVRTC_4BPPV1_Format", function() {
		return Xs
	}), n.d(e, "RGB_PVRTC_2BPPV1_Format", function() {
		return qs
	}), n.d(e, "RGBA_PVRTC_4BPPV1_Format", function() {
		return Ys
	}), n.d(e, "RGBA_PVRTC_2BPPV1_Format", function() {
		return Zs
	}), n.d(e, "RGB_ETC1_Format", function() {
		return Js
	}), n.d(e, "RGBA_ASTC_4x4_Format", function() {
		return Qs
	}), n.d(e, "RGBA_ASTC_5x4_Format", function() {
		return Ks
	}), n.d(e, "RGBA_ASTC_5x5_Format", function() {
		return $s
	}), n.d(e, "RGBA_ASTC_6x5_Format", function() {
		return tc
	}), n.d(e, "RGBA_ASTC_6x6_Format", function() {
		return ec
	}), n.d(e, "RGBA_ASTC_8x5_Format", function() {
		return nc
	}), n.d(e, "RGBA_ASTC_8x6_Format", function() {
		return rc
	}), n.d(e, "RGBA_ASTC_8x8_Format", function() {
		return ic
	}), n.d(e, "RGBA_ASTC_10x5_Format", function() {
		return oc
	}), n.d(e, "RGBA_ASTC_10x6_Format", function() {
		return ac
	}), n.d(e, "RGBA_ASTC_10x8_Format", function() {
		return sc
	}), n.d(e, "RGBA_ASTC_10x10_Format", function() {
		return cc
	}), n.d(e, "RGBA_ASTC_12x10_Format", function() {
		return hc
	}), n.d(e, "RGBA_ASTC_12x12_Format", function() {
		return uc
	}), n.d(e, "LoopOnce", function() {
		return lc
	}), n.d(e, "LoopRepeat", function() {
		return dc
	}), n.d(e, "LoopPingPong", function() {
		return pc
	}), n.d(e, "InterpolateDiscrete", function() {
		return fc
	}), n.d(e, "InterpolateLinear", function() {
		return mc
	}), n.d(e, "InterpolateSmooth", function() {
		return gc
	}), n.d(e, "ZeroCurvatureEnding", function() {
		return vc
	}), n.d(e, "ZeroSlopeEnding", function() {
		return yc
	}), n.d(e, "WrapAroundEnding", function() {
		return xc
	}), n.d(e, "TrianglesDrawMode", function() {
		return wc
	}), n.d(e, "TriangleStripDrawMode", function() {
		return bc
	}), n.d(e, "TriangleFanDrawMode", function() {
		return _c
	}), n.d(e, "LinearEncoding", function() {
		return Mc
	}), n.d(e, "sRGBEncoding", function() {
		return Ec
	}), n.d(e, "GammaEncoding", function() {
		return Tc
	}), n.d(e, "RGBEEncoding", function() {
		return Sc
	}), n.d(e, "LogLuvEncoding", function() {
		return Ac
	}), n.d(e, "RGBM7Encoding", function() {
		return Rc
	}), n.d(e, "RGBM16Encoding", function() {
		return Lc
	}), n.d(e, "RGBDEncoding", function() {
		return Pc
	}), n.d(e, "BasicDepthPacking", function() {
		return Cc
	}), n.d(e, "RGBADepthPacking", function() {
		return Oc
	}), n.d(e, "CubeGeometry", function() {
		return H
	}), n.d(e, "Face4", function() {
		return Eo
	}), n.d(e, "LineStrip", function() {
		return Eh
	}), n.d(e, "LinePieces", function() {
		return Th
	}), n.d(e, "MeshFaceMaterial", function() {
		return To
	}), n.d(e, "MultiMaterial", function() {
		return So
	}), n.d(e, "PointCloud", function() {
		return Ao
	}), n.d(e, "Particle", function() {
		return Ro
	}), n.d(e, "ParticleSystem", function() {
		return Lo
	}), n.d(e, "PointCloudMaterial", function() {
		return Po
	}), n.d(e, "ParticleBasicMaterial", function() {
		return Co
	}), n.d(e, "ParticleSystemMaterial", function() {
		return Oo
	}), n.d(e, "Vertex", function() {
		return Io
	}), n.d(e, "DynamicBufferAttribute", function() {
		return No
	}), n.d(e, "Int8Attribute", function() {
		return Do
	}), n.d(e, "Uint8Attribute", function() {
		return Uo
	}), n.d(e, "Uint8ClampedAttribute", function() {
		return Bo
	}), n.d(e, "Int16Attribute", function() {
		return Fo
	}), n.d(e, "Uint16Attribute", function() {
		return zo
	}), n.d(e, "Int32Attribute", function() {
		return Go
	}), n.d(e, "Uint32Attribute", function() {
		return Ho
	}), n.d(e, "Float32Attribute", function() {
		return Vo
	}), n.d(e, "Float64Attribute", function() {
		return ko
	}), n.d(e, "ClosedSplineCurve3", function() {
		return jo
	}), n.d(e, "SplineCurve3", function() {
		return Wo
	}), n.d(e, "Spline", function() {
		return Xo
	}), n.d(e, "AxisHelper", function() {
		return qo
	}), n.d(e, "BoundingBoxHelper", function() {
		return Yo
	}), n.d(e, "EdgesHelper", function() {
		return Zo
	}), n.d(e, "WireframeHelper", function() {
		return Jo
	}), n.d(e, "XHRLoader", function() {
		return Qo
	}), n.d(e, "BinaryTextureLoader", function() {
		return Ko
	}), n.d(e, "GeometryUtils", function() {
		return Sh
	}), n.d(e, "ImageUtils", function() {
		return Ah
	}), n.d(e, "Projector", function() {
		return $o
	}), n.d(e, "CanvasRenderer", function() {
		return ta
	}), n.d(e, "SceneUtils", function() {
		return Rh
	}), n.d(e, "LensFlare", function() {
		return ea
	});
	void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number.isInteger = function(t) {
		return "number" == typeof t && isFinite(t) && Math.floor(t) === t
	}), void 0 === Math.sign && (Math.sign = function(t) {
		return t < 0 ? -1 : t > 0 ? 1 : +t
	}), "name" in Function.prototype == !1 && Object.defineProperty(Function.prototype, "name", {
		get: function() {
			return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
		}
	}), void 0 === Object.assign && function() {
		Object.assign = function(t) {
			if(void 0 === t || null === t) throw new TypeError("Cannot convert undefined or null to object");
			for(var e = Object(t), n = 1; n < arguments.length; n++) {
				var r = arguments[n];
				if(void 0 !== r && null !== r)
					for(var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
			}
			return e
		}
	}(), Object.assign(r.prototype, {
		addEventListener: function(t, e) {
			void 0 === this._listeners && (this._listeners = {});
			var n = this._listeners;
			void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e)
		},
		hasEventListener: function(t, e) {
			if(void 0 === this._listeners) return !1;
			var n = this._listeners;
			return void 0 !== n[t] && -1 !== n[t].indexOf(e)
		},
		removeEventListener: function(t, e) {
			if(void 0 !== this._listeners) {
				var n = this._listeners,
					r = n[t];
				if(void 0 !== r) {
					var i = r.indexOf(e); - 1 !== i && r.splice(i, 1)
				}
			}
		},
		dispatchEvent: function(t) {
			if(void 0 !== this._listeners) {
				var e = this._listeners,
					n = e[t.type];
				if(void 0 !== n) {
					t.target = this;
					for(var r = n.slice(0), i = 0, o = r.length; i < o; i++) r[i].call(this, t)
				}
			}
		}
	});
	var na = "93",
		ra = {
			LEFT: 0,
			MIDDLE: 1,
			RIGHT: 2
		},
		ia = 0,
		oa = 1,
		aa = 2,
		sa = 3,
		ca = 0,
		ha = 1,
		ua = 0,
		la = 1,
		da = 2,
		pa = 0,
		fa = 1,
		ma = 2,
		ga = 1,
		va = 2,
		ya = 0,
		xa = 1,
		wa = 2,
		ba = 0,
		_a = 1,
		Ma = 2,
		Ea = 3,
		Ta = 4,
		Sa = 5,
		Aa = 100,
		Ra = 101,
		La = 102,
		Pa = 103,
		Ca = 104,
		Oa = 200,
		Ia = 201,
		Na = 202,
		Da = 203,
		Ua = 204,
		Ba = 205,
		Fa = 206,
		za = 207,
		Ga = 208,
		Ha = 209,
		Va = 210,
		ka = 0,
		ja = 1,
		Wa = 2,
		Xa = 3,
		qa = 4,
		Ya = 5,
		Za = 6,
		Ja = 7,
		Qa = 0,
		Ka = 1,
		$a = 2,
		ts = 0,
		es = 1,
		ns = 2,
		rs = 3,
		is = 4,
		os = 300,
		as = 301,
		ss = 302,
		cs = 303,
		hs = 304,
		us = 305,
		ls = 306,
		ds = 307,
		ps = 1e3,
		fs = 1001,
		ms = 1002,
		gs = 1003,
		vs = 1004,
		ys = 1005,
		xs = 1006,
		ws = 1007,
		bs = 1008,
		_s = 1009,
		Ms = 1010,
		Es = 1011,
		Ts = 1012,
		Ss = 1013,
		As = 1014,
		Rs = 1015,
		Ls = 1016,
		Ps = 1017,
		Cs = 1018,
		Os = 1019,
		Is = 1020,
		Ns = 1021,
		Ds = 1022,
		Us = 1023,
		Bs = 1024,
		Fs = 1025,
		zs = Us,
		Gs = 1026,
		Hs = 1027,
		Vs = 33776,
		ks = 33777,
		js = 33778,
		Ws = 33779,
		Xs = 35840,
		qs = 35841,
		Ys = 35842,
		Zs = 35843,
		Js = 36196,
		Qs = 37808,
		Ks = 37809,
		$s = 37810,
		tc = 37811,
		ec = 37812,
		nc = 37813,
		rc = 37814,
		ic = 37815,
		oc = 37816,
		ac = 37817,
		sc = 37818,
		cc = 37819,
		hc = 37820,
		uc = 37821,
		lc = 2200,
		dc = 2201,
		pc = 2202,
		fc = 2300,
		mc = 2301,
		gc = 2302,
		vc = 2400,
		yc = 2401,
		xc = 2402,
		wc = 0,
		bc = 1,
		_c = 2,
		Mc = 3e3,
		Ec = 3001,
		Tc = 3007,
		Sc = 3002,
		Ac = 3003,
		Rc = 3004,
		Lc = 3005,
		Pc = 3006,
		Cc = 3200,
		Oc = 3201,
		Ic = {
			DEG2RAD: Math.PI / 180,
			RAD2DEG: 180 / Math.PI,
			generateUUID: function() {
				for(var t = [], e = 0; e < 256; e++) t[e] = (e < 16 ? "0" : "") + e.toString(16);
				return function() {
					var e = 4294967295 * Math.random() | 0,
						n = 4294967295 * Math.random() | 0,
						r = 4294967295 * Math.random() | 0,
						i = 4294967295 * Math.random() | 0;
					return(t[255 & e] + t[e >> 8 & 255] + t[e >> 16 & 255] + t[e >> 24 & 255] + "-" + t[255 & n] + t[n >> 8 & 255] + "-" + t[n >> 16 & 15 | 64] + t[n >> 24 & 255] + "-" + t[63 & r | 128] + t[r >> 8 & 255] + "-" + t[r >> 16 & 255] + t[r >> 24 & 255] + t[255 & i] + t[i >> 8 & 255] + t[i >> 16 & 255] + t[i >> 24 & 255]).toUpperCase()
				}
			}(),
			clamp: function(t, e, n) {
				return Math.max(e, Math.min(n, t))
			},
			euclideanModulo: function(t, e) {
				return(t % e + e) % e
			},
			mapLinear: function(t, e, n, r, i) {
				return r + (t - e) * (i - r) / (n - e)
			},
			lerp: function(t, e, n) {
				return(1 - n) * t + n * e
			},
			smoothstep: function(t, e, n) {
				return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t)
			},
			smootherstep: function(t, e, n) {
				return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10)
			},
			randInt: function(t, e) {
				return t + Math.floor(Math.random() * (e - t + 1))
			},
			randFloat: function(t, e) {
				return t + Math.random() * (e - t)
			},
			randFloatSpread: function(t) {
				return t * (.5 - Math.random())
			},
			degToRad: function(t) {
				return t * Ic.DEG2RAD
			},
			radToDeg: function(t) {
				return t * Ic.RAD2DEG
			},
			isPowerOfTwo: function(t) {
				return 0 == (t & t - 1) && 0 !== t
			},
			ceilPowerOfTwo: function(t) {
				return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
			},
			floorPowerOfTwo: function(t) {
				return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
			}
		};
	Object.defineProperties(i.prototype, {
		width: {
			get: function() {
				return this.x
			},
			set: function(t) {
				this.x = t
			}
		},
		height: {
			get: function() {
				return this.y
			},
			set: function(t) {
				this.y = t
			}
		}
	}), Object.assign(i.prototype, {
		isVector2: !0,
		set: function(t, e) {
			return this.x = t, this.y = e, this
		},
		setScalar: function(t) {
			return this.x = t, this.y = t, this
		},
		setX: function(t) {
			return this.x = t, this
		},
		setY: function(t) {
			return this.y = t, this
		},
		setComponent: function(t, e) {
			switch(t) {
				case 0:
					this.x = e;
					break;
				case 1:
					this.y = e;
					break;
				default:
					throw new Error("index is out of range: " + t)
			}
			return this
		},
		getComponent: function(t) {
			switch(t) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				default:
					throw new Error("index is out of range: " + t)
			}
		},
		clone: function() {
			return new this.constructor(this.x, this.y)
		},
		copy: function(t) {
			return this.x = t.x, this.y = t.y, this
		},
		add: function(t, e) {
			return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this)
		},
		addScalar: function(t) {
			return this.x += t, this.y += t, this
		},
		addVectors: function(t, e) {
			return this.x = t.x + e.x, this.y = t.y + e.y, this
		},
		addScaledVector: function(t, e) {
			return this.x += t.x * e, this.y += t.y * e, this
		},
		sub: function(t, e) {
			return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this)
		},
		subScalar: function(t) {
			return this.x -= t, this.y -= t, this
		},
		subVectors: function(t, e) {
			return this.x = t.x - e.x, this.y = t.y - e.y, this
		},
		multiply: function(t) {
			return this.x *= t.x, this.y *= t.y, this
		},
		multiplyScalar: function(t) {
			return this.x *= t, this.y *= t, this
		},
		divide: function(t) {
			return this.x /= t.x, this.y /= t.y, this
		},
		divideScalar: function(t) {
			return this.multiplyScalar(1 / t)
		},
		applyMatrix3: function(t) {
			var e = this.x,
				n = this.y,
				r = t.elements;
			return this.x = r[0] * e + r[3] * n + r[6], this.y = r[1] * e + r[4] * n + r[7], this
		},
		min: function(t) {
			return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
		},
		max: function(t) {
			return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
		},
		clamp: function(t, e) {
			return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
		},
		clampScalar: function() {
			var t = new i,
				e = new i;
			return function(n, r) {
				return t.set(n, n), e.set(r, r), this.clamp(t, e)
			}
		}(),
		clampLength: function(t, e) {
			var n = this.length();
			return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
		},
		floor: function() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
		},
		ceil: function() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
		},
		round: function() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this
		},
		roundToZero: function() {
			return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
		},
		negate: function() {
			return this.x = -this.x, this.y = -this.y, this
		},
		dot: function(t) {
			return this.x * t.x + this.y * t.y
		},
		lengthSq: function() {
			return this.x * this.x + this.y * this.y
		},
		length: function() {
			return Math.sqrt(this.x * this.x + this.y * this.y)
		},
		manhattanLength: function() {
			return Math.abs(this.x) + Math.abs(this.y)
		},
		normalize: function() {
			return this.divideScalar(this.length() || 1)
		},
		angle: function() {
			var t = Math.atan2(this.y, this.x);
			return t < 0 && (t += 2 * Math.PI), t
		},
		distanceTo: function(t) {
			return Math.sqrt(this.distanceToSquared(t))
		},
		distanceToSquared: function(t) {
			var e = this.x - t.x,
				n = this.y - t.y;
			return e * e + n * n
		},
		manhattanDistanceTo: function(t) {
			return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
		},
		setLength: function(t) {
			return this.normalize().multiplyScalar(t)
		},
		lerp: function(t, e) {
			return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
		},
		lerpVectors: function(t, e, n) {
			return this.subVectors(e, t).multiplyScalar(n).add(t)
		},
		equals: function(t) {
			return t.x === this.x && t.y === this.y
		},
		fromArray: function(t, e) {
			return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this
		},
		toArray: function(t, e) {
			return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t
		},
		fromBufferAttribute: function(t, e, n) {
			return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this
		},
		rotateAround: function(t, e) {
			var n = Math.cos(e),
				r = Math.sin(e),
				i = this.x - t.x,
				o = this.y - t.y;
			return this.x = i * n - o * r + t.x, this.y = i * r + o * n + t.y, this
		}
	}), Object.assign(o.prototype, {
		isMatrix4: !0,
		set: function(t, e, n, r, i, o, a, s, c, h, u, l, d, p, f, m) {
			var g = this.elements;
			return g[0] = t, g[4] = e, g[8] = n, g[12] = r, g[1] = i, g[5] = o, g[9] = a, g[13] = s, g[2] = c, g[6] = h, g[10] = u, g[14] = l, g[3] = d, g[7] = p, g[11] = f, g[15] = m, this
		},
		identity: function() {
			return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
		},
		clone: function() {
			return(new o).fromArray(this.elements)
		},
		copy: function(t) {
			var e = this.elements,
				n = t.elements;
			return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this
		},
		copyPosition: function(t) {
			var e = this.elements,
				n = t.elements;
			return e[12] = n[12], e[13] = n[13], e[14] = n[14], this
		},
		extractBasis: function(t, e, n) {
			return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
		},
		makeBasis: function(t, e, n) {
			return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this
		},
		extractRotation: function() {
			var t = new s;
			return function(e) {
				var n = this.elements,
					r = e.elements,
					i = 1 / t.setFromMatrixColumn(e, 0).length(),
					o = 1 / t.setFromMatrixColumn(e, 1).length(),
					a = 1 / t.setFromMatrixColumn(e, 2).length();
				return n[0] = r[0] * i, n[1] = r[1] * i, n[2] = r[2] * i, n[3] = 0, n[4] = r[4] * o, n[5] = r[5] * o, n[6] = r[6] * o, n[7] = 0, n[8] = r[8] * a, n[9] = r[9] * a, n[10] = r[10] * a, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, this
			}
		}(),
		makeRotationFromEuler: function(t) {
			t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
			var e = this.elements,
				n = t.x,
				r = t.y,
				i = t.z,
				o = Math.cos(n),
				a = Math.sin(n),
				s = Math.cos(r),
				c = Math.sin(r),
				h = Math.cos(i),
				u = Math.sin(i);
			if("XYZ" === t.order) {
				var l = o * h,
					d = o * u,
					p = a * h,
					f = a * u;
				e[0] = s * h, e[4] = -s * u, e[8] = c, e[1] = d + p * c, e[5] = l - f * c, e[9] = -a * s, e[2] = f - l * c, e[6] = p + d * c, e[10] = o * s
			} else if("YXZ" === t.order) {
				var m = s * h,
					g = s * u,
					v = c * h,
					y = c * u;
				e[0] = m + y * a, e[4] = v * a - g, e[8] = o * c, e[1] = o * u, e[5] = o * h, e[9] = -a, e[2] = g * a - v, e[6] = y + m * a, e[10] = o * s
			} else if("ZXY" === t.order) {
				var m = s * h,
					g = s * u,
					v = c * h,
					y = c * u;
				e[0] = m - y * a, e[4] = -o * u, e[8] = v + g * a, e[1] = g + v * a, e[5] = o * h, e[9] = y - m * a, e[2] = -o * c, e[6] = a, e[10] = o * s
			} else if("ZYX" === t.order) {
				var l = o * h,
					d = o * u,
					p = a * h,
					f = a * u;
				e[0] = s * h, e[4] = p * c - d, e[8] = l * c + f, e[1] = s * u, e[5] = f * c + l, e[9] = d * c - p, e[2] = -c, e[6] = a * s, e[10] = o * s
			} else if("YZX" === t.order) {
				var x = o * s,
					w = o * c,
					b = a * s,
					_ = a * c;
				e[0] = s * h, e[4] = _ - x * u, e[8] = b * u + w, e[1] = u, e[5] = o * h, e[9] = -a * h, e[2] = -c * h, e[6] = w * u + b, e[10] = x - _ * u
			} else if("XZY" === t.order) {
				var x = o * s,
					w = o * c,
					b = a * s,
					_ = a * c;
				e[0] = s * h, e[4] = -u, e[8] = c * h, e[1] = x * u + _, e[5] = o * h, e[9] = w * u - b, e[2] = b * u - w, e[6] = a * h, e[10] = _ * u + x
			}
			return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
		},
		makeRotationFromQuaternion: function() {
			var t = new s(0, 0, 0),
				e = new s(1, 1, 1);
			return function(n) {
				return this.compose(t, n, e)
			}
		}(),
		lookAt: function() {
			var t = new s,
				e = new s,
				n = new s;
			return function(r, i, o) {
				var a = this.elements;
				return n.subVectors(r, i), 0 === n.lengthSq() && (n.z = 1), n.normalize(), t.crossVectors(o, n), 0 === t.lengthSq() && (1 === Math.abs(o.z) ? n.x += 1e-4 : n.z += 1e-4, n.normalize(), t.crossVectors(o, n)), t.normalize(), e.crossVectors(n, t), a[0] = t.x, a[4] = e.x, a[8] = n.x, a[1] = t.y, a[5] = e.y, a[9] = n.y, a[2] = t.z, a[6] = e.z, a[10] = n.z, this
			}
		}(),
		multiply: function(t, e) {
			return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
		},
		premultiply: function(t) {
			return this.multiplyMatrices(t, this)
		},
		multiplyMatrices: function(t, e) {
			var n = t.elements,
				r = e.elements,
				i = this.elements,
				o = n[0],
				a = n[4],
				s = n[8],
				c = n[12],
				h = n[1],
				u = n[5],
				l = n[9],
				d = n[13],
				p = n[2],
				f = n[6],
				m = n[10],
				g = n[14],
				v = n[3],
				y = n[7],
				x = n[11],
				w = n[15],
				b = r[0],
				_ = r[4],
				M = r[8],
				E = r[12],
				T = r[1],
				S = r[5],
				A = r[9],
				R = r[13],
				L = r[2],
				P = r[6],
				C = r[10],
				O = r[14],
				I = r[3],
				N = r[7],
				D = r[11],
				U = r[15];
			return i[0] = o * b + a * T + s * L + c * I, i[4] = o * _ + a * S + s * P + c * N, i[8] = o * M + a * A + s * C + c * D, i[12] = o * E + a * R + s * O + c * U, i[1] = h * b + u * T + l * L + d * I, i[5] = h * _ + u * S + l * P + d * N, i[9] = h * M + u * A + l * C + d * D, i[13] = h * E + u * R + l * O + d * U, i[2] = p * b + f * T + m * L + g * I, i[6] = p * _ + f * S + m * P + g * N, i[10] = p * M + f * A + m * C + g * D, i[14] = p * E + f * R + m * O + g * U, i[3] = v * b + y * T + x * L + w * I, i[7] = v * _ + y * S + x * P + w * N, i[11] = v * M + y * A + x * C + w * D, i[15] = v * E + y * R + x * O + w * U, this
		},
		multiplyScalar: function(t) {
			var e = this.elements;
			return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
		},
		applyToBufferAttribute: function() {
			var t = new s;
			return function(e) {
				for(var n = 0, r = e.count; n < r; n++) t.x = e.getX(n), t.y = e.getY(n), t.z = e.getZ(n), t.applyMatrix4(this), e.setXYZ(n, t.x, t.y, t.z);
				return e
			}
		}(),
		determinant: function() {
			var t = this.elements,
				e = t[0],
				n = t[4],
				r = t[8],
				i = t[12],
				o = t[1],
				a = t[5],
				s = t[9],
				c = t[13],
				h = t[2],
				u = t[6],
				l = t[10],
				d = t[14];
			return t[3] * (+i * s * u - r * c * u - i * a * l + n * c * l + r * a * d - n * s * d) + t[7] * (+e * s * d - e * c * l + i * o * l - r * o * d + r * c * h - i * s * h) + t[11] * (+e * c * u - e * a * d - i * o * u + n * o * d + i * a * h - n * c * h) + t[15] * (-r * a * h - e * s * u + e * a * l + r * o * u - n * o * l + n * s * h)
		},
		transpose: function() {
			var t, e = this.elements;
			return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
		},
		setPosition: function(t) {
			var e = this.elements;
			return e[12] = t.x, e[13] = t.y, e[14] = t.z, this
		},
		getInverse: function(t, e) {
			var n = this.elements,
				r = t.elements,
				i = r[0],
				o = r[1],
				a = r[2],
				s = r[3],
				c = r[4],
				h = r[5],
				u = r[6],
				l = r[7],
				d = r[8],
				p = r[9],
				f = r[10],
				m = r[11],
				g = r[12],
				v = r[13],
				y = r[14],
				x = r[15],
				w = p * y * l - v * f * l + v * u * m - h * y * m - p * u * x + h * f * x,
				b = g * f * l - d * y * l - g * u * m + c * y * m + d * u * x - c * f * x,
				_ = d * v * l - g * p * l + g * h * m - c * v * m - d * h * x + c * p * x,
				M = g * p * u - d * v * u - g * h * f + c * v * f + d * h * y - c * p * y,
				E = i * w + o * b + a * _ + s * M;
			if(0 === E) {
				var T = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";
				if(!0 === e) throw new Error(T);
				return console.warn(T), this.identity()
			}
			var S = 1 / E;
			return n[0] = w * S, n[1] = (v * f * s - p * y * s - v * a * m + o * y * m + p * a * x - o * f * x) * S, n[2] = (h * y * s - v * u * s + v * a * l - o * y * l - h * a * x + o * u * x) * S, n[3] = (p * u * s - h * f * s - p * a * l + o * f * l + h * a * m - o * u * m) * S, n[4] = b * S, n[5] = (d * y * s - g * f * s + g * a * m - i * y * m - d * a * x + i * f * x) * S, n[6] = (g * u * s - c * y * s - g * a * l + i * y * l + c * a * x - i * u * x) * S, n[7] = (c * f * s - d * u * s + d * a * l - i * f * l - c * a * m + i * u * m) * S, n[8] = _ * S, n[9] = (g * p * s - d * v * s - g * o * m + i * v * m + d * o * x - i * p * x) * S, n[10] = (c * v * s - g * h * s + g * o * l - i * v * l - c * o * x + i * h * x) * S, n[11] = (d * h * s - c * p * s - d * o * l + i * p * l + c * o * m - i * h * m) * S, n[12] = M * S, n[13] = (d * v * a - g * p * a + g * o * f - i * v * f - d * o * y + i * p * y) * S, n[14] = (g * h * a - c * v * a - g * o * u + i * v * u + c * o * y - i * h * y) * S, n[15] = (c * p * a - d * h * a + d * o * u - i * p * u - c * o * f + i * h * f) * S, this
		},
		scale: function(t) {
			var e = this.elements,
				n = t.x,
				r = t.y,
				i = t.z;
			return e[0] *= n, e[4] *= r, e[8] *= i, e[1] *= n, e[5] *= r, e[9] *= i, e[2] *= n, e[6] *= r, e[10] *= i, e[3] *= n, e[7] *= r, e[11] *= i, this
		},
		getMaxScaleOnAxis: function() {
			var t = this.elements,
				e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
				n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
				r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
			return Math.sqrt(Math.max(e, n, r))
		},
		makeTranslation: function(t, e, n) {
			return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this
		},
		makeRotationX: function(t) {
			var e = Math.cos(t),
				n = Math.sin(t);
			return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this
		},
		makeRotationY: function(t) {
			var e = Math.cos(t),
				n = Math.sin(t);
			return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this
		},
		makeRotationZ: function(t) {
			var e = Math.cos(t),
				n = Math.sin(t);
			return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
		},
		makeRotationAxis: function(t, e) {
			var n = Math.cos(e),
				r = Math.sin(e),
				i = 1 - n,
				o = t.x,
				a = t.y,
				s = t.z,
				c = i * o,
				h = i * a;
			return this.set(c * o + n, c * a - r * s, c * s + r * a, 0, c * a + r * s, h * a + n, h * s - r * o, 0, c * s - r * a, h * s + r * o, i * s * s + n, 0, 0, 0, 0, 1), this
		},
		makeScale: function(t, e, n) {
			return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
		},
		makeShear: function(t, e, n) {
			return this.set(1, e, n, 0, t, 1, n, 0, t, e, 1, 0, 0, 0, 0, 1), this
		},
		compose: function(t, e, n) {
			var r = this.elements,
				i = e._x,
				o = e._y,
				a = e._z,
				s = e._w,
				c = i + i,
				h = o + o,
				u = a + a,
				l = i * c,
				d = i * h,
				p = i * u,
				f = o * h,
				m = o * u,
				g = a * u,
				v = s * c,
				y = s * h,
				x = s * u,
				w = n.x,
				b = n.y,
				_ = n.z;
			return r[0] = (1 - (f + g)) * w, r[1] = (d + x) * w, r[2] = (p - y) * w, r[3] = 0, r[4] = (d - x) * b, r[5] = (1 - (l + g)) * b, r[6] = (m + v) * b, r[7] = 0, r[8] = (p + y) * _, r[9] = (m - v) * _, r[10] = (1 - (l + f)) * _, r[11] = 0, r[12] = t.x, r[13] = t.y, r[14] = t.z, r[15] = 1, this
		},
		decompose: function() {
			var t = new s,
				e = new o;
			return function(n, r, i) {
				var o = this.elements,
					a = t.set(o[0], o[1], o[2]).length(),
					s = t.set(o[4], o[5], o[6]).length(),
					c = t.set(o[8], o[9], o[10]).length();
				this.determinant() < 0 && (a = -a), n.x = o[12], n.y = o[13], n.z = o[14], e.copy(this);
				var h = 1 / a,
					u = 1 / s,
					l = 1 / c;
				return e.elements[0] *= h, e.elements[1] *= h, e.elements[2] *= h, e.elements[4] *= u, e.elements[5] *= u, e.elements[6] *= u, e.elements[8] *= l, e.elements[9] *= l, e.elements[10] *= l, r.setFromRotationMatrix(e), i.x = a, i.y = s, i.z = c, this
			}
		}(),
		makePerspective: function(t, e, n, r, i, o) {
			void 0 === o && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
			var a = this.elements,
				s = 2 * i / (e - t),
				c = 2 * i / (n - r),
				h = (e + t) / (e - t),
				u = (n + r) / (n - r),
				l = -(o + i) / (o - i),
				d = -2 * o * i / (o - i);
			return a[0] = s, a[4] = 0, a[8] = h, a[12] = 0, a[1] = 0, a[5] = c, a[9] = u, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = l, a[14] = d, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this
		},
		makeOrthographic: function(t, e, n, r, i, o) {
			var a = this.elements,
				s = 1 / (e - t),
				c = 1 / (n - r),
				h = 1 / (o - i),
				u = (e + t) * s,
				l = (n + r) * c,
				d = (o + i) * h;
			return a[0] = 2 * s, a[4] = 0, a[8] = 0, a[12] = -u, a[1] = 0, a[5] = 2 * c, a[9] = 0, a[13] = -l, a[2] = 0, a[6] = 0, a[10] = -2 * h, a[14] = -d, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this
		},
		equals: function(t) {
			for(var e = this.elements, n = t.elements, r = 0; r < 16; r++)
				if(e[r] !== n[r]) return !1;
			return !0
		},
		fromArray: function(t, e) {
			void 0 === e && (e = 0);
			for(var n = 0; n < 16; n++) this.elements[n] = t[n + e];
			return this
		},
		toArray: function(t, e) {
			void 0 === t && (t = []), void 0 === e && (e = 0);
			var n = this.elements;
			return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t
		}
	}), Object.assign(a, {
		slerp: function(t, e, n, r) {
			return n.copy(t).slerp(e, r)
		},
		slerpFlat: function(t, e, n, r, i, o, a) {
			var s = n[r + 0],
				c = n[r + 1],
				h = n[r + 2],
				u = n[r + 3],
				l = i[o + 0],
				d = i[o + 1],
				p = i[o + 2],
				f = i[o + 3];
			if(u !== f || s !== l || c !== d || h !== p) {
				var m = 1 - a,
					g = s * l + c * d + h * p + u * f,
					v = g >= 0 ? 1 : -1,
					y = 1 - g * g;
				if(y > Number.EPSILON) {
					var x = Math.sqrt(y),
						w = Math.atan2(x, g * v);
					m = Math.sin(m * w) / x, a = Math.sin(a * w) / x
				}
				var b = a * v;
				if(s = s * m + l * b, c = c * m + d * b, h = h * m + p * b, u = u * m + f * b, m === 1 - a) {
					var _ = 1 / Math.sqrt(s * s + c * c + h * h + u * u);
					s *= _, c *= _, h *= _, u *= _
				}
			}
			t[e] = s, t[e + 1] = c, t[e + 2] = h, t[e + 3] = u
		}
	}), Object.defineProperties(a.prototype, {
		x: {
			get: function() {
				return this._x
			},
			set: function(t) {
				this._x = t, this.onChangeCallback()
			}
		},
		y: {
			get: function() {
				return this._y
			},
			set: function(t) {
				this._y = t, this.onChangeCallback()
			}
		},
		z: {
			get: function() {
				return this._z
			},
			set: function(t) {
				this._z = t, this.onChangeCallback()
			}
		},
		w: {
			get: function() {
				return this._w
			},
			set: function(t) {
				this._w = t, this.onChangeCallback()
			}
		}
	}), Object.assign(a.prototype, {
		set: function(t, e, n, r) {
			return this._x = t, this._y = e, this._z = n, this._w = r, this.onChangeCallback(), this
		},
		clone: function() {
			return new this.constructor(this._x, this._y, this._z, this._w)
		},
		copy: function(t) {
			return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this.onChangeCallback(), this
		},
		setFromEuler: function(t, e) {
			if(!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
			var n = t._x,
				r = t._y,
				i = t._z,
				o = t.order,
				a = Math.cos,
				s = Math.sin,
				c = a(n / 2),
				h = a(r / 2),
				u = a(i / 2),
				l = s(n / 2),
				d = s(r / 2),
				p = s(i / 2);
			return "XYZ" === o ? (this._x = l * h * u + c * d * p, this._y = c * d * u - l * h * p, this._z = c * h * p + l * d * u, this._w = c * h * u - l * d * p) : "YXZ" === o ? (this._x = l * h * u + c * d * p, this._y = c * d * u - l * h * p, this._z = c * h * p - l * d * u, this._w = c * h * u + l * d * p) : "ZXY" === o ? (this._x = l * h * u - c * d * p, this._y = c * d * u + l * h * p, this._z = c * h * p + l * d * u, this._w = c * h * u - l * d * p) : "ZYX" === o ? (this._x = l * h * u - c * d * p, this._y = c * d * u + l * h * p, this._z = c * h * p - l * d * u, this._w = c * h * u + l * d * p) : "YZX" === o ? (this._x = l * h * u + c * d * p, this._y = c * d * u + l * h * p, this._z = c * h * p - l * d * u, this._w = c * h * u - l * d * p) : "XZY" === o && (this._x = l * h * u - c * d * p, this._y = c * d * u - l * h * p, this._z = c * h * p + l * d * u, this._w = c * h * u + l * d * p), !1 !== e && this.onChangeCallback(), this
		},
		setFromAxisAngle: function(t, e) {
			var n = e / 2,
				r = Math.sin(n);
			return this._x = t.x * r, this._y = t.y * r, this._z = t.z * r, this._w = Math.cos(n), this.onChangeCallback(), this
		},
		setFromRotationMatrix: function(t) {
			var e, n = t.elements,
				r = n[0],
				i = n[4],
				o = n[8],
				a = n[1],
				s = n[5],
				c = n[9],
				h = n[2],
				u = n[6],
				l = n[10],
				d = r + s + l;
			return d > 0 ? (e = .5 / Math.sqrt(d + 1), this._w = .25 / e, this._x = (u - c) * e, this._y = (o - h) * e, this._z = (a - i) * e) : r > s && r > l ? (e = 2 * Math.sqrt(1 + r - s - l), this._w = (u - c) / e, this._x = .25 * e, this._y = (i + a) / e, this._z = (o + h) / e) : s > l ? (e = 2 * Math.sqrt(1 + s - r - l), this._w = (o - h) / e, this._x = (i + a) / e, this._y = .25 * e, this._z = (c + u) / e) : (e = 2 * Math.sqrt(1 + l - r - s), this._w = (a - i) / e, this._x = (o + h) / e, this._y = (c + u) / e, this._z = .25 * e), this.onChangeCallback(), this
		},
		setFromUnitVectors: function() {
			var t, e = new s;
			return function(n, r) {
				return void 0 === e && (e = new s), t = n.dot(r) + 1, t < 1e-6 ? (t = 0, Math.abs(n.x) > Math.abs(n.z) ? e.set(-n.y, n.x, 0) : e.set(0, -n.z, n.y)) : e.crossVectors(n, r), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t, this.normalize()
			}
		}(),
		inverse: function() {
			return this.conjugate()
		},
		conjugate: function() {
			return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
		},
		dot: function(t) {
			return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
		},
		lengthSq: function() {
			return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
		},
		length: function() {
			return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
		},
		normalize: function() {
			var t = this.length();
			return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this.onChangeCallback(), this
		},
		multiply: function(t, e) {
			return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
		},
		premultiply: function(t) {
			return this.multiplyQuaternions(t, this)
		},
		multiplyQuaternions: function(t, e) {
			var n = t._x,
				r = t._y,
				i = t._z,
				o = t._w,
				a = e._x,
				s = e._y,
				c = e._z,
				h = e._w;
			return this._x = n * h + o * a + r * c - i * s, this._y = r * h + o * s + i * a - n * c, this._z = i * h + o * c + n * s - r * a, this._w = o * h - n * a - r * s - i * c, this.onChangeCallback(), this
		},
		slerp: function(t, e) {
			if(0 === e) return this;
			if(1 === e) return this.copy(t);
			var n = this._x,
				r = this._y,
				i = this._z,
				o = this._w,
				a = o * t._w + n * t._x + r * t._y + i * t._z;
			if(a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1) return this._w = o, this._x = n, this._y = r, this._z = i, this;
			var s = Math.sqrt(1 - a * a);
			if(Math.abs(s) < .001) return this._w = .5 * (o + this._w), this._x = .5 * (n + this._x), this._y = .5 * (r + this._y), this._z = .5 * (i + this._z), this;
			var c = Math.atan2(s, a),
				h = Math.sin((1 - e) * c) / s,
				u = Math.sin(e * c) / s;
			return this._w = o * h + this._w * u, this._x = n * h + this._x * u, this._y = r * h + this._y * u, this._z = i * h + this._z * u, this.onChangeCallback(), this
		},
		equals: function(t) {
			return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
		},
		fromArray: function(t, e) {
			return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this.onChangeCallback(), this
		},
		toArray: function(t, e) {
			return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
		},
		onChange: function(t) {
			return this.onChangeCallback = t, this
		},
		onChangeCallback: function() {}
	}), Object.assign(s.prototype, {
		isVector3: !0,
		set: function(t, e, n) {
			return this.x = t, this.y = e, this.z = n, this
		},
		setScalar: function(t) {
			return this.x = t, this.y = t, this.z = t, this
		},
		setX: function(t) {
			return this.x = t, this
		},
		setY: function(t) {
			return this.y = t, this
		},
		setZ: function(t) {
			return this.z = t, this
		},
		setComponent: function(t, e) {
			switch(t) {
				case 0:
					this.x = e;
					break;
				case 1:
					this.y = e;
					break;
				case 2:
					this.z = e;
					break;
				default:
					throw new Error("index is out of range: " + t)
			}
			return this
		},
		getComponent: function(t) {
			switch(t) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				case 2:
					return this.z;
				default:
					throw new Error("index is out of range: " + t)
			}
		},
		clone: function() {
			return new this.constructor(this.x, this.y, this.z)
		},
		copy: function(t) {
			return this.x = t.x, this.y = t.y, this.z = t.z, this
		},
		add: function(t, e) {
			return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
		},
		addScalar: function(t) {
			return this.x += t, this.y += t, this.z += t, this
		},
		addVectors: function(t, e) {
			return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
		},
		addScaledVector: function(t, e) {
			return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
		},
		sub: function(t, e) {
			return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
		},
		subScalar: function(t) {
			return this.x -= t, this.y -= t, this.z -= t, this
		},
		subVectors: function(t, e) {
			return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
		},
		multiply: function(t, e) {
			return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this)
		},
		multiplyScalar: function(t) {
			return this.x *= t, this.y *= t, this.z *= t, this
		},
		multiplyVectors: function(t, e) {
			return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
		},
		applyEuler: function() {
			var t = new a;
			return function(e) {
				return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(t.setFromEuler(e))
			}
		}(),
		applyAxisAngle: function() {
			var t = new a;
			return function(e, n) {
				return this.applyQuaternion(t.setFromAxisAngle(e, n))
			}
		}(),
		applyMatrix3: function(t) {
			var e = this.x,
				n = this.y,
				r = this.z,
				i = t.elements;
			return this.x = i[0] * e + i[3] * n + i[6] * r, this.y = i[1] * e + i[4] * n + i[7] * r, this.z = i[2] * e + i[5] * n + i[8] * r, this
		},
		applyMatrix4: function(t) {
			var e = this.x,
				n = this.y,
				r = this.z,
				i = t.elements,
				o = 1 / (i[3] * e + i[7] * n + i[11] * r + i[15]);
			return this.x = (i[0] * e + i[4] * n + i[8] * r + i[12]) * o, this.y = (i[1] * e + i[5] * n + i[9] * r + i[13]) * o, this.z = (i[2] * e + i[6] * n + i[10] * r + i[14]) * o, this
		},
		applyQuaternion: function(t) {
			var e = this.x,
				n = this.y,
				r = this.z,
				i = t.x,
				o = t.y,
				a = t.z,
				s = t.w,
				c = s * e + o * r - a * n,
				h = s * n + a * e - i * r,
				u = s * r + i * n - o * e,
				l = -i * e - o * n - a * r;
			return this.x = c * s + l * -i + h * -a - u * -o, this.y = h * s + l * -o + u * -i - c * -a, this.z = u * s + l * -a + c * -o - h * -i, this
		},
		project: function() {
			var t = new o;
			return function(e) {
				return t.multiplyMatrices(e.projectionMatrix, t.getInverse(e.matrixWorld)), this.applyMatrix4(t)
			}
		}(),
		unproject: function() {
			var t = new o;
			return function(e) {
				return t.multiplyMatrices(e.matrixWorld, t.getInverse(e.projectionMatrix)), this.applyMatrix4(t)
			}
		}(),
		transformDirection: function(t) {
			var e = this.x,
				n = this.y,
				r = this.z,
				i = t.elements;
			return this.x = i[0] * e + i[4] * n + i[8] * r, this.y = i[1] * e + i[5] * n + i[9] * r, this.z = i[2] * e + i[6] * n + i[10] * r, this.normalize()
		},
		divide: function(t) {
			return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
		},
		divideScalar: function(t) {
			return this.multiplyScalar(1 / t)
		},
		min: function(t) {
			return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
		},
		max: function(t) {
			return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
		},
		clamp: function(t, e) {
			return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
		},
		clampScalar: function() {
			var t = new s,
				e = new s;
			return function(n, r) {
				return t.set(n, n, n), e.set(r, r, r), this.clamp(t, e)
			}
		}(),
		clampLength: function(t, e) {
			var n = this.length();
			return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
		},
		floor: function() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
		},
		ceil: function() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
		},
		round: function() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
		},
		roundToZero: function() {
			return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
		},
		negate: function() {
			return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
		},
		dot: function(t) {
			return this.x * t.x + this.y * t.y + this.z * t.z
		},
		lengthSq: function() {
			return this.x * this.x + this.y * this.y + this.z * this.z
		},
		length: function() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
		},
		manhattanLength: function() {
			return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
		},
		normalize: function() {
			return this.divideScalar(this.length() || 1)
		},
		setLength: function(t) {
			return this.normalize().multiplyScalar(t)
		},
		lerp: function(t, e) {
			return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
		},
		lerpVectors: function(t, e, n) {
			return this.subVectors(e, t).multiplyScalar(n).add(t)
		},
		cross: function(t, e) {
			return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t)
		},
		crossVectors: function(t, e) {
			var n = t.x,
				r = t.y,
				i = t.z,
				o = e.x,
				a = e.y,
				s = e.z;
			return this.x = r * s - i * a, this.y = i * o - n * s, this.z = n * a - r * o, this
		},
		projectOnVector: function(t) {
			var e = t.dot(this) / t.lengthSq();
			return this.copy(t).multiplyScalar(e)
		},
		projectOnPlane: function() {
			var t = new s;
			return function(e) {
				return t.copy(this).projectOnVector(e), this.sub(t)
			}
		}(),
		reflect: function() {
			var t = new s;
			return function(e) {
				return this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)))
			}
		}(),
		angleTo: function(t) {
			var e = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq());
			return Math.acos(Ic.clamp(e, -1, 1))
		},
		distanceTo: function(t) {
			return Math.sqrt(this.distanceToSquared(t))
		},
		distanceToSquared: function(t) {
			var e = this.x - t.x,
				n = this.y - t.y,
				r = this.z - t.z;
			return e * e + n * n + r * r
		},
		manhattanDistanceTo: function(t) {
			return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
		},
		setFromSpherical: function(t) {
			var e = Math.sin(t.phi) * t.radius;
			return this.x = e * Math.sin(t.theta), this.y = Math.cos(t.phi) * t.radius, this.z = e * Math.cos(t.theta), this
		},
		setFromCylindrical: function(t) {
			return this.x = t.radius * Math.sin(t.theta), this.y = t.y, this.z = t.radius * Math.cos(t.theta), this
		},
		setFromMatrixPosition: function(t) {
			var e = t.elements;
			return this.x = e[12], this.y = e[13], this.z = e[14], this
		},
		setFromMatrixScale: function(t) {
			var e = this.setFromMatrixColumn(t, 0).length(),
				n = this.setFromMatrixColumn(t, 1).length(),
				r = this.setFromMatrixColumn(t, 2).length();
			return this.x = e, this.y = n, this.z = r, this
		},
		setFromMatrixColumn: function(t, e) {
			return this.fromArray(t.elements, 4 * e)
		},
		equals: function(t) {
			return t.x === this.x && t.y === this.y && t.z === this.z
		},
		fromArray: function(t, e) {
			return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
		},
		toArray: function(t, e) {
			return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
		},
		fromBufferAttribute: function(t, e, n) {
			return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
		}
	}), Object.assign(c.prototype, {
		isMatrix3: !0,
		set: function(t, e, n, r, i, o, a, s, c) {
			var h = this.elements;
			return h[0] = t, h[1] = r, h[2] = a, h[3] = e, h[4] = i, h[5] = s, h[6] = n, h[7] = o, h[8] = c, this
		},
		identity: function() {
			return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
		},
		clone: function() {
			return(new this.constructor).fromArray(this.elements)
		},
		copy: function(t) {
			var e = this.elements,
				n = t.elements;
			return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this
		},
		setFromMatrix4: function(t) {
			var e = t.elements;
			return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
		},
		applyToBufferAttribute: function() {
			var t = new s;
			return function(e) {
				for(var n = 0, r = e.count; n < r; n++) t.x = e.getX(n), t.y = e.getY(n), t.z = e.getZ(n), t.applyMatrix3(this), e.setXYZ(n, t.x, t.y, t.z);
				return e
			}
		}(),
		multiply: function(t) {
			return this.multiplyMatrices(this, t)
		},
		premultiply: function(t) {
			return this.multiplyMatrices(t, this)
		},
		multiplyMatrices: function(t, e) {
			var n = t.elements,
				r = e.elements,
				i = this.elements,
				o = n[0],
				a = n[3],
				s = n[6],
				c = n[1],
				h = n[4],
				u = n[7],
				l = n[2],
				d = n[5],
				p = n[8],
				f = r[0],
				m = r[3],
				g = r[6],
				v = r[1],
				y = r[4],
				x = r[7],
				w = r[2],
				b = r[5],
				_ = r[8];
			return i[0] = o * f + a * v + s * w, i[3] = o * m + a * y + s * b, i[6] = o * g + a * x + s * _, i[1] = c * f + h * v + u * w, i[4] = c * m + h * y + u * b, i[7] = c * g + h * x + u * _, i[2] = l * f + d * v + p * w, i[5] = l * m + d * y + p * b, i[8] = l * g + d * x + p * _, this
		},
		multiplyScalar: function(t) {
			var e = this.elements;
			return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
		},
		determinant: function() {
			var t = this.elements,
				e = t[0],
				n = t[1],
				r = t[2],
				i = t[3],
				o = t[4],
				a = t[5],
				s = t[6],
				c = t[7],
				h = t[8];
			return e * o * h - e * a * c - n * i * h + n * a * s + r * i * c - r * o * s
		},
		getInverse: function(t, e) {
			t && t.isMatrix4 && console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");
			var n = t.elements,
				r = this.elements,
				i = n[0],
				o = n[1],
				a = n[2],
				s = n[3],
				c = n[4],
				h = n[5],
				u = n[6],
				l = n[7],
				d = n[8],
				p = d * c - h * l,
				f = h * u - d * s,
				m = l * s - c * u,
				g = i * p + o * f + a * m;
			if(0 === g) {
				var v = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";
				if(!0 === e) throw new Error(v);
				return console.warn(v), this.identity()
			}
			var y = 1 / g;
			return r[0] = p * y, r[1] = (a * l - d * o) * y, r[2] = (h * o - a * c) * y, r[3] = f * y, r[4] = (d * i - a * u) * y, r[5] = (a * s - h * i) * y, r[6] = m * y, r[7] = (o * u - l * i) * y, r[8] = (c * i - o * s) * y, this
		},
		transpose: function() {
			var t, e = this.elements;
			return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
		},
		getNormalMatrix: function(t) {
			return this.setFromMatrix4(t).getInverse(this).transpose()
		},
		transposeIntoArray: function(t) {
			var e = this.elements;
			return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
		},
		setUvTransform: function(t, e, n, r, i, o, a) {
			var s = Math.cos(i),
				c = Math.sin(i);
			this.set(n * s, n * c, -n * (s * o + c * a) + o + t, -r * c, r * s, -r * (-c * o + s * a) + a + e, 0, 0, 1)
		},
		scale: function(t, e) {
			var n = this.elements;
			return n[0] *= t, n[3] *= t, n[6] *= t, n[1] *= e, n[4] *= e, n[7] *= e, this
		},
		rotate: function(t) {
			var e = Math.cos(t),
				n = Math.sin(t),
				r = this.elements,
				i = r[0],
				o = r[3],
				a = r[6],
				s = r[1],
				c = r[4],
				h = r[7];
			return r[0] = e * i + n * s, r[3] = e * o + n * c, r[6] = e * a + n * h, r[1] = -n * i + e * s, r[4] = -n * o + e * c, r[7] = -n * a + e * h, this
		},
		translate: function(t, e) {
			var n = this.elements;
			return n[0] += t * n[2], n[3] += t * n[5], n[6] += t * n[8], n[1] += e * n[2], n[4] += e * n[5], n[7] += e * n[8], this
		},
		equals: function(t) {
			for(var e = this.elements, n = t.elements, r = 0; r < 9; r++)
				if(e[r] !== n[r]) return !1;
			return !0
		},
		fromArray: function(t, e) {
			void 0 === e && (e = 0);
			for(var n = 0; n < 9; n++) this.elements[n] = t[n + e];
			return this
		},
		toArray: function(t, e) {
			void 0 === t && (t = []), void 0 === e && (e = 0);
			var n = this.elements;
			return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t
		}
	});
	var Nc = 0;
	h.DEFAULT_IMAGE = void 0, h.DEFAULT_MAPPING = os, h.prototype = Object.assign(Object.create(r.prototype), {
		constructor: h,
		isTexture: !0,
		updateMatrix: function() {
			this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
		},
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this
		},
		toJSON: function(t) {
			var e = void 0 === t || "string" == typeof t;
			if(!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
			var n = {
				metadata: {
					version: 4.5,
					type: "Texture",
					generator: "Texture.toJSON"
				},
				uuid: this.uuid,
				name: this.name,
				mapping: this.mapping,
				repeat: [this.repeat.x, this.repeat.y],
				offset: [this.offset.x, this.offset.y],
				center: [this.center.x, this.center.y],
				rotation: this.rotation,
				wrap: [this.wrapS, this.wrapT],
				format: this.format,
				minFilter: this.minFilter,
				magFilter: this.magFilter,
				anisotropy: this.anisotropy,
				flipY: this.flipY
			};
			if(void 0 !== this.image) {
				var r = this.image;
				void 0 === r.uuid && (r.uuid = Ic.generateUUID()), e || void 0 !== t.images[r.uuid] || (t.images[r.uuid] = {
					uuid: r.uuid,
					url: function(t) {
						var e;
						if(t instanceof HTMLCanvasElement) e = t;
						else {
							e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), e.width = t.width, e.height = t.height;
							var n = e.getContext("2d");
							t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height)
						}
						return e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
					}(r)
				}), n.image = r.uuid
			}
			return e || (t.textures[this.uuid] = n), n
		},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		},
		transformUv: function(t) {
			if(this.mapping === os) {
				if(t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch(this.wrapS) {
					case ps:
						t.x = t.x - Math.floor(t.x);
						break;
					case fs:
						t.x = t.x < 0 ? 0 : 1;
						break;
					case ms:
						1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
				}
				if(t.y < 0 || t.y > 1) switch(this.wrapT) {
					case ps:
						t.y = t.y - Math.floor(t.y);
						break;
					case fs:
						t.y = t.y < 0 ? 0 : 1;
						break;
					case ms:
						1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
				}
				this.flipY && (t.y = 1 - t.y)
			}
		}
	}), Object.defineProperty(h.prototype, "needsUpdate", {
		set: function(t) {
			!0 === t && this.version++
		}
	}), Object.assign(u.prototype, {
		isVector4: !0,
		set: function(t, e, n, r) {
			return this.x = t, this.y = e, this.z = n, this.w = r, this
		},
		setScalar: function(t) {
			return this.x = t, this.y = t, this.z = t, this.w = t, this
		},
		setX: function(t) {
			return this.x = t, this
		},
		setY: function(t) {
			return this.y = t, this
		},
		setZ: function(t) {
			return this.z = t, this
		},
		setW: function(t) {
			return this.w = t, this
		},
		setComponent: function(t, e) {
			switch(t) {
				case 0:
					this.x = e;
					break;
				case 1:
					this.y = e;
					break;
				case 2:
					this.z = e;
					break;
				case 3:
					this.w = e;
					break;
				default:
					throw new Error("index is out of range: " + t)
			}
			return this
		},
		getComponent: function(t) {
			switch(t) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				case 2:
					return this.z;
				case 3:
					return this.w;
				default:
					throw new Error("index is out of range: " + t)
			}
		},
		clone: function() {
			return new this.constructor(this.x, this.y, this.z, this.w)
		},
		copy: function(t) {
			return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
		},
		add: function(t, e) {
			return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this)
		},
		addScalar: function(t) {
			return this.x += t, this.y += t, this.z += t, this.w += t, this
		},
		addVectors: function(t, e) {
			return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
		},
		addScaledVector: function(t, e) {
			return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
		},
		sub: function(t, e) {
			return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this)
		},
		subScalar: function(t) {
			return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
		},
		subVectors: function(t, e) {
			return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
		},
		multiplyScalar: function(t) {
			return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
		},
		applyMatrix4: function(t) {
			var e = this.x,
				n = this.y,
				r = this.z,
				i = this.w,
				o = t.elements;
			return this.x = o[0] * e + o[4] * n + o[8] * r + o[12] * i, this.y = o[1] * e + o[5] * n + o[9] * r + o[13] * i, this.z = o[2] * e + o[6] * n + o[10] * r + o[14] * i, this.w = o[3] * e + o[7] * n + o[11] * r + o[15] * i, this
		},
		divideScalar: function(t) {
			return this.multiplyScalar(1 / t)
		},
		setAxisAngleFromQuaternion: function(t) {
			this.w = 2 * Math.acos(t.w);
			var e = Math.sqrt(1 - t.w * t.w);
			return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
		},
		setAxisAngleFromRotationMatrix: function(t) {
			var e, n, r, i, o = t.elements,
				a = o[0],
				s = o[4],
				c = o[8],
				h = o[1],
				u = o[5],
				l = o[9],
				d = o[2],
				p = o[6],
				f = o[10];
			if(Math.abs(s - h) < .01 && Math.abs(c - d) < .01 && Math.abs(l - p) < .01) {
				if(Math.abs(s + h) < .1 && Math.abs(c + d) < .1 && Math.abs(l + p) < .1 && Math.abs(a + u + f - 3) < .1) return this.set(1, 0, 0, 0), this;
				e = Math.PI;
				var m = (a + 1) / 2,
					g = (u + 1) / 2,
					v = (f + 1) / 2,
					y = (s + h) / 4,
					x = (c + d) / 4,
					w = (l + p) / 4;
				return m > g && m > v ? m < .01 ? (n = 0, r = .707106781, i = .707106781) : (n = Math.sqrt(m), r = y / n, i = x / n) : g > v ? g < .01 ? (n = .707106781, r = 0, i = .707106781) : (r = Math.sqrt(g), n = y / r, i = w / r) : v < .01 ? (n = .707106781, r = .707106781, i = 0) : (i = Math.sqrt(v), n = x / i, r = w / i), this.set(n, r, i, e), this
			}
			var b = Math.sqrt((p - l) * (p - l) + (c - d) * (c - d) + (h - s) * (h - s));
			return Math.abs(b) < .001 && (b = 1), this.x = (p - l) / b, this.y = (c - d) / b, this.z = (h - s) / b, this.w = Math.acos((a + u + f - 1) / 2), this
		},
		min: function(t) {
			return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
		},
		max: function(t) {
			return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
		},
		clamp: function(t, e) {
			return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
		},
		clampScalar: function() {
			var t, e;
			return function(n, r) {
				return void 0 === t && (t = new u, e = new u), t.set(n, n, n, n), e.set(r, r, r, r), this.clamp(t, e)
			}
		}(),
		clampLength: function(t, e) {
			var n = this.length();
			return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
		},
		floor: function() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
		},
		ceil: function() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
		},
		round: function() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
		},
		roundToZero: function() {
			return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
		},
		negate: function() {
			return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
		},
		dot: function(t) {
			return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
		},
		lengthSq: function() {
			return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
		},
		length: function() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
		},
		manhattanLength: function() {
			return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
		},
		normalize: function() {
			return this.divideScalar(this.length() || 1)
		},
		setLength: function(t) {
			return this.normalize().multiplyScalar(t)
		},
		lerp: function(t, e) {
			return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
		},
		lerpVectors: function(t, e, n) {
			return this.subVectors(e, t).multiplyScalar(n).add(t)
		},
		equals: function(t) {
			return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
		},
		fromArray: function(t, e) {
			return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
		},
		toArray: function(t, e) {
			return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
		},
		fromBufferAttribute: function(t, e, n) {
			return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
		}
	}), l.prototype = Object.assign(Object.create(r.prototype), {
		constructor: l,
		isWebGLRenderTarget: !0,
		setSize: function(t, e) {
			this.width === t && this.height === e || (this.width = t, this.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
		},
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this
		},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	}), d.prototype = Object.create(l.prototype), d.prototype.constructor = d, d.prototype.isWebGLRenderTargetCube = !0, p.prototype = Object.create(h.prototype), p.prototype.constructor = p, p.prototype.isDataTexture = !0, Object.assign(f.prototype, {
		isBox3: !0,
		set: function(t, e) {
			return this.min.copy(t), this.max.copy(e), this
		},
		setFromArray: function(t) {
			for(var e = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, o = -1 / 0, a = -1 / 0, s = 0, c = t.length; s < c; s += 3) {
				var h = t[s],
					u = t[s + 1],
					l = t[s + 2];
				h < e && (e = h), u < n && (n = u), l < r && (r = l), h > i && (i = h), u > o && (o = u), l > a && (a = l)
			}
			return this.min.set(e, n, r), this.max.set(i, o, a), this
		},
		setFromBufferAttribute: function(t) {
			for(var e = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, o = -1 / 0, a = -1 / 0, s = 0, c = t.count; s < c; s++) {
				var h = t.getX(s),
					u = t.getY(s),
					l = t.getZ(s);
				h < e && (e = h), u < n && (n = u), l < r && (r = l), h > i && (i = h), u > o && (o = u), l > a && (a = l)
			}
			return this.min.set(e, n, r), this.max.set(i, o, a), this
		},
		setFromPoints: function(t) {
			this.makeEmpty();
			for(var e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
			return this
		},
		setFromCenterAndSize: function() {
			var t = new s;
			return function(e, n) {
				var r = t.copy(n).multiplyScalar(.5);
				return this.min.copy(e).sub(r), this.max.copy(e).add(r), this
			}
		}(),
		setFromObject: function(t) {
			return this.makeEmpty(), this.expandByObject(t)
		},
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.min.copy(t.min), this.max.copy(t.max), this
		},
		makeEmpty: function() {
			return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
		},
		isEmpty: function() {
			return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
		},
		getCenter: function(t) {
			return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"), t = new s), this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
		},
		getSize: function(t) {
			return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"), t = new s), this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
		},
		expandByPoint: function(t) {
			return this.min.min(t), this.max.max(t), this
		},
		expandByVector: function(t) {
			return this.min.sub(t), this.max.add(t), this
		},
		expandByScalar: function(t) {
			return this.min.addScalar(-t), this.max.addScalar(t), this
		},
		expandByObject: function() {
			function t(t) {
				var o = t.geometry;
				if(void 0 !== o)
					if(o.isGeometry) {
						var a = o.vertices;
						for(n = 0, r = a.length; n < r; n++) i.copy(a[n]), i.applyMatrix4(t.matrixWorld), e.expandByPoint(i)
					} else if(o.isBufferGeometry) {
					var s = o.attributes.position;
					if(void 0 !== s)
						for(n = 0, r = s.count; n < r; n++) i.fromBufferAttribute(s, n).applyMatrix4(t.matrixWorld), e.expandByPoint(i)
				}
			}
			var e, n, r, i = new s;
			return function(n) {
				return e = this, n.updateMatrixWorld(!0), n.traverse(t), this
			}
		}(),
		containsPoint: function(t) {
			return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
		},
		containsBox: function(t) {
			return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
		},
		getParameter: function(t, e) {
			return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"), e = new s), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
		},
		intersectsBox: function(t) {
			return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
		},
		intersectsSphere: function() {
			var t = new s;
			return function(e) {
				return this.clampPoint(e.center, t), t.distanceToSquared(e.center) <= e.radius * e.radius
			}
		}(),
		intersectsPlane: function(t) {
			var e, n;
			return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= t.constant && n >= t.constant
		},
		intersectsTriangle: function() {
			function t(t) {
				var i, o;
				for(i = 0, o = t.length - 3; i <= o; i += 3) {
					c.fromArray(t, i);
					var a = u.x * Math.abs(c.x) + u.y * Math.abs(c.y) + u.z * Math.abs(c.z),
						s = e.dot(c),
						h = n.dot(c),
						l = r.dot(c);
					if(Math.max(-Math.max(s, h, l), Math.min(s, h, l)) > a) return !1
				}
				return !0
			}
			var e = new s,
				n = new s,
				r = new s,
				i = new s,
				o = new s,
				a = new s,
				c = new s,
				h = new s,
				u = new s,
				l = new s;
			return function(s) {
				if(this.isEmpty()) return !1;
				this.getCenter(h), u.subVectors(this.max, h), e.subVectors(s.a, h), n.subVectors(s.b, h), r.subVectors(s.c, h), i.subVectors(n, e), o.subVectors(r, n), a.subVectors(e, r);
				var c = [0, -i.z, i.y, 0, -o.z, o.y, 0, -a.z, a.y, i.z, 0, -i.x, o.z, 0, -o.x, a.z, 0, -a.x, -i.y, i.x, 0, -o.y, o.x, 0, -a.y, a.x, 0];
				return !!t(c) && (c = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!t(c) && (l.crossVectors(i, o), c = [l.x, l.y, l.z], t(c)))
			}
		}(),
		clampPoint: function(t, e) {
			return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"), e = new s), e.copy(t).clamp(this.min, this.max)
		},
		distanceToPoint: function() {
			var t = new s;
			return function(e) {
				return t.copy(e).clamp(this.min, this.max).sub(e).length()
			}
		}(),
		getBoundingSphere: function() {
			var t = new s;
			return function(e) {
				return void 0 === e && (console.warn("THREE.Box3: .getBoundingSphere() target is now required"), e = new m), this.getCenter(e.center), e.radius = .5 * this.getSize(t).length(), e
			}
		}(),
		intersect: function(t) {
			return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
		},
		union: function(t) {
			return this.min.min(t.min), this.max.max(t.max), this
		},
		applyMatrix4: function(t) {
			if(this.isEmpty()) return this;
			var e = t.elements,
				n = e[0] * this.min.x,
				r = e[1] * this.min.x,
				i = e[2] * this.min.x,
				o = e[0] * this.max.x,
				a = e[1] * this.max.x,
				s = e[2] * this.max.x,
				c = e[4] * this.min.y,
				h = e[5] * this.min.y,
				u = e[6] * this.min.y,
				l = e[4] * this.max.y,
				d = e[5] * this.max.y,
				p = e[6] * this.max.y,
				f = e[8] * this.min.z,
				m = e[9] * this.min.z,
				g = e[10] * this.min.z,
				v = e[8] * this.max.z,
				y = e[9] * this.max.z,
				x = e[10] * this.max.z;
			return this.min.x = Math.min(n, o) + Math.min(c, l) + Math.min(f, v) + e[12], this.min.y = Math.min(r, a) + Math.min(h, d) + Math.min(m, y) + e[13], this.min.z = Math.min(i, s) + Math.min(u, p) + Math.min(g, x) + e[14], this.max.x = Math.max(n, o) + Math.max(c, l) + Math.max(f, v) + e[12], this.max.y = Math.max(r, a) + Math.max(h, d) + Math.max(m, y) + e[13], this.max.z = Math.max(i, s) + Math.max(u, p) + Math.max(g, x) + e[14], this
		},
		translate: function(t) {
			return this.min.add(t), this.max.add(t), this
		},
		equals: function(t) {
			return t.min.equals(this.min) && t.max.equals(this.max)
		}
	}), Object.assign(m.prototype, {
		set: function(t, e) {
			return this.center.copy(t), this.radius = e, this
		},
		setFromPoints: function() {
			var t = new f;
			return function(e, n) {
				var r = this.center;
				void 0 !== n ? r.copy(n) : t.setFromPoints(e).getCenter(r);
				for(var i = 0, o = 0, a = e.length; o < a; o++) i = Math.max(i, r.distanceToSquared(e[o]));
				return this.radius = Math.sqrt(i), this
			}
		}(),
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.center.copy(t.center), this.radius = t.radius, this
		},
		empty: function() {
			return this.radius <= 0
		},
		containsPoint: function(t) {
			return t.distanceToSquared(this.center) <= this.radius * this.radius
		},
		distanceToPoint: function(t) {
			return t.distanceTo(this.center) - this.radius
		},
		intersectsSphere: function(t) {
			var e = this.radius + t.radius;
			return t.center.distanceToSquared(this.center) <= e * e
		},
		intersectsBox: function(t) {
			return t.intersectsSphere(this)
		},
		intersectsPlane: function(t) {
			return Math.abs(t.distanceToPoint(this.center)) <= this.radius
		},
		clampPoint: function(t, e) {
			var n = this.center.distanceToSquared(t);
			return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"), e = new s), e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e
		},
		getBoundingBox: function(t) {
			return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), t = new f), t.set(this.center, this.center), t.expandByScalar(this.radius), t
		},
		applyMatrix4: function(t) {
			return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
		},
		translate: function(t) {
			return this.center.add(t), this
		},
		equals: function(t) {
			return t.center.equals(this.center) && t.radius === this.radius
		}
	}), Object.assign(g.prototype, {
		set: function(t, e) {
			return this.normal.copy(t), this.constant = e, this
		},
		setComponents: function(t, e, n, r) {
			return this.normal.set(t, e, n), this.constant = r, this
		},
		setFromNormalAndCoplanarPoint: function(t, e) {
			return this.normal.copy(t), this.constant = -e.dot(this.normal), this
		},
		setFromCoplanarPoints: function() {
			var t = new s,
				e = new s;
			return function(n, r, i) {
				var o = t.subVectors(i, r).cross(e.subVectors(n, r)).normalize();
				return this.setFromNormalAndCoplanarPoint(o, n), this
			}
		}(),
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.normal.copy(t.normal), this.constant = t.constant, this
		},
		normalize: function() {
			var t = 1 / this.normal.length();
			return this.normal.multiplyScalar(t), this.constant *= t, this
		},
		negate: function() {
			return this.constant *= -1, this.normal.negate(), this
		},
		distanceToPoint: function(t) {
			return this.normal.dot(t) + this.constant
		},
		distanceToSphere: function(t) {
			return this.distanceToPoint(t.center) - t.radius
		},
		projectPoint: function(t, e) {
			return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"), e = new s), e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
		},
		intersectLine: function() {
			var t = new s;
			return function(e, n) {
				void 0 === n && (console.warn("THREE.Plane: .intersectLine() target is now required"), n = new s);
				var r = e.delta(t),
					i = this.normal.dot(r);
				if(0 !== i) {
					var o = -(e.start.dot(this.normal) + this.constant) / i;
					if(!(o < 0 || o > 1)) return n.copy(r).multiplyScalar(o).add(e.start)
				} else if(0 === this.distanceToPoint(e.start)) return n.copy(e.start)
			}
		}(),
		intersectsLine: function(t) {
			var e = this.distanceToPoint(t.start),
				n = this.distanceToPoint(t.end);
			return e < 0 && n > 0 || n < 0 && e > 0
		},
		intersectsBox: function(t) {
			return t.intersectsPlane(this)
		},
		intersectsSphere: function(t) {
			return t.intersectsPlane(this)
		},
		coplanarPoint: function(t) {
			return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), t = new s), t.copy(this.normal).multiplyScalar(-this.constant)
		},
		applyMatrix4: function() {
			var t = new s,
				e = new c;
			return function(n, r) {
				var i = r || e.getNormalMatrix(n),
					o = this.coplanarPoint(t).applyMatrix4(n),
					a = this.normal.applyMatrix3(i).normalize();
				return this.constant = -o.dot(a), this
			}
		}(),
		translate: function(t) {
			return this.constant -= t.dot(this.normal), this
		},
		equals: function(t) {
			return t.normal.equals(this.normal) && t.constant === this.constant
		}
	}), Object.assign(v.prototype, {
		set: function(t, e, n, r, i, o) {
			var a = this.planes;
			return a[0].copy(t), a[1].copy(e), a[2].copy(n), a[3].copy(r), a[4].copy(i), a[5].copy(o), this
		},
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(t) {
			for(var e = this.planes, n = 0; n < 6; n++) e[n].copy(t.planes[n]);
			return this
		},
		setFromMatrix: function(t) {
			var e = this.planes,
				n = t.elements,
				r = n[0],
				i = n[1],
				o = n[2],
				a = n[3],
				s = n[4],
				c = n[5],
				h = n[6],
				u = n[7],
				l = n[8],
				d = n[9],
				p = n[10],
				f = n[11],
				m = n[12],
				g = n[13],
				v = n[14],
				y = n[15];
			return e[0].setComponents(a - r, u - s, f - l, y - m).normalize(), e[1].setComponents(a + r, u + s, f + l, y + m).normalize(), e[2].setComponents(a + i, u + c, f + d, y + g).normalize(), e[3].setComponents(a - i, u - c, f - d, y - g).normalize(), e[4].setComponents(a - o, u - h, f - p, y - v).normalize(), e[5].setComponents(a + o, u + h, f + p, y + v).normalize(), this
		},
		intersectsObject: function() {
			var t = new m;
			return function(e) {
				var n = e.geometry;
				return null === n.boundingSphere && n.computeBoundingSphere(), t.copy(n.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(t)
			}
		}(),
		intersectsSprite: function() {
			var t = new m;
			return function(e) {
				return t.center.set(0, 0, 0), t.radius = .7071067811865476, t.applyMatrix4(e.matrixWorld), this.intersectsSphere(t)
			}
		}(),
		intersectsSphere: function(t) {
			for(var e = this.planes, n = t.center, r = -t.radius, i = 0; i < 6; i++) {
				if(e[i].distanceToPoint(n) < r) return !1
			}
			return !0
		},
		intersectsBox: function() {
			var t = new s,
				e = new s;
			return function(n) {
				for(var r = this.planes, i = 0; i < 6; i++) {
					var o = r[i];
					t.x = o.normal.x > 0 ? n.min.x : n.max.x, e.x = o.normal.x > 0 ? n.max.x : n.min.x, t.y = o.normal.y > 0 ? n.min.y : n.max.y, e.y = o.normal.y > 0 ? n.max.y : n.min.y, t.z = o.normal.z > 0 ? n.min.z : n.max.z, e.z = o.normal.z > 0 ? n.max.z : n.min.z;
					var a = o.distanceToPoint(t),
						s = o.distanceToPoint(e);
					if(a < 0 && s < 0) return !1
				}
				return !0
			}
		}(),
		containsPoint: function(t) {
			for(var e = this.planes, n = 0; n < 6; n++)
				if(e[n].distanceToPoint(t) < 0) return !1;
			return !0
		}
	});
	var Dc = {
			alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
			alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",
			alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
			aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",
			aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
			begin_vertex: "\nvec3 transformed = vec3( position );\n",
			beginnormal_vertex: "\nvec3 objectNormal = vec3( normal );\n",
			bsdfs: "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t}\n\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
			bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
			clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif\n",
			clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",
			clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",
			clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
			color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
			color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",
			color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
			color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
			common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\n",
			cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
			defaultnormal_vertex: "vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n",
			displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",
			displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
			emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
			emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",
			encodings_fragment: "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
			encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n",
			envmap_fragment: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
			envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
			envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",
			envmap_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
			fog_vertex: "\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif",
			fog_pars_vertex: "#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n",
			fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",
			fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",
			gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",
			lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
			lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
			lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
			lights_pars_begin: "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n",
			lights_pars_maps: "#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
			lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
			lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
			lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
			lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
			lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearCoatRadiance = vec3( 0.0 );\n#endif\n",
			lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), maxMipLevel );\n\t#ifndef STANDARD\n\t\tclearCoatRadiance += getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );\n\t#endif\n#endif\n",
			lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
			logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
			logdepthbuf_pars_fragment: "#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",
			logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",
			logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif\n",
			map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",
			map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",
			map_particle_fragment: "#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",
			map_particle_pars_fragment: "#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif\n",
			metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n",
			metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
			morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
			morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
			morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
			normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif\n",
			normal_fragment_maps: "#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
			normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tmat3 tsn = mat3( S, T, N );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy *= normalScale;\n\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",
			packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
			premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",
			project_vertex: "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n",
			dithering_fragment: "#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n",
			dithering_pars_fragment: "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n",
			roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n",
			roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
			shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
			shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
			shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
			shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
			skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
			skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
			skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif\n",
			skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
			specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
			specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
			tonemapping_fragment: "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",
			tonemapping_pars_fragment: "#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
			uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",
			uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\n",
			uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
			uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
			uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
			uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
			worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif\n",
			cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
			cube_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}\n",
			depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
			depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
			distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}\n",
			distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}\n",
			equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",
			equirect_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
			linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
			linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",
			meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
			meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",
			meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_pars_maps>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
			meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_pars_maps>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
			meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_pars_maps>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
			meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
			meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars_begin>\n#include <lights_pars_maps>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
			meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
			normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
			normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",
			points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
			points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}\n",
			shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}\n",
			shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n"
		},
		Uc = {
			merge: function(t) {
				for(var e = {}, n = 0; n < t.length; n++) {
					var r = this.clone(t[n]);
					for(var i in r) e[i] = r[i]
				}
				return e
			},
			clone: function(t) {
				var e = {};
				for(var n in t) {
					e[n] = {};
					for(var r in t[n]) {
						var i = t[n][r];
						i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture) ? e[n][r] = i.clone() : Array.isArray(i) ? e[n][r] = i.slice() : e[n][r] = i
					}
				}
				return e
			}
		},
		Bc = {
			aliceblue: 15792383,
			antiquewhite: 16444375,
			aqua: 65535,
			aquamarine: 8388564,
			azure: 15794175,
			beige: 16119260,
			bisque: 16770244,
			black: 0,
			blanchedalmond: 16772045,
			blue: 255,
			blueviolet: 9055202,
			brown: 10824234,
			burlywood: 14596231,
			cadetblue: 6266528,
			chartreuse: 8388352,
			chocolate: 13789470,
			coral: 16744272,
			cornflowerblue: 6591981,
			cornsilk: 16775388,
			crimson: 14423100,
			cyan: 65535,
			darkblue: 139,
			darkcyan: 35723,
			darkgoldenrod: 12092939,
			darkgray: 11119017,
			darkgreen: 25600,
			darkgrey: 11119017,
			darkkhaki: 12433259,
			darkmagenta: 9109643,
			darkolivegreen: 5597999,
			darkorange: 16747520,
			darkorchid: 10040012,
			darkred: 9109504,
			darksalmon: 15308410,
			darkseagreen: 9419919,
			darkslateblue: 4734347,
			darkslategray: 3100495,
			darkslategrey: 3100495,
			darkturquoise: 52945,
			darkviolet: 9699539,
			deeppink: 16716947,
			deepskyblue: 49151,
			dimgray: 6908265,
			dimgrey: 6908265,
			dodgerblue: 2003199,
			firebrick: 11674146,
			floralwhite: 16775920,
			forestgreen: 2263842,
			fuchsia: 16711935,
			gainsboro: 14474460,
			ghostwhite: 16316671,
			gold: 16766720,
			goldenrod: 14329120,
			gray: 8421504,
			green: 32768,
			greenyellow: 11403055,
			grey: 8421504,
			honeydew: 15794160,
			hotpink: 16738740,
			indianred: 13458524,
			indigo: 4915330,
			ivory: 16777200,
			khaki: 15787660,
			lavender: 15132410,
			lavenderblush: 16773365,
			lawngreen: 8190976,
			lemonchiffon: 16775885,
			lightblue: 11393254,
			lightcoral: 15761536,
			lightcyan: 14745599,
			lightgoldenrodyellow: 16448210,
			lightgray: 13882323,
			lightgreen: 9498256,
			lightgrey: 13882323,
			lightpink: 16758465,
			lightsalmon: 16752762,
			lightseagreen: 2142890,
			lightskyblue: 8900346,
			lightslategray: 7833753,
			lightslategrey: 7833753,
			lightsteelblue: 11584734,
			lightyellow: 16777184,
			lime: 65280,
			limegreen: 3329330,
			linen: 16445670,
			magenta: 16711935,
			maroon: 8388608,
			mediumaquamarine: 6737322,
			mediumblue: 205,
			mediumorchid: 12211667,
			mediumpurple: 9662683,
			mediumseagreen: 3978097,
			mediumslateblue: 8087790,
			mediumspringgreen: 64154,
			mediumturquoise: 4772300,
			mediumvioletred: 13047173,
			midnightblue: 1644912,
			mintcream: 16121850,
			mistyrose: 16770273,
			moccasin: 16770229,
			navajowhite: 16768685,
			navy: 128,
			oldlace: 16643558,
			olive: 8421376,
			olivedrab: 7048739,
			orange: 16753920,
			orangered: 16729344,
			orchid: 14315734,
			palegoldenrod: 15657130,
			palegreen: 10025880,
			paleturquoise: 11529966,
			palevioletred: 14381203,
			papayawhip: 16773077,
			peachpuff: 16767673,
			peru: 13468991,
			pink: 16761035,
			plum: 14524637,
			powderblue: 11591910,
			purple: 8388736,
			rebeccapurple: 6697881,
			red: 16711680,
			rosybrown: 12357519,
			royalblue: 4286945,
			saddlebrown: 9127187,
			salmon: 16416882,
			sandybrown: 16032864,
			seagreen: 3050327,
			seashell: 16774638,
			sienna: 10506797,
			silver: 12632256,
			skyblue: 8900331,
			slateblue: 6970061,
			slategray: 7372944,
			slategrey: 7372944,
			snow: 16775930,
			springgreen: 65407,
			steelblue: 4620980,
			tan: 13808780,
			teal: 32896,
			thistle: 14204888,
			tomato: 16737095,
			turquoise: 4251856,
			violet: 15631086,
			wheat: 16113331,
			white: 16777215,
			whitesmoke: 16119285,
			yellow: 16776960,
			yellowgreen: 10145074
		};
	Object.assign(y.prototype, {
		isColor: !0,
		r: 1,
		g: 1,
		b: 1,
		set: function(t) {
			return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
		},
		setScalar: function(t) {
			return this.r = t, this.g = t, this.b = t, this
		},
		setHex: function(t) {
			return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
		},
		setRGB: function(t, e, n) {
			return this.r = t, this.g = e, this.b = n, this
		},
		setHSL: function() {
			function t(t, e, n) {
				return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
			}
			return function(e, n, r) {
				if(e = Ic.euclideanModulo(e, 1), n = Ic.clamp(n, 0, 1), r = Ic.clamp(r, 0, 1), 0 === n) this.r = this.g = this.b = r;
				else {
					var i = r <= .5 ? r * (1 + n) : r + n - r * n,
						o = 2 * r - i;
					this.r = t(o, i, e + 1 / 3), this.g = t(o, i, e), this.b = t(o, i, e - 1 / 3)
				}
				return this
			}
		}(),
		setStyle: function(t) {
			function e(e) {
				void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
			}
			var n;
			if(n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
				var r, i = n[1],
					o = n[2];
				switch(i) {
					case "rgb":
					case "rgba":
						if(r = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)) return this.r = Math.min(255, parseInt(r[1], 10)) / 255, this.g = Math.min(255, parseInt(r[2], 10)) / 255, this.b = Math.min(255, parseInt(r[3], 10)) / 255, e(r[5]), this;
						if(r = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)) return this.r = Math.min(100, parseInt(r[1], 10)) / 100, this.g = Math.min(100, parseInt(r[2], 10)) / 100, this.b = Math.min(100, parseInt(r[3], 10)) / 100, e(r[5]), this;
						break;
					case "hsl":
					case "hsla":
						if(r = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)) {
							var a = parseFloat(r[1]) / 360,
								s = parseInt(r[2], 10) / 100,
								c = parseInt(r[3], 10) / 100;
							return e(r[5]), this.setHSL(a, s, c)
						}
				}
			} else if(n = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
				var h = n[1],
					u = h.length;
				if(3 === u) return this.r = parseInt(h.charAt(0) + h.charAt(0), 16) / 255, this.g = parseInt(h.charAt(1) + h.charAt(1), 16) / 255, this.b = parseInt(h.charAt(2) + h.charAt(2), 16) / 255, this;
				if(6 === u) return this.r = parseInt(h.charAt(0) + h.charAt(1), 16) / 255, this.g = parseInt(h.charAt(2) + h.charAt(3), 16) / 255, this.b = parseInt(h.charAt(4) + h.charAt(5), 16) / 255, this
			}
			if(t && t.length > 0) {
				var h = Bc[t];
				void 0 !== h ? this.setHex(h) : console.warn("THREE.Color: Unknown color " + t)
			}
			return this
		},
		clone: function() {
			return new this.constructor(this.r, this.g, this.b)
		},
		copy: function(t) {
			return this.r = t.r, this.g = t.g, this.b = t.b, this
		},
		copyGammaToLinear: function(t, e) {
			return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this
		},
		copyLinearToGamma: function(t, e) {
			void 0 === e && (e = 2);
			var n = e > 0 ? 1 / e : 1;
			return this.r = Math.pow(t.r, n), this.g = Math.pow(t.g, n), this.b = Math.pow(t.b, n), this
		},
		convertGammaToLinear: function(t) {
			return this.copyGammaToLinear(this, t), this
		},
		convertLinearToGamma: function(t) {
			return this.copyLinearToGamma(this, t), this
		},
		getHex: function() {
			return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
		},
		getHexString: function() {
			return("000000" + this.getHex().toString(16)).slice(-6)
		},
		getHSL: function(t) {
			void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"), t = {
				h: 0,
				s: 0,
				l: 0
			});
			var e, n, r = this.r,
				i = this.g,
				o = this.b,
				a = Math.max(r, i, o),
				s = Math.min(r, i, o),
				c = (s + a) / 2;
			if(s === a) e = 0, n = 0;
			else {
				var h = a - s;
				switch(n = c <= .5 ? h / (a + s) : h / (2 - a - s), a) {
					case r:
						e = (i - o) / h + (i < o ? 6 : 0);
						break;
					case i:
						e = (o - r) / h + 2;
						break;
					case o:
						e = (r - i) / h + 4
				}
				e /= 6
			}
			return t.h = e, t.s = n, t.l = c, t
		},
		getStyle: function() {
			return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
		},
		offsetHSL: function() {
			var t = {};
			return function(e, n, r) {
				return this.getHSL(t), t.h += e, t.s += n, t.l += r, this.setHSL(t.h, t.s, t.l), this
			}
		}(),
		add: function(t) {
			return this.r += t.r, this.g += t.g, this.b += t.b, this
		},
		addColors: function(t, e) {
			return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
		},
		addScalar: function(t) {
			return this.r += t, this.g += t, this.b += t, this
		},
		sub: function(t) {
			return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
		},
		multiply: function(t) {
			return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
		},
		multiplyScalar: function(t) {
			return this.r *= t, this.g *= t, this.b *= t, this
		},
		lerp: function(t, e) {
			return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
		},
		equals: function(t) {
			return t.r === this.r && t.g === this.g && t.b === this.b
		},
		fromArray: function(t, e) {
			return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
		},
		toArray: function(t, e) {
			return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
		},
		toJSON: function() {
			return this.getHex()
		}
	});
	var Fc = {
			common: {
				diffuse: {
					value: new y(15658734)
				},
				opacity: {
					value: 1
				},
				map: {
					value: null
				},
				uvTransform: {
					value: new c
				},
				alphaMap: {
					value: null
				}
			},
			specularmap: {
				specularMap: {
					value: null
				}
			},
			envmap: {
				envMap: {
					value: null
				},
				flipEnvMap: {
					value: -1
				},
				reflectivity: {
					value: 1
				},
				refractionRatio: {
					value: .98
				},
				maxMipLevel: {
					value: 0
				}
			},
			aomap: {
				aoMap: {
					value: null
				},
				aoMapIntensity: {
					value: 1
				}
			},
			lightmap: {
				lightMap: {
					value: null
				},
				lightMapIntensity: {
					value: 1
				}
			},
			emissivemap: {
				emissiveMap: {
					value: null
				}
			},
			bumpmap: {
				bumpMap: {
					value: null
				},
				bumpScale: {
					value: 1
				}
			},
			normalmap: {
				normalMap: {
					value: null
				},
				normalScale: {
					value: new i(1, 1)
				}
			},
			displacementmap: {
				displacementMap: {
					value: null
				},
				displacementScale: {
					value: 1
				},
				displacementBias: {
					value: 0
				}
			},
			roughnessmap: {
				roughnessMap: {
					value: null
				}
			},
			metalnessmap: {
				metalnessMap: {
					value: null
				}
			},
			gradientmap: {
				gradientMap: {
					value: null
				}
			},
			fog: {
				fogDensity: {
					value: 25e-5
				},
				fogNear: {
					value: 1
				},
				fogFar: {
					value: 2e3
				},
				fogColor: {
					value: new y(16777215)
				}
			},
			lights: {
				ambientLightColor: {
					value: []
				},
				directionalLights: {
					value: [],
					properties: {
						direction: {},
						color: {},
						shadow: {},
						shadowBias: {},
						shadowRadius: {},
						shadowMapSize: {}
					}
				},
				directionalShadowMap: {
					value: []
				},
				directionalShadowMatrix: {
					value: []
				},
				spotLights: {
					value: [],
					properties: {
						color: {},
						position: {},
						direction: {},
						distance: {},
						coneCos: {},
						penumbraCos: {},
						decay: {},
						shadow: {},
						shadowBias: {},
						shadowRadius: {},
						shadowMapSize: {}
					}
				},
				spotShadowMap: {
					value: []
				},
				spotShadowMatrix: {
					value: []
				},
				pointLights: {
					value: [],
					properties: {
						color: {},
						position: {},
						decay: {},
						distance: {},
						shadow: {},
						shadowBias: {},
						shadowRadius: {},
						shadowMapSize: {},
						shadowCameraNear: {},
						shadowCameraFar: {}
					}
				},
				pointShadowMap: {
					value: []
				},
				pointShadowMatrix: {
					value: []
				},
				hemisphereLights: {
					value: [],
					properties: {
						direction: {},
						skyColor: {},
						groundColor: {}
					}
				},
				rectAreaLights: {
					value: [],
					properties: {
						color: {},
						position: {},
						width: {},
						height: {}
					}
				}
			},
			points: {
				diffuse: {
					value: new y(15658734)
				},
				opacity: {
					value: 1
				},
				size: {
					value: 1
				},
				scale: {
					value: 1
				},
				map: {
					value: null
				},
				uvTransform: {
					value: new c
				}
			}
		},
		zc = {
			basic: {
				uniforms: Uc.merge([Fc.common, Fc.specularmap, Fc.envmap, Fc.aomap, Fc.lightmap, Fc.fog]),
				vertexShader: Dc.meshbasic_vert,
				fragmentShader: Dc.meshbasic_frag
			},
			lambert: {
				uniforms: Uc.merge([Fc.common, Fc.specularmap, Fc.envmap, Fc.aomap, Fc.lightmap, Fc.emissivemap, Fc.fog, Fc.lights, {
					emissive: {
						value: new y(0)
					}
				}]),
				vertexShader: Dc.meshlambert_vert,
				fragmentShader: Dc.meshlambert_frag
			},
			phong: {
				uniforms: Uc.merge([Fc.common, Fc.specularmap, Fc.envmap, Fc.aomap, Fc.lightmap, Fc.emissivemap, Fc.bumpmap, Fc.normalmap, Fc.displacementmap, Fc.gradientmap, Fc.fog, Fc.lights, {
					emissive: {
						value: new y(0)
					},
					specular: {
						value: new y(1118481)
					},
					shininess: {
						value: 30
					}
				}]),
				vertexShader: Dc.meshphong_vert,
				fragmentShader: Dc.meshphong_frag
			},
			standard: {
				uniforms: Uc.merge([Fc.common, Fc.envmap, Fc.aomap, Fc.lightmap, Fc.emissivemap, Fc.bumpmap, Fc.normalmap, Fc.displacementmap, Fc.roughnessmap, Fc.metalnessmap, Fc.fog, Fc.lights, {
					emissive: {
						value: new y(0)
					},
					roughness: {
						value: .5
					},
					metalness: {
						value: .5
					},
					envMapIntensity: {
						value: 1
					}
				}]),
				vertexShader: Dc.meshphysical_vert,
				fragmentShader: Dc.meshphysical_frag
			},
			points: {
				uniforms: Uc.merge([Fc.points, Fc.fog]),
				vertexShader: Dc.points_vert,
				fragmentShader: Dc.points_frag
			},
			dashed: {
				uniforms: Uc.merge([Fc.common, Fc.fog, {
					scale: {
						value: 1
					},
					dashSize: {
						value: 1
					},
					totalSize: {
						value: 2
					}
				}]),
				vertexShader: Dc.linedashed_vert,
				fragmentShader: Dc.linedashed_frag
			},
			depth: {
				uniforms: Uc.merge([Fc.common, Fc.displacementmap]),
				vertexShader: Dc.depth_vert,
				fragmentShader: Dc.depth_frag
			},
			normal: {
				uniforms: Uc.merge([Fc.common, Fc.bumpmap, Fc.normalmap, Fc.displacementmap, {
					opacity: {
						value: 1
					}
				}]),
				vertexShader: Dc.normal_vert,
				fragmentShader: Dc.normal_frag
			},
			cube: {
				uniforms: {
					tCube: {
						value: null
					},
					tFlip: {
						value: -1
					},
					opacity: {
						value: 1
					}
				},
				vertexShader: Dc.cube_vert,
				fragmentShader: Dc.cube_frag
			},
			equirect: {
				uniforms: {
					tEquirect: {
						value: null
					}
				},
				vertexShader: Dc.equirect_vert,
				fragmentShader: Dc.equirect_frag
			},
			distanceRGBA: {
				uniforms: Uc.merge([Fc.common, Fc.displacementmap, {
					referencePosition: {
						value: new s
					},
					nearDistance: {
						value: 1
					},
					farDistance: {
						value: 1e3
					}
				}]),
				vertexShader: Dc.distanceRGBA_vert,
				fragmentShader: Dc.distanceRGBA_frag
			},
			shadow: {
				uniforms: Uc.merge([Fc.lights, Fc.fog, {
					color: {
						value: new y(0)
					},
					opacity: {
						value: 1
					}
				}]),
				vertexShader: Dc.shadow_vert,
				fragmentShader: Dc.shadow_frag
			}
		};
	zc.physical = {
		uniforms: Uc.merge([zc.standard.uniforms, {
			clearCoat: {
				value: 0
			},
			clearCoatRoughness: {
				value: 0
			}
		}]),
		vertexShader: Dc.meshphysical_vert,
		fragmentShader: Dc.meshphysical_frag
	}, b.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], b.DefaultOrder = "XYZ", Object.defineProperties(b.prototype, {
		x: {
			get: function() {
				return this._x
			},
			set: function(t) {
				this._x = t, this.onChangeCallback()
			}
		},
		y: {
			get: function() {
				return this._y
			},
			set: function(t) {
				this._y = t, this.onChangeCallback()
			}
		},
		z: {
			get: function() {
				return this._z
			},
			set: function(t) {
				this._z = t, this.onChangeCallback()
			}
		},
		order: {
			get: function() {
				return this._order
			},
			set: function(t) {
				this._order = t, this.onChangeCallback()
			}
		}
	}), Object.assign(b.prototype, {
		isEuler: !0,
		set: function(t, e, n, r) {
			return this._x = t, this._y = e, this._z = n, this._order = r || this._order, this.onChangeCallback(), this
		},
		clone: function() {
			return new this.constructor(this._x, this._y, this._z, this._order)
		},
		copy: function(t) {
			return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this.onChangeCallback(), this
		},
		setFromRotationMatrix: function(t, e, n) {
			var r = Ic.clamp,
				i = t.elements,
				o = i[0],
				a = i[4],
				s = i[8],
				c = i[1],
				h = i[5],
				u = i[9],
				l = i[2],
				d = i[6],
				p = i[10];
			return e = e || this._order, "XYZ" === e ? (this._y = Math.asin(r(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(-u, p), this._z = Math.atan2(-a, o)) : (this._x = Math.atan2(d, h), this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-r(u, -1, 1)), Math.abs(u) < .99999 ? (this._y = Math.atan2(s, p), this._z = Math.atan2(c, h)) : (this._y = Math.atan2(-l, o), this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(r(d, -1, 1)), Math.abs(d) < .99999 ? (this._y = Math.atan2(-l, p), this._z = Math.atan2(-a, h)) : (this._y = 0, this._z = Math.atan2(c, o))) : "ZYX" === e ? (this._y = Math.asin(-r(l, -1, 1)), Math.abs(l) < .99999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(c, o)) : (this._x = 0, this._z = Math.atan2(-a, h))) : "YZX" === e ? (this._z = Math.asin(r(c, -1, 1)), Math.abs(c) < .99999 ? (this._x = Math.atan2(-u, h), this._y = Math.atan2(-l, o)) : (this._x = 0, this._y = Math.atan2(s, p))) : "XZY" === e ? (this._z = Math.asin(-r(a, -1, 1)), Math.abs(a) < .99999 ? (this._x = Math.atan2(d, h), this._y = Math.atan2(s, o)) : (this._x = Math.atan2(-u, p), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e), this._order = e, !1 !== n && this.onChangeCallback(), this
		},
		setFromQuaternion: function() {
			var t = new o;
			return function(e, n, r) {
				return t.makeRotationFromQuaternion(e), this.setFromRotationMatrix(t, n, r)
			}
		}(),
		setFromVector3: function(t, e) {
			return this.set(t.x, t.y, t.z, e || this._order)
		},
		reorder: function() {
			var t = new a;
			return function(e) {
				return t.setFromEuler(this), this.setFromQuaternion(t, e)
			}
		}(),
		equals: function(t) {
			return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
		},
		fromArray: function(t) {
			return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this.onChangeCallback(), this
		},
		toArray: function(t, e) {
			return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
		},
		toVector3: function(t) {
			return t ? t.set(this._x, this._y, this._z) : new s(this._x, this._y, this._z)
		},
		onChange: function(t) {
			return this.onChangeCallback = t, this
		},
		onChangeCallback: function() {}
	}), Object.assign(_.prototype, {
		set: function(t) {
			this.mask = 1 << t | 0
		},
		enable: function(t) {
			this.mask |= 1 << t | 0
		},
		toggle: function(t) {
			this.mask ^= 1 << t | 0
		},
		disable: function(t) {
			this.mask &= ~(1 << t | 0)
		},
		test: function(t) {
			return 0 != (this.mask & t.mask)
		}
	});
	var Gc = 0;
	M.DefaultUp = new s(0, 1, 0), M.DefaultMatrixAutoUpdate = !0, M.prototype = Object.assign(Object.create(r.prototype), {
		constructor: M,
		isObject3D: !0,
		onBeforeRender: function() {},
		onAfterRender: function() {},
		applyMatrix: function(t) {
			this.matrix.multiplyMatrices(t, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
		},
		applyQuaternion: function(t) {
			return this.quaternion.premultiply(t), this
		},
		setRotationFromAxisAngle: function(t, e) {
			this.quaternion.setFromAxisAngle(t, e)
		},
		setRotationFromEuler: function(t) {
			this.quaternion.setFromEuler(t, !0)
		},
		setRotationFromMatrix: function(t) {
			this.quaternion.setFromRotationMatrix(t)
		},
		setRotationFromQuaternion: function(t) {
			this.quaternion.copy(t)
		},
		rotateOnAxis: function() {
			var t = new a;
			return function(e, n) {
				return t.setFromAxisAngle(e, n), this.quaternion.multiply(t), this
			}
		}(),
		rotateOnWorldAxis: function() {
			var t = new a;
			return function(e, n) {
				return t.setFromAxisAngle(e, n), this.quaternion.premultiply(t), this
			}
		}(),
		rotateX: function() {
			var t = new s(1, 0, 0);
			return function(e) {
				return this.rotateOnAxis(t, e)
			}
		}(),
		rotateY: function() {
			var t = new s(0, 1, 0);
			return function(e) {
				return this.rotateOnAxis(t, e)
			}
		}(),
		rotateZ: function() {
			var t = new s(0, 0, 1);
			return function(e) {
				return this.rotateOnAxis(t, e)
			}
		}(),
		translateOnAxis: function() {
			var t = new s;
			return function(e, n) {
				return t.copy(e).applyQuaternion(this.quaternion), this.position.add(t.multiplyScalar(n)), this
			}
		}(),
		translateX: function() {
			var t = new s(1, 0, 0);
			return function(e) {
				return this.translateOnAxis(t, e)
			}
		}(),
		translateY: function() {
			var t = new s(0, 1, 0);
			return function(e) {
				return this.translateOnAxis(t, e)
			}
		}(),
		translateZ: function() {
			var t = new s(0, 0, 1);
			return function(e) {
				return this.translateOnAxis(t, e)
			}
		}(),
		localToWorld: function(t) {
			return t.applyMatrix4(this.matrixWorld)
		},
		worldToLocal: function() {
			var t = new o;
			return function(e) {
				return e.applyMatrix4(t.getInverse(this.matrixWorld))
			}
		}(),
		lookAt: function() {
			var t = new o,
				e = new s;
			return function(n, r, i) {
				n.isVector3 ? e.copy(n) : e.set(n, r, i), this.isCamera ? t.lookAt(this.position, e, this.up) : t.lookAt(e, this.position, this.up), this.quaternion.setFromRotationMatrix(t)
			}
		}(),
		add: function(t) {
			if(arguments.length > 1) {
				for(var e = 0; e < arguments.length; e++) this.add(arguments[e]);
				return this
			}
			return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, t.dispatchEvent({
				type: "added"
			}), this.children.push(t)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
		},
		remove: function(t) {
			if(arguments.length > 1) {
				for(var e = 0; e < arguments.length; e++) this.remove(arguments[e]);
				return this
			}
			var n = this.children.indexOf(t);
			return -1 !== n && (t.parent = null, t.dispatchEvent({
				type: "removed"
			}), this.children.splice(n, 1)), this
		},
		getObjectById: function(t) {
			return this.getObjectByProperty("id", t)
		},
		getObjectByName: function(t) {
			return this.getObjectByProperty("name", t)
		},
		getObjectByProperty: function(t, e) {
			if(this[t] === e) return this;
			for(var n = 0, r = this.children.length; n < r; n++) {
				var i = this.children[n],
					o = i.getObjectByProperty(t, e);
				if(void 0 !== o) return o
			}
		},
		getWorldPosition: function(t) {
			return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), t = new s), this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld)
		},
		getWorldQuaternion: function() {
			var t = new s,
				e = new s;
			return function(n) {
				return void 0 === n && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), n = new a), this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, n, e), n
			}
		}(),
		getWorldScale: function() {
			var t = new s,
				e = new a;
			return function(n) {
				return void 0 === n && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), n = new s), this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, e, n), n
			}
		}(),
		getWorldDirection: function() {
			var t = new a;
			return function(e) {
				return void 0 === e && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), e = new s), this.getWorldQuaternion(t), e.set(0, 0, 1).applyQuaternion(t)
			}
		}(),
		raycast: function() {},
		traverse: function(t) {
			t(this);
			for(var e = this.children, n = 0, r = e.length; n < r; n++) e[n].traverse(t)
		},
		traverseVisible: function(t) {
			if(!1 !== this.visible) {
				t(this);
				for(var e = this.children, n = 0, r = e.length; n < r; n++) e[n].traverseVisible(t)
			}
		},
		traverseAncestors: function(t) {
			var e = this.parent;
			null !== e && (t(e), e.traverseAncestors(t))
		},
		updateMatrix: function() {
			this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
		},
		updateMatrixWorld: function(t) {
			this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
			for(var e = this.children, n = 0, r = e.length; n < r; n++) e[n].updateMatrixWorld(t)
		},
		toJSON: function(t) {
			function e(e, n) {
				return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid
			}

			function n(t) {
				var e = [];
				for(var n in t) {
					var r = t[n];
					delete r.metadata, e.push(r)
				}
				return e
			}
			var r = void 0 === t || "string" == typeof t,
				i = {};
			r && (t = {
				geometries: {},
				materials: {},
				textures: {},
				images: {},
				shapes: {}
			}, i.metadata = {
				version: 4.5,
				type: "Object",
				generator: "Object3D.toJSON"
			});
			var o = {};
			if(o.uuid = this.uuid, o.type = this.type, "" !== this.name && (o.name = this.name), !0 === this.castShadow && (o.castShadow = !0), !0 === this.receiveShadow && (o.receiveShadow = !0), !1 === this.visible && (o.visible = !1), !1 === this.frustumCulled && (o.frustumCulled = !1), 0 !== this.renderOrder && (o.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (o.userData = this.userData), o.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (o.matrixAutoUpdate = !1), void 0 !== this.geometry) {
				o.geometry = e(t.geometries, this.geometry);
				var a = this.geometry.parameters;
				if(void 0 !== a && void 0 !== a.shapes) {
					var s = a.shapes;
					if(Array.isArray(s))
						for(var c = 0, h = s.length; c < h; c++) {
							var u = s[c];
							e(t.shapes, u)
						} else e(t.shapes, s)
				}
			}
			if(void 0 !== this.material)
				if(Array.isArray(this.material)) {
					for(var l = [], c = 0, h = this.material.length; c < h; c++) l.push(e(t.materials, this.material[c]));
					o.material = l
				} else o.material = e(t.materials, this.material);
			if(this.children.length > 0) {
				o.children = [];
				for(var c = 0; c < this.children.length; c++) o.children.push(this.children[c].toJSON(t).object)
			}
			if(r) {
				var d = n(t.geometries),
					p = n(t.materials),
					f = n(t.textures),
					m = n(t.images),
					s = n(t.shapes);
				d.length > 0 && (i.geometries = d), p.length > 0 && (i.materials = p), f.length > 0 && (i.textures = f), m.length > 0 && (i.images = m), s.length > 0 && (i.shapes = s)
			}
			return i.object = o, i
		},
		clone: function(t) {
			return(new this.constructor).copy(this, t)
		},
		copy: function(t, e) {
			if(void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
				for(var n = 0; n < t.children.length; n++) {
					var r = t.children[n];
					this.add(r.clone())
				}
			return this
		}
	}), E.prototype = Object.assign(Object.create(M.prototype), {
		constructor: E,
		isCamera: !0,
		copy: function(t, e) {
			return M.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this
		},
		getWorldDirection: function() {
			var t = new a;
			return function(e) {
				return void 0 === e && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), e = new s), this.getWorldQuaternion(t), e.set(0, 0, -1).applyQuaternion(t)
			}
		}(),
		updateMatrixWorld: function(t) {
			M.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.getInverse(this.matrixWorld)
		},
		clone: function() {
			return(new this.constructor).copy(this)
		}
	}), T.prototype = Object.assign(Object.create(E.prototype), {
		constructor: T,
		isOrthographicCamera: !0,
		copy: function(t, e) {
			return E.prototype.copy.call(this, t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
		},
		setViewOffset: function(t, e, n, r, i, o) {
			null === this.view && (this.view = {
				enabled: !0,
				fullWidth: 1,
				fullHeight: 1,
				offsetX: 0,
				offsetY: 0,
				width: 1,
				height: 1
			}), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = o, this.updateProjectionMatrix()
		},
		clearViewOffset: function() {
			null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
		},
		updateProjectionMatrix: function() {
			var t = (this.right - this.left) / (2 * this.zoom),
				e = (this.top - this.bottom) / (2 * this.zoom),
				n = (this.right + this.left) / 2,
				r = (this.top + this.bottom) / 2,
				i = n - t,
				o = n + t,
				a = r + e,
				s = r - e;
			if(null !== this.view && this.view.enabled) {
				var c = this.zoom / (this.view.width / this.view.fullWidth),
					h = this.zoom / (this.view.height / this.view.fullHeight),
					u = (this.right - this.left) / this.view.width,
					l = (this.top - this.bottom) / this.view.height;
				i += u * (this.view.offsetX / c), o = i + u * (this.view.width / c), a -= l * (this.view.offsetY / h), s = a - l * (this.view.height / h)
			}
			this.projectionMatrix.makeOrthographic(i, o, a, s, this.near, this.far)
		},
		toJSON: function(t) {
			var e = M.prototype.toJSON.call(this, t);
			return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
		}
	}), Object.assign(S.prototype, {
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(t) {
			this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex;
			for(var e = 0, n = t.vertexNormals.length; e < n; e++) this.vertexNormals[e] = t.vertexNormals[e].clone();
			for(var e = 0, n = t.vertexColors.length; e < n; e++) this.vertexColors[e] = t.vertexColors[e].clone();
			return this
		}
	});
	var Hc = 0;
	A.prototype = Object.assign(Object.create(r.prototype), {
		constructor: A,
		isGeometry: !0,
		applyMatrix: function(t) {
			for(var e = (new c).getNormalMatrix(t), n = 0, r = this.vertices.length; n < r; n++) {
				this.vertices[n].applyMatrix4(t)
			}
			for(var n = 0, r = this.faces.length; n < r; n++) {
				var i = this.faces[n];
				i.normal.applyMatrix3(e).normalize();
				for(var o = 0, a = i.vertexNormals.length; o < a; o++) i.vertexNormals[o].applyMatrix3(e).normalize()
			}
			return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
		},
		rotateX: function() {
			var t = new o;
			return function(e) {
				return t.makeRotationX(e), this.applyMatrix(t), this
			}
		}(),
		rotateY: function() {
			var t = new o;
			return function(e) {
				return t.makeRotationY(e), this.applyMatrix(t), this
			}
		}(),
		rotateZ: function() {
			var t = new o;
			return function(e) {
				return t.makeRotationZ(e), this.applyMatrix(t), this
			}
		}(),
		translate: function() {
			var t = new o;
			return function(e, n, r) {
				return t.makeTranslation(e, n, r), this.applyMatrix(t), this
			}
		}(),
		scale: function() {
			var t = new o;
			return function(e, n, r) {
				return t.makeScale(e, n, r), this.applyMatrix(t), this
			}
		}(),
		lookAt: function() {
			var t = new M;
			return function(e) {
				t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
			}
		}(),
		fromBufferGeometry: function(t) {
			function e(t, e, r, i) {
				var o = void 0 !== c ? [d[t].clone(), d[e].clone(), d[r].clone()] : [],
					a = void 0 !== h ? [n.colors[t].clone(), n.colors[e].clone(), n.colors[r].clone()] : [],
					s = new S(t, e, r, o, a, i);
				n.faces.push(s), void 0 !== u && n.faceVertexUvs[0].push([p[t].clone(), p[e].clone(), p[r].clone()]), void 0 !== l && n.faceVertexUvs[1].push([f[t].clone(), f[e].clone(), f[r].clone()])
			}
			var n = this,
				r = null !== t.index ? t.index.array : void 0,
				o = t.attributes,
				a = o.position.array,
				c = void 0 !== o.normal ? o.normal.array : void 0,
				h = void 0 !== o.color ? o.color.array : void 0,
				u = void 0 !== o.uv ? o.uv.array : void 0,
				l = void 0 !== o.uv2 ? o.uv2.array : void 0;
			void 0 !== l && (this.faceVertexUvs[1] = []);
			for(var d = [], p = [], f = [], m = 0, g = 0; m < a.length; m += 3, g += 2) n.vertices.push(new s(a[m], a[m + 1], a[m + 2])), void 0 !== c && d.push(new s(c[m], c[m + 1], c[m + 2])), void 0 !== h && n.colors.push(new y(h[m], h[m + 1], h[m + 2])), void 0 !== u && p.push(new i(u[g], u[g + 1])), void 0 !== l && f.push(new i(l[g], l[g + 1]));
			var v = t.groups;
			if(v.length > 0)
				for(var m = 0; m < v.length; m++)
					for(var x = v[m], w = x.start, b = x.count, g = w, _ = w + b; g < _; g += 3) void 0 !== r ? e(r[g], r[g + 1], r[g + 2], x.materialIndex) : e(g, g + 1, g + 2, x.materialIndex);
			else if(void 0 !== r)
				for(var m = 0; m < r.length; m += 3) e(r[m], r[m + 1], r[m + 2]);
			else
				for(var m = 0; m < a.length / 3; m += 3) e(m, m + 1, m + 2);
			return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this
		},
		center: function() {
			var t = new s;
			return function() {
				return this.computeBoundingBox(), this.boundingBox.getCenter(t).negate(), this.translate(t.x, t.y, t.z), this
			}
		}(),
		normalize: function() {
			this.computeBoundingSphere();
			var t = this.boundingSphere.center,
				e = this.boundingSphere.radius,
				n = 0 === e ? 1 : 1 / e,
				r = new o;
			return r.set(n, 0, 0, -n * t.x, 0, n, 0, -n * t.y, 0, 0, n, -n * t.z, 0, 0, 0, 1), this.applyMatrix(r), this
		},
		computeFaceNormals: function() {
			for(var t = new s, e = new s, n = 0, r = this.faces.length; n < r; n++) {
				var i = this.faces[n],
					o = this.vertices[i.a],
					a = this.vertices[i.b],
					c = this.vertices[i.c];
				t.subVectors(c, a), e.subVectors(o, a), t.cross(e), t.normalize(), i.normal.copy(t)
			}
		},
		computeVertexNormals: function(t) {
			void 0 === t && (t = !0);
			var e, n, r, i, o, a;
			for(a = new Array(this.vertices.length), e = 0, n = this.vertices.length; e < n; e++) a[e] = new s;
			if(t) {
				var c, h, u, l = new s,
					d = new s;
				for(r = 0, i = this.faces.length; r < i; r++) o = this.faces[r], c = this.vertices[o.a], h = this.vertices[o.b], u = this.vertices[o.c], l.subVectors(u, h), d.subVectors(c, h), l.cross(d), a[o.a].add(l), a[o.b].add(l), a[o.c].add(l)
			} else
				for(this.computeFaceNormals(), r = 0, i = this.faces.length; r < i; r++) o = this.faces[r], a[o.a].add(o.normal), a[o.b].add(o.normal), a[o.c].add(o.normal);
			for(e = 0, n = this.vertices.length; e < n; e++) a[e].normalize();
			for(r = 0, i = this.faces.length; r < i; r++) {
				o = this.faces[r];
				var p = o.vertexNormals;
				3 === p.length ? (p[0].copy(a[o.a]), p[1].copy(a[o.b]), p[2].copy(a[o.c])) : (p[0] = a[o.a].clone(), p[1] = a[o.b].clone(), p[2] = a[o.c].clone())
			}
			this.faces.length > 0 && (this.normalsNeedUpdate = !0)
		},
		computeFlatVertexNormals: function() {
			var t, e, n;
			for(this.computeFaceNormals(), t = 0, e = this.faces.length; t < e; t++) {
				n = this.faces[t];
				var r = n.vertexNormals;
				3 === r.length ? (r[0].copy(n.normal), r[1].copy(n.normal), r[2].copy(n.normal)) : (r[0] = n.normal.clone(), r[1] = n.normal.clone(), r[2] = n.normal.clone())
			}
			this.faces.length > 0 && (this.normalsNeedUpdate = !0)
		},
		computeMorphNormals: function() {
			var t, e, n, r, i;
			for(n = 0, r = this.faces.length; n < r; n++)
				for(i = this.faces[n], i.__originalFaceNormal ? i.__originalFaceNormal.copy(i.normal) : i.__originalFaceNormal = i.normal.clone(), i.__originalVertexNormals || (i.__originalVertexNormals = []), t = 0, e = i.vertexNormals.length; t < e; t++) i.__originalVertexNormals[t] ? i.__originalVertexNormals[t].copy(i.vertexNormals[t]) : i.__originalVertexNormals[t] = i.vertexNormals[t].clone();
			var o = new A;
			for(o.faces = this.faces, t = 0, e = this.morphTargets.length; t < e; t++) {
				if(!this.morphNormals[t]) {
					this.morphNormals[t] = {}, this.morphNormals[t].faceNormals = [], this.morphNormals[t].vertexNormals = [];
					var a, c, h = this.morphNormals[t].faceNormals,
						u = this.morphNormals[t].vertexNormals;
					for(n = 0, r = this.faces.length; n < r; n++) a = new s, c = {
						a: new s,
						b: new s,
						c: new s
					}, h.push(a), u.push(c)
				}
				var l = this.morphNormals[t];
				o.vertices = this.morphTargets[t].vertices, o.computeFaceNormals(), o.computeVertexNormals();
				var a, c;
				for(n = 0, r = this.faces.length; n < r; n++) i = this.faces[n], a = l.faceNormals[n], c = l.vertexNormals[n], a.copy(i.normal), c.a.copy(i.vertexNormals[0]), c.b.copy(i.vertexNormals[1]), c.c.copy(i.vertexNormals[2])
			}
			for(n = 0, r = this.faces.length; n < r; n++) i = this.faces[n], i.normal = i.__originalFaceNormal, i.vertexNormals = i.__originalVertexNormals
		},
		computeBoundingBox: function() {
			null === this.boundingBox && (this.boundingBox = new f), this.boundingBox.setFromPoints(this.vertices)
		},
		computeBoundingSphere: function() {
			null === this.boundingSphere && (this.boundingSphere = new m), this.boundingSphere.setFromPoints(this.vertices)
		},
		merge: function(t, e, n) {
			if(!t || !t.isGeometry) return void console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t);
			var r, i = this.vertices.length,
				o = this.vertices,
				a = t.vertices,
				s = this.faces,
				h = t.faces,
				u = this.faceVertexUvs[0],
				l = t.faceVertexUvs[0],
				d = this.colors,
				p = t.colors;
			void 0 === n && (n = 0), void 0 !== e && (r = (new c).getNormalMatrix(e));
			for(var f = 0, m = a.length; f < m; f++) {
				var g = a[f],
					v = g.clone();
				void 0 !== e && v.applyMatrix4(e), o.push(v)
			}
			for(var f = 0, m = p.length; f < m; f++) d.push(p[f].clone());
			for(f = 0, m = h.length; f < m; f++) {
				var y, x, w, b = h[f],
					_ = b.vertexNormals,
					M = b.vertexColors;
				y = new S(b.a + i, b.b + i, b.c + i), y.normal.copy(b.normal), void 0 !== r && y.normal.applyMatrix3(r).normalize();
				for(var E = 0, T = _.length; E < T; E++) x = _[E].clone(), void 0 !== r && x.applyMatrix3(r).normalize(), y.vertexNormals.push(x);
				y.color.copy(b.color);
				for(var E = 0, T = M.length; E < T; E++) w = M[E], y.vertexColors.push(w.clone());
				y.materialIndex = b.materialIndex + n, s.push(y)
			}
			for(f = 0, m = l.length; f < m; f++) {
				var A = l[f],
					R = [];
				if(void 0 !== A) {
					for(var E = 0, T = A.length; E < T; E++) R.push(A[E].clone());
					u.push(R)
				}
			}
		},
		mergeMesh: function(t) {
			if(!t || !t.isMesh) return void console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t);
			t.matrixAutoUpdate && t.updateMatrix(), this.merge(t.geometry, t.matrix)
		},
		mergeVertices: function() {
			var t, e, n, r, i, o, a, s, c = {},
				h = [],
				u = [],
				l = Math.pow(10, 4);
			for(n = 0, r = this.vertices.length; n < r; n++) t = this.vertices[n], e = Math.round(t.x * l) + "_" + Math.round(t.y * l) + "_" + Math.round(t.z * l), void 0 === c[e] ? (c[e] = n, h.push(this.vertices[n]), u[n] = h.length - 1) : u[n] = u[c[e]];
			var d = [];
			for(n = 0, r = this.faces.length; n < r; n++) {
				i = this.faces[n], i.a = u[i.a], i.b = u[i.b], i.c = u[i.c], o = [i.a, i.b, i.c];
				for(var p = 0; p < 3; p++)
					if(o[p] === o[(p + 1) % 3]) {
						d.push(n);
						break
					}
			}
			for(n = d.length - 1; n >= 0; n--) {
				var f = d[n];
				for(this.faces.splice(f, 1), a = 0, s = this.faceVertexUvs.length; a < s; a++) this.faceVertexUvs[a].splice(f, 1)
			}
			var m = this.vertices.length - h.length;
			return this.vertices = h, m
		},
		setFromPoints: function(t) {
			this.vertices = [];
			for(var e = 0, n = t.length; e < n; e++) {
				var r = t[e];
				this.vertices.push(new s(r.x, r.y, r.z || 0))
			}
			return this
		},
		sortFacesByMaterialIndex: function() {
			function t(t, e) {
				return t.materialIndex - e.materialIndex
			}
			for(var e = this.faces, n = e.length, r = 0; r < n; r++) e[r]._id = r;
			e.sort(t);
			var i, o, a = this.faceVertexUvs[0],
				s = this.faceVertexUvs[1];
			a && a.length === n && (i = []), s && s.length === n && (o = []);
			for(var r = 0; r < n; r++) {
				var c = e[r]._id;
				i && i.push(a[c]), o && o.push(s[c])
			}
			i && (this.faceVertexUvs[0] = i), o && (this.faceVertexUvs[1] = o)
		},
		toJSON: function() {
			function t(t, e, n) {
				return n ? t | 1 << e : t & ~(1 << e)
			}

			function e(t) {
				var e = t.x.toString() + t.y.toString() + t.z.toString();
				return void 0 !== d[e] ? d[e] : (d[e] = l.length / 3, l.push(t.x, t.y, t.z), d[e])
			}

			function n(t) {
				var e = t.r.toString() + t.g.toString() + t.b.toString();
				return void 0 !== f[e] ? f[e] : (f[e] = p.length, p.push(t.getHex()), f[e])
			}

			function r(t) {
				var e = t.x.toString() + t.y.toString();
				return void 0 !== g[e] ? g[e] : (g[e] = m.length / 2, m.push(t.x, t.y), g[e])
			}
			var i = {
				metadata: {
					version: 4.5,
					type: "Geometry",
					generator: "Geometry.toJSON"
				}
			};
			if(i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), void 0 !== this.parameters) {
				var o = this.parameters;
				for(var a in o) void 0 !== o[a] && (i[a] = o[a]);
				return i
			}
			for(var s = [], c = 0; c < this.vertices.length; c++) {
				var h = this.vertices[c];
				s.push(h.x, h.y, h.z)
			}
			for(var u = [], l = [], d = {}, p = [], f = {}, m = [], g = {}, c = 0; c < this.faces.length; c++) {
				var v = this.faces[c],
					y = void 0 !== this.faceVertexUvs[0][c],
					x = v.normal.length() > 0,
					w = v.vertexNormals.length > 0,
					b = 1 !== v.color.r || 1 !== v.color.g || 1 !== v.color.b,
					_ = v.vertexColors.length > 0,
					M = 0;
				if(M = t(M, 0, 0), M = t(M, 1, !0), M = t(M, 2, !1), M = t(M, 3, y), M = t(M, 4, x), M = t(M, 5, w), M = t(M, 6, b), M = t(M, 7, _), u.push(M), u.push(v.a, v.b, v.c), u.push(v.materialIndex), y) {
					var E = this.faceVertexUvs[0][c];
					u.push(r(E[0]), r(E[1]), r(E[2]))
				}
				if(x && u.push(e(v.normal)), w) {
					var T = v.vertexNormals;
					u.push(e(T[0]), e(T[1]), e(T[2]))
				}
				if(b && u.push(n(v.color)), _) {
					var S = v.vertexColors;
					u.push(n(S[0]), n(S[1]), n(S[2]))
				}
			}
			return i.data = {}, i.data.vertices = s, i.data.normals = l, p.length > 0 && (i.data.colors = p), m.length > 0 && (i.data.uvs = [m]), i.data.faces = u, i
		},
		clone: function() {
			return(new A).copy(this)
		},
		copy: function(t) {
			var e, n, r, i, o, a;
			this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
				[]
			], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
			var s = t.vertices;
			for(e = 0, n = s.length; e < n; e++) this.vertices.push(s[e].clone());
			var c = t.colors;
			for(e = 0, n = c.length; e < n; e++) this.colors.push(c[e].clone());
			var h = t.faces;
			for(e = 0, n = h.length; e < n; e++) this.faces.push(h[e].clone());
			for(e = 0, n = t.faceVertexUvs.length; e < n; e++) {
				var u = t.faceVertexUvs[e];
				for(void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []), r = 0, i = u.length; r < i; r++) {
					var l = u[r],
						d = [];
					for(o = 0, a = l.length; o < a; o++) {
						var p = l[o];
						d.push(p.clone())
					}
					this.faceVertexUvs[e].push(d)
				}
			}
			var f = t.morphTargets;
			for(e = 0, n = f.length; e < n; e++) {
				var m = {};
				if(m.name = f[e].name, void 0 !== f[e].vertices)
					for(m.vertices = [], r = 0, i = f[e].vertices.length; r < i; r++) m.vertices.push(f[e].vertices[r].clone());
				if(void 0 !== f[e].normals)
					for(m.normals = [], r = 0, i = f[e].normals.length; r < i; r++) m.normals.push(f[e].normals[r].clone());
				this.morphTargets.push(m)
			}
			var g = t.morphNormals;
			for(e = 0, n = g.length; e < n; e++) {
				var v = {};
				if(void 0 !== g[e].vertexNormals)
					for(v.vertexNormals = [], r = 0, i = g[e].vertexNormals.length; r < i; r++) {
						var y = g[e].vertexNormals[r],
							x = {};
						x.a = y.a.clone(), x.b = y.b.clone(), x.c = y.c.clone(), v.vertexNormals.push(x)
					}
				if(void 0 !== g[e].faceNormals)
					for(v.faceNormals = [], r = 0, i = g[e].faceNormals.length; r < i; r++) v.faceNormals.push(g[e].faceNormals[r].clone());
				this.morphNormals.push(v)
			}
			var w = t.skinWeights;
			for(e = 0, n = w.length; e < n; e++) this.skinWeights.push(w[e].clone());
			var b = t.skinIndices;
			for(e = 0, n = b.length; e < n; e++) this.skinIndices.push(b[e].clone());
			var _ = t.lineDistances;
			for(e = 0, n = _.length; e < n; e++) this.lineDistances.push(_[e]);
			var M = t.boundingBox;
			null !== M && (this.boundingBox = M.clone());
			var E = t.boundingSphere;
			return null !== E && (this.boundingSphere = E.clone()), this.elementsNeedUpdate = t.elementsNeedUpdate, this.verticesNeedUpdate = t.verticesNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
		},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	}), Object.defineProperty(R.prototype, "needsUpdate", {
		set: function(t) {
			!0 === t && this.version++
		}
	}), Object.assign(R.prototype, {
		isBufferAttribute: !0,
		onUploadCallback: function() {},
		setArray: function(t) {
			if(Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
			return this.count = void 0 !== t ? t.length / this.itemSize : 0, this.array = t, this
		},
		setDynamic: function(t) {
			return this.dynamic = t, this
		},
		copy: function(t) {
			return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.dynamic = t.dynamic, this
		},
		copyAt: function(t, e, n) {
			t *= this.itemSize, n *= e.itemSize;
			for(var r = 0, i = this.itemSize; r < i; r++) this.array[t + r] = e.array[n + r];
			return this
		},
		copyArray: function(t) {
			return this.array.set(t), this
		},
		copyColorsArray: function(t) {
			for(var e = this.array, n = 0, r = 0, i = t.length; r < i; r++) {
				var o = t[r];
				void 0 === o && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", r), o = new y), e[n++] = o.r, e[n++] = o.g, e[n++] = o.b
			}
			return this
		},
		copyVector2sArray: function(t) {
			for(var e = this.array, n = 0, r = 0, o = t.length; r < o; r++) {
				var a = t[r];
				void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r), a = new i), e[n++] = a.x, e[n++] = a.y
			}
			return this
		},
		copyVector3sArray: function(t) {
			for(var e = this.array, n = 0, r = 0, i = t.length; r < i; r++) {
				var o = t[r];
				void 0 === o && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", r), o = new s), e[n++] = o.x, e[n++] = o.y, e[n++] = o.z
			}
			return this
		},
		copyVector4sArray: function(t) {
			for(var e = this.array, n = 0, r = 0, i = t.length; r < i; r++) {
				var o = t[r];
				void 0 === o && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", r), o = new u), e[n++] = o.x, e[n++] = o.y, e[n++] = o.z, e[n++] = o.w
			}
			return this
		},
		set: function(t, e) {
			return void 0 === e && (e = 0), this.array.set(t, e), this
		},
		getX: function(t) {
			return this.array[t * this.itemSize]
		},
		setX: function(t, e) {
			return this.array[t * this.itemSize] = e, this
		},
		getY: function(t) {
			return this.array[t * this.itemSize + 1]
		},
		setY: function(t, e) {
			return this.array[t * this.itemSize + 1] = e, this
		},
		getZ: function(t) {
			return this.array[t * this.itemSize + 2]
		},
		setZ: function(t, e) {
			return this.array[t * this.itemSize + 2] = e, this
		},
		getW: function(t) {
			return this.array[t * this.itemSize + 3]
		},
		setW: function(t, e) {
			return this.array[t * this.itemSize + 3] = e, this
		},
		setXY: function(t, e, n) {
			return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this
		},
		setXYZ: function(t, e, n, r) {
			return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = r, this
		},
		setXYZW: function(t, e, n, r, i) {
			return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = r, this.array[t + 3] = i, this
		},
		onUpload: function(t) {
			return this.onUploadCallback = t, this
		},
		clone: function() {
			return new this.constructor(this.array, this.itemSize).copy(this)
		}
	}), L.prototype = Object.create(R.prototype), L.prototype.constructor = L, P.prototype = Object.create(R.prototype), P.prototype.constructor = P, C.prototype = Object.create(R.prototype), C.prototype.constructor = C, O.prototype = Object.create(R.prototype), O.prototype.constructor = O, I.prototype = Object.create(R.prototype), I.prototype.constructor = I, N.prototype = Object.create(R.prototype), N.prototype.constructor = N, D.prototype = Object.create(R.prototype), D.prototype.constructor = D, U.prototype = Object.create(R.prototype), U.prototype.constructor = U, B.prototype = Object.create(R.prototype), B.prototype.constructor = B, Object.assign(F.prototype, {
		computeGroups: function(t) {
			for(var e, n = [], r = void 0, i = t.faces, o = 0; o < i.length; o++) {
				var a = i[o];
				a.materialIndex !== r && (r = a.materialIndex, void 0 !== e && (e.count = 3 * o - e.start, n.push(e)), e = {
					start: 3 * o,
					materialIndex: r
				})
			}
			void 0 !== e && (e.count = 3 * o - e.start, n.push(e)), this.groups = n
		},
		fromGeometry: function(t) {
			var e, n = t.faces,
				r = t.vertices,
				o = t.faceVertexUvs,
				a = o[0] && o[0].length > 0,
				s = o[1] && o[1].length > 0,
				c = t.morphTargets,
				h = c.length;
			if(h > 0) {
				e = [];
				for(var u = 0; u < h; u++) e[u] = [];
				this.morphTargets.position = e
			}
			var l, d = t.morphNormals,
				p = d.length;
			if(p > 0) {
				l = [];
				for(var u = 0; u < p; u++) l[u] = [];
				this.morphTargets.normal = l
			}
			var f = t.skinIndices,
				m = t.skinWeights,
				g = f.length === r.length,
				v = m.length === r.length;
			0 === n.length && console.error("THREE.DirectGeometry: Faceless geometries are not supported.");
			for(var u = 0; u < n.length; u++) {
				var y = n[u];
				this.vertices.push(r[y.a], r[y.b], r[y.c]);
				var x = y.vertexNormals;
				if(3 === x.length) this.normals.push(x[0], x[1], x[2]);
				else {
					var w = y.normal;
					this.normals.push(w, w, w)
				}
				var b = y.vertexColors;
				if(3 === b.length) this.colors.push(b[0], b[1], b[2]);
				else {
					var _ = y.color;
					this.colors.push(_, _, _)
				}
				if(!0 === a) {
					var M = o[0][u];
					void 0 !== M ? this.uvs.push(M[0], M[1], M[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", u), this.uvs.push(new i, new i, new i))
				}
				if(!0 === s) {
					var M = o[1][u];
					void 0 !== M ? this.uvs2.push(M[0], M[1], M[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", u), this.uvs2.push(new i, new i, new i))
				}
				for(var E = 0; E < h; E++) {
					var T = c[E].vertices;
					e[E].push(T[y.a], T[y.b], T[y.c])
				}
				for(var E = 0; E < p; E++) {
					var S = d[E].vertexNormals[u];
					l[E].push(S.a, S.b, S.c)
				}
				g && this.skinIndices.push(f[y.a], f[y.b], f[y.c]), v && this.skinWeights.push(m[y.a], m[y.b], m[y.c])
			}
			return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
		}
	});
	var Vc = 1;
	G.prototype = Object.assign(Object.create(r.prototype), {
		constructor: G,
		isBufferGeometry: !0,
		getIndex: function() {
			return this.index
		},
		setIndex: function(t) {
			Array.isArray(t) ? this.index = new(z(t) > 65535 ? D : I)(t, 1) : this.index = t
		},
		addAttribute: function(t, e) {
			return e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : (this.attributes[t] = e, this) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.addAttribute(t, new R(arguments[1], arguments[2])))
		},
		getAttribute: function(t) {
			return this.attributes[t]
		},
		removeAttribute: function(t) {
			return delete this.attributes[t], this
		},
		addGroup: function(t, e, n) {
			this.groups.push({
				start: t,
				count: e,
				materialIndex: void 0 !== n ? n : 0
			})
		},
		clearGroups: function() {
			this.groups = []
		},
		setDrawRange: function(t, e) {
			this.drawRange.start = t, this.drawRange.count = e
		},
		applyMatrix: function(t) {
			var e = this.attributes.position;
			void 0 !== e && (t.applyToBufferAttribute(e), e.needsUpdate = !0);
			var n = this.attributes.normal;
			if(void 0 !== n) {
				(new c).getNormalMatrix(t).applyToBufferAttribute(n), n.needsUpdate = !0
			}
			return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
		},
		rotateX: function() {
			var t = new o;
			return function(e) {
				return t.makeRotationX(e), this.applyMatrix(t), this
			}
		}(),
		rotateY: function() {
			var t = new o;
			return function(e) {
				return t.makeRotationY(e), this.applyMatrix(t), this
			}
		}(),
		rotateZ: function() {
			var t = new o;
			return function(e) {
				return t.makeRotationZ(e), this.applyMatrix(t), this
			}
		}(),
		translate: function() {
			var t = new o;
			return function(e, n, r) {
				return t.makeTranslation(e, n, r), this.applyMatrix(t), this
			}
		}(),
		scale: function() {
			var t = new o;
			return function(e, n, r) {
				return t.makeScale(e, n, r), this.applyMatrix(t), this
			}
		}(),
		lookAt: function() {
			var t = new M;
			return function(e) {
				t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
			}
		}(),
		center: function() {
			var t = new s;
			return function() {
				return this.computeBoundingBox(), this.boundingBox.getCenter(t).negate(), this.translate(t.x, t.y, t.z), this
			}
		}(),
		setFromObject: function(t) {
			var e = t.geometry;
			if(t.isPoints || t.isLine) {
				var n = new U(3 * e.vertices.length, 3),
					r = new U(3 * e.colors.length, 3);
				if(this.addAttribute("position", n.copyVector3sArray(e.vertices)), this.addAttribute("color", r.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length) {
					var i = new U(e.lineDistances.length, 1);
					this.addAttribute("lineDistance", i.copyArray(e.lineDistances))
				}
				null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
			} else t.isMesh && e && e.isGeometry && this.fromGeometry(e);
			return this
		},
		setFromPoints: function(t) {
			for(var e = [], n = 0, r = t.length; n < r; n++) {
				var i = t[n];
				e.push(i.x, i.y, i.z || 0)
			}
			return this.addAttribute("position", new U(e, 3)), this
		},
		updateFromObject: function(t) {
			var e = t.geometry;
			if(t.isMesh) {
				var n = e.__directGeometry;
				if(!0 === e.elementsNeedUpdate && (n = void 0, e.elementsNeedUpdate = !1), void 0 === n) return this.fromGeometry(e);
				n.verticesNeedUpdate = e.verticesNeedUpdate, n.normalsNeedUpdate = e.normalsNeedUpdate, n.colorsNeedUpdate = e.colorsNeedUpdate, n.uvsNeedUpdate = e.uvsNeedUpdate, n.groupsNeedUpdate = e.groupsNeedUpdate, e.verticesNeedUpdate = !1, e.normalsNeedUpdate = !1, e.colorsNeedUpdate = !1, e.uvsNeedUpdate = !1, e.groupsNeedUpdate = !1, e = n
			}
			var r;
			return !0 === e.verticesNeedUpdate && (r = this.attributes.position, void 0 !== r && (r.copyVector3sArray(e.vertices), r.needsUpdate = !0), e.verticesNeedUpdate = !1), !0 === e.normalsNeedUpdate && (r = this.attributes.normal, void 0 !== r && (r.copyVector3sArray(e.normals), r.needsUpdate = !0), e.normalsNeedUpdate = !1), !0 === e.colorsNeedUpdate && (r = this.attributes.color, void 0 !== r && (r.copyColorsArray(e.colors), r.needsUpdate = !0), e.colorsNeedUpdate = !1), e.uvsNeedUpdate && (r = this.attributes.uv, void 0 !== r && (r.copyVector2sArray(e.uvs), r.needsUpdate = !0), e.uvsNeedUpdate = !1), e.lineDistancesNeedUpdate && (r = this.attributes.lineDistance, void 0 !== r && (r.copyArray(e.lineDistances), r.needsUpdate = !0), e.lineDistancesNeedUpdate = !1), e.groupsNeedUpdate && (e.computeGroups(t.geometry), this.groups = e.groups, e.groupsNeedUpdate = !1), this
		},
		fromGeometry: function(t) {
			return t.__directGeometry = (new F).fromGeometry(t), this.fromDirectGeometry(t.__directGeometry)
		},
		fromDirectGeometry: function(t) {
			var e = new Float32Array(3 * t.vertices.length);
			if(this.addAttribute("position", new R(e, 3).copyVector3sArray(t.vertices)), t.normals.length > 0) {
				var n = new Float32Array(3 * t.normals.length);
				this.addAttribute("normal", new R(n, 3).copyVector3sArray(t.normals))
			}
			if(t.colors.length > 0) {
				var r = new Float32Array(3 * t.colors.length);
				this.addAttribute("color", new R(r, 3).copyColorsArray(t.colors))
			}
			if(t.uvs.length > 0) {
				var i = new Float32Array(2 * t.uvs.length);
				this.addAttribute("uv", new R(i, 2).copyVector2sArray(t.uvs))
			}
			if(t.uvs2.length > 0) {
				var o = new Float32Array(2 * t.uvs2.length);
				this.addAttribute("uv2", new R(o, 2).copyVector2sArray(t.uvs2))
			}
			this.groups = t.groups;
			for(var a in t.morphTargets) {
				for(var s = [], c = t.morphTargets[a], h = 0, u = c.length; h < u; h++) {
					var l = c[h],
						d = new U(3 * l.length, 3);
					s.push(d.copyVector3sArray(l))
				}
				this.morphAttributes[a] = s
			}
			if(t.skinIndices.length > 0) {
				var p = new U(4 * t.skinIndices.length, 4);
				this.addAttribute("skinIndex", p.copyVector4sArray(t.skinIndices))
			}
			if(t.skinWeights.length > 0) {
				var f = new U(4 * t.skinWeights.length, 4);
				this.addAttribute("skinWeight", f.copyVector4sArray(t.skinWeights))
			}
			return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
		},
		computeBoundingBox: function() {
			null === this.boundingBox && (this.boundingBox = new f);
			var t = this.attributes.position;
			void 0 !== t ? this.boundingBox.setFromBufferAttribute(t) : this.boundingBox.makeEmpty(), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
		},
		computeBoundingSphere: function() {
			var t = new f,
				e = new s;
			return function() {
				null === this.boundingSphere && (this.boundingSphere = new m);
				var n = this.attributes.position;
				if(n) {
					var r = this.boundingSphere.center;
					t.setFromBufferAttribute(n), t.getCenter(r);
					for(var i = 0, o = 0, a = n.count; o < a; o++) e.x = n.getX(o), e.y = n.getY(o), e.z = n.getZ(o), i = Math.max(i, r.distanceToSquared(e));
					this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
				}
			}
		}(),
		computeFaceNormals: function() {},
		computeVertexNormals: function() {
			var t = this.index,
				e = this.attributes,
				n = this.groups;
			if(e.position) {
				var r = e.position.array;
				if(void 0 === e.normal) this.addAttribute("normal", new R(new Float32Array(r.length), 3));
				else
					for(var i = e.normal.array, o = 0, a = i.length; o < a; o++) i[o] = 0;
				var c, h, u, l = e.normal.array,
					d = new s,
					p = new s,
					f = new s,
					m = new s,
					g = new s;
				if(t) {
					var v = t.array;
					0 === n.length && this.addGroup(0, v.length);
					for(var y = 0, x = n.length; y < x; ++y)
						for(var w = n[y], b = w.start, _ = w.count, o = b, a = b + _; o < a; o += 3) c = 3 * v[o + 0], h = 3 * v[o + 1], u = 3 * v[o + 2], d.fromArray(r, c), p.fromArray(r, h), f.fromArray(r, u), m.subVectors(f, p), g.subVectors(d, p), m.cross(g), l[c] += m.x, l[c + 1] += m.y, l[c + 2] += m.z, l[h] += m.x, l[h + 1] += m.y, l[h + 2] += m.z, l[u] += m.x, l[u + 1] += m.y, l[u + 2] += m.z
				} else
					for(var o = 0, a = r.length; o < a; o += 9) d.fromArray(r, o), p.fromArray(r, o + 3), f.fromArray(r, o + 6), m.subVectors(f, p), g.subVectors(d, p), m.cross(g), l[o] = m.x, l[o + 1] = m.y, l[o + 2] = m.z, l[o + 3] = m.x, l[o + 4] = m.y, l[o + 5] = m.z, l[o + 6] = m.x, l[o + 7] = m.y, l[o + 8] = m.z;
				this.normalizeNormals(), e.normal.needsUpdate = !0
			}
		},
		merge: function(t, e) {
			if(!t || !t.isBufferGeometry) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
			void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
			var n = this.attributes;
			for(var r in n)
				if(void 0 !== t.attributes[r])
					for(var i = n[r], o = i.array, a = t.attributes[r], s = a.array, c = a.itemSize, h = 0, u = c * e; h < s.length; h++, u++) o[u] = s[h];
			return this
		},
		normalizeNormals: function() {
			var t = new s;
			return function() {
				for(var e = this.attributes.normal, n = 0, r = e.count; n < r; n++) t.x = e.getX(n), t.y = e.getY(n), t.z = e.getZ(n), t.normalize(), e.setXYZ(n, t.x, t.y, t.z)
			}
		}(),
		toNonIndexed: function() {
			if(null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
			var t = new G,
				e = this.index.array,
				n = this.attributes;
			for(var r in n) {
				for(var i = n[r], o = i.array, a = i.itemSize, s = new o.constructor(e.length * a), c = 0, h = 0, u = 0, l = e.length; u < l; u++) {
					c = e[u] * a;
					for(var d = 0; d < a; d++) s[h++] = o[c++]
				}
				t.addAttribute(r, new R(s, a))
			}
			for(var p = this.groups, u = 0, l = p.length; u < l; u++) {
				var f = p[u];
				t.addGroup(f.start, f.count, f.materialIndex)
			}
			return t
		},
		toJSON: function() {
			var t = {
				metadata: {
					version: 4.5,
					type: "BufferGeometry",
					generator: "BufferGeometry.toJSON"
				}
			};
			if(t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
				var e = this.parameters;
				for(var n in e) void 0 !== e[n] && (t[n] = e[n]);
				return t
			}
			t.data = {
				attributes: {}
			};
			var r = this.index;
			if(null !== r) {
				var i = Array.prototype.slice.call(r.array);
				t.data.index = {
					type: r.array.constructor.name,
					array: i
				}
			}
			var o = this.attributes;
			for(var n in o) {
				var a = o[n],
					i = Array.prototype.slice.call(a.array);
				t.data.attributes[n] = {
					itemSize: a.itemSize,
					type: a.array.constructor.name,
					array: i,
					normalized: a.normalized
				}
			}
			var s = this.groups;
			s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
			var c = this.boundingSphere;
			return null !== c && (t.data.boundingSphere = {
				center: c.center.toArray(),
				radius: c.radius
			}), t
		},
		clone: function() {
			return(new G).copy(this)
		},
		copy: function(t) {
			var e, n, r;
			this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
			var i = t.index;
			null !== i && this.setIndex(i.clone());
			var o = t.attributes;
			for(e in o) {
				var a = o[e];
				this.addAttribute(e, a.clone())
			}
			var s = t.morphAttributes;
			for(e in s) {
				var c = [],
					h = s[e];
				for(n = 0, r = h.length; n < r; n++) c.push(h[n].clone());
				this.morphAttributes[e] = c
			}
			var u = t.groups;
			for(n = 0, r = u.length; n < r; n++) {
				var l = u[n];
				this.addGroup(l.start, l.count, l.materialIndex)
			}
			var d = t.boundingBox;
			null !== d && (this.boundingBox = d.clone());
			var p = t.boundingSphere;
			return null !== p && (this.boundingSphere = p.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this
		},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	}), H.prototype = Object.create(A.prototype), H.prototype.constructor = H, V.prototype = Object.create(G.prototype), V.prototype.constructor = V, k.prototype = Object.create(A.prototype), k.prototype.constructor = k, j.prototype = Object.create(G.prototype), j.prototype.constructor = j;
	var kc = 0;
	W.prototype = Object.assign(Object.create(r.prototype), {
		constructor: W,
		isMaterial: !0,
		onBeforeCompile: function() {},
		setValues: function(t) {
			if(void 0 !== t)
				for(var e in t) {
					var n = t[e];
					if(void 0 !== n)
						if("shading" !== e) {
							var r = this[e];
							void 0 !== r ? r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[e] = "overdraw" === e ? Number(n) : n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
						} else console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = n === ga;
					else console.warn("THREE.Material: '" + e + "' parameter is undefined.")
				}
		},
		toJSON: function(t) {
			function e(t) {
				var e = [];
				for(var n in t) {
					var r = t[n];
					delete r.metadata, e.push(r)
				}
				return e
			}
			var n = void 0 === t || "string" == typeof t;
			n && (t = {
				textures: {},
				images: {}
			});
			var r = {
				metadata: {
					version: 4.5,
					type: "Material",
					generator: "Material.toJSON"
				}
			};
			if(r.uuid = this.uuid, r.type = this.type, "" !== this.name && (r.name = this.name), this.color && this.color.isColor && (r.color = this.color.getHex()), void 0 !== this.roughness && (r.roughness = this.roughness), void 0 !== this.metalness && (r.metalness = this.metalness), this.emissive && this.emissive.isColor && (r.emissive = this.emissive.getHex()), 1 !== this.emissiveIntensity && (r.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (r.specular = this.specular.getHex()), void 0 !== this.shininess && (r.shininess = this.shininess), void 0 !== this.clearCoat && (r.clearCoat = this.clearCoat), void 0 !== this.clearCoatRoughness && (r.clearCoatRoughness = this.clearCoatRoughness), this.map && this.map.isTexture && (r.map = this.map.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (r.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (r.lightMap = this.lightMap.toJSON(t).uuid), this.aoMap && this.aoMap.isTexture && (r.aoMap = this.aoMap.toJSON(t).uuid, r.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (r.bumpMap = this.bumpMap.toJSON(t).uuid, r.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (r.normalMap = this.normalMap.toJSON(t).uuid, r.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (r.displacementMap = this.displacementMap.toJSON(t).uuid, r.displacementScale = this.displacementScale, r.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (r.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (r.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (r.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (r.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (r.envMap = this.envMap.toJSON(t).uuid, r.reflectivity = this.reflectivity), this.gradientMap && this.gradientMap.isTexture && (r.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (r.size = this.size), void 0 !== this.sizeAttenuation && (r.sizeAttenuation = this.sizeAttenuation), this.blending !== _a && (r.blending = this.blending), !0 === this.flatShading && (r.flatShading = this.flatShading), this.side !== pa && (r.side = this.side), this.vertexColors !== ya && (r.vertexColors = this.vertexColors), this.opacity < 1 && (r.opacity = this.opacity), !0 === this.transparent && (r.transparent = this.transparent), r.depthFunc = this.depthFunc, r.depthTest = this.depthTest, r.depthWrite = this.depthWrite, 0 !== this.rotation && (r.rotation = this.rotation), 1 !== this.linewidth && (r.linewidth = this.linewidth), void 0 !== this.dashSize && (r.dashSize = this.dashSize), void 0 !== this.gapSize && (r.gapSize = this.gapSize), void 0 !== this.scale && (r.scale = this.scale), !0 === this.dithering && (r.dithering = !0), this.alphaTest > 0 && (r.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (r.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (r.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (r.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (r.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (r.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (r.morphTargets = !0), !0 === this.skinning && (r.skinning = !0), !1 === this.visible && (r.visible = !1), "{}" !== JSON.stringify(this.userData) && (r.userData = this.userData), n) {
				var i = e(t.textures),
					o = e(t.images);
				i.length > 0 && (r.textures = i), o.length > 0 && (r.images = o)
			}
			return r
		},
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(t) {
			this.name = t.name, this.fog = t.fog, this.lights = t.lights, this.blending = t.blending, this.side = t.side, this.flatShading = t.flatShading, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.overdraw = t.overdraw, this.visible = t.visible, this.userData = JSON.parse(JSON.stringify(t.userData)), this.clipShadows = t.clipShadows, this.clipIntersection = t.clipIntersection;
			var e = t.clippingPlanes,
				n = null;
			if(null !== e) {
				var r = e.length;
				n = new Array(r);
				for(var i = 0; i !== r; ++i) n[i] = e[i].clone()
			}
			return this.clippingPlanes = n, this.shadowSide = t.shadowSide, this
		},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	}), X.prototype = Object.create(W.prototype), X.prototype.constructor = X, X.prototype.isMeshBasicMaterial = !0, X.prototype.copy = function(t) {
		return W.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this
	}, q.prototype = Object.create(W.prototype), q.prototype.constructor = q, q.prototype.isShaderMaterial = !0, q.prototype.copy = function(t) {
		return W.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Uc.clone(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = t.extensions, this
	}, q.prototype.toJSON = function(t) {
		var e = W.prototype.toJSON.call(this, t);
		return e.uniforms = this.uniforms, e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e
	}, Object.assign(Y.prototype, {
		set: function(t, e) {
			return this.origin.copy(t), this.direction.copy(e), this
		},
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.origin.copy(t.origin), this.direction.copy(t.direction), this
		},
		at: function(t, e) {
			return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"), e = new s), e.copy(this.direction).multiplyScalar(t).add(this.origin)
		},
		lookAt: function(t) {
			return this.direction.copy(t).sub(this.origin).normalize(), this
		},
		recast: function() {
			var t = new s;
			return function(e) {
				return this.origin.copy(this.at(e, t)), this
			}
		}(),
		closestPointToPoint: function(t, e) {
			void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), e = new s), e.subVectors(t, this.origin);
			var n = e.dot(this.direction);
			return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin)
		},
		distanceToPoint: function(t) {
			return Math.sqrt(this.distanceSqToPoint(t))
		},
		distanceSqToPoint: function() {
			var t = new s;
			return function(e) {
				var n = t.subVectors(e, this.origin).dot(this.direction);
				return n < 0 ? this.origin.distanceToSquared(e) : (t.copy(this.direction).multiplyScalar(n).add(this.origin), t.distanceToSquared(e))
			}
		}(),
		distanceSqToSegment: function() {
			var t = new s,
				e = new s,
				n = new s;
			return function(r, i, o, a) {
				t.copy(r).add(i).multiplyScalar(.5), e.copy(i).sub(r).normalize(), n.copy(this.origin).sub(t);
				var s, c, h, u, l = .5 * r.distanceTo(i),
					d = -this.direction.dot(e),
					p = n.dot(this.direction),
					f = -n.dot(e),
					m = n.lengthSq(),
					g = Math.abs(1 - d * d);
				if(g > 0)
					if(s = d * f - p, c = d * p - f, u = l * g, s >= 0)
						if(c >= -u)
							if(c <= u) {
								var v = 1 / g;
								s *= v, c *= v, h = s * (s + d * c + 2 * p) + c * (d * s + c + 2 * f) + m
							} else c = l, s = Math.max(0, -(d * c + p)), h = -s * s + c * (c + 2 * f) + m;
				else c = -l, s = Math.max(0, -(d * c + p)), h = -s * s + c * (c + 2 * f) + m;
				else c <= -u ? (s = Math.max(0, -(-d * l + p)), c = s > 0 ? -l : Math.min(Math.max(-l, -f), l), h = -s * s + c * (c + 2 * f) + m) : c <= u ? (s = 0, c = Math.min(Math.max(-l, -f), l), h = c * (c + 2 * f) + m) : (s = Math.max(0, -(d * l + p)), c = s > 0 ? l : Math.min(Math.max(-l, -f), l), h = -s * s + c * (c + 2 * f) + m);
				else c = d > 0 ? -l : l, s = Math.max(0, -(d * c + p)), h = -s * s + c * (c + 2 * f) + m;
				return o && o.copy(this.direction).multiplyScalar(s).add(this.origin), a && a.copy(e).multiplyScalar(c).add(t), h
			}
		}(),
		intersectSphere: function() {
			var t = new s;
			return function(e, n) {
				t.subVectors(e.center, this.origin);
				var r = t.dot(this.direction),
					i = t.dot(t) - r * r,
					o = e.radius * e.radius;
				if(i > o) return null;
				var a = Math.sqrt(o - i),
					s = r - a,
					c = r + a;
				return s < 0 && c < 0 ? null : s < 0 ? this.at(c, n) : this.at(s, n)
			}
		}(),
		intersectsSphere: function(t) {
			return this.distanceToPoint(t.center) <= t.radius
		},
		distanceToPlane: function(t) {
			var e = t.normal.dot(this.direction);
			if(0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
			var n = -(this.origin.dot(t.normal) + t.constant) / e;
			return n >= 0 ? n : null
		},
		intersectPlane: function(t, e) {
			var n = this.distanceToPlane(t);
			return null === n ? null : this.at(n, e)
		},
		intersectsPlane: function(t) {
			var e = t.distanceToPoint(this.origin);
			return 0 === e || t.normal.dot(this.direction) * e < 0
		},
		intersectBox: function(t, e) {
			var n, r, i, o, a, s, c = 1 / this.direction.x,
				h = 1 / this.direction.y,
				u = 1 / this.direction.z,
				l = this.origin;
			return c >= 0 ? (n = (t.min.x - l.x) * c, r = (t.max.x - l.x) * c) : (n = (t.max.x - l.x) * c, r = (t.min.x - l.x) * c), h >= 0 ? (i = (t.min.y - l.y) * h, o = (t.max.y - l.y) * h) : (i = (t.max.y - l.y) * h, o = (t.min.y - l.y) * h), n > o || i > r ? null : ((i > n || n !== n) && (n = i), (o < r || r !== r) && (r = o), u >= 0 ? (a = (t.min.z - l.z) * u, s = (t.max.z - l.z) * u) : (a = (t.max.z - l.z) * u, s = (t.min.z - l.z) * u), n > s || a > r ? null : ((a > n || n !== n) && (n = a), (s < r || r !== r) && (r = s), r < 0 ? null : this.at(n >= 0 ? n : r, e)))
		},
		intersectsBox: function() {
			var t = new s;
			return function(e) {
				return null !== this.intersectBox(e, t)
			}
		}(),
		intersectTriangle: function() {
			var t = new s,
				e = new s,
				n = new s,
				r = new s;
			return function(i, o, a, s, c) {
				e.subVectors(o, i), n.subVectors(a, i), r.crossVectors(e, n);
				var h, u = this.direction.dot(r);
				if(u > 0) {
					if(s) return null;
					h = 1
				} else {
					if(!(u < 0)) return null;
					h = -1, u = -u
				}
				t.subVectors(this.origin, i);
				var l = h * this.direction.dot(n.crossVectors(t, n));
				if(l < 0) return null;
				var d = h * this.direction.dot(e.cross(t));
				if(d < 0) return null;
				if(l + d > u) return null;
				var p = -h * t.dot(r);
				return p < 0 ? null : this.at(p / u, c)
			}
		}(),
		applyMatrix4: function(t) {
			return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
		},
		equals: function(t) {
			return t.origin.equals(this.origin) && t.direction.equals(this.direction)
		}
	}), Object.assign(Z.prototype, {
		set: function(t, e) {
			return this.start.copy(t), this.end.copy(e), this
		},
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.start.copy(t.start), this.end.copy(t.end), this
		},
		getCenter: function(t) {
			return void 0 === t && (console.warn("THREE.Line3: .getCenter() target is now required"), t = new s), t.addVectors(this.start, this.end).multiplyScalar(.5)
		},
		delta: function(t) {
			return void 0 === t && (console.warn("THREE.Line3: .delta() target is now required"), t = new s), t.subVectors(this.end, this.start)
		},
		distanceSq: function() {
			return this.start.distanceToSquared(this.end)
		},
		distance: function() {
			return this.start.distanceTo(this.end)
		},
		at: function(t, e) {
			return void 0 === e && (console.warn("THREE.Line3: .at() target is now required"), e = new s), this.delta(e).multiplyScalar(t).add(this.start)
		},
		closestPointToPointParameter: function() {
			var t = new s,
				e = new s;
			return function(n, r) {
				t.subVectors(n, this.start), e.subVectors(this.end, this.start);
				var i = e.dot(e),
					o = e.dot(t),
					a = o / i;
				return r && (a = Ic.clamp(a, 0, 1)), a
			}
		}(),
		closestPointToPoint: function(t, e, n) {
			var r = this.closestPointToPointParameter(t, e);
			return void 0 === n && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), n = new s), this.delta(n).multiplyScalar(r).add(this.start)
		},
		applyMatrix4: function(t) {
			return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this
		},
		equals: function(t) {
			return t.start.equals(this.start) && t.end.equals(this.end)
		}
	}), Object.assign(J, {
		getNormal: function() {
			var t = new s;
			return function(e, n, r, i) {
				void 0 === i && (console.warn("THREE.Triangle: .getNormal() target is now required"), i = new s), i.subVectors(r, n), t.subVectors(e, n), i.cross(t);
				var o = i.lengthSq();
				return o > 0 ? i.multiplyScalar(1 / Math.sqrt(o)) : i.set(0, 0, 0)
			}
		}(),
		getBarycoord: function() {
			var t = new s,
				e = new s,
				n = new s;
			return function(r, i, o, a, c) {
				t.subVectors(a, i), e.subVectors(o, i), n.subVectors(r, i);
				var h = t.dot(t),
					u = t.dot(e),
					l = t.dot(n),
					d = e.dot(e),
					p = e.dot(n),
					f = h * d - u * u;
				if(void 0 === c && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), c = new s), 0 === f) return c.set(-2, -1, -1);
				var m = 1 / f,
					g = (d * l - u * p) * m,
					v = (h * p - u * l) * m;
				return c.set(1 - g - v, v, g)
			}
		}(),
		containsPoint: function() {
			var t = new s;
			return function(e, n, r, i) {
				return J.getBarycoord(e, n, r, i, t), t.x >= 0 && t.y >= 0 && t.x + t.y <= 1
			}
		}()
	}), Object.assign(J.prototype, {
		set: function(t, e, n) {
			return this.a.copy(t), this.b.copy(e), this.c.copy(n), this
		},
		setFromPointsAndIndices: function(t, e, n, r) {
			return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[r]), this
		},
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
		},
		getArea: function() {
			var t = new s,
				e = new s;
			return function() {
				return t.subVectors(this.c, this.b), e.subVectors(this.a, this.b), .5 * t.cross(e).length()
			}
		}(),
		getMidpoint: function(t) {
			return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), t = new s), t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
		},
		getNormal: function(t) {
			return J.getNormal(this.a, this.b, this.c, t)
		},
		getPlane: function(t) {
			return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"), t = new s), t.setFromCoplanarPoints(this.a, this.b, this.c)
		},
		getBarycoord: function(t, e) {
			return J.getBarycoord(t, this.a, this.b, this.c, e)
		},
		containsPoint: function(t) {
			return J.containsPoint(t, this.a, this.b, this.c)
		},
		intersectsBox: function(t) {
			return t.intersectsTriangle(this)
		},
		closestPointToPoint: function() {
			var t = new g,
				e = [new Z, new Z, new Z],
				n = new s,
				r = new s;
			return function(i, o) {
				void 0 === o && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), o = new s);
				var a = 1 / 0;
				if(t.setFromCoplanarPoints(this.a, this.b, this.c), t.projectPoint(i, n), !0 === this.containsPoint(n)) o.copy(n);
				else {
					e[0].set(this.a, this.b), e[1].set(this.b, this.c), e[2].set(this.c, this.a);
					for(var c = 0; c < e.length; c++) {
						e[c].closestPointToPoint(n, !0, r);
						var h = n.distanceToSquared(r);
						h < a && (a = h, o.copy(r))
					}
				}
				return o
			}
		}(),
		equals: function(t) {
			return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
		}
	}), Q.prototype = Object.assign(Object.create(M.prototype), {
		constructor: Q,
		isMesh: !0,
		setDrawMode: function(t) {
			this.drawMode = t
		},
		copy: function(t) {
			return M.prototype.copy.call(this, t), this.drawMode = t.drawMode, void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this
		},
		updateMorphTargets: function() {
			var t, e, n, r = this.geometry;
			if(r.isBufferGeometry) {
				var i = r.morphAttributes,
					o = Object.keys(i);
				if(o.length > 0) {
					var a = i[o[0]];
					if(void 0 !== a)
						for(this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = a.length; t < e; t++) n = a[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = t
				}
			} else {
				var s = r.morphTargets;
				if(void 0 !== s && s.length > 0)
					for(this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = s.length; t < e; t++) n = s[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = t
			}
		},
		raycast: function() {
			function t(t, e, n, r, i, o, a) {
				return J.getBarycoord(t, e, n, r, x), i.multiplyScalar(x.x), o.multiplyScalar(x.y), a.multiplyScalar(x.z), i.add(o).add(a), i.clone()
			}

			function e(t, e, n, r, i, o, a, s) {
				if(null === (e.side === fa ? r.intersectTriangle(a, o, i, !0, s) : r.intersectTriangle(i, o, a, e.side !== ma, s))) return null;
				b.copy(s), b.applyMatrix4(t.matrixWorld);
				var c = n.ray.origin.distanceTo(b);
				return c < n.near || c > n.far ? null : {
					distance: c,
					point: b.clone(),
					object: t
				}
			}

			function n(n, r, i, o, a, s, c, d) {
				h.fromBufferAttribute(o, s), u.fromBufferAttribute(o, c), l.fromBufferAttribute(o, d);
				var p = e(n, n.material, r, i, h, u, l, w);
				if(p) {
					a && (g.fromBufferAttribute(a, s), v.fromBufferAttribute(a, c), y.fromBufferAttribute(a, d), p.uv = t(w, h, u, l, g, v, y));
					var f = new S(s, c, d);
					J.getNormal(h, u, l, f.normal), p.face = f
				}
				return p
			}
			var r = new o,
				a = new Y,
				c = new m,
				h = new s,
				u = new s,
				l = new s,
				d = new s,
				p = new s,
				f = new s,
				g = new i,
				v = new i,
				y = new i,
				x = new s,
				w = new s,
				b = new s;
			return function(i, o) {
				var s = this.geometry,
					m = this.material,
					x = this.matrixWorld;
				if(void 0 !== m && (null === s.boundingSphere && s.computeBoundingSphere(), c.copy(s.boundingSphere), c.applyMatrix4(x), !1 !== i.ray.intersectsSphere(c) && (r.getInverse(x), a.copy(i.ray).applyMatrix4(r), null === s.boundingBox || !1 !== a.intersectsBox(s.boundingBox)))) {
					var b;
					if(s.isBufferGeometry) {
						var _, M, E, T, S, A = s.index,
							R = s.attributes.position,
							L = s.attributes.uv;
						if(null !== A)
							for(T = 0, S = A.count; T < S; T += 3) _ = A.getX(T), M = A.getX(T + 1), E = A.getX(T + 2), (b = n(this, i, a, R, L, _, M, E)) && (b.faceIndex = Math.floor(T / 3), o.push(b));
						else if(void 0 !== R)
							for(T = 0, S = R.count; T < S; T += 3) _ = T, M = T + 1, E = T + 2, (b = n(this, i, a, R, L, _, M, E)) && (b.faceIndex = Math.floor(T / 3), o.push(b))
					} else if(s.isGeometry) {
						var P, C, O, I, N = Array.isArray(m),
							D = s.vertices,
							U = s.faces,
							B = s.faceVertexUvs[0];
						B.length > 0 && (I = B);
						for(var F = 0, z = U.length; F < z; F++) {
							var G = U[F],
								H = N ? m[G.materialIndex] : m;
							if(void 0 !== H) {
								if(P = D[G.a], C = D[G.b], O = D[G.c], !0 === H.morphTargets) {
									var V = s.morphTargets,
										k = this.morphTargetInfluences;
									h.set(0, 0, 0), u.set(0, 0, 0), l.set(0, 0, 0);
									for(var j = 0, W = V.length; j < W; j++) {
										var X = k[j];
										if(0 !== X) {
											var q = V[j].vertices;
											h.addScaledVector(d.subVectors(q[G.a], P), X), u.addScaledVector(p.subVectors(q[G.b], C), X), l.addScaledVector(f.subVectors(q[G.c], O), X)
										}
									}
									h.add(P), u.add(C), l.add(O), P = h, C = u, O = l
								}
								if(b = e(this, H, i, a, P, C, O, w)) {
									if(I && I[F]) {
										var Y = I[F];
										g.copy(Y[0]), v.copy(Y[1]), y.copy(Y[2]), b.uv = t(w, P, C, O, g, v, y)
									}
									b.face = G, b.faceIndex = F, o.push(b)
								}
							}
						}
					}
				}
			}
		}(),
		clone: function() {
			return new this.constructor(this.geometry, this.material).copy(this)
		}
	}), ht.prototype = Object.create(h.prototype), ht.prototype.constructor = ht, ht.prototype.isCubeTexture = !0, Object.defineProperty(ht.prototype, "images", {
		get: function() {
			return this.image
		},
		set: function(t) {
			this.image = t
		}
	});
	var jc = new h,
		Wc = new ht,
		Xc = [],
		qc = [],
		Yc = new Float32Array(16),
		Zc = new Float32Array(9),
		Jc = new Float32Array(4);
	Ht.prototype.updateCache = function(t) {
		var e = this.cache;
		t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), pt(e, t)
	}, Vt.prototype.setValue = function(t, e) {
		for(var n = this.seq, r = 0, i = n.length; r !== i; ++r) {
			var o = n[r];
			o.setValue(t, e[o.id])
		}
	};
	var Qc = /([\w\d_]+)(\])?(\[|\.)?/g;
	Wt.prototype.setValue = function(t, e, n) {
		var r = this.map[e];
		void 0 !== r && r.setValue(t, n, this.renderer)
	}, Wt.prototype.setOptional = function(t, e, n) {
		var r = e[n];
		void 0 !== r && this.setValue(t, n, r)
	}, Wt.upload = function(t, e, n, r) {
		for(var i = 0, o = e.length; i !== o; ++i) {
			var a = e[i],
				s = n[a.id];
			!1 !== s.needsUpdate && a.setValue(t, s.value, r)
		}
	}, Wt.seqWithValue = function(t, e) {
		for(var n = [], r = 0, i = t.length; r !== i; ++r) {
			var o = t[r];
			o.id in e && n.push(o)
		}
		return n
	};
	var Kc = 0,
		$c = 0;
	ve.prototype = Object.create(W.prototype), ve.prototype.constructor = ve, ve.prototype.isMeshDepthMaterial = !0, ve.prototype.copy = function(t) {
		return W.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
	}, ye.prototype = Object.create(W.prototype), ye.prototype.constructor = ye, ye.prototype.isMeshDistanceMaterial = !0, ye.prototype.copy = function(t) {
		return W.prototype.copy.call(this, t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
	}, we.prototype = Object.create(h.prototype), we.prototype.constructor = we, we.prototype.isCanvasTexture = !0, Te.prototype = Object.assign(Object.create(E.prototype), {
		constructor: Te,
		isPerspectiveCamera: !0,
		copy: function(t, e) {
			return E.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
		},
		setFocalLength: function(t) {
			var e = .5 * this.getFilmHeight() / t;
			this.fov = 2 * Ic.RAD2DEG * Math.atan(e), this.updateProjectionMatrix()
		},
		getFocalLength: function() {
			var t = Math.tan(.5 * Ic.DEG2RAD * this.fov);
			return .5 * this.getFilmHeight() / t
		},
		getEffectiveFOV: function() {
			return 2 * Ic.RAD2DEG * Math.atan(Math.tan(.5 * Ic.DEG2RAD * this.fov) / this.zoom)
		},
		getFilmWidth: function() {
			return this.filmGauge * Math.min(this.aspect, 1)
		},
		getFilmHeight: function() {
			return this.filmGauge / Math.max(this.aspect, 1)
		},
		setViewOffset: function(t, e, n, r, i, o) {
			this.aspect = t / e, null === this.view && (this.view = {
				enabled: !0,
				fullWidth: 1,
				fullHeight: 1,
				offsetX: 0,
				offsetY: 0,
				width: 1,
				height: 1
			}), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = o, this.updateProjectionMatrix()
		},
		clearViewOffset: function() {
			null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
		},
		updateProjectionMatrix: function() {
			var t = this.near,
				e = t * Math.tan(.5 * Ic.DEG2RAD * this.fov) / this.zoom,
				n = 2 * e,
				r = this.aspect * n,
				i = -.5 * r,
				o = this.view;
			if(null !== this.view && this.view.enabled) {
				var a = o.fullWidth,
					s = o.fullHeight;
				i += o.offsetX * r / a, e -= o.offsetY * n / s, r *= o.width / a, n *= o.height / s
			}
			var c = this.filmOffset;
			0 !== c && (i += t * c / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + r, e, e - n, t, this.far)
		},
		toJSON: function(t) {
			var e = M.prototype.toJSON.call(this, t);
			return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
		}
	}), Se.prototype = Object.assign(Object.create(Te.prototype), {
		constructor: Se,
		isArrayCamera: !0
	}), Pe.prototype.isFogExp2 = !0, Pe.prototype.clone = function() {
		return new Pe(this.color, this.density)
	}, Pe.prototype.toJSON = function() {
		return {
			type: "FogExp2",
			color: this.color.getHex(),
			density: this.density
		}
	}, Ce.prototype.isFog = !0, Ce.prototype.clone = function() {
		return new Ce(this.color, this.near, this.far)
	}, Ce.prototype.toJSON = function() {
		return {
			type: "Fog",
			color: this.color.getHex(),
			near: this.near,
			far: this.far
		}
	}, Oe.prototype = Object.assign(Object.create(M.prototype), {
		constructor: Oe,
		copy: function(t, e) {
			return M.prototype.copy.call(this, t, e), null !== t.background && (this.background = t.background.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
		},
		toJSON: function(t) {
			var e = M.prototype.toJSON.call(this, t);
			return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e
		}
	}), Ie.prototype = Object.create(W.prototype), Ie.prototype.constructor = Ie, Ie.prototype.isSpriteMaterial = !0, Ie.prototype.copy = function(t) {
		return W.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.rotation = t.rotation, this
	}, Ne.prototype = Object.assign(Object.create(M.prototype), {
		constructor: Ne,
		isSprite: !0,
		raycast: function() {
			var t = new s,
				e = new s,
				n = new s;
			return function(r, i) {
				e.setFromMatrixPosition(this.matrixWorld), r.ray.closestPointToPoint(e, t), n.setFromMatrixScale(this.matrixWorld);
				var o = n.x * n.y / 4;
				if(!(e.distanceToSquared(t) > o)) {
					var a = r.ray.origin.distanceTo(t);
					a < r.near || a > r.far || i.push({
						distance: a,
						point: t.clone(),
						face: null,
						object: this
					})
				}
			}
		}(),
		clone: function() {
			return new this.constructor(this.material).copy(this)
		},
		copy: function(t) {
			return M.prototype.copy.call(this, t), void 0 !== t.center && this.center.copy(t.center), this
		}
	}), De.prototype = Object.assign(Object.create(M.prototype), {
		constructor: De,
		copy: function(t) {
			M.prototype.copy.call(this, t, !1);
			for(var e = t.levels, n = 0, r = e.length; n < r; n++) {
				var i = e[n];
				this.addLevel(i.object.clone(), i.distance)
			}
			return this
		},
		addLevel: function(t, e) {
			void 0 === e && (e = 0), e = Math.abs(e);
			for(var n = this.levels, r = 0; r < n.length && !(e < n[r].distance); r++);
			n.splice(r, 0, {
				distance: e,
				object: t
			}), this.add(t)
		},
		getObjectForDistance: function(t) {
			for(var e = this.levels, n = 1, r = e.length; n < r && !(t < e[n].distance); n++);
			return e[n - 1].object
		},
		raycast: function() {
			var t = new s;
			return function(e, n) {
				t.setFromMatrixPosition(this.matrixWorld);
				var r = e.ray.origin.distanceTo(t);
				this.getObjectForDistance(r).raycast(e, n)
			}
		}(),
		update: function() {
			var t = new s,
				e = new s;
			return function(n) {
				var r = this.levels;
				if(r.length > 1) {
					t.setFromMatrixPosition(n.matrixWorld), e.setFromMatrixPosition(this.matrixWorld);
					var i = t.distanceTo(e);
					r[0].object.visible = !0;
					for(var o = 1, a = r.length; o < a && i >= r[o].distance; o++) r[o - 1].object.visible = !1, r[o].object.visible = !0;
					for(; o < a; o++) r[o].object.visible = !1
				}
			}
		}(),
		toJSON: function(t) {
			var e = M.prototype.toJSON.call(this, t);
			e.object.levels = [];
			for(var n = this.levels, r = 0, i = n.length; r < i; r++) {
				var o = n[r];
				e.object.levels.push({
					object: o.object.uuid,
					distance: o.distance
				})
			}
			return e
		}
	}), Object.assign(Ue.prototype, {
		calculateInverses: function() {
			this.boneInverses = [];
			for(var t = 0, e = this.bones.length; t < e; t++) {
				var n = new o;
				this.bones[t] && n.getInverse(this.bones[t].matrixWorld), this.boneInverses.push(n)
			}
		},
		pose: function() {
			var t, e, n;
			for(e = 0, n = this.bones.length; e < n; e++)(t = this.bones[e]) && t.matrixWorld.getInverse(this.boneInverses[e]);
			for(e = 0, n = this.bones.length; e < n; e++)(t = this.bones[e]) && (t.parent && t.parent.isBone ? (t.matrix.getInverse(t.parent.matrixWorld), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale))
		},
		update: function() {
			var t = new o,
				e = new o;
			return function() {
				for(var n = this.bones, r = this.boneInverses, i = this.boneMatrices, o = this.boneTexture, a = 0, s = n.length; a < s; a++) {
					var c = n[a] ? n[a].matrixWorld : e;
					t.multiplyMatrices(c, r[a]), t.toArray(i, 16 * a)
				}
				void 0 !== o && (o.needsUpdate = !0)
			}
		}(),
		clone: function() {
			return new Ue(this.bones, this.boneInverses)
		},
		getBoneByName: function(t) {
			for(var e = 0, n = this.bones.length; e < n; e++) {
				var r = this.bones[e];
				if(r.name === t) return r
			}
		}
	}), Be.prototype = Object.assign(Object.create(M.prototype), {
		constructor: Be,
		isBone: !0
	}), Fe.prototype = Object.assign(Object.create(Q.prototype), {
		constructor: Fe,
		isSkinnedMesh: !0,
		initBones: function() {
			var t, e, n, r, i = [];
			if(this.geometry && void 0 !== this.geometry.bones) {
				for(n = 0, r = this.geometry.bones.length; n < r; n++) e = this.geometry.bones[n], t = new Be, i.push(t), t.name = e.name, t.position.fromArray(e.pos), t.quaternion.fromArray(e.rotq), void 0 !== e.scl && t.scale.fromArray(e.scl);
				for(n = 0, r = this.geometry.bones.length; n < r; n++) e = this.geometry.bones[n], -1 !== e.parent && null !== e.parent && void 0 !== i[e.parent] ? i[e.parent].add(i[n]) : this.add(i[n])
			}
			return this.updateMatrixWorld(!0), i
		},
		bind: function(t, e) {
			this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.getInverse(e)
		},
		pose: function() {
			this.skeleton.pose()
		},
		normalizeSkinWeights: function() {
			var t, e;
			if(this.geometry && this.geometry.isGeometry)
				for(e = 0; e < this.geometry.skinWeights.length; e++) {
					var n = this.geometry.skinWeights[e];
					t = 1 / n.manhattanLength(), t !== 1 / 0 ? n.multiplyScalar(t) : n.set(1, 0, 0, 0)
				} else if(this.geometry && this.geometry.isBufferGeometry) {
					var r = new u,
						i = this.geometry.attributes.skinWeight;
					for(e = 0; e < i.count; e++) r.x = i.getX(e), r.y = i.getY(e), r.z = i.getZ(e), r.w = i.getW(e), t = 1 / r.manhattanLength(), t !== 1 / 0 ? r.multiplyScalar(t) : r.set(1, 0, 0, 0), i.setXYZW(e, r.x, r.y, r.z, r.w)
				}
		},
		updateMatrixWorld: function(t) {
			Q.prototype.updateMatrixWorld.call(this, t), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
		},
		clone: function() {
			return new this.constructor(this.geometry, this.material).copy(this)
		}
	}), ze.prototype = Object.create(W.prototype), ze.prototype.constructor = ze, ze.prototype.isLineBasicMaterial = !0, ze.prototype.copy = function(t) {
		return W.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this
	}, Ge.prototype = Object.assign(Object.create(M.prototype), {
		constructor: Ge,
		isLine: !0,
		computeLineDistances: function() {
			var t = new s,
				e = new s;
			return function() {
				var n = this.geometry;
				if(n.isBufferGeometry)
					if(null === n.index) {
						for(var r = n.attributes.position, i = [0], o = 1, a = r.count; o < a; o++) t.fromBufferAttribute(r, o - 1), e.fromBufferAttribute(r, o), i[o] = i[o - 1], i[o] += t.distanceTo(e);
						n.addAttribute("lineDistance", new U(i, 1))
					} else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
				else if(n.isGeometry) {
					var s = n.vertices,
						i = n.lineDistances;
					i[0] = 0;
					for(var o = 1, a = s.length; o < a; o++) i[o] = i[o - 1], i[o] += s[o - 1].distanceTo(s[o])
				}
				return this
			}
		}(),
		raycast: function() {
			var t = new o,
				e = new Y,
				n = new m;
			return function(r, i) {
				var o = r.linePrecision,
					a = o * o,
					c = this.geometry,
					h = this.matrixWorld;
				if(null === c.boundingSphere && c.computeBoundingSphere(), n.copy(c.boundingSphere), n.applyMatrix4(h), !1 !== r.ray.intersectsSphere(n)) {
					t.getInverse(h), e.copy(r.ray).applyMatrix4(t);
					var u = new s,
						l = new s,
						d = new s,
						p = new s,
						f = this && this.isLineSegments ? 2 : 1;
					if(c.isBufferGeometry) {
						var m = c.index,
							g = c.attributes,
							v = g.position.array;
						if(null !== m)
							for(var y = m.array, x = 0, w = y.length - 1; x < w; x += f) {
								var b = y[x],
									_ = y[x + 1];
								u.fromArray(v, 3 * b), l.fromArray(v, 3 * _);
								var M = e.distanceSqToSegment(u, l, p, d);
								if(!(M > a)) {
									p.applyMatrix4(this.matrixWorld);
									var E = r.ray.origin.distanceTo(p);
									E < r.near || E > r.far || i.push({
										distance: E,
										point: d.clone().applyMatrix4(this.matrixWorld),
										index: x,
										face: null,
										faceIndex: null,
										object: this
									})
								}
							} else
								for(var x = 0, w = v.length / 3 - 1; x < w; x += f) {
									u.fromArray(v, 3 * x), l.fromArray(v, 3 * x + 3);
									var M = e.distanceSqToSegment(u, l, p, d);
									if(!(M > a)) {
										p.applyMatrix4(this.matrixWorld);
										var E = r.ray.origin.distanceTo(p);
										E < r.near || E > r.far || i.push({
											distance: E,
											point: d.clone().applyMatrix4(this.matrixWorld),
											index: x,
											face: null,
											faceIndex: null,
											object: this
										})
									}
								}
					} else if(c.isGeometry)
						for(var T = c.vertices, S = T.length, x = 0; x < S - 1; x += f) {
							var M = e.distanceSqToSegment(T[x], T[x + 1], p, d);
							if(!(M > a)) {
								p.applyMatrix4(this.matrixWorld);
								var E = r.ray.origin.distanceTo(p);
								E < r.near || E > r.far || i.push({
									distance: E,
									point: d.clone().applyMatrix4(this.matrixWorld),
									index: x,
									face: null,
									faceIndex: null,
									object: this
								})
							}
						}
				}
			}
		}(),
		clone: function() {
			return new this.constructor(this.geometry, this.material).copy(this)
		}
	}), He.prototype = Object.assign(Object.create(Ge.prototype), {
		constructor: He,
		isLineSegments: !0,
		computeLineDistances: function() {
			var t = new s,
				e = new s;
			return function() {
				var n = this.geometry;
				if(n.isBufferGeometry)
					if(null === n.index) {
						for(var r = n.attributes.position, i = [], o = 0, a = r.count; o < a; o += 2) t.fromBufferAttribute(r, o), e.fromBufferAttribute(r, o + 1), i[o] = 0 === o ? 0 : i[o - 1], i[o + 1] = i[o] + t.distanceTo(e);
						n.addAttribute("lineDistance", new U(i, 1))
					} else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
				else if(n.isGeometry)
					for(var s = n.vertices, i = n.lineDistances, o = 0, a = s.length; o < a; o += 2) t.copy(s[o]), e.copy(s[o + 1]), i[o] = 0 === o ? 0 : i[o - 1], i[o + 1] = i[o] + t.distanceTo(e);
				return this
			}
		}()
	}), Ve.prototype = Object.assign(Object.create(Ge.prototype), {
		constructor: Ve,
		isLineLoop: !0
	}), ke.prototype = Object.create(W.prototype), ke.prototype.constructor = ke, ke.prototype.isPointsMaterial = !0, ke.prototype.copy = function(t) {
		return W.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.morphTargets = t.morphTargets, this
	}, je.prototype = Object.assign(Object.create(M.prototype), {
		constructor: je,
		isPoints: !0,
		raycast: function() {
			var t = new o,
				e = new Y,
				n = new m;
			return function(r, i) {
				function o(t, n) {
					var o = e.distanceSqToPoint(t);
					if(o < d) {
						e.closestPointToPoint(t, f), f.applyMatrix4(h);
						var s = r.ray.origin.distanceTo(f);
						if(s < r.near || s > r.far) return;
						i.push({
							distance: s,
							distanceToRay: Math.sqrt(o),
							point: f.clone(),
							index: n,
							face: null,
							object: a
						})
					}
				}
				var a = this,
					c = this.geometry,
					h = this.matrixWorld,
					u = r.params.Points.threshold;
				if(null === c.boundingSphere && c.computeBoundingSphere(), n.copy(c.boundingSphere), n.applyMatrix4(h), n.radius += u, !1 !== r.ray.intersectsSphere(n)) {
					t.getInverse(h), e.copy(r.ray).applyMatrix4(t);
					var l = u / ((this.scale.x + this.scale.y + this.scale.z) / 3),
						d = l * l,
						p = new s,
						f = new s;
					if(c.isBufferGeometry) {
						var m = c.index,
							g = c.attributes,
							v = g.position.array;
						if(null !== m)
							for(var y = m.array, x = 0, w = y.length; x < w; x++) {
								var b = y[x];
								p.fromArray(v, 3 * b), o(p, b)
							} else
								for(var x = 0, _ = v.length / 3; x < _; x++) p.fromArray(v, 3 * x), o(p, x)
					} else
						for(var M = c.vertices, x = 0, _ = M.length; x < _; x++) o(M[x], x)
				}
			}
		}(),
		clone: function() {
			return new this.constructor(this.geometry, this.material).copy(this)
		}
	}), We.prototype = Object.assign(Object.create(M.prototype), {
		constructor: We,
		isGroup: !0
	}), Xe.prototype = Object.assign(Object.create(h.prototype), {
		constructor: Xe,
		isVideoTexture: !0,
		update: function() {
			var t = this.image;
			t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
		}
	}), qe.prototype = Object.create(h.prototype), qe.prototype.constructor = qe, qe.prototype.isCompressedTexture = !0, Ye.prototype = Object.create(h.prototype), Ye.prototype.constructor = Ye, Ye.prototype.isDepthTexture = !0, Ze.prototype = Object.create(G.prototype), Ze.prototype.constructor = Ze, Je.prototype = Object.create(A.prototype), Je.prototype.constructor = Je, Qe.prototype = Object.create(G.prototype), Qe.prototype.constructor = Qe, Ke.prototype = Object.create(A.prototype), Ke.prototype.constructor = Ke, $e.prototype = Object.create(G.prototype), $e.prototype.constructor = $e, tn.prototype = Object.create(A.prototype), tn.prototype.constructor = tn, en.prototype = Object.create($e.prototype), en.prototype.constructor = en, nn.prototype = Object.create(A.prototype), nn.prototype.constructor = nn, rn.prototype = Object.create($e.prototype), rn.prototype.constructor = rn, on.prototype = Object.create(A.prototype), on.prototype.constructor = on, an.prototype = Object.create($e.prototype), an.prototype.constructor = an, sn.prototype = Object.create(A.prototype), sn.prototype.constructor = sn, cn.prototype = Object.create($e.prototype), cn.prototype.constructor = cn, hn.prototype = Object.create(A.prototype), hn.prototype.constructor = hn, un.prototype = Object.create(G.prototype), un.prototype.constructor = un, ln.prototype = Object.create(A.prototype), ln.prototype.constructor = ln, dn.prototype = Object.create(G.prototype), dn.prototype.constructor = dn, pn.prototype = Object.create(A.prototype), pn.prototype.constructor = pn, fn.prototype = Object.create(G.prototype), fn.prototype.constructor = fn;
	var th = {
			triangulate: function(t, e, n) {
				n = n || 2;
				var r = e && e.length,
					i = r ? e[0] * n : t.length,
					o = mn(t, 0, i, n, !0),
					a = [];
				if(!o) return a;
				var s, c, h, u, l, d, p;
				if(r && (o = _n(t, e, o, n)), t.length > 80 * n) {
					s = h = t[0], c = u = t[1];
					for(var f = n; f < i; f += n) l = t[f], d = t[f + 1], l < s && (s = l), d < c && (c = d), l > h && (h = l), d > u && (u = d);
					p = Math.max(h - s, u - c), p = 0 !== p ? 1 / p : 0
				}
				return vn(o, a, n, s, c, p), a
			}
		},
		eh = {
			area: function(t) {
				for(var e = t.length, n = 0, r = e - 1, i = 0; i < e; r = i++) n += t[r].x * t[i].y - t[i].x * t[r].y;
				return .5 * n
			},
			isClockWise: function(t) {
				return eh.area(t) < 0
			},
			triangulateShape: function(t, e) {
				var n = [],
					r = [],
					i = [];
				kn(t), jn(n, t);
				var o = t.length;
				e.forEach(kn);
				for(var a = 0; a < e.length; a++) r.push(o), o += e[a].length, jn(n, e[a]);
				for(var s = th.triangulate(n, r), a = 0; a < s.length; a += 3) i.push(s.slice(a, a + 3));
				return i
			}
		};
	Wn.prototype = Object.create(A.prototype), Wn.prototype.constructor = Wn, Wn.prototype.toJSON = function() {
		var t = A.prototype.toJSON.call(this);
		return qn(this.parameters.shapes, this.parameters.options, t)
	}, Xn.prototype = Object.create(G.prototype), Xn.prototype.constructor = Xn, Xn.prototype.toJSON = function() {
		var t = G.prototype.toJSON.call(this);
		return qn(this.parameters.shapes, this.parameters.options, t)
	};
	var nh = {
		generateTopUV: function(t, e, n, r, o) {
			var a = e[3 * n],
				s = e[3 * n + 1],
				c = e[3 * r],
				h = e[3 * r + 1],
				u = e[3 * o],
				l = e[3 * o + 1];
			return [new i(a, s), new i(c, h), new i(u, l)]
		},
		generateSideWallUV: function(t, e, n, r, o, a) {
			var s = e[3 * n],
				c = e[3 * n + 1],
				h = e[3 * n + 2],
				u = e[3 * r],
				l = e[3 * r + 1],
				d = e[3 * r + 2],
				p = e[3 * o],
				f = e[3 * o + 1],
				m = e[3 * o + 2],
				g = e[3 * a],
				v = e[3 * a + 1],
				y = e[3 * a + 2];
			return Math.abs(c - l) < .01 ? [new i(s, 1 - h), new i(u, 1 - d), new i(p, 1 - m), new i(g, 1 - y)] : [new i(c, 1 - h), new i(l, 1 - d), new i(f, 1 - m), new i(v, 1 - y)]
		}
	};
	Yn.prototype = Object.create(A.prototype), Yn.prototype.constructor = Yn, Zn.prototype = Object.create(Xn.prototype), Zn.prototype.constructor = Zn, Jn.prototype = Object.create(A.prototype), Jn.prototype.constructor = Jn, Qn.prototype = Object.create(G.prototype), Qn.prototype.constructor = Qn, Kn.prototype = Object.create(A.prototype), Kn.prototype.constructor = Kn, $n.prototype = Object.create(G.prototype), $n.prototype.constructor = $n, tr.prototype = Object.create(A.prototype), tr.prototype.constructor = tr, er.prototype = Object.create(G.prototype), er.prototype.constructor = er, nr.prototype = Object.create(A.prototype), nr.prototype.constructor = nr, nr.prototype.toJSON = function() {
		var t = A.prototype.toJSON.call(this);
		return ir(this.parameters.shapes, t)
	}, rr.prototype = Object.create(G.prototype), rr.prototype.constructor = rr, rr.prototype.toJSON = function() {
		var t = G.prototype.toJSON.call(this);
		return ir(this.parameters.shapes, t)
	}, or.prototype = Object.create(G.prototype), or.prototype.constructor = or, ar.prototype = Object.create(A.prototype), ar.prototype.constructor = ar, sr.prototype = Object.create(G.prototype), sr.prototype.constructor = sr, cr.prototype = Object.create(ar.prototype), cr.prototype.constructor = cr, hr.prototype = Object.create(sr.prototype), hr.prototype.constructor = hr, ur.prototype = Object.create(A.prototype), ur.prototype.constructor = ur, lr.prototype = Object.create(G.prototype), lr.prototype.constructor = lr;
	var rh = Object.freeze({
		WireframeGeometry: Ze,
		ParametricGeometry: Je,
		ParametricBufferGeometry: Qe,
		TetrahedronGeometry: tn,
		TetrahedronBufferGeometry: en,
		OctahedronGeometry: nn,
		OctahedronBufferGeometry: rn,
		IcosahedronGeometry: on,
		IcosahedronBufferGeometry: an,
		DodecahedronGeometry: sn,
		DodecahedronBufferGeometry: cn,
		PolyhedronGeometry: Ke,
		PolyhedronBufferGeometry: $e,
		TubeGeometry: hn,
		TubeBufferGeometry: un,
		TorusKnotGeometry: ln,
		TorusKnotBufferGeometry: dn,
		TorusGeometry: pn,
		TorusBufferGeometry: fn,
		TextGeometry: Yn,
		TextBufferGeometry: Zn,
		SphereGeometry: Jn,
		SphereBufferGeometry: Qn,
		RingGeometry: Kn,
		RingBufferGeometry: $n,
		PlaneGeometry: k,
		PlaneBufferGeometry: j,
		LatheGeometry: tr,
		LatheBufferGeometry: er,
		ShapeGeometry: nr,
		ShapeBufferGeometry: rr,
		ExtrudeGeometry: Wn,
		ExtrudeBufferGeometry: Xn,
		EdgesGeometry: or,
		ConeGeometry: cr,
		ConeBufferGeometry: hr,
		CylinderGeometry: ar,
		CylinderBufferGeometry: sr,
		CircleGeometry: ur,
		CircleBufferGeometry: lr,
		BoxGeometry: H,
		BoxBufferGeometry: V
	});
	dr.prototype = Object.create(W.prototype), dr.prototype.constructor = dr, dr.prototype.isShadowMaterial = !0, dr.prototype.copy = function(t) {
		return W.prototype.copy.call(this, t), this.color.copy(t.color), this
	}, pr.prototype = Object.create(q.prototype), pr.prototype.constructor = pr, pr.prototype.isRawShaderMaterial = !0, fr.prototype = Object.create(W.prototype), fr.prototype.constructor = fr, fr.prototype.isMeshStandardMaterial = !0, fr.prototype.copy = function(t) {
		return W.prototype.copy.call(this, t), this.defines = {
			STANDARD: ""
		}, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
	}, mr.prototype = Object.create(fr.prototype), mr.prototype.constructor = mr, mr.prototype.isMeshPhysicalMaterial = !0, mr.prototype.copy = function(t) {
		return fr.prototype.copy.call(this, t), this.defines = {
			PHYSICAL: ""
		}, this.reflectivity = t.reflectivity, this.clearCoat = t.clearCoat, this.clearCoatRoughness = t.clearCoatRoughness, this
	}, gr.prototype = Object.create(W.prototype), gr.prototype.constructor = gr, gr.prototype.isMeshPhongMaterial = !0, gr.prototype.copy = function(t) {
		return W.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
	}, vr.prototype = Object.create(gr.prototype), vr.prototype.constructor = vr, vr.prototype.isMeshToonMaterial = !0, vr.prototype.copy = function(t) {
		return gr.prototype.copy.call(this, t), this.gradientMap = t.gradientMap, this
	}, yr.prototype = Object.create(W.prototype), yr.prototype.constructor = yr, yr.prototype.isMeshNormalMaterial = !0, yr.prototype.copy = function(t) {
		return W.prototype.copy.call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
	}, xr.prototype = Object.create(W.prototype), xr.prototype.constructor = xr, xr.prototype.isMeshLambertMaterial = !0, xr.prototype.copy = function(t) {
		return W.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
	}, wr.prototype = Object.create(ze.prototype), wr.prototype.constructor = wr, wr.prototype.isLineDashedMaterial = !0, wr.prototype.copy = function(t) {
		return ze.prototype.copy.call(this, t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this
	};
	var ih = Object.freeze({
			ShadowMaterial: dr,
			SpriteMaterial: Ie,
			RawShaderMaterial: pr,
			ShaderMaterial: q,
			PointsMaterial: ke,
			MeshPhysicalMaterial: mr,
			MeshStandardMaterial: fr,
			MeshPhongMaterial: gr,
			MeshToonMaterial: vr,
			MeshNormalMaterial: yr,
			MeshLambertMaterial: xr,
			MeshDepthMaterial: ve,
			MeshDistanceMaterial: ye,
			MeshBasicMaterial: X,
			LineDashedMaterial: wr,
			LineBasicMaterial: ze,
			Material: W
		}),
		oh = {
			enabled: !1,
			files: {},
			add: function(t, e) {
				!1 !== this.enabled && (this.files[t] = e)
			},
			get: function(t) {
				if(!1 !== this.enabled) return this.files[t]
			},
			remove: function(t) {
				delete this.files[t]
			},
			clear: function() {
				this.files = {}
			}
		},
		ah = new br,
		sh = {};
	Object.assign(_r.prototype, {
		load: function(t, e, n, r) {
			void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
			var i = this,
				o = oh.get(t);
			if(void 0 !== o) return i.manager.itemStart(t), setTimeout(function() {
				e && e(o), i.manager.itemEnd(t)
			}, 0), o;
			if(void 0 !== sh[t]) return void sh[t].push({
				onLoad: e,
				onProgress: n,
				onError: r
			});
			var a = /^data:(.*?)(;base64)?,(.*)$/,
				s = t.match(a);
			if(s) {
				var c = s[1],
					h = !!s[2],
					u = s[3];
				u = window.decodeURIComponent(u), h && (u = window.atob(u));
				try {
					var l, d = (this.responseType || "").toLowerCase();
					switch(d) {
						case "arraybuffer":
						case "blob":
							for(var p = new Uint8Array(u.length), f = 0; f < u.length; f++) p[f] = u.charCodeAt(f);
							l = "blob" === d ? new Blob([p.buffer], {
								type: c
							}) : p.buffer;
							break;
						case "document":
							var m = new DOMParser;
							l = m.parseFromString(u, c);
							break;
						case "json":
							l = JSON.parse(u);
							break;
						default:
							l = u
					}
					window.setTimeout(function() {
						e && e(l), i.manager.itemEnd(t)
					}, 0)
				} catch(e) {
					window.setTimeout(function() {
						r && r(e), i.manager.itemEnd(t), i.manager.itemError(t)
					}, 0)
				}
			} else {
				sh[t] = [], sh[t].push({
					onLoad: e,
					onProgress: n,
					onError: r
				});
				var g = new XMLHttpRequest;
				g.open("GET", t, !0), g.addEventListener("load", function(e) {
					var n = this.response;
					oh.add(t, n);
					var r = sh[t];
					if(delete sh[t], 200 === this.status || 0 === this.status) {
						0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received.");
						for(var o = 0, a = r.length; o < a; o++) {
							var s = r[o];
							s.onLoad && s.onLoad(n)
						}
						i.manager.itemEnd(t)
					} else {
						for(var o = 0, a = r.length; o < a; o++) {
							var s = r[o];
							s.onError && s.onError(e)
						}
						i.manager.itemEnd(t), i.manager.itemError(t)
					}
				}, !1), g.addEventListener("progress", function(e) {
					for(var n = sh[t], r = 0, i = n.length; r < i; r++) {
						var o = n[r];
						o.onProgress && o.onProgress(e)
					}
				}, !1), g.addEventListener("error", function(e) {
					var n = sh[t];
					delete sh[t];
					for(var r = 0, o = n.length; r < o; r++) {
						var a = n[r];
						a.onError && a.onError(e)
					}
					i.manager.itemEnd(t), i.manager.itemError(t)
				}, !1), void 0 !== this.responseType && (g.responseType = this.responseType), void 0 !== this.withCredentials && (g.withCredentials = this.withCredentials), g.overrideMimeType && g.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");
				for(var v in this.requestHeader) g.setRequestHeader(v, this.requestHeader[v]);
				g.send(null)
			}
			return i.manager.itemStart(t), g
		},
		setPath: function(t) {
			return this.path = t, this
		},
		setResponseType: function(t) {
			return this.responseType = t, this
		},
		setWithCredentials: function(t) {
			return this.withCredentials = t, this
		},
		setMimeType: function(t) {
			return this.mimeType = t, this
		},
		setRequestHeader: function(t) {
			return this.requestHeader = t, this
		}
	}), Object.assign(Mr.prototype, {
		load: function(t, e, n, r) {
			var i = this,
				o = [],
				a = new qe;
			a.image = o;
			var s = new _r(this.manager);
			if(s.setPath(this.path), s.setResponseType("arraybuffer"), Array.isArray(t))
				for(var c = 0, h = 0, u = t.length; h < u; ++h) ! function(h) {
					s.load(t[h], function(t) {
						var n = i._parser(t, !0);
						o[h] = {
							width: n.width,
							height: n.height,
							format: n.format,
							mipmaps: n.mipmaps
						}, 6 === (c += 1) && (1 === n.mipmapCount && (a.minFilter = xs), a.format = n.format, a.needsUpdate = !0, e && e(a))
					}, n, r)
				}(h);
			else s.load(t, function(t) {
				var n = i._parser(t, !0);
				if(n.isCubemap)
					for(var r = n.mipmaps.length / n.mipmapCount, s = 0; s < r; s++) {
						o[s] = {
							mipmaps: []
						};
						for(var c = 0; c < n.mipmapCount; c++) o[s].mipmaps.push(n.mipmaps[s * n.mipmapCount + c]), o[s].format = n.format, o[s].width = n.width, o[s].height = n.height
					} else a.image.width = n.width, a.image.height = n.height, a.mipmaps = n.mipmaps;
				1 === n.mipmapCount && (a.minFilter = xs), a.format = n.format, a.needsUpdate = !0, e && e(a)
			}, n, r);
			return a
		},
		setPath: function(t) {
			return this.path = t, this
		}
	}), Object.assign(Er.prototype, {
		load: function(t, e, n, r) {
			var i = this,
				o = new p,
				a = new _r(this.manager);
			return a.setResponseType("arraybuffer"), a.load(t, function(t) {
				var n = i._parser(t);
				n && (void 0 !== n.image ? o.image = n.image : void 0 !== n.data && (o.image.width = n.width, o.image.height = n.height, o.image.data = n.data), o.wrapS = void 0 !== n.wrapS ? n.wrapS : fs, o.wrapT = void 0 !== n.wrapT ? n.wrapT : fs, o.magFilter = void 0 !== n.magFilter ? n.magFilter : xs, o.minFilter = void 0 !== n.minFilter ? n.minFilter : bs, o.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1, void 0 !== n.format && (o.format = n.format), void 0 !== n.type && (o.type = n.type), void 0 !== n.mipmaps && (o.mipmaps = n.mipmaps), 1 === n.mipmapCount && (o.minFilter = xs), o.needsUpdate = !0, e && e(o, n))
			}, n, r), o
		}
	}), Object.assign(Tr.prototype, {
		crossOrigin: "Anonymous",
		load: function(t, e, n, r) {
			function i() {
				c.removeEventListener("load", i, !1), c.removeEventListener("error", o, !1), oh.add(t, this), e && e(this), a.manager.itemEnd(t)
			}

			function o(e) {
				c.removeEventListener("load", i, !1), c.removeEventListener("error", o, !1), r && r(e), a.manager.itemEnd(t), a.manager.itemError(t)
			}
			void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
			var a = this,
				s = oh.get(t);
			if(void 0 !== s) return a.manager.itemStart(t), setTimeout(function() {
				e && e(s), a.manager.itemEnd(t)
			}, 0), s;
			var c = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
			return c.addEventListener("load", i, !1), c.addEventListener("error", o, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (c.crossOrigin = this.crossOrigin), a.manager.itemStart(t), c.src = t, c
		},
		setCrossOrigin: function(t) {
			return this.crossOrigin = t, this
		},
		setPath: function(t) {
			return this.path = t, this
		}
	}), Object.assign(Sr.prototype, {
		crossOrigin: "Anonymous",
		load: function(t, e, n, r) {
			var i = new ht,
				o = new Tr(this.manager);
			o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
			for(var a = 0, s = 0; s < t.length; ++s) ! function(n) {
				o.load(t[n], function(t) {
					i.images[n] = t, 6 == ++a && (i.needsUpdate = !0, e && e(i))
				}, void 0, r)
			}(s);
			return i
		},
		setCrossOrigin: function(t) {
			return this.crossOrigin = t, this
		},
		setPath: function(t) {
			return this.path = t, this
		}
	}), Object.assign(Ar.prototype, {
		crossOrigin: "Anonymous",
		load: function(t, e, n, r) {
			var i = new h,
				o = new Tr(this.manager);
			return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(t, function(n) {
				i.image = n;
				var r = t.search(/\.(jpg|jpeg)$/) > 0 || 0 === t.search(/^data\:image\/jpeg/);
				i.format = r ? Ds : Us, i.needsUpdate = !0, void 0 !== e && e(i)
			}, n, r), i
		},
		setCrossOrigin: function(t) {
			return this.crossOrigin = t, this
		},
		setPath: function(t) {
			return this.path = t, this
		}
	}), Object.assign(Rr.prototype, {
		getPoint: function() {
			return console.warn("THREE.Curve: .getPoint() not implemented."), null
		},
		getPointAt: function(t, e) {
			var n = this.getUtoTmapping(t);
			return this.getPoint(n, e)
		},
		getPoints: function(t) {
			void 0 === t && (t = 5);
			for(var e = [], n = 0; n <= t; n++) e.push(this.getPoint(n / t));
			return e
		},
		getSpacedPoints: function(t) {
			void 0 === t && (t = 5);
			for(var e = [], n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
			return e
		},
		getLength: function() {
			var t = this.getLengths();
			return t[t.length - 1]
		},
		getLengths: function(t) {
			if(void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
			this.needsUpdate = !1;
			var e, n, r = [],
				i = this.getPoint(0),
				o = 0;
			for(r.push(0), n = 1; n <= t; n++) e = this.getPoint(n / t), o += e.distanceTo(i), r.push(o), i = e;
			return this.cacheArcLengths = r, r
		},
		updateArcLengths: function() {
			this.needsUpdate = !0, this.getLengths()
		},
		getUtoTmapping: function(t, e) {
			var n, r = this.getLengths(),
				i = 0,
				o = r.length;
			n = e || t * r[o - 1];
			for(var a, s = 0, c = o - 1; s <= c;)
				if(i = Math.floor(s + (c - s) / 2), (a = r[i] - n) < 0) s = i + 1;
				else {
					if(!(a > 0)) {
						c = i;
						break
					}
					c = i - 1
				}
			if(i = c, r[i] === n) return i / (o - 1);
			var h = r[i];
			return(i + (n - h) / (r[i + 1] - h)) / (o - 1)
		},
		getTangent: function(t) {
			var e = t - 1e-4,
				n = t + 1e-4;
			e < 0 && (e = 0), n > 1 && (n = 1);
			var r = this.getPoint(e);
			return this.getPoint(n).clone().sub(r).normalize()
		},
		getTangentAt: function(t) {
			var e = this.getUtoTmapping(t);
			return this.getTangent(e)
		},
		computeFrenetFrames: function(t, e) {
			var n, r, i, a = new s,
				c = [],
				h = [],
				u = [],
				l = new s,
				d = new o;
			for(n = 0; n <= t; n++) r = n / t, c[n] = this.getTangentAt(r), c[n].normalize();
			h[0] = new s, u[0] = new s;
			var p = Number.MAX_VALUE,
				f = Math.abs(c[0].x),
				m = Math.abs(c[0].y),
				g = Math.abs(c[0].z);
			for(f <= p && (p = f, a.set(1, 0, 0)), m <= p && (p = m, a.set(0, 1, 0)), g <= p && a.set(0, 0, 1), l.crossVectors(c[0], a).normalize(), h[0].crossVectors(c[0], l), u[0].crossVectors(c[0], h[0]), n = 1; n <= t; n++) h[n] = h[n - 1].clone(), u[n] = u[n - 1].clone(), l.crossVectors(c[n - 1], c[n]), l.length() > Number.EPSILON && (l.normalize(), i = Math.acos(Ic.clamp(c[n - 1].dot(c[n]), -1, 1)), h[n].applyMatrix4(d.makeRotationAxis(l, i))), u[n].crossVectors(c[n], h[n]);
			if(!0 === e)
				for(i = Math.acos(Ic.clamp(h[0].dot(h[t]), -1, 1)), i /= t, c[0].dot(l.crossVectors(h[0], h[t])) > 0 && (i = -i), n = 1; n <= t; n++) h[n].applyMatrix4(d.makeRotationAxis(c[n], i * n)), u[n].crossVectors(c[n], h[n]);
			return {
				tangents: c,
				normals: h,
				binormals: u
			}
		},
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.arcLengthDivisions = t.arcLengthDivisions, this
		},
		toJSON: function() {
			var t = {
				metadata: {
					version: 4.5,
					type: "Curve",
					generator: "Curve.toJSON"
				}
			};
			return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t
		},
		fromJSON: function(t) {
			return this.arcLengthDivisions = t.arcLengthDivisions, this
		}
	}), Lr.prototype = Object.create(Rr.prototype), Lr.prototype.constructor = Lr, Lr.prototype.isEllipseCurve = !0, Lr.prototype.getPoint = function(t, e) {
		for(var n = e || new i, r = 2 * Math.PI, o = this.aEndAngle - this.aStartAngle, a = Math.abs(o) < Number.EPSILON; o < 0;) o += r;
		for(; o > r;) o -= r;
		o < Number.EPSILON && (o = a ? 0 : r), !0 !== this.aClockwise || a || (o === r ? o = -r : o -= r);
		var s = this.aStartAngle + t * o,
			c = this.aX + this.xRadius * Math.cos(s),
			h = this.aY + this.yRadius * Math.sin(s);
		if(0 !== this.aRotation) {
			var u = Math.cos(this.aRotation),
				l = Math.sin(this.aRotation),
				d = c - this.aX,
				p = h - this.aY;
			c = d * u - p * l + this.aX, h = d * l + p * u + this.aY
		}
		return n.set(c, h)
	}, Lr.prototype.copy = function(t) {
		return Rr.prototype.copy.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
	}, Lr.prototype.toJSON = function() {
		var t = Rr.prototype.toJSON.call(this);
		return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t
	}, Lr.prototype.fromJSON = function(t) {
		return Rr.prototype.fromJSON.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
	}, Pr.prototype = Object.create(Lr.prototype), Pr.prototype.constructor = Pr, Pr.prototype.isArcCurve = !0;
	var ch = new s,
		hh = new Cr,
		uh = new Cr,
		lh = new Cr;
	Or.prototype = Object.create(Rr.prototype), Or.prototype.constructor = Or, Or.prototype.isCatmullRomCurve3 = !0, Or.prototype.getPoint = function(t, e) {
		var n = e || new s,
			r = this.points,
			i = r.length,
			o = (i - (this.closed ? 0 : 1)) * t,
			a = Math.floor(o),
			c = o - a;
		this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / i) + 1) * i : 0 === c && a === i - 1 && (a = i - 2, c = 1);
		var h, u, l, d;
		if(this.closed || a > 0 ? h = r[(a - 1) % i] : (ch.subVectors(r[0], r[1]).add(r[0]), h = ch), u = r[a % i], l = r[(a + 1) % i], this.closed || a + 2 < i ? d = r[(a + 2) % i] : (ch.subVectors(r[i - 1], r[i - 2]).add(r[i - 1]), d = ch), "centripetal" === this.curveType || "chordal" === this.curveType) {
			var p = "chordal" === this.curveType ? .5 : .25,
				f = Math.pow(h.distanceToSquared(u), p),
				m = Math.pow(u.distanceToSquared(l), p),
				g = Math.pow(l.distanceToSquared(d), p);
			m < 1e-4 && (m = 1), f < 1e-4 && (f = m), g < 1e-4 && (g = m), hh.initNonuniformCatmullRom(h.x, u.x, l.x, d.x, f, m, g), uh.initNonuniformCatmullRom(h.y, u.y, l.y, d.y, f, m, g), lh.initNonuniformCatmullRom(h.z, u.z, l.z, d.z, f, m, g)
		} else "catmullrom" === this.curveType && (hh.initCatmullRom(h.x, u.x, l.x, d.x, this.tension), uh.initCatmullRom(h.y, u.y, l.y, d.y, this.tension), lh.initCatmullRom(h.z, u.z, l.z, d.z, this.tension));
		return n.set(hh.calc(c), uh.calc(c), lh.calc(c)), n
	}, Or.prototype.copy = function(t) {
		Rr.prototype.copy.call(this, t), this.points = [];
		for(var e = 0, n = t.points.length; e < n; e++) {
			var r = t.points[e];
			this.points.push(r.clone())
		}
		return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
	}, Or.prototype.toJSON = function() {
		var t = Rr.prototype.toJSON.call(this);
		t.points = [];
		for(var e = 0, n = this.points.length; e < n; e++) {
			var r = this.points[e];
			t.points.push(r.toArray())
		}
		return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t
	}, Or.prototype.fromJSON = function(t) {
		Rr.prototype.fromJSON.call(this, t), this.points = [];
		for(var e = 0, n = t.points.length; e < n; e++) {
			var r = t.points[e];
			this.points.push((new s).fromArray(r))
		}
		return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
	}, kr.prototype = Object.create(Rr.prototype), kr.prototype.constructor = kr, kr.prototype.isCubicBezierCurve = !0, kr.prototype.getPoint = function(t, e) {
		var n = e || new i,
			r = this.v0,
			o = this.v1,
			a = this.v2,
			s = this.v3;
		return n.set(Vr(t, r.x, o.x, a.x, s.x), Vr(t, r.y, o.y, a.y, s.y)), n
	}, kr.prototype.copy = function(t) {
		return Rr.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
	}, kr.prototype.toJSON = function() {
		var t = Rr.prototype.toJSON.call(this);
		return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
	}, kr.prototype.fromJSON = function(t) {
		return Rr.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
	}, jr.prototype = Object.create(Rr.prototype), jr.prototype.constructor = jr, jr.prototype.isCubicBezierCurve3 = !0, jr.prototype.getPoint = function(t, e) {
		var n = e || new s,
			r = this.v0,
			i = this.v1,
			o = this.v2,
			a = this.v3;
		return n.set(Vr(t, r.x, i.x, o.x, a.x), Vr(t, r.y, i.y, o.y, a.y), Vr(t, r.z, i.z, o.z, a.z)), n
	}, jr.prototype.copy = function(t) {
		return Rr.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
	}, jr.prototype.toJSON = function() {
		var t = Rr.prototype.toJSON.call(this);
		return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
	}, jr.prototype.fromJSON = function(t) {
		return Rr.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
	}, Wr.prototype = Object.create(Rr.prototype), Wr.prototype.constructor = Wr, Wr.prototype.isLineCurve = !0, Wr.prototype.getPoint = function(t, e) {
		var n = e || new i;
		return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n
	}, Wr.prototype.getPointAt = function(t, e) {
		return this.getPoint(t, e)
	}, Wr.prototype.getTangent = function() {
		return this.v2.clone().sub(this.v1).normalize()
	}, Wr.prototype.copy = function(t) {
		return Rr.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
	}, Wr.prototype.toJSON = function() {
		var t = Rr.prototype.toJSON.call(this);
		return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
	}, Wr.prototype.fromJSON = function(t) {
		return Rr.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
	}, Xr.prototype = Object.create(Rr.prototype), Xr.prototype.constructor = Xr, Xr.prototype.isLineCurve3 = !0, Xr.prototype.getPoint = function(t, e) {
		var n = e || new s;
		return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n
	}, Xr.prototype.getPointAt = function(t, e) {
		return this.getPoint(t, e)
	}, Xr.prototype.copy = function(t) {
		return Rr.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
	}, Xr.prototype.toJSON = function() {
		var t = Rr.prototype.toJSON.call(this);
		return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
	}, Xr.prototype.fromJSON = function(t) {
		return Rr.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
	}, qr.prototype = Object.create(Rr.prototype), qr.prototype.constructor = qr, qr.prototype.isQuadraticBezierCurve = !0, qr.prototype.getPoint = function(t, e) {
		var n = e || new i,
			r = this.v0,
			o = this.v1,
			a = this.v2;
		return n.set(Br(t, r.x, o.x, a.x), Br(t, r.y, o.y, a.y)), n
	}, qr.prototype.copy = function(t) {
		return Rr.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
	}, qr.prototype.toJSON = function() {
		var t = Rr.prototype.toJSON.call(this);
		return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
	}, qr.prototype.fromJSON = function(t) {
		return Rr.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
	}, Yr.prototype = Object.create(Rr.prototype), Yr.prototype.constructor = Yr, Yr.prototype.isQuadraticBezierCurve3 = !0, Yr.prototype.getPoint = function(t, e) {
		var n = e || new s,
			r = this.v0,
			i = this.v1,
			o = this.v2;
		return n.set(Br(t, r.x, i.x, o.x), Br(t, r.y, i.y, o.y), Br(t, r.z, i.z, o.z)), n
	}, Yr.prototype.copy = function(t) {
		return Rr.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
	}, Yr.prototype.toJSON = function() {
		var t = Rr.prototype.toJSON.call(this);
		return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
	}, Yr.prototype.fromJSON = function(t) {
		return Rr.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
	}, Zr.prototype = Object.create(Rr.prototype), Zr.prototype.constructor = Zr, Zr.prototype.isSplineCurve = !0, Zr.prototype.getPoint = function(t, e) {
		var n = e || new i,
			r = this.points,
			o = (r.length - 1) * t,
			a = Math.floor(o),
			s = o - a,
			c = r[0 === a ? a : a - 1],
			h = r[a],
			u = r[a > r.length - 2 ? r.length - 1 : a + 1],
			l = r[a > r.length - 3 ? r.length - 1 : a + 2];
		return n.set(Ir(s, c.x, h.x, u.x, l.x), Ir(s, c.y, h.y, u.y, l.y)), n
	}, Zr.prototype.copy = function(t) {
		Rr.prototype.copy.call(this, t), this.points = [];
		for(var e = 0, n = t.points.length; e < n; e++) {
			var r = t.points[e];
			this.points.push(r.clone())
		}
		return this
	}, Zr.prototype.toJSON = function() {
		var t = Rr.prototype.toJSON.call(this);
		t.points = [];
		for(var e = 0, n = this.points.length; e < n; e++) {
			var r = this.points[e];
			t.points.push(r.toArray())
		}
		return t
	}, Zr.prototype.fromJSON = function(t) {
		Rr.prototype.fromJSON.call(this, t), this.points = [];
		for(var e = 0, n = t.points.length; e < n; e++) {
			var r = t.points[e];
			this.points.push((new i).fromArray(r))
		}
		return this
	};
	var dh = Object.freeze({
		ArcCurve: Pr,
		CatmullRomCurve3: Or,
		CubicBezierCurve: kr,
		CubicBezierCurve3: jr,
		EllipseCurve: Lr,
		LineCurve: Wr,
		LineCurve3: Xr,
		QuadraticBezierCurve: qr,
		QuadraticBezierCurve3: Yr,
		SplineCurve: Zr
	});
	Jr.prototype = Object.assign(Object.create(Rr.prototype), {
		constructor: Jr,
		add: function(t) {
			this.curves.push(t)
		},
		closePath: function() {
			var t = this.curves[0].getPoint(0),
				e = this.curves[this.curves.length - 1].getPoint(1);
			t.equals(e) || this.curves.push(new Wr(e, t))
		},
		getPoint: function(t) {
			for(var e = t * this.getLength(), n = this.getCurveLengths(), r = 0; r < n.length;) {
				if(n[r] >= e) {
					var i = n[r] - e,
						o = this.curves[r],
						a = o.getLength(),
						s = 0 === a ? 0 : 1 - i / a;
					return o.getPointAt(s)
				}
				r++
			}
			return null
		},
		getLength: function() {
			var t = this.getCurveLengths();
			return t[t.length - 1]
		},
		updateArcLengths: function() {
			this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
		},
		getCurveLengths: function() {
			if(this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
			for(var t = [], e = 0, n = 0, r = this.curves.length; n < r; n++) e += this.curves[n].getLength(), t.push(e);
			return this.cacheLengths = t, t
		},
		getSpacedPoints: function(t) {
			void 0 === t && (t = 40);
			for(var e = [], n = 0; n <= t; n++) e.push(this.getPoint(n / t));
			return this.autoClose && e.push(e[0]), e
		},
		getPoints: function(t) {
			t = t || 12;
			for(var e, n = [], r = 0, i = this.curves; r < i.length; r++)
				for(var o = i[r], a = o && o.isEllipseCurve ? 2 * t : o && o.isLineCurve ? 1 : o && o.isSplineCurve ? t * o.points.length : t, s = o.getPoints(a), c = 0; c < s.length; c++) {
					var h = s[c];
					e && e.equals(h) || (n.push(h), e = h)
				}
			return this.autoClose && n.length > 1 && !n[n.length - 1].equals(n[0]) && n.push(n[0]), n
		},
		copy: function(t) {
			Rr.prototype.copy.call(this, t), this.curves = [];
			for(var e = 0, n = t.curves.length; e < n; e++) {
				var r = t.curves[e];
				this.curves.push(r.clone())
			}
			return this.autoClose = t.autoClose, this
		},
		toJSON: function() {
			var t = Rr.prototype.toJSON.call(this);
			t.autoClose = this.autoClose, t.curves = [];
			for(var e = 0, n = this.curves.length; e < n; e++) {
				var r = this.curves[e];
				t.curves.push(r.toJSON())
			}
			return t
		},
		fromJSON: function(t) {
			Rr.prototype.fromJSON.call(this, t), this.autoClose = t.autoClose, this.curves = [];
			for(var e = 0, n = t.curves.length; e < n; e++) {
				var r = t.curves[e];
				this.curves.push((new dh[r.type]).fromJSON(r))
			}
			return this
		}
	}), Qr.prototype = Object.assign(Object.create(Jr.prototype), {
		constructor: Qr,
		setFromPoints: function(t) {
			this.moveTo(t[0].x, t[0].y);
			for(var e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y)
		},
		moveTo: function(t, e) {
			this.currentPoint.set(t, e)
		},
		lineTo: function(t, e) {
			var n = new Wr(this.currentPoint.clone(), new i(t, e));
			this.curves.push(n), this.currentPoint.set(t, e)
		},
		quadraticCurveTo: function(t, e, n, r) {
			var o = new qr(this.currentPoint.clone(), new i(t, e), new i(n, r));
			this.curves.push(o), this.currentPoint.set(n, r)
		},
		bezierCurveTo: function(t, e, n, r, o, a) {
			var s = new kr(this.currentPoint.clone(), new i(t, e), new i(n, r), new i(o, a));
			this.curves.push(s), this.currentPoint.set(o, a)
		},
		splineThru: function(t) {
			var e = [this.currentPoint.clone()].concat(t),
				n = new Zr(e);
			this.curves.push(n), this.currentPoint.copy(t[t.length - 1])
		},
		arc: function(t, e, n, r, i, o) {
			var a = this.currentPoint.x,
				s = this.currentPoint.y;
			this.absarc(t + a, e + s, n, r, i, o)
		},
		absarc: function(t, e, n, r, i, o) {
			this.absellipse(t, e, n, n, r, i, o)
		},
		ellipse: function(t, e, n, r, i, o, a, s) {
			var c = this.currentPoint.x,
				h = this.currentPoint.y;
			this.absellipse(t + c, e + h, n, r, i, o, a, s)
		},
		absellipse: function(t, e, n, r, i, o, a, s) {
			var c = new Lr(t, e, n, r, i, o, a, s);
			if(this.curves.length > 0) {
				var h = c.getPoint(0);
				h.equals(this.currentPoint) || this.lineTo(h.x, h.y)
			}
			this.curves.push(c);
			var u = c.getPoint(1);
			this.currentPoint.copy(u)
		},
		copy: function(t) {
			return Jr.prototype.copy.call(this, t), this.currentPoint.copy(t.currentPoint), this
		},
		toJSON: function() {
			var t = Jr.prototype.toJSON.call(this);
			return t.currentPoint = this.currentPoint.toArray(), t
		},
		fromJSON: function(t) {
			return Jr.prototype.fromJSON.call(this, t), this.currentPoint.fromArray(t.currentPoint), this
		}
	}), Kr.prototype = Object.assign(Object.create(Qr.prototype), {
		constructor: Kr,
		getPointsHoles: function(t) {
			for(var e = [], n = 0, r = this.holes.length; n < r; n++) e[n] = this.holes[n].getPoints(t);
			return e
		},
		extractPoints: function(t) {
			return {
				shape: this.getPoints(t),
				holes: this.getPointsHoles(t)
			}
		},
		copy: function(t) {
			Qr.prototype.copy.call(this, t), this.holes = [];
			for(var e = 0, n = t.holes.length; e < n; e++) {
				var r = t.holes[e];
				this.holes.push(r.clone())
			}
			return this
		},
		toJSON: function() {
			var t = Qr.prototype.toJSON.call(this);
			t.uuid = this.uuid, t.holes = [];
			for(var e = 0, n = this.holes.length; e < n; e++) {
				var r = this.holes[e];
				t.holes.push(r.toJSON())
			}
			return t
		},
		fromJSON: function(t) {
			Qr.prototype.fromJSON.call(this, t), this.uuid = t.uuid, this.holes = [];
			for(var e = 0, n = t.holes.length; e < n; e++) {
				var r = t.holes[e];
				this.holes.push((new Qr).fromJSON(r))
			}
			return this
		}
	}), $r.prototype = Object.assign(Object.create(M.prototype), {
		constructor: $r,
		isLight: !0,
		copy: function(t) {
			return M.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this
		},
		toJSON: function(t) {
			var e = M.prototype.toJSON.call(this, t);
			return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e
		}
	}), ti.prototype = Object.assign(Object.create($r.prototype), {
		constructor: ti,
		isHemisphereLight: !0,
		copy: function(t) {
			return $r.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this
		}
	}), Object.assign(ei.prototype, {
		copy: function(t) {
			return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this
		},
		clone: function() {
			return(new this.constructor).copy(this)
		},
		toJSON: function() {
			var t = {};
			return 0 !== this.bias && (t.bias = this.bias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t
		}
	}), ni.prototype = Object.assign(Object.create(ei.prototype), {
		constructor: ni,
		isSpotLightShadow: !0,
		update: function(t) {
			var e = this.camera,
				n = 2 * Ic.RAD2DEG * t.angle,
				r = this.mapSize.width / this.mapSize.height,
				i = t.distance || e.far;
			n === e.fov && r === e.aspect && i === e.far || (e.fov = n, e.aspect = r, e.far = i, e.updateProjectionMatrix())
		}
	}), ri.prototype = Object.assign(Object.create($r.prototype), {
		constructor: ri,
		isSpotLight: !0,
		copy: function(t) {
			return $r.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
		}
	}), ii.prototype = Object.assign(Object.create($r.prototype), {
		constructor: ii,
		isPointLight: !0,
		copy: function(t) {
			return $r.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
		}
	}), oi.prototype = Object.assign(Object.create(ei.prototype), {
		constructor: oi
	}), ai.prototype = Object.assign(Object.create($r.prototype), {
		constructor: ai,
		isDirectionalLight: !0,
		copy: function(t) {
			return $r.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
		}
	}), si.prototype = Object.assign(Object.create($r.prototype), {
		constructor: si,
		isAmbientLight: !0
	}), ci.prototype = Object.assign(Object.create($r.prototype), {
		constructor: ci,
		isRectAreaLight: !0,
		copy: function(t) {
			return $r.prototype.copy.call(this, t), this.width = t.width, this.height = t.height, this
		},
		toJSON: function(t) {
			var e = $r.prototype.toJSON.call(this, t);
			return e.object.width = this.width, e.object.height = this.height, e
		}
	}), hi.prototype = Object.assign(Object.create(xi.prototype), {
		constructor: hi,
		ValueTypeName: "string",
		ValueBufferType: Array,
		DefaultInterpolation: fc,
		InterpolantFactoryMethodLinear: void 0,
		InterpolantFactoryMethodSmooth: void 0
	}), ui.prototype = Object.assign(Object.create(xi.prototype), {
		constructor: ui,
		ValueTypeName: "bool",
		ValueBufferType: Array,
		DefaultInterpolation: fc,
		InterpolantFactoryMethodLinear: void 0,
		InterpolantFactoryMethodSmooth: void 0
	}), Object.assign(li.prototype, {
		evaluate: function(t) {
			var e = this.parameterPositions,
				n = this._cachedIndex,
				r = e[n],
				i = e[n - 1];
			t: {
				e: {
					var o;n: {
						r: if(!(t < r)) {
							for(var a = n + 2;;) {
								if(void 0 === r) {
									if(t < i) break r;
									return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, t, i)
								}
								if(n === a) break;
								if(i = r, r = e[++n], t < r) break e
							}
							o = e.length;
							break n
						} {
							if(t >= i) break t;
							var s = e[1];
							t < s && (n = 2, i = s);
							for(var a = n - 2;;) {
								if(void 0 === i) return this._cachedIndex = 0, this.beforeStart_(0, t, r);
								if(n === a) break;
								if(r = i, i = e[--n - 1], t >= i) break e
							}
							o = n, n = 0
						}
					}
					for(; n < o;) {
						var c = n + o >>> 1;
						t < e[c] ? o = c : n = c + 1
					}
					if(r = e[n], void 0 === (i = e[n - 1])) return this._cachedIndex = 0, this.beforeStart_(0, t, r);
					if(void 0 === r) return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, i, t)
				}
				this._cachedIndex = n,
				this.intervalChanged_(n, i, r)
			}
			return this.interpolate_(n, i, t, r)
		},
		settings: null,
		DefaultSettings_: {},
		getSettings_: function() {
			return this.settings || this.DefaultSettings_
		},
		copySampleValue_: function(t) {
			for(var e = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = t * r, o = 0; o !== r; ++o) e[o] = n[i + o];
			return e
		},
		interpolate_: function() {
			throw new Error("call to abstract method")
		},
		intervalChanged_: function() {}
	}), Object.assign(li.prototype, {
		beforeStart_: li.prototype.copySampleValue_,
		afterEnd_: li.prototype.copySampleValue_
	}), di.prototype = Object.assign(Object.create(li.prototype), {
		constructor: di,
		interpolate_: function(t, e, n, r) {
			for(var i = this.resultBuffer, o = this.sampleValues, s = this.valueSize, c = t * s, h = (n - e) / (r - e), u = c + s; c !== u; c += 4) a.slerpFlat(i, 0, o, c - s, o, c, h);
			return i
		}
	}), pi.prototype = Object.assign(Object.create(xi.prototype), {
		constructor: pi,
		ValueTypeName: "quaternion",
		DefaultInterpolation: mc,
		InterpolantFactoryMethodLinear: function(t) {
			return new di(this.times, this.values, this.getValueSize(), t)
		},
		InterpolantFactoryMethodSmooth: void 0
	}), fi.prototype = Object.assign(Object.create(xi.prototype), {
		constructor: fi,
		ValueTypeName: "color"
	}), mi.prototype = Object.assign(Object.create(xi.prototype), {
		constructor: mi,
		ValueTypeName: "number"
	}), gi.prototype = Object.assign(Object.create(li.prototype), {
		constructor: gi,
		DefaultSettings_: {
			endingStart: vc,
			endingEnd: vc
		},
		intervalChanged_: function(t, e, n) {
			var r = this.parameterPositions,
				i = t - 2,
				o = t + 1,
				a = r[i],
				s = r[o];
			if(void 0 === a) switch(this.getSettings_().endingStart) {
				case yc:
					i = t, a = 2 * e - n;
					break;
				case xc:
					i = r.length - 2, a = e + r[i] - r[i + 1];
					break;
				default:
					i = t, a = n
			}
			if(void 0 === s) switch(this.getSettings_().endingEnd) {
				case yc:
					o = t, s = 2 * n - e;
					break;
				case xc:
					o = 1, s = n + r[1] - r[0];
					break;
				default:
					o = t - 1, s = e
			}
			var c = .5 * (n - e),
				h = this.valueSize;
			this._weightPrev = c / (e - a), this._weightNext = c / (s - n), this._offsetPrev = i * h, this._offsetNext = o * h
		},
		interpolate_: function(t, e, n, r) {
			for(var i = this.resultBuffer, o = this.sampleValues, a = this.valueSize, s = t * a, c = s - a, h = this._offsetPrev, u = this._offsetNext, l = this._weightPrev, d = this._weightNext, p = (n - e) / (r - e), f = p * p, m = f * p, g = -l * m + 2 * l * f - l * p, v = (1 + l) * m + (-1.5 - 2 * l) * f + (-.5 + l) * p + 1, y = (-1 - d) * m + (1.5 + d) * f + .5 * p, x = d * m - d * f, w = 0; w !== a; ++w) i[w] = g * o[h + w] + v * o[c + w] + y * o[s + w] + x * o[u + w];
			return i
		}
	}), vi.prototype = Object.assign(Object.create(li.prototype), {
		constructor: vi,
		interpolate_: function(t, e, n, r) {
			for(var i = this.resultBuffer, o = this.sampleValues, a = this.valueSize, s = t * a, c = s - a, h = (n - e) / (r - e), u = 1 - h, l = 0; l !== a; ++l) i[l] = o[c + l] * u + o[s + l] * h;
			return i
		}
	}), yi.prototype = Object.assign(Object.create(li.prototype), {
		constructor: yi,
		interpolate_: function(t) {
			return this.copySampleValue_(t - 1)
		}
	});
	var ph = {
		arraySlice: function(t, e, n) {
			return ph.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n)
		},
		convertArray: function(t, e, n) {
			return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
		},
		isTypedArray: function(t) {
			return ArrayBuffer.isView(t) && !(t instanceof DataView)
		},
		getKeyframeOrder: function(t) {
			function e(e, n) {
				return t[e] - t[n]
			}
			for(var n = t.length, r = new Array(n), i = 0; i !== n; ++i) r[i] = i;
			return r.sort(e), r
		},
		sortedArray: function(t, e, n) {
			for(var r = t.length, i = new t.constructor(r), o = 0, a = 0; a !== r; ++o)
				for(var s = n[o] * e, c = 0; c !== e; ++c) i[a++] = t[s + c];
			return i
		},
		flattenJSON: function(t, e, n, r) {
			for(var i = 1, o = t[0]; void 0 !== o && void 0 === o[r];) o = t[i++];
			if(void 0 !== o) {
				var a = o[r];
				if(void 0 !== a)
					if(Array.isArray(a))
						do {
							a = o[r], void 0 !== a && (e.push(o.time), n.push.apply(n, a)), o = t[i++]
						} while (void 0 !== o);
					else if(void 0 !== a.toArray)
					do {
						a = o[r], void 0 !== a && (e.push(o.time), a.toArray(n, n.length)), o = t[i++]
					} while (void 0 !== o);
				else
					do {
						a = o[r], void 0 !== a && (e.push(o.time), n.push(a)), o = t[i++]
					} while (void 0 !== o)
			}
		}
	};
	Object.assign(xi, {
		parse: function(t) {
			if(void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
			var e = xi._getTrackTypeForValueTypeName(t.type);
			if(void 0 === t.times) {
				var n = [],
					r = [];
				ph.flattenJSON(t.keys, n, r, "value"), t.times = n, t.values = r
			}
			return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
		},
		toJSON: function(t) {
			var e, n = t.constructor;
			if(void 0 !== n.toJSON) e = n.toJSON(t);
			else {
				e = {
					name: t.name,
					times: ph.convertArray(t.times, Array),
					values: ph.convertArray(t.values, Array)
				};
				var r = t.getInterpolation();
				r !== t.DefaultInterpolation && (e.interpolation = r)
			}
			return e.type = t.ValueTypeName, e
		},
		_getTrackTypeForValueTypeName: function(t) {
			switch(t.toLowerCase()) {
				case "scalar":
				case "double":
				case "float":
				case "number":
				case "integer":
					return mi;
				case "vector":
				case "vector2":
				case "vector3":
				case "vector4":
					return wi;
				case "color":
					return fi;
				case "quaternion":
					return pi;
				case "bool":
				case "boolean":
					return ui;
				case "string":
					return hi
			}
			throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
		}
	}), Object.assign(xi.prototype, {
		constructor: xi,
		TimeBufferType: Float32Array,
		ValueBufferType: Float32Array,
		DefaultInterpolation: mc,
		InterpolantFactoryMethodDiscrete: function(t) {
			return new yi(this.times, this.values, this.getValueSize(), t)
		},
		InterpolantFactoryMethodLinear: function(t) {
			return new vi(this.times, this.values, this.getValueSize(), t)
		},
		InterpolantFactoryMethodSmooth: function(t) {
			return new gi(this.times, this.values, this.getValueSize(), t)
		},
		setInterpolation: function(t) {
			var e;
			switch(t) {
				case fc:
					e = this.InterpolantFactoryMethodDiscrete;
					break;
				case mc:
					e = this.InterpolantFactoryMethodLinear;
					break;
				case gc:
					e = this.InterpolantFactoryMethodSmooth
			}
			if(void 0 === e) {
				var n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
				if(void 0 === this.createInterpolant) {
					if(t === this.DefaultInterpolation) throw new Error(n);
					this.setInterpolation(this.DefaultInterpolation)
				}
				return void console.warn("THREE.KeyframeTrack:", n)
			}
			this.createInterpolant = e
		},
		getInterpolation: function() {
			switch(this.createInterpolant) {
				case this.InterpolantFactoryMethodDiscrete:
					return fc;
				case this.InterpolantFactoryMethodLinear:
					return mc;
				case this.InterpolantFactoryMethodSmooth:
					return gc
			}
		},
		getValueSize: function() {
			return this.values.length / this.times.length
		},
		shift: function(t) {
			if(0 !== t)
				for(var e = this.times, n = 0, r = e.length; n !== r; ++n) e[n] += t;
			return this
		},
		scale: function(t) {
			if(1 !== t)
				for(var e = this.times, n = 0, r = e.length; n !== r; ++n) e[n] *= t;
			return this
		},
		trim: function(t, e) {
			for(var n = this.times, r = n.length, i = 0, o = r - 1; i !== r && n[i] < t;) ++i;
			for(; - 1 !== o && n[o] > e;) --o;
			if(++o, 0 !== i || o !== r) {
				i >= o && (o = Math.max(o, 1), i = o - 1);
				var a = this.getValueSize();
				this.times = ph.arraySlice(n, i, o), this.values = ph.arraySlice(this.values, i * a, o * a)
			}
			return this
		},
		validate: function() {
			var t = !0,
				e = this.getValueSize();
			e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
			var n = this.times,
				r = this.values,
				i = n.length;
			0 === i && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
			for(var o = null, a = 0; a !== i; a++) {
				var s = n[a];
				if("number" == typeof s && isNaN(s)) {
					console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, s), t = !1;
					break
				}
				if(null !== o && o > s) {
					console.error("THREE.KeyframeTrack: Out of order keys.", this, a, s, o), t = !1;
					break
				}
				o = s
			}
			if(void 0 !== r && ph.isTypedArray(r))
				for(var a = 0, c = r.length; a !== c; ++a) {
					var h = r[a];
					if(isNaN(h)) {
						console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, h), t = !1;
						break
					}
				}
			return t
		},
		optimize: function() {
			for(var t = this.times, e = this.values, n = this.getValueSize(), r = this.getInterpolation() === gc, i = 1, o = t.length - 1, a = 1; a < o; ++a) {
				var s = !1,
					c = t[a];
				if(c !== t[a + 1] && (1 !== a || c !== c[0]))
					if(r) s = !0;
					else
						for(var h = a * n, u = h - n, l = h + n, d = 0; d !== n; ++d) {
							var p = e[h + d];
							if(p !== e[u + d] || p !== e[l + d]) {
								s = !0;
								break
							}
						}
				if(s) {
					if(a !== i) {
						t[i] = t[a];
						for(var f = a * n, m = i * n, d = 0; d !== n; ++d) e[m + d] = e[f + d]
					}++i
				}
			}
			if(o > 0) {
				t[i] = t[o];
				for(var f = o * n, m = i * n, d = 0; d !== n; ++d) e[m + d] = e[f + d];
				++i
			}
			return i !== t.length && (this.times = ph.arraySlice(t, 0, i), this.values = ph.arraySlice(e, 0, i * n)), this
		}
	}), wi.prototype = Object.assign(Object.create(xi.prototype), {
		constructor: wi,
		ValueTypeName: "vector"
	}), Object.assign(bi, {
		parse: function(t) {
			for(var e = [], n = t.tracks, r = 1 / (t.fps || 1), i = 0, o = n.length; i !== o; ++i) e.push(xi.parse(n[i]).scale(r));
			return new bi(t.name, t.duration, e)
		},
		toJSON: function(t) {
			for(var e = [], n = t.tracks, r = {
					name: t.name,
					duration: t.duration,
					tracks: e,
					uuid: t.uuid
				}, i = 0, o = n.length; i !== o; ++i) e.push(xi.toJSON(n[i]));
			return r
		},
		CreateFromMorphTargetSequence: function(t, e, n, r) {
			for(var i = e.length, o = [], a = 0; a < i; a++) {
				var s = [],
					c = [];
				s.push((a + i - 1) % i, a, (a + 1) % i), c.push(0, 1, 0);
				var h = ph.getKeyframeOrder(s);
				s = ph.sortedArray(s, 1, h), c = ph.sortedArray(c, 1, h), r || 0 !== s[0] || (s.push(i), c.push(c[0])), o.push(new mi(".morphTargetInfluences[" + e[a].name + "]", s, c).scale(1 / n))
			}
			return new bi(t, -1, o)
		},
		findByName: function(t, e) {
			var n = t;
			if(!Array.isArray(t)) {
				var r = t;
				n = r.geometry && r.geometry.animations || r.animations
			}
			for(var i = 0; i < n.length; i++)
				if(n[i].name === e) return n[i];
			return null
		},
		CreateClipsFromMorphTargetSequences: function(t, e, n) {
			for(var r = {}, i = /^([\w-]*?)([\d]+)$/, o = 0, a = t.length; o < a; o++) {
				var s = t[o],
					c = s.name.match(i);
				if(c && c.length > 1) {
					var h = c[1],
						u = r[h];
					u || (r[h] = u = []), u.push(s)
				}
			}
			var l = [];
			for(var h in r) l.push(bi.CreateFromMorphTargetSequence(h, r[h], e, n));
			return l
		},
		parseAnimation: function(t, e) {
			if(!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
			for(var n = function(t, e, n, r, i) {
					if(0 !== n.length) {
						var o = [],
							a = [];
						ph.flattenJSON(n, o, a, r), 0 !== o.length && i.push(new t(e, o, a))
					}
				}, r = [], i = t.name || "default", o = t.length || -1, a = t.fps || 30, s = t.hierarchy || [], c = 0; c < s.length; c++) {
				var h = s[c].keys;
				if(h && 0 !== h.length)
					if(h[0].morphTargets) {
						for(var u = {}, l = 0; l < h.length; l++)
							if(h[l].morphTargets)
								for(var d = 0; d < h[l].morphTargets.length; d++) u[h[l].morphTargets[d]] = -1;
						for(var p in u) {
							for(var f = [], m = [], d = 0; d !== h[l].morphTargets.length; ++d) {
								var g = h[l];
								f.push(g.time), m.push(g.morphTarget === p ? 1 : 0)
							}
							r.push(new mi(".morphTargetInfluence[" + p + "]", f, m))
						}
						o = u.length * (a || 1)
					} else {
						var v = ".bones[" + e[c].name + "]";
						n(wi, v + ".position", h, "pos", r), n(pi, v + ".quaternion", h, "rot", r), n(wi, v + ".scale", h, "scl", r)
					}
			}
			return 0 === r.length ? null : new bi(i, o, r)
		}
	}), Object.assign(bi.prototype, {
		resetDuration: function() {
			for(var t = this.tracks, e = 0, n = 0, r = t.length; n !== r; ++n) {
				var i = this.tracks[n];
				e = Math.max(e, i.times[i.times.length - 1])
			}
			this.duration = e
		},
		trim: function() {
			for(var t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
			return this
		},
		optimize: function() {
			for(var t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
			return this
		}
	}), Object.assign(_i.prototype, {
		load: function(t, e, n, r) {
			var i = this;
			new _r(i.manager).load(t, function(t) {
				e(i.parse(JSON.parse(t)))
			}, n, r)
		},
		setTextures: function(t) {
			this.textures = t
		},
		parse: function(t) {
			function e(t) {
				return void 0 === n[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), n[t]
			}
			var n = this.textures,
				r = new ih[t.type];
			if(void 0 !== t.uuid && (r.uuid = t.uuid), void 0 !== t.name && (r.name = t.name), void 0 !== t.color && r.color.setHex(t.color), void 0 !== t.roughness && (r.roughness = t.roughness), void 0 !== t.metalness && (r.metalness = t.metalness), void 0 !== t.emissive && r.emissive.setHex(t.emissive), void 0 !== t.specular && r.specular.setHex(t.specular), void 0 !== t.shininess && (r.shininess = t.shininess), void 0 !== t.clearCoat && (r.clearCoat = t.clearCoat), void 0 !== t.clearCoatRoughness && (r.clearCoatRoughness = t.clearCoatRoughness), void 0 !== t.uniforms && (r.uniforms = t.uniforms), void 0 !== t.vertexShader && (r.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (r.fragmentShader = t.fragmentShader), void 0 !== t.vertexColors && (r.vertexColors = t.vertexColors), void 0 !== t.fog && (r.fog = t.fog), void 0 !== t.flatShading && (r.flatShading = t.flatShading), void 0 !== t.blending && (r.blending = t.blending), void 0 !== t.side && (r.side = t.side), void 0 !== t.opacity && (r.opacity = t.opacity), void 0 !== t.transparent && (r.transparent = t.transparent), void 0 !== t.alphaTest && (r.alphaTest = t.alphaTest), void 0 !== t.depthTest && (r.depthTest = t.depthTest), void 0 !== t.depthWrite && (r.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (r.colorWrite = t.colorWrite), void 0 !== t.wireframe && (r.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (r.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (r.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (r.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.rotation && (r.rotation = t.rotation), 1 !== t.linewidth && (r.linewidth = t.linewidth), void 0 !== t.dashSize && (r.dashSize = t.dashSize), void 0 !== t.gapSize && (r.gapSize = t.gapSize), void 0 !== t.scale && (r.scale = t.scale), void 0 !== t.polygonOffset && (r.polygonOffset = t.polygonOffset), void 0 !== t.polygonOffsetFactor && (r.polygonOffsetFactor = t.polygonOffsetFactor), void 0 !== t.polygonOffsetUnits && (r.polygonOffsetUnits = t.polygonOffsetUnits), void 0 !== t.skinning && (r.skinning = t.skinning), void 0 !== t.morphTargets && (r.morphTargets = t.morphTargets), void 0 !== t.dithering && (r.dithering = t.dithering), void 0 !== t.visible && (r.visible = t.visible), void 0 !== t.userData && (r.userData = t.userData), void 0 !== t.shading && (r.flatShading = 1 === t.shading), void 0 !== t.size && (r.size = t.size), void 0 !== t.sizeAttenuation && (r.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (r.map = e(t.map)), void 0 !== t.alphaMap && (r.alphaMap = e(t.alphaMap), r.transparent = !0), void 0 !== t.bumpMap && (r.bumpMap = e(t.bumpMap)), void 0 !== t.bumpScale && (r.bumpScale = t.bumpScale), void 0 !== t.normalMap && (r.normalMap = e(t.normalMap)), void 0 !== t.normalScale) {
				var o = t.normalScale;
				!1 === Array.isArray(o) && (o = [o, o]), r.normalScale = (new i).fromArray(o)
			}
			return void 0 !== t.displacementMap && (r.displacementMap = e(t.displacementMap)), void 0 !== t.displacementScale && (r.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (r.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (r.roughnessMap = e(t.roughnessMap)), void 0 !== t.metalnessMap && (r.metalnessMap = e(t.metalnessMap)), void 0 !== t.emissiveMap && (r.emissiveMap = e(t.emissiveMap)), void 0 !== t.emissiveIntensity && (r.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (r.specularMap = e(t.specularMap)), void 0 !== t.envMap && (r.envMap = e(t.envMap)), void 0 !== t.reflectivity && (r.reflectivity = t.reflectivity), void 0 !== t.lightMap && (r.lightMap = e(t.lightMap)), void 0 !== t.lightMapIntensity && (r.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (r.aoMap = e(t.aoMap)), void 0 !== t.aoMapIntensity && (r.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (r.gradientMap = e(t.gradientMap)), r
		}
	}), Object.assign(Mi.prototype, {
		load: function(t, e, n, r) {
			var i = this;
			new _r(i.manager).load(t, function(t) {
				e(i.parse(JSON.parse(t)))
			}, n, r)
		},
		parse: function(t) {
			var e = new G,
				n = t.data.index;
			if(void 0 !== n) {
				var r = new fh[n.type](n.array);
				e.setIndex(new R(r, 1))
			}
			var i = t.data.attributes;
			for(var o in i) {
				var a = i[o],
					r = new fh[a.type](a.array);
				e.addAttribute(o, new R(r, a.itemSize, a.normalized))
			}
			var c = t.data.groups || t.data.drawcalls || t.data.offsets;
			if(void 0 !== c)
				for(var h = 0, u = c.length; h !== u; ++h) {
					var l = c[h];
					e.addGroup(l.start, l.count, l.materialIndex)
				}
			var d = t.data.boundingSphere;
			if(void 0 !== d) {
				var p = new s;
				void 0 !== d.center && p.fromArray(d.center), e.boundingSphere = new m(p, d.radius)
			}
			return e
		}
	});
	var fh = {
		Int8Array: Int8Array,
		Uint8Array: Uint8Array,
		Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
		Int16Array: Int16Array,
		Uint16Array: Uint16Array,
		Int32Array: Int32Array,
		Uint32Array: Uint32Array,
		Float32Array: Float32Array,
		Float64Array: Float64Array
	};
	Ei.Handlers = {
		handlers: [],
		add: function(t, e) {
			this.handlers.push(t, e)
		},
		get: function(t) {
			for(var e = this.handlers, n = 0, r = e.length; n < r; n += 2) {
				var i = e[n],
					o = e[n + 1];
				if(i.test(t)) return o
			}
			return null
		}
	}, Object.assign(Ei.prototype, {
		crossOrigin: void 0,
		onLoadStart: function() {},
		onLoadProgress: function() {},
		onLoadComplete: function() {},
		initMaterials: function(t, e, n) {
			for(var r = [], i = 0; i < t.length; ++i) r[i] = this.createMaterial(t[i], e, n);
			return r
		},
		createMaterial: function() {
			var t = {
					NoBlending: ba,
					NormalBlending: _a,
					AdditiveBlending: Ma,
					SubtractiveBlending: Ea,
					MultiplyBlending: Ta,
					CustomBlending: Sa
				},
				e = new y,
				n = new Ar,
				r = new _i;
			return function(i, o, a) {
				function s(t, e, r, i, s) {
					var h, u = o + t,
						l = Ei.Handlers.get(u);
					null !== l ? h = l.load(u) : (n.setCrossOrigin(a), h = n.load(u)), void 0 !== e && (h.repeat.fromArray(e), 1 !== e[0] && (h.wrapS = ps), 1 !== e[1] && (h.wrapT = ps)), void 0 !== r && h.offset.fromArray(r), void 0 !== i && ("repeat" === i[0] && (h.wrapS = ps), "mirror" === i[0] && (h.wrapS = ms), "repeat" === i[1] && (h.wrapT = ps), "mirror" === i[1] && (h.wrapT = ms)), void 0 !== s && (h.anisotropy = s);
					var d = Ic.generateUUID();
					return c[d] = h, d
				}
				var c = {},
					h = {
						uuid: Ic.generateUUID(),
						type: "MeshLambertMaterial"
					};
				for(var u in i) {
					var l = i[u];
					switch(u) {
						case "DbgColor":
						case "DbgIndex":
						case "opticalDensity":
						case "illumination":
							break;
						case "DbgName":
							h.name = l;
							break;
						case "blending":
							h.blending = t[l];
							break;
						case "colorAmbient":
						case "mapAmbient":
							console.warn("THREE.Loader.createMaterial:", u, "is no longer supported.");
							break;
						case "colorDiffuse":
							h.color = e.fromArray(l).getHex();
							break;
						case "colorSpecular":
							h.specular = e.fromArray(l).getHex();
							break;
						case "colorEmissive":
							h.emissive = e.fromArray(l).getHex();
							break;
						case "specularCoef":
							h.shininess = l;
							break;
						case "shading":
							"basic" === l.toLowerCase() && (h.type = "MeshBasicMaterial"), "phong" === l.toLowerCase() && (h.type = "MeshPhongMaterial"), "standard" === l.toLowerCase() && (h.type = "MeshStandardMaterial");
							break;
						case "mapDiffuse":
							h.map = s(l, i.mapDiffuseRepeat, i.mapDiffuseOffset, i.mapDiffuseWrap, i.mapDiffuseAnisotropy);
							break;
						case "mapDiffuseRepeat":
						case "mapDiffuseOffset":
						case "mapDiffuseWrap":
						case "mapDiffuseAnisotropy":
							break;
						case "mapEmissive":
							h.emissiveMap = s(l, i.mapEmissiveRepeat, i.mapEmissiveOffset, i.mapEmissiveWrap, i.mapEmissiveAnisotropy);
							break;
						case "mapEmissiveRepeat":
						case "mapEmissiveOffset":
						case "mapEmissiveWrap":
						case "mapEmissiveAnisotropy":
							break;
						case "mapLight":
							h.lightMap = s(l, i.mapLightRepeat, i.mapLightOffset, i.mapLightWrap, i.mapLightAnisotropy);
							break;
						case "mapLightRepeat":
						case "mapLightOffset":
						case "mapLightWrap":
						case "mapLightAnisotropy":
							break;
						case "mapAO":
							h.aoMap = s(l, i.mapAORepeat, i.mapAOOffset, i.mapAOWrap, i.mapAOAnisotropy);
							break;
						case "mapAORepeat":
						case "mapAOOffset":
						case "mapAOWrap":
						case "mapAOAnisotropy":
							break;
						case "mapBump":
							h.bumpMap = s(l, i.mapBumpRepeat, i.mapBumpOffset, i.mapBumpWrap, i.mapBumpAnisotropy);
							break;
						case "mapBumpScale":
							h.bumpScale = l;
							break;
						case "mapBumpRepeat":
						case "mapBumpOffset":
						case "mapBumpWrap":
						case "mapBumpAnisotropy":
							break;
						case "mapNormal":
							h.normalMap = s(l, i.mapNormalRepeat, i.mapNormalOffset, i.mapNormalWrap, i.mapNormalAnisotropy);
							break;
						case "mapNormalFactor":
							h.normalScale = l;
							break;
						case "mapNormalRepeat":
						case "mapNormalOffset":
						case "mapNormalWrap":
						case "mapNormalAnisotropy":
							break;
						case "mapSpecular":
							h.specularMap = s(l, i.mapSpecularRepeat, i.mapSpecularOffset, i.mapSpecularWrap, i.mapSpecularAnisotropy);
							break;
						case "mapSpecularRepeat":
						case "mapSpecularOffset":
						case "mapSpecularWrap":
						case "mapSpecularAnisotropy":
							break;
						case "mapMetalness":
							h.metalnessMap = s(l, i.mapMetalnessRepeat, i.mapMetalnessOffset, i.mapMetalnessWrap, i.mapMetalnessAnisotropy);
							break;
						case "mapMetalnessRepeat":
						case "mapMetalnessOffset":
						case "mapMetalnessWrap":
						case "mapMetalnessAnisotropy":
							break;
						case "mapRoughness":
							h.roughnessMap = s(l, i.mapRoughnessRepeat, i.mapRoughnessOffset, i.mapRoughnessWrap, i.mapRoughnessAnisotropy);
							break;
						case "mapRoughnessRepeat":
						case "mapRoughnessOffset":
						case "mapRoughnessWrap":
						case "mapRoughnessAnisotropy":
							break;
						case "mapAlpha":
							h.alphaMap = s(l, i.mapAlphaRepeat, i.mapAlphaOffset, i.mapAlphaWrap, i.mapAlphaAnisotropy);
							break;
						case "mapAlphaRepeat":
						case "mapAlphaOffset":
						case "mapAlphaWrap":
						case "mapAlphaAnisotropy":
							break;
						case "flipSided":
							h.side = fa;
							break;
						case "doubleSided":
							h.side = ma;
							break;
						case "transparency":
							console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"), h.opacity = l;
							break;
						case "depthTest":
						case "depthWrite":
						case "colorWrite":
						case "opacity":
						case "reflectivity":
						case "transparent":
						case "visible":
						case "wireframe":
							h[u] = l;
							break;
						case "vertexColors":
							!0 === l && (h.vertexColors = wa), "face" === l && (h.vertexColors = xa);
							break;
						default:
							console.error("THREE.Loader.createMaterial: Unsupported", u, l)
					}
				}
				return "MeshBasicMaterial" === h.type && delete h.emissive, "MeshPhongMaterial" !== h.type && delete h.specular, h.opacity < 1 && (h.transparent = !0), r.setTextures(c), r.parse(h)
			}
		}()
	});
	var mh = {
		decodeText: function(t) {
			if("undefined" != typeof TextDecoder) return(new TextDecoder).decode(t);
			for(var e = "", n = 0, r = t.length; n < r; n++) e += String.fromCharCode(t[n]);
			return decodeURIComponent(escape(e))
		},
		extractUrlBase: function(t) {
			var e = t.lastIndexOf("/");
			return -1 === e ? "./" : t.substr(0, e + 1)
		}
	};
	Object.assign(Ti.prototype, {
		load: function(t, e, n, r) {
			var i = this,
				o = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : mh.extractUrlBase(t),
				a = new _r(this.manager);
			a.setWithCredentials(this.withCredentials), a.load(t, function(n) {
				var r = JSON.parse(n),
					a = r.metadata;
				if(void 0 !== a) {
					var s = a.type;
					if(void 0 !== s && "object" === s.toLowerCase()) return void console.error("THREE.JSONLoader: " + t + " should be loaded with THREE.ObjectLoader instead.")
				}
				var c = i.parse(r, o);
				e(c.geometry, c.materials)
			}, n, r)
		},
		setTexturePath: function(t) {
			this.texturePath = t
		},
		parse: function() {
			function t(t, e) {
				function n(t, e) {
					return t & 1 << e
				}
				var r, o, a, c, h, u, l, d, p, f, m, g, v, x, w, b, _, M, E, T, A, R, L, P, C, O, I, N = t.faces,
					D = t.vertices,
					U = t.normals,
					B = t.colors,
					F = t.scale,
					z = 0;
				if(void 0 !== t.uvs) {
					for(r = 0; r < t.uvs.length; r++) t.uvs[r].length && z++;
					for(r = 0; r < z; r++) e.faceVertexUvs[r] = []
				}
				for(c = 0, h = D.length; c < h;) M = new s, M.x = D[c++] * F, M.y = D[c++] * F, M.z = D[c++] * F, e.vertices.push(M);
				for(c = 0, h = N.length; c < h;)
					if(f = N[c++], m = n(f, 0), g = n(f, 1), v = n(f, 3), x = n(f, 4), w = n(f, 5), b = n(f, 6), _ = n(f, 7), m) {
						if(T = new S, T.a = N[c], T.b = N[c + 1], T.c = N[c + 3], A = new S, A.a = N[c + 1], A.b = N[c + 2], A.c = N[c + 3], c += 4, g && (p = N[c++], T.materialIndex = p, A.materialIndex = p), a = e.faces.length, v)
							for(r = 0; r < z; r++)
								for(P = t.uvs[r], e.faceVertexUvs[r][a] = [], e.faceVertexUvs[r][a + 1] = [], o = 0; o < 4; o++) d = N[c++], O = P[2 * d], I = P[2 * d + 1], C = new i(O, I), 2 !== o && e.faceVertexUvs[r][a].push(C), 0 !== o && e.faceVertexUvs[r][a + 1].push(C);
						if(x && (l = 3 * N[c++], T.normal.set(U[l++], U[l++], U[l]), A.normal.copy(T.normal)), w)
							for(r = 0; r < 4; r++) l = 3 * N[c++], L = new s(U[l++], U[l++], U[l]), 2 !== r && T.vertexNormals.push(L), 0 !== r && A.vertexNormals.push(L);
						if(b && (u = N[c++], R = B[u], T.color.setHex(R), A.color.setHex(R)), _)
							for(r = 0; r < 4; r++) u = N[c++], R = B[u], 2 !== r && T.vertexColors.push(new y(R)), 0 !== r && A.vertexColors.push(new y(R));
						e.faces.push(T), e.faces.push(A)
					} else {
						if(E = new S, E.a = N[c++], E.b = N[c++], E.c = N[c++], g && (p = N[c++], E.materialIndex = p), a = e.faces.length, v)
							for(r = 0; r < z; r++)
								for(P = t.uvs[r], e.faceVertexUvs[r][a] = [], o = 0; o < 3; o++) d = N[c++], O = P[2 * d], I = P[2 * d + 1], C = new i(O, I), e.faceVertexUvs[r][a].push(C);
						if(x && (l = 3 * N[c++], E.normal.set(U[l++], U[l++], U[l])), w)
							for(r = 0; r < 3; r++) l = 3 * N[c++], L = new s(U[l++], U[l++], U[l]), E.vertexNormals.push(L);
						if(b && (u = N[c++], E.color.setHex(B[u])), _)
							for(r = 0; r < 3; r++) u = N[c++], E.vertexColors.push(new y(B[u]));
						e.faces.push(E)
					}
			}

			function e(t, e) {
				var n = void 0 !== t.influencesPerVertex ? t.influencesPerVertex : 2;
				if(t.skinWeights)
					for(var r = 0, i = t.skinWeights.length; r < i; r += n) {
						var o = t.skinWeights[r],
							a = n > 1 ? t.skinWeights[r + 1] : 0,
							s = n > 2 ? t.skinWeights[r + 2] : 0,
							c = n > 3 ? t.skinWeights[r + 3] : 0;
						e.skinWeights.push(new u(o, a, s, c))
					}
				if(t.skinIndices)
					for(var r = 0, i = t.skinIndices.length; r < i; r += n) {
						var h = t.skinIndices[r],
							l = n > 1 ? t.skinIndices[r + 1] : 0,
							d = n > 2 ? t.skinIndices[r + 2] : 0,
							p = n > 3 ? t.skinIndices[r + 3] : 0;
						e.skinIndices.push(new u(h, l, d, p))
					}
				e.bones = t.bones, e.bones && e.bones.length > 0 && (e.skinWeights.length !== e.skinIndices.length || e.skinIndices.length !== e.vertices.length) && console.warn("When skinning, number of vertices (" + e.vertices.length + "), skinIndices (" + e.skinIndices.length + "), and skinWeights (" + e.skinWeights.length + ") should match.")
			}

			function n(t, e) {
				var n = t.scale;
				if(void 0 !== t.morphTargets)
					for(var r = 0, i = t.morphTargets.length; r < i; r++) {
						e.morphTargets[r] = {}, e.morphTargets[r].name = t.morphTargets[r].name, e.morphTargets[r].vertices = [];
						for(var o = e.morphTargets[r].vertices, a = t.morphTargets[r].vertices, c = 0, h = a.length; c < h; c += 3) {
							var u = new s;
							u.x = a[c] * n, u.y = a[c + 1] * n, u.z = a[c + 2] * n, o.push(u)
						}
					}
				if(void 0 !== t.morphColors && t.morphColors.length > 0) {
					console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');
					for(var l = e.faces, d = t.morphColors[0].colors, r = 0, i = l.length; r < i; r++) l[r].color.fromArray(d, 3 * r)
				}
			}

			function r(t, e) {
				var n = [],
					r = [];
				void 0 !== t.animation && r.push(t.animation), void 0 !== t.animations && (t.animations.length ? r = r.concat(t.animations) : r.push(t.animations));
				for(var i = 0; i < r.length; i++) {
					var o = bi.parseAnimation(r[i], e.bones);
					o && n.push(o)
				}
				if(e.morphTargets) {
					var a = bi.CreateClipsFromMorphTargetSequences(e.morphTargets, 10);
					n = n.concat(a)
				}
				n.length > 0 && (e.animations = n)
			}
			return function(i, o) {
				void 0 !== i.data && (i = i.data), void 0 !== i.scale ? i.scale = 1 / i.scale : i.scale = 1;
				var a = new A;
				return t(i, a), e(i, a), n(i, a), r(i, a), a.computeFaceNormals(), a.computeBoundingSphere(), void 0 === i.materials || 0 === i.materials.length ? {
					geometry: a
				} : {
					geometry: a,
					materials: Ei.prototype.initMaterials(i.materials, o, this.crossOrigin)
				}
			}
		}()
	}), Object.assign(Si.prototype, {
		load: function(t, e, n, r) {
			"" === this.texturePath && (this.texturePath = t.substring(0, t.lastIndexOf("/") + 1));
			var i = this;
			new _r(i.manager).load(t, function(n) {
				var o = null;
				try {
					o = JSON.parse(n)
				} catch(e) {
					return void 0 !== r && r(e), void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message)
				}
				var a = o.metadata;
				if(void 0 === a || void 0 === a.type || "geometry" === a.type.toLowerCase()) return void console.error("THREE.ObjectLoader: Can't load " + t + ". Use THREE.JSONLoader instead.");
				i.parse(o, e)
			}, n, r)
		},
		setTexturePath: function(t) {
			return this.texturePath = t, this
		},
		setCrossOrigin: function(t) {
			return this.crossOrigin = t, this
		},
		parse: function(t, e) {
			var n = this.parseShape(t.shapes),
				r = this.parseGeometries(t.geometries, n),
				i = this.parseImages(t.images, function() {
					void 0 !== e && e(s)
				}),
				o = this.parseTextures(t.textures, i),
				a = this.parseMaterials(t.materials, o),
				s = this.parseObject(t.object, r, a);
			return t.animations && (s.animations = this.parseAnimations(t.animations)), void 0 !== t.images && 0 !== t.images.length || void 0 !== e && e(s), s
		},
		parseShape: function(t) {
			var e = {};
			if(void 0 !== t)
				for(var n = 0, r = t.length; n < r; n++) {
					var i = (new Kr).fromJSON(t[n]);
					e[i.uuid] = i
				}
			return e
		},
		parseGeometries: function(t, e) {
			var n = {};
			if(void 0 !== t)
				for(var r = new Ti, i = new Mi, o = 0, a = t.length; o < a; o++) {
					var s, c = t[o];
					switch(c.type) {
						case "PlaneGeometry":
						case "PlaneBufferGeometry":
							s = new rh[c.type](c.width, c.height, c.widthSegments, c.heightSegments);
							break;
						case "BoxGeometry":
						case "BoxBufferGeometry":
						case "CubeGeometry":
							s = new rh[c.type](c.width, c.height, c.depth, c.widthSegments, c.heightSegments, c.depthSegments);
							break;
						case "CircleGeometry":
						case "CircleBufferGeometry":
							s = new rh[c.type](c.radius, c.segments, c.thetaStart, c.thetaLength);
							break;
						case "CylinderGeometry":
						case "CylinderBufferGeometry":
							s = new rh[c.type](c.radiusTop, c.radiusBottom, c.height, c.radialSegments, c.heightSegments, c.openEnded, c.thetaStart, c.thetaLength);
							break;
						case "ConeGeometry":
						case "ConeBufferGeometry":
							s = new rh[c.type](c.radius, c.height, c.radialSegments, c.heightSegments, c.openEnded, c.thetaStart, c.thetaLength);
							break;
						case "SphereGeometry":
						case "SphereBufferGeometry":
							s = new rh[c.type](c.radius, c.widthSegments, c.heightSegments, c.phiStart, c.phiLength, c.thetaStart, c.thetaLength);
							break;
						case "DodecahedronGeometry":
						case "DodecahedronBufferGeometry":
						case "IcosahedronGeometry":
						case "IcosahedronBufferGeometry":
						case "OctahedronGeometry":
						case "OctahedronBufferGeometry":
						case "TetrahedronGeometry":
						case "TetrahedronBufferGeometry":
							s = new rh[c.type](c.radius, c.detail);
							break;
						case "RingGeometry":
						case "RingBufferGeometry":
							s = new rh[c.type](c.innerRadius, c.outerRadius, c.thetaSegments, c.phiSegments, c.thetaStart, c.thetaLength);
							break;
						case "TorusGeometry":
						case "TorusBufferGeometry":
							s = new rh[c.type](c.radius, c.tube, c.radialSegments, c.tubularSegments, c.arc);
							break;
						case "TorusKnotGeometry":
						case "TorusKnotBufferGeometry":
							s = new rh[c.type](c.radius, c.tube, c.tubularSegments, c.radialSegments, c.p, c.q);
							break;
						case "LatheGeometry":
						case "LatheBufferGeometry":
							s = new rh[c.type](c.points, c.segments, c.phiStart, c.phiLength);
							break;
						case "PolyhedronGeometry":
						case "PolyhedronBufferGeometry":
							s = new rh[c.type](c.vertices, c.indices, c.radius, c.details);
							break;
						case "ShapeGeometry":
						case "ShapeBufferGeometry":
							for(var h = [], u = 0, l = c.shapes.length; u < l; u++) {
								var d = e[c.shapes[u]];
								h.push(d)
							}
							s = new rh[c.type](h, c.curveSegments);
							break;
						case "ExtrudeGeometry":
						case "ExtrudeBufferGeometry":
							for(var h = [], u = 0, l = c.shapes.length; u < l; u++) {
								var d = e[c.shapes[u]];
								h.push(d)
							}
							var p = c.options.extrudePath;
							void 0 !== p && (c.options.extrudePath = (new dh[p.type]).fromJSON(p)), s = new rh[c.type](h, c.options);
							break;
						case "BufferGeometry":
							s = i.parse(c);
							break;
						case "Geometry":
							s = r.parse(c, this.texturePath).geometry;
							break;
						default:
							console.warn('THREE.ObjectLoader: Unsupported geometry type "' + c.type + '"');
							continue
					}
					s.uuid = c.uuid, void 0 !== c.name && (s.name = c.name), !0 === s.isBufferGeometry && void 0 !== c.userData && (s.userData = c.userData), n[c.uuid] = s
				}
			return n
		},
		parseMaterials: function(t, e) {
			var n = {};
			if(void 0 !== t) {
				var r = new _i;
				r.setTextures(e);
				for(var i = 0, o = t.length; i < o; i++) {
					var a = t[i];
					if("MultiMaterial" === a.type) {
						for(var s = [], c = 0; c < a.materials.length; c++) s.push(r.parse(a.materials[c]));
						n[a.uuid] = s
					} else n[a.uuid] = r.parse(a)
				}
			}
			return n
		},
		parseAnimations: function(t) {
			for(var e = [], n = 0; n < t.length; n++) {
				var r = t[n],
					i = bi.parse(r);
				void 0 !== r.uuid && (i.uuid = r.uuid), e.push(i)
			}
			return e
		},
		parseImages: function(t, e) {
			var n = this,
				r = {};
			if(void 0 !== t && t.length > 0) {
				var i = new br(e),
					o = new Tr(i);
				o.setCrossOrigin(this.crossOrigin);
				for(var a = 0, s = t.length; a < s; a++) {
					var c = t[a],
						h = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url) ? c.url : n.texturePath + c.url;
					r[c.uuid] = function(t) {
						return n.manager.itemStart(t), o.load(t, function() {
							n.manager.itemEnd(t)
						}, void 0, function() {
							n.manager.itemEnd(t), n.manager.itemError(t)
						})
					}(h)
				}
			}
			return r
		},
		parseTextures: function(t, e) {
			function n(t, e) {
				return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), e[t])
			}
			var r = {};
			if(void 0 !== t)
				for(var i = 0, o = t.length; i < o; i++) {
					var a = t[i];
					void 0 === a.image && console.warn('THREE.ObjectLoader: No "image" specified for', a.uuid), void 0 === e[a.image] && console.warn("THREE.ObjectLoader: Undefined image", a.image);
					var s = new h(e[a.image]);
					s.needsUpdate = !0, s.uuid = a.uuid, void 0 !== a.name && (s.name = a.name), void 0 !== a.mapping && (s.mapping = n(a.mapping, gh)), void 0 !== a.offset && s.offset.fromArray(a.offset), void 0 !== a.repeat && s.repeat.fromArray(a.repeat), void 0 !== a.center && s.center.fromArray(a.center), void 0 !== a.rotation && (s.rotation = a.rotation), void 0 !== a.wrap && (s.wrapS = n(a.wrap[0], vh), s.wrapT = n(a.wrap[1], vh)), void 0 !== a.format && (s.format = a.format), void 0 !== a.minFilter && (s.minFilter = n(a.minFilter, yh)), void 0 !== a.magFilter && (s.magFilter = n(a.magFilter, yh)), void 0 !== a.anisotropy && (s.anisotropy = a.anisotropy), void 0 !== a.flipY && (s.flipY = a.flipY), r[a.uuid] = s
				}
			return r
		},
		parseObject: function(t, e, n) {
			function r(t) {
				return void 0 === e[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), e[t]
			}

			function i(t) {
				if(void 0 !== t) {
					if(Array.isArray(t)) {
						for(var e = [], r = 0, i = t.length; r < i; r++) {
							var o = t[r];
							void 0 === n[o] && console.warn("THREE.ObjectLoader: Undefined material", o), e.push(n[o])
						}
						return e
					}
					return void 0 === n[t] && console.warn("THREE.ObjectLoader: Undefined material", t), n[t]
				}
			}
			var o;
			switch(t.type) {
				case "Scene":
					o = new Oe, void 0 !== t.background && Number.isInteger(t.background) && (o.background = new y(t.background)), void 0 !== t.fog && ("Fog" === t.fog.type ? o.fog = new Ce(t.fog.color, t.fog.near, t.fog.far) : "FogExp2" === t.fog.type && (o.fog = new Pe(t.fog.color, t.fog.density)));
					break;
				case "PerspectiveCamera":
					o = new Te(t.fov, t.aspect, t.near, t.far), void 0 !== t.focus && (o.focus = t.focus), void 0 !== t.zoom && (o.zoom = t.zoom), void 0 !== t.filmGauge && (o.filmGauge = t.filmGauge), void 0 !== t.filmOffset && (o.filmOffset = t.filmOffset), void 0 !== t.view && (o.view = Object.assign({}, t.view));
					break;
				case "OrthographicCamera":
					o = new T(t.left, t.right, t.top, t.bottom, t.near, t.far), void 0 !== t.zoom && (o.zoom = t.zoom), void 0 !== t.view && (o.view = Object.assign({}, t.view));
					break;
				case "AmbientLight":
					o = new si(t.color, t.intensity);
					break;
				case "DirectionalLight":
					o = new ai(t.color, t.intensity);
					break;
				case "PointLight":
					o = new ii(t.color, t.intensity, t.distance, t.decay);
					break;
				case "RectAreaLight":
					o = new ci(t.color, t.intensity, t.width, t.height);
					break;
				case "SpotLight":
					o = new ri(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay);
					break;
				case "HemisphereLight":
					o = new ti(t.color, t.groundColor, t.intensity);
					break;
				case "SkinnedMesh":
					console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
				case "Mesh":
					var a = r(t.geometry),
						s = i(t.material);
					o = a.bones && a.bones.length > 0 ? new Fe(a, s) : new Q(a, s);
					break;
				case "LOD":
					o = new De;
					break;
				case "Line":
					o = new Ge(r(t.geometry), i(t.material), t.mode);
					break;
				case "LineLoop":
					o = new Ve(r(t.geometry), i(t.material));
					break;
				case "LineSegments":
					o = new He(r(t.geometry), i(t.material));
					break;
				case "PointCloud":
				case "Points":
					o = new je(r(t.geometry), i(t.material));
					break;
				case "Sprite":
					o = new Ne(i(t.material));
					break;
				case "Group":
					o = new We;
					break;
				default:
					o = new M
			}
			if(o.uuid = t.uuid, void 0 !== t.name && (o.name = t.name), void 0 !== t.matrix ? (o.matrix.fromArray(t.matrix), void 0 !== t.matrixAutoUpdate && (o.matrixAutoUpdate = t.matrixAutoUpdate), o.matrixAutoUpdate && o.matrix.decompose(o.position, o.quaternion, o.scale)) : (void 0 !== t.position && o.position.fromArray(t.position), void 0 !== t.rotation && o.rotation.fromArray(t.rotation), void 0 !== t.quaternion && o.quaternion.fromArray(t.quaternion), void 0 !== t.scale && o.scale.fromArray(t.scale)), void 0 !== t.castShadow && (o.castShadow = t.castShadow), void 0 !== t.receiveShadow && (o.receiveShadow = t.receiveShadow), t.shadow && (void 0 !== t.shadow.bias && (o.shadow.bias = t.shadow.bias), void 0 !== t.shadow.radius && (o.shadow.radius = t.shadow.radius), void 0 !== t.shadow.mapSize && o.shadow.mapSize.fromArray(t.shadow.mapSize), void 0 !== t.shadow.camera && (o.shadow.camera = this.parseObject(t.shadow.camera))), void 0 !== t.visible && (o.visible = t.visible), void 0 !== t.frustumCulled && (o.frustumCulled = t.frustumCulled), void 0 !== t.renderOrder && (o.renderOrder = t.renderOrder), void 0 !== t.userData && (o.userData = t.userData), void 0 !== t.children)
				for(var c = t.children, h = 0; h < c.length; h++) o.add(this.parseObject(c[h], e, n));
			if("LOD" === t.type)
				for(var u = t.levels, l = 0; l < u.length; l++) {
					var d = u[l],
						p = o.getObjectByProperty("uuid", d.object);
					void 0 !== p && o.addLevel(p, d.distance)
				}
			return o
		}
	});
	var gh = {
			UVMapping: os,
			CubeReflectionMapping: as,
			CubeRefractionMapping: ss,
			EquirectangularReflectionMapping: cs,
			EquirectangularRefractionMapping: hs,
			SphericalReflectionMapping: us,
			CubeUVReflectionMapping: ls,
			CubeUVRefractionMapping: ds
		},
		vh = {
			RepeatWrapping: ps,
			ClampToEdgeWrapping: fs,
			MirroredRepeatWrapping: ms
		},
		yh = {
			NearestFilter: gs,
			NearestMipMapNearestFilter: vs,
			NearestMipMapLinearFilter: ys,
			LinearFilter: xs,
			LinearMipMapNearestFilter: ws,
			LinearMipMapLinearFilter: bs
		};
	Ai.prototype = {
		constructor: Ai,
		setOptions: function(t) {
			return this.options = t, this
		},
		load: function(t, e, n, r) {
			void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
			var i = this,
				o = oh.get(t);
			if(void 0 !== o) return i.manager.itemStart(t), setTimeout(function() {
				e && e(o), i.manager.itemEnd(t)
			}, 0), o;
			fetch(t).then(function(t) {
				return t.blob()
			}).then(function(t) {
				return createImageBitmap(t, i.options)
			}).then(function(n) {
				oh.add(t, n), e && e(n), i.manager.itemEnd(t)
			}).catch(function(e) {
				r && r(e), i.manager.itemEnd(t), i.manager.itemError(t)
			})
		},
		setCrossOrigin: function() {
			return this
		},
		setPath: function(t) {
			return this.path = t, this
		}
	}, Object.assign(Ri.prototype, {
		moveTo: function(t, e) {
			this.currentPath = new Qr, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e)
		},
		lineTo: function(t, e) {
			this.currentPath.lineTo(t, e)
		},
		quadraticCurveTo: function(t, e, n, r) {
			this.currentPath.quadraticCurveTo(t, e, n, r)
		},
		bezierCurveTo: function(t, e, n, r, i, o) {
			this.currentPath.bezierCurveTo(t, e, n, r, i, o)
		},
		splineThru: function(t) {
			this.currentPath.splineThru(t)
		},
		toShapes: function(t, e) {
			function n(t) {
				for(var e = [], n = 0, r = t.length; n < r; n++) {
					var i = t[n],
						o = new Kr;
					o.curves = i.curves, e.push(o)
				}
				return e
			}
			var r = eh.isClockWise,
				i = this.subPaths;
			if(0 === i.length) return [];
			if(!0 === e) return n(i);
			var o, a, s, c = [];
			if(1 === i.length) return a = i[0], s = new Kr, s.curves = a.curves, c.push(s), c;
			var h = !r(i[0].getPoints());
			h = t ? !h : h;
			var u, l = [],
				d = [],
				p = [],
				f = 0;
			d[f] = void 0, p[f] = [];
			for(var m = 0, g = i.length; m < g; m++) a = i[m], u = a.getPoints(), o = r(u), o = t ? !o : o, o ? (!h && d[f] && f++, d[f] = {
				s: new Kr,
				p: u
			}, d[f].s.curves = a.curves, h && f++, p[f] = []) : p[f].push({
				h: a,
				p: u[0]
			});
			if(!d[0]) return n(i);
			if(d.length > 1) {
				for(var v = !1, y = [], x = 0, w = d.length; x < w; x++) l[x] = [];
				for(var x = 0, w = d.length; x < w; x++)
					for(var b = p[x], _ = 0; _ < b.length; _++) {
						for(var M = b[_], E = !0, T = 0; T < d.length; T++)(function(t, e) {
							for(var n = e.length, r = !1, i = n - 1, o = 0; o < n; i = o++) {
								var a = e[i],
									s = e[o],
									c = s.x - a.x,
									h = s.y - a.y;
								if(Math.abs(h) > Number.EPSILON) {
									if(h < 0 && (a = e[o], c = -c, s = e[i], h = -h), t.y < a.y || t.y > s.y) continue;
									if(t.y === a.y) {
										if(t.x === a.x) return !0
									} else {
										var u = h * (t.x - a.x) - c * (t.y - a.y);
										if(0 === u) return !0;
										if(u < 0) continue;
										r = !r
									}
								} else {
									if(t.y !== a.y) continue;
									if(s.x <= t.x && t.x <= a.x || a.x <= t.x && t.x <= s.x) return !0
								}
							}
							return r
						})(M.p, d[T].p) && (x !== T && y.push({
							froms: x,
							tos: T,
							hole: _
						}), E ? (E = !1, l[T].push(M)) : v = !0);
						E && l[x].push(M)
					}
				y.length > 0 && (v || (p = l))
			}
			for(var S, m = 0, A = d.length; m < A; m++) {
				s = d[m].s, c.push(s), S = p[m];
				for(var R = 0, L = S.length; R < L; R++) s.holes.push(S[R].h)
			}
			return c
		}
	}), Object.assign(Li.prototype, {
		isFont: !0,
		generateShapes: function(t, e, n) {
			void 0 === e && (e = 100), void 0 === n && (n = 4);
			for(var r = [], i = Pi(t, e, n, this.data), o = 0, a = i.length; o < a; o++) Array.prototype.push.apply(r, i[o].toShapes());
			return r
		}
	}), Object.assign(Oi.prototype, {
		load: function(t, e, n, r) {
			var i = this,
				o = new _r(this.manager);
			o.setPath(this.path), o.load(t, function(t) {
				var n;
				try {
					n = JSON.parse(t)
				} catch(e) {
					console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), n = JSON.parse(t.substring(65, t.length - 2))
				}
				var r = i.parse(n);
				e && e(r)
			}, n, r)
		},
		parse: function(t) {
			return new Li(t)
		},
		setPath: function(t) {
			return this.path = t, this
		}
	});
	var xh, wh = {
		getContext: function() {
			return void 0 === xh && (xh = new(window.AudioContext || window.webkitAudioContext)), xh
		},
		setContext: function(t) {
			xh = t
		}
	};
	Object.assign(Ii.prototype, {
		load: function(t, e, n, r) {
			var i = new _r(this.manager);
			i.setResponseType("arraybuffer"), i.load(t, function(t) {
				wh.getContext().decodeAudioData(t, function(t) {
					e(t)
				})
			}, n, r)
		}
	}), Object.assign(Ni.prototype, {
		update: function() {
			var t, e, n, r, i, a, s, c, h = new o,
				u = new o;
			return function(o) {
				if(t !== this || e !== o.focus || n !== o.fov || r !== o.aspect * this.aspect || i !== o.near || a !== o.far || s !== o.zoom || c !== this.eyeSep) {
					t = this, e = o.focus, n = o.fov, r = o.aspect * this.aspect, i = o.near, a = o.far, s = o.zoom;
					var l = o.projectionMatrix.clone();
					c = this.eyeSep / 2;
					var d, p, f = c * i / e,
						m = i * Math.tan(Ic.DEG2RAD * n * .5) / s;
					u.elements[12] = -c, h.elements[12] = c, d = -m * r + f, p = m * r + f, l.elements[0] = 2 * i / (p - d), l.elements[8] = (p + d) / (p - d), this.cameraL.projectionMatrix.copy(l), d = -m * r - f, p = m * r - f, l.elements[0] = 2 * i / (p - d), l.elements[8] = (p + d) / (p - d), this.cameraR.projectionMatrix.copy(l)
				}
				this.cameraL.matrixWorld.copy(o.matrixWorld).multiply(u), this.cameraR.matrixWorld.copy(o.matrixWorld).multiply(h)
			}
		}()
	}), Di.prototype = Object.create(M.prototype), Di.prototype.constructor = Di, Ui.prototype = Object.assign(Object.create(M.prototype), {
		constructor: Ui,
		getInput: function() {
			return this.gain
		},
		removeFilter: function() {
			null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null)
		},
		getFilter: function() {
			return this.filter
		},
		setFilter: function(t) {
			null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination)
		},
		getMasterVolume: function() {
			return this.gain.gain.value
		},
		setMasterVolume: function(t) {
			this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01)
		},
		updateMatrixWorld: function() {
			var t = new s,
				e = new a,
				n = new s,
				r = new s;
			return function(i) {
				M.prototype.updateMatrixWorld.call(this, i);
				var o = this.context.listener,
					a = this.up;
				this.matrixWorld.decompose(t, e, n), r.set(0, 0, -1).applyQuaternion(e), o.positionX ? (o.positionX.setValueAtTime(t.x, this.context.currentTime), o.positionY.setValueAtTime(t.y, this.context.currentTime), o.positionZ.setValueAtTime(t.z, this.context.currentTime), o.forwardX.setValueAtTime(r.x, this.context.currentTime), o.forwardY.setValueAtTime(r.y, this.context.currentTime), o.forwardZ.setValueAtTime(r.z, this.context.currentTime), o.upX.setValueAtTime(a.x, this.context.currentTime), o.upY.setValueAtTime(a.y, this.context.currentTime), o.upZ.setValueAtTime(a.z, this.context.currentTime)) : (o.setPosition(t.x, t.y, t.z), o.setOrientation(r.x, r.y, r.z, a.x, a.y, a.z))
			}
		}()
	}), Bi.prototype = Object.assign(Object.create(M.prototype), {
		constructor: Bi,
		getOutput: function() {
			return this.gain
		},
		setNodeSource: function(t) {
			return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this
		},
		setMediaElementSource: function(t) {
			return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this
		},
		setBuffer: function(t) {
			return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this
		},
		play: function() {
			if(!0 === this.isPlaying) return void console.warn("THREE.Audio: Audio is already playing.");
			if(!1 === this.hasPlaybackControl) return void console.warn("THREE.Audio: this Audio has no playback control.");
			var t = this.context.createBufferSource();
			return t.buffer = this.buffer, t.loop = this.loop, t.onended = this.onEnded.bind(this), t.playbackRate.setValueAtTime(this.playbackRate, this.startTime), this.startTime = this.context.currentTime, t.start(this.startTime, this.offset), this.isPlaying = !0, this.source = t, this.connect()
		},
		pause: function() {
			return !1 === this.hasPlaybackControl ? void console.warn("THREE.Audio: this Audio has no playback control.") : (!0 === this.isPlaying && (this.source.stop(), this.offset += (this.context.currentTime - this.startTime) * this.playbackRate, this.isPlaying = !1), this)
		},
		stop: function() {
			return !1 === this.hasPlaybackControl ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.source.stop(), this.offset = 0, this.isPlaying = !1, this)
		},
		connect: function() {
			if(this.filters.length > 0) {
				this.source.connect(this.filters[0]);
				for(var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this.filters[t]);
				this.filters[this.filters.length - 1].connect(this.getOutput())
			} else this.source.connect(this.getOutput());
			return this
		},
		disconnect: function() {
			if(this.filters.length > 0) {
				this.source.disconnect(this.filters[0]);
				for(var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this.filters[t]);
				this.filters[this.filters.length - 1].disconnect(this.getOutput())
			} else this.source.disconnect(this.getOutput());
			return this
		},
		getFilters: function() {
			return this.filters
		},
		setFilters: function(t) {
			return t || (t = []), !0 === this.isPlaying ? (this.disconnect(), this.filters = t, this.connect()) : this.filters = t, this
		},
		getFilter: function() {
			return this.getFilters()[0]
		},
		setFilter: function(t) {
			return this.setFilters(t ? [t] : [])
		},
		setPlaybackRate: function(t) {
			return !1 === this.hasPlaybackControl ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setValueAtTime(this.playbackRate, this.context.currentTime), this)
		},
		getPlaybackRate: function() {
			return this.playbackRate
		},
		onEnded: function() {
			this.isPlaying = !1
		},
		getLoop: function() {
			return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
		},
		setLoop: function(t) {
			return !1 === this.hasPlaybackControl ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this)
		},
		getVolume: function() {
			return this.gain.gain.value
		},
		setVolume: function(t) {
			return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this
		}
	}), Fi.prototype = Object.assign(Object.create(Bi.prototype), {
		constructor: Fi,
		getOutput: function() {
			return this.panner
		},
		getRefDistance: function() {
			return this.panner.refDistance
		},
		setRefDistance: function(t) {
			this.panner.refDistance = t
		},
		getRolloffFactor: function() {
			return this.panner.rolloffFactor
		},
		setRolloffFactor: function(t) {
			this.panner.rolloffFactor = t
		},
		getDistanceModel: function() {
			return this.panner.distanceModel
		},
		setDistanceModel: function(t) {
			this.panner.distanceModel = t
		},
		getMaxDistance: function() {
			return this.panner.maxDistance
		},
		setMaxDistance: function(t) {
			this.panner.maxDistance = t
		},
		updateMatrixWorld: function() {
			var t = new s;
			return function(e) {
				M.prototype.updateMatrixWorld.call(this, e), t.setFromMatrixPosition(this.matrixWorld), this.panner.setPosition(t.x, t.y, t.z)
			}
		}()
	}), Object.assign(zi.prototype, {
		getFrequencyData: function() {
			return this.analyser.getByteFrequencyData(this.data), this.data
		},
		getAverageFrequency: function() {
			for(var t = 0, e = this.getFrequencyData(), n = 0; n < e.length; n++) t += e[n];
			return t / e.length
		}
	}), Object.assign(Gi.prototype, {
		accumulate: function(t, e) {
			var n = this.buffer,
				r = this.valueSize,
				i = t * r + r,
				o = this.cumulativeWeight;
			if(0 === o) {
				for(var a = 0; a !== r; ++a) n[i + a] = n[a];
				o = e
			} else {
				o += e;
				var s = e / o;
				this._mixBufferRegion(n, i, 0, s, r)
			}
			this.cumulativeWeight = o
		},
		apply: function(t) {
			var e = this.valueSize,
				n = this.buffer,
				r = t * e + e,
				i = this.cumulativeWeight,
				o = this.binding;
			if(this.cumulativeWeight = 0, i < 1) {
				var a = 3 * e;
				this._mixBufferRegion(n, r, a, 1 - i, e)
			}
			for(var s = e, c = e + e; s !== c; ++s)
				if(n[s] !== n[s + e]) {
					o.setValue(n, r);
					break
				}
		},
		saveOriginalState: function() {
			var t = this.binding,
				e = this.buffer,
				n = this.valueSize,
				r = 3 * n;
			t.getValue(e, r);
			for(var i = n, o = r; i !== o; ++i) e[i] = e[r + i % n];
			this.cumulativeWeight = 0
		},
		restoreOriginalState: function() {
			var t = 3 * this.valueSize;
			this.binding.setValue(this.buffer, t)
		},
		_select: function(t, e, n, r, i) {
			if(r >= .5)
				for(var o = 0; o !== i; ++o) t[e + o] = t[n + o]
		},
		_slerp: function(t, e, n, r) {
			a.slerpFlat(t, e, t, e, t, n, r)
		},
		_lerp: function(t, e, n, r, i) {
			for(var o = 1 - r, a = 0; a !== i; ++a) {
				var s = e + a;
				t[s] = t[s] * o + t[n + a] * r
			}
		}
	});
	var bh = "\\[\\]\\.:\\/";
	Object.assign(Hi.prototype, {
		getValue: function(t, e) {
			this.bind();
			var n = this._targetGroup.nCachedObjects_,
				r = this._bindings[n];
			void 0 !== r && r.getValue(t, e)
		},
		setValue: function(t, e) {
			for(var n = this._bindings, r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r) n[r].setValue(t, e)
		},
		bind: function() {
			for(var t = this._bindings, e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].bind()
		},
		unbind: function() {
			for(var t = this._bindings, e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].unbind()
		}
	}), Object.assign(Vi, {
		Composite: Hi,
		create: function(t, e, n) {
			return t && t.isAnimationObjectGroup ? new Vi.Composite(t, e, n) : new Vi(t, e, n)
		},
		sanitizeNodeName: function() {
			var t = new RegExp("[" + bh + "]", "g");
			return function(e) {
				return e.replace(/\s/g, "_").replace(t, "")
			}
		}(),
		parseTrackName: function() {
			var t = "[^" + bh + "]",
				e = "[^" + bh.replace("\\.", "") + "]",
				n = /((?:WC+[\/:])*)/.source.replace("WC", t),
				r = /(WCOD+)?/.source.replace("WCOD", e),
				i = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", t),
				o = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", t),
				a = new RegExp("^" + n + r + i + o + "$"),
				s = ["material", "materials", "bones"];
			return function(t) {
				var e = a.exec(t);
				if(!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
				var n = {
						nodeName: e[2],
						objectName: e[3],
						objectIndex: e[4],
						propertyName: e[5],
						propertyIndex: e[6]
					},
					r = n.nodeName && n.nodeName.lastIndexOf(".");
				if(void 0 !== r && -1 !== r) {
					var i = n.nodeName.substring(r + 1); - 1 !== s.indexOf(i) && (n.nodeName = n.nodeName.substring(0, r), n.objectName = i)
				}
				if(null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
				return n
			}
		}(),
		findNode: function(t, e) {
			if(!e || "" === e || "root" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
			if(t.skeleton) {
				var n = t.skeleton.getBoneByName(e);
				if(void 0 !== n) return n
			}
			if(t.children) {
				var r = function(t) {
						for(var n = 0; n < t.length; n++) {
							var i = t[n];
							if(i.name === e || i.uuid === e) return i;
							var o = r(i.children);
							if(o) return o
						}
						return null
					},
					i = r(t.children);
				if(i) return i
			}
			return null
		}
	}), Object.assign(Vi.prototype, {
		_getValue_unavailable: function() {},
		_setValue_unavailable: function() {},
		BindingType: {
			Direct: 0,
			EntireArray: 1,
			ArrayElement: 2,
			HasFromToArray: 3
		},
		Versioning: {
			None: 0,
			NeedsUpdate: 1,
			MatrixWorldNeedsUpdate: 2
		},
		GetterByBindingType: [function(t, e) {
			t[e] = this.node[this.propertyName]
		}, function(t, e) {
			for(var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r) t[e++] = n[r]
		}, function(t, e) {
			t[e] = this.resolvedProperty[this.propertyIndex]
		}, function(t, e) {
			this.resolvedProperty.toArray(t, e)
		}],
		SetterByBindingTypeAndVersioning: [
			[function(t, e) {
				this.targetObject[this.propertyName] = t[e]
			}, function(t, e) {
				this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
			}, function(t, e) {
				this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
			}],
			[function(t, e) {
				for(var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r) n[r] = t[e++]
			}, function(t, e) {
				for(var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r) n[r] = t[e++];
				this.targetObject.needsUpdate = !0
			}, function(t, e) {
				for(var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r) n[r] = t[e++];
				this.targetObject.matrixWorldNeedsUpdate = !0
			}],
			[function(t, e) {
				this.resolvedProperty[this.propertyIndex] = t[e]
			}, function(t, e) {
				this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
			}, function(t, e) {
				this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
			}],
			[function(t, e) {
				this.resolvedProperty.fromArray(t, e)
			}, function(t, e) {
				this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
			}, function(t, e) {
				this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
			}]
		],
		getValue: function(t, e) {
			this.bind(), this.getValue(t, e)
		},
		setValue: function(t, e) {
			this.bind(), this.setValue(t, e)
		},
		bind: function() {
			var t = this.node,
				e = this.parsedPath,
				n = e.objectName,
				r = e.propertyName,
				i = e.propertyIndex;
			if(t || (t = Vi.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
			if(n) {
				var o = e.objectIndex;
				switch(n) {
					case "materials":
						if(!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
						if(!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
						t = t.material.materials;
						break;
					case "bones":
						if(!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
						t = t.skeleton.bones;
						for(var a = 0; a < t.length; a++)
							if(t[a].name === o) {
								o = a;
								break
							}
						break;
					default:
						if(void 0 === t[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
						t = t[n]
				}
				if(void 0 !== o) {
					if(void 0 === t[o]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
					t = t[o]
				}
			}
			var s = t[r];
			if(void 0 === s) {
				var c = e.nodeName;
				return void console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + r + " but it wasn't found.", t)
			}
			var h = this.Versioning.None;
			void 0 !== t.needsUpdate ? (h = this.Versioning.NeedsUpdate, this.targetObject = t) : void 0 !== t.matrixWorldNeedsUpdate && (h = this.Versioning.MatrixWorldNeedsUpdate, this.targetObject = t);
			var u = this.BindingType.Direct;
			if(void 0 !== i) {
				if("morphTargetInfluences" === r) {
					if(!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
					if(t.geometry.isBufferGeometry) {
						if(!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
						for(var a = 0; a < this.node.geometry.morphAttributes.position.length; a++)
							if(t.geometry.morphAttributes.position[a].name === i) {
								i = a;
								break
							}
					} else {
						if(!t.geometry.morphTargets) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
						for(var a = 0; a < this.node.geometry.morphTargets.length; a++)
							if(t.geometry.morphTargets[a].name === i) {
								i = a;
								break
							}
					}
				}
				u = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = i
			} else void 0 !== s.fromArray && void 0 !== s.toArray ? (u = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (u = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = r;
			this.getValue = this.GetterByBindingType[u], this.setValue = this.SetterByBindingTypeAndVersioning[u][h]
		},
		unbind: function() {
			this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
		}
	}), Object.assign(Vi.prototype, {
		_getValue_unbound: Vi.prototype.getValue,
		_setValue_unbound: Vi.prototype.setValue
	}), Object.assign(ki.prototype, {
		isAnimationObjectGroup: !0,
		add: function() {
			for(var t = this._objects, e = t.length, n = this.nCachedObjects_, r = this._indicesByUUID, i = this._paths, o = this._parsedPaths, a = this._bindings, s = a.length, c = void 0, h = 0, u = arguments.length; h !== u; ++h) {
				var l = arguments[h],
					d = l.uuid,
					p = r[d];
				if(void 0 === p) {
					p = e++, r[d] = p, t.push(l);
					for(var f = 0, m = s; f !== m; ++f) a[f].push(new Vi(l, i[f], o[f]))
				} else if(p < n) {
					c = t[p];
					var g = --n,
						v = t[g];
					r[v.uuid] = p, t[p] = v, r[d] = g, t[g] = l;
					for(var f = 0, m = s; f !== m; ++f) {
						var y = a[f],
							x = y[g],
							w = y[p];
						y[p] = x, void 0 === w && (w = new Vi(l, i[f], o[f])), y[g] = w
					}
				} else t[p] !== c && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
			}
			this.nCachedObjects_ = n
		},
		remove: function() {
			for(var t = this._objects, e = this.nCachedObjects_, n = this._indicesByUUID, r = this._bindings, i = r.length, o = 0, a = arguments.length; o !== a; ++o) {
				var s = arguments[o],
					c = s.uuid,
					h = n[c];
				if(void 0 !== h && h >= e) {
					var u = e++,
						l = t[u];
					n[l.uuid] = h, t[h] = l, n[c] = u, t[u] = s;
					for(var d = 0, p = i; d !== p; ++d) {
						var f = r[d],
							m = f[u],
							g = f[h];
						f[h] = m, f[u] = g
					}
				}
			}
			this.nCachedObjects_ = e
		},
		uncache: function() {
			for(var t = this._objects, e = t.length, n = this.nCachedObjects_, r = this._indicesByUUID, i = this._bindings, o = i.length, a = 0, s = arguments.length; a !== s; ++a) {
				var c = arguments[a],
					h = c.uuid,
					u = r[h];
				if(void 0 !== u)
					if(delete r[h], u < n) {
						var l = --n,
							d = t[l],
							p = --e,
							f = t[p];
						r[d.uuid] = u, t[u] = d, r[f.uuid] = l, t[l] = f, t.pop();
						for(var m = 0, g = o; m !== g; ++m) {
							var v = i[m],
								y = v[l],
								x = v[p];
							v[u] = y, v[l] = x, v.pop()
						}
					} else {
						var p = --e,
							f = t[p];
						r[f.uuid] = u, t[u] = f, t.pop();
						for(var m = 0, g = o; m !== g; ++m) {
							var v = i[m];
							v[u] = v[p], v.pop()
						}
					}
			}
			this.nCachedObjects_ = n
		},
		subscribe_: function(t, e) {
			var n = this._bindingsIndicesByPath,
				r = n[t],
				i = this._bindings;
			if(void 0 !== r) return i[r];
			var o = this._paths,
				a = this._parsedPaths,
				s = this._objects,
				c = s.length,
				h = this.nCachedObjects_,
				u = new Array(c);
			r = i.length, n[t] = r, o.push(t), a.push(e), i.push(u);
			for(var l = h, d = s.length; l !== d; ++l) {
				var p = s[l];
				u[l] = new Vi(p, t, e)
			}
			return u
		},
		unsubscribe_: function(t) {
			var e = this._bindingsIndicesByPath,
				n = e[t];
			if(void 0 !== n) {
				var r = this._paths,
					i = this._parsedPaths,
					o = this._bindings,
					a = o.length - 1,
					s = o[a];
				e[t[a]] = n, o[n] = s, o.pop(), i[n] = i[a], i.pop(), r[n] = r[a], r.pop()
			}
		}
	}), Object.assign(ji.prototype, {
		play: function() {
			return this._mixer._activateAction(this), this
		},
		stop: function() {
			return this._mixer._deactivateAction(this), this.reset()
		},
		reset: function() {
			return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
		},
		isRunning: function() {
			return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
		},
		isScheduled: function() {
			return this._mixer._isActiveAction(this)
		},
		startAt: function(t) {
			return this._startTime = t, this
		},
		setLoop: function(t, e) {
			return this.loop = t, this.repetitions = e, this
		},
		setEffectiveWeight: function(t) {
			return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading()
		},
		getEffectiveWeight: function() {
			return this._effectiveWeight
		},
		fadeIn: function(t) {
			return this._scheduleFading(t, 0, 1)
		},
		fadeOut: function(t) {
			return this._scheduleFading(t, 1, 0)
		},
		crossFadeFrom: function(t, e, n) {
			if(t.fadeOut(e), this.fadeIn(e), n) {
				var r = this._clip.duration,
					i = t._clip.duration,
					o = i / r,
					a = r / i;
				t.warp(1, o, e), this.warp(a, 1, e)
			}
			return this
		},
		crossFadeTo: function(t, e, n) {
			return t.crossFadeFrom(this, e, n)
		},
		stopFading: function() {
			var t = this._weightInterpolant;
			return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
		},
		setEffectiveTimeScale: function(t) {
			return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping()
		},
		getEffectiveTimeScale: function() {
			return this._effectiveTimeScale
		},
		setDuration: function(t) {
			return this.timeScale = this._clip.duration / t, this.stopWarping()
		},
		syncWith: function(t) {
			return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping()
		},
		halt: function(t) {
			return this.warp(this._effectiveTimeScale, 0, t)
		},
		warp: function(t, e, n) {
			var r = this._mixer,
				i = r.time,
				o = this._timeScaleInterpolant,
				a = this.timeScale;
			null === o && (o = r._lendControlInterpolant(), this._timeScaleInterpolant = o);
			var s = o.parameterPositions,
				c = o.sampleValues;
			return s[0] = i, s[1] = i + n, c[0] = t / a, c[1] = e / a, this
		},
		stopWarping: function() {
			var t = this._timeScaleInterpolant;
			return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
		},
		getMixer: function() {
			return this._mixer
		},
		getClip: function() {
			return this._clip
		},
		getRoot: function() {
			return this._localRoot || this._mixer._root
		},
		_update: function(t, e, n, r) {
			if(!this.enabled) return void this._updateWeight(t);
			var i = this._startTime;
			if(null !== i) {
				var o = (t - i) * n;
				if(o < 0 || 0 === n) return;
				this._startTime = null, e = n * o
			}
			e *= this._updateTimeScale(t);
			var a = this._updateTime(e),
				s = this._updateWeight(t);
			if(s > 0)
				for(var c = this._interpolants, h = this._propertyBindings, u = 0, l = c.length; u !== l; ++u) c[u].evaluate(a), h[u].accumulate(r, s)
		},
		_updateWeight: function(t) {
			var e = 0;
			if(this.enabled) {
				e = this.weight;
				var n = this._weightInterpolant;
				if(null !== n) {
					var r = n.evaluate(t)[0];
					e *= r, t > n.parameterPositions[1] && (this.stopFading(), 0 === r && (this.enabled = !1))
				}
			}
			return this._effectiveWeight = e, e
		},
		_updateTimeScale: function(t) {
			var e = 0;
			if(!this.paused) {
				e = this.timeScale;
				var n = this._timeScaleInterpolant;
				if(null !== n) {
					e *= n.evaluate(t)[0], t > n.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e)
				}
			}
			return this._effectiveTimeScale = e, e
		},
		_updateTime: function(t) {
			var e = this.time + t;
			if(0 === t) return e;
			var n = this._clip.duration,
				r = this.loop,
				i = this._loopCount;
			if(r === lc) {
				-1 === i && (this._loopCount = 0, this._setEndings(!0, !0, !1));
				t: {
					if(e >= n) e = n;
					else {
						if(!(e < 0)) break t;
						e = 0
					}
					this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
					this._mixer.dispatchEvent({
						type: "finished",
						action: this,
						direction: t < 0 ? -1 : 1
					})
				}
			} else {
				var o = r === pc;
				if(-1 === i && (t >= 0 ? (i = 0, this._setEndings(!0, 0 === this.repetitions, o)) : this._setEndings(0 === this.repetitions, !0, o)), e >= n || e < 0) {
					var a = Math.floor(e / n);
					e -= n * a, i += Math.abs(a);
					var s = this.repetitions - i;
					if(s <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, e = t > 0 ? n : 0, this._mixer.dispatchEvent({
						type: "finished",
						action: this,
						direction: t > 0 ? 1 : -1
					});
					else {
						if(1 === s) {
							var c = t < 0;
							this._setEndings(c, !c, o)
						} else this._setEndings(!1, !1, o);
						this._loopCount = i, this._mixer.dispatchEvent({
							type: "loop",
							action: this,
							loopDelta: a
						})
					}
				}
				if(o && 1 == (1 & i)) return this.time = e, n - e
			}
			return this.time = e, e
		},
		_setEndings: function(t, e, n) {
			var r = this._interpolantSettings;
			n ? (r.endingStart = yc, r.endingEnd = yc) : (r.endingStart = t ? this.zeroSlopeAtStart ? yc : vc : xc, r.endingEnd = e ? this.zeroSlopeAtEnd ? yc : vc : xc)
		},
		_scheduleFading: function(t, e, n) {
			var r = this._mixer,
				i = r.time,
				o = this._weightInterpolant;
			null === o && (o = r._lendControlInterpolant(), this._weightInterpolant = o);
			var a = o.parameterPositions,
				s = o.sampleValues;
			return a[0] = i, s[0] = e, a[1] = i + t, s[1] = n, this
		}
	}), Wi.prototype = Object.assign(Object.create(r.prototype), {
		constructor: Wi,
		_bindAction: function(t, e) {
			var n = t._localRoot || this._root,
				r = t._clip.tracks,
				i = r.length,
				o = t._propertyBindings,
				a = t._interpolants,
				s = n.uuid,
				c = this._bindingsByRootAndName,
				h = c[s];
			void 0 === h && (h = {}, c[s] = h);
			for(var u = 0; u !== i; ++u) {
				var l = r[u],
					d = l.name,
					p = h[d];
				if(void 0 !== p) o[u] = p;
				else {
					if(void 0 !== (p = o[u])) {
						null === p._cacheIndex && (++p.referenceCount, this._addInactiveBinding(p, s, d));
						continue
					}
					var f = e && e._propertyBindings[u].binding.parsedPath;
					p = new Gi(Vi.create(n, d, f), l.ValueTypeName, l.getValueSize()), ++p.referenceCount, this._addInactiveBinding(p, s, d), o[u] = p
				}
				a[u].resultBuffer = p.buffer
			}
		},
		_activateAction: function(t) {
			if(!this._isActiveAction(t)) {
				if(null === t._cacheIndex) {
					var e = (t._localRoot || this._root).uuid,
						n = t._clip.uuid,
						r = this._actionsByClip[n];
					this._bindAction(t, r && r.knownActions[0]), this._addInactiveAction(t, n, e)
				}
				for(var i = t._propertyBindings, o = 0, a = i.length; o !== a; ++o) {
					var s = i[o];
					0 == s.useCount++ && (this._lendBinding(s), s.saveOriginalState())
				}
				this._lendAction(t)
			}
		},
		_deactivateAction: function(t) {
			if(this._isActiveAction(t)) {
				for(var e = t._propertyBindings, n = 0, r = e.length; n !== r; ++n) {
					var i = e[n];
					0 == --i.useCount && (i.restoreOriginalState(), this._takeBackBinding(i))
				}
				this._takeBackAction(t)
			}
		},
		_initMemoryManager: function() {
			this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
			var t = this;
			this.stats = {
				actions: {
					get total() {
						return t._actions.length
					},
					get inUse() {
						return t._nActiveActions
					}
				},
				bindings: {
					get total() {
						return t._bindings.length
					},
					get inUse() {
						return t._nActiveBindings
					}
				},
				controlInterpolants: {
					get total() {
						return t._controlInterpolants.length
					},
					get inUse() {
						return t._nActiveControlInterpolants
					}
				}
			}
		},
		_isActiveAction: function(t) {
			var e = t._cacheIndex;
			return null !== e && e < this._nActiveActions
		},
		_addInactiveAction: function(t, e, n) {
			var r = this._actions,
				i = this._actionsByClip,
				o = i[e];
			if(void 0 === o) o = {
				knownActions: [t],
				actionByRoot: {}
			}, t._byClipCacheIndex = 0, i[e] = o;
			else {
				var a = o.knownActions;
				t._byClipCacheIndex = a.length, a.push(t)
			}
			t._cacheIndex = r.length, r.push(t), o.actionByRoot[n] = t
		},
		_removeInactiveAction: function(t) {
			var e = this._actions,
				n = e[e.length - 1],
				r = t._cacheIndex;
			n._cacheIndex = r, e[r] = n, e.pop(), t._cacheIndex = null;
			var i = t._clip.uuid,
				o = this._actionsByClip,
				a = o[i],
				s = a.knownActions,
				c = s[s.length - 1],
				h = t._byClipCacheIndex;
			c._byClipCacheIndex = h, s[h] = c, s.pop(), t._byClipCacheIndex = null, delete a.actionByRoot[(t._localRoot || this._root).uuid], 0 === s.length && delete o[i], this._removeInactiveBindingsForAction(t)
		},
		_removeInactiveBindingsForAction: function(t) {
			for(var e = t._propertyBindings, n = 0, r = e.length; n !== r; ++n) {
				var i = e[n];
				0 == --i.referenceCount && this._removeInactiveBinding(i)
			}
		},
		_lendAction: function(t) {
			var e = this._actions,
				n = t._cacheIndex,
				r = this._nActiveActions++,
				i = e[r];
			t._cacheIndex = r, e[r] = t, i._cacheIndex = n, e[n] = i
		},
		_takeBackAction: function(t) {
			var e = this._actions,
				n = t._cacheIndex,
				r = --this._nActiveActions,
				i = e[r];
			t._cacheIndex = r, e[r] = t, i._cacheIndex = n, e[n] = i
		},
		_addInactiveBinding: function(t, e, n) {
			var r = this._bindingsByRootAndName,
				i = r[e],
				o = this._bindings;
			void 0 === i && (i = {}, r[e] = i), i[n] = t, t._cacheIndex = o.length, o.push(t)
		},
		_removeInactiveBinding: function(t) {
			var e = this._bindings,
				n = t.binding,
				r = n.rootNode.uuid,
				i = n.path,
				o = this._bindingsByRootAndName,
				a = o[r],
				s = e[e.length - 1],
				c = t._cacheIndex;
			s._cacheIndex = c, e[c] = s, e.pop(), delete a[i];
			t: {
				for(var h in a) break t;delete o[r]
			}
		},
		_lendBinding: function(t) {
			var e = this._bindings,
				n = t._cacheIndex,
				r = this._nActiveBindings++,
				i = e[r];
			t._cacheIndex = r, e[r] = t, i._cacheIndex = n, e[n] = i
		},
		_takeBackBinding: function(t) {
			var e = this._bindings,
				n = t._cacheIndex,
				r = --this._nActiveBindings,
				i = e[r];
			t._cacheIndex = r, e[r] = t, i._cacheIndex = n, e[n] = i
		},
		_lendControlInterpolant: function() {
			var t = this._controlInterpolants,
				e = this._nActiveControlInterpolants++,
				n = t[e];
			return void 0 === n && (n = new vi(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), n.__cacheIndex = e, t[e] = n), n
		},
		_takeBackControlInterpolant: function(t) {
			var e = this._controlInterpolants,
				n = t.__cacheIndex,
				r = --this._nActiveControlInterpolants,
				i = e[r];
			t.__cacheIndex = r, e[r] = t, i.__cacheIndex = n, e[n] = i
		},
		_controlInterpolantsResultBuffer: new Float32Array(1),
		clipAction: function(t, e) {
			var n = e || this._root,
				r = n.uuid,
				i = "string" == typeof t ? bi.findByName(n, t) : t,
				o = null !== i ? i.uuid : t,
				a = this._actionsByClip[o],
				s = null;
			if(void 0 !== a) {
				var c = a.actionByRoot[r];
				if(void 0 !== c) return c;
				s = a.knownActions[0], null === i && (i = s._clip)
			}
			if(null === i) return null;
			var h = new ji(this, i, e);
			return this._bindAction(h, s), this._addInactiveAction(h, o, r), h
		},
		existingAction: function(t, e) {
			var n = e || this._root,
				r = n.uuid,
				i = "string" == typeof t ? bi.findByName(n, t) : t,
				o = i ? i.uuid : t,
				a = this._actionsByClip[o];
			return void 0 !== a ? a.actionByRoot[r] || null : null
		},
		stopAllAction: function() {
			var t = this._actions,
				e = this._nActiveActions,
				n = this._bindings,
				r = this._nActiveBindings;
			this._nActiveActions = 0, this._nActiveBindings = 0;
			for(var i = 0; i !== e; ++i) t[i].reset();
			for(var i = 0; i !== r; ++i) n[i].useCount = 0;
			return this
		},
		update: function(t) {
			t *= this.timeScale;
			for(var e = this._actions, n = this._nActiveActions, r = this.time += t, i = Math.sign(t), o = this._accuIndex ^= 1, a = 0; a !== n; ++a) {
				e[a]._update(r, t, i, o)
			}
			for(var s = this._bindings, c = this._nActiveBindings, a = 0; a !== c; ++a) s[a].apply(o);
			return this
		},
		getRoot: function() {
			return this._root
		},
		uncacheClip: function(t) {
			var e = this._actions,
				n = t.uuid,
				r = this._actionsByClip,
				i = r[n];
			if(void 0 !== i) {
				for(var o = i.knownActions, a = 0, s = o.length; a !== s; ++a) {
					var c = o[a];
					this._deactivateAction(c);
					var h = c._cacheIndex,
						u = e[e.length - 1];
					c._cacheIndex = null, c._byClipCacheIndex = null, u._cacheIndex = h, e[h] = u, e.pop(), this._removeInactiveBindingsForAction(c)
				}
				delete r[n]
			}
		},
		uncacheRoot: function(t) {
			var e = t.uuid,
				n = this._actionsByClip;
			for(var r in n) {
				var i = n[r].actionByRoot,
					o = i[e];
				void 0 !== o && (this._deactivateAction(o), this._removeInactiveAction(o))
			}
			var a = this._bindingsByRootAndName,
				s = a[e];
			if(void 0 !== s)
				for(var c in s) {
					var h = s[c];
					h.restoreOriginalState(), this._removeInactiveBinding(h)
				}
		},
		uncacheAction: function(t, e) {
			var n = this.existingAction(t, e);
			null !== n && (this._deactivateAction(n), this._removeInactiveAction(n))
		}
	}), Xi.prototype.clone = function() {
		return new Xi(void 0 === this.value.clone ? this.value : this.value.clone())
	}, qi.prototype = Object.assign(Object.create(G.prototype), {
		constructor: qi,
		isInstancedBufferGeometry: !0,
		copy: function(t) {
			return G.prototype.copy.call(this, t), this.maxInstancedCount = t.maxInstancedCount, this
		},
		clone: function() {
			return(new this.constructor).copy(this)
		}
	}), Object.defineProperties(Yi.prototype, {
		count: {
			get: function() {
				return this.data.count
			}
		},
		array: {
			get: function() {
				return this.data.array
			}
		}
	}), Object.assign(Yi.prototype, {
		isInterleavedBufferAttribute: !0,
		setX: function(t, e) {
			return this.data.array[t * this.data.stride + this.offset] = e, this
		},
		setY: function(t, e) {
			return this.data.array[t * this.data.stride + this.offset + 1] = e, this
		},
		setZ: function(t, e) {
			return this.data.array[t * this.data.stride + this.offset + 2] = e, this
		},
		setW: function(t, e) {
			return this.data.array[t * this.data.stride + this.offset + 3] = e, this
		},
		getX: function(t) {
			return this.data.array[t * this.data.stride + this.offset]
		},
		getY: function(t) {
			return this.data.array[t * this.data.stride + this.offset + 1]
		},
		getZ: function(t) {
			return this.data.array[t * this.data.stride + this.offset + 2]
		},
		getW: function(t) {
			return this.data.array[t * this.data.stride + this.offset + 3]
		},
		setXY: function(t, e, n) {
			return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this
		},
		setXYZ: function(t, e, n, r) {
			return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = r, this
		},
		setXYZW: function(t, e, n, r, i) {
			return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = r, this.data.array[t + 3] = i, this
		}
	}), Object.defineProperty(Zi.prototype, "needsUpdate", {
		set: function(t) {
			!0 === t && this.version++
		}
	}), Object.assign(Zi.prototype, {
		isInterleavedBuffer: !0,
		onUploadCallback: function() {},
		setArray: function(t) {
			if(Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
			return this.count = void 0 !== t ? t.length / this.stride : 0, this.array = t, this
		},
		setDynamic: function(t) {
			return this.dynamic = t, this
		},
		copy: function(t) {
			return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.dynamic = t.dynamic, this
		},
		copyAt: function(t, e, n) {
			t *= this.stride, n *= e.stride;
			for(var r = 0, i = this.stride; r < i; r++) this.array[t + r] = e.array[n + r];
			return this
		},
		set: function(t, e) {
			return void 0 === e && (e = 0), this.array.set(t, e), this
		},
		clone: function() {
			return(new this.constructor).copy(this)
		},
		onUpload: function(t) {
			return this.onUploadCallback = t, this
		}
	}), Ji.prototype = Object.assign(Object.create(Zi.prototype), {
		constructor: Ji,
		isInstancedInterleavedBuffer: !0,
		copy: function(t) {
			return Zi.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
		}
	}), Qi.prototype = Object.assign(Object.create(R.prototype), {
		constructor: Qi,
		isInstancedBufferAttribute: !0,
		copy: function(t) {
			return R.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
		}
	}), Object.assign(Ki.prototype, {
		linePrecision: 1,
		set: function(t, e) {
			this.ray.set(t, e)
		},
		setFromCamera: function(t, e) {
			e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize()) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
		},
		intersectObject: function(t, e, n) {
			var r = n || [];
			return to(t, this, r, e), r.sort($i), r
		},
		intersectObjects: function(t, e, n) {
			var r = n || [];
			if(!1 === Array.isArray(t)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), r;
			for(var i = 0, o = t.length; i < o; i++) to(t[i], this, r, e);
			return r.sort($i), r
		}
	}), Object.assign(eo.prototype, {
		start: function() {
			this.startTime = ("undefined" == typeof performance ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
		},
		stop: function() {
			this.getElapsedTime(), this.running = !1, this.autoStart = !1
		},
		getElapsedTime: function() {
			return this.getDelta(), this.elapsedTime
		},
		getDelta: function() {
			var t = 0;
			if(this.autoStart && !this.running) return this.start(), 0;
			if(this.running) {
				var e = ("undefined" == typeof performance ? Date : performance).now();
				t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t
			}
			return t
		}
	}), Object.assign(no.prototype, {
		set: function(t, e, n) {
			return this.radius = t, this.phi = e, this.theta = n, this
		},
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
		},
		makeSafe: function() {
			return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this
		},
		setFromVector3: function(t) {
			return this.radius = t.length(), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t.x, t.z), this.phi = Math.acos(Ic.clamp(t.y / this.radius, -1, 1))), this
		}
	}), Object.assign(ro.prototype, {
		set: function(t, e, n) {
			return this.radius = t, this.theta = e, this.y = n, this
		},
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this
		},
		setFromVector3: function(t) {
			return this.radius = Math.sqrt(t.x * t.x + t.z * t.z), this.theta = Math.atan2(t.x, t.z), this.y = t.y, this
		}
	}), Object.assign(io.prototype, {
		set: function(t, e) {
			return this.min.copy(t), this.max.copy(e), this
		},
		setFromPoints: function(t) {
			this.makeEmpty();
			for(var e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
			return this
		},
		setFromCenterAndSize: function() {
			var t = new i;
			return function(e, n) {
				var r = t.copy(n).multiplyScalar(.5);
				return this.min.copy(e).sub(r), this.max.copy(e).add(r), this
			}
		}(),
		clone: function() {
			return(new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.min.copy(t.min), this.max.copy(t.max), this
		},
		makeEmpty: function() {
			return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
		},
		isEmpty: function() {
			return this.max.x < this.min.x || this.max.y < this.min.y
		},
		getCenter: function(t) {
			return void 0 === t && (console.warn("THREE.Box2: .getCenter() target is now required"), t = new i), this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
		},
		getSize: function(t) {
			return void 0 === t && (console.warn("THREE.Box2: .getSize() target is now required"), t = new i), this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
		},
		expandByPoint: function(t) {
			return this.min.min(t), this.max.max(t), this
		},
		expandByVector: function(t) {
			return this.min.sub(t), this.max.add(t), this
		},
		expandByScalar: function(t) {
			return this.min.addScalar(-t), this.max.addScalar(t), this
		},
		containsPoint: function(t) {
			return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
		},
		containsBox: function(t) {
			return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
		},
		getParameter: function(t, e) {
			return void 0 === e && (console.warn("THREE.Box2: .getParameter() target is now required"), e = new i), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
		},
		intersectsBox: function(t) {
			return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
		},
		clampPoint: function(t, e) {
			return void 0 === e && (console.warn("THREE.Box2: .clampPoint() target is now required"), e = new i), e.copy(t).clamp(this.min, this.max)
		},
		distanceToPoint: function() {
			var t = new i;
			return function(e) {
				return t.copy(e).clamp(this.min, this.max).sub(e).length()
			}
		}(),
		intersect: function(t) {
			return this.min.max(t.min), this.max.min(t.max), this
		},
		union: function(t) {
			return this.min.min(t.min), this.max.max(t.max), this
		},
		translate: function(t) {
			return this.min.add(t), this.max.add(t), this
		},
		equals: function(t) {
			return t.min.equals(this.min) && t.max.equals(this.max)
		}
	}), oo.prototype = Object.create(M.prototype), oo.prototype.constructor = oo, oo.prototype.isImmediateRenderObject = !0, ao.prototype = Object.create(He.prototype), ao.prototype.constructor = ao, ao.prototype.update = function() {
		var t = new s,
			e = new s,
			n = new c;
		return function() {
			var r = ["a", "b", "c"];
			this.object.updateMatrixWorld(!0), n.getNormalMatrix(this.object.matrixWorld);
			var i = this.object.matrixWorld,
				o = this.geometry.attributes.position,
				a = this.object.geometry;
			if(a && a.isGeometry)
				for(var s = a.vertices, c = a.faces, h = 0, u = 0, l = c.length; u < l; u++)
					for(var d = c[u], p = 0, f = d.vertexNormals.length; p < f; p++) {
						var m = s[d[r[p]]],
							g = d.vertexNormals[p];
						t.copy(m).applyMatrix4(i), e.copy(g).applyMatrix3(n).normalize().multiplyScalar(this.size).add(t), o.setXYZ(h, t.x, t.y, t.z), h += 1, o.setXYZ(h, e.x, e.y, e.z), h += 1
					} else if(a && a.isBufferGeometry)
						for(var v = a.attributes.position, y = a.attributes.normal, h = 0, p = 0, f = v.count; p < f; p++) t.set(v.getX(p), v.getY(p), v.getZ(p)).applyMatrix4(i), e.set(y.getX(p), y.getY(p), y.getZ(p)), e.applyMatrix3(n).normalize().multiplyScalar(this.size).add(t), o.setXYZ(h, t.x, t.y, t.z), h += 1, o.setXYZ(h, e.x, e.y, e.z), h += 1;
			o.needsUpdate = !0
		}
	}(), so.prototype = Object.create(M.prototype), so.prototype.constructor = so, so.prototype.dispose = function() {
		this.cone.geometry.dispose(), this.cone.material.dispose()
	}, so.prototype.update = function() {
		var t = new s,
			e = new s;
		return function() {
			this.light.updateMatrixWorld();
			var n = this.light.distance ? this.light.distance : 1e3,
				r = n * Math.tan(this.light.angle);
			this.cone.scale.set(r, r, n), t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(e.sub(t)), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
		}
	}(), ho.prototype = Object.create(He.prototype), ho.prototype.constructor = ho, ho.prototype.updateMatrixWorld = function() {
		var t = new s,
			e = new o,
			n = new o;
		return function(r) {
			var i = this.bones,
				o = this.geometry,
				a = o.getAttribute("position");
			n.getInverse(this.root.matrixWorld);
			for(var s = 0, c = 0; s < i.length; s++) {
				var h = i[s];
				h.parent && h.parent.isBone && (e.multiplyMatrices(n, h.matrixWorld), t.setFromMatrixPosition(e), a.setXYZ(c, t.x, t.y, t.z), e.multiplyMatrices(n, h.parent.matrixWorld), t.setFromMatrixPosition(e), a.setXYZ(c + 1, t.x, t.y, t.z), c += 2)
			}
			o.getAttribute("position").needsUpdate = !0, M.prototype.updateMatrixWorld.call(this, r)
		}
	}(), uo.prototype = Object.create(Q.prototype), uo.prototype.constructor = uo, uo.prototype.dispose = function() {
		this.geometry.dispose(), this.material.dispose()
	}, uo.prototype.update = function() {
		void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
	}, lo.prototype = Object.create(M.prototype), lo.prototype.constructor = lo, lo.prototype.dispose = function() {
		this.children[0].geometry.dispose(), this.children[0].material.dispose()
	}, lo.prototype.update = function() {
		var t = .5 * this.light.width,
			e = .5 * this.light.height,
			n = this.line.geometry.attributes.position,
			r = n.array;
		r[0] = t, r[1] = -e, r[2] = 0, r[3] = t, r[4] = e, r[5] = 0, r[6] = -t, r[7] = e, r[8] = 0, r[9] = -t, r[10] = -e, r[11] = 0, r[12] = t, r[13] = -e, r[14] = 0, n.needsUpdate = !0, void 0 !== this.color ? this.line.material.color.set(this.color) : this.line.material.color.copy(this.light.color)
	}, po.prototype = Object.create(M.prototype), po.prototype.constructor = po, po.prototype.dispose = function() {
		this.children[0].geometry.dispose(), this.children[0].material.dispose()
	}, po.prototype.update = function() {
		var t = new s,
			e = new y,
			n = new y;
		return function() {
			var r = this.children[0];
			if(void 0 !== this.color) this.material.color.set(this.color);
			else {
				var i = r.geometry.getAttribute("color");
				e.copy(this.light.color), n.copy(this.light.groundColor);
				for(var o = 0, a = i.count; o < a; o++) {
					var s = o < a / 2 ? e : n;
					i.setXYZ(o, s.r, s.g, s.b)
				}
				i.needsUpdate = !0
			}
			r.lookAt(t.setFromMatrixPosition(this.light.matrixWorld).negate())
		}
	}(), fo.prototype = Object.create(He.prototype), fo.prototype.constructor = fo, mo.prototype = Object.create(He.prototype), mo.prototype.constructor = mo, go.prototype = Object.create(He.prototype), go.prototype.constructor = go, go.prototype.update = function() {
		var t = new s,
			e = new s,
			n = new c;
		return function() {
			this.object.updateMatrixWorld(!0), n.getNormalMatrix(this.object.matrixWorld);
			for(var r = this.object.matrixWorld, i = this.geometry.attributes.position, o = this.object.geometry, a = o.vertices, s = o.faces, c = 0, h = 0, u = s.length; h < u; h++) {
				var l = s[h],
					d = l.normal;
				t.copy(a[l.a]).add(a[l.b]).add(a[l.c]).divideScalar(3).applyMatrix4(r), e.copy(d).applyMatrix3(n).normalize().multiplyScalar(this.size).add(t), i.setXYZ(c, t.x, t.y, t.z), c += 1, i.setXYZ(c, e.x, e.y, e.z), c += 1
			}
			i.needsUpdate = !0
		}
	}(), vo.prototype = Object.create(M.prototype), vo.prototype.constructor = vo, vo.prototype.dispose = function() {
		this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
	}, vo.prototype.update = function() {
		var t = new s,
			e = new s,
			n = new s;
		return function() {
			t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), n.subVectors(e, t), this.lightPlane.lookAt(n), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(n), this.targetLine.scale.z = n.length()
		}
	}(), yo.prototype = Object.create(He.prototype), yo.prototype.constructor = yo, yo.prototype.update = function() {
		function t(t, o, a, s) {
			r.set(o, a, s).unproject(i);
			var c = n[t];
			if(void 0 !== c)
				for(var h = e.getAttribute("position"), u = 0, l = c.length; u < l; u++) h.setXYZ(c[u], r.x, r.y, r.z)
		}
		var e, n, r = new s,
			i = new E;
		return function() {
			e = this.geometry, n = this.pointMap;
			i.projectionMatrix.copy(this.camera.projectionMatrix), t("c", 0, 0, -1), t("t", 0, 0, 1), t("n1", -1, -1, -1), t("n2", 1, -1, -1), t("n3", -1, 1, -1), t("n4", 1, 1, -1), t("f1", -1, -1, 1), t("f2", 1, -1, 1), t("f3", -1, 1, 1), t("f4", 1, 1, 1), t("u1", .7, 1.1, -1), t("u2", -.7, 1.1, -1), t("u3", 0, 2, -1), t("cf1", -1, 0, 1), t("cf2", 1, 0, 1), t("cf3", 0, -1, 1), t("cf4", 0, 1, 1), t("cn1", -1, 0, -1), t("cn2", 1, 0, -1), t("cn3", 0, -1, -1), t("cn4", 0, 1, -1), e.getAttribute("position").needsUpdate = !0
		}
	}(), xo.prototype = Object.create(He.prototype), xo.prototype.constructor = xo, xo.prototype.update = function() {
		var t = new f;
		return function(e) {
			if(void 0 !== e && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && t.setFromObject(this.object), !t.isEmpty()) {
				var n = t.min,
					r = t.max,
					i = this.geometry.attributes.position,
					o = i.array;
				o[0] = r.x, o[1] = r.y, o[2] = r.z, o[3] = n.x, o[4] = r.y, o[5] = r.z, o[6] = n.x, o[7] = n.y, o[8] = r.z, o[9] = r.x, o[10] = n.y, o[11] = r.z, o[12] = r.x, o[13] = r.y, o[14] = n.z, o[15] = n.x, o[16] = r.y, o[17] = n.z, o[18] = n.x, o[19] = n.y, o[20] = n.z, o[21] = r.x, o[22] = n.y, o[23] = n.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere()
			}
		}
	}(), xo.prototype.setFromObject = function(t) {
		return this.object = t, this.update(), this
	}, wo.prototype = Object.create(He.prototype), wo.prototype.constructor = wo, wo.prototype.updateMatrixWorld = function(t) {
		var e = this.box;
		e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), M.prototype.updateMatrixWorld.call(this, t))
	}, bo.prototype = Object.create(Ge.prototype), bo.prototype.constructor = bo, bo.prototype.updateMatrixWorld = function(t) {
		var e = -this.plane.constant;
		Math.abs(e) < 1e-8 && (e = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, e), this.children[0].material.side = e < 0 ? fa : pa, this.lookAt(this.plane.normal), M.prototype.updateMatrixWorld.call(this, t)
	};
	var _h, Mh;
	_o.prototype = Object.create(M.prototype), _o.prototype.constructor = _o, _o.prototype.setDirection = function() {
		var t, e = new s;
		return function(n) {
			n.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : n.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (e.set(n.z, 0, -n.x).normalize(), t = Math.acos(n.y), this.quaternion.setFromAxisAngle(e, t))
		}
	}(), _o.prototype.setLength = function(t, e, n) {
		void 0 === e && (e = .2 * t), void 0 === n && (n = .2 * e), this.line.scale.set(1, Math.max(0, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(n, e, n), this.cone.position.y = t, this.cone.updateMatrix()
	}, _o.prototype.setColor = function(t) {
		this.line.material.color.copy(t), this.cone.material.color.copy(t)
	}, Mo.prototype = Object.create(He.prototype), Mo.prototype.constructor = Mo;
	var Eh = 0,
		Th = 1;
	Rr.create = function(t, e) {
		return console.log("THREE.Curve.create() has been deprecated"), t.prototype = Object.create(Rr.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t
	}, Object.assign(Jr.prototype, {
		createPointsGeometry: function(t) {
			console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
			var e = this.getPoints(t);
			return this.createGeometry(e)
		},
		createSpacedPointsGeometry: function(t) {
			console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
			var e = this.getSpacedPoints(t);
			return this.createGeometry(e)
		},
		createGeometry: function(t) {
			console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
			for(var e = new A, n = 0, r = t.length; n < r; n++) {
				var i = t[n];
				e.vertices.push(new s(i.x, i.y, i.z || 0))
			}
			return e
		}
	}), Object.assign(Qr.prototype, {
		fromPoints: function(t) {
			console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(t)
		}
	}), jo.prototype = Object.create(Or.prototype), Wo.prototype = Object.create(Or.prototype), Xo.prototype = Object.create(Or.prototype), Object.assign(Xo.prototype, {
		initFromArray: function() {
			console.error("THREE.Spline: .initFromArray() has been removed.")
		},
		getControlPointsArray: function() {
			console.error("THREE.Spline: .getControlPointsArray() has been removed.")
		},
		reparametrizeByArcLength: function() {
			console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
		}
	}), fo.prototype.setColors = function() {
		console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
	}, ho.prototype.update = function() {
		console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
	}, Object.assign(Ei.prototype, {
		extractUrlBase: function(t) {
			return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), mh.extractUrlBase(t)
		}
	}), Object.assign(io.prototype, {
		center: function(t) {
			return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(t)
		},
		empty: function() {
			return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
		},
		isIntersectionBox: function(t) {
			return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
		},
		size: function(t) {
			return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t)
		}
	}), Object.assign(f.prototype, {
		center: function(t) {
			return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t)
		},
		empty: function() {
			return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
		},
		isIntersectionBox: function(t) {
			return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
		},
		isIntersectionSphere: function(t) {
			return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
		},
		size: function(t) {
			return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t)
		}
	}), Z.prototype.center = function(t) {
		return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(t)
	}, Object.assign(Ic, {
		random16: function() {
			return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random()
		},
		nearestPowerOfTwo: function(t) {
			return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), Ic.floorPowerOfTwo(t)
		},
		nextPowerOfTwo: function(t) {
			return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), Ic.ceilPowerOfTwo(t)
		}
	}), Object.assign(c.prototype, {
		flattenToArrayOffset: function(t, e) {
			return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
		},
		multiplyVector3: function(t) {
			return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this)
		},
		multiplyVector3Array: function() {
			console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
		},
		applyToBuffer: function(t) {
			return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(t)
		},
		applyToVector3Array: function() {
			console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
		}
	}), Object.assign(o.prototype, {
		extractPosition: function(t) {
			return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t)
		},
		flattenToArrayOffset: function(t, e) {
			return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
		},
		getPosition: function() {
			var t;
			return function() {
				return void 0 === t && (t = new s), console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), t.setFromMatrixColumn(this, 3)
			}
		}(),
		setRotationFromQuaternion: function(t) {
			return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t)
		},
		multiplyToArray: function() {
			console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
		},
		multiplyVector3: function(t) {
			return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
		},
		multiplyVector4: function(t) {
			return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
		},
		multiplyVector3Array: function() {
			console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
		},
		rotateAxis: function(t) {
			console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this)
		},
		crossVector: function(t) {
			return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
		},
		translate: function() {
			console.error("THREE.Matrix4: .translate() has been removed.")
		},
		rotateX: function() {
			console.error("THREE.Matrix4: .rotateX() has been removed.")
		},
		rotateY: function() {
			console.error("THREE.Matrix4: .rotateY() has been removed.")
		},
		rotateZ: function() {
			console.error("THREE.Matrix4: .rotateZ() has been removed.")
		},
		rotateByAxis: function() {
			console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
		},
		applyToBuffer: function(t) {
			return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(t)
		},
		applyToVector3Array: function() {
			console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
		},
		makeFrustum: function(t, e, n, r, i, o) {
			return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(t, e, r, n, i, o)
		}
	}), g.prototype.isIntersectionLine = function(t) {
		return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t)
	}, a.prototype.multiplyVector3 = function(t) {
		return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this)
	}, Object.assign(Y.prototype, {
		isIntersectionBox: function(t) {
			return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
		},
		isIntersectionPlane: function(t) {
			return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t)
		},
		isIntersectionSphere: function(t) {
			return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
		}
	}), Object.assign(J.prototype, {
		area: function() {
			return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea()
		},
		barycoordFromPoint: function(t, e) {
			return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(t, e)
		},
		midpoint: function(t) {
			return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(t)
		},
		normal: function(t) {
			return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(t)
		},
		plane: function(t) {
			return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(t)
		}
	}), Object.assign(J, {
		barycoordFromPoint: function(t, e, n, r, i) {
			return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), J.getBarycoord(t, e, n, r, i)
		},
		normal: function(t, e, n, r) {
			return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), J.getNormal(t, e, n, r)
		}
	}), Object.assign(Kr.prototype, {
		extractAllPoints: function(t) {
			return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(t)
		},
		extrude: function(t) {
			return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new Wn(this, t)
		},
		makeGeometry: function(t) {
			return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new nr(this, t)
		}
	}), Object.assign(i.prototype, {
		fromAttribute: function(t, e, n) {
			return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
		},
		distanceToManhattan: function(t) {
			return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t)
		},
		lengthManhattan: function() {
			return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
		}
	}), Object.assign(s.prototype, {
		setEulerFromRotationMatrix: function() {
			console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
		},
		setEulerFromQuaternion: function() {
			console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
		},
		getPositionFromMatrix: function(t) {
			return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t)
		},
		getScaleFromMatrix: function(t) {
			return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t)
		},
		getColumnFromMatrix: function(t, e) {
			return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t)
		},
		applyProjection: function(t) {
			return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(t)
		},
		fromAttribute: function(t, e, n) {
			return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
		},
		distanceToManhattan: function(t) {
			return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t)
		},
		lengthManhattan: function() {
			return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
		}
	}), Object.assign(u.prototype, {
		fromAttribute: function(t, e, n) {
			return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
		},
		lengthManhattan: function() {
			return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
		}
	}), Object.assign(A.prototype, {
		computeTangents: function() {
			console.error("THREE.Geometry: .computeTangents() has been removed.")
		},
		computeLineDistances: function() {
			console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")
		}
	}), Object.assign(M.prototype, {
		getChildByName: function(t) {
			return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t)
		},
		renderDepth: function() {
			console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
		},
		translate: function(t, e) {
			return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t)
		},
		getWorldRotation: function() {
			console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
		}
	}), Object.defineProperties(M.prototype, {
		eulerOrder: {
			get: function() {
				return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
			},
			set: function(t) {
				console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = t
			}
		},
		useQuaternion: {
			get: function() {
				console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
			},
			set: function() {
				console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
			}
		}
	}), Object.defineProperties(De.prototype, {
		objects: {
			get: function() {
				return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
			}
		}
	}), Object.defineProperty(Ue.prototype, "useVertexTexture", {
		get: function() {
			console.warn("THREE.Skeleton: useVertexTexture has been removed.")
		},
		set: function() {
			console.warn("THREE.Skeleton: useVertexTexture has been removed.")
		}
	}), Object.defineProperty(Rr.prototype, "__arcLengthDivisions", {
		get: function() {
			return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions
		},
		set: function(t) {
			console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = t
		}
	}), Te.prototype.setLens = function(t, e) {
		console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t)
	}, Object.defineProperties($r.prototype, {
		onlyShadow: {
			set: function() {
				console.warn("THREE.Light: .onlyShadow has been removed.")
			}
		},
		shadowCameraFov: {
			set: function(t) {
				console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = t
			}
		},
		shadowCameraLeft: {
			set: function(t) {
				console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = t
			}
		},
		shadowCameraRight: {
			set: function(t) {
				console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = t
			}
		},
		shadowCameraTop: {
			set: function(t) {
				console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = t
			}
		},
		shadowCameraBottom: {
			set: function(t) {
				console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = t
			}
		},
		shadowCameraNear: {
			set: function(t) {
				console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = t
			}
		},
		shadowCameraFar: {
			set: function(t) {
				console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = t
			}
		},
		shadowCameraVisible: {
			set: function() {
				console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
			}
		},
		shadowBias: {
			set: function(t) {
				console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t
			}
		},
		shadowDarkness: {
			set: function() {
				console.warn("THREE.Light: .shadowDarkness has been removed.")
			}
		},
		shadowMapWidth: {
			set: function(t) {
				console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = t
			}
		},
		shadowMapHeight: {
			set: function(t) {
				console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = t
			}
		}
	}), Object.defineProperties(R.prototype, {
		length: {
			get: function() {
				return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
			}
		},
		copyIndicesArray: function() {
			console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
		}
	}), Object.assign(G.prototype, {
		addIndex: function(t) {
			console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t)
		},
		addDrawCall: function(t, e, n) {
			void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e)
		},
		clearDrawCalls: function() {
			console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
		},
		computeTangents: function() {
			console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
		},
		computeOffsets: function() {
			console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
		}
	}), Object.defineProperties(G.prototype, {
		drawcalls: {
			get: function() {
				return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
			}
		},
		offsets: {
			get: function() {
				return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
			}
		}
	}), Object.assign(Xn.prototype, {
		getArrays: function() {
			console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")
		},
		addShapeList: function() {
			console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")
		},
		addShape: function() {
			console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")
		}
	}), Object.defineProperties(Xi.prototype, {
		dynamic: {
			set: function() {
				console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
			}
		},
		onUpdate: {
			value: function() {
				return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this
			}
		}
	}), Object.defineProperties(W.prototype, {
		wrapAround: {
			get: function() {
				console.warn("THREE.Material: .wrapAround has been removed.")
			},
			set: function() {
				console.warn("THREE.Material: .wrapAround has been removed.")
			}
		},
		wrapRGB: {
			get: function() {
				return console.warn("THREE.Material: .wrapRGB has been removed."), new y
			}
		},
		shading: {
			get: function() {
				console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
			},
			set: function(t) {
				console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = t === ga
			}
		}
	}), Object.defineProperties(gr.prototype, {
		metal: {
			get: function() {
				return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1
			},
			set: function() {
				console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
			}
		}
	}), Object.defineProperties(q.prototype, {
		derivatives: {
			get: function() {
				return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
			},
			set: function(t) {
				console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t
			}
		}
	}), Object.assign(Le.prototype, {
		animate: function(t) {
			console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(t)
		},
		getCurrentRenderTarget: function() {
			return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
		},
		getMaxAnisotropy: function() {
			return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy()
		},
		getPrecision: function() {
			return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision
		},
		resetGLState: function() {
			return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset()
		},
		supportsFloatTextures: function() {
			return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
		},
		supportsHalfFloatTextures: function() {
			return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
		},
		supportsStandardDerivatives: function() {
			return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
		},
		supportsCompressedTextureS3TC: function() {
			return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
		},
		supportsCompressedTexturePVRTC: function() {
			return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
		},
		supportsBlendMinMax: function() {
			return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
		},
		supportsVertexTextures: function() {
			return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
		},
		supportsInstancedArrays: function() {
			return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
		},
		enableScissorTest: function(t) {
			console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t)
		},
		initMaterial: function() {
			console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
		},
		addPrePlugin: function() {
			console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
		},
		addPostPlugin: function() {
			console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
		},
		updateShadowMap: function() {
			console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
		},
		setFaceCulling: function() {
			console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
		}
	}), Object.defineProperties(Le.prototype, {
		shadowMapEnabled: {
			get: function() {
				return this.shadowMap.enabled
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = t
			}
		},
		shadowMapType: {
			get: function() {
				return this.shadowMap.type
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = t
			}
		},
		shadowMapCullFace: {
			get: function() {
				console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
			},
			set: function() {
				console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
			}
		}
	}), Object.defineProperties(xe.prototype, {
		cullFace: {
			get: function() {
				console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
			},
			set: function() {
				console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
			}
		},
		renderReverseSided: {
			get: function() {
				console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
			},
			set: function() {
				console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
			}
		},
		renderSingleSided: {
			get: function() {
				console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
			},
			set: function() {
				console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
			}
		}
	}), Object.defineProperties(l.prototype, {
		wrapS: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = t
			}
		},
		wrapT: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = t
			}
		},
		magFilter: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = t
			}
		},
		minFilter: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = t
			}
		},
		anisotropy: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = t
			}
		},
		offset: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = t
			}
		},
		repeat: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = t
			}
		},
		format: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = t
			}
		},
		type: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = t
			}
		},
		generateMipmaps: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = t
			}
		}
	}), Object.defineProperties(Ae.prototype, {
		standing: {
			set: function() {
				console.warn("THREE.WebVRManager: .standing has been removed.")
			}
		}
	}), Bi.prototype.load = function(t) {
		console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
		var e = this;
		return(new Ii).load(t, function(t) {
			e.setBuffer(t)
		}), this
	}, zi.prototype.getData = function() {
		return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData()
	}, Di.prototype.updateCubeMap = function(t, e) {
		return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t, e)
	};
	var Sh = {
			merge: function(t, e, n) {
				console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
				var r;
				e.isMesh && (e.matrixAutoUpdate && e.updateMatrix(), r = e.matrix, e = e.geometry), t.merge(e, r, n)
			},
			center: function(t) {
				return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), t.center()
			}
		},
		Ah = {
			crossOrigin: void 0,
			loadTexture: function(t, e, n, r) {
				console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
				var i = new Ar;
				i.setCrossOrigin(this.crossOrigin);
				var o = i.load(t, n, void 0, r);
				return e && (o.mapping = e), o
			},
			loadTextureCube: function(t, e, n, r) {
				console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
				var i = new Sr;
				i.setCrossOrigin(this.crossOrigin);
				var o = i.load(t, n, void 0, r);
				return e && (o.mapping = e), o
			},
			loadCompressedTexture: function() {
				console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
			},
			loadCompressedTextureCube: function() {
				console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
			}
		},
		Rh = {
			createMultiMaterialObject: function() {
				console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")
			},
			detach: function() {
				console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")
			},
			attach: function() {
				console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")
			}
		}
}]);