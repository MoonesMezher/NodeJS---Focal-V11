// ============================================================
// JAVASCRIPT ARRAYS & OBJECTS — PAGEFLIP BOOKSTORE
// ============================================================
//
// You are a junior analyst at PageFlip, a small online bookstore.
//
// The application contains:
// - books   (catalog)
// - orders  (customer purchases)
//
// Complete all 24 functions.
//
// RULES:
// - Do not modify the original arrays.
// - Each function must return the requested result.
// - Use array methods where appropriate.
// - Do not use external libraries.
// - Pay attention to the relationships between the arrays.
// - IDs are used to connect orders to books (orders.bookId → books.id).
// ============================================================


// ============================================================
// DATA
// ============================================================


// Books (catalog)
const books = [
    {
        id: 1,
        title: "Clean Code",
        author: "Robert Martin",
        genre: "Programming",
        price: 28,
        stock: 12,
        rating: 4.7
    },
    {
        id: 2,
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Fiction",
        price: 15,
        stock: 5,
        rating: 4.5
    },
    {
        id: 3,
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Self-Help",
        price: 22,
        stock: 0,
        rating: 4.8
    },
    {
        id: 4,
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        genre: "Programming",
        price: 32,
        stock: 8,
        rating: 4.6
    },
    {
        id: 5,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        genre: "History",
        price: 25,
        stock: 3,
        rating: 4.4
    },
    {
        id: 6,
        title: "Deep Work",
        author: "Cal Newport",
        genre: "Self-Help",
        price: 20,
        stock: 7,
        rating: 4.3
    },
    {
        id: 7,
        title: "Node.js Design Patterns",
        author: "Mario Casciaro",
        genre: "Programming",
        price: 40,
        stock: 2,
        rating: 4.5
    },
    {
        id: 8,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Fiction",
        price: 12,
        stock: 15,
        rating: 4.6
    }
];


// Orders
// bookId refers to books.id
const orders = [
    {
        id: 1001,
        bookId: 1,
        customer: "Maya",
        quantity: 2,
        status: "delivered",
        date: "2026-09-10"
    },
    {
        id: 1002,
        bookId: 4,
        customer: "Omar",
        quantity: 1,
        status: "delivered",
        date: "2026-09-11"
    },
    {
        id: 1003,
        bookId: 2,
        customer: "Lina",
        quantity: 3,
        status: "pending",
        date: "2026-09-12"
    },
    {
        id: 1004,
        bookId: 1,
        customer: "Sara",
        quantity: 1,
        status: "delivered",
        date: "2026-09-12"
    },
    {
        id: 1005,
        bookId: 7,
        customer: "Maya",
        quantity: 1,
        status: "shipped",
        date: "2026-09-13"
    },
    {
        id: 1006,
        bookId: 5,
        customer: "Yousef",
        quantity: 2,
        status: "delivered",
        date: "2026-09-14"
    },
    {
        id: 1007,
        bookId: 8,
        customer: "Nour",
        quantity: 4,
        status: "delivered",
        date: "2026-09-15"
    },
    {
        id: 1008,
        bookId: 4,
        customer: "Ali",
        quantity: 2,
        status: "cancelled",
        date: "2026-09-16"
    },
    {
        id: 1009,
        bookId: 6,
        customer: "Sara",
        quantity: 1,
        status: "pending",
        date: "2026-09-17"
    },
    {
        id: 1010,
        bookId: 1,
        customer: "Omar",
        quantity: 1,
        status: "delivered",
        date: "2026-09-18"
    }
];


// ============================================================
// TASKS
// ============================================================


// 1. Return all books that are currently in stock (stock > 0).
//
// Expected:
// An array of book objects.
function getInStockBooks() {

}


// 2. Return all books in a given genre.
//
// Example:
// getBooksByGenre("Programming")
//
// Expected:
// An array of book objects.
function getBooksByGenre(genre) {

}


// 3. Return the book with the given id.
//
// Example:
// getBookById(4)
//
// Expected:
// The complete book object (or undefined if not found).
function getBookById(id) {

}


// 4. Return the book with the highest rating.
//
// Expected:
// The complete book object.
function getHighestRatedBook() {

}


// 5. Return the book with the lowest price.
//
// Expected:
// The complete book object.
function getCheapestBook() {

}


// 6. Return the average price of all books.
//
// Expected:
// A single number.
function getAverageBookPrice() {

}


// 7. Return all books priced strictly under a given amount.
//
// Example:
// getBooksPricedUnder(25)
//
// Expected:
// An array of book objects.
function getBooksPricedUnder(maxPrice) {

}


// 8. Return all orders with status "delivered".
//
// Expected:
// An array of order objects.
function getDeliveredOrders() {

}


// 9. Return all orders placed by a given customer.
//
// Example:
// getOrdersByCustomer("Maya")
//
// Expected:
// An array of order objects.
function getOrdersByCustomer(customer) {

}


// 10. Return all orders that are still pending.
//
// Expected:
// An array of order objects.
function getPendingOrders() {

}


