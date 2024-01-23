var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// .wrangler/tmp/bundle-wshuRb/checked-fetch.js
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
var urls;
var init_checked_fetch = __esm({
  ".wrangler/tmp/bundle-wshuRb/checked-fetch.js"() {
    "use strict";
    urls = /* @__PURE__ */ new Set();
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init] = argArray;
        checkURL(request, init);
        return Reflect.apply(target, thisArg, argArray);
      }
    });
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// (disabled):crypto
var require_crypto = __commonJS({
  "(disabled):crypto"() {
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// node_modules/tweetnacl/nacl-fast.js
var require_nacl_fast = __commonJS({
  "node_modules/tweetnacl/nacl-fast.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    (function(nacl) {
      "use strict";
      var gf = function(init) {
        var i2, r = new Float64Array(16);
        if (init)
          for (i2 = 0; i2 < init.length; i2++)
            r[i2] = init[i2];
        return r;
      };
      var randombytes = function() {
        throw new Error("no PRNG");
      };
      var _0 = new Uint8Array(16);
      var _9 = new Uint8Array(32);
      _9[0] = 9;
      var gf0 = gf(), gf1 = gf([1]), _121665 = gf([56129, 1]), D = gf([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), D2 = gf([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]), X = gf([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]), Y = gf([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]), I = gf([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
      function ts64(x, i2, h, l2) {
        x[i2] = h >> 24 & 255;
        x[i2 + 1] = h >> 16 & 255;
        x[i2 + 2] = h >> 8 & 255;
        x[i2 + 3] = h & 255;
        x[i2 + 4] = l2 >> 24 & 255;
        x[i2 + 5] = l2 >> 16 & 255;
        x[i2 + 6] = l2 >> 8 & 255;
        x[i2 + 7] = l2 & 255;
      }
      function vn(x, xi, y, yi, n) {
        var i2, d2 = 0;
        for (i2 = 0; i2 < n; i2++)
          d2 |= x[xi + i2] ^ y[yi + i2];
        return (1 & d2 - 1 >>> 8) - 1;
      }
      function crypto_verify_16(x, xi, y, yi) {
        return vn(x, xi, y, yi, 16);
      }
      function crypto_verify_32(x, xi, y, yi) {
        return vn(x, xi, y, yi, 32);
      }
      function core_salsa20(o2, p2, k, c2) {
        var j0 = c2[0] & 255 | (c2[1] & 255) << 8 | (c2[2] & 255) << 16 | (c2[3] & 255) << 24, j1 = k[0] & 255 | (k[1] & 255) << 8 | (k[2] & 255) << 16 | (k[3] & 255) << 24, j2 = k[4] & 255 | (k[5] & 255) << 8 | (k[6] & 255) << 16 | (k[7] & 255) << 24, j3 = k[8] & 255 | (k[9] & 255) << 8 | (k[10] & 255) << 16 | (k[11] & 255) << 24, j4 = k[12] & 255 | (k[13] & 255) << 8 | (k[14] & 255) << 16 | (k[15] & 255) << 24, j5 = c2[4] & 255 | (c2[5] & 255) << 8 | (c2[6] & 255) << 16 | (c2[7] & 255) << 24, j6 = p2[0] & 255 | (p2[1] & 255) << 8 | (p2[2] & 255) << 16 | (p2[3] & 255) << 24, j7 = p2[4] & 255 | (p2[5] & 255) << 8 | (p2[6] & 255) << 16 | (p2[7] & 255) << 24, j8 = p2[8] & 255 | (p2[9] & 255) << 8 | (p2[10] & 255) << 16 | (p2[11] & 255) << 24, j9 = p2[12] & 255 | (p2[13] & 255) << 8 | (p2[14] & 255) << 16 | (p2[15] & 255) << 24, j10 = c2[8] & 255 | (c2[9] & 255) << 8 | (c2[10] & 255) << 16 | (c2[11] & 255) << 24, j11 = k[16] & 255 | (k[17] & 255) << 8 | (k[18] & 255) << 16 | (k[19] & 255) << 24, j12 = k[20] & 255 | (k[21] & 255) << 8 | (k[22] & 255) << 16 | (k[23] & 255) << 24, j13 = k[24] & 255 | (k[25] & 255) << 8 | (k[26] & 255) << 16 | (k[27] & 255) << 24, j14 = k[28] & 255 | (k[29] & 255) << 8 | (k[30] & 255) << 16 | (k[31] & 255) << 24, j15 = c2[12] & 255 | (c2[13] & 255) << 8 | (c2[14] & 255) << 16 | (c2[15] & 255) << 24;
        var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
        for (var i2 = 0; i2 < 20; i2 += 2) {
          u = x0 + x12 | 0;
          x4 ^= u << 7 | u >>> 32 - 7;
          u = x4 + x0 | 0;
          x8 ^= u << 9 | u >>> 32 - 9;
          u = x8 + x4 | 0;
          x12 ^= u << 13 | u >>> 32 - 13;
          u = x12 + x8 | 0;
          x0 ^= u << 18 | u >>> 32 - 18;
          u = x5 + x1 | 0;
          x9 ^= u << 7 | u >>> 32 - 7;
          u = x9 + x5 | 0;
          x13 ^= u << 9 | u >>> 32 - 9;
          u = x13 + x9 | 0;
          x1 ^= u << 13 | u >>> 32 - 13;
          u = x1 + x13 | 0;
          x5 ^= u << 18 | u >>> 32 - 18;
          u = x10 + x6 | 0;
          x14 ^= u << 7 | u >>> 32 - 7;
          u = x14 + x10 | 0;
          x2 ^= u << 9 | u >>> 32 - 9;
          u = x2 + x14 | 0;
          x6 ^= u << 13 | u >>> 32 - 13;
          u = x6 + x2 | 0;
          x10 ^= u << 18 | u >>> 32 - 18;
          u = x15 + x11 | 0;
          x3 ^= u << 7 | u >>> 32 - 7;
          u = x3 + x15 | 0;
          x7 ^= u << 9 | u >>> 32 - 9;
          u = x7 + x3 | 0;
          x11 ^= u << 13 | u >>> 32 - 13;
          u = x11 + x7 | 0;
          x15 ^= u << 18 | u >>> 32 - 18;
          u = x0 + x3 | 0;
          x1 ^= u << 7 | u >>> 32 - 7;
          u = x1 + x0 | 0;
          x2 ^= u << 9 | u >>> 32 - 9;
          u = x2 + x1 | 0;
          x3 ^= u << 13 | u >>> 32 - 13;
          u = x3 + x2 | 0;
          x0 ^= u << 18 | u >>> 32 - 18;
          u = x5 + x4 | 0;
          x6 ^= u << 7 | u >>> 32 - 7;
          u = x6 + x5 | 0;
          x7 ^= u << 9 | u >>> 32 - 9;
          u = x7 + x6 | 0;
          x4 ^= u << 13 | u >>> 32 - 13;
          u = x4 + x7 | 0;
          x5 ^= u << 18 | u >>> 32 - 18;
          u = x10 + x9 | 0;
          x11 ^= u << 7 | u >>> 32 - 7;
          u = x11 + x10 | 0;
          x8 ^= u << 9 | u >>> 32 - 9;
          u = x8 + x11 | 0;
          x9 ^= u << 13 | u >>> 32 - 13;
          u = x9 + x8 | 0;
          x10 ^= u << 18 | u >>> 32 - 18;
          u = x15 + x14 | 0;
          x12 ^= u << 7 | u >>> 32 - 7;
          u = x12 + x15 | 0;
          x13 ^= u << 9 | u >>> 32 - 9;
          u = x13 + x12 | 0;
          x14 ^= u << 13 | u >>> 32 - 13;
          u = x14 + x13 | 0;
          x15 ^= u << 18 | u >>> 32 - 18;
        }
        x0 = x0 + j0 | 0;
        x1 = x1 + j1 | 0;
        x2 = x2 + j2 | 0;
        x3 = x3 + j3 | 0;
        x4 = x4 + j4 | 0;
        x5 = x5 + j5 | 0;
        x6 = x6 + j6 | 0;
        x7 = x7 + j7 | 0;
        x8 = x8 + j8 | 0;
        x9 = x9 + j9 | 0;
        x10 = x10 + j10 | 0;
        x11 = x11 + j11 | 0;
        x12 = x12 + j12 | 0;
        x13 = x13 + j13 | 0;
        x14 = x14 + j14 | 0;
        x15 = x15 + j15 | 0;
        o2[0] = x0 >>> 0 & 255;
        o2[1] = x0 >>> 8 & 255;
        o2[2] = x0 >>> 16 & 255;
        o2[3] = x0 >>> 24 & 255;
        o2[4] = x1 >>> 0 & 255;
        o2[5] = x1 >>> 8 & 255;
        o2[6] = x1 >>> 16 & 255;
        o2[7] = x1 >>> 24 & 255;
        o2[8] = x2 >>> 0 & 255;
        o2[9] = x2 >>> 8 & 255;
        o2[10] = x2 >>> 16 & 255;
        o2[11] = x2 >>> 24 & 255;
        o2[12] = x3 >>> 0 & 255;
        o2[13] = x3 >>> 8 & 255;
        o2[14] = x3 >>> 16 & 255;
        o2[15] = x3 >>> 24 & 255;
        o2[16] = x4 >>> 0 & 255;
        o2[17] = x4 >>> 8 & 255;
        o2[18] = x4 >>> 16 & 255;
        o2[19] = x4 >>> 24 & 255;
        o2[20] = x5 >>> 0 & 255;
        o2[21] = x5 >>> 8 & 255;
        o2[22] = x5 >>> 16 & 255;
        o2[23] = x5 >>> 24 & 255;
        o2[24] = x6 >>> 0 & 255;
        o2[25] = x6 >>> 8 & 255;
        o2[26] = x6 >>> 16 & 255;
        o2[27] = x6 >>> 24 & 255;
        o2[28] = x7 >>> 0 & 255;
        o2[29] = x7 >>> 8 & 255;
        o2[30] = x7 >>> 16 & 255;
        o2[31] = x7 >>> 24 & 255;
        o2[32] = x8 >>> 0 & 255;
        o2[33] = x8 >>> 8 & 255;
        o2[34] = x8 >>> 16 & 255;
        o2[35] = x8 >>> 24 & 255;
        o2[36] = x9 >>> 0 & 255;
        o2[37] = x9 >>> 8 & 255;
        o2[38] = x9 >>> 16 & 255;
        o2[39] = x9 >>> 24 & 255;
        o2[40] = x10 >>> 0 & 255;
        o2[41] = x10 >>> 8 & 255;
        o2[42] = x10 >>> 16 & 255;
        o2[43] = x10 >>> 24 & 255;
        o2[44] = x11 >>> 0 & 255;
        o2[45] = x11 >>> 8 & 255;
        o2[46] = x11 >>> 16 & 255;
        o2[47] = x11 >>> 24 & 255;
        o2[48] = x12 >>> 0 & 255;
        o2[49] = x12 >>> 8 & 255;
        o2[50] = x12 >>> 16 & 255;
        o2[51] = x12 >>> 24 & 255;
        o2[52] = x13 >>> 0 & 255;
        o2[53] = x13 >>> 8 & 255;
        o2[54] = x13 >>> 16 & 255;
        o2[55] = x13 >>> 24 & 255;
        o2[56] = x14 >>> 0 & 255;
        o2[57] = x14 >>> 8 & 255;
        o2[58] = x14 >>> 16 & 255;
        o2[59] = x14 >>> 24 & 255;
        o2[60] = x15 >>> 0 & 255;
        o2[61] = x15 >>> 8 & 255;
        o2[62] = x15 >>> 16 & 255;
        o2[63] = x15 >>> 24 & 255;
      }
      function core_hsalsa20(o2, p2, k, c2) {
        var j0 = c2[0] & 255 | (c2[1] & 255) << 8 | (c2[2] & 255) << 16 | (c2[3] & 255) << 24, j1 = k[0] & 255 | (k[1] & 255) << 8 | (k[2] & 255) << 16 | (k[3] & 255) << 24, j2 = k[4] & 255 | (k[5] & 255) << 8 | (k[6] & 255) << 16 | (k[7] & 255) << 24, j3 = k[8] & 255 | (k[9] & 255) << 8 | (k[10] & 255) << 16 | (k[11] & 255) << 24, j4 = k[12] & 255 | (k[13] & 255) << 8 | (k[14] & 255) << 16 | (k[15] & 255) << 24, j5 = c2[4] & 255 | (c2[5] & 255) << 8 | (c2[6] & 255) << 16 | (c2[7] & 255) << 24, j6 = p2[0] & 255 | (p2[1] & 255) << 8 | (p2[2] & 255) << 16 | (p2[3] & 255) << 24, j7 = p2[4] & 255 | (p2[5] & 255) << 8 | (p2[6] & 255) << 16 | (p2[7] & 255) << 24, j8 = p2[8] & 255 | (p2[9] & 255) << 8 | (p2[10] & 255) << 16 | (p2[11] & 255) << 24, j9 = p2[12] & 255 | (p2[13] & 255) << 8 | (p2[14] & 255) << 16 | (p2[15] & 255) << 24, j10 = c2[8] & 255 | (c2[9] & 255) << 8 | (c2[10] & 255) << 16 | (c2[11] & 255) << 24, j11 = k[16] & 255 | (k[17] & 255) << 8 | (k[18] & 255) << 16 | (k[19] & 255) << 24, j12 = k[20] & 255 | (k[21] & 255) << 8 | (k[22] & 255) << 16 | (k[23] & 255) << 24, j13 = k[24] & 255 | (k[25] & 255) << 8 | (k[26] & 255) << 16 | (k[27] & 255) << 24, j14 = k[28] & 255 | (k[29] & 255) << 8 | (k[30] & 255) << 16 | (k[31] & 255) << 24, j15 = c2[12] & 255 | (c2[13] & 255) << 8 | (c2[14] & 255) << 16 | (c2[15] & 255) << 24;
        var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
        for (var i2 = 0; i2 < 20; i2 += 2) {
          u = x0 + x12 | 0;
          x4 ^= u << 7 | u >>> 32 - 7;
          u = x4 + x0 | 0;
          x8 ^= u << 9 | u >>> 32 - 9;
          u = x8 + x4 | 0;
          x12 ^= u << 13 | u >>> 32 - 13;
          u = x12 + x8 | 0;
          x0 ^= u << 18 | u >>> 32 - 18;
          u = x5 + x1 | 0;
          x9 ^= u << 7 | u >>> 32 - 7;
          u = x9 + x5 | 0;
          x13 ^= u << 9 | u >>> 32 - 9;
          u = x13 + x9 | 0;
          x1 ^= u << 13 | u >>> 32 - 13;
          u = x1 + x13 | 0;
          x5 ^= u << 18 | u >>> 32 - 18;
          u = x10 + x6 | 0;
          x14 ^= u << 7 | u >>> 32 - 7;
          u = x14 + x10 | 0;
          x2 ^= u << 9 | u >>> 32 - 9;
          u = x2 + x14 | 0;
          x6 ^= u << 13 | u >>> 32 - 13;
          u = x6 + x2 | 0;
          x10 ^= u << 18 | u >>> 32 - 18;
          u = x15 + x11 | 0;
          x3 ^= u << 7 | u >>> 32 - 7;
          u = x3 + x15 | 0;
          x7 ^= u << 9 | u >>> 32 - 9;
          u = x7 + x3 | 0;
          x11 ^= u << 13 | u >>> 32 - 13;
          u = x11 + x7 | 0;
          x15 ^= u << 18 | u >>> 32 - 18;
          u = x0 + x3 | 0;
          x1 ^= u << 7 | u >>> 32 - 7;
          u = x1 + x0 | 0;
          x2 ^= u << 9 | u >>> 32 - 9;
          u = x2 + x1 | 0;
          x3 ^= u << 13 | u >>> 32 - 13;
          u = x3 + x2 | 0;
          x0 ^= u << 18 | u >>> 32 - 18;
          u = x5 + x4 | 0;
          x6 ^= u << 7 | u >>> 32 - 7;
          u = x6 + x5 | 0;
          x7 ^= u << 9 | u >>> 32 - 9;
          u = x7 + x6 | 0;
          x4 ^= u << 13 | u >>> 32 - 13;
          u = x4 + x7 | 0;
          x5 ^= u << 18 | u >>> 32 - 18;
          u = x10 + x9 | 0;
          x11 ^= u << 7 | u >>> 32 - 7;
          u = x11 + x10 | 0;
          x8 ^= u << 9 | u >>> 32 - 9;
          u = x8 + x11 | 0;
          x9 ^= u << 13 | u >>> 32 - 13;
          u = x9 + x8 | 0;
          x10 ^= u << 18 | u >>> 32 - 18;
          u = x15 + x14 | 0;
          x12 ^= u << 7 | u >>> 32 - 7;
          u = x12 + x15 | 0;
          x13 ^= u << 9 | u >>> 32 - 9;
          u = x13 + x12 | 0;
          x14 ^= u << 13 | u >>> 32 - 13;
          u = x14 + x13 | 0;
          x15 ^= u << 18 | u >>> 32 - 18;
        }
        o2[0] = x0 >>> 0 & 255;
        o2[1] = x0 >>> 8 & 255;
        o2[2] = x0 >>> 16 & 255;
        o2[3] = x0 >>> 24 & 255;
        o2[4] = x5 >>> 0 & 255;
        o2[5] = x5 >>> 8 & 255;
        o2[6] = x5 >>> 16 & 255;
        o2[7] = x5 >>> 24 & 255;
        o2[8] = x10 >>> 0 & 255;
        o2[9] = x10 >>> 8 & 255;
        o2[10] = x10 >>> 16 & 255;
        o2[11] = x10 >>> 24 & 255;
        o2[12] = x15 >>> 0 & 255;
        o2[13] = x15 >>> 8 & 255;
        o2[14] = x15 >>> 16 & 255;
        o2[15] = x15 >>> 24 & 255;
        o2[16] = x6 >>> 0 & 255;
        o2[17] = x6 >>> 8 & 255;
        o2[18] = x6 >>> 16 & 255;
        o2[19] = x6 >>> 24 & 255;
        o2[20] = x7 >>> 0 & 255;
        o2[21] = x7 >>> 8 & 255;
        o2[22] = x7 >>> 16 & 255;
        o2[23] = x7 >>> 24 & 255;
        o2[24] = x8 >>> 0 & 255;
        o2[25] = x8 >>> 8 & 255;
        o2[26] = x8 >>> 16 & 255;
        o2[27] = x8 >>> 24 & 255;
        o2[28] = x9 >>> 0 & 255;
        o2[29] = x9 >>> 8 & 255;
        o2[30] = x9 >>> 16 & 255;
        o2[31] = x9 >>> 24 & 255;
      }
      function crypto_core_salsa20(out, inp, k, c2) {
        core_salsa20(out, inp, k, c2);
      }
      function crypto_core_hsalsa20(out, inp, k, c2) {
        core_hsalsa20(out, inp, k, c2);
      }
      var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
      function crypto_stream_salsa20_xor(c2, cpos, m, mpos, b, n, k) {
        var z = new Uint8Array(16), x = new Uint8Array(64);
        var u, i2;
        for (i2 = 0; i2 < 16; i2++)
          z[i2] = 0;
        for (i2 = 0; i2 < 8; i2++)
          z[i2] = n[i2];
        while (b >= 64) {
          crypto_core_salsa20(x, z, k, sigma);
          for (i2 = 0; i2 < 64; i2++)
            c2[cpos + i2] = m[mpos + i2] ^ x[i2];
          u = 1;
          for (i2 = 8; i2 < 16; i2++) {
            u = u + (z[i2] & 255) | 0;
            z[i2] = u & 255;
            u >>>= 8;
          }
          b -= 64;
          cpos += 64;
          mpos += 64;
        }
        if (b > 0) {
          crypto_core_salsa20(x, z, k, sigma);
          for (i2 = 0; i2 < b; i2++)
            c2[cpos + i2] = m[mpos + i2] ^ x[i2];
        }
        return 0;
      }
      function crypto_stream_salsa20(c2, cpos, b, n, k) {
        var z = new Uint8Array(16), x = new Uint8Array(64);
        var u, i2;
        for (i2 = 0; i2 < 16; i2++)
          z[i2] = 0;
        for (i2 = 0; i2 < 8; i2++)
          z[i2] = n[i2];
        while (b >= 64) {
          crypto_core_salsa20(x, z, k, sigma);
          for (i2 = 0; i2 < 64; i2++)
            c2[cpos + i2] = x[i2];
          u = 1;
          for (i2 = 8; i2 < 16; i2++) {
            u = u + (z[i2] & 255) | 0;
            z[i2] = u & 255;
            u >>>= 8;
          }
          b -= 64;
          cpos += 64;
        }
        if (b > 0) {
          crypto_core_salsa20(x, z, k, sigma);
          for (i2 = 0; i2 < b; i2++)
            c2[cpos + i2] = x[i2];
        }
        return 0;
      }
      function crypto_stream(c2, cpos, d2, n, k) {
        var s2 = new Uint8Array(32);
        crypto_core_hsalsa20(s2, n, k, sigma);
        var sn = new Uint8Array(8);
        for (var i2 = 0; i2 < 8; i2++)
          sn[i2] = n[i2 + 16];
        return crypto_stream_salsa20(c2, cpos, d2, sn, s2);
      }
      function crypto_stream_xor(c2, cpos, m, mpos, d2, n, k) {
        var s2 = new Uint8Array(32);
        crypto_core_hsalsa20(s2, n, k, sigma);
        var sn = new Uint8Array(8);
        for (var i2 = 0; i2 < 8; i2++)
          sn[i2] = n[i2 + 16];
        return crypto_stream_salsa20_xor(c2, cpos, m, mpos, d2, sn, s2);
      }
      var poly1305 = function(key) {
        this.buffer = new Uint8Array(16);
        this.r = new Uint16Array(10);
        this.h = new Uint16Array(10);
        this.pad = new Uint16Array(8);
        this.leftover = 0;
        this.fin = 0;
        var t0, t1, t2, t3, t4, t5, t6, t7;
        t0 = key[0] & 255 | (key[1] & 255) << 8;
        this.r[0] = t0 & 8191;
        t1 = key[2] & 255 | (key[3] & 255) << 8;
        this.r[1] = (t0 >>> 13 | t1 << 3) & 8191;
        t2 = key[4] & 255 | (key[5] & 255) << 8;
        this.r[2] = (t1 >>> 10 | t2 << 6) & 7939;
        t3 = key[6] & 255 | (key[7] & 255) << 8;
        this.r[3] = (t2 >>> 7 | t3 << 9) & 8191;
        t4 = key[8] & 255 | (key[9] & 255) << 8;
        this.r[4] = (t3 >>> 4 | t4 << 12) & 255;
        this.r[5] = t4 >>> 1 & 8190;
        t5 = key[10] & 255 | (key[11] & 255) << 8;
        this.r[6] = (t4 >>> 14 | t5 << 2) & 8191;
        t6 = key[12] & 255 | (key[13] & 255) << 8;
        this.r[7] = (t5 >>> 11 | t6 << 5) & 8065;
        t7 = key[14] & 255 | (key[15] & 255) << 8;
        this.r[8] = (t6 >>> 8 | t7 << 8) & 8191;
        this.r[9] = t7 >>> 5 & 127;
        this.pad[0] = key[16] & 255 | (key[17] & 255) << 8;
        this.pad[1] = key[18] & 255 | (key[19] & 255) << 8;
        this.pad[2] = key[20] & 255 | (key[21] & 255) << 8;
        this.pad[3] = key[22] & 255 | (key[23] & 255) << 8;
        this.pad[4] = key[24] & 255 | (key[25] & 255) << 8;
        this.pad[5] = key[26] & 255 | (key[27] & 255) << 8;
        this.pad[6] = key[28] & 255 | (key[29] & 255) << 8;
        this.pad[7] = key[30] & 255 | (key[31] & 255) << 8;
      };
      poly1305.prototype.blocks = function(m, mpos, bytes) {
        var hibit = this.fin ? 0 : 1 << 11;
        var t0, t1, t2, t3, t4, t5, t6, t7, c2;
        var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;
        var h0 = this.h[0], h1 = this.h[1], h2 = this.h[2], h3 = this.h[3], h4 = this.h[4], h5 = this.h[5], h6 = this.h[6], h7 = this.h[7], h8 = this.h[8], h9 = this.h[9];
        var r0 = this.r[0], r1 = this.r[1], r2 = this.r[2], r3 = this.r[3], r4 = this.r[4], r5 = this.r[5], r6 = this.r[6], r7 = this.r[7], r8 = this.r[8], r9 = this.r[9];
        while (bytes >= 16) {
          t0 = m[mpos + 0] & 255 | (m[mpos + 1] & 255) << 8;
          h0 += t0 & 8191;
          t1 = m[mpos + 2] & 255 | (m[mpos + 3] & 255) << 8;
          h1 += (t0 >>> 13 | t1 << 3) & 8191;
          t2 = m[mpos + 4] & 255 | (m[mpos + 5] & 255) << 8;
          h2 += (t1 >>> 10 | t2 << 6) & 8191;
          t3 = m[mpos + 6] & 255 | (m[mpos + 7] & 255) << 8;
          h3 += (t2 >>> 7 | t3 << 9) & 8191;
          t4 = m[mpos + 8] & 255 | (m[mpos + 9] & 255) << 8;
          h4 += (t3 >>> 4 | t4 << 12) & 8191;
          h5 += t4 >>> 1 & 8191;
          t5 = m[mpos + 10] & 255 | (m[mpos + 11] & 255) << 8;
          h6 += (t4 >>> 14 | t5 << 2) & 8191;
          t6 = m[mpos + 12] & 255 | (m[mpos + 13] & 255) << 8;
          h7 += (t5 >>> 11 | t6 << 5) & 8191;
          t7 = m[mpos + 14] & 255 | (m[mpos + 15] & 255) << 8;
          h8 += (t6 >>> 8 | t7 << 8) & 8191;
          h9 += t7 >>> 5 | hibit;
          c2 = 0;
          d0 = c2;
          d0 += h0 * r0;
          d0 += h1 * (5 * r9);
          d0 += h2 * (5 * r8);
          d0 += h3 * (5 * r7);
          d0 += h4 * (5 * r6);
          c2 = d0 >>> 13;
          d0 &= 8191;
          d0 += h5 * (5 * r5);
          d0 += h6 * (5 * r4);
          d0 += h7 * (5 * r3);
          d0 += h8 * (5 * r2);
          d0 += h9 * (5 * r1);
          c2 += d0 >>> 13;
          d0 &= 8191;
          d1 = c2;
          d1 += h0 * r1;
          d1 += h1 * r0;
          d1 += h2 * (5 * r9);
          d1 += h3 * (5 * r8);
          d1 += h4 * (5 * r7);
          c2 = d1 >>> 13;
          d1 &= 8191;
          d1 += h5 * (5 * r6);
          d1 += h6 * (5 * r5);
          d1 += h7 * (5 * r4);
          d1 += h8 * (5 * r3);
          d1 += h9 * (5 * r2);
          c2 += d1 >>> 13;
          d1 &= 8191;
          d2 = c2;
          d2 += h0 * r2;
          d2 += h1 * r1;
          d2 += h2 * r0;
          d2 += h3 * (5 * r9);
          d2 += h4 * (5 * r8);
          c2 = d2 >>> 13;
          d2 &= 8191;
          d2 += h5 * (5 * r7);
          d2 += h6 * (5 * r6);
          d2 += h7 * (5 * r5);
          d2 += h8 * (5 * r4);
          d2 += h9 * (5 * r3);
          c2 += d2 >>> 13;
          d2 &= 8191;
          d3 = c2;
          d3 += h0 * r3;
          d3 += h1 * r2;
          d3 += h2 * r1;
          d3 += h3 * r0;
          d3 += h4 * (5 * r9);
          c2 = d3 >>> 13;
          d3 &= 8191;
          d3 += h5 * (5 * r8);
          d3 += h6 * (5 * r7);
          d3 += h7 * (5 * r6);
          d3 += h8 * (5 * r5);
          d3 += h9 * (5 * r4);
          c2 += d3 >>> 13;
          d3 &= 8191;
          d4 = c2;
          d4 += h0 * r4;
          d4 += h1 * r3;
          d4 += h2 * r2;
          d4 += h3 * r1;
          d4 += h4 * r0;
          c2 = d4 >>> 13;
          d4 &= 8191;
          d4 += h5 * (5 * r9);
          d4 += h6 * (5 * r8);
          d4 += h7 * (5 * r7);
          d4 += h8 * (5 * r6);
          d4 += h9 * (5 * r5);
          c2 += d4 >>> 13;
          d4 &= 8191;
          d5 = c2;
          d5 += h0 * r5;
          d5 += h1 * r4;
          d5 += h2 * r3;
          d5 += h3 * r2;
          d5 += h4 * r1;
          c2 = d5 >>> 13;
          d5 &= 8191;
          d5 += h5 * r0;
          d5 += h6 * (5 * r9);
          d5 += h7 * (5 * r8);
          d5 += h8 * (5 * r7);
          d5 += h9 * (5 * r6);
          c2 += d5 >>> 13;
          d5 &= 8191;
          d6 = c2;
          d6 += h0 * r6;
          d6 += h1 * r5;
          d6 += h2 * r4;
          d6 += h3 * r3;
          d6 += h4 * r2;
          c2 = d6 >>> 13;
          d6 &= 8191;
          d6 += h5 * r1;
          d6 += h6 * r0;
          d6 += h7 * (5 * r9);
          d6 += h8 * (5 * r8);
          d6 += h9 * (5 * r7);
          c2 += d6 >>> 13;
          d6 &= 8191;
          d7 = c2;
          d7 += h0 * r7;
          d7 += h1 * r6;
          d7 += h2 * r5;
          d7 += h3 * r4;
          d7 += h4 * r3;
          c2 = d7 >>> 13;
          d7 &= 8191;
          d7 += h5 * r2;
          d7 += h6 * r1;
          d7 += h7 * r0;
          d7 += h8 * (5 * r9);
          d7 += h9 * (5 * r8);
          c2 += d7 >>> 13;
          d7 &= 8191;
          d8 = c2;
          d8 += h0 * r8;
          d8 += h1 * r7;
          d8 += h2 * r6;
          d8 += h3 * r5;
          d8 += h4 * r4;
          c2 = d8 >>> 13;
          d8 &= 8191;
          d8 += h5 * r3;
          d8 += h6 * r2;
          d8 += h7 * r1;
          d8 += h8 * r0;
          d8 += h9 * (5 * r9);
          c2 += d8 >>> 13;
          d8 &= 8191;
          d9 = c2;
          d9 += h0 * r9;
          d9 += h1 * r8;
          d9 += h2 * r7;
          d9 += h3 * r6;
          d9 += h4 * r5;
          c2 = d9 >>> 13;
          d9 &= 8191;
          d9 += h5 * r4;
          d9 += h6 * r3;
          d9 += h7 * r2;
          d9 += h8 * r1;
          d9 += h9 * r0;
          c2 += d9 >>> 13;
          d9 &= 8191;
          c2 = (c2 << 2) + c2 | 0;
          c2 = c2 + d0 | 0;
          d0 = c2 & 8191;
          c2 = c2 >>> 13;
          d1 += c2;
          h0 = d0;
          h1 = d1;
          h2 = d2;
          h3 = d3;
          h4 = d4;
          h5 = d5;
          h6 = d6;
          h7 = d7;
          h8 = d8;
          h9 = d9;
          mpos += 16;
          bytes -= 16;
        }
        this.h[0] = h0;
        this.h[1] = h1;
        this.h[2] = h2;
        this.h[3] = h3;
        this.h[4] = h4;
        this.h[5] = h5;
        this.h[6] = h6;
        this.h[7] = h7;
        this.h[8] = h8;
        this.h[9] = h9;
      };
      poly1305.prototype.finish = function(mac, macpos) {
        var g = new Uint16Array(10);
        var c2, mask, f, i2;
        if (this.leftover) {
          i2 = this.leftover;
          this.buffer[i2++] = 1;
          for (; i2 < 16; i2++)
            this.buffer[i2] = 0;
          this.fin = 1;
          this.blocks(this.buffer, 0, 16);
        }
        c2 = this.h[1] >>> 13;
        this.h[1] &= 8191;
        for (i2 = 2; i2 < 10; i2++) {
          this.h[i2] += c2;
          c2 = this.h[i2] >>> 13;
          this.h[i2] &= 8191;
        }
        this.h[0] += c2 * 5;
        c2 = this.h[0] >>> 13;
        this.h[0] &= 8191;
        this.h[1] += c2;
        c2 = this.h[1] >>> 13;
        this.h[1] &= 8191;
        this.h[2] += c2;
        g[0] = this.h[0] + 5;
        c2 = g[0] >>> 13;
        g[0] &= 8191;
        for (i2 = 1; i2 < 10; i2++) {
          g[i2] = this.h[i2] + c2;
          c2 = g[i2] >>> 13;
          g[i2] &= 8191;
        }
        g[9] -= 1 << 13;
        mask = (c2 ^ 1) - 1;
        for (i2 = 0; i2 < 10; i2++)
          g[i2] &= mask;
        mask = ~mask;
        for (i2 = 0; i2 < 10; i2++)
          this.h[i2] = this.h[i2] & mask | g[i2];
        this.h[0] = (this.h[0] | this.h[1] << 13) & 65535;
        this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535;
        this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535;
        this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535;
        this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535;
        this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535;
        this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535;
        this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535;
        f = this.h[0] + this.pad[0];
        this.h[0] = f & 65535;
        for (i2 = 1; i2 < 8; i2++) {
          f = (this.h[i2] + this.pad[i2] | 0) + (f >>> 16) | 0;
          this.h[i2] = f & 65535;
        }
        mac[macpos + 0] = this.h[0] >>> 0 & 255;
        mac[macpos + 1] = this.h[0] >>> 8 & 255;
        mac[macpos + 2] = this.h[1] >>> 0 & 255;
        mac[macpos + 3] = this.h[1] >>> 8 & 255;
        mac[macpos + 4] = this.h[2] >>> 0 & 255;
        mac[macpos + 5] = this.h[2] >>> 8 & 255;
        mac[macpos + 6] = this.h[3] >>> 0 & 255;
        mac[macpos + 7] = this.h[3] >>> 8 & 255;
        mac[macpos + 8] = this.h[4] >>> 0 & 255;
        mac[macpos + 9] = this.h[4] >>> 8 & 255;
        mac[macpos + 10] = this.h[5] >>> 0 & 255;
        mac[macpos + 11] = this.h[5] >>> 8 & 255;
        mac[macpos + 12] = this.h[6] >>> 0 & 255;
        mac[macpos + 13] = this.h[6] >>> 8 & 255;
        mac[macpos + 14] = this.h[7] >>> 0 & 255;
        mac[macpos + 15] = this.h[7] >>> 8 & 255;
      };
      poly1305.prototype.update = function(m, mpos, bytes) {
        var i2, want;
        if (this.leftover) {
          want = 16 - this.leftover;
          if (want > bytes)
            want = bytes;
          for (i2 = 0; i2 < want; i2++)
            this.buffer[this.leftover + i2] = m[mpos + i2];
          bytes -= want;
          mpos += want;
          this.leftover += want;
          if (this.leftover < 16)
            return;
          this.blocks(this.buffer, 0, 16);
          this.leftover = 0;
        }
        if (bytes >= 16) {
          want = bytes - bytes % 16;
          this.blocks(m, mpos, want);
          mpos += want;
          bytes -= want;
        }
        if (bytes) {
          for (i2 = 0; i2 < bytes; i2++)
            this.buffer[this.leftover + i2] = m[mpos + i2];
          this.leftover += bytes;
        }
      };
      function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
        var s2 = new poly1305(k);
        s2.update(m, mpos, n);
        s2.finish(out, outpos);
        return 0;
      }
      function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
        var x = new Uint8Array(16);
        crypto_onetimeauth(x, 0, m, mpos, n, k);
        return crypto_verify_16(h, hpos, x, 0);
      }
      function crypto_secretbox(c2, m, d2, n, k) {
        var i2;
        if (d2 < 32)
          return -1;
        crypto_stream_xor(c2, 0, m, 0, d2, n, k);
        crypto_onetimeauth(c2, 16, c2, 32, d2 - 32, c2);
        for (i2 = 0; i2 < 16; i2++)
          c2[i2] = 0;
        return 0;
      }
      function crypto_secretbox_open(m, c2, d2, n, k) {
        var i2;
        var x = new Uint8Array(32);
        if (d2 < 32)
          return -1;
        crypto_stream(x, 0, 32, n, k);
        if (crypto_onetimeauth_verify(c2, 16, c2, 32, d2 - 32, x) !== 0)
          return -1;
        crypto_stream_xor(m, 0, c2, 0, d2, n, k);
        for (i2 = 0; i2 < 32; i2++)
          m[i2] = 0;
        return 0;
      }
      function set25519(r, a) {
        var i2;
        for (i2 = 0; i2 < 16; i2++)
          r[i2] = a[i2] | 0;
      }
      function car25519(o2) {
        var i2, v, c2 = 1;
        for (i2 = 0; i2 < 16; i2++) {
          v = o2[i2] + c2 + 65535;
          c2 = Math.floor(v / 65536);
          o2[i2] = v - c2 * 65536;
        }
        o2[0] += c2 - 1 + 37 * (c2 - 1);
      }
      function sel25519(p2, q, b) {
        var t, c2 = ~(b - 1);
        for (var i2 = 0; i2 < 16; i2++) {
          t = c2 & (p2[i2] ^ q[i2]);
          p2[i2] ^= t;
          q[i2] ^= t;
        }
      }
      function pack25519(o2, n) {
        var i2, j, b;
        var m = gf(), t = gf();
        for (i2 = 0; i2 < 16; i2++)
          t[i2] = n[i2];
        car25519(t);
        car25519(t);
        car25519(t);
        for (j = 0; j < 2; j++) {
          m[0] = t[0] - 65517;
          for (i2 = 1; i2 < 15; i2++) {
            m[i2] = t[i2] - 65535 - (m[i2 - 1] >> 16 & 1);
            m[i2 - 1] &= 65535;
          }
          m[15] = t[15] - 32767 - (m[14] >> 16 & 1);
          b = m[15] >> 16 & 1;
          m[14] &= 65535;
          sel25519(t, m, 1 - b);
        }
        for (i2 = 0; i2 < 16; i2++) {
          o2[2 * i2] = t[i2] & 255;
          o2[2 * i2 + 1] = t[i2] >> 8;
        }
      }
      function neq25519(a, b) {
        var c2 = new Uint8Array(32), d2 = new Uint8Array(32);
        pack25519(c2, a);
        pack25519(d2, b);
        return crypto_verify_32(c2, 0, d2, 0);
      }
      function par25519(a) {
        var d2 = new Uint8Array(32);
        pack25519(d2, a);
        return d2[0] & 1;
      }
      function unpack25519(o2, n) {
        var i2;
        for (i2 = 0; i2 < 16; i2++)
          o2[i2] = n[2 * i2] + (n[2 * i2 + 1] << 8);
        o2[15] &= 32767;
      }
      function A(o2, a, b) {
        for (var i2 = 0; i2 < 16; i2++)
          o2[i2] = a[i2] + b[i2];
      }
      function Z(o2, a, b) {
        for (var i2 = 0; i2 < 16; i2++)
          o2[i2] = a[i2] - b[i2];
      }
      function M(o2, a, b) {
        var v, c2, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
        v = a[0];
        t0 += v * b0;
        t1 += v * b1;
        t2 += v * b2;
        t3 += v * b3;
        t4 += v * b4;
        t5 += v * b5;
        t6 += v * b6;
        t7 += v * b7;
        t8 += v * b8;
        t9 += v * b9;
        t10 += v * b10;
        t11 += v * b11;
        t12 += v * b12;
        t13 += v * b13;
        t14 += v * b14;
        t15 += v * b15;
        v = a[1];
        t1 += v * b0;
        t2 += v * b1;
        t3 += v * b2;
        t4 += v * b3;
        t5 += v * b4;
        t6 += v * b5;
        t7 += v * b6;
        t8 += v * b7;
        t9 += v * b8;
        t10 += v * b9;
        t11 += v * b10;
        t12 += v * b11;
        t13 += v * b12;
        t14 += v * b13;
        t15 += v * b14;
        t16 += v * b15;
        v = a[2];
        t2 += v * b0;
        t3 += v * b1;
        t4 += v * b2;
        t5 += v * b3;
        t6 += v * b4;
        t7 += v * b5;
        t8 += v * b6;
        t9 += v * b7;
        t10 += v * b8;
        t11 += v * b9;
        t12 += v * b10;
        t13 += v * b11;
        t14 += v * b12;
        t15 += v * b13;
        t16 += v * b14;
        t17 += v * b15;
        v = a[3];
        t3 += v * b0;
        t4 += v * b1;
        t5 += v * b2;
        t6 += v * b3;
        t7 += v * b4;
        t8 += v * b5;
        t9 += v * b6;
        t10 += v * b7;
        t11 += v * b8;
        t12 += v * b9;
        t13 += v * b10;
        t14 += v * b11;
        t15 += v * b12;
        t16 += v * b13;
        t17 += v * b14;
        t18 += v * b15;
        v = a[4];
        t4 += v * b0;
        t5 += v * b1;
        t6 += v * b2;
        t7 += v * b3;
        t8 += v * b4;
        t9 += v * b5;
        t10 += v * b6;
        t11 += v * b7;
        t12 += v * b8;
        t13 += v * b9;
        t14 += v * b10;
        t15 += v * b11;
        t16 += v * b12;
        t17 += v * b13;
        t18 += v * b14;
        t19 += v * b15;
        v = a[5];
        t5 += v * b0;
        t6 += v * b1;
        t7 += v * b2;
        t8 += v * b3;
        t9 += v * b4;
        t10 += v * b5;
        t11 += v * b6;
        t12 += v * b7;
        t13 += v * b8;
        t14 += v * b9;
        t15 += v * b10;
        t16 += v * b11;
        t17 += v * b12;
        t18 += v * b13;
        t19 += v * b14;
        t20 += v * b15;
        v = a[6];
        t6 += v * b0;
        t7 += v * b1;
        t8 += v * b2;
        t9 += v * b3;
        t10 += v * b4;
        t11 += v * b5;
        t12 += v * b6;
        t13 += v * b7;
        t14 += v * b8;
        t15 += v * b9;
        t16 += v * b10;
        t17 += v * b11;
        t18 += v * b12;
        t19 += v * b13;
        t20 += v * b14;
        t21 += v * b15;
        v = a[7];
        t7 += v * b0;
        t8 += v * b1;
        t9 += v * b2;
        t10 += v * b3;
        t11 += v * b4;
        t12 += v * b5;
        t13 += v * b6;
        t14 += v * b7;
        t15 += v * b8;
        t16 += v * b9;
        t17 += v * b10;
        t18 += v * b11;
        t19 += v * b12;
        t20 += v * b13;
        t21 += v * b14;
        t22 += v * b15;
        v = a[8];
        t8 += v * b0;
        t9 += v * b1;
        t10 += v * b2;
        t11 += v * b3;
        t12 += v * b4;
        t13 += v * b5;
        t14 += v * b6;
        t15 += v * b7;
        t16 += v * b8;
        t17 += v * b9;
        t18 += v * b10;
        t19 += v * b11;
        t20 += v * b12;
        t21 += v * b13;
        t22 += v * b14;
        t23 += v * b15;
        v = a[9];
        t9 += v * b0;
        t10 += v * b1;
        t11 += v * b2;
        t12 += v * b3;
        t13 += v * b4;
        t14 += v * b5;
        t15 += v * b6;
        t16 += v * b7;
        t17 += v * b8;
        t18 += v * b9;
        t19 += v * b10;
        t20 += v * b11;
        t21 += v * b12;
        t22 += v * b13;
        t23 += v * b14;
        t24 += v * b15;
        v = a[10];
        t10 += v * b0;
        t11 += v * b1;
        t12 += v * b2;
        t13 += v * b3;
        t14 += v * b4;
        t15 += v * b5;
        t16 += v * b6;
        t17 += v * b7;
        t18 += v * b8;
        t19 += v * b9;
        t20 += v * b10;
        t21 += v * b11;
        t22 += v * b12;
        t23 += v * b13;
        t24 += v * b14;
        t25 += v * b15;
        v = a[11];
        t11 += v * b0;
        t12 += v * b1;
        t13 += v * b2;
        t14 += v * b3;
        t15 += v * b4;
        t16 += v * b5;
        t17 += v * b6;
        t18 += v * b7;
        t19 += v * b8;
        t20 += v * b9;
        t21 += v * b10;
        t22 += v * b11;
        t23 += v * b12;
        t24 += v * b13;
        t25 += v * b14;
        t26 += v * b15;
        v = a[12];
        t12 += v * b0;
        t13 += v * b1;
        t14 += v * b2;
        t15 += v * b3;
        t16 += v * b4;
        t17 += v * b5;
        t18 += v * b6;
        t19 += v * b7;
        t20 += v * b8;
        t21 += v * b9;
        t22 += v * b10;
        t23 += v * b11;
        t24 += v * b12;
        t25 += v * b13;
        t26 += v * b14;
        t27 += v * b15;
        v = a[13];
        t13 += v * b0;
        t14 += v * b1;
        t15 += v * b2;
        t16 += v * b3;
        t17 += v * b4;
        t18 += v * b5;
        t19 += v * b6;
        t20 += v * b7;
        t21 += v * b8;
        t22 += v * b9;
        t23 += v * b10;
        t24 += v * b11;
        t25 += v * b12;
        t26 += v * b13;
        t27 += v * b14;
        t28 += v * b15;
        v = a[14];
        t14 += v * b0;
        t15 += v * b1;
        t16 += v * b2;
        t17 += v * b3;
        t18 += v * b4;
        t19 += v * b5;
        t20 += v * b6;
        t21 += v * b7;
        t22 += v * b8;
        t23 += v * b9;
        t24 += v * b10;
        t25 += v * b11;
        t26 += v * b12;
        t27 += v * b13;
        t28 += v * b14;
        t29 += v * b15;
        v = a[15];
        t15 += v * b0;
        t16 += v * b1;
        t17 += v * b2;
        t18 += v * b3;
        t19 += v * b4;
        t20 += v * b5;
        t21 += v * b6;
        t22 += v * b7;
        t23 += v * b8;
        t24 += v * b9;
        t25 += v * b10;
        t26 += v * b11;
        t27 += v * b12;
        t28 += v * b13;
        t29 += v * b14;
        t30 += v * b15;
        t0 += 38 * t16;
        t1 += 38 * t17;
        t2 += 38 * t18;
        t3 += 38 * t19;
        t4 += 38 * t20;
        t5 += 38 * t21;
        t6 += 38 * t22;
        t7 += 38 * t23;
        t8 += 38 * t24;
        t9 += 38 * t25;
        t10 += 38 * t26;
        t11 += 38 * t27;
        t12 += 38 * t28;
        t13 += 38 * t29;
        t14 += 38 * t30;
        c2 = 1;
        v = t0 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t0 = v - c2 * 65536;
        v = t1 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t1 = v - c2 * 65536;
        v = t2 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t2 = v - c2 * 65536;
        v = t3 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t3 = v - c2 * 65536;
        v = t4 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t4 = v - c2 * 65536;
        v = t5 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t5 = v - c2 * 65536;
        v = t6 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t6 = v - c2 * 65536;
        v = t7 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t7 = v - c2 * 65536;
        v = t8 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t8 = v - c2 * 65536;
        v = t9 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t9 = v - c2 * 65536;
        v = t10 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t10 = v - c2 * 65536;
        v = t11 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t11 = v - c2 * 65536;
        v = t12 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t12 = v - c2 * 65536;
        v = t13 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t13 = v - c2 * 65536;
        v = t14 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t14 = v - c2 * 65536;
        v = t15 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t15 = v - c2 * 65536;
        t0 += c2 - 1 + 37 * (c2 - 1);
        c2 = 1;
        v = t0 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t0 = v - c2 * 65536;
        v = t1 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t1 = v - c2 * 65536;
        v = t2 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t2 = v - c2 * 65536;
        v = t3 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t3 = v - c2 * 65536;
        v = t4 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t4 = v - c2 * 65536;
        v = t5 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t5 = v - c2 * 65536;
        v = t6 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t6 = v - c2 * 65536;
        v = t7 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t7 = v - c2 * 65536;
        v = t8 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t8 = v - c2 * 65536;
        v = t9 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t9 = v - c2 * 65536;
        v = t10 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t10 = v - c2 * 65536;
        v = t11 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t11 = v - c2 * 65536;
        v = t12 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t12 = v - c2 * 65536;
        v = t13 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t13 = v - c2 * 65536;
        v = t14 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t14 = v - c2 * 65536;
        v = t15 + c2 + 65535;
        c2 = Math.floor(v / 65536);
        t15 = v - c2 * 65536;
        t0 += c2 - 1 + 37 * (c2 - 1);
        o2[0] = t0;
        o2[1] = t1;
        o2[2] = t2;
        o2[3] = t3;
        o2[4] = t4;
        o2[5] = t5;
        o2[6] = t6;
        o2[7] = t7;
        o2[8] = t8;
        o2[9] = t9;
        o2[10] = t10;
        o2[11] = t11;
        o2[12] = t12;
        o2[13] = t13;
        o2[14] = t14;
        o2[15] = t15;
      }
      function S(o2, a) {
        M(o2, a, a);
      }
      function inv25519(o2, i2) {
        var c2 = gf();
        var a;
        for (a = 0; a < 16; a++)
          c2[a] = i2[a];
        for (a = 253; a >= 0; a--) {
          S(c2, c2);
          if (a !== 2 && a !== 4)
            M(c2, c2, i2);
        }
        for (a = 0; a < 16; a++)
          o2[a] = c2[a];
      }
      function pow2523(o2, i2) {
        var c2 = gf();
        var a;
        for (a = 0; a < 16; a++)
          c2[a] = i2[a];
        for (a = 250; a >= 0; a--) {
          S(c2, c2);
          if (a !== 1)
            M(c2, c2, i2);
        }
        for (a = 0; a < 16; a++)
          o2[a] = c2[a];
      }
      function crypto_scalarmult(q, n, p2) {
        var z = new Uint8Array(32);
        var x = new Float64Array(80), r, i2;
        var a = gf(), b = gf(), c2 = gf(), d2 = gf(), e2 = gf(), f = gf();
        for (i2 = 0; i2 < 31; i2++)
          z[i2] = n[i2];
        z[31] = n[31] & 127 | 64;
        z[0] &= 248;
        unpack25519(x, p2);
        for (i2 = 0; i2 < 16; i2++) {
          b[i2] = x[i2];
          d2[i2] = a[i2] = c2[i2] = 0;
        }
        a[0] = d2[0] = 1;
        for (i2 = 254; i2 >= 0; --i2) {
          r = z[i2 >>> 3] >>> (i2 & 7) & 1;
          sel25519(a, b, r);
          sel25519(c2, d2, r);
          A(e2, a, c2);
          Z(a, a, c2);
          A(c2, b, d2);
          Z(b, b, d2);
          S(d2, e2);
          S(f, a);
          M(a, c2, a);
          M(c2, b, e2);
          A(e2, a, c2);
          Z(a, a, c2);
          S(b, a);
          Z(c2, d2, f);
          M(a, c2, _121665);
          A(a, a, d2);
          M(c2, c2, a);
          M(a, d2, f);
          M(d2, b, x);
          S(b, e2);
          sel25519(a, b, r);
          sel25519(c2, d2, r);
        }
        for (i2 = 0; i2 < 16; i2++) {
          x[i2 + 16] = a[i2];
          x[i2 + 32] = c2[i2];
          x[i2 + 48] = b[i2];
          x[i2 + 64] = d2[i2];
        }
        var x32 = x.subarray(32);
        var x16 = x.subarray(16);
        inv25519(x32, x32);
        M(x16, x16, x32);
        pack25519(q, x16);
        return 0;
      }
      function crypto_scalarmult_base(q, n) {
        return crypto_scalarmult(q, n, _9);
      }
      function crypto_box_keypair(y, x) {
        randombytes(x, 32);
        return crypto_scalarmult_base(y, x);
      }
      function crypto_box_beforenm(k, y, x) {
        var s2 = new Uint8Array(32);
        crypto_scalarmult(s2, x, y);
        return crypto_core_hsalsa20(k, _0, s2, sigma);
      }
      var crypto_box_afternm = crypto_secretbox;
      var crypto_box_open_afternm = crypto_secretbox_open;
      function crypto_box(c2, m, d2, n, y, x) {
        var k = new Uint8Array(32);
        crypto_box_beforenm(k, y, x);
        return crypto_box_afternm(c2, m, d2, n, k);
      }
      function crypto_box_open(m, c2, d2, n, y, x) {
        var k = new Uint8Array(32);
        crypto_box_beforenm(k, y, x);
        return crypto_box_open_afternm(m, c2, d2, n, k);
      }
      var K = [
        1116352408,
        3609767458,
        1899447441,
        602891725,
        3049323471,
        3964484399,
        3921009573,
        2173295548,
        961987163,
        4081628472,
        1508970993,
        3053834265,
        2453635748,
        2937671579,
        2870763221,
        3664609560,
        3624381080,
        2734883394,
        310598401,
        1164996542,
        607225278,
        1323610764,
        1426881987,
        3590304994,
        1925078388,
        4068182383,
        2162078206,
        991336113,
        2614888103,
        633803317,
        3248222580,
        3479774868,
        3835390401,
        2666613458,
        4022224774,
        944711139,
        264347078,
        2341262773,
        604807628,
        2007800933,
        770255983,
        1495990901,
        1249150122,
        1856431235,
        1555081692,
        3175218132,
        1996064986,
        2198950837,
        2554220882,
        3999719339,
        2821834349,
        766784016,
        2952996808,
        2566594879,
        3210313671,
        3203337956,
        3336571891,
        1034457026,
        3584528711,
        2466948901,
        113926993,
        3758326383,
        338241895,
        168717936,
        666307205,
        1188179964,
        773529912,
        1546045734,
        1294757372,
        1522805485,
        1396182291,
        2643833823,
        1695183700,
        2343527390,
        1986661051,
        1014477480,
        2177026350,
        1206759142,
        2456956037,
        344077627,
        2730485921,
        1290863460,
        2820302411,
        3158454273,
        3259730800,
        3505952657,
        3345764771,
        106217008,
        3516065817,
        3606008344,
        3600352804,
        1432725776,
        4094571909,
        1467031594,
        275423344,
        851169720,
        430227734,
        3100823752,
        506948616,
        1363258195,
        659060556,
        3750685593,
        883997877,
        3785050280,
        958139571,
        3318307427,
        1322822218,
        3812723403,
        1537002063,
        2003034995,
        1747873779,
        3602036899,
        1955562222,
        1575990012,
        2024104815,
        1125592928,
        2227730452,
        2716904306,
        2361852424,
        442776044,
        2428436474,
        593698344,
        2756734187,
        3733110249,
        3204031479,
        2999351573,
        3329325298,
        3815920427,
        3391569614,
        3928383900,
        3515267271,
        566280711,
        3940187606,
        3454069534,
        4118630271,
        4000239992,
        116418474,
        1914138554,
        174292421,
        2731055270,
        289380356,
        3203993006,
        460393269,
        320620315,
        685471733,
        587496836,
        852142971,
        1086792851,
        1017036298,
        365543100,
        1126000580,
        2618297676,
        1288033470,
        3409855158,
        1501505948,
        4234509866,
        1607167915,
        987167468,
        1816402316,
        1246189591
      ];
      function crypto_hashblocks_hl(hh, hl, m, n) {
        var wh = new Int32Array(16), wl = new Int32Array(16), bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7, bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7, th, tl, i2, j, h, l2, a, b, c2, d2;
        var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
        var pos = 0;
        while (n >= 128) {
          for (i2 = 0; i2 < 16; i2++) {
            j = 8 * i2 + pos;
            wh[i2] = m[j + 0] << 24 | m[j + 1] << 16 | m[j + 2] << 8 | m[j + 3];
            wl[i2] = m[j + 4] << 24 | m[j + 5] << 16 | m[j + 6] << 8 | m[j + 7];
          }
          for (i2 = 0; i2 < 80; i2++) {
            bh0 = ah0;
            bh1 = ah1;
            bh2 = ah2;
            bh3 = ah3;
            bh4 = ah4;
            bh5 = ah5;
            bh6 = ah6;
            bh7 = ah7;
            bl0 = al0;
            bl1 = al1;
            bl2 = al2;
            bl3 = al3;
            bl4 = al4;
            bl5 = al5;
            bl6 = al6;
            bl7 = al7;
            h = ah7;
            l2 = al7;
            a = l2 & 65535;
            b = l2 >>> 16;
            c2 = h & 65535;
            d2 = h >>> 16;
            h = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
            l2 = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
            a += l2 & 65535;
            b += l2 >>> 16;
            c2 += h & 65535;
            d2 += h >>> 16;
            h = ah4 & ah5 ^ ~ah4 & ah6;
            l2 = al4 & al5 ^ ~al4 & al6;
            a += l2 & 65535;
            b += l2 >>> 16;
            c2 += h & 65535;
            d2 += h >>> 16;
            h = K[i2 * 2];
            l2 = K[i2 * 2 + 1];
            a += l2 & 65535;
            b += l2 >>> 16;
            c2 += h & 65535;
            d2 += h >>> 16;
            h = wh[i2 % 16];
            l2 = wl[i2 % 16];
            a += l2 & 65535;
            b += l2 >>> 16;
            c2 += h & 65535;
            d2 += h >>> 16;
            b += a >>> 16;
            c2 += b >>> 16;
            d2 += c2 >>> 16;
            th = c2 & 65535 | d2 << 16;
            tl = a & 65535 | b << 16;
            h = th;
            l2 = tl;
            a = l2 & 65535;
            b = l2 >>> 16;
            c2 = h & 65535;
            d2 = h >>> 16;
            h = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
            l2 = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
            a += l2 & 65535;
            b += l2 >>> 16;
            c2 += h & 65535;
            d2 += h >>> 16;
            h = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
            l2 = al0 & al1 ^ al0 & al2 ^ al1 & al2;
            a += l2 & 65535;
            b += l2 >>> 16;
            c2 += h & 65535;
            d2 += h >>> 16;
            b += a >>> 16;
            c2 += b >>> 16;
            d2 += c2 >>> 16;
            bh7 = c2 & 65535 | d2 << 16;
            bl7 = a & 65535 | b << 16;
            h = bh3;
            l2 = bl3;
            a = l2 & 65535;
            b = l2 >>> 16;
            c2 = h & 65535;
            d2 = h >>> 16;
            h = th;
            l2 = tl;
            a += l2 & 65535;
            b += l2 >>> 16;
            c2 += h & 65535;
            d2 += h >>> 16;
            b += a >>> 16;
            c2 += b >>> 16;
            d2 += c2 >>> 16;
            bh3 = c2 & 65535 | d2 << 16;
            bl3 = a & 65535 | b << 16;
            ah1 = bh0;
            ah2 = bh1;
            ah3 = bh2;
            ah4 = bh3;
            ah5 = bh4;
            ah6 = bh5;
            ah7 = bh6;
            ah0 = bh7;
            al1 = bl0;
            al2 = bl1;
            al3 = bl2;
            al4 = bl3;
            al5 = bl4;
            al6 = bl5;
            al7 = bl6;
            al0 = bl7;
            if (i2 % 16 === 15) {
              for (j = 0; j < 16; j++) {
                h = wh[j];
                l2 = wl[j];
                a = l2 & 65535;
                b = l2 >>> 16;
                c2 = h & 65535;
                d2 = h >>> 16;
                h = wh[(j + 9) % 16];
                l2 = wl[(j + 9) % 16];
                a += l2 & 65535;
                b += l2 >>> 16;
                c2 += h & 65535;
                d2 += h >>> 16;
                th = wh[(j + 1) % 16];
                tl = wl[(j + 1) % 16];
                h = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
                l2 = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
                a += l2 & 65535;
                b += l2 >>> 16;
                c2 += h & 65535;
                d2 += h >>> 16;
                th = wh[(j + 14) % 16];
                tl = wl[(j + 14) % 16];
                h = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
                l2 = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
                a += l2 & 65535;
                b += l2 >>> 16;
                c2 += h & 65535;
                d2 += h >>> 16;
                b += a >>> 16;
                c2 += b >>> 16;
                d2 += c2 >>> 16;
                wh[j] = c2 & 65535 | d2 << 16;
                wl[j] = a & 65535 | b << 16;
              }
            }
          }
          h = ah0;
          l2 = al0;
          a = l2 & 65535;
          b = l2 >>> 16;
          c2 = h & 65535;
          d2 = h >>> 16;
          h = hh[0];
          l2 = hl[0];
          a += l2 & 65535;
          b += l2 >>> 16;
          c2 += h & 65535;
          d2 += h >>> 16;
          b += a >>> 16;
          c2 += b >>> 16;
          d2 += c2 >>> 16;
          hh[0] = ah0 = c2 & 65535 | d2 << 16;
          hl[0] = al0 = a & 65535 | b << 16;
          h = ah1;
          l2 = al1;
          a = l2 & 65535;
          b = l2 >>> 16;
          c2 = h & 65535;
          d2 = h >>> 16;
          h = hh[1];
          l2 = hl[1];
          a += l2 & 65535;
          b += l2 >>> 16;
          c2 += h & 65535;
          d2 += h >>> 16;
          b += a >>> 16;
          c2 += b >>> 16;
          d2 += c2 >>> 16;
          hh[1] = ah1 = c2 & 65535 | d2 << 16;
          hl[1] = al1 = a & 65535 | b << 16;
          h = ah2;
          l2 = al2;
          a = l2 & 65535;
          b = l2 >>> 16;
          c2 = h & 65535;
          d2 = h >>> 16;
          h = hh[2];
          l2 = hl[2];
          a += l2 & 65535;
          b += l2 >>> 16;
          c2 += h & 65535;
          d2 += h >>> 16;
          b += a >>> 16;
          c2 += b >>> 16;
          d2 += c2 >>> 16;
          hh[2] = ah2 = c2 & 65535 | d2 << 16;
          hl[2] = al2 = a & 65535 | b << 16;
          h = ah3;
          l2 = al3;
          a = l2 & 65535;
          b = l2 >>> 16;
          c2 = h & 65535;
          d2 = h >>> 16;
          h = hh[3];
          l2 = hl[3];
          a += l2 & 65535;
          b += l2 >>> 16;
          c2 += h & 65535;
          d2 += h >>> 16;
          b += a >>> 16;
          c2 += b >>> 16;
          d2 += c2 >>> 16;
          hh[3] = ah3 = c2 & 65535 | d2 << 16;
          hl[3] = al3 = a & 65535 | b << 16;
          h = ah4;
          l2 = al4;
          a = l2 & 65535;
          b = l2 >>> 16;
          c2 = h & 65535;
          d2 = h >>> 16;
          h = hh[4];
          l2 = hl[4];
          a += l2 & 65535;
          b += l2 >>> 16;
          c2 += h & 65535;
          d2 += h >>> 16;
          b += a >>> 16;
          c2 += b >>> 16;
          d2 += c2 >>> 16;
          hh[4] = ah4 = c2 & 65535 | d2 << 16;
          hl[4] = al4 = a & 65535 | b << 16;
          h = ah5;
          l2 = al5;
          a = l2 & 65535;
          b = l2 >>> 16;
          c2 = h & 65535;
          d2 = h >>> 16;
          h = hh[5];
          l2 = hl[5];
          a += l2 & 65535;
          b += l2 >>> 16;
          c2 += h & 65535;
          d2 += h >>> 16;
          b += a >>> 16;
          c2 += b >>> 16;
          d2 += c2 >>> 16;
          hh[5] = ah5 = c2 & 65535 | d2 << 16;
          hl[5] = al5 = a & 65535 | b << 16;
          h = ah6;
          l2 = al6;
          a = l2 & 65535;
          b = l2 >>> 16;
          c2 = h & 65535;
          d2 = h >>> 16;
          h = hh[6];
          l2 = hl[6];
          a += l2 & 65535;
          b += l2 >>> 16;
          c2 += h & 65535;
          d2 += h >>> 16;
          b += a >>> 16;
          c2 += b >>> 16;
          d2 += c2 >>> 16;
          hh[6] = ah6 = c2 & 65535 | d2 << 16;
          hl[6] = al6 = a & 65535 | b << 16;
          h = ah7;
          l2 = al7;
          a = l2 & 65535;
          b = l2 >>> 16;
          c2 = h & 65535;
          d2 = h >>> 16;
          h = hh[7];
          l2 = hl[7];
          a += l2 & 65535;
          b += l2 >>> 16;
          c2 += h & 65535;
          d2 += h >>> 16;
          b += a >>> 16;
          c2 += b >>> 16;
          d2 += c2 >>> 16;
          hh[7] = ah7 = c2 & 65535 | d2 << 16;
          hl[7] = al7 = a & 65535 | b << 16;
          pos += 128;
          n -= 128;
        }
        return n;
      }
      function crypto_hash(out, m, n) {
        var hh = new Int32Array(8), hl = new Int32Array(8), x = new Uint8Array(256), i2, b = n;
        hh[0] = 1779033703;
        hh[1] = 3144134277;
        hh[2] = 1013904242;
        hh[3] = 2773480762;
        hh[4] = 1359893119;
        hh[5] = 2600822924;
        hh[6] = 528734635;
        hh[7] = 1541459225;
        hl[0] = 4089235720;
        hl[1] = 2227873595;
        hl[2] = 4271175723;
        hl[3] = 1595750129;
        hl[4] = 2917565137;
        hl[5] = 725511199;
        hl[6] = 4215389547;
        hl[7] = 327033209;
        crypto_hashblocks_hl(hh, hl, m, n);
        n %= 128;
        for (i2 = 0; i2 < n; i2++)
          x[i2] = m[b - n + i2];
        x[n] = 128;
        n = 256 - 128 * (n < 112 ? 1 : 0);
        x[n - 9] = 0;
        ts64(x, n - 8, b / 536870912 | 0, b << 3);
        crypto_hashblocks_hl(hh, hl, x, n);
        for (i2 = 0; i2 < 8; i2++)
          ts64(out, 8 * i2, hh[i2], hl[i2]);
        return 0;
      }
      function add(p2, q) {
        var a = gf(), b = gf(), c2 = gf(), d2 = gf(), e2 = gf(), f = gf(), g = gf(), h = gf(), t = gf();
        Z(a, p2[1], p2[0]);
        Z(t, q[1], q[0]);
        M(a, a, t);
        A(b, p2[0], p2[1]);
        A(t, q[0], q[1]);
        M(b, b, t);
        M(c2, p2[3], q[3]);
        M(c2, c2, D2);
        M(d2, p2[2], q[2]);
        A(d2, d2, d2);
        Z(e2, b, a);
        Z(f, d2, c2);
        A(g, d2, c2);
        A(h, b, a);
        M(p2[0], e2, f);
        M(p2[1], h, g);
        M(p2[2], g, f);
        M(p2[3], e2, h);
      }
      function cswap(p2, q, b) {
        var i2;
        for (i2 = 0; i2 < 4; i2++) {
          sel25519(p2[i2], q[i2], b);
        }
      }
      function pack(r, p2) {
        var tx = gf(), ty = gf(), zi = gf();
        inv25519(zi, p2[2]);
        M(tx, p2[0], zi);
        M(ty, p2[1], zi);
        pack25519(r, ty);
        r[31] ^= par25519(tx) << 7;
      }
      function scalarmult(p2, q, s2) {
        var b, i2;
        set25519(p2[0], gf0);
        set25519(p2[1], gf1);
        set25519(p2[2], gf1);
        set25519(p2[3], gf0);
        for (i2 = 255; i2 >= 0; --i2) {
          b = s2[i2 / 8 | 0] >> (i2 & 7) & 1;
          cswap(p2, q, b);
          add(q, p2);
          add(p2, p2);
          cswap(p2, q, b);
        }
      }
      function scalarbase(p2, s2) {
        var q = [gf(), gf(), gf(), gf()];
        set25519(q[0], X);
        set25519(q[1], Y);
        set25519(q[2], gf1);
        M(q[3], X, Y);
        scalarmult(p2, q, s2);
      }
      function crypto_sign_keypair(pk, sk, seeded) {
        var d2 = new Uint8Array(64);
        var p2 = [gf(), gf(), gf(), gf()];
        var i2;
        if (!seeded)
          randombytes(sk, 32);
        crypto_hash(d2, sk, 32);
        d2[0] &= 248;
        d2[31] &= 127;
        d2[31] |= 64;
        scalarbase(p2, d2);
        pack(pk, p2);
        for (i2 = 0; i2 < 32; i2++)
          sk[i2 + 32] = pk[i2];
        return 0;
      }
      var L = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
      function modL(r, x) {
        var carry, i2, j, k;
        for (i2 = 63; i2 >= 32; --i2) {
          carry = 0;
          for (j = i2 - 32, k = i2 - 12; j < k; ++j) {
            x[j] += carry - 16 * x[i2] * L[j - (i2 - 32)];
            carry = Math.floor((x[j] + 128) / 256);
            x[j] -= carry * 256;
          }
          x[j] += carry;
          x[i2] = 0;
        }
        carry = 0;
        for (j = 0; j < 32; j++) {
          x[j] += carry - (x[31] >> 4) * L[j];
          carry = x[j] >> 8;
          x[j] &= 255;
        }
        for (j = 0; j < 32; j++)
          x[j] -= carry * L[j];
        for (i2 = 0; i2 < 32; i2++) {
          x[i2 + 1] += x[i2] >> 8;
          r[i2] = x[i2] & 255;
        }
      }
      function reduce(r) {
        var x = new Float64Array(64), i2;
        for (i2 = 0; i2 < 64; i2++)
          x[i2] = r[i2];
        for (i2 = 0; i2 < 64; i2++)
          r[i2] = 0;
        modL(r, x);
      }
      function crypto_sign(sm, m, n, sk) {
        var d2 = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
        var i2, j, x = new Float64Array(64);
        var p2 = [gf(), gf(), gf(), gf()];
        crypto_hash(d2, sk, 32);
        d2[0] &= 248;
        d2[31] &= 127;
        d2[31] |= 64;
        var smlen = n + 64;
        for (i2 = 0; i2 < n; i2++)
          sm[64 + i2] = m[i2];
        for (i2 = 0; i2 < 32; i2++)
          sm[32 + i2] = d2[32 + i2];
        crypto_hash(r, sm.subarray(32), n + 32);
        reduce(r);
        scalarbase(p2, r);
        pack(sm, p2);
        for (i2 = 32; i2 < 64; i2++)
          sm[i2] = sk[i2];
        crypto_hash(h, sm, n + 64);
        reduce(h);
        for (i2 = 0; i2 < 64; i2++)
          x[i2] = 0;
        for (i2 = 0; i2 < 32; i2++)
          x[i2] = r[i2];
        for (i2 = 0; i2 < 32; i2++) {
          for (j = 0; j < 32; j++) {
            x[i2 + j] += h[i2] * d2[j];
          }
        }
        modL(sm.subarray(32), x);
        return smlen;
      }
      function unpackneg(r, p2) {
        var t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
        set25519(r[2], gf1);
        unpack25519(r[1], p2);
        S(num, r[1]);
        M(den, num, D);
        Z(num, num, r[2]);
        A(den, r[2], den);
        S(den2, den);
        S(den4, den2);
        M(den6, den4, den2);
        M(t, den6, num);
        M(t, t, den);
        pow2523(t, t);
        M(t, t, num);
        M(t, t, den);
        M(t, t, den);
        M(r[0], t, den);
        S(chk, r[0]);
        M(chk, chk, den);
        if (neq25519(chk, num))
          M(r[0], r[0], I);
        S(chk, r[0]);
        M(chk, chk, den);
        if (neq25519(chk, num))
          return -1;
        if (par25519(r[0]) === p2[31] >> 7)
          Z(r[0], gf0, r[0]);
        M(r[3], r[0], r[1]);
        return 0;
      }
      function crypto_sign_open(m, sm, n, pk) {
        var i2;
        var t = new Uint8Array(32), h = new Uint8Array(64);
        var p2 = [gf(), gf(), gf(), gf()], q = [gf(), gf(), gf(), gf()];
        if (n < 64)
          return -1;
        if (unpackneg(q, pk))
          return -1;
        for (i2 = 0; i2 < n; i2++)
          m[i2] = sm[i2];
        for (i2 = 0; i2 < 32; i2++)
          m[i2 + 32] = pk[i2];
        crypto_hash(h, m, n);
        reduce(h);
        scalarmult(p2, q, h);
        scalarbase(q, sm.subarray(32));
        add(p2, q);
        pack(t, p2);
        n -= 64;
        if (crypto_verify_32(sm, 0, t, 0)) {
          for (i2 = 0; i2 < n; i2++)
            m[i2] = 0;
          return -1;
        }
        for (i2 = 0; i2 < n; i2++)
          m[i2] = sm[i2 + 64];
        return n;
      }
      var crypto_secretbox_KEYBYTES = 32, crypto_secretbox_NONCEBYTES = 24, crypto_secretbox_ZEROBYTES = 32, crypto_secretbox_BOXZEROBYTES = 16, crypto_scalarmult_BYTES = 32, crypto_scalarmult_SCALARBYTES = 32, crypto_box_PUBLICKEYBYTES = 32, crypto_box_SECRETKEYBYTES = 32, crypto_box_BEFORENMBYTES = 32, crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES, crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES, crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES, crypto_sign_BYTES = 64, crypto_sign_PUBLICKEYBYTES = 32, crypto_sign_SECRETKEYBYTES = 64, crypto_sign_SEEDBYTES = 32, crypto_hash_BYTES = 64;
      nacl.lowlevel = {
        crypto_core_hsalsa20,
        crypto_stream_xor,
        crypto_stream,
        crypto_stream_salsa20_xor,
        crypto_stream_salsa20,
        crypto_onetimeauth,
        crypto_onetimeauth_verify,
        crypto_verify_16,
        crypto_verify_32,
        crypto_secretbox,
        crypto_secretbox_open,
        crypto_scalarmult,
        crypto_scalarmult_base,
        crypto_box_beforenm,
        crypto_box_afternm,
        crypto_box,
        crypto_box_open,
        crypto_box_keypair,
        crypto_hash,
        crypto_sign,
        crypto_sign_keypair,
        crypto_sign_open,
        crypto_secretbox_KEYBYTES,
        crypto_secretbox_NONCEBYTES,
        crypto_secretbox_ZEROBYTES,
        crypto_secretbox_BOXZEROBYTES,
        crypto_scalarmult_BYTES,
        crypto_scalarmult_SCALARBYTES,
        crypto_box_PUBLICKEYBYTES,
        crypto_box_SECRETKEYBYTES,
        crypto_box_BEFORENMBYTES,
        crypto_box_NONCEBYTES,
        crypto_box_ZEROBYTES,
        crypto_box_BOXZEROBYTES,
        crypto_sign_BYTES,
        crypto_sign_PUBLICKEYBYTES,
        crypto_sign_SECRETKEYBYTES,
        crypto_sign_SEEDBYTES,
        crypto_hash_BYTES,
        gf,
        D,
        L,
        pack25519,
        unpack25519,
        M,
        A,
        S,
        Z,
        pow2523,
        add,
        set25519,
        modL,
        scalarmult,
        scalarbase
      };
      function checkLengths(k, n) {
        if (k.length !== crypto_secretbox_KEYBYTES)
          throw new Error("bad key size");
        if (n.length !== crypto_secretbox_NONCEBYTES)
          throw new Error("bad nonce size");
      }
      function checkBoxLengths(pk, sk) {
        if (pk.length !== crypto_box_PUBLICKEYBYTES)
          throw new Error("bad public key size");
        if (sk.length !== crypto_box_SECRETKEYBYTES)
          throw new Error("bad secret key size");
      }
      function checkArrayTypes() {
        for (var i2 = 0; i2 < arguments.length; i2++) {
          if (!(arguments[i2] instanceof Uint8Array))
            throw new TypeError("unexpected type, use Uint8Array");
        }
      }
      function cleanup(arr) {
        for (var i2 = 0; i2 < arr.length; i2++)
          arr[i2] = 0;
      }
      nacl.randomBytes = function(n) {
        var b = new Uint8Array(n);
        randombytes(b, n);
        return b;
      };
      nacl.secretbox = function(msg, nonce, key) {
        checkArrayTypes(msg, nonce, key);
        checkLengths(key, nonce);
        var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
        var c2 = new Uint8Array(m.length);
        for (var i2 = 0; i2 < msg.length; i2++)
          m[i2 + crypto_secretbox_ZEROBYTES] = msg[i2];
        crypto_secretbox(c2, m, m.length, nonce, key);
        return c2.subarray(crypto_secretbox_BOXZEROBYTES);
      };
      nacl.secretbox.open = function(box, nonce, key) {
        checkArrayTypes(box, nonce, key);
        checkLengths(key, nonce);
        var c2 = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
        var m = new Uint8Array(c2.length);
        for (var i2 = 0; i2 < box.length; i2++)
          c2[i2 + crypto_secretbox_BOXZEROBYTES] = box[i2];
        if (c2.length < 32)
          return null;
        if (crypto_secretbox_open(m, c2, c2.length, nonce, key) !== 0)
          return null;
        return m.subarray(crypto_secretbox_ZEROBYTES);
      };
      nacl.secretbox.keyLength = crypto_secretbox_KEYBYTES;
      nacl.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
      nacl.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;
      nacl.scalarMult = function(n, p2) {
        checkArrayTypes(n, p2);
        if (n.length !== crypto_scalarmult_SCALARBYTES)
          throw new Error("bad n size");
        if (p2.length !== crypto_scalarmult_BYTES)
          throw new Error("bad p size");
        var q = new Uint8Array(crypto_scalarmult_BYTES);
        crypto_scalarmult(q, n, p2);
        return q;
      };
      nacl.scalarMult.base = function(n) {
        checkArrayTypes(n);
        if (n.length !== crypto_scalarmult_SCALARBYTES)
          throw new Error("bad n size");
        var q = new Uint8Array(crypto_scalarmult_BYTES);
        crypto_scalarmult_base(q, n);
        return q;
      };
      nacl.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
      nacl.scalarMult.groupElementLength = crypto_scalarmult_BYTES;
      nacl.box = function(msg, nonce, publicKey, secretKey) {
        var k = nacl.box.before(publicKey, secretKey);
        return nacl.secretbox(msg, nonce, k);
      };
      nacl.box.before = function(publicKey, secretKey) {
        checkArrayTypes(publicKey, secretKey);
        checkBoxLengths(publicKey, secretKey);
        var k = new Uint8Array(crypto_box_BEFORENMBYTES);
        crypto_box_beforenm(k, publicKey, secretKey);
        return k;
      };
      nacl.box.after = nacl.secretbox;
      nacl.box.open = function(msg, nonce, publicKey, secretKey) {
        var k = nacl.box.before(publicKey, secretKey);
        return nacl.secretbox.open(msg, nonce, k);
      };
      nacl.box.open.after = nacl.secretbox.open;
      nacl.box.keyPair = function() {
        var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
        crypto_box_keypair(pk, sk);
        return { publicKey: pk, secretKey: sk };
      };
      nacl.box.keyPair.fromSecretKey = function(secretKey) {
        checkArrayTypes(secretKey);
        if (secretKey.length !== crypto_box_SECRETKEYBYTES)
          throw new Error("bad secret key size");
        var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
        crypto_scalarmult_base(pk, secretKey);
        return { publicKey: pk, secretKey: new Uint8Array(secretKey) };
      };
      nacl.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
      nacl.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
      nacl.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
      nacl.box.nonceLength = crypto_box_NONCEBYTES;
      nacl.box.overheadLength = nacl.secretbox.overheadLength;
      nacl.sign = function(msg, secretKey) {
        checkArrayTypes(msg, secretKey);
        if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
          throw new Error("bad secret key size");
        var signedMsg = new Uint8Array(crypto_sign_BYTES + msg.length);
        crypto_sign(signedMsg, msg, msg.length, secretKey);
        return signedMsg;
      };
      nacl.sign.open = function(signedMsg, publicKey) {
        checkArrayTypes(signedMsg, publicKey);
        if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
          throw new Error("bad public key size");
        var tmp = new Uint8Array(signedMsg.length);
        var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
        if (mlen < 0)
          return null;
        var m = new Uint8Array(mlen);
        for (var i2 = 0; i2 < m.length; i2++)
          m[i2] = tmp[i2];
        return m;
      };
      nacl.sign.detached = function(msg, secretKey) {
        var signedMsg = nacl.sign(msg, secretKey);
        var sig = new Uint8Array(crypto_sign_BYTES);
        for (var i2 = 0; i2 < sig.length; i2++)
          sig[i2] = signedMsg[i2];
        return sig;
      };
      nacl.sign.detached.verify = function(msg, sig, publicKey) {
        checkArrayTypes(msg, sig, publicKey);
        if (sig.length !== crypto_sign_BYTES)
          throw new Error("bad signature size");
        if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
          throw new Error("bad public key size");
        var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
        var m = new Uint8Array(crypto_sign_BYTES + msg.length);
        var i2;
        for (i2 = 0; i2 < crypto_sign_BYTES; i2++)
          sm[i2] = sig[i2];
        for (i2 = 0; i2 < msg.length; i2++)
          sm[i2 + crypto_sign_BYTES] = msg[i2];
        return crypto_sign_open(m, sm, sm.length, publicKey) >= 0;
      };
      nacl.sign.keyPair = function() {
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
        crypto_sign_keypair(pk, sk);
        return { publicKey: pk, secretKey: sk };
      };
      nacl.sign.keyPair.fromSecretKey = function(secretKey) {
        checkArrayTypes(secretKey);
        if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
          throw new Error("bad secret key size");
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        for (var i2 = 0; i2 < pk.length; i2++)
          pk[i2] = secretKey[32 + i2];
        return { publicKey: pk, secretKey: new Uint8Array(secretKey) };
      };
      nacl.sign.keyPair.fromSeed = function(seed) {
        checkArrayTypes(seed);
        if (seed.length !== crypto_sign_SEEDBYTES)
          throw new Error("bad seed size");
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
        for (var i2 = 0; i2 < 32; i2++)
          sk[i2] = seed[i2];
        crypto_sign_keypair(pk, sk, true);
        return { publicKey: pk, secretKey: sk };
      };
      nacl.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
      nacl.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
      nacl.sign.seedLength = crypto_sign_SEEDBYTES;
      nacl.sign.signatureLength = crypto_sign_BYTES;
      nacl.hash = function(msg) {
        checkArrayTypes(msg);
        var h = new Uint8Array(crypto_hash_BYTES);
        crypto_hash(h, msg, msg.length);
        return h;
      };
      nacl.hash.hashLength = crypto_hash_BYTES;
      nacl.verify = function(x, y) {
        checkArrayTypes(x, y);
        if (x.length === 0 || y.length === 0)
          return false;
        if (x.length !== y.length)
          return false;
        return vn(x, 0, y, 0, x.length) === 0 ? true : false;
      };
      nacl.setPRNG = function(fn) {
        randombytes = fn;
      };
      (function() {
        var crypto = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
        if (crypto && crypto.getRandomValues) {
          var QUOTA = 65536;
          nacl.setPRNG(function(x, n) {
            var i2, v = new Uint8Array(n);
            for (i2 = 0; i2 < n; i2 += QUOTA) {
              crypto.getRandomValues(v.subarray(i2, i2 + Math.min(n - i2, QUOTA)));
            }
            for (i2 = 0; i2 < n; i2++)
              x[i2] = v[i2];
            cleanup(v);
          });
        } else if (typeof __require !== "undefined") {
          crypto = require_crypto();
          if (crypto && crypto.randomBytes) {
            nacl.setPRNG(function(x, n) {
              var i2, v = crypto.randomBytes(n);
              for (i2 = 0; i2 < n; i2++)
                x[i2] = v[i2];
              cleanup(v);
            });
          }
        }
      })();
    })(typeof module !== "undefined" && module.exports ? module.exports : self.nacl = self.nacl || {});
  }
});

// node_modules/discord-interactions/dist/components.js
var require_components = __commonJS({
  "node_modules/discord-interactions/dist/components.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TextStyleTypes = exports.ChannelTypes = exports.ButtonStyleTypes = exports.MessageComponentTypes = void 0;
    var MessageComponentTypes;
    (function(MessageComponentTypes2) {
      MessageComponentTypes2[MessageComponentTypes2["ACTION_ROW"] = 1] = "ACTION_ROW";
      MessageComponentTypes2[MessageComponentTypes2["BUTTON"] = 2] = "BUTTON";
      MessageComponentTypes2[MessageComponentTypes2["STRING_SELECT"] = 3] = "STRING_SELECT";
      MessageComponentTypes2[MessageComponentTypes2["INPUT_TEXT"] = 4] = "INPUT_TEXT";
      MessageComponentTypes2[MessageComponentTypes2["USER_SELECT"] = 5] = "USER_SELECT";
      MessageComponentTypes2[MessageComponentTypes2["ROLE_SELECT"] = 6] = "ROLE_SELECT";
      MessageComponentTypes2[MessageComponentTypes2["MENTIONABLE_SELECT"] = 7] = "MENTIONABLE_SELECT";
      MessageComponentTypes2[MessageComponentTypes2["CHANNEL_SELECT"] = 8] = "CHANNEL_SELECT";
    })(MessageComponentTypes = exports.MessageComponentTypes || (exports.MessageComponentTypes = {}));
    var ButtonStyleTypes;
    (function(ButtonStyleTypes2) {
      ButtonStyleTypes2[ButtonStyleTypes2["PRIMARY"] = 1] = "PRIMARY";
      ButtonStyleTypes2[ButtonStyleTypes2["SECONDARY"] = 2] = "SECONDARY";
      ButtonStyleTypes2[ButtonStyleTypes2["SUCCESS"] = 3] = "SUCCESS";
      ButtonStyleTypes2[ButtonStyleTypes2["DANGER"] = 4] = "DANGER";
      ButtonStyleTypes2[ButtonStyleTypes2["LINK"] = 5] = "LINK";
    })(ButtonStyleTypes = exports.ButtonStyleTypes || (exports.ButtonStyleTypes = {}));
    var ChannelTypes;
    (function(ChannelTypes2) {
      ChannelTypes2[ChannelTypes2["DM"] = 1] = "DM";
      ChannelTypes2[ChannelTypes2["GROUP_DM"] = 3] = "GROUP_DM";
      ChannelTypes2[ChannelTypes2["GUILD_TEXT"] = 0] = "GUILD_TEXT";
      ChannelTypes2[ChannelTypes2["GUILD_VOICE"] = 2] = "GUILD_VOICE";
      ChannelTypes2[ChannelTypes2["GUILD_CATEGORY"] = 4] = "GUILD_CATEGORY";
      ChannelTypes2[ChannelTypes2["GUILD_ANNOUNCEMENT"] = 5] = "GUILD_ANNOUNCEMENT";
      ChannelTypes2[ChannelTypes2["GUILD_STORE"] = 6] = "GUILD_STORE";
    })(ChannelTypes = exports.ChannelTypes || (exports.ChannelTypes = {}));
    var TextStyleTypes;
    (function(TextStyleTypes2) {
      TextStyleTypes2[TextStyleTypes2["SHORT"] = 1] = "SHORT";
      TextStyleTypes2[TextStyleTypes2["PARAGRAPH"] = 2] = "PARAGRAPH";
    })(TextStyleTypes = exports.TextStyleTypes || (exports.TextStyleTypes = {}));
  }
});

