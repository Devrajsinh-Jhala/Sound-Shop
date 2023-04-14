import { Toaster } from "react-hot-toast";
import { Layout } from "../components";
import "../styles/globals.css";

import { StateContext } from "../context/StateContext";
import { ClerkProvider } from "@clerk/nextjs";

const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </ClerkProvider>
  );
}

export default MyApp;
