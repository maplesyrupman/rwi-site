import IntroPage from '../components/form-components/IntroPage'

export default function Test() {

    return (
        <div>
            <IntroPage title='Test Title' paras={['This is the first paragraph describing what\'s going on with this form', 'Here\'s another paragraph talking about the form']} changePage={() => console.log('Change page!')} logo/>
        </div>
    )
}