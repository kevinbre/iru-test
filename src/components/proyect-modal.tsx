import {Dialog, DialogContent, DialogTrigger} from "./ui/dialog";

interface Props {
    trigger: React.ReactNode;
    children: React.ReactNode;
}

export function ProyectModal({trigger, children}: Props) {
    return (
        <Dialog>
            <DialogTrigger>{trigger}</DialogTrigger>
            <DialogContent className="bg-black/40 backdrop-blur-sm border-none max-h-[calc(100dvh-200px)] overflow-auto py-4 text-gray-300 scrollbar scrollbar-thumb-neutral-950 scrollbar-track-black">
                {children}
            </DialogContent>
        </Dialog>
    );
}
