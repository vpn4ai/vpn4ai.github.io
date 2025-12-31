module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addFilter("absoluteUrl", function (path, siteUrl) {
    const base = (siteUrl || "").replace(/\/$/, "");
    const p = (path || "").startsWith("/") ? path : `/${path}`;
    return `${base}${p}`;
  });

  eleventyConfig.addFilter("stripLangPrefix", function (pathname) {
    const p = pathname || "/";
    if (p === "/en" || p === "/en/") return "/";
    if (p.startsWith("/en/")) return p.slice(3);
    return p;
  });

  eleventyConfig.addFilter("withLangPrefix", function (pathname, lang) {
    const p = pathname || "/";
    const base = p.startsWith("/") ? p : `/${p}`;
    if (lang === "en") return `/en${base === "/" ? "/" : base}`;
    return base;
  });

  eleventyConfig.addFilter("dateIso", function (value) {
    if (!value) return "";
    const d = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(d.getTime())) return "";
    return d.toISOString().slice(0, 10);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
    templateFormats: ["html", "njk", "txt", "xml"]
  };
};
