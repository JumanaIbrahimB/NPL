import {checkForName} from '../js/nameChecker'

// test if the function is exist
describe("checkForName", ()=>{
    test('It should return true', async () => {
        expect(checkForName).toBeDefined()
    })
    })

// test the function if it is function   
describe("checkForName", ()=>{ 
    test('It should be a function', async () => {
        expect(typeof checkForName).toBe("function")
    })
})