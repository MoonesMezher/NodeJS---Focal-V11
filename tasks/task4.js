// ============================================================
// JAVASCRIPT ARRAYS, OBJECTS, FETCH & REGEX — BYTEBITE
// ============================================================
//
// You are a junior developer at ByteBite, a campus food-delivery
// kitchen that takes orders from students and staff.
//
// The application contains:
// - menuItems  (dishes offered by partner restaurants)
// - orders     (student food orders)
//
// Three functions call the public fake REST API:
//   https://jsonplaceholder.typicode.com/
// Use it for GET requests only (users / todos / posts).
// Local orders link to that API via remoteUserId → users/:id
//
// Complete all 20 functions (~17 sync including 2 regex, 3 async/fetch).
//
// RULES:
// - Do not modify the original arrays unless a function asks you to.
// - Each function must return the requested result / Promise result.
// - Use array methods where appropriate.
// - Do not use external libraries.
// - Use let / const only (no var).
// - For async tasks: follow the comment for async/await vs .then().
// - For regex tasks: use RegExp / string regex methods (.test, .match, …).
// ============================================================


// ============================================================
// DATA
// ============================================================


// Menu items offered on campus
const menuItems = [
    {
        id: 1,
        name: "Falafel Wrap",
        restaurant: "Green Bowl",
        price: 8.5,
        category: "wraps",
        available: true
    },
    {
        id: 2,
        name: "Chicken Shawarma",
        restaurant: "Green Bowl",
        price: 11,
        category: "wraps",
        available: true
    },
    {
        id: 3,
        name: "Vegan Buddha Bowl",
        restaurant: "Green Bowl",
        price: 13.5,
        category: "bowls",
        available: false
    },
    {
        id: 4,
        name: "Espresso",
        restaurant: "Byte Café",
        price: 3,
        category: "drinks",
        available: true
    },
    {
        id: 5,
        name: "Iced Latte",
        restaurant: "Byte Café",
        price: 5.5,
        category: "drinks",
        available: true
    },
    {
        id: 6,
        name: "Cheese Manakish",
        restaurant: "Dorm Oven",
        price: 6,
        category: "bakery",
        available: true
    },
    {
        id: 7,
        name: "Zaatar Manakish",
        restaurant: "Dorm Oven",
        price: 5,
        category: "bakery",
        available: false
    },
    {
        id: 8,
        name: "Fruit Smoothie",
        restaurant: "Byte Café",
        price: 7,
        category: "drinks",
        available: true
    }
];


// Student orders
// remoteUserId refers to https://jsonplaceholder.typicode.com/users/:id
const orders = [
    {
        id: 501,
        customer: "Maya",
        email: "maya.hassan@campus.edu",
        restaurant: "Green Bowl",
        items: 2,
        total: 19.5,
        status: "delivered",
        notes: "Leave at the gate #lunch #campuslife",
        date: "2026-09-22",
        remoteUserId: 1
    },
    {
        id: 502,
        customer: "Omar",
        email: "omar.k@campus.edu",
        restaurant: "Byte Café",
        items: 1,
        total: 5.5,
        status: "pending",
        notes: "Extra ice please #coffee",
        date: "2026-09-23",
        remoteUserId: 2
    },
    {
        id: 503,
        customer: "Lina",
        email: "lina",
        restaurant: "Dorm Oven",
        items: 3,
        total: 17,
        status: "preparing",
        notes: "Room 214 #lateNight #study",
        date: "2026-09-23",
        remoteUserId: 3
    },
    {
        id: 504,
        customer: "Sara",
        email: "sara.n@campus.edu",
        restaurant: "Green Bowl",
        items: 1,
        total: 11,
        status: "delivered",
        notes: "No onions",
        date: "2026-09-24",
        remoteUserId: 1
    },
    {
        id: 505,
        customer: "Yousef",
        email: "yousef.ali@campus.edu",
        restaurant: "Byte Café",
        items: 2,
        total: 10.5,
        status: "out-for-delivery",
        notes: "Call on arrival #urgent",
        date: "2026-09-24",
        remoteUserId: 4
    },
    {
        id: 506,
        customer: "Nour",
        email: "nour@campus.edu",
        restaurant: "Dorm Oven",
        items: 2,
        total: 11,
        status: "delivered",
        notes: "Thanks! #bakery #campuslife",
        date: "2026-09-25",
        remoteUserId: 5
    },
    {
        id: 507,
        customer: "Ali",
        email: "ali.bad",
        restaurant: "Green Bowl",
        items: 1,
        total: 8.5,
        status: "cancelled",
        notes: "Changed my mind",
        date: "2026-09-25",
        remoteUserId: 6
    },
    {
        id: 508,
        customer: "Maya",
        email: "maya.hassan@campus.edu",
        restaurant: "Byte Café",
        items: 1,
        total: 3,
        status: "pending",
        notes: "Morning boost #coffee #examWeek",
        date: "2026-09-26",
        remoteUserId: 1
    },
    {
        id: 509,
        customer: "Hiba",
        email: "hiba.s@campus.edu",
        restaurant: "Green Bowl",
        items: 2,
        total: 22,
        status: "delivered",
        notes: "Share with lab partner #teamwork",
        date: "2026-09-26",
        remoteUserId: 7
    },
    {
        id: 510,
        customer: "Omar",
        email: "omar.k@campus.edu",
        restaurant: "Dorm Oven",
        items: 1,
        total: 6,
        status: "preparing",
        notes: "",
        date: "2026-09-27",
        remoteUserId: 2
    }
];


// Fake API base (public demo — no real backend needed)
const API_BASE = "https://jsonplaceholder.typicode.com";


