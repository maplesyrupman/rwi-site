import type { NextApiRequest, NextApiResponse } from "next"
import sayHello from "../../lib/sayHello"

export default function handler(req:NextApiRequest,res:NextApiResponse) {

    const {body} = req

    sayHello()

    res.status(200).send({message: 'success!'})
}