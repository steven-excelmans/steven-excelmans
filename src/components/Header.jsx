import {createSignal} from "solid-js";
import "../styling/Header.css";

function Header() {
    const [showMenu, setShowMenu] = createSignal(false);
    const toggleMenu = () => setShowMenu(!showMenu());

    return (
        <header class={"container mx-12 h-20 select-none transition-colors duration-300"} class={showMenu() ? "text-sea-salt" : "text-jet"}>
            <div class={"bg-mint-green absolute -top-12 left-0 h-[50rem] w-full -z-10 -skew-y-3"}></div>
            <div class={"flex h-full items-center justify-between"}>
                <div class={"z-20 text-3xl font-thin uppercase tracking-tight"}>
                    Steven
                    <span class={"ml-1 font-semibold tracking-tighter"}>Excelmans</span>
                </div>
                <button class={"hamburger__menu group z-20"} class={showMenu() ? "hamburger__menu--open" : undefined} onClick={toggleMenu}>
                    <div
                        class={"hamburger__bar group-hover-[:nth-of-type(1)_&]:hamburger__bar--hover"}
                        class={showMenu() ? "bg-sea-salt" : "bg-jet"}></div>
                    <div
                        class={"hamburger__bar group-hover-[:nth-of-type(2)_&]:hamburger__bar--hover"}
                        class={showMenu() ? "bg-sea-salt" : "bg-jet"}></div>
                    <div
                        class={"hamburger__bar group-hover-[:nth-of-type(3)_&]:hamburger__bar--hover"}
                        class={showMenu() ? "bg-sea-salt" : "bg-jet"}></div>
                </button>
                <div
                    class={"fixed inset-0 z-10 h-full w-full bg-jungle-green transition-all duration-300 ease-in-out"}
                    class={!showMenu() ? "translate-x-full" : undefined}></div>
            </div>
        </header>
    );
}

export default Header;
