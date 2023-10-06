import { Outlet } from "react-router-dom";
import store from "../../store/store.tsx";
import { Provider } from "react-redux";

export const RootLayout = () => {
  return (
    <Provider store={store}>
      <main>
        <Outlet />
      </main>
    </Provider>
  );
};
