import { ThreeDots } from "react-loader-spinner";

export default function Loader({theme}) {
    return <ThreeDots visible={true} color={theme} />;
}
