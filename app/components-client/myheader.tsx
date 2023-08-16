'use client'

interface Props {
    headerText: string;
}

export default function MyHeader({ headerText } : Props) {
    return (
        <>
            <h1>{headerText}</h1>
        </>
    )
}