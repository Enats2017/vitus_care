const path = require("path");
const db = require(path.resolve(__dirname, "../config/dbsql"));

const Blog = {
  getAll: async () => {
    try {
      const [results] = await db.query("SELECT * FROM oc_blog ORDER BY id DESC");
      return results;
    } catch (err) {
      console.error("Error fetching blogs:", err.message);
      throw err;
    }
  },
};

module.exports = Blog;
