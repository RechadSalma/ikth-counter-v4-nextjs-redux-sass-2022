import "../styles/globals.scss";
// import React, {useEffect, useState
// import { createStore } from "redux";
// import { Provider } from "react-redux";

import { Provider } from "react-redux";
import { useStore } from "../redux/store.js";

import Layout from "../components/Layout";
// import rootReducer from "../redux/reducer/index.js";

function MyApp({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState);

    // const reduxDevTools =
    //     typeof window !== "undefined"
    //         ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //           window.__REDUX_DEVTOOLS_EXTENSION__()
    //         : null;

    // console.log(rootReducer);
    // const store = createStore(rootReducer, {}, reduxDevTools);

    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default MyApp;
