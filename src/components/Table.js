import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
    Box,
    IconButton,
    Paper, Table,
    TableBody,
    TableCell,
    TableContainer, TableFooter,
    TableHead, TablePagination,
    TableRow,
    useTheme
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";

const DataTable =({rows, columns})=> {
    console.log(rows,columns)
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}
// function TablePaginationActions(props) {
//     const theme = useTheme();
//     const {count, page, rowsPerPage, onPageChange} = props;
//
//     const handleFirstPageButtonClick = (event) => {
//         onPageChange(event, 0);
//     };
//
//     const handleBackButtonClick = (event) => {
//         onPageChange(event, page - 1);
//     };
//
//     const handleNextButtonClick = (event) => {
//         onPageChange(event, page + 1);
//     };
//
//     const handleLastPageButtonClick = (event) => {
//         onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//     };
//
//     return (
//         <Box sx={{flexShrink: 0, ml: 2.5}}>
//
//             <IconButton
//                 onClick={handleBackButtonClick}
//                 disabled={page === 0}
//                 aria-label="previous page"
//             >
//                 {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
//             </IconButton>
//             <IconButton
//                 onClick={handleNextButtonClick}
//                 disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//                 aria-label="next page"
//             >
//                 {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
//             </IconButton>
//
//         </Box>
//     );
// }
// const TableList =({rows,columns})=>{
//     const [page, setPage] = React.useState(0);
//     const [rowsPerPage, setRowsPerPage] = React.useState(5);
//
//     // Avoid a layout jump when reaching the last page with empty rows.
//     const emptyRows =
//         page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
//
//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };
//
//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(parseInt(event.target.value, 10));
//         setPage(0);
//     };
//     return (
//         <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
//                 <TableHead sx={{width:"100%"}}>
//                     <TableRow sx={{width:"100%"}}>
//                         {
//                             columns?.map(el=>{
//                                 return(
//
//                                    <>
//                                        <TableCell component="th" scope="row" xs={{width:el.width}}>
//                                            {el.headerName}
//                                        </TableCell>
//                                    </>
//                                 )
//                             })
//                         }
//
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {(rowsPerPage > 0
//                             ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                             : rows
//                     ).map((row) => {
//
//                         return(
//                            <>
//                                <TableRow key={row.id}>
//
//                                    <TableCell component="th" scope="row">{row.id}</TableCell>
//                                    <TableCell component="th" scope="row">{row.firstName}</TableCell>
//                                    <TableCell component="th" scope="row">{row.typeCredit}</TableCell>
//                                    <TableCell component="th" scope="row">{row.montant}</TableCell>
//                                    <TableCell component="th" scope="row">{row.client}</TableCell>
//                                    <TableCell  scope="row">
//                                        <IconButton aria-label="delete">
//                                            <DeleteIcon />
//                                        </IconButton>
//                                    </TableCell>
//
//                                </TableRow></>
//                                 )}
//                         )
//
//                     }
//
//                     {emptyRows > 0 && (
//                         <TableRow style={{ height: 53 * emptyRows }}>
//                             <TableCell colSpan={6} />
//                         </TableRow>
//                     )}
//                 </TableBody>
//                 <TableFooter>
//                     <TableRow>
//                         <TablePagination
//                             rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//                             colSpan={3}
//                             count={rows.length}
//                             rowsPerPage={rowsPerPage}
//                             page={page}
//                             SelectProps={{
//                                 inputProps: {
//                                     'aria-label': 'rows per page',
//                                 },
//                                 native: true,
//                             }}
//                             onPageChange={handleChangePage}
//                             onRowsPerPageChange={handleChangeRowsPerPage}
//                             ActionsComponent={TablePaginationActions}
//                         />
//                     </TableRow>
//                 </TableFooter>
//             </Table>
//         </TableContainer>)
// }

export default  DataTable