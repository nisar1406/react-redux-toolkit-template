import React, { useState } from 'react';

interface ToggleInputProps {
  labelTitle: string;
  labelStyle?: string;
  containerStyle?: string;
  defaultValue?: boolean;
  updateFormValue: (update: { updateType: string; value: boolean }) => void;
  updateType: string;
}

const ToggleInput: React.FC<ToggleInputProps> = ({
  labelTitle,
  labelStyle,
  containerStyle,
  defaultValue,
  updateFormValue,
  updateType,
}) => {
  const [value, setValue] = useState<boolean>(defaultValue || false);

  const updateToggleValue = (): void => {
    setValue(!value);
    updateFormValue({ updateType, value: !value });
  };

  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label cursor-pointer">
        <span className={`label-text text-base-content ${labelStyle}`}>
          {labelTitle}
        </span>
        <input
          type="checkbox"
          className="toggle"
          checked={value}
          onChange={() => updateToggleValue()}
        />
      </label>
    </div>
  );
};

export default ToggleInput;
