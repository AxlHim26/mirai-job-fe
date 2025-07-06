import { Button } from "../../button";
type OverlayAlertOption = {
    text: string;
    onClick: () => void;
};

export type OverlayAlertProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
    primaryOption: OverlayAlertOption;
    secondaryOption?: OverlayAlertOption;
};

export const AlertOverlay = ({
    title,
    description,
    icon,
    primaryOption,
    secondaryOption,
}: OverlayAlertProps) => {
    return (
        <div className="flex h-[332px] w-[432px] flex-col items-center justify-center gap-5 bg-white p-7 text-center ring-primary">
            {icon}
            <main className="flex flex-col gap-2">
                <div className="text-2xl font-bold">{title}</div>
                <div>{description}</div>
            </main>
            <div className="flex w-full flex-col">
                <Button
                    size={"lg"}
                    onClick={primaryOption.onClick}
                >
                    {primaryOption.text}
                </Button>
                {secondaryOption && (
                    <Button
                        variant={"outlined"}
                        size={"lg"}
                        onClick={secondaryOption.onClick}
                    >
                        {secondaryOption.text}
                    </Button>
                )}
            </div>
        </div>
    );
};