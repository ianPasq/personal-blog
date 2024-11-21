import { useNavigate } from 'react-router-dom'  

function BlogPost() {
  const navigate = useNavigate()
  const templatePosts = [
    {
      id: 1,
      img: " ",
      category: "Furniture",
      title: "The future of canned water",
      desc: " this is a post that has been made to uhhh ahhhhh ummm idnk bosts pos",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute rure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 2,
      img: " ",
      category: "Furniture",
      title: "The future of water",
      desc: " this is a post that has been made to uhhh ahhhhh ummm idnk bosts pos",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ]

  return (
    <section id='design' className='design'>
        <h2 className='title'>POSTS</h2>

          <div className='content-blog'>

          {templatePosts.map(post => (  
            <div className='blog-posts'>
              <img className='post-img' src={post.img} alt={post.title} />
              <h2 className='post-title'>{post.title}</h2>
              <h3 className="post-desc">{post.desc}</h3>
              
              <button className='pos-btn' onClick={()=>navigate('/posts', { state: { post }})}>
                Click
              </button>
            </div>
          ))}
          </div>
    </section>
  )
};

export default BlogPost;
