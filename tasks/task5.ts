// ============================================================
// TASK 5: SHELFSTACK (TYPESCRIPT)
// ============================================================
// 1. Declare all types & interfaces.
// 2. Type all function headers (parameters & return types).
// 3. Implement all functions without mutating original data.
// ============================================================

// --- 1. TYPES & INTERFACES ---




// ============================================================
// 2. DATA
// ============================================================

export const books = [
    {
        id: 101,
        title: "Clean Architecture Principles",
        author: "Robert Vance",
        category: "architecture",
        price: 45.0,
        rating: 4.8,
        tags: ["solid", "clean code", "patterns"],
        copiesTotal: 5,
        copiesAvailable: 3,
        publishedYear: 2021,
        format: "physical"
    },
    {
        id: 102,
        title: "TypeScript Deep Dive",
        author: "Basarat Ali",
        category: "programming",
        price: 32.5,
        rating: 4.9,
        tags: ["typescript", "javascript", "types"],
        copiesTotal: 8,
        copiesAvailable: 6,
        publishedYear: 2023,
        format: "ebook"
    },
    {
        id: 103,
        title: "Kubernetes in Production",
        author: "Kelsey Hightower",
        category: "devops",
        price: 52.0,
        rating: 4.7,
        tags: ["containers", "docker", "cloud"],
        copiesTotal: 4,
        copiesAvailable: 0,
        publishedYear: 2022,
        format: "physical"
    },
    {
        id: 104,
        title: "Design Systems for Developers",
        author: "Emma Larson",
        category: "design",
        price: 38.0,
        rating: 4.5,
        tags: ["ui", "ux", "figma", "css"],
        copiesTotal: 6,
        copiesAvailable: 4,
        publishedYear: 2022,
        format: "ebook"
    },
    {
        id: 105,
        title: "Mastering Large Language Models",
        author: "Andrew Ng",
        category: "ai",
        price: 60.0,
        rating: 4.9,
        tags: ["ai", "python", "neural networks", "nlp"],
        copiesTotal: 10,
        copiesAvailable: 2,
        publishedYear: 2024,
        format: "audiobook"
    },
    {
        id: 106,
        title: "Refactoring Legacy Codebases",
        author: "Martin Fowler",
        category: "programming",
        price: 48.0,
        rating: 4.6,
        tags: ["clean code", "testing", "patterns"],
        copiesTotal: 3,
        copiesAvailable: 1,
        publishedYear: 2020,
        format: "physical"
    },
    {
        id: 107,
        title: "Docker Microservices Guide",
        author: "Nigel Poulton",
        category: "devops",
        price: 29.0,
        rating: 4.4,
        tags: ["docker", "containers", "ci/cd"],
        copiesTotal: 5,
        copiesAvailable: 0,
        publishedYear: 2023,
        format: "ebook"
    },
    {
        id: 108,
        title: "Practical System Design",
        author: "Alex Xu",
        category: "architecture",
        price: 55.0,
        rating: 4.9,
        tags: ["scalability", "databases", "patterns"],
        copiesTotal: 7,
        copiesAvailable: 5,
        publishedYear: 2022,
        format: "physical"
    },
    {
        id: 109,
        title: "Interaction Design Handbook",
        author: "Don Norman",
        category: "design",
        price: 34.0,
        rating: 4.6,
        tags: ["ux", "psychology", "usability"],
        copiesTotal: 4,
        copiesAvailable: 4,
        publishedYear: 2019,
        format: "ebook"
    },
    {
        id: 110,
        title: "Neural Networks from Scratch",
        author: "Harrison Kinsley",
        category: "ai",
        price: 49.5,
        rating: 4.7,
        tags: ["ai", "python", "math"],
        copiesTotal: 4,
        copiesAvailable: 1,
        publishedYear: 2021,
        format: "audiobook"
    }
];

