"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactNative = require("@testing-library/react-native");
var _ = _interopRequireDefault(require("./"));
var _reactNative2 = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('Modal component', () => {
  it('renders correctly when show is true', () => {
    const {
      getByTestId,
      getByText
    } = (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
      show: true,
      testID: "modal"
    }, /*#__PURE__*/_react.default.createElement(_reactNative2.Text, null, "Modal Content"), /*#__PURE__*/_react.default.createElement(_reactNative2.Button, {
      onPress: () => {},
      title: "Close"
    })));
    const modalElement = getByTestId('modal');
    const modalContent = getByText('Modal Content');
    const closeButton = getByText('Close');
    expect(modalElement).toBeTruthy();
    expect(modalContent).toBeTruthy();
    expect(closeButton).toBeTruthy();
  });
  it('does not render when show is false', () => {
    const {
      queryByTestId
    } = (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
      show: false,
      testID: "modal"
    }, /*#__PURE__*/_react.default.createElement(_reactNative2.Text, null, "Modal Content"), /*#__PURE__*/_react.default.createElement(_reactNative2.Button, {
      onPress: () => {},
      title: "Close"
    })));
    const modalElement = queryByTestId('modal');
    expect(modalElement).toBeNull();
  });
  it('calls the close function when the close button is pressed', () => {
    const onCloseMock = jest.fn();
    const {
      getByText
    } = (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
      show: true,
      testID: "modal",
      onClose: onCloseMock
    }, /*#__PURE__*/_react.default.createElement(_reactNative2.Text, null, "Modal Content"), /*#__PURE__*/_react.default.createElement(_reactNative2.Button, {
      onPress: () => onCloseMock(),
      title: "Close"
    })));
    const closeButton = getByText('Close');
    _reactNative.fireEvent.press(closeButton);
    expect(onCloseMock).toHaveBeenCalled();
  });
});
//# sourceMappingURL=Modal.test.js.map