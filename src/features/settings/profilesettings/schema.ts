import * as yup from 'yup';

export interface IFormData {
  name: string;
}

export const schema = yup.object().shape({
  name: yup.string().required('Name is required!!'),
});
