import  {expect} from "chai";
import request from "./config/common";
const faken = require('faker');

require('dotenv').config();

const TOKEN = process.env.USER_TOKEN;
console.log(TOKEN)
export const createRandomUser = async() =>{
    const data ={
        "name": faken.name.findName(),
        "email": faken.internet.email(),
        "gender": "male",
        "status": 'Inactive'
      };
      console.log(data['name'],data['email'],data['gender'])
      console.log(`Bearer ${TOKEN}`)
    const res = await request.post('users').set("Authorization",`Bearer ${TOKEN}`).send(data)
        console.log(res)
        expect(res.status).to.equals(201)
        return res.body.id;  
      
}