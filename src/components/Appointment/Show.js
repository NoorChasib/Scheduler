import React from "react";

// shows booked appointment component

export default function Show(props) {
  const { student, interviewer, onEdit, onDelete } = props;
  const { name: intName } = interviewer || {};

  return (
    <main className="appointment__card appointment__card--show">
      <section className="appointment__card-left">
        <h2 className="text--regular"> {student} </h2>
        <section className="interviewer">
          <h4 className="text--light">Interviewer</h4>
          <h3 className="text--regular"> {intName} </h3>
        </section>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <img
            className="appointment__actions-button"
            src="images/edit.png"
            alt="Edit"
            onClick={onEdit}
          />
          <img
            className="appointment__actions-button"
            src="images/trash.png"
            alt="Delete"
            onClick={onDelete}
          />
        </section>
      </section>
    </main>
  );
}
