const Post = require('../models/Post');

exports.read = async (req, res) => {
  try {
    const id = req.params.id;
    const posted = await Post.findOne({ _id: id }).exec();
    res.send(posted);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
};

exports.list = async (req, res) => {
  try {
    const posted = await Post.find({}).exec();
    res.send(posted);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
};

exports.create = async (req, res) => {
  try {
    const posted = await Post(req.body).save();
    res.send(posted);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await Post.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    }).exec();
    res.send(updated);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
};

exports.remove = async (req, res) => {
  try {
    const id = req.params.id;
    const removed = await Post.findOneAndDelete({ _id: id }).exec();
    res.send(removed);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
};
