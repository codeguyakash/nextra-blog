export default {
  // footer: <p >*_*</p>,
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
  postFooter: null,
  darkMode: false,
  navs: [
    {
      url: "https://github.com/codeguyakash",
      name: "Akash",
    },
  ],
};
