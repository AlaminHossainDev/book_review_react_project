
const saveWhishList = id => {
    const storedWhishLists = getStoredWhishList();
    const existsInWishList = storedWhishLists.find(bookId => bookId === id);
    
    if (!existsInWishList) {
        storedWhishLists.push(id);
        localStorage.setItem('whish-lists', JSON.stringify(storedWhishLists));
    }
}

const getStoredWhishList = () =>{
    const storedWhishList = localStorage.getItem('whish-lists')
    if(storedWhishList){
        return JSON.parse(storedWhishList)
    }
    return [];
}

export { getStoredWhishList , saveWhishList };
