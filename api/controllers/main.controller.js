
module.exports.main = (req, res) => {
    res.status(200).render('home');
};

module.exports.error = (req, res) => {
    res.status(200).render('error');
};

module.exports.getClientsPage = async (req, res) => {
    // Make API call to GET all clients
    res.status(200).render('client/clients-all');
};

module.exports.getEmployeesPage = async (req, res) => {
    // Make API call to GET all clients
    res.status(200).render('employee/employees-all');
};

module.exports.getSettingsPage = (req, res) => {
    res.status(200).render('settings');
};

module.exports.getStatisticsPage = (req,res) => {
    res.status(200).render('statistics');
};