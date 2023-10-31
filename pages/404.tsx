import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            // router.back(); //goes 1 step back 
            router.push('/') //goes to homepage after 3s.
        }, 3000)
    },)
    return (
        <div data-theme="dark" className={`min-h-screen flex-col items-center p-44`}>
            <h1>Ooooops</h1>
            <h2>The page you looking for cannot be found :(</h2>
            <Link href="/"><button className='btn btn-success'>Go back to the Homepage</button></Link>
        </div>
    );
};

export default NotFound;