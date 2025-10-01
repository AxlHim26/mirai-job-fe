import { Toast, ToastProps } from "./toast";
import { useToastStore } from "@/stores/toast-store";
export type ToastContainerProps = {
    timeout?: number;
};

export const ToastContainer = ({ timeout = 5000 }: ToastContainerProps) => {
    const { toasts, dismissToast } = useToastStore();

    return (
        <div className="pointer-events-none fixed inset-0 z-50 flex flex-col items-end justify-start gap-3 p-5">
            {toasts.map((props: ToastProps | undefined, index) => {
                if (!props) {
                    return;
                }

                const { title, message, onDismiss = () => { }, type } = props;

                setTimeout(() => {
                    dismissToast(index);
                }, timeout);

                return (
                    <Toast
                        key={index}
                        title={title}
                        message={message}
                        type={type}
                        onDismiss={() => {
                            onDismiss();
                            dismissToast(index);
                        }}
                    />
                );
            })}
        </div>
    );
};