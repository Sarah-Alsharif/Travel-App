import "babel-polyfill"


const testData = require('../js/fetchAPI')

test('this is Data test', async()=>{
    expect(testData).toBeDefined();
});


const localData = require('../js/localStorage')

test('this is localData test', async()=>{
    expect(localData).toBeDefined();
});