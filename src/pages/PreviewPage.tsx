import { FunctionComponent } from "react";
import { Document, Page } from "react-pdf";

import pdfViewer from "./pdfViewer";

const PreviewPage: FunctionComponent = () => {
  return (
    <div className="relative bg-snow w-full h-[1200px] overflow-hidden flex flex-col py-3 px-[138px] box-border items-center justify-center text-center text-[14.25px] text-maroon font-rubik">
      <div className="w-[978px] h-[1150px] overflow-hidden shrink-0 flex flex-row flex-wrap py-0 px-[60px] box-border items-center justify-center gap-[16px]">
        <div className="overflow-hidden flex flex-col py-0 px-[0.5648102164268494px] items-center justify-center">
          <img
            className="relative w-[172.27px] h-[68.91px] overflow-hidden shrink-0"
            alt=""
            src="/logo-svg.svg"
          />
        </div>
        <div className="rounded-[25px] bg-lavenderblush box-border h-[900px] overflow-hidden flex flex-col py-7 px-[343px] items-center justify-start border-[1px] border-solid border-mistyrose-200">
          <div className="rounded-[41px] bg-lightpink overflow-hidden flex flex-col py-[7px] px-[15px] items-center justify-center">
            <div className="relative leading-[20px] font-medium">{`HTML & CSS Preview`}</div>
            <div className="overflow-hidden flex">{pdfViewer()}</div>
          </div>
        </div>
        <div className="overflow-hidden flex flex-col items-center justify-center gap-[16px] text-sm ">
          <div className="relative w-[498px] h-[70px] overflow-hidden shrink-0">
            <div className=" overflow-hidden flex flex-row items-center justify-center">
              <button>
                <div className="rounded-[10px] bg-maroon overflow-hidden flex flex-row py-[17px] px-[20px] items-center justify-center text-white">
                  <div className="relative font-medium font-rubik">
                    Download as PDF
                  </div>
                </div>
              </button>
              <button>
                <div className="rounded-[10px] bg-lavenderblush overflow-hidden flex flex-row py-[17px] px-[20px] font-rubik items-center justify-center  border-[1px] border-solid border-maroon-100">
                  <img
                    className="relative w-[20px] h-[20px]"
                    alt=""
                    src="/group-6.svg"
                  />
                  <div className="relative font-medium">
                    Connect HTML with CSV data
                  </div>
                </div>
              </button>
            </div>
          </div>
          {/* <div className="overflow-hidden flex flex-row py-[7px] px-[15px] items-center justify-center gap-[9px] text-[14.25px] text-darkgreen">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/checkcircle.svg"
            />
            <div className="relative leading-[20px] font-medium">
              PDFs Downloaded
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
