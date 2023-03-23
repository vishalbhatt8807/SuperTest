require('dotenv').config();
import request from "./config/common";
import  {expect} from "chai";
import { createRandomUser } from "./user_helper";

const TOKEN = process.env.USER_TOKEN;
const userId = createRandomUser();
xdescribe('PUT ', () => {
  
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