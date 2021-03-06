import "../styles/globals.scss";

import { Provider } from "react-redux";
import { useStore } from "../redux/store.js";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState);

    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default MyApp;
