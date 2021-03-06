import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout.module.scss";

type Props = {
  title: string;
  keywords: string;
  description: string;
  children: any;
};

export default function Layout({ title, keywords, description, children }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ Events | Find the best parties",
  description: "Find the latest DJ and other musical events",
  keywords: "music, dj, edm, events",
};