// node_modules/discord-interactions/dist/index.js
var require_dist = __commonJS({
  "node_modules/discord-interactions/dist/index.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o2, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o2, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o2[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p2 in m)
        if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
          __createBinding(exports2, m, p2);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.verifyKeyMiddleware = exports.verifyKey = exports.InteractionResponseFlags = exports.InteractionResponseType = exports.InteractionType = void 0;
    var tweetnacl_1 = __importDefault(require_nacl_fast());
    var InteractionType2;
    (function(InteractionType3) {
      InteractionType3[InteractionType3["PING"] = 1] = "PING";
      InteractionType3[InteractionType3["APPLICATION_COMMAND"] = 2] = "APPLICATION_COMMAND";
      InteractionType3[InteractionType3["MESSAGE_COMPONENT"] = 3] = "MESSAGE_COMPONENT";
      InteractionType3[InteractionType3["APPLICATION_COMMAND_AUTOCOMPLETE"] = 4] = "APPLICATION_COMMAND_AUTOCOMPLETE";
      InteractionType3[InteractionType3["MODAL_SUBMIT"] = 5] = "MODAL_SUBMIT";
    })(InteractionType2 = exports.InteractionType || (exports.InteractionType = {}));
    var InteractionResponseType2;
    (function(InteractionResponseType3) {
      InteractionResponseType3[InteractionResponseType3["PONG"] = 1] = "PONG";
      InteractionResponseType3[InteractionResponseType3["CHANNEL_MESSAGE_WITH_SOURCE"] = 4] = "CHANNEL_MESSAGE_WITH_SOURCE";
      InteractionResponseType3[InteractionResponseType3["DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE"] = 5] = "DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE";
      InteractionResponseType3[InteractionResponseType3["DEFERRED_UPDATE_MESSAGE"] = 6] = "DEFERRED_UPDATE_MESSAGE";
      InteractionResponseType3[InteractionResponseType3["UPDATE_MESSAGE"] = 7] = "UPDATE_MESSAGE";
      InteractionResponseType3[InteractionResponseType3["APPLICATION_COMMAND_AUTOCOMPLETE_RESULT"] = 8] = "APPLICATION_COMMAND_AUTOCOMPLETE_RESULT";
      InteractionResponseType3[InteractionResponseType3["MODAL"] = 9] = "MODAL";
    })(InteractionResponseType2 = exports.InteractionResponseType || (exports.InteractionResponseType = {}));
    var InteractionResponseFlags;
    (function(InteractionResponseFlags2) {
      InteractionResponseFlags2[InteractionResponseFlags2["EPHEMERAL"] = 64] = "EPHEMERAL";
    })(InteractionResponseFlags = exports.InteractionResponseFlags || (exports.InteractionResponseFlags = {}));
    function valueToUint8Array(value, format) {
      if (value == null) {
        return new Uint8Array();
      }
      if (typeof value === "string") {
        if (format === "hex") {
          const matches = value.match(/.{1,2}/g);
          if (matches == null) {
            throw new Error("Value is not a valid hex string");
          }
          const hexVal = matches.map((byte) => parseInt(byte, 16));
          return new Uint8Array(hexVal);
        } else {
          return new TextEncoder().encode(value);
        }
      }
      try {
        if (Buffer.isBuffer(value)) {
          return new Uint8Array(value);
        }
      } catch (ex) {
      }
      if (value instanceof ArrayBuffer) {
        return new Uint8Array(value);
      }
      if (value instanceof Uint8Array) {
        return value;
      }
      throw new Error("Unrecognized value type, must be one of: string, Buffer, ArrayBuffer, Uint8Array");
    }
    function concatUint8Arrays(arr1, arr2) {
      const merged = new Uint8Array(arr1.length + arr2.length);
      merged.set(arr1);
      merged.set(arr2, arr1.length);
      return merged;
    }
    function verifyKey2(rawBody, signature, timestamp, clientPublicKey) {
      try {
        const timestampData = valueToUint8Array(timestamp);
        const bodyData = valueToUint8Array(rawBody);
        const message = concatUint8Arrays(timestampData, bodyData);
        const signatureData = valueToUint8Array(signature, "hex");
        const publicKeyData = valueToUint8Array(clientPublicKey, "hex");
        return tweetnacl_1.default.sign.detached.verify(message, signatureData, publicKeyData);
      } catch (ex) {
        console.error("[discord-interactions]: Invalid verifyKey parameters", ex);
        return false;
      }
    }
    exports.verifyKey = verifyKey2;
    function verifyKeyMiddleware(clientPublicKey) {
      if (!clientPublicKey) {
        throw new Error("You must specify a Discord client public key");
      }
      return function(req, res, next) {
        const timestamp = req.header("X-Signature-Timestamp") || "";
        const signature = req.header("X-Signature-Ed25519") || "";
        function onBodyComplete(rawBody) {
          if (!verifyKey2(rawBody, signature, timestamp, clientPublicKey)) {
            res.statusCode = 401;
            res.end("[discord-interactions] Invalid signature");
            return;
          }
          const body = JSON.parse(rawBody.toString("utf-8")) || {};
          if (body.type === InteractionType2.PING) {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({
              type: InteractionResponseType2.PONG
            }));
            return;
          }
          req.body = body;
          next();
        }
        if (req.body) {
          if (Buffer.isBuffer(req.body)) {
            onBodyComplete(req.body);
          } else if (typeof req.body === "string") {
            onBodyComplete(Buffer.from(req.body, "utf-8"));
          } else {
            console.warn("[discord-interactions]: req.body was tampered with, probably by some other middleware. We recommend disabling middleware for interaction routes so that req.body is a raw buffer.");
            onBodyComplete(Buffer.from(JSON.stringify(req.body), "utf-8"));
          }
        } else {
          const chunks = [];
          req.on("data", (chunk) => {
            chunks.push(chunk);
          });
          req.on("end", () => {
            const rawBody = Buffer.concat(chunks);
            onBodyComplete(rawBody);
          });
        }
      };
    }
    exports.verifyKeyMiddleware = verifyKeyMiddleware;
    __exportStar(require_components(), exports);
  }
});

