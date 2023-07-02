import classNames from "classnames";
import { useState } from "react";

type Item = {
  id: number;
  name: string;
  used: boolean;
};
const allItems: Item[] = [
  { id: 1, name: "One trip to the Block for breakfast/brunch", used: false },
  { id: 2, name: "One trip to the Block for DINNER", used: false },
  { id: 3, name: "Thirty minute cuddle session", used: false },
  { id: 4, name: "Thirty minute cuddle session", used: false },
  { id: 5, name: "Thirty minute cuddle session", used: false },
  { id: 6, name: "One trip to make candles", used: false },
  { id: 7, name: "One dinner where we BOTH eat salads", used: false },
  { id: 8, name: "One weekend camping", used: false },
  { id: 9, name: "One dessert where we BOTH eat dessert", used: false },
  { id: 10, name: "One dessert where we BOTH eat dessert", used: false },
  { id: 11, name: "One dessert where we BOTH eat dessert", used: false },
  { id: 12, name: "One massage from ME", used: false },
  { id: 13, name: "One massage from ME", used: false },
  { id: 14, name: "One massage from ME", used: false },
  { id: 15, name: "One massage from a PROFESSIONAL", used: false },
  {
    id: 16,
    name: "One day without ANY technology (except our car?)",
    used: false,
  },
  { id: 17, name: "One party for DAISY", used: false },
];
const App = () => {
  const [items, setItems] = useState(allItems.sort(() => Math.random() - 0.5));

  const handleOnClickItem = (id: number) => {
    const itemsCopy = Array.from(items);
    itemsCopy.forEach((item) => {
      if (item.id === id) {
        item.used = true;
      }
    });

    setItems(itemsCopy);
  };

  return (
    <div className="font-bold text-3xl bg-gradient-to-r from-yellow-200 to-yellow-500 h-full flex flex-col items-center py-40">
      <h1 className="bg-white w-fit p-4 rounded-xl text-center shadow-md">
        Happy Anniversary
        <br />
        Hannah!
        <br />
        ❤️
      </h1>
      <div className="mt-60 px-2">
        <div>Your starving Hannah card:</div>
        <div className="text-sm">(To be redeemed within one year!)</div>
        {items.map((item) => (
          <div
            className={classNames(
              "w-fit p-4 rounded-xl text-center shadow-md mt-4",
              `${item.used ? "bg-gray-500 text-white" : "bg-white"}`
            )}
            onClick={() => handleOnClickItem(item.id)}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="mt-40 rounded-xl bg-white mx-2 px-2">
        I love you to the 🌙 and back times ♾️
      </div>
    </div>
  );
};

export default App;
