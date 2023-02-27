'use client'

import React from 'react';

import PocketBase from 'pocketbase'
const pb = new PocketBase('http://127.0.0.1:8090');

export default function HomePage() {

    const [statusString, setStatusString] = React.useState("You are not logged in")

    React.useEffect(() => {
        if (pb.authStore.isValid) {
        setStatusString(`${pb.authStore.model!.id}`)
        }
    },[pb.authStore.isValid])


    return (
        <div>
            <h1>Test</h1>
            {`${statusString}`}
        </div>
    )
}