// node_modules/fast-xml-parser/src/util.js
var require_util = __commonJS({
  "node_modules/fast-xml-parser/src/util.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
    var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
    var nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
    var regexName = new RegExp("^" + nameRegexp + "$");
    var getAllMatches = function(string, regex) {
      const matches = [];
      let match = regex.exec(string);
      while (match) {
        const allmatches = [];
        allmatches.startIndex = regex.lastIndex - match[0].length;
        const len = match.length;
        for (let index = 0; index < len; index++) {
          allmatches.push(match[index]);
        }
        matches.push(allmatches);
        match = regex.exec(string);
      }
      return matches;
    };
    var isName = function(string) {
      const match = regexName.exec(string);
      return !(match === null || typeof match === "undefined");
    };
    exports.isExist = function(v) {
      return typeof v !== "undefined";
    };
    exports.isEmptyObject = function(obj) {
      return Object.keys(obj).length === 0;
    };
    exports.merge = function(target, a, arrayMode) {
      if (a) {
        const keys = Object.keys(a);
        const len = keys.length;
        for (let i2 = 0; i2 < len; i2++) {
          if (arrayMode === "strict") {
            target[keys[i2]] = [a[keys[i2]]];
          } else {
            target[keys[i2]] = a[keys[i2]];
          }
        }
      }
    };
    exports.getValue = function(v) {
      if (exports.isExist(v)) {
        return v;
      } else {
        return "";
      }
    };
    exports.isName = isName;
    exports.getAllMatches = getAllMatches;
    exports.nameRegexp = nameRegexp;
  }
});

