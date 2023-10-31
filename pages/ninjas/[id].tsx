import React from 'react';
import Link from 'next/link';


interface Ninjas {
    id: string;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        city: string;
    }

}

interface Context {
    params: {
        id: string;
    };
}

interface NinjaProps {
    ninja: Ninjas;
}


//to generate specific number of paths based on id. we have 10 ninjas, so dynamic routes should be only 10. So it creates 10 html page during build phase
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: Ninjas[] = await res.json();

    const paths = data.map((ninja) => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context: Context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: { ninja: data }
    }

}

const DetailsPage = ({ ninja }: NinjaProps) => {
    return (
        <div data-theme="luxury" className={`min-h-screen p-24`}>

            <div className="card card-side shadow-xl mb-4 bg-white" >
                <figure><img src={`http://source.unsplash.com/1600x900/?ninjas`} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{ninja.name}</h2>
                    <p>Username: {ninja.username}</p>
                    <p>Email{ninja.email}</p>
                    <p>Address:{ninja.address.street},{ninja.address.city}</p>
                </div>
            </div>
            <Link href='/ninjas'><button className='btn btn-success'>Back to Ninjas</button></Link>
        </div>
    );
};

export default DetailsPage;

