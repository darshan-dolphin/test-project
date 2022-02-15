import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Layout from "../../../components/layout";

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    // Return a list of possible value for id
    return { paths, fallback: true }
}

export async function getStaticProps(context) {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()

    return {
        props: { ninja: data }
    }
    // Fetch necessary data for the blog post using params.id
}

export default function Edit({ ninja }) {

    const fetchData = async () => {
        const res = await fetch('/api/hello')
        const data = await res.json()
        console.log("id data = > ", data);
        return true
    }

    return (
        <>
            <Layout>
                <Head>
                    <title>Edit Post</title>
                </Head>
                <h1>Edit Ninja {ninja.id}</h1>
                <p>Name : {ninja.name}</p>
                <p>Website : {ninja.website}</p>
                <h2>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </h2>
                <button onClick={fetchData}>Fetch Data</button>
                <Image
                    layout="fixed"
                    height={320} width={320}
                    src="/images/profile.jpg" alt="Your Name" />
            </Layout>
        </>
    )
}

