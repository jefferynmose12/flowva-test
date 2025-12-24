import { useState } from "react";
import type { Tab } from "../../components/ui/Tabs";
import Tabs from "../../components/ui/Tabs";
import EarnPoints from "../../components/EarnPoints";
import RedeemPoints from "../../components/RedeemPoints";

const RewardHub = () => {
  const [activeTab, setActiveTab] = useState(1);
  
  const tabs: Tab[] = [
    { key: 1, label: "Earn Points" },
    { key: 2, label: "Redeem Rewards" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return <EarnPoints />;

      case 2:
        return <RedeemPoints />;

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="">
        <div>
          <h2 className=" text-lg md:text-2xl my-3 text-black border border-l-4 border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-3 font-semibold">
            {activeTab === 1 ? "Your Rewards Journey" : "Redeem Your Points"}
          </h2>
        </div>

        {renderTabContent()}
      </div>
    </div>
  );
};

export default RewardHub;
