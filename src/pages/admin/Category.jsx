import React from 'react'
import AddCategoryForm from '../../components/admin/AddCategoryForm'
import CategoryTable from '../../components/admin/CategoryTable'

const Category = () => {
  return (
    <>
      <div className='p-5 flex flex-col gap-5'>
         <AddCategoryForm/>
         <CategoryTable/>
      </div>
    </>
  )
}

export default Category
