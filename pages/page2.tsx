
// getStaticProps will cause the page to pre-render on build
export async function getStaticProps() {
    const timeRightNow = Date.now();

    return {
        props: {
            header: `Time right now is ${timeRightNow}`
        },
        // The 'revalidate' setting causes the page to dynamically re-generate server-side at most once every 10 seconds
        revalidate: 10
    }
}

export default function Page2(props: any) {
    const { header } = props;

    return (
        <>
            <h1>{header}</h1>
            <p>This page uses getStaticProps with 'revalidate' (caching) specified, and will hence be generated at build time but re-generated server-side every 10 seconds.</p>
        </>
    )
}