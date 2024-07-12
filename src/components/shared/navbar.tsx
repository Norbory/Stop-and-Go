import { NavigationMenuDemo } from "../Design/NavigationMenu"
export function Navbar () {
    return (
        <nav className='flex justify-between items-center px-20 py-4'>
            <h1 className='text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-gray-400 text-xl font-bold text-center '>
                Stop and Go
            </h1>
            {/* Botones de navegación */}
            {/* <div className='flex justify-center items-center'>
                <a
                    href='#'
                    className='text-gray-400 hover:text-gray-800 font-bold py-2 px-4'
                >
                    Home
                </a>
                <a
                    href='#'
                    className='text-gray-400 hover:text-gray-800 font-bold py-2 px-4'
                >
                    About
                </a>
                <a
                    href='#'
                    className='text-gray-400 hover:text-gray-800 font-bold py-2 px-4'
                >
                    Contact
                </a>
            </div> */}
            <NavigationMenuDemo />
            {/* Botones de inicio de sesión y registro */}
            <div
                className='flex justify-end'
            >
            <a
                href='#'
                className='text-gray-400 hover:text-gray-800 font-bold py-2 px-4'
            >
                Log in
            </a>
            <a
                href='#'
                className='text-gray-400 hover:text-gray-800 font-bold py-2 px-4'
            >
                Sign up
            </a>
            </div>
        </nav>
        )
}