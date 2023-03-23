require('dotenv').config();
import request from "./config/common";
import { createRandomUser } from './user_helper';
import  {expect} from "chai";

const TOKEN = process.env.USER_TOKEN;
let postId ;

before(async() => { 
    postId = await createRandomUser();
});
describe('Users Posts Asynch_wait', () => {
    // it('POST /users', async() => {
    //     const data ={
    //         "name": "Somayaji",
    //         "email": `test-${Math.floor(Math.random() * 9999)}@email.com`,
    //         "gender": "female",
    //         "status": "inactive"
    //       };
    //     // return request
    //     //         .post("users")
    //     //         .set("Authorization",`Bearer ${TOKEN}`)
    //     //         .send(data).then(res =>{
    //     //             expect(res.status).to.equals(201)
    //     //             expect(res.body['status']).to.be.eq(data['status'])
    //     //             expect(res.body['email']).to.be.eq(data['email'])
    //     //             expect(res.body['name']).to.be.eq(data['name'])
    //     //             expect(res.body['gender']).to.be.eq(data['gender'])
    //     //             //Deep to test all
    //     //             expect(res.body).to.deep.include(data)
               
    //     //         })

    //     const res = await request
    //                 .post("users")
    //                 .set("Authorization",`Bearer ${TOKEN}`)
    //                 .send(data);
    //     console.log(res.body);
    //     expect(res.body).to.deep.include(data);
    //     postId = res.body['id'];
    //     console.log(postId);
    // });    

    it('GET users/:id', async() => {
        await request.get(`users/${postId}`).set("Authorization",`Bearer ${TOKEN}`);
        expect(200)
    });

});