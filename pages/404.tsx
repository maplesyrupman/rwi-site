import Link from "../components/Button/link";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Image from "next/image";

import graphic from "../public/404-page-graphic.png"

export default function NotFound() {
    return (
        <div>
            <Nav/>
            <section className='sectionLG contentMD flexColumn alignCenter gapMD'>
                <Image src={graphic} alt='Graphic showing a screen with a 404 error message' height='400' width='600' />
                <h4 className='txtBlue txtCenter'>
                    Oops! Something's not right. This page either doesn't exist or was taken down.
                </h4>
                <Link 
                text='Back Home'
                href='/'
                linkStyle='btnImportant'
                destination='internal'
                />
            </section>
            <Footer/>
        </div>
    )
}