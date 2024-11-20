import { type Metadata } from "next"

export const BASE_URL = "https://tailwindanimations.vercel.app" // Don't include slash at the end

interface MetadataArgs {
  path: string
  title: string
  description: string
  image?: string
}

const generateMetadata = ({
  path,
  title,
  description,
  image,
}: MetadataArgs): Metadata => {
  const metaTitle = title
  const metaDescription = description
  const metaImage = image ?? `${BASE_URL}/cover.png`

  const metadata: Metadata = {
    title: metaTitle,
    description: metaDescription,

    applicationName: "Tailwind Animations",
    creator: "Jitendra Nirnejak",
    authors: [{ name: "Jitendra Nirnejak", url: "https://nirnejak.com/" }],
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    keywords: ["TailwindCSS", "Animation", "CSS"],

    icons: {
      icon: "/favicon.ico",
      shortcut: "/icons/icon-512x512.png",
      apple: "/icons/icon-512x512.png",
    },
    manifest: `${BASE_URL}/manifest.json`,

    openGraph: {
      type: "website",
      url: `${BASE_URL}${path}`,
      siteName: "<Site Name>",
      title: metaTitle,
      description: metaDescription,
      images: metaImage,
    },

    twitter: {
      card: "summary_large_image",
      site: "@site",
      creator: "@jeetnirnejak",
      title: metaTitle,
      description: metaDescription,
      images: metaImage,
    },

    appleWebApp: {
      capable: true,
      title: metaTitle,
      startupImage: metaImage,
      statusBarStyle: "black-translucent",
    },

    formatDetection: {
      telephone: true,
      date: true,
      address: true,
      email: true,
      url: true,
    },

    appLinks: {},
  }
  return metadata
}

export default generateMetadata
