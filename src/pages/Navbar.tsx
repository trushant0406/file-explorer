import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../component/Breadcrumb/Breadcrumbs";

const NavBar = () => {
    const navigator = useNavigate();
    return (
        <nav
            className="flex px-5 py-3 text-black bg-white "
            aria-label="Breadcrumb"
        >
            <div className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <div className="inline-flex items-center">
                    <svg
                        className="w-3 h-3 me-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    <div
                        className="inline-flex items-center text-sm font-medium text-black dark:text-gray-700 gap-4 cursor-pointer"
                        onClick={() => navigator("/")}
                    >
                        Home
                    </div>
                    <div className="inline-flex items-center text-sm font-medium text-black	 dark:text-gray-700 gap-4 ">
                        <Breadcrumbs />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;