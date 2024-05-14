export interface IInputProps {
    id?: string;
    label: string;
    value: string;
    onChange?: (val : string) => void;
    placeholder?: string;
    type?: string
}