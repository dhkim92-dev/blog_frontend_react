export const GithubLoginButton = () => {
  const GITHUB_SIGN_IN_URI = `${process.env.REACT_APP_OAUTH2_GITHUB_URI}`
  return (
    <>
      <a href={GITHUB_SIGN_IN_URI}><img src = "github.png"/></a>
    </>
  )
}