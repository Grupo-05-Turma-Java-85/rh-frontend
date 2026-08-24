import { ListIcon, XIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 border-b border-slate-200 shadow-sm  bg-navblue/60 backdrop-blur-md">
            <nav className="flex items-center justify-between  px-4 py-3 mx-6">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center active:scale-95 transition-transform"
                    onClick={() => setMenuAberto(false)}
                >
                    <img
                        src="https://ik.imagekit.io/iibl43pgxp/imgkit1.png"
                        alt="FitHub RH"
                        className="h-10 md:h-12 w-auto"
                    />
                </Link>

                {/* Links + botão do lado direito */}
                <div className="flex items-center gap-6">
                    {/* Links Desktop */}
                    <div className="hidden md:flex items-center gap-2">
                        <Link
                            to="/"
                            className="text-xl font-semibold px-3 py-1 text-white hover:text-slate-900 transition-colors"
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            className="text-xl font-semibold px-3 py-1 text-white hover:text-slate-900 transition-colors"
                        >
                            Sobre nós
                        </Link>

                        <Link
                            to="/contact"
                            className="text-xl font-semibold px-3 py-1 text-white hover:text-slate-900 transition-colors"
                        >
                            Contato
                        </Link>
                    </div>

                    {/* Botão Mobile */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMenuAberto((open) => !open)}
                        aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={menuAberto}
                    >
                        {menuAberto ? (
                            <XIcon size={26} />
                        ) : (
                            <ListIcon size={26} />
                        )}
                    </button>

                </div>
            </nav>

            {/* Menu Mobile */}
            <div
                className={`${menuAberto ? "flex" : "hidden"
                    } md:hidden flex-col gap-1 border-t border-slate-200 px-4 py-3 backdrop-blur-md`}
            >
                <Link
                    to="/"
                    className="px-3 py-2 text-white hover:text-blue-900 transition-colors"
                    onClick={() => setMenuAberto(false)}
                >
                    Home
                </Link>

                <Link
                    to="/about"
                    className="px-3 py-2 text-white hover:text-blue-900 transition-colors"
                    onClick={() => setMenuAberto(false)}
                >
                    Sobre nós
                </Link>

                <Link
                    to="/contact"
                    className="px-3 py-2 text-white hover:text-blue-900 transition-colors"
                    onClick={() => setMenuAberto(false)}
                >
                    Contato
                </Link>
            </div>
        </header>
    );
}