import type { NextApiRequest, NextApiResponse } from "next"

const MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/ixpntjm9y9awex8qoufaxflkjwlkj3yj'

export default async function handler({ body }: NextApiRequest, res: NextApiResponse) {
    try {
        await fetch(MAKE_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                timestamp:  new Date().toISOString(),
                name:       body.name      || '',
                company:    body.company   || '',
                role:       '',
                email:      body.email     || '',
                phone:      body.phone     || '',
                message:    body.message   || '',
                leadSource: 'Website Form',
                status:     'New',
            }),
        })
        res.status(200).json({ message: 'Submission received successfully' })
    } catch (err) {
        console.error('Make.com webhook error', err)
        res.status(500).json({ message: 'Failed to submit. Please try again later.' })
    }
}
