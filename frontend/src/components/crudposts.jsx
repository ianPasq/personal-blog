const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('/api/posts', { title, content });
        setTitle('');
        setContent('');
      } catch (error) {
        console.error('Error creating post:', error);
      }
    };

  
    return (
      <div>
        <h2>Create Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  };
  
  const UpdatePost = ({ match }) => {
    const [post, setPost] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    useEffect(() => {
      const fetchPost = async () => {
        try {
          const response = await axios.get(`/api/posts/${match.params.id}`);
          setPost(response.data);
          setTitle(response.data.title);
          setContent(response.data.content);
        } catch (error) {
          console.error('Error fetching post:', error);
        }
      };
      fetchPost();
    }, [match.params.id]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.put(`/api/posts/${post.id}`, { title, content });
      } catch (error) {
        console.error('Error updating post:', error);
      }
    };
  
    return (
      <div>
        {post && (
          <div>
            <h2>Edit Post</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <button type="submit">Update</button>
            </form>
          </div>
        )}
      </div>
    );
  };


  const Blog = () => {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/posts">All Posts</Link>
              </li>
              <li>
                <Link to="/posts/create">Create Post</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/posts/create" component={CreatePost} />
            <Route path="/posts/:id" component={UpdatePost} />
            <Route path="/posts" component={Posts} />
          </Switch>
        </div>
      </Router>
    );
  };
  