import { useState } from 'react'
import { Container } from './style'
import WhatsAppLink from '../Whats'
import Loader from '../Loader';

const Agenda = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoad = () => {
        setIsLoading(false)
    };

    const handleError = () => {
        setIsLoading(false)
    }

    return (
        <Container>
            {isLoading && <p>{<Loader />}</p>}
            <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1decZbZXzYebBEzEXQkFVkVVkfG3T5CX-prTmZWj-M9oNVFAcCw_uoqTipVYUbsM7NR0A8FtUU?gv=true" 
                style={{ border: 0, display: isLoading ? 'none' : 'block' }} 
                width="100%" 
                height="600" 
                frameBorder="0"
                onLoad={handleLoad}
                onError={handleError}
            />
            <WhatsAppLink />
        </Container>
    )
}

export default Agenda
