import request from "./config/common";
import  {expect} from "chai";
require('dotenv').config();

const TOKEN = process.env.USER_TOKEN;

xdescribe('DELETE Method', () => {
    it('DELETE users/:id', () => {
        return request
        .delete("users/316205")
        .set("Authorization",`Bearer ${TOKEN}`)
        .then(res =>{
            expect(res.body).to.be.empty;
        });
    });
});