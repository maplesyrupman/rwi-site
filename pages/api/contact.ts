import type { NextApiRequest, NextApiResponse } from "next"
const nodemailer = require('nodemailer')
const welcomeTemplate = require('../../email-templates/welcome')


const transporter = nodemailer.createTransport({
    // host: "smtp.gmail.com",
    // port: 587,
    // secure: false,
    service: 'gmail',
    auth: {
        user: 'admin@rwilabs.io',
        pass: process.env.PASSWORD,
    },
});

function getAdminHtml(body:any):string {
    return `
    <p>Alrighty Guys,</p>
    <p>You have received a new contact form submission! Congratulations, please see details below.</p>
    <table>
        <tr>
            <td>Name:</td>
            <td>${body.name}</td>
        </tr>
        ${body.company ? `<tr><td>Company:</td><td>${body.company}</td></tr>` : ''}
        <tr>
            <td>Email:</td>
            <td>${body.email || '—'}</td>
        </tr>
        <tr>
            <td>Phone:</td>
            <td>${body.phone || '—'}</td>
        </tr>
        <tr>
            <td>Message:</td>
            <td>${body.message}</td>
        </tr>
    </table>
    `
}

export default async function handler({ body }:NextApiRequest, res:NextApiResponse) {
    const clientMailOptions = {
        from: 'admin@rwilabs.io',
        to: body.email,
        subject: 'Contact Form Submission Received',
        html: welcomeTemplate.default(body.name)
    }

    const adminMailOptions = {
        from: 'admin@rwilabs.io',
        to: ['william@rwilabs.io', 'samantha@rwilabs.io'],
        subject: 'Quote Request',
        html: getAdminHtml(body)
    }

    try {
        await transporter.sendMail(clientMailOptions)
        await transporter.sendMail(adminMailOptions)
        res.status(200).json({ message: 'Emails sent successfully' })
    } catch (err) {
        console.error('sendMail error', err)
        res.status(500).json({ message: 'Failed to send email. Please try again later.' })
    }
}