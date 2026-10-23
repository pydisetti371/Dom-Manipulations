# Dom-Manipulations
Js with DOM

Live

HTMLCollection

It reflects the current DOM automatically. When you add or remove an element matching the class, its collection updates.

Before: 2 → After: 3



Snapshot

Static NodeList

querySelectorAll() captures the matching elements at the moment you call it. Adding a new element to the DOM does not update that existing NodeList.

Before: 2 → After: still 2


/*
A large e-commerce site is looking to expand into mobile phone sales. They want to add the ability to search for both phones and accessories using product search and filter features.

The requirements for this feature are:
- Implement a search bar that enables users to type a query to search for products.
- Display the search results in a list, showing the product title, price, and category.
- Implement a filter to further limit the products only from one of two specific categories (smartphones, mobile-accessories).
- Allow users to search products in both categories (with no filter selected) or with the search and filter queries (e.g., search for "iPhone" within the "smartphones" category or without any category selected).
- Show a message if no products match the search and filter criteria.

This endpoint can be used to fetch a list of products: https://dummyjson.com/products/search?limit=125&q={query}. Each product has the following structure:
