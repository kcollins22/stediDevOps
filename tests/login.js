const fetch = require('node-fetch');

const login = async ()=>{
    const tokenResponse = await fetch('https://dev.stedi.me/login',{
        method: 'POST',
        body:JSON.stringify({
          userName: "col16016@byui.edu",
          password:"M1ssionary!"
        })

})
};

export {login};