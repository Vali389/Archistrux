import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls window to top when the route path changes */
const ScrollToTopOnRoute = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTopOnRoute;
