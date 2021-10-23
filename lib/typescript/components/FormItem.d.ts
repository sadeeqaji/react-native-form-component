import React, { RefObject, ComponentProps, ReactNode } from 'react';
import { TextInput, KeyboardTypeOptions } from 'react-native';
declare type Validation = {
    status: boolean;
    message: string;
};
interface Props extends ComponentProps<typeof TextInput> {
    textInputStyle?: object | object[];
    children?: ReactNode;
    underneathText?: string;
    underneathTextStyle?: object | object[];
    label?: string;
    labelStyle?: object | object[];
    isRequired?: boolean;
    value: string;
    customValidation?: () => Validation;
    asterik?: boolean;
    ref: RefObject<TextInput>;
    floatingLabel?: boolean;
    textArea?: boolean;
}
declare const FormItem: React.ForwardRefExoticComponent<Pick<Props, "asterik" | "label" | "children" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "numberOfLines" | "onPressIn" | "onPressOut" | "maxFontSizeMultiplier" | "selectionColor" | "textBreakStrategy" | "autoCapitalize" | "autoCorrect" | "autoFocus" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "defaultValue" | "editable" | "keyboardType" | "maxLength" | "multiline" | "onBlur" | "onChange" | "onChangeText" | "onContentSizeChange" | "onEndEditing" | "onFocus" | "onSelectionChange" | "onSubmitEditing" | "onTextInput" | "onScroll" | "onKeyPress" | "placeholder" | "placeholderTextColor" | "returnKeyType" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "textAlign" | "inputAccessoryViewID" | "value" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "spellCheck" | "textContentType" | "scrollEnabled" | "autoComplete" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "textAlignVertical" | "showSoftInputOnFocus" | "textInputStyle" | "underneathText" | "underneathTextStyle" | "labelStyle" | "isRequired" | "customValidation" | "floatingLabel" | "textArea"> & React.RefAttributes<unknown>>;
export declare const containsError: (keyboardType: KeyboardTypeOptions | undefined, isRequired: boolean, value: string, extraValidation?: Validation | undefined) => {
    status: boolean;
    message: string;
};
export default FormItem;
