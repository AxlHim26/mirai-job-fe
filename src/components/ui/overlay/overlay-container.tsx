import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { OverlayLayout } from "./overlay-layout";
import { useOverlayStore } from "@/stores/overlay-store";

export const OverlayContainer = () => {
    const { component, dismiss } = useOverlayStore();
    const { pathname } = useLocation();

    useEffect(() => {
        if (component) {
            dismiss();
        }
    }, [pathname]);

    if (!component) {
        return <></>;
    }

    return <OverlayLayout onDismiss={dismiss}>{component}</OverlayLayout>
}
