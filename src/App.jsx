import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
//Layouts
import HomeLayout from "./layouts/HomeLayout";
//Pages
import BooksList from "./pages/BooksList";
import AddForm from "./pages/AddForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<BooksList />}></Route>
      <Route path="new" element={<AddForm />}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