// 11. Return the total quantity of books sold across ALL orders
// (sum of quantity on every order, any status).
//
// Expected:
// A single number.
function getTotalQuantityOrdered() {

}


// 12. Return how many orders have a given status.
//
// Example:
// getOrderCountByStatus("delivered")
//
// Expected:
// A single number.
function getOrderCountByStatus(status) {

}


// 13. Return all orders for a specific book.
//
// You must connect:
// books → orders via bookId
//
// Example:
// getOrdersForBook(1)
//
// Expected:
// An array of order objects.
function getOrdersForBook(bookId) {

}


// 14. Return the total revenue from DELIVERED orders only.
//
// Revenue for one order = book.price * order.quantity
// You must join orders to books using bookId.
// Ignore non-delivered orders.
//
// Expected:
// A single number.
function getDeliveredRevenue() {

}


// 15. Return the names of customers who ordered a specific book.
//
// Each customer should appear at most once.
//
// Example:
// getCustomersWhoOrdered(1)
//
// Expected:
// An array of customer name strings.
function getCustomersWhoOrdered(bookId) {

}


// 16. Return the titles of books that were never ordered.
//
// Expected:
// An array of book title strings.
function getBooksNeverOrdered() {

}


// 17. Return the book that was ordered the most times
// (highest total quantity across all of its orders).
//
// Expected:
// The complete book object.
function getMostOrderedBook() {

}


// 18. Return the genre that generated the highest DELIVERED revenue.
//
// You must:
// 1. Use delivered orders only.
// 2. Join each order to its book.
// 3. Sum price * quantity per genre.
//
// Expected:
// A single genre name string.
function getTopRevenueGenre() {

}


// 19. Return how much a given customer spent on DELIVERED orders.
//
// Spending = sum of (book.price * order.quantity) for that customer.
//
// Example:
// getCustomerSpending("Maya")
//
// Expected:
// A single number.
function getCustomerSpending(customer) {

}


// 20. Return all books whose stock is less than or equal to a threshold.
//
// Example:
// getLowStockBooks(3)
//
// Expected:
// An array of book objects.
function getLowStockBooks(threshold) {

}


// 21. Return an array of order summaries with this structure:
//
// [
//     {
//         orderId: 1001,
//         customer: "Maya",
//         bookTitle: "Clean Code",
//         quantity: 2,
//         total: 56,
//         status: "delivered"
//     }
// ]
//
// Include EVERY order.
// total = book.price * order.quantity
//
// Expected:
// A new array of summary objects.
function getOrderSummaries() {

}


// 22. Return the books sorted by rating from highest to lowest.
//
// IMPORTANT:
// Do not modify the original books array.
//
// Expected:
// A new sorted array of book objects.
function getBooksSortedByRating() {

}


// 23. Return the top N bestsellers by total ordered quantity
// (across all statuses).
//
// Each item in the result should look like:
// { title: "...", totalQuantity: 5 }
//
// Sorted from highest quantity to lowest.
// If two books tie, either order is fine.
//
// Example:
// getBestsellers(3)
//
// Expected:
// An array of up to N summary objects.
function getBestsellers(limit) {

}


// 24. Generate a complete bookstore report.
//
// Return an object with this structure:
//
// {
//     totalBooks: ...,
//     inStockBooks: ...,
//     totalOrders: ...,
//     deliveredOrders: ...,
//     pendingOrders: ...,
//     averageBookPrice: ...,
//     deliveredRevenue: ...,
//     highestRatedBook: ...,
//     mostOrderedBook: ...,
//     topRevenueGenre: ...,
//     lowStockCount: ...   // books with stock <= 3
// }
//
// You must calculate all values from the provided arrays.
//
// Expected:
// One complete report object.
function generateBookstoreReport() {

}


// ============================================================
// OPTIONAL TESTING
// Uncomment lines below after you implement the functions.
// ============================================================

// console.log("1)", getInStockBooks());
// console.log("2)", getBooksByGenre("Programming"));
// console.log("3)", getBookById(4));
// console.log("4)", getHighestRatedBook());
// console.log("5)", getCheapestBook());
// console.log("6)", getAverageBookPrice());
// console.log("7)", getBooksPricedUnder(25));
// console.log("8)", getDeliveredOrders());
// console.log("9)", getOrdersByCustomer("Maya"));
// console.log("10)", getPendingOrders());
// console.log("11)", getTotalQuantityOrdered());
// console.log("12)", getOrderCountByStatus("delivered"));
// console.log("13)", getOrdersForBook(1));
// console.log("14)", getDeliveredRevenue());
// console.log("15)", getCustomersWhoOrdered(1));
// console.log("16)", getBooksNeverOrdered());
// console.log("17)", getMostOrderedBook());
// console.log("18)", getTopRevenueGenre());
// console.log("19)", getCustomerSpending("Maya"));
// console.log("20)", getLowStockBooks(3));
// console.log("21)", getOrderSummaries());
// console.log("22)", getBooksSortedByRating());
// console.log("23)", getBestsellers(3));
// console.log("24)", generateBookstoreReport());
