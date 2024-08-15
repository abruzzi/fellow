import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { FiUserPlus } from "react-icons/fi";
import React, { useMemo, useState } from "react";
import { useAuth } from "./AuthenticationContext.tsx";

const validateEmail = (value) =>
  value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

export const InviteModel = ({ boardId, isOpen, onClose, onOpenChange }) => {
  const [role, setRole] = useState<string>("member");
  const [email, setEmail] = useState<string>("");
  const [isSendingInvite, setSendingInvite] = useState<boolean>(false);
  const { token } = useAuth();

  const isInvalid = useMemo(() => {
    if (email === "") return false;
    return !validateEmail(email);
  }, [email]);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRoleSelect = (e) => {
    setRole(e.target.value);
  };

  const handleSendInvite = async (afterSubmit: () => void) => {
    setSendingInvite(true);
    try {
      // just send it out, we could handle it async
      await fetch(`${import.meta.env.VITE_BOARDS_BASE_URL}/invite`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email, boardId: boardId }),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setSendingInvite(false);
    }

    if (!isInvalid) {
      afterSubmit();
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="md">
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">
            Collaborate with others
          </ModalHeader>
          <ModalBody>
            <div className="flex flex-col gap-4 py-2">
              <Input
                type="email"
                label="Email"
                size="sm"
                isInvalid={isInvalid}
                color={isInvalid ? "danger" : "default"}
                errorMessage="Please enter a valid email"
                onChange={handleEmailChange}
              />
              <Select
                label="Select a role"
                size="sm"
                selectedKeys={[role]}
                onChange={handleRoleSelect}
                multiple={false}
              >
                <SelectItem key="member">Member</SelectItem>
                <SelectItem key="admin">Admin</SelectItem>
              </Select>
              <Button
                color="primary"
                startContent={<FiUserPlus />}
                onPress={() => handleSendInvite(onClose)}
                disabled={isInvalid || isSendingInvite}
                isLoading={isSendingInvite}
              >
                Send invitation
              </Button>
            </div>
            <div className="mb-4">
              <p className="font-light text-sm">
                It might take some time for the invitation be derived
              </p>
            </div>
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
};
