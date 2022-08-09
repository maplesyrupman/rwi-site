import type { NextApiRequest, NextApiResponse } from "next"
const nodemailer = require('nodemailer')
const welcomeTemplate = require('../../email-templates/welcome')

console.log('welcomeTemplate',welcomeTemplate)

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
            <td>
                Name:
            </td>
            <td>
                ${body.name}
            </td>
        </tr>
        <tr>
            <td>
                Email:
            </td>
            <td>
                ${body.email}
            </td>
        </tr>
        <tr>
            <td>
                Message:
            </td>
            <td>
                ${body.message}
            </td>
        </tr>
    </table>
    `
}

export default function handler({ body }:NextApiRequest, res:NextApiResponse) {
    console.log('body',body)
    const clientMailOptions = {
        from: 'admin@rwilabs.io',
        to: body.email,
        subject: 'Contact Form Submission Recieved',
        html: welcomeTemplate.default(body.name)
    }

    const adminMailOptions = {
        from: 'admin@rwilabs.io',
        to: ['william@rwilabs.io', 'samantha@rwilabs.io'],
        subject: 'Quote Request',
        html: getAdminHtml(body)
    }

    try {
        transporter.sendMail(clientMailOptions, function (err:Error, data:JSON) {
            if (err) {
                console.error('mailer', err);
            } else {
                console.log("Client email sent successfully");
            }
        });

        transporter.sendMail(adminMailOptions, function (err:Error, data:JSON) {
            if (err) {
                console.log('admin mailer', err)
            } else {
                console.log('Admin email sent successfully')
            }
        })

        res.status(200).json({ message: 'Emails sent successfully' })
    } catch (err) {
        res.status(400).json({ message: err })
        console.error(err)
    }
}