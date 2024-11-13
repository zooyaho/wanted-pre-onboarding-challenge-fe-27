import { PropsWithChildren } from "react";
import TanstackQueryProvider from "./TanstackQueryProvider";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
      <TanstackQueryProvider>{children}</TanstackQueryProvider>
    </Provider>
  );
}
