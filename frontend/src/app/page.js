import { TiChevronRight, TiZoomOutline } from "react-icons/ti";
import { FiUsers, FiCreditCard, FiTruck } from "react-icons/fi";

export default function Home() {
  const popularDocs = [
    { name: "Aadhaar", img: "/aadhaar.svg" },
    { name: "PAN Card", img: "/utiitsl.png" },
    { name: "Voter ID", img: "/eci.svg" },
  ];

  const categoryItems = [
    {
      key: "gov",
      title: "Government IDs",
      subtitle: "Aadhaar, Ration Card, etc.",
      icon: <FiUsers />,
    },
    {
      key: "finance",
      title: "Financial Documents",
      subtitle: "PAN Card, Loan application, etc.",
      icon: <FiCreditCard />,
    },
    {
      key: "vehicle",
      title: "Vehicle Documents",
      subtitle: "RC, PUCC, etc.",
      icon: <FiTruck />,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      {/* Search Bar */}
      <div className="mb-6 text-gray-300">
        {/* <TiZoomOutline className="absolute mx-4 my-2 w-6 h-6 " /> */}
        <input
          type="text"
          placeholder="      Search for documents..."
          className="w-full rounded-full px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Popular Documents */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-black border-b-2 border-green-500 inline-block">
          Popular Documents
        </h2>
        <div className="flex gap-4 overflow-x-scroll scrollbar-hide pb-6">
          {popularDocs.map((docItem, index) => {
            return (
              <a
                href="/document"
                className="min-w-[120px] bg-primary rounded-lg shadow-lg flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded mb-2 flex items-center justify-center">
                  {/* Icon Placeholder */}
                  <img src={docItem.img} />
                </div>
                <p className="text-sm font-medium text-black">{docItem.name}</p>
              </a>
            );
          })}
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-xl font-semibold text-black border-b-2 border-green-500 inline-block">
          Categories
        </h2>
        <br></br>
        <div className="space-y-4 mt-5">
          {categoryItems.map((item, index) => {
            return (
              <a
                href="/list"
                className="flex items-center justify-between bg-primary p-4 rounded-lg shadow-lg"
                key={item.key}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-green-500 w-12 h-12 rounded flex items-center justify-center">
                    <span className="text-white text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <p className="font-medium text-black">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                  </div>
                </div>
                <TiChevronRight className="w-8 h-8 text-green-500" />
                {/* <span className="text-gray-500 text-2xl"></span> */}
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}
