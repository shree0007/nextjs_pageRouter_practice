import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full">

            <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800" >
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="https://live-shree-portfolio.pantheonsite.io/" className="hover:underline">Shree's Ninjas</Link>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <Link href="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
                        </li>
                        <li>
                            <Link href="https://en.wikipedia.org/wiki/Privacy_policy" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="/ninjas" className="mr-4 hover:underline md:mr-6">Ninja Listing</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">Contact me</Link>
                        </li>
                    </ul>
                </div>
            </footer>

        </div>
    );
};

export default Footer;