const db = require('../models/afterModels.js');

const createTableController = {};

// Initial setup - only needed if we dont set up the table ahead of time
createTableController.userInfoCreateTable = (req, res, next) => {

  const initialCreateTable = {
    text: `CREATE TABLE IF NOT EXISTS userinfo (
            _id SERIAL,
            firstName varchar(50),
            lastName varchar(50),
            username varchar(250) NOT NULL,
            email varchar(1000) NOT NULL,
            password varchar(250) NOT NULL,
            user_id UUID NOT NULL DEFAULT uuid_generate_v1(),
            PRIMARY KEY (_id),
            UNIQUE (username)
            );`,
  };

  db.query(initialCreateTable)
    .then((data) => next())
    .catch((err) => next(err));
};

//setting userID to be unique
createTableController.userInfoAddUnique = (req, res, next) => {
  const initialAddUnique = {
    text: `ALTER TABLE userinfo ADD CONSTRAINT userinfo_user_id UNIQUE (user_id);`,
  };

  db.query(initialAddUnique)
    .then((data) => next())
    .catch((err) => next(err));
};

createTableController.createBurialPlanTable = (req, res, next) => {
  const createBurialPlanTable = {
    text: `CREATE TABLE burialPlan (
            _id UUID,
            rite varchar(250),
            funeralHome varchar(250) ,
            funeralBeforeRites boolean,
            funeralLocation varchar(500),
            gravesideService boolean,
            gravesideLocation varchar(500),
            memorialService boolean,
            memorialLocation varchar(500),
            PRIMARY KEY (_id));`,
  };

  db.query(createBurialPlanTable)
    .then((data) => next())
    .catch((err) => next(err));
};


createTableController.createChecklistTable = (req, res, next)=>{
  const createChecklistTable = {
    text: `CREATE TABLE IF NOT EXISTS checklist (
            _id UUID,
            petsBool BOOLEAN,
            pets VARCHAR(1000),
            billsBool BOOLEAN,
            bills VARCHAR(1000),
            extras VARCHAR(1000),
            PRIMARY KEY (_id));`,
  };

  db.query(createChecklistTable)
    .then((data) => next())
    .catch((err) => next(err));
}


createTableController.createServiceTable = (req, res, next) => {
  const createServiceTable = {
    text: `CREATE TABLE IF NOT EXISTS service (
      name VARCHAR(250),
      guest BOOLEAN,
      prayer BOOLEAN default false,
      music
    );`,
  };

  db.query(createServiceTable)
    .then((data) => {
      next();
    })
    .catch((err) => next(err));
};

module.exports = createTableController;