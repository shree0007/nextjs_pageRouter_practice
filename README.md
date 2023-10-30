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


## Sources
- navbar from:
 https://flowbite.com/docs/components/navbar/#sticky-navbar

- Continue from: 
https://www.youtube.com/watch?v=WPdJaBFquNc&t=98s #11-dynamic routes(part 1)
