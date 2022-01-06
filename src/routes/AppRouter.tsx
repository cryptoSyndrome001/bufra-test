import {FC, Suspense} from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom'
import { routes } from './routes'
import {PrivateRoute} from './PrivateRoutes'
import Loader from "../components/Loader";
interface AppProps {}
export const AppRouter: FC<AppProps> = (props) => {
    return (
        <HashRouter>
            <Suspense fallback={<Loader/>}>
                <Switch>
                    {routes.map((route) => {
                        return route.protected ? (
                            <PrivateRoute
                                key={route.name}
                                {...route}
                                {...props}
                            />
                        ): (
                            <Route key={route.name} {...route} {...props} />
                        )
                    })}
                </Switch>
            </Suspense>
        </HashRouter>
    )
}
