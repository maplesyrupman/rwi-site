import data from './services.json'

export function getServicePaths() {
    return data.services.map(service => {
        return {
            params: {
                service: service.path
            },
        }
    })
}

export function getServiceData(service:string) {
    const serviceData =  data.services.filter(s => {
        return s.path == service;
    } )

    return {
        serviceData
    }
}