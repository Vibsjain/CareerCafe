import React from "react";
import "../Assets/CSS/OpeningForm.css";

export default function OpeningForm() {
    return (
        <div className="MainDivOpeningForm">
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="name@example.com"
                    />
                </div>
            </form>
        </div>
    );
}
