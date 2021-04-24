import { ChangeEvent } from "react";

export type InputProps = {
  onChange(value: string): void;
  defaultValue: string;
};

export default function Input({ onChange, defaultValue }: InputProps) {
  return (
    <input
      className="form-control"
      value={defaultValue}
      onChange={(evt: ChangeEvent<HTMLInputElement>) =>
        onChange(evt.target.value)
      }
      type="text"
    />
  );
}
