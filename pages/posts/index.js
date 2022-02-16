import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Layout from "../../components/layout";

export default function Post() {

    const [users, setUsers] = useState([])

    const getUsers = useCallback(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        setUsers(data)
    }, [users])

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <Layout>
            <Link href="/posts/first-post">
                <a>First Post</a>
            </Link>
            <hr align="left" width="300px;" />
            <br />

            <Link href="/posts/edit">
                <a>Edit Index</a>
            </Link>
            <hr align="left" width="300px;" />
            <br />
            <br />
            <br />

            {users.map(ninja => {
                return <>
                    <Link href={`/posts/edit/${ninja.id}`}>
                        <a>Edit Post {ninja.id}</a>
                    </Link>
                    <hr align="left" width="300px;" />
                    <br />
                </>
            })}
        </Layout >
    )
}