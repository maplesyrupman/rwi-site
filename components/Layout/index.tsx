import Nav from "../Nav"
import Footer from "../Footer"
import React from "react"
import Head from "next/head"

export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Nav />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}