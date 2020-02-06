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
    `)

    if (result.errors) {
        reporter.panic('failed to create posts', result.errors)
    }

    const blogs = result.data.allMdx.nodes;
    console.log("fetched from graphql")
    console.log(blogs)

    blogs.forEach(blog => {
        console.log(`creating page ${blog.frontmatter.title}`)
        actions.createPage({
            path: `blog/${blog.frontmatter.slug}`,
            component: require.resolve("./src/templates/blog.js"),
            context: {
                slug: blog.frontmatter.slug
            }
        })
    });
}