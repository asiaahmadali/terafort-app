import { useState } from "react";

function TechnologyStack() {
  const publishing = [
    { image: "images/googleplay.webp", heading: "Google Play" },
    { image: "images/apple.webp", heading: "Apple" },
    { image: "images/samsung.webp", heading: "Samsung" },
    { image: "images/amazon.webp", heading: "Amazon" },
    { image: "images/oppo.webp", heading: "Oppo" },
    { image: "images/huawei.webp", heading: "Huawei" },
  ];

  const development = [
    { image: "images/unity.webp", heading: "Unity" },
    { image: "images/androidstudio.webp", heading: "Android Studio" },
    { image: "images/unreal.webp", heading: "Unreal" },
    { image: "images/adobe.webp", heading: "Adobe" },
    { image: "images/azure.webp", heading: "Azure" },
    { image: "images/jira.webp", heading: "Jira" },
  ];

  const monetization = [
    { image: "images/admob.webp", heading: "Admob" },
    { image: "images/facebook.webp", heading: "Facebook" },
    { image: "images/unity.webp", heading: "Unity" },
    { image: "images/applovin.webp", heading: "Applovin" },
  ];

  const userAcquisition = [
    { image: "images/googleplay.webp", heading: "Google Ads" },
    { image: "images/facebook.webp", heading: "Facebook" },
    { image: "images/instagram.webp", heading: "Instagram" },
    { image: "images/appSearchAds.webp", heading: "Apple Search Ads" },
    { image: "images/applovin.webp", heading: "Applovin" },
    { image: "images/unity.webp", heading: "Unity" },
  ];

  const [selectedStack, setSelectedStack] = useState("publishing");

  const stackOptions = [
    { label: "Publishing Platform", value: "publishing", stack: publishing },
    {
      label: "Development Technology",
      value: "development",
      stack: development,
    },
    {
      label: "Monetization Platform",
      value: "monetization",
      stack: monetization,
    },
    {
      label: "User Acquisition Platform",
      value: "userAcquisition",
      stack: userAcquisition,
    },
  ];

  return (
    <div className="md:p-[70px] p-[10px] border-b-[1px] border-gray-400 md:mb-[40px] mb-[10px]">
      <div>
        <h1
          className="text-center md:text-5xl text-2xl font-bold"
          data-aos="fade-right"
        >
          Technology Stack
        </h1>
      </div>

      {/* Technology Links */}
      <div className="grid grid-cols-2 md:flex justify-between mt-[100px] text-xl text-gray-500">
        {stackOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelectedStack(option.value)}
            className={`p-2 ${
              selectedStack === option.value
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-500"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Display the selected stack */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10 items-center text-center ">
        {stackOptions
          .find((option) => option.value === selectedStack)
          .stack.map((item, index) => (
            <div key={index} className="text-center">
              <img
                src={item.image}
                alt={item.heading}
                className="w-[100px] mx-auto"
              />
              <h2 className="mt-2 text-xl">{item.heading}</h2>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TechnologyStack;
