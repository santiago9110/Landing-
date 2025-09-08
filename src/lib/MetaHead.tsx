import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
  description: string;
  ogImage: string;
}

export default function MetaHead({ title, description, ogImage }: Props) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}