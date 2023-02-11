import React from "react";
import * as Components from "./Components";
import axios from "axios";

function App() {
    function handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    const [signIn, toggle] = React.useState(true);
    return (
        <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Register By Admin</Components.Title>
                    <Components.Input type="text" placeholder="Admin" />
                    <Components.Input type="email" placeholder="Email" />
                    <Components.Input type="password" placeholder="Password" />
                    <Components.Button>Register</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                <Components.Form onChange={(e) => handleChange(e)}>
                    <Components.Title>Sign in</Components.Title>
                    <Components.Input
                        type="email"
                        placeholder="Email"
                        id="emailInput"
                    />
                    <Components.Input
                        type="password"
                        placeholder="Password"
                        id="passwordInput"
                    />
                    <Components.Anchor href="#">
                        Forgot your password?
                    </Components.Anchor>
                    <Components.Button
                        onClick={async () => {
                            await axios
                                .post(
                                    "http://ec2-35-93-134-199.us-west-2.compute.amazonaws.com:5000/login",
                                    {
                                        email: document.getElementById(
                                            "emailInput"
                                        ).innerHTML,
                                        password:
                                            document.getElementById(
                                                "passwordInput"
                                            ).innerHTML,
                                    }
                                )
                                .then((response) => {
                                    console.log("hello");
                                    alert(response.data);
                                });
                        }}
                    >
                        Siging In
                    </Components.Button>
                </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>
                    <Components.LeftOverlayPanel signinIn={signIn}>
                        <Components.Title>Welcome Back!</Components.Title>
                        <Components.Paragraph>
                            To keep connected with us please login with your
                            personal info
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(true)}>
                            Sign In
                        </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with
                            us
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            Sigin Up
                        </Components.GhostButton>
                    </Components.RightOverlayPanel>
                </Components.Overlay>
            </Components.OverlayContainer>
        </Components.Container>
    );
}

export default App;
