
// getStaticProps will cause the page to pre-render on build
export async function getServerSideProps() {
    const timeRightNow = Date.now();

    return {
        props: {
            header: `Time right now is ${timeRightNow}`
        }        
    }
}

export default function Page3(props: any) {
    const { header } = props;

    return (
        <>
            <h1>{header}</h1>
            <p>This page uses getServerSideProps and will be genereted server-side on a per request basis.</p>
        </>
    )
}