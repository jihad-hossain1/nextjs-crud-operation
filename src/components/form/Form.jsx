import React from "react";
import AddUserForm from "../addUserForm/AddUserForm";
import UpdateUserForm from "../updateUserForm/UpdateUserForm";

const Form = () => {
  const flag = true;

  return <div>{flag ? <AddUserForm /> : <UpdateUserForm />}</div>;
};

export default Form;
