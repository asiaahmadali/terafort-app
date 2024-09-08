import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
function OpenPositions() {
  return (
    <>
      <div className="md:p-[100px] p-[10px] ">
        <h1 className="md:text-4xl text-xl font-bold text-center md:mb-[50px] mb-[20px]">
          Open Positions
        </h1>

        <div className="flex flex-col gap-5 items-center">
          <div className="border-[1px] border-gray-200 md:p-4 p-3 w-full rounded-[30px] flex justify-between cursor-pointer">
            <h1 className="md:text-xl text-[17px] text-orange-400 font-medium">
              2D Spine Animator
            </h1>
            <div>
              <Link>
                <div className="flex gap-1 items-center">
                  <p className="text-purple-600 text-[16px] font-medium">
                    APPLY
                  </p>
                  <FiChevronRight className="font-bold text-xl text-orange-400"></FiChevronRight>
                </div>
              </Link>
            </div>
          </div>
          {/*  */}
          <div className="border-[1px] border-gray-200 md:p-4 p-3 w-full rounded-[30px] flex justify-between cursor-pointer">
            <h1 className="md:text-xl text-[17px] text-orange-400 font-medium">
              Business Developer Executive
            </h1>
            <div>
              <Link>
                <div className="flex gap-1 items-center">
                  <p className="text-purple-600 text-[16px] font-medium">
                    APPLY
                  </p>
                  <FiChevronRight className="font-bold text-xl text-orange-400"></FiChevronRight>
                </div>
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="border-[1px] border-gray-200 md:p-4 p-3 w-full rounded-[30px] flex justify-between cursor-pointer">
            <h1 className="md:text-xl text-[17px] text-orange-400 font-medium">
              Backend Developer
            </h1>
            <div>
              <Link>
                <div className="flex gap-1 items-center">
                  <p className="text-purple-600 text-[16px] font-medium">
                    APPLY
                  </p>
                  <FiChevronRight className="font-bold text-xl text-orange-400"></FiChevronRight>
                </div>
              </Link>
            </div>
          </div>
          {/*  */}
          <div className="border-[1px] border-gray-200 md:p-4 p-3 w-full rounded-[30px] flex justify-between cursor-pointer">
            <h1 className="md:text-xl text-[17px] text-orange-400 font-medium">
              IOS Developer
            </h1>
            <div>
              <Link>
                <div className="flex gap-1 items-center">
                  <p className="text-purple-600 text-[16px] font-medium">
                    APPLY
                  </p>
                  <FiChevronRight className="font-bold text-xl text-orange-400"></FiChevronRight>
                </div>
              </Link>
            </div>
          </div>
          {/*  */}
          <div className="border-[1px] border-gray-200 md:p-4 p-3 w-full rounded-[30px] flex justify-between cursor-pointer">
            <h1 className="md:text-xl text-[17px] text-orange-400 font-medium">
              Marketing Specialist
            </h1>
            <div>
              <Link>
                <div className="flex gap-1 items-center">
                  <p className="text-purple-600 text-[16px] font-medium">
                    APPLY
                  </p>
                  <FiChevronRight className="font-bold text-xl text-orange-400"></FiChevronRight>
                </div>
              </Link>
            </div>
          </div>
          {/*  */}
          <div className="border-[1px] border-gray-200 md:p-4 p-3 w-full rounded-[30px] flex justify-between cursor-pointer">
            <h1 className="md:text-xl text-[17px] text-orange-400 font-medium">
              2D Concept Artist
            </h1>
            <div>
              <Link>
                <div className="flex gap-1 items-center">
                  <p className="text-purple-600 text-[16px] font-medium">
                    APPLY
                  </p>
                  <FiChevronRight className="font-bold text-xl text-orange-400"></FiChevronRight>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OpenPositions;
