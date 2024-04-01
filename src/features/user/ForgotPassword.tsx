import CheckCircleIcon from '@heroicons/react/24/solid/CheckCircleIcon';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import LandingIntro from './LandingIntro';
import InputText from '../../components/Input/InputText';
import { useSelector } from 'react-redux';
import { RootState } from '@src/app/store/store';

interface IFormData {
  email: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required!'),
});

const ForgotPassword: React.FC = () => {
  const { isLoading } = useSelector((state: RootState) => state.api);

  const [linkSent, setLinkSent] = useState(false);

  const methods = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData: IFormData) => {
    // Your form submission logic here
    console.log(formData);
    setLinkSent(true);
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card w-full max-w-5xl shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
          <div className="">
            <LandingIntro />
          </div>
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">
              Forgot Password
            </h2>

            {linkSent ? (
              <>
                <div className="text-center mt-8">
                  <CheckCircleIcon className="inline-block w-32 text-success" />
                </div>
                <p className="my-4 text-xl font-bold text-center">Link Sent</p>
                <p className="mt-4 mb-8 font-semibold text-center">
                  Check your email to reset password
                </p>
                <div className="text-center mt-4">
                  <Link to="/login" className="btn btn-block btn-primary">
                    Login
                  </Link>
                </div>
              </>
            ) : (
              <>
                <p className="my-8 font-semibold text-center">
                  We will send a password reset link to your email.
                </p>
                <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className="mb-4">
                      <InputText
                        name="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className={`btn mt-2 w-full btn-primary${isLoading ? ' loading' : ''}`}
                      disabled={isLoading} // Disable button while loading
                    >
                      {isLoading ? 'Sending...' : 'Send Reset Link'}
                    </button>
                    <div className="text-center mt-4">
                      Don't have an account yet?{' '}
                      <Link
                        to="/register"
                        className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200"
                      >
                        Register
                      </Link>
                    </div>
                  </form>
                </FormProvider>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
