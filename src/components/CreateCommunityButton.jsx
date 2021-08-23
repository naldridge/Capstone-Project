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
        mb={8}
        ml={760}
      >
        + Add Community
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a community</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form>
              <FormControl>
                <FormLabel>Name of Community</FormLabel>
                <Input ref={initialRef} placeholder="Community Name" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Description of community</FormLabel>
                <Input placeholder="Description" />
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
