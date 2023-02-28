import React from "react";
import { Link } from "react-router-dom";
import "./Peers.css";
const PeersCard = ({ peerdata }) => {
  return (
    <div className=" max-w-2xl mx-auto mb-6">
      <div class="flex items-center w-full justify-center">
        <div class="">
          <div class="bg-white peers crounded-lg py-3 px-3">
            <div class="photo-wrapper">
              <img
                class="w-32 h-32 rounded-full mx-auto"
                src="https://p.kindpng.com/picc/s/394-3947019_round-profile-picture-png-transparent-png.png"
                alt="John Doe"
              />
            </div>
            <div class="p-2">
              <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                {peerdata.firstName} {peerdata.lastName}
              </h3>
              <div class="text-center text-gray-400 text-sm font-semibold">
                <p>{peerdata.designation}</p>
              </div>
              <table class="text-xs my-3">
                <tbody>
                  <tr>
                    <td class="px-2 py-2 text-gray-500  text-base font-semibold">
                      Department:
                    </td>
                    <td class="px-2 py-2 text-base">{peerdata.department}</td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-gray-500  text-base font-semibold">
                      Phone :
                    </td>
                    <td class="px-2 py-2 text-base">{peerdata.number}</td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-gray-500  text-base font-semibold">
                      Email :
                    </td>
                    <td class="px-2 py-2 text-base">{peerdata.email}</td>
                  </tr>
                </tbody>
              </table>

              <div class="text-center my-3">
                <Link to="/peersprofile " state={peerdata}>
                  <p
                    class="text-white bg- hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    style={{ backgroundColor: "#97144D" }}
                  >
                    View Profile
                  </p>
                </Link>
                {/* <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeersCard;
