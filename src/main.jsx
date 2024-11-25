import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./index.css";
import HomePage from "./Routes/HomePage.jsx";
import MainPage from "./Routes/Weblog/MainPage.jsx";
import BlogLayout from "./Routes/Weblog/BlogLayout.jsx";
import BlogPage from "./Routes/Weblog/BlogPage.jsx";
import AuthorPage from "./Routes/Weblog/AuthorPage.jsx";
import CategoryPage from "./Routes/Weblog/CategoryPage.jsx";
import SelectServiceMenu from "./Components/templates/SelectServiceMenu.jsx";

export const client = new ApolloClient({
  uri: "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/cly1o521a058q07w4wsgza84t/master",
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Main Layout
    children: [
      {
        path: "/",
        element: <HomePage />,
        children: [
          {
            path: "/",
            element: <SelectServiceMenu />,
          },
        ],
      },
    ],
  },
  {
    path: "/blog",
    element: <BlogLayout />, // Blog Layout which contains Navbar and Footer
    children: [
      {
        path: "/blog",
        element: <MainPage />, // Main page of Blog which render blog cards
      },
      {
        path: "/blog/page/:page", // Pagination route for blog main page
        element: <MainPage />, // Main page but with pagination
      },
      {
        path: "article/:slug",
        element: <BlogPage />,
      },
      {
        path: "author/:author",
        element: <AuthorPage />,
      },
      {
        path: "author/:author/page/:page", // Pagination route for author page
        element: <AuthorPage />,
      },
      {
        path: "category/:category",
        element: <CategoryPage />,
      },
      {
        path: "category/:category/page/:page", // Pagination route for category page
        element: <CategoryPage />,
      },
      {
        path: "category",
        element: <Navigate to="/blog" />, // Redirect from root to /blog
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
