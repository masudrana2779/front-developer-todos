import Head from "next/head";
import { FC, ReactElement } from "react";


type LayoutProps = {
  children?: ReactElement;
  title?: string;
  tags?: string;
  description?: string;
  imageUrl?: string;
  url?: string;
};

const Layout: FC<LayoutProps> = ({
  children,
  title,
  tags,
  description,
  imageUrl,
  url,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "User List"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content={description || "Just a user list"}
        />
        <meta
          name="keywords"
          content={tags || "react, nextJs, redux, sass, typescript"}
        />
        <meta name="subtitle" content="sub title here" />
      </Head>
      
        {children}
        
    </>
  );
};

export default Layout;
