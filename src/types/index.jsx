
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout";
import Boards from "../pages/Boards";

const AppRoutes = () => (
	<Routes>
		<Route path="/" element={<Layout />}>
			<Route index element={<Boards />} />
		</Route>
	</Routes>
);

export default AppRoutes;
