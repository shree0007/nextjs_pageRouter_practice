import Head from "next/head";

const about = () => {
    return (
        <>
            <Head>
                <title>Ninja List | About</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div className={`min-h-screen p-24`}>
                <h1 className="text-xl pb-8">About page</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem commodi tempora voluptatum cumque suscipit ipsum pariatur optio, aspernatur ad impedit sequi molestiae nobis veritatis! Laborum sunt officiis inventore molestias qui!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem commodi tempora voluptatum cumque suscipit ipsum pariatur optio, aspernatur ad impedit sequi molestiae nobis veritatis! Laborum sunt officiis inventore molestias qui!</p>
                <button className="bg-green-400"><a href="/">Homepage</a></button>
            </div>
        </>
    );
};

export default about;