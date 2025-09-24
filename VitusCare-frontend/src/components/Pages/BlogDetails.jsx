import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Section from "../Section";
import Breadcrumb from "../Breadcrumb";
import BannerSectionStyle9 from "../Section/BannerSection/BannerSectionStyle9";
import { Icon } from "@iconify/react";
import Spacing from "../Spacing";
import Sidebar from "../Sidebar";
import AuthorWidget from "../Widget/AuthorWidget";
import CommentsWidget from "../Widget/CommentsWidget";
import ReplyWidget from "../Widget/ReplyWidget";
import { pageTitle } from "../../helpers/PageTitle";

// libs for cleaning HTML
import DOMPurify from "dompurify";
import parse, { domToReact } from "html-react-parser";
import he from "he"; // ✅ decode like html_entity_decode()

export default function BlogDetails() {
  pageTitle("Blog Details");

  const location = useLocation();
  const [blog, setBlog] = useState(null);

  // Extract id from URL like /blog/blog-details59
  const id = location.pathname.replace("/blog/blog-details", "");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get("http://localhost:7000/api/blogs");
        const blogs = res.data.data || res.data;

        const found = blogs.find((b) => String(b.id) === String(id));
        setBlog(found || null);
      } catch (error) {
        console.error("Error fetching blog:", error.message);
      }
    };

    if (id) fetchBlog();
  }, [id]);

  if (!blog) {
    return <p className="text-center">Loading blog...</p>;
  }

  /**
   * Decode HTML entities (like PHP html_entity_decode)
   * Then sanitize & parse clean HTML
   */
  const decodedHTML = he.decode(blog.blog_content || ""); // ✅ entity decode
  const cleanHTML = DOMPurify.sanitize(decodedHTML);

  const options = {
    replace: (domNode) => {
      if (domNode.name === "div" || domNode.name === "span") {
        // Flatten <div>/<span> wrappers
        return <>{domToReact(domNode.children, options)}</>;
      }
      if (domNode.attribs && domNode.attribs.style) {
        // Remove inline styles
        delete domNode.attribs.style;
      }
    },
  };

  const parsedContent = parse(cleanHTML, options);

  return (
    <>
      <Section topMd={170} bottomMd={54} bottomLg={54}>
        <Breadcrumb title={blog.heading || "Blog Details"} />
      </Section>

      <div className="container">
        <div className="cs_blog_details_info">
          <div className="cs_blog_details_info_left">
            <div className="cs_blog_details_date">
              {new Date(blog.date_publish).toLocaleDateString()} |{" "}
              {blog.author || "Unknown"}
            </div>
          </div>
          <div className="cs_social_links_wrap">
            <h2>Share:</h2>
            <div className="cs_social_links">
              <Link to="/">
                <Icon icon="fa-brands:facebook-f" />
              </Link>
              <Link to="/">
                <Icon icon="fa-brands:linkedin-in" />
              </Link>
              <Link to="/">
                <Icon icon="fa-brands:twitter" />
              </Link>
            </div>
          </div>
        </div>

        <Spacing md="55" />

        <img
          src={blog.image}
          alt={blog.heading}
          className="w-100 cs_radius_20"
        />

        <Spacing md="90" lg="50" />
        <div className="row">
          <div className="col-lg-8">
            <div className="cs_blog_details">
              <h2>{blog.heading}</h2>

              {/* Render decoded + sanitized blog HTML */}
              <div className="prose max-w-none">{parsedContent}</div>
            </div>

            {/* <Spacing md="85" />
            
            <Spacing md="110" />
            <CommentsWidget title="Comments" />
            <Spacing md="92" />
            <ReplyWidget title="Leave a Reply" /> */}
          </div>

          <div className="col-lg-4">
            <Sidebar />
          </div>
        </div>
      </div>
{/* 
      <Spacing md="200" xl="150" lg="110" />
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle9
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
          imgUrl="/images/doctors/banner_img_3.png"
        />
      </Section> */}
    </>
  );
}
