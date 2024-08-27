function App() {
    return (
        <div className="w-screen min-h-[100dvh] bg-neutral-950 text-gray-300 flex flex-col justify-center items-center p-6">
            Iru Arostegui
            <div className="flex gap-10">
                <a className="hover:font-bold hover:scale-105 transition-all" href="mailto:iru@hotmail.com">
                    Contacto
                </a>
                <a
                    className="hover:font-bold hover:scale-105 transition-all"
                    href="https://www.linkedin.com/in/iruarostegui/"
                    rel="noreferrer"
                    target="_blank"
                >
                    Portfolio
                </a>
            </div>
        </div>
    );
}

export default App;
