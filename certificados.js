async function saveCertificate() {
  
  const url = "http://ec2-15-229-35-192.sa-east-1.compute.amazonaws.com/certificates?cpf=" + document.getElementById('cpf').value;
  try {
    const response = await fetch(url, { method: 'POST' });
    if (!response.ok) {
      // @TODO: Tratar erros.
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    // @TODO: Tratar erros.
    console.error(error.message);
  }
}