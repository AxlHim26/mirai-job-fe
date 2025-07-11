import { OverlayLayout } from './overlay-layout';

export default {
  title: 'UI/Overlay',
  component: OverlayLayout,
};

export const Default = () => (
  <OverlayLayout
    onDismiss={() => console.log('Overlay dismissed')}
  >
    <div style={{ padding: '1rem' }}>
      This is content inside the overlay.
    </div>
  </OverlayLayout>
);
