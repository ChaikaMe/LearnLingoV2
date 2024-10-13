import { Radio, styled } from "@mui/material";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/helper/selectors";

export default function BpRadio(props) {
  const globalTheme = useSelector(selectTheme);
  const BpIcon = styled("span")(({ theme }) => ({
    borderRadius: "50%",
    width: 24,
    height: 24,
    border: `2px solid ${globalTheme.standart}`,
    backgroundColor: "transparent",
    position: "relative",
    marginLeft: 8,
    marginRight: 8,
    padding: 9,
    "input:hover ~ &": {
      borderColor: `${globalTheme.bright}`,
    },
  }));

  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: "transparent",
    "&:before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      width: 14,
      height: 14,
      borderRadius: "50%",
      backgroundColor: `${globalTheme.standart}`,
      border: `2px solid ${globalTheme.standart}`,
      transform: "translate(-50%, -50%)",
    },
    "input:hover ~ &": {
      "&:before": {
        backgroundColor: `${globalTheme.bright}`,
      },
    },
  });

  return (
    <div style={{ height: "24px", display: "flex", alignItems: "center" }}>
      <Radio
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        {...props}
      />
    </div>
  );
}
