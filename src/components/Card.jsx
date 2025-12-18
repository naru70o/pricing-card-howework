import { Check } from "lucide-react";

export function PricingCard() {
  const cardData = {
    title: "Price",
    description: "For small business",
    price: "100$",
    features: [
      "4 users",
      "For small business",
      "Free SSL ",
      "Responsive Website",
    ],
  };
  console.log(cardData.features[0]);
  return (
    <div className="w-64 bg-[#202842] rounded-2xl p-8 text-white">
      {/* header */}
      <header className="mb-6">
        <h2 className="text-[24px] font-bold mb-1">{cardData.title}</h2>
        <p className="text-sm">{cardData.description}</p>
        <h1 className="text-[36px] font-bold">{cardData.price}</h1>
      </header>
      {/* features list */}
      <div className="flex flex-col gap-1">
        {/* feature 1*/}
        <div className="flex flex-row gap-2">
          {/*  */}
          <div className="w-6 h-6 bg-white rounded-full">
            <Check className="text-[#202842] " />
          </div>
          <p>{cardData.features[0]}</p>
        </div>

        {/* feature 2 */}
        <div className="flex flex-row gap-2">
          {/*  */}
          <div className="w-6 h-6 bg-white rounded-full">
            <Check className="text-[#202842] " />
          </div>
          <p>{cardData.features[1]}</p>
        </div>

        {/* feature 3 */}
        <div className="flex flex-row gap-2">
          {/*  */}
          <div className="w-6 h-6 bg-white rounded-full">
            <Check className="text-[#202842] " />
          </div>
          <p>{cardData.features[2]}</p>
        </div>

        {/* feature 4 */}
        <div className="flex flex-row gap-2">
          {/*  */}
          <div className="w-6 h-6 bg-white rounded-full">
            <Check className="text-[#202842] " />
          </div>
          <p>{cardData.features[3]}</p>
        </div>

        {/*
        -- implement the button using tailwind css for syling
        -- make the button reusible component        
        */}
      </div>
    </div>
  );
}
