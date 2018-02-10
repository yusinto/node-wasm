"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

// const imports = {
//   env: {
//     memoryBase: 0,
//     tableBase: 0,
//     memory: new WebAssembly.Memory({initial: 256}),
//     table: new WebAssembly.Table({initial: 0, element: 'anyfunc'}),
//   }
// };
var readFileAsByteArray = function readFileAsByteArray(path) {
  var bytes = _fs.default.readFileSync(path);

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
  regeneratorRuntime.mark(function _callee2(path) {
    var byteArray, instance;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            byteArray = readFileAsByteArray(path);
            _context2.next = 3;
            return instantiate(byteArray);

          case 3:
            instance = _context2.sent;
            return _context2.abrupt("return", instance.exports);

          case 5:
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