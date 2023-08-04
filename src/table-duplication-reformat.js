export default function () {
    $(document).ready(function () {
        $("table.rsllott.vertical-table").each((i, table) => {
            let row = "";
            const tableRows = $(table).find("tr");
            let tableHeadings = $(table).find("tr th");
            let tableRowsData = tableRows.filter((i, el) =>
                i > 0 ? el : null
            );

            let tableClasses = $(table).attr("class");
            let tableDefaultClasses = ["d-none", "d-md-table"];

            // remove tableDefaultClasses strings from tableClasses string, if exists
            tableDefaultClasses.forEach((el) => {
                if (tableClasses.includes(el)) {
                    tableClasses = tableClasses.replace(el, "");
                    tableClasses;
                }
            });

            const isTableWrapper = $(table).parent().hasClass("table-wrapper");
            const isTableWrapperConnected = $(table)
                .parent()
                .hasClass("connected");

            const tableWrapper = document.createElement("div");

            // -- if tables connected -- wrap many tables in 1 div (table-wrapper)
            if (isTableWrapper) {
                tableWrapper.classList.add("table-wrapper");

                if (isTableWrapperConnected) {
                    tableWrapper.classList.add("connected");
                }
            }

            $(tableRowsData).each(function (i, el) {
                // -- if tables not connected -- wrap each table in an isolated div (table-wrapper)
                if (!isTableWrapper) {
                    tableWrapper = document.createElement("div");
                    tableWrapper.classList.add("table-wrapper");
                }

                const tableRowLen = tableRowsData.length - 1;
                const verticalTable = document.createElement("table");
                tableClasses += " d-md-none";
                tableClasses.split(" ").forEach((el) => {
                    if (el !== "") {
                        verticalTable.classList.add(el.replace(" ", ""));
                    }
                });

                $(tableRowLen).each(function (i) {
                    const tds = $(el).find("td");
                    row = "";

                    $(tds).each((i, el) => {
                        const firstItem = $(el)[0];
                        row +=
                            "<tr>" +
                            "<th>" +
                            $(tableHeadings[i]).html() +
                            "</th>" +
                            "<td>" +
                            $(firstItem).html() +
                            "</td></tr>";
                    });
                });

                $(verticalTable).html(row);
                $(tableWrapper).append(verticalTable);
                $(table).after(tableWrapper);
            });
        });
    });
}
