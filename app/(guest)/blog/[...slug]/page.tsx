import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function BlogPost({params}: {params: Promise<{slug: string}> }) {
    const {slug} = await params;

    const response = [
        {
            id:"my-first-blog",
            title: "My First Blog",
            content:"Kenji Gwapo",
            author: "Andales",
            publishedDate: "February 04, 2026",
            commentsData: [
                "Hello",
                "Great Article!",
                "Keep Going!"

            ]
        }
    ];
    if (slug[1] === "comments"){
        return(
            <div>
                <Link href="./" className="flex items-center mb-5">
                <ArrowLeft/>
                <span className="text-lg">Back</span>
                </Link>
                <h2 className="text-2xl">Blog Comments</h2>
                <ul className="mt-4 space-y-3">
                    {response[0].commentsData.map((comment) => (
                        <li key={comment} className="border p-4 bg-gray-100 rounded-md">{comment}</li>
                    )) }
                </ul>
            </div>
        )
    }

    if (response[0].id !== slug[0]) {
        return (
            <div className="flex justify-center py-20">
                <h1 className="font-bold text-2xl text-gray-500">Not Found Blog</h1>
            </div>
        )
    }

    return (
        <article className="container mx-auto px-4 space-y-6 pt-20">
            <h1 className="font-bold text-2xl">{response[0].title}</h1>
            <p>{response[0].content}</p>
            <div>
                <p>Author: {response[0].author}</p>
                <p>Published Date: {response[0].publishedDate}</p>
            </div>

            <Link href={`./${response[0].id}/comments`}>
            <Button>
                View Comments
            </Button>
            </Link>
        </article>
    )

}