import React from "react";

function Tag(props) {
  return (
    <div>
      <>
        <div className="w-fit px-3 select-none py-2 hover:cursor-pointer bg-slate-800 rounded-xl text-center place-item-center text-white ">
          <p>{props.props}</p>
        </div>
      </>
    </div>
  );
}

export default Tag;
