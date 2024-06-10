import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Modal from './';
import { Button, Text } from 'react-native';
describe('Modal component', () => {
  it('renders correctly when show is true', () => {
    const {
      getByTestId,
      getByText
    } = render( /*#__PURE__*/React.createElement(Modal, {
      show: true,
      testID: "modal"
    }, /*#__PURE__*/React.createElement(Text, null, "Modal Content"), /*#__PURE__*/React.createElement(Button, {
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
    } = render( /*#__PURE__*/React.createElement(Modal, {
      show: false,
      testID: "modal"
    }, /*#__PURE__*/React.createElement(Text, null, "Modal Content"), /*#__PURE__*/React.createElement(Button, {
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
    } = render( /*#__PURE__*/React.createElement(Modal, {
      show: true,
      testID: "modal",
      onClose: onCloseMock
    }, /*#__PURE__*/React.createElement(Text, null, "Modal Content"), /*#__PURE__*/React.createElement(Button, {
      onPress: () => onCloseMock(),
      title: "Close"
    })));
    const closeButton = getByText('Close');
    fireEvent.press(closeButton);
    expect(onCloseMock).toHaveBeenCalled();
  });
});
//# sourceMappingURL=Modal.test.js.map