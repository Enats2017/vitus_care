import React, { useEffect, useState } from 'react';
import SideMenuWidget from '../Widget/SideMenuWidget';
import RecentPostWidget from '../Widget/RecentPostWidget';
import NewsletterStyle5 from '../Widget/NewsletterStyle5';

export default function Sidebar() {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7000/api/blogs')
      .then((res) => res.json())
      .then((result) => {
        // Map API response -> then limit to 10
        const mappedPosts = (result.data || [])
          .map((post) => ({
            title: post.heading || 'Untitled',
            author: post.author || 'Unknown',
            date: new Date(post.date_publish).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
            href: `/blog/blog-details${post.id}`, // dynamic link
            image: post.image,
          }))
          .slice(0, 10); // limit to 10 posts

        setRecentPosts(mappedPosts);
      })
      .catch((err) => console.error('Error fetching blogs:', err));
  }, []);

  return (
    <div className="cs_sidebar">
      <div className="cs_sidebar_item">
        <RecentPostWidget title="Popular Articles" data={recentPosts} />
      </div>
    </div>
  );
}
