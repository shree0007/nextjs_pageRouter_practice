import Head from 'next/head';
import Link from 'next/link';

interface Ninjas {
    id: string;
    name: string;
    email: string;

}

interface NinjasProps {
    ninjas: Ninjas[];
}

export const getStaticProps = async () => {                               //this functions run at build time not in the browser
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data: Ninjas[] = await res.json()
    console.log(data);

    return {
        props: { ninjas: data }
    }
}



const Ninjas = ({ ninjas }: NinjasProps) => {
    return (
        <>
            <Head>
                <title>Ninja List | ninjas</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div className={`min-h-screen p-24 grid grid-cols-4 gap-4`}>
                {ninjas.map((ninja) => {

                    return <div key={ninja.id} className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{ninja.name}</h2>
                            <p>{ninja.email}</p>
                            <div className="card-actions justify-end">
                                <Link href={'/ninjas/' + ninja.id}><button className="btn btn-success">See more</button></Link>
                            </div>
                        </div>
                    </div>

                })}



            </div>
        </>
    );
};

export default Ninjas;

