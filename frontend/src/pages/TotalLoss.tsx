import React, { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net-dt/css/dataTables.dataTables.css";
import "datatables.net";
import "datatables.net-select";
import "datatables.net-buttons";
import "datatables.net-editor";

const TotalLoss: React.FC = () => {
	const [role, setRole] = useState<number>(0);

	useEffect(() => {
		const userRole = 25;
		setRole(userRole);

		const mockData = {
			data: [
				{
					id: 1,
					dol: "2023-06-12",
					vehicle: "Audi S5",
					insurance: "Allstate",
					towDriver: "John Doe",
					company: "4Wheels Auto Collision",
				},
				{
					id: 2,
					dol: "2023-06-15",
					vehicle: "BMW 3 Series",
					insurance: "Geico",
					towDriver: "Jane Smith",
					company: "ABC Towing",
				},
				{
					id: 3,
					dol: "2023-06-18",
					vehicle: "Toyota Corolla",
					insurance: "State Farm",
					towDriver: "Mike Johnson",
					company: "XYZ Recovery",
				},
				{
					id: 4,
					dol: "2023-07-01",
					vehicle: "Ford F-150",
					insurance: "Progressive",
					towDriver: "Emily Davis",
					company: "Towing Pro",
				},
				{
					id: 5,
					dol: "2023-07-05",
					vehicle: "Honda Civic",
					insurance: "Liberty Mutual",
					towDriver: "Chris Brown",
					company: "4Wheels Auto Collision",
				},
			],
		};

		const editor = new $.fn.dataTable.Editor({
			ajax: {
				url: "/path/to/your/opsCat.php",
				type: "POST",
			},
			table: "#lossTable",
			fields: [
				{ label: "Date Of Loss", name: "dol" },
				{ label: "Vehicle", name: "vehicle" },
				{ label: "Insurance", name: "insurance" },
				{ label: "Tow Driver", name: "towDriver" },
				{ label: "Company", name: "company" },
			],
		});

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
				{ data: "id" },
				{ data: "dol" },
				{ data: "vehicle" },
				{ data: "insurance" },
				{ data: "towDriver" },
				{ data: "company" },
			],
			select: true,
			order: [[1, "asc"]],
			buttons:
				role >= 25
					? [
							{
								extend: "create",
								editor: editor,
								text: "New",
							},
							{
								extend: "edit",
								editor: editor,
								text: "Edit",
							},
							{
								extend: "remove",
								editor: editor,
								text: "Delete",
							},
					]
					: [],
		});

		if (role >= 25) {
			table.buttons().container().appendTo("#lossTable_wrapper .col-md-6:eq(0)");
		}

		return () => {
			table.destroy();
		};
	}, [role]);

	return (
		<div className="container-fluid">
			<header className="page-header text-center">
				<h1 className="page-title">Total Loss</h1>
			</header>

			<table id="lossTable" className="table table-striped">
				<thead>
					<tr>
						<th>ID</th>
						<th>Date OF Loss</th>
						<th>Vehicle</th>
						<th>Insurance</th>
						<th>Towed By</th>
						<th>Company</th>
					</tr>
				</thead>
			</table>
		</div>
	);
};

export default TotalLoss;
