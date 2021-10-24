import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PrivateRouteComponent = ({
    component: Component,
    isAuthenticated,
    ...rest
}) => {
    const checkAuthorities = (props) => (
        <Component {...props} />
    );

    const renderRedirect = (props) => {
        return isAuthenticated ? (
            checkAuthorities(props)
        ) : (
            <Redirect
                to={{
                    pathname: "/",
                    search: props.location.search,
                    state: { from: props.location },
                }}
            />
        );
    };

    if (!Component)
        throw new Error(
            `A component needs to be specified for private route for path ${rest.path}`
        );

    return <Route {...rest} render={renderRedirect} />;
};

const mapStateToProps = ({ login: { isAuthenticated } }) => ({
    isAuthenticated,
});

export const PrivateRoute = connect(mapStateToProps, null, null, {
    pure: false,
})(PrivateRouteComponent);

export default PrivateRoute;