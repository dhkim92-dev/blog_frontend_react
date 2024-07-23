import './css/signin.css';
import { Button } from 'react-bootstrap';
import { GoogleLoginButton } from './components/GoogleLoginButton';
import { GithubLoginButton } from './components/GithubLoginButton';
import useSignInViewModel from '../viewmodel/SignInViewModel';

const SignInView: React.FC = () => {
  const vm = useSignInViewModel();

  return (
    <div className='SignIn'>
      <div className='SignInTitle'>
        <img src="favicon.ico" alt="logo" />
      </div>
      <div className='SignInForm'>
        <form 
          onSubmit={(e) => { e.preventDefault(); vm.onSubmit(); }} 
          action="/api/v1/authentication" 
          method="post"
        >
          <div>
            <input 
              ref={vm.emailRef} 
              id="email" 
              className='email-input' 
              type='email' 
              name='email'
              autoComplete="username" 
              placeholder="Email Address" 
              aria-label="Email Address"
            />
          </div>
          <div>
            <input 
              ref={vm.passwordRef} 
              id="password" 
              className='password-input' 
              type="password" 
              name='password'
              placeholder="Password" 
              aria-label="Password"
              autoComplete='current-password'
            />
          </div>
          <div className='SNSSignIn'>
            <div className="CenterAlignedBlock">
              {/* <GoogleLoginButton /> */}
              <GithubLoginButton />
            </div>
          </div>
          <div>
            <Button type='submit'>Sign In</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInView;