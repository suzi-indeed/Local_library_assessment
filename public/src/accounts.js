function findAccountById(accounts, id) {
  // Hint: You can use the [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method here. 
  let result = accounts.find(({ id: accountId }) => accountId === id);
  return result;
}

function sortAccountsByLastName(accounts) {
  // Hint: You can use the [`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method here. 
  accounts.sort((a, b) => {
    let first = a.name.last.toLowerCase();
    let second = b.name.last.toLowerCase();
    return first < second ? -1 : 1;
  })
  return accounts;
}

function getAccountFullNames(accounts) {
  // Hint: You can use the [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method here.
  let fullNames = accounts.map(({name:{first},name:{last}})=>first+" "+last);
  return fullNames;
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
