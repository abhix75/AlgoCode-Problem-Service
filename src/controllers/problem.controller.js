const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notImplemented.error");
const BadRequest = require("../errors/badRequest.error");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
  return res.json({ message: "Problem controller is up" });
}

async function addProblem(req, res, next) {
  try {
    console.log("incoming request body", req.body);
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created a new problem",
      error: {},
      data: newProblem,
    });
  } catch (error) {
    next(error);
  }
}

async function getProblem(req, res, next) {
  try {
    const response = await problemService.getProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched  the problem By ID",
      error: {},
      data: response,
    });
  } catch (error) {
    next(error);
  }
}

async function getProblems(req, res, next) {
  try {
    const response = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched all the problem",
      error: {},
      data: response,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteProblem(req, res, next) {
  try {
    const response = await problemService.deleteProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully deleted the problem",
      error: {},
      data: response,
    });
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, res, next) {
  try {
    // nothing implemented
    throw new NotImplemented("Add Problem");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};

/**
 *
 * res
 *
 * res.status -> returns the same response object with status property set
 * .json -> return the same response object which has status set but this json to be returned is also set
 *
 */
