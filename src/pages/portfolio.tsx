import {ChevronLeftIcon} from "@radix-ui/react-icons";
import parse from "html-react-parser";
import {Link} from "react-router-dom";

import {ProyectModal} from "@/components/proyect-modal";
import {iruproyectos} from "@/mock/irudata";

export function Portfolio() {
    return (
        <div className="h-full flex flex-col items-center gap-10">
            <Link to="/">
                <ChevronLeftIcon className="hover:scale-105" />
            </Link>
            <h2 className="text-2xl">Proyectos</h2>
            <div className="flex-col flex gap-4">
                {iruproyectos.map((proyect, index) => (
                    <ProyectModal
                        key={index}
                        trigger={
                            <div className="w-full even:flex-row-reverse flex border-neutral-800 border-2 p-2 rounded-2xl gap-4 hover:scale-100 scale-95 transition-all cursor-pointer">
                                <img alt={proyect.title} className="odd:rounded-l-xl" src={proyect.image} width="200" />
                                <div className="flex flex-col">
                                    <h2 className="font-bold text-2xl">{proyect.title}</h2>
                                    <p>{proyect.description}</p>
                                </div>
                            </div>
                        }
                    >
                        {parse(proyect.html)}
                    </ProyectModal>
                ))}
            </div>
        </div>
    );
}

/* {} */
