import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const Navigate = useNavigate();
  return (
    <div className="text-center">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>404 - Page Not Found</h2>
      <button
        className="btn btn-lg btn-outline-success"
        onClick={() => {
          Navigate(-1);
        }}
      >
        <b>Go Back</b>
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
