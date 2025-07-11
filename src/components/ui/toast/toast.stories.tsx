import { Toast } from './toast';

export default {
  title: 'UI/Toast',
  component: Toast,
};



export const Default = () => <Toast title={''} message={''} type={'info'} />;
