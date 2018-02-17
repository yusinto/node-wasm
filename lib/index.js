"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var cache = {};

var readFileAsByteArray = function readFileAsByteArray(filepath) {
  var bytes = _fs.default.readFileSync(filepath);

  return new Uint8Array(bytes);
};

var instantiate =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(byteArray) {
    var module;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return WebAssembly.compile(byteArray);

          case 2:
            module = _context.sent;
            return _context.abrupt("return", new WebAssembly.Instance(module));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function instantiate(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(filepath) {
    var resolvedPath, cached, byteArray, _ref3, exports;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            resolvedPath = _path.default.resolve(filepath);
            cached = cache[resolvedPath];

            if (!cached) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", cached);

          case 4:
            byteArray = readFileAsByteArray(resolvedPath);
            _context2.next = 7;
            return instantiate(byteArray);

          case 7:
            _ref3 = _context2.sent;
            exports = _ref3.exports;
            cache[resolvedPath] = exports;
            return _context2.abrupt("return", exports);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = _default;