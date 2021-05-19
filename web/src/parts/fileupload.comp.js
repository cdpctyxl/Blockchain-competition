import { Input, FormControl, FormLabel, InputGroup, InputLeftElement, FormErrorMessage, Code, Icon } from "@chakra-ui/react"
import { atom, useRecoilState } from "recoil"

export const pieceState = atom({
  key: "ART_PIECE",
  default: null
})

export const pieceProofState = atom({
  key: "ART_PIECE_PROOF",
  default: null
})
const FileUpload = () => {

  const [piece, setPiece] = useRecoilState(pieceState);
  const [pieceProof, setPieceProof] = useRecoilState(pieceProofState);
  function previewPiece(event) {

    debugger

    let reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])


    reader.onload = function (e) {
      // 转换后的base64就在e.target.result里面,直接放到img标签的src属性即可

      setPiece(e.target.result)
    }
  }
  function previewPieceProof(event) {

    debugger

    let reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])


    reader.onload = function (e) {
      // 转换后的base64就在e.target.result里面,直接放到img标签的src属性即可

      setPieceProof(e.target.result)
    }
  }
  return (
    <FormControl isRequired>
      <FormLabel htmlFor="writeUpFile"></FormLabel>
      <InputGroup>
    
        <Input type='file' accept="image/gif,image/jpeg,image/jpg,image/png,image/svg" placeholder="你的作品 ..." name="dd" onChange={previewPiece}></Input>
        <img src={piece} alt=""  height="200" width="200" />

      </InputGroup>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
        />
        <Input type='file' accept="image/gif,image/jpeg,image/jpg,image/png,image/svg" name="" onChange={previewPieceProof} ></Input>
        <img src={pieceProof} alt=""  height="200" width="200" />
      </InputGroup>
      <FormErrorMessage>

      </FormErrorMessage>
    </FormControl>
  );
}

export default FileUpload;