import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useLocation } from "react-router-dom";

const App = () => {
  const [formInfo, setFormInfo] = useState({
    id: "41210f34-f037-4641-bb94-87470d94e292",
    version: 1,
    formName: "Order Details",
    filledByInfos: [
      {
        fieldNo: 103010,
        defaultValue: "",
        display: {
          inputType: "TEXT",
          label: "Article",
        },
        validation: {
          errorMessage: "Article can not be blank",
        },
        required: true,
      },
      // {
      //   fieldNo: 103020,
      //   defaultValue: "",
      //   display: {
      //     inputType: "TEXT",
      //     label: "Color",
      //   },
      //   validation: {
      //     errorMessage: "Color can not be blank",
      //   },
      //   required: true,
      // },
      // {
      //   fieldNo: 103030,
      //   defaultValue: "",
      //   display: {
      //     inputType: "TEXT",
      //     label: "Material",
      //   },
      //   validation: {
      //     errorMessage: "Material can not be blank",
      //   },
      //   required: true,
      // },
      // {
      //   fieldNo: 103040,
      //   defaultValue: "",
      //   display: {
      //     inputType: "TEXT",
      //     label: "Sole",
      //   },
      //   validation: {
      //     errorMessage: "Sole can not be blank",
      //   },
      //   required: true,
      // },
      // {
      //   fieldNo: 104006,
      //   defaultValue: "0",
      //   display: {
      //     inputType: "NUMBER",
      //     label: "Size 6",
      //   },
      //   validation: {
      //     errorMessage: "Size can not be blank",
      //   },
      //   required: true,
      // },
      // {
      //   fieldNo: 104007,
      //   defaultValue: "2",
      //   display: {
      //     inputType: "NUMBER",
      //     label: "Size 7",
      //   },
      //   validation: {
      //     errorMessage: "Size can not be blank",
      //   },
      //   required: true,
      // },
      // {
      //   fieldNo: 104008,
      //   defaultValue: "3",
      //   display: {
      //     inputType: "NUMBER",
      //     label: "Size 8",
      //   },
      //   validation: {
      //     errorMessage: "Size can not be blank",
      //   },
      //   required: true,
      // },
      // {
      //   fieldNo: 104009,
      //   defaultValue: "3",
      //   display: {
      //     inputType: "NUMBER",
      //     label: "Size 9",
      //   },
      //   validation: {
      //     errorMessage: "Size can not be blank",
      //   },
      //   required: true,
      // },
      // {
      //   fieldNo: 104010,
      //   defaultValue: "2",
      //   display: {
      //     inputType: "NUMBER",
      //     label: "Size 10",
      //   },
      //   validation: {
      //     errorMessage: "Size can not be blank",
      //   },
      //   required: true,
      // },
      // {
      //   fieldNo: 104011,
      //   defaultValue: "2",
      //   display: {
      //     inputType: "NUMBER",
      //     label: "Size 6",
      //   },
      //   validation: {
      //     errorMessage: "Size can not be blank",
      //   },
      //   required: true,
      // },
      // {
      //   fieldNo: 104012,
      //   defaultValue: "0",
      //   display: {
      //     inputType: "NUMBER",
      //     label: "Size 6",
      //   },
      //   validation: {
      //     errorMessage: "Size can not be blank",
      //   },
      //   required: true,
      // },
    ],
  });
  useEffect(() => {
    const getFormData = () => {
      fetch(
        `https://dotevolve-tech.web.app/resources/forms${location.pathname}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((res) => console.log(res));
    };
    getFormData();
  });



  const [Error, setError] = useState(true)

  const handleError = (e) => {
    if(e.target.value === ""){
      setError(true)
    }
    else{
      setError(false)
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  }

  const location = useLocation();
  console.log(location.pathname);

  return (
    <div>
      <h1>{formInfo.formName}</h1>
      {formInfo.filledByInfos.map((field) => 
        <div className="field">
          <form onSubmit={handleSubmit}>
          <TextField
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
            name={field.fieldNo}
            id={field.fieldNo}
            defaultValue={field.defaultValue}
            type={field.display.inputType}
            placeholder={field.display.label}
            required={formInfo.filledByInfos.required}
            // onChange={(e) => handleError()}
            error={Error}
            helperText={
              Error ? "Error Message" : ""
            }
          />

          <Button type="submit" variant="contained">Submit</Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
