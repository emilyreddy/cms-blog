const withAuth = (req, res, next) => {
    if(!req.session.user_id) {
        console.log('no auth');
        res.redirect('/login');
    } else {
        console.log('has auth');
        next();
    }
};

module.exports = withAuth;