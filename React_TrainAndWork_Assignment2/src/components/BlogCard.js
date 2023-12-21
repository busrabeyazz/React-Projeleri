import React from 'react';
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
    const renderMedia = () => {
        if (blog.image) {
            return <img src={blog.image} alt={blog.title} />;
        } else if (blog.video) {
            return (
                <iframe 
                    width="100%" 
                    height="100%"
                    src={blog.video}
                    frameBorder="0" 
                    title="video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />
            );
        } else {
            return <p>No media available</p>;
        }
    };

    return (
        <div className="col-md-3">
            <div className="single-slider-blog-post">
                <div className="single-slider-blog-post__image">
                    <Link to={`/blog/${blog.slug}`}>
                        {renderMedia()}
                    </Link>
                </div>
                <div className="single-slider-blog-post__content">
                    <h3 className="post-title">
                        <Link to={`/blog/${blog.slug}`}>
                            {blog.title}
                        </Link>
                    </h3>
                    <p className="post-excerpt">{blog.short_description}</p>
                    <Link to={`/blog/${blog.slug}`} className="blog-readmore-link">Read more
                        <i className="fa fa-caret-right"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
