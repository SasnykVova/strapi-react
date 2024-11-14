import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from './Candidates.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Candidates = () => {

    const [candidates, setCandidates] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        axios.get('http://localhost:1337/api/candidates')
            .then(response => {
                setCandidates(response.data.data);
                setIsLoading(false);
                console.log(response.data.data);
            })
            .catch(error => {
                setError('Помилка завантаження даних!');
                setIsLoading(false);
            })
    }, []);

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    return (
        <div className={style.candidates}>
            <h2 className='title-h2'>Candidates</h2>
            {isLoading && <CircularProgress />}
            {error && <Alert severity="error">{error}</Alert>}
            <div className={style.candidatesWrapper}>
                {!isLoading && !error && candidates.length > 0 ?
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="left">Skills</TableCell>
                                    <TableCell align="left">Email</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {candidates.map((candidate) => (
                                    <TableRow
                                        key={candidate.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="left">{candidate.name}</TableCell>
                                        <TableCell align="left">{candidate.resume}</TableCell>
                                        <TableCell align="left">{candidate.email}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    :
                    ''
                }
            </div>
        </div>
    );
}

export default Candidates;
