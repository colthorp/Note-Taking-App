/* HOME PAGE */
exports.homepage = async (req, res) => {
    const locals = {
        title: "Notes - Home",
        description: "Notes App - Home Page",
    }
   res.render('index', {
        locals,
        layout: "../views/layouts/front-page"
});
}

/* ABOUT PAGE */
exports.about = async (req, res) => {
    const locals = {
        title: "Notes - About",
        description: "Notes App - About Page",
    }

    res.render('about', locals);
}

