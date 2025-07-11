import { useForm } from 'react-hook-form';
import { Input } from './input';

export default {
  title: 'UI/Input',
  component: Input,
};

export const Default = () => {
  const { register } = useForm();

  return <Input register={register('email')} type="email" />;
};
