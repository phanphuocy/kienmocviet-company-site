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
    }
  `);
  console.log(result.data.allMdx.nodes);
  if (result.errors) {
    reporter.panic("failed to create posts", result.errors);
  }
  const blogs = result.data.allMdx.nodes;
  blogs.forEach(blog => {
    actions.createPage({
      path: `blog/${blog.frontmatter.slug}`,
      component: require.resolve("./src/templates/blog.js"),
      context: {
        slug: blog.frontmatter.slug
      }
    });
  });
};
