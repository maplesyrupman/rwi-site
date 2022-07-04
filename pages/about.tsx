import Nav from "../components/Nav"
import Hero from "../components/Hero"

import heroImage from '../public/Founders-RWI-Labs.png'

type ButtonObj = {
    text: string,
    href: string,
    linkStyle: 'default' | 'bold' | 'danger' | 'btnPrimary' | 'btnSecondary' | 'btnImportant' | 'btnDanger' | 'btnConfirm',
    destination: 'internal' | 'external'
}

type HeroContent = {
    image: any,
    direction: 'row' | 'row-reverse',
    title: string,
    para?: string,
    buttons?: ButtonObj[] 
}

export default function About() {

    let heroContent: HeroContent = {
        image: heroImage,
        direction: 'row',
        title: 'Let Us Introduce Ourselves',
        para: 'Making digital marketing our full-time jobs so you can get back to yours!',
        buttons: [
            {
                text: 'Get Started',
                href: '/contact',
                linkStyle: 'btnPrimary',
                destination: 'internal'
            },
            {
                text: 'Our Solutions',
                href: '/solutions',
                linkStyle: 'btnSecondary',
                destination: 'internal'
            }
        ]
    }

    return (
        <div>
            <Nav />
            <Hero image={heroContent.image} direction={heroContent.direction} title={heroContent.title} para={heroContent.para} buttons={heroContent.buttons} />
        </div>
    )
}