import axios from 'axios';

// const API_URL = 'http://localhost:5000/api'; // Replace with your Flask API URL
const API_URL = 'https://ntfy.trevoroleary.com/x'

export const sendMessage = async () => {

  fetch('https://ntfy.trevoroleary.com/x',{
          method: "POST",
          body: "HUGE TEST",
          contentType: 'application/json',
          headers: {
            Authorization: "Bearer tk_632ejha524dlfcgx7dnqnxb5in4sx"
          }
        })
        // .then(response => response.json())
        .then(data => {
          console.log(data); // Handle the response data here
        })
        .catch(error => {
          console.error('Error:', error);
        });

  try {
    console.log("TESTING!!")
    const response = await axios.get(`${API_URL}`, 
        {
            headers: {
            'Authorization': 'Bearer tk_632ejha524dlfcgx7dnqnxb5in4sx'
            // Add more headers as needed
            }
        }
        )
    return response.data;
  } catch (error) {
    throw error;
  }
};