import React, { useState, useEffect } from "react";
import UpdateUserForm from "../../components/admin/UpdateUserForm";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../components/common/api";
import { toast } from "react-toastify";

const UpdateUser = () => {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    number: "",
    category: "",
    tradeNumber: "",
    website: "",

  })
  const [branchDetail, setBranchDetail] = useState([
    {
      gstNumber: "",
      state: "",
      address: "",
    },
  ]);
  const [errMessage, setErrMessage] = useState(null)

  const params = useParams();
  const id = params?.id


  const navigate = useNavigate()

  // Handle Change

  const handleChange = async(e)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
    
  }

  // Get User Data

  const getUserData = async (id) => {
    try {
      const response = await api.get(`/user/byid/${id}`, {
        withCredentials: true,
      });
      if (response.status === 200) {
        setUserData(response.data?.user);
        setFormData({
            name: response.data?.user?.name || "",
            company: response.data?.user?.company || "",
            email: response.data?.user?.email || "",
            role:"buyer",
            number: response.data?.user?.number|| "",
            category: response.data?.user?.category|| "",
            tradeNumber: response.data?.user?.tradeNumber|| "",
            website: response.data?.user?.website|| "",
           
          })
          if (response.data?.user?.branchDetail && response.data?.user?.branchDetail.length > 0) {
      setBranchDetail(response.data?.user?.branchDetail);
    }
        
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleBranchChange = (index, e) => {
    const { name, value } = e.target;
    const updatedBranches = [...branchDetail];
    updatedBranches[index][name] = value;
    setBranchDetail(updatedBranches);
  };

  const addBranchField = () => {
    setBranchDetail([
      ...branchDetail,
      { gstNumber: "", state: "", address: "" },
    ]);
  };

  const removeBranchField = (index) => {
    if (branchDetail.length === 1) return;
    const updated = branchDetail.filter((_, i) => i !== index);
    setBranchDetail(updated);
  };

  

  useEffect(() => {
    getUserData(id);
  }, []);

  // Handle Submit

  const handleSubmit = async(e)=>{
    setIsLoading(true)
    e.preventDefault()
    
    try {
        if(!id) return setErrMessage('invalid user id, please try again')
        const response = await api.patch(`/user/update-user-by-admin/${id}`, {...formData, branchDetail}, {withCredentials: true})
        if (response.status === 200){
            toast.success(`${userData?.name} profile updated successfully`)
            navigate(-1)
            setErrMessage(null)
            
        }
    } catch (error) {
        console.error(error)
        setErrMessage(error?.response?.data?.message)
    }finally{
        setIsLoading(false)
    }

  }

  return (
    <>
      <div className="p-5 flex flex-col gap-5">
        <UpdateUserForm handleSubmit={handleSubmit} userData={userData} formData={formData} handleChange={handleChange} navigate={navigate} isLoading={isLoading} errMessage={errMessage} id={id} handleBranchChange={handleBranchChange}
          branchDetail={branchDetail}
          addBranchField={addBranchField}
          removeBranchField={removeBranchField}/>
      </div>
    </>
  );
};

export default UpdateUser;
