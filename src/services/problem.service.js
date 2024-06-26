const sanitizeMarkedownContent = require('../utils/markdownSanitizer')

class ProblemService {

    constructor(problemRepository){
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData){
        try {
            //Sanitize the markdown for description
            problemData.description = sanitizeMarkedownContent(problemData.description);
            console.log("Problem Data ",problemData);
            const problem = await this.problemRepository.createProblem(problemData);
            
            console.log("Problem Created ",problem);
            return problem;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getAllProblems(){
        try {
            const problem = await this.problemRepository.getAllProblems();
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getProblem(problemId){
        try {
            const problem = await this.problemRepository.getProblem(problemId);
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(problemId){
        try {
            const problem = await this.problemRepository.deleteProblem(problemId);
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateProblem(problemId,updatedData){
        try {
            const problem = await this.problemRepository.updateProblem(problemId,updatedData);
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
module.exports = ProblemService;  