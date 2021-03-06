(function(n) {
    "use strict";
    function r(n, t) {
        return n + ".touchspin_" + t
    }
    function i(t, i) {
        return n.map(t, function(n) {
            return r(n, i)
        })
    }
    var t = 0;
    n.fn.TouchSpin = function(r) {
        if (r === "destroy")
            return this.each(function() {
                var t = n(this),
                    r = t.data();
                n(document).off(i(["mouseup", "touchend", "touchcancel", "mousemove", "touchmove", "scroll", "scrollstart"], r.spinnerid).join(" "))
            }), this;
        var u = {
                min: 0,
                max: 100,
                initval: "",
                replacementval: "",
                step: 1,
                decimals: 0,
                stepinterval: 100,
                forcestepdivisibility: "round",
                stepintervaldelay: 500,
                verticalbuttons: !1,
                verticalupclass: "glyphicon glyphicon-chevron-up",
                verticaldownclass: "glyphicon glyphicon-chevron-down",
                prefix: "",
                postfix: "",
                prefix_extraclass: "",
                postfix_extraclass: "",
                booster: !0,
                boostat: 10,
                maxboostedstep: !1,
                mousewheel: !0,
                buttondown_class: "btn btn-default",
                buttonup_class: "btn btn-default",
                buttondown_txt: "-",
                buttonup_txt: "+"
            },
            f = {
                min: "min",
                max: "max",
                initval: "init-val",
                replacementval: "replacement-val",
                step: "step",
                decimals: "decimals",
                stepinterval: "step-interval",
                verticalbuttons: "vertical-buttons",
                verticalupclass: "vertical-up-class",
                verticaldownclass: "vertical-down-class",
                forcestepdivisibility: "force-step-divisibility",
                stepintervaldelay: "step-interval-delay",
                prefix: "prefix",
                postfix: "postfix",
                prefix_extraclass: "prefix-extra-class",
                postfix_extraclass: "postfix-extra-class",
                booster: "booster",
                boostat: "boostat",
                maxboostedstep: "max-boosted-step",
                mousewheel: "mouse-wheel",
                buttondown_class: "button-down-class",
                buttonup_class: "button-up-class",
                buttondown_txt: "button-down-txt",
                buttonup_txt: "button-up-txt"
            };
        return this.each(function() {
            function ut() {
                if (!o.data("alreadyinitialized")) {
                    if (o.data("alreadyinitialized", !0), t += 1, o.data("spinnerid", t), !o.is("input")) {
                        console.log("Must be an input.");
                        return
                    }
                    ot();
                    ft();
                    w();
                    ct();
                    vt();
                    yt();
                    pt();
                    wt();
                    s.input.css("display", "block")
                }
            }
            function ft() {
                e.initval !== "" && o.val() === "" && o.val(e.initval)
            }
            function et(n) {
                ht(n);
                w();
                var t = s.input.val();
                t !== "" && (t = Number(s.input.val()), s.input.val(t.toFixed(e.decimals)))
            }
            function ot() {
                e = n.extend({}, u, rt, st(), r)
            }
            function st() {
                var t = {};
                return n.each(f, function(n, i) {
                    var r = "bts-" + i + "";
                    o.is("[data-" + r + "]") && (t[n] = o.data(r))
                }), t
            }
            function ht(t) {
                e = n.extend({}, e, t);
                t.postfix && o.parent().find(".bootstrap-touchspin-postfix").text(t.postfix);
                t.prefix && o.parent().find(".bootstrap-touchspin-prefix").text(t.prefix)
            }
            function ct() {
                var n = o.val(),
                    t = o.parent();
                n !== "" && (n = Number(n).toFixed(e.decimals));
                o.data("initvalue", n).val(n);
                o.addClass("form-control");
                t.hasClass("input-group") ? lt(t) : at()
            }
            function lt(t) {
                t.addClass("bootstrap-touchspin");
                var u = o.prev(),
                    f = o.next(),
                    i,
                    r,
                    s = '<span class="input-group-addon bootstrap-touchspin-prefix">' + e.prefix + "<\/span>",
                    h = '<span class="input-group-addon bootstrap-touchspin-postfix">' + e.postfix + "<\/span>";
                u.hasClass("input-group-btn") ? (i = '<button class="' + e.buttondown_class + ' bootstrap-touchspin-down" type="button">' + e.buttondown_txt + "<\/button>", u.append(i)) : (i = '<span class="input-group-btn"><button class="' + e.buttondown_class + ' bootstrap-touchspin-down" type="button">' + e.buttondown_txt + "<\/button><\/span>", n(i).insertBefore(o));
                f.hasClass("input-group-btn") ? (r = '<button class="' + e.buttonup_class + ' bootstrap-touchspin-up" type="button">' + e.buttonup_txt + "<\/button>", f.prepend(r)) : (r = '<span class="input-group-btn"><button class="' + e.buttonup_class + ' bootstrap-touchspin-up" type="button">' + e.buttonup_txt + "<\/button><\/span>", n(r).insertAfter(o));
                n(s).insertBefore(o);
                n(h).insertAfter(o);
                a = t
            }
            function at() {
                var t;
                t = e.verticalbuttons ? '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' + e.prefix + '<\/span><span class="input-group-addon bootstrap-touchspin-postfix">' + e.postfix + '<\/span><span class="input-group-btn-vertical"><button class="' + e.buttondown_class + ' bootstrap-touchspin-up" type="button"><i class="' + e.verticalupclass + '"><\/i><\/button><button class="' + e.buttonup_class + ' bootstrap-touchspin-down" type="button"><i class="' + e.verticaldownclass + '"><\/i><\/button><\/span><\/div>' : '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' + e.buttondown_class + ' bootstrap-touchspin-down" type="button">' + e.buttondown_txt + '<\/button><\/span><span class="input-group-addon bootstrap-touchspin-prefix">' + e.prefix + '<\/span><span class="input-group-addon bootstrap-touchspin-postfix">' + e.postfix + '<\/span><span class="input-group-btn"><button class="' + e.buttonup_class + ' bootstrap-touchspin-up" type="button">' + e.buttonup_txt + "<\/button><\/span><\/div>";
                a = n(t).insertBefore(o);
                n(".bootstrap-touchspin-prefix", a).after(o);
                o.hasClass("input-sm") ? a.addClass("input-group-sm") : o.hasClass("input-lg") && a.addClass("input-group-lg")
            }
            function vt() {
                s = {
                    down: n(".bootstrap-touchspin-down", a),
                    up: n(".bootstrap-touchspin-up", a),
                    input: n("input", a),
                    prefix: n(".bootstrap-touchspin-prefix", a).addClass(e.prefix_extraclass),
                    postfix: n(".bootstrap-touchspin-postfix", a).addClass(e.postfix_extraclass)
                }
            }
            function yt() {
                e.prefix === "" && s.prefix.hide();
                e.postfix === "" && s.postfix.hide()
            }
            function pt() {
                o.on("keydown", function(n) {
                    var t = n.keyCode || n.which;
                    t === 38 ? (l !== "up" && (v(), k()), n.preventDefault()) : t === 40 && (l !== "down" && (y(), b()), n.preventDefault())
                });
                o.on("keyup", function(n) {
                    var t = n.keyCode || n.which;
                    t === 38 ? c() : t === 40 && c()
                });
                o.on("blur", function() {
                    w()
                });
                s.down.on("keydown", function(n) {
                    var t = n.keyCode || n.which;
                    (t === 32 || t === 13) && (l !== "down" && (y(), b()), n.preventDefault())
                });
                s.down.on("keyup", function(n) {
                    var t = n.keyCode || n.which;
                    (t === 32 || t === 13) && c()
                });
                s.up.on("keydown", function(n) {
                    var t = n.keyCode || n.which;
                    (t === 32 || t === 13) && (l !== "up" && (v(), k()), n.preventDefault())
                });
                s.up.on("keyup", function(n) {
                    var t = n.keyCode || n.which;
                    (t === 32 || t === 13) && c()
                });
                s.down.on("mousedown.touchspin", function(n) {
                    s.down.off("touchstart.touchspin");
                    o.is(":disabled");
                    y();
                    b();
                    n.preventDefault();
                    n.stopPropagation()
                });
                s.down.on("touchstart.touchspin", function(n) {
                    s.down.off("mousedown.touchspin");
                    o.is(":disabled");
                    y();
                    b();
                    n.preventDefault();
                    n.stopPropagation()
                });
                s.up.on("mousedown.touchspin", function(n) {
                    s.up.off("touchstart.touchspin");
                    o.is(":disabled");
                    v();
                    k();
                    n.preventDefault();
                    n.stopPropagation()
                });
                s.up.on("touchstart.touchspin", function(n) {
                    s.up.off("mousedown.touchspin");
                    o.is(":disabled");
                    v();
                    k();
                    n.preventDefault();
                    n.stopPropagation()
                });
                s.up.on("mouseout touchleave touchend touchcancel", function(n) {
                    l && (n.stopPropagation(), c())
                });
                s.down.on("mouseout touchleave touchend touchcancel", function(n) {
                    l && (n.stopPropagation(), c())
                });
                s.down.on("mousemove touchmove", function(n) {
                    l && (n.stopPropagation(), n.preventDefault())
                });
                s.up.on("mousemove touchmove", function(n) {
                    l && (n.stopPropagation(), n.preventDefault())
                });
                n(document).on(i(["mouseup", "touchend", "touchcancel"], t).join(" "), function(n) {
                    l && (n.preventDefault(), c())
                });
                n(document).on(i(["mousemove", "touchmove", "scroll", "scrollstart"], t).join(" "), function(n) {
                    l && (n.preventDefault(), c())
                });
                o.on("mousewheel DOMMouseScroll", function(n) {
                    if (e.mousewheel && o.is(":focus")) {
                        var t = n.originalEvent.wheelDelta || -n.originalEvent.deltaY || -n.originalEvent.detail;
                        n.stopPropagation();
                        n.preventDefault();
                        t < 0 ? y() : v()
                    }
                })
            }
            function wt() {
                o.on("touchspin.uponce", function() {
                    c();
                    v()
                });
                o.on("touchspin.downonce", function() {
                    c();
                    y()
                });
                o.on("touchspin.startupspin", function() {
                    k()
                });
                o.on("touchspin.startdownspin", function() {
                    b()
                });
                o.on("touchspin.stopspin", function() {
                    c()
                });
                o.on("touchspin.updatesettings", function(n, t) {
                    et(t)
                })
            }
            function bt(n) {
                switch (e.forcestepdivisibility) {
                    case "round":
                        return (Math.round(n / e.step) * e.step).toFixed(e.decimals);
                    case "floor":
                        return (Math.floor(n / e.step) * e.step).toFixed(e.decimals);
                    case "ceil":
                        return (Math.ceil(n / e.step) * e.step).toFixed(e.decimals);
                    default:
                        return n
                }
            }
            function w() {
                var i,
                    n,
                    t;
                if (i = o.val(), i === "") {
                    e.replacementval !== "" && (o.val(e.replacementval), o.trigger("change"));
                    return
                }
                e.decimals > 0 && i === "." || (n = parseFloat(i), isNaN(n) && (n = e.replacementval !== "" ? e.replacementval : 0), t = n, n.toString() !== i && (t = n), n < e.min && (t = e.min), n > e.max && (t = e.max), t = bt(t), Number(i).toString() !== t.toString() && (o.val(t), o.trigger("change")))
            }
            function it() {
                if (e.booster) {
                    var n = Math.pow(2, Math.floor(p / e.boostat)) * e.step;
                    return e.maxboostedstep && n > e.maxboostedstep && (n = e.maxboostedstep, h = Math.round(h / n) * n), Math.max(e.step, n)
                }
                return e.step
            }
            function v() {
                w();
                h = parseFloat(s.input.val());
                isNaN(h) && (h = 0);
                var n = h,
                    t = it();
                h = h + t;
                h > e.max && (h = e.max, o.trigger("touchspin.on.max"), c());
                s.input.val(Number(h).toFixed(e.decimals));
                n !== h && o.trigger("change")
            }
            function y() {
                w();
                h = parseFloat(s.input.val());
                isNaN(h) && (h = 0);
                var n = h,
                    t = it();
                h = h - t;
                h < e.min && (h = e.min, o.trigger("touchspin.on.min"), c());
                s.input.val(h.toFixed(e.decimals));
                n !== h && o.trigger("change")
            }
            function b() {
                c();
                p = 0;
                l = "down";
                o.trigger("touchspin.on.startspin");
                o.trigger("touchspin.on.startdownspin");
                nt = setTimeout(function() {
                    d = setInterval(function() {
                        p++;
                        y()
                    }, e.stepinterval)
                }, e.stepintervaldelay)
            }
            function k() {
                c();
                p = 0;
                l = "up";
                o.trigger("touchspin.on.startspin");
                o.trigger("touchspin.on.startupspin");
                tt = setTimeout(function() {
                    g = setInterval(function() {
                        p++;
                        v()
                    }, e.stepinterval)
                }, e.stepintervaldelay)
            }
            function c() {
                clearTimeout(nt);
                clearTimeout(tt);
                clearInterval(d);
                clearInterval(g);
                switch (l) {
                    case "up":
                        o.trigger("touchspin.on.stopupspin");
                        o.trigger("touchspin.on.stopspin");
                        break;
                    case "down":
                        o.trigger("touchspin.on.stopdownspin");
                        o.trigger("touchspin.on.stopspin")
                }
                p = 0;
                l = !1
            }
            var e,
                o = n(this),
                rt = o.data(),
                a,
                s,
                h,
                d,
                g,
                nt,
                tt,
                p = 0,
                l = !1;
            ut()
        })
    }
})(jQuery)