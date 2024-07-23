export const GoogleLoginButton = () => {
  const GOOGLE_SIGN_IN_URI = `${process.env.REACT_APP_OAUTH2_GOOGLE_URI}`
  return (
    <>
      <a href={GOOGLE_SIGN_IN_URI}><img src = "google.png"/></a>
    </>
  )
}