


function BlogPost() {
    return (
      
      <div>
        <div className="main-div">
          <div className="scnd-div">
            <div className="trd-div">
              <article className="article">
                            <div className="timedisplay">
                                <time datetime="2023-03-16"
                                      className="time">
                                    Mar 16, 2023
                                </time>
                                <a
                                    href="#"
                                    className="">
                                    {/*props.content.department*/}
                                </a>
                            </div>
                            <div className="">
                                <h3 className="">
                                    <a href="#">
                                        <span className=""></span>
                                        {/*props.content.title*/}
                                    </a>
                                </h3>
                                <p className="">
                                    {/*props.content.info*/}
                                </p>
                            </div>
                            <div className="">
                                <div className="">
                                    <p className="">
                                        <a href="#">
                                            <span className=""></span>
                                            {/*props.content.author*/}
                                        </a>
                                    </p>
                                    <p className="">{}</p>
                                </div>
                            </div>
                </article>
            </div>

          </div>
        </div>
      </div>
    )
  }
  
  export default BlogPost