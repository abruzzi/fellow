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
  PopoverTrigger,
  Popover,
  PopoverContent,
  Spinner,
} from "@nextui-org/react";
import { graphql, useMutation } from "react-relay";
import { HiOutlineMenu, HiOutlinePlus, HiOutlineTrash } from "react-icons/hi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiOutlineTicket } from "react-icons/hi";
import {FaRegEdit} from "react-icons/fa";

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

  // const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadPopupOpen, setUploadPopupOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState(cardImageUrl);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      // setSelectedFile(event.target.files[0]);
      const selectedFile = event.target.files[0];

      if (!selectedFile) return;

      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET); // Set your upload preset
      formData.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME); // Set your cloud name

      setUploading(true);
      setUploadPopupOpen(false);

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
      } catch (e: unknown) {
        console.log(error);
        // @ts-expect-error
        setError(e.message);
      } finally {
        setUploading(false);
      }
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
      onError: (error: unknown) => {
        console.log(error);
        // @ts-expect-error
        setError(error.message);
      },
    });
  };

  const [editingTitle, setEditingTitle] = useState<boolean>(false);
  const [editingDescription, setEditingDescription] = useState<boolean>(false);

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="top-center"
      size="2xl"
    >
      <ModalContent className="px-10 py-6">
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
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <h4 className="font-bold text-slate-600">Title</h4>
                  {editingTitle ? (
                    <Input
                      autoFocus
                      variant="flat"
                      endContent={<HiOutlineMenu />}
                      label="Title"
                      placeholder="Enter card title"
                      value={title}
                      onChange={onTitleChange}
                      radius="none"
                    />
                  ) : (
                    <p onClick={() => setEditingTitle(true)}>{title}</p>
                  )}
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-row justify-between items-center">
                    <h4 className="font-bold text-slate-600">Description</h4>
                    <Button isIconOnly variant="light" onPress={() => setEditingDescription(true)}>
                      <FaRegEdit />
                    </Button>
                  </div>
                  {editingDescription ? (
                    <Textarea
                      label="Description"
                      endContent={<HiOutlineMenuAlt2 />}
                      placeholder="Enter your description"
                      value={description}
                      onChange={onDescriptionChange}
                      radius="none"
                    />
                  ) : (
                    <p onClick={() => setEditingDescription(true)}>
                      {description}
                    </p>
                  )}
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-row justify-between items-center">
                    <h4 className="font-bold text-slate-600">Image</h4>
                    <Popover
                      placement="bottom"
                      showArrow
                      offset={10}
                      isOpen={uploadPopupOpen}
                      onOpenChange={(open) => setUploadPopupOpen(open)}
                    >
                      <PopoverTrigger>
                        <Button
                          isIconOnly
                          variant="light"
                          onPress={() => setUploadPopupOpen(true)}
                        >
                          <HiOutlinePlus />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[240px]">
                        {(titleProps) => (
                          <div className="px-1 py-2 w-full">
                            <p
                              className="text-small font-bold text-foreground"
                              {...titleProps}
                            >
                              Upload
                            </p>
                            <div className="mt-2 flex flex-col gap-2 w-full">
                              <Input
                                className="flex-1"
                                type="file"
                                onChange={handleFileChange}
                              />
                            </div>
                          </div>
                        )}
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="flex flex-row">
                    <div className="max-w-36">
                      {imageUrl && (
                        <div
                          className="relative"
                          onMouseEnter={() => setHovered(true)}
                          onMouseLeave={() => setHovered(false)}
                        >
                          {uploading && (
                            <div className="absolute right-2 top-2 delay-100 z-20">
                              <Spinner color="default" />
                            </div>
                          )}
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
                    </div>
                  </div>
                </div>
              </div>

              <hr />
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
