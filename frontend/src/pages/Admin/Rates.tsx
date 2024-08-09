import React, { useEffect } from "react";
import $ from "jquery";

const Rates = () => {
	useEffect(() => {
		const mockData = {
			data: [
				{
					type: "Towing",
					services: "Basic Tow, towed vehicle up to 4,536 kg GVWR",
					rate_structure: "base rate",
					amount: "$995.00",
				},
				{
					type: "Towing",
					services: "Basic Tow, towed vehicle from 4,536.1 - 11,793 kg GVWR",
					rate_structure: "base rate",
					amount: "$1,495.00",
				},
				{
					type: "Towing",
					services: "Basic Tow, towed vehicle more than 11,793 kg GVWR",
					rate_structure: "base rate",
					amount: "$2,495.00",
				},
				{
					type: "Towing",
					services: "Extended Tow, towed vehicle up to 4,536 kg GVWR",
					rate_structure: "per kilometre",
					amount: "$5.00",
				},
				{
					type: "Towing",
					services: "Extended Tow, towed vehicle between 4,536.1 - 11,793 kg GVWR",
					rate_structure: "per kilometre",
					amount: "$6.00",
				},
				{
					type: "Towing",
					services: "Extended Tow, towed vehicle more than 11,793 kg GVWR",
					rate_structure: "per kilometre",
					amount: "$7.50",
				},
				{
					type: "Towing",
					services: "Standing-by, tow driver",
					rate_structure: "per hour",
					amount: "$150.00",
				},
				{
					type: "Towing",
                    services:"En route travel",
					rate_structure: "per kilometre",
					amount: "$5.00",
				},
				{
					type: "Recovery",
                    services:"Tow Trucks: Rotator boom, 75 tons or higher",
					rate_structure: "per hour",
					amount: "$900.00",
				},
			],
		};
		const table = $("#lossTable").DataTable({
			dom: "Bfrtip", // Add 'B' for Buttons
			data: mockData.data,
			scrollY: "52vh",
			scrollCollapse: true,
			paging: false,
			pageLength: 150,
			lengthMenu: [
				[150, 200, 250, 300, 400, 500, -1],
				[150, 200, 250, 300, 400, 500, "All"],
			],
			columns: [
				{ data: "type" },
				{ data: "services" },
				{ data: "rate_structure" },
				{ data: "amount" },
			],
			select: true,
			// order: [[0, "asc"]],
		});

		return () => {
			table.destroy();
		};
	});

	return (
		<div className="container-fluid">
			<header className="page-header text-center">
				<h1 className="page-title">Rate Sheet</h1>
			</header>

			<table id="lossTable" className="table table-striped">
				<thead>
					<tr>
						<th>Type</th>
						<th>Service</th>
						<th>Base Rates</th>
						<th>Amount</th>
					</tr>
				</thead>
			</table>
		</div>
	);
};

export default Rates;
