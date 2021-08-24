import React from "react";
import { useState } from "react";
import axios from "axios";
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
  const addCommunity = "http:/localhost:3333/channel/add_channel";
  const [community, setCommunity] = useState(" ");
  const [description, setDescription] = useState(" ");
  const postToApi = () => {
    axios
      .post(addCommunity, communityData)
      .then((response) => console.log(response))
      .catch((error) => alert(error));
  };

  const communityData = {
    title: community,
    text_content: description,
  };
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
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a community</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={10}>
            <form>
              <FormControl>
                <FormLabel>Name of Community</FormLabel>
                <Input
                  ref={initialRef}
                  value={community}
                  onChange={(e) => {
                    setCommunity(e.target.value);
                  }}
                  placeholder="Community Name"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Description of community</FormLabel>
                <Input
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  placeholder="Description"
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
              onClick={() => {
                postToApi();
              }}
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
