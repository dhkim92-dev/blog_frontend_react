import axiosCustom from "../../../common/api/axios-custom";
import { ImageUploadResponseVo } from "../vo/ImageUploadResponseVo";

export async function uploadImage(file: FormData): Promise<ImageUploadResponseVo>{
    try {
        const response = await axiosCustom.post(process.env.REACT_APP_API_IMAGE, file,{
            headers : {
                'Content-Type' : 'multipart/form-data',
            }
        })
        return response.data
    }catch(error) {
        throw error
    }
}