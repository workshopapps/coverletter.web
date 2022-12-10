import React from "react";
import { useGlobalContext } from "../../context/context";
import { EditIcon } from "./Icons";

function ProfileSide({setShowEditProfileModal}) {
	const { user } = useGlobalContext();

	return (
			<div className="flex justify-between items-center max-[1024px]:wrap">
				<div className="flex items-center justify-center gap-4">
					<div className="rounded-full w-16 h-16 max-[1188px]:h-14 max-[1188px]:w-14 bg-[#CDDCF8] font-bold  text-[#0652DD] flex items-center justify-center object-fill">
						{user?.name[0].toUpperCase()}
					</div>

					<div className="">
						<p className="font-bold mb-3">
							{user?.name.split(" ").slice(0, 2).join(" ")}
						</p>
						{user?.jobRole ? <p>{user.jobRole}</p>:<React.Fragment />}
					</div>
				</div>

				<div>
					<p className="flex gap-4 items-center cursor-pointer" onClick={()=> setShowEditProfileModal(true)}>
						<span>
							<EditIcon />
						</span>
						<span>Edit</span>
					</p>
				</div>
			</div>
	);
}

export default ProfileSide;
