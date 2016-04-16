export function requireAuth(nextState, replace) {
    if (!localStorage.token) {
        replace({
            pathname: '/login',
            state: {nextPathname: nextState.location.pathname}
        })
    }
}