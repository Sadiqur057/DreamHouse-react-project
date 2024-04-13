import { toast } from "react-toastify";

const getDataFromLS = (uid) => {
  const data = localStorage.getItem(uid);
  if (data) {
    return JSON.parse(data);
  }
  return [];
};

const saveDataToLS = (dataId, uid) => {
  const existingData = getDataFromLS(uid);
  const checkExist = existingData.find((data) => dataId == data);
  if(!checkExist){
    existingData.push(dataId);
    toast.success("Added to Bookmarks")
  }else{
    toast.error("Already added to Bookmarks")
  }
  localStorage.setItem(uid, JSON.stringify(existingData))
  return existingData
};
export {saveDataToLS, getDataFromLS}
