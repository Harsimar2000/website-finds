import ScreenRecording from "@/components/ScreenRecording";
import React from "react";

const features = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex md:flex-row flex-col w-full">
        <div className="  w-full flex pt-20 flex-col">
          <div className="flex flex-col pl-24">
            <h1 className="text-3xl text-green-800 font-bold"> Home Page</h1>
            <div className="text-xl pt-5 text-green-700">
              <div>
                1. You can <span className="font-bold underline">bookmark</span>{" "}
                a recipe to visit it at a later time{" "}
              </div>
              <div className=" pt-2">
                2. With the add to grocery list [enter button here] you can add
                all ingredients to the grocery list
              </div>
              <div className="pt-2">
                3. Tags help you realize avg time to cook the recipe, number of
                servings and ratings rated by real people just like you
              </div>
            </div>
          </div>
          <div className="pl-24 pt-5 text-green-700"><h1>
            1. Here you can see either{" "}
            <span className=" font-bold underline">all</span> the recipes or
            only of the people you are{" "}
            <span className=" font-bold underline">following</span>
          </h1>
          <h1>
            2. You can{" "}
            <span className=" font-bold underline"> scroll down</span> to look
            at new recipes or{" "}
            <span className=" font-bold underline"> scroll up</span> up to go
            back to previous ones
          </h1></div>
        </div>
        <div className=" w-full flex items-center justify-center pt-5 pb-5">
          <ScreenRecording />
        </div>
      </div>
    </div>
  );
};

export default features;
