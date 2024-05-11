const getCache = require("../cache/cache.js");
const cache = getCache(600000);
async function getBooks(req, res) {
  try {
    
    cache.getAll().then((data) => {
      return res.json(data);
    });
  } catch (err) {
    console.log(err);
  }
}
async function getBook(req, res) {
const {id}=req.params
cache.getOne(id).then((item)=>{
return res.json(item)
})
}
async function deleteBook(req, res) {
  const { id } = req.params;
  await cache.deleteOne(id)
  return res.status(200).json({ message: "book deleted" });
}
async function addBook(req, res) {
 const {title,id,isbn,image,author,pagecount,shortdescription}=req.body
 const book={
  title,id,isbn,image,author,pagecount,shortdescription
 }
 const response=await cache.addOne(book)
return  res.status(200).json(response)
}
async function updateBook(req, res) {
  const {title,id,isbn,image,author,pagecount,shortdescription}=req.body
 const book={
  title,id,isbn,image,author,pagecount,shortdescription
 }
 const response=await cache.updateOne(book)
  return res.status(200).json(response);
}
module.exports = { getBooks, getBook, deleteBook, addBook, updateBook };
