import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { Chart } from "react-google-charts";
import TablePagination from "@mui/material/TablePagination";

export default function VideoLibrary(props) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [order, setOrder] = React.useState("desc");
  const [orderBy, setOrderBy] = React.useState("logId");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  useEffect(() => {
    if (searchKeyword !== "") {
      const searchedData = data.filter((log) => {
        return (
          log.message.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          log.level.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          log.escalation.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          log.status.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          log.priority.toLowerCase().includes(searchKeyword.toLowerCase())
        );
      });
      setData(searchedData);
    } else {
      setData(ogData);
    }
  }, [searchKeyword]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const options1 = {
    legend: "none",
    pieHole: 0.4,
    is3D: true,
  };

  const options2 = {
    legend: "none",
    pieHole: 0.4,
    is3D: true,
  };

  const options3 = {
    curveType: "function",
    legend: { position: "bottom" },
  };

  const [ogData, setOgData] = React.useState();
  const [data, setData] = React.useState(() => {
    axios.get("http://localhost:8000/logs/" + props.serverId).then((res) => {
      setData(res.data.logs);
      setOgData(res.data.logs);
    });
  });

  const [chartData, setChartData] = React.useState(() => {
    axios
      .get("http://localhost:8000/servers/graphs/" + props.serverId)
      .then((res) => setChartData(res.data.data));
  });

  useEffect(() => {
    const getLogData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/logs/` + props.serverId
        );
        setData(res.data.logs);
        setOgData(res.data.logs);
      } catch (e) {
        console.log(e);
      }
    };
    const getChartData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/servers/graphs/` + props.serverId
        );
        setChartData(res.data.data);
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getLogData();
    getChartData();
  }, [props.serverId]);

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  return (
    <Grid item container direction="row">
      <Grid item container direction="row" md={12}>
        <Grid
          item
          xs={12}
          style={{
            textAlign: "right",
            height: "30px",
            fontFamily: "Work Sans",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "24px",
            lineHeight: "30px",
            color: "#000000",
            marginTop: "10px",
            marginBottom: "50px",
          }}
        >
          <Paper
            component="form"
            sx={{ p: "2px", display: "flex", alignItems: "right" }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Connections"
              onChange={(e) => setSearchKeyword(e.target.value)}
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
      <TableContainer
        component={Paper}
        style={{
          marginTop: "10px",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 700 }} align="center">
                {"Id"}
              </TableCell>
              <TableCell style={{ fontWeight: 700 }} align="center">
                {"Message"}
              </TableCell>
              <TableCell style={{ fontWeight: 700 }} align="center">
                {"Level"}
              </TableCell>
              <TableCell style={{ fontWeight: 700 }} align="center">
                {"Escalation"}
              </TableCell>
              <TableCell style={{ fontWeight: 700 }} align="center">
                {"Status"}
              </TableCell>
              <TableCell style={{ fontWeight: 700 }} align="center">
                {"Priority"}
              </TableCell>
              <TableCell style={{ fontWeight: 700 }} align="center">
                {"Timestamp"}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              stableSort(data, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{row.logId}</TableCell>
                    <TableCell align="center">{row.message}</TableCell>
                    <TableCell align="center">
                      <span
                        style={{
                          borderRadius: "5px",
                          backgroundColor: row.levelColor,
                          padding: "3px",
                          display: "inline-block",
                          width: "55px",
                          color: "#fff",
                        }}
                      >
                        {row.level}
                      </span>
                    </TableCell>
                    <TableCell align="center">
                      <span
                        style={{
                          borderRadius: "5px",
                          backgroundColor: row.escalationColor,
                          padding: "3px",
                          display: "inline-block",
                          width: "55px",
                          color: "#fff",
                        }}
                      >
                        {row.escalation}
                      </span>
                    </TableCell>
                    <TableCell align="center">
                      <span
                        style={{
                          borderRadius: "5px",
                          backgroundColor:
                            row.status === "On" ? "green" : "red",
                          padding: "3px",
                          display: "inline-block",
                          width: "55px",
                          color: "#fff",
                        }}
                      >
                        {row.status}
                      </span>
                    </TableCell>
                    <TableCell align="center">
                      <span
                        style={{
                          borderRadius: "5px",
                          backgroundColor: row.priorityColor,
                          padding: "3px",
                          display: "inline-block",
                          width: "55px",
                          color: "#fff",
                        }}
                      >
                        {row.priority}
                      </span>
                    </TableCell>
                    <TableCell align="center">{row.Date}</TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data && data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Grid
        item
        container
        md={12}
        direction="row"
        style={{
          marginTop: "25px",
        }}
      >
        <Grid item xs={5}>
          <Chart
            chartType="PieChart"
            width="500px"
            height="500px"
            data={chartData && chartData.pie1}
            options={options1}
          />
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={5}>
          <Chart
            chartType="PieChart"
            width="500px"
            height="500px"
            data={chartData && chartData.pie2}
            options={options2}
          />
        </Grid>
      </Grid>
      <Grid item md={12}>
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={chartData && chartData.pie3}
          options={options3}
        />
      </Grid>
    </Grid>
  );
}
