import React from "react";

export default function Stars({ num }) {
  if (num == 5) {
    return (
      <>
        <li className="bi bi-star-fill"></li>
        <li className="bi bi-star-fill"></li>
        <li className="bi bi-star-fill"></li>
        <li className="bi bi-star-fill"></li>
        <li className="bi bi-star-fill"></li>
      </>
    );
  } else {
    if (num == 4) {
      return (
        <>
          <li className="bi bi-star-fill"></li>
          <li className="bi bi-star-fill"></li>
          <li className="bi bi-star-fill"></li>
          <li className="bi bi-star-fill"></li>
          <li className="bi bi-star"></li>
        </>
      );
    } else {
      if (num == 3) {
        return (
          <>
            <li className="bi bi-star-fill"></li>
            <li className="bi bi-star-fill"></li>
            <li className="bi bi-star-fill"></li>
            <li className="bi bi-star"></li>
            <li className="bi bi-star"></li>
          </>
        );
      } else {
        if (num == 2) {
          return (
            <>
              <li className="bi bi-star-fill"></li>
              <li className="bi bi-star-fill"></li>
              <li className="bi bi-star"></li>
              <li className="bi bi-star"></li>
              <li className="bi bi-star"></li>
            </>
          );
        } else {
          if (num == 1) {
            return (
              <>
                <li className="bi bi-star-fill"></li>
                <li className="bi bi-star"></li>
                <li className="bi bi-star"></li>
                <li className="bi bi-star"></li>
                <li className="bi bi-star"></li>
              </>
            );
          } else {
            return (
              <>
                <li className="bi bi-star"></li>
                <li className="bi bi-star"></li>
                <li className="bi bi-star"></li>
                <li className="bi bi-star"></li>
                <li className="bi bi-star"></li>
              </>
            );
          }
        }
      }
    }
  }
}
