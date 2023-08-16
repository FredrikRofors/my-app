
// getStaticProps will cause the page to pre-render on build
export async function getStaticProps() {
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
        </>
    )
}