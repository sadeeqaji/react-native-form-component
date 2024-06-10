import React, { Children, useState, ReactNode } from 'react';
import {
  Platform,
  Pressable,
  Text,
  StyleSheet,
  TextInputSubmitEditingEventData,
  NativeSyntheticEvent,
  ViewStyle,
} from 'react-native';

import { containsError } from '../FormItem';
import { colors } from '../../colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

interface Props {
  children: ReactNode;
  keyboardVerticalOffset?: number;
  buttonText?: string;
  buttonStyle?: object | object[];
  buttonTextStyle?: object | object[];
  onButtonPress?: () => void;
  style?: ViewStyle;
  hideSubmitButton?: boolean;
}

export let submitForm: (
  e?: NativeSyntheticEvent<TextInputSubmitEditingEventData>
) => void;

export default function Form(props: Props) {
  const [width, setWidth] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const handleButtonPress = () => {
    const fieldsWithError: string[] = [];
    Children.forEach(props.children, (child, index) => {
      //@ts-ignore
      if (child && child.ref?.current?.getComponent() == 'FormItem') {
        const { keyboardType, isRequired, value, customValidation } =
          //@ts-ignore
          child.props;
        let validation;

        if (customValidation) validation = customValidation();
        if (containsError(keyboardType, isRequired, value, validation).status) {
          fieldsWithError.push(
            //@ts-ignore
            child.props.label || child.props.placeholder || 'FormItem' + index
          );
          //@ts-ignore
          child.ref?.current.setState();
        }
      }
    });

    if (fieldsWithError.length) {
      console.error(
        'The following fields do not fulfil their conditions:\n' +
        JSON.stringify(fieldsWithError, null, 2)
      );
      return;
    }

    props.onButtonPress?.();
  };

  submitForm = () => handleButtonPress();

  return (
    <KeyboardAwareScrollView style={props.style}>
      {props.children}
      {!props.hideSubmitButton && (
        <Pressable
          style={[
            styles.button,
            Platform.OS == 'ios' ? { opacity } : undefined,
            props.buttonStyle,
          ]}
          onPress={handleButtonPress}
          android_ripple={{ color: 'lightgrey', radius: width }}
          onLayout={(event) => setWidth(event.nativeEvent.layout.width)}
          onPressIn={() => setOpacity(0.5)}
          onPressOut={() => setOpacity(1)}
        >
          <Text style={[styles.buttonText, props.buttonTextStyle]}>
            {props.buttonText || 'Submit'}
          </Text>
        </Pressable>
      )}
    </KeyboardAwareScrollView>
  );
}

Form.defaultProps = {
  style: {},
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
    borderRadius: 8,
    marginVertical: 32,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
