
const axios = require('axios');
const request=require('request-promise')
const cheerio=require('cheerio')
const user="https://www.codechef.com/users/gulati_harsh"
users=[]
axios(user)
    .then(response => {
    const html = response.data;
    let $=cheerio.load(html)
    let h3=$('.rating-ranks').text().trim()
    let rating=$('.rating-number').text().trim()
    users[0]=h3;
    console.log(h3)
    })
.catch(console.error);
