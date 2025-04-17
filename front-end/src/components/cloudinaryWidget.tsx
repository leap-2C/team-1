import { CldUploadWidget } from "next-cloudinary";

const Cloudinary = ({ avatarImage, setAvatarImage }:string) => {
  const handleSuccess = (result) => {
    if (result.event === "success") {
      setAvatarImage(result.info.secure_url); // Save the uploaded image URL
    }
  };

  return (
    <div>
      <CldUploadWidget
        uploadPreset="ml_default" // Ensure this is the correct preset
        onSuccess={handleSuccess}
      >
        {({ open }) => (
          <button type="button" onClick={() => open()}>
            Add Photo
          </button>
        )}
      </CldUploadWidget>
      {avatarImage && (
        <div className="mt-4">
          <img src={avatarImage} alt="Uploaded Avatar" width={160} height={160} className="absolute rounded-full w-full h-full top-0 left-0 object-cover"/>
        </div>
      )}
    </div>
  );
};

export default Cloudinary;
