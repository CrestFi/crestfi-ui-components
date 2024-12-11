/// <reference types="react" />
import moment from "moment";
export interface DateTimePickerProps {
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
    placeholder?: string;
    dateFormat?: string | boolean;
    timeFormat?: string | boolean;
    onChange?: (value: string | moment.Moment) => void;
    disabled?: boolean;
    name?: string;
    children: React.ReactElement;
    error?: boolean;
    value?: string | moment.Moment;
}
