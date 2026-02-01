import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <header>
            <nav>
                <Link href="/" className="logo">
                    <Image src="/icons/logo.png" alt="логотип" width={24} height={24} />
                    <p>В мире технологий</p>
                </Link>
                <ul>
                    <Link href="/" >Главная</Link>
                    <Link href="/" >События</Link>
                    <Link href="/" >Создать событие</Link>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;