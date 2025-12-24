import { useState } from "react";
import Tabs, { type Tab } from "./ui/Tabs";
import Button from "./ui/Button";

const data: {
  type: number;
  icon: string;
  title: string;
  sub: string;
  point: string;
}[] = [
  {
    type: 3,
    icon: "💸",
    title: "$5 Bank Transfer",
    sub: "The $5 equivalent will be transferred to your bank account.",
    point: "5000",
  },
  {
    type: 3,
    icon: "💸",
    title: "$5 PayPal International",
    sub: "Receive a $5 PayPal balance transfer directly to your PayPal account email.",
    point: "5000",
  },
  {
    type: 3,
    icon: "🎁",
    title: "$5 Virtual Visa Card",
    sub: "Use your $5 prepaid card to shop anywhere Visa is accepted online.",
    point: "5000",
  },
  {
    type: 3,
    icon: "🎁",
    title: "$5 Apple Gift Card",
    sub: "Redeem this $5 Apple Gift Card for apps, games, music, movies, and more on the App Store and iTunes.",
    point: "5000",
  },
  {
    type: 3,
    icon: "🎁",
    title: "$5 Amazon Gift Card",
    sub: "Get a $5 digital gift card to spend on your favorite tools or platforms.",
    point: "5000",
  },
  {
    type: 3,
    icon: "🎁",
    title: "$10 Amazon Gift Card",
    sub: "Get a $10 digital gift card to spend on your favorite tools or platforms.",
    point: "10000",
  },
  {
    type: 4,
    icon: "📚",
    title: "Free Udemy Course",
    sub: "Coming Soon!",
    point: "0",
  },
];

const RedeemPoints = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tabs: Tab[] = [
    { key: 1, label: "All Rewards", count: 8 },
    { key: 2, label: "Unlocked", count: 0 },
    { key: 3, label: "Locked", count: 7 },
    { key: 4, label: "Coming Soon", count: 1 },
  ];

  const filteredData =
    activeTab === 1 ? data : data.filter((item) => item.type === activeTab);

  return (
    <div>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-6">
        {filteredData.map((item, index) => {
          const isLocked = item.type === 3;
          const isComingSoon = item.type === 4;

          return (
            <div
              key={index}
              className="border opacity-[0.7] cursor-not-allowed border-[#E9D4FF] bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)] relative overflow-hidden transition-all duration-200 ease-linear hover:translate-y-1.25 hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center m-[0_auto_1rem] text-[1.5rem] text-[#9013fe] bg-[#E9D4FF]">
                {item.icon}
              </div>

              <h4 className="text-center text-[1.1rem] font-semibold mb-2 text-gray-800">
                {item.title}
              </h4>

              <div className="min-h-16">
                <p className="text-center text-[0.9rem] text-[#2D3748] mb-4">
                  {item.sub}
                </p>
              </div>

              <div className="flex items-center justify-center text-[#9013fe] font-semibold mb-4">
                ⭐ {item.point} pts
              </div>

              <Button className="w-full font-semibold max-h-12 p-3 rounded-lg transition-all duration-300 ease-in-out bg-[#d7e0ed] text-white hover:bg-[#d7e0ed]">
                {isLocked ? "Locked" : isComingSoon ? "Coming Soon" : "Redeem"}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RedeemPoints;
