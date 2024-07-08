export function createForm(formControls: string[]): FormData {
    const formData = new FormData();

    formControls.forEach((control: string) => {
        formData.append(control, '');
    })

    return formData;
}