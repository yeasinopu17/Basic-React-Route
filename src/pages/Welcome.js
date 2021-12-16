import { Route } from "react-router-dom";

const Welcome = (props) => {
    return (
        <section>
            <h1>Welcome to react router</h1>
            <Route path="/welcome/new-user">
                <p>Welcome new user</p>
            </Route>
        </section>
    );
};
export default Welcome;
