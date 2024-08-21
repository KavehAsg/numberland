import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider , Navigate  } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import "./index.css";
import HomePage from "./Routes/HomePage.jsx";
import MainPage from "./Routes/Weblog/MainPage.jsx";
import BlogLayout from "./Routes/Weblog/BlogLayout.jsx";
import BlogPage from "./Routes/Weblog/BlogPage.jsx";


export const client = new ApolloClient({
  uri: "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/cly1o521a058q07w4wsgza84t/master",
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Main Layout
    children: [
      // {
      //   path: '',
      //   element: <Navigate to="/blog" />, // Redirect from root to /blog
      // },
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/blog" ,
    element : <BlogLayout />, // Blog Layout which contains Navbar and Footer
    children : [
      {
        path : "/blog",
        element : <MainPage /> , // Main page of Blog which render blog cards
      } ,
      {
        path: "article/:slug" ,
        element : <BlogPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
