import React from "react";

const Form = ({ formData, handleChange, handleSave, editIndex }) => {
  return (
    <>
    <div className="flex justify-center">
    <div className="flex flex-col gap-3 my-[3rem] bg-[#ececec] p-[3rem] border-[2px] border-[#0d0d0d0d] rounded-[6px]">
    <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter name"
        className="bg-[#000000D4] !mb-[10px] w-[300px] 2xl:w-[400px] text-[14px] 2xl:text-[18px] placeholder-gray-400 text-gray-400 border-[1px] border-gray-700 rounded-full py-[0.8rem] 2xl:py-[1.2rem] px-[2rem] 2xl:px-[2.7rem]"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter email"
        className="bg-[#000000D4] w-[300px] 2xl:w-[400px] text-[14px] 2xl:text-[18px] placeholder-gray-400 text-gray-400 border-[1px] border-gray-700 rounded-full py-[0.8rem] 2xl:py-[1.2rem] px-[2rem] 2xl:px-[2.7rem]"
        required
      />
      <div className="mx-auto">
      <button
        onClick={handleSave}
        className="bg-[#262626] cursor-pointer mt-[2rem] w-[300px] 2xl:w-[400px] text-[14px] 2xl:text-[19px] text-[#FCFCD8] rounded-full py-[0.8rem] 2xl:py-[1.2rem] px-[2rem] 2xl:px-[2.7rem]"
      >
        {editIndex !== null ? "Update" : "Save"}
      </button>
      </div>
    </div>
    </div>
    </>
  );
};

export default Form;
