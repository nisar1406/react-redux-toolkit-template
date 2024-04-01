import React from 'react';
import { useDispatch } from 'react-redux';

import { showNotification } from '../../../app/store/headerSlice';
import TitleCard from '../../../components/Cards/TitleCard';
import InputText from '../../../components/Input/InputText';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { IFormData, schema } from './schema';

interface ProfileSettingsProps {}

const ProfileSettings: React.FC<ProfileSettingsProps> = () => {
  const dispatch = useDispatch();

  // Call API to update profile settings changes
  const updateProfile = () => {
    dispatch(showNotification({ message: 'Profile Updated', status: 1 }));
  };

  const methods = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormData> = (formData: IFormData) => {
    // Your form submission logic here
    console.log(formData);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <TitleCard title="Profile Settings" topMargin="mt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputText
              // labelTitle="Name"
              // defaultValue="Alex"
              name="name"
              placeholder="Please enter your name"
              required
              // updateFormValue={updateFormValue}
            />
            {/* <InputText
            labelTitle="Email Id"
            defaultValue="alex@react-redux-toolkit-template.com"
            name="email"
            // updateFormValue={updateFormValue}
          /> */}
            {/* <InputText
            labelTitle="Title"
            defaultValue="UI/UX Designer"
            // updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Place"
            defaultValue="California"
            // updateFormValue={updateFormValue}
          />
          <TextAreaInput
            labelTitle="About"
            defaultValue="Doing what I love, part-time traveler"
            // updateFormValue={updateFormValue}
          /> */}
          </div>
          <div className="divider"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <InputText
            labelTitle="Language"
            defaultValue="English"
            // updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Timezone"
            defaultValue="IST"
            // updateFormValue={updateFormValue}
          /> */}
            {/* <ToogleInput
            updateType="syncData"
            labelTitle="Sync IData"
            defaultValue={true}
            // updateFormValue={updateFormValue}
          /> */}
          </div>

          <div className="mt-16">
            <button
              className="btn btn-primary float-right"
              onClick={() => updateProfile()}
            >
              Update
            </button>
          </div>
        </TitleCard>
      </form>
    </FormProvider>
  );
};

export default ProfileSettings;
