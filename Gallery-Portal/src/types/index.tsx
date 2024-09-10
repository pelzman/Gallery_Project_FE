export interface loginAttribute {
    email: string,
    password: string

}
export interface ILoginResponse {
    data: {    
        message:string,
        statusCode:number,
        data:{
            token:string,
            
        }
    }
}

export interface IGallery {
    id: number;
    filename: string;
    url: string;
    galleryType: string;
    uploadedBy: string;
    uploadedAt: string;
}
export interface IGalleryType {
    data:{
      content: any[]
       
    }
   
}

