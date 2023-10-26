import { Inter } from "next/font/google";
// eslint-disable-next-line @conarti/feature-sliced/absolute-relative
import { AppProps } from "next/app";
import { AppProvider } from "./app-provider";

const inter = Inter({ subsets: ["latin"] });

export function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </AppProvider>
  );
}
