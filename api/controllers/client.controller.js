const Client = require('../../models/Client');

module.exports.getAll = async (req, res) => {
    const query = await Client.find({}).exec();    
    query.then((clients) => {
        res.status(200).json(clients);
    }).catch(err => {
        res.status(401).json({
            'Status': 'Could not retrieve all clients',
            'Error': err
        });
    });
};

module.exports.getById = async (req, res) => {
    const query = await Client.findById({_id: req.body.id}).exec();
    query.then(client => {
        res.status(200).json(client);
    }).catch(err => {
        res.status(401).json({
            'Status': `Could not retrieve client by ${req.body.id}`,
            'Error': err
        });
    });
};

module.exports.addNew = async (req, res) => {

};

module.exports.update = async (req, res) => {

};

module.exports.remove = async (req, res) => {

};
