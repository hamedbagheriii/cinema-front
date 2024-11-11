import { FastField, FieldProps } from 'formik';
import React, { FC } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import ErrorAlert from './errorAlert';

export interface InputProps {
  name: string;
  type: string;
  control : string;
  placeholder: string;
  label: string;
  className?: string;
}
const FormikInput: FC<InputProps> = ({ name, type, placeholder, className , label}) => {
  return (
    <FastField name={name} type={type} placeholder={placeholder}>
      {(form: FieldProps<any>) => {
        return (
          <div className={`flex flex-col w-11/12 mx-auto max-w-sm justify-center gap-1 ${className}`}>
            <Label htmlFor={name} className='text-[15px] font-bold text-red-700'>
              {label} :
            </Label>
            <Input
              type={type}
              id={name}
              className='h-10 border-2 border-black/80 bg-white font-bold text-[14px] placeholder:text-[14px]'
              {...form.field}
              placeholder={ placeholder}
            />
            <ErrorAlert name={name} />
          </div>
        );
      }}
    </FastField>
  );
};

export default FormikInput;