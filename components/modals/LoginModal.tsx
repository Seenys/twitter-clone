// React Imports
import React, { useCallback, useState } from "react";
// Hooks
import { useLoginModal } from "../hooks";
// Components
import { Modal, Input } from "../shared";

type Props = {};

const LoginModal = (props: Props) => {
  const loginModal = useLoginModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      //TODO: Login logic

      loginModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [loginModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  );

  return (
    <Modal
      title="Login"
      body={bodyContent}
      onSubmit={onSubmit}
      disabled={isLoading}
      onClose={loginModal.onClose}
      isOpen={loginModal.isOpen}
      actionLabel="Login"
    />
  );
};

export default LoginModal;
