import React from "react";

export interface Tab {
  key: number;
  label: string;
  count?: number;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: number;
  setActiveTab: (tabKey: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex flex-nowrap gap-2 whitespace-nowrap scrollbar-hide">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                shrink-0 flex items-center gap-4 px-4 py-2 text-md font-medium border-b-2 transition-all duration-300 ease-in-out cursor-pointer
                ${
                  isActive
                    ? "bg-[#9013FE0D] border-[#9013FE] text-[#9013FE]"
                    : "text-gray-500 hover:bg-gray-100 border-transparent"
                }
              `}
            >
              <span>{tab.label}</span>
              {typeof tab.count === "number" && (
                <span
                  className={`
                    min-w-5 h-5 px-1.5
                    flex items-center justify-center
                    text-xs font-semibold rounded-full
                    transition-all duration-300
                    ${
                      isActive
                        ? "text-[#9013FE] bg-[#631ca10d]"
                        : "bg-gray-200 text-gray-300"
                    }
                  `}
                >
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
