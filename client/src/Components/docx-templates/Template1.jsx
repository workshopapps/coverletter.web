import {
	Document,
	Paragraph,
	TextRun,
	FrameAnchorType,
	HorizontalPositionAlign,
	VerticalPositionAlign,
	FrameWrap,
} from "docx";

const useTemplate1 = (props) => {
	const { data, userData } = props;

	const addressBox = ({ text, height, alignment, frameProps }) =>
		new Paragraph({
			frame: {
				position: {
					x: alignment === "RIGHT" ? 5000 : 0,
					y: 100,
				},
				wrap: FrameWrap.NOT_BESIDE,
				width: 4000,
				height: height || 200,
				anchor: {
					horizontal: FrameAnchorType.MARGIN,
					vertical: FrameAnchorType.TEXT,
				},
				alignment: {
					x: HorizontalPositionAlign.LEFT,
					y: VerticalPositionAlign.TOP,
				},
				...(frameProps || {}),
			},
			style: "regular",
			children: [
				new TextRun(
					text ||
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum alias molestiae? Illum assumenda dolorem reprehenderit obcaecati! Dolor, voluptatum, pariatur sed laboriosam nobis magni quibusdam harum corrupti ab eaque deserunt."
				),
			],
		});

	const decorativeLine = ({ height }) =>
		new Paragraph({
			frame: {
				position: {
					x: 0,
					y: 0,
				},
				wrap: FrameWrap.NOT_BESIDE,
				width: 10000,
				height: height || 1000,
				anchor: {
					horizontal: FrameAnchorType.MARGIN,
					vertical: FrameAnchorType.TEXT,
				},
				alignment: {
					x: HorizontalPositionAlign.LEFT,
					y: VerticalPositionAlign.TOP,
				},
			},
			style: "regular",
			shading: {
				fill: "03296F",
			},
			children: [new TextRun("")],
		});

	const doc = new Document({
		creator: "Coverly",
		title: "My cover Letter",
		styles: {
			paragraphStyles: [
				{
					id: "regular",
					name: "Regular font",
					basedOn: "Normal",
					next: "Normal",
					run: {
						color: "8A8A8A",
						font: "Manrope",
						size: "10pt",
					},
					paragraph: {
						spacing: {
							after: 180,
						},
					},
				},
				{
					id: "large",
					name: "Large font",
					basedOn: "Normal",
					next: "Normal",
					run: {
						color: "333333",
						font: "Manrope",
						size: "24pt",
					},
					paragraph: {
						spacing: {
							before: 120,
							after: 200,
						},
					},
				},
			],
		},
		sections: [
			{
				properties: {},
				children: [
					decorativeLine({ height: 200 }),
					new Paragraph({
						style: "large",
						children: [new TextRun("")],
					}),
					addressBox({
						text: userData.address || "[Company address]",
						alignment: "RIGHT",
					}),
					new Paragraph({
						children: [new TextRun("")],
					}),
					addressBox({
						text: userData.email || "[testemail@coverly.com]",
						alignment: "RIGHT",
					}),
					new Paragraph({
						style: "large",
						children: [new TextRun(userData.name || "[Test Name]")],
					}),
					new Paragraph({
						style: "regular",
						children: [
							new TextRun(new Date().toLocaleDateString()),
						],
					}),
					addressBox({
						text: data.company_address || "[Company address]",
					}),
					new Paragraph({
						style: "regular",
						children: [
							new TextRun(
								`Dear ${data.recipient_name || "[Recipient]"},`
							),
						],
					}),
					new Paragraph({
						style: "regular",
						children: [
							new TextRun(
								`${data.cover_letter || "[Cover letter text]"}`
							),
						],
					}),
					new Paragraph({
						style: "regular",
						children: [new TextRun("Best Regards,")],
					}),
					new Paragraph({
						style: "regular",
						children: [new TextRun(userData.name || "[Your Name]")],
					}),
				],
			},
		],
	});

	return doc;
};

export default useTemplate1;
