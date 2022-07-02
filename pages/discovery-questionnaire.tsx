import FormPage from '../components/form-components/FormPage'
import ShortAnswer from '../components/form-components/ShortAnswer'
import styles from '../styles/utils.module.css'

import Heading from '../components/form-components/Heading'

export default function DiscoveryQuestionnaire() {
    const rawTestShortQs: any[] = [
        {
            label: 'Operating name',
            type: 'short',
            id: '0-0',
            value: ''
        }, {
            label: 'Legal Business Name',
            type: 'short',
            id: '0-1',
            value: ''
        }, {
            label: 'Year Established',
            type: 'date-my',
            id: '0-3',
            value: undefined
        }
    ]

    const testShortQs: any[] = rawTestShortQs.map((q, id) => {
        return <ShortAnswer key={id} id={q.id} label={q.label} placeholder={q.label} initValue={q.value} validation={() => console.log('validation!')} />
    })

    return (
        <div className={`${styles.container} bgWhite`}>
                <Heading pageNumber={0} />
            <FormPage questions={testShortQs} />
        </div>
    )
}