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
	const addressBox = ({ text, height, alignment, frameProps, props }) =>
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
			...(props || {}),
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
				width: 9120,
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

	const lineBreak = ({ style }) =>
		new Paragraph({
			style: style ? style : "body",
			children: [new TextRun("")],
		});

	const body = (data.cover_letter || "[Test Cover Letter]")
		.trim()
		.split("\n")
		.map(
			(text, index) =>
				new Paragraph({
					style: "body",
					children: [new TextRun(text)],
				})
		);

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
						size: "11pt",
					},
					paragraph: {
						spacing: {
							after: 120,
						},
					},
				},
				{
					id: "body",
					name: "Body font",
					basedOn: "Normal",
					next: "Normal",
					run: {
						color: "333333",
						font: "Manrope",
						size: "14pt",
					},
					paragraph: {
						spacing: {
							after: 120,
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
					addressBox({
						text: `${
							data.address || userData.address || "[Your address]"
						}  ${userData.email || "[testemail@coverly.com]"}`,
						frameProps: {
							wrap: FrameWrap.THROUGH,
						},
					}),
					new Paragraph({
						style: "large",
						children: [new TextRun(userData.name || "[Test Name]")],
						alignment: HorizontalPositionAlign.RIGHT,
					}),
					lineBreak({ style: "body" }),
					decorativeLine({ height: 150 }),
					lineBreak({ style: "large" }),
					new Paragraph({
						style: "body",
						children: [
							new TextRun(
								data.date ||
									userData.date ||
									new Date().toLocaleDateString()
							),
						],
						alignment: HorizontalPositionAlign.LEFT,
					}),
					addressBox({
						props: {
							style: "body",
						},
						text: data.company_address || "[Company address]",
					}),
					...body,
				],
			},
		],
	});

	return doc;
};

export default useTemplate1;
