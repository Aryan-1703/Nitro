import React, { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net-dt/css/dataTables.dataTables.css";
import "datatables.net";

const TotalLoss: React.FC = () => {
	const [role, setRole] = useState<number>(0);

	useEffect(() => {
		const userRole = parseInt(localStorage.getItem("role") || "0", 10);
		setRole(userRole);

		const table = $("#lossTable").DataTable({
			dom: "lBfrtip",
			ajax: {
				url: "./totalloss.php",
				type: "POST",
			},
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
				{ data: "category" },
				{ data: "Ttype" },
				{
					data: "cc",
					render: function (data) {
						if (data === 1) return "Both";
						if (data === 2) return "BOCC";
						return "YCC";
					},
				},
				{ data: "train" },
				{ data: "ocs" },
			],
			// select: true,
			order: [[1, "asc"]],
		});

		// 	if (role >= 25) {
		// 		const editor = new $.fn.dataTable.Editor({
		// 			ajax: "/path/to/your/opsCat.php",
		// 			table: "#lossTable",
		// 			fields: [
		// 				{
		// 					label: "Category",
		// 					name: "category",
		// 				},
		// 				{
		// 					label: "Type",
		// 					name: "Ctype",
		// 					type: "select",
		// 					placeholderDisabled: false,
		// 					placeholder: "Event Type",
		// 				},
		// 				{
		// 					label: "CC",
		// 					name: "cc",
		// 					type: "select",
		// 				},
		// 				{
		// 					label: "Train Category",
		// 					name: "trainEdit",
		// 					type: "select",
		// 				},
		// 				{
		// 					label: "OCS Category",
		// 					name: "ocsEdit",
		// 					type: "select",
		// 				},
		// 			],
		// 		});

		// 		table.button().add(null, { extend: "create", editor: editor });
		// 		table.button().add(null, { extend: "edit", editor: editor });
		// 		table.button().add(null, { extend: "remove", editor: editor });
		// 	}

		return () => {
			table.destroy(true);
		};
	}, [role]);

	return (
		<div className="container-fluid">
			<header className="page-header text-center">
				<h1 className="page-title">Total Loss</h1>
			</header>

			<div id="phaseTable" className="col-10 mx-auto">
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
		</div>
	);
};

export default TotalLoss;
