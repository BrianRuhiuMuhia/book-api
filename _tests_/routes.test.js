const app=require("../app.js")
const request=require("supertest")
describe("GET all books",()=>{
    it("should get all books in the database",async ()=>{
        const response=await request(app).get("/api/books")
        expect(response.status).toBe(200)
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.body.length).toBeGreaterThan(0)
    })
})