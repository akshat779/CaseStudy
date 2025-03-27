import { Slider } from "../../components";
import React from "react";
export default function ProductpagetwoColumnslider() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  return (
    <div className="flex w-full flex-col items-start">
      
      <div className="mx-auto flex w-[84%] flex-col md:w-full">
        
        <Slider
          autoPlay
          autoPlayInterval={2000}
          responsive={{
            0: { items: 1 },
            551: { items: 1 },
            1051: { items: 0 },
          }}
          disableDotsControls
          activeIndex={sliderState}
          onSlideChanged={(e) => {
            setSliderState(e?.item);
          }}
          ref={sliderRef}
          items={[...Array(0)].map(() => (
            <React.Fragment key={Math.random()}></React.Fragment>
          ))}
        />
      </div>
    </div>
  );
}
