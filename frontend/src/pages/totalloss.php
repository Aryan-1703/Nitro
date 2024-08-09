<?php
$data = array(
    array(
        "id" => 1,
        "category" => "2023-06-12",
        "Ttype" => "Audi S5",
        "cc" => "Allstate",
        "train" => "John Doe",
        "ocs" => "4Wheels Auto Collision"
    ),
    array(
        "id" => 2,
        "category" => "2023-06-15",
        "Ttype" => "BMW 3 Series",
        "cc" => "Geico",
        "train" => "Jane Smith",
        "ocs" => "ABC Towing"
    ),
    array(
        "id" => 3,
        "category" => "2023-06-18",
        "Ttype" => "Toyota Corolla",
        "cc" => "State Farm",
        "train" => "Mike Johnson",
        "ocs" => "XYZ Recovery"
    ),
    array(
        "id" => 4,
        "category" => "2023-07-01",
        "Ttype" => "Ford F-150",
        "cc" => "Progressive",
        "train" => "Emily Davis",
        "ocs" => "Towing Pro"
    ),
    array(
        "id" => 5,
        "category" => "2023-07-05",
        "Ttype" => "Honda Civic",
        "cc" => "Liberty Mutual",
        "train" => "Chris Brown",
        "ocs" => "4Wheels Auto Collision"
    )
);

echo json_encode(array("data" => $data));
?>