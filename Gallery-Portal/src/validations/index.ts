import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().required("email is required"),
  password: Yup.string().required("password is required"),
});
export const addGallerySchema = Yup.object({
  galleryType: Yup.string()
    .required("Gallery Type is required")
    .oneOf(
      [
        "PHOTOSHOOTS",
        "FASHION",
        "PORTFOLIO",
        "BIRTHDAY",
        "CORPORATION",
        "WEDDING",
        "GALLERY",
        "MATCHES",
        "BLOG",
      ],
      "Invalid Gallery Type"
    ),
  selectedFile: Yup.mixed().required("A file is required"),
});
