import fetch from 'node-fetch';

const login = async ()=>{
    const tokenResponse = await fetch('https://dev.stedi.kevincollins.cit262.com/login',{
        method: 'POST',
        body:JSON.stringify({
          userName: 'kecollins4@yahoo.com',
          password:'M1ssionary!'
        })

})
  return tokenResponse;
};

export default login;