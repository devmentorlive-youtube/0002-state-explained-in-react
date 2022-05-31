import "./globals.css";
import Page from "@/ui/page";

export default function App({ Component, pageProps }) {
  return (
    <Page
      id="0002-state-explained-in-react"
      videoId="TODO"
      title="React State Explained - A beginner React tutorial"
      description="In this lesson I will use an example application to show you how to use state properly and where you would put this state and how you change it. Context, Container, Component states covered.">
      <Component {...pageProps} />
    </Page>
  );
}
