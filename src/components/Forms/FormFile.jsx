"use client"
import React, { useState } from 'react';

const FormFile = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('image', image);

    fetch('http://localhost:3000/api/ola', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Resposta do servidor:', data);
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload}>Enviar Imagem</button>
    </div>
  );
}

export default FormFile;
