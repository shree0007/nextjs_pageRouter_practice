import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";



export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div
        className={`min-h-screen flex-col items-center justify-between pt-10`}
      >
        <h1 className="text-xl pt-20 text-center font-extrabold">Welcome to Ninja World</h1>
        <div className="p-4">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas perspiciatis unde labore nesciunt facere provident officia excepturi et autem aut rem, libero odit fugit quam ab eaque veritatis sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas perspiciatis unde labore nesciunt facere provident officia excepturi et autem aut rem, libero odit fugit quam ab eaque veritatis sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas perspiciatis unde labore nesciunt facere provident officia excepturi et autem aut rem, libero odit fugit quam ab eaque veritatis sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas perspiciatis unde labore nesciunt facere provident officia excepturi et autem aut rem, libero odit fugit quam ab eaque veritatis sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas perspiciatis unde labore nesciunt facere provident officia excepturi et autem aut rem, libero odit fugit quam ab eaque veritatis sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas perspiciatis unde labore nesciunt facere provident officia excepturi et autem aut rem, libero odit fugit quam ab eaque veritatis sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas perspiciatis unde labore nesciunt facere provident officia excepturi et autem aut rem, libero odit fugit quam ab eaque veritatis sunt.</p>
        </div>
        <div>
          <Image src="/ninja.jpg" width={700} height={500} alt="ninja" className="m-auto" />
        </div>
        <div className="p-4">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas perspiciatis unde labore nesciunt facere provident officia excepturi et autem aut rem, libero odit fugit quam ab eaque veritatis sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas perspiciatis unde labore nesciunt facere provident officia excepturi et autem aut rem, libero odit fugit quam ab eaque veritatis sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas perspiciatis unde labore nesciunt facere provident officia excepturi et autem aut rem, libero odit fugit quam ab eaque veritatis sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas perspiciatis unde labore nesciunt facere provident officia excepturi et autem aut rem, libero odit fugit quam ab eaque veritatis sunt.</p>
        </div>
        <div className="p-4">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas perspiciatis unde labore nesciunt facere provident officia excepturi et autem aut rem, libero odit fugit quam ab eaque veritatis sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas perspiciatis unde labore nesciunt facere provident officia excepturi et autem aut rem, libero odit fugit quam ab eaque veritatis sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas perspiciatis unde labore nesciunt facere provident officia excepturi et autem aut rem, libero odit fugit quam ab eaque veritatis sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas perspiciatis unde labore nesciunt facere provident officia excepturi et autem aut rem, libero odit fugit quam ab eaque veritatis sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas perspiciatis unde labore nesciunt facere provident officia excepturi et autem aut rem, libero odit fugit quam ab eaque veritatis sunt.</p>
        </div>
        <div className="p-4">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas perspiciatis unde labore nesciunt facere provident officia excepturi et autem aut rem, libero odit fugit quam ab eaque veritatis suntLorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas perspiciatis unde labore nesciunt facere provident officia excepturi et autem aut rem, libero odit fugit quam ab eaque veritatis sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas perspiciatis unde labore nesciunt facere provident officia excepturi et autem aut rem, libero odit fugit quam ab eaque veritatis sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas perspiciatis unde labore nesciunt facere provident officia excepturi et autem aut rem, libero odit fugit quam ab eaque veritatis sunt.</p>
        </div>

      </div>
      <div className="w-40 m-auto">
        <Link href="/ninjas">
          <button className="btn btn-success m-auto ">look for ninjas</button>
        </Link>
      </div>
    </>
  )
}
