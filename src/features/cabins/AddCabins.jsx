import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import styled from "styled-components";

const StyledAllCabin = styled.div`
  @media (max-width: 768px) {
    max-width: 200px;
  }
`;
function AddCabins() {
  return (
    <StyledAllCabin>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </StyledAllCabin>
  );
}

//function AddCabins() {
// const [isOpenModal, setIsOpenModal] = useState(false);
// return (
//  <div>
//   <Button sizes="large" onClick={() => setIsOpenModal((show) => !show)}>
//     Add new cabin
// </Button>
// {isOpenModal && (
//  <Modal onClose={() => setIsOpenModal(false)}>
//    <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//  </Modal>
// )}
//  </div>
//);
//}

export default AddCabins;
