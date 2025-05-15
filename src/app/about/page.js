import BackButton from "@/components/BackButton";
const AboutPage = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 border-b-2 pb-2">
          <BackButton />
        </div>
        <h1 className="text-3xl font-bold text-center mb-8">
          About Toby's Anime List
        </h1>

        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
              What is this service?
            </h2>
            <p className="mb-4">
              Toby's Anime List is a simple and user-friendly platform that
              helps you discover and explore anime titles. Our service provides
              easy access to a vast collection of anime information powered by
              the Jikan API (MyAnimeList.net unofficial API).
            </p>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Search for any anime title</li>
              <li>View detailed information about each anime</li>
              <li>Browse top 25 most popular anime</li>
              <li>Access anime ratings and reviews</li>
              <li>View production details and studios</li>
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Built with Next.js 13 (App Router)</li>
              <li>Styled with Tailwind CSS</li>
              <li>Data sourced from Jikan API</li>
              <li>Server-side and static rendering for optimal performance</li>
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Data Source</h2>
            <p>
              All anime data is provided by the Jikan API, which is an
              unofficial API for MyAnimeList.net. The data is regularly updated
              to ensure accuracy and relevance.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
