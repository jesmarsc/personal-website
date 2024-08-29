import { links } from "@/constants";
import Head from "next/head";

const seo = {
  TITLE: "Jesmar Castillo",
  DESCRIPTION:
    "Jesmar Castillo is a web developer who enjoys building dynamic and engaging web experiences.",
};

interface SEOProps {
  title?: string;
  description?: string;
}

export const SEO = (props: SEOProps) => {
  const title = props.title ? `${props.title} - ${seo.TITLE}` : seo.TITLE;
  const description = props.description || seo.DESCRIPTION;

  return (
    <Head>
      <link key="cononical" rel="canonical" href={links.PORTFOLIO} />
      <meta key="og:url" property="og:url" content={links.PORTFOLIO} />

      {title ? (
        <>
          <title>{title}</title>
          <meta key="og:title" property="og:title" content={title} />
          <meta key="og:site_name" property="og:site_name" content={title} />
          <meta key="twitter:title" name="twitter:title" content={title} />
        </>
      ) : null}

      {description ? (
        <>
          <meta key="description" name="description" content={description} />
          <meta
            key="og:description"
            property="og:description"
            content={description}
          />
          <meta
            key="twitter:description"
            name="twitter:description"
            content={description}
          />
        </>
      ) : null}

      <link
        key="icon"
        rel="icon"
        type="image/png"
        href="/favicon.png"
        sizes="192x192"
      />
      <link
        key="alternate icon"
        rel="alternate icon"
        href="/favicon.png"
        type="image/png"
        sizes="192x192"
      />
      <link
        key="apple-touch-icon"
        rel="apple-touch-icon"
        href="/favicon.png"
        sizes="192x192"
      />
      <link
        key="mask-icon"
        rel="mask-icon"
        href="/favicon.svg"
        color="#000000"
      />
      <meta key="theme-color" name="theme-color" content="#000000" />

      <meta key="og:image" property="og:image" content="/og.png" />
      <meta
        key="twitter:image:src"
        name="twitter:image:src"
        content="/og.png"
      />

      <meta key="og:type" property="og:type" content="website" />
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
    </Head>
  );
};
