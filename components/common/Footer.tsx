import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-gray-700 py-7">
        <div className="container mx-auto px-6">
            <div className="flex justify-between">

                <div>
                    <h2>My Portfolio</h2>
                    <p>Cebu, City</p>
                </div>

                <div>
                    <ul className="flex flex-col gap-2">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">About</Link></li>
                        <li><Link href="/">Projects</Link></li>
                    </ul>
                </div>

                <div>
                    <ul className="flex flex-col gap-2">
                        <li><Link href="/">Blog1</Link></li>
                        <li><Link href="/">Blog2</Link></li>
                        <li><Link href="/">Blog3</Link></li>
                    </ul>
                </div>

                <div>
                    <ul className="flex flex-col gap-2">
                        <li><Link href="/">Email: hihi@gmail.com</Link></li>
                        <li><Link href="/">Phone: 0975 322 1337</Link></li>
                        <li><Link href="/">Github: Rochelle1453</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        </footer>
    )
}