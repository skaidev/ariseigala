import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styled from "styled-components";
import HTMLFlipBook from "react-pageflip";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfViewer({ file }: { file: string }): JSX.Element {
	// const samplePDF = "https://www.hq.nasa.gov/alsj/a17/A17_FlightPlan.pdf";
	const [numPages, setNumPages] = useState(1);
	const [pageNumber, setPageNumber] = useState(1);
	const [zoom, setZoom] = useState(1);
	const [content_list, setContentList] = useState(false);

	const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
		setNumPages(numPages);
		setPageNumber(1);
	};

	const changePage = (offset: number) => {
		setPageNumber((prevPageNumber) => prevPageNumber + offset);
	};

	const previousPage = () => {
		changePage(-1);
	};

	const nextPage = () => {
		changePage(1);
	};
	const numContents = () => {
		const num_of_content = [];

		if (numPages) {
			for (let index = 1; index <= numPages; index++) {
				num_of_content.push(index);
			}
		}

		return num_of_content;
	};

	return (
		<PDFWrapper>
			{content_list && (
				<div className="cover-dark animate__animated animate__slideInLeft">
					<div className="cover-light overflow-auto animate__animated animate__zoomInRight">
						<div className="container py-4">
							<h3 className="mb-3 fw-bolder d-flex justify-content-between align-items-center">
								<span>Contents</span>
								<button className="btn" onClick={() => setContentList(false)}>
									<i className="fas fa-times fa-2x"></i>
								</button>
							</h3>
							<ul className="list-group">
								{numContents().map((content, i) => (
									<li
										className={`list-group-item d-flex align-items-center border-0 c-pointer ${
											pageNumber == content ? "bg-secondary" : ""
										}`}
										key={i}
										onClick={() => {
											setPageNumber(content);
											setContentList(false);
										}}
									>
										<span className="fw-bold">-</span>
										<p className="m-0 p-0 px-2 flex-fill">
											<b className="d-block text-center fw-bolder fs-5 mb-2">
												A in nunc purus urna nulla eu gravida quisque.{" "}
											</b>
											<span className="float-end pe-5">
												Nisl, ac eget ac nibh. Vel dui auctor ultricies quisque
												a nibh.
											</span>
										</p>
										<span className="fw-bold">{content}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			)}
			<div className="container d-flex mb-4 justify-content-between align-items-center ">
				<button className="btn" onClick={() => setContentList(true)}>
					<i className="fas fa-2x fa-bars"></i>
				</button>
				<div className="d-flex justify-content-between gap-3">
					<button
						className="btn"
						disabled={zoom <= 1}
						onClick={() => setZoom((e) => e - 1)}
					>
						<i className="fas fa-search-minus fa-2x"></i>
					</button>
					<button
						className="btn"
						disabled={zoom > 5}
						onClick={() => setZoom((e) => e + 1)}
					>
						<i className="fas fa-search-plus fa-2x"></i>
					</button>
				</div>
			</div>
			<div className="container pdf-section py-3">
				<div className="pdf-wrapper">
					{/* <Document
						file={file}
						onLoadSuccess={onDocumentLoadSuccess}
						renderMode="canvas"
						className="pdf-main bg-danger p-3"
					>
						<HTMLFlipBook
							width={300}
							height={400}
							className="pdf-flipper"
							size="stretch"
							autoSize={true}
							mobileScrollSupport={true}
							usePortrait={false}
							style={{ background: "black" }}
							showCover={true}
							onFlip={(e) => console.log(e)}
						>
							{numContents().map((e, i) => (
								<div key={i}>
									<Page pageNumber={e} scale={zoom} />
								</div>
							))}
						</HTMLFlipBook>
					</Document> */}
					<Document
						file={file}
						onLoadSuccess={onDocumentLoadSuccess}
						// renderMode="canvas"
						className="pdf-main w-100"
					>
						<HTMLFlipBook
							width={100}
							height={700}
							showCover={true}
							autoSize={true}
							size="stretch"
							className="pdf-flipper"
							mobileScrollSupport={true}
							usePortrait={true}
						>
							{numContents().map((e, i) => (
								<div key={i}>
									<Page pageNumber={e} className="pdf-page" />
								</div>
							))}
						</HTMLFlipBook>
					</Document>
				</div>
			</div>
			{/* <div className="container mb-4">
				<div className="progress mb-3">
					<div
						className="progress-bar-animated bg-info"
						style={{
							width: `${(pageNumber / numPages) * 100}%`,
							transition: ".5s",
						}}
					></div>
				</div>

				<p className="text-end fw-bold mb-3">
					{Math.floor((pageNumber / numPages) * 100)}% read
				</p>

				<div className="d-flex justify-content-center">
					<div className="d-flex gap-3 align-items-center">
						<button
							type="button"
							disabled={pageNumber <= 1}
							onClick={previousPage}
							className="btn "
						>
							<i className="fas fa-2x fa-caret-left"></i>
						</button>
						<p className="m-0">
							Page {pageNumber || (numPages ? 1 : "--")} of
							{numPages || "--"}
						</p>

						<button
							type="button"
							disabled={pageNumber >= numPages}
							onClick={nextPage}
							className="btn"
						>
							<i className="fas fa-2x fa-caret-right"></i>
						</button>
					</div>
				</div>
			</div> */}
		</PDFWrapper>
	);
}

const PDFWrapper = styled.div`
	background-color: yellow;
	min-width: 100%;
	.cover-dark {
		top: 0;
		left: 0;
		width: 100%;
		min-height: 100%;
		position: fixed;
		z-index: 2;
		background: #000000e8;
		overflow: hidden;
		.cover-light {
			width: 80%;
			max-width: 40rem;
			background: white;
			height: 100%;
			position: absolute;
			z-index: 5;
		}
	}
	.pdf-flipper {
		background-color: red;
		width: 100%;
		.pdf-page {
			width: 100%;
		}
	}
	/* .pdf-section {
		.pdf-wrapper {
			.pdf-main {
				min-height: fit-content;
				box-sizing: border-box;
				overflow: auto;
				.pdf-flipper {
					.demoPage {
						width: 50% !important;
						margin: 1px;
					}
				}
			}
		}
	} */
`;
