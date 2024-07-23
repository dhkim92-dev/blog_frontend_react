const message = {
  "J002" : "JWT Token expired",
  "J003" : "Invalid JWT Token",
  "P001" : "Article not exist.",
  "AC01" : "Not exist category",
  "AC02" : "Already exists category",
  "G002" : "Authentication failed. check email or password",
  "G003" : "No permission to resource",
  "G004" : "Invalid image format",
  "G005" : "Invalid video format",
}

const apiErrorHandler = (error : any) => {
  alert(error.message)
}

export {apiErrorHandler}