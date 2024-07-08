"use server"

export async function submitContactForm(formData: FormData): Promise<any> {
    const rawFormData = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        date: formData.get('date'),
        note: formData.get('note')
    }
    
    return fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(rawFormData),
        headers: {
            'content-type': 'application/json'
        }
    }).then((data) => {
        return Promise.resolve(data.json())
    })
}