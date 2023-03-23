require('dotenv').config();
import request from "./config/common";
import  {expect} from "chai";

const TOKEN = process.env.USER_TOKEN;

describe('Negative Tests', () => {
    it('401 Authentication Failed', async() => {
        const data ={
            "name": "Somayaji",
            "email": `test-${Math.floor(Math.random() * 9999)}@email.com`,
            "gender": "female",
            "status": "inactive"
          };
          
          const res = await request
                            .post("/users")
                            .send(data);
                            expect(res.body.message).to.eq("Authentication failed")
                            expect(res.status).to.be.eq(401);
    });

    it('422 Data Wrong', async() => {
        const data ={
            "name": "Somayaji",
            "status": "inactive"
          };
          
          const res = await request
                            .post("/users")
                            .set("Authorization",`Bearer ${TOKEN}`)
                            .send(data);
                           // console.log(res)
                           // expect(res.body.message).to.eq("Authentication failed")
                           expect(res.status).to.be.eq(422);
                           res.body.forEach(element => {
                            //console.log(res.body)
                           });
    });
});