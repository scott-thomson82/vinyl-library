import request from 'superagent'

const apiBaseUrl = "/api/v1/records"

export function getRecords() {
    return request.get(apiBaseUrl)
    .then(res => {
        return res.body
    })

}

export function addRecord(record) {
    return request.post(apiBaseUrl)
    .send(record)
    .then(res => {
        return res.body
    })
}