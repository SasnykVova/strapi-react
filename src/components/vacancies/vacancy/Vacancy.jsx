import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './Vacancy.module.css';
import { Alert, CircularProgress } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

const Vacancy = () => {

    const [vacancy, setVacancy] = useState({});
    console.log(vacancy)


    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const params = useParams();

    const candidates = 
    vacancy.candidates?.map(candidate => <div key={candidate?.id} className={style.candidateItem}>{candidate?.name}</div>)  

    useEffect(() => {
        setIsLoading(true);
        axios.get(`http://localhost:1337/api/vacancies/${params.id}?populate=*`)
            .then(response => {
                setVacancy(response.data.data);
                console.log(response.data.data);
                setIsLoading(false);
            })
            .catch(error => {
                setError('Помилка завантаження даних!');
                setIsLoading(false);
            });
    }, []);


    return (
        <div className={style.vacancy}>
            <h2 className='title-h2'>{!isLoading ? vacancy.title : <Skeleton variant={'h3'} animation="wave" width={400} height={40} variant="rounded"/>}</h2>
            <h3 className={style.titleList}>Candidates</h3>
            <ul className={style.candidatesList}>
                {isLoading && <CircularProgress />}
                {error && <Alert severity="error">{error}</Alert>}
                {!isLoading && !error && vacancy.candidates?.length > 0
                    ?
                    candidates
                    :
                    !isLoading && !error && vacancy.candidates?.length === 0 ?
                    'Кандидатів на дану вакансію немає.'
                    :
                    ''
                }
            </ul>
        </div>
    );
}

export default Vacancy;
