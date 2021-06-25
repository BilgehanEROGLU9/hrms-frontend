import axios from "axios"

export default class candidateService{
    getCandidates(){
        return axios.get("http://localhost:8091/api/candidates/getall")
    }
}