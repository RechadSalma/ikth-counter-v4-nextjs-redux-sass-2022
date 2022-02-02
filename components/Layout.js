import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
    console.log(props);
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}
