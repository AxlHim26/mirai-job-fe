import { FieldWrapper } from './field-wrapper';

export default {
  title: 'UI/FieldWrapper',
  component: FieldWrapper,
};

export const Default = () => {
  return (
    <FieldWrapper label="Email address">
      <input
        type="email"
        placeholder="you@example.com"
        className="border px-2 py-1 rounded"
      />
    </FieldWrapper>
  );
};
