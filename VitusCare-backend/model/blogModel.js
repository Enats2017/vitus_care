const db = require("../config/dbsql");

const Blog = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM oc_blog ORDER BY id DESC", (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  },
};

module.exports = Blog;
