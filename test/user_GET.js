import request from "./config/common";
import  {expect} from "chai";
require('dotenv').config();

const TOKEN = process.env.USER_TOKEN;
   
describe('Users', () => {
    
    //This is first way using done will tell to mocha to execute till done() otherwise it would be skip step.
    // it('GET /users', (done) => {
    //      request
    //         .get('users?access-token='+TOKEN).end((err,res) =>{
    //             console.log(res.body)
    //            expect(res.body.data).to.be.not.null;
    //            done();
    //         });
            
    // });
    //This is another way - return promise and remove err para.
    it('GET /users', () => {
       return request.get(`users?access-token=${TOKEN}`).then((res) =>{
              expect(res.body).to.be.not.null;
           });
        });
    //Path parameter
    it('GET /users/:id', () => {
        return request.get(`users/314405?access-token=${TOKEN}&page=1`).then((res) =>{
              //  console.log(res.body['id'])
              expect(res.body['id']).to.be.eq(314405)
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