export async function getStaticProps() {
    const timeRightNow = Date.now();

    return {
        props: {
            header: `Time right now is ${timeRightNow}`
        },
        // Re-generate the page at most once every 10 seconds
        revalidate: 10
    }
}

export default function Page2({ header }) {
    return (
        <>
            <h1>{header}</h1>
        </>
    )
}