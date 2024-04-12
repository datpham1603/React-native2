import axios from 'axios';

export const fetchCategoryData = async () => {
  try {
    // Thực hiện cuộc gọi API sử dụng Axios
    const response = await axios.get('http://192.168.18.105:3000/v1/getlistcategoryproduct')
    return response.data; // Trả về dữ liệu từ API
  } catch (error) {
    console.log(error)
    throw error; // Ném lỗi nếu có lỗi xảy ra trong quá trình gọi API
  }
};