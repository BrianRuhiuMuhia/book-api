function getBooks(req,res)
{
    //db
    const book={id:1,title:"science"}
    return res.status(200).json([book])
}
function getBook(req,res)
{
    const book={id:1,title:"science"}
    return res.status(200).json([book])
}
function deleteBook(req,res)
{
    const book={id:1,title:"science"}
    return res.status(200).json([book])
}
function addBook(req,res)
{
    const book={id:1,title:"science"}
    return res.status(200).json([book])
}
function updateBook(req,res)
{
    const book={id:1,title:"science"}
    return res.status(200).json([book])
}
module.exports={getBooks,getBook,deleteBook,addBook,updateBook}