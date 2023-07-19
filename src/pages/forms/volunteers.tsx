import { Volunteers } from "@prisma/client";
import React from "react";
import { prisma } from "~/server/db";

const volunteers = ({ volunteers }: { volunteers: Volunteers[] }) => {
  return (
    <div>
      <h1>volunteers</h1>

      <div>
        <h1>Form</h1>
        <div>
          <label>Name: </label>
          <input />
        </div>
      </div>

      <div>
        {volunteers.map((volunteer) => {
          return (
            <div key={volunteer.id}>
              <h1>Name: {volunteer.Name}</h1>
              <p>Purpose: {volunteer.Purpose}</p>
              <p>Joined at: {volunteer.Date}</p>
              <p>{volunteer.Signed ? "Is Signed" : "Is not Signed"}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default volunteers;

export async function getServerSideProps() {
  const data: Volunteers[] = await prisma.volunteers.findMany();

  // console.log(data);

  return {
    props: {
      volunteers: data,
    },
  };
}
