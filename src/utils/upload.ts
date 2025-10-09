export const uploadToCloudinary = async (
  file: File
): Promise<{ url: string; type: "image" | "video" | "raw" }> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "multiLibrary");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/multi-library/auto/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!res.ok) throw new Error("Upload thất bại");

  const data = await res.json();

  return {
    url: data.secure_url,
    type: data.resource_type,
  };
};

export const getFileType = (url: string): "image" | "video" | "raw" => {
  const extension = url.split(".").pop()?.toLowerCase();
  if (!extension) return "raw";

  const imageTypes = ["jpg", "jpeg", "png", "gif", "webp"];
  const videoTypes = ["mp4", "webm", "mov", "ogg"];
  const rawTypes = ["pdf", "doc", "docx", "txt", "zip"];

  if (imageTypes.includes(extension)) return "image";
  if (videoTypes.includes(extension)) return "video";
  if (rawTypes.includes(extension)) return "raw";
  return "raw";
};
