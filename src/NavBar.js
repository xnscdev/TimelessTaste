import Page from "./Page";

function NavElement({callback, title}) {
    return (
        <li>
            <button onClick={callback} className="text-2xl text-white hover:text-blue-400 focus:outline-none">{title}</button>
        </li>
    )
}

function NavBar({changePage, signOut}) {
    return (
        <nav className="bg-blue-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-semibold text-5xl">TimelessTaste</div>
                <ul className="flex space-x-4">
                    <NavElement callback={() => changePage(Page.Home)} title="Home"/>
                    <NavElement callback={() => changePage(Page.Account)} title="Account"/>
                    <NavElement callback={() => changePage(Page.History)} title="History"/>
                    <NavElement callback={signOut} title="Sign Out"/>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;