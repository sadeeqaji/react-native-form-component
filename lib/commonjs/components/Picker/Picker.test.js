"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactNative = require("@testing-library/react-native");
var _ = _interopRequireDefault(require("./"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('Picker component', () => {
  const items = [{
    label: 'Item 1',
    value: 'item1'
  }, {
    label: 'Item 2',
    value: 'item2'
  }, {
    label: 'Item 3',
    value: 'item3'
  }];
  it('sets picker value as selectedValue', () => {
    const {
      getByText
    } = (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
      items: items,
      onSelection: () => {},
      selectedValue: "item1"
    }));
    expect(getByText('Item 1')).toBeTruthy();
  });
  it('calls onSelection with the correct item when an item is selected', () => {
    const onSelectionMock = jest.fn();
    const {
      getByTestId
    } = (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
      items: items,
      onSelection: onSelectionMock,
      selectedValue: "item1",
      testID: "picker"
    }));
    const picker = getByTestId('picker');
    _reactNative.fireEvent.press(picker);
    _reactNative.fireEvent.press(getByTestId('picker-item-item2'));
    expect(onSelectionMock).toHaveBeenCalledWith(items[1]);
  });
  it('renders correctly with floating label', () => {
    const {
      getByText
    } = (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
      items: items,
      onSelection: () => {},
      selectedValue: "item1",
      floatingLabel: true,
      label: "Select an item"
    }));
    expect(getByText('Select an item')).toBeTruthy();
  });
  it('renders correctly with placeholder', () => {
    const {
      getByText
    } = (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
      items: items,
      onSelection: () => {},
      selectedValue: "",
      placeholder: "Select an item"
    }));
    expect(getByText('Select an item')).toBeTruthy();
  });
});
//# sourceMappingURL=Picker.test.js.map