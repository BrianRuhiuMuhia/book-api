function getAllBooks(req,res)
{
    //db
    const book={id:1,title:"science"}
    return res.status(200).json([book])
}
module.exports={getAllBooks}