// node_modules/fast-xml-parser/src/validator.js
var require_validator = __commonJS({
  "node_modules/fast-xml-parser/src/validator.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var util = require_util();
    var defaultOptions = {
      allowBooleanAttributes: false,
      //A tag can have attributes without any value
      unpairedTags: []
    };
    exports.validate = function(xmlData, options) {
      options = Object.assign({}, defaultOptions, options);
      const tags = [];
      let tagFound = false;
      let reachedRoot = false;
      if (xmlData[0] === "\uFEFF") {
        xmlData = xmlData.substr(1);
      }
      for (let i2 = 0; i2 < xmlData.length; i2++) {
        if (xmlData[i2] === "<" && xmlData[i2 + 1] === "?") {
          i2 += 2;
          i2 = readPI(xmlData, i2);
          if (i2.err)
            return i2;
        } else if (xmlData[i2] === "<") {
          let tagStartPos = i2;
          i2++;
          if (xmlData[i2] === "!") {
            i2 = readCommentAndCDATA(xmlData, i2);
            continue;
          } else {
            let closingTag = false;
            if (xmlData[i2] === "/") {
              closingTag = true;
              i2++;
            }
            let tagName = "";
            for (; i2 < xmlData.length && xmlData[i2] !== ">" && xmlData[i2] !== " " && xmlData[i2] !== "	" && xmlData[i2] !== "\n" && xmlData[i2] !== "\r"; i2++) {
              tagName += xmlData[i2];
            }
            tagName = tagName.trim();
            if (tagName[tagName.length - 1] === "/") {
              tagName = tagName.substring(0, tagName.length - 1);
              i2--;
            }
            if (!validateTagName(tagName)) {
              let msg;
              if (tagName.trim().length === 0) {
                msg = "Invalid space after '<'.";
              } else {
                msg = "Tag '" + tagName + "' is an invalid name.";
              }
              return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i2));
            }
            const result = readAttributeStr(xmlData, i2);
            if (result === false) {
              return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i2));
            }
            let attrStr = result.value;
            i2 = result.index;
            if (attrStr[attrStr.length - 1] === "/") {
              const attrStrStart = i2 - attrStr.length;
              attrStr = attrStr.substring(0, attrStr.length - 1);
              const isValid = validateAttributeString(attrStr, options);
              if (isValid === true) {
                tagFound = true;
              } else {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
              }
            } else if (closingTag) {
              if (!result.tagClosed) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i2));
              } else if (attrStr.trim().length > 0) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
              } else {
                const otg = tags.pop();
                if (tagName !== otg.tagName) {
                  let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                  return getErrorObject(
                    "InvalidTag",
                    "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.",
                    getLineNumberForPosition(xmlData, tagStartPos)
                  );
                }
                if (tags.length == 0) {
                  reachedRoot = true;
                }
              }
            } else {
              const isValid = validateAttributeString(attrStr, options);
              if (isValid !== true) {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i2 - attrStr.length + isValid.err.line));
              }
              if (reachedRoot === true) {
                return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i2));
              } else if (options.unpairedTags.indexOf(tagName) !== -1) {
              } else {
                tags.push({ tagName, tagStartPos });
              }
              tagFound = true;
            }
            for (i2++; i2 < xmlData.length; i2++) {
              if (xmlData[i2] === "<") {
                if (xmlData[i2 + 1] === "!") {
                  i2++;
                  i2 = readCommentAndCDATA(xmlData, i2);
                  continue;
                } else if (xmlData[i2 + 1] === "?") {
                  i2 = readPI(xmlData, ++i2);
                  if (i2.err)
                    return i2;
                } else {
                  break;
                }
              } else if (xmlData[i2] === "&") {
                const afterAmp = validateAmpersand(xmlData, i2);
                if (afterAmp == -1)
                  return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i2));
                i2 = afterAmp;
              } else {
                if (reachedRoot === true && !isWhiteSpace(xmlData[i2])) {
                  return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i2));
                }
              }
            }
            if (xmlData[i2] === "<") {
              i2--;
            }
          }
        } else {
          if (isWhiteSpace(xmlData[i2])) {
            continue;
          }
          return getErrorObject("InvalidChar", "char '" + xmlData[i2] + "' is not expected.", getLineNumberForPosition(xmlData, i2));
        }
      }
      if (!tagFound) {
        return getErrorObject("InvalidXml", "Start tag expected.", 1);
      } else if (tags.length == 1) {
        return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
      } else if (tags.length > 0) {
        return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t) => t.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
      }
      return true;
    };
    function isWhiteSpace(char) {
      return char === " " || char === "	" || char === "\n" || char === "\r";
    }
    function readPI(xmlData, i2) {
      const start = i2;
      for (; i2 < xmlData.length; i2++) {
        if (xmlData[i2] == "?" || xmlData[i2] == " ") {
          const tagname = xmlData.substr(start, i2 - start);
          if (i2 > 5 && tagname === "xml") {
            return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i2));
          } else if (xmlData[i2] == "?" && xmlData[i2 + 1] == ">") {
            i2++;
            break;
          } else {
            continue;
          }
        }
      }
      return i2;
    }
    function readCommentAndCDATA(xmlData, i2) {
      if (xmlData.length > i2 + 5 && xmlData[i2 + 1] === "-" && xmlData[i2 + 2] === "-") {
        for (i2 += 3; i2 < xmlData.length; i2++) {
          if (xmlData[i2] === "-" && xmlData[i2 + 1] === "-" && xmlData[i2 + 2] === ">") {
            i2 += 2;
            break;
          }
        }
      } else if (xmlData.length > i2 + 8 && xmlData[i2 + 1] === "D" && xmlData[i2 + 2] === "O" && xmlData[i2 + 3] === "C" && xmlData[i2 + 4] === "T" && xmlData[i2 + 5] === "Y" && xmlData[i2 + 6] === "P" && xmlData[i2 + 7] === "E") {
        let angleBracketsCount = 1;
        for (i2 += 8; i2 < xmlData.length; i2++) {
          if (xmlData[i2] === "<") {
            angleBracketsCount++;
          } else if (xmlData[i2] === ">") {
            angleBracketsCount--;
            if (angleBracketsCount === 0) {
              break;
            }
          }
        }
      } else if (xmlData.length > i2 + 9 && xmlData[i2 + 1] === "[" && xmlData[i2 + 2] === "C" && xmlData[i2 + 3] === "D" && xmlData[i2 + 4] === "A" && xmlData[i2 + 5] === "T" && xmlData[i2 + 6] === "A" && xmlData[i2 + 7] === "[") {
        for (i2 += 8; i2 < xmlData.length; i2++) {
          if (xmlData[i2] === "]" && xmlData[i2 + 1] === "]" && xmlData[i2 + 2] === ">") {
            i2 += 2;
            break;
          }
        }
      }
      return i2;
    }
    var doubleQuote = '"';
    var singleQuote = "'";
    function readAttributeStr(xmlData, i2) {
      let attrStr = "";
      let startChar = "";
      let tagClosed = false;
      for (; i2 < xmlData.length; i2++) {
        if (xmlData[i2] === doubleQuote || xmlData[i2] === singleQuote) {
          if (startChar === "") {
            startChar = xmlData[i2];
          } else if (startChar !== xmlData[i2]) {
          } else {
            startChar = "";
          }
        } else if (xmlData[i2] === ">") {
          if (startChar === "") {
            tagClosed = true;
            break;
          }
        }
        attrStr += xmlData[i2];
      }
      if (startChar !== "") {
        return false;
      }
      return {
        value: attrStr,
        index: i2,
        tagClosed
      };
    }
    var validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
    function validateAttributeString(attrStr, options) {
      const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
      const attrNames = {};
      for (let i2 = 0; i2 < matches.length; i2++) {
        if (matches[i2][1].length === 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i2][2] + "' has no space in starting.", getPositionFromMatch(matches[i2]));
        } else if (matches[i2][3] !== void 0 && matches[i2][4] === void 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i2][2] + "' is without value.", getPositionFromMatch(matches[i2]));
        } else if (matches[i2][3] === void 0 && !options.allowBooleanAttributes) {
          return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i2][2] + "' is not allowed.", getPositionFromMatch(matches[i2]));
        }
        const attrName = matches[i2][2];
        if (!validateAttrName(attrName)) {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i2]));
        }
        if (!attrNames.hasOwnProperty(attrName)) {
          attrNames[attrName] = 1;
        } else {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i2]));
        }
      }
      return true;
    }
    function validateNumberAmpersand(xmlData, i2) {
      let re = /\d/;
      if (xmlData[i2] === "x") {
        i2++;
        re = /[\da-fA-F]/;
      }
      for (; i2 < xmlData.length; i2++) {
        if (xmlData[i2] === ";")
          return i2;
        if (!xmlData[i2].match(re))
          break;
      }
      return -1;
    }
    function validateAmpersand(xmlData, i2) {
      i2++;
      if (xmlData[i2] === ";")
        return -1;
      if (xmlData[i2] === "#") {
        i2++;
        return validateNumberAmpersand(xmlData, i2);
      }
      let count = 0;
      for (; i2 < xmlData.length; i2++, count++) {
        if (xmlData[i2].match(/\w/) && count < 20)
          continue;
        if (xmlData[i2] === ";")
          break;
        return -1;
      }
      return i2;
    }
    function getErrorObject(code, message, lineNumber) {
      return {
        err: {
          code,
          msg: message,
          line: lineNumber.line || lineNumber,
          col: lineNumber.col
        }
      };
    }
    function validateAttrName(attrName) {
      return util.isName(attrName);
    }
    function validateTagName(tagname) {
      return util.isName(tagname);
    }
    function getLineNumberForPosition(xmlData, index) {
      const lines = xmlData.substring(0, index).split(/\r?\n/);
      return {
        line: lines.length,
        // column number is last line's length + 1, because column numbering starts at 1:
        col: lines[lines.length - 1].length + 1
      };
    }
    function getPositionFromMatch(match) {
      return match.startIndex + match[1].length;
    }
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js
var require_OptionsBuilder = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js"(exports) {
    init_checked_fetch();
    init_modules_watch_stub();
    var defaultOptions = {
      preserveOrder: false,
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      removeNSPrefix: false,
      // remove NS from tag name or attribute name if true
      allowBooleanAttributes: false,
      //a tag can have attributes without any value
      //ignoreRootElement : false,
      parseTagValue: true,
      parseAttributeValue: false,
      trimValues: true,
      //Trim string values of tag and attributes
      cdataPropName: false,
      numberParseOptions: {
        hex: true,
        leadingZeros: true,
        eNotation: true
      },
      tagValueProcessor: function(tagName, val2) {
        return val2;
      },
      attributeValueProcessor: function(attrName, val2) {
        return val2;
      },
      stopNodes: [],
      //nested tags will not be parsed even for errors
      alwaysCreateTextNode: false,
      isArray: () => false,
      commentPropName: false,
      unpairedTags: [],
      processEntities: true,
      htmlEntities: false,
      ignoreDeclaration: false,
      ignorePiTags: false,
      transformTagName: false,
      transformAttributeName: false,
      updateTag: function(tagName, jPath, attrs) {
        return tagName;
      }
      // skipEmptyListItem: false
    };
    var buildOptions = function(options) {
      return Object.assign({}, defaultOptions, options);
    };
    exports.buildOptions = buildOptions;
    exports.defaultOptions = defaultOptions;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/xmlNode.js
