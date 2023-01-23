import { useEffect, useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import axios from "axios";
import './App.css'
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
      {
        fieldNo: 103020,
        defaultValue: "",
        display: {
          inputType: "TEXT",
          label: "Color",
        },
        validation: {
          errorMessage: "Color can not be blank",
        },
        required: true,
      },
      {
        fieldNo: 103030,
        defaultValue: "",
        display: {
          inputType: "TEXT",
          label: "Material",
        },
        validation: {
          errorMessage: "Material can not be blank",
        },
        required: true,
      },
      {
        fieldNo: 103040,
        defaultValue: "",
        display: {
          inputType: "TEXT",
          label: "Sole",
        },
        validation: {
          errorMessage: "Sole can not be blank",
        },
        required: true,
      },
      {
        fieldNo: 104006,
        defaultValue: "0",
        display: {
          inputType: "NUMBER",
          label: "Size 6",
        },
        validation: {
          errorMessage: "Size can not be blank",
        },
        required: true,
      },
      {
        fieldNo: 104007,
        defaultValue: "2",
        display: {
          inputType: "NUMBER",
          label: "Size 7",
        },
        validation: {
          errorMessage: "Size can not be blank",
        },
        required: true,
      },
      {
        fieldNo: 104008,
        defaultValue: "3",
        display: {
          inputType: "NUMBER",
          label: "Size 8",
        },
        validation: {
          errorMessage: "Size can not be blank",
        },
        required: true,
      },
      {
        fieldNo: 104009,
        defaultValue: "3",
        display: {
          inputType: "NUMBER",
          label: "Size 9",
        },
        validation: {
          errorMessage: "Size can not be blank",
        },
        required: true,
      },
      {
        fieldNo: 104010,
        defaultValue: "2",
        display: {
          inputType: "NUMBER",
          label: "Size 10",
        },
        validation: {
          errorMessage: "Size can not be blank",
        },
        required: true,
      },
      {
        fieldNo: 104011,
        defaultValue: "2",
        display: {
          inputType: "NUMBER",
          label: "Size 6",
        },
        validation: {
          errorMessage: "Size can not be blank",
        },
        required: true,
      },
      {
        fieldNo: 104012,
        defaultValue: "0",
        display: {
          inputType: "NUMBER",
          label: "Size 6",
        },
        validation: {
          errorMessage: "Size can not be blank",
        },
        required: true,
      },
    ],
  });
  const location = useLocation();
  useEffect(() => {
    const getFormData = () => {
      const formInfo = axios
        .get(
          "https://dotevolve-tech.web.app/resources/forms/41210f34-f037-4641-bb94-87470d94e292.json"
        )
        .then((response) => {
          console.log(response);
        });
    };
    getFormData();
  });
  const [datas, setDatas] = useState();
  const [Error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setDatas((datas) => ({ ...datas, [e.target.name]: e.target.value }));
    if (!/\S/.test(e.target.value)) {
      setError((error) => ({ ...error, [e.target.name]: true }));
    } else setError((error) => ({ ...error, [e.target.name]: false }));
  };

  return (
    <div>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {formInfo.formName}
      </Typography>
      <form onSubmit={handleSubmit}>
        {formInfo?.filledByInfos?.map((field) => (
          <div  className="field">
            <TextField
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                width:"80%"
              }}
              onChange={handleChange}
              name={field.fieldNo.toString()}
              id={field.fieldNo}
              defaultValue={field.defaultValue}
              type={field.display.inputType}
              placeholder={field.display.label}
              required={field.required}
              error={Error && Error[field.fieldNo]}
              helperText={
                Error && Error[field.fieldNo]
                  ? field.validation.errorMessage
                  : ""
              }
            />
          </div>
        ))}
        <Button
          type="submit"
          variant="contained"
          sx={{ display: "flex", alignItems: "center" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default App;
