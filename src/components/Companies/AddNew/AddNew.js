import React, { useState } from "react";
import "./AddNew.css";
import TextFieldCustom from "../../TextFieldCustom/TextFieldCustom";
import { Button, Divider, IconButton } from "@mui/material";
import Slider from "@mui/material/Slider";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const AddNew = () => {
  const [skills, setSkills] = useState([
    { id: "skill" },
    { id: "skill" },
    { id: "skill" },
    { id: "skill" },
  ]);
  const marks = [
    { value: 0, label: "0" },
    { value: 1, label: "" },
    { value: 2, label: "" },
    { value: 3, label: "" },
    { value: 4, label: "" },
    { value: 5, label: "Proficiency" },
    { value: 6, label: "" },
    { value: 7, label: "" },
    { value: 8, label: "" },
    { value: 9, label: "" },
    { value: 10, label: "10" },
  ];
  const minMainInputWidth = "20rem";
  const minWeightWidth = "7.5rem";
  return (
    <div className="AddNewContainer">
      <div className="AddNew">
        <h2>Add a New Job Role</h2>
        <div className="addRole">
          <TextFieldCustom
            id="jobCategory"
            width="50%"
            minWidth={minMainInputWidth}
            type="text"
            label="Job category(s)"
          />
          <TextFieldCustom
            id="role"
            width="50%"
            minWidth={minMainInputWidth}
            type="text"
            label="Job Role"
          />
          <TextFieldCustom
            id="location"
            width="50%"
            minWidth={minMainInputWidth}
            type="text"
            label="location"
          />
          <p style={{ fontWeight: "bold" }}>Academics</p>
          <TextFieldCustom
            id="minschoolAvg"
            width="50%"
            minWidth={minMainInputWidth}
            type="number"
            label="Minimum Average of 10th and 12th (in percentage)"
            min="0"
            max="100"
          />
          <div className="comboTextField">
            <TextFieldCustom
              id="recschoolAvg"
              width="50%"
              minWidth={minMainInputWidth}
              type="number"
              label="Recommended Average of 10th and 12th (in percentage)"
              min="0"
              max="100"
            />
            <TextFieldCustom
              id="schoolAvgWeight"
              type="number"
              minWidth={minWeightWidth}
              label="Weightage"
              min="0"
              max="100"
            />
          </div>
          <br />
          <TextFieldCustom
            id="degree"
            width="50%"
            minWidth={minMainInputWidth}
            type="text"
            label="Highest Degree(s) required"
          />
          <TextFieldCustom
            id="mindegreeCGPA"
            width="50%"
            minWidth={minMainInputWidth}
            type="number"
            label="Minimum CGPA"
            min="0"
            max="10"
          />
          <div className="comboTextField">
            <TextFieldCustom
              id="recdegreeCGPA"
              width="50%"
              minWidth={minMainInputWidth}
              type="number"
              label="Recommended CGPA"
              min="0"
              max="10"
            />
            <TextFieldCustom
              id="CGPAWeight"
              type="number"
              minWidth={minWeightWidth}
              label="Weightage"
              min="0"
              max="100"
            />
          </div>
          <p style={{ fontWeight: "bold" }}>Work Experience</p>
          <TextFieldCustom
            id="minExp"
            width="50%"
            minWidth={minMainInputWidth}
            type="number"
            label="Minimum Experience (in years)"
            min="0"
          />
          <div className="comboTextField">
            <TextFieldCustom
              id="recExp"
              width="50%"
              minWidth={minMainInputWidth}
              type="number"
              label="Recommended Experience"
              min="0"
            />
            <TextFieldCustom
              id="ExpWeight"
              type="number"
              minWidth={minWeightWidth}
              label="Weightage"
              min="0"
              max="100"
            />
          </div>
          <p style={{ fontWeight: "bold" }}>Skills required</p>
          <ul id="skillsList">
            {skills.map((i) => (
              <li>
                <div className="skillTextField">
                  <TextFieldCustom
                    id={i.id}
                    type="text"
                    width="25%"
                    minWidth="10rem"
                    label="Skill"
                  />
                  <Slider
                    aria-label="Temperature"
                    defaultValue={3}
                    // getAriaValueText={"0"}
                    valueLabelDisplay="auto"
                    step={1}
                    marks={marks}
                    min={0}
                    max={10}
                  />
                  <TextFieldCustom
                    id={`${i.id}Weight`}
                    type="number"
                    minWidth={minWeightWidth}
                    label="Weightage"
                    min="0"
                    max="100"
                  />
                  <IconButton id={`deleteIcon`}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              </li>
            ))}
            <IconButton id="addSkillButton">
              <AddCircleIcon />
            </IconButton>
          </ul>
          <p style={{ fontWeight: "bold" }}>Entrepreneurship</p>
          <TextFieldCustom
            id="minEntrepreneurshipEvents"
            width="50%"
            minWidth={minMainInputWidth}
            type="number"
            label="Minimum number of Entrepreneurship Events Participated"
            min="0"
          />
          <div className="comboTextField">
            <TextFieldCustom
              id="recEntrepreneurshipEvents"
              width="50%"
              minWidth={minMainInputWidth}
              type="number"
              label="Recommended number of Entrepreneurship Events Participated"
              min="0"
            />
            <TextFieldCustom
              id="EntWeight"
              type="number"
              minWidth={minWeightWidth}
              label="Weightage"
              min="0"
              max="100"
            />
          </div>
          <p style={{ fontWeight: "bold" }}>Research</p>
          <TextFieldCustom
            id="minPublishQ1"
            width="50%"
            minWidth={minMainInputWidth}
            type="number"
            label="Minimum number of Published Papers in Q1 Journal"
            min="0"
          />
          <div className="comboTextField">
            <TextFieldCustom
              id="recPublishQ1"
              width="50%"
              minWidth={minMainInputWidth}
              type="number"
              label="Recommended number of Published Papers in Q1 Journal"
              min="0"
            />
            <TextFieldCustom
              id="q1Weight"
              type="number"
              minWidth={minWeightWidth}
              label="Weightage"
              min="0"
              max="100"
            />
          </div>
          <br />
          <TextFieldCustom
            id="minPublishQ2"
            width="50%"
            minWidth={minMainInputWidth}
            type="number"
            label="Minimum number of Published Papers in Q2 Journal"
            min="0"
          />
          <div className="comboTextField">
            <TextFieldCustom
              id="recPublishQ2"
              width="50%"
              minWidth={minMainInputWidth}
              type="number"
              label="Recommended number of Published Papers in Q2 Journal"
              min="0"
            />
            <TextFieldCustom
              id="q2Weight"
              type="number"
              minWidth={minWeightWidth}
              label="Weightage"
              min="0"
              max="100"
            />
          </div>
          <br />
          <TextFieldCustom
            id="minPublishQ3"
            width="50%"
            minWidth={minMainInputWidth}
            type="number"
            label="Minimum number of Published Papers in Q3 Journal"
            min="0"
          />
          <div className="comboTextField">
            <TextFieldCustom
              id="recPublishQ3"
              width="50%"
              minWidth={minMainInputWidth}
              type="number"
              label="Recommended number of Published Papers in Q3 Journal"
              min="0"
            />
            <TextFieldCustom
              id="q3Weight"
              type="number"
              minWidth={minWeightWidth}
              label="Weightage"
              min="0"
              max="100"
            />
          </div>
          <br />
          <TextFieldCustom
            id="minPublishQ4"
            width="50%"
            minWidth={minMainInputWidth}
            type="number"
            label="Minimum number of Published Papers in Q4 Journal"
            min="0"
          />
          <div className="comboTextField">
            <TextFieldCustom
              id="recPublishQ4"
              width="50%"
              minWidth={minMainInputWidth}
              type="number"
              label="Recommended number of Published Papers in Q4 Journal"
              min="0"
            />
            <TextFieldCustom
              id="q4Weight"
              type="number"
              minWidth={minWeightWidth}
              label="Weightage"
              min="0"
              max="100"
            />
          </div>
          <label for="otherReqs">
            Other requirements <span>(Optional)</span>
          </label>
          <textarea
            id="otherReqs"
            name="otherReqs"
            rows="5"
            cols="50"
          ></textarea>
          <label for="resumeDetails">
            What according to you makes a good resume? <span>(Optional)</span>
          </label>
          <textarea
            id="resumeDetails"
            name="resumeDetails"
            rows="5"
            cols="50"
          ></textarea>
          <Button variant="contained" id="submitButton">
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
