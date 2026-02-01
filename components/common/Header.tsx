import Link from "next/link";
import {Button} from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
    return (
        <header className="border-b border-gray-700 py-6">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center">

                    <div>
                        <h1 className="font-bold">Portfolio</h1>
                    </div>

                    <nav>
                        <ul className="flex items-center gap-6">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/">About</Link></li>
                            <li><Link href="/">Projects</Link></li>
                            <li><Link href="/">Bogs</Link></li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <Button>Contact</Button>
                    </div>
                </div>
            </div>
        </header>
    )
}