import axios from "axios";

export const baseUrl = 'https://realty-in-ca1.p.rapidapi.com';

export const fetchApi = async(url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'realty-in-ca1.p.rapidapi.com',
      'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY ,
    },
    
  });
  
  return data;
};