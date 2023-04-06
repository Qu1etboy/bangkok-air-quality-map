import Head from "next/head";

export default function Layout(props) {
  const meta = {
    title: "Bangkok Air Quality Map",
    description: "Shows the air quality on a map in Bangkok.",
    author: "Weerawong Vonggatunyu",
    type: "website",
    image:
      "https://static.vecteezy.com/system/resources/previews/001/435/960/original/city-landscape-and-air-pollution-design-free-vector.jpg",
    ...props.meta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta charset="UTF-8" />
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={meta.author} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:site_name" content="Bangkok Air Quality Map" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@WeerawongNon" />
        <meta name="twitter:image" content={meta.image} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`h-screen w-full ${props.className}`}>
        {props.children}
      </main>
    </>
  );
}
