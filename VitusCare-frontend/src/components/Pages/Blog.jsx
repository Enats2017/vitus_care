import React, { useState, useEffect } from "react";
import Section from "../Section";
import BlogSectionStyle2 from "../Section/BlogSection/BlogSectionStyle2";
import Breadcrumb from "../Breadcrumb";
import { pageTitle } from "../../helpers/PageTitle";
import axios from "axios";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:7000/api/blogs");
        const blogsArray = res.data.data;

        if (!Array.isArray(blogsArray)) {
          console.error("Unexpected API response:", res.data);
          return;
        }

        const formattedBlogs = blogsArray.map((blog) => ({
          id: blog.id,
          title: blog.heading || "Untitled Blog",
          thumbUrl: blog.image || "images/blog/default.jpg",
          date: new Date(blog.date_publish).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
          btnText: "Learn More",
          href: `/blog/blog-details${blog.id}`,
          socialShare: true,
        }));

        setBlogs(formattedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  pageTitle("Blog");

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Page numbers (max 5 at a time)
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = start + maxVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <>
      <Section topMd={170} bottomMd={96} bottomLg={70}>
        <Breadcrumb title="Psychology and Life Style" />
      </Section>

      <Section bottomMd={100} bottomLg={80} bottomXl={60}>
        <BlogSectionStyle2 data={currentBlogs} />

        {/* Pagination */}
        {totalPages > 1 && (
          <ul className="cs_pagination_box mt-10 flex justify-center items-center space-x-2">
            {/* Prev */}
            <li>
              <button
                className="cs_pagination_arrow cs_center"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <img src="images/icons/left_arrow_blue.svg" alt="Prev" />
              </button>
            </li>

            {/* Show first page + dots */}
            {generatePageNumbers()[0] > 1 && (
              <>
                <li>
                  <button
                    onClick={() => setCurrentPage(1)}
                    className="cs_pagination_item cs_center"
                  >
                    1
                  </button>
                </li>
                <li>
                  <span className="cs_pagination_item cs_center">...</span>
                </li>
              </>
            )}

            {/* Page Numbers */}
            {generatePageNumbers().map((page) => (
              <li key={page}>
                <button
                  onClick={() => setCurrentPage(page)}
                  className={`cs_pagination_item cs_center ${
                    currentPage === page ? "active" : ""
                  }`}
                >
                  {page}
                </button>
              </li>
            ))}

            {/* Show last page + dots */}
            {generatePageNumbers().slice(-1)[0] < totalPages && (
              <>
                <li>
                  <span className="cs_pagination_item cs_center">...</span>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    className="cs_pagination_item cs_center"
                  >
                    {totalPages}
                  </button>
                </li>
              </>
            )}

            {/* Next */}
            <li>
              <button
                className="cs_pagination_arrow cs_center"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                <img src="images/icons/right_arrow_blue.svg" alt="Next" />
              </button>
            </li>
          </ul>
        )}
      </Section>
    </>
  );
  // return (
  //   <Section topMd={170} bottomMd={96} bottomLg={70}>
  //     <p className="text-lg md:text-xl text-slate-600 mb-6">
  //       Blog Page

  //     </p>
  //   </Section>

  // );
}
