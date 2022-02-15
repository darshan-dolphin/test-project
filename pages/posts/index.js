import Link from "next/link";
import Layout from "../../components/layout";

export default function Post() {
    return (
        <Layout>
            <Link href="/posts/first-post">
                <a>First Post</a>
            </Link>
            <Link href="/posts/edit/1">
                <a>Edit Post</a>
            </Link>
            <Link href="/posts/edit">
                <a>Edit Index</a>
            </Link>
        </Layout>
    )
}