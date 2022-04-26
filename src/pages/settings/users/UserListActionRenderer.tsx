/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export default (props: any) => {
  //console.log(props.context);
  const navigate = useNavigate();
  return (
    <div>
      <span>
        <button
          type="button"
          className="btn btn-outline-secondary btn-sm"
          onClick={props.context.handleOpen}
          //data-bs-toggle="modal"
          //data-bs-target="#deleteUserModal"
        >
          <i className="bi bi-trash"></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-sm"
          onClick={() => navigate("/security/user/edit/" + props.data.username)}
        >
          <i className="bi bi-pencil"></i>
          <span className="visually-hidden">Button</span>
        </button>
      </span>
    </div>
  );
};
