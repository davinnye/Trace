async function saveCertificate (cpf) {
    const url = 'http://localhost:8080/certificates';

    const data = {
        value: cpf
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'string': 'cpf',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Success:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}