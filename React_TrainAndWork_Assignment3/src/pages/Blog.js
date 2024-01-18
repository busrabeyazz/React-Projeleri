import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../Control/BlogSlice";

function Blog() {
  const dispatch=useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);
  const selectedCategory=useSelector((state) => state.blogs.selectedCategory);
  var filteredBlogs=[];
  console.log(blogs);
  if(selectedCategory==''){
    filteredBlogs=blogs;
    
  }      
  else{
    filteredBlogs=blogs.filter(p=>p.category==selectedCategory);
  }

  const assignCategory=(categoryName)=>{
      dispatch(setCategory(categoryName));
  }


    return (
      <div>
<section className="mt-50 mb-50">
  <div className="container custom">
    <div className="row">
      <div className="col-lg-9">
        <div className="single-header mb-50">
          <h1 className="font-xxl text-brand">Our Blog</h1>
          <div className="entry-meta meta-1 font-xs mt-15 mb-15">
            <span className="post-by">32 Sub Categories</span>
            <span className="post-on has-dot">1020k Article</span>
            <span className="time-reading has-dot">480 Authors</span>
            <span className="hit-count  has-dot">29M Views</span>
          </div>
        </div>
        <div className="loop-grid loop-list pr-30">
        {filteredBlogs &&
          filteredBlogs.map((blog) => (
          <article className="wow fadeIn animated hover-up mb-30"key={blog.id}>
            <div className="post-thumb" style={{backgroundImage: 'url(assets/imgs/blog/blog-2.jpg)'}}>
              <div className="entry-meta">
                <a className="entry-meta meta-2" href="blog-category-grid.html">{blog.category}</a>
              </div>
            </div>
            <div className="entry-content-2">
              <h3 className="post-title mb-15">
                <a href="blog-post-right.html">{blog.title}</a></h3>
              <p className="post-exerpt mb-30">{blog.content}</p>
              <div className="entry-meta meta-1 font-xs color-grey mt-10 pb-10">
                <div>
                  <span className="post-on"> <i className="fi-rs-clock" />{blog.date}</span>
                  <span className="hit-count has-dot">{blog.views}</span>
                </div>
                <a href={blog.image} className="text-brand">Read more <i className="fi-rs-arrow-right" /></a>
              </div>
            </div>
          </article> ))}
        </div>
      </div>
      <div className="col-lg-3 primary-sidebar sticky-sidebar">
        <div className="widget-area">
          <div className="sidebar-widget widget_search mb-50">
            <div className="search-form">
              <form action="#">
                <input type="text" placeholder="Search…" />
                <button type="submit"> <i className="fi-rs-search" /> </button>
              </form>
            </div>
          </div>
          {/*Widget categories*/}
          <div className="sidebar-widget widget_categories mb-40">
            <div className="widget-header position-relative mb-20 pb-10">
              <h5 className="widget-title">Categories</h5>
            </div>
            <div className="post-block-list post-module-1 post-module-5">
              <ul>
                <li className="cat-item cat-item-2"><a href="#" onClick={()=>assignCategory("Beauty")}>Beauty</a> (3)</li>
                <li className="cat-item cat-item-3"><a href="#" onClick={()=>assignCategory("Book")}>Book</a> (6)</li>
                <li className="cat-item cat-item-4"><a href="#" onClick={()=>assignCategory("Design")}>Design</a> (4)</li>
                <li className="cat-item cat-item-5"><a href="#" onClick={()=>assignCategory("Fashion")}>Fashion</a> (3)</li>
                <li className="cat-item cat-item-6"><a href="#" onClick={()=>assignCategory("Lifestyle")}>Lifestyle</a> (6)</li>
                <li className="cat-item cat-item-7"><a href="#" onClick={()=>assignCategory("Travel")}>Travel</a> (2)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      </div>
    )
  }
export default Blog;