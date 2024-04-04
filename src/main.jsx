import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Root from "./components/Root/Root.jsx";
import ListedBooks from "./Pages/ListedBooks.jsx";
import PagesToRead from "./Pages/PagesToRead.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import BookDetails from "./components/Books/BookDetails.jsx";
import ReadBooks from "./Pages/ReadBooks.jsx";
import WhishListBooks from "./Pages/WhishListBooks.jsx";
import Contact from "./Pages/Contact.jsx";
import Faq from "./Pages/Faq.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>, 
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
        loader : () => fetch('../books.json'),
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>,
        loader : () => fetch('../books.json'),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader : () => fetch('../books.json'),
        children: [
          {
            index : true,
            element : <ReadBooks></ReadBooks>
          },
          {
            path : 'whishlist',
            element : <WhishListBooks></WhishListBooks>
          },
         
        ]
        
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
