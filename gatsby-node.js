exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      allDuAn: allJsonFile(filter: { file_type: { eq: "ten-du-an" } }) {
        nodes {
          file_type
          file_name
        }
      }
      allCongTrinh: allJsonFile(
        filter: { file_type: { eq: "ten-cong-trinh" } }
      ) {
        nodes {
          file_type
          file_name
        }
      }
    }
  `);
  console.log("TEN BLOG:", result.data.allMdx.nodes);
  if (result.errors) {
    reporter.panic("failed to create posts", result.errors);
  }
  const blogs = result.data.allMdx.nodes;
  blogs.forEach(blog => {
    actions.createPage({
      path: `blog/${blog.frontmatter.slug}`,
      component: require.resolve("./src/templates/blog/blog.js"),
      context: {
        slug: blog.frontmatter.slug
      }
    });
  });
  //
  const tenDuAn = result.data.allDuAn.nodes;
  console.log("TEN DU AN", tenDuAn);
  tenDuAn.forEach(duAn => {
    actions.createPage({
      path: `du-an/${duAn.file_name}`,
      component: require.resolve("./src/templates/ten-du-an/ten-du-an.js"),
      context: {
        name: duAn.file_name
      }
    });
  });
  //
  const tenCongTrinh = result.data.allCongTrinh.nodes;
  console.log("TEN CONG TRINH:", tenCongTrinh);
  tenCongTrinh.forEach(congtrinh => {
    actions.createPage({
      path: `cong-trinh/${congtrinh.file_name}`,
      component: require.resolve(
        "./src/templates/ten-cong-trinh/ten-cong-trinh.js"
      ),
      context: {
        name: congtrinh.file_name
      }
    });
  });
};
