import { Link } from "react-router-dom";
import ProfileAccount from "../Components/ProfilePage/ProfileAccount";
import ProfileSide from "../Components/ProfilePage/ProfileSide";
import Upload from "../Components/ProfilePage/Upload";
import { useGlobalContext } from "../context/context";

const ProfilePage = () => {
	const {user} = useGlobalContext()

	const CVGenerated = [
		{
			firstName: user?.name,
			lastName: "",
			extension: ".pdf",
		},
		{
			firstName: user?.name,
			lastName: "",
			extension: ".pdf",
		},
	];

	return (
		<div className="bg-[#03296f11] py-8">
			<div className="relative max-w-screen-2xl m-auto py-5  md:px-10 xl:px-15 max-[759px]:px-5">
				<div className="md:flex gap-8 md:gap-4 pr-8 pl-3 max-[1023px]:pr-0">
					<div className="bg-white w-4/12 max-[1078px]:w-5/12 rounded-md h-max mt- p-6 max-[938px]:hidden">
						<ProfileSide />
					</div>

					<div className="md:flex md:flex-col md:gap-4 w-8/12 max-[938px]:w-full">
						<div>
							<div className="flex flex-col md:flex-row justify-between mb-6">
								<div className="flex gap-4 items-center">
									<h1 className="font-bold text-[1.5em] pb-2">
										Profile
									</h1>
									<p className="bg-[#D7EBE2] text-[#26704C] hidden md:block border-2 border-[#068850] px-2 py-1 text-[0.6em] font-bold rounded-lg">
										Free Plan
									</p>
								</div>

								<Link
									to="/generate"
									className="font-bold text-white bg-[#0652DD] block text-center py-2 rounded-lg px-4"
								>
									Generate Cover Letter
								</Link>
							</div>

							<ProfileAccount />
						</div>

						{/* Cover Letter Generated Section */}
						<div className="bg-white rounded-md h-max p-6 my-6">
							<h1 className="font-bold text-[1.5em]">
								Cover Letter Generated
							</h1>

							<div>
								{CVGenerated.map((CV, index) => {
									return (
										<Upload resume={CV} key={index} index={index} />
									);
								}).reverse()}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
