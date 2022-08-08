const nodemailer = require('nodemailer')

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

function getClientHtml(body) {
    return `
    <p>Hello ${body.name},</p>
    <p>Thank you for reaching out to us. One of our account managers will be reaching out to you shortly.</p>
    <p>The next step is to schedule a discovery call to discuss the scope of the project you have in mind.</p>
    <p>We are looking forward to hearing from you!</p>
    
    <p>Thank you, <br>
    The RWI Labs Team<br>
    </p>
    `
}

function getAdminHtml(body) {
    return `
    <p>Tedesco Group,</p>
    <p>You have received a new contact form submission! Congratulations, please see details below.</p>
    <table>
        <tr>
            <td>Name</td>
            <td>${body.name}</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>${body.email}</td>
        </tr>
        <tr>
            <td>Phone</td>
            <td>${body.phone}</td>
        </tr>
        <tr>
            <td>Message</td>
            <td>${body.message}</td>
        </tr>
    </table>
    `
}

export default function handler({ body }, res) {
    const clientMailOptions = {
        from: 'contact@rwilabs.io',
        to: body.email,
        subject: 'Quote Request Received',
        html: getClientHtml(body)
    }

    const adminMailOptions = {
        from: 'contact@rwilabs.io',
        to: ['william@rwilabs.io', 'samantha@rwilabs.io'],
        subject: 'Quote Request',
        html: getAdminHtml(body)
    }

    console.log('password', process.env)

    try {
        transporter.sendMail(clientMailOptions, function (err, data) {
            if (err) {
                console.error('mailer', err);
            } else {
                console.log("Client email sent successfully");
            }
        });

        transporter.sendMail(adminMailOptions, function (err, data) {
            if (err) {
                console.log('admin mailer', err)
            } else {
                console.log('Admin email sent successfully')
            }
        })

        res.status(200).json({ message: 'Emails sent successfully' })
    } catch (err) {
        res.status(400).json({ message: err })
    }
}