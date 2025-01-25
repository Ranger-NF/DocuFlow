
export default function Home() {
  const popularDocs = ["Aadhar", "PAN Card", "Voter ID"];

  const categoryItems = [
    {
      key: "gov",
      title: "Government IDs",
      subtitle: "Adhaar, Ration Card, etc.",
    },
    {
      key: "finance",
      title: "Financial Documents",
      subtitle: "PAN Card, Loan application, etc.",
    },
    {
      key: "vehicle",
      title: "Vehicle Documents",
      subtitle: "RC, PUCC, etc.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for documents..."
          className="w-full rounded-full px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Popular Documents */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-black border-b-2 border-green-500 inline-block">
          Popular Documents
        </h2>
        <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
          {/* Card Example */}
          {popularDocs.map((docName, index) => {
            return (
              <a
                href="/document"
                className="min-w-[120px] bg-primary p-4 rounded-lg shadow-md flex flex-col items-center"
              >
                <div className="bg-gray-200 w-16 h-16 rounded mb-2 flex items-center justify-center">
                  {/* Icon Placeholder */}
                  <span className="text-gray-500 text-2xl">🖼️</span>
                </div>
                <p className="text-sm font-medium text-black">{docName}</p>
              </a>
            );
          })}
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-xl font-semibold mb- text-black border-b-2 border-green-500 inline-block">
          Categories
        </h2>
        <br></br>
        <div className="space-y-4">
          {categoryItems.map((item, index) => {
            return (
              <a
                href="/list"
                className="flex items-center justify-between bg-primary p-4 rounded-lg shadow-md"
                key={item.key}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gray-200 w-12 h-12 rounded flex items-center justify-center">
                    <span className="text-gray-500 text-2xl">🖼️</span>
                  </div>
                  <div>
                    <p className="font-medium text-black">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                  </div>
                </div>
                <span className="text-gray-500 text-2xl">➡️</span>
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}
