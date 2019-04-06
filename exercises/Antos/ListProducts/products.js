var productListing = function (loadBy) {
    this.books = [];

    function getTemplateElement() {
         return document.getElementById('item-template').innerHTML;
    };

    function getBooks(number) {
        var books = [];

        for (var i = 1; i <= number; i++) {
            books.push({
                title: 'book title #' + i,
                author: 'author ' + i,
                coverImg: 'book-cover.jpg'
            });
        }

        return books;
    };

    function generateListBooks(template, books) {
        var templatedBooks = [];
        var book;

        for (var i = 0; i < books.length; i++) {
            book = books[i];

            templatedBooks.push(
                template.replace(/{{cover}}/g, book.coverImg)
                .replace(/{{author}}/g, book.author)
                .replace(/{{title}}/g, book.title)
                    .replace(/{{bookid}}/g, 'book-' + Math.floor(Math.random()*100))
            );
        }

        return templatedBooks;
    }

    function loadBooks(amount) {
        var templateHtml = getTemplateElement();
        var books = getBooks(amount);

        var container = document.getElementById('products');
        container.innerHTML += generateListBooks(templateHtml, books);
    }

    function removeBook (bookId) {
        var book = document.querySelector('.' + bookId);

        if (book) {
            book.remove();
        }
    }

    function likeBook (bookId) {
        console.log('liked ' + bookId + '!');
    }

    // show item page
    function goToItemPage(bookId) {
        console.log('go to page for book ' + bookId);
    }

    function loadMoreOnScroll() {
        var body = document.body,
            html = document.documentElement;

        window.addEventListener('scroll', function () {
            var height = Math.max(
                body.scrollHeight,
                body.offsetHeight,
                html.clientHeight,
                html.offsetHeight,
                html.scrollHeight
            );

            if (window.innerHeight + window.scrollY > height - 200) {
                loadBooks(loadBy);
            }
        });
    };

    function getBookId (element) {
        var item = element.closest('.item');

        return item ? item.getAttribute('data-book-info') : '';
    }
    
    function init() {
        loadBooks(loadBy);
        loadMoreOnScroll();

        document.getElementById('products').addEventListener('click', function (e) {
            if (e.target.matches('.remove')) {
                removeBook(getBookId(e.target));
            }
            else if (e.target.matches('.like')) {
                likeBook(getBookId(e.target));
            }
            else {
                goToItemPage(getBookId(e.target));
            }

        });
    }

    init();
};
productListing(5);