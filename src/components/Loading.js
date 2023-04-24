import { ThreeDots, FallingLines, TailSpin } from "react-loader-spinner";

export function Loading() {
    return (
        <ThreeDots
            height="20"
            width="20"
            radius="6"
            color="white"
            ariaLabel="loading"
            background-color="transparent"
        // wrapperStyle
        // wrapperClass
        />);
}
export function LoadingCircle() {
    return (
        <TailSpin
            height="60"
            width="60"
            color="#fff"
            ariaLabel="tail-spin-loading"
            radius="1"
            // wrapperStyle={{}}
            // wrapperClass=""
            visible={true}
        />
    );
}

export function LoadingLines() {
    return (
        <FallingLines
            color="#E1DDDC"
            width="100"
            visible={true}
            ariaLabel='falling-lines-loading'
        />
    );
}