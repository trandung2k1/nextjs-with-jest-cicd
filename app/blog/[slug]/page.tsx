type Params = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: Params) {
    return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <>
            <h1>Slug: {params.slug}</h1>
            <p>DungTV</p>
            {/* <p>Welcome to NB</p> */}
        </>
    );
}
