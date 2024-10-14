import { useState } from "react";
import icons from "../../img/icons.svg";
import css from "./Filters.module.css";
import { MenuItem, Select, styled } from "@mui/material";

export default function Filters({ filters }) {
  const { language, setLanguage, level, setLevel, price, setPrice } = filters;
  const handleLangChange = (event) => {
    setLanguage(event.target.value);
  };
  const handleLvlChange = (event) => {
    setLevel(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const CustomIcon = (props) => (
    <svg
      width="20"
      height="20"
      fill="none"
      style={{ marginBottom: 4 }}
      {...props}
    >
      <use href={`${icons}#icon-arrow`} />
    </svg>
  );

  return (
    <div className={css.container}>
      <label className={css.label}>
        Language
        <Select
          id="language"
          value={language}
          onChange={handleLangChange}
          IconComponent={CustomIcon}
          fullWidth
          sx={{
            width: 221,
            height: 48,
            backgroundColor: "#fff",
            borderRadius: "14px",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
              outline: "transparent",
            },
          }}
        >
          <MenuItem value={""}>-</MenuItem>
          <MenuItem value={"French"}>French</MenuItem>
          <MenuItem value={"German"}>German</MenuItem>
          <MenuItem value={"Spanish"}>Spanish</MenuItem>
          <MenuItem value={"English"}>English</MenuItem>
          <MenuItem value={"Italian"}>Italian</MenuItem>
          <MenuItem value={"Korean"}>Korean</MenuItem>
          <MenuItem value={"Vietnamese"}>Vietnamese</MenuItem>
          <MenuItem value={"Mandarin Chinese"}>Mandarin Chinese</MenuItem>
        </Select>
      </label>
      <label className={css.label}>
        Level of knowledge
        <Select
          id="levelOfKnowledge"
          value={level}
          onChange={handleLvlChange}
          IconComponent={CustomIcon}
          fullWidth
          sx={{
            width: 198,
            height: 48,
            backgroundColor: "#fff",
            borderRadius: "14px",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
              outline: "transparent",
            },
          }}
        >
          <MenuItem value={""}>-</MenuItem>
          <MenuItem value={"A1 Beginner"}>A1 Beginner</MenuItem>
          <MenuItem value={"A2 Elementary"}>A2 Elementary</MenuItem>
          <MenuItem value={"B1 Intermediate"}>B1 Intermediate</MenuItem>
          <MenuItem value={"B2 Upper-Intermediate"}>
            B2 Upper-Intermediate
          </MenuItem>
          <MenuItem value={"C1 Advanced"}>C1 Advanced</MenuItem>
          <MenuItem value={"C2 Proficient"}>C2 Proficient</MenuItem>
        </Select>
      </label>
      <label className={css.label}>
        Price
        <Select
          id="price"
          value={price}
          onChange={handlePriceChange}
          IconComponent={CustomIcon}
          fullWidth
          sx={{
            width: 124,
            height: 48,
            backgroundColor: "#fff",
            borderRadius: "14px",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
              outline: "transparent",
            },
          }}
        >
          <MenuItem value={""}>-</MenuItem>
          <MenuItem value={10}>10$</MenuItem>
          <MenuItem value={20}>20$</MenuItem>
          <MenuItem value={30}>30$</MenuItem>
          <MenuItem value={40}>40$</MenuItem>
          <MenuItem value={50}>50$</MenuItem>
        </Select>
      </label>
    </div>
  );
}
