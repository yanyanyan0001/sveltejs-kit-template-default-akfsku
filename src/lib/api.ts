export async function fetchResult(expression) {
  const response = await fetch('/api/calculate', {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json',
               },
                body: JSON.stringify({ expression }),
              });

  const data = await response.json();
    return data.result;
}
