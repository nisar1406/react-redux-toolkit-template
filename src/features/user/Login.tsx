import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import LandingIntro from './LandingIntro';
import { RootState } from '../../app/store/store';
import InputText from '../../components/Input/InputText';
import useApiRequest from '../../hooks/useApiRequest';
import { useAuth } from '../../hooks/useAuth';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import useAuthRedirect from '../../hooks/useAuthRedirect';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required!'),
  password: yup.string().required('Password is required!'),
});

interface IFormData {
  password: string;
  email: string;
}

const Login: React.FC = () => {
  useAuthRedirect('/dashboard');

  const { isLoading } = useSelector((state: RootState) => state.api);

  const { login } = useAuth();
  const { fetchData: pageLoadFetch, response: pageLoadData } = useApiRequest();
  const { fetchData: postApiFetch, response: postApiData } = useApiRequest();

  const methods = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormData> = (formData: IFormData) => {
    // Your form submission logic here
    console.log(formData);
    const { email, password } = formData;
    if (email && password) {
      login({ name: 'Admin User' });
    }
  };

  useEffect(() => {
    if (postApiData) {
      // login({ name: "Test" });
    }
  }, [postApiData]);

  useEffect(() => {
    pageLoadFetch('GET', 'https://jsonplaceholder.typicode.com/todos/1');
  }, []);

  console.log(pageLoadData, login, postApiFetch);

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
          <div className="">
            <LandingIntro />
          </div>
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <InputText
                    name="email"
                    placeholder="Please enter your email address"
                    required
                    containerStyle="mt-4"
                  />
                  <InputText
                    name="password"
                    type="password"
                    placeholder="Please enter your password"
                    required
                    containerStyle="mt-4"
                  />
                </div>

                <div className="text-right text-primary">
                  <Link to="/forgot-password">
                    <span className="text-sm inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                      Forgot Password?
                    </span>
                  </Link>
                </div>
                <button
                  type="submit"
                  className={`btn mt-2 w-full btn-primary${isLoading ? ' loading' : ''}`}
                >
                  Login
                </button>

                <div className="text-center mt-4">
                  {`Don't have an account yet? `}
                  <Link to="/register">
                    <span className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                      Register
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

export default Login;
