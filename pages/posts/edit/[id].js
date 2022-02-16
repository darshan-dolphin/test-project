import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Layout from "../../../components/layout";

export async function getServerSideProps(context) {
    const id = context.params.id
    // const res = await fetch('/api/ninja/user', {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ id: id.toString() })
    // })
    // const data = await res.json()
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await response.json()

    return {
        props: { ninja: data }
    }
    // Fetch necessary data for the blog post using params.id
}

export default function Edit({ ninja }) {

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
                <Image
                    layout="fixed"
                    height={320} width={320}
                    src="/images/profile.jpg" alt="Your Name" />
            </Layout>
        </>
    )
}

