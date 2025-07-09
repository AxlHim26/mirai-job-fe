import { ToastProps } from "@/components/ui/toast/toast";
import { create } from "zustand";

export type ToastStore = {
    toasts: (ToastProps | undefined)[];
    addToast: (toast: ToastProps) => void;
    dismissToast: (index: number) => void;
}

export const useToast = create<ToastStore>((set) => ({
    toasts: [],
    addToast: (props) => {
        set((state) => ({
            toasts: [...state.toasts, props],
        }));
    },
    dismissToast: (index) => {
        set((state) => {
            const newToasts = [...state.toasts];
            newToasts[index] = undefined;
            return {
                toasts: newToasts,
            };
        });
    },
}));
