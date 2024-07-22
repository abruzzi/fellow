import React, { ChangeEvent, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  Image,
} from "@nextui-org/react";
import { graphql, useMutation } from "react-relay";
import { HiOutlineMenu, HiOutlineTrash } from "react-icons/hi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiOutlineTicket } from "react-icons/hi";

export const CardEditor = ({
  cardId,
  cardTitle,
  cardDescription,
  cardImageUrl,
  isOpen,
  onRemoveCard,
  onOpenChange,
}: {
  cardId: string;
  cardTitle: string;
  cardDescription: string;
  cardImageUrl: string | undefined;
  isOpen: boolean;
  onRemoveCard: () => void;
  onOpenChange: () => void;
}) => {
  const [title, setTitle] = useState(cardTitle);
  const [description, setDescription] = useState(cardDescription);
  const [error, setError] = useState();
  const [hovered, setHovered] = useState<boolean>(false);

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(cardImageUrl);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET); // Set your upload preset
    formData.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME); // Set your cloud name

    setUploading(true);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        },
      );
      const data = await response.json();
      setImageUrl(data.secure_url);
    } catch (e) {
      console.log(e);
      setError(e.message);
    } finally {
      setUploading(false);
    }
  };

  const [commitUpdate, isUpdating] = useMutation(graphql`
    mutation CardEditorUpdateMutation(
      $id: ID!
      $title: String!
      $description: String!
      $imageUrl: String
    ) {
      updateCard(
        cardId: $id
        title: $title
        description: $description
        imageUrl: $imageUrl
      ) {
        id
        position
      }
    }
  `);

  const handleUpdate = (afterUpdate: () => void) => {
    commitUpdate({
      variables: { id: cardId, title, description, imageUrl },
      onCompleted: () => {
        onRemoveCard();
        afterUpdate();
      },
      onError: (error) => {
        console.log(error);
        setError(error.message);
      },
    });
  };

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <div className={`flex flex-row items-center gap-2`}>
                <HiOutlineTicket />
                <h4 className="text-slate-600">Edit card</h4>
              </div>
            </ModalHeader>
            {error && <p className="text-red-500">{error}</p>}
            <ModalBody>
              <Input
                autoFocus
                endContent={<HiOutlineMenu />}
                label="Title"
                placeholder="Enter card title"
                value={title}
                onChange={onTitleChange}
                radius="sm"
              />
              <Textarea
                label="Description"
                endContent={<HiOutlineMenuAlt2 />}
                placeholder="Enter your description"
                value={description}
                onChange={onDescriptionChange}
                radius="sm"
              />
              <Input type="file" onChange={handleFileChange} />
              <Button onPress={handleUpload} disabled={uploading}>
                {uploading ? "Uploading..." : "Upload"}
              </Button>

              {imageUrl && (
                <div
                  className="relative"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  {hovered && (
                    <div className="absolute right-2 top-2 delay-100 z-20">
                      <Button
                        size="sm"
                        isIconOnly
                        color="danger"
                        variant="light"
                        aria-label="Delete"
                        onPress={() => setImageUrl(undefined)}
                      >
                        <HiOutlineTrash />
                      </Button>
                    </div>
                  )}
                  <Image src={imageUrl} alt="Uploaded file" />
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="default" variant="flat" onPress={onClose}>
                Cancel
              </Button>
              <Button
                color="primary"
                onPress={() => handleUpdate(onClose)}
                disabled={isUpdating}
              >
                Update
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
