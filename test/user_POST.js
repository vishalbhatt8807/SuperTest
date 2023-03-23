require('dotenv').config();
import request from "./config/common";
import  {expect} from "chai";

const TOKEN = process.env.USER_TOKEN;

   
describe('POST Method', () => {
    
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
            //Deep to test all
            expect(res.body).to.deep.include(data)
        });
            
        
    });
    
});