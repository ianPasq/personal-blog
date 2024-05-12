import NavBar from "./components/navbar.jsx";
import BlogPost from "./components/blogposts.jsx";
import Footer from "./components/footer.jsx";
import AuthForm from "./components/auth.jsx";

function App() {

    const postData = [
        {
          title: 'main post title',
          author: 'someone',
          postContent: "main post1 content",
          mainPost: true,
          mainPhoto:' ',
        },
        {
          title: 'filler title',
          author: 'someone',
          content: 'filler blog title',
          blogCover:' ',
        },
        {
          title: 'filler title',
          author: 'someone',
          content: 'filler blog title',
          blogCover:' ',
        }
      ]

    return (
         <>
         <NavBar />
         <BlogPost />
         <Footer />
         <AuthForm />
        </>
    
    )
}



export default App;