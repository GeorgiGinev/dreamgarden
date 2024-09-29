"use server"

export async function submitContactForm(data: {
    name: string,
    phone: string,
    email: string,
    date: string,
    note: string
}): Promise<any> {
    return fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        }
    }).then((data) => {
        return Promise.resolve(data.json())
    })
}