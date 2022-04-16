const issue = {
    title: "LaunchX",
    repositoryNameAssociated: "AldoN",
    status: "Activo",
    numberOfComments: 100,
    labels: 199,
    forks: 300,
    author: "Aldo Valencia",
    dateCreated: "2022/04/12",
    lastUpdated: "2022/04/15",
    getTitleAndAuthor: function(){
      return 'This title repository is' + this.title + 'author is ' + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.repositoryNameAssociated} was created by ${this.author}`
    }
   }

console.log("Nombre del repo:" + issue.title)
console.log("fue creado el : " + issue.dateCreated)
console.log(issue.getGeneralInfo())