var require_xmlNode = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/xmlNode.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var XmlNode = class {
      constructor(tagname) {
        this.tagname = tagname;
        this.child = [];
        this[":@"] = {};
      }
      add(key, val2) {
        if (key === "__proto__")
          key = "#__proto__";
        this.child.push({ [key]: val2 });
      }
      addChild(node) {
        if (node.tagname === "__proto__")
          node.tagname = "#__proto__";
        if (node[":@"] && Object.keys(node[":@"]).length > 0) {
          this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
        } else {
          this.child.push({ [node.tagname]: node.child });
        }
      }
    };
    module.exports = XmlNode;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js
var require_DocTypeReader = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var util = require_util();
    function readDocType(xmlData, i2) {
      const entities = {};
      if (xmlData[i2 + 3] === "O" && xmlData[i2 + 4] === "C" && xmlData[i2 + 5] === "T" && xmlData[i2 + 6] === "Y" && xmlData[i2 + 7] === "P" && xmlData[i2 + 8] === "E") {
        i2 = i2 + 9;
        let angleBracketsCount = 1;
        let hasBody = false, comment = false;
        let exp = "";
        for (; i2 < xmlData.length; i2++) {
          if (xmlData[i2] === "<" && !comment) {
            if (hasBody && isEntity(xmlData, i2)) {
              i2 += 7;
              [entityName, val, i2] = readEntityExp(xmlData, i2 + 1);
              if (val.indexOf("&") === -1)
                entities[validateEntityName(entityName)] = {
                  regx: RegExp(`&${entityName};`, "g"),
                  val
                };
            } else if (hasBody && isElement(xmlData, i2))
              i2 += 8;
            else if (hasBody && isAttlist(xmlData, i2))
              i2 += 8;
            else if (hasBody && isNotation(xmlData, i2))
              i2 += 9;
            else if (isComment)
              comment = true;
            else
              throw new Error("Invalid DOCTYPE");
            angleBracketsCount++;
            exp = "";
          } else if (xmlData[i2] === ">") {
            if (comment) {
              if (xmlData[i2 - 1] === "-" && xmlData[i2 - 2] === "-") {
                comment = false;
                angleBracketsCount--;
              }
            } else {
              angleBracketsCount--;
            }
            if (angleBracketsCount === 0) {
              break;
            }
          } else if (xmlData[i2] === "[") {
            hasBody = true;
          } else {
            exp += xmlData[i2];
          }
        }
        if (angleBracketsCount !== 0) {
          throw new Error(`Unclosed DOCTYPE`);
        }
      } else {
        throw new Error(`Invalid Tag instead of DOCTYPE`);
      }
      return { entities, i: i2 };
    }
    function readEntityExp(xmlData, i2) {
      let entityName2 = "";
      for (; i2 < xmlData.length && (xmlData[i2] !== "'" && xmlData[i2] !== '"'); i2++) {
        entityName2 += xmlData[i2];
      }
      entityName2 = entityName2.trim();
      if (entityName2.indexOf(" ") !== -1)
        throw new Error("External entites are not supported");
      const startChar = xmlData[i2++];
      let val2 = "";
      for (; i2 < xmlData.length && xmlData[i2] !== startChar; i2++) {
        val2 += xmlData[i2];
      }
      return [entityName2, val2, i2];
    }
    function isComment(xmlData, i2) {
      if (xmlData[i2 + 1] === "!" && xmlData[i2 + 2] === "-" && xmlData[i2 + 3] === "-")
        return true;
      return false;
    }
    function isEntity(xmlData, i2) {
      if (xmlData[i2 + 1] === "!" && xmlData[i2 + 2] === "E" && xmlData[i2 + 3] === "N" && xmlData[i2 + 4] === "T" && xmlData[i2 + 5] === "I" && xmlData[i2 + 6] === "T" && xmlData[i2 + 7] === "Y")
        return true;
      return false;
    }
    function isElement(xmlData, i2) {
      if (xmlData[i2 + 1] === "!" && xmlData[i2 + 2] === "E" && xmlData[i2 + 3] === "L" && xmlData[i2 + 4] === "E" && xmlData[i2 + 5] === "M" && xmlData[i2 + 6] === "E" && xmlData[i2 + 7] === "N" && xmlData[i2 + 8] === "T")
        return true;
      return false;
    }
    function isAttlist(xmlData, i2) {
      if (xmlData[i2 + 1] === "!" && xmlData[i2 + 2] === "A" && xmlData[i2 + 3] === "T" && xmlData[i2 + 4] === "T" && xmlData[i2 + 5] === "L" && xmlData[i2 + 6] === "I" && xmlData[i2 + 7] === "S" && xmlData[i2 + 8] === "T")
        return true;
      return false;
    }
    function isNotation(xmlData, i2) {
      if (xmlData[i2 + 1] === "!" && xmlData[i2 + 2] === "N" && xmlData[i2 + 3] === "O" && xmlData[i2 + 4] === "T" && xmlData[i2 + 5] === "A" && xmlData[i2 + 6] === "T" && xmlData[i2 + 7] === "I" && xmlData[i2 + 8] === "O" && xmlData[i2 + 9] === "N")
        return true;
      return false;
    }
    function validateEntityName(name) {
      if (util.isName(name))
        return name;
      else
        throw new Error(`Invalid entity name ${name}`);
    }
    module.exports = readDocType;
  }
});

// node_modules/strnum/strnum.js
var require_strnum = __commonJS({
  "node_modules/strnum/strnum.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
    var numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
    if (!Number.parseInt && window.parseInt) {
      Number.parseInt = window.parseInt;
    }
    if (!Number.parseFloat && window.parseFloat) {
      Number.parseFloat = window.parseFloat;
    }
    var consider = {
      hex: true,
      leadingZeros: true,
      decimalPoint: ".",
      eNotation: true
      //skipLike: /regex/
    };
    function toNumber(str, options = {}) {
      options = Object.assign({}, consider, options);
      if (!str || typeof str !== "string")
        return str;
      let trimmedStr = str.trim();
      if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr))
        return str;
      else if (options.hex && hexRegex.test(trimmedStr)) {
        return Number.parseInt(trimmedStr, 16);
      } else {
        const match = numRegex.exec(trimmedStr);
        if (match) {
          const sign = match[1];
          const leadingZeros = match[2];
          let numTrimmedByZeros = trimZeros(match[3]);
          const eNotation = match[4] || match[6];
          if (!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".")
            return str;
          else if (!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".")
            return str;
          else {
            const num = Number(trimmedStr);
            const numStr = "" + num;
            if (numStr.search(/[eE]/) !== -1) {
              if (options.eNotation)
                return num;
              else
                return str;
            } else if (eNotation) {
              if (options.eNotation)
                return num;
              else
                return str;
            } else if (trimmedStr.indexOf(".") !== -1) {
              if (numStr === "0" && numTrimmedByZeros === "")
                return num;
              else if (numStr === numTrimmedByZeros)
                return num;
              else if (sign && numStr === "-" + numTrimmedByZeros)
                return num;
              else
                return str;
            }
            if (leadingZeros) {
              if (numTrimmedByZeros === numStr)
                return num;
              else if (sign + numTrimmedByZeros === numStr)
                return num;
              else
                return str;
            }
            if (trimmedStr === numStr)
              return num;
            else if (trimmedStr === sign + numStr)
              return num;
            return str;
          }
        } else {
          return str;
        }
      }
    }
    function trimZeros(numStr) {
      if (numStr && numStr.indexOf(".") !== -1) {
        numStr = numStr.replace(/0+$/, "");
        if (numStr === ".")
          numStr = "0";
        else if (numStr[0] === ".")
          numStr = "0" + numStr;
        else if (numStr[numStr.length - 1] === ".")
          numStr = numStr.substr(0, numStr.length - 1);
        return numStr;
      }
      return numStr;
    }
    module.exports = toNumber;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js
