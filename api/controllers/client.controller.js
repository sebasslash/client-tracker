const Client = require('../../models/Client'),
      Task   = require('../../models/Task');

module.exports.getAll = async (req, res) => {
    const query = await Client.find({}).exec();    
    query.then((clients) => {
        res.status(200).json(clients);
    }).catch(err => {
        res.status(401).json({
            Status: 'Could not retrieve all clients',
            Error: err
        });
    });
};

module.exports.getById = async (req, res) => {
    const query = await Client.findById({_id: req.params.id}).exec();
    query.then(client => {
        res.status(200).json(client);
    }).catch(err => {
        res.status(401).json({
            Status: `Could not retrieve client by ${req.body.id}`,
            Error: err
        });
    });
};

module.exports.addNew = async (req, res) => {
    const client = new Client({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        venmo: req.body.venmo,
        email: req.body.email,
        cashapp: req.body.cashapp,
        phoneNumber: req.body.phoneNumber,
        revenue: 0,
    });
    let query = await Client.create(client);
    query.then(client => {
        res.status(200).json({
            Message: `Client created successfully with id ${client._id}`
        });
    }).catch(err => {
        res.status(401).json({
            Message: 'Unable to add client',
            Error: err
        });
    });
};

module.exports.addTask = async (req, res) => {
    const task = new Task({
        title: req.body.task_title,
        desc: req.body.task_desc,
        dueDate: req.body.task_duedate,
        price: req.body.task_price,
        priority: req.body.task_priority,
        labels: req.body.labels
    });
};
module.exports.update = async (req, res) => {

};

module.exports.remove = async (req, res) => {

};