export const members = [
    {
        id: 201,
        name: "Maya Hassan",
        email: "maya.hassan@dev.io",
        tier: "vip",
        balance: 145.0,
        joinedDate: "2025-03-10",
        active: true,
        interests: ["typescript", "architecture", "clean code"]
    },
    {
        id: 202,
        name: "Omar Kabbani",
        email: "omar.k@campus.edu",
        tier: "pro",
        balance: 42.5,
        joinedDate: "2025-06-15",
        active: true,
        interests: ["devops", "docker", "cloud"]
    },
    {
        id: 203,
        name: "Lina Cherif",
        email: "lina.c@designers.org",
        tier: "free",
        balance: 12.0,
        joinedDate: "2025-09-01",
        active: false,
        interests: ["ui", "ux", "css"]
    },
    {
        id: 204,
        name: "Yousef Ali",
        email: "yousef.ali@tech.net",
        tier: "vip",
        balance: 95.0,
        joinedDate: "2024-11-20",
        active: true,
        interests: ["ai", "python", "scalability"]
    },
    {
        id: 205,
        name: "Sara Nader",
        email: "sara.n@academy.edu",
        tier: "pro",
        balance: 30.0,
        joinedDate: "2025-01-18",
        active: true,
        interests: ["patterns", "typescript", "figma"]
    }
];

export const loans = [
    {
        id: 301,
        bookId: 101,
        memberId: 201,
        loanDate: "2026-09-01",
        dueDate: "2026-09-15",
        returnedDate: "2026-09-14",
        status: "returned",
        lateFee: 0
    },
    {
        id: 302,
        bookId: 103,
        memberId: 202,
        loanDate: "2026-09-10",
        dueDate: "2026-09-24",
        returnedDate: null,
        status: "overdue",
        lateFee: 15.0
    },
    {
        id: 303,
        bookId: 105,
        memberId: 204,
        loanDate: "2026-09-20",
        dueDate: "2026-10-04",
        returnedDate: null,
        status: "active",
        lateFee: 0
    },
    {
        id: 304,
        bookId: 102,
        memberId: 201,
        loanDate: "2026-09-25",
        dueDate: "2026-10-09",
        returnedDate: null,
        status: "active",
        lateFee: 0
    },
    {
        id: 305,
        bookId: 107,
        memberId: 205,
        loanDate: "2026-09-05",
        dueDate: "2026-09-19",
        returnedDate: null,
        status: "overdue",
        lateFee: 8.5
    },
    {
        id: 306,
        bookId: 104,
        memberId: 203,
        loanDate: "2026-08-15",
        dueDate: "2026-08-29",
        returnedDate: "2026-08-28",
        status: "returned",
        lateFee: 0
    }
];

export const reviews = [
    {
        id: 401,
        bookId: 102,
        memberId: 201,
        score: 5,
        comment: "The finest TypeScript guide available!",
        timestamp: "2026-09-18"
    },
    {
        id: 402,
        bookId: 101,
        memberId: 201,
        score: 5,
        comment: "Foundational architectural concepts explained with precision.",
        timestamp: "2026-09-15"
    },
    {
        id: 403,
        bookId: 103,
        memberId: 202,
        score: 4,
        comment: "Excellent production insights, requires solid background.",
        timestamp: "2026-09-22"
    },
    {
        id: 404,
        bookId: 105,
        memberId: 204,
        score: 5,
        comment: "Comprehensive coverage of modern AI transformers.",
        timestamp: "2026-09-28"
    },
    {
        id: 405,
        bookId: 104,
        memberId: 203,
        score: 4,
        comment: "Super practical bridge between UI designers and devs.",
        timestamp: "2026-08-30"
    }
];


// ============================================================
// PART 1: CATALOG INTELLIGENCE (Functions 1 - 6)
// ============================================================

// 1. Return all books in stock (copiesAvailable > 0)
export function getAvailableBooks(allBooks = books) {

}

// 2. Return all books belonging to the specified category
export function getBooksByCategory(category, allBooks = books) {

}

