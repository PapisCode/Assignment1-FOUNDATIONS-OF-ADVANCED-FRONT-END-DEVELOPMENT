import Link from 'next/link';

export default function Navbar() {
    return (
        <nav style = {{ padding: "10px", backgroundColor: "#333", color: "#fff" }}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    );
}