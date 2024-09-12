import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useNavigate} from "react-router-dom";

import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "./ui/dialog";
import {Button} from "./ui/button";
import {Input} from "./ui/input";

interface Props {
    trigger: React.ReactNode;
}

const loginSchema = z.object({
    password: z.string().min(4, "La contraseña es necesaria"),
});

type LoginValues = z.infer<typeof loginSchema>;

export function LoginModal({trigger}: Props) {
    const navigate = useNavigate();

    const methods = useForm<LoginValues>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (values: LoginValues) => {
        sessionStorage.setItem("password", values.password);
        navigate("/portfolio");
    };

    return (
        <Dialog>
            <DialogTrigger>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader className="flex flex-col justify-center items-center">
                    <DialogTitle>Me queres robar los proyectos?</DialogTitle>
                    <DialogDescription>Logueate pete</DialogDescription>
                    <form className="flex flex-col gap-2" onSubmit={methods.handleSubmit(onSubmit)}>
                        <Input type="password" {...methods.register("password")} />

                        {methods.formState.errors.password && (
                            <h2 className="text-red-500 text-sm">{methods.formState.errors.password.message}</h2>
                        )}
                        <Button>Entrar</Button>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
