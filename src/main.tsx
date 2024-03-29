import App from "app/App";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "app/store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <BrowserRouter basename="/e-commerce/">
            <App />
        </BrowserRouter>
    </Provider>
);
