import InformationCircleIcon from '@heroicons/react/24/outline/InformationCircleIcon';
import { useState, ChangeEvent } from 'react';

interface Option {
  name: string;
  value?: string;
}

interface SelectBoxProps {
  labelTitle: string;
  labelDescription?: string;
  defaultValue?: string;
  containerStyle?: string;
  placeholder?: string;
  labelStyle?: string;
  options: Option[];
  updateType: string;
  updateFormValue: (update: { updateType: string; value: string }) => void;
}

const SelectBox = (props: SelectBoxProps): JSX.Element => {
  const {
    labelTitle,
    labelDescription,
    defaultValue,
    containerStyle,
    placeholder,
    labelStyle,
    options,
    updateType,
    updateFormValue,
  } = props;

  const [value, setValue] = useState<string>(defaultValue || '');

  const updateValue = (newValue: string): void => {
    updateFormValue({ updateType, value: newValue });
    setValue(newValue);
  };

  return (
    <div className={`inline-block ${containerStyle}`}>
      <label className={`label ${labelStyle}`}>
        <div className="label-text">
          {labelTitle}
          {labelDescription && (
            <div className="tooltip tooltip-right" data-tip={labelDescription}>
              <InformationCircleIcon className="w-4 h-4" />
            </div>
          )}
        </div>
      </label>

      <select
        className="select select-bordered w-full"
        value={value}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          updateValue(e.target.value)
        }
      >
        <option disabled value="PLACEHOLDER">
          {placeholder}
        </option>
        {options.map((o, k) => (
          <option value={o.value || o.name} key={k}>
            {o.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
