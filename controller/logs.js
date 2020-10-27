const Log = require("../models/Log");

module.exports = {
  addLog: async (req, res) => {
    const newLog = new Log({
      text: req.body.text,
    });
    newLog.save().then((log) => res.json(log));
  },

  getLogs: async (req, res) => {
    Log.find()
      .limit(50)
      .sort({ date: -1 })
      .then((logs) => res.json(logs))
      .catch((err) => res.send(err));
  },
};
