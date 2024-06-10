"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactNative = require("@testing-library/react-native");
var _ = _interopRequireDefault(require("./"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('PinInput component', () => {
  test('allows entering input', () => {
    const {
      getAllByTestId
    } = (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
      numOfInput: 4,
      inputTestID: "pin-input-field",
      onChangeText: () => {}
    }));
    const inputFields = getAllByTestId('pin-input-field');
    expect(inputFields.length).toBe(4);
    _reactNative.fireEvent.changeText(inputFields[0], '1');
    _reactNative.fireEvent.changeText(inputFields[1], '2');
    _reactNative.fireEvent.changeText(inputFields[2], '3');
    _reactNative.fireEvent.changeText(inputFields[3], '4');
    expect(inputFields[0].props.value).toBe('1');
    expect(inputFields[1].props.value).toBe('2');
    expect(inputFields[2].props.value).toBe('3');
    expect(inputFields[3].props.value).toBe('4');
  });
});
//# sourceMappingURL=PinInput.test.js.map