var require_OrderedObjParser = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var util = require_util();
    var xmlNode = require_xmlNode();
    var readDocType = require_DocTypeReader();
    var toNumber = require_strnum();
    var OrderedObjParser = class {
      constructor(options) {
        this.options = options;
        this.currentNode = null;
        this.tagsNodeStack = [];
        this.docTypeEntities = {};
        this.lastEntities = {
          "apos": { regex: /&(apos|#39|#x27);/g, val: "'" },
          "gt": { regex: /&(gt|#62|#x3E);/g, val: ">" },
          "lt": { regex: /&(lt|#60|#x3C);/g, val: "<" },
          "quot": { regex: /&(quot|#34|#x22);/g, val: '"' }
        };
        this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" };
        this.htmlEntities = {
          "space": { regex: /&(nbsp|#160);/g, val: " " },
          // "lt" : { regex: /&(lt|#60);/g, val: "<" },
          // "gt" : { regex: /&(gt|#62);/g, val: ">" },
          // "amp" : { regex: /&(amp|#38);/g, val: "&" },
          // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
          // "apos" : { regex: /&(apos|#39);/g, val: "'" },
          "cent": { regex: /&(cent|#162);/g, val: "\xA2" },
          "pound": { regex: /&(pound|#163);/g, val: "\xA3" },
          "yen": { regex: /&(yen|#165);/g, val: "\xA5" },
          "euro": { regex: /&(euro|#8364);/g, val: "\u20AC" },
          "copyright": { regex: /&(copy|#169);/g, val: "\xA9" },
          "reg": { regex: /&(reg|#174);/g, val: "\xAE" },
          "inr": { regex: /&(inr|#8377);/g, val: "\u20B9" }
        };
        this.addExternalEntities = addExternalEntities;
        this.parseXml = parseXml;
        this.parseTextData = parseTextData;
        this.resolveNameSpace = resolveNameSpace;
        this.buildAttributesMap = buildAttributesMap;
        this.isItStopNode = isItStopNode;
        this.replaceEntitiesValue = replaceEntitiesValue;
        this.readStopNodeData = readStopNodeData;
        this.saveTextToParentTag = saveTextToParentTag;
        this.addChild = addChild;
      }
    };
    function addExternalEntities(externalEntities) {
      const entKeys = Object.keys(externalEntities);
      for (let i2 = 0; i2 < entKeys.length; i2++) {
        const ent = entKeys[i2];
        this.lastEntities[ent] = {
          regex: new RegExp("&" + ent + ";", "g"),
          val: externalEntities[ent]
        };
      }
    }
    function parseTextData(val2, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
      if (val2 !== void 0) {
        if (this.options.trimValues && !dontTrim) {
          val2 = val2.trim();
        }
        if (val2.length > 0) {
          if (!escapeEntities)
            val2 = this.replaceEntitiesValue(val2);
          const newval = this.options.tagValueProcessor(tagName, val2, jPath, hasAttributes, isLeafNode);
          if (newval === null || newval === void 0) {
            return val2;
          } else if (typeof newval !== typeof val2 || newval !== val2) {
            return newval;
          } else if (this.options.trimValues) {
            return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
          } else {
            const trimmedVal = val2.trim();
            if (trimmedVal === val2) {
              return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
            } else {
              return val2;
            }
          }
        }
      }
    }
    function resolveNameSpace(tagname) {
      if (this.options.removeNSPrefix) {
        const tags = tagname.split(":");
        const prefix = tagname.charAt(0) === "/" ? "/" : "";
        if (tags[0] === "xmlns") {
          return "";
        }
        if (tags.length === 2) {
          tagname = prefix + tags[1];
        }
      }
      return tagname;
    }
    var attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
    function buildAttributesMap(attrStr, jPath, tagName) {
      if (!this.options.ignoreAttributes && typeof attrStr === "string") {
        const matches = util.getAllMatches(attrStr, attrsRegx);
        const len = matches.length;
        const attrs = {};
        for (let i2 = 0; i2 < len; i2++) {
          const attrName = this.resolveNameSpace(matches[i2][1]);
          let oldVal = matches[i2][4];
          let aName = this.options.attributeNamePrefix + attrName;
          if (attrName.length) {
            if (this.options.transformAttributeName) {
              aName = this.options.transformAttributeName(aName);
            }
            if (aName === "__proto__")
              aName = "#__proto__";
            if (oldVal !== void 0) {
              if (this.options.trimValues) {
                oldVal = oldVal.trim();
              }
              oldVal = this.replaceEntitiesValue(oldVal);
              const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
              if (newVal === null || newVal === void 0) {
                attrs[aName] = oldVal;
              } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
                attrs[aName] = newVal;
              } else {
                attrs[aName] = parseValue(
                  oldVal,
                  this.options.parseAttributeValue,
                  this.options.numberParseOptions
                );
              }
            } else if (this.options.allowBooleanAttributes) {
              attrs[aName] = true;
            }
          }
        }
        if (!Object.keys(attrs).length) {
          return;
        }
        if (this.options.attributesGroupName) {
          const attrCollection = {};
          attrCollection[this.options.attributesGroupName] = attrs;
          return attrCollection;
        }
        return attrs;
      }
    }
    var parseXml = function(xmlData) {
      xmlData = xmlData.replace(/\r\n?/g, "\n");
      const xmlObj = new xmlNode("!xml");
      let currentNode = xmlObj;
      let textData = "";
      let jPath = "";
      for (let i2 = 0; i2 < xmlData.length; i2++) {
        const ch = xmlData[i2];
        if (ch === "<") {
          if (xmlData[i2 + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i2, "Closing Tag is not closed.");
            let tagName = xmlData.substring(i2 + 2, closeIndex).trim();
            if (this.options.removeNSPrefix) {
              const colonIndex = tagName.indexOf(":");
              if (colonIndex !== -1) {
                tagName = tagName.substr(colonIndex + 1);
              }
            }
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode) {
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
            }
            const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
            if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
              throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
            }
            let propIndex = 0;
            if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
              propIndex = jPath.lastIndexOf(".", jPath.lastIndexOf(".") - 1);
              this.tagsNodeStack.pop();
            } else {
              propIndex = jPath.lastIndexOf(".");
            }
            jPath = jPath.substring(0, propIndex);
            currentNode = this.tagsNodeStack.pop();
            textData = "";
            i2 = closeIndex;
          } else if (xmlData[i2 + 1] === "?") {
            let tagData = readTagExp(xmlData, i2, false, "?>");
            if (!tagData)
              throw new Error("Pi Tag is not closed.");
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {
            } else {
              const childNode = new xmlNode(tagData.tagName);
              childNode.add(this.options.textNodeName, "");
              if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
              }
              this.addChild(currentNode, childNode, jPath);
            }
            i2 = tagData.closeIndex + 1;
          } else if (xmlData.substr(i2 + 1, 3) === "!--") {
            const endIndex = findClosingIndex(xmlData, "-->", i2 + 4, "Comment is not closed.");
            if (this.options.commentPropName) {
              const comment = xmlData.substring(i2 + 4, endIndex - 2);
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
              currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
            }
            i2 = endIndex;
          } else if (xmlData.substr(i2 + 1, 2) === "!D") {
            const result = readDocType(xmlData, i2);
            this.docTypeEntities = result.entities;
            i2 = result.i;
          } else if (xmlData.substr(i2 + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i2, "CDATA is not closed.") - 2;
            const tagExp = xmlData.substring(i2 + 9, closeIndex);
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            if (this.options.cdataPropName) {
              currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
            } else {
              let val2 = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true);
              if (val2 == void 0)
                val2 = "";
              currentNode.add(this.options.textNodeName, val2);
            }
            i2 = closeIndex + 2;
          } else {
            let result = readTagExp(xmlData, i2, this.options.removeNSPrefix);
            let tagName = result.tagName;
            const rawTagName = result.rawTagName;
            let tagExp = result.tagExp;
            let attrExpPresent = result.attrExpPresent;
            let closeIndex = result.closeIndex;
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode && textData) {
              if (currentNode.tagname !== "!xml") {
                textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
              }
            }
            const lastTag = currentNode;
            if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
              currentNode = this.tagsNodeStack.pop();
              jPath = jPath.substring(0, jPath.lastIndexOf("."));
            }
            if (tagName !== xmlObj.tagname) {
              jPath += jPath ? "." + tagName : tagName;
            }
            if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
              let tagContent = "";
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                i2 = result.closeIndex;
              } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                i2 = result.closeIndex;
              } else {
                const result2 = this.readStopNodeData(xmlData, rawTagName, closeIndex + 1);
                if (!result2)
                  throw new Error(`Unexpected end of ${rawTagName}`);
                i2 = result2.i;
                tagContent = result2.tagContent;
              }
              const childNode = new xmlNode(tagName);
              if (tagName !== tagExp && attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
              }
              if (tagContent) {
                tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
              }
              jPath = jPath.substr(0, jPath.lastIndexOf("."));
              childNode.add(this.options.textNodeName, tagContent);
              this.addChild(currentNode, childNode, jPath);
            } else {
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                if (tagName[tagName.length - 1] === "/") {
                  tagName = tagName.substr(0, tagName.length - 1);
                  jPath = jPath.substr(0, jPath.length - 1);
                  tagExp = tagName;
                } else {
                  tagExp = tagExp.substr(0, tagExp.length - 1);
                }
                if (this.options.transformTagName) {
                  tagName = this.options.transformTagName(tagName);
                }
                const childNode = new xmlNode(tagName);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath);
                jPath = jPath.substr(0, jPath.lastIndexOf("."));
              } else {
                const childNode = new xmlNode(tagName);
                this.tagsNodeStack.push(currentNode);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath);
                currentNode = childNode;
              }
              textData = "";
              i2 = closeIndex;
            }
          }
        } else {
          textData += xmlData[i2];
        }
      }
      return xmlObj.child;
    };
    function addChild(currentNode, childNode, jPath) {
      const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
      if (result === false) {
      } else if (typeof result === "string") {
        childNode.tagname = result;
        currentNode.addChild(childNode);
      } else {
        currentNode.addChild(childNode);
      }
    }
    var replaceEntitiesValue = function(val2) {
      if (this.options.processEntities) {
        for (let entityName2 in this.docTypeEntities) {
          const entity = this.docTypeEntities[entityName2];
          val2 = val2.replace(entity.regx, entity.val);
        }
        for (let entityName2 in this.lastEntities) {
          const entity = this.lastEntities[entityName2];
          val2 = val2.replace(entity.regex, entity.val);
        }
        if (this.options.htmlEntities) {
          for (let entityName2 in this.htmlEntities) {
            const entity = this.htmlEntities[entityName2];
            val2 = val2.replace(entity.regex, entity.val);
          }
        }
        val2 = val2.replace(this.ampEntity.regex, this.ampEntity.val);
      }
      return val2;
    };
    function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
      if (textData) {
        if (isLeafNode === void 0)
          isLeafNode = Object.keys(currentNode.child).length === 0;
        textData = this.parseTextData(
          textData,
          currentNode.tagname,
          jPath,
          false,
          currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false,
          isLeafNode
        );
        if (textData !== void 0 && textData !== "")
          currentNode.add(this.options.textNodeName, textData);
        textData = "";
      }
      return textData;
    }
    function isItStopNode(stopNodes, jPath, currentTagName) {
      const allNodesExp = "*." + currentTagName;
      for (const stopNodePath in stopNodes) {
        const stopNodeExp = stopNodes[stopNodePath];
        if (allNodesExp === stopNodeExp || jPath === stopNodeExp)
          return true;
      }
      return false;
    }
    function tagExpWithClosingIndex(xmlData, i2, closingChar = ">") {
      let attrBoundary;
      let tagExp = "";
      for (let index = i2; index < xmlData.length; index++) {
        let ch = xmlData[index];
        if (attrBoundary) {
          if (ch === attrBoundary)
            attrBoundary = "";
        } else if (ch === '"' || ch === "'") {
          attrBoundary = ch;
        } else if (ch === closingChar[0]) {
          if (closingChar[1]) {
            if (xmlData[index + 1] === closingChar[1]) {
              return {
                data: tagExp,
                index
              };
            }
          } else {
            return {
              data: tagExp,
              index
            };
          }
        } else if (ch === "	") {
          ch = " ";
        }
        tagExp += ch;
      }
    }
    function findClosingIndex(xmlData, str, i2, errMsg) {
      const closingIndex = xmlData.indexOf(str, i2);
      if (closingIndex === -1) {
        throw new Error(errMsg);
      } else {
        return closingIndex + str.length - 1;
      }
    }
    function readTagExp(xmlData, i2, removeNSPrefix, closingChar = ">") {
      const result = tagExpWithClosingIndex(xmlData, i2 + 1, closingChar);
      if (!result)
        return;
      let tagExp = result.data;
      const closeIndex = result.index;
      const separatorIndex = tagExp.search(/\s/);
      let tagName = tagExp;
      let attrExpPresent = true;
      if (separatorIndex !== -1) {
        tagName = tagExp.substring(0, separatorIndex);
        tagExp = tagExp.substring(separatorIndex + 1).trimStart();
      }
      const rawTagName = tagName;
      if (removeNSPrefix) {
        const colonIndex = tagName.indexOf(":");
        if (colonIndex !== -1) {
          tagName = tagName.substr(colonIndex + 1);
          attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
        }
      }
      return {
        tagName,
        tagExp,
        closeIndex,
        attrExpPresent,
        rawTagName
      };
    }
    function readStopNodeData(xmlData, tagName, i2) {
      const startIndex = i2;
      let openTagCount = 1;
      for (; i2 < xmlData.length; i2++) {
        if (xmlData[i2] === "<") {
          if (xmlData[i2 + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i2, `${tagName} is not closed`);
            let closeTagName = xmlData.substring(i2 + 2, closeIndex).trim();
            if (closeTagName === tagName) {
              openTagCount--;
              if (openTagCount === 0) {
                return {
                  tagContent: xmlData.substring(startIndex, i2),
                  i: closeIndex
                };
              }
            }
            i2 = closeIndex;
          } else if (xmlData[i2 + 1] === "?") {
            const closeIndex = findClosingIndex(xmlData, "?>", i2 + 1, "StopNode is not closed.");
            i2 = closeIndex;
          } else if (xmlData.substr(i2 + 1, 3) === "!--") {
            const closeIndex = findClosingIndex(xmlData, "-->", i2 + 3, "StopNode is not closed.");
            i2 = closeIndex;
          } else if (xmlData.substr(i2 + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i2, "StopNode is not closed.") - 2;
            i2 = closeIndex;
          } else {
            const tagData = readTagExp(xmlData, i2, ">");
            if (tagData) {
              const openTagName = tagData && tagData.tagName;
              if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
                openTagCount++;
              }
              i2 = tagData.closeIndex;
            }
          }
        }
      }
    }
    function parseValue(val2, shouldParse, options) {
      if (shouldParse && typeof val2 === "string") {
        const newval = val2.trim();
        if (newval === "true")
          return true;
        else if (newval === "false")
          return false;
        else
          return toNumber(val2, options);
      } else {
        if (util.isExist(val2)) {
          return val2;
        } else {
          return "";
        }
      }
    }
    module.exports = OrderedObjParser;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/node2json.js
var require_node2json = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/node2json.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    function prettify(node, options) {
      return compress(node, options);
    }
    function compress(arr, options, jPath) {
      let text2;
      const compressedObj = {};
      for (let i2 = 0; i2 < arr.length; i2++) {
        const tagObj = arr[i2];
        const property = propName(tagObj);
        let newJpath = "";
        if (jPath === void 0)
          newJpath = property;
        else
          newJpath = jPath + "." + property;
        if (property === options.textNodeName) {
          if (text2 === void 0)
            text2 = tagObj[property];
          else
            text2 += "" + tagObj[property];
        } else if (property === void 0) {
          continue;
        } else if (tagObj[property]) {
          let val2 = compress(tagObj[property], options, newJpath);
          const isLeaf = isLeafTag(val2, options);
          if (tagObj[":@"]) {
            assignAttributes(val2, tagObj[":@"], newJpath, options);
          } else if (Object.keys(val2).length === 1 && val2[options.textNodeName] !== void 0 && !options.alwaysCreateTextNode) {
            val2 = val2[options.textNodeName];
          } else if (Object.keys(val2).length === 0) {
            if (options.alwaysCreateTextNode)
              val2[options.textNodeName] = "";
            else
              val2 = "";
          }
          if (compressedObj[property] !== void 0 && compressedObj.hasOwnProperty(property)) {
            if (!Array.isArray(compressedObj[property])) {
              compressedObj[property] = [compressedObj[property]];
            }
            compressedObj[property].push(val2);
          } else {
            if (options.isArray(property, newJpath, isLeaf)) {
              compressedObj[property] = [val2];
            } else {
              compressedObj[property] = val2;
            }
          }
        }
      }
      if (typeof text2 === "string") {
        if (text2.length > 0)
          compressedObj[options.textNodeName] = text2;
      } else if (text2 !== void 0)
        compressedObj[options.textNodeName] = text2;
      return compressedObj;
    }
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i2 = 0; i2 < keys.length; i2++) {
        const key = keys[i2];
        if (key !== ":@")
          return key;
      }
    }
    function assignAttributes(obj, attrMap, jpath, options) {
      if (attrMap) {
        const keys = Object.keys(attrMap);
        const len = keys.length;
        for (let i2 = 0; i2 < len; i2++) {
          const atrrName = keys[i2];
          if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
            obj[atrrName] = [attrMap[atrrName]];
          } else {
            obj[atrrName] = attrMap[atrrName];
          }
        }
      }
    }
    function isLeafTag(obj, options) {
      const { textNodeName } = options;
      const propCount = Object.keys(obj).length;
      if (propCount === 0) {
        return true;
      }
      if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
        return true;
      }
      return false;
    }
    exports.prettify = prettify;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
var require_XMLParser = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/XMLParser.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var { buildOptions } = require_OptionsBuilder();
    var OrderedObjParser = require_OrderedObjParser();
    var { prettify } = require_node2json();
    var validator = require_validator();
    var XMLParser2 = class {
      constructor(options) {
        this.externalEntities = {};
        this.options = buildOptions(options);
      }
      /**
       * Parse XML dats to JS object 
       * @param {string|Buffer} xmlData 
       * @param {boolean|Object} validationOption 
       */
      parse(xmlData, validationOption) {
        if (typeof xmlData === "string") {
        } else if (xmlData.toString) {
          xmlData = xmlData.toString();
        } else {
          throw new Error("XML data is accepted in String or Bytes[] form.");
        }
        if (validationOption) {
          if (validationOption === true)
            validationOption = {};
          const result = validator.validate(xmlData, validationOption);
          if (result !== true) {
            throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
          }
        }
        const orderedObjParser = new OrderedObjParser(this.options);
        orderedObjParser.addExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if (this.options.preserveOrder || orderedResult === void 0)
          return orderedResult;
        else
          return prettify(orderedResult, this.options);
      }
      /**
       * Add Entity which is not by default supported by this library
       * @param {string} key 
       * @param {string} value 
       */
      addEntity(key, value) {
        if (value.indexOf("&") !== -1) {
          throw new Error("Entity value can't have '&'");
        } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
          throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        } else if (value === "&") {
          throw new Error("An entity with value '&' is not permitted");
        } else {
          this.externalEntities[key] = value;
        }
      }
    };
    module.exports = XMLParser2;
  }
});

