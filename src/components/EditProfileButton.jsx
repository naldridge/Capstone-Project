import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Button,
  ModalHeader,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";

function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <>
      <Button
        onClick={onOpen}
        size="md"
        height="40px"
        width="170px"
        border="4px"
        borderColor="#718096"
        color="white"
        mr="5"
        mb={1}
        ml={-940}
        mt={350}
      >
        Edit Profile
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Profile Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={10}>
            <form>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  ref={initialRef}
                  //   value={community}
                  //   onChange={(e) => {
                  //     setCommunity(e.target.value);
                  //   }}
                  placeholder="Name"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Username</FormLabel>
                <Input
                  ref={initialRef}
                  //   value={description}
                  //   onChange={(e) => {
                  //     setDescription(e.target.value);
                  //   }}
                  placeholder="Username"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  ref={initialRef}
                  //   value={community}
                  //   onChange={(e) => {
                  //     setCommunity(e.target.value);
                  //   }}
                  placeholder="Email"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Bio</FormLabel>
                <Input
                  ref={initialRef}
                  //   value={community}
                  //   onChange={(e) => {
                  //     setCommunity(e.target.value);
                  //   }}
                  placeholder="Bio"
                />
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              size="md"
              height="40px"
              width="90px"
              border="4px"
              borderColor="#718096"
              color="white"
              mr="5"
              type="submit"
              //   onClick={() => {
              //     postToApi();
              //   }}
            >
              Submit
            </Button>
            <Button
              onClick={onClose}
              size="md"
              height="40px"
              width="90px"
              border="4px"
              borderColor="#718096"
              color="white"
              mr="5"
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default InitialFocus;
