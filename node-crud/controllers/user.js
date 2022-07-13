const userModel = require('../models/user');

exports.addUser = (req, res, next) => {

    if (!req.body.userDetails) {
        const error = new Error('User Details must be passed');
        error.statsCode = 422
        throw error;
    }

    const newUser = new userModel(req.body.userDetails);

    userModel.add(newUser, (err, result ) => {
        if (err) {
            res.json(err);
        }
        res.json({error:false,message:"Employee added successfully!",data:result});
    });
}

exports.getUser = (req, res, next) => {
    userModel.get(req.query.id, (err, result ) => {
        if (err) {
            res.json(err);
        }
        res.json({error:false,message:"Employee details fetched successfully!",data:result});
    });
}

exports.updateUser = (req, res, next) => {

    if (!req.body.userDetails) {
        const error = new Error('User Details must be passed');
        error.statsCode = 422
        throw error;
    }

    const newUser = new userModel(req.body.userDetails);
    userModel.update(req.query.id, newUser, (err, result ) => {
        if (err) {
            res.json(err);
        }
        res.json({error:false,message:"Employee updated successfully!",data:result});
    });
}

exports.deleteUser = (req, res, next) => {

    userModel.delete(req.query.id, (err, result ) => {
        if (err) {
            res.json(err);
        }
        res.json({error:false,message:"Employee deleted successfully!",data:result});
    });
}