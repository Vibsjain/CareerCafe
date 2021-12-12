import React from "react";
import "../Assets/CSS/OpeningForm.css";

export default function OpeningForm() {
  return (
    <div className="MainDivOpeningForm">
      <form>
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="name@example.com"
          />
        </div>
      </form>
    </div>
  );
}
