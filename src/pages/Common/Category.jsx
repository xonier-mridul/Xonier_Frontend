import React, { useEffect, useState } from "react";
import AddCategoryForm from "../../components/common/AddCategoryForm";
import CategoryTable from "../../components/common/CategoryTable";
import axios from "axios";

const Category = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}category/paginate?page=${currentPage}`
      );

      if (response.status === 200) {
        setCategoryData(response?.data?.category);
        setTotalPages(response?.data?.totalPages);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [currentPage]);

  return (
    <>
      <div className="p-7 flex flex-col gap-5">
        <AddCategoryForm fetchCategories={fetchCategories} />
        <CategoryTable
          categoryData={categoryData}
          setCategoryData={setCategoryData}
          totalPages={totalPages}
          setTotalPages={setTotalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default Category;
