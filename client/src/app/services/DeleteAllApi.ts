// api.ts

const url = 'http://localhost:8080/deleteAll';

export const deleteAll = async (): Promise<void> => {
  try {
    const response =  await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    console.log(response);
  } catch (error) {
    console.error('Error:', error);
  }
};
