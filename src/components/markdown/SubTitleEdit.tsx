import React from "react";

type SubTitleEditProps = {
  value: string;
  handleChange: (id: string, value: string) => void;
  id: string;
};

export const SubTitleEdit = ({ value, handleChange, id }: SubTitleEditProps) => {
  const handleChangeWithId = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(id, e.target.value);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="subtitle">Subtitle</label>
      <input
        className="input input-lg"
        id="subtitle"
        name="subtitle"
        type="text"
        onChange={handleChangeWithId}
        value={value}
      />
    </div>
  );
};
