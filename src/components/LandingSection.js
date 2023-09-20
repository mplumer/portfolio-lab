import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar
        size="2xl"
        name="Pete"
        src="https://bit.ly/dan-abramov"
      />
      <Heading size="md" color="white" paddingBottom={4}>
        {greeting}
      </Heading>
      <Heading size="lg" color="white">
        {bio1}
      </Heading>
      <Heading size="lg" color="white">
        {bio2}
      </Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
