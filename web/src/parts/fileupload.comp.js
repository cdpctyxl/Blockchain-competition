import { Input, FormControl, FormLabel, InputGroup, InputLeftElement, FormErrorMessage, Code, Icon } from "@chakra-ui/react";

function previewFile(file) {
  alert(file)
  if(file == undefined)
    return;
  let reader
  if (file) {
    // 创建流对象
    reader = new FileReader()
    reader.readAsDataURL(file)
  }
  // 捕获 转换完毕
  reader.onload = function(e) {
    // 转换后的base64就在e.target.result里面,直接放到img标签的src属性即可
    document.querySelector('img').src = e.target.result
  }
}

const FileUpload = () => {
 


  return (
    <FormControl   isRequired>
      <FormLabel htmlFor="writeUpFile"></FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
         
        />
        <Input type='file' accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"  name="dd"  ></Input>
        <img src="" id="999" alt=""/>
        <Input
          placeholder= "你的作品 ..."
        
          value=""
        />
      </InputGroup>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
         
        />
        <Input type='file' accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"  name=""  ></Input>
        <img src="" id="998" alt=""/>
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