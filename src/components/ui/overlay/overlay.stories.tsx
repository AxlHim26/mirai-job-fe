import type { Meta, StoryObj } from "@storybook/react";
import { OverlayLayout } from './overlay-layout';

const meta: Meta<typeof OverlayLayout> = {
  title: 'UI/Overlay',
  component: OverlayLayout,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "OverlayLayout renders a full-screen modal-like container for displaying overlay content. Useful for modals, alerts, or custom full-page overlays.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof OverlayLayout>;

export const Default: Story = {
  args: {
    onDismiss: () => console.log("Overlay dismissed"),
    children: (
      <div
        style={{
          padding: '1rem',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        }}
      >
        This is content inside the overlay.
      </div>
    ),
  },
};
