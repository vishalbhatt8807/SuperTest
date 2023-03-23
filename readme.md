SuperTest NPM Package -> IT is build on top of SUper Agent. Which basically allow to http request.
Mocha BDD framework -> Mocha js is popular js framework with lot of features like hooks, grouping, tier down, skip test , reporting and retry supporting. describe , it is example of mocha.
//Mocha framework
describe('GET /user', ()=>{
    it('response with json',()=>{
        //Supertest example
        request(app)
            .get('/user)
            .set('Accept','aaplication/json')
            .expect('Content-Type',/json/)
            .expect(200,done)
    });
});

For Assertion we use chai framework. (should, expect, assert). Just call require('chai').assert;

Reporter -> By default supert test provide spec reports. Mochaawesome Reporting tool (It shows code along with screenshot thats good part)

Installation 
Libabries/Framework:
Node js and NPM 
SuperTest
Mocha
Chai
Babel (ES 6+)
=======================================================================================================================================
. Open CMD and check node and npm is install using command node -v and npm -v to check their version.
. create new folder mkdir supertest & cd supertest .
. intialize npm project npm init -y (Generate Package.json)
. npm install --save-dev supertest mocha chai @babel/cli @babel/core @babel/node @babel/register @babel/preset-env
========================================================================================================================================
Open VS code and create .babelrc file and define
{
    "presets":["@babel/preset-env"]
}

Create .mocharc.yaml file and define
require: "@babel/register"
========================================================================================================================================
Create first test case use https://gorest.co.in/ for api.
Create test folder and under create user.js file.
Also update test value in package.json as "mocha" and test by open new terminal and write "npm test" if output is mocha and passing. than we are on right path.
=====================================================================================================================================
If getting error cannot find @babe1/plugin-transform-runtime than run npm i @babe/plugin-transform-runtime and put 
"plugins":[ ["@babel/transform-runtime", 
    { "regenerator": true}
     
    ]]
    in babelrc

=======================================================================================================================================
faker for fake data creation    
npm install faker@5.5.3 
=======================================================================================================================================
.env to pass enviornmental variable and access this we require another lib npm i dotenv (Make sure file in root path)
=======================================================================================================================================
mochawesome -> npm install --save-test mochawesome install mochawesome.
download report 2 ways.
1. npm test -- --reporter mochawesome
2. in package.json in scripts section mention "test-html": "mocha --timeout 5000 --reporter mochawesome" and execute script "npm run test-html.
=======================================================================================================================================
