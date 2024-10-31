import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const post = [
    {
      _createdAt: new Date(),
      _id: 1,
      views: 55,
      author: { _id: 1, name: "John Doe" },
      description: "A platform that helps you find the best online courses",
      image:
        "https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWd1fHx8fGVufDB8fHx8fA%3D%3D",
      category: "Education",
      title: "Course Finder",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All Pitches"}
        </p>

        <ul className="mt-7 card_grid">
          {post?.length > 0 ? (
            post.map((post: StartupCard, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No pitches found</p>
          )}
        </ul>
      </section>
    </>
  );
}
