import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      spacing={4}
      backgroundColor="white"
      padding={4}
      borderRadius="md"
      boxShadow="md"
      textAlign="left"
      alignItems="flex-start"
    >
      <Image src={imageSrc} width="100%" height="auto" />
      <Heading color="black" size="md" marginTop={2} marginBottom={2}> 
        {title}
      </Heading>
      <Text color="black" marginBottom={4}>{description}</Text>
      <HStack spacing={2}>
        <Text color="black" fontWeight="bold">See more</Text>
        <FontAwesomeIcon color="black" icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
