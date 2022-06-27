
import DatePick from "../components/form-components/Date"

export default function Test() {
    function change(id: string, value: any) {
        console.log(value)
    }
    return (
        <div>
            <DatePick id='1-0' label='Date' day month year change={change} />
        </div>
    )
}