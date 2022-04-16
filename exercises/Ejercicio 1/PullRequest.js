const PullRequest = {
    title: "Ejercio 1, actividad 3",
    branchName: "Rama 1",
    dateCreated: "2022/04/12",
    status: "Conflicto",
    author: "Aldo Valencia",
    repositoryNameAssociated: "AldoN",
    getStatus: function(){
      return 'This repository is ' + this.status + ' status'
    },
    getTitleAndAuthor: function(){
      return `This repository ${this.title} was created by ${this.author}`
    }
   }

console.log("Rama :" + PullRequest.branchName)
console.log(PullRequest.getStatus())
console.log(PullRequest.getTitleAndAuthor())