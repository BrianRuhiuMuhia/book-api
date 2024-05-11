const {db}=require("../db/db.js")

class Cache{
    constructor(time)
    {
        this.data=[];
        this.time=time;
        setInterval(async ()=>{
            await this.delete()
            await this.populateCache()
        },time)
    }
    async populateCache()
    {
        try{
            const result=await db.query("select * from books")
            this.data=result.rows
            return this.data
           }
           catch(err)
           {
            console.log(err)
           }
    }
  async getAll()
    {
        if(this.data.length<=0)
        {
          await this.populateCache()
          return this.data
        }
            return this.data
        
     
           
    }
    async getOne(id)
    {
if(this.data.length<=0)
    {
       await this.populateCache()
    }
    const book=this.data.find((element)=>{
    return element.id===parseInt(id)
 })
 if(book)
{
    return book
}
else{
    return {"message":"no book with id found"}
}

}

    async delete()
    {
        this.data=[]
    }
    async deleteOne(id)
    {
        try{
await db.query("delete from books where id=$1",[id])
        }
        catch(err)
        {
            console.log(err)
        }
        await this.populateCache()
    }
    async updateOne(book)
    {
const {id}=book
try{
const outdatedBook=this.getOne(id)
outdatedBook=book
await db.query("update books set title=$1,isbn=$2,page-count=$3,image=$4,author=$5,short-description=$6",[book.title,book.isbn,book.pagecount,book.image,book.author,book.shortdescription])
return {"message":`book id ${id} updated`}
}
catch(err)
{
    console.log(err)
    return {"message":`book id ${id} not updated`}
}

    }
    addOne(book)
    {
        try{
db.query("insert into books(id,title,isbn,page-count,image,short-description,author)",[book.id,book.title,book.isbn,book.pagecount,book.image,book.shortdescription,book.author])
this.data.push(book)
        }
        catch(err)
        {
            console.log(err)
        }
        return book
    }
}
function getCache(data,time)
{
let cache=undefined
if(cache===undefined)
{
    cache=new Cache(data,time)
   
    return cache
}
else{
    return cache
}
}
module.exports=getCache