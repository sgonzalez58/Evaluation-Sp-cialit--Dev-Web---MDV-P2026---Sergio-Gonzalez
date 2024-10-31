const isAdmin = (req, users) => {
    let isAdmin = false;
    if (req.session.isLoggedIn){
        isAdmin = true;
    }
    return isAdmin;
}

module.exports = { isAdmin }