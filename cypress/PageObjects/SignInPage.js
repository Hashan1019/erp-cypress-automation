import SignInSelectors from "../support/Selectors/SignInSelectors";

class SignInPage {

    verifyValidLogin() {
        cy.verifyTopics('Sign in')
            .login('validLogin')
            .clickOnButton('Sign in now')

            //Verify HomePage
            .verifyImage(SignInSelectors.imageAgrixLogoClassName, SignInSelectors.imageAgrixLogoSrc)
            .verifyNavigationBar('.MuiToolbar-root');
    }

    verifyInvalidLogin() {
        cy.verifyTopics('Sign in')
            .login('invalidLogin')
            .clickOnButton('Sign in now')
            .verifyTextErrorMessage('.MuiAlert-message', 'Invalid username or password')
            .wait(1000)
    }

}
export default SignInPage;