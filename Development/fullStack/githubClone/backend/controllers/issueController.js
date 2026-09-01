import mongoose from "mongoose";
import Issue from "../models/issueModel.js";

const createIssue = async (req, res) => {
  const { title, description } = req.body;
  const { id } = req.useParams; //repoistory id
  try {
    const issue = new Issue({
      title,
      description,
      repository: id,
    });
    await issue.save();
    res.status(201).json(issue);
  } catch (err) {
    console.log("Error during issue creattion : ", err.message);
    res.status(500).send("Server Error");
  }
};

const updateIssueById = async (req, res) => {
  const { title, description, status } = req.body;
  const { id } = req.useParams;
  try {
    const issue = await Issue.findById(id);
    if (!issue) return res.status(404).json({ error: "Issue not found!" });

    issue.title = title;
    issue.description = description;
    issue.status;
    await issue.save();
    res.json(issue);
  } catch (err) {
    console.log("Error during issue updation : ", err.message);
    res.status(500).send("Server Error");
  }
};

const deleteIssueById = async (req, res) => {
  const { id } = req.useParams;
  try {
    const issue = await Issue.findByIdAndDelete(id);
    if (!issue) return res.status(404).json({ error: "Issue not found!" });
    res.json({ message: "Issue deleted" });
  } catch (err) {
    console.log("Error during issue deletion : ", err.message);
    res.status(500).send("Server Error");
  }
};

const getAllIssues = async (req, res) => {
  const { id } = req.useParams; //repository id
  try {
    const issues = await Issue.find({ repository: id });
    if (!issues) return res.status(404).json({ error: "Issues not found!" });
    res.json(issues);
  } catch (err) {
    console.log("Error during issue updation : ", err.message);
    res.status(500).send("Server Error");
  }
};

const getIssueById = async (req, res) => {
  const { id } = req.useParams;
  try {
    const issue = await Issue.findById(id);
    if (!issue) return res.status(404).json({ error: "Issue not found!" });
    res.json(issue);
  } catch (err) {
    console.log("Error during issue updation : ", err.message);
    res.status(500).send("Server Error");
  }
};

export default {
  createIssue,
  updateIssueById,
  deleteIssueById,
  getAllIssues,
  getIssueById,
};
