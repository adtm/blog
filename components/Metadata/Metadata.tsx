import Head from 'next/head'

const WEBSITE_URL = 'https://tomas.life/'
const IMAGE_URL =
  'https://res.cloudinary.com/desbcdojn/image/upload/v1638133579/poes41xvjy704baf5aoz.png'
const DESCRIPTION =
  'Software Engineer, which enjoys complex and big scalability challenges. And of course, good food with good people.'

interface MetadataProps {
  title: string
}

const Metadata = ({ title }: MetadataProps) => (
  <Head>
    <title>{title} - Tomas Eglinskas</title>
    <meta name="title" content={`${title} - Tomas Eglinskas`} />
    <meta name="description" content={DESCRIPTION} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={WEBSITE_URL} />
    <meta property="og:title" content={`${title} - Tomas Eglinskas`} />
    <meta property="og:description" content={DESCRIPTION} />
    <meta property="og:image" content={IMAGE_URL} />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={WEBSITE_URL} />
    <meta property="twitter:title" content={`${title} - Tomas Eglinskas`} />
    <meta property="twitter:description" content={DESCRIPTION} />
    <meta property="twitter:image" content={IMAGE_URL} />
  </Head>
)

export default Metadata
