
/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
function parse_query_string(n) {
  for (var t, e, r = _0x106fa9, f = n[r(474)]("&"), i = {}, u = 0; u < f[r(427)]; u++)
    t = f[u].split("="),
    typeof i[t[0]] == "undefined" ? i[t[0]] = decodeURIComponent(t[1]) : typeof i[t[0]] == "string" ? (e = [i[t[0]], decodeURIComponent(t[1])],
    i[t[0]] = e) : i[t[0]][r(408)](decodeURIComponent(t[1]));
  return i
}
function openNav() {
  var n = _0x106fa9;
  $(n(398)).toggleClass("responsive")
}
function ksearchvideo(n) {
  var t = _0x106fa9
    , i = $("#s_input")[t(488)]()[t(439)]()
    , r = $(t(502))[t(488)]();
  return (n == ![] && i || n == !![] && r) && $[t(501)]({
    type: t(412),
    url: k_url_search,
    data: {
      k_exp: k_exp,
      k_token: k_token,
      q: i,
      html: r,
      lang: k_lang,
      web: window[t(472)][t(409)],
      v: "v2"
    },
    beforeSend: function() {
      var n = t;
      $(n(485))[n(414)](n(463), n(473));
      $(n(424))[n(414)](n(463), n(446));
      $("#search-result")[n(432)]();
      $(window).scrollTop(0)
    },
    success: function(n, i, r) {
      var u = t;
      r[u(418)] != 200 && setTimeout(function() {
        var n = u;
        window[n(472)][n(451)]()
      }, 3e3);
      n[u(418)] == "ok" ? (n[u(421)] ? renderFail(n[u(421)]) : (k_live = n[u(394)],
      n.v == "v1" ? $(u(482))[u(468)](n.data) : (insertAndExecute("js-result", "<scri" + u(478) + n.data + u(378) + "ipt>"),
      load_Ads())),
      $(u(485)).css(u(463), u(446))) : setTimeout(function() {
        var n = u;
        window.location[n(451)]()
      }, 3e3)
    },
    error: function(n) {
      return n.status == 429 ? convertFailed(txt_error_429) : convertFailed(txt_error_404)
    }
  }),
  ![]
}
function insertAndExecute(n, t) {
  var r = _0x106fa9, u, i;
  for (domelement = document.getElementById(n),
  domelement.innerHTML = t,
  u = [],
  ret = domelement.childNodes,
  i = 0; ret[i]; i++)
    u && nodeName(ret[i], "script") && (!ret[i].type || ret[i][r(416)][r(389)]() === r(462)) && u[r(408)](ret[i].parentNode ? ret[i][r(450)][r(396)](ret[i]) : ret[i]);
  for (script in u)
    evalScript(u[script])
}
function nodeName(n, t) {
  var i = _0x106fa9;
  return n[i(495)] && n[i(495)][i(440)]() === t[i(440)]()
}
function evalScript(n) {
  var t = _0x106fa9, r, i;
  data = n[t(415)] || n[t(503)] || n.innerHTML || "";
  r = document.getElementsByTagName(t(505))[0] || document.documentElement;
  i = document.createElement(t(402));
  i.type = t(462);
  i[t(490)](document.createTextNode(data));
  r[t(406)](i, r[t(397)]);
  r[t(396)](i);
  n.parentNode && n.parentNode.removeChild(n)
}
function load_Ads() {
  for (var n = _0x106fa9, i = document[n(380)](n(386)), t = 0; t < i[n(427)]; t++)
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
      console[n(404)]("loading ads " + t)
    } catch (r) {}
}
function k_parseDuration(n) {
  var t = _0x106fa9, r;
  if (!n)
    return "";
  var u = []
    , i = 0
    , e = n[t(467)](/(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)W)?(?:(\d*)D)?T(?:(\d*)H)?(?:(\d*)M)?(?:(\d*)S)?/i)
    , f = [{
    pos: 1,
    multiplier: 31536e3
  }, {
    pos: 2,
    multiplier: 2592e3
  }, {
    pos: 3,
    multiplier: 604800
  }, {
    pos: 4,
    multiplier: 86400
  }, {
    pos: 5,
    multiplier: 3600
  }, {
    pos: 6,
    multiplier: 60
  }, {
    pos: 7,
    multiplier: 1
  }];
  if (null === e)
    return "";
  for (r = 0; r < f[t(427)]; r++)
    void 0 !== e[f[r].pos] && (i += parseInt(e[f[r][t(498)]]) * f[r].multiplier);
  return 3599 < i && (u[t(408)](parseInt(i / 3600)),
  i %= 3600),
  u[t(408)](("0" + parseInt(i / 60))[t(481)](-2)),
  u[t(408)](("0" + i % 60).slice(-2)),
  u.join(":")
}
function matchYoutubeUrl(n) {
  var t = _0x106fa9
    , i = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  return n[t(467)](i) ? n[t(467)](i)[1] : ![]
}
function _0x1b4a(n, t) {
  var i = _0x41a9();
  return _0x1b4a = function(n) {
    n = n - 378;
    return i[n]
  }
  ,
  _0x1b4a(n, t)
}
function fancyTimeFormat(n) {
  var i = ~~(n / 3600)
    , r = ~~(n % 3600 / 60)
    , u = ~~n % 60
    , t = "";
  return i > 0 && (t += "" + i + ":" + (r < 10 ? "0" : "")),
  t += "" + r + ":" + (u < 10 ? "0" : ""),
  t += "" + u,
  t
}
function renderFail(n) {
  var t = _0x106fa9, i;
  $(t(424))[t(414)](t(463), t(473));
  $(t(485)).css("display", "none");
  i = t(477) + n + t(447);
  $(t(482))[t(468)](i);
  $(t(405))[t(427)] && srollToElement(t(438))
}
function srollToElement(n) {
  var t = _0x106fa9;
  const i = document.getElementById(n);
  i.scrollIntoView({
    block: t(460)
  })
}
function convertSuccess(n, t, i) {
  var r = _0x106fa9, u;
  $(r(395)).addClass(r(392));
  u = $(r(453));
  u[r(504)](r(507), n);
  u[r(415)](txt_download + " " + t[r(440)]() + " (" + i + ")");
  $(r(461))[r(464)](r(392))
}
function convertFailed(n) {
  renderFail(n)
}
function convertFile(n, t) {
  var i = _0x106fa9;
  if (k_live)
    return $(i(424)).css("display", i(473)),
    convertFailed(txt_notifi_live);
  var r = {}
    , u = $(i(400))[i(488)]()
    , f = $(i(457))[i(488)]()
    , e = $(n)[i(379)](i(388))
    , o = $("#FbId")[i(488)]();
  if (t == i(422)) {
    var s = $(n)[i(379)]("videourl")
      , h = $(n)[i(379)]("videotype")
      , c = $(n)[i(379)](i(499));
    r = {
      ftype: "mp4",
      v_id: o,
      videoUrl: s,
      videoType: h,
      videoCodec: c,
      audioUrl: u,
      audioType: f,
      fquality: e,
      fname: k_prefix_name,
      exp: k_exp,
      token: c_token,
      cv: "v2"
    }
  } else
    t == i(403) && (r = {
      ftype: i(403),
      v_id: o,
      audioUrl: u,
      audioType: f,
      fquality: e,
      fname: k_prefix_name,
      exp: k_exp,
      token: c_token,
      cv: "v2"
    });
  $.ajax({
    type: "POST",
    url: k_url_convert,
    data: r,
    beforeSend: function() {
      var n = i;
      $("#fbdownloader")[n(484)](n(392));
      $(n(395)).removeClass("hidden");
      $(window)[n(444)](0)
    },
    success: function(n) {
      var r = i;
      return typeof n[r(418)] == r(491) ? convertFailed(txt_error_404) : n[r(418)] == r(483) ? n[r(469)] == 200 ? convertSuccess(n[r(425)], t, n[r(383)]) : n.statusCode == 300 && typeof n.jobId != r(491) ? WSCheckStatus(k_url_convert, n.jobId, t) : convertFailed(getStatusText(n[r(469)])) : convertFailed(txt_error_404)
    },
    error: function() {
      return convertFailed(txt_error_404)
    }
  })
}
function WSCheckStatus(n, t, i) {
  var r = _0x106fa9, f, e;
  const u = new URL(n);
  f = u[r(480)] == "https:" ? r(466) : "ws:";
  e = f + "//" + u[r(387)] + r(493) + t + "?fname=" + k_prefix_name;
  socket = new WebSocket(e);
  socket[r(429)] = function(n) {
    var t = r
      , u = JSON.parse(n[t(379)]);
    u[t(391)] == "success" && convertSuccess(u[t(390)], i, u[t(383)]);
    u[t(391)] == t(430) ? UpdateProgress(u[t(448)]) : u.action == t(492) && convertFailed(txt_error_500)
  }
  ;
  socket.onerror = function() {
    convertFailed(txt_error_404)
  }
}
function UpdateProgress(n) {
  var t = _0x106fa9
    , i = $(".progress-bar-info");
  i[t(414)]("width", n + "%");
  i[t(415)](n + "%")
}
function getStatusText(n) {
  var t = "";
  return n == 500 ? t = txt_error_500 : n == 400 ? t = txt_error_404 : n == 300 && (t = txt_convert_next),
  t
}
function randomIntFromInterval(n, t) {
  return Math.floor(Math.random() * (t - n + 1) + n)
}
function KHtmlEncode(n) {
  var t = _0x106fa9
    , i = document[t(486)]("div");
  return i[t(497)] = i[t(503)] = n,
  n = i[t(465)],
  n
}
function validURL(n) {
  var t = _0x106fa9
    , i = new RegExp(t(455) + t(476) + t(426) + t(431),"i");
  return !!i[t(393)](n)
}
function checkurl() {
  var n = _0x106fa9
    , t = document[n(419)](n(441))[n(448)]
    , i = document[n(419)](n(384));
  validURL(t) && (i[n(448)] = n(470) + t,
  document.getElementById(n(435))[n(443)] = ![])
}
function _0x41a9() {
  var n = [".topnav", ".btn-download-fb", "#audioUrl", "ready", "script", "mp3", "log", ".page-dl-private", "insertBefore", "4chBddK", "push", "hostname", ".download-link-fb", "click", "POST", "590KJkqTH", "css", "text", "type", "8625WsJRKZ", "status", "getElementById", "8357430orahyf", "mess", "mp4", "vid", "#search-form", "result", "((\\d{1,3}\\.){3}\\d{1,3}))", "length", "#popup_play", "onmessage", "progress", "(\\:\\d+)?", "empty", "9744468tcVbUu", "substring", "btn-copy", "15059209WMbfhg", "focus", "search-result", "trim", "toUpperCase", "s_input", ".dropdown-content", "disabled", "scrollTop", "find", "none", "<\/p><\/div>", "value", "preventDefault", "parentNode", "reload", "3167234pWvdRY", "#btn_convert_dl", "11010RrJTne", "^(https?:\\/\\/)?", "keypress", "#audioType", "body", "target", "center", "#complete_section", "text/javascript", "display", "removeClass", "innerHTML", "wss:", "match", "html", "statusCode", "view-source:", "slideToggle", "location", "block", "split", "has", "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|", '<div class="error"><p>', "pt type='text/javascript'>", "extend", "protocol", "slice", "#search-result", "success", "addClass", "#loader-wrapper", "createElement", "setMenu", "val", "1406286IThgkx", "appendChild", "undefined", "error", "/sub/", "execCommand", "nodeName", "#s_input", "innerText", "pos", "videocodec", "copy", "ajax", "#html_content", "textContent", "attr", "head", "zoom-show", "href", "<\/scr", "data", "getElementsByClassName", "3519QmVhzQ", ".close-popup", "fileSize", "source-link", "8zabzms", "ads-v2", "host", "fquality", "toLowerCase", "url", "action", "hidden", "test", "live", "#process_section", "removeChild", "firstChild"];
  return _0x41a9 = function() {
    return n
  }
  ,
  _0x41a9()
}
function copyToClipboard() {
  var n = _0x106fa9
    , t = document[n(419)](n(384))
    , i = document[n(419)]("btn-copy");
  t[n(443)] = ![];
  t.select();
  document[n(494)](n(500));
  document[n(419)]("btn-copy")[n(497)] = txt_copied
}
!function(n, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
    if (!n.document)
      throw new Error("jQuery requires a window with a document");
    return t(n)
  }
  : t(n)
}("undefined" != typeof window ? window : this, function(n, t) {
  "use strict";
  function br(n, t, i) {
    var r, e, u = (i = i || f).createElement("script");
    if (u.text = n,
    t)
      for (r in ee)
        (e = t[r] || t.getAttribute && t.getAttribute(r)) && u.setAttribute(r, e);
    i.head.appendChild(u).parentNode.removeChild(u)
  }
  function it(n) {
    return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ri[pr.call(n)] || "object" : typeof n
  }
  function pi(n) {
    var t = !!n && "length"in n && n.length
      , i = it(n);
    return !u(n) && !tt(n) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in n)
  }
  function c(n, t) {
    return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
  }
  function bi(n, t, r) {
    return u(t) ? i.grep(n, function(n, i) {
      return !!t.call(n, i, n) !== r
    }) : t.nodeType ? i.grep(n, function(n) {
      return n === t !== r
    }) : "string" != typeof t ? i.grep(n, function(n) {
      return -1 < ii.call(t, n) !== r
    }) : i.filter(t, n, r)
  }
  function uu(n, t) {
    while ((n = n[t]) && 1 !== n.nodeType)
      ;
    return n
  }
  function ut(n) {
    return n
  }
  function fi(n) {
    throw n;
  }
  function fu(n, t, i, r) {
    var f;
    try {
      n && u(f = n.promise) ? f.call(n).done(t).fail(i) : n && u(f = n.then) ? f.call(n, t, i) : t.apply(void 0, [n].slice(r))
    } catch (n) {
      i.apply(void 0, [n])
    }
  }
  function oi() {
    f.removeEventListener("DOMContentLoaded", oi);
    n.removeEventListener("load", oi);
    i.ready()
  }
  function ce(n, t) {
    return t.toUpperCase()
  }
  function y(n) {
    return n.replace(se, "ms-").replace(he, ce)
  }
  function pt() {
    this.expando = i.expando + pt.uid++
  }
  function ou(n, t, i) {
    var u, r;
    if (void 0 === i && 1 === n.nodeType)
      if (u = "data-" + t.replace(ae, "-$&").toLowerCase(),
      "string" == typeof (i = n.getAttribute(u))) {
        try {
          i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : le.test(r) ? JSON.parse(r) : r)
        } catch (n) {}
        o.set(n, t, i)
      } else
        i = void 0;
    return i
  }
  function hu(n, t, r, u) {
    var s, h, c = 20, l = u ? function() {
      return u.cur()
    }
    : function() {
      return i.css(n, t, "")
    }
    , o = l(), e = r && r[3] || (i.cssNumber[t] ? "" : "px"), f = n.nodeType && (i.cssNumber[t] || "px" !== e && +o) && wt.exec(i.css(n, t));
    if (f && f[3] !== e) {
      for (o /= 2,
      e = e || f[3],
      f = +o || 1; c--; )
        i.style(n, t, f + e),
        (1 - h) * (1 - (h = l() / o || .5)) <= 0 && (c = 0),
        f /= h;
      f *= 2;
      i.style(n, t, f + e);
      r = r || []
    }
    return r && (f = +f || +o || 0,
    s = r[1] ? f + (r[1] + 1) * r[2] : +r[2],
    u && (u.unit = e,
    u.start = f,
    u.end = s)),
    s
  }
  function et(n, t) {
    for (var h, f, a, s, c, l, e, o = [], u = 0, v = n.length; u < v; u++)
      (f = n[u]).style && (h = f.style.display,
      t ? ("none" === h && (o[u] = r.get(f, "display") || null,
      o[u] || (f.style.display = "")),
      "" === f.style.display && kt(f) && (o[u] = (e = c = s = void 0,
      c = (a = f).ownerDocument,
      l = a.nodeName,
      (e = di[l]) || (s = c.body.appendChild(c.createElement(l)),
      e = i.css(s, "display"),
      s.parentNode.removeChild(s),
      "none" === e && (e = "block"),
      di[l] = e)))) : "none" !== h && (o[u] = "none",
      r.set(f, "display", h)));
    for (u = 0; u < v; u++)
      null != o[u] && (n[u].style.display = o[u]);
    return n
  }
  function s(n, t) {
    var r;
    return r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : [],
    void 0 === t || t && c(n, t) ? i.merge([n], r) : r
  }
  function gi(n, t) {
    for (var i = 0, u = n.length; i < u; i++)
      r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
  }
  function vu(n, t, r, u, f) {
    for (var e, o, p, a, w, v, c = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
      if ((e = n[l]) || 0 === e)
        if ("object" === it(e))
          i.merge(y, e.nodeType ? [e] : e);
        else if (au.test(e)) {
          for (o = o || c.appendChild(t.createElement("div")),
          p = (cu.exec(e) || ["", ""])[1].toLowerCase(),
          a = h[p] || h._default,
          o.innerHTML = a[1] + i.htmlPrefilter(e) + a[2],
          v = a[0]; v--; )
            o = o.lastChild;
          i.merge(y, o.childNodes);
          (o = c.firstChild).textContent = ""
        } else
          y.push(t.createTextNode(e));
    for (c.textContent = "",
    l = 0; e = y[l++]; )
      if (u && -1 < i.inArray(e, u))
        f && f.push(e);
      else if (w = ft(e),
      o = s(c.appendChild(e), "script"),
      w && gi(o),
      r)
        for (v = 0; e = o[v++]; )
          lu.test(e.type || "") && r.push(e);
    return c
  }
  function ot() {
    return !0
  }
  function st() {
    return !1
  }
  function we(n, t) {
    return n === function() {
      try {
        return f.activeElement
      } catch (n) {}
    }() == ("focus" === t)
  }
  function nr(n, t, r, u, f, e) {
    var o, s;
    if ("object" == typeof t) {
      for (s in "string" != typeof r && (u = u || r,
      r = void 0),
      t)
        nr(n, s, r, u, t[s], e);
      return n
    }
    if (null == u && null == f ? (f = r,
    u = r = void 0) : null == f && ("string" == typeof r ? (f = u,
    u = void 0) : (f = u,
    u = r,
    r = void 0)),
    !1 === f)
      f = st;
    else if (!f)
      return n;
    return 1 === e && (o = f,
    (f = function(n) {
      return i().off(n),
      o.apply(this, arguments)
    }
    ).guid = o.guid || (o.guid = i.guid++)),
    n.each(function() {
      i.event.add(this, t, f, u, r)
    })
  }
  function hi(n, t, u) {
    u ? (r.set(n, t, !1),
    i.event.add(n, t, {
      namespace: !1,
      handler: function(n) {
        var o, e, f = r.get(this, t);
        if (1 & n.isTrigger && this[t]) {
          if (f.length)
            (i.event.special[t] || {}).delegateType && n.stopPropagation();
          else if (f = b.call(arguments),
          r.set(this, t, f),
          o = u(this, t),
          this[t](),
          f !== (e = r.get(this, t)) || o ? r.set(this, t, !1) : e = {},
          f !== e)
            return n.stopImmediatePropagation(),
            n.preventDefault(),
            e.value
        } else
          f.length && (r.set(this, t, {
            value: i.event.trigger(i.extend(f[0], i.Event.prototype), f.slice(1), this)
          }),
          n.stopImmediatePropagation())
      }
    })) : void 0 === r.get(n, t) && i.event.add(n, t, ot)
  }
  function pu(n, t) {
    return c(n, "table") && c(11 !== t.nodeType ? t : t.firstChild, "tr") && i(n).children("tbody")[0] || n
  }
  function no(n) {
    return n.type = (null !== n.getAttribute("type")) + "/" + n.type,
    n
  }
  function to(n) {
    return "true/" === (n.type || "").slice(0, 5) ? n.type = n.type.slice(5) : n.removeAttribute("type"),
    n
  }
  function wu(n, t) {
    var u, c, f, s, h, l, a, e;
    if (1 === t.nodeType) {
      if (r.hasData(n) && (s = r.access(n),
      h = r.set(t, s),
      e = s.events))
        for (f in delete h.handle,
        h.events = {},
        e)
          for (u = 0,
          c = e[f].length; u < c; u++)
            i.event.add(t, f, e[f][u]);
      o.hasData(n) && (l = o.access(n),
      a = i.extend({}, l),
      o.set(t, a))
    }
  }
  function ht(n, t, f, o) {
    t = yr.apply([], t);
    var a, w, l, v, h, b, c = 0, y = n.length, d = y - 1, p = t[0], k = u(p);
    if (k || 1 < y && "string" == typeof p && !e.checkClone && de.test(p))
      return n.each(function(i) {
        var r = n.eq(i);
        k && (t[0] = p.call(this, i, r.html()));
        ht(r, t, f, o)
      });
    if (y && (w = (a = vu(t, n[0].ownerDocument, !1, n, o)).firstChild,
    1 === a.childNodes.length && (a = w),
    w || o)) {
      for (v = (l = i.map(s(a, "script"), no)).length; c < y; c++)
        h = a,
        c !== d && (h = i.clone(h, !0, !0),
        v && i.merge(l, s(h, "script"))),
        f.call(n[c], h, c);
      if (v)
        for (b = l[l.length - 1].ownerDocument,
        i.map(l, to),
        c = 0; c < v; c++)
          h = l[c],
          lu.test(h.type || "") && !r.access(h, "globalEval") && i.contains(b, h) && (h.src && "module" !== (h.type || "").toLowerCase() ? i._evalUrl && !h.noModule && i._evalUrl(h.src, {
            nonce: h.nonce || h.getAttribute("nonce")
          }) : br(h.textContent.replace(ge, ""), h, b))
    }
    return n
  }
  function bu(n, t, r) {
    for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++)
      r || 1 !== u.nodeType || i.cleanData(s(u)),
      u.parentNode && (r && ft(u) && gi(s(u, "script")),
      u.parentNode.removeChild(u));
    return n
  }
  function ni(n, t, r) {
    var o, s, h, f, u = n.style;
    return (r = r || ci(n)) && ("" !== (f = r.getPropertyValue(t) || r[t]) || ft(n) || (f = i.style(n, t)),
    !e.pixelBoxStyles() && tr.test(f) && io.test(t) && (o = u.width,
    s = u.minWidth,
    h = u.maxWidth,
    u.minWidth = u.maxWidth = u.width = f,
    f = r.width,
    u.width = o,
    u.minWidth = s,
    u.maxWidth = h)),
    void 0 !== f ? f + "" : f
  }
  function ku(n, t) {
    return {
      get: function() {
        if (!n())
          return (this.get = t).apply(this, arguments);
        delete this.get
      }
    }
  }
  function ir(n) {
    var t = i.cssProps[n] || nf[n];
    return t || (n in gu ? n : nf[n] = function(n) {
      for (var i = n[0].toUpperCase() + n.slice(1), t = du.length; t--; )
        if ((n = du[t] + i)in gu)
          return n
    }(n) || n)
  }
  function uf(n, t, i) {
    var r = wt.exec(t);
    return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t
  }
  function rr(n, t, r, u, f, e) {
    var o = "width" === t ? 1 : 0
      , h = 0
      , s = 0;
    if (r === (u ? "border" : "content"))
      return 0;
    for (; o < 4; o += 2)
      "margin" === r && (s += i.css(n, r + w[o], !0, f)),
      u ? ("content" === r && (s -= i.css(n, "padding" + w[o], !0, f)),
      "margin" !== r && (s -= i.css(n, "border" + w[o] + "Width", !0, f))) : (s += i.css(n, "padding" + w[o], !0, f),
      "padding" !== r ? s += i.css(n, "border" + w[o] + "Width", !0, f) : h += i.css(n, "border" + w[o] + "Width", !0, f));
    return !u && 0 <= e && (s += Math.max(0, Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - e - s - h - .5)) || 0),
    s
  }
  function ff(n, t, r) {
    var f = ci(n)
      , o = (!e.boxSizingReliable() || r) && "border-box" === i.css(n, "boxSizing", !1, f)
      , s = o
      , u = ni(n, t, f)
      , h = "offset" + t[0].toUpperCase() + t.slice(1);
    if (tr.test(u)) {
      if (!r)
        return u;
      u = "auto"
    }
    return (!e.boxSizingReliable() && o || "auto" === u || !parseFloat(u) && "inline" === i.css(n, "display", !1, f)) && n.getClientRects().length && (o = "border-box" === i.css(n, "boxSizing", !1, f),
    (s = h in n) && (u = n[h])),
    (u = parseFloat(u) || 0) + rr(n, t, r || (o ? "border" : "content"), s, f, u) + "px"
  }
  function a(n, t, i, r, u) {
    return new a.prototype.init(n,t,i,r,u)
  }
  function ur() {
    li && (!1 === f.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ur) : n.setTimeout(ur, i.fx.interval),
    i.fx.tick())
  }
  function hf() {
    return n.setTimeout(function() {
      ct = void 0
    }),
    ct = Date.now()
  }
  function ai(n, t) {
    var u, r = 0, i = {
      height: n
    };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (u = w[r])] = i["padding" + u] = n;
    return t && (i.opacity = i.width = n),
    i
  }
  function cf(n, t, i) {
    for (var u, f = (v.tweeners[t] || []).concat(v.tweeners["*"]), r = 0, e = f.length; r < e; r++)
      if (u = f[r].call(i, t, n))
        return u
  }
  function v(n, t, r) {
    var o, s, h = 0, a = v.prefilters.length, e = i.Deferred().always(function() {
      delete l.elem
    }), l = function() {
      if (s)
        return !1;
      for (var o = ct || hf(), t = Math.max(0, f.startTime + f.duration - o), i = 1 - (t / f.duration || 0), r = 0, u = f.tweens.length; r < u; r++)
        f.tweens[r].run(i);
      return e.notifyWith(n, [f, i, t]),
      i < 1 && u ? t : (u || e.notifyWith(n, [f, 1, 0]),
      e.resolveWith(n, [f]),
      !1)
    }, f = e.promise({
      elem: n,
      props: i.extend({}, t),
      opts: i.extend(!0, {
        specialEasing: {},
        easing: i.easing._default
      }, r),
      originalProperties: t,
      originalOptions: r,
      startTime: ct || hf(),
      duration: r.duration,
      tweens: [],
      createTween: function(t, r) {
        var u = i.Tween(n, f.opts, t, r, f.opts.specialEasing[t] || f.opts.easing);
        return f.tweens.push(u),
        u
      },
      stop: function(t) {
        var i = 0
          , r = t ? f.tweens.length : 0;
        if (s)
          return this;
        for (s = !0; i < r; i++)
          f.tweens[i].run(1);
        return t ? (e.notifyWith(n, [f, 1, 0]),
        e.resolveWith(n, [f, t])) : e.rejectWith(n, [f, t]),
        this
      }
    }), c = f.props;
    for (!function(n, t) {
      var r, f, e, u, o;
      for (r in n)
        if (e = t[f = y(r)],
        u = n[r],
        Array.isArray(u) && (e = u[1],
        u = n[r] = u[0]),
        r !== f && (n[f] = u,
        delete n[r]),
        (o = i.cssHooks[f]) && "expand"in o)
          for (r in u = o.expand(u),
          delete n[f],
          u)
            r in n || (n[r] = u[r],
            t[r] = e);
        else
          t[f] = e
    }(c, f.opts.specialEasing); h < a; h++)
      if (o = v.prefilters[h].call(f, n, c, f.opts))
        return u(o.stop) && (i._queueHooks(f.elem, f.opts.queue).stop = o.stop.bind(o)),
        o;
    return i.map(c, cf, f),
    u(f.opts.start) && f.opts.start.call(n, f),
    f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always),
    i.fx.timer(i.extend(l, {
      elem: n,
      anim: f,
      queue: f.opts.queue
    })),
    f
  }
  function g(n) {
    return (n.match(l) || []).join(" ")
  }
  function nt(n) {
    return n.getAttribute && n.getAttribute("class") || ""
  }
  function fr(n) {
    return Array.isArray(n) ? n : "string" == typeof n && n.match(l) || []
  }
  function hr(n, t, r, u) {
    var f;
    if (Array.isArray(t))
      i.each(t, function(t, i) {
        r || fo.test(n) ? u(n, i) : hr(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u)
      });
    else if (r || "object" !== it(t))
      u(n, t);
    else
      for (f in t)
        hr(n + "[" + f + "]", t[f], r, u)
  }
  function df(n) {
    return function(t, i) {
      "string" != typeof t && (i = t,
      t = "*");
      var r, f = 0, e = t.toLowerCase().match(l) || [];
      if (u(i))
        while (r = e[f++])
          "+" === r[0] ? (r = r.slice(1) || "*",
          (n[r] = n[r] || []).unshift(i)) : (n[r] = n[r] || []).push(i)
    }
  }
  function gf(n, t, r, u) {
    function e(s) {
      var h;
      return f[s] = !0,
      i.each(n[s] || [], function(n, i) {
        var s = i(t, r, u);
        return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s),
        e(s),
        !1)
      }),
      h
    }
    var f = {}
      , o = n === cr;
    return e(t.dataTypes[0]) || !f["*"] && e("*")
  }
  function ar(n, t) {
    var r, u, f = i.ajaxSettings.flatOptions || {};
    for (r in t)
      void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
    return u && i.extend(!0, n, u),
    n
  }
  var d = [], f = n.document, ue = Object.getPrototypeOf, b = d.slice, yr = d.concat, yi = d.push, ii = d.indexOf, ri = {}, pr = ri.toString, ui = ri.hasOwnProperty, wr = ui.toString, fe = wr.call(Object), e = {}, u = function(n) {
    return "function" == typeof n && "number" != typeof n.nodeType
  }, tt = function(n) {
    return null != n && n === n.window
  }, ee = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  }, kr = "3.4.1", i = function(n, t) {
    return new i.fn.init(n,t)
  }, oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, k, wi, nu, tu, iu, ru, l, eu, ei, yt, kt, ki, di, gt, si, au, ct, li, lt, ef, of, sf, lf, at, af, vf, yf, er, or, ne, vt, te, vr, vi, ie, re;
  i.fn = i.prototype = {
    jquery: kr,
    constructor: i,
    length: 0,
    toArray: function() {
      return b.call(this)
    },
    get: function(n) {
      return null == n ? b.call(this) : n < 0 ? this[n + this.length] : this[n]
    },
    pushStack: function(n) {
      var t = i.merge(this.constructor(), n);
      return t.prevObject = this,
      t
    },
    each: function(n) {
      return i.each(this, n)
    },
    map: function(n) {
      return this.pushStack(i.map(this, function(t, i) {
        return n.call(t, i, t)
      }))
    },
    slice: function() {
      return this.pushStack(b.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(n) {
      var i = this.length
        , t = +n + (n < 0 ? i : 0);
      return this.pushStack(0 <= t && t < i ? [this[t]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor()
    },
    push: yi,
    sort: d.sort,
    splice: d.splice
  };
  i.extend = i.fn.extend = function() {
    var s, f, e, t, o, c, n = arguments[0] || {}, r = 1, l = arguments.length, h = !1;
    for ("boolean" == typeof n && (h = n,
    n = arguments[r] || {},
    r++),
    "object" == typeof n || u(n) || (n = {}),
    r === l && (n = this,
    r--); r < l; r++)
      if (null != (s = arguments[r]))
        for (f in s)
          t = s[f],
          "__proto__" !== f && n !== t && (h && t && (i.isPlainObject(t) || (o = Array.isArray(t))) ? (e = n[f],
          c = o && !Array.isArray(e) ? [] : o || i.isPlainObject(e) ? e : {},
          o = !1,
          n[f] = i.extend(h, c, t)) : void 0 !== t && (n[f] = t));
    return n
  }
  ;
  i.extend({
    expando: "jQuery" + (kr + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(n) {
      throw new Error(n);
    },
    noop: function() {},
    isPlainObject: function(n) {
      var t, i;
      return !(!n || "[object Object]" !== pr.call(n)) && (!(t = ue(n)) || "function" == typeof (i = ui.call(t, "constructor") && t.constructor) && wr.call(i) === fe)
    },
    isEmptyObject: function(n) {
      for (var t in n)
        return !1;
      return !0
    },
    globalEval: function(n, t) {
      br(n, {
        nonce: t && t.nonce
      })
    },
    each: function(n, t) {
      var r, i = 0;
      if (pi(n)) {
        for (r = n.length; i < r; i++)
          if (!1 === t.call(n[i], i, n[i]))
            break
      } else
        for (i in n)
          if (!1 === t.call(n[i], i, n[i]))
            break;
      return n
    },
    trim: function(n) {
      return null == n ? "" : (n + "").replace(oe, "")
    },
    makeArray: function(n, t) {
      var r = t || [];
      return null != n && (pi(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : yi.call(r, n)),
      r
    },
    inArray: function(n, t, i) {
      return null == t ? -1 : ii.call(t, n, i)
    },
    merge: function(n, t) {
      for (var u = +t.length, i = 0, r = n.length; i < u; i++)
        n[r++] = t[i];
      return n.length = r,
      n
    },
    grep: function(n, t, i) {
      for (var u = [], r = 0, f = n.length, e = !i; r < f; r++)
        !t(n[r], r) !== e && u.push(n[r]);
      return u
    },
    map: function(n, t, i) {
      var e, u, r = 0, f = [];
      if (pi(n))
        for (e = n.length; r < e; r++)
          null != (u = t(n[r], r, i)) && f.push(u);
      else
        for (r in n)
          null != (u = t(n[r], r, i)) && f.push(u);
      return yr.apply([], f)
    },
    guid: 1,
    support: e
  });
  "function" == typeof Symbol && (i.fn[Symbol.iterator] = d[Symbol.iterator]);
  i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) {
    ri["[object " + t + "]"] = t.toLowerCase()
  });
  k = function(n) {
    function u(n, t, r, u) {
      var s, p, l, v, w, d, g, y = t && t.ownerDocument, a = t ? t.nodeType : 9;
      if (r = r || [],
      "string" != typeof n || !n || 1 !== a && 9 !== a && 11 !== a)
        return r;
      if (!u && ((t ? t.ownerDocument || t : c) !== i && b(t),
      t = t || i,
      h)) {
        if (11 !== a && (w = ar.exec(n)))
          if (s = w[1]) {
            if (9 === a) {
              if (!(l = t.getElementById(s)))
                return r;
              if (l.id === s)
                return r.push(l),
                r
            } else if (y && (l = y.getElementById(s)) && et(t, l) && l.id === s)
              return r.push(l),
              r
          } else {
            if (w[2])
              return k.apply(r, t.getElementsByTagName(n)),
              r;
            if ((s = w[3]) && e.getElementsByClassName && t.getElementsByClassName)
              return k.apply(r, t.getElementsByClassName(s)),
              r
          }
        if (e.qsa && !lt[n + " "] && (!o || !o.test(n)) && (1 !== a || "object" !== t.nodeName.toLowerCase())) {
          if (g = n,
          y = t,
          1 === a && er.test(n)) {
            for ((v = t.getAttribute("id")) ? v = v.replace(yi, pi) : t.setAttribute("id", v = f),
            p = (d = ft(n)).length; p--; )
              d[p] = "#" + v + " " + pt(d[p]);
            g = d.join(",");
            y = ti.test(n) && ri(t.parentNode) || t
          }
          try {
            return k.apply(r, y.querySelectorAll(g)),
            r
          } catch (t) {
            lt(n, !0)
          } finally {
            v === f && t.removeAttribute("id")
          }
        }
      }
      return si(n.replace(at, "$1"), t, r, u)
    }
    function yt() {
      var n = [];
      return function i(r, u) {
        return n.push(r + " ") > t.cacheLength && delete i[n.shift()],
        i[r + " "] = u
      }
    }
    function l(n) {
      return n[f] = !0,
      n
    }
    function a(n) {
      var t = i.createElement("fieldset");
      try {
        return !!n(t)
      } catch (n) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t);
        t = null
      }
    }
    function ii(n, i) {
      for (var r = n.split("|"), u = r.length; u--; )
        t.attrHandle[r[u]] = i
    }
    function bi(n, t) {
      var i = t && n
        , r = i && 1 === n.nodeType && 1 === t.nodeType && n.sourceIndex - t.sourceIndex;
      if (r)
        return r;
      if (i)
        while (i = i.nextSibling)
          if (i === t)
            return -1;
      return n ? 1 : -1
    }
    function yr(n) {
      return function(t) {
        return "input" === t.nodeName.toLowerCase() && t.type === n
      }
    }
    function pr(n) {
      return function(t) {
        var i = t.nodeName.toLowerCase();
        return ("input" === i || "button" === i) && t.type === n
      }
    }
    function ki(n) {
      return function(t) {
        return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === n : t.disabled === n : t.isDisabled === n || t.isDisabled !== !n && vr(t) === n : t.disabled === n : "label"in t && t.disabled === n
      }
    }
    function it(n) {
      return l(function(t) {
        return t = +t,
        l(function(i, r) {
          for (var u, f = n([], i.length, t), e = f.length; e--; )
            i[u = f[e]] && (i[u] = !(r[u] = i[u]))
        })
      })
    }
    function ri(n) {
      return n && "undefined" != typeof n.getElementsByTagName && n
    }
    function di() {}
    function pt(n) {
      for (var t = 0, r = n.length, i = ""; t < r; t++)
        i += n[t].value;
      return i
    }
    function wt(n, t, i) {
      var r = t.dir
        , u = t.next
        , e = u || r
        , o = i && "parentNode" === e
        , s = gi++;
      return t.first ? function(t, i, u) {
        while (t = t[r])
          if (1 === t.nodeType || o)
            return n(t, i, u);
        return !1
      }
      : function(t, i, h) {
        var c, l, a, y = [v, s];
        if (h) {
          while (t = t[r])
            if ((1 === t.nodeType || o) && n(t, i, h))
              return !0
        } else
          while (t = t[r])
            if (1 === t.nodeType || o)
              if (l = (a = t[f] || (t[f] = {}))[t.uniqueID] || (a[t.uniqueID] = {}),
              u && u === t.nodeName.toLowerCase())
                t = t[r] || t;
              else {
                if ((c = l[e]) && c[0] === v && c[1] === s)
                  return y[2] = c[2];
                if ((l[e] = y)[2] = n(t, i, h))
                  return !0
              }
        return !1
      }
    }
    function ui(n) {
      return 1 < n.length ? function(t, i, r) {
        for (var u = n.length; u--; )
          if (!n[u](t, i, r))
            return !1;
        return !0
      }
      : n[0]
    }
    function bt(n, t, i, r, u) {
      for (var e, o = [], f = 0, s = n.length, h = null != t; f < s; f++)
        (e = n[f]) && (i && !i(e, r, u) || (o.push(e),
        h && t.push(f)));
      return o
    }
    function fi(n, t, i, r, e, o) {
      return r && !r[f] && (r = fi(r)),
      e && !e[f] && (e = fi(e, o)),
      l(function(f, o, s, h) {
        var a, l, v, w = [], p = [], b = o.length, d = f || function(n, t, i) {
          for (var r = 0, f = t.length; r < f; r++)
            u(n, t[r], i);
          return i
        }(t || "*", s.nodeType ? [s] : s, []), y = !n || !f && t ? d : bt(d, w, n, s, h), c = i ? e || (f ? n : b || r) ? [] : o : y;
        if (i && i(y, c, s, h),
        r)
          for (a = bt(c, p),
          r(a, [], s, h),
          l = a.length; l--; )
            (v = a[l]) && (c[p[l]] = !(y[p[l]] = v));
        if (f) {
          if (e || n) {
            if (e) {
              for (a = [],
              l = c.length; l--; )
                (v = c[l]) && a.push(y[l] = v);
              e(null, c = [], a, h)
            }
            for (l = c.length; l--; )
              (v = c[l]) && -1 < (a = e ? nt(f, v) : w[l]) && (f[a] = !(o[a] = v))
          }
        } else
          c = bt(c === o ? c.splice(b, c.length) : c),
          e ? e(null, o, c, h) : k.apply(o, c)
      })
    }
    function ei(n) {
      for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = wt(function(n) {
        return n === o
      }, c, !0), a = wt(function(n) {
        return -1 < nt(o, n)
      }, c, !0), e = [function(n, t, i) {
        var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
        return o = null,
        r
      }
      ]; i < s; i++)
        if (u = t.relative[n[i].type])
          e = [wt(ui(e), u)];
        else {
          if ((u = t.filter[n[i].type].apply(null, n[i].matches))[f]) {
            for (r = ++i; r < s; r++)
              if (t.relative[n[r].type])
                break;
            return fi(1 < i && ui(e), 1 < i && pt(n.slice(0, i - 1).concat({
              value: " " === n[i - 2].type ? "*" : ""
            })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < s && ei(n = n.slice(r)), r < s && pt(n))
          }
          e.push(u)
        }
      return ui(e)
    }
    var rt, e, t, st, oi, ft, kt, si, ht, w, ut, b, i, s, h, o, d, ct, et, f = "sizzle" + 1 * new Date, c = n.document, v = 0, gi = 0, hi = yt(), ci = yt(), li = yt(), lt = yt(), dt = function(n, t) {
      return n === t && (ut = !0),
      0
    }, nr = {}.hasOwnProperty, g = [], tr = g.pop, ir = g.push, k = g.push, ai = g.slice, nt = function(n, t) {
      for (var i = 0, r = n.length; i < r; i++)
        if (n[i] === t)
          return i;
      return -1
    }, gt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", r = "[\\x20\\t\\r\\n\\f]", tt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", vi = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]", ni = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + vi + ")*)|.*)\\)|)", rr = new RegExp(r + "+","g"), at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$","g"), ur = new RegExp("^" + r + "*," + r + "*"), fr = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"), er = new RegExp(r + "|>"), or = new RegExp(ni), sr = new RegExp("^" + tt + "$"), vt = {
      ID: new RegExp("^#(" + tt + ")"),
      CLASS: new RegExp("^\\.(" + tt + ")"),
      TAG: new RegExp("^(" + tt + "|[*])"),
      ATTR: new RegExp("^" + vi),
      PSEUDO: new RegExp("^" + ni),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)","i"),
      bool: new RegExp("^(?:" + gt + ")$","i"),
      needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)","i")
    }, hr = /HTML$/i, cr = /^(?:input|select|textarea|button)$/i, lr = /^h\d$/i, ot = /^[^{]+\{\s*\[native \w/, ar = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ti = /[+~]/, y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)","ig"), p = function(n, t, i) {
      var r = "0x" + t - 65536;
      return r != r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
    }, yi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, pi = function(n, t) {
      return t ? "\0" === n ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
    }, wi = function() {
      b()
    }, vr = wt(function(n) {
      return !0 === n.disabled && "fieldset" === n.nodeName.toLowerCase()
    }, {
      dir: "parentNode",
      next: "legend"
    });
    try {
      k.apply(g = ai.call(c.childNodes), c.childNodes);
      g[c.childNodes.length].nodeType
    } catch (rt) {
      k = {
        apply: g.length ? function(n, t) {
          ir.apply(n, ai.call(t))
        }
        : function(n, t) {
          for (var i = n.length, r = 0; n[i++] = t[r++]; )
            ;
          n.length = i - 1
        }
      }
    }
    for (rt in e = u.support = {},
    oi = u.isXML = function(n) {
      var i = n.namespaceURI
        , t = (n.ownerDocument || n).documentElement;
      return !hr.test(i || t && t.nodeName || "HTML")
    }
    ,
    b = u.setDocument = function(n) {
      var v, u, l = n ? n.ownerDocument || n : c;
      return l !== i && 9 === l.nodeType && l.documentElement && (s = (i = l).documentElement,
      h = !oi(i),
      c !== i && (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", wi, !1) : u.attachEvent && u.attachEvent("onunload", wi)),
      e.attributes = a(function(n) {
        return n.className = "i",
        !n.getAttribute("className")
      }),
      e.getElementsByTagName = a(function(n) {
        return n.appendChild(i.createComment("")),
        !n.getElementsByTagName("*").length
      }),
      e.getElementsByClassName = ot.test(i.getElementsByClassName),
      e.getById = a(function(n) {
        return s.appendChild(n).id = f,
        !i.getElementsByName || !i.getElementsByName(f).length
      }),
      e.getById ? (t.filter.ID = function(n) {
        var t = n.replace(y, p);
        return function(n) {
          return n.getAttribute("id") === t
        }
      }
      ,
      t.find.ID = function(n, t) {
        if ("undefined" != typeof t.getElementById && h) {
          var i = t.getElementById(n);
          return i ? [i] : []
        }
      }
      ) : (t.filter.ID = function(n) {
        var t = n.replace(y, p);
        return function(n) {
          var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
          return i && i.value === t
        }
      }
      ,
      t.find.ID = function(n, t) {
        if ("undefined" != typeof t.getElementById && h) {
          var r, u, f, i = t.getElementById(n);
          if (i) {
            if ((r = i.getAttributeNode("id")) && r.value === n)
              return [i];
            for (f = t.getElementsByName(n),
            u = 0; i = f[u++]; )
              if ((r = i.getAttributeNode("id")) && r.value === n)
                return [i]
          }
          return []
        }
      }
      ),
      t.find.TAG = e.getElementsByTagName ? function(n, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : e.qsa ? t.querySelectorAll(n) : void 0
      }
      : function(n, t) {
        var i, r = [], f = 0, u = t.getElementsByTagName(n);
        if ("*" === n) {
          while (i = u[f++])
            1 === i.nodeType && r.push(i);
          return r
        }
        return u
      }
      ,
      t.find.CLASS = e.getElementsByClassName && function(n, t) {
        if ("undefined" != typeof t.getElementsByClassName && h)
          return t.getElementsByClassName(n)
      }
      ,
      d = [],
      o = [],
      (e.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
        s.appendChild(n).innerHTML = "<a id='" + f + "'><\/a><select id='" + f + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
        n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
        n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + gt + ")");
        n.querySelectorAll("[id~=" + f + "-]").length || o.push("~=");
        n.querySelectorAll(":checked").length || o.push(":checked");
        n.querySelectorAll("a#" + f + "+*").length || o.push(".#.+[+~]")
      }),
      a(function(n) {
        n.innerHTML = "<a href='' disabled='disabled'><\/a><select disabled='disabled'><option/><\/select>";
        var t = i.createElement("input");
        t.setAttribute("type", "hidden");
        n.appendChild(t).setAttribute("name", "D");
        n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
        2 !== n.querySelectorAll(":enabled").length && o.push(":enabled", ":disabled");
        s.appendChild(n).disabled = !0;
        2 !== n.querySelectorAll(":disabled").length && o.push(":enabled", ":disabled");
        n.querySelectorAll("*,:x");
        o.push(",.*:")
      })),
      (e.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
        e.disconnectedMatch = ct.call(n, "*");
        ct.call(n, "[s!='']:x");
        d.push("!=", ni)
      }),
      o = o.length && new RegExp(o.join("|")),
      d = d.length && new RegExp(d.join("|")),
      v = ot.test(s.compareDocumentPosition),
      et = v || ot.test(s.contains) ? function(n, t) {
        var r = 9 === n.nodeType ? n.documentElement : n
          , i = t && t.parentNode;
        return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
      }
      : function(n, t) {
        if (t)
          while (t = t.parentNode)
            if (t === n)
              return !0;
        return !1
      }
      ,
      dt = v ? function(n, t) {
        if (n === t)
          return ut = !0,
          0;
        var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
        return r || (1 & (r = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1) || !e.sortDetached && t.compareDocumentPosition(n) === r ? n === i || n.ownerDocument === c && et(c, n) ? -1 : t === i || t.ownerDocument === c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & r ? -1 : 1)
      }
      : function(n, t) {
        if (n === t)
          return ut = !0,
          0;
        var r, u = 0, o = n.parentNode, s = t.parentNode, f = [n], e = [t];
        if (!o || !s)
          return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
        if (o === s)
          return bi(n, t);
        for (r = n; r = r.parentNode; )
          f.unshift(r);
        for (r = t; r = r.parentNode; )
          e.unshift(r);
        while (f[u] === e[u])
          u++;
        return u ? bi(f[u], e[u]) : f[u] === c ? -1 : e[u] === c ? 1 : 0
      }
      ),
      i
    }
    ,
    u.matches = function(n, t) {
      return u(n, null, null, t)
    }
    ,
    u.matchesSelector = function(n, t) {
      if ((n.ownerDocument || n) !== i && b(n),
      e.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t)))
        try {
          var r = ct.call(n, t);
          if (r || e.disconnectedMatch || n.document && 11 !== n.document.nodeType)
            return r
        } catch (n) {
          lt(t, !0)
        }
      return 0 < u(t, i, null, [n]).length
    }
    ,
    u.contains = function(n, t) {
      return (n.ownerDocument || n) !== i && b(n),
      et(n, t)
    }
    ,
    u.attr = function(n, r) {
      (n.ownerDocument || n) !== i && b(n);
      var f = t.attrHandle[r.toLowerCase()]
        , u = f && nr.call(t.attrHandle, r.toLowerCase()) ? f(n, r, !h) : void 0;
      return void 0 !== u ? u : e.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
    }
    ,
    u.escape = function(n) {
      return (n + "").replace(yi, pi)
    }
    ,
    u.error = function(n) {
      throw new Error("Syntax error, unrecognized expression: " + n);
    }
    ,
    u.uniqueSort = function(n) {
      var r, u = [], t = 0, i = 0;
      if (ut = !e.detectDuplicates,
      w = !e.sortStable && n.slice(0),
      n.sort(dt),
      ut) {
        while (r = n[i++])
          r === n[i] && (t = u.push(i));
        while (t--)
          n.splice(u[t], 1)
      }
      return w = null,
      n
    }
    ,
    st = u.getText = function(n) {
      var r, i = "", u = 0, t = n.nodeType;
      if (t) {
        if (1 === t || 9 === t || 11 === t) {
          if ("string" == typeof n.textContent)
            return n.textContent;
          for (n = n.firstChild; n; n = n.nextSibling)
            i += st(n)
        } else if (3 === t || 4 === t)
          return n.nodeValue
      } else
        while (r = n[u++])
          i += st(r);
      return i
    }
    ,
    (t = u.selectors = {
      cacheLength: 50,
      createPseudo: l,
      match: vt,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(n) {
          return n[1] = n[1].replace(y, p),
          n[3] = (n[3] || n[4] || n[5] || "").replace(y, p),
          "~=" === n[2] && (n[3] = " " + n[3] + " "),
          n.slice(0, 4)
        },
        CHILD: function(n) {
          return n[1] = n[1].toLowerCase(),
          "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]),
          n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])),
          n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]),
          n
        },
        PSEUDO: function(n) {
          var i, t = !n[6] && n[2];
          return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && or.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i),
          n[2] = t.slice(0, i)),
          n.slice(0, 3))
        }
      },
      filter: {
        TAG: function(n) {
          var t = n.replace(y, p).toLowerCase();
          return "*" === n ? function() {
            return !0
          }
          : function(n) {
            return n.nodeName && n.nodeName.toLowerCase() === t
          }
        },
        CLASS: function(n) {
          var t = hi[n + " "];
          return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) {
            return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "")
          })
        },
        ATTR: function(n, t, i) {
          return function(r) {
            var f = u.attr(r, n);
            return null == f ? "!=" === t : !t || (f += "",
            "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && -1 < f.indexOf(i) : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? -1 < (" " + f.replace(rr, " ") + " ").indexOf(i) : "|=" === t && (f === i || f.slice(0, i.length + 1) === i + "-"))
          }
        },
        CHILD: function(n, t, i, r, u) {
          var s = "nth" !== n.slice(0, 3)
            , o = "last" !== n.slice(-4)
            , e = "of-type" === t;
          return 1 === r && 0 === u ? function(n) {
            return !!n.parentNode
          }
          : function(t, i, h) {
            var p, d, y, c, a, w, b = s !== o ? "nextSibling" : "previousSibling", k = t.parentNode, nt = e && t.nodeName.toLowerCase(), g = !h && !e, l = !1;
            if (k) {
              if (s) {
                while (b) {
                  for (c = t; c = c[b]; )
                    if (e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType)
                      return !1;
                  w = b = "only" === n && !w && "nextSibling"
                }
                return !0
              }
              if (w = [o ? k.firstChild : k.lastChild],
              o && g) {
                for (l = (a = (p = (d = (y = (c = k)[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]) && p[2],
                c = a && k.childNodes[a]; c = ++a && c && c[b] || (l = a = 0) || w.pop(); )
                  if (1 === c.nodeType && ++l && c === t) {
                    d[n] = [v, a, l];
                    break
                  }
              } else if (g && (l = a = (p = (d = (y = (c = t)[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]),
              !1 === l)
                while (c = ++a && c && c[b] || (l = a = 0) || w.pop())
                  if ((e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) && ++l && (g && ((d = (y = c[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] = [v, l]),
                  c === t))
                    break;
              return (l -= u) === r || l % r == 0 && 0 <= l / r
            }
          }
        },
        PSEUDO: function(n, i) {
          var e, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
          return r[f] ? r(i) : 1 < r.length ? (e = [n, n, "", i],
          t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) {
            for (var e, u = r(n, i), f = u.length; f--; )
              n[e = nt(n, u[f])] = !(t[e] = u[f])
          }) : function(n) {
            return r(n, 0, e)
          }
          ) : r
        }
      },
      pseudos: {
        not: l(function(n) {
          var t = []
            , r = []
            , i = kt(n.replace(at, "$1"));
          return i[f] ? l(function(n, t, r, u) {
            for (var e, o = i(n, null, u, []), f = n.length; f--; )
              (e = o[f]) && (n[f] = !(t[f] = e))
          }) : function(n, u, f) {
            return t[0] = n,
            i(t, null, f, r),
            t[0] = null,
            !r.pop()
          }
        }),
        has: l(function(n) {
          return function(t) {
            return 0 < u(n, t).length
          }
        }),
        contains: l(function(n) {
          return n = n.replace(y, p),
          function(t) {
            return -1 < (t.textContent || st(t)).indexOf(n)
          }
        }),
        lang: l(function(n) {
          return sr.test(n || "") || u.error("unsupported lang: " + n),
          n = n.replace(y, p).toLowerCase(),
          function(t) {
            var i;
            do
              if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                return (i = i.toLowerCase()) === n || 0 === i.indexOf(n + "-");
            while ((t = t.parentNode) && 1 === t.nodeType);
            return !1
          }
        }),
        target: function(t) {
          var i = n.location && n.location.hash;
          return i && i.slice(1) === t.id
        },
        root: function(n) {
          return n === s
        },
        focus: function(n) {
          return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
        },
        enabled: ki(!1),
        disabled: ki(!0),
        checked: function(n) {
          var t = n.nodeName.toLowerCase();
          return "input" === t && !!n.checked || "option" === t && !!n.selected
        },
        selected: function(n) {
          return n.parentNode && n.parentNode.selectedIndex,
          !0 === n.selected
        },
        empty: function(n) {
          for (n = n.firstChild; n; n = n.nextSibling)
            if (n.nodeType < 6)
              return !1;
          return !0
        },
        parent: function(n) {
          return !t.pseudos.empty(n)
        },
        header: function(n) {
          return lr.test(n.nodeName)
        },
        input: function(n) {
          return cr.test(n.nodeName)
        },
        button: function(n) {
          var t = n.nodeName.toLowerCase();
          return "input" === t && "button" === n.type || "button" === t
        },
        text: function(n) {
          var t;
          return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
        },
        first: it(function() {
          return [0]
        }),
        last: it(function(n, t) {
          return [t - 1]
        }),
        eq: it(function(n, t, i) {
          return [i < 0 ? i + t : i]
        }),
        even: it(function(n, t) {
          for (var i = 0; i < t; i += 2)
            n.push(i);
          return n
        }),
        odd: it(function(n, t) {
          for (var i = 1; i < t; i += 2)
            n.push(i);
          return n
        }),
        lt: it(function(n, t, i) {
          for (var r = i < 0 ? i + t : t < i ? t : i; 0 <= --r; )
            n.push(r);
          return n
        }),
        gt: it(function(n, t, i) {
          for (var r = i < 0 ? i + t : i; ++r < t; )
            n.push(r);
          return n
        })
      }
    }).pseudos.nth = t.pseudos.eq,
    {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    })
      t.pseudos[rt] = yr(rt);
    for (rt in {
      submit: !0,
      reset: !0
    })
      t.pseudos[rt] = pr(rt);
    return di.prototype = t.filters = t.pseudos,
    t.setFilters = new di,
    ft = u.tokenize = function(n, i) {
      var e, f, s, o, r, h, c, l = ci[n + " "];
      if (l)
        return i ? 0 : l.slice(0);
      for (r = n,
      h = [],
      c = t.preFilter; r; ) {
        for (o in e && !(f = ur.exec(r)) || (f && (r = r.slice(f[0].length) || r),
        h.push(s = [])),
        e = !1,
        (f = fr.exec(r)) && (e = f.shift(),
        s.push({
          value: e,
          type: f[0].replace(at, " ")
        }),
        r = r.slice(e.length)),
        t.filter)
          (f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(),
          s.push({
            value: e,
            type: o,
            matches: f
          }),
          r = r.slice(e.length));
        if (!e)
          break
      }
      return i ? r.length : r ? u.error(n) : ci(n, h).slice(0)
    }
    ,
    kt = u.compile = function(n, r) {
      var s, c, a, o, y, p, w = [], d = [], e = li[n + " "];
      if (!e) {
        for (r || (r = ft(n)),
        s = r.length; s--; )
          (e = ei(r[s]))[f] ? w.push(e) : d.push(e);
        (e = li(n, (c = d,
        o = 0 < (a = w).length,
        y = 0 < c.length,
        p = function(n, r, f, e, s) {
          var l, nt, d, g = 0, p = "0", tt = n && [], w = [], it = ht, rt = n || y && t.find.TAG("*", s), ut = v += null == it ? 1 : Math.random() || .1, ft = rt.length;
          for (s && (ht = r === i || r || s); p !== ft && null != (l = rt[p]); p++) {
            if (y && l) {
              for (nt = 0,
              r || l.ownerDocument === i || (b(l),
              f = !h); d = c[nt++]; )
                if (d(l, r || i, f)) {
                  e.push(l);
                  break
                }
              s && (v = ut)
            }
            o && ((l = !d && l) && g--,
            n && tt.push(l))
          }
          if (g += p,
          o && p !== g) {
            for (nt = 0; d = a[nt++]; )
              d(tt, w, r, f);
            if (n) {
              if (0 < g)
                while (p--)
                  tt[p] || w[p] || (w[p] = tr.call(e));
              w = bt(w)
            }
            k.apply(e, w);
            s && !n && 0 < w.length && 1 < g + a.length && u.uniqueSort(e)
          }
          return s && (v = ut,
          ht = it),
          tt
        }
        ,
        o ? l(p) : p))).selector = n
      }
      return e
    }
    ,
    si = u.select = function(n, i, r, u) {
      var o, f, e, l, a, c = "function" == typeof n && n, s = !u && ft(n = c.selector || n);
      if (r = r || [],
      1 === s.length) {
        if (2 < (f = s[0] = s[0].slice(0)).length && "ID" === (e = f[0]).type && 9 === i.nodeType && h && t.relative[f[1].type]) {
          if (!(i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0]))
            return r;
          c && (i = i.parentNode);
          n = n.slice(f.shift().value.length)
        }
        for (o = vt.needsContext.test(n) ? 0 : f.length; o--; ) {
          if (e = f[o],
          t.relative[l = e.type])
            break;
          if ((a = t.find[l]) && (u = a(e.matches[0].replace(y, p), ti.test(f[0].type) && ri(i.parentNode) || i))) {
            if (f.splice(o, 1),
            !(n = u.length && pt(f)))
              return k.apply(r, u),
              r;
            break
          }
        }
      }
      return (c || kt(n, s))(u, i, !h, r, !i || ti.test(n) && ri(i.parentNode) || i),
      r
    }
    ,
    e.sortStable = f.split("").sort(dt).join("") === f,
    e.detectDuplicates = !!ut,
    b(),
    e.sortDetached = a(function(n) {
      return 1 & n.compareDocumentPosition(i.createElement("fieldset"))
    }),
    a(function(n) {
      return n.innerHTML = "<a href='#'><\/a>",
      "#" === n.firstChild.getAttribute("href")
    }) || ii("type|href|height|width", function(n, t, i) {
      if (!i)
        return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }),
    e.attributes && a(function(n) {
      return n.innerHTML = "<input/>",
      n.firstChild.setAttribute("value", ""),
      "" === n.firstChild.getAttribute("value")
    }) || ii("value", function(n, t, i) {
      if (!i && "input" === n.nodeName.toLowerCase())
        return n.defaultValue
    }),
    a(function(n) {
      return null == n.getAttribute("disabled")
    }) || ii(gt, function(n, t, i) {
      var r;
      if (!i)
        return !0 === n[t] ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
    }),
    u
  }(n);
  i.find = k;
  i.expr = k.selectors;
  i.expr[":"] = i.expr.pseudos;
  i.uniqueSort = i.unique = k.uniqueSort;
  i.text = k.getText;
  i.isXMLDoc = k.isXML;
  i.contains = k.contains;
  i.escapeSelector = k.escape;
  var rt = function(n, t, r) {
    for (var u = [], f = void 0 !== r; (n = n[t]) && 9 !== n.nodeType; )
      if (1 === n.nodeType) {
        if (f && i(n).is(r))
          break;
        u.push(n)
      }
    return u
  }
    , dr = function(n, t) {
    for (var i = []; n; n = n.nextSibling)
      1 === n.nodeType && n !== t && i.push(n);
    return i
  }
    , gr = i.expr.match.needsContext;
  wi = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  i.filter = function(n, t, r) {
    var u = t[0];
    return r && (n = ":not(" + n + ")"),
    1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
      return 1 === n.nodeType
    }))
  }
  ;
  i.fn.extend({
    find: function(n) {
      var t, r, u = this.length, f = this;
      if ("string" != typeof n)
        return this.pushStack(i(n).filter(function() {
          for (t = 0; t < u; t++)
            if (i.contains(f[t], this))
              return !0
        }));
      for (r = this.pushStack([]),
      t = 0; t < u; t++)
        i.find(n, f[t], r);
      return 1 < u ? i.uniqueSort(r) : r
    },
    filter: function(n) {
      return this.pushStack(bi(this, n || [], !1))
    },
    not: function(n) {
      return this.pushStack(bi(this, n || [], !0))
    },
    is: function(n) {
      return !!bi(this, "string" == typeof n && gr.test(n) ? i(n) : n || [], !1).length
    }
  });
  tu = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (i.fn.init = function(n, t, r) {
    var e, o;
    if (!n)
      return this;
    if (r = r || nu,
    "string" == typeof n) {
      if (!(e = "<" === n[0] && ">" === n[n.length - 1] && 3 <= n.length ? [null, n, null] : tu.exec(n)) || !e[1] && t)
        return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
      if (e[1]) {
        if (t = t instanceof i ? t[0] : t,
        i.merge(this, i.parseHTML(e[1], t && t.nodeType ? t.ownerDocument || t : f, !0)),
        wi.test(e[1]) && i.isPlainObject(t))
          for (e in t)
            u(this[e]) ? this[e](t[e]) : this.attr(e, t[e]);
        return this
      }
      return (o = f.getElementById(e[2])) && (this[0] = o,
      this.length = 1),
      this
    }
    return n.nodeType ? (this[0] = n,
    this.length = 1,
    this) : u(n) ? void 0 !== r.ready ? r.ready(n) : n(i) : i.makeArray(n, this)
  }
  ).prototype = i.fn;
  nu = i(f);
  iu = /^(?:parents|prev(?:Until|All))/;
  ru = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  i.fn.extend({
    has: function(n) {
      var t = i(n, this)
        , r = t.length;
      return this.filter(function() {
        for (var n = 0; n < r; n++)
          if (i.contains(this, t[n]))
            return !0
      })
    },
    closest: function(n, t) {
      var r, f = 0, o = this.length, u = [], e = "string" != typeof n && i(n);
      if (!gr.test(n))
        for (; f < o; f++)
          for (r = this[f]; r && r !== t; r = r.parentNode)
            if (r.nodeType < 11 && (e ? -1 < e.index(r) : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
              u.push(r);
              break
            }
      return this.pushStack(1 < u.length ? i.uniqueSort(u) : u)
    },
    index: function(n) {
      return n ? "string" == typeof n ? ii.call(i(n), this[0]) : ii.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(n, t) {
      return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
    },
    addBack: function(n) {
      return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
    }
  });
  i.each({
    parent: function(n) {
      var t = n.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function(n) {
      return rt(n, "parentNode")
    },
    parentsUntil: function(n, t, i) {
      return rt(n, "parentNode", i)
    },
    next: function(n) {
      return uu(n, "nextSibling")
    },
    prev: function(n) {
      return uu(n, "previousSibling")
    },
    nextAll: function(n) {
      return rt(n, "nextSibling")
    },
    prevAll: function(n) {
      return rt(n, "previousSibling")
    },
    nextUntil: function(n, t, i) {
      return rt(n, "nextSibling", i)
    },
    prevUntil: function(n, t, i) {
      return rt(n, "previousSibling", i)
    },
    siblings: function(n) {
      return dr((n.parentNode || {}).firstChild, n)
    },
    children: function(n) {
      return dr(n.firstChild)
    },
    contents: function(n) {
      return "undefined" != typeof n.contentDocument ? n.contentDocument : (c(n, "template") && (n = n.content || n),
      i.merge([], n.childNodes))
    }
  }, function(n, t) {
    i.fn[n] = function(r, u) {
      var f = i.map(this, t, r);
      return "Until" !== n.slice(-5) && (u = r),
      u && "string" == typeof u && (f = i.filter(u, f)),
      1 < this.length && (ru[n] || i.uniqueSort(f),
      iu.test(n) && f.reverse()),
      this.pushStack(f)
    }
  });
  l = /[^\x20\t\r\n\f]+/g;
  i.Callbacks = function(n) {
    var a, h;
    n = "string" == typeof n ? (a = n,
    h = {},
    i.each(a.match(l) || [], function(n, t) {
      h[t] = !0
    }),
    h) : i.extend({}, n);
    var o, r, v, f, t = [], s = [], e = -1, y = function() {
      for (f = f || n.once,
      v = o = !0; s.length; e = -1)
        for (r = s.shift(); ++e < t.length; )
          !1 === t[e].apply(r[0], r[1]) && n.stopOnFalse && (e = t.length,
          r = !1);
      n.memory || (r = !1);
      o = !1;
      f && (t = r ? [] : "")
    }, c = {
      add: function() {
        return t && (r && !o && (e = t.length - 1,
        s.push(r)),
        function f(r) {
          i.each(r, function(i, r) {
            u(r) ? n.unique && c.has(r) || t.push(r) : r && r.length && "string" !== it(r) && f(r)
          })
        }(arguments),
        r && !o && y()),
        this
      },
      remove: function() {
        return i.each(arguments, function(n, r) {
          for (var u; -1 < (u = i.inArray(r, t, u)); )
            t.splice(u, 1),
            u <= e && e--
        }),
        this
      },
      has: function(n) {
        return n ? -1 < i.inArray(n, t) : 0 < t.length
      },
      empty: function() {
        return t && (t = []),
        this
      },
      disable: function() {
        return f = s = [],
        t = r = "",
        this
      },
      disabled: function() {
        return !t
      },
      lock: function() {
        return f = s = [],
        r || o || (t = r = ""),
        this
      },
      locked: function() {
        return !!f
      },
      fireWith: function(n, t) {
        return f || (t = [n, (t = t || []).slice ? t.slice() : t],
        s.push(t),
        o || y()),
        this
      },
      fire: function() {
        return c.fireWith(this, arguments),
        this
      },
      fired: function() {
        return !!v
      }
    };
    return c
  }
  ;
  i.extend({
    Deferred: function(t) {
      var f = [["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2], ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]]
        , o = "pending"
        , e = {
        state: function() {
          return o
        },
        always: function() {
          return r.done(arguments).fail(arguments),
          this
        },
        "catch": function(n) {
          return e.then(null, n)
        },
        pipe: function() {
          var n = arguments;
          return i.Deferred(function(t) {
            i.each(f, function(i, f) {
              var e = u(n[f[4]]) && n[f[4]];
              r[f[1]](function() {
                var n = e && e.apply(this, arguments);
                n && u(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[f[0] + "With"](this, e ? [n] : arguments)
              })
            });
            n = null
          }).promise()
        },
        then: function(t, r, e) {
          function s(t, r, f, e) {
            return function() {
              var h = this
                , c = arguments
                , l = function() {
                var n, i;
                if (!(t < o)) {
                  if ((n = f.apply(h, c)) === r.promise())
                    throw new TypeError("Thenable self-resolution");
                  i = n && ("object" == typeof n || "function" == typeof n) && n.then;
                  u(i) ? e ? i.call(n, s(o, r, ut, e), s(o, r, fi, e)) : (o++,
                  i.call(n, s(o, r, ut, e), s(o, r, fi, e), s(o, r, ut, r.notifyWith))) : (f !== ut && (h = void 0,
                  c = [n]),
                  (e || r.resolveWith)(h, c))
                }
              }
                , a = e ? l : function() {
                try {
                  l()
                } catch (l) {
                  i.Deferred.exceptionHook && i.Deferred.exceptionHook(l, a.stackTrace);
                  o <= t + 1 && (f !== fi && (h = void 0,
                  c = [l]),
                  r.rejectWith(h, c))
                }
              }
              ;
              t ? a() : (i.Deferred.getStackHook && (a.stackTrace = i.Deferred.getStackHook()),
              n.setTimeout(a))
            }
          }
          var o = 0;
          return i.Deferred(function(n) {
            f[0][3].add(s(0, n, u(e) ? e : ut, n.notifyWith));
            f[1][3].add(s(0, n, u(t) ? t : ut));
            f[2][3].add(s(0, n, u(r) ? r : fi))
          }).promise()
        },
        promise: function(n) {
          return null != n ? i.extend(n, e) : e
        }
      }
        , r = {};
      return i.each(f, function(n, t) {
        var i = t[2]
          , u = t[5];
        e[t[1]] = i.add;
        u && i.add(function() {
          o = u
        }, f[3 - n][2].disable, f[3 - n][3].disable, f[0][2].lock, f[0][3].lock);
        i.add(t[3].fire);
        r[t[0]] = function() {
          return r[t[0] + "With"](this === r ? void 0 : this, arguments),
          this
        }
        ;
        r[t[0] + "With"] = i.fireWith
      }),
      e.promise(r),
      t && t.call(r, r),
      r
    },
    when: function(n) {
      var e = arguments.length
        , t = e
        , o = Array(t)
        , f = b.call(arguments)
        , r = i.Deferred()
        , s = function(n) {
        return function(t) {
          o[n] = this;
          f[n] = 1 < arguments.length ? b.call(arguments) : t;
          --e || r.resolveWith(o, f)
        }
      };
      if (e <= 1 && (fu(n, r.done(s(t)).resolve, r.reject, !e),
      "pending" === r.state() || u(f[t] && f[t].then)))
        return r.then();
      while (t--)
        fu(f[t], s(t), r.reject);
      return r.promise()
    }
  });
  eu = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  i.Deferred.exceptionHook = function(t, i) {
    n.console && n.console.warn && t && eu.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
  }
  ;
  i.readyException = function(t) {
    n.setTimeout(function() {
      throw t;
    })
  }
  ;
  ei = i.Deferred();
  i.fn.ready = function(n) {
    return ei.then(n)["catch"](function(n) {
      i.readyException(n)
    }),
    this
  }
  ;
  i.extend({
    isReady: !1,
    readyWait: 1,
    ready: function(n) {
      (!0 === n ? --i.readyWait : i.isReady) || (i.isReady = !0) !== n && 0 < --i.readyWait || ei.resolveWith(f, [i])
    }
  });
  i.ready.then = ei.then;
  "complete" === f.readyState || "loading" !== f.readyState && !f.documentElement.doScroll ? n.setTimeout(i.ready) : (f.addEventListener("DOMContentLoaded", oi),
  n.addEventListener("load", oi));
  var p = function(n, t, r, f, e, o, s) {
    var h = 0
      , l = n.length
      , c = null == r;
    if ("object" === it(r))
      for (h in e = !0,
      r)
        p(n, t, h, r[h], !0, o, s);
    else if (void 0 !== f && (e = !0,
    u(f) || (s = !0),
    c && (s ? (t.call(n, f),
    t = null) : (c = t,
    t = function(n, t, r) {
      return c.call(i(n), r)
    }
    )),
    t))
      for (; h < l; h++)
        t(n[h], r, s ? f : f.call(n[h], h, t(n[h], r)));
    return e ? n : c ? t.call(n) : l ? t(n[0], r) : o
  }
    , se = /^-ms-/
    , he = /-([a-z])/g;
  yt = function(n) {
    return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType
  }
  ;
  pt.uid = 1;
  pt.prototype = {
    cache: function(n) {
      var t = n[this.expando];
      return t || (t = {},
      yt(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
        value: t,
        configurable: !0
      }))),
      t
    },
    set: function(n, t, i) {
      var r, u = this.cache(n);
      if ("string" == typeof t)
        u[y(t)] = i;
      else
        for (r in t)
          u[y(r)] = t[r];
      return u
    },
    get: function(n, t) {
      return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][y(t)]
    },
    access: function(n, t, i) {
      return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(n, t) : (this.set(n, t, i),
      void 0 !== i ? i : t)
    },
    remove: function(n, t) {
      var u, r = n[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t)
          for (u = (t = Array.isArray(t) ? t.map(y) : (t = y(t))in r ? [t] : t.match(l) || []).length; u--; )
            delete r[t[u]];
        (void 0 === t || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = void 0 : delete n[this.expando])
      }
    },
    hasData: function(n) {
      var t = n[this.expando];
      return void 0 !== t && !i.isEmptyObject(t)
    }
  };
  var r = new pt
    , o = new pt
    , le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
    , ae = /[A-Z]/g;
  i.extend({
    hasData: function(n) {
      return o.hasData(n) || r.hasData(n)
    },
    data: function(n, t, i) {
      return o.access(n, t, i)
    },
    removeData: function(n, t) {
      o.remove(n, t)
    },
    _data: function(n, t, i) {
      return r.access(n, t, i)
    },
    _removeData: function(n, t) {
      r.remove(n, t)
    }
  });
  i.fn.extend({
    data: function(n, t) {
      var f, u, e, i = this[0], s = i && i.attributes;
      if (void 0 === n) {
        if (this.length && (e = o.get(i),
        1 === i.nodeType && !r.get(i, "hasDataAttrs"))) {
          for (f = s.length; f--; )
            s[f] && 0 === (u = s[f].name).indexOf("data-") && (u = y(u.slice(5)),
            ou(i, u, e[u]));
          r.set(i, "hasDataAttrs", !0)
        }
        return e
      }
      return "object" == typeof n ? this.each(function() {
        o.set(this, n)
      }) : p(this, function(t) {
        var r;
        if (i && void 0 === t)
          return void 0 !== (r = o.get(i, n)) ? r : void 0 !== (r = ou(i, n)) ? r : void 0;
        this.each(function() {
          o.set(this, n, t)
        })
      }, null, t, 1 < arguments.length, null, !0)
    },
    removeData: function(n) {
      return this.each(function() {
        o.remove(this, n)
      })
    }
  });
  i.extend({
    queue: function(n, t, u) {
      var f;
      if (n)
        return t = (t || "fx") + "queue",
        f = r.get(n, t),
        u && (!f || Array.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)),
        f || []
    },
    dequeue: function(n, t) {
      t = t || "fx";
      var r = i.queue(n, t)
        , e = r.length
        , u = r.shift()
        , f = i._queueHooks(n, t);
      "inprogress" === u && (u = r.shift(),
      e--);
      u && ("fx" === t && r.unshift("inprogress"),
      delete f.stop,
      u.call(n, function() {
        i.dequeue(n, t)
      }, f));
      !e && f && f.empty.fire()
    },
    _queueHooks: function(n, t) {
      var u = t + "queueHooks";
      return r.get(n, u) || r.access(n, u, {
        empty: i.Callbacks("once memory").add(function() {
          r.remove(n, [t + "queue", u])
        })
      })
    }
  });
  i.fn.extend({
    queue: function(n, t) {
      var r = 2;
      return "string" != typeof n && (t = n,
      n = "fx",
      r--),
      arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
        var r = i.queue(this, n, t);
        i._queueHooks(this, n);
        "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
      })
    },
    dequeue: function(n) {
      return this.each(function() {
        i.dequeue(this, n)
      })
    },
    clearQueue: function(n) {
      return this.queue(n || "fx", [])
    },
    promise: function(n, t) {
      var u, e = 1, o = i.Deferred(), f = this, s = this.length, h = function() {
        --e || o.resolveWith(f, [f])
      };
      for ("string" != typeof n && (t = n,
      n = void 0),
      n = n || "fx"; s--; )
        (u = r.get(f[s], n + "queueHooks")) && u.empty && (e++,
        u.empty.add(h));
      return h(),
      o.promise(t)
    }
  });
  var su = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
    , wt = new RegExp("^(?:([+-])=|)(" + su + ")([a-z%]*)$","i")
    , w = ["Top", "Right", "Bottom", "Left"]
    , bt = f.documentElement
    , ft = function(n) {
    return i.contains(n.ownerDocument, n)
  }
    , ve = {
    composed: !0
  };
  bt.getRootNode && (ft = function(n) {
    return i.contains(n.ownerDocument, n) || n.getRootNode(ve) === n.ownerDocument
  }
  );
  kt = function(n, t) {
    return "none" === (n = t || n).style.display || "" === n.style.display && ft(n) && "none" === i.css(n, "display")
  }
  ;
  ki = function(n, t, i, r) {
    var f, u, e = {};
    for (u in t)
      e[u] = n.style[u],
      n.style[u] = t[u];
    for (u in f = i.apply(n, r || []),
    t)
      n.style[u] = e[u];
    return f
  }
  ;
  di = {};
  i.fn.extend({
    show: function() {
      return et(this, !0)
    },
    hide: function() {
      return et(this)
    },
    toggle: function(n) {
      return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
        kt(this) ? i(this).show() : i(this).hide()
      })
    }
  });
  var dt = /^(?:checkbox|radio)$/i
    , cu = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
    , lu = /^$|^module$|\/(?:java|ecma)script/i
    , h = {
    option: [1, "<select multiple='multiple'>", "<\/select>"],
    thead: [1, "<table>", "<\/table>"],
    col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
    tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
    td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
    _default: [0, "", ""]
  };
  h.optgroup = h.option;
  h.tbody = h.tfoot = h.colgroup = h.caption = h.thead;
  h.th = h.td;
  au = /<|&#?\w+;/;
  gt = f.createDocumentFragment().appendChild(f.createElement("div"));
  (si = f.createElement("input")).setAttribute("type", "radio");
  si.setAttribute("checked", "checked");
  si.setAttribute("name", "t");
  gt.appendChild(si);
  e.checkClone = gt.cloneNode(!0).cloneNode(!0).lastChild.checked;
  gt.innerHTML = "<textarea>x<\/textarea>";
  e.noCloneChecked = !!gt.cloneNode(!0).lastChild.defaultValue;
  var ye = /^key/
    , pe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
    , yu = /^([^.]*)(?:\.(.+)|)/;
  i.event = {
    global: {},
    add: function(n, t, u, f, e) {
      var p, v, k, y, w, h, s, c, o, b, d, a = r.get(n);
      if (a)
        for (u.handler && (u = (p = u).handler,
        e = p.selector),
        e && i.find.matchesSelector(bt, e),
        u.guid || (u.guid = i.guid++),
        (y = a.events) || (y = a.events = {}),
        (v = a.handle) || (v = a.handle = function(t) {
          if ("undefined" != typeof i && i.event.triggered !== t.type)
            return i.event.dispatch.apply(n, arguments)
        }
        ),
        w = (t = (t || "").match(l) || [""]).length; w--; )
          o = d = (k = yu.exec(t[w]) || [])[1],
          b = (k[2] || "").split(".").sort(),
          o && (s = i.event.special[o] || {},
          o = (e ? s.delegateType : s.bindType) || o,
          s = i.event.special[o] || {},
          h = i.extend({
            type: o,
            origType: d,
            data: f,
            handler: u,
            guid: u.guid,
            selector: e,
            needsContext: e && i.expr.match.needsContext.test(e),
            namespace: b.join(".")
          }, p),
          (c = y[o]) || ((c = y[o] = []).delegateCount = 0,
          s.setup && !1 !== s.setup.call(n, f, b, v) || n.addEventListener && n.addEventListener(o, v)),
          s.add && (s.add.call(n, h),
          h.handler.guid || (h.handler.guid = u.guid)),
          e ? c.splice(c.delegateCount++, 0, h) : c.push(h),
          i.event.global[o] = !0)
    },
    remove: function(n, t, u, f, e) {
      var y, k, c, v, p, s, h, a, o, b, d, w = r.hasData(n) && r.get(n);
      if (w && (v = w.events)) {
        for (p = (t = (t || "").match(l) || [""]).length; p--; )
          if (o = d = (c = yu.exec(t[p]) || [])[1],
          b = (c[2] || "").split(".").sort(),
          o) {
            for (h = i.event.special[o] || {},
            a = v[o = (f ? h.delegateType : h.bindType) || o] || [],
            c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"),
            k = y = a.length; y--; )
              s = a[y],
              !e && d !== s.origType || u && u.guid !== s.guid || c && !c.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(y, 1),
              s.selector && a.delegateCount--,
              h.remove && h.remove.call(n, s));
            k && !a.length && (h.teardown && !1 !== h.teardown.call(n, b, w.handle) || i.removeEvent(n, o, w.handle),
            delete v[o])
          } else
            for (o in v)
              i.event.remove(n, o + t[p], u, f, !0);
        i.isEmptyObject(v) && r.remove(n, "handle events")
      }
    },
    dispatch: function(n) {
      var u, h, c, e, f, l, t = i.event.fix(n), s = new Array(arguments.length), a = (r.get(this, "events") || {})[t.type] || [], o = i.event.special[t.type] || {};
      for (s[0] = t,
      u = 1; u < arguments.length; u++)
        s[u] = arguments[u];
      if (t.delegateTarget = this,
      !o.preDispatch || !1 !== o.preDispatch.call(this, t)) {
        for (l = i.event.handlers.call(this, t, a),
        u = 0; (e = l[u++]) && !t.isPropagationStopped(); )
          for (t.currentTarget = e.elem,
          h = 0; (f = e.handlers[h++]) && !t.isImmediatePropagationStopped(); )
            t.rnamespace && !1 !== f.namespace && !t.rnamespace.test(f.namespace) || (t.handleObj = f,
            t.data = f.data,
            void 0 !== (c = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, s)) && !1 === (t.result = c) && (t.preventDefault(),
            t.stopPropagation()));
        return o.postDispatch && o.postDispatch.call(this, t),
        t.result
      }
    },
    handlers: function(n, t) {
      var f, h, u, e, o, c = [], s = t.delegateCount, r = n.target;
      if (s && r.nodeType && !("click" === n.type && 1 <= n.button))
        for (; r !== this; r = r.parentNode || this)
          if (1 === r.nodeType && ("click" !== n.type || !0 !== r.disabled)) {
            for (e = [],
            o = {},
            f = 0; f < s; f++)
              void 0 === o[u = (h = t[f]).selector + " "] && (o[u] = h.needsContext ? -1 < i(u, this).index(r) : i.find(u, this, null, [r]).length),
              o[u] && e.push(h);
            e.length && c.push({
              elem: r,
              handlers: e
            })
          }
      return r = this,
      s < t.length && c.push({
        elem: r,
        handlers: t.slice(s)
      }),
      c
    },
    addProp: function(n, t) {
      Object.defineProperty(i.Event.prototype, n, {
        enumerable: !0,
        configurable: !0,
        get: u(t) ? function() {
          if (this.originalEvent)
            return t(this.originalEvent)
        }
        : function() {
          if (this.originalEvent)
            return this.originalEvent[n]
        }
        ,
        set: function(t) {
          Object.defineProperty(this, n, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          })
        }
      })
    },
    fix: function(n) {
      return n[i.expando] ? n : new i.Event(n)
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function(n) {
          var t = this || n;
          return dt.test(t.type) && t.click && c(t, "input") && hi(t, "click", ot),
          !1
        },
        trigger: function(n) {
          var t = this || n;
          return dt.test(t.type) && t.click && c(t, "input") && hi(t, "click"),
          !0
        },
        _default: function(n) {
          var t = n.target;
          return dt.test(t.type) && t.click && c(t, "input") && r.get(t, "click") || c(t, "a")
        }
      },
      beforeunload: {
        postDispatch: function(n) {
          void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
        }
      }
    }
  };
  i.removeEvent = function(n, t, i) {
    n.removeEventListener && n.removeEventListener(t, i)
  }
  ;
  i.Event = function(n, t) {
    if (!(this instanceof i.Event))
      return new i.Event(n,t);
    n && n.type ? (this.originalEvent = n,
    this.type = n.type,
    this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && !1 === n.returnValue ? ot : st,
    this.target = n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target,
    this.currentTarget = n.currentTarget,
    this.relatedTarget = n.relatedTarget) : this.type = n;
    t && i.extend(this, t);
    this.timeStamp = n && n.timeStamp || Date.now();
    this[i.expando] = !0
  }
  ;
  i.Event.prototype = {
    constructor: i.Event,
    isDefaultPrevented: st,
    isPropagationStopped: st,
    isImmediatePropagationStopped: st,
    isSimulated: !1,
    preventDefault: function() {
      var n = this.originalEvent;
      this.isDefaultPrevented = ot;
      n && !this.isSimulated && n.preventDefault()
    },
    stopPropagation: function() {
      var n = this.originalEvent;
      this.isPropagationStopped = ot;
      n && !this.isSimulated && n.stopPropagation()
    },
    stopImmediatePropagation: function() {
      var n = this.originalEvent;
      this.isImmediatePropagationStopped = ot;
      n && !this.isSimulated && n.stopImmediatePropagation();
      this.stopPropagation()
    }
  };
  i.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    char: !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function(n) {
      var t = n.button;
      return null == n.which && ye.test(n.type) ? null != n.charCode ? n.charCode : n.keyCode : !n.which && void 0 !== t && pe.test(n.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : n.which
    }
  }, i.event.addProp);
  i.each({
    focus: "focusin",
    blur: "focusout"
  }, function(n, t) {
    i.event.special[n] = {
      setup: function() {
        return hi(this, n, we),
        !1
      },
      trigger: function() {
        return hi(this, n),
        !0
      },
      delegateType: t
    }
  });
  i.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(n, t) {
    i.event.special[n] = {
      delegateType: t,
      bindType: t,
      handle: function(n) {
        var u, r = n.relatedTarget, f = n.handleObj;
        return r && (r === this || i.contains(this, r)) || (n.type = f.origType,
        u = f.handler.apply(this, arguments),
        n.type = t),
        u
      }
    }
  });
  i.fn.extend({
    on: function(n, t, i, r) {
      return nr(this, n, t, i, r)
    },
    one: function(n, t, i, r) {
      return nr(this, n, t, i, r, 1)
    },
    off: function(n, t, r) {
      var u, f;
      if (n && n.preventDefault && n.handleObj)
        return u = n.handleObj,
        i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler),
        this;
      if ("object" == typeof n) {
        for (f in n)
          this.off(f, t, n[f]);
        return this
      }
      return !1 !== t && "function" != typeof t || (r = t,
      t = void 0),
      !1 === r && (r = st),
      this.each(function() {
        i.event.remove(this, n, r, t)
      })
    }
  });
  var be = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
    , ke = /<script|<style|<link/i
    , de = /checked\s*(?:[^=]|=\s*.checked.)/i
    , ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  i.extend({
    htmlPrefilter: function(n) {
      return n.replace(be, "<$1><\/$2>")
    },
    clone: function(n, t, r) {
      var u, c, o, f, l, a, v, h = n.cloneNode(!0), y = ft(n);
      if (!(e.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
        for (f = s(h),
        u = 0,
        c = (o = s(n)).length; u < c; u++)
          l = o[u],
          a = f[u],
          void 0,
          "input" === (v = a.nodeName.toLowerCase()) && dt.test(l.type) ? a.checked = l.checked : "input" !== v && "textarea" !== v || (a.defaultValue = l.defaultValue);
      if (t)
        if (r)
          for (o = o || s(n),
          f = f || s(h),
          u = 0,
          c = o.length; u < c; u++)
            wu(o[u], f[u]);
        else
          wu(n, h);
      return 0 < (f = s(h, "script")).length && gi(f, !y && s(n, "script")),
      h
    },
    cleanData: function(n) {
      for (var u, t, f, s = i.event.special, e = 0; void 0 !== (t = n[e]); e++)
        if (yt(t)) {
          if (u = t[r.expando]) {
            if (u.events)
              for (f in u.events)
                s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
            t[r.expando] = void 0
          }
          t[o.expando] && (t[o.expando] = void 0)
        }
    }
  });
  i.fn.extend({
    detach: function(n) {
      return bu(this, n, !0)
    },
    remove: function(n) {
      return bu(this, n)
    },
    text: function(n) {
      return p(this, function(n) {
        return void 0 === n ? i.text(this) : this.empty().each(function() {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = n)
        })
      }, null, n, arguments.length)
    },
    append: function() {
      return ht(this, arguments, function(n) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || pu(this, n).appendChild(n)
      })
    },
    prepend: function() {
      return ht(this, arguments, function(n) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = pu(this, n);
          t.insertBefore(n, t.firstChild)
        }
      })
    },
    before: function() {
      return ht(this, arguments, function(n) {
        this.parentNode && this.parentNode.insertBefore(n, this)
      })
    },
    after: function() {
      return ht(this, arguments, function(n) {
        this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
      })
    },
    empty: function() {
      for (var n, t = 0; null != (n = this[t]); t++)
        1 === n.nodeType && (i.cleanData(s(n, !1)),
        n.textContent = "");
      return this
    },
    clone: function(n, t) {
      return n = null != n && n,
      t = null == t ? n : t,
      this.map(function() {
        return i.clone(this, n, t)
      })
    },
    html: function(n) {
      return p(this, function(n) {
        var t = this[0] || {}
          , r = 0
          , u = this.length;
        if (void 0 === n && 1 === t.nodeType)
          return t.innerHTML;
        if ("string" == typeof n && !ke.test(n) && !h[(cu.exec(n) || ["", ""])[1].toLowerCase()]) {
          n = i.htmlPrefilter(n);
          try {
            for (; r < u; r++)
              1 === (t = this[r] || {}).nodeType && (i.cleanData(s(t, !1)),
              t.innerHTML = n);
            t = 0
          } catch (n) {}
        }
        t && this.empty().append(n)
      }, null, n, arguments.length)
    },
    replaceWith: function() {
      var n = [];
      return ht(this, arguments, function(t) {
        var r = this.parentNode;
        i.inArray(this, n) < 0 && (i.cleanData(s(this)),
        r && r.replaceChild(t, this))
      }, n)
    }
  });
  i.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(n, t) {
    i.fn[n] = function(n) {
      for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++)
        u = r === o ? this : this.clone(!0),
        i(e[r])[t](u),
        yi.apply(f, u.get());
      return this.pushStack(f)
    }
  });
  var tr = new RegExp("^(" + su + ")(?!px)[a-z%]+$","i")
    , ci = function(t) {
    var i = t.ownerDocument.defaultView;
    return i && i.opener || (i = n),
    i.getComputedStyle(t)
  }
    , io = new RegExp(w.join("|"),"i");
  !function() {
    function r() {
      if (t) {
        o.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
        t.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
        bt.appendChild(o).appendChild(t);
        var i = n.getComputedStyle(t);
        s = "1%" !== i.top;
        a = 12 === u(i.marginLeft);
        t.style.right = "60%";
        l = 36 === u(i.right);
        h = 36 === u(i.width);
        t.style.position = "absolute";
        c = 12 === u(t.offsetWidth / 3);
        bt.removeChild(o);
        t = null
      }
    }
    function u(n) {
      return Math.round(parseFloat(n))
    }
    var s, h, c, l, a, o = f.createElement("div"), t = f.createElement("div");
    t.style && (t.style.backgroundClip = "content-box",
    t.cloneNode(!0).style.backgroundClip = "",
    e.clearCloneStyle = "content-box" === t.style.backgroundClip,
    i.extend(e, {
      boxSizingReliable: function() {
        return r(),
        h
      },
      pixelBoxStyles: function() {
        return r(),
        l
      },
      pixelPosition: function() {
        return r(),
        s
      },
      reliableMarginLeft: function() {
        return r(),
        a
      },
      scrollboxSize: function() {
        return r(),
        c
      }
    }))
  }();
  var du = ["Webkit", "Moz", "ms"]
    , gu = f.createElement("div").style
    , nf = {};
  var ro = /^(none|table(?!-c[ea]).+)/
    , tf = /^--/
    , uo = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  }
    , rf = {
    letterSpacing: "0",
    fontWeight: "400"
  };
  i.extend({
    cssHooks: {
      opacity: {
        get: function(n, t) {
          if (t) {
            var i = ni(n, "opacity");
            return "" === i ? "1" : i
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function(n, t, r, u) {
      if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
        var f, h, o, c = y(t), l = tf.test(t), s = n.style;
        if (l || (t = ir(c)),
        o = i.cssHooks[t] || i.cssHooks[c],
        void 0 === r)
          return o && "get"in o && void 0 !== (f = o.get(n, !1, u)) ? f : s[t];
        "string" == (h = typeof r) && (f = wt.exec(r)) && f[1] && (r = hu(n, t, f),
        h = "number");
        null != r && r == r && ("number" !== h || l || (r += f && f[3] || (i.cssNumber[c] ? "" : "px")),
        e.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (s[t] = "inherit"),
        o && "set"in o && void 0 === (r = o.set(n, r, u)) || (l ? s.setProperty(t, r) : s[t] = r))
      }
    },
    css: function(n, t, r, u) {
      var f, e, o, s = y(t);
      return tf.test(t) || (t = ir(s)),
      (o = i.cssHooks[t] || i.cssHooks[s]) && "get"in o && (f = o.get(n, !0, r)),
      void 0 === f && (f = ni(n, t, u)),
      "normal" === f && t in rf && (f = rf[t]),
      "" === r || r ? (e = parseFloat(f),
      !0 === r || isFinite(e) ? e || 0 : f) : f
    }
  });
  i.each(["height", "width"], function(n, t) {
    i.cssHooks[t] = {
      get: function(n, r, u) {
        if (r)
          return !ro.test(i.css(n, "display")) || n.getClientRects().length && n.getBoundingClientRect().width ? ff(n, t, u) : ki(n, uo, function() {
            return ff(n, t, u)
          })
      },
      set: function(n, r, u) {
        var s, f = ci(n), h = !e.scrollboxSize() && "absolute" === f.position, c = (h || u) && "border-box" === i.css(n, "boxSizing", !1, f), o = u ? rr(n, t, u, c, f) : 0;
        return c && h && (o -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(f[t]) - rr(n, t, "border", !1, f) - .5)),
        o && (s = wt.exec(r)) && "px" !== (s[3] || "px") && (n.style[t] = r,
        r = i.css(n, t)),
        uf(0, r, o)
      }
    }
  });
  i.cssHooks.marginLeft = ku(e.reliableMarginLeft, function(n, t) {
    if (t)
      return (parseFloat(ni(n, "marginLeft")) || n.getBoundingClientRect().left - ki(n, {
        marginLeft: 0
      }, function() {
        return n.getBoundingClientRect().left
      })) + "px"
  });
  i.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(n, t) {
    i.cssHooks[n + t] = {
      expand: function(i) {
        for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; r < 4; r++)
          f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
        return f
      }
    };
    "margin" !== n && (i.cssHooks[n + t].set = uf)
  });
  i.fn.extend({
    css: function(n, t) {
      return p(this, function(n, t, r) {
        var f, e, o = {}, u = 0;
        if (Array.isArray(t)) {
          for (f = ci(n),
          e = t.length; u < e; u++)
            o[t[u]] = i.css(n, t[u], !1, f);
          return o
        }
        return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
      }, n, t, 1 < arguments.length)
    }
  });
  ((i.Tween = a).prototype = {
    constructor: a,
    init: function(n, t, r, u, f, e) {
      this.elem = n;
      this.prop = r;
      this.easing = f || i.easing._default;
      this.options = t;
      this.start = this.now = this.cur();
      this.end = u;
      this.unit = e || (i.cssNumber[r] ? "" : "px")
    },
    cur: function() {
      var n = a.propHooks[this.prop];
      return n && n.get ? n.get(this) : a.propHooks._default.get(this)
    },
    run: function(n) {
      var t, r = a.propHooks[this.prop];
      return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n,
      this.now = (this.end - this.start) * t + this.start,
      this.options.step && this.options.step.call(this.elem, this.now, this),
      r && r.set ? r.set(this) : a.propHooks._default.set(this),
      this
    }
  }).init.prototype = a.prototype;
  (a.propHooks = {
    _default: {
      get: function(n) {
        var t;
        return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, "")) && "auto" !== t ? t : 0
      },
      set: function(n) {
        i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || !i.cssHooks[n.prop] && null == n.elem.style[ir(n.prop)] ? n.elem[n.prop] = n.now : i.style(n.elem, n.prop, n.now + n.unit)
      }
    }
  }).scrollTop = a.propHooks.scrollLeft = {
    set: function(n) {
      n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
    }
  };
  i.easing = {
    linear: function(n) {
      return n
    },
    swing: function(n) {
      return .5 - Math.cos(n * Math.PI) / 2
    },
    _default: "swing"
  };
  i.fx = a.prototype.init;
  i.fx.step = {};
  of = /^(?:toggle|show|hide)$/;
  sf = /queueHooks$/;
  i.Animation = i.extend(v, {
    tweeners: {
      "*": [function(n, t) {
        var i = this.createTween(n, t);
        return hu(i.elem, n, wt.exec(t), i),
        i
      }
      ]
    },
    tweener: function(n, t) {
      u(n) ? (t = n,
      n = ["*"]) : n = n.match(l);
      for (var i, r = 0, f = n.length; r < f; r++)
        i = n[r],
        v.tweeners[i] = v.tweeners[i] || [],
        v.tweeners[i].unshift(t)
    },
    prefilters: [function(n, t, u) {
      var f, y, w, c, b, h, o, l, k = "width"in t || "height"in t, v = this, p = {}, s = n.style, a = n.nodeType && kt(n), e = r.get(n, "fxshow");
      for (f in u.queue || (null == (c = i._queueHooks(n, "fx")).unqueued && (c.unqueued = 0,
      b = c.empty.fire,
      c.empty.fire = function() {
        c.unqueued || b()
      }
      ),
      c.unqueued++,
      v.always(function() {
        v.always(function() {
          c.unqueued--;
          i.queue(n, "fx").length || c.empty.fire()
        })
      })),
      t)
        if (y = t[f],
        of.test(y)) {
          if (delete t[f],
          w = w || "toggle" === y,
          y === (a ? "hide" : "show")) {
            if ("show" !== y || !e || void 0 === e[f])
              continue;
            a = !0
          }
          p[f] = e && e[f] || i.style(n, f)
        }
      if ((h = !i.isEmptyObject(t)) || !i.isEmptyObject(p))
        for (f in k && 1 === n.nodeType && (u.overflow = [s.overflow, s.overflowX, s.overflowY],
        null == (o = e && e.display) && (o = r.get(n, "display")),
        "none" === (l = i.css(n, "display")) && (o ? l = o : (et([n], !0),
        o = n.style.display || o,
        l = i.css(n, "display"),
        et([n]))),
        ("inline" === l || "inline-block" === l && null != o) && "none" === i.css(n, "float") && (h || (v.done(function() {
          s.display = o
        }),
        null == o && (l = s.display,
        o = "none" === l ? "" : l)),
        s.display = "inline-block")),
        u.overflow && (s.overflow = "hidden",
        v.always(function() {
          s.overflow = u.overflow[0];
          s.overflowX = u.overflow[1];
          s.overflowY = u.overflow[2]
        })),
        h = !1,
        p)
          h || (e ? "hidden"in e && (a = e.hidden) : e = r.access(n, "fxshow", {
            display: o
          }),
          w && (e.hidden = !a),
          a && et([n], !0),
          v.done(function() {
            for (f in a || et([n]),
            r.remove(n, "fxshow"),
            p)
              i.style(n, f, p[f])
          })),
          h = cf(a ? e[f] : 0, f, v),
          f in e || (e[f] = h.start,
          a && (h.end = h.start,
          h.start = 0))
    }
    ],
    prefilter: function(n, t) {
      t ? v.prefilters.unshift(n) : v.prefilters.push(n)
    }
  });
  i.speed = function(n, t, r) {
    var f = n && "object" == typeof n ? i.extend({}, n) : {
      complete: r || !r && t || u(n) && n,
      duration: n,
      easing: r && t || t && !u(t) && t
    };
    return i.fx.off ? f.duration = 0 : "number" != typeof f.duration && (f.duration = f.duration in i.fx.speeds ? i.fx.speeds[f.duration] : i.fx.speeds._default),
    null != f.queue && !0 !== f.queue || (f.queue = "fx"),
    f.old = f.complete,
    f.complete = function() {
      u(f.old) && f.old.call(this);
      f.queue && i.dequeue(this, f.queue)
    }
    ,
    f
  }
  ;
  i.fn.extend({
    fadeTo: function(n, t, i, r) {
      return this.filter(kt).css("opacity", 0).show().end().animate({
        opacity: t
      }, n, i, r)
    },
    animate: function(n, t, u, f) {
      var s = i.isEmptyObject(n)
        , o = i.speed(t, u, f)
        , e = function() {
        var t = v(this, i.extend({}, n), o);
        (s || r.get(this, "finish")) && t.stop(!0)
      };
      return e.finish = e,
      s || !1 === o.queue ? this.each(e) : this.queue(o.queue, e)
    },
    stop: function(n, t, u) {
      var f = function(n) {
        var t = n.stop;
        delete n.stop;
        t(u)
      };
      return "string" != typeof n && (u = t,
      t = n,
      n = void 0),
      t && !1 !== n && this.queue(n || "fx", []),
      this.each(function() {
        var s = !0
          , t = null != n && n + "queueHooks"
          , o = i.timers
          , e = r.get(this);
        if (t)
          e[t] && e[t].stop && f(e[t]);
        else
          for (t in e)
            e[t] && e[t].stop && sf.test(t) && f(e[t]);
        for (t = o.length; t--; )
          o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u),
          s = !1,
          o.splice(t, 1));
        !s && u || i.dequeue(this, n)
      })
    },
    finish: function(n) {
      return !1 !== n && (n = n || "fx"),
      this.each(function() {
        var t, e = r.get(this), u = e[n + "queue"], o = e[n + "queueHooks"], f = i.timers, s = u ? u.length : 0;
        for (e.finish = !0,
        i.queue(this, n, []),
        o && o.stop && o.stop.call(this, !0),
        t = f.length; t--; )
          f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0),
          f.splice(t, 1));
        for (t = 0; t < s; t++)
          u[t] && u[t].finish && u[t].finish.call(this);
        delete e.finish
      })
    }
  });
  i.each(["toggle", "show", "hide"], function(n, t) {
    var r = i.fn[t];
    i.fn[t] = function(n, i, u) {
      return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(ai(t, !0), n, i, u)
    }
  });
  i.each({
    slideDown: ai("show"),
    slideUp: ai("hide"),
    slideToggle: ai("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function(n, t) {
    i.fn[n] = function(n, i, r) {
      return this.animate(t, n, i, r)
    }
  });
  i.timers = [];
  i.fx.tick = function() {
    var r, n = 0, t = i.timers;
    for (ct = Date.now(); n < t.length; n++)
      (r = t[n])() || t[n] !== r || t.splice(n--, 1);
    t.length || i.fx.stop();
    ct = void 0
  }
  ;
  i.fx.timer = function(n) {
    i.timers.push(n);
    i.fx.start()
  }
  ;
  i.fx.interval = 13;
  i.fx.start = function() {
    li || (li = !0,
    ur())
  }
  ;
  i.fx.stop = function() {
    li = null
  }
  ;
  i.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  };
  i.fn.delay = function(t, r) {
    return t = i.fx && i.fx.speeds[t] || t,
    r = r || "fx",
    this.queue(r, function(i, r) {
      var u = n.setTimeout(i, t);
      r.stop = function() {
        n.clearTimeout(u)
      }
    })
  }
  ;
  lt = f.createElement("input");
  ef = f.createElement("select").appendChild(f.createElement("option"));
  lt.type = "checkbox";
  e.checkOn = "" !== lt.value;
  e.optSelected = ef.selected;
  (lt = f.createElement("input")).value = "t";
  lt.type = "radio";
  e.radioValue = "t" === lt.value;
  at = i.expr.attrHandle;
  i.fn.extend({
    attr: function(n, t) {
      return p(this, i.attr, n, t, 1 < arguments.length)
    },
    removeAttr: function(n) {
      return this.each(function() {
        i.removeAttr(this, n)
      })
    }
  });
  i.extend({
    attr: function(n, t, r) {
      var f, u, e = n.nodeType;
      if (3 !== e && 8 !== e && 2 !== e)
        return "undefined" == typeof n.getAttribute ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (u = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? lf : void 0)),
        void 0 !== r ? null === r ? void i.removeAttr(n, t) : u && "set"in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""),
        r) : u && "get"in u && null !== (f = u.get(n, t)) ? f : null == (f = i.find.attr(n, t)) ? void 0 : f)
    },
    attrHooks: {
      type: {
        set: function(n, t) {
          if (!e.radioValue && "radio" === t && c(n, "input")) {
            var i = n.value;
            return n.setAttribute("type", t),
            i && (n.value = i),
            t
          }
        }
      }
    },
    removeAttr: function(n, t) {
      var i, u = 0, r = t && t.match(l);
      if (r && 1 === n.nodeType)
        while (i = r[u++])
          n.removeAttribute(i)
    }
  });
  lf = {
    set: function(n, t, r) {
      return !1 === t ? i.removeAttr(n, r) : n.setAttribute(r, r),
      r
    }
  };
  i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
    var r = at[t] || i.find.attr;
    at[t] = function(n, t, i) {
      var f, e, u = t.toLowerCase();
      return i || (e = at[u],
      at[u] = f,
      f = null != r(n, t, i) ? u : null,
      at[u] = e),
      f
    }
  });
  af = /^(?:input|select|textarea|button)$/i;
  vf = /^(?:a|area)$/i;
  i.fn.extend({
    prop: function(n, t) {
      return p(this, i.prop, n, t, 1 < arguments.length)
    },
    removeProp: function(n) {
      return this.each(function() {
        delete this[i.propFix[n] || n]
      })
    }
  });
  i.extend({
    prop: function(n, t, r) {
      var f, u, e = n.nodeType;
      if (3 !== e && 8 !== e && 2 !== e)
        return 1 === e && i.isXMLDoc(n) || (t = i.propFix[t] || t,
        u = i.propHooks[t]),
        void 0 !== r ? u && "set"in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get"in u && null !== (f = u.get(n, t)) ? f : n[t]
    },
    propHooks: {
      tabIndex: {
        get: function(n) {
          var t = i.find.attr(n, "tabindex");
          return t ? parseInt(t, 10) : af.test(n.nodeName) || vf.test(n.nodeName) && n.href ? 0 : -1
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  });
  e.optSelected || (i.propHooks.selected = {
    get: function(n) {
      var t = n.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex,
      null
    },
    set: function(n) {
      var t = n.parentNode;
      t && (t.selectedIndex,
      t.parentNode && t.parentNode.selectedIndex)
    }
  });
  i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    i.propFix[this.toLowerCase()] = this
  });
  i.fn.extend({
    addClass: function(n) {
      var o, t, r, f, e, s, h, c = 0;
      if (u(n))
        return this.each(function(t) {
          i(this).addClass(n.call(this, t, nt(this)))
        });
      if ((o = fr(n)).length)
        while (t = this[c++])
          if (f = nt(t),
          r = 1 === t.nodeType && " " + g(f) + " ") {
            for (s = 0; e = o[s++]; )
              r.indexOf(" " + e + " ") < 0 && (r += e + " ");
            f !== (h = g(r)) && t.setAttribute("class", h)
          }
      return this
    },
    removeClass: function(n) {
      var o, r, t, f, e, s, h, c = 0;
      if (u(n))
        return this.each(function(t) {
          i(this).removeClass(n.call(this, t, nt(this)))
        });
      if (!arguments.length)
        return this.attr("class", "");
      if ((o = fr(n)).length)
        while (r = this[c++])
          if (f = nt(r),
          t = 1 === r.nodeType && " " + g(f) + " ") {
            for (s = 0; e = o[s++]; )
              while (-1 < t.indexOf(" " + e + " "))
                t = t.replace(" " + e + " ", " ");
            f !== (h = g(t)) && r.setAttribute("class", h)
          }
      return this
    },
    toggleClass: function(n, t) {
      var f = typeof n
        , e = "string" === f || Array.isArray(n);
      return "boolean" == typeof t && e ? t ? this.addClass(n) : this.removeClass(n) : u(n) ? this.each(function(r) {
        i(this).toggleClass(n.call(this, r, nt(this), t), t)
      }) : this.each(function() {
        var t, o, u, s;
        if (e)
          for (o = 0,
          u = i(this),
          s = fr(n); t = s[o++]; )
            u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
        else
          void 0 !== n && "boolean" !== f || ((t = nt(this)) && r.set(this, "__className__", t),
          this.setAttribute && this.setAttribute("class", t || !1 === n ? "" : r.get(this, "__className__") || ""))
      })
    },
    hasClass: function(n) {
      for (var t, r = 0, i = " " + n + " "; t = this[r++]; )
        if (1 === t.nodeType && -1 < (" " + g(nt(t)) + " ").indexOf(i))
          return !0;
      return !1
    }
  });
  yf = /\r/g;
  i.fn.extend({
    val: function(n) {
      var t, r, e, f = this[0];
      return arguments.length ? (e = u(n),
      this.each(function(r) {
        var u;
        1 === this.nodeType && (null == (u = e ? n.call(this, r, i(this).val()) : n) ? u = "" : "number" == typeof u ? u += "" : Array.isArray(u) && (u = i.map(u, function(n) {
          return null == n ? "" : n + ""
        })),
        (t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, u, "value") || (this.value = u))
      })) : f ? (t = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()]) && "get"in t && void 0 !== (r = t.get(f, "value")) ? r : "string" == typeof (r = f.value) ? r.replace(yf, "") : null == r ? "" : r : void 0
    }
  });
  i.extend({
    valHooks: {
      option: {
        get: function(n) {
          var t = i.find.attr(n, "value");
          return null != t ? t : g(i.text(n))
        }
      },
      select: {
        get: function(n) {
          for (var e, t, o = n.options, u = n.selectedIndex, f = "select-one" === n.type, s = f ? null : [], h = f ? u + 1 : o.length, r = u < 0 ? h : f ? u : 0; r < h; r++)
            if (((t = o[r]).selected || r === u) && !t.disabled && (!t.parentNode.disabled || !c(t.parentNode, "optgroup"))) {
              if (e = i(t).val(),
              f)
                return e;
              s.push(e)
            }
          return s
        },
        set: function(n, t) {
          for (var r, u, f = n.options, e = i.makeArray(t), o = f.length; o--; )
            ((u = f[o]).selected = -1 < i.inArray(i.valHooks.option.get(u), e)) && (r = !0);
          return r || (n.selectedIndex = -1),
          e
        }
      }
    }
  });
  i.each(["radio", "checkbox"], function() {
    i.valHooks[this] = {
      set: function(n, t) {
        if (Array.isArray(t))
          return n.checked = -1 < i.inArray(i(n).val(), t)
      }
    };
    e.checkOn || (i.valHooks[this].get = function(n) {
      return null === n.getAttribute("value") ? "on" : n.value
    }
    )
  });
  e.focusin = "onfocusin"in n;
  er = /^(?:focusinfocus|focusoutblur)$/;
  or = function(n) {
    n.stopPropagation()
  }
  ;
  i.extend(i.event, {
    trigger: function(t, e, o, s) {
      var k, c, l, d, v, y, a, p, w = [o || f], h = ui.call(t, "type") ? t.type : t, b = ui.call(t, "namespace") ? t.namespace.split(".") : [];
      if (c = p = l = o = o || f,
      3 !== o.nodeType && 8 !== o.nodeType && !er.test(h + i.event.triggered) && (-1 < h.indexOf(".") && (h = (b = h.split(".")).shift(),
      b.sort()),
      v = h.indexOf(":") < 0 && "on" + h,
      (t = t[i.expando] ? t : new i.Event(h,"object" == typeof t && t)).isTrigger = s ? 2 : 3,
      t.namespace = b.join("."),
      t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
      t.result = void 0,
      t.target || (t.target = o),
      e = null == e ? [t] : i.makeArray(e, [t]),
      a = i.event.special[h] || {},
      s || !a.trigger || !1 !== a.trigger.apply(o, e))) {
        if (!s && !a.noBubble && !tt(o)) {
          for (d = a.delegateType || h,
          er.test(d + h) || (c = c.parentNode); c; c = c.parentNode)
            w.push(c),
            l = c;
          l === (o.ownerDocument || f) && w.push(l.defaultView || l.parentWindow || n)
        }
        for (k = 0; (c = w[k++]) && !t.isPropagationStopped(); )
          p = c,
          t.type = 1 < k ? d : a.bindType || h,
          (y = (r.get(c, "events") || {})[t.type] && r.get(c, "handle")) && y.apply(c, e),
          (y = v && c[v]) && y.apply && yt(c) && (t.result = y.apply(c, e),
          !1 === t.result && t.preventDefault());
        return t.type = h,
        s || t.isDefaultPrevented() || a._default && !1 !== a._default.apply(w.pop(), e) || !yt(o) || v && u(o[h]) && !tt(o) && ((l = o[v]) && (o[v] = null),
        i.event.triggered = h,
        t.isPropagationStopped() && p.addEventListener(h, or),
        o[h](),
        t.isPropagationStopped() && p.removeEventListener(h, or),
        i.event.triggered = void 0,
        l && (o[v] = l)),
        t.result
      }
    },
    simulate: function(n, t, r) {
      var u = i.extend(new i.Event, r, {
        type: n,
        isSimulated: !0
      });
      i.event.trigger(u, null, t)
    }
  });
  i.fn.extend({
    trigger: function(n, t) {
      return this.each(function() {
        i.event.trigger(n, t, this)
      })
    },
    triggerHandler: function(n, t) {
      var r = this[0];
      if (r)
        return i.event.trigger(n, t, r, !0)
    }
  });
  e.focusin || i.each({
    focus: "focusin",
    blur: "focusout"
  }, function(n, t) {
    var u = function(n) {
      i.event.simulate(t, n.target, i.event.fix(n))
    };
    i.event.special[t] = {
      setup: function() {
        var i = this.ownerDocument || this
          , f = r.access(i, t);
        f || i.addEventListener(n, u, !0);
        r.access(i, t, (f || 0) + 1)
      },
      teardown: function() {
        var i = this.ownerDocument || this
          , f = r.access(i, t) - 1;
        f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0),
        r.remove(i, t))
      }
    }
  });
  var ti = n.location
    , pf = Date.now()
    , sr = /\?/;
  i.parseXML = function(t) {
    var r;
    if (!t || "string" != typeof t)
      return null;
    try {
      r = (new n.DOMParser).parseFromString(t, "text/xml")
    } catch (t) {
      r = void 0
    }
    return r && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t),
    r
  }
  ;
  var fo = /\[\]$/
    , wf = /\r?\n/g
    , eo = /^(?:submit|button|image|reset|file)$/i
    , oo = /^(?:input|select|textarea|keygen)/i;
  i.param = function(n, t) {
    var r, f = [], e = function(n, t) {
      var i = u(t) ? t() : t;
      f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(null == i ? "" : i)
    };
    if (null == n)
      return "";
    if (Array.isArray(n) || n.jquery && !i.isPlainObject(n))
      i.each(n, function() {
        e(this.name, this.value)
      });
    else
      for (r in n)
        hr(r, n[r], t, e);
    return f.join("&")
  }
  ;
  i.fn.extend({
    serialize: function() {
      return i.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var n = i.prop(this, "elements");
        return n ? i.makeArray(n) : this
      }).filter(function() {
        var n = this.type;
        return this.name && !i(this).is(":disabled") && oo.test(this.nodeName) && !eo.test(n) && (this.checked || !dt.test(n))
      }).map(function(n, t) {
        var r = i(this).val();
        return null == r ? null : Array.isArray(r) ? i.map(r, function(n) {
          return {
            name: t.name,
            value: n.replace(wf, "\r\n")
          }
        }) : {
          name: t.name,
          value: r.replace(wf, "\r\n")
        }
      }).get()
    }
  });
  var so = /%20/g
    , ho = /#.*$/
    , co = /([?&])_=[^&]*/
    , lo = /^(.*?):[ \t]*([^\r\n]*)$/gm
    , ao = /^(?:GET|HEAD)$/
    , vo = /^\/\//
    , bf = {}
    , cr = {}
    , kf = "*/".concat("*")
    , lr = f.createElement("a");
  return lr.href = ti.href,
  i.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ti.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ti.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": kf,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": i.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(n, t) {
      return t ? ar(ar(n, i.ajaxSettings), t) : ar(i.ajaxSettings, n)
    },
    ajaxPrefilter: df(bf),
    ajaxTransport: df(cr),
    ajax: function(t, r) {
      function b(t, r, f, c) {
        var v, rt, b, p, g, l = r;
        s || (s = !0,
        d && n.clearTimeout(d),
        a = void 0,
        k = c || "",
        e.readyState = 0 < t ? 4 : 0,
        v = 200 <= t && t < 300 || 304 === t,
        f && (p = function(n, t, i) {
          for (var e, u, f, o, s = n.contents, r = n.dataTypes; "*" === r[0]; )
            r.shift(),
            void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
          if (e)
            for (u in s)
              if (s[u] && s[u].test(e)) {
                r.unshift(u);
                break
              }
          if (r[0]in i)
            f = r[0];
          else {
            for (u in i) {
              if (!r[0] || n.converters[u + " " + r[0]]) {
                f = u;
                break
              }
              o || (o = u)
            }
            f = f || o
          }
          if (f)
            return f !== r[0] && r.unshift(f),
            i[f]
        }(u, e, f)),
        p = function(n, t, i, r) {
          var h, u, f, s, e, o = {}, c = n.dataTypes.slice();
          if (c[1])
            for (f in n.converters)
              o[f.toLowerCase()] = n.converters[f];
          for (u = c.shift(); u; )
            if (n.responseFields[u] && (i[n.responseFields[u]] = t),
            !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)),
            e = u,
            u = c.shift())
              if ("*" === u)
                u = e;
              else if ("*" !== e && e !== u) {
                if (!(f = o[e + " " + u] || o["* " + u]))
                  for (h in o)
                    if ((s = h.split(" "))[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                      !0 === f ? f = o[h] : !0 !== o[h] && (u = s[0],
                      c.unshift(s[1]));
                      break
                    }
                if (!0 !== f)
                  if (f && n.throws)
                    t = f(t);
                  else
                    try {
                      t = f(t)
                    } catch (n) {
                      return {
                        state: "parsererror",
                        error: f ? n : "No conversion from " + e + " to " + u
                      }
                    }
              }
          return {
            state: "success",
            data: t
          }
        }(u, p, e, v),
        v ? (u.ifModified && ((g = e.getResponseHeader("Last-Modified")) && (i.lastModified[o] = g),
        (g = e.getResponseHeader("etag")) && (i.etag[o] = g)),
        204 === t || "HEAD" === u.type ? l = "nocontent" : 304 === t ? l = "notmodified" : (l = p.state,
        rt = p.data,
        v = !(b = p.error))) : (b = l,
        !t && l || (l = "error",
        t < 0 && (t = 0))),
        e.status = t,
        e.statusText = (r || l) + "",
        v ? tt.resolveWith(h, [rt, l, e]) : tt.rejectWith(h, [e, l, b]),
        e.statusCode(w),
        w = void 0,
        y && nt.trigger(v ? "ajaxSuccess" : "ajaxError", [e, u, v ? rt : b]),
        it.fireWith(h, [e, l]),
        y && (nt.trigger("ajaxComplete", [e, u]),
        --i.active || i.event.trigger("ajaxStop")))
      }
      "object" == typeof t && (r = t,
      t = void 0);
      r = r || {};
      var a, o, k, v, d, c, s, y, g, p, u = i.ajaxSetup({}, r), h = u.context || u, nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event, tt = i.Deferred(), it = i.Callbacks("once memory"), w = u.statusCode || {}, rt = {}, ut = {}, ft = "canceled", e = {
        readyState: 0,
        getResponseHeader: function(n) {
          var t;
          if (s) {
            if (!v)
              for (v = {}; t = lo.exec(k); )
                v[t[1].toLowerCase() + " "] = (v[t[1].toLowerCase() + " "] || []).concat(t[2]);
            t = v[n.toLowerCase() + " "]
          }
          return null == t ? null : t.join(", ")
        },
        getAllResponseHeaders: function() {
          return s ? k : null
        },
        setRequestHeader: function(n, t) {
          return null == s && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n,
          rt[n] = t),
          this
        },
        overrideMimeType: function(n) {
          return null == s && (u.mimeType = n),
          this
        },
        statusCode: function(n) {
          var t;
          if (n)
            if (s)
              e.always(n[e.status]);
            else
              for (t in n)
                w[t] = [w[t], n[t]];
          return this
        },
        abort: function(n) {
          var t = n || ft;
          return a && a.abort(t),
          b(0, t),
          this
        }
      };
      if (tt.promise(e),
      u.url = ((t || u.url || ti.href) + "").replace(vo, ti.protocol + "//"),
      u.type = r.method || r.type || u.method || u.type,
      u.dataTypes = (u.dataType || "*").toLowerCase().match(l) || [""],
      null == u.crossDomain) {
        c = f.createElement("a");
        try {
          c.href = u.url;
          c.href = c.href;
          u.crossDomain = lr.protocol + "//" + lr.host != c.protocol + "//" + c.host
        } catch (t) {
          u.crossDomain = !0
        }
      }
      if (u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)),
      gf(bf, u, r, e),
      s)
        return e;
      for (g in (y = i.event && u.global) && 0 == i.active++ && i.event.trigger("ajaxStart"),
      u.type = u.type.toUpperCase(),
      u.hasContent = !ao.test(u.type),
      o = u.url.replace(ho, ""),
      u.hasContent ? u.data && u.processData && 0 === (u.contentType || "").indexOf("application/x-www-form-urlencoded") && (u.data = u.data.replace(so, "+")) : (p = u.url.slice(o.length),
      u.data && (u.processData || "string" == typeof u.data) && (o += (sr.test(o) ? "&" : "?") + u.data,
      delete u.data),
      !1 === u.cache && (o = o.replace(co, "$1"),
      p = (sr.test(o) ? "&" : "?") + "_=" + pf++ + p),
      u.url = o + p),
      u.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]),
      i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o])),
      (u.data && u.hasContent && !1 !== u.contentType || r.contentType) && e.setRequestHeader("Content-Type", u.contentType),
      e.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + kf + "; q=0.01" : "") : u.accepts["*"]),
      u.headers)
        e.setRequestHeader(g, u.headers[g]);
      if (u.beforeSend && (!1 === u.beforeSend.call(h, e, u) || s))
        return e.abort();
      if (ft = "abort",
      it.add(u.complete),
      e.done(u.success),
      e.fail(u.error),
      a = gf(cr, u, r, e)) {
        if (e.readyState = 1,
        y && nt.trigger("ajaxSend", [e, u]),
        s)
          return e;
        u.async && 0 < u.timeout && (d = n.setTimeout(function() {
          e.abort("timeout")
        }, u.timeout));
        try {
          s = !1;
          a.send(rt, b)
        } catch (t) {
          if (s)
            throw t;
          b(-1, t)
        }
      } else
        b(-1, "No Transport");
      return e
    },
    getJSON: function(n, t, r) {
      return i.get(n, t, r, "json")
    },
    getScript: function(n, t) {
      return i.get(n, void 0, t, "script")
    }
  }),
  i.each(["get", "post"], function(n, t) {
    i[t] = function(n, r, f, e) {
      return u(r) && (e = e || f,
      f = r,
      r = void 0),
      i.ajax(i.extend({
        url: n,
        type: t,
        dataType: e,
        data: r,
        success: f
      }, i.isPlainObject(n) && n))
    }
  }),
  i._evalUrl = function(n, t) {
    return i.ajax({
      url: n,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function() {}
      },
      dataFilter: function(n) {
        i.globalEval(n, t)
      }
    })
  }
  ,
  i.fn.extend({
    wrapAll: function(n) {
      var t;
      return this[0] && (u(n) && (n = n.call(this[0])),
      t = i(n, this[0].ownerDocument).eq(0).clone(!0),
      this[0].parentNode && t.insertBefore(this[0]),
      t.map(function() {
        for (var n = this; n.firstElementChild; )
          n = n.firstElementChild;
        return n
      }).append(this)),
      this
    },
    wrapInner: function(n) {
      return u(n) ? this.each(function(t) {
        i(this).wrapInner(n.call(this, t))
      }) : this.each(function() {
        var t = i(this)
          , r = t.contents();
        r.length ? r.wrapAll(n) : t.append(n)
      })
    },
    wrap: function(n) {
      var t = u(n);
      return this.each(function(r) {
        i(this).wrapAll(t ? n.call(this, r) : n)
      })
    },
    unwrap: function(n) {
      return this.parent(n).not("body").each(function() {
        i(this).replaceWith(this.childNodes)
      }),
      this
    }
  }),
  i.expr.pseudos.hidden = function(n) {
    return !i.expr.pseudos.visible(n)
  }
  ,
  i.expr.pseudos.visible = function(n) {
    return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length)
  }
  ,
  i.ajaxSettings.xhr = function() {
    try {
      return new n.XMLHttpRequest
    } catch (t) {}
  }
  ,
  ne = {
    0: 200,
    1223: 204
  },
  vt = i.ajaxSettings.xhr(),
  e.cors = !!vt && "withCredentials"in vt,
  e.ajax = vt = !!vt,
  i.ajaxTransport(function(t) {
    var i, r;
    if (e.cors || vt && !t.crossDomain)
      return {
        send: function(u, f) {
          var o, e = t.xhr();
          if (e.open(t.type, t.url, t.async, t.username, t.password),
          t.xhrFields)
            for (o in t.xhrFields)
              e[o] = t.xhrFields[o];
          for (o in t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType),
          t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest"),
          u)
            e.setRequestHeader(o, u[o]);
          i = function(n) {
            return function() {
              i && (i = r = e.onload = e.onerror = e.onabort = e.ontimeout = e.onreadystatechange = null,
              "abort" === n ? e.abort() : "error" === n ? "number" != typeof e.status ? f(0, "error") : f(e.status, e.statusText) : f(ne[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? {
                binary: e.response
              } : {
                text: e.responseText
              }, e.getAllResponseHeaders()))
            }
          }
          ;
          e.onload = i();
          r = e.onerror = e.ontimeout = i("error");
          void 0 !== e.onabort ? e.onabort = r : e.onreadystatechange = function() {
            4 === e.readyState && n.setTimeout(function() {
              i && r()
            })
          }
          ;
          i = i("abort");
          try {
            e.send(t.hasContent && t.data || null)
          } catch (u) {
            if (i)
              throw u;
          }
        },
        abort: function() {
          i && i()
        }
      }
  }),
  i.ajaxPrefilter(function(n) {
    n.crossDomain && (n.contents.script = !1)
  }),
  i.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function(n) {
        return i.globalEval(n),
        n
      }
    }
  }),
  i.ajaxPrefilter("script", function(n) {
    void 0 === n.cache && (n.cache = !1);
    n.crossDomain && (n.type = "GET")
  }),
  i.ajaxTransport("script", function(n) {
    var r, t;
    if (n.crossDomain || n.scriptAttrs)
      return {
        send: function(u, e) {
          r = i("<script>").attr(n.scriptAttrs || {}).prop({
            charset: n.scriptCharset,
            src: n.url
          }).on("load error", t = function(n) {
            r.remove();
            t = null;
            n && e("error" === n.type ? 404 : 200, n.type)
          }
          );
          f.head.appendChild(r[0])
        },
        abort: function() {
          t && t()
        }
      }
  }),
  vr = [],
  vi = /(=)\?(?=&|$)|\?\?/,
  i.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var n = vr.pop() || i.expando + "_" + pf++;
      return this[n] = !0,
      n
    }
  }),
  i.ajaxPrefilter("json jsonp", function(t, r, f) {
    var e, o, s, h = !1 !== t.jsonp && (vi.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && vi.test(t.data) && "data");
    if (h || "jsonp" === t.dataTypes[0])
      return e = t.jsonpCallback = u(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
      h ? t[h] = t[h].replace(vi, "$1" + e) : !1 !== t.jsonp && (t.url += (sr.test(t.url) ? "&" : "?") + t.jsonp + "=" + e),
      t.converters["script json"] = function() {
        return s || i.error(e + " was not called"),
        s[0]
      }
      ,
      t.dataTypes[0] = "json",
      o = n[e],
      n[e] = function() {
        s = arguments
      }
      ,
      f.always(function() {
        void 0 === o ? i(n).removeProp(e) : n[e] = o;
        t[e] && (t.jsonpCallback = r.jsonpCallback,
        vr.push(e));
        s && u(o) && o(s[0]);
        s = o = void 0
      }),
      "script"
  }),
  e.createHTMLDocument = ((te = f.implementation.createHTMLDocument("").body).innerHTML = "<form><\/form><form><\/form>",
  2 === te.childNodes.length),
  i.parseHTML = function(n, t, r) {
    return "string" != typeof n ? [] : ("boolean" == typeof t && (r = t,
    t = !1),
    t || (e.createHTMLDocument ? ((s = (t = f.implementation.createHTMLDocument("")).createElement("base")).href = f.location.href,
    t.head.appendChild(s)) : t = f),
    u = !r && [],
    (o = wi.exec(n)) ? [t.createElement(o[1])] : (o = vu([n], t, u),
    u && u.length && i(u).remove(),
    i.merge([], o.childNodes)));
    var s, o, u
  }
  ,
  i.fn.load = function(n, t, r) {
    var f, s, h, e = this, o = n.indexOf(" ");
    return -1 < o && (f = g(n.slice(o)),
    n = n.slice(0, o)),
    u(t) ? (r = t,
    t = void 0) : t && "object" == typeof t && (s = "POST"),
    0 < e.length && i.ajax({
      url: n,
      type: s || "GET",
      dataType: "html",
      data: t
    }).done(function(n) {
      h = arguments;
      e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n)
    }).always(r && function(n, t) {
      e.each(function() {
        r.apply(this, h || [n.responseText, t, n])
      })
    }
    ),
    this
  }
  ,
  i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
    i.fn[t] = function(n) {
      return this.on(t, n)
    }
  }),
  i.expr.pseudos.animated = function(n) {
    return i.grep(i.timers, function(t) {
      return n === t.elem
    }).length
  }
  ,
  i.offset = {
    setOffset: function(n, t, r) {
      var v, o, s, h, f, c, l = i.css(n, "position"), a = i(n), e = {};
      "static" === l && (n.style.position = "relative");
      f = a.offset();
      s = i.css(n, "top");
      c = i.css(n, "left");
      ("absolute" === l || "fixed" === l) && -1 < (s + c).indexOf("auto") ? (h = (v = a.position()).top,
      o = v.left) : (h = parseFloat(s) || 0,
      o = parseFloat(c) || 0);
      u(t) && (t = t.call(n, r, i.extend({}, f)));
      null != t.top && (e.top = t.top - f.top + h);
      null != t.left && (e.left = t.left - f.left + o);
      "using"in t ? t.using.call(n, e) : a.css(e)
    }
  },
  i.fn.extend({
    offset: function(n) {
      if (arguments.length)
        return void 0 === n ? this : this.each(function(t) {
          i.offset.setOffset(this, n, t)
        });
      var r, u, t = this[0];
      if (t)
        return t.getClientRects().length ? (r = t.getBoundingClientRect(),
        u = t.ownerDocument.defaultView,
        {
          top: r.top + u.pageYOffset,
          left: r.left + u.pageXOffset
        }) : {
          top: 0,
          left: 0
        }
    },
    position: function() {
      if (this[0]) {
        var n, r, u, t = this[0], f = {
          top: 0,
          left: 0
        };
        if ("fixed" === i.css(t, "position"))
          r = t.getBoundingClientRect();
        else {
          for (r = this.offset(),
          u = t.ownerDocument,
          n = t.offsetParent || u.documentElement; n && (n === u.body || n === u.documentElement) && "static" === i.css(n, "position"); )
            n = n.parentNode;
          n && n !== t && 1 === n.nodeType && ((f = i(n).offset()).top += i.css(n, "borderTopWidth", !0),
          f.left += i.css(n, "borderLeftWidth", !0))
        }
        return {
          top: r.top - f.top - i.css(t, "marginTop", !0),
          left: r.left - f.left - i.css(t, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var n = this.offsetParent; n && "static" === i.css(n, "position"); )
          n = n.offsetParent;
        return n || bt
      })
    }
  }),
  i.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(n, t) {
    var r = "pageYOffset" === t;
    i.fn[n] = function(i) {
      return p(this, function(n, i, u) {
        var f;
        if (tt(n) ? f = n : 9 === n.nodeType && (f = n.defaultView),
        void 0 === u)
          return f ? f[t] : n[i];
        f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : n[i] = u
      }, n, i, arguments.length)
    }
  }),
  i.each(["top", "left"], function(n, t) {
    i.cssHooks[t] = ku(e.pixelPosition, function(n, r) {
      if (r)
        return r = ni(n, t),
        tr.test(r) ? i(n).position()[t] + "px" : r
    })
  }),
  i.each({
    Height: "height",
    Width: "width"
  }, function(n, t) {
    i.each({
      padding: "inner" + n,
      content: t,
      "": "outer" + n
    }, function(r, u) {
      i.fn[u] = function(f, e) {
        var o = arguments.length && (r || "boolean" != typeof f)
          , s = r || (!0 === f || !0 === e ? "margin" : "border");
        return p(this, function(t, r, f) {
          var e;
          return tt(t) ? 0 === u.indexOf("outer") ? t["inner" + n] : t.document.documentElement["client" + n] : 9 === t.nodeType ? (e = t.documentElement,
          Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : void 0 === f ? i.css(t, r, s) : i.style(t, r, f, s)
        }, t, o ? f : void 0, o)
      }
    })
  }),
  i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(n, t) {
    i.fn[t] = function(n, i) {
      return 0 < arguments.length ? this.on(t, null, n, i) : this.trigger(t)
    }
  }),
  i.fn.extend({
    hover: function(n, t) {
      return this.mouseenter(n).mouseleave(t || n)
    }
  }),
  i.fn.extend({
    bind: function(n, t, i) {
      return this.on(n, null, t, i)
    },
    unbind: function(n, t) {
      return this.off(n, null, t)
    },
    delegate: function(n, t, i, r) {
      return this.on(t, n, i, r)
    },
    undelegate: function(n, t, i) {
      return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
    }
  }),
  i.proxy = function(n, t) {
    var r, f, e;
    if ("string" == typeof t && (r = n[t],
    t = n,
    n = r),
    u(n))
      return f = b.call(arguments, 2),
      (e = function() {
        return n.apply(t || this, f.concat(b.call(arguments)))
      }
      ).guid = n.guid = n.guid || i.guid++,
      e
  }
  ,
  i.holdReady = function(n) {
    n ? i.readyWait++ : i.ready(!0)
  }
  ,
  i.isArray = Array.isArray,
  i.parseJSON = JSON.parse,
  i.nodeName = c,
  i.isFunction = u,
  i.isWindow = tt,
  i.camelCase = y,
  i.type = it,
  i.now = Date.now,
  i.isNumeric = function(n) {
    var t = i.type(n);
    return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n))
  }
  ,
  "function" == typeof define && define.amd && define("jquery", [], function() {
    return i
  }),
  ie = n.jQuery,
  re = n.$,
  i.noConflict = function(t) {
    return n.$ === i && (n.$ = re),
    t && n.jQuery === i && (n.jQuery = ie),
    i
  }
  ,
  t || (n.jQuery = n.$ = i),
  i
});
var _0x106fa9 = _0x1b4a;
(function(n, t) {
  for (var i = _0x1b4a, r = n(), u; !![]; )
    try {
      if (u = parseInt(i(489)) / 1 + parseInt(i(413)) / 2 * (parseInt(i(417)) / 3) + -parseInt(i(407)) / 4 * (parseInt(i(420)) / 5) + parseInt(i(433)) / 6 + parseInt(i(452)) / 7 * (parseInt(i(385)) / 8) + -parseInt(i(381)) / 9 * (parseInt(i(454)) / 10) + -parseInt(i(436)) / 11,
      u === t)
        break;
      else
        r.push(r.shift())
    } catch (f) {
      r.push(r.shift())
    }
}
)(_0x41a9, 859955);
$(document)[_0x106fa9(401)](function() {
  var n = _0x106fa9
    , i = window[n(472)].search[n(434)](1)
    , t = parse_query_string(i);
  t.q !== undefined && t.q !== null && ($(n(496))[n(488)](t.q),
  ksearchvideo(![]));
  $(n(496))[n(456)](function(t) {
    var i = n;
    t.which == 13 && (t[i(449)](),
    ksearchvideo(![]))
  });
  $("#s_input")[n(437)](function() {
    $(this).select()
  });
  $(".dropdown")[n(487)]();
  $(n(458)).on(n(411), ".open-popup", function() {
    var t = n;
    $(t(428))[t(484)]("zoom-show")
  });
  $(n(458)).on(n(411), n(382), function() {
    var t = n;
    $(t(428)).removeClass(t(506));
    document[t(419)](t(423)).pause()
  });
  $(n(458)).on(n(411), n(410), function() {
    var t = n;
    if (k_live)
      return $(t(424))[t(414)]("display", t(473)),
      convertFailed(txt_notifi_live),
      ![]
  });
  $(n(458)).on(n(411), n(399), function() {
    showAd()
  })
});
jQuery.fn[_0x106fa9(479)]({
  setMenu: function() {
    return this.each(function() {
      var t = _0x1b4a
        , n = $(this)
        , i = n.find(".dropdown-title");
      i[t(411)](function() {
        var i = t
          , r = n[i(445)](".dropdown-content");
        r[i(471)](500)
      });
      $(document).click(function(i) {
        var r = t, u;
        n.is(i[r(459)]) || n[r(475)](i[r(459)])[r(427)] !== 0 || (u = n[r(445)](r(442))[r(414)](r(463)),
        u == r(473) && n[r(445)](r(442)).slideToggle(500))
      })
    })
  }
});
