import { Label } from './label';

export default {
  title: 'UI/Label',
  component: Label,
};

export const Default = () => (
  <Label about=''>
    <div style={{ padding: '1rem' }}>
      This is content inside the Label.
    </div>
  </Label>
);
