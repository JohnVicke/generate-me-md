import React from "react";

type TitleEditProps = {
  value: string;
  handleChange: (id: string, value: string) => void;
  id: string;
};

export const TitleEdit = ({ value, handleChange, id }: TitleEditProps) => {
  const handleChangeWithId = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(id, e.target.value);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="title">Title</label>
      <input
        className="input input-lg"
        id="title"
        name="title"
        type="text"
        onChange={handleChangeWithId}
        value={value}
      />
    </div>
  );
};
