import { create } from "zustand";

export type OverlayStore = {
    component: React.ReactNode | undefined;
    display: (component: React.ReactNode) => void;
    dismiss: () => void;
};

export const useOverlayStore = create<OverlayStore>((set) => ({
    component: undefined,
    display: (component) => {
        set(() => ({
            component,
        }));
    },
    dismiss: () => {
        set(() => ({
            component: undefined,
        }));
    },
}));
