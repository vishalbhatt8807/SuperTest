import request from "./config/common";
import  {expect} from "chai";
require('dotenv').config();

const TOKEN = process.env.USER_TOKEN;
   
describe('Users', () => {
    let userId; 
    describe('POST', () => {
        it('POST /users', () => {
            // generate random number `test-${Math.floor(Math.random() * 9999)}@email.com`
            const data ={
                "name": "Somayaji",
                "email": `test-${Math.floor(Math.random() * 9999)}@email.com`,
                "gender": "female",
                "status": "inactive"
              };
            return request.post('users').set("Authorization",`Bearer ${TOKEN}`).send(data).then(res =>{
                console.log(res.body['email'])
                expect(res.status).to.equals(201)
                expect(res.body['status']).to.be.eq(data['status'])
                expect(res.body['email']).to.be.eq(data['email'])
                expect(res.body['name']).to.be.eq(data['name'])
                expect(res.body['gender']).to.be.eq(data['gender'])
                expect(res.body).to.deep.include(data)
                userId = res.body['id']
                console.log(userId)
            });
        });    
    });

    describe('GET', () => {
        it('GET /users', () => {
            return request.get(`users?access-token=${TOKEN}`).then((res) =>{
                   expect(res.body).to.be.not.null;
                });
             });
         //Path parameter
         it('GET /users/:id', () => {
             return request.get(`users/${userId}?access-token=${TOKEN}&page=1`).then((res) =>{
                   //  console.log(res.body['id'])
                   expect(String(res.body['id'])).to.be.eq(`${userId}`)
                 });   
         });
         //Query Parameter
         it('GET /users/ with query parameters', () => {
             return request.get(`users/?access-token=${TOKEN}&page=5&gender=female&status=active`).then((res) =>{
             //      console.log(res.body)
                   expect(res.body).to.not.be.null;
                   res.body.forEach(data => {
               //      console.log(data)
                     expect(data.gender).to.be.eq('female');
                     expect(data.status).to.be.eq('active')
                     
                   });
                 });   
        });     
    });

    describe('PUT ', () => {
  
        it('PUT  users/:id', () => {
            const data = {
                "name": `Luccy ${Math.floor(Math.random() * 9999)}`,
                "status":"inactive"
            }
            return request.put(`users/${userId}`).set("Authorization",`Bearer ${TOKEN}`).send(data).then(res =>{
                console.log(res.body);
                expect(res.body['name']).to.eq(data['name']);
                
                expect(res.body['status']).to.eq(data['status']);
                expect(res.body).to.deep.include(data)
                expect(res.status).to.be.eq(200)
            });
        });
    });

    describe('DELETE Method', () => {
        it('DELETE users/:id', () => {
            return request
            .delete(`users/${userId}`)
            .set("Authorization",`Bearer ${TOKEN}`)
            .then(res =>{
                expect(res.body).to.be.empty;
            });
        });
    });
   
});