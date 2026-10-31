// Builds tailwind.css for the pages that still use Tailwind classes.
// Rebuild after changing classes in these pages:
//   npx tailwindcss@3.4.17 -i tailwind.input.css -o tailwind.css --minify
module.exports = {
  content: [
    "chatport.html", "chatport-thanks.html", "slashprompt.html", "slashprompt-thanks.html",
    "operator-kit.html", "legal.html", "privacy.html", "terms.html", "blog/*.html",
  ],
};