// ============================================================
// TASKS — SYNC (menu + orders)
// ============================================================


// 1. Return all menu items that are currently available (available === true).
//
// Expected:
// An array of menu item objects.
function getAvailableMenuItems() {

}


// 2. Return all menu items from a given restaurant.
//
// Example:
// getMenuByRestaurant("Byte Café")
//
// Expected:
// An array of menu item objects.
function getMenuByRestaurant(restaurant) {

}


// 3. Return the menu item with the given id.
//
// Example:
// getMenuItemById(4)
//
// Expected:
// The menu item object (or undefined if not found).
function getMenuItemById(id) {

}


// 4. Return the cheapest menu item (lowest price).
//
// Expected:
// The complete menu item object.
function getCheapestMenuItem() {

}


// 5. Return all orders with status "pending".
//
// Expected:
// An array of order objects.
function getPendingOrders() {

}


// 6. Return all orders for a given restaurant.
//
// Example:
// getOrdersByRestaurant("Green Bowl")
//
// Expected:
// An array of order objects.
function getOrdersByRestaurant(restaurant) {

}


// 7. Return the order with the given id.
//
// Example:
// getOrderById(504)
//
// Expected:
// The order object (or undefined if not found).
function getOrderById(id) {

}


// 8. Return all orders with status "delivered".
//
// Expected:
// An array of order objects.
function getDeliveredOrders() {

}


// 9. Return all orders placed by a given customer name.
//
// Example:
// getOrdersByCustomer("Maya")
//
// Expected:
// An array of order objects.
function getOrdersByCustomer(customer) {

}


// 10. Return how many orders have a given status.
//
// Example:
// getOrderCountByStatus("delivered")
//
// Expected:
// A single number.
function getOrderCountByStatus(status) {

}


// 11. Return the total revenue from DELIVERED orders only
// (sum of order.total where status === "delivered").
//
// Expected:
// A single number.
function getDeliveredRevenue() {

}


// 12. Return a NEW array of orders sorted by total descending.
// Do not mutate the original orders array.
//
// Expected:
// A new sorted array of order objects.
function getOrdersSortedByTotal() {

}


// 13. Map every order to a summary object:
// { orderId, customer, restaurant, total, status }
//
// Expected:
// An array of summary objects (same length as orders).
function getOrderSummaries() {

}


// 14. Find the local order by orderId and enrich it with available
// menu items from the same restaurant (local data only — no fetch).
// Return:
// {
//   orderId,
//   customer,
//   restaurant,
//   total,
//   status,
//   availableMenu: [ ...menu items from that restaurant where available === true ]
// }
// If the order does not exist, return undefined.
//
// Example:
// enrichOrderWithRestaurantMenu(501)
//
// Expected:
// The enriched object above (or undefined).
function enrichOrderWithRestaurantMenu(orderId) {

}


// 15. Return all local orders whose remoteUserId equals the given userId.
// (Local filter only — no fetch.)
//
// Example:
// getOrdersByRemoteUserId(1)
//
// Expected:
// An array of matching order objects.
function getOrdersByRemoteUserId(userId) {

}


// ============================================================
// TASKS — REGEX
// ============================================================


// 16. Return true if email looks like a valid simple email
// (something@something.tld). Use a regular expression.
//
// Examples:
// isValidCustomerEmail("maya.hassan@campus.edu") → true
// isValidCustomerEmail("lina") → false
//
// Expected:
// A boolean.
function isValidCustomerEmail(email) {

}


// 17. From the order's notes field, extract all hashtags
// (words starting with #). Use a regular expression.
// If the order is missing or notes is empty, return [].
//
// Example:
// extractHashtagsFromNotes(501)
// → ["#lunch", "#campuslife"]
//
// Expected:
// An array of strings (hashtags including the #).
function extractHashtagsFromNotes(orderId) {

}


// ============================================================
// TASKS — ASYNC / FETCH (jsonplaceholder) — only these three
// ============================================================


// 18. Fetch one user from the fake API using async/await.
// GET: https://jsonplaceholder.typicode.com/users/:id
// (replace :id with userId)
//
// Example:
// await fetchRemoteUser(1)
//
// Expected:
// A Promise that resolves to the user JSON object.
async function fetchRemoteUser(userId) {

}


// 19. Fetch all todos for a remote user using async/await.
// GET: https://jsonplaceholder.typicode.com/todos?userId=…
// (replace … with userId)
// Return only the todos where completed === false.
//
// Example:
// await fetchOpenRemoteTodos(1)
//
// Expected:
// A Promise that resolves to an array of incomplete todo objects.
async function fetchOpenRemoteTodos(userId) {

}


// 20. Fetch a post title using ONLY .then() / .catch() (no async/await).
// GET: https://jsonplaceholder.typicode.com/posts/:id
// (replace :id with postId)
// Return a Promise that resolves to the post's title string.
//
// Example:
// fetchRemotePostTitle(1).then(title => console.log(title))
//
// Expected:
// A Promise that resolves to a string (the title).
function fetchRemotePostTitle(postId) {

}


// ============================================================
// OPTIONAL — quick manual checks (uncomment while developing)
// ============================================================
// console.log(getAvailableMenuItems());
// console.log(enrichOrderWithRestaurantMenu(501));
// console.log(getOrdersByRemoteUserId(1));
// console.log(isValidCustomerEmail("maya.hassan@campus.edu"));
// console.log(extractHashtagsFromNotes(501));
// fetchRemoteUser(1).then(u => console.log(u.name));
// fetchOpenRemoteTodos(1).then(t => console.log(t));
// fetchRemotePostTitle(1).then(t => console.log(t));
