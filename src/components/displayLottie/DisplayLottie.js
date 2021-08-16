import React, { Suspense } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Loading from "../../containers/loading/Loading";

// export default class DisplayLottie extends Component {
//   render() {
//     const animationData = this.props.animationData;
//     const defaultOptions = {
//       loop: true,
//       autoplay: true,
//       animationData: animationData,
//     };

//     return (
//       <Suspense fallback={<Loading />}>
//         <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
//         <Player autoplay loop src= {`$`}></Player>
//       </Suspense>
//     );
//   }
// }

const DisplayLottie = ({ src }) => {
  console.log("Lottie : ", src)
  return (
    <Suspense fallback={<Loading />}>
      {/* <Lottie options={defaultOptions} isClickToPauseDisabled={true} /> */}
      <Player autoplay loop src={src}></Player>
    </Suspense>
  );
};

export default DisplayLottie;
