document.addEventListener('DOMContentLoaded', async () => {
  const petInfoContainer: HTMLElement | null = document.getElementById('petInfo');
  console.log(petInfoContainer);
  try {
    const response = await fetch('http://localhost:3000/pets');
    console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: Pet[] | null = await response.json();

    console.log('Raw Data from Server:', data);

    if (data && Array.isArray(data)) {
      const petInfoHtml: string = data.map((pet) => `
        <div>
        <p><strong>Breed:</strong> ${pet.name}</p>
          <p><strong>Breed:</strong> ${pet.breed}</p>
          <p><strong>Type:</strong> ${pet.type}</p>
          <p><strong>Age:</strong> ${pet.age}</p>
          <hr />
        </div>
      `).join('');
      console.log(data);

      if (petInfoContainer) {
        petInfoContainer.innerHTML = petInfoHtml;
      }
    } else {
      console.error('Error fetching pet information: Invalid data structure');
    }
  } catch (error) {
    console.error('Error fetching pet information:', error.message);
    
    if (petInfoContainer) {
      petInfoContainer.innerHTML = `<p>Error fetching pet information: ${error.message}</p>`;
    }
  }
});

interface Pet {
  name: string;
  breed: string;
  type: string;
  age: number;
}
