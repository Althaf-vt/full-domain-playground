const renderHome = (req,res) => {
    res.send('home');
}

const verifyUser = async(req,res) => {
    res.send('verified')
}

module.exports = {renderHome,verifyUser}