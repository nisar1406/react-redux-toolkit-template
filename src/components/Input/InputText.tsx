import React from 'react';
import { FieldError, useFormContext } from 'react-hook-form';

interface InputTextProps {
  labelTitle?: string;
  labelStyle?: string;
  type?: string;
  containerStyle?: string;
  defaultValue?: string;
  placeholder?: string;
  name: string; // Required input name
  required?: boolean;
}

const InputText: React.FC<InputTextProps> = ({
  labelTitle,
  labelStyle,
  type,
  containerStyle,
  defaultValue,
  placeholder,
  name,
  required,
}: InputTextProps): JSX.Element => {
  // const methods = useForm();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    // <FormProvider {...methods}>
    <div className={`form-control w-full ${containerStyle}`}>
      {labelTitle && (
        <label className="label">
          <span className={`label-text text-base-content ${labelStyle}`}>
            {labelTitle}
          </span>
        </label>
      )}
      <input
        type={type || 'text'}
        defaultValue={defaultValue}
        placeholder={placeholder || ''}
        {...register(name, { required })}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          register(name).onChange(event)
        }
        className={`input input-bordered w-full ${
          errors[name] ? 'input-error' : ''
        }`}
      />
      {errors[name] && typeof errors[name] === 'object' && (
        <span className="text-xs text-error pt-2">
          {(errors[name] as FieldError).message}
        </span>
      )}
    </div>
    // </FormProvider>
  );
};

export default InputText;
