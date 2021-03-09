// import the Event Manager Dispatch Event for update create read etc.
import managerView from "../widgets/manager";
import employeeView from "../widgets/employee"

// buttons scripted for events.
// create manager obj.
// create employee obj.
// create a header obj as well of the name display.

const DisplayPanel = () => {

  const view = document.querySelector("#panel");
 
 
  

  const init = (data) => {
       view.appendChild(managerView(data))
       view.appendChild(employeeView(data))
  };

  const updateDisplay = (data) => {
    // tair down
    // rebuild
  };

  return { updateDisplay, view, init };
};

export default DisplayPanel;
