const Payment = require("../model/Payment");

module.exports = {
  getAllPayment: async (req, res) => {
    try {
      const results = await Payment.get(req, res);
      res.status(200).send(results);
    } catch (error) {
      res.send(error);
    }
  },
  addNewPayment: async (req, res) => {
    try {
      const results = await Payment.add(req, res);
      res.status(201).send(results);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  updatePayment: async (req, res) => {
    try {
      const results = await Payment.update(req, res);
      res.status(201).send(results);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  deletePayment: async (req, res) => {
    try {
      const results = await Payment.remove(req, res);
      res.status(201).send(results);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
