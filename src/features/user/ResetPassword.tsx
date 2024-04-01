import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import LandingIntro from './LandingIntro';
import InputText from '../../components/Input/InputText';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import useApiRequest from '../../hooks/useApiRequest';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store/store';

const schema = yup.object().shape({
  password: yup
    .string()
    .required('Password is required!')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,}$/,
      'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.'
    ),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required!')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

interface IFormData {
  password: string;
  confirmPassword: string;
}
const ResetPassword: React.FC = () => {
  const { isLoading } = useSelector((state: RootState) => state.api);

  const { response: postApiData } = useApiRequest();

  const methods = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormData> = (formData: IFormData) => {
    // Your form submission logic here
    console.log(formData);
  };

  useEffect(() => {
    if (postApiData) {
      // login({ name: "Test" });
    }
  }, [postApiData]);
  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
          <div className="">
            <LandingIntro />
          </div>
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">
              Reset Password Your Password
            </h2>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <InputText
                    name="password"
                    type="password"
                    placeholder="Please enter your password"
                    required
                    containerStyle="mt-4"
                  />
                  <InputText
                    name="confirmPassword"
                    type="password"
                    placeholder="Please re-enter your password"
                    required
                    containerStyle="mt-4"
                  />
                </div>
                <button
                  type="submit"
                  className={`btn mt-2 w-full btn-primary${isLoading ? ' loading' : ''}`}
                >
                  Reset
                </button>

                <div className="text-center mt-4">
                  Already have an account?{' '}
                  <Link to="/login">
                    <span className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                      Login
                    </span>
                  </Link>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
