import { lazy } from 'react';

const Login = lazy(() => import('./Login'));
const ForgotPassword = lazy(() => import('./ForgotPassword'));
const Register = lazy(() => import('./Register'));
const ResetPassword = lazy(() => import('./ResetPassword'));

export { Login, ForgotPassword, Register, ResetPassword };
