import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SelectPackage4 from "./pages/SelectPackage4";
import Finish1 from "./pages/Finish1";
import CheckoutFree1 from "./pages/CheckoutFree1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/finish-1":
        title = "";
        metaDescription = "";
        break;
      case "/checkout-free-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SelectPackage4 />} />
      <Route path="/finish-1" element={<Finish1 />} />
      <Route path="/checkout-free-1" element={<CheckoutFree1 />} />
    </Routes>
  );
}
export default App;