// 3. Return top N rated books (rating >= minRating), sorted descending
export function getTopRatedBooks(minRating, limit, allBooks = books) {

}

// 4. Return all books containing the specified tag (case-insensitive)
export function getBooksByTag(tag, allBooks = books) {

}

// 5. Compute total catalog monetary value and average price
export function calculateCatalogValue(allBooks = books) {

}

// 6. Find a book by id (returns Book or undefined)
export function findBookById(id, allBooks = books) {

}


// ============================================================
// PART 2: MEMBER ANALYTICS (Functions 7 - 12)
// ============================================================

// 7. Return active members by tier
export function getActiveMembersByTier(tier, allMembers = members) {

}

// 8. Return total balance of active VIP members
export function getVIPMembersTotalBalance(allMembers = members) {

}

// 9. Find member by email (case-insensitive, trimmed)
export function findMemberByEmail(email, allMembers = members) {

}

// 10. Return members with given interest
export function getMembersWithInterest(interest, allMembers = members) {

}

// 11. Group members by balance: low (<25), mid (25..75), high (>=75)
export function categorizeMembersByBalance(allMembers = members) {

}

// 12. Calculate member tenure in days relative to date
export function getMemberTenureDays(memberId, relativeToDate, allMembers = members) {

}


// ============================================================
// PART 3: LOAN TRACKING (Functions 13 - 18)
// ============================================================

// 13. Return all active loans (status === "active")
export function getActiveLoans(allLoans = loans) {

}

// 14. Return overdue loans relative to currentDate
export function getOverdueLoans(currentDate, allLoans = loans) {

}

// 15. Return total late fees on overdue loans
export function getTotalOutstandingLateFees(allLoans = loans) {

}

// 16. Return full loan history for memberId
export function getLoansByMember(memberId, allLoans = loans) {

}

// 17. Return most borrowed book IDs with count (sliced to limit)
export function getMostBorrowedBookIds(limit, allLoans = loans) {

}

// 18. Calculate total unpaid late fees for memberId
export function calculateMemberFine(memberId, allLoans = loans) {

}


// ============================================================
// PART 4: RELATIONAL JOINS (Functions 19 - 24)
// ============================================================

// 19. Join loan with its full Book and Member objects
export function enrichLoanDetails(loanId, allLoans = loans, allBooks = books, allMembers = members) {

}

// 20. Summary of active borrows for member, flagging overdue vs currentDate
export function getMemberActiveBorrowsSummary(memberId, currentDate, allLoans = loans, allBooks = books) {

}

// 21. Aggregate review statistics for a book (count, average, reviews)
export function getBookReviewsSummary(bookId, allReviews = reviews) {

}

// 22. Recommend unborrowed books matching member interests, sorted by rating
export function getPersonalizedRecommendations(memberId, allMembers = members, allBooks = books, allLoans = loans) {

}

// 23. Generate catalog inventory report
export function generateInventoryReport(allBooks = books) {

}

// 24. Paginate books array (1-indexed page)
export function paginateBooks(allBooks, page, pageSize) {

}


// ============================================================
// PART 5: ADVANCED LOGIC & SEARCH (Functions 25 - 30)
// ============================================================

// 25. Multi-criteria sort: rating desc -> price asc -> title asc
export function sortBooksMultiCriteria(allBooks = books) {

}

// 26. Count book titles grouped by format and category
export function groupBooksByFormatAndCategory(allBooks = books) {

}

// 27. Find top reviewers ranked by review count, with avg rating given
export function findTopReviewers(limit, allReviews = reviews, allMembers = members) {

}

// 28. Validate and process book checkout
export function processBookCheckout(bookId, memberId, daysToReturn, todayDate, allBooks = books, allMembers = members) {

}

// 29. Calculate statistics for every category
export function calculateCategoryStats(allBooks = books, allLoans = loans) {

}

// 30. Weighted relevance search (title +3, author +2, tags +1)
export function searchCatalogWeighted(query, allBooks = books) {

}
