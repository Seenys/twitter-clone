// React Imports
import React, { useEffect, useState, useCallback } from "react";
// Hooks
import useUser from "@/hooks/useUser";
import useEditModal from "@/hooks/useEditModal";
import useCurrentUser from "@/hooks/useCurrentUser";
// Components
import { ImageUpload, Input, Modal } from "../shared";
// Others
import { toast } from "react-hot-toast";
import axios from "axios";

type Props = {};

const EditModal = (props: Props) => {
  const { data: currentUser } = useCurrentUser();
  const { mutate: mutateFetchedUser } = useUser(currentUser?.id);
  const editModal = useEditModal();

  const [profileImage, setProfileImage] = useState<string>("");
  const [coverImage, setCoverImage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    setProfileImage(currentUser?.profileImage);
    setCoverImage(currentUser?.coverImage);
    setName(currentUser?.name);
    setBio(currentUser?.bio);
    setUserName(currentUser?.userName);
  }, [
    currentUser?.name,
    currentUser?.bio,
    currentUser?.userName,
    currentUser?.profileImage,
    currentUser?.coverImage,
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      await axios.patch("/api/edit", {
        profileImage,
        coverImage,
        name,
        bio,
        userName,
      });
      await mutateFetchedUser();
      toast.success("Profile updated");
      editModal.onClose();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [
    bio,
    coverImage,
    editModal,
    mutateFetchedUser,
    name,
    profileImage,
    userName,
  ]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <ImageUpload
        label="Upload Profile Image"
        value={profileImage}
        disabled={isLoading}
        onChange={(image) => setProfileImage(image)}
      />
      <ImageUpload
        label="Upload Cover Image"
        value={coverImage}
        disabled={isLoading}
        onChange={(image) => setCoverImage(image)}
      />
      <Input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isLoading}
      />
      <Input
        placeholder="Enter your username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        disabled={isLoading}
      />
      <Input
        placeholder="Enter your bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        disabled={isLoading}
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      title="Edit Your Profile"
      actionLabel="Save"
      onSubmit={onSubmit}
      onClose={editModal.onClose}
      isOpen={editModal.isOpen}
      body={bodyContent}
    />
  );
};

export default EditModal;
