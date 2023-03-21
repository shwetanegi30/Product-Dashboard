import { Visibility } from "@material-ui/icons";
import "./memberJoin.css";
import members from "./memberData";
import React from "react";

const MemberJoin = () => {
  return (
    <div className="memberJoin">
      <h3 className="memberJoinTitle">New Join Members</h3>

      {members.map((member) => (
        <ul className="memberJoinList">
          <li className="memberJoinItem">
            <img src={member.img} alt="photoUser" className="memberJoinImg" />
            <div className="memberJoinUser">
              <span className="memberJoinUserName">{member.name}</span>
              <span className="memberJoinUserTitle">{member.profession}</span>
            </div>
            <button className="memberJoinButton">
              <Visibility />
              &nbsp; {member.visibility}
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default MemberJoin;
