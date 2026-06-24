import{test , expect} from "@playwright/test"
// test 1 - finalized 
test("test 1" ,async ({page})=>{
    console.log('this is test 1 ')
})

test("test 2" ,async ({page})=>{
    console.log('this is test 2 ')
})

test.fixme("test 3" ,async ({page})=>{
    console.log('this is test 3 ')
})