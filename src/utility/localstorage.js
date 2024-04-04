
const getStoredBookList = () =>{
    const storedBookList = localStorage.getItem('book-lists')
    if(storedBookList){
        return JSON.parse(storedBookList)
    }
    return [];
}


const saveBookList = id => {
    const storedBookLists = getStoredBookList();
    const exists = storedBookLists.find(bookId => bookId === id);
    if(!exists){
        storedBookLists.push(id);
        localStorage.setItem('book-lists', JSON.stringify(storedBookLists))
    }
    
}
console.log(saveBookList)

export { getStoredBookList, saveBookList };
