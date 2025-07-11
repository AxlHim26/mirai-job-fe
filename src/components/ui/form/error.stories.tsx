import { Error } from './error';

export default {
  title: 'UI/Error',
  component: Error,
};

export const Default = () => {
  return (
    <Error errorMessage="This field is required." />
  );
};

export const NoError = () => {
  return (
    <Error errorMessage={undefined} />
  );
};
