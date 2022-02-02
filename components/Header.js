import Link from "next/link";

export default function Header() {
    return (
        <header>
            <h1>iK I am Header component</h1>
            <ul>
                <li>
                    <Link href="/">
                        <a>home page</a>
                    </Link>
                </li>
                <li>
                    <Link href="/side">
                        <a>Side page</a>
                    </Link>
                </li>
                <li>
                    <Link href="/error">
                        <a>Error page</a>
                    </Link>
                </li>
            </ul>
        </header>
    );
}
