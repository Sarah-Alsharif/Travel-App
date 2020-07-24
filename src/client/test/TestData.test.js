import "babel-polyfill"

/* test client*/
const testData = require('../js/fetchAPI')

test('this is Data test', async()=>{
    expect(testData).toBeDefined();
});


const localData = require('../js/localStorage')

test('this is localData test', async()=>{
    expect(localData).toBeDefined();
});


/* trst the server */
const app = require('../../server/server')

test('test the status number', async()=>{

    try{
        const data = await req(app).get('/test')
        expect(data.statusCode).toEqual(200);
    }catch(error){
        console.log('error')
    }
});


