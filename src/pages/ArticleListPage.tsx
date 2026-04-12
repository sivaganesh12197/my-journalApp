import ArticleList from "../components/ArticlesHome/ArticleList";
import Header from "../components/Home/Header";
import Banner from "../components/Home/Banner";
import NavBar from "../components/Home/NavBar";

export default function ArticleListPage() {
      return (
      <div>
          <Header />
          <Banner />
          <NavBar />
          <ArticleList />;
        </div>
      ) 
}
