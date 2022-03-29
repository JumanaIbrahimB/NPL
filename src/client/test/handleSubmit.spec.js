import { handleSubmit } from '../js/formHandler'

// test if the function is exist
describe("handleSubmit", ()=>{
    test('test if the function is exist', async () => {
        expect(handleSubmit).toBeDefined()
    })
})

// test the funtion if it is null
describe("handleSubmit", ()=>{
test('test the funtion if it is null', async () => {
    expect(handleSubmit).not.toBeNull()
})
})
    
//test the function if it is function
describe("handleSubmit", ()=>{
test('test the function if it is function', async () => {
 expect(typeof handleSubmit).toBe("function");

})
})