import {Link} from "react-router-dom";

import {LoginModal} from "@/components/login-modal";

export function Home() {
    return (
        <>
            <img alt="Iru" src="/iru.png" />
            <div className="flex gap-10">
                <a className="hover:font-bold hover:scale-105 transition-all" href="mailto:iru@hotmail.com">
                    Contacto
                </a>
                {sessionStorage.getItem("password") === import.meta.env.VITE_APP_PASSWORD ? (
                    <Link className="hover:font-bold hover:scale-105 transition-all" to="/portfolio">
                        Portfolio
                    </Link>
                ) : (
                    <LoginModal
                        trigger={<div className="hover:font-bold hover:scale-105 transition-all">Portfolio</div>}
                    />
                )}
            </div>
        </>
    );
}
