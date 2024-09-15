import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Inbox from "./components/Inbox";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Mail from "./components/Mail";
import SendMail from "./components/SendMail";
import Login from "./components/Login";
import Signup from "./components/SignUp";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);

function App() {
  return (
    <div className="bg-[#F6F8FC] h-screen">
      <Navbar />
      <RouterProvider router={appRouter} />
      <div className="absolute w-[30%] bottom-0 right-20 z-10">
        <SendMail />
      </div>
    </div>
  );
}

export default App;
