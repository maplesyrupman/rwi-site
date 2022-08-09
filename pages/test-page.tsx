import axios from "axios"
import Button from "../components/Button"

export default function Test() {

    function handleTest() {
        axios({
            method:'post',
            url:'/api/testing',
            data:{message: 'this is a test!'}
        })
        .then(response => console.log(response.data))
    }

    return (
        <div>
            <Button text='Hit API' type='button' btnStyle="primary" func={handleTest} />
        </div>
    )
}