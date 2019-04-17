import React, { createRef, RefObject, useEffect, SyntheticEvent } from 'react';
import { IInputProps } from '../typings';

export default function Input({onChange, defaultValue, onEnterKey}: IInputProps) {
  const inputRef: RefObject<HTMLInputElement> = createRef();
  const handleChange = () => {
    const value = inputRef!.current!.value;
    onChange(value);
  }

  const handleKeyPress = (event: any) => {
    if(event.key === 'Enter') {
      onEnterKey();
    }
  }

  return (
    <input
      className="form-control"
      onKeyPress={(event) => handleKeyPress(event)}
      value={defaultValue}
      onChange={() => handleChange()}
      type="text"
      ref={inputRef} />
  )
}