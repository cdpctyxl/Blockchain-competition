import { Input, FormControl, FormLabel, InputGroup, InputLeftElement, FormErrorMessage, Code, Icon } from "@chakra-ui/react";



const FileUpload = () => {


  return (
    <FormControl isInvalid  isRequired>
      <FormLabel htmlFor="writeUpFile"></FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
         
        />
        <input type='file' accept="*.jpg" name="dd" ></input>
        <Input
          placeholder= "你的作品 ..."
        
          value=""
        />
      </InputGroup>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
         
        />
        <input type='file' accept="" name=""></input>
        <Input
          placeholder= "你的授权书 ..."
        
          value=""
        />
      </InputGroup>
      <FormErrorMessage>
        
      </FormErrorMessage>
    </FormControl>
  );
}

export default FileUpload;