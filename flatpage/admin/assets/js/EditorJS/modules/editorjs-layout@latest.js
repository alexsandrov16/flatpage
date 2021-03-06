/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.EditorJSLayout = e())
    : (t.EditorJSLayout = e());
})(self, function () {
  return (() => {
    "use strict";
    var t,
      e = {
        d: (t, o) => {
          for (var n in o)
            e.o(o, n) &&
              !e.o(t, n) &&
              Object.defineProperty(t, n, { enumerable: !0, get: o[n] });
        },
        o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
        r: (t) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(t, "__esModule", { value: !0 });
        },
      },
      o = {};
    e.r(o), e.d(o, { LayoutBlockTool: () => F });
    class n extends Error {
      constructor(...t) {
        super(...t),
          Error.captureStackTrace && Error.captureStackTrace(this, n),
          (this.name = "EditorJSLayoutError");
      }
    }
    var i = new Uint8Array(16);
    function a() {
      if (
        !t &&
        !(t =
          ("undefined" != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)) ||
          ("undefined" != typeof msCrypto &&
            "function" == typeof msCrypto.getRandomValues &&
            msCrypto.getRandomValues.bind(msCrypto)))
      )
        throw new Error(
          "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
        );
      return t(i);
    }
    const r =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
      s = function (t) {
        return "string" == typeof t && r.test(t);
      };
    for (var d = [], l = 0; l < 256; ++l)
      d.push((l + 256).toString(16).substr(1));
    const c = function (t, e, o) {
      var n = (t = t || {}).random || (t.rng || a)();
      if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
        o = o || 0;
        for (var i = 0; i < 16; ++i) e[o + i] = n[i];
        return e;
      }
      return (function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          o = (
            d[t[e + 0]] +
            d[t[e + 1]] +
            d[t[e + 2]] +
            d[t[e + 3]] +
            "-" +
            d[t[e + 4]] +
            d[t[e + 5]] +
            "-" +
            d[t[e + 6]] +
            d[t[e + 7]] +
            "-" +
            d[t[e + 8]] +
            d[t[e + 9]] +
            "-" +
            d[t[e + 10]] +
            d[t[e + 11]] +
            d[t[e + 12]] +
            d[t[e + 13]] +
            d[t[e + 14]] +
            d[t[e + 15]]
          ).toLowerCase();
        if (!s(o)) throw TypeError("Stringified UUID is invalid");
        return o;
      })(n);
    };
    var u = window.CustomEvent;
    function h(t, e) {
      var o = "on" + e.type.toLowerCase();
      return "function" == typeof t[o] && t[o](e), t.dispatchEvent(e);
    }
    function p(t) {
      for (; t; ) {
        if ("dialog" === t.localName) return t;
        t = t.parentElement
          ? t.parentElement
          : t.parentNode
          ? t.parentNode.host
          : null;
      }
      return null;
    }
    function m(t) {
      for (; t && t.shadowRoot && t.shadowRoot.activeElement; )
        t = t.shadowRoot.activeElement;
      t && t.blur && t !== document.body && t.blur();
    }
    function f(t, e) {
      for (var o = 0; o < t.length; ++o) if (t[o] === e) return !0;
      return !1;
    }
    function g(t) {
      return (
        !(!t || !t.hasAttribute("method")) &&
        "dialog" === t.getAttribute("method").toLowerCase()
      );
    }
    function y(t) {
      var e = ["button", "input", "keygen", "select", "textarea"].map(function (
        t
      ) {
        return t + ":not([disabled])";
      });
      e.push('[tabindex]:not([disabled]):not([tabindex=""])');
      var o = t.querySelector(e.join(", "));
      if (!o && "attachShadow" in Element.prototype)
        for (
          var n = t.querySelectorAll("*"), i = 0;
          i < n.length &&
          !(n[i].tagName && n[i].shadowRoot && (o = y(n[i].shadowRoot)));
          i++
        );
      return o;
    }
    function v(t) {
      return t.isConnected || document.body.contains(t);
    }
    function b(t) {
      if (t.submitter) return t.submitter;
      var e = t.target;
      if (!(e instanceof HTMLFormElement)) return null;
      var o = _.formSubmitter;
      if (!o) {
        var n = t.target;
        o = (("getRootNode" in n && n.getRootNode()) || document).activeElement;
      }
      return o && o.form === e ? o : null;
    }
    function w(t) {
      if (!t.defaultPrevented) {
        var e = t.target,
          o = _.imagemapUseValue,
          n = b(t);
        null === o && n && (o = n.value);
        var i = p(e);
        i &&
          "dialog" ===
            ((n && n.getAttribute("formmethod")) || e.getAttribute("method")) &&
          (t.preventDefault(), null != o ? i.close(o) : i.close());
      }
    }
    function E(t) {
      if (
        ((this.dialog_ = t),
        (this.replacedStyleTop_ = !1),
        (this.openAsModal_ = !1),
        t.hasAttribute("role") || t.setAttribute("role", "dialog"),
        (t.show = this.show.bind(this)),
        (t.showModal = this.showModal.bind(this)),
        (t.close = this.close.bind(this)),
        t.addEventListener("submit", w, !1),
        "returnValue" in t || (t.returnValue = ""),
        "MutationObserver" in window)
      )
        new MutationObserver(this.maybeHideModal.bind(this)).observe(t, {
          attributes: !0,
          attributeFilter: ["open"],
        });
      else {
        var e,
          o = !1,
          n = function () {
            o ? this.downgradeModal() : this.maybeHideModal(), (o = !1);
          }.bind(this),
          i = function (i) {
            if (i.target === t) {
              var a = "DOMNodeRemoved";
              (o |= i.type.substr(0, a.length) === a),
                window.clearTimeout(e),
                (e = window.setTimeout(n, 0));
            }
          };
        [
          "DOMAttrModified",
          "DOMNodeRemoved",
          "DOMNodeRemovedFromDocument",
        ].forEach(function (e) {
          t.addEventListener(e, i);
        });
      }
      Object.defineProperty(t, "open", {
        set: this.setOpen.bind(this),
        get: t.hasAttribute.bind(t, "open"),
      }),
        (this.backdrop_ = document.createElement("div")),
        (this.backdrop_.className = "backdrop"),
        this.backdrop_.addEventListener(
          "mouseup",
          this.backdropMouseEvent_.bind(this)
        ),
        this.backdrop_.addEventListener(
          "mousedown",
          this.backdropMouseEvent_.bind(this)
        ),
        this.backdrop_.addEventListener(
          "click",
          this.backdropMouseEvent_.bind(this)
        );
    }
    (u && "object" != typeof u) ||
      ((u = function (t, e) {
        e = e || {};
        var o = document.createEvent("CustomEvent");
        return (
          o.initCustomEvent(t, !!e.bubbles, !!e.cancelable, e.detail || null), o
        );
      }).prototype = window.Event.prototype),
      (E.prototype = {
        get dialog() {
          return this.dialog_;
        },
        maybeHideModal: function () {
          (this.dialog_.hasAttribute("open") && v(this.dialog_)) ||
            this.downgradeModal();
        },
        downgradeModal: function () {
          this.openAsModal_ &&
            ((this.openAsModal_ = !1),
            (this.dialog_.style.zIndex = ""),
            this.replacedStyleTop_ &&
              ((this.dialog_.style.top = ""), (this.replacedStyleTop_ = !1)),
            this.backdrop_.parentNode &&
              this.backdrop_.parentNode.removeChild(this.backdrop_),
            _.dm.removeDialog(this));
        },
        setOpen: function (t) {
          t
            ? this.dialog_.hasAttribute("open") ||
              this.dialog_.setAttribute("open", "")
            : (this.dialog_.removeAttribute("open"), this.maybeHideModal());
        },
        backdropMouseEvent_: function (t) {
          if (this.dialog_.hasAttribute("tabindex")) this.dialog_.focus();
          else {
            var e = document.createElement("div");
            this.dialog_.insertBefore(e, this.dialog_.firstChild),
              (e.tabIndex = -1),
              e.focus(),
              this.dialog_.removeChild(e);
          }
          var o = document.createEvent("MouseEvents");
          o.initMouseEvent(
            t.type,
            t.bubbles,
            t.cancelable,
            window,
            t.detail,
            t.screenX,
            t.screenY,
            t.clientX,
            t.clientY,
            t.ctrlKey,
            t.altKey,
            t.shiftKey,
            t.metaKey,
            t.button,
            t.relatedTarget
          ),
            this.dialog_.dispatchEvent(o),
            t.stopPropagation();
        },
        focus_: function () {
          var t = this.dialog_.querySelector("[autofocus]:not([disabled])");
          !t && this.dialog_.tabIndex >= 0 && (t = this.dialog_),
            t || (t = y(this.dialog_)),
            m(document.activeElement),
            t && t.focus();
        },
        updateZIndex: function (t, e) {
          if (t < e) throw new Error("dialogZ should never be < backdropZ");
          (this.dialog_.style.zIndex = t), (this.backdrop_.style.zIndex = e);
        },
        show: function () {
          this.dialog_.open || (this.setOpen(!0), this.focus_());
        },
        showModal: function () {
          if (this.dialog_.hasAttribute("open"))
            throw new Error(
              "Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally."
            );
          if (!v(this.dialog_))
            throw new Error(
              "Failed to execute 'showModal' on dialog: The element is not in a Document."
            );
          if (!_.dm.pushDialog(this))
            throw new Error(
              "Failed to execute 'showModal' on dialog: There are too many open modal dialogs."
            );
          (function (t) {
            for (; t && t !== document.body; ) {
              var e = window.getComputedStyle(t),
                o = function (t, o) {
                  return !(void 0 === e[t] || e[t] === o);
                };
              if (
                e.opacity < 1 ||
                o("zIndex", "auto") ||
                o("transform", "none") ||
                o("mixBlendMode", "normal") ||
                o("filter", "none") ||
                o("perspective", "none") ||
                "isolate" === e.isolation ||
                "fixed" === e.position ||
                "touch" === e.webkitOverflowScrolling
              )
                return !0;
              t = t.parentElement;
            }
            return !1;
          })(this.dialog_.parentElement) &&
            console.warn(
              "A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"
            ),
            this.setOpen(!0),
            (this.openAsModal_ = !0),
            _.needsCentering(this.dialog_)
              ? (_.reposition(this.dialog_), (this.replacedStyleTop_ = !0))
              : (this.replacedStyleTop_ = !1),
            this.dialog_.parentNode.insertBefore(
              this.backdrop_,
              this.dialog_.nextSibling
            ),
            this.focus_();
        },
        close: function (t) {
          if (!this.dialog_.hasAttribute("open"))
            throw new Error(
              "Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed."
            );
          this.setOpen(!1), void 0 !== t && (this.dialog_.returnValue = t);
          var e = new u("close", { bubbles: !1, cancelable: !1 });
          h(this.dialog_, e);
        },
      });
    var _ = {
      reposition: function (t) {
        var e = document.body.scrollTop || document.documentElement.scrollTop,
          o = e + (window.innerHeight - t.offsetHeight) / 2;
        t.style.top = Math.max(e, o) + "px";
      },
      isInlinePositionSetByStylesheet: function (t) {
        for (var e = 0; e < document.styleSheets.length; ++e) {
          var o = document.styleSheets[e],
            n = null;
          try {
            n = o.cssRules;
          } catch (t) {}
          if (n)
            for (var i = 0; i < n.length; ++i) {
              var a = n[i],
                r = null;
              try {
                r = document.querySelectorAll(a.selectorText);
              } catch (t) {}
              if (r && f(r, t)) {
                var s = a.style.getPropertyValue("top"),
                  d = a.style.getPropertyValue("bottom");
                if ((s && "auto" !== s) || (d && "auto" !== d)) return !0;
              }
            }
        }
        return !1;
      },
      needsCentering: function (t) {
        return !(
          "absolute" !== window.getComputedStyle(t).position ||
          ("auto" !== t.style.top && "" !== t.style.top) ||
          ("auto" !== t.style.bottom && "" !== t.style.bottom) ||
          _.isInlinePositionSetByStylesheet(t)
        );
      },
      forceRegisterDialog: function (t) {
        if (
          ((window.HTMLDialogElement || t.showModal) &&
            console.warn(
              "This browser already supports <dialog>, the polyfill may not work correctly",
              t
            ),
          "dialog" !== t.localName)
        )
          throw new Error(
            "Failed to register dialog: The element is not a dialog."
          );
        new E(t);
      },
      registerDialog: function (t) {
        t.showModal || _.forceRegisterDialog(t);
      },
      DialogManager: function () {
        this.pendingDialogStack = [];
        var t = this.checkDOM_.bind(this);
        (this.overlay = document.createElement("div")),
          (this.overlay.className = "_dialog_overlay"),
          this.overlay.addEventListener(
            "click",
            function (e) {
              (this.forwardTab_ = void 0), e.stopPropagation(), t([]);
            }.bind(this)
          ),
          (this.handleKey_ = this.handleKey_.bind(this)),
          (this.handleFocus_ = this.handleFocus_.bind(this)),
          (this.zIndexLow_ = 1e5),
          (this.zIndexHigh_ = 100150),
          (this.forwardTab_ = void 0),
          "MutationObserver" in window &&
            (this.mo_ = new MutationObserver(function (e) {
              var o = [];
              e.forEach(function (t) {
                for (var e, n = 0; (e = t.removedNodes[n]); ++n)
                  e instanceof Element &&
                    ("dialog" === e.localName && o.push(e),
                    (o = o.concat(e.querySelectorAll("dialog"))));
              }),
                o.length && t(o);
            }));
      },
    };
    if (
      ((_.DialogManager.prototype.blockDocument = function () {
        document.documentElement.addEventListener(
          "focus",
          this.handleFocus_,
          !0
        ),
          document.addEventListener("keydown", this.handleKey_),
          this.mo_ &&
            this.mo_.observe(document, { childList: !0, subtree: !0 });
      }),
      (_.DialogManager.prototype.unblockDocument = function () {
        document.documentElement.removeEventListener(
          "focus",
          this.handleFocus_,
          !0
        ),
          document.removeEventListener("keydown", this.handleKey_),
          this.mo_ && this.mo_.disconnect();
      }),
      (_.DialogManager.prototype.updateStacking = function () {
        for (
          var t, e = this.zIndexHigh_, o = 0;
          (t = this.pendingDialogStack[o]);
          ++o
        )
          t.updateZIndex(--e, --e),
            0 === o && (this.overlay.style.zIndex = --e);
        var n = this.pendingDialogStack[0];
        n
          ? (n.dialog.parentNode || document.body).appendChild(this.overlay)
          : this.overlay.parentNode &&
            this.overlay.parentNode.removeChild(this.overlay);
      }),
      (_.DialogManager.prototype.containedByTopDialog_ = function (t) {
        for (; (t = p(t)); ) {
          for (var e, o = 0; (e = this.pendingDialogStack[o]); ++o)
            if (e.dialog === t) return 0 === o;
          t = t.parentElement;
        }
        return !1;
      }),
      (_.DialogManager.prototype.handleFocus_ = function (t) {
        var e = t.composedPath ? t.composedPath()[0] : t.target;
        if (
          !this.containedByTopDialog_(e) &&
          document.activeElement !== document.documentElement &&
          (t.preventDefault(),
          t.stopPropagation(),
          m(e),
          void 0 !== this.forwardTab_)
        ) {
          var o = this.pendingDialogStack[0];
          return (
            o.dialog.compareDocumentPosition(e) &
              Node.DOCUMENT_POSITION_PRECEDING &&
              (this.forwardTab_
                ? o.focus_()
                : e !== document.documentElement &&
                  document.documentElement.focus()),
            !1
          );
        }
      }),
      (_.DialogManager.prototype.handleKey_ = function (t) {
        if (((this.forwardTab_ = void 0), 27 === t.keyCode)) {
          t.preventDefault(), t.stopPropagation();
          var e = new u("cancel", { bubbles: !1, cancelable: !0 }),
            o = this.pendingDialogStack[0];
          o && h(o.dialog, e) && o.dialog.close();
        } else 9 === t.keyCode && (this.forwardTab_ = !t.shiftKey);
      }),
      (_.DialogManager.prototype.checkDOM_ = function (t) {
        this.pendingDialogStack.slice().forEach(function (e) {
          -1 !== t.indexOf(e.dialog) ? e.downgradeModal() : e.maybeHideModal();
        });
      }),
      (_.DialogManager.prototype.pushDialog = function (t) {
        var e = (this.zIndexHigh_ - this.zIndexLow_) / 2 - 1;
        return !(
          this.pendingDialogStack.length >= e ||
          (1 === this.pendingDialogStack.unshift(t) && this.blockDocument(),
          this.updateStacking(),
          0)
        );
      }),
      (_.DialogManager.prototype.removeDialog = function (t) {
        var e = this.pendingDialogStack.indexOf(t);
        -1 !== e &&
          (this.pendingDialogStack.splice(e, 1),
          0 === this.pendingDialogStack.length && this.unblockDocument(),
          this.updateStacking());
      }),
      (_.dm = new _.DialogManager()),
      (_.formSubmitter = null),
      (_.imagemapUseValue = null),
      void 0 === window.HTMLDialogElement)
    ) {
      var k = document.createElement("form");
      if ((k.setAttribute("method", "dialog"), "dialog" !== k.method)) {
        var S = Object.getOwnPropertyDescriptor(
          HTMLFormElement.prototype,
          "method"
        );
        if (S) {
          var D = S.get;
          S.get = function () {
            return g(this) ? "dialog" : D.call(this);
          };
          var M = S.set;
          (S.set = function (t) {
            return "string" == typeof t && "dialog" === t.toLowerCase()
              ? this.setAttribute("method", t)
              : M.call(this, t);
          }),
            Object.defineProperty(HTMLFormElement.prototype, "method", S);
        }
      }
      document.addEventListener(
        "click",
        function (t) {
          if (
            ((_.formSubmitter = null),
            (_.imagemapUseValue = null),
            !t.defaultPrevented)
          ) {
            var e = t.target;
            if (
              ("composedPath" in t && (e = t.composedPath().shift() || e),
              e && g(e.form))
            ) {
              if (
                !(
                  "submit" === e.type &&
                  ["button", "input"].indexOf(e.localName) > -1
                )
              ) {
                if ("input" !== e.localName || "image" !== e.type) return;
                _.imagemapUseValue = t.offsetX + "," + t.offsetY;
              }
              p(e) && (_.formSubmitter = e);
            }
          }
        },
        !1
      ),
        document.addEventListener("submit", function (t) {
          var e = t.target;
          if (!p(e)) {
            var o = b(t);
            "dialog" ===
              ((o && o.getAttribute("formmethod")) ||
                e.getAttribute("method")) && t.preventDefault();
          }
        });
      var x = HTMLFormElement.prototype.submit;
      HTMLFormElement.prototype.submit = function () {
        if (!g(this)) return x.call(this);
        var t = p(this);
        t && t.close();
      };
    }
    const O = _;
    const C = ({
      EditorJS: t,
      data: e,
      dispatchData: o,
      editorJSConfig: n,
      itemContentId: i,
      readOnly: a,
    }) => {
      const r = c(),
        s = document.createElement("div");
      return (
        (s.id = r),
        a ||
          ((s.style.cursor = "pointer"),
          s.addEventListener("click", () => {
            const a = (({
              EditorJS: t,
              data: e,
              editorJSConfig: o,
              onClose: n,
            }) => {
              const i = document.createElement("dialog");
              O.registerDialog(i),
                (i.style.maxWidth = "960px"),
                (i.style.padding = "0"),
                (i.style.width = "calc(100% - 64px)");
              const a = document.createElement("div"),
                r = c();
              (a.id = r), i.append(a);
              const s = new t(
                  Object.assign(Object.assign({}, o), { holder: r, data: e })
                ),
                d = (t) => {
                  t.target instanceof Node &&
                    t.target.isEqualNode(i) &&
                    i.close();
                };
              i.addEventListener("click", d);
              const l = () => {
                return (
                  (t = void 0),
                  (e = void 0),
                  (a = function* () {
                    const t = yield s.save();
                    s.destroy(),
                      i.removeEventListener("click", d),
                      i.removeEventListener("close", l),
                      i.remove(),
                      null == n || n({ editorJSData: t });
                  }),
                  new ((o = void 0) || (o = Promise))(function (n, i) {
                    function r(t) {
                      try {
                        d(a.next(t));
                      } catch (t) {
                        i(t);
                      }
                    }
                    function s(t) {
                      try {
                        d(a.throw(t));
                      } catch (t) {
                        i(t);
                      }
                    }
                    function d(t) {
                      var e;
                      t.done
                        ? n(t.value)
                        : ((e = t.value),
                          e instanceof o
                            ? e
                            : new o(function (t) {
                                t(e);
                              })).then(r, s);
                    }
                    d((a = a.apply(t, e || [])).next());
                  })
                );
                var t, e, o, a;
              };
              return i.addEventListener("close", l), i;
            })({
              EditorJS: t,
              data: e,
              editorJSConfig: n,
              onClose: ({ editorJSData: t }) => {
                return (
                  (e = void 0),
                  (n = void 0),
                  (r = function* () {
                    return o(({ itemContent: e, layout: o }) => ({
                      itemContent: Object.assign(Object.assign({}, e), {
                        [i]: { blocks: t.blocks },
                      }),
                      layout: o,
                    }));
                  }),
                  new ((a = void 0) || (a = Promise))(function (t, o) {
                    function i(t) {
                      try {
                        d(r.next(t));
                      } catch (t) {
                        o(t);
                      }
                    }
                    function s(t) {
                      try {
                        d(r.throw(t));
                      } catch (t) {
                        o(t);
                      }
                    }
                    function d(e) {
                      var o;
                      e.done
                        ? t(e.value)
                        : ((o = e.value),
                          o instanceof a
                            ? o
                            : new a(function (t) {
                                t(o);
                              })).then(i, s);
                    }
                    d((r = r.apply(e, n || [])).next());
                  })
                );
                var e, n, a, r;
              },
            });
            document.body.append(a), a.showModal();
          })),
        new t(
          Object.assign(Object.assign({}, n), {
            holder: r,
            data: e,
            minHeight: 0,
            readOnly: !0,
          })
        ),
        s
      );
    };
    const T = (t) => {
      var { data: e, itemContentData: o } = t,
        i = (function (t, e) {
          var o = {};
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) &&
              e.indexOf(n) < 0 &&
              (o[n] = t[n]);
          if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (n = Object.getOwnPropertySymbols(t); i < n.length; i++)
              e.indexOf(n[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, n[i]) &&
                (o[n[i]] = t[n[i]]);
          }
          return o;
        })(t, ["data", "itemContentData"]);
      const a = document.createElement("div");
      return (
        (a.id = e.id),
        (a.className = e.className),
        (a.style.cssText = e.style),
        e.children.forEach((t) => {
          let e;
          switch (t.type) {
            case "container":
              e = T(
                Object.assign(Object.assign({}, i), {
                  data: t,
                  itemContentData: o,
                })
              );
              break;
            case "item":
              e = ((t) => {
                var e,
                  { data: o, itemContentData: n } = t,
                  i = (function (t, e) {
                    var o = {};
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        e.indexOf(n) < 0 &&
                        (o[n] = t[n]);
                    if (
                      null != t &&
                      "function" == typeof Object.getOwnPropertySymbols
                    ) {
                      var i = 0;
                      for (
                        n = Object.getOwnPropertySymbols(t);
                        i < n.length;
                        i++
                      )
                        e.indexOf(n[i]) < 0 &&
                          Object.prototype.propertyIsEnumerable.call(t, n[i]) &&
                          (o[n[i]] = t[n[i]]);
                    }
                    return o;
                  })(t, ["data", "itemContentData"]);
                const a = document.createElement("div");
                (a.id = o.id),
                  (a.className = o.className),
                  (a.style.cssText = o.style);
                const r =
                  null !== (e = n[o.itemContentId]) && void 0 !== e
                    ? e
                    : { blocks: [] };
                return (
                  a.append(
                    C(
                      Object.assign(Object.assign({}, i), {
                        data: r,
                        itemContentId: o.itemContentId,
                      })
                    )
                  ),
                  a
                );
              })(
                Object.assign(Object.assign({}, i), {
                  data: t,
                  itemContentData: o,
                })
              );
              break;
            default:
              throw new n();
          }
          a.append(e);
        }),
        a
      );
    };
    var L,
      j,
      N,
      P,
      A,
      I,
      R = function (t, e, o) {
        if (!e.has(t))
          throw new TypeError("attempted to set private field on non-instance");
        return e.set(t, o), o;
      },
      H = function (t, e) {
        if (!e.has(t))
          throw new TypeError("attempted to get private field on non-instance");
        return e.get(t);
      };
    class F {
      constructor({ config: t, data: e, readOnly: o }) {
        L.set(this, void 0),
          j.set(this, void 0),
          N.set(this, void 0),
          P.set(this, void 0),
          A.set(this, void 0),
          I.set(this, (t) => {
            const e = t({ itemContent: H(this, P), layout: H(this, A) });
            R(this, P, e.itemContent),
              R(this, A, e.layout),
              this.renderWrapper();
          }),
          R(this, j, o),
          R(this, N, document.createElement("div")),
          R(this, P, {}),
          R(this, A, {
            type: "container",
            id: "",
            className: "",
            style: "",
            children: [],
          }),
          t &&
            "EditorJS" in t &&
            (R(this, L, t),
            R(this, P, t.initialData.itemContent),
            t.initialData.layout && R(this, A, t.initialData.layout)),
          e &&
            "itemContent" in e &&
            (R(this, P, e.itemContent), e.layout && R(this, A, e.layout));
      }
      static get isReadOnlySupported() {
        return !0;
      }
      static get shortcut() {
        return "CMD+L";
      }
      static get toolbox() {
        return {
          icon: '\n        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">\n          <rect x="48" y="48" width="176" height="176" rx="20" ry="20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>\n          <rect x="288" y="48" width="176" height="176" rx="20" ry="20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>\n          <rect x="48" y="288" width="176" height="176" rx="20" ry="20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>\n          <rect x="288" y="288" width="176" height="176" rx="20" ry="20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>\n        </svg>\n      ',
          title: "Layout",
        };
      }
      render() {
        return this.renderWrapper(), H(this, N);
      }
      save() {
        return {
          itemContent: H(this, P),
          layout: H(this, L).enableLayoutSaving ? H(this, A) : void 0,
        };
      }
      validate(t) {
        return !0;
      }
      renderWrapper() {
        (H(this, N).innerHTML = ""),
          H(this, N).append(
            T({
              EditorJS: H(this, L).EditorJS,
              data: H(this, A),
              dispatchData: H(this, I),
              editorJSConfig: H(this, L).editorJSConfig,
              itemContentData: H(this, P),
              readOnly: H(this, j),
            })
          );
      }
    }
    return (
      (L = new WeakMap()),
      (j = new WeakMap()),
      (N = new WeakMap()),
      (P = new WeakMap()),
      (A = new WeakMap()),
      (I = new WeakMap()),
      o
    );
  })();
});
