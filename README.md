# PVL-react-modal

A simple modal designed for React (and OC's Project 14).

The modal is displayed with a customizable background and you can make it display anything you want.<br>
You can customize Background color, Modal background color, and Modal width directly in your component (height adapts to the content of the modal). 


## Install

```bash
npm i pvl-react-modal
```

## Use
```js
// Import the modal into the component file that will display it
import Modal from 'pvl-react-modal';


// Create your component with the following set of code to import the modal
const MyComponent = () => {

  // StateManager to check the state of the modal
  const [openModal, setOpenModal] = useState(false);
  
  // Function for closing the modal
  const closeModal = () => {
      if (openModal) {
          setOpenModal(false);
      };
  };
  
  // Customize your modal in this Object
  const modalStyle = {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      modalColor: "white",
      modalWidth: "40%"
  };
  
  // To open the modal, you just have to use the state of OpenModal in your code, triggerred by whatever you want
  setOpenModal(true);
  
  return (
    // Modal component
    // @params 
        // open: bool - Trigger for open modal
        // close: action - Triggered for close modal
        // customStyle: object - All customizable style for the Modal
    
    <Modal open={openModal} close={closeModal} customStyle={modalStyle}>
        // Your content here
    </Modal>
  );
};
```

