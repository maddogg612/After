/** @format */

const db = require('../models/afterModels.js');

const userController = {};

userController.getAllUsers = async (req, res, next) => {
  try {
    const userQuery = 'SELECT * FROM userinfo';
    const users = await db.query(userQuery);
    res.locals.users = users;
    return next();
  } catch (error) {
    return next(error);
  }
};

userController.verifyUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userQuery = `SELECT * FROM userinfo WHERE email = ${email}`;
    const userValid = await db.query(userQuery);

    if (userValid) {
      if (userValid.password === password) {
        res.redirect('/dashboard');
      }
    } else {
      res.redirect('/signup');
    }
  } catch (error) {
    return next(error);
  }
};

userController.createUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const value = [firstName, lastName, email, password];
    // console.log('value: ', value);

    // added '' to ${email}
    const queryText = `SELECT * FROM userinfo WHERE email = '${email}'`;
    // console.log('queryText: ', queryText);

    const queryResult = await db.query(queryText);
    // console.log('queryResult: ', queryResult);
    // db.query will always return something...therefore, !userValid will never be null

    if (queryResult.rowCount === 0) {
      const addText =
        // added an 's' to value
        'INSERT INTO userinfo (firstName, lastName, email, password) values($1,$2,$3,$4)';
      await db.query(addText, value);
      res.send('Success');
      // res.redirect('/dashboard');
    } else {
      res.send('User already exists');
      // res.redirect('/login');
    }
  } catch (error) {
    return next(error);
  }
};

userController.getLoggedInUser = async (req, res, next) => {};

userController.updateUser = async (req, res, next) => {
  try {
    console.log('Hello from update user');
    console.log('Req.body', req.body.body);
    const queryText = `SELECT * FROM userinfo WHERE email = ${req.body.body.email}`;
    const updateFirstName = `ALTER USER ${firstName} RENAME TO ${req.body.body.firstName} `;
    const updateLastName = `ALTER USER ${lastName} RENAME TO ${req.body.body.lastName} `;
    const updateEmail = `ALTER USER ${email} RENAME TO ${req.body.body.email} `;

    const queryResult = await db.query(queryText);

    if (queryResult) {
      if (updateFirstName) await db.query(updateFirstName);
      if (updateFirstName) await db.query(updateFirstName);
      if (updateLastName) await db.query(updateLastName);
      if (updateEmail) await db.query(updateEmail);
      return next();
    }
  } catch (err) {
    return next(err);
  }
};

module.exports = userController;
