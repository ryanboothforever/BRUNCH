// 86acbd31cd7c09cf30acb66d2fbedc91daa48b86:1629223362.0137255
!(function (n, r, e, t, c) {
  var i,
    o = "Promise" in n,
    u = {
      then: function () {
        return u;
      },
      catch: function (n) {
        return n(new Error("Airship SDK Error: Unsupported browser")), u;
      },
    },
    s = o
      ? new Promise(function (n, r) {
          i = function (e, t) {
            e ? r(e) : n(t);
          };
        })
      : u;
  (s._async_setup = function (n) {
    if (o)
      try {
        i(null, n(c));
      } catch (n) {
        i(n);
      }
  }),
    (n[t] = s);
  var a = r.createElement("script");
  (a.src = e),
    (a.async = !0),
    (a.id = "_uasdk"),
    (a.rel = t),
    r.head.appendChild(a);
})(window, document, "https://aswpsdkus.com/notify/v1/ua-sdk.min.js", "UA", {
  vapidPublicKey:
    "BIByiKANzvxEdCKLi6DfOGJ3aM1fJ6IZ4v0MEXUZxeTKByzwrBx3zZbc-WwBndSsLZ9rUK7wubQsYxITQQUOVsQ=",
  websitePushId: "web.airship.test",
  appKey: "fDmm2SQjTJKR2ut7duxiDw",
  token:
    "MTpmRG1tMlNRalRKS1IydXQ3ZHV4aUR3OndveFFVekFNaFJzSGM2UC1Rd2JpMjBWN01uRFZsc2hTTkdIWFlOLVI4S0k",
});
