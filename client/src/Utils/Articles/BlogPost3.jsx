import image1 from "../../Assets/artimg31.png";
import image2 from "../../Assets/artimg32.png";
import image3 from "../../Assets/artimg33.png";
const BlogPost3 = () => {
	return (
		<section>
			<img src={image1} alt="" className="mx-auto" />
			<p className=" my-10 text-lg">
				A cover letter's purpose is to introduce you to the recruiter to
				get them interested in you as a candidate. As such, it has to be
				brief and straightforward. It must strike the right balance
				between the length and the message.
			</p>
			<p className=" my-10 text-lg">
				There are dozens of job applications for each position and the
				recruiters cannot spend too much time on each application. If
				your cover letter has too much information on it, your
				application might be skipped and that's the end!
			</p>
			<p className=" my-10 text-lg mb-16">
				A good cover letter contains 3 to 4 paragraph counts and no more
				than 400 words in total on a single page. For entry-level
				candidates, 200 words is the sweet spot. Ideally, your cover
				letter contents should take up half a page or a full page.
			</p>
			<img src={image2} alt="" className="mx-auto" />
			<p className=" my-16 text-lg  ">
				An effective cover letter contains three to four paragraphs.
				It’s important to keep the sentences short so the reader can
				quickly navigate your cover letter. If you have more experience,
				you likely have more relevant qualifications and stories. This
				may entice you to make your cover letter longer. Do not fall
				into the trap! Longer does not mean better. Select a few key
				successes and leave others for the interview process
			</p>
			<img src={image3} alt="" className="mx-auto" />
			<p className=" my-10 text-lg  mt-16">
				Most importantly, do not forget to format your cover letter .
				One of the common mistakes people make when writing cover
				letters is forgetting to proofread their document. It is
				absolutely essential for you to go through your writing again
				for any grammatical errors and unnecessary repititions so as to
				make it as straightforward as possible
			</p>
			<p className=" my-10 text-lg">
				Writing a cover letter can be intimidating. If you remember to
				keep your writing concise and highlight only your relevant
				experiences, you will be on your way to snagging an interview in
				no time.
			</p>
		</section>
	);
};

export default BlogPost3;
