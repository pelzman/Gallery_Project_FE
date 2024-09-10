import React, { forwardRef, useState } from 'react';
import classNames from 'classnames';
// Replace with your actual icons
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  numberOnly?: boolean;
  isRequired?: boolean;
  inputName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, type, onChange, isRequired, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPass = () => {
      setShowPassword(!showPassword);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        if (props.numberOnly) {
          const syntheticEvent = {
            ...e,
            target: {
              ...e.target,
              value: e.target.value.replace(/\D+/g, ''),
            },
          };
          onChange(syntheticEvent);
        } else {
          onChange(e);
        }
      }
    };

    return (
      <div className='relative flex flex-col text-gray-600 ' >
        <label
          className='text-[12px] font-normal mb-[10px] '
          htmlFor={props.id || name || label}
        >
          {label}
          {isRequired && <span style={{ color: 'red', paddingLeft: "5px" }}>*</span>}
        </label>
        <input
          ref={ref}
          {...props}
          id={props.id || name || label}
          name={name}
          className={classNames(
            'py-2.5 px-4  outline-none   rounded-lg bg-white shadow-inner ',
            { 'pr-12': type === 'password' },
            props.className,
          )}
          type={showPassword ? 'text' : type}
          onChange={handleChange}
        />
        {type === 'password' ? (
          <button
            className='absolute top-[calc(0.5rem+1.125rem)] bottom-0 right-0 w-14 bg-none border-none rounded cursor-pointer flex justify-center items-center'
            onClick={toggleShowPass}
            type='button'
          ></button>
        ) : null}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
