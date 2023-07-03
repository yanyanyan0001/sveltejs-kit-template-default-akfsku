
//this function retrieves the expression from the request body
export async function post(request) {
    const { expression } = JSON.parse(request.body);
      let result;
try {
  result = eval(expression); 
} 
catch (error) {
        result = 'Error';
      }
  return {
          body: JSON.stringify({ result }),
        };
}