// node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js
var require_orderedJs2Xml = __commonJS({
  "node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var EOL = "\n";
    function toXml(jArray, options) {
      let indentation = "";
      if (options.format && options.indentBy.length > 0) {
        indentation = EOL;
      }
      return arrToStr(jArray, options, "", indentation);
    }
    function arrToStr(arr, options, jPath, indentation) {
      let xmlStr = "";
      let isPreviousElementTag = false;
      for (let i2 = 0; i2 < arr.length; i2++) {
        const tagObj = arr[i2];
        const tagName = propName(tagObj);
        if (tagName === void 0)
          continue;
        let newJPath = "";
        if (jPath.length === 0)
          newJPath = tagName;
        else
          newJPath = `${jPath}.${tagName}`;
        if (tagName === options.textNodeName) {
          let tagText = tagObj[tagName];
          if (!isStopNode(newJPath, options)) {
            tagText = options.tagValueProcessor(tagName, tagText);
            tagText = replaceEntitiesValue(tagText, options);
          }
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          xmlStr += tagText;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.cdataPropName) {
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.commentPropName) {
          xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
          isPreviousElementTag = true;
          continue;
        } else if (tagName[0] === "?") {
          const attStr2 = attr_to_str(tagObj[":@"], options);
          const tempInd = tagName === "?xml" ? "" : indentation;
          let piTextNodeName = tagObj[tagName][0][options.textNodeName];
          piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : "";
          xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr2}?>`;
          isPreviousElementTag = true;
          continue;
        }
        let newIdentation = indentation;
        if (newIdentation !== "") {
          newIdentation += options.indentBy;
        }
        const attStr = attr_to_str(tagObj[":@"], options);
        const tagStart = indentation + `<${tagName}${attStr}`;
        const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
        if (options.unpairedTags.indexOf(tagName) !== -1) {
          if (options.suppressUnpairedNode)
            xmlStr += tagStart + ">";
          else
            xmlStr += tagStart + "/>";
        } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
          xmlStr += tagStart + "/>";
        } else if (tagValue && tagValue.endsWith(">")) {
          xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
        } else {
          xmlStr += tagStart + ">";
          if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
            xmlStr += indentation + options.indentBy + tagValue + indentation;
          } else {
            xmlStr += tagValue;
          }
          xmlStr += `</${tagName}>`;
        }
        isPreviousElementTag = true;
      }
      return xmlStr;
    }
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i2 = 0; i2 < keys.length; i2++) {
        const key = keys[i2];
        if (!obj.hasOwnProperty(key))
          continue;
        if (key !== ":@")
          return key;
      }
    }
    function attr_to_str(attrMap, options) {
      let attrStr = "";
      if (attrMap && !options.ignoreAttributes) {
        for (let attr in attrMap) {
          if (!attrMap.hasOwnProperty(attr))
            continue;
          let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
          attrVal = replaceEntitiesValue(attrVal, options);
          if (attrVal === true && options.suppressBooleanAttributes) {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
          } else {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
          }
        }
      }
      return attrStr;
    }
    function isStopNode(jPath, options) {
      jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
      let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
      for (let index in options.stopNodes) {
        if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName)
          return true;
      }
      return false;
    }
    function replaceEntitiesValue(textValue, options) {
      if (textValue && textValue.length > 0 && options.processEntities) {
        for (let i2 = 0; i2 < options.entities.length; i2++) {
          const entity = options.entities[i2];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    }
    module.exports = toXml;
  }
});

// node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js
var require_json2xml = __commonJS({
  "node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var buildFromOrderedJs = require_orderedJs2Xml();
    var defaultOptions = {
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      cdataPropName: false,
      format: false,
      indentBy: "  ",
      suppressEmptyNode: false,
      suppressUnpairedNode: true,
      suppressBooleanAttributes: true,
      tagValueProcessor: function(key, a) {
        return a;
      },
      attributeValueProcessor: function(attrName, a) {
        return a;
      },
      preserveOrder: false,
      commentPropName: false,
      unpairedTags: [],
      entities: [
        { regex: new RegExp("&", "g"), val: "&amp;" },
        //it must be on top
        { regex: new RegExp(">", "g"), val: "&gt;" },
        { regex: new RegExp("<", "g"), val: "&lt;" },
        { regex: new RegExp("'", "g"), val: "&apos;" },
        { regex: new RegExp('"', "g"), val: "&quot;" }
      ],
      processEntities: true,
      stopNodes: [],
      // transformTagName: false,
      // transformAttributeName: false,
      oneListGroup: false
    };
    function Builder(options) {
      this.options = Object.assign({}, defaultOptions, options);
      if (this.options.ignoreAttributes || this.options.attributesGroupName) {
        this.isAttribute = function() {
          return false;
        };
      } else {
        this.attrPrefixLen = this.options.attributeNamePrefix.length;
        this.isAttribute = isAttribute;
      }
      this.processTextOrObjNode = processTextOrObjNode;
      if (this.options.format) {
        this.indentate = indentate;
        this.tagEndChar = ">\n";
        this.newLine = "\n";
      } else {
        this.indentate = function() {
          return "";
        };
        this.tagEndChar = ">";
        this.newLine = "";
      }
    }
    Builder.prototype.build = function(jObj) {
      if (this.options.preserveOrder) {
        return buildFromOrderedJs(jObj, this.options);
      } else {
        if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
          jObj = {
            [this.options.arrayNodeName]: jObj
          };
        }
        return this.j2x(jObj, 0).val;
      }
    };
    Builder.prototype.j2x = function(jObj, level) {
      let attrStr = "";
      let val2 = "";
      for (let key in jObj) {
        if (!Object.prototype.hasOwnProperty.call(jObj, key))
          continue;
        if (typeof jObj[key] === "undefined") {
          if (this.isAttribute(key)) {
            val2 += "";
          }
        } else if (jObj[key] === null) {
          if (this.isAttribute(key)) {
            val2 += "";
          } else if (key[0] === "?") {
            val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
          } else {
            val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
          }
        } else if (jObj[key] instanceof Date) {
          val2 += this.buildTextValNode(jObj[key], key, "", level);
        } else if (typeof jObj[key] !== "object") {
          const attr = this.isAttribute(key);
          if (attr) {
            attrStr += this.buildAttrPairStr(attr, "" + jObj[key]);
          } else {
            if (key === this.options.textNodeName) {
              let newval = this.options.tagValueProcessor(key, "" + jObj[key]);
              val2 += this.replaceEntitiesValue(newval);
            } else {
              val2 += this.buildTextValNode(jObj[key], key, "", level);
            }
          }
        } else if (Array.isArray(jObj[key])) {
          const arrLen = jObj[key].length;
          let listTagVal = "";
          for (let j = 0; j < arrLen; j++) {
            const item = jObj[key][j];
            if (typeof item === "undefined") {
            } else if (item === null) {
              if (key[0] === "?")
                val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
              else
                val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
            } else if (typeof item === "object") {
              if (this.options.oneListGroup) {
                listTagVal += this.j2x(item, level + 1).val;
              } else {
                listTagVal += this.processTextOrObjNode(item, key, level);
              }
            } else {
              listTagVal += this.buildTextValNode(item, key, "", level);
            }
          }
          if (this.options.oneListGroup) {
            listTagVal = this.buildObjectNode(listTagVal, key, "", level);
          }
          val2 += listTagVal;
        } else {
          if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
            const Ks = Object.keys(jObj[key]);
            const L = Ks.length;
            for (let j = 0; j < L; j++) {
              attrStr += this.buildAttrPairStr(Ks[j], "" + jObj[key][Ks[j]]);
            }
          } else {
            val2 += this.processTextOrObjNode(jObj[key], key, level);
          }
        }
      }
      return { attrStr, val: val2 };
    };
    Builder.prototype.buildAttrPairStr = function(attrName, val2) {
      val2 = this.options.attributeValueProcessor(attrName, "" + val2);
      val2 = this.replaceEntitiesValue(val2);
      if (this.options.suppressBooleanAttributes && val2 === "true") {
        return " " + attrName;
      } else
        return " " + attrName + '="' + val2 + '"';
    };
    function processTextOrObjNode(object, key, level) {
      const result = this.j2x(object, level + 1);
      if (object[this.options.textNodeName] !== void 0 && Object.keys(object).length === 1) {
        return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
      } else {
        return this.buildObjectNode(result.val, key, result.attrStr, level);
      }
    }
    Builder.prototype.buildObjectNode = function(val2, key, attrStr, level) {
      if (val2 === "") {
        if (key[0] === "?")
          return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
        else {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        }
      } else {
        let tagEndExp = "</" + key + this.tagEndChar;
        let piClosingChar = "";
        if (key[0] === "?") {
          piClosingChar = "?";
          tagEndExp = "";
        }
        if ((attrStr || attrStr === "") && val2.indexOf("<") === -1) {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + ">" + val2 + tagEndExp;
        } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
          return this.indentate(level) + `<!--${val2}-->` + this.newLine;
        } else {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + this.tagEndChar + val2 + this.indentate(level) + tagEndExp;
        }
      }
    };
    Builder.prototype.closeTag = function(key) {
      let closeTag = "";
      if (this.options.unpairedTags.indexOf(key) !== -1) {
        if (!this.options.suppressUnpairedNode)
          closeTag = "/";
      } else if (this.options.suppressEmptyNode) {
        closeTag = "/";
      } else {
        closeTag = `></${key}`;
      }
      return closeTag;
    };
    Builder.prototype.buildTextValNode = function(val2, key, attrStr, level) {
      if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
        return this.indentate(level) + `<![CDATA[${val2}]]>` + this.newLine;
      } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
        return this.indentate(level) + `<!--${val2}-->` + this.newLine;
      } else if (key[0] === "?") {
        return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
      } else {
        let textValue = this.options.tagValueProcessor(key, val2);
        textValue = this.replaceEntitiesValue(textValue);
        if (textValue === "") {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        } else {
          return this.indentate(level) + "<" + key + attrStr + ">" + textValue + "</" + key + this.tagEndChar;
        }
      }
    };
    Builder.prototype.replaceEntitiesValue = function(textValue) {
      if (textValue && textValue.length > 0 && this.options.processEntities) {
        for (let i2 = 0; i2 < this.options.entities.length; i2++) {
          const entity = this.options.entities[i2];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    };
    function indentate(level) {
      return this.options.indentBy.repeat(level);
    }
    function isAttribute(name) {
      if (name.startsWith(this.options.attributeNamePrefix) && name !== this.options.textNodeName) {
        return name.substr(this.attrPrefixLen);
      } else {
        return false;
      }
    }
    module.exports = Builder;
  }
});

// node_modules/fast-xml-parser/src/fxp.js
var require_fxp = __commonJS({
  "node_modules/fast-xml-parser/src/fxp.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var validator = require_validator();
    var XMLParser2 = require_XMLParser();
    var XMLBuilder = require_json2xml();
    module.exports = {
      XMLParser: XMLParser2,
      XMLValidator: validator,
      XMLBuilder
    };
  }
});

// .wrangler/tmp/bundle-wshuRb/middleware-loader.entry.ts
init_checked_fetch();
init_modules_watch_stub();

// node_modules/wrangler/templates/middleware/common.ts
init_checked_fetch();
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-wshuRb/middleware-insertion-facade.js
init_checked_fetch();
init_modules_watch_stub();

// src/worker.ts
init_checked_fetch();
init_modules_watch_stub();

// node_modules/itty-router/Router.mjs
init_checked_fetch();
init_modules_watch_stub();
var e = ({ base: e2 = "", routes: r = [], ...o2 } = {}) => ({ __proto__: new Proxy({}, { get: (o3, t, a, p2) => "handle" == t ? a.fetch : (o4, ...l2) => r.push([t.toUpperCase?.(), RegExp(`^${(p2 = (e2 + o4).replace(/\/+(\/|$)/g, "$1")).replace(/(\/?\.?):(\w+)\+/g, "($1(?<$2>*))").replace(/(\/?\.?):(\w+)/g, "($1(?<$2>[^$1/]+?))").replace(/\./g, "\\.").replace(/(\/?)\*/g, "($1.*)?")}/*$`), l2, p2]) && a }), routes: r, ...o2, async fetch(e3, ...o3) {
  let t, a, p2 = new URL(e3.url), l2 = e3.query = { __proto__: null };
  for (let [e4, r2] of p2.searchParams)
    l2[e4] = l2[e4] ? [].concat(l2[e4], r2) : r2;
  for (let [l3, c2, s2, f] of r)
    if ((l3 == e3.method || "ALL" == l3) && (a = p2.pathname.match(c2))) {
      e3.params = a.groups || {}, e3.route = f;
      for (let r2 of s2)
        if (null != (t = await r2(e3.proxy ?? e3, ...o3)))
          return t;
    }
} });

// src/discord/index.ts
init_checked_fetch();
init_modules_watch_stub();

// src/discord/commands/ping.ts
init_checked_fetch();
init_modules_watch_stub();

// src/discord/type.ts
init_checked_fetch();
init_modules_watch_stub();

// src/discord/commands/ping.ts
var PingCommand = class {
  name = "ping";
  description = "\u83B7\u53D6\u670D\u52A1\u5668\u5EF6\u8FDF\uFF0C\u4EE5\u53CA\u670D\u52A1\u5668\u4F4D\u7F6E\u4FE1\u606F";
  type = 2 /* APPLICATION_COMMAND */;
  options = [];
  app = null;
  initApp(app) {
    this.app = app;
  }
  async handel(request, inc, env) {
    return {
      type: 4 /* CHANNEL_MESSAGE_WITH_SOURCE */,
      data: {
        tts: false,
        content: "### \u5E7B\u754CBot \r\n ",
        embeds: [],
        allowed_mentions: {
          parse: ["users"],
          users: []
        }
      }
    };
  }
};

// src/discord/commands/rpg/rpg.ts
init_checked_fetch();
init_modules_watch_stub();

// src/discord/orm/player.ts
init_checked_fetch();
init_modules_watch_stub();

// node_modules/d1-orm/lib/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/d1-orm/lib/database.js
init_checked_fetch();
init_modules_watch_stub();
var D1Orm = class {
  constructor(database) {
    if (!isDatabase(database)) {
      throw new Error("Invalid database, should contain prepare, dump, batch, and exec methods");
    }
    this.database = database;
  }
  prepare(query) {
    return this.database.prepare(query);
  }
  async dump() {
    return this.database.dump();
  }
  async batch(statements) {
    return this.database.batch(statements);
  }
  async exec(query) {
    return this.database.exec(query);
  }
};
function isDatabase(database) {
  return !!database && ["prepare", "dump", "batch", "exec"].every(
    // @ts-expect-error - We're checking if the database is valid
    (x) => typeof database[x] === "function"
  );
}

// node_modules/d1-orm/lib/model.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/d1-orm/lib/queryBuilder.js
init_checked_fetch();
init_modules_watch_stub();
var QueryType;
(function(QueryType2) {
  QueryType2["SELECT"] = "SELECT";
  QueryType2["INSERT"] = "INSERT";
  QueryType2["INSERT_OR_REPLACE"] = "INSERT or REPLACE";
  QueryType2["UPDATE"] = "UPDATE";
  QueryType2["DELETE"] = "DELETE";
  QueryType2["UPSERT"] = "UPSERT";
})(QueryType || (QueryType = {}));
function GenerateQuery(type, tableName, options = {}, primaryKeys = "id") {
  if (typeof tableName !== "string" || !tableName.length) {
    throw new Error("Invalid table name");
  }
  let query = "";
  const bindings = [];
  switch (type) {
    case QueryType.SELECT: {
      query = `SELECT * FROM \`${tableName}\``;
      if (options.where) {
        const whereStmt = [];
        for (const [key, value] of Object.entries(options.where)) {
          whereStmt.push(`${key} = ?`);
          bindings.push(value);
        }
        if (whereStmt.length)
          query += ` WHERE ${whereStmt.join(" AND ")}`;
      }
      if (options.orderBy) {
        query += " ORDER BY " + transformOrderBy(options.orderBy);
      }
      if (options.limit) {
        query += ` LIMIT ${options.limit}`;
        if (options.offset) {
          query += ` OFFSET ${options.offset}`;
        }
      }
      break;
    }
    case QueryType.DELETE: {
      query = `DELETE FROM \`${tableName}\``;
      if (options.where) {
        const whereStmt = [];
        for (const [key, value] of Object.entries(options.where)) {
          whereStmt.push(`${key} = ?`);
          bindings.push(value);
        }
        if (whereStmt.length)
          query += ` WHERE ${whereStmt.join(" AND ")}`;
      }
      break;
    }
    case QueryType.INSERT_OR_REPLACE:
    case QueryType.INSERT: {
      query = `${type} INTO \`${tableName}\``;
      if (typeof options.data !== "object" || Object.getOwnPropertyNames(options.data).length === 0) {
        throw new Error("Must provide data to insert");
      }
      const keys = [];
      for (const [key, value] of Object.entries(options.data)) {
        keys.push(key);
        bindings.push(value);
      }
      query += ` (${keys.join(", ")}) VALUES (${"?".repeat(keys.length).split("").join(", ")})`;
      break;
    }
    case QueryType.UPDATE: {
      query = `UPDATE \`${tableName}\``;
      if (typeof options.data !== "object" || Object.getOwnPropertyNames(options.data).length === 0) {
        throw new Error("Must provide data to update");
      }
      const keys = [];
      for (const [key, value] of Object.entries(options.data)) {
        keys.push(`${key} = ?`);
        bindings.push(value);
      }
      query += ` SET ${keys.join(", ")}`;
      if (options.where) {
        const whereStmt = [];
        for (const [key, value] of Object.entries(options.where)) {
          whereStmt.push(`${key} = ?`);
          bindings.push(value);
        }
        if (whereStmt.length)
          query += ` WHERE ${whereStmt.join(" AND ")}`;
      }
      break;
    }
    case QueryType.UPSERT: {
      const insertDataKeys = Object.keys(options.data ?? {});
      const updateDataKeys = Object.keys(options.upsertOnlyUpdateData ?? {});
      const whereKeys = Object.keys(options.where ?? {});
      bindings.push(...Object.values(options.data ?? {}), ...Object.values(options.upsertOnlyUpdateData ?? {}), ...Object.values(options.where ?? {}));
      if (insertDataKeys.length === 0 || updateDataKeys.length === 0 || whereKeys.length === 0) {
        throw new Error("Must provide data to insert with, data to update with, and where keys in Upsert");
      }
      query = `INSERT INTO \`${tableName}\` (${insertDataKeys.join(", ")})`;
      query += ` VALUES (${"?".repeat(insertDataKeys.length).split("").join(", ")})`;
      const primaryKeyStr = Array.isArray(primaryKeys) ? primaryKeys.join(", ") : primaryKeys;
      query += ` ON CONFLICT (${primaryKeyStr}) DO UPDATE SET`;
      query += ` ${updateDataKeys.map((key) => `${key} = ?`).join(", ")}`;
      query += ` WHERE ${whereKeys.map((key) => `${key} = ?`).join(" AND ")}`;
      break;
    }
    default:
      throw new Error("Invalid QueryType provided");
  }
  return {
    query,
    bindings
  };
}
function transformOrderBy(orderBy) {
  if (Array.isArray(orderBy)) {
    return orderBy.map(transformOrderBy).join(", ");
  }
  if (typeof orderBy === "string" || typeof orderBy === "symbol" || typeof orderBy === "number") {
    return `"${String(orderBy)}"`;
  }
  return `"${String(orderBy.column)}"` + (orderBy.descending ? " DESC" : "") + (orderBy.nullLast ? " NULLS LAST" : "");
}

// node_modules/d1-orm/lib/model.js
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Model_D1Orm;
var _Model_autoIncrementColumn;
var _Model_withRowId;
var Model = class {
  /**
   * @param options - The options for the model. All parameters except autoIncrement, withRowId, and uniqueKeys are required.
   * @param options.tableName - The name of the table to use.
   * @param options.D1Orm - The D1Orm instance to use - optional. If not set initially, you must use SetOrm() to set before querying.
   * @param options.primaryKeys - The primary key or keys of the table.
   * @param options.autoIncrement - The column to use for auto incrementing. If specified, only one primary key is allowed, and must be of type INTEGER.
   * @param options.uniqueKeys - The unique keys of the table. For example `[ ['id'], ['username', 'discriminator'] ]` would cause ID to be unique, as well as the combination of username and discriminator.
   * @param options.withRowId - Whether or not D1 should generate a `rowid` column automatically. Defaults to false.
   * @param columns - The columns for the model. The keys are the column names, and the values are the column options. See {@link ModelColumn}
   */
  constructor(options, columns) {
    _Model_D1Orm.set(this, void 0);
    _Model_autoIncrementColumn.set(this, void 0);
    _Model_withRowId.set(this, void 0);
    __classPrivateFieldSet(this, _Model_D1Orm, options.D1Orm ?? null, "f");
    this.tableName = options.tableName;
    this.columns = columns;
    this.primaryKeys = Array.isArray(options.primaryKeys) ? options.primaryKeys : [options.primaryKeys].filter(Boolean);
    __classPrivateFieldSet(this, _Model_autoIncrementColumn, options.autoIncrement, "f");
    this.uniqueKeys = options.uniqueKeys || [];
    __classPrivateFieldSet(this, _Model_withRowId, options.withRowId ?? false, "f");
    if (__classPrivateFieldGet(this, _Model_D1Orm, "f") && (!(__classPrivateFieldGet(this, _Model_D1Orm, "f") instanceof D1Orm) || !isDatabase(__classPrivateFieldGet(this, _Model_D1Orm, "f")))) {
      throw new Error("Options.D1Orm is not an instance of D1Orm");
    }
    if (typeof this.tableName !== "string" || !this.tableName.length) {
      throw new Error("Options.tableName must be a string");
    }
    if (!this.primaryKeys.length || this.primaryKeys.find((x) => typeof x !== "string" || !x.length)) {
      throw new Error("Options.primaryKeys must be a string or an array of strings");
    }
    if (__classPrivateFieldGet(this, _Model_withRowId, "f") && __classPrivateFieldGet(this, _Model_autoIncrementColumn, "f")) {
      throw new Error("Options.autoIncrement and Options.withRowId cannot both be set");
    }
    if (!columns) {
      throw new Error("Model columns must be defined");
    }
    const columnEntries = Object.entries(columns);
    if (!columnEntries.length) {
      throw new Error("Model columns cannot be empty");
    }
    if (this.primaryKeys.find((x) => !(x in columns))) {
      throw new Error("Options.primaryKeys includes a column that does not exist");
    }
    if (__classPrivateFieldGet(this, _Model_autoIncrementColumn, "f")) {
      if (typeof __classPrivateFieldGet(this, _Model_autoIncrementColumn, "f") !== "string") {
        throw new Error("Options.autoIncrement was provided, but was not a string");
      }
      if (!this.primaryKeys.includes(__classPrivateFieldGet(this, _Model_autoIncrementColumn, "f"))) {
        throw new Error("Options.autoIncrement was provided, but was not a primary key");
      }
      if (this.primaryKeys.length > 1) {
        throw new Error("Options.autoIncrement was provided, but there are multiple primary keys");
      }
      if (!this.columns[__classPrivateFieldGet(this, _Model_autoIncrementColumn, "f")]) {
        throw new Error("Options.autoIncrement was provided, but is not a column");
      }
      if (this.columns[__classPrivateFieldGet(this, _Model_autoIncrementColumn, "f")].type !== DataTypes.INTEGER) {
        throw new Error("Options.autoIncrement was provided, but is not an integer column");
      }
    }
  }
  /**
   * @returns The ORM instance that this model is using.
   */
  get D1Orm() {
    if (!__classPrivateFieldGet(this, _Model_D1Orm, "f")) {
      throw new Error("D1Orm has not been set");
    }
    return __classPrivateFieldGet(this, _Model_D1Orm, "f");
  }
  /**
   * @param orm The ORM instance to associate this model with.
   */
  SetOrm(orm) {
    if (!(orm instanceof D1Orm) || !isDatabase(orm)) {
      throw new Error("Options.D1Orm is not an instance of D1Orm");
    }
    __classPrivateFieldSet(this, _Model_D1Orm, orm, "f");
    return this;
  }
  /**
   * @returns A CreateTable definition for the model, which can be used in a CREATE TABLE statement.
   */
  get createTableDefinition() {
    const columnEntries = Object.entries(this.columns);
    const columnDefinition = columnEntries.map(([columnName, column]) => {
      let definition = `${columnName} ${column.type}`;
      if (columnName === __classPrivateFieldGet(this, _Model_autoIncrementColumn, "f")) {
        definition += " PRIMARY KEY AUTOINCREMENT";
      }
      if (column.notNull) {
        definition += " NOT NULL";
      }
      if (column.defaultValue !== void 0) {
        let defaultStr = `${column.defaultValue}`;
        if (typeof column.defaultValue === "string") {
          defaultStr = `'${column.defaultValue}'`;
        }
        definition += ` DEFAULT ${defaultStr}`;
      }
      return definition;
    });
    if (!__classPrivateFieldGet(this, _Model_autoIncrementColumn, "f")) {
      columnDefinition.push(`PRIMARY KEY (${this.primaryKeys.join(", ")})`);
    }
    for (const i2 of this.uniqueKeys) {
      columnDefinition.push(`UNIQUE (${i2.join(", ")})`);
    }
    return `CREATE TABLE \`${this.tableName}\` (${columnDefinition.join(", ")})${__classPrivateFieldGet(this, _Model_autoIncrementColumn, "f") || __classPrivateFieldGet(this, _Model_withRowId, "f") ? "" : " WITHOUT ROWID"};`;
  }
  /**
   * @param options The options for creating the table. Currently only contains strategy, which is the strategy to use when creating the table.
   * - "default" - The default strategy, which will attempt create the table.
   * - "force" - Drops the table if it exists, then creates it
   * @throws
   * - Throws an error if the table already exists and the strategy is not "force".
   * - Throws an error if the strategy is "alter", as this is not yet implemented
   */
  async CreateTable(options = {
    strategy: "default"
  }) {
    const { strategy } = options;
    if (strategy === "alter") {
      throw new Error("Alter strategy is not implemented");
    }
    let statement = this.createTableDefinition;
    if (strategy === "force") {
      statement = `DROP TABLE IF EXISTS \`${this.tableName}\`
${statement}`;
    }
    return this.D1Orm.exec(statement);
  }
  /**
   * @param silent If true, will ignore the table not existing. If false, will throw an error if the table does not exist.
   */
  async DropTable(silent) {
    if (silent) {
      return this.D1Orm.exec(`DROP TABLE IF EXISTS ${this.tableName};`);
    }
    return this.D1Orm.exec(`DROP TABLE ${this.tableName};`);
  }
  /**
   * @param data The data to insert into the table, as an object with the column names as keys and the values as values.
   */
  async InsertOne(data, orReplace = false) {
    const qt = orReplace ? QueryType.INSERT_OR_REPLACE : QueryType.INSERT;
    const statement = GenerateQuery(qt, this.tableName, { data });
    return this.D1Orm.prepare(statement.query).bind(...statement.bindings).run();
  }
  /**
   * @param data The data to insert into the table, as an array of objects with the column names as keys and the values as values.
   */
  async InsertMany(data, orReplace = false) {
    const qt = orReplace ? QueryType.INSERT_OR_REPLACE : QueryType.INSERT;
    const stmts = [];
    for (const row of data) {
      const stmt = GenerateQuery(qt, this.tableName, {
        data: row
      });
      stmts.push(this.D1Orm.prepare(stmt.query).bind(...stmt.bindings));
    }
    return this.D1Orm.batch(stmts);
  }
  /**
   * @param options The options for the query, see {@link GenerateQueryOptions}
   * @returns Returns the first row that matches the where clause, or null if no rows match.
   */
  async First(options) {
    const statement = GenerateQuery(QueryType.SELECT, this.tableName, Object.assign(options, { limit: 1 }));
    try {
      return await this.D1Orm.prepare(statement.query).bind(...statement.bindings).first();
    } catch (e2) {
      if (e2.message === "D1_NORESULTS") {
        return null;
      }
      throw e2;
    }
  }
  /**
   * @param options The options for the query, see {@link GenerateQueryOptions}
   * @returns Returns all rows that match the where clause.
   */
  async All(options) {
    const statement = GenerateQuery(QueryType.SELECT, this.tableName, options);
    return this.D1Orm.prepare(statement.query).bind(...statement.bindings).all();
  }
  /**
   * @param options The options for the query, see {@link GenerateQueryOptions}
   */
  async Delete(options) {
    const statement = GenerateQuery(QueryType.DELETE, this.tableName, options);
    return this.D1Orm.prepare(statement.query).bind(...statement.bindings).run();
  }
  /**
   * @param options The options for the query, see {@link GenerateQueryOptions}
   * @throws Throws an error if the data clause is empty.
   */
  async Update(options) {
    const statement = GenerateQuery(QueryType.UPDATE, this.tableName, options);
    return this.D1Orm.prepare(statement.query).bind(...statement.bindings).run();
  }
  /**
   * Upserting is a way to insert a row into the table, or update it if it already exists.
   * This is done by using SQLITE's ON CONFLICT clause. As a result, this method should control the primary key for the insert & where clauses, and should not be used with auto incrementing keys.
   * @param options The options for the query, see {@link GenerateQueryOptions}
   */
  async Upsert(options) {
    const statement = GenerateQuery(QueryType.UPSERT, this.tableName, options, this.primaryKeys);
    return this.D1Orm.prepare(statement.query).bind(...statement.bindings).run();
  }
};
_Model_D1Orm = /* @__PURE__ */ new WeakMap(), _Model_autoIncrementColumn = /* @__PURE__ */ new WeakMap(), _Model_withRowId = /* @__PURE__ */ new WeakMap();
var DataTypes;
(function(DataTypes2) {
  DataTypes2["INTEGER"] = "integer";
  DataTypes2["INT"] = "integer";
  DataTypes2["TEXT"] = "text";
  DataTypes2["STRING"] = "text";
  DataTypes2["VARCHAR"] = "text";
  DataTypes2["CHAR"] = "text";
  DataTypes2["NUMBER"] = "real";
  DataTypes2["NUMERIC"] = "real";
  DataTypes2["REAL"] = "real";
  DataTypes2["BLOB"] = "blob";
  DataTypes2["BOOLEAN"] = "boolean";
})(DataTypes || (DataTypes = {}));

// src/discord/orm/player.ts
var player_default = (orm) => {
  return new Model(
    {
      D1Orm: orm,
      tableName: "sys_player",
      primaryKeys: "id",
      autoIncrement: "id"
    },
    {
      id: {
        type: DataTypes.INTEGER,
        notNull: true
      },
      discordId: {
        type: DataTypes.STRING,
        notNull: true
      },
      //游戏名称
      name: {
        type: DataTypes.STRING,
        notNull: true,
        defaultValue: "\u65E0\u540D\u5C0F\u5352"
      },
      //角色
      role: {
        type: DataTypes.STRING,
        notNull: true
      },
      //血量
      hp: {
        type: DataTypes.INTEGER,
        notNull: true,
        defaultValue: 100
      },
      //最大血量
      maxhp: {
        type: DataTypes.INTEGER,
        notNull: true,
        defaultValue: 100
      },
      //魔法
      magical: {
        type: DataTypes.INTEGER,
        notNull: true,
        defaultValue: 100
      },
      //最大魔法
      maxmagical: {
        type: DataTypes.INTEGER,
        notNull: true,
        defaultValue: 100
      },
      //运气
      fortune: {
        type: DataTypes.INTEGER,
        notNull: true,
        defaultValue: 100
      },
      //宗门
      sect: {
        type: DataTypes.INTEGER,
        notNull: true,
        defaultValue: 100
      }
    }
  );
};

// src/discord/commands/rpg/rpg.ts
var roleMessage = {
  mankind: "\u5F88\u597D\uFF01\u9009\u62E9\u4EBA\u65CF\u610F\u5473\u7740\u4F60\u5C06\u6210\u4E3A\u827E\u4F26\u8FBE\u738B\u56FD\u7684\u4E00\u540D\u52C7\u8005",
  wizard: "\u7CBE\u7075\u4E4B\u5B50\u554A\uFF0C\u5728\u8F9B\u745E\u5C14\u68EE\u6797\u7684\u795E\u79D8\u6811\u6728\u95F4\uFF0C\u4F60\u7684\u5192\u9669\u5373\u5C06\u5F00\u59CB",
  orc: "\u9009\u62E9\u517D\u4EBA\u610F\u5473\u7740\u4F60\u5C06\u6210\u4E3A\u86EE\u8352\u4E4B\u5730\u7684\u4E00\u540D\u5F3A\u5927\u6218\u58EB",
  dwarf: "\u5728\u77F3\u9524\u5C71\u8109\u7684\u6DF1\u5904\uFF0C\u4F60\u662F\u77EE\u4EBA\u7684\u9A84\u50B2\uFF0C\u4E00\u4E2A\u5DE5\u5320\u7684\u7075\u9B42"
};
var roleList = [
  {
    name: "\u4EBA\u65CF",
    value: "mankind"
  },
  {
    name: "\u7CBE\u7075",
    value: "wizard"
  },
  {
    name: "\u517D\u4EBA",
    value: "orc"
  },
  {
    name: "\u77EE\u4EBA",
    value: "dwarf"
  }
];
var RpgCommand = class {
  name = "rpg";
  description = "\u5E7B\u5883\u5927\u9646-RPG-GAME";
  type = 2 /* APPLICATION_COMMAND */;
  options = [
    {
      name: "info",
      description: "\u67E5\u770B\u6E38\u620F\u4FE1\u606F",
      type: 1,
      required: false
    },
    {
      name: "reg",
      description: "\u6CE8\u518C",
      type: 1,
      required: false,
      options: [
        {
          name: "role",
          type: 3,
          description: "\u9009\u62E9\u79CD\u65CF",
          required: true,
          choices: roleList
        }
      ]
    },
    {
      name: "map",
      description: "\u67E5\u770B\u6E38\u620F\u5730\u56FE\u4FE1\u606F",
      type: 1,
      required: false
    },
    {
      name: "rig",
      description: "\u64CD\u4F5C\u89D2\u8272\u53D1\u751F\u5404\u79CD\u884C\u4E3A",
      type: 1,
      required: false,
      options: [
        {
          name: "move",
          type: 3,
          description: "\u79FB\u52A8",
          required: false
        }
      ]
    },
    {
      name: "bag",
      description: "\u89D2\u8272\u80CC\u5305\u4FE1\u606F",
      type: 1,
      required: false
    }
  ];
  app = null;
  initApp(app) {
    this.app = app;
  }
  async handel(request, inc, env) {
    console.log("\u5B50\u547D\u4EE4", JSON.stringify(inc.data));
    for (var i2 = 0; i2 < inc.data.options.length; i2++) {
      const sub_cmd = inc.data.options[i2];
      switch (sub_cmd.name) {
        case "reg": {
          const role = sub_cmd.options.find((e2) => e2.name === "role")?.value;
          const roleValue = roleList.find((e2) => e2.value === role)?.name;
          const userinfo = await this.app?.fetch("users/" + inc.member.user.id);
          const userinfoJson = await userinfo?.json();
          const player = await player_default(env.ORM).First({ where: { discordId: inc.member.user.id } });
          if (player) {
            return {
              type: 4 /* CHANNEL_MESSAGE_WITH_SOURCE */,
              data: {
                tts: false,
                flags: 64,
                embeds: [
                  {
                    color: 3447003,
                    title: "\u5E7B\u5883\u5927\u9646",
                    description: `----\u8BF7\u4FDD\u62A4\u60A8\u7684\u4FE1\u606F\uFF0C\u4EE5\u9632\u6B62\u654C\u65B9\u52BF\u529B\u5C06\u60A8\u62B9\u6740----\r
\u60A8\u5DF2\u7ECF\u6CE8\u518C\u4E86\u8EAB\u4EFD${roleList.find((e2) => e2.value === player.role)?.name}`,
                    fields: [
                      { name: "\u540D\u79F0", value: inc.member.user.global_name, inline: true },
                      { name: "\u79CD\u65CF", value: roleList.find((e2) => e2.value === player.role)?.name, inline: true },
                      { name: "\u5929\u8D4B", value: "\u5F31\u9E21", inline: true },
                      { name: "\u8840\u91CF", value: "100/100", inline: true },
                      { name: "\u9B54\u6CD5\u503C", value: "100/100", inline: true },
                      { name: "\u5B97\u95E8", value: "\u65E0", inline: true }
                    ],
                    footer: {
                      text: inc.member.user.global_name,
                      icon_url: `https://cdn.discordapp.com/avatars/${inc.member.user.id}/${userinfoJson.avatar}.png`
                    }
                  }
                ]
              }
            };
          }
          await player_default(env.ORM).InsertOne({ discordId: inc.member.user.id, role });
          return {
            type: 4 /* CHANNEL_MESSAGE_WITH_SOURCE */,
            data: {
              tts: false,
              flags: 64,
              embeds: [
                {
                  color: 3447003,
                  title: "\u5E7B\u5883\u5927\u9646",
                  description: `----\u8BF7\u4FDD\u62A4\u60A8\u7684\u4FE1\u606F\uFF0C\u4EE5\u9632\u6B62\u654C\u65B9\u52BF\u529B\u5C06\u60A8\u62B9\u6740----\r
${roleMessage[role] || "\u672A\u77E5"}`,
                  fields: [
                    { name: "\u540D\u79F0", value: inc.member.user.global_name, inline: true },
                    { name: "\u79CD\u65CF", value: roleValue, inline: true },
                    { name: "\u5929\u8D4B", value: "\u5F31\u9E21", inline: true },
                    { name: "\u8840\u91CF", value: "100/100", inline: true },
                    { name: "\u9B54\u6CD5\u503C", value: "100/100", inline: true },
                    { name: "\u5B97\u95E8", value: "\u65E0", inline: true }
                  ],
                  footer: {
                    text: inc.member.user.global_name,
                    icon_url: `https://cdn.discordapp.com/avatars/${inc.member.user.id}/${userinfoJson.avatar}.png`
                  }
                }
              ]
            }
          };
        }
        case "info": {
          return {
            type: 4 /* CHANNEL_MESSAGE_WITH_SOURCE */,
            data: {
              tts: false,
              embeds: [
                {
                  title: "\u5E7B\u5883\u5927\u9646",
                  description: "\u5728\u5E7B\u5883\u5927\u9646\uFF0C\u9B54\u6CD5\u548C\u79D1\u6280\u4EA4\u76F8\u8F89\u6620\uFF0C\u5404\u79CD\u5947\u5E7B\u751F\u7269\u548C\u795E\u79D8\u529B\u91CF\u5145\u65A5\u7740\u8FD9\u4E2A\u4E16\u754C\u3002\u5927\u9646\u88AB\u795E\u79D8\u7684\u8FF7\u96FE\u8986\u76D6\uFF0C\u9690\u85CF\u7740\u65E0\u6570\u672A\u77E5\u7684\u79D8\u5BC6\u3002\u4F20\u8BF4\u4E2D\uFF0C\u53EA\u6709\u52C7\u8005\u4EEC\u80FD\u591F\u63ED\u5F00\u8FF7\u96FE\u7684\u771F\u76F8\uFF0C\u89E3\u9501\u4E16\u754C\u7684\u795E\u79D8\u529B\u91CF\u3002\uFF01"
                }
              ],
              allowed_mentions: {
                parse: ["users"],
                users: []
              }
            }
          };
        }
        case "map": {
          return {
            type: 4 /* CHANNEL_MESSAGE_WITH_SOURCE */,
            data: {
              flags: 64,
              tts: false,
              embeds: [
                {
                  title: "\u5E7B\u5883\u5927\u9646",
                  description: ""
                }
              ],
              components: [
                {
                  type: 1,
                  components: [
                    {
                      type: 3,
                      custom_id: "class_select_1",
                      options: [
                        {
                          label: "Rogue",
                          value: "rogue",
                          description: "Sneak n stab",
                          emoji: {
                            name: "rogue",
                            id: "625891304148303894"
                          }
                        }
                      ],
                      placeholder: "Choose a class",
                      min_values: 1,
                      max_values: 1
                    }
                  ]
                }
              ]
            }
          };
        }
        default:
          return { type: 4 /* CHANNEL_MESSAGE_WITH_SOURCE */, data: { contnet: "\u5F53\u524D\u547D\u4EE4\u6682\u672A\u5F00\u53D1\uFF01" } };
      }
    }
  }
};

// src/discord/app.ts
init_checked_fetch();
init_modules_watch_stub();

// node_modules/itty-router/index.mjs
init_checked_fetch();
init_modules_watch_stub();
var o = (e2 = "text/plain; charset=utf-8", t) => (o2, { headers: s2 = {}, ...r } = {}) => void 0 === o2 || "Response" === o2?.constructor.name ? o2 : new Response(t ? t(o2) : o2, { headers: { "content-type": e2, ...s2 }, ...r });
var s = o("application/json; charset=utf-8", JSON.stringify);
var c = o("text/plain; charset=utf-8", String);
var l = o("text/html");
var i = o("image/jpeg");
var p = o("image/png");
var d = o("image/webp");

// src/discord/app.ts
var import_discord_interactions = __toESM(require_dist());
var PingCommand2 = class {
  name = "ping";
  description = "ping";
  type = 1 /* PING */;
  options = [];
  app = null;
  initApp(app) {
    this.app = app;
  }
  async handel(request, inc, env) {
    console.log("\u6B63\u5728\u5904\u7406Ping\u8BF7\u6C42");
    const interaction = await request.json();
    const signature = request.headers.get("x-signature-ed25519");
    const timestamp = request.headers.get("x-signature-timestamp");
    const isValidRequest = signature && timestamp && (0, import_discord_interactions.verifyKey)(JSON.stringify(interaction), signature, timestamp, "4d42097d76b3f4dd12c899a07b5afaa71fd2fa01fe824012fac484b2a96d4d22");
    if (isValidRequest) {
      return { type: 1 /* PONG */ };
    } else {
      throw "error";
    }
  }
};
var RegCommand = class {
  name = "refcmd";
  description = "\u5237\u65B0\u547D\u4EE4";
  type = 2 /* APPLICATION_COMMAND */;
  options = [];
  register = false;
  app = null;
  initApp(app) {
    this.app = app;
  }
  async handel(request, inc, env) {
    console.log("\u6B63\u5728\u5904\u7406\u5237\u65B0\u547D\u4EE4\u8BF7\u6C42");
    let flag = await this.app.registerCommand();
    if (flag) {
      return {
        type: 4 /* CHANNEL_MESSAGE_WITH_SOURCE */,
        data: {
          tts: false,
          content: "\u547D\u4EE4\u5237\u65B0\u6210\u529F!",
          embeds: [],
          allowed_mentions: {
            parse: ["users"],
            users: []
          }
        }
      };
    } else {
      return {
        type: 4 /* CHANNEL_MESSAGE_WITH_SOURCE */,
        data: {
          tts: false,
          content: "## \u5E7B\u754CBot\r\n \u975E\u5E38\u62B1\u6B49\u547D\u4EE4\u6CE8\u518C\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u5904\u7406\uFF01",
          embeds: [],
          allowed_mentions: {
            parse: ["users"],
            users: []
          }
        }
      };
    }
  }
};
var DiscordApp = class {
  appid;
  token;
  secret;
  commands = [];
  constructor(appid, token, secret) {
    this.appid = appid;
    this.token = token;
    this.secret = secret;
    this.commands.push(new PingCommand2());
    this.commands.push(new RegCommand());
  }
  pushCommand(command) {
    this.commands.push(command);
  }
  async registerCommand() {
    console.log("\u5F00\u59CB\u6CE8\u518C\u547D\u4EE4");
    if (this.commands == null) {
      return;
    }
    let commands = [];
    for (var i2 = 0; i2 < this.commands.length; i2++) {
      const item = this.commands[i2];
      if (item.type === 2 /* APPLICATION_COMMAND */) {
        let cmd = {
          name: item.name,
          description: item.description
        };
        if (item.options.length > 0) {
          cmd.options = item.options;
        }
        commands.push(cmd);
      }
    }
    console.log("all cmd", commands);
    const url = `https://discord.com/api/v10/applications/${this.appid}/commands`;
    console.log("url", url, this.token);
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bot ${this.token}`
      },
      method: "PUT",
      body: JSON.stringify(commands)
    });
    const resultBodu = await response.text();
    console.log("\u6CE8\u518C\u7ED3\u679C", resultBodu);
    if (response.ok) {
      return true;
    } else {
      return false;
    }
  }
  async fetch(input, init) {
    return fetch(
      "https://discord.com/api/v10/" + input,
      Object.assign(init || {}, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bot ${this.token}`
        }
      })
    );
  }
  async handel(request, env) {
    const interaction = await request.json();
    console.log("\u5F53\u524D\u4EA4\u4E92", JSON.stringify(interaction));
    const type = interaction.type;
    const cmd = this.commands.find((command) => command.type === type && interaction.data.name === command.name);
    console.log("\u5F53\u524D\u547D\u4EE4", cmd);
    if (cmd) {
      if (!cmd.app) {
        cmd.initApp(this);
      }
      const rs = await cmd?.handel(request, interaction, env);
      return s(rs);
    }
    return s({
      type: 4 /* CHANNEL_MESSAGE_WITH_SOURCE */,
      data: {
        tts: false,
        content: "\u975E\u5E38\u62B1\u6B49\uFF0C\u5F53\u524D\u547D\u4EE4\u672A\u5B9A\u4E49\u5904\u7406\u7A0B\u5E8F!",
        embeds: [],
        allowed_mentions: {
          parse: ["users"],
          users: []
        }
      }
    });
  }
};

