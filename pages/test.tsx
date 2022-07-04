import Button from "../components/Button"
import Link from "../components/Button/link"
import GrowingList from "../components/form-components/GrowingList"
import ShortAnswer from "../components/form-components/ShortAnswer"

const tq = {
    label: 'Contacts',
    type: 'growing-list',
    id: '0-3',
    min: 1,
    value: [],
    fields: [
        {
            label: 'First name',
            type: 'short',
            id: '0-3-0',
            value: ''
        }, {
            label: 'Last name',
            type: 'short',
            id: '0-3-1',
            value: ''
        }, {
            label: 'Email',
            type: 'email',
            id: '0-3-2',
            value: ''
        }, {
            label: 'Phone',
            type: 'short',
            id: '0-3-3',
            value: ''
        }, {
            label: 'Position',
            type: 'short',
            id: '0-3-4',
            value: ''
        }
    ]
}

export default function Test() {
    function change(id: string, value: any) {
        console.log(value)
    }

    return (
            <div style={{'maxWidth': '500px','margin': '3rem'}}>
                {/* <ShortAnswer id='123' label='Test Question' placeholder='Testing 123' change={change} required={true} toolTip='Please specify what the answer to this question is.' /> */}
                <Link text='Learn More' href='https://rwilabs.io' linkStyle='danger' destination='internal' />
            </div>
    )
}