import { Routes, Route } from "react-router-dom";
import { navigation } from "../../common/nav.js";

import About from "../../pages/About/About.jsx";
import Login from "../../pages/Login/Login.jsx";
import Home from "../../pages/HomePage/HomePage.jsx";
import Logout from "../../pages/Logout/Logout.jsx";
import Comment from "../../pages/Feedback/Comment.jsx";
import Feedback from "../../pages/Feedback/Feedback.jsx";
import NotFound from "../../pages/PageNotFound/NotFound.jsx";
import ShopBasket from "../../pages/ShopBasket/ShopBasket";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path={navigation.getHomeUrl()} element={<Home />} />
        <Route path={navigation.getAboutUrl()} element={<About />} />
       
        <Route path={navigation.getFeedBackUrl()} element={<Feedback />} />
        <Route        />
        <Route path={navigation.getCommentFromUrl()} element={<Comment />} />
        

        <Route path={navigation.getLoginUrl()} element={<Login />} />
        <Route path={navigation.getLogoutUrl()} element={<Logout />} />
        <Route path={navigation.getShopBasketUrl()} element={<ShopBasket />} />
        <Route path={navigation.getCommentFromUrl()} element={<Comment />} />
        <Route path={navigation.getPageNotFoundUrl()} element={<NotFound />} />
      </Routes>
    </main>
  );
}