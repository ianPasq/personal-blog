import { useLocation } from "react-router-dom";


function Posts() {

    const location = useLocation()
    const { post } = location.state || {};
    
    return (
        <section className="posts-page">
            <div className="post-obj">
              <img className='post-main-img' src={post.img} alt={post.title} />
              <h2 className='post-intro'>{post.title}</h2>
              <h3 className="post-content">{post.content}</h3>
            </div>
        </section>
    )
}

export default Posts