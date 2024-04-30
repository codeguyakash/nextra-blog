export default {
  footer: <a href="https://twitter.com/codeguyakash" style={{textDecoration:"none"}}>2024 © codeguyakash</a>,
  head: ({ title, meta }) => (
    <>
    {title="Akash"}
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: "Read More →",
  postFooter: true,
  darkMode: false,
  navs: [
    
  ],
};