// src/discord/index.ts
var discord_default = (router2) => {
  router2.post("/discord/interaction", async (request, env) => {
    const app = new DiscordApp(
      "1198832769288130601",
      "MTE5ODgzMjc2OTI4ODEzMDYwMQ.GykD0_.mU__yT_vJwHKtj4EvWJsswNTDz4fP2zVjX8AIo",
      "4d42097d76b3f4dd12c899a07b5afaa71fd2fa01fe824012fac484b2a96d4d22"
    );
    app.pushCommand(new PingCommand());
    app.pushCommand(new RpgCommand());
    return app.handel(request, env);
  });
};

// src/webdav/index.ts
init_checked_fetch();
init_modules_watch_stub();
var import_fast_xml_parser = __toESM(require_fxp());

// src/webdav/type.ts
init_checked_fetch();
init_modules_watch_stub();
var ContentType = {
  ".txt": "text/plain",
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".xml": "application/xml",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
  ".bmp": "image/bmp",
  ".svg": "image/svg+xml",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".ogg": "audio/ogg",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".avi": "video/x-msvideo",
  ".mov": "video/quicktime",
  ".pdf": "application/pdf",
  ".doc": "application/msword",
  ".docx": "application/msword",
  ".xls": "application/vnd.ms-excel",
  ".xlsx": "application/vnd.ms-excel",
  ".ppt": "application/vnd.ms-powerpoint",
  ".pptx": "application/vnd.ms-powerpoint",
  ".zip": "application/zip",
  ".tar": "application/x-tar",
  ".gz": "application/gzip",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".woff": "font/woff"
};

// src/webdav/index.ts
var webDav = class {
  server;
  username;
  password;
  path;
  constructor(server, path, username, password) {
    this.server = server;
    this.path = path;
    this.username = username;
    this.password = password;
  }
  async dav_fetch(path, init) {
    init = init || {};
    init.headers = init.headers || {};
    init.headers.Authorization = `Basic ${btoa(`${this.username}:${this.password}`)}`;
    console.log("\u5F53\u524D\u8DEF\u5F84", `${this.server}${this.path}${path}`);
    return fetch(`${this.server}${this.path}${path}`, init);
  }
  async get_file(path) {
    let dav_rsp = await this.dav_fetch(path, {
      method: "GET"
    });
    if (dav_rsp.status == 200) {
      return await dav_rsp.text();
    } else {
      return null;
    }
  }
  async get_file_response(path) {
    let dav_rsp = await this.dav_fetch(path, {
      method: "GET"
    });
    if (dav_rsp.status == 200) {
      return dav_rsp;
    } else {
      return null;
    }
  }
  async get_file_list(path) {
    let dav_rsp = await this.dav_fetch(path, {
      method: "PROPFIND",
      headers: { Depth: "1", Authorization: `Basic ${btoa(`${this.username}:${this.password}`)}`, "Content-Type": "text/xml" },
      body: `<?xml version="1.0" encoding="utf-8" ?>
        <D:propfind xmlns:D="DAV:">
          <D:allprop/>
        </D:propfind>`
    });
    if (dav_rsp.ok) {
      var result = [];
      let xmlString = await dav_rsp.text();
      const parser = new import_fast_xml_parser.XMLParser();
      const xmlDoc = parser.parse(xmlString);
      for (var item of xmlDoc["D:multistatus"]["D:response"]) {
        let file_item = {
          path: item["D:href"].replace(this.path, ""),
          type: item["D:propstat"]["D:prop"]["D:getcontenttype"],
          size: item["D:propstat"]["D:prop"]["lp1:getcontentlength"] || 0
        };
        result.push(file_item);
      }
      return result;
    }
    return null;
  }
};
var webdav_default = (router2) => {
  const dev = new webDav("https://ogi.teracloud.jp", "/dav/myfile", "gh123", "EAZCDQ37PHgeetjs");
  router2.get("/webdav/query/*", async (req, env) => {
    const path = req.route.replace("/*", "");
    const url = new URL(req.url);
    const new_path = url.pathname.replace(path, "");
    console.log("\u8BBF\u95EE\u8DEF\u5F84", new_path);
    const files = await dev.get_file_list(new_path);
    var parts = new_path.replace(/^\/|\/$/g, "").split("/");
    let hasPass = "";
    for (var item of files) {
      if (item.path.includes(".password")) {
        hasPass = await dev.get_file(`/${new_path}/.password`);
        console.log("\u5B50\u76EE\u5F5583", hasPass);
      }
    }
    if (hasPass == "") {
      for (var item of parts) {
        hasPass = await dev.get_file(`/${item}/.password`);
        console.log("\u5B50\u76EE\u5F55", hasPass);
        if (hasPass) {
          break;
        }
      }
    }
    const curl = new URL(req.url);
    const pwd = curl.searchParams.get("password");
    console.log("\u5BC6\u7801", hasPass);
    if (hasPass) {
      if (!pwd) {
        return s({ status: 500, msg: "\u8BF7\u4F20\u5165\u8BBF\u95EE\u5BC6\u7801\uFF01" });
      }
      if (pwd != hasPass) {
        return s({ status: 500, msg: "\u8BBF\u95EE\u5BC6\u7801\u9519\u8BEF\uFF01" });
      }
      if (pwd == hasPass) {
        return s({ status: 200, data: files });
      }
    }
    return s({ status: 200, data: files });
  });
  router2.get("/webdav/down/*", async (req, env) => {
    const path = req.route.replace("/*", "");
    const url = new URL(req.url);
    const new_path = url.pathname.replace(path, "");
    const dav_rsp = await dev.get_file_response(new_path);
    var parts = new_path.replace(/^\/|\/$/g, "").split("/");
    let { readable, writable } = new TransformStream();
    dav_rsp?.body?.pipeTo(writable);
    var response = new Response(readable);
    const file_extends = url.pathname.substring(url.pathname.lastIndexOf("."));
    console.log(file_extends);
    response.headers.set("Content-Type", ContentType[file_extends] || "application/octet-stream");
    let hasPass = "";
    if (dav_rsp?.status != 200) {
      response = s({ status: 500, msg: "\u6587\u4EF6\u4E0D\u5B58\u5728" });
    }
    hasPass = await dev.get_file("/.password");
    const dir_path = new_path.substring(0, new_path.lastIndexOf("/")) || "";
    var dir_path_arr = dir_path.replace(/^\/|\/$/g, "").split("/");
    var dir_c_path = "";
    for (var dirpath of dir_path_arr) {
      dir_c_path += `/${dirpath}`;
      console.log("\u904D\u5386\u8DEF\u5F84", dir_c_path);
      hasPass = await dev.get_file(`/${dir_c_path}/.password`);
      console.log("\u5B50\u76EE\u5F5583", hasPass);
      if (hasPass) {
        break;
      }
    }
    if (hasPass == "") {
      for (var item of parts) {
        hasPass = await dev.get_file(`/${item}/.password`);
        if (hasPass) {
          break;
        }
      }
    }
    const curl = new URL(req.url);
    const pwd = curl.searchParams.get("password");
    if (hasPass) {
      if (!pwd) {
        return s({ status: 500, msg: "\u8BF7\u4F20\u5165\u8BBF\u95EE\u5BC6\u7801\uFF01" });
      }
      if (pwd != hasPass) {
        return s({ status: 500, msg: "\u8BBF\u95EE\u5BC6\u7801\u9519\u8BEF\uFF01" });
      }
      if (pwd == hasPass) {
        return response;
      }
    }
    return response;
  });
};

// src/worker.ts
var router = e();
var worker_default = {
  async fetch(request, env, ctx) {
    env.ORM = new D1Orm(env.DB);
    router.get("/", (request2, env2) => {
      return new Response(`\u{1F44B} Bot`);
    });
    discord_default(router);
    webdav_default(router);
    return router.handle(request, env);
  }
};

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_checked_fetch();
init_modules_watch_stub();
function reduceError(e2) {
  return {
    name: e2?.name,
    message: e2?.message ?? String(e2),
    stack: e2?.stack,
    cause: e2?.cause === void 0 ? void 0 : reduceError(e2.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e2) {
    const error3 = reduceError(e2);
    return Response.json(error3, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;
var wrap = void 0;

// .wrangler/tmp/bundle-wshuRb/middleware-insertion-facade.js
var envWrappers = [wrap].filter(Boolean);
var facade = {
  ...worker_default,
  envWrappers,
  middleware: [
    middleware_miniflare3_json_error_default,
    ...worker_default.middleware ? worker_default.middleware : []
  ].filter(Boolean)
};
var middleware_insertion_facade_default = facade;

// .wrangler/tmp/bundle-wshuRb/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
var __facade_modules_fetch__ = function(request, env, ctx) {
  if (middleware_insertion_facade_default.fetch === void 0)
    throw new Error("Handler does not export a fetch() function.");
  return middleware_insertion_facade_default.fetch(request, env, ctx);
};
function getMaskedEnv(rawEnv) {
  let env = rawEnv;
  if (middleware_insertion_facade_default.envWrappers && middleware_insertion_facade_default.envWrappers.length > 0) {
    for (const wrapFn of middleware_insertion_facade_default.envWrappers) {
      env = wrapFn(env);
    }
  }
  return env;
}
var registeredMiddleware = false;
var facade2 = {
  ...middleware_insertion_facade_default.tail && {
    tail: maskHandlerEnv(middleware_insertion_facade_default.tail)
  },
  ...middleware_insertion_facade_default.trace && {
    trace: maskHandlerEnv(middleware_insertion_facade_default.trace)
  },
  ...middleware_insertion_facade_default.scheduled && {
    scheduled: maskHandlerEnv(middleware_insertion_facade_default.scheduled)
  },
  ...middleware_insertion_facade_default.queue && {
    queue: maskHandlerEnv(middleware_insertion_facade_default.queue)
  },
  ...middleware_insertion_facade_default.test && {
    test: maskHandlerEnv(middleware_insertion_facade_default.test)
  },
  ...middleware_insertion_facade_default.email && {
    email: maskHandlerEnv(middleware_insertion_facade_default.email)
  },
  fetch(request, rawEnv, ctx) {
    const env = getMaskedEnv(rawEnv);
    if (middleware_insertion_facade_default.middleware && middleware_insertion_facade_default.middleware.length > 0) {
      if (!registeredMiddleware) {
        registeredMiddleware = true;
        for (const middleware of middleware_insertion_facade_default.middleware) {
          __facade_register__(middleware);
        }
      }
      const __facade_modules_dispatch__ = function(type, init) {
        if (type === "scheduled" && middleware_insertion_facade_default.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return middleware_insertion_facade_default.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(
        request,
        env,
        ctx,
        __facade_modules_dispatch__,
        __facade_modules_fetch__
      );
    } else {
      return __facade_modules_fetch__(request, env, ctx);
    }
  }
};
function maskHandlerEnv(handler) {
  return (data, env, ctx) => handler(data, getMaskedEnv(env), ctx);
}
var middleware_loader_entry_default = facade2;
export {
  middleware_loader_entry_default as default
};
//# sourceMappingURL=worker.js.map
