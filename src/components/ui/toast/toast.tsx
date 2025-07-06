import { LocalIcon } from "@/assets/icons/local-icon";
import { Button } from "../button";

const icon = {
    info: (
        <LocalIcon
            iconName="circleInfo"
            className="text-blue-500"
            width={36}
            height={36}
        />

    ),
    success : (
        <LocalIcon
            iconName="circleCheckmark"
            className="text-green-500"
            width={36}
            height={36}
        />
    ),
    warning: (
        <LocalIcon
            iconName="circleWarn"
            className="text-yellow-500"
            width={36}
            height={36}
        />
    ),
    error: (
        <LocalIcon
            iconName="circleXmark"
            className="text-red-500"
            width={36}
            height={36}
        />
    ),
} satisfies Record<string, React.ReactNode>;

export type ToastProps = {
    title: string;
    message: string;
    type: keyof typeof icon;
    onDismiss?: () => void;
};

export const Toast = ({
    title,
    message,
    type,
    onDismiss = () => { },
}: ToastProps) => {
    const Icon = icon[type];
    return (
        <div className="flex w-full max-w-sm gap-5 rounded-lg bg-white p-4 ring-1 ring-black/5 drop-shadow-lg">
            {Icon}
            <div className="flex flex-1 flex-col gap-1">
                <p className="text-sm font-medium text-gray-900">{title}</p>
                <p className="text-sm text-gray-500">{message}</p>
            </div>
            <Button
                variant={"ghost"}
                size={"icon"}
                onClick={onDismiss}
                className="pointer-events-auto"
            >
                <LocalIcon
                    iconName="circleXmark"
                    className="text-gray-500"
                />
            </Button>
        </div>
    );
}