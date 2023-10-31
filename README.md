# NEXTJS NINJS PROJECT


## Notes
- see custom 404.tsx file and see the use of useEffect and useRouter for redirecting
- use Image from "next/image" instead of img tag. When using Image, we must give width and height. Use of Image makes the image responsive and only loads the image when we scroll to that image.
- to add title and metadata, import Head from 'next/head' then use Head component in return section and add title and metadata like this:
```tsx
    <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
    </Head>
```

## getStaticProps
- use getStaticProps function to fetch the data that returns the props which can be used to display that data in the html.
- give types to the data object properties that is fetched as well as to the props when using typescript
- Note: In case of new nextjs app router, we dont need getStaticProps. We can directly fetch data and display it without using any props(see this example in next-app repo).

## Dynamic Routes
- [] denotes the dynamic route. name inside the [] can be anything such as [slug], [id] etc. So ninjas/[id] denotes dynamic routes based on the id in this project example.
- use getStaticPaths to specify the dynamic pages needed to be generated at build phase

## Sources
- navbar from:
 https://flowbite.com/docs/components/navbar/#sticky-navbar
- DaisyUI for other components and themes

