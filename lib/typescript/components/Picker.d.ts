import { ReactText, ReactNode } from 'react';
interface Item {
    label: string;
    value: ReactText;
}
interface Props {
    items: Array<Item>;
    onSelection: (item: Item) => void;
    selectedValue: ReactText;
    pickerIcon?: ReactNode;
    iconWrapperStyle?: object | object[];
    asterik?: boolean;
    labelStyle?: object | object[];
    asterikStyle?: object | object[];
    label?: ReactText;
    labelWrapperStyle?: object | object[];
    placeholder?: string;
    selectedValueStyle?: object | object[];
    buttonStyle?: object | object[];
    itemLabelStyle?: object | object[];
    floatingLabel?: boolean;
    type?: 'dropdown' | 'modal';
}
declare function Picker(props: Props): JSX.Element;
declare namespace Picker {
    var defaultProps: {
        type: string;
    };
}
export default Picker;
