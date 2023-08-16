'use client'

interface Props {
    headerText: string;
}

export default function MyHeader(props: Props) {
    const { headerText } = props;

    return (
        <>
            <h1>{headerText}</h1>
        </>
    )
}