import mongoose from "mongoose";
import Repository from "../models/repoModel.js";
import User from "../models/userModel.js";
import Issue from "../models/issueModel.js";

const createRepository = async (req, res) => {
  const { name, description, issues, content, owner, visibility } = req.body;
  try {
    if (!name) {
      return res.status(400).json({ error: "Repository name is required!" });
    }

    if (!mongoose.Types.ObjectId.isValid(owner)) {
      return res.status(400).json({ error: "Invalid Uer ID!" });
    }

    const newRepository = new Repository({
      name,
      description,
      visibility,
      owner,
      content,
      issues,
    });

    const result = await newRepository.save();
    res.status(201).json({
      message: "Repository created!",
      RepositoryId: result._id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

const getAllRepositories = async (req, res) => {
  try {
    const repositories = await Repository.find()
      .populate("owner")
      .populate("issues");
    res.json({ repositories });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

const fetchRepositoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const repository = await Repository.findById(id)
      .populate("owner")
      .populate("issues");

    if (!repository) {
      return res.status(404).json({ message: "Repository not found" });
    }

    res.json(repository);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
const fetchRepositoryByName = async (req, res) => {
  const repoName = req.params.name;

  try {
    const repositories = await Repository.findOne({ name: repoName })
      .populate("owner")
      .populate("issues");

    res.json({ repositories });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
const fetchRepositoryForCurrentUser = async (req, res) => {
  const userId = req.user;
  try {
    const repositories = await Repository.find({ owner: userId })
      .populate("owner")
      .populate("issues");

    if (!repositories || repositories.length == 0) {
      return res.status(404).json({ message: "user Repository not found" });
    }

    res.json(repository);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const updateRepositoryById = async (req, res) => {
  const { id } = req.params;
  const { content, description } = req.body;

  try {
    const repository = await Repository.findById(id);
    if (!repository) {
      return res.status(404).json({ error: "Repository not found" });
    }

    repository.content.push(content);
    repository.description = description;

    const updatedReposity = await repository.save();
    res.josn({
      message: "Repository updated succesfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
const toggleVisibilityById = async (req, res) => {
  const { id } = req.params;
  try {
    const repository = await Repository.findById(id);
    if (!repository) {
      return res.status(404).json({ error: "Repository not found" });
    }

    repository.visibility = !repository.visibility;

    const updatedRepository = await repository.save();

    res.josn({
      message: "Visiblility toggle succesfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const deleteRepositoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const repository = await Repository.findByIdAndDelete(id);
    if (!repository) {
      return res.status(404).json({ error: "Repository not found!" });
    }
    res.json({ message: "Repository updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
const repoController = {
  createRepository,
  getAllRepositories,
  fetchRepositoryByName,
  fetchRepositoryById,
  fetchRepositoryForCurrentUser,
  updateRepositoryById,
  toggleVisibilityById,
  deleteRepositoryById,
};

export default repoController;
