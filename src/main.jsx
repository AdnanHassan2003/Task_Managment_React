import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/index.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StyleSheetManager } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Suspense fallback={<div>Loading...</div>}>
		<BrowserRouter>
			<StyleSheetManager shouldForwardProp={(prop) => prop !== "shake"}>
				<AppRoutes />
			</StyleSheetManager>
		</BrowserRouter>
		
	</Suspense>
);
