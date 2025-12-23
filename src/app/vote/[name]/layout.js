export async function generateMetadata({ params }) {
  const { name } = params;
  const [fn, lastName] = name.toLowerCase().split("_");
  const firstName = fn.charAt(0).toUpperCase() + fn.slice(1);
  return {
    title: `Vote For ${firstName} - IEC&A Nominees`,
    description: `Cast your vote for ${fn} at Influence Exchange Confex and Awards`,
    openGraph: {
      title: `Vote For ${firstName}`,
      description: `Support ${fn} at Influence Exchange Confex and Awards`,
      images: [
        {
          url: "https://india.theiena.com/images/head/voteingbanner.jpg",
          alt: `Vote For ${firstName}`,
        },
      ],
    },
  };
}

export default function VoteLayout({ children }) {
  return <div className="vote-layout">{children}</div>;
}
