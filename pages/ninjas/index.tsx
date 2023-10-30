import Head from 'next/head';

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

            <div className={`min-h-screen p-24`}>
                <h1 className="text-xl pb-8">Ninjas List</h1>
                {ninjas.map((ninja) => {
                    return <div key={ninja.id}>
                        <li>{ninja.name}</li>
                    </div>
                })}
            </div>
        </>
    );
};

export default Ninjas;