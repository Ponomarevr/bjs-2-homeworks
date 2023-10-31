// Задача № 1 
//базовый класс PrintEditionItem
class PrintEditionItem {
   constructor(name, releaseDate, pagesCount, state = 100, type = null) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = state;
      this.type = type;
   }
   //метод fix(), увеличивающий state в полтора раза.
   fix() {
      this.state = this.state * 1.5;
   }

   get state() {
      return this._state;
   }

   set state(newState) {
      if (newState < 0) {
         this._state = 0;
      } else if (newState > 100) {
         this._state = 100;
      } else {
         this._state = newState;
      }
   }
}

class Magazine extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount, state = 100, type = "magazine") {
      super(name, releaseDate, pagesCount, state, type);
   }
}

class Book extends PrintEditionItem {
   constructor(author, name, releaseDate, pagesCount, state = 100, type = "book") {
      super(name, releaseDate, pagesCount, state, type);
      this.author = author;
   }
}

class NovelBook extends Book {
   constructor(author, name, releaseDate, pagesCount, state = 100, type = "novel") {
      super(author, name, releaseDate, pagesCount, state, type);
   }
}

class FantasticBook extends Book {
   constructor(author, name, releaseDate, pagesCount, state = 100, type = "fantastic") {
      super(author, name, releaseDate, pagesCount, state, type);
   }
}

class DetectiveBook extends Book {
   constructor(author, name, releaseDate, pagesCount, state = 100, type = "detective") {
      super(author, name, releaseDate, pagesCount, state, type);
   }
}

//Задача №2

class Library {
   constructor(name = "", books = []) {
      this.name = name;
      this.books = books;
   }
   //метод addBook(book), который в качестве аргумента будет принимать объект
   addBook(book) {
      if (book.state > 30) {
         this.books.push(book);
      }
   }

   findBookBy(type, value) {
      for (let book of this.books) {
         if (book[type] === value) {
            return book;
         }
      }
      return null;
   }

   giveBookByName(bookName) {
      for (let book of this.books) {
         if (book.name === bookName) {
            const index = this.books.indexOf(book);
            this.books.splice(index, 1);
            return book;
         }
      }
      return null;
   }
}
