import React from "react";

export type Props = {
  type: string;
  imageUrl: string;
  count: number;
};

export const BookCategoryCard: React.FC<Props> = ({ type, imageUrl, count }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
      <img src={imageUrl} alt={type} className="w-full h-48 object-cover mt-2 rounded" />
      <h3 className="text-lg font-semibold text-gray-800">{type}</h3>
      <p className="text-sm text-gray-600 mt-2">{count} books</p>
    </div>
  );
};