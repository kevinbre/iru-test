import {Outlet} from "react-router-dom";

export function Layout() {
    return (
        <main className="text-gray-300 flex flex-col justify-center items-center bg-[#111111] w-screen min-h-[100dvh]">
            <Outlet />
        </main>
    );
}
