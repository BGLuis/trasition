import Link from "next/link";
import NavigationLink from "./NavigationLink";

export default function Navigation() {

    return (
    <header className='bg-zinc-800 w-full flex justify-between px-2 py-5 text-white'>
        <h1>Trasition</h1>
        <nav className='flex gap-2'>
            <NavigationLink href="/about" label="Sobre"/>
            <NavigationLink href="/products" label="Produtos"/>
            <NavigationLink href="/" label="Home"/>
            {/* <Link href="/about">Sobre</Link> */}
            {/* <Link href="/products">Produtos</Link> */}
            {/* <Link href="/">Home</Link> */}
        </nav>
    </header>
    